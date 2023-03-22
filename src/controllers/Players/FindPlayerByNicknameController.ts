import { Request, Response } from "express";
import { container } from "tsyringe";
import { Player } from "../../models/Player";
import { FindPlayerByNicknameService } from "../../services/Players/FindPlayerByNicknameService";

class FindPlayerByNicknameController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const findPlayerByNicknameService = container.resolve(
        FindPlayerByNicknameService
      );

      const player: Player = await findPlayerByNicknameService.execute(
        req.params.nickname
      );

      return res.status(200).json(player);
    } catch (err) {
      console.log(err);
      return res.status(400).json(`ERROR! Something wrong happened!`);
    }
  }
}

export { FindPlayerByNicknameController };
