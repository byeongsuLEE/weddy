import CategoryButton from "@/common/CategoryButton";
import ***REMOVED*** Button ***REMOVED*** from "../ui/button";
import ***REMOVED***
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
***REMOVED*** from "../ui/drawer";
import DatePick from "./DatePick";

interface DrawerBoxProps ***REMOVED***
  isOpen: boolean;
  onClose: () => void;
***REMOVED***



const DrawerBox: React.FC<DrawerBoxProps> = (***REMOVED*** isOpen, onClose ***REMOVED***) => ***REMOVED***

  return (
    <div>
      <Drawer shouldScaleBackground open=***REMOVED***isOpen***REMOVED*** onOpenChange=***REMOVED***onClose***REMOVED***>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-gray-500">일정 추가</DrawerTitle>
            <DrawerDescription>
              <DatePick title="시작일" />
              <DatePick title="종료일" />
            </DrawerDescription>
            <DrawerDescription>
              <input type="text" placeholder="일정을 입력하세요." className="w-[320px] border rounded-md p-3 my-2" />
              <CategoryButton />
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>추가</Button>
            <DrawerClose asChild>
              <Button variant="outline">취소</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
***REMOVED***;

export default DrawerBox;