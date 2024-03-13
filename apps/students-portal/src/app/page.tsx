import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Hero } from '../components/hero';

export default async function Index() {
  return (
    <main className="min-h-screen flex flex-col gap-12 px-12 md:px-16 lg:px-24 py-6 md:py-8 lg:py-12">
      <Header />
      <Hero />

      <Footer />
    </main>
  );
}
