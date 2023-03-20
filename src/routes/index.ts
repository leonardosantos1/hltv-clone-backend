import {Router} from "express";
import { routerMacthes } from "./matches.routes";
import { routerPlayer } from "./player.routes";
import { routerTeam } from "./team.routes";

const router = Router();

router.use("/matches", routerMacthes);
router.use("/team", routerTeam);
router.use("/player", routerPlayer)

export { router };
