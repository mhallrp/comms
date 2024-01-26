"use client";
import CommsIcon from "../../assets/commsIcon.png";
import FilledButton from "../Buttons/FilledButton";
import BorderButton from "../Buttons/BorderButton";

export default function NavBar() {
  return (
    <div className="flex flex-row fixed w-dvw justify-between shadow-mainShadow items-center">
      <img src={CommsIcon.src} alt="commsIcon" className="w-10 h-auto m-3" />
      <div className="flex m-2 items-center gap-2.5 text-baseGrey">
        <p className=" text-xs">Firstname Surname</p>
        <FilledButton title="Post job" action={() => console.log("Post job")} />
        <BorderButton title="Sign in" action={() => console.log("Sign in")} />
      </div>
    </div>
  );
}
