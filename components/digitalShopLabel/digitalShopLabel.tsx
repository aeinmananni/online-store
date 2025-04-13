import { LiaShoppingBasketSolid } from "react-icons/lia";

type Props = {
  title: string;
};

export default function DigitalShopLabel({ title }: Props) {
  return (
    <div className="flex items-center gap-2 text-white">
      <LiaShoppingBasketSolid size={30} />
      <span className="font-semibold text-xl italic text-white">{title}</span>
    </div>
  );
}
