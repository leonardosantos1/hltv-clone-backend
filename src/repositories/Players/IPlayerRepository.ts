import { PlayerDTO } from "../../models/dtos/PlayerDTO";
import { Player } from "../../models/Player";

interface IPlayerRepository {
  insert(player: PlayerDTO): Promise<void>;
  findById(id: string): Promise<Player>;
  findByNickname(nickname: string): Promise<Player>;
  findAll(): Promise<Player[]>;
  deleteById(id: string): Promise<void>;
  deleteByNickname(nickname: string): Promise<void>;
  updateById(id: string, payload: object): Promise<void>;
  updateByNickname(nickname: string, payload: object): Promise<void>;

}

export { IPlayerRepository };
