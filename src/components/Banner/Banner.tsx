import SearchInput from "../Input/SearchInput";

export type Props = {
  title: string;
};

export default function Banner(props: Props) {
  return (
    <div className="bg-[#f8f8f8] h-[250px] w-full flex flex-col items-center justify-center">
      <div className="w-full">
        <h1 className="text-6xl font-bold text-indigo-500 text-center">
          {props.title}
        </h1>
        <div className="pt-10 w-full flex justify-center">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
