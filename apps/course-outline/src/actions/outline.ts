'use server'

import { redirect } from 'next/navigation'
import { getUser } from './user'
import createSupabaseServerClient from '../lib/supabase/server'
import { revalidatePath } from 'next/cache'

async function createOutline(formdata: FormData) {
  const username = formdata.get('name-of-creator') as any
  const subject = formdata.get('title') as any
  const content = formdata.get('outline') as any

  const supabase = await createSupabaseServerClient()

  const user = await getUser()

  if (!user.data?.user?.id) {
    redirect('/sign-in')
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { data, error } = await supabase
    .from('course_outlines')
    .insert({ content, subject, username })
    .select() // creates a record, and return it.

  console.log({ data, error })

  if (error) {
    redirect('/?error=true')
  }

  const recordId = data?.[0].id

  revalidatePath('/c')
  redirect(`?success=true&id=${recordId}`)
}

async function getOutline(id: string) {
  const supabase = await createSupabaseServerClient()

  const { data } = await supabase
    .from('course_outlines')
    .select('*')
    .match({ id })

  return data?.[0] ?? {}
}

export async function getUserOutlines(userId: string) {
  const supabase = await createSupabaseServerClient()

  const { data } = await supabase
    .from('course_outlines')
    .select('*')
    .match({ user_id: userId })

  return data ?? []
}

export { createOutline, getOutline }
