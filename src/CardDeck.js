import React from 'react';

export const CardDeck = () => {
  return (
    <div>
      <div class="bg-gray-100 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg shadow-md p-6">
              <img
                class="w-full h-auto rounded-lg mb-4"
                src="card1.jpg"
                alt="Card 1"
              />
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Card 1</h2>
              <p class="text-gray-600">This is the first card.</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
              <img
                class="w-full h-auto rounded-lg mb-4"
                src="card2.jpg"
                alt="Card 2"
              />
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Card 2</h2>
              <p class="text-gray-600">This is the second card.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
