import { CourseOutlineDisplay } from '../../features/courses/course-outline';

interface Props {
  searchParams: {
    subject?: string;
  };
}
export default function CourseOutlinePage({ searchParams }: Props) {
  console.log({ searchParams });
  return <CourseOutlineDisplay subject={searchParams?.subject} />;
}
