
import { Request, Response } from 'express';
import { AddItemToIventory, CreatePlayerDTO, CustomError } from '../../domain';
import { PlayerService } from '../services/player.service';
import { InventoryService } from '../services/inventory.service';
import { ConstructionService } from '../services/construction.service';
import { QuestPlayerService } from '../services/quest-Player.service';



export class PlayerController {

  constructor(
    private readonly playerService: PlayerService,
    private readonly inventoryService: InventoryService,
    private readonly constructionService: ConstructionService,
    private readonly questPlayerService: QuestPlayerService
  ){}

  private handleError = (error: unknown, res: Response) => {
    if( error instanceof CustomError ) {
      return res.status(error.statusCode).json({ message: error.message })
    }

    console.log(error)
    return res.status(500).json({ message: 'Something went very wrong! 🧨' })
  }

  createPlayer = async (req: Request, res: Response) => {
    const [ error, createPlayerDTO ] = CreatePlayerDTO.create(req.body);
    if( error ) return res.status(422).json({ message: error })
    
    const sessionUserId = 1; // esto lo deberan sacar de la req.body.sessionUser

    this.playerService.createPlayer(createPlayerDTO!, sessionUserId)
      .then(player  => res.status(201).json(player))
      .catch(error => this.handleError(error, res))
  }

  findOnePlayer = async (req: Request, res: Response) => {
    const { id } = req.params;

    this.playerService.findOnePlayer(+id)
      .then(player => res.status(200).json(player))
      .catch(error => this.handleError(error, res))
  }


  addItemToInventory = async (req: Request, res: Response) => {
    const { id: playerId } = req.params; //id del player
    const [error, addItemToIventoryDTO] = AddItemToIventory.create(req.body);
    if( error ) return res.status(422).json({ message: error })

    this.inventoryService.addItemToInventory(+playerId, addItemToIventoryDTO!)
      .then((resp) => res.status(200).json(resp))
      .catch(error => this.handleError(error, res))
  }



  getInventoryByPlayerId = async (req: Request, res: Response) =>{    

    const { id } = req.params
    if(isNaN(+id)){
      return res.status(400).json({ message:'EL id debe ser un número' })
  }
    this.inventoryService.findOneInventoryByPlayerId(+id)

    .then(inventory => {
      return res.status(200).json(inventory)
    })
    .catch((error) => this.handleError(error, res))
    
  }

  getConstructionByIdPlayer = async(req:Request, res: Response) =>{
    const { id } = req.params
    if(isNaN(+id)){
        return res.status(400).json({message:'El id no es un número'})
    }
    this.constructionService.findConstructionbyIdPlayer(+id)
    .then(construction =>{
        return res.status(200).json(construction)
    })
    .catch(error => this.handleError(error, res))
}


  findQuestByIdPLayer = async (req:Request, res: Response) => {
    const { id } =  req.params
    if(isNaN(+id)){
      return res.status(400).json({message:'El id no es un número'})
    }

    this.questPlayerService.findQuestByIdPlayer(+id)
    .then(quest => {
      return res.status(200).json(quest)
    })    
    .catch(error => this.handleError(error, res))

  }
}