import CountUp from 'react-countup';
import cloneDeep from 'lodash/cloneDeep';
import { useEffect, useState } from 'react';
import { initGrid, runGaltonSimulation, TOTAL_BUCKETS } from '../../lib/galton-calculations';

function Home() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(initGrid());
  }, []);

  const releaseBalls = (rowIdx, bucketIdx) => {
    const newGrid = cloneDeep(grid);
    const rowBelowIdx = rowIdx + 1;

    // check if the row below this one exists, if not create it
    if (rowBelowIdx >= grid.length) newGrid.push(new Array(TOTAL_BUCKETS + 1).fill(0));

    const balls = runGaltonSimulation(TOTAL_BUCKETS, grid[rowIdx][bucketIdx]);
    newGrid[rowBelowIdx] = newGrid[rowBelowIdx].map((curBalls, idx) => curBalls + balls[idx]);

    newGrid[rowIdx][bucketIdx] = 0; // empty the bucket clicked because we released balls from there

    setGrid(newGrid);
  };

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
            {row.map((balls, bucketIdx) => (
              <div
                key={bucketIdx}
                className={`w-32 h-32 group bg-gray-100 flex items-center justify-center rounded-xl font-semibold text-2xl transition duration-200 hover:shadow-lg hover:bg-gray-200 cursor-pointer select-none`}
                onClick={() => releaseBalls(rowIdx, bucketIdx)}
              >
                <CountUp
                  start={0}
                  end={balls}
                  duration={2}
                  preserveValue
                />
              </div>
            ))}
          </div>
        ))}

      </div>
    </div>
  )
}

export default Home;
