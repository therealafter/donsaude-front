import Image from "next/image";

interface SiderUserProps {
  name: string;
  financialManager: string;
}

export const SiderUserProfile = ({
  name,
  financialManager,
}: SiderUserProps) => {
  return (
    <div className="w-44 h-10 mt-8 relative bg-slate-200 rounded-full items-center justify-center">
      <div className="w-6 h-6 left-[4px] top-[4px] absolute mt-1 bg-pink-700 rounded-full">
        <Image src="./images/Circle.svg" alt="Circle" width={26} height={26} />
      </div>
      <div className="left-[38px] top-[4px] absolute text-gray-900 text-opacity-60 text-xs font-bold">
        {financialManager}
      </div>
      <div className="left-[38px] top-[20px] absolute text-gray-700 text-opacity-60 text-xs font-normal">
        {name}
      </div>
    </div>
  );
};
