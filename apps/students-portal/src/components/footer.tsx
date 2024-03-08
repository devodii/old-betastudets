export const Footer = () => {
  return (
    <footer className="border-t bg-white z-10 w-full mx-auto fixed bottom-6 -ml-12 md:-ml-16 lg:-ml-24 flex flex-col gap-2 items-center justify-center">
      <p className="text-center">
        This version strictly applies to students studying computer science at
        the University of Port Harcourt.
      </p>
      <p className="text-center">
        So, if you are in another department or perhaps a different university
        and you want something similar for your students/classmates, please
        reach out to me{' '}
        <a
          href="mailto:emmanuelodii80@gmail.com"
          className="underline underline-2"
        >
          here
        </a>
        .
      </p>
    </footer>
  );
};
