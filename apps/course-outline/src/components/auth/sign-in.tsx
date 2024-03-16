'use client'

import * as React from 'react'
import { Input, Label, Wrapper } from '@betastudents/ui'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import { signIn } from '../../actions/user'
import { SubmitButton } from '../submit-button'

const initialState = {
  message: null,
  randomizer: 0,
}

export const SignIn = () => {
  const [state, formAction] = useFormState(signIn, initialState)

  const showToast = () => {
    if (state.message) {
      toast(state.message, {
        description: 'Not sure you have an account? sign up',
        action: {
          label: 'retry',
          onClick: () => console.log('retrying...'),
        },
        position: 'top-right',
      })
    }
  }

  React.useEffect(() => {
    showToast()
  }, [state.message, state.randomizer])

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
    </Wrapper>
  )
}
