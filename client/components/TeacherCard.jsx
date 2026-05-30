export function TeacherCard({name, rating, role, faculty, onClick}) {
    return(
        <div onClick = {onClick} className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800 p-8 flex flex-row items-center gap-8 hover:shadow-xl hover:bg-brand-100/5 hover:border-accent transition-shadow duration-200 cursor-pointer w-full">
          {/* Rating block */}
          <div className="flex flex-col items-center justify-center min-w-15 border-r border-neutral-200 dark:border-neutral-700 pr-6">
            <span className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 leading-none">
              {rating}
            </span>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">
              Rating
            </span>
          </div>
          {/* Info block */}
          <div className="flex flex-col gap-1 flex-1">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 leading-tight">
              {name}
            </h2>
            <p className="text-sm text-indigo-500 font-medium">
              {role}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {faculty}
            </p>
          </div>
        </div>
    )
}