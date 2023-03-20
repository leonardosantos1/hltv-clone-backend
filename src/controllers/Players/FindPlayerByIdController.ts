import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindPlayerByIdService } from "../../services/Players/FindPlayerByIdService";

class FindPlayerByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const findPlayerByIdService = container.resolve(FindPlayerByIdService);

      const player = await findPlayerByIdService.execute(req.params.id);

      return res.status(200).json(player);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
  }
}

export { FindPlayerByIdController };
