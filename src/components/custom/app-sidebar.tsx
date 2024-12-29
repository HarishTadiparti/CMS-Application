import { Calendar, Home, Inbox, Search, Settings, Database, Plus } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { SidebarUser } from "./sidebar-user"
import { group } from "console"

const items = [
    {
        groupLabel: "Public",
        items: [
            {
                title: "Home",
                url: "/",
                icon: Home,
            },
            {
                title: "Settings",
                url: "#",
                icon: Settings,
            },
        ]
    },
    {
        groupLabel: "CMS Collections",
        items: [
            {
                title: "Blogs",
                url: "/blogs",
                icon: Database,
            },
        ]
    }
]

const user = {
    avatar: 'https://github.com/shadcn.png',
    name: 'Shad',
    email: 'shad.cn@gmail.com'
}
export default function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                {
                    items.map((group) => (
                        <SidebarGroup key={group.groupLabel}>
                            <div className="relative group/item flex items-center justify-between hover:bg-secondary rounded-md">
                                <SidebarGroupLabel>{group.groupLabel}</SidebarGroupLabel>
                                <Plus className="mr-2 w-4 h-4 text-transparent group-hover/item:text-sidebar-foreground/60" />
                            </div>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {group.items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    ))
                }
            </SidebarContent>
            <SidebarFooter>
                <SidebarUser user={user} />
            </SidebarFooter>
        </Sidebar>
    )
}