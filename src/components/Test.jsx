import React from "react";
import { AccretionShaders } from "@/components/ui/accretion-shaders";

export default function CosmicAccretion() {
  return (
    
      <div className="h-[8rem] w-[8rem] rounded-full overflow-hidden ">
        <AccretionShaders
          speed={1.0}
          turbulence={1.2}
          depth={1.0}
          brightness={1.1}
          colorShift={1.0}
          className="w-full h-full"
        ></AccretionShaders>
      </div>
    
  );
}
