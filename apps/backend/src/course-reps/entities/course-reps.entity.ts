import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseRep {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  // todo: add relationship with courses.
}
