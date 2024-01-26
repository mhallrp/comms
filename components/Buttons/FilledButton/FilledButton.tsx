'use client'
interface FilledButtonProps{
    title:string;
    action:() => void;
}

const FilledButton:React.FC<FilledButtonProps> = ({title, action}) => {
  return (
    <button onClick={() => action()} className="flex items-center border-2 border-primaryBlue text-white rounded-full px-6 py-1 bg-primaryBlue leading-5">
      {title}
    </button>
  );
}

export default FilledButton