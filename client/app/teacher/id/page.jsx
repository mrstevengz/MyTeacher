"use client"
import { Star } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

const mockReviews = [
    { id: 1, initials: "MG", author: "María García", comment: "Explica los conceptos de forma muy clara y siempre está disponible para resolver dudas.", rating: 5, date: "hace 2 días" },
    { id: 2, initials: "JP", author: "Jorge Pérez", comment: "Muy buen profesor, dinámico y accesible. Las clases son muy entretenidas.", rating: 4, date: "hace 1 semana" },
    { id: 3, initials: "AL", author: "Ana López", comment: "Excelente docente, sus explicaciones son muy detalladas y comprensibles.", rating: 5, date: "hace 2 semanas" },
]

function Stars({ rating, size = 14 }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map(i => (
                <Star
                    key={i}
                    size={size}
                    className={i <= rating ? "text-brand-fg fill-brand-fg" : "text-border-default"}
                />
            ))}
        </div>
    )
}

export default function TeacherPage() {
    return (
        <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-18 flex flex-col gap-6 animate-fade-up">

            {/* Profile Card */}
            <div className="bg-raised rounded-2xl shadow-md border border-border-default overflow-hidden">
                <div className="h-1.5 bg-brand-gradient" />
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">

                    {/* Avatar */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white text-xl font-bold shadow">
                        SS
                    </div>

                    {/* Name + role */}
                    <div className="flex flex-col items-center sm:items-start gap-0.5 flex-1">
                        <h1 className="text-3xl font-semibold tracking-tight text-text-primary">Steven Sequeira</h1>
                        <p className="text-sm font-medium text-brand-fg">Ingeniería Informática</p>
                        <p className="text-xs text-text-hint mt-0.5">Escuela Politécnica Superior</p>
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-6xl font-bold text-brand-fg leading-none">4.8</span>
                        <Stars rating={5} size={20} />
                        <span className="text-xs text-text-hint mt-0.5 mb-3">127 valoraciones</span>
                        <Link href="/login" className={buttonVariants({ size: "lg"})} >Rate</Link>
                    </div>

                    

                </div>
            </div>

            {/* Reviews Section */}
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-text-hint uppercase tracking-widest px-1">Valoraciones recientes</h2>

                {mockReviews.map(review => (
                    <div
                        key={review.id}
                        className="bg-raised rounded-xl border border-border-default p-5 flex gap-4 hover:border-brand-fg/40 transition-colors duration-200"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white text-xs font-semibold">
                            {review.initials}
                        </div>
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-sm font-medium text-text-primary">{review.author}</span>
                                <span className="text-xs text-text-hint shrink-0">{review.date}</span>
                            </div>
                            <Stars rating={review.rating} />
                            <p className="text-sm text-text-body mt-1">{review.comment}</p>
                        </div>
                    </div>
                ))}
            </section>

        </main>
    )
}
