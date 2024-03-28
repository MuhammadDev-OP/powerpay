import React from 'react'
import Wrapper from '../../components/shared/Wrapper'
import Earn from "../../components/widgets/earnpage/Earn"
import Choose from "../../components/widgets/earnpage/Choose"
import Ways from "../../components/widgets/earnpage/Ways"
import Growth from "../../components/widgets/earnpage/Growth"
import Interest from "../../components/widgets/earnpage/Interest"
import Faq from "../../components/widgets/earnpage/Faq"
import LimitedTime from "../../components/widgets/earnpage/LimitedTime"
import GetStarted from "../../components/widgets/earnpage/GetStarted"
import NextStep from "../../components/widgets/earnpage/NextStep"
const page = () => {
  return (
    <div className='overflow-hidden'>
      <Wrapper>
        <Earn />
        <Choose />
        <Ways />
        <Growth />
        <Interest />
        <LimitedTime />
        <GetStarted />
        <NextStep />
        <Faq />
      </Wrapper>
    </div>
  )
}

export default page