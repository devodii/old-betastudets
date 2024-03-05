import { Wrapper } from '../../../components/wrapper';
import { getCourse } from '../../../actions/courses';

interface Props {
  params: {
    id: string;
  };
}

export const convertISOToDay = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  return formattedDate;
};

export default async function CoursePage({ params }: Props) {
  const course = await getCourse(params.id);

  console.log({ course });
  return (
    <Wrapper>
      <div className="flex flex-col gap-2 mt-8">
        <h3 className="text-3xl font-semibold">Name: {course.nameWithCode}</h3>
        <span>Instructor: {course.instructor}</span>
        <span>Date: {convertISOToDay(course.time)}</span>
        <span>Venue: {course.venue}</span>
      </div>
    </Wrapper>
  );
}
