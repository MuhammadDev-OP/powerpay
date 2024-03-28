'use client'
import { useState } from "react";
import {  LiaMinusSolid } from "react-icons/lia";
import { TfiPlus } from "react-icons/tfi";


const ExpandableComponent = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex flex-col text-left md:mx-5 text-primary-black">
      <header className="flex cursor-pointer justify-between py-4 font-semibold text-xl ">
        <h4
          onClick={() => setExpanded(!expanded)}
          className="question-title text-lg md:pr-5"
        >
          {title}
        </h4>
        <button
          className="text-primary-black"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <LiaMinusSolid size={20} /> : <TfiPlus size={20} />}
        </button>
      </header>

      {content && content.length > 0 && (
        <div
          className={`border-b-[1px] border-[#777]/50 text-primary-black transition-all overflow-hidden ${
            expanded ? "duration-1000 max-h-[1000px]" : "max-h-0 duration-100 "
          }`}
        >
          <p className=" text-primary-black  py-2">
            {content.map((item, index) => (
              <span key={index}>
                {item.info}
                <br />
              </span>
            ))}
          </p>
        </div>
      )}
    </article>
  );
};

export default ExpandableComponent;
