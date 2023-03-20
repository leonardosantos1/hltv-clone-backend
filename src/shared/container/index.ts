import {container} from "tsyringe";
import { IPlayerRepository } from "../../repositories/Players/IPlayerRepository";
import { PlayerRepository } from "../../repositories/Players/PlayerRepository";
import { ITeamRepository } from "../../repositories/Teams/ITeamRepository";
import { TeamRepository } from "../../repositories/Teams/TeamRepository";


container.registerSingleton<ITeamRepository>(
    "TeamRepository",
    TeamRepository
)

container.registerSingleton<IPlayerRepository>(
    "PlayerRepository",
    PlayerRepository
)