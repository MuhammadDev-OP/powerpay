import Wrapper from "../../components/shared/Wrapper"
import GetStarted from "../../components/widgets/earnpage/GetStarted"
import Swap from "../../components/widgets/exchangepage/Swap"
import SwapChoose from "../../components/widgets/exchangepage/SwapChoose"
import ExchangeRate from "../../components/widgets/exchangepage/ExchangeRate"
import TradingPairs from "../../components/widgets/exchangepage/TradingPairs"


const page = () => {
    return (
        <>
            <div className="overflow-hidden">
                <Wrapper>
                    <Swap />
                    <SwapChoose />
                    <ExchangeRate />
                    <TradingPairs />
                    <GetStarted />
                </Wrapper>
            </div>
        </>
    )
}

export default page