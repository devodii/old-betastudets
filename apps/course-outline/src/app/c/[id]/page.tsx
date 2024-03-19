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

  if (!outline) return notFound()

  return <ViewCourseOutline outline={outline as any} />
}
