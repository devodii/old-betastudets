import Link from 'next/link'

interface Props {
  redirectTo: string
}

export const Spoiler = ({ redirectTo }: Props) => {
  return (
    <Link
      href={redirectTo}
      className="border px-4 md:px-8 w-full py-2 md:py-4 bg-white text-black flex items-center justify-center w-full max-w-xs rounded-xl"
    >
      Built By BetaStudents
    </Link>
  )
}
