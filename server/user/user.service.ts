import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>
	) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		const createdUser = this.usersRepository.create(createUserDto);
		await this.usersRepository.insert(createdUser);
		return createdUser;
	}

	findAll(): Promise<User[]> {
		return this.usersRepository.find();
	}

	async findOne(id: string): Promise<User> {
		const user = await this.usersRepository.findOneBy({ id });
		if (!user) throw new NotFoundException();
		return user;
	}

	update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
		return this.usersRepository.update(id, updateUserDto);
	}

	async remove(id: string): Promise<void> {
		const result = await this.usersRepository.delete(id);
		if (result.affected === 0) throw new NotFoundException();
	}
}
