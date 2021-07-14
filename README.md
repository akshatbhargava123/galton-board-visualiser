## Galton Board Visualiser

Fun project which helps visualise stacked galton boards and showing the normal distribution being formed by randomness.

To know more about galton board and the maths behind it, here are a few resources I took help from:
- https://www.mathsisfun.com/data/quincunx-explained.html
- https://www.youtube.com/watch?v=UCmPmkHqHXk

### Screenshot
![image](https://user-images.githubusercontent.com/22184427/125679202-ee55480f-0a63-4f5d-976e-9f809a80f81c.png)

### How to use?
- Each card in the app represents the container/bucket in the galton board which collects the ball
- We do not visualise the balls dropping instead we directly see the final result of simulation given probability of each bucket
- On clicking any bucket, the buckets leaks and drops all the balls it has to the galton board below it's row which in turn run the simulation again with lesser number of balls initially started with
- Histogram on the top is updated based on the last row's result which mostly ends up as a normal distribution

### What else can we do here?
- Allow user to modify constants (`TOTAL_BALLS`, `TOTAL_BUCKETS`) and biasing the turn (left/right) probability (currently 0.5)
- Make it mobile responsive or if not, atleast show mobile users that it's not yet available on mobile
- Some kind of initial tutorial to let users know that they need to click on the cells
- Balls dropping animations
- Histogram could be average of all the results in each galton board which would be even precise result

## Running the Project

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- NextJS (Framework built on top of ReactJS)
- TailwindCSS (Atomic CSS lib)
- Nivo (Charting)

NOTE: Since the project was quite small-scale as of now, I've not optimised for some necessary-for-large-scale-apps stuff like import aliasing, linting, state management architecture, etc.


## Rough

I initially approached the problem a bit complex way trying to make it generic, I actually calculated the probability each bucket hold given `positionOfTheBucket` and `totalBuckets`.
Sharing this just for fun, you can checkout the following:
![image](https://user-images.githubusercontent.com/22184427/125679321-ba8a18d6-e8eb-4798-919e-5f1546d37b55.png)

