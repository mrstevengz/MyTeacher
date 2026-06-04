"use client";

import { TeacherCard } from "@/components/TeacherCard";
import { useRouter } from "next/navigation";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  const router = useRouter();

  function navigateClick(route) {
    router.push(route);
  }

  return (
    <div className="pt-20 px-4 flex flex-col items-center mb-5">
      <div className="w-full max-w-5xl px-2 flex flex-col gap-4">
        {/* Search bar */}
        <SearchBar />

        {/* DIV FOR PROFESSORS */}
        <TeacherCard
          name="Steven Sequeira"
          rating="4.8"
          role="Student"
          faculty="FIA"
          onClick={() => {
            navigateClick("/teacher/id");
          }}
        />
      </div>
    </div>
  );
}
