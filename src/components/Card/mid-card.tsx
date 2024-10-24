'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import cards from '@/data/cards';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

export default function MidCard() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  
  const renderCards = () => {
    const startIndex = currentPage * cardsPerPage;
    const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);

    return currentCards.map((card, index) => (
      <div key={index} className="max-w-xl w-full bg-white border-4 border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="relative w-full h-40">
          <Image
            className="rounded-t-lg border-4 border-black object-cover"
            src={card.image}
            layout="fill"
            alt={card.title}
            loading='lazy'
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {card.description}
          </p>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div>
      <h1 className='font-bold text-4xl p-1 text-black text-start'>Visitez Ces Lieux</h1>
      <div className='flex justify-between items-center mb-5'>
        <p className='font-semibold text-xl ml-4 text-black text-start'>
          Découvrez les sites historiques emblématiques d&apos;Abidjan, <br />
          où l&apos;héritage culturel et architectural de la Côte d&apos;Ivoire <br />
          s&apos;entrelace avec l&apos;animation d&apos;une métropole en pleine effervescence.
        </p>
        <div className="flex justify-center gap-2">
          <button 
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} 
            disabled={currentPage === 0}
            className={`px-6 py-4 border-2 border-black text-black bg-green-400 hover:bg-green-600 rounded ${currentPage === 0 ? 'disabled:bg-gray-400' : ''}`}
          >
            <GrLinkPrevious />
          </button>
          <button 
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))} 
            disabled={currentPage === totalPages - 1}
            className={`px-6 py-4 border-2 border-black text-black bg-green-400 hover:bg-green-600 rounded ${currentPage === totalPages - 1 ? 'disabled:bg-gray-400' : ''}`}
          >
            <GrLinkNext />
          </button>
        </div>
      </div>
      <div className="flex space-x-4 overflow-hidden">
        {renderCards()}
      </div>
    </div>
  );
}
