import { cn } from "@/lib/utils"

export function PageLayout({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn('space-y-3', className)}>{children}</div>
    )
}

export function PageLayoutHeader({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn('px-4 py-3 flex items-center justify-between', className)}>{children}</div>
    )
}