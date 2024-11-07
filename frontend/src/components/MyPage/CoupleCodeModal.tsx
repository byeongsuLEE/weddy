import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const style = ***REMOVED***
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 350,
  height: 200,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
***REMOVED***;

export default function BasicModal() ***REMOVED***
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [code, setCode] = React.useState<string>("");


  //== 커플 코드 연결 ==//
  const handleConnect = async () => ***REMOVED***
    console.log(code);
    // await connectCoupleCode(code);
    setOpen(false);
  ***REMOVED***;

  return (
    <>
      <div onClick=***REMOVED***handleOpen***REMOVED***>
        <button className='bg-main2 w-[130px] h-[30px] flex items-center justify-center rounded-xl p-1'>상대 코드 입력</button>
        ***REMOVED***/* <TodoButton title="상대 코드 입력" colorId=***REMOVED***2***REMOVED*** /> */***REMOVED***
      </div>
      <Modal
        open=***REMOVED***open***REMOVED***
        onClose=***REMOVED***handleClose***REMOVED***
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx=***REMOVED***style***REMOVED***>
          <Typography id="modal-modal-title">
            상대방의 커플 코드를 입력해주세요.
          </Typography>
          <Typography id="modal-modal-description" sx=***REMOVED******REMOVED*** mt: 2 ***REMOVED******REMOVED***>
            <div className='flex flex-col'>
              <input type="text" className="my-2 p-2 w-[250px] h-[40px] border border-gray-400 rounded-lg" onChange=***REMOVED***(e) => setCode(e.target.value)***REMOVED*** />
              <button className='bg-main2 rounded-lg h-[30px] my-2' onClick=***REMOVED***handleConnect***REMOVED***>연결</button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
***REMOVED***
