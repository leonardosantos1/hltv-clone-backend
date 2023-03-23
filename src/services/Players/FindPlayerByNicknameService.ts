import { inject, injectable } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { Player } from "../../models/Player";
import { IPlayerRepository } from "../../repositories/Players/IPlayerRepository";

@injectable()
class FindPlayerByNicknameService {
  constructor(
    @inject("PlayerRepository") private playerRepository: IPlayerRepository
  ) {}

  async execute(nickname: string): Promise<Player> {
    try {

      const player: Player = await this.playerRepository.findByNickname(nickname);
      
      return player;

    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`,400);
    }
  }
}


export {FindPlayerByNicknameService}