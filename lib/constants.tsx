import { Icons } from "@/components/shared/icons";

export const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <Icons.dashboard />,
      },
      {
        title: "Posts",
        path: "/dashboard/posts",
        icon: <Icons.posts />,
      },
      {
        title: "Tags",
        path: "/dashboard/tags",
        icon: <Icons.tags />,
      },
      {
        title: "Comments",
        path: "/dashboard/comments",
        icon: <Icons.comments />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Visitors",
        path: "/dashboard/visitors",
        icon: <Icons.visitors />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Profile",
        path: "/dashboard/profile",
        icon: <Icons.profile />,
      },
    ],
  },
];
