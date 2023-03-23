import { knex } from "../../config/pg-knex/database";
import { v4 as uuidV4 } from "uuid";
import { Player } from "../../models/Player";
import { IPlayerRepository } from "./IPlayerRepository";
import { ApplicationError } from "../../error/ApplicationError";

class PlayerRepository implements IPlayerRepository {
  async insert({
    nickname,
    name,
    nationality,
    is_coach,
    title_id,
    age,
  }: Player): Promise<void> {
    try {
      await knex("players").insert({
        id: uuidV4(),
        nickname,
        name,
        nationality,
        is_coach,
        title_id,
        age,
      });
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`,400);
    }
  }

  async findById(id: string): Promise<Player> {
    try {
      const player: Player = await knex("players")
        .where({ id })
        .select(
          "id",
          "nickname",
          "name",
          "nationality",
          "is_coach",
          "title_id",
          "age"
        );

      return player;
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`,400);
    }
  }

  async findByNickname(nickname: string): Promise<Player> {
    try {
      const player: Player = await knex("players")
        .where({ nickname })
        .select(
          "id",
          "nickname",
          "name",
          "nationality",
          "is_coach",
          "title_id",
          "age"
        );

      return player;
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`,400);
    }
  }

  async findAll(): Promise<Player[]> {
    try {
      const players: Player[] = await knex("players").select("*");
      return players;
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`,500);
    }
  }

  async deleteById(id: string): Promise<void> {
    try {
      await knex("players").where({ id }).del();
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`,400);
    }
  }

  async updateById(id: string,payload:object): Promise<void> {
    
      try{

        await knex("players").where({id}).update(payload);

      }catch(err){
        console.log(err);
        throw new ApplicationError(`ERROR! Something wrong happened!`,400);
      }

  }
}

export { PlayerRepository };
