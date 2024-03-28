import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const Others = () => {
  return (
    <>
      <Wrapper>
        <div className="text-center mt-20">
          <h1 className="font-medium text-5xl">How it Works</h1>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row my-32 gap-x-10">
            <div className="flex flex-col items-center relative">
              <div className="bg-blue-600 p-8 rounded-full h-36 w-36 flex items-center justify-center border-8 border-black border-opacity-8">
                <h1 className="text-[12rem] font-bold opacity-20 absolute mr-40 mb-16 -z-10">
                  1
                </h1>
                <Image
                  src={"/otherElements/createAcc.png"}
                  width={68}
                  height={84}
                  alt="image88"
                />
              </div>
              <h1 className="mt-5 text-center text-blue-600">
                Create an Account
              </h1>
            </div>
            <div className="flex items-center justify-center h-36">
              <hr className="border-t-2 border-blue-500 w-36" />
            </div>
            <div className="flex flex-col items-center relative">
              <div className="bg-[#141414] p-8 rounded-full h-36 w-36 flex items-center justify-center border-8 border-black border-opacity-8">
                <h1 className="text-[12rem] font-bold opacity-20 absolute mr-40 mb-16  -z-10">
                  2
                </h1>
                <Image
                  src={"/otherElements/uploadfile.png"}
                  width={68}
                  height={84}
                  alt="image88"
                />
              </div>
              <h1 className="mt-5 text-center">Submit Documents</h1>
            </div>
            <div className="flex items-center justify-center h-36">
              <hr className="border-t-2 border-gray-300 w-36" />
            </div>
            <div className="flex flex-col items-center relative">
              <div className="bg-[#141414] p-8 rounded-full h-36 w-36 flex items-center justify-center border-8 border-black border-opacity-8">
                <h1 className="text-[12rem] font-bold opacity-20 absolute mr-40 mb-16  -z-10">
                  3
                </h1>
                <Image src={"/otherElements/cash.png"} alt="image223" width={68} height={84} />
              </div>
              <h1 className="mt-5 text-center">Invest, Trade & Earn</h1>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Others;
