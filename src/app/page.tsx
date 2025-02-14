"use client";

import { MdStar } from "react-icons/md";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useRef, useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/public/atoms/SectionTitle/SectionTitle";

const Home = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardClicked, setIsCardClicked] = useState(false);

  return (
    <div className="w-full h-full bg-gradient-to-r from-rose-400 to-orange-200 relative">
      <div className="w-3/5 flex flex-col items-center mx-auto py-32">
        <section className="w-full flex flex-col items-center mb-72">
          <div className="relative mx-32 mb-40">
            <Image
              className="absolute -top-10 -left-40 animate-leftZoom"
              width={50}
              height={50}
              loading="lazy"
              src="/images/lt-bracket.png"
              alt="왼쪽 홑낫표"
            />
            <SectionTitle isImportant className="animate-pulse">
              리듬게이머스에 어서오세요!
            </SectionTitle>
            <Image
              className="absolute top-10 -right-40 animate-rightZoom"
              width={50}
              height={50}
              loading="lazy"
              src="/images/rb-bracket.png"
              alt="오른쪽 홑낫표"
            />
          </div>
          <div className="w-full h-56 bg-violet-300 rounded-3xl border-2 border-orange-300 border-opacity-50 shadow-[0px_7px_0px_7px_rgba(109,40,217)]">
            <div className="h-full flex flex-col justify-center items-center relative text-white text-3xl leading-[2.7]">
              <p>리듬게이머스는 초심자부터 숙련자까지,</p>
              <div className="relative ml-28">
                <MdStar className="text-yellow-300 absolute -left-36 top-2 z-10" />
                <p className="w-32 h-10 flex justify-center items-center absolute -left-[8.1rem] top-5 bg-rose-400 rounded-xl shadow-md">
                  리듬레벨
                </p>
                에 맞춰 패턴을 연습할 수 있도록 도와주는 플랫폼입니다.
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center mb-72">
          <div className="relative mb-40">
            <SectionTitle className="underline decoration-double underline-offset-8 decoration-red-400">
              리듬레벨이란?
            </SectionTitle>
            <MdStar
              size={30}
              className="text-yellow-300 absolute -left-8 -top-2 z-10"
            />
          </div>
          <p className="text-3xl font-semibold text-white tracking-wide">
            <RiDoubleQuotesL className="inline mb-10 mr-5" />
            리듬게이머스에서 만들어낸 플레이어의 리듬게임 능력을 판단하는 기준
            <RiDoubleQuotesR className="inline mb-10 ml-5" />
          </p>
        </section>
      </div>
      <div
        className={`fixed top-0 left-0 transition-colors ease-out ${
          isCardClicked ? "w-full h-full bg-[rgba(0,0,0,0.3)] z-40" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setIsCardClicked(false);
          if (cardRef.current) {
            cardRef.current.style.transform = `translate(-50%, 0) scale(1)`;
          }
        }}
      >
        <div
          className={`fixed left-1/2 -translate-x-1/2 -bottom-[14rem] w-[27rem] h-[17rem] rounded-lg bg-gradient-to-b from-red-500 to-white transition-all ease-out shadow-lg cursor-pointer ${
            isCardClicked ? "" : "hover:-bottom-[13.5rem]"
          }`}
          ref={cardRef}
          onClick={(e) => {
            e.stopPropagation();
            setIsCardClicked(true);
            if (cardRef.current) {
              cardRef.current.style.transform = `translate(-50%, -200%) scale(1.2)`;
            }
          }}
        >
          <div className="flex justify-between px-6 py-3">
            <p className="text-lg">Lv.3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
