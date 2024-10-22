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

interface DrawerBoxProps ***REMOVED***
  isOpen: boolean;
  onClose: () => void;
***REMOVED***



const DrawerBox: React.FC<DrawerBoxProps> = (***REMOVED*** isOpen, onClose ***REMOVED***) => ***REMOVED***
  return (
    <Drawer shouldScaleBackground open=***REMOVED***isOpen***REMOVED*** onOpenChange=***REMOVED***onClose***REMOVED***>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>추가</Button>
          <DrawerClose asChild>
            <Button variant="outline" onClick=***REMOVED***onClose***REMOVED***>취소</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
***REMOVED***;

export default DrawerBox;