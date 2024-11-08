import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ***REMOVED*** SyntheticEvent ***REMOVED*** from 'react';

interface scoreProp ***REMOVED***
  getScore: (rating: number) => void;
***REMOVED***;

const RatingBox = (***REMOVED*** getScore ***REMOVED***: scoreProp) => ***REMOVED***

  const handleScore = (event: SyntheticEvent<Element>, value: number | null) => ***REMOVED***
    if (value !== null && event) ***REMOVED***
      getScore(value);
    ***REMOVED***;
  ***REMOVED***;

  return (
    <>
      <Stack spacing=***REMOVED***1***REMOVED***>
        <Rating name="size-medium" defaultValue=***REMOVED***0***REMOVED*** onChange=***REMOVED***handleScore***REMOVED*** />
      </Stack>
    </>
  );
***REMOVED***;

export default RatingBox;
