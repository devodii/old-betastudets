import Link from 'next/link';
import { Wrapper } from '../../components/wrapper';
import { GoBack } from '../../components/back';

interface Props {
  subject?: any;
}

const courseOutlines = {
  'Math-120': [
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
  'Math-101': [
    {
      main: 'Elementary notions of sets, intersection, components, venn diagram',
      sub: [],
    },
    { main: 'Real Numbers, Integers, Rationals and Irrationals', sub: [] },
    { main: 'Maping of a set, real functions and their compositions', sub: [] },
    {
      main: 'Quadratic functions, Cubic functions and their roots, Partial functions',
      sub: [],
    },
    {
      main: 'Equations with complex roots, complex numbers, geometric representation of complex numbers. DE Mowes theorem, series and sequence',
      sub: [],
    },
    {
      main: 'Principle of mathematical induction, Binomial theorem.',
      sub: [],
    },
    {
      main: 'Trignometric functions of angles, circular functions, addition theorem, double and half angles',
      sub: [],
    },
  ],
  Physics: [
    {
      main: 'Fundamental and derived units',
      sub: [],
    },
    {
      main: 'Fundamental quantities and derived quantities',
      sub: [],
    },
    { main: 'Dimensions', sub: ['Dimensional Analysis'] },
    {
      main: 'Vector and Scalar quantities',
      sub: [
        'two vectors at right angle to each other ',
        'vectors incline at an angle to each other',
      ],
    },
    { main: 'Resultant vectors' },
    {
      main: 'Resolution of forces and parallel law of forces',
      sub: ['word problems'],
    },
  ],
};

export const CourseOutlineDisplay = ({ subject }: Props) => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center gap-2">
        <div className="-mt-4">
          <GoBack />
        </div>

        <h2 className="font-semibold text-4xl text-center mb-6">
          {subject ? `Course outline for ${subject}` : 'Browse course outline'}
        </h2>
      </div>

      {subject ? (
        courseOutlines[subject as keyof typeof courseOutlines]?.map(
          ({ main, sub }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start w-full max-w-xl"
            >
              <p className="text-lg">- {main}</p>
              <ul className="ml-8 mt-1">
                {sub?.map((el) => (
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
          <li className="flex flex-col gap-1">
            <Link
              href={'/course-outline?subject=Math-120'}
              className="underline underline-offset-2 md:text-md"
            >
              Maths 120
            </Link>

            <Link
              href={'/course-outline?subject=Math-101'}
              className="underline underline-offset-2 md:text-md"
            >
              Maths 101
            </Link>

            <Link
              href={'/course-outline?subject=Physics'}
              className="underline underline-offset-2 md:text-md"
            >
              Physics
            </Link>
          </li>
        </ul>
      )}
    </Wrapper>
  );
};
