import { Router } from "express";
import { ConstructionController } from "./controller";
import { ConstructionService } from "../services/construction.service";

export class ConstructionRoutes{
    
    static get routes(): Router{
        const router = Router()

    const constructionService = new ConstructionService
    const controller = new ConstructionController(constructionService)

    router.get('/', controller.getConstructions)

        return router

    }
}