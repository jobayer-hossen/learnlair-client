import React from 'react';
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
    <>
       <Typewriter
          options={{
            strings: ["Learn Lair is best platform for your future","Explore our facilities", "Chose your dream University", "Every students first chose Learn Lair",],
            autoStart: true,
            loop: true,
            deleteSpeed: 50
          }}
        />     
    </>
    );
};

export default Type;