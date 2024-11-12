import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED***
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
***REMOVED*** from "@/components/ui/alert-dialog";
import ***REMOVED*** Button ***REMOVED*** from "@/components/ui/button";
import ***REMOVED*** Input ***REMOVED*** from "@/components/ui/input";
import ***REMOVED*** useSetRecoilState ***REMOVED*** from "recoil";
import ***REMOVED*** capturedImageState ***REMOVED*** from "@/store/imageState";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";

interface PopoverDemoProps ***REMOVED***
  isOpen: boolean;
  imgURL: string;
  setIsOpen: (open: boolean) => void;
***REMOVED***

// base64 데이터를 Blob으로 변환하는 함수
const base64ToBlob = (base64: string, contentType: string) => ***REMOVED***
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) ***REMOVED***
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  ***REMOVED***
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], ***REMOVED*** type: contentType ***REMOVED***);
***REMOVED***;

const MakeImg = (***REMOVED*** isOpen, setIsOpen, imgURL ***REMOVED***: PopoverDemoProps) => ***REMOVED***
  const [studioName, setStudioName] = useState("");
  const [dressName, setDressName] = useState("");
  const setCapturedImageState = useSetRecoilState(capturedImageState);

  const navigate = useNavigate();

  const onClick = () => ***REMOVED***
    if (imgURL) ***REMOVED***
      try ***REMOVED***
        // base64 데이터를 Blob으로 변환
        const blob = base64ToBlob(imgURL, "image/png");
  
        // Blob을 Recoil 상태로 저장
        setCapturedImageState(blob);
        setIsOpen(false);
        setStudioName("");
        setDressName("");
  
        navigate("/test");
      ***REMOVED*** catch (error) ***REMOVED***
        console.error("Blob 변환 중 오류가 발생했습니다:", error);
      ***REMOVED***
    ***REMOVED*** else ***REMOVED***
      console.error("imgURL이 비어 있습니다. 캔버스 캡처 과정에서 문제가 있는지 확인하세요.");
    ***REMOVED***
  
    // console.log(studioName, dressName, imgURL);
  ***REMOVED***;
  

  return (
    <AlertDialog open=***REMOVED***isOpen***REMOVED*** onOpenChange=***REMOVED***setIsOpen***REMOVED***>
      <AlertDialogTrigger asChild>
        <Button style=***REMOVED******REMOVED*** display: "none" ***REMOVED******REMOVED*** variant="outline"></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>스케치 이미지 만들기</AlertDialogTitle>
          <AlertDialogDescription style=***REMOVED******REMOVED*** display: "flex", flexDirection: "column" ***REMOVED******REMOVED***>
            <Input
              id="studioName"
              placeholder="스튜디오명"
              className="col-span-2 h-10 my-2"
              value=***REMOVED***studioName***REMOVED***
              onChange=***REMOVED***(e) => setStudioName(e.target.value)***REMOVED***
            />
            <Input
              id="dressName"
              placeholder="드레스명"
              className="col-span-2 h-10 my-2"
              value=***REMOVED***dressName***REMOVED***
              onChange=***REMOVED***(e) => setDressName(e.target.value)***REMOVED***
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction onClick=***REMOVED***onClick***REMOVED***>스케치 저장</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
***REMOVED***;

export default MakeImg;
