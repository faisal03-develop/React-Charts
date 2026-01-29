import LineChart from "@/components/lineChart";
import BarChart from "@/components/barChart";


export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-center px-auto my-10">Charts</h1>
      <div>
        <LineChart />
      </div>
      <div>
        <BarChart />
      </div>
    </div>
  );
}
