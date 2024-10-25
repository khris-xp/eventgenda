"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEvent } from "@/hooks/useEvent";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  LinearProgress,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";

const FundingEventPage: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const { id } = useParams();
  const { event, donateEventMutation, fundingEventMutation } = useEvent(id);
  const { refetch, userProfile } = useAuth();

  const handleDonateEvent = async (id: string) => {
    try {
      if (
        userProfile?.data.role === "organizer" ||
        userProfile?.data.role === "admin"
      ) {
        await fundingEventMutation.mutateAsync({
          id,
          fundingEventDto: { amount },
        });
      } else {
        await donateEventMutation.mutateAsync({
          id,
          fundingEventDto: { amount },
        });
      }
      refetch();
      setAmount(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="ml-20 mr-20" style={{ color: "#1b1042" }}>
      <Box className="flex flex-col justify-center items-center gap-4 py-5 bg-gray-100">
        <Typography
          sx={{ color: "white", padding: "5px", background: "#482bab" }}
          className="w-full font-semibold text-center"
        >
          {event?.categories.map((category) => category.name)}
        </Typography>
        <Box
          component="img"
          className="rounded-full"
          sx={{ width: "150px", height: "150px" }}
          src={event?.thumbnail}
        />
        <Typography variant="h5" className="font-semibold">
          {event?.title}
        </Typography>

        <Box
          className="flex flex-rows justify-around mt-2 "
          sx={{ width: "90%" }}
        >
          <Typography>
            {event?.amountRaised}
            <span className="font-semibold" style={{ color: "#482bab" }}>
              ฿
            </span>{" "}
            of {event?.amountRequired}
            <span className="font-semibold" style={{ color: "#482bab" }}>
              ฿
            </span>
          </Typography>
          <Typography>
            Total Donators:{" "}
            <span className="font-semibold" style={{ color: "#482bab" }}>
              {event?.sponsors && event.sponsors.length}
            </span>
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={
            ((event?.amountRaised ?? 0) / (event?.amountRequired ?? 1)) * 100
          }
          className="rounded-full mb-2 "
          sx={{
            width: "60%",
            backgroundColor: "#9b9b9c",
            height: "12px",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#8451f1",
              height: "100%",
            },
          }}
        />
      </Box>

      <Box className="flex flex-col justify-center items-center gap-4 mt-3">
        <FormControl sx={{ m: 1, width: "40%" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">฿</InputAdornment>}
            placeholder="THB"
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => {
              const value = Math.max(0, Number(e.target.value));
              setAmount(value);
            }}
            onKeyPress={(e) => {
              if (e.key === "-") {
                e.preventDefault();
              }
            }}
          />
        </FormControl>
        <Box className="mt-4">
          <Typography variant="h6">Your Donation</Typography>
          <Box className="flex justify-between">
            <Typography>Your Outcome</Typography>
            <Typography>
              {amount} {"฿"}
            </Typography>
          </Box>

          <Box className="flex justify-center mt-3 gap-2">
            <Button
              variant="outlined"
              sx={{
                color: "#4629a7",
                borderColor: "#4629a7",
                "&:hover": {
                  backgroundColor: "#4629a7",
                  color: "white",
                },
              }}
              onClick={() => handleDonateEvent(id as string)}
            >
              <MonetizationOnIcon className="p-1" />
              Pay with Coins
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#084370",
                borderColor: "#084370",
                "&:hover": {
                  backgroundColor: "#084370",
                  color: "white",
                },
              }}
            >
              <QrCode2Icon className="p-1" />
              Pay Via Promptpay
            </Button>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default FundingEventPage;
