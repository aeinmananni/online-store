import { DigitalShopLabel } from "@/components";
import { Carousel } from "@/UI";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Carousel />
      <span className="text-white italic">
        🛍️ Welcome to Digital Shop – Your Ultimate Online Shopping Destination!
      </span>
      <DigitalShopLabel title="Shop with Confidence and Joy" />
      <Link
        className="bg-[#f59e0b] text-white  p-1 rounded-md duration-300 hover:bg-[#d1ae71]"
        href={"products"}
      >
        Go To Products
      </Link>
    </div>
  );
}
