import React, ***REMOVED*** useRef, useState, useEffect ***REMOVED*** from 'react';

const Sketch = () => ***REMOVED***
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => ***REMOVED***
    const canvas = canvasRef.current;
    if (canvas) ***REMOVED***
      canvas.width = 414;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) ***REMOVED***
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***, []);

  const startDrawing = (event: React.MouseEvent | React.TouchEvent) => ***REMOVED***
    setIsDrawing(true);
    const ***REMOVED*** offsetX, offsetY ***REMOVED*** = getEventCoordinates(event);
    const ctx = canvasRef.current?.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(offsetX, offsetY);
  ***REMOVED***;

  const draw = (event: React.MouseEvent | React.TouchEvent) => ***REMOVED***
    if (!isDrawing) return;
    const ***REMOVED*** offsetX, offsetY ***REMOVED*** = getEventCoordinates(event);
    const ctx = canvasRef.current?.getContext('2d');
    ctx?.lineTo(offsetX, offsetY);
    ctx?.stroke();
  ***REMOVED***;

  const stopDrawing = () => ***REMOVED***
    setIsDrawing(false);
  ***REMOVED***;

  const getEventCoordinates = (event: React.MouseEvent | React.TouchEvent) => ***REMOVED***
    if ('touches' in event) ***REMOVED***
      const touch = event.touches[0];
      const rect = canvasRef.current?.getBoundingClientRect();
      return ***REMOVED***
        offsetX: touch.clientX - (rect?.left ?? 0),
        offsetY: touch.clientY - (rect?.top ?? 0),
      ***REMOVED***;
    ***REMOVED*** else ***REMOVED***
      return ***REMOVED***
        offsetX: event.nativeEvent.offsetX,
        offsetY: event.nativeEvent.offsetY,
      ***REMOVED***;
    ***REMOVED***
  ***REMOVED***;

  return (
    <canvas
      ref=***REMOVED***canvasRef***REMOVED***
      onMouseDown=***REMOVED***startDrawing***REMOVED***
      onMouseMove=***REMOVED***draw***REMOVED***
      onMouseUp=***REMOVED***stopDrawing***REMOVED***
      onMouseLeave=***REMOVED***stopDrawing***REMOVED***
      onTouchStart=***REMOVED***startDrawing***REMOVED***
      onTouchMove=***REMOVED***draw***REMOVED***
      onTouchEnd=***REMOVED***stopDrawing***REMOVED***
      style=***REMOVED******REMOVED*** border: '1px solid black' ***REMOVED******REMOVED***
    />
  );
***REMOVED***;

export default Sketch;
