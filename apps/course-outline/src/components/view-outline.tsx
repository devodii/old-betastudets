import { CourseOutline } from '@betastudents/types'
import { Wrapper } from '@betastudents/ui'
import Link from 'next/link'

interface Props {
  outline: CourseOutline
}
export const ViewCourseOutline = ({ outline }: Props) => {
  return (
    <div>
      <Wrapper className="justify-start">
        <header className="w-full mt-6 md:mt-12 flex justify-start pr-8">
          <Link href={'/'} className="underline underline-offset-4">
            Create your own
          </Link>
        </header>

        <ul className="grid grid-cols-1 gap-3 md:mt-24">
          <li>Created By: {outline.username}</li>
          <li>Subect: {outline.subject}</li>
          <li>Outline {outline.content}</li>
        </ul>
      </Wrapper>
    </div>
  )
}
