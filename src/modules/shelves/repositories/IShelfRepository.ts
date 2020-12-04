import CreateShelfDTO from "../dtos/CreateShelfDTO";
import Shelf from "../infra/typeorm/entities/Shelf";

export default interface IShelfRepository {
  findAll(): Promise<Shelf[]>;
  findById(id: number): Promise<Shelf | undefined>;
  create(data: CreateShelfDTO): Promise<Shelf>;
}
