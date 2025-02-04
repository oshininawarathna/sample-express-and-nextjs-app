"use client";
import Card from "./components/card/card";

export default function Home() {
  return (
    <main className=" bg-white flex min-h-screen flex-col  justify-between p-3 md:p-12 lg:p-5">
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className=" left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Users Details
      </p>
    </div>

    <div className="w-full max-w-5xl mt-8">
      <Card  />
    </div>
  </main>
  );
}
