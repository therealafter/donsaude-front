import Image from "next/image";

interface ButtonProps {
  backgroundColor: string;
  textColor: string; // Adicione a propriedade textColor
  icon?: string;
  name: string;
  width: number;
  height: number;
}

export const Button = ({
  backgroundColor,
  textColor, // Use a propriedade textColor para definir a cor do texto
  name,
  icon,
  width,
  height,
}: ButtonProps) => {
  return (
    <button
      className={`flex bg-${backgroundColor} w-${width} h-${height} rounded-full justify-center items-center py-2 px-4 text-sm font-medium text-[${textColor}] hover:bg-pink-100 transition ease-in duration-200`}
    >
      {icon && (
        <span className="mr-2">
          <Image src={icon} alt={name} width={20} height={20} />
        </span>
      )}

      <h1
        className={`
          ${icon ? "text-xs" : "text-sm"}
        `}
      >
        {name}
      </h1>
    </button>
  );
};
