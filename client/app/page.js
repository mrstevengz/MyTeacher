"use client";

import Image from "next/image";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { TeacherCard } from "@/components/TeacherCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function navigateClick(route) {
    router.push(route);
  }

  return (
    <div className="pt-20 px-4 flex flex-col items-center mb-5">
      <div className="w-full max-w-5xl px-2 flex flex-col gap-4">
        {/* Search bar */}
        <form>
          <Field>
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-neutral-400 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z"
                />
              </svg>
              <Input
                type="text"
                placeholder="Buscar profesores..."
                className="h-14 pl-11 pr-4 rounded-xl text-base bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 shadow-sm focus-visible:shadow-md"
              />
            </div>
          </Field>
        </form>

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
