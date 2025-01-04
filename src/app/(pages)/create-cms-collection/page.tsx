'use client'

import { defineStepper } from "@stepperize/react";
import Stepper from "@/components/custom/stepper";
import CollectionDetailsForm from "./collection-details-form";
import ChooseTemplateForm from "./choose-template-form";

const { useStepper } = defineStepper(
    { id: "details", title: "Create Collection", description: "First step" },
    { id: "template", title: "Choose Template", description: "Second step" },
    { id: "fields", title: "Customize Fields", description: "Third step" }
);

export default function CreateCMSPage() {
    const stepper = useStepper();

    return (
        <div className="space-y-4">
            <div className="pt-4">
                <Stepper stepper={stepper} />
            </div>
            <div className="px-4 pt-4">
                {stepper.switch({
                    details: () => <CollectionDetailsForm />,
                    template: () => <ChooseTemplateForm />,
                })}
            </div>
        </div>
    )
}