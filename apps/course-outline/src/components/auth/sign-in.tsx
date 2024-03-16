'use client'

import { Input, Label, Wrapper } from '@betastudents/ui'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import { signIn } from '../../actions/user'
import { SubmitButton } from '../submit-button'
import { Toast } from '../toast'

const initialState = {
  message: null,
  randomizer: 0,
  success: false,
}

export const SignIn = () => {
  const [{ success, randomizer, message }, formAction] = useFormState(
    signIn,
    initialState
  )

  return (
    <Wrapper>
      <h2 className="font-semibold text-2xl md:text-3xl">Sign in</h2>
      <form
        action={formAction}
        className="w-full max-w-4xl mx-auto flex flex-col gap-6"
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" required />
        </div>

        <div className="flex items-center justify-end">
          <SubmitButton text="Sign in" />
        </div>
      </form>

      <div className="mt-12">
        dont have an account?
        <Link
          className="underline underline-offset-2 ml-1 cursor-pointer"
          href={'/sign-up'}
        >
          sign up
        </Link>
      </div>

      {!success && message && (
        <Toast
          message={message}
          data={{ position: 'top-right' }}
          key={randomizer}
        />
      )}
    </Wrapper>
  )
}
