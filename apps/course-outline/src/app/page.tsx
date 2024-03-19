import { CreateCourseOutline } from '../components'

interface Props {
  searchParams: {
    error?: string
    success?: string
    id?: string
  }
}

export default async function Index({ searchParams }: Props) {
  return (
    <CreateCourseOutline
      error={searchParams?.error}
      success={searchParams.success}
      outlineId={searchParams.id}
    />
  )
}
