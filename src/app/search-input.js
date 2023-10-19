'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function SearchInput({search}) {
  const router = useRouter();

  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Busca
      </label>
      <input
        type="text"
        id="busca"
        placeholder="Busque um contato"
        defaultValue={search}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg"
        onChange={(e) => {
          console.log(e.target.value);
          router.push(`?search=${e.target.value}`);
        }}
      />
    </div>
  );
}
