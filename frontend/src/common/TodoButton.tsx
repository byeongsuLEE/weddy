interface TodoButtonProps {
  title: string;
  colorId?: number;
  cursor?: string;
}

const TodoButton = ({ title, colorId, cursor }: TodoButtonProps) => {
  const colorClass = colorId === 1 ? "bg-main1" : "bg-main2";
  return (
    <button
      style={{cursor: cursor}}
      className={`w-[120px] h-[30px] flex items-center justify-center ${colorClass} rounded-3xl p-2`}
    >
      {title}
    </button>
  );
};
export default TodoButton;
