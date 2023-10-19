import Image from "next/image";
import { SiderItem } from "./SiderItem";
import { SiderUserProfile } from "./SiderUserProfile";

export const Sidebar = () => {
  return (
    <>
      <div className="min-h-screen flex flex-row bg-gray-100">
        <div className="flex flex-col w-56 bg-white overflow-hidden">
          <div className="flex items-center justify-center h-20 py-4">
            <Image src="./images/Logo.svg" alt="Logo" width={123} height={36} />
          </div>
          <ul className="flex flex-col py-4 px-2">
            <SiderItem
              name="Indicadores"
              icon="./images/ChartPie.svg"
              isActive={false}
            />

            <SiderItem
              name="Atendimento"
              icon="./images/IdentificationBadge.svg"
              isActive={false}
            />

            <SiderItem
              name="Financeiro"
              icon="./images/CurrencyDollar.svg"
              isActive={false}
            />

            <SiderItem
              name="Parceiros"
              icon="./images/UsersFour.svg"
              isActive={true}
            />

            <SiderItem
              name="Usuários"
              icon="./images/User.svg"
              isActive={false}
            />

            <li className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 p-2 rounded-3xl cursor-pointer">
              <span className="inline-flex items-center justify-center h-12 w-20 text-lg text-gray-900">
                <Image
                  src="./images/GearSix.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                />
              </span>

              <div className="right-5 relative flex items-center">
                <span className="text-sm font-medium">Configurações</span>
                <span className="text-sm text-gray-500 ml-1">
                  <Image
                    src="./images/CaretDown.svg"
                    alt="Logo"
                    width={10}
                    height={10}
                  />
                </span>
              </div>
            </li>
          </ul>

          <div className="flex flex-col w-56 h-20 bg-white rounded-r-3xl overflow-hidden items-center justify-center">
            <SiderUserProfile
              name={"Edilson Sousa"}
              financialManager={"Ibiporã"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
