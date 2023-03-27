import { inject, injectable } from "tsyringe";
import { ApplicationError } from "../../error/ApplicationError";
import { IPlayerRepository } from "../../repositories/Players/IPlayerRepository";


@injectable()
class DeletePlayerByNicknameService {
  constructor(
    @inject("PlayerRepository") private playerRepository: IPlayerRepository
  ) {}

  async execute(nickname: string): Promise<void> {
    try {
      await this.playerRepository.deleteByNickname(nickname);
    } catch (err) {
      console.log(err);
      throw new ApplicationError(`ERROR! Something wrong happened!`, 400);
    }
  }
}

export { DeletePlayerByNicknameService };
