import SidebarTopbarLayout from "@/layout/SidebarTopbarLayout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <SidebarTopbarLayout
      logo={
        <>
          <div className="dark:bg-foreground rounded-full p-1">
            <Image src="/logo.png" width={24} height={24} alt="logo" />
          </div>
          <span className="ml-1 font-bold">VisionCraft</span>
        </>
      }
      navLinks={[]}
      footer={
        <>
          <div className="mr-auto text-xs">
            <p>&copy; {new Date().getFullYear()}, VisionCraft</p>
          </div>
          <div className="ml-auto">
            <Link
              href="https://www.flaticon.com/free-icons/vision"
              title="vision icons"
              className="text-xs text-muted-foreground"
            >
              Logo by{" "}
              <span className="hover:underline">Anggara - Flaticon</span>
            </Link>
          </div>
        </>
      }
    >
      <div>Home</div>
    </SidebarTopbarLayout>
  );
}
