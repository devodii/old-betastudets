import * as React from 'react';
import Link from 'next/link';
import { CourseCard } from './course-card';
import { Wrapper } from '../../components/wrapper';

interface Props {
  courses: any[];
}
export const CoursesDisplay = ({ courses }: Props) => {
  return (
    <Wrapper>
      <h2 className="font-semibold text-4xl text-center mb-6">
        Explore Today&apos;s courses
      </h2>

      {courses?.length > 0 ? (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses?.map((course: any) => (
            <Link href={course.key} key={course.id}>
              <CourseCard {...course} />
            </Link>
          ))}
        </div>
      ) : (
        <span>There are no courses today, go enjoy!</span>
      )}
    </Wrapper>
  );
};
