import Image from "next/image"

const GetStarted = () => {
    const data = [
        {
            img: '/earnpageelements/CreateAccount.svg',
            title: 'Create your account',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            img: '/earnpageelements/DepositCrypto.svg',
            title: 'Deposit Crypto',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            img: '/earnpageelements/Earning.svg',
            title: 'Start Earning',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
    ]
    return (
        <section>
            <div className="flex flex-col mt-20 md:mt-52 justify-center items-center min-h-screen h-full w-full">
                <h1 className="text-3xl text-center md:text-left md:text-5xl font-[600] text-white">
                    How to Get Started
                </h1>
                <p className="text-[18px] text-center md:text-left text-[#FFFFFF] pt-4">
                    Our crypto exchange is easy to use, whether you are new to crypto or a pro.
                </p>

                <div className="flex flex-col justify-center items-center gap-y-20 mt-20 w-full ">
                    {
                        data.map((e) => (
                            <div key={e} className="flex md:flex-row flex-col text-center md:text-left items-center justify-center gap-20 w-full md:ml-52">
                                <Image src={e.img} alt="" width={1080} height={1080} className="w-14" />
                                <div className="flex flex-col text-white">
                                    <h2 className="text-[22px] font-[600]">
                                        {e.title}
                                    </h2>
                                    <p className="md:w-[85%]">
                                        {e.text}
                                    </p>

                                </div>
                            </div>
                        ))
                    }

                    <button
                        className="py-3 mt-10 px-6 
              bg-blue-600
              text-white hover:bg-blue-500
              transition-colors duration-300
              rounded-md md:w-[404px] font-[600] "
                    >
                        Get Started
                    </button>
                </div>

            </div>
        </section>
    )
}

export default GetStarted