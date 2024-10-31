import { SponsorType } from "@/types/sponsor.type";
import Image from "next/image";

export type Props = {
  sponsors: SponsorType[];
};

export default function RankingTable({ sponsors }: Props) {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="relative flex max-w-[500px] h-[430px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:shadow-none">
        <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
          <h4 className="text-lg font-bold text-navy-700">Top Donators</h4>
          <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 dark:active:bg-white/20">
            See all
          </button>
        </div>
        <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
          <table
            role="table"
            className="w-full min-w-[500px] overflow-x-scroll"
          >
            <thead>
              <tr role="row">
                <th
                  role="columnheader"
                  title="Toggle SortBy"
                  className="cursor-pointer col-span-1"
                >
                  <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                    Name
                  </div>
                </th>
                <th
                  role="columnheader"
                  title="Toggle SortBy"
                  className="cursor-pointer col-span-1"
                >
                  <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                    Donators
                  </div>
                </th>
                <th
                  role="columnheader"
                  title="Toggle SortBy"
                  className="cursor-pointer col-span-1"
                >
                  <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                    Ranking
                  </div>
                </th>
              </tr>
            </thead>
            <tbody role="rowgroup" className="px-4">
              {sponsors.map((sponsor, index) => (
                <tr role="row" key={sponsor._id}>
                  <td className="py-3 text-sm" role="cell">
                    <div className="flex items-center gap-2">
                      <div className="h-[30px] w-[30px] rounded-full">
                        <Image
                          src={sponsor.user.profileImage}
                          className="h-full w-full rounded-full"
                          alt="Profile Image"
                          width={30}
                          height={30}
                        />
                      </div>
                      <p className="text-sm font-medium text-navy-700">
                        {sponsor.user.fullName}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600">
                      {sponsor.amount} ฿
                    </p>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 text-center">
                      {index + 1}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
