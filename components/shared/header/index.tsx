"use client";

import { usePathname } from "next/navigation";
import { Input } from "../../ui/input";
import { Icons } from "../icons";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center p-5 rounded-[10px] bg-secondary dark:bg-bgSoft">
      <div className="dark:text-textSoft font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-[10px] bg-slate-200 dark:bg-[#2e374a] p-1 rounded-[10px]">
          <Icons.search />
          <Input
            type="text"
            placeholder="검색..."
            className="bg-transparent border-0"
          />
        </div>
        <div className="flex items-center gap-5">
          <ModeToggle />
          <Icons.chat size={20} />
          <Icons.notification size={20} />
          <Icons.public size={20} />
        </div>
      </div>
    </div>
  );
}
