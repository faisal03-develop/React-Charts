import LineChart from "@/components/lineChart";
import BarChart from "@/components/barChart";


export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center px-auto my-10 mb-30">Charts</h1>
      <div className="flex flex-row items-center justify-around">
        <div className="flex flex-col items-center">
          <LineChart />
          <span className="text-2xl font-medium">LineChart</span>
        </div>
        <div className="flex flex-col items-center">
          <BarChart />
          <span className="text-2xl font-medium">BarChart</span>
        </div>
      </div>
    </div>
  );
}
