'use client';

import { CaretLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

export const GoBack = () => {
  const { back } = useRouter();

  return (
    <div
      className="bg-gray-200 cursor-pointer text-black p-2 rounded-full"
      onClick={back}
    >
      <CaretLeft size={25} className="" />
    </div>
  );
};
