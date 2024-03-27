import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const Others = () => {
  return (
    <Wrapper>
      <div className="mt-20 text-center">
        <h1 className="text-5xl font-medium">How it Works</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row my-32 gap-x-10">
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 p-8 rounded-full h-36 w-36 flex items-center justify-center">
              <Image
                src={"/otherElements/createAcc.png"}
                width={68}
                height={84}
              />
            </div>
            <h1 className="text-center mt-5 text-blue-600">
              Create an Account
            </h1>
          </div>
          <div className="flex items-center justify-center h-36">
            <hr className="w-36 border-t border-gray-300" />{" "}
            {/* Add this line */}
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#141414] p-8 rounded-full h-36 w-36 flex items-center justify-center">
              <Image
                src={"/otherElements/createAcc.png"}
                width={68}
                height={84}
              />
            </div>
            <h1 className="text-center mt-5">Create an Account</h1>
          </div>
          <div className="flex items-center justify-center h-36">
            <hr className="w-36 border-t border-gray-300" />{" "}
            {/* Add this line */}
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#141414] p-8 rounded-full h-36 w-36 flex items-center justify-center">
              <Image
                src={"/otherElements/createAcc.png"}
                width={68}
                height={84}
              />
            </div>
            <h1 className="text-center mt-5">Create an Account</h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Others;
