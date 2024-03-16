import { Wrapper } from '@betastudents/ui'

interface Props {
  content: any
}
export const ViewCourseOutline = ({ content }: Props) => {
  return (
    <Wrapper>
      <pre>{JSON.stringify(content)}</pre>
    </Wrapper>
  )
}
