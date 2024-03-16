'use server'

/* eslint-disable @typescript-eslint/no-explicit-any */

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../lib/supabase/server'
import { ApiErrorResponse } from '../types'

export const getUser = async () => {
  const supabase = createClient()

  return supabase.auth.getUser()
}

export const signIn = async (
  prevState: any,
  formdata: FormData
): Promise<ApiErrorResponse> => {
  const email: any = formdata.get('email')
  const password: any = formdata.get('password')

  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  console.log({ data, error })

  if (error) {
    return { message: error.message, randomizer: Math.random() * 4 }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export const signUp = async (
  prevState: any,
  formdata: FormData
): Promise<ApiErrorResponse> => {
  // sign up
  const email: any = formdata.get('email')
  const password: any = formdata.get('password')

  const supabase = createClient()

  const { error } = await supabase.auth.signUp({ email, password })

  if (error) {
    return { message: error.message, randomizer: Math.random() * 4 }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
