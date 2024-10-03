import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatNumbers, getTimeStamp } from "@/lib/utils";

interface QuestionProps {
  _id: string;
  title: string;
  upvotes: number;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  createdAt: Date;
  views: number;
  answers: Array<object>;
}
const QuestionCard = ({
  _id,
  answers,
  views,
  createdAt,
  author,
  title,
  tags,
  upvotes,
}: QuestionProps) => {
  return (
    <div className="card-wrapper p-9 sm:px-11 rounded-[10px]">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={`/questions/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex">
              {title}
            </h3>
          </Link>
        </div>
        {/* TODO: Edit */}
      </div>

      <div className="flex flex-wrap gap-2 mt-3.5">
        {tags?.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={author.picture}
          alt="user"
          value={author.name}
          title="- asked 1 hour ago"
          textStyle="body-medium text-dark400_light700"
          href={`/profile/${author._id}`}
          isAuthor
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="upvotes"
          value={formatNumbers(upvotes)}
          title="Votes"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatNumbers(answers?.length)}
          title="Answers"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatNumbers(views)}
          title="Views"
          textStyle="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
