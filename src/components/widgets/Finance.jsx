import React from "react";
import Wrapper from "../shared/Wrapper";

const Finance = () => {
    return (
        <div>
            <Wrapper>
                <div className="text-center m-10">
                    <h1 className="text-5xl font-bold mb-5">Security At Our Core</h1>
                </div>
                <div className="flex justify-between items-center relative">
                    <div className='w-[800px] mt-[1rem] top-20 shadow-xl shadow-primary-blue/30 -right-[20rem] absolute h-[800px] rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#000000] -z-10'>
                    </div>
                    <div className="gap-10">
                        <div className="w-[409px] mt-16 mb-3">
                            <h1 className="text-5xl font-bold">25%</h1>
                            <h2 className="text-4xl font-bold text-primary-blue mt-5">APY</h2>
                            <p>Earn passive daily interest on BTC, USDC, ETH and more at the touch of a button.</p>
                        </div>
                        <div className="w-[409px] mt-16 mb-3">
                            <h1 className="text-5xl font-bold">Seemless</h1>
                            <h2 className="text-4xl font-bold text-primary-blue mt-5">Rails</h2>
                            <p>Deposit and withdraw fiat in just a few clicks.</p>
                        </div>
                        <div className="w-[409px] mt-16 mb-3">
                            <h1 className="text-5xl font-bold">Exchange</h1>
                            <h2 className="text-4xl font-bold text-primary-blue mt-5">Crypto and Fiat</h2>
                            <p>Experience the best prices on crypto and fiat exchange.</p>
                        </div>
                    </div>
                    <div class="bg-stone-950 w-[412px] h-[366px] rounded-lg p-4 shadow-primary-blue relative">

                        <div className="z-30">
                            <div class="my-8">
                                <label for="from" class="text-white text-lg ml-2 mb-4 font-semibold">From</label>
                                <input
                                    type="text"
                                    id="from"
                                    class="w-full mt-4 h-[61px] bg-[#0F0F0F] text-white border-gray-200 border rounded-md p-2"
                                    placeholder="Enter amount in USD"
                                />
                            </div>
                            <div>
                                <label for="to" class="text-white text-lg ml-2 mb-4 font-semibold">To</label>
                                <input
                                    type="text"
                                    id="to"
                                    class="w-full mt-4 h-[61px] bg-[#0F0F0F] text-white border-gray-200 border rounded-md p-2"
                                    placeholder="Converted amount in USDT"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </Wrapper>
        </div>
    );
};

export default Finance;
