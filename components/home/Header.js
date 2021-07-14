import { ResponsiveBar } from '@nivo/bar';

function Header({ chartData }) {
  return (
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
  )
};

export default Header;
