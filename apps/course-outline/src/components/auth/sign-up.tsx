import { Button, Input, Label, Wrapper } from '@betastudents/ui';
import { signUp } from '../../actions/user';
import Link from 'next/link';

export const SignUp = () => {
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
          <Button
            className="bg-blue-500 text-white font-semibold"
            type="submit"
          >
            Sign up
          </Button>
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
    </Wrapper>
  );
};
