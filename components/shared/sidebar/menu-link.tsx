"use client";

import { menuLinks } from "@/lib/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLink({ item }: { item: menuLinks }) {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`p-5 flex items-center gap-[10px] hover:bg-slate-200 dark:hover:bg-[#1e293b80] my-[5px] mx-0 rounded-[10px] ${
        pathname === item.path && "bg-slate-200 dark:bg-[#1e293b80]"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
