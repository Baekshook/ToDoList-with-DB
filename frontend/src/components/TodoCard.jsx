import React from 'react'

export default function TodoCard() {
  return (
    <>
      <div className="mt-16 flex flex-col w-1/2">
        <div className="flex my-4">
          <div className="border-4 border-pink-400 w-8 h-8 rounded-xl"></div>
          <div className="text-2xl ml-4 truncate">🧹 청소하기</div>
        </div>
        <div className="flex my-4">
          <div className="relative">
            <div className="border-4 border-pink-400 w-8 h-8 rounded-xl bg-pink-400 p-2"></div>
            <div className="absolute border-4 border-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 scale-75 rounded-xl bg-pink-400 p-2"></div>
          </div>
          <div className="text-2xl ml-4 truncate">👕 빨래하기</div>
        </div>
      </div>
    </>
  );
}
