import { inject, injectable } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { PlayerDTO } from "../../models/dtos/PlayerDTO";
import { IPlayerRepository } from "../../repositories/Players/IPlayerRepository";

@injectable()
class InsertPlayerService {
  constructor(
    @inject("PlayerRepository") private playerRepository: IPlayerRepository
  ) {}

  async execute(player: PlayerDTO): Promise<void> {
    try {
      const playerValidationExists = await this.playerRepository.findByNickname(
        player.nickname
      );

      if (playerValidationExists)
        throw new Error(`"error": "Player already exists!"`);

      await this.playerRepository.insert(player);
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened! path:InsertPlayerService`,400);
    }
  }
}

export { InsertPlayerService };
