import Wrapper from '../../shared/Wrapper'
import GeneralQuestions from "./GeneralQuestion"

const Faq = () => {
    return (
        <section>
        <div className='mt-20 md:mt-0 md:min-h-screen flex items-center justify-center'>
            <Wrapper>
                <div className="flex flex-col text-center justify-center w-full items-center gap-3">
                    <h1 className="text-3xl text-center md:text-left md:text-5xl font-[500] text-white">
                        Frequently Asked Questions
                    </h1>

                    <div className="w-full pt-10 items-center flex md:flex-row flex-col justify-center">

                        <div className="w-full md:w-[80%] ">
                            <GeneralQuestions />

                        </div>


                    </div>

                </div>
            </Wrapper>
        </div>
        </section>
    )
}

export default Faq