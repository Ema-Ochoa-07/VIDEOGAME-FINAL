import { Player } from "../../data";
import { CustomError } from "../../domain";



export class QuestPlayerService{

    async findQuestByIdPlayer(idPlayer: number){
        
        try {
            
            const player = await Player.findOne({
                where:{
                    id: idPlayer
                },
                
                relations: ['quest_players'],
            })
            
            if(!player) throw CustomError.notFound('Player not found')
            
            const questPlayer = player.quest_players
            return questPlayer

        } catch (error) {
            throw CustomError.internalServer('Internal server Error 🧨')
        }
    }
    
}