import { CourseOutline } from '@betastudents/types'
import { Wrapper } from '@betastudents/ui'

interface Props {
  outlines: CourseOutline[]
}

export const CourseOutlinesCreatedByUser = ({ outlines }: Props) => {
  return (
    <Wrapper className="flex-col gap-4">
      <h2 className="text-3xl md:text-4xl font-semibold">Hello 👋</h2>

      <p className="mt-3">These are the course outline you created</p>

      <ul className="grid grid-cols-1 gap-4">
        {outlines.map(outline => (
          <li
            key={outline.id}
            className="flex flex-col gap-2 border min-w-[200px] w-full py-3 px-6 rounded-md"
          >
            <b>{outline.subject}</b>
            <article>{outline.content}</article>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
