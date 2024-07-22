

import { Router } from 'express';
import { PlayerController } from './controller';
import { UserService } from '../services/user.service';
import { PlayerService } from '../services/player.service';
import { InventoryService } from '../services/inventory.service';
import { ItemService } from '../services/item.service';
import { ResourceService } from '../services/resource.service';
import { ConstructionService } from '../services/construction.service';


export class PlayerRoutes {
  
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const playerService = new PlayerService(userService);
    const itemService = new ItemService();
    const resourceService = new ResourceService();
    const inventoryService = new InventoryService(itemService, resourceService);
    const constructionService = new ConstructionService()
    const playerController = new PlayerController(playerService, inventoryService, constructionService)

    router.post('/', playerController.createPlayer)
    router.get('/:id', playerController.findOnePlayer)

    router.post('/:id/invetory/items', playerController.addItemToInventory)
    router.get('/:id/inventory', playerController.getInventoryByPlayerId)
    router.get('/:id/constructions',playerController.getConstructionByIdPlayer)

    return router;
  }

}

