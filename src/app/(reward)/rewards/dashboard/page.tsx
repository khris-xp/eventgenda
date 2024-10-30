"use client";

import PaginatedTable from "@/components/Table/PaginatedTable";
import { useReward } from "@/hooks/useReward";
import { RewardType } from "@/types/reward.type";
import { TableCell, TableRow } from "@mui/material";
import Image from "next/image";

export default function RewardDashboardPage() {
  const rewardHeaders = ["", "Name", "Description", "Price"];
  const { rewards } = useReward();

  const renderRewardRow = (reward: RewardType) => (
    <TableRow key={reward.name}>
      <TableCell>
        <Image
          src={reward.image}
          alt={reward.name}
          className="w-20 h-20 rounded-xl"
          width={500}
          height={500}
        />
      </TableCell>
      <TableCell>{reward.name}</TableCell>
      <TableCell>{reward.description}</TableCell>
      <TableCell>{reward.price} $</TableCell>
    </TableRow>
  );

  return (
    <div className="flex justify-center container mx-auto py-5">
      {rewards && (
        <PaginatedTable
          headers={rewardHeaders}
          rows={rewards as RewardType[]}
          renderRow={renderRewardRow}
        />
      )}
    </div>
  );
}
