import { Request, Response } from "express";
import { container } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { DeletePlayerByNicknameService } from "../../services/Players/DeletePlayerByNicknameService";

class DeletePlayerByNicknameController {
  async handle(req: Request, res: Response): Promise<Response>  {
    try {
      const { nickname } = req.params;
      const deletePlayerByNicknameService = container.resolve(
        DeletePlayerByNicknameService
      );
      await deletePlayerByNicknameService.execute(nickname);

      return res.status(200).send();
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`, 400);
    }
  }
}

export { DeletePlayerByNicknameController };
