import CountUp from 'react-countup';

function Bucket({ balls, onClick }) {
  return (
    <div
      className={`
        sm:w-14 sm:h-14 sm:text-lg lg:text-2xl lg:w-24 lg:h-24 xl:w-32 xl:h-32 group flex items-center justify-center font-semibold transition duration-200 select-none rounded-xl
        ${balls !== 0 ? 'bg-gray-100 cursor-pointer hover:shadow-lg hover:bg-gray-200' : 'bg-gray-300 cursor-not-allowed'}
      `}
      onClick={onClick}
    >
      <CountUp
        start={0}
        end={balls}
        duration={2}
        preserveValue
      />
    </div>
  )
};

export default Bucket;
