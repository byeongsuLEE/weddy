import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { SyntheticEvent } from 'react';

interface scoreProp {
  getScore: (rating: number) => void;
};

const RatingBox = ({ getScore }: scoreProp) => {

  const handleScore = (event: SyntheticEvent<Element>, value: number | null) => {
    if (value !== null && event) {
      getScore(value);
    };
  };

  return (
    <>
      <Stack spacing={1}>
        <Rating name="size-medium" defaultValue={0} onChange={handleScore} />
      </Stack>
    </>
  );
};

export default RatingBox;
