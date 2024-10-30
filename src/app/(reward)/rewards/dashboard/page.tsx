"use client";

import PaginatedTable from "@/components/Table/PaginatedTable";
import { useReward } from "@/hooks/useReward";
import { RewardType } from "@/types/reward.type";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, TableCell, TableRow } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function RewardDashboardPage() {
  const rewardHeaders = [
    "",
    "Name",
    "Description",
    "Price",
    "Content",
    "Category",
    "Action",
  ];
  const { rewards, deleteRewardMutation } = useReward();

  const handleDeleteReward = async (id: string) => {
    try {
      await deleteRewardMutation.mutateAsync(id);
    } catch (error) {
      console.error(error);
    }
  };

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
      <TableCell>{reward.price} ฿</TableCell>
      <TableCell>{reward.content}</TableCell>
      <TableCell>{reward.category}</TableCell>
      <TableCell>
        <div className="flex justify-center space-x-3">
          <Link href={`/edit/reward/${reward._id}`}>
            <Button variant="outlined" color="primary" startIcon={<EditIcon />}>
              Edit
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => handleDeleteReward(reward._id)}
          >
            Delete
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );

  return (
    <div className="flex justify-center flex-col container mx-auto py-5">
      <div className="flex justify-end mb-10">
        <Link href="/create/reward">
          <Button variant="outlined" color="primary" startIcon={<AddIcon />}>
            Create Reward
          </Button>
        </Link>
      </div>
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
