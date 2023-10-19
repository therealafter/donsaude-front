import { Button } from "@/components/Button";
import { SearchInput } from "@/components/SeachInput";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex w-full h-20 items-center justify-between pl-52 pr-52">
      <Button
        icon="./images/PlusCircle.svg"
        backgroundColor="#FFF0F7"
        textColor="#D0005E"
        name="Novo atendimento"
        width={185}
        height={10}
      />
      <div className="ml-8">
        <SearchInput />
      </div>
      <div className="flex items-center ml-16 space-x-8">
        <Image
          className="fill-current text-gray-500"
          src="./images/Star.svg"
          alt="Star"
          width={15}
          height={15}
        />
        <Image
          className="fill-current text-gray-500"
          src="./images/Hug.svg"
          alt="Hug"
          width={15}
          height={15}
        />
        <div className="w-1 h-32 bg-gray-300 rounded-md"></div>
        <Image
          className="fill-current text-gray-500"
          src="./images/UserVector.svg"
          alt="User vector"
          width={14}
          height={14}
        />
      </div>
    </div>
  );
};
