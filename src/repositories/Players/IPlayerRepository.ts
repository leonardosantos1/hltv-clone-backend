import { Player } from "../../models/Player";

interface IPlayerRepository {
  insert(player: Player): Promise<void>;
  findById(id: string): Promise<Player>;
  findByNickname(nickname: string): Promise<Player>;
  findAll(): Promise<Player[]>;
  deleteById(id: string): Promise<void>;
  update(id: string): Promise<Player>;
}

export { IPlayerRepository };
