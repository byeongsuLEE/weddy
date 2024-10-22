import React, ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED***
  Accordion,
  AccordionContent,
  AccordionItem,
***REMOVED*** from "@/components/ui/accordion";
import PlannerBox from "./PlannerBox";

interface AccordionBoxProps ***REMOVED***
  title: string;
***REMOVED***

const AccordionBox = (***REMOVED*** title ***REMOVED***: AccordionBoxProps) => ***REMOVED***
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => ***REMOVED***
    setIsOpen((prev) => !prev);
  ***REMOVED***;

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <div onClick=***REMOVED***handleClick***REMOVED***>
          <PlannerBox title=***REMOVED***title***REMOVED*** />
        </div>
        ***REMOVED***isOpen && (
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        )***REMOVED***
      </AccordionItem>
    </Accordion>
  );
***REMOVED***;

export default AccordionBox;
