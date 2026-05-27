import Image from "next/image";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="pt-8 flex flex-col justify-center items-center mb-5">
      {/* Search bar */}
      <form className="w-full max-w-2xl px-4">
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
              className="h-12 pl-11 pr-4 rounded-xl text-base bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 shadow-sm focus-visible:shadow-md"
            />
          </div>
        </Field>
      </form>

      {/* DIV FOR PROFESSORS */}
      <div className="flex flex-col gap-4 py-8 w-full max-w-2xl px-4">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800 p-6 flex flex-row items-center gap-6 hover:shadow-xl hover:bg-brand-100/5 hover:border-accent transition-shadow duration-200 cursor-pointer">
          {/* Rating block */}
          <div className="flex flex-col items-center justify-center min-w-20 border-r border-neutral-200 dark:border-neutral-700 pr-6">
            <span className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 leading-none">
              4.0
            </span>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">
              Rating
            </span>
          </div>
          {/* Info block */}
          <div className="flex flex-col gap-1 flex-1">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 leading-tight">
              Steven Sequeira
            </h2>
            <p className="text-sm text-indigo-500 font-medium">
              Estudiante UAM
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Facultad de Ciencias
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
