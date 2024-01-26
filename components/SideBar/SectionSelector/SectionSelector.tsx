import { useState } from "react";
import JobsIconActive from "@/assets/jobsIconActive.png";
import ProfileIconInactive from "@/assets/profileIconInactive.png";
import JobsIconInactive from "@/assets/jobsIconInactive.png";
import ProfileIconActive from "@/assets/profileIconActive.png";

interface SectionSelectorProps {
  setButton: React.Dispatch<React.SetStateAction<SideButtonType[]>>;
  jobsButtons: SideButtonType[];
  profileButtons: SideButtonType[];
}

interface SideButtonType {
  title: string;
  active: boolean;
}

const SectionSelector: React.FC<SectionSelectorProps> = ({
  setButton,
  jobsButtons,
  profileButtons,
}) => {
  const [jobSectionActive, setJobsSectionActive] = useState(true);

  return (
    <div className="flex flex-col h-full bg-black rounded-br-xl rounded-tr-xl">
      <button
        onClick={() => {
          setJobsSectionActive(true);
          setButton(jobsButtons);
        }}
        className="h-6 w-6 m-4"
      >
        <img
          src={jobSectionActive ? JobsIconActive.src : JobsIconInactive.src}
          alt="jobs icon"
        />
      </button>
      <button
        onClick={() => {
          setJobsSectionActive(false);
          setButton(profileButtons);
        }}
        className="h-6 w-6 m-4"
      >
        <img
          src={
            jobSectionActive ? ProfileIconInactive.src : ProfileIconActive.src
          }
          alt="profile icon"
        />
      </button>
    </div>
  );
};

export default SectionSelector;
