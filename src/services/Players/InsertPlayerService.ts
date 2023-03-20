import { inject, injectable } from "tsyringe";
import { Player } from "../../models/Player";
import { IPlayerRepository } from "../../repositories/Players/IPlayerRepository";

@injectable()
class InsertPlayerService {
  constructor(
    @inject("PlayerRepository") private playerRepository: IPlayerRepository
  ) {}

  async execute(player: Player): Promise<void> {
    try {
      await this.playerRepository.insert(player);
    } catch (err) {
      console.log(err);
      throw new Error("err");
    }
  }
}

export { InsertPlayerService };
