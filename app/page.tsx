import LoginCard from "@/components/LoginCard";
import landingImage from "../assets/landingImage.png";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <div className=" flex min-h-dvh items-center justify-center h-dvh w-6/12">
        <LoginCard />
      </div>
      <div className="flex h-dvh w-6/12">
        <img
          src={landingImage.src}
          alt="landingImage"
          className="w-full h-full object-cover object-left"
        />
      </div>
    </main>
  );
}
