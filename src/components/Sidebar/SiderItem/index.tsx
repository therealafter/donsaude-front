import Image from "next/image";
import Link from "next/link";

interface SiderItemProps {
  name: string;
  icon: string;
  isActive: boolean;
}

export const SiderItem = ({ name, icon, isActive }: SiderItemProps) => {
  return (
    <li className={isActive === true ? "bg-[#D0005E] rounded-3xl" : ""}>
      <Link
        href="/"
        className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 p-2 rounded-3xl`}
      >
        <span className="inline-flex items-center justify-center h-12 w-20 text-lg text-gray-900">
          <Image src={icon} alt={name} width={20} height={20} />
        </span>
        <div className="right-5 relative items-center justify-center">
          <span
            className={`text-sm font-medium ${
              isActive
                ? "#FFF hover:text-gray-800"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {name}
          </span>
        </div>
      </Link>
    </li>
  );
};
