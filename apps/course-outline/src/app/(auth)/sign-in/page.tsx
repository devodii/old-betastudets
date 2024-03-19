import { SignIn } from '../../../components'

interface Props {
  searchParams: {
    error?: string
  }
}

export default function SignInPage({ searchParams }: Props) {
  return <SignIn error={searchParams.error} />
}
