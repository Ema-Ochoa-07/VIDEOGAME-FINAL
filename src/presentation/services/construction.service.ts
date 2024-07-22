import { Construction, Player } from "../../data";
import { CustomError } from "../../domain";


export class ConstructionService{


    async findConstructions(){
        try {
            return await Construction.find()
        } catch (error) {
            throw CustomError.internalServer('Internal server Error🧨')
        }
    }


    async findConstructionbyIdPlayer(idPlayer: number){
        try {
            const player = await Player.findOne({
                where: {
                    id: idPlayer
                },
                relations: ['constructions']
            })
            if(!player) throw CustomError.notFound('Player not found')
            
            const construction = player.constructions
            return construction
            
        } catch (error) {
            throw CustomError.internalServer('Internal server Error 🧨')
        }
    }

}