'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

export default function CustomBreadcrumb() {
    const pathname = usePathname()
    const breadcrumbItems = pathname.split('/').filter((item) => item !== '')

    const ToCamelCase = (str: string) => {
        const words = str.split('-')
        return words.map((word) => {
            if (word === 'cms') {
                return word.toUpperCase()
            }
            else {
                return word.charAt(0).toUpperCase() + word.slice(1)
            }
        }).join(' ')

    }

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbItems.length > 0 && <BreadcrumbSeparator />}
                {
                    breadcrumbItems.map((value: string, index: number) => (
                        <div className="flex items-center gap-1.5" key={index}>
                            <BreadcrumbItem>
                                {index < (breadcrumbItems.length - 1) ? <BreadcrumbLink href={`/${value}`}>{ToCamelCase(value)}</BreadcrumbLink> : <BreadcrumbPage>{ToCamelCase(value)}</BreadcrumbPage>}
                            </BreadcrumbItem>
                            {index < (breadcrumbItems.length - 1) && <BreadcrumbSeparator />}
                        </div>
                    ))
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}