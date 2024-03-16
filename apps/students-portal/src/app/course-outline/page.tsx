import { CourseOutlineDisplay } from '../../features/courses/course-outline'

interface Props {
  searchParams: {
    subject?: string
  }
}
export default function CourseOutlinePage({ searchParams }: Props) {
  return <CourseOutlineDisplay subject={searchParams?.subject} />
}
