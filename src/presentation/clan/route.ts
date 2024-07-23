

import { Router } from 'express';
import { ClanController } from './controller';
import { ClanService } from '../services/clan.service';
import { PlayerService } from '../services/player.service';
import { UserService } from '../services/user.service';
import { ClanMemberService } from '../services/clan-member.service';


export class ClanRoutes {
  
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const playerService = new PlayerService(userService);
    const clanService = new ClanService(playerService);
    const clanMemberService = new ClanMemberService()
    const controller = new ClanController(clanService, clanMemberService);

    router.post('/:playerReceiverId/join', controller.addMemberToClan)
    router.post('/', controller.createClan)
    router.get('/:id/members', controller.findClanByMember)

    return router;
  }

}

