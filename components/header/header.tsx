import { DigitalShopLabel } from "../digitalShopLabel";
import { TfiShoppingCartFull } from "react-icons/tfi";
export default function Header() {
  return (
    <div className="min-h-20 flex justify-between items-center p-2  bg-[#f59e0b]/50 backdrop: backdrop-blur-md backdrop-opacity-15">
      <DigitalShopLabel title="Digital Shop" />
      <TfiShoppingCartFull size={35} color="white" cursor={"pointer"} />
    </div>
  );
}
