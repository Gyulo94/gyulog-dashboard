import { menuItems } from "@/lib/constants";
import Image from "next/image";
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
          <span className="font-medium">John Doe</span>
          <span className="text-xs text-textSoft">Administrator</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-textSoft font-bold text-[13px] my-[10px] mx-0">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
