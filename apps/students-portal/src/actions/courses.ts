'use server';

export async function getCourses() {
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/courses`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const courses = await response.json();

    return courses;
  } catch (error) {
    console.log('An error occured while fetching course.');
  }
}
