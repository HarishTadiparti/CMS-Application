'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import CustomBreadcrumb from "@/components/custom/custom-breadcrumb"
import { Badge } from "@/components/ui/badge"
import { stateVariants } from "@/lib/utils"
import { Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

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
        <div className="space-y-3">
            <div className="px-4 py-3 flex items-center justify-between">
                <CustomBreadcrumb items={breadcrumbItems} />
            </div>
            <div className="px-4 flex items-center justify-between">
                <h1 className="text-xl">Blogs</h1>
                <Button size='sm' onClick={() => navigate.push('/blogs/create-blog')}><Plus className="w-4 h-4" /> Create Blog</Button>
            </div>
            <div className="mx-4 border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="whitespace-nowrap">Title</TableHead>
                            {/* <TableHead>Image</TableHead> */}
                            <TableHead className="whitespace-nowrap">Category</TableHead>
                            <TableHead className="whitespace-nowrap">Slug</TableHead>
                            <TableHead className="whitespace-nowrap">Created Date</TableHead>
                            <TableHead className="whitespace-nowrap">State</TableHead>
                        </TableRow>
                        <TableRow>
                            <TableHead>
                                <div className="flex items-center">
                                    <Search className="mb-[1px] w-4 h-4" />
                                    <Input className="px-1 border-none shadow-none focus-visible:ring-0" placeholder="Search Title..." />
                                </div>
                            </TableHead>
                            <TableHead>
                                <div className="flex items-center">
                                    <Search className="mb-[1px] w-4 h-4" />
                                    <Input className="px-1 border-none shadow-none focus-visible:ring-0" placeholder="Search Category..." />
                                </div>
                            </TableHead>
                            <TableHead>
                                <div className="flex items-center">
                                    <Search className="mb-[1px] w-4 h-4" />
                                    <Input className="px-1 border-none shadow-none focus-visible:ring-0" placeholder="Search Slug..." />
                                </div>
                            </TableHead>
                            <TableHead>
                                <div className="flex items-center">
                                    <Search className="mb-[1px] w-4 h-4" />
                                    <Input className="px-1 border-none shadow-none focus-visible:ring-0" placeholder="Search Created Date..." />
                                </div>
                            </TableHead>
                            <TableHead className="overflow-hidden">
                                <div className="flex items-center overflow-hidden">
                                    <Search className="mb-[1px] w-4 h-4" />
                                    <Input className="px-1 border-none shadow-none focus-visible:ring-0" placeholder="Search State..." />
                                </div>
                            </TableHead>
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
        </div>
    )
}