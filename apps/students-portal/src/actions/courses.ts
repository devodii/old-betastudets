'use server';

export async function getCourses() {
  try {
    const response = await fetch('http://localhost:3000/api/courses', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const courses = await response.json();

    console.log({ courses });

    return courses;
  } catch (error) {
    console.log('An error occured while fetching course.');
  }
}
