import { inject, injectable } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { Player } from "../../models/Player";
import { IPlayerRepository } from "../../repositories/Players/IPlayerRepository";

@injectable()
class InsertPlayerService {
  constructor(
    @inject("PlayerRepository") private playerRepository: IPlayerRepository
  ) {}

  async execute(player: Player): Promise<void> {
    try {
      const playerValidationExists = await this.playerRepository.findByNickname(
        player.nickname
      );

      if (Object.keys(playerValidationExists).length != 0)
        throw new Error(`"error": "Player already exists!"`);

      await this.playerRepository.insert(player);
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`,400);
    }
  }
}

export { InsertPlayerService };
