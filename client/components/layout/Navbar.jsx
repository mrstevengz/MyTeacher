import Link from "next/link"
import { buttonVariants } from "../ui/button"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 border-b border-border-default bg-bg/80 backdrop-blur-md">
            <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="text-lg font-semibold tracking-tight text-text-primary">
                    MyTeacher
                </span>
            </Link>

            {/* <div className="hidden md:flex items-center gap-1 text-sm text-text-body">
                <Link href="#features" className="px-3 py-1.5 rounded-md hover:bg-muted hover:text-text-primary transition-colors">Features</Link>
                <Link href="#pricing" className="px-3 py-1.5 rounded-md hover:bg-muted hover:text-text-primary transition-colors">Pricing</Link>
                <Link href="#about" className="px-3 py-1.5 rounded-md hover:bg-muted hover:text-text-primary transition-colors">About</Link>
            </div> */}

            <Link href="/login" className={buttonVariants({ size: "sm" })}>Sign In</Link>
        </nav>
    )
}