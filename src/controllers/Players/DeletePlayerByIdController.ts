import { Request, Response } from "express";
import { container } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { DeletePlayerByIdService } from "../../services/Players/DeletePlayerByIdService";

class DeletePlayerByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deletePlayerByIdService = container.resolve(
        DeletePlayerByIdService
      );
      await deletePlayerByIdService.execute(id);

      return res.status(200).send();
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`,400);
    }
  }
}

export { DeletePlayerByIdController };
