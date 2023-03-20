import { Router } from "express";
import { FindAllPlayersController } from "../controllers/Players/FindAllPlayersController";
import { FindPlayerByIdController} from "../controllers/Players/FindPlayerByIdController";
import { InsertPlayerController } from "../controllers/Players/InsertPlayerController";
import { validatePlayersInsertSchema } from "../middlewares/validatePlayerInsertSchema";
import { validatePlayerParamsId } from "../middlewares/validatePlayerParamsId";

const routerPlayer = Router();

const insertPlayerController = new InsertPlayerController();
const findPlayerByIdController =  new FindPlayerByIdController();
const findAllPlayersController = new FindAllPlayersController();

routerPlayer.get("/:id",validatePlayerParamsId,findPlayerByIdController.handle);
routerPlayer.get("/",findAllPlayersController.handle);

routerPlayer.post(
  "/",
  validatePlayersInsertSchema,
  insertPlayerController.handle
);


export {routerPlayer}