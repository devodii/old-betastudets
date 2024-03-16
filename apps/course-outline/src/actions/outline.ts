'use server'

import { redirect } from 'next/navigation'
import { getUser } from './user'
import { createClient } from '../lib/supabase/server'

async function createOutline(formdata: FormData) {
  const creator = formdata.get('name-of-creator')
  const courseTitle = formdata.get('title')
  const outline = formdata.get('outline')

  const supabase = createClient()

  const user = await getUser()

  console.log({ user})

  if (!user.data?.user?.id) {
    redirect('/sign-in?next=/create')
  }

  const { data } = await supabase
    .from('course_outline')
    .insert({ createdBy: creator, title: courseTitle, outline })

  console.log({ data })
}

async function getOutline(id: string) {
  const supabase = createClient()

  const { data } = await supabase
    .from('course_outline')
    .select('*')
    .eq('id', id)

  return data
}

export { createOutline, getOutline }
