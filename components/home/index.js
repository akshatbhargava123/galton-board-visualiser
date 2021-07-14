import cloneDeep from 'lodash/cloneDeep';
import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useRef, useState } from 'react';
import { initGrid, runGaltonSimulation, TOTAL_BUCKETS } from '../../lib/galton-calculations';
import Bucket from './Bucket';

function Home() {
  const boardContainerRef = useRef();
  const [grid, setGrid] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setGrid(initGrid());
  }, []);

  useEffect(() => {
    if (grid.length) {
      const data = grid[grid.length - 1].map((balls, id) => ({
        id,
        value: balls,
      }));
  
      setChartData(data);
    }
  }, [grid]);

  const releaseBalls = (rowIdx, bucketIdx) => {
    if (grid[rowIdx][bucketIdx] === 0) return;

    const newGrid = cloneDeep(grid);
    const rowBelowIdx = rowIdx + 1;

    // check if the row below this one exists, if not create it
    if (rowBelowIdx >= grid.length) newGrid.push(new Array(TOTAL_BUCKETS + 1).fill(0));

    const balls = runGaltonSimulation(TOTAL_BUCKETS, grid[rowIdx][bucketIdx]);
    newGrid[rowBelowIdx] = newGrid[rowBelowIdx].map((curBalls, idx) => curBalls + balls[idx]);

    newGrid[rowIdx][bucketIdx] = 0; // empty the bucket clicked because we released balls from there

    setGrid(newGrid);

    // scroll to bottom only if user's focus on last row
    if (rowBelowIdx === grid.length) {
      setTimeout(() => {
        boardContainerRef.current.scrollBy({ top: boardContainerRef.current.scrollHeight, behavior: 'smooth' });
      }, 500);
    }
  };

  return (
    <div className="h-screen">
      <div className="shadow text-center bg-gray-50">
        <h3 className="font-extrabold text-2xl pt-6 pb-2">· Galton Board Visualiser ·</h3>
        <div className="pt-10 flex items-center justify-center">
          <div className="h-36 w-2/3">
            <ResponsiveBar
              data={chartData}
              padding={0.5}
              colors="gray"
              labelTextColor="white"
              borderRadius={3}
              tooltip="p"
            />
          </div>
        </div>
      </div>

      <div className="p-10 overflow-y-scroll" style={{ height: 'calc(100vh - 16rem)' }} ref={boardContainerRef}>

        {grid.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`
              py-10 flex items-center justify-evenly animate-fade-in-down
              ${rowIdx === grid.length - 1 ? 'bg-gray-50' : ''}
            `}
          >
            {row.map((balls, bucketIdx) => (
              <Bucket
                key={bucketIdx}
                balls={balls}
                onClick={() => releaseBalls(rowIdx, bucketIdx)}
              />
            ))}
          </div>
        ))}

      </div>
    </div>
  )
}

export default Home;
