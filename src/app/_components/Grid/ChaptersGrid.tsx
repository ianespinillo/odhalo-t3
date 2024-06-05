
import React from "react";
import { CircleButtonsWithLetter } from "../Buttons/CircleButtonsWithLetter";
import { RecursiveCircleButton } from "../Buttons/RecursiveRings";
import { chapters } from '../../../data/Chapters';


export const ChaptersGrid = () => {
    

  return (
    <div className="grid grid-cols-3 h-full w-full ">
      {chapters.map((c, i) => {
        if (i % 2 === 0 && c.letter == "") {
          
          
          return (
            <div
              className="flex items-center justify-center outline outline-2 outline-black"
              key={i}
              
            >
              <RecursiveCircleButton rings={c.rings!}  />
            </div>
          );
        } else {
          return (
            <div
              className="h-full w-full outline outline-2 outline-black flex items-center justify-center p-1"
              key={c.letter}
            >
              <div className="flex flex-col justify-center items-center gap-2 w-full h-full">
              <CircleButtonsWithLetter
                text={c.text}
                letter={c.letter}
                key={c.letter}
                className="md:scale-[1] md:-mx-[3px] lg:scale-105 scale-75"
              />
              <span className="text-xl font-arial">Capítulo {c.chapter}</span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
