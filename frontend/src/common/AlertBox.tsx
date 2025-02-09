import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface AlertBoxProps {
  title: string;
  description: string;
}

const AlertBox = ({ title, description }: AlertBoxProps) => {
  return (
    <div className="relative"> {/* 부모 요소에 relative 적용 */}
      <Alert className="absolute top-0 left-0 z-50 w-full bg-opacity-90 shadow-lg">
        <Terminal className="h-4 w-4" />
        <AlertTitle className="font-bold mt-1">{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertBox;
