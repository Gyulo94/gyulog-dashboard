import { Icons } from "../shared/icons";
import { Card } from "../ui/card";

export default function DashboardCard() {
  return (
    <Card className="hover:bg-slate-200 dark:hover:bg-[#1e293b80] p-5 rounded-[10px] flex gap-5 cursor-pointer w-full">
      <Icons.posts size={24} />
      <div className="flex flex-col gap-5">
        <span>Total Posts</span>
        <span className="text-2xl font-medium">10,273</span>
        <span className="text-sm font-light">
          <span className="text-lime-500">12%</span> more than previous week
        </span>
      </div>
    </Card>
  );
}
