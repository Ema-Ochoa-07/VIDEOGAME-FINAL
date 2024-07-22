import { Request, Response } from "express";
import { ConstructionService } from "../services/construction.service";
import { CustomError } from "../../domain";


export class ConstructionController{

    constructor(
        private readonly constructionService: ConstructionService
    ){}

    private handleError = (error: unknown, res: Response) => {
        if( error instanceof CustomError ) {
          return res.status(error.statusCode).json({ message: error.message })
        }
    
        console.log(error)
        return res.status(500).json({ message: 'Something went very wrong! 🧨' })
      }

    getConstructions = async(req: Request, res:Response) =>{
        this.constructionService.findConstructions()
        .then(construction => {
            return res.status(200).json(construction)
        })
        .catch(error => this.handleError(error, res))
    }

}