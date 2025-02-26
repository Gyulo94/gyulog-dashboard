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

export const db = [
  {
    id: "7e0007a9-2a6e-4dc3-bfc4-5cea58252920",
    title: "Learn React in 2024",
    thumnail: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    tags: ["React", "Frontend"],
    category: "frontend",
    createdAt: "2024-06-13",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit, laudantium animi magnam soluta facere repudiandae, voluptatum labore qui cumque, nemo rem hic quaerat eveniet consequatur suscipit expedita in? Fugiat?",
  },
  {
    id: "6ebc49a5-9c05-492e-b65f-4485c6796bbe",
    title: "React 19",
    thumnail: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    category: "frontend",
    tags: ["React", "Frontend"],
    createdAt: "2024-06-13",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit, laudantium animi magnam soluta facere repudiandae, voluptatum labore qui cumque, nemo rem hic quaerat eveniet consequatur suscipit expedita in? Fugiat?",
  },
  {
    id: "59de4065-d7f1-4dca-990c-8688248980c7",
    title: "Spaces vs Tabs",
    thumnail:
      "https://pbs.twimg.com/media/CuPZx0OWgAAkcH2?format=jpg&name=medium",
    category: "cs",
    tags: ["React", "Frontend"],
    createdAt: "2024-06-13",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit, laudantium animi magnam soluta facere repudiandae, voluptatum labore qui cumque, nemo rem hic quaerat eveniet consequatur suscipit expedita in? Fugiat?",
  },
  {
    id: "8a663140-d9f6-4d92-b15a-018102f96930",
    title: "Static Typing",
    thumnail:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*mwkFaVdkGeCzOPeVcelmRg.png",
    category: "cs",
    tags: ["React", "Frontend"],
    createdAt: "2024-06-13",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit, laudantium animi magnam soluta facere repudiandae, voluptatum labore qui cumque, nemo rem hic quaerat eveniet consequatur suscipit expedita in? Fugiat?",
  },
  {
    id: "1ef88c12-dc9b-439a-9929-91b10c608c91",
    title: "Vim",
    thumnail:
      "https://b1490832.smushcdn.com/1490832/wp-content/uploads/2023/01/install-vim-ubuntu.png?lossy=2&strip=1&webp=1",
    category: "cs",
    tags: ["React", "Frontend"],
    createdAt: "2024-06-13",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit, laudantium animi magnam soluta facere repudiandae, voluptatum labore qui cumque, nemo rem hic quaerat eveniet consequatur suscipit expedita in? Fugiat?",
  },
];

export const chartData = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];
