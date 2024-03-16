import { notFound } from 'next/navigation'
import { getOutline } from '../../../actions/outline'
import { ViewCourseOutline } from '../../../components/view-outline'

interface Props {
  params: {
    id: string
  }
}

export default async function CourseOutlinePage({ params }: Props) {
  const outline = await getOutline(params.id)

  console.log({ outline })

  if (!outline) return notFound()

  return <ViewCourseOutline content={outline} />
}
