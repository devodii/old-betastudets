'use client'

import { Button } from '@betastudents/ui'
import { Spinner } from '@phosphor-icons/react'
import { useFormStatus } from 'react-dom'

interface Props {
  text: string
}

export function SubmitButton({ text }: Props) {
  const { pending } = useFormStatus()

  console.log({ pending })

  return (
    <Button
      className={`bg-blue-500 text-white w-full max-w-[200px] justify-center gap-4 items-center font-semibold ${
        pending ? 'cursor-not-allowed' : ''
      }`}
      aria-disabled={pending}
      type="submit"
    >
      <span>{text}</span>
      {pending && <Spinner className="animate-spin" size={20} />}
    </Button>
  )
}
