import LineChart from "@/components/lineChart/index";
import BarChart from "@/components/barChart/index";
import AreaChart from "@/components/areaStyle/index";
import { ChartData } from "@/data/chartData";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center px-auto my-10 mb-30">Charts</h1>
      <div className="grid grid-cols-2 gap-10 place-items-center">
        <div className="flex flex-col items-center border-2 border-gray-400 w-150">
          <LineChart numbers={ChartData} />
          <span className="text-2xl font-medium">LineChart</span>
        </div>
        <div className="flex flex-col items-center border-2 border-gray-400 w-150">
          <BarChart numbers={ChartData} />
          <span className="text-2xl font-medium">BarChart</span>
        </div>
        <div className="flex flex-col items-center border-2 border-gray-400 w-150">
          <AreaChart numbers={ChartData} />
          <span className="text-2xl font-medium">BarChart</span>
        </div>
        <div className="flex flex-col items-center border-2 border-gray-400 w-150">
          <BarChart numbers={ChartData} />
          <span className="text-2xl font-medium">BarChart</span>
        </div>
      </div>
    </div>
  );
}
