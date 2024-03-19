'use server'

/* eslint-disable @typescript-eslint/no-explicit-any */

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import createSupabaseServerClient from '../lib/supabase/server'

export const getUser = async () => {
  const supabase = await createSupabaseServerClient()

  return supabase.auth.getUser()
}

export const signIn = async (  formdata: FormData
) => {
  const email: any = formdata.get('email')
  const password: any = formdata.get('password')

  const supabase = await createSupabaseServerClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect('/sign-in?error=true')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export const signUp = async (formdata: FormData) => {
  // sign up
  const email: any = formdata.get('email')
  const password: any = formdata.get('password')

  const supabase = await createSupabaseServerClient()

  const { error } = await supabase.auth.signUp({ email, password })

  if (error) {
    redirect('/sign-in?error=true')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
