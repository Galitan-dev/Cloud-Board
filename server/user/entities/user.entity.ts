import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid') id: string;

	@Column() firstname: string;
	@Column() lastname: string;
	@Column() password: string;

	@CreateDateColumn() createdAt: Date;
	@UpdateDateColumn() updatedAt: Date;
}
