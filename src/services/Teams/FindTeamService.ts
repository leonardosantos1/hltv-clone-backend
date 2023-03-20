import { inject, injectable } from "tsyringe";
import { Team } from "../../models/Team";
import { ITeamRepository } from "../../repositories/Teams/ITeamRepository";

@injectable()
class FindTeamService {
  constructor(
    @inject("TeamRepository")
    private teamRepository: ITeamRepository
  ) {}

  async execute():Promise<Team []> {
    try {
      const teams = await this.teamRepository.findAll();
      return teams;
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }
}

export { FindTeamService }
