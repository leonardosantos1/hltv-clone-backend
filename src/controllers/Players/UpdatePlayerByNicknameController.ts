import { Request, Response } from "express";
import { container } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { Player } from "../../models/Player";
import { UpdatePlayerByNicknameService } from "../../services/Players/UpdatePlayerByNicknameService";

class UpdatePlayerByNicknameController {
  async handle(req: Request, res: Response) {
    try {
      const updatePlayerByNicknameService = container.resolve(
        UpdatePlayerByNicknameService
      );
      const player:Player = await updatePlayerByNicknameService.execute(
        req.params.nickname,
        req.body
      );

      return res.status(200).json(player);
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`,400);

    }
  }
}

export { UpdatePlayerByNicknameController };
