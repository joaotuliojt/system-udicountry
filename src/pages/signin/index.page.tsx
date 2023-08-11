import Image from "next/image";

import Logo from "../../assets/logo-udicountry.png";
import { GoogleLogo } from "@phosphor-icons/react";

export default function SignInPage() {
  return (
    <main className="bg-slate-50 flex w-screen h-screen place-items-center justify-center flex-col gap-10">
      <Image
        src={Logo}
        width={200}
        quality={80}
        alt="Logo representando a Udi Country"
        className=""
      />

      <button className="transition ease-in-out flex items-center gap-2 border border-slate-950 text-slate-950 rounded-full px-4 py-2 hover:bg-slate-950 hover:text-slate-50">
        <GoogleLogo weight="bold" /> Acessar com Google
      </button>
    </main>
  );
}
