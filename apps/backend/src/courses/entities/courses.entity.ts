import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  instructor: string;

  @Column({ type: 'varchar', nullable: false })
  nameWithCode: string;

  @Column({ type: 'timestamptz', nullable: false })
  time: Date;

  @Column({ type: 'text', nullable: false })
  venue: string;
}
