import { useState } from 'react';
import CountUp from 'react-countup';

function Bucket({ balls, onClick }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      className={`
        relative sm:w-14 sm:h-14 sm:text-lg lg:text-2xl lg:w-24 lg:h-24 xl:w-32 xl:h-32 group flex items-center justify-center font-semibold transition duration-200 select-none rounded-xl
        ${balls !== 0 ? 'bg-gray-100 cursor-pointer hover:shadow-lg hover:bg-gray-200' : 'bg-gray-300 cursor-not-allowed'}
      `}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CountUp
        start={0}
        end={balls}
        duration={2}
        preserveValue
      />

      {(hovered && balls !== 0) && (
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute sm:hidden md:block lg:bottom-1 xl:bottom-4 animate-bounce h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      )}
    </div>
  )
};

export default Bucket;
