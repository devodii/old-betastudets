import * as React from 'react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="flex flex-col space-y-4 max-w-3xl">
      <h1 className="text-4xl lg:text-5xl font-extrabold">👋 Hey, Welcome!</h1>
      <p className="md:text-xl">
        Beta Students is a platform where students get to know more about their
        courses, so that they learn responsively ❤️
      </p>

      <div className="flex items-center gap-2 mt-16 flex-col md:flex-row md:mt-24">
        <p className="text-md">Don&apos;t know where to start?</p>

        <Link href="courses" className="underline underline-offset-2">
          Explore today courses
        </Link>
        <Link href="course-outline" className="underline underline-offset-2">
          See course outline
        </Link>
      </div>
    </section>
  );
}
