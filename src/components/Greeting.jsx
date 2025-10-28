import React from 'react'
import Typewriter from 'typewriter-effect';
import { PsychedelicSpiral } from "@/components/ui/shadcn-io/psychedelic-spiral";

function Greeting({ className }) {
  return (
    <>
      <div
        className={`greeting text-center ${
          className || ""
        } flex flex-col items-center gap-6`}
      >
        <div className="h-[7.5rem] w-[7.5rem] rounded-full overflow-hidden">
                    <PsychedelicSpiral
                      lighting={0.1}
                    >
                    </PsychedelicSpiral>
        </div>

        <h1 className="font-[Roboto_Mono] text-3xl w-[24rem]">
          <Typewriter
            options={{
              strings: [
                "Hello, I am ChaiDocs bot!",
                "How can I assist you today?",
              ],
              autoStart: true,
              delay: 75,
              loop: true,
              deleteSpeed: 35,
            }}
          />
        </h1>
      </div>
    </>
  );
}

export default Greeting