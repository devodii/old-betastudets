'use client'

import { Input, Label, Wrapper } from '@betastudents/ui'
import Link from 'next/link'
import { SubmitButton, Toast } from '..'
import { signUp } from '../../actions/user'

interface Props {
  error?: string
}

export const SignUp = ({ error }: Props) => {
  return (
    <Wrapper>
      <h2 className="font-semibold text-2xl md:text-3xl">Sign up</h2>

      <form
        action={signUp}
        className="w-full mx-auto flex flex-col gap-6 max-w-4xl"
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" />
        </div>

        <div className="flex items-center justify-end">
          <SubmitButton text="Sign up" />
        </div>
      </form>

      <div className="mt-12">
        already have an account?
        <Link
          className="underline underline-offset-2 ml-1 cursor-pointer"
          href={'/sign-in'}
        >
          sign in
        </Link>
      </div>

      {error && (
        <Toast
          message={'Something went wrong, please refresh'}
          data={{ position: 'top-right' }}
        />
      )}
    </Wrapper>
  )
}
