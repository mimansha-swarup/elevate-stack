import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface RenderProps {
  _id: number;
  name: string;
  totalQuestions: number;
  showCount: boolean;
}
const RenderTag = ({ _id, name, totalQuestions, showCount }: RenderProps) => {
  return (
    <div>
      <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
        <Badge className="rounded-md border-none subtle-medium background-light800_dark300 text-light400_light500 px-4 py-2 uppercase">
          {name}
        </Badge>

        {showCount && (
          <p className="small-medium text-dark500_light700">{totalQuestions}</p>
        )}
      </Link>
    </div>
  );
};

export default RenderTag;
