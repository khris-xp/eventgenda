"use client";

import RewardCard from "@/components/Card/RewardCard";
import { RewardConstant } from "@/constants/reward.constant";
import { Fragment } from "react";

export default function RewardsPage() {
  return (
    <Fragment>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pb-10 my-32"
      >
        {RewardConstant.map((reward, index) => (
          <RewardCard key={index} index={index} reward={reward} />
        ))}
      </section>
    </Fragment>
  );
}
