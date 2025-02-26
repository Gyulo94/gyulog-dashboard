"use client";

import { menuLinks } from "@/lib/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLink({ item }: { item: menuLinks }) {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`p-5 flex items-center gap-[10px] hover:bg-slate-200 dark:hover:bg-[#2e374a] my-[5px] mx-0 rounded-[10px] ${
        pathname === item.path && "bg-slate-200 dark:bg-[#2e374a]"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
