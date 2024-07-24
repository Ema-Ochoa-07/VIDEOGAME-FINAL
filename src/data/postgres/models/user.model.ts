import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Player } from './player.model';


export enum UserRole{
  ADMIN = 'ADMIN',
  INVITED = 'INVITED'
}

export enum UserStatus{
  ACTIVE = 'ACTVE',
  INACTIVE = 'INACTIVE'
}


@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 80,
    unique: true,
    nullable: false,
  })
  username: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  password: string;

  @Column('varchar', {
    length: 120,
    unique: true,
    nullable: false,
  })
  email: string;


  @Column('enum',{
   enum: UserRole,
   default: UserRole.INVITED
  })
  role: UserRole


  @Column('enum',{
   enum: UserStatus,
   default: UserStatus.ACTIVE
  })
  status: UserStatus


  @OneToMany(() => Player, (player) => player.user)
  players: Player[];

  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;
}