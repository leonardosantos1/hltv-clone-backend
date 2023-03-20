import { Router } from "express";
import { FindTeamController } from "../controllers/Teams/FindTeamController";

const routerTeam = Router();
const findTeamController = new FindTeamController();

routerTeam.get("/", findTeamController.handle);

export { routerTeam };
