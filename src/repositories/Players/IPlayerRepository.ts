import { Player } from "../../models/Player";

interface IPlayerRepository {
  insert(player: Player): Promise<void>;
  findById(id: string): Promise<Player>;
  findByNickname(nickname: string): Promise<Player>;
  findAll(): Promise<Player[]>;
  deleteById(id: string): Promise<void>;
  updateById(id: string,payload:object): Promise<void>;
}

export { IPlayerRepository };
