interface SideBarButtonProps {
  title: string;
  action: () => void;
  active: boolean;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({
  title,
  action,
  active,
}) => {
  return (
    <button
      onClick={() => action()}
      className={`h-11 w-60 rounded text-left pl-2.5 text-lightGrey ${
        active && "bg-secondaryBlue"
      }`}
    >
      {title}
    </button>
  );
};

export default SideBarButton;
