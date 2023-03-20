import { knex } from "../../config/pg-knex/knexfile";
import { v4 as uuidV4 } from "uuid";
import { Player } from "../../models/Player";
import { IPlayerRepository } from "./IPlayerRepository";

class PlayerRepository implements IPlayerRepository {
  async insert({ nickname, is_coach, title_id, age }: Player): Promise<void> {
    try {
      await knex("players").insert({
        id: uuidV4(),
        nickname,
        is_coach,
        title_id,
        age,
      });
    } catch (err) {
      console.log(err);
      throw new Error("err");
    }
  }

  async findById(id: string): Promise<Player> {
    try {
      const player: Player = await knex("players")
        .where({id})
        .select("id", "nickname", "is_coach", "title_id", "age");

      return player;
    } catch (err) {
      console.log(err);
      throw new Error(`error: ${err}`);
    }
  }

  async findByNickname(nickname: string): Promise<Player> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<Player[]> {
    try {
      const players: Player[] = await knex("players").select("*");
      return players;
    } catch (err) {
      console.log(err);
      throw new Error(`error:${err}`);
    }
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async update(id: string): Promise<Player> {
    throw new Error("Method not implemented.");
  }
}

export { PlayerRepository };
