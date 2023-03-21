import { Router } from "express";
import { DeletePlayerByIdController } from "../controllers/Players/DeletePlayerByIdController";
import { FindAllPlayersController } from "../controllers/Players/FindAllPlayersController";
import { FindPlayerByIdController} from "../controllers/Players/FindPlayerByIdController";
import { FindPlayerByNicknameController } from "../controllers/Players/FindPlayerByNicknameController";
import { InsertPlayerController } from "../controllers/Players/InsertPlayerController";
import { UpdatePlayerByIdController } from "../controllers/Players/UpdatePlayerByIdController";
import { validatePlayersInsertSchema } from "../middlewares/validatePlayerInsertSchema";
import { validatePlayerNicknameSchema } from "../middlewares/validatePlayerNicknameSchema";
import { validatePlayerParamsId } from "../middlewares/validatePlayerParamsId";

const routerPlayer = Router();

const insertPlayerController = new InsertPlayerController();
const findPlayerByIdController =  new FindPlayerByIdController();
const findAllPlayersController = new FindAllPlayersController();
const findPlayerByNicknameController = new FindPlayerByNicknameController();
const deletePlayerByIdController = new DeletePlayerByIdController();
const updatePlayerByIdController = new UpdatePlayerByIdController();

routerPlayer.get("/:id", validatePlayerParamsId, findPlayerByIdController.handle);
routerPlayer.delete("/:id",deletePlayerByIdController.handle);
routerPlayer.put("/:id",updatePlayerByIdController.handle);

routerPlayer.get("/nickname/:nickname", validatePlayerNicknameSchema,findPlayerByNicknameController.handle);
routerPlayer.get("/", findAllPlayersController.handle);
routerPlayer.post("/", validatePlayersInsertSchema, insertPlayerController.handle);


export {routerPlayer}