import { Clan } from "../../data"
import { CustomError } from "../../domain"


export class ClanMemberService{

    async findClanByIdMember(idClan: number){
      try {
        const clan = await Clan.findOne({
            where: {
                id: idClan
            },
            relations: ['clanMembers']
        })
        if(!clan) throw CustomError.notFound('Player not found')
        
        const clanMember = clan.clanMembers
        return clanMember
        
    } catch (error) {
        throw CustomError.internalServer('Internal server Error 🧨')
    }
      }
}