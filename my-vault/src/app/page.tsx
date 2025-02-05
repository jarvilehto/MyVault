import Image from "next/image";
import Divider from "./components/divider";
import VaultList from "./components/vaultList";

export default function Home() {
  return (
    <div className="bg-white  p-5 pt-7  ">
      <main className="">
        <div className="text-2xl">
          <h1 className=" text-3xl font-bold">MyVault</h1>
        </div>
        <Divider
          title={"Text Vaults"}
          styles={
            " text-bold bg-white w-full h-full flex justify-between border-b border-black pb-1 pr-1 mt-5 mb-2"
          }
        />
        <VaultList />

        <Divider
          title={"File Vaults"}
          styles={
            "bg-white w-full h-full flex justify-between border-b border-black pb-1 pr-1 mt-5"
          }
        />
        <VaultList />
      </main>
    </div>
  );
}
