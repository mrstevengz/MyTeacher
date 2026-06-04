export function TeacherCard(id, initials, author, date, rating) {
    return (
    <div key={id} className="bg-raised rounded-xl border border-border-default p-5 flex gap-4 hover:border-brand-fg/40 transition-colors duration-200">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white text-xs font-semibold">
            {initials}
        </div>
        <div className="flex flex-col gap-1 flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-medium text-text-primary">{author}</span>
            <span className="text-xs text-text-hint shrink-0">{date}</span>
        </div>
            <Stars rating={rating} />
            <p className="text-sm text-text-body mt-1">{comment}</p>
        </div>
    </div>
    )
}