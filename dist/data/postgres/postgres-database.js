"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDatabase = void 0;
const typeorm_1 = require("typeorm");
const user_model_1 = require("./models/user.model");
const player_model_1 = require("./models/player.model");
const clanMember_model_1 = require("./models/clanMember.model");
const clans_model_1 = require("./models/clans.model");
const constructions_model_1 = require("./models/constructions.model");
const inventory_model_1 = require("./models/inventory.model");
const item_model_1 = require("./models/item.model");
const questPlayer_model_1 = require("./models/questPlayer.model");
const quest_model_1 = require("./models/quest.model");
const resource_model_1 = require("./models/resource.model");
const inventoryItem_model_1 = require("./models/inventoryItem.model");
const inventoryResource_model_1 = require("./models/inventoryResource.model");
class PostgresDatabase {
    constructor(options) {
        this.datasource = new typeorm_1.DataSource({
            type: 'postgres',
            host: options.host,
            port: options.port,
            username: options.username,
            password: options.password,
            database: options.database,
            entities: [user_model_1.User, player_model_1.Player, clanMember_model_1.ClanMember, clans_model_1.Clan, constructions_model_1.Construction, inventory_model_1.Inventory, item_model_1.Item, questPlayer_model_1.Quest_player, quest_model_1.Quest, resource_model_1.Resource, inventoryItem_model_1.Inventory_item, inventoryResource_model_1.Inventory_resource],
            synchronize: true,
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.datasource.initialize();
                console.log('Connected to database 😃');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.PostgresDatabase = PostgresDatabase;
