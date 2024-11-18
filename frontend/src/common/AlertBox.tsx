import ***REMOVED***
  Alert,
  AlertDescription,
  AlertTitle,
***REMOVED*** from "@/components/ui/alert";
import ***REMOVED*** Terminal ***REMOVED*** from "lucide-react";

interface AlertBoxProps ***REMOVED***
  title: string;
  description: string;
***REMOVED***

const AlertBox = (***REMOVED*** title, description ***REMOVED***: AlertBoxProps) => ***REMOVED***
  return (
    <div className="relative"> ***REMOVED***/* 부모 요소에 relative 적용 */***REMOVED***
      <Alert className="absolute top-0 left-0 z-50 w-full bg-opacity-90 shadow-lg">
        <Terminal className="h-4 w-4" />
        <AlertTitle className="font-bold mt-1">***REMOVED***title***REMOVED***</AlertTitle>
        <AlertDescription>***REMOVED***description***REMOVED***</AlertDescription>
      </Alert>
    </div>
  );
***REMOVED***;

export default AlertBox;
