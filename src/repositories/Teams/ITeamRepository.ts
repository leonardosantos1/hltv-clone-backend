import { Team } from "../../models/Team";

interface ITeamRepository {
  insert(team: Team): Promise<void>;
  findById(id: string): Promise<Team>;
  findByName(name: string): Promise<Team>;
  findAll(): Promise<Team[]>;
  delete(id: string): Promise<void>;
  update(id: string): Promise<Team>;
}

export { ITeamRepository };
