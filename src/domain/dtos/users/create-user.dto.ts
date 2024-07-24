import { regularExps } from "../../../config";


export class CreateUserDTO {
  private constructor(
    public readonly username: string,
    public readonly email: string,
    public readonly password: string
  ){}

 
  static create( object: { [key : string] : any } ): [string?, CreateUserDTO?] {
    const { email, password, username } = object;

    if( !username ) return ['Missing username']
    if( !email ) return ['Missing email']
    if( !password ) return ['Missing password']

    if(!regularExps.email.test(email)) return ['Invalid Email']
    if(!regularExps.password.test(password)) return  ['The password must be at least 10 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character']

    return [undefined, new CreateUserDTO(username, email, password)]
  }
}
