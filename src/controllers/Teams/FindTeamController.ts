import { container } from "tsyringe";
import { FindTeamService } from "../../services/Teams/FindTeamService";
import { Request, Response } from "express";

class FindTeamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const findTeamService = container.resolve(FindTeamService);

    const teams = await findTeamService.execute();

    return res.status(200).json(teams);
  }
}

export { FindTeamController };
