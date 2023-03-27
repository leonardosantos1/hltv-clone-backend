import { Request, Response } from "express";
import { container } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { UpdatePlayerByIdService } from "../../services/Players/UpdatePlayerByIdService";

class UpdatePlayerByIdController {
  async handle(req: Request, res: Response) {
    try {
      const updatePlayerByIdService = container.resolve(
        UpdatePlayerByIdService
      );
      const player = await updatePlayerByIdService.execute(
        req.params.id,
        req.body
      );

      return res.status(200).json( player );
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`,400);

    }
  }
}

export { UpdatePlayerByIdController };
