interface SeparateProps {
  w?: number;
}


const Separate = ({w}:SeparateProps) => {
  return (
    <div className={`w-${w} bg-gray-400 h-[1px] my-2`}></div>

  )
}
export default Separate;