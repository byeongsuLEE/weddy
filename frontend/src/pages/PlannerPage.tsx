import PlannerBox from "@/components/PlannerPage/PlannerBox";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


const Planner = () => ***REMOVED***

  return (
    <div className="m-5 flex flex-col items-center">
      <h1 className="mb-5">WEDDY 플래너</h1>
      <PlannerBox title="스튜디오" />
      <PlannerBox title="드레스" />
      <div className="w-[350px] h-[100px]">
      <Accordion>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <PlannerBox title="메이크업" />

        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      </div>

    </div>
  )
***REMOVED***

export default Planner;