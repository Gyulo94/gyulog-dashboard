import { Chart } from "@/components/dashboard/chart";
import DashboardCard from "@/components/dashboard/dashboard-card";
import LatestPostList from "@/components/dashboard/latest-post-list";

export default function DashboardPage() {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex-3 flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
        <LatestPostList />

        <Chart />
      </div>
    </div>
  );
}
