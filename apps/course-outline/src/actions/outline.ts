'use server'

import { redirect } from 'next/navigation'
import { getUser } from './user'
import createSupabaseServerClient from '../lib/supabase/server'
import { revalidatePath } from 'next/cache'

async function createOutline(
  formdata: FormData
) {
  const creator = formdata.get('name-of-creator')
  const courseTitle = formdata.get('title')
  const outline = formdata.get('outline')

  const supabase = await createSupabaseServerClient()

  const user = await getUser()

  if (!user.data?.user?.id) {
    redirect('/sign-in')
  }

  const { data, error } = await supabase
    .from('course_outline')
    .insert({ created_by: creator, title: courseTitle, outline })
    .select() // creates a record, and return it.

  console.log({ data, error })

  if (error) {
    redirect("/?error=true")
  }

  const recordId = data?.[0].id

  if (recordId) {
    return { message: recordId, success: true }
  }
  revalidatePath('/c')
  redirect(`/c?success=true&id=${recordId}`)
}

async function getOutline(id: string) {
  const supabase = await createSupabaseServerClient()

  const { data } = await supabase
    .from('course_outline')
    .select('*')
    .eq('id', id)

  return data
}

async function getOutlinesForUser(userId: string) {
  // return getOutlines
}

export { createOutline, getOutline }
