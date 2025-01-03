import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "../ui/button"
import { Bell } from 'lucide-react';

export default function NotificationPopover() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button size='icon' variant='ghost'><Bell /></Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="text-sm text-center text-muted-foreground">No Notification</PopoverContent>
        </Popover>
    )
}