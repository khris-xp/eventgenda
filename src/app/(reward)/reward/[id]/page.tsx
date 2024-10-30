"use client";

import { useReward } from "@/hooks/useReward";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function RewardPageDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { reward, addRewardToUserMutation } = useReward(id as string);

  const handleBuyReward = async () => {
    try {
      await addRewardToUserMutation.mutateAsync(id as string);
      router.push("/histories");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
            <Image
              className="w-full h-full object-cover"
              src={reward?.image || "https://via.placeholder.com/500"}
              alt="Reward-Detail"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {reward?.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {reward?.content}
          </p>
          <div className="flex mb-4">
            <div className="mr-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Price:{" "}
              </span>
              <span className="text-gray-600 dark:text-gray-300">
                ฿ {reward?.price}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Availability:{" "}
              </span>
              <span className="text-gray-600 dark:text-gray-300">In Stock</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Reward Description:
            </span>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              {reward?.description}
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="w-1/2 bg-indigo-800 text-white py-2 px-4 rounded-full font-bold hover:bg-indigo-900"
                onClick={handleBuyReward}
              >
                Buy Reward
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
