"use client"

import React from 'react'
import { useState } from 'react';
import Wrapper from '../shared/Wrapper'

const Security = () => {
    const [boxes, setBoxes] = useState([
        { heading: 'Box 1 Heading', content: 'Box 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { heading: 'Box 2 Heading', content: 'Box 2 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { heading: 'Box 3 Heading', content: 'Box 3 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { heading: 'Box 3 Heading', content: 'Box 3 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },

    ]);

    return (
        <div className="my-20 text-center">
            <h1 className="text-5xl font-bold mb-5">Security At Our Core</h1>
            <div className="space-x-6">
                <button className="bg-white text-black hover:bg-gray-200 transition duration-300 px-4 py-2 rounded">
                    Asset Security
                </button>
                <button className="text-gray-600 hover:bg-gray-200 transition duration-300 px-4 py-2 rounded">
                    Risk Management
                </button>
            </div>
            <Wrapper>
                <div className="relative mt-10">
                    <div className="flex flex-row overflow-x-auto gap-10">
                        {boxes.map((box, index) => (
                            <div key={index} className="w-72 h-48 p-6 rounded-2xl overflow-hidden">
                                <div className="box-content" style={{ height: '100%', overflow: 'hidden' }}>
                                    <h2 className="text-xl text-left font-semibold">{box.heading}</h2>
                                    <p className="text-gray-700 mt-5 text-left text-sm overflow-y-auto">{box.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Security;
