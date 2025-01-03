import { type Stepper } from "@stepperize/react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface Step {
    id: string,
    title: string,
    description: string
}

export default function Stepper({ stepper }: { stepper: Stepper<any> }) {

    return (
        <div className="mx-auto w-[40%] h-[68px] flex items-start justify-center">
            {stepper.all.map((step: Step, index: number) => (
                <div key={index} className={`flex items-center ${index < stepper.all.length - 1 ? 'flex-grow' : ''}`}>
                    <Button
                        variant={index <= stepper.current.index ? 'default' : 'secondary'}
                        className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full"
                        onClick={() => stepper.goTo(step.id)}
                    >
                        {index + 1}
                        <h3 className="-bottom-7 absolute text-black">{step.title}</h3>
                    </Button>
                    {index < stepper.all.length - 1 && (
                        <Separator className={`flex-grow h-[1.5px] ${index < stepper.current.index ? 'bg-primary' : 'bg-zinc-200'}`} />
                    )}
                </div>
            ))}
        </div>
    )
}