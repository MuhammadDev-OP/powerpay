import CalculateInterest from './CalculateInterest'

const Interest = () => {
    return (
        <section>
            <div className="min-h-screen mt-20 md:mt-0 h-full flex flex-col items-center justify-center ">
                <div className="md:ml-10 flex flex-col justify-start items-start w-full">
                    <h1 className="text-3xl text-center md:text-left md:text-5xl font-[500] text-white">
                        Calculate your compound
                        <br />
                        interest
                    </h1>
                    <p className="text-[18px] text-center md:text-left text-[#FFFFFF] pt-4">
                        Your results will display here once you enter the values and click “Calculate”
                    </p>
                </div>
                <div className=" w-full ">
                    <CalculateInterest />
                </div>
            </div>
        </section>
    )
}

export default Interest