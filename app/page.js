/** @format */

import Attribution from "@/app/_components/Attribution";
import AccountLogo from "@/public/images/account.svg";
import TwitchIcon from "@/public/images/twitch.svg";

export default function Home() {
  return (
    <>
      <h1 className="ml-[20rem] text-3xl">Hello, Next.js</h1>
      <Attribution />
      <AccountLogo />
      <TwitchIcon />
    </>
  );
}
