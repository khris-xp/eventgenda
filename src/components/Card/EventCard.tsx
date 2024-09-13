import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CategoryChip from "../Chips/CategoryChip";
import ProgressBar from "../Progress/ProgressBar";

export default function EventCard() {
  return (
    <Link href="/event/1">
      <div className="bg-white relative w-[330px] rounded-xl shadow border border-indigo-300 hover:border-indigo-500 duration-100 cursor-pointer">
        <div className="h-36 relative">
          <div className="h-full relative">
            <Image
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
              alt="events"
              className="h-full absolute object-cover object-top w-full rounded-t-lg"
              width={1000}
              height={1000}
            />
            <div className="absolute -bottom-5 left-3">
              <Image
                className="w-14 h-14 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s"
                alt="avatar"
                width={1000}
                height={1000}
              />
            </div>
            <div className="absolute top-0 left-1">
              <div className=" bg-indigo-800 text-white text-sm p-2 px-5 m-2 rounded-lg border border-gray-700 shadow">
                Final Build
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <Typography variant="h5" className="text-indigo-900 pt-4 text-2xl">
            CASSINI Hackathons Environment and Green Transition
          </Typography>
          <Typography
            variant="h6"
            className="text-gray-600 pt-4 text-base font-light"
          >
            Create innovative solutions for the environment & green transition
            with EU space technologies
          </Typography>
        </div>
        <div className="flex space-x-4 px-5">
          <CategoryChip category="Environment" />
          <CategoryChip category="Green Transition" />
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2.5,
            py: 2,
            pt: 4,
            backgroundColor: "white",
          }}
        >
          <ProgressBar />
          <Typography variant="body2" className="text-gray-600 pl-2 uppercase">
            7 days left
          </Typography>
        </Box>
        <div className="flex flex-col p-5 border-t border-indigo-300">
          <p className="font-normal text-black text-xl">Prize</p>
          <div className="flex items-center text-soft-blue space-x-2 whitespace-nowrap">
            <p className="font-normal text-black text-xl">100 $</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
