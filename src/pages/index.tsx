import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Arrow from "@/components/Arrow/Arrow";
import Rainbow from "@/components/Rainbow";
import About from "@/components/About";
import ServicesSection from "@/components/ServiceCard/ServiceCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="z-10 max-w-5xl w-full shadow-top items-center justify-between font-mono text-sm lg:flex">
          <Link href="/login" className="fixed font-semibold left-0 top-0 flex w-full justify-center border-b border-green-500 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-green-600 lg:p-4 lg:dark:bg-zinc-800/30 text-white hover:bg-green-700">
            Get started With Ago-Input
          </Link>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ago-input-logo.svg"
                alt="Vercel Logo"
                className="dark:invert logo"
                width={50}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        {/* <div className="relative z-20 w-full h-screen flex items-center justify-center p-4">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/farmers-using-smart-device-for-crop-monitoring.svg"
          alt="Ago Input Store Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div> */}
        <div className="relative z-20 w-full h-screen flex items-center justify-center p-4 shadow-md">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            // src="/farmers-using-smart-device-for-crop-monitoring.svg"
            src="/farmer-using-smart-farm-application.svg"
            alt="Ago Input Store Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <About />
        <Rainbow />
        <Arrow />
        <ServicesSection />
      </main>
    </>
  );
}
