'use client'
import { SidebarProvider } from "./ui/sidebar";

export default function AppSidebarProvider({ children }: { children: React.ReactNode }) {

    return (
        <SidebarProvider defaultOpen={true}>
            {/* <SidebarTrigger /> */}
            {children}
        </SidebarProvider>
    )
}