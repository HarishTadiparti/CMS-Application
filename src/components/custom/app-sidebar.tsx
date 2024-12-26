import { Calendar, Home, Inbox, Search, Settings, Feather } from "lucide-react"
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
                title: "Inbox",
                url: "#",
                icon: Inbox,
            },
            {
                title: "Calendar",
                url: "#",
                icon: Calendar,
            },
            {
                title: "Search",
                url: "#",
                icon: Search,
            },
            {
                title: "Settings",
                url: "#",
                icon: Settings,
            },
        ]
    },
    {
        groupLabel: "Blog",
        items: [
            {
                title: "Blogs",
                url: "/blogs",
                icon: Feather,
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
                            <SidebarGroupLabel>{group.groupLabel}</SidebarGroupLabel>
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