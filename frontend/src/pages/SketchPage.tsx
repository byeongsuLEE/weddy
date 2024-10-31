import React, ***REMOVED*** useRef, useState, useEffect ***REMOVED*** from 'react';

const Sketch = () => ***REMOVED***
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [eraserSize, setEraserSize] = useState(10);

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
    event.preventDefault(); // 기본 동작 방지
    setIsDrawing(true);
    const ***REMOVED*** offsetX, offsetY ***REMOVED*** = getEventCoordinates(event);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) ***REMOVED***
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
      ctx.strokeStyle = isErasing
        ? getComputedStyle(document.documentElement).getPropertyValue('--color-main1')
        : 'black';
      ctx.lineWidth = isErasing ? eraserSize : 5;
    ***REMOVED***
  ***REMOVED***;

  const draw = (event: React.MouseEvent | React.TouchEvent) => ***REMOVED***
    if (!isDrawing) return;
    event.preventDefault(); // 기본 동작 방지
    const ***REMOVED*** offsetX, offsetY ***REMOVED*** = getEventCoordinates(event);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) ***REMOVED***
      ctx.lineTo(offsetX, offsetY);
      ctx.strokeStyle = isErasing
        ? getComputedStyle(document.documentElement).getPropertyValue('--color-main1')
        : 'black';
      ctx.lineWidth = isErasing ? eraserSize : 5;
      ctx.stroke();
    ***REMOVED***
  ***REMOVED***;

  const stopDrawing = () => ***REMOVED***
    setIsDrawing(false);
  ***REMOVED***;

  const toggleEraser = () => ***REMOVED***
    setIsErasing(!isErasing);
  ***REMOVED***;

  const handleEraserSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => ***REMOVED***
    setEraserSize(Number(event.target.value));
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
    <div>
      <button onClick=***REMOVED***toggleEraser***REMOVED*** style=***REMOVED******REMOVED*** marginBottom: '10px' ***REMOVED******REMOVED***>
        ***REMOVED***isErasing ? '연필 모드' : '지우개 모드'***REMOVED***
      </button>
      ***REMOVED***isErasing && (
        <div style=***REMOVED******REMOVED*** marginBottom: '10px' ***REMOVED******REMOVED***>
          <label>
            지우개 크기:
            <input
              type="range"
              min="5"
              max="50"
              value=***REMOVED***eraserSize***REMOVED***
              onChange=***REMOVED***handleEraserSizeChange***REMOVED***
            />
          </label>
        </div>
      )***REMOVED***
      <canvas
        ref=***REMOVED***canvasRef***REMOVED***
        onMouseDown=***REMOVED***startDrawing***REMOVED***
        onMouseMove=***REMOVED***draw***REMOVED***
        onMouseUp=***REMOVED***stopDrawing***REMOVED***
        onMouseLeave=***REMOVED***stopDrawing***REMOVED***
        onTouchStart=***REMOVED***startDrawing***REMOVED***
        onTouchMove=***REMOVED***draw***REMOVED***
        onTouchEnd=***REMOVED***stopDrawing***REMOVED***
        style=***REMOVED******REMOVED*** border: '1px solid black', width: '414px' ***REMOVED******REMOVED***
      />
    </div>
  );
***REMOVED***;

export default Sketch;
