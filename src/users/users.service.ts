import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) public repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }

  findOne(id: number) {
    // We can use findOne({ ... }) with an object in which we use some search criteria
    // example: find the first user with a particular email: this.repo.findOne({email: 'asdf@asdf.com'})
    return this.repo.findOne(id);
  }

  find(email: string) {
    // This is the same like: this.repo.find({ email: email })
    return this.repo.find({ email });
  }

  update() {}

  remove() {}
}
