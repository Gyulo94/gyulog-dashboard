import { Icons } from "@/components/shared/icons";

export const menuItems = [
  {
    title: "페이지",
    list: [
      {
        title: "대시보드",
        path: "/dashboard",
        icon: <Icons.dashboard />,
      },
      {
        title: "포스트",
        path: "/dashboard/posts",
        icon: <Icons.posts />,
      },
      {
        title: "태그",
        path: "/dashboard/tags",
        icon: <Icons.tags />,
      },
      {
        title: "댓글",
        path: "/dashboard/comments",
        icon: <Icons.comments />,
      },
    ],
  },
  {
    title: "통계",
    list: [
      {
        title: "방문자",
        path: "/dashboard/visitors",
        icon: <Icons.visitors />,
      },
    ],
  },
  {
    title: "유저",
    list: [
      {
        title: "프로필",
        path: "/dashboard/profile",
        icon: <Icons.profile />,
      },
    ],
  },
];
