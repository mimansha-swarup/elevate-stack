import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect } from "react";

// const questions = [
//   {
//     _id: "1",
//     title: "How to convert a string to uppercase in Python?",
//     upvotes: 56,
//     tags: [
//       {
//         _id: "1",
//         name: "python",
//       },
//       {
//         _id: "2",
//         name: "sql",
//       },
//     ],
//     author: {
//       _id: "1",
//       name: "John",
//       picture: "john.jpg",
//     },
//     createdAt: new Date("2021-09-15T10:30:00Z"),
//     views: 120,
//     answers: [],
//   },
//   {
//     _id: "2",
//     title: "What is the difference between list and tuple in Python?",
//     upvotes: 42,
//     tags: [
//       {
//         _id: "1",
//         name: "python",
//       },
//       {
//         _id: "2",
//         name: "sql",
//       },
//     ],
//     author: {
//       _id: "2",
//       name: "Sarah",
//       picture: "sarah.jpg",
//     },
//     createdAt: new Date("2022-09-14T15:45:00Z"),
//     views: 98,
//     answers: [],
//   },
//   {
//     _id: "3",
//     title: "How to check if a key exists in a dictionary in Python?",
//     upvotes: 35,
//     tags: [
//       {
//         _id: "1",
//         name: "python",
//       },
//       {
//         _id: "2",
//         name: "sql",
//       },
//     ],
//     author: {
//       _id: "3",
//       name: "Michael",
//       picture: "michael.jpg",
//     },
//     createdAt: new Date("2021-09-13T09:20:00Z"),
//     views: 75,
//     answers: [],
//   },
//   {
//     _id: "4",
//     title: "How to sort a list of dictionaries in Python?",
//     upvotes: 62,
//     tags: [
//       {
//         _id: "1",
//         name: "python",
//       },
//       {
//         _id: "2",
//         name: "sql",
//       },
//     ],
//     author: {
//       _id: "4",
//       name: "Emily",
//       picture: "emily.jpg",
//     },
//     createdAt: new Date("2021-09-12T17:10:00Z"),
//     views: 112,
//     answers: [],
//   },
// ];

const Home = async () => {
  const { questions =[] } = await getQuestions({}) || {};
  // console.log("results: ", results, getQuestions);

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:item-centers">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href={"/ask-question"} className="flex justify-end max w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 ">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Question"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              tags={question.tags}
              title={question.title}
              author={question.authors}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's No Question to Show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
