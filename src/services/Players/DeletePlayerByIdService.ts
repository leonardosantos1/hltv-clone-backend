import { inject, injectable } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { IPlayerRepository } from "../../repositories/Players/IPlayerRepository";


@injectable()
class DeletePlayerByIdService {
  constructor(
    @inject("PlayerRepository") private playerRepository: IPlayerRepository
  ) {}

  async execute(id: string): Promise<void> {
    try {
      await this.playerRepository.deleteById(id);
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`, 400);
    }
  }
}

export { DeletePlayerByIdService };
