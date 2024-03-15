'use server';

import supabase from '../lib/supabase';

async function createOutline(formdata: FormData) {
  const creator = formdata.get('name-of-creator');
  const courseTitle = formdata.get('title');
  const outline = formdata.get('outline');

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
