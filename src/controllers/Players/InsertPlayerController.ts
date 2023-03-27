import { Request, Response } from "express";
import { container } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { InsertPlayerService } from "../../services/Players/InsertPlayerService";

class InsertPlayerController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const insertPlayerService = container.resolve(InsertPlayerService);

      await insertPlayerService.execute(req.body);

      return res.status(201).send();
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened! path:InsertPlayerController`,400);

    }
  }
}

export { InsertPlayerController };
