import { Request, Response } from "express";
import { container } from "tsyringe";
import { Player } from "../../models/Player";
import { FindAllPlayersService } from "../../services/Players/FindAllPlayersController";

class FindAllPlayersController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const findAllPlayersService = container.resolve(FindAllPlayersService);
      const players: Player[] = await findAllPlayersService.execute();

      return res.status(200).json(players);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }
}

export {FindAllPlayersController}
