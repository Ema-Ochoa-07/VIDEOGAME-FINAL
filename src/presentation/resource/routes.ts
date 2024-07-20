import { Router } from "express";
import { ResourceController } from "./controller";
import { ResourceService } from "../services/resource.service";


export class ResourceRoutes{
    static get routes(): Router{
        const router = Router();
    
    
    const resourceService = new ResourceService()
    const controller = new ResourceController(resourceService)
    
    router.post('/', controller.createResource)

    return router
    }
}