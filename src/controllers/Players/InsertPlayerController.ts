import { Request, Response } from "express";
import { container } from "tsyringe";
import { InsertPlayerService } from "../../services/Players/InsertPlayerService";

class InsertPlayerController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const insertPlayerService = container.resolve(InsertPlayerService);
      await insertPlayerService.execute(req.body);

      return res.status(201).send();
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
}

export { InsertPlayerController };
