import GlobalSearch from "@/components/shared/search/GlobalSearch";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/FIlter";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCards from "@/components/cards/QuestionCard";
const questions = [
  {
    _id: "1",
    title: "How to learn programming?",
    tags: [
      { _id: "1", name: "programming" },
      { _id: "2", name: "learning" },
    ],
    author: {
      _id: "101",
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2024-04-01"),
  },
  {
    id: "2",
    title: "What are the best practices for web development?",
    tags: [
      { _id: "3", name: "web development" },
      { _id: "4", name: "best practices" },
    ],
    author: {
      _id: "102",
      name: "Jane Smith",
      picture: "jane-smith.jpg",
    },
    upvotes: 15,
    views: 150,
    answers: [],
    createdAt: new Date("2024-03-30"),
  },
  {
    id: "3",
    title: "How to become a data scientist?",
    tags: [
      { _id: "5", name: "data science" },
      { _id: "6", name: "career" },
    ],
    author: {
      _id: "103",
      name: "Alice Johnson",
      picture: "alice-johnson.jpg",
    },
    upvotes: 20,
    views: 200,
    answers: [],
    createdAt: new Date("2024-03-28"),
  },
];
export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link
          href={"/ask-question"}
          className="flex justify-end  max-sm:w-full"
        >
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses=""
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
        <HomeFilters />
      </div>
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.map((question) => {
          if (questions.length > 0) {
            return (
              <QuestionCards
                key={question._id}
                id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            );
          } else {
            return (
              <NoResult
                key="ques"
                title="  There's no question to show"
                description="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                 perspiciatis deleniti a."
                link="/ask-questions"
                linkTitle="Ask a Question
            "
              />
            );
          }
        })}
      </div>
    </>
  );
}
