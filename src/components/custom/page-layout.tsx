import { cn } from "@/lib/utils"

export function PageLayout({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn('space-y-3', className)}>{children}</div>
    )
}

export function PageLayoutHeader({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn('px-4 h-14 flex items-center justify-between bg-white bg-opacity-5 backdrop-blur-md border-b border-input/40', className)}>{children}</div>
    )
}

export function PageLayoutTitle({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={cn("text-lg font-semibold md:text-2xl", className)}>{children}</h1>
    )
}