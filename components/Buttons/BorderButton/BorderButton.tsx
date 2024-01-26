interface BorderButtonProps{
    title:string;
    action: () => void
}

const BorderButton:React.FC<BorderButtonProps> = ({title, action}) =>{
    return(
        <button onClick={() => action()} className="text-primaryBlue rounded-full px-6 py-1 border-2 border-primaryBlue  leading-5">
          {title}
        </button>
    )
}
export default BorderButton