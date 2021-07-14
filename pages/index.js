import { useState } from 'react';

export default function Home() {
  const [row] = useState(new Array(10).fill(0).map((_, i) => 10000))

  return (
    <div className="h-screen">
      <div className="shadow text-center bg-gray-50">
        <h3 className="font-bold text-2xl pt-6 pb-2">Galton Visualizer!</h3>
        <div className="h-48 flex items-center justify-center">
          histogram here
        </div>
      </div>
    
      <div className="p-10 overflow-y-scroll">
          
          <div className="my-10 flex items-center justify-around">
            {row.map((bucket, idx) => (
              <div
                key={idx}
                className={`w-40 h-40 group bg-gray-100 flex items-center justify-center rounded-xl font-semibold text-2xl transition duration-200 hover:shadow-lg hover:bg-gray-200 cursor-pointer`}
              >
                <span>{bucket}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-around">
            {row.map((bucket, idx) => (
              <div key={idx} className="w-36 h-36 bg-gray-100 flex items-center justify-center rounded-xl font-semibold text-2xl">
                {bucket}
              </div>
            ))}
          </div>
          
      </div>

    </div>
  )
}
