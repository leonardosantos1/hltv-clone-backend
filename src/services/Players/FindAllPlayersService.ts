import { inject, injectable } from "tsyringe";
import { Player } from "../../models/Player";
import { IPlayerRepository } from "../../repositories/Players/IPlayerRepository";


@injectable()
class FindAllPlayersService {
  constructor(
    @inject("PlayerRepository") private playerRepository: IPlayerRepository
  ) {}

  async execute(): Promise<Player[]> {
    try {
      const players = this.playerRepository.findAll();

      return players;
    } catch (err) {
      console.log(err);
      throw new Error(`ERROR! Something wrong happened!`);
    }
  }
}


export {FindAllPlayersService}