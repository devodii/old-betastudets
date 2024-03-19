import { redirect } from 'next/navigation'
import { getUser } from '../../actions/user'
import { CourseOutlinesCreatedByUser } from '../../components/user-created-outline'
import { getUserOutlines } from '../../actions/outline'

export default async function MyOutlinesPage() {
  const user = await getUser()

  const userId = user?.data?.user?.id

  if (!userId) {
    redirect('/sign-in')
  }

  const courseOutlines = await getUserOutlines(userId)

  return <CourseOutlinesCreatedByUser outlines={courseOutlines} />
}
