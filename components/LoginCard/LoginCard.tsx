import CommsLogo from "../../assets/commsLogo.png";

const LoginCard = () => {
  return (
    <div className="flex py-10 flex-col gap-4 rounded-[20px] justify-center items-center w-6/12 h-fit p-1 shadow-mainShadow">
      <h1 className="text-primary">Welcome to</h1>
      <img src={CommsLogo.src} alt="commsLogo" className="w-[196px] h-[30px]" />
      <div className="flex flex-col my-4 gap-4">
        <div className="flex items-center justify-center w-60 h-11 rounded-lg border">
          <p className="text-primary">Sign up option 1</p>
        </div>
        <div className="flex items-center justify-center w-60 h-11 rounded-lg border">
          <p className="text-primary">Sign up option 2</p>
        </div>
      </div>
      <p className="text-primaryBlue underline">What is internet identity?</p>
      <p className="text-primaryBlue underline">Find out more about comms</p>
    </div>
  );
};

export default LoginCard;
