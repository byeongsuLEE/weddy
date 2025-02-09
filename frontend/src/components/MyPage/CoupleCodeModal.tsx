import { connectCoupleCode } from '@/api/userApi';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const style = {
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
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [code, setCode] = React.useState<string>("");

  //== 커플 코드 연결 ==//
  const handleConnect = async () => {
    await connectCoupleCode(code);
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleOpen}>
        <button className='bg-main2 w-[130px] h-[30px] flex items-center justify-center rounded-xl p-1'>상대 코드 입력</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title">
            상대방의 커플 코드를 입력해주세요.
          </Typography>
          <Typography id="modal-modal-description"   sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
              <input type="text" className="my-2 p-2 w-[250px] h-[40px] border border-gray-400 rounded-lg" onChange={(e) => setCode(e.target.value)} />
              <button className='bg-main2 rounded-lg h-[30px] my-2' onClick={handleConnect}>연결</button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}