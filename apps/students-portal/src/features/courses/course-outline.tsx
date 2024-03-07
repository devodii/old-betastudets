import Link from 'next/link';
import { Wrapper } from '../../components/wrapper';

interface Props {
  subject?: any;
}

const courseOutlines = {
  'math-120': [
    {
      main: 'Functions of real variable',
      sub: ['graph of functions', 'limits an continuity of a function'],
    },
    {
      main: 'Derivative as a limit of rate of change',
      sub: [],
    },
    {
      main: 'Techniques of differentiation',
      sub: [
        'graph of functions',
        'sum and difference',
        'product and quotient',
        'chain rule for differentiation',
      ],
    },
    {
      main: 'Applications of differenciation',
      sub: ['maximum, minimum and point of differenciation'],
    },
  ],
};

export const CourseOutlineDisplay = ({ subject }: Props) => {
  return (
    <Wrapper>
      <h2 className="font-semibold text-4xl text-center mb-6">
        {subject ? `Course outline for ${subject}` : 'Browse course outline'}
      </h2>
      {subject ? (
        courseOutlines[subject as keyof typeof courseOutlines]?.map(
          ({ main, sub }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start w-full max-w-xl"
            >
              <p className="text-lg">{main}</p>
              <ul className="ml-8 mt-1">
                {sub.map((el) => (
                  <li key={el} className="list-[lower-roman] last:mb-4">
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          )
        )
      ) : (
        <ul>
          <li>
            <Link
              href={'/course-outline?subject=math-120'}
              className="underline underline-offset-2 md:text-md"
            >
              Maths 120
            </Link>
          </li>
        </ul>
      )}
    </Wrapper>
  );
};
