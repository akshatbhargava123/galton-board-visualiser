const TOTAL_BALLS = 10000;
const TOTAL_BUCKETS = 10;

function runGaltonSimulation(totalBuckets, totalBalls) {
  const buckets = new Array(totalBuckets + 1).fill(0);
  for (let ball = 0; ball < totalBalls; ball++) {
    let bucketIdx = 0;
    for (let bucket = 0; bucket < totalBuckets; bucket++) {
      const leftTurn = Math.random() >= 0.5;
      if (leftTurn) bucketIdx++;
    }
    buckets[bucketIdx]++;
  }

  return buckets;
}

function initGrid() {
  // setup the 2d matrix to store and update the board state
  const grid = [runGaltonSimulation(TOTAL_BUCKETS, TOTAL_BALLS)];
  return grid;
}



export {
  initGrid,
  runGaltonSimulation,

  TOTAL_BALLS,
  TOTAL_BUCKETS,
};