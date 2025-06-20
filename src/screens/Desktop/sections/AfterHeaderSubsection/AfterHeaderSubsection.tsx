import React from "react";
import { Button } from "../../../../components/ui/button";

export const AfterHeaderSubsection = (): JSX.Element => {
  return (
    <section className="w-full h-[650px] relative -mt1">
      <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('/solar-panels-meadow 1.png')",
        }}>
        <div className="container mx-auto px-4 h-full">
          <div className="relative w-[337px] h-[25px] pt-[69px] ml-[150px]">
            <div className="absolute w-[221px] h-1 top-2.5 left-[66px] bg-[url(/line-1.svg)] bg-no-repeat bg-contain">
              <img
                className="absolute w-[89px] h-1 top-0 left-0"
                alt="Line"
                src="/line-2.png"
              />
            </div>

            <div className="absolute w-[25px] top-0.5 left-[308px] [font-family:'Akazan-Regular',Helvetica] font-normal text-white text-lg tracking-[0.94px] leading-[normal] whitespace-nowrap">
              04
            </div>

              <div className="absolute w-[33px] top-0 left-0 [font-family:'Akazan-Regular',Helvetica] font-normal text-white text-lg tracking-[0.94px] leading-[normal]">
              01
            </div>
          </div>

          <div className="flex flex-col w-[729px] items-start gap-6 mt-[106px] ml-[150px]">
            <h1 className="text-[52px] font-semibold text-white tracking-[-1.04px] font-['Inter',Helvetica]">
              Solar Panel Installers In Plymouth
            </h1>

            <p className="text-xl font-semibold text-white font-text-xl-semibold">
              Fueled is an award-winning technology consultancy that transforms
              businesses by generating ideas, building products, and
              accelerating growth.
            </p>

            <div className="flex items-start gap-6">
              <Button className="px-[34px] py-3 rounded-[109px] bg-[linear-gradient(0deg,rgba(60,171,144,1)_0%,rgba(60,171,144,1)_100%)] hover:bg-[linear-gradient(0deg,rgba(50,161,134,1)_0%,rgba(50,161,134,1)_100%)] [text-shadow:1px_1px_1px_#00000040] text-sm tracking-[1.12px]">
                Call Me Today
              </Button>

              <Button className="px-[34px] py-3 rounded-[109px] bg-[linear-gradient(0deg,rgba(255,187,28,1)_0%,rgba(255,187,28,1)_100%)] hover:bg-[linear-gradient(0deg,rgba(245,177,18,1)_0%,rgba(245,177,18,1)_100%)] [text-shadow:1px_1px_1px_#00000040] text-[#2a3334] text-sm tracking-[1.12px]">
                Requst a call back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
