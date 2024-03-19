import { SignUp } from '../../../components'

interface Props {
  searchParams: {
    error?: string
  }
}

export default function SignUpPage({ searchParams }: Props) {
  return <SignUp error={searchParams.error} />
}
