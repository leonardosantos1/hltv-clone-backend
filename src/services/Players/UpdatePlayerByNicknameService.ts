import { inject, injectable } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { Player } from "../../models/Player";
import { IPlayerRepository } from "../../repositories/Players/IPlayerRepository";

@injectable()
class UpdatePlayerByNicknameService {
  constructor(
    @inject("PlayerRepository") private playerRepository: IPlayerRepository
  ) {}

  async execute(nickname: string, payload: object): Promise<Player> {

    const playerValidationExists = await this.playerRepository.findByNickname(nickname);

    if (Object.keys(playerValidationExists).length === 0)
      throw new Error(`"error": "Player not exists!"`);

    try {
      await this.playerRepository.updateByNickname(nickname, payload);

      const player = await this.playerRepository.findById(playerValidationExists.id);

      return player;
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`, 400);
    }
  }
}

export { UpdatePlayerByNicknameService };
