import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function Dashboard() {
  return (
    <main className="flex flex-col h-dvh">
      <NavBar />
      <SideBar />
    </main>
  );
}
