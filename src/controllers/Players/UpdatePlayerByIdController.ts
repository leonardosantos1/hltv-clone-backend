import { Request, Response } from "express";
import { container } from "tsyringe";
import { up } from "../../migrations/20230314122341_create-titles-schema";
import { UpdatePlayerByIdService } from "../../services/Players/UpdatePlayerByIdService";

class UpdatePlayerByIdController {
  async handle(req: Request, res: Response) {
    
    const updatePlayerByIdService = container.resolve(UpdatePlayerByIdService);
    const player = await updatePlayerByIdService.execute(req.params.id, req.body);

    return res.status(200).json({player});
  }
}

export { UpdatePlayerByIdController };
