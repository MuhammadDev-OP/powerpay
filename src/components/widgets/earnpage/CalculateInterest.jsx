'use client'
import React, { useState } from 'react';

const CalculateInterest = () => {
    const [initialDeposit, setInitialDeposit] = useState('');
    const [contribution, setContribution] = useState('');
    const [contributionFrequency, setContributionFrequency] = useState('monthly');
    const [yearOfGrowth, setYearOfGrowth] = useState('');
    const [annualInterestRate, setAnnualInterestRate] = useState('');
    const [compoundFrequency, setCompoundFrequency] = useState('yearly');

    return (
        
        <div className="bg-black p-2 md:p-8 rounded text-white w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 w-full">
                <div className='w-full'>
                    <label htmlFor="initialDeposit" className="block text-white my-3 font-[500]">Initial Deposit</label>
                    <input
                        type="text"
                        id="initialDeposit"
                        value={initialDeposit}
                        onChange={(e) => setInitialDeposit(e.target.value)}
                        placeholder='$15000'
                        className="rounded-lg font-[500] border-white border focus:outline-none py-2 px-2 bg-black text-[#A3A3A3] w-full"
                    />
                </div>
                <div>
                    <div className='flex w-full justify-between items-center my-3'>
                        <label htmlFor="contribution" className="block text-white  font-[500]">Contribution </label>
                        <p className='text-[#A3A3A3] text-sm'>
                            Optional
                        </p>

                    </div>
                    <input
                        type="text"
                        id="contribution"
                        value={contribution}
                        onChange={(e) => setContribution(e.target.value)}
                        placeholder='$100'
                        className="rounded-lg font-[500] border-white border focus:outline-none py-2 px-2 bg-black text-[#A3A3A3] w-full"
                    />
                </div>
                <div>
                    <label htmlFor="contributionFrequency" className="block text-white my-3 font-[500]">Contribution Frequency</label>
                    <select
                        id="contributionFrequency"
                        value={contributionFrequency}
                        onChange={(e) => setContributionFrequency(e.target.value)}
                        className="rounded-lg font-[500] border-white border focus:outline-none py-2 px-2 bg-black text-[#A3A3A3] w-full"

                    >
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="annually">Annually</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="yearOfGrowth" className="block text-white my-3 font-[500]">Year of Growth</label>
                    <input
                        type="text"
                        id="yearOfGrowth"
                        value={yearOfGrowth}
                        onChange={(e) => setYearOfGrowth(e.target.value)}
                        placeholder='10 Years'
                        className="rounded-lg font-[500] border-white border focus:outline-none py-2 px-2 bg-black text-[#A3A3A3] w-full"
                    />
                </div>
                <div>
                    <label htmlFor="annualInterestRate" className="block text-white my-3 font-[500]">Annual Interest Rate</label>
                    <input
                        type="text"
                        id="annualInterestRate"
                        value={annualInterestRate}
                        onChange={(e) => setAnnualInterestRate(e.target.value)}
                        placeholder='5.50%'
                        className="rounded-lg font-[500] border-white border focus:outline-none py-2 px-2 bg-black text-[#A3A3A3] w-full"
                    />
                </div>
                <div>
                    <label htmlFor="compoundFrequency" className="block text-white my-3 font-[500]">Compound Frequency</label>
                    <select
                        id="compoundFrequency"
                        value={compoundFrequency}
                        onChange={(e) => setCompoundFrequency(e.target.value)}
                        className="rounded-lg font-[500] border-white border focus:outline-none py-2 px-2 bg-black text-[#A3A3A3] w-full"
                    >
                        <option value="yearly">Yearly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CalculateInterest;
