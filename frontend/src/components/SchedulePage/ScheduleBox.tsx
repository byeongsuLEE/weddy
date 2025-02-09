interface ScheduleProps {
  type: "STUDIO" | "DRESS" | "MAKEUP" | "WEDDING" |"etc";
  title: string;
}

const ScheduleBox = ({ type,title }: ScheduleProps) => {
  const backgroundColor = {
    STUDIO: "bg-main3",
    DRESS: "bg-main1",
    MAKEUP: "bg-main4",
    WEDDING: "bg-red-400",
    etc: "bg-gray-200",
  }[type];

  return (
    <div className="flex items-center my-2">
    <div className={`${backgroundColor}  rounded-lg h-[50px] w-[10px] mr-2`}></div>
      <span>{title}</span>
    </div>
  )
}

export default ScheduleBox;