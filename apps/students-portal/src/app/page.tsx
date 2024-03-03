import Link from "next/link";

export default async function Index() {
  return (
    <main className="min-h-screen w-screen flex items-center justify-center">
      <section className="flex flex-col space-y-4">
        <h1 className="text-4xl lg:text-5xl font-extrabold">
          Welcome to the Students App
        </h1>
        <p className="text-xl">Seamlessly attend your classes with our app.</p>

        <Link href="courses" className="underline underline-offset-2">
          Explore today courses
        </Link>
      </section>
    </main>
  );
}
