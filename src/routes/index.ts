import {Router} from "express";
import { routerLogin } from "./login.routes";
import { routerMacthes } from "./matches.routes";
import { routerPlayer } from "./player.routes";
import { routerTeam } from "./team.routes";

const router = Router();

router.use("/matches", routerMacthes);
router.use("/team", routerTeam);
router.use("/player", routerPlayer);
router.use("/login",routerLogin);

export { router };
