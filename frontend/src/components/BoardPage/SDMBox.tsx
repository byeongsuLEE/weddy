interface SDMProps {
  src: string;
  name: string;
  price: string;
}

const SDMBox = ({ src, name, price }: SDMProps) => {
  return (
    <div className="flex flex-col">
      <img className="w-[150px] h-[150px] rounded-xl" src={src} alt="image" />
      <div className="flex flex-col w-[150px]">
        <span className="text-gray-500 mt-2">{name}</span>
        <span>{price.toLocaleString()}원</span>
      </div>
    </div >
  )
}

export default SDMBox;