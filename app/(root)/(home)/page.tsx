// import GlobalSearch from "@/components/shared/search/GlobalSearch";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/FIlter";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCards from "@/components/cards/QuestionCard";
import { getQuestions } from "@/lib/action/question.action";

export default async function Home() {
  const result = await getQuestions({});

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
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {result?.question.map((question) => {
          if (result.question.length > 0) {
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
