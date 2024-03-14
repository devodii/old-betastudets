'use server';

import supabase from '../lib/supabase';

async function createOutline(formdata: FormData) {
  'use server';

  const creator = formdata.get('name-of-creator');
  const courseTitle = formdata.get('title');
  const outline = formdata.get('outline');

  if (!creator || !courseTitle || !outline) return;

  const { data } = await supabase
    .from('course_outline')
    .insert({ createdBy: creator, title: courseTitle, outline });

  console.log({ data });
}

async function getOutline(id: string) {
  const { data } = await supabase
    .from('course_outline')
    .select('*')
    .eq('id', id);

  return data;
}

export { createOutline, getOutline };
