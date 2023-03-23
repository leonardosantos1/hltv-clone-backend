import { Request, Response } from "express";
import { container } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { FindPlayerByIdService } from "../../services/Players/FindPlayerByIdService";

class FindPlayerByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const findPlayerByIdService = container.resolve(FindPlayerByIdService);

      const player = await findPlayerByIdService.execute(req.params.id);

      return res.status(200).json(player);
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`,400);

    }
  }
}

export { FindPlayerByIdController };
