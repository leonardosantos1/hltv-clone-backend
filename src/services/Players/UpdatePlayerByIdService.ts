import { inject, injectable } from "tsyringe";
import { up } from "../../migrations/20230314122341_create-titles-schema";
import { Player } from "../../models/Player";
import { IPlayerRepository } from "../../repositories/Players/IPlayerRepository";

@injectable()
class UpdatePlayerByIdService {
  constructor(
    @inject("PlayerRepository") private playerRepository: IPlayerRepository
  ) {}

  async execute(id: string, payload: object): Promise<Player> {
    
    const playerValidationExists = await this.playerRepository.findById(id);

    if (Object.keys(playerValidationExists).length === 0) throw new Error(`"error": "Player not exists!"`);

    try {
      await this.playerRepository.updateById(id, payload);
      const player: Player = await this.playerRepository.findById(id);

      return player;
    } catch (err) {
      console.log(err);
      throw new Error(`ERROR! Something wrong happened!`);
    }
  }
}

export { UpdatePlayerByIdService };
