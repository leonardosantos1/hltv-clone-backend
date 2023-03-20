import { Team } from "../../models/Team";
import { ITeamRepository } from "./ITeamRepository";

class TeamRepository implements ITeamRepository {
  public static array: Team[];

  async findByName(name: string): Promise<Team> {
    throw new Error("Method not implemented.");
  }

  async insert(team: Team): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<Team> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<Team[]> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async update(id: string): Promise<Team> {
    throw new Error("Method not implemented.");
  }
}

export { TeamRepository };
