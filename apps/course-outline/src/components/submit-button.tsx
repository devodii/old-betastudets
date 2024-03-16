'use client'

import { Button, ButtonProps, cn } from '@betastudents/ui'
import { Spinner } from '@phosphor-icons/react'
import { useFormStatus } from 'react-dom'

interface Props extends ButtonProps {
  text: string
}

export function SubmitButton({ text, className, ...rest }: Props) {
  const { pending } = useFormStatus()

  return (
    <Button
      className={cn(
        `bg-blue-500 text-white w-full max-w-[200px] justify-center gap-4 items-center font-semibold ${
          pending ? 'cursor-not-allowed' : ''
        }`,
        className
      )}
      aria-disabled={pending}
      type="submit"
      {...rest}
    >
      <span>{text}</span>
      {pending && <Spinner className="animate-spin" size={20} />}
    </Button>
  )
}
