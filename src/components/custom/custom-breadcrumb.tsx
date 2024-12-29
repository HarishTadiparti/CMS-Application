import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

interface ItemsType {
    name: string
    link: string
}
export default function CustomBreadcrumb({ items }: { items: ItemsType[] }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {
                    items.map((item: ItemsType, index: number) => (
                        <div className="flex items-center gap-1.5" key={index}>
                            <BreadcrumbItem>
                                {index < (items.length - 1) ? <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink> : <BreadcrumbPage>{item.name}</BreadcrumbPage>}
                            </BreadcrumbItem>
                            {index < (items.length - 1) && <BreadcrumbSeparator />}
                        </div>
                    ))
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}