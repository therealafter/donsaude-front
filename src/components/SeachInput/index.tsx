import Image from "next/image";

export const SearchInput = () => {
  return (
    <div className="relative flex items-center">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Image
          className="fill-current text-gray-500"
          src="./images/MagnifyingGlass.svg"
          alt="Ícone de pesquisa"
          width={20}
          height={20}
        />
      </div>
      <input
        className="rounded-full bg-white px-12 py-2 pl-12 border-2 border-gray-300 text-sm font-normal text-gray-500"
        placeholder="Buscar usuário"
      />
    </div>
  );
};
