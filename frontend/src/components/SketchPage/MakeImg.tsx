import { saveDress } from "@/api/dressApi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { capturedImageState } from "@/store/imageState";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

interface PopoverDemoProps {
  isOpen: boolean;
  blobData: Blob | null;
  setIsOpen: (open: boolean) => void;
  onSave: () => void;
}

const MakeImg = ({ isOpen, setIsOpen, blobData, onSave }: PopoverDemoProps) => {
  const [studioName, setStudioName] = useState("");
  const [dressName, setDressName] = useState("");
  const setCapturedImageState = useSetRecoilState(capturedImageState);
  const navigate = useNavigate();

  const onClick = async () => {
    if (blobData) {
      try {
        // FormData 객체 생성 및 데이터 추가
        const formData = new FormData();
        const sketch = {
          studio: studioName,
          dressName: dressName,
        };
        formData.append("sketch", new Blob([JSON.stringify(sketch)], { type: "application/json" }));
        const file = new File([blobData], "image.png", { type: "image/png" });

        // 변환된 파일을 FormData에 추가
        formData.append("image", file);

        // saveDress 함수 호출하여 FormData 전송
        await saveDress(formData);

        // Blob을 Recoil 상태로 저장 (필요할 경우)
        setCapturedImageState(blobData);
        setIsOpen(false);
        setStudioName("");
        setDressName("");
        onSave(); 
        setIsOpen(false);
        // 전송 후 페이지 이동
        navigate("/dress");
      } catch (error) {
        console.error("이미지 저장 중 오류가 발생했습니다:", error);
      }
    } else {
      console.error("imgURL이 비어 있습니다. 캔버스 캡처 과정에서 문제가 있는지 확인하세요.");
    }
  };

  return (
    <>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <Button style={{ display: "none" }} variant="outline"></Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>스케치 이미지 만들기</AlertDialogTitle>
            <AlertDialogDescription style={{ display: "flex", flexDirection: "column" }}>
              <Input
                id="studioName"
                placeholder="스튜디오명"
                className="col-span-2 h-10 my-2"
                value={studioName}
                onChange={(e) => setStudioName(e.target.value)}
              />
              <Input
                id="dressName"
                placeholder="드레스명"
                className="col-span-2 h-10 my-2"
                value={dressName}
                onChange={(e) => setDressName(e.target.value)}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={onClick}>스케치 저장</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default MakeImg;
