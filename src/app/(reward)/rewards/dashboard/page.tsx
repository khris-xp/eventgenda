"use client";

import PaginatedTable from "@/components/Table/PaginatedTable";
import { RewardConstant, RewardType } from "@/constants/reward.constant";
import { TableCell, TableRow } from "@mui/material";
import Image from "next/image";

export default function RewardDashboardPage() {
  const rewardHeaders = ["", "Name", "Description", "Price"];

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
      <PaginatedTable
        headers={rewardHeaders}
        rows={RewardConstant}
        renderRow={renderRewardRow}
      />
    </div>
  );
}
