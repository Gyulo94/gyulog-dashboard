import { menuItems } from "@/lib/constants";
import Image from "next/image";
import { Icons } from "../icons";
import MenuLink from "./menu-link";

export default function Sidebar() {
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src="/noavatar.png"
          alt=""
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <span className="font-medium">찰규</span>
          <span className="text-xs text-textSoft">어드민</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="font-bold text-[13px] my-[10px] mx-0">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className="p-5 my-[5px] mx-0 flex items-center gap-[10px] cursor-pointer rounded-[10px] w-full hover:bg-slate-200 dark:hover:bg-[#2e374a]">
        <Icons.logout />
        로그아웃
      </button>
    </div>
  );
}
