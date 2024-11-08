import html2canvas from 'html2canvas';
import ***REMOVED*** MutableRefObject ***REMOVED*** from 'react';

export const makeImage = async (pageRef: MutableRefObject<HTMLDivElement | null>) => ***REMOVED***
  const input = pageRef.current;

  if (input) ***REMOVED***
    const canvas = await html2canvas(input);
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const margin = 20;

    const newCanvas = document.createElement('canvas');
    newCanvas.width = imgWidth + margin * 2;
    newCanvas.height = imgHeight + margin * 2;
    const ctx = newCanvas.getContext('2d');

    if (ctx) ***REMOVED***

      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);

      ctx.drawImage(canvas, margin, margin, imgWidth, imgHeight);
    ***REMOVED***

    const imgData = newCanvas.toDataURL('image/png');

    const blob = await (await fetch(imgData)).blob();

    const file = new File([blob], 'contract.png', ***REMOVED*** type: 'image/png' ***REMOVED***);

    return file;
  ***REMOVED***
***REMOVED***