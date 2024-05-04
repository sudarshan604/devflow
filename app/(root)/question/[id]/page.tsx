import { getQuestionById } from "@/lib/action/question.action";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const result = await getQuestionById({ questionId: params.id });

  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Link
            href={`/profile/${result.author.clerkId}`}
            className="flex items-center justify-start gap-1"
          >
            <Image
              src={result.author.picture}
              className="rounded-full "
              width={22}
              height={22}
              alt="profile"
            />
          </Link>
          <p className="paragraph-semibold text-dark300_light700">
            {result.author.name}
          </p>
          <div className="flex justify-end">voting</div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
          {result.title}
        </h2>
      </div>
      <div></div>
    </>
  );
};

export default Page;
