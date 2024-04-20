import React from "react";
import Question from "@/components/Forms/Question";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/action/user.action";

const Page = async () => {
  // const { userId } = auth();
  const userId = "123456";
  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default Page;
