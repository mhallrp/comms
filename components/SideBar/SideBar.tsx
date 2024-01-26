"use client";
import { useState } from "react";

import SideBarButton from "../Buttons/SideBarButton";
import SectionSelector from "./SectionSelector";

export default function SideBar() {
  const jobsButtons = [
    { title: "Jobs", active: true },
    { title: "My applications", active: false },
    { title: "My job posts", active: false },
  ];

  const profileButtons = [
    { title: "Profile", active: true },
    { title: "My certificates", active: false },
    { title: "My CV", active: false },
  ];

  const [buttons, setButton] = useState(jobsButtons);

  return (
    <div
      style={{ height: "calc(100dvh - 4rem)" }}
      className="flex fixed flex-row h-dvh w-fit rounded-xl shadow-mainShadow top-16 bottom-0"
    >
      <SectionSelector
        setButton={setButton}
        jobsButtons={jobsButtons}
        profileButtons={profileButtons}
      />
      <div className="flex flex-col h-full m-4 gap-2">
        {buttons.map((data, index) => {
          return (
            <SideBarButton
              key={index}
              title={data.title}
              action={() => console.log(data.title)}
              active={data.active}
            />
          );
        })}
      </div>
    </div>
  );
}
