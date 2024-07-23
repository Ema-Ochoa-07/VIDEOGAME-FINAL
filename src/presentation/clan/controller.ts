
import { Request, Response } from 'express';
import { CustomError, JoinMember } from '../../domain';
import { ClanService } from '../services/clan.service';
import { CreateClanDTO } from '../../domain/dtos/clan/create-clan.dto';
import { ClanMember } from '../../data';
import {  ClanMemberService } from '../services/clan-member.service';


export class ClanController {

  constructor(
    private readonly clanService: ClanService,
    private readonly clanMemberService: ClanMemberService
  ){}

  private handleError = (error: unknown, res: Response) => {
    if( error instanceof CustomError ) {
      return res.status(error.statusCode).json({ message: error.message })
    }

    console.log(error)
    return res.status(500).json({ message: 'Something went very wrong! 🧨' })
  }

  addMemberToClan = async (req: Request, res: Response) => {
    const { playerReceiverId } = req.params;
    const [ error, joinMemberDTO ] = JoinMember.create(req.body);
    if( error ) return res.status(422).json({ message: error })

    this.clanService.addMemberToClan(+playerReceiverId, joinMemberDTO!)
      .then(resp => res.status(200).json({ message: 'Member added to clan' }))
      .catch(error => this.handleError(error, res))
    
  }

  createClan = async (req:Request, res: Response)=>{
    
    const [error, createClanDTO] = CreateClanDTO.create(req.body)
    if(error) return res.status(422).json({message:'Internal server Error'})

    this.clanService.createClan(createClanDTO!)

    .then(clan => {
      return res.status(201).json(clan)
    })
    .catch(error => this.handleError(error, res))
  }

  
  findClanByMember = async (req: Request, res: Response) =>{
    
    const { id } = req.params
    if(!id) return res.status(400).json({message: 'El id no es un número'})

    this.clanMemberService.findClanByIdMember(+id)
    .then(clanMember =>{
      return res.status(200).json(clanMember)
    })
    .catch(error => this.handleError(error, res))
  }

}