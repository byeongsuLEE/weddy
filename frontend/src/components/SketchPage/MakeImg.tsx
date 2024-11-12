import ***REMOVED*** saveDress ***REMOVED*** from "@/api/dressApi";
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
import ***REMOVED*** capturedImageState ***REMOVED*** from "@/store/imageState";
import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";
import ***REMOVED*** useSetRecoilState ***REMOVED*** from "recoil";

interface PopoverDemoProps ***REMOVED***
  isOpen: boolean;
  blobData: Blob | null;
  setIsOpen: (open: boolean) => void;
***REMOVED***

const MakeImg = (***REMOVED*** isOpen, setIsOpen, blobData ***REMOVED***: PopoverDemoProps) => ***REMOVED***
  const [studioName, setStudioName] = useState("");
  const [dressName, setDressName] = useState("");
  const setCapturedImageState = useSetRecoilState(capturedImageState);
  const navigate = useNavigate();

  const onClick = async () => ***REMOVED***
    if (blobData) ***REMOVED***
      try ***REMOVED***
        // FormData 객체 생성 및 데이터 추가
        const formData = new FormData();
        const sketch = ***REMOVED***
          studio: studioName,
          dressName: dressName,
        ***REMOVED***;
        formData.append("sketch", new Blob([JSON.stringify(sketch)], ***REMOVED*** type: "application/json" ***REMOVED***));
        const file = new File([blobData], "image.png", ***REMOVED*** type: "image/png" ***REMOVED***);

      // 변환된 파일을 FormData에 추가
      formData.append("image", file);

        // saveDress 함수 호출하여 FormData 전송
        await saveDress(formData);

        // Blob을 Recoil 상태로 저장 (필요할 경우)
        setCapturedImageState(blobData);
        setIsOpen(false);
        setStudioName("");
        setDressName("");

        // 전송 후 페이지 이동
        navigate("/dress/img");
      ***REMOVED*** catch (error) ***REMOVED***
        console.error("이미지 저장 중 오류가 발생했습니다:", error);
      ***REMOVED***
    ***REMOVED*** else ***REMOVED***
      console.error("imgURL이 비어 있습니다. 캔버스 캡처 과정에서 문제가 있는지 확인하세요.");
    ***REMOVED***
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
