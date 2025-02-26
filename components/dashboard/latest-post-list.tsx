import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/constants";
import Image from "next/image";
import { Badge } from "../ui/badge";

export default function LatestPostList() {
  return (
    <div className="dark:border p-5 rounded-[10px]">
      <h2 className="mb-5 font-extralight dark:text-textSoft">최근 게시글</h2>
      <Table className="w-full">
        <TableCaption>A list of your recent posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>섬네일</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>카테고리</TableHead>
            <TableHead>날짜</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {db.map((item) => (
            <TableRow
              className="hover:bg-slate-200 dark:hover:bg-[#1e293b80] cursor-pointer"
              key={item.id}
            >
              <TableCell className="py-5" width={"20%"}>
                <Image
                  src={item.thumnail}
                  width={150}
                  height={50}
                  alt={item.title}
                />
              </TableCell>
              <TableCell className="py-5" width={"40%"}>
                {item.title}
              </TableCell>
              <TableCell className="py-5" width={"20%"}>
                <Badge variant={"secondary"}>{item.category}</Badge>
              </TableCell>
              <TableCell className="py-5" width={"20%"}>
                {item.createdAt}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
