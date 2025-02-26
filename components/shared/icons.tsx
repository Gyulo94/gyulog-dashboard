import {
  ChartLine,
  LayoutDashboard,
  Icon as LucidIcon,
  MessageSquareMore,
  NotebookPen,
  Tag,
  UserRoundPen,
} from "lucide-react";

export type Icon = typeof LucidIcon;

export const Icons = {
  dashboard: LayoutDashboard,
  posts: NotebookPen,
  tags: Tag,
  comments: MessageSquareMore,
  visitors: ChartLine,
  profile: UserRoundPen,
};
