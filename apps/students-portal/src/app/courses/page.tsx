import * as React from 'react';

import { getCourses } from '../../actions/courses';
import { CoursesDisplay } from '../../features/courses/courses-display';

export default async function CoursesPage() {
  const courses = await getCourses();

  console.log({ courses });

  return <CoursesDisplay courses={courses} />;
}
