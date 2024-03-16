'use server'

/* eslint-disable @typescript-eslint/no-explicit-any */

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import createSupabaseServerClient from '../lib/supabase/server'
import { ApiResponse } from '../types'

export const getUser = async () => {
  const supabase = await createSupabaseServerClient()

  return supabase.auth.getUser()
}

export const signIn = async (
  prevState: any,
  formdata: FormData
): Promise<ApiResponse> => {
  const email: any = formdata.get('email')
  const password: any = formdata.get('password')

  const supabase = await createSupabaseServerClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return {
      message: error.message,
      randomizer: Math.random() * 4,
      success: false,
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export const signUp = async (
  prevState: any,
  formdata: FormData
): Promise<ApiResponse> => {
  // sign up
  const email: any = formdata.get('email')
  const password: any = formdata.get('password')

  const supabase = await createSupabaseServerClient()

  const { error } = await supabase.auth.signUp({ email, password })

  if (error) {
    return {
      message: error.message,
      randomizer: Math.random() * 4,
      success: false,
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
