"use client";

import RewardCard from "@/components/Card/RewardCard";
import { useReward } from "@/hooks/useReward";
import { Fragment } from "react";

export default function RewardsPage() {
  const { rewards } = useReward();
  return (
    <Fragment>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pb-10 my-32"
      >
        {rewards &&
          rewards.map((reward, index) => (
            <RewardCard key={index} index={index} reward={reward} />
          ))}
      </section>
    </Fragment>
  );
}
