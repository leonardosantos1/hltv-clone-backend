import { Router } from "express";
import { DeletePlayerByIdController } from "../controllers/Players/DeletePlayerByIdController";
import { DeletePlayerByNicknameController } from "../controllers/Players/DeletePlayerByNicknameController";
import { FindAllPlayersController } from "../controllers/Players/FindAllPlayersController";
import { FindPlayerByIdController } from "../controllers/Players/FindPlayerByIdController";
import { FindPlayerByNicknameController } from "../controllers/Players/FindPlayerByNicknameController";
import { InsertPlayerController } from "../controllers/Players/InsertPlayerController";
import { UpdatePlayerByIdController } from "../controllers/Players/UpdatePlayerByIdController";
import { UpdatePlayerByNicknameController } from "../controllers/Players/UpdatePlayerByNicknameController";
import { validatePlayersInsertSchema } from "../middlewares/validatePlayerInsertSchema";
import { validatePlayerNicknameSchema } from "../middlewares/validatePlayerNicknameSchema";
import { validatePlayerParamsId } from "../middlewares/validatePlayerParamsId";
import { validatePlayerUpdateSchema } from "../middlewares/validatePlayerUpdateSchema";
import { validateTokenJwt } from "../middlewares/validateTokenJwt";

const routerPlayer = Router();

const insertPlayerController = new InsertPlayerController();
const findPlayerByIdController = new FindPlayerByIdController();
const findAllPlayersController = new FindAllPlayersController();
const findPlayerByNicknameController = new FindPlayerByNicknameController();
const deletePlayerByIdController = new DeletePlayerByIdController();
const deletePlayerByNicknameController = new DeletePlayerByNicknameController();
const updatePlayerByIdController = new UpdatePlayerByIdController();
const updatePlayerByNicknameController =  new UpdatePlayerByNicknameController();

routerPlayer.get(
  "/:id",
  validatePlayerParamsId,
  findPlayerByIdController.handle
);
routerPlayer.delete(
  "/:id",
  validateTokenJwt,
  validatePlayerParamsId,
  deletePlayerByIdController.handle
);
routerPlayer.delete(
  "/nickname/:nickname",
  validateTokenJwt,
  validatePlayerNicknameSchema,
  deletePlayerByNicknameController.handle
);
routerPlayer.put(
  "/:id",
  validateTokenJwt,
  validatePlayerParamsId,
  validatePlayerUpdateSchema,
  updatePlayerByIdController.handle
);

routerPlayer.put(
  "/nickname/:nickname",
  validateTokenJwt,
  validatePlayerNicknameSchema,
  validatePlayerUpdateSchema,
  updatePlayerByNicknameController.handle
);
routerPlayer.get(
  "/nickname/:nickname",
  validatePlayerNicknameSchema,
  findPlayerByNicknameController.handle
);
routerPlayer.get("/", findAllPlayersController.handle);

routerPlayer.post(
  "/",
  validatePlayersInsertSchema,
  insertPlayerController.handle
);

export { routerPlayer };
