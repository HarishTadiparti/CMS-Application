'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import CustomBreadcrumb from "@/components/custom/custom-breadcrumb"
import { Badge } from "@/components/ui/badge"
import { stateVariants } from "@/lib/utils"
import { Plus, Search, Settings2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { PageLayout, PageLayoutHeader, PageLayoutTitle } from "@/components/custom/page-layout"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
export default function BlogsPage() {
    const navigate = useRouter()
    const breadcrumbItems = [
        {
            name: "Blogs",
            link: "/blogs"
        }
    ]

    const tableData = [
        {
            title: "Understanding JavaScript Closures",
            category: "Programming",
            slug: "understanding-javascript-closures",
            publishedDate: "2024-12-20",
            status: "Published"
        },
        {
            title: "A Beginner's Guide to React",
            category: "Frontend Development",
            slug: "beginners-guide-to-react",
            publishedDate: "2024-12-18",
            status: "Draft"
        },
        {
            title: "Exploring the Power of Tailwind CSS",
            category: "Web Design",
            slug: "exploring-tailwind-css",
            publishedDate: "2024-12-15",
            status: "Published"
        },
        {
            title: "SEO Best Practices for 2024",
            category: "Digital Marketing",
            slug: "seo-best-practices-2024",
            publishedDate: "2024-12-10",
            status: "Archived"
        },
        {
            title: "Top 10 UI/UX Trends for 2024",
            category: "UI/UX Design",
            slug: "ui-ux-trends-2024",
            publishedDate: "2024-12-08",
            status: "Published"
        },
        {
            title: "The Evolution of Web3 Technology",
            category: "Blockchain",
            slug: "evolution-of-web3-technology",
            publishedDate: "2024-12-05",
            status: "Draft"
        },
        {
            title: "How to Build a Blog with Next.js and MDX",
            category: "Web Development",
            slug: "build-blog-with-nextjs-mdx",
            publishedDate: "2024-12-02",
            status: "Published"
        },
        {
            title: "Mastering Redux for State Management",
            category: "Programming",
            slug: "mastering-redux-state-management",
            publishedDate: "2024-11-30",
            status: "Archived"
        },
        {
            title: "A Comprehensive Guide to Zod and React Hook Form",
            category: "Frontend Development",
            slug: "zod-react-hook-form-guide",
            publishedDate: "2024-11-25",
            status: "Published"
        },
        {
            title: "Breaking Down the Java Interview Questions",
            category: "Career Development",
            slug: "java-interview-questions",
            publishedDate: "2024-11-20",
            status: "Draft"
        }
    ]

    return (
        <PageLayout className="mx-4 mt-4">
            <div className="flex items-center justify-between">
                <PageLayoutTitle>Blogs</PageLayoutTitle>
                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size='sm' variant='outline'><Settings2 className="w-4 h-4" /> View</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button size='sm' onClick={() => navigate.push('/blogs/create-blog')}><Plus className="w-4 h-4" /> Create Blog</Button>
                </div>
            </div>

            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50">
                            <TableHead className="whitespace-nowrap">Title</TableHead>
                            {/* <TableHead>Image</TableHead> */}
                            <TableHead className="whitespace-nowrap">Category</TableHead>
                            <TableHead className="whitespace-nowrap">Slug</TableHead>
                            <TableHead className="whitespace-nowrap">Created Date</TableHead>
                            <TableHead className="whitespace-nowrap">State</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            tableData.map((data: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="whitespace-nowrap">{data.title}</TableCell>
                                    <TableCell className="whitespace-nowrap">{data.category}</TableCell>
                                    <TableCell className="whitespace-nowrap">{data.slug}</TableCell>
                                    <TableCell className="whitespace-nowrap">{data.publishedDate}</TableCell>
                                    <TableCell>
                                        <Badge className={`rounded-full font-normal ${stateVariants[data.status]} shadow-none`}>{data.status}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </PageLayout>
    )
}