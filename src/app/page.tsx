import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoNavigateCircle } from "react-icons/io5";
import Social from "@/components/Social";
import me from '../../public/me.jpg';

export const metadata: Metadata = {
  title: "Ana Sayfa"
};

export default function Home() {
  return (
    <main className="container mx-auto flex items-center justify-between content max-[767px]:max-w-full max-[767px]:px-4 max-[575px]:flex-col max-[575px]:gap-6 max-[575px]:justify-center">
      <section className="flex flex-col gap-4 max-[575px]:order-2">
        <h1 className="text-4xl font-semibold max-[767px]:text-2xl">Selam,</h1>
        <h2 className="text-4xl font-semibold max-[767px]:text-2xl">Ben Yücel YILMAZ</h2>
        <h3 className="text-xl font-normal max-[767px]:text-sm">Ben Bir <strong className="text-[#ff642d] font-medium">Web Geliştiricisiyim</strong></h3>
        <Link className="w-[180px] max-[576px]:w-full bg-[#ff642d] rounded-[50px] h-10 text-base text-white hover:border hover:border-solid hover:border-[#ff642d] hover:bg-white hover:text-[#ff642d] transition ease-linear duration-200 tracking-[.3px] flex justify-center items-center gap-1" href='/about'>
          Hakkımda
          <IoNavigateCircle />
        </Link>
        <Social />
      </section>
      <section className="max-[575px]:order-1">
        <Image src={me} alt='me' width={300} className="rounded-lg max-[767px]:w-60"/>
      </section>
    </main>
  );
}
