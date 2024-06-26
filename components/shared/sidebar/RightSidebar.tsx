import React from "react";
import Image from "next/image";
import RenderTag from "../RenderTag";
import Link from "next/link";
const popularTahgs = [
  { _id: "1", name: "javascript", totalQuestions: 5 },
  { _id: "2", name: "react", totalQuestions: 5 },
  { _id: "3", name: "next", totalQuestions: 5 },
  { _id: "4", name: "vue", totalQuestions: 5 },
  { _id: "5", name: "redux", totalQuestions: 5 },
];

const RightSidebar = () => {
  const hotQuestions = [
    { _id: 1, title: "How do I use express as a custom server in Nextjs?" },
    { _id: 2, title: "How do I use express as a custom server in Nextjs?" },
    { _id: 3, title: "How do I use express as a custom server in Nextjs?" },
    { _id: 4, title: "How do I use express as a custom server in Nextjs?" },
    { _id: 5, title: "How do I use express as a custom server in Nextjs?" },
    { _id: 6, title: "How do I use express as a custom server in Nextjs?" },
  ];
  return (
    <section
      className="background-light900_dark200 light-border daek:shadow-none custom-scrollbar sticky left-0 top-0 flex h-screen
 w-[350px] flex-col justify-between overflow-y-auto border-l p-6 
 pt-36 shadow-light-300 max-xl:hidden
"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => {
            return (
              <Link
                href={`/questions/${question._id}`}
                key={question._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col  gap-4">
          {popularTahgs.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
