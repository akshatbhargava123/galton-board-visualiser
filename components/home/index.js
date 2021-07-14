import { useEffect, useState } from 'react';
import { initGrid } from '../../lib/galton-calculations';

function Home() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(initGrid());
  }, []);

  return (
    <div className="h-screen">
      <div className="shadow text-center bg-gray-50">
        <h3 className="font-bold text-2xl pt-6 pb-2">Galton Visualizer!</h3>
        <div className="h-48 flex items-center justify-center">
          histogram here
        </div>
      </div>

      <div className="p-10 overflow-y-scroll">

        {grid.map((row, rowIdx) => (
          <div key={rowIdx} className="my-10 flex items-center justify-around">
            {row.map((bucket, idx) => (
              <div
                key={idx}
                className={`w-32 h-32 group bg-gray-100 flex items-center justify-center rounded-xl font-semibold text-2xl transition duration-200 hover:shadow-lg hover:bg-gray-200 cursor-pointer select-none`}
              >
                <span>{bucket}</span>
              </div>
            ))}
          </div>
        ))}

      </div>
    </div>
  )
}

export default Home;
