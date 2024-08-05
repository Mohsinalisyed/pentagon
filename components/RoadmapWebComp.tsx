import { CardFiveSvg, CardFourSvg, CardOneSvg, CardThreeSvg, CardTwoSvg } from '@/svg';
import Image from 'next/image';
import React from 'react';

const RoadmapWebComp = () => {
    return (
        <div className='m-max-6xl p-[10px]'>
            <div
                style={{
                    backgroundImage: "url('/roadmap.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "1520px",
                    position: "relative",
                    zIndex: '1'
                }}
            >
                <div className='flex justify-end'>
                    <div className="rounded-4xl absolute left-[50px] shadow-lg flex flex-col p-2 items-center border border-solid border-yellowLight max-w-410">
                        <CardOneSvg />
                        <h1 className="text-2xl mb-3 text-white text-center font-chakra uppercase font-bold">
                            100% Art reveal
                        </h1>
                        <p className="text-sm text-lightGrayColor mb-3 text-center font-sans">
                            Hold tight! The true identity of your hero will be unveiled only after all units are claimed. Get ready for the ultimate reveal that will ignite the collector in you!
                        </p>
                    </div>
                    <Image
                        src="/assets/roadmap/web/imagecard1.png"
                        alt="Center Image"
                        className="m-[-8px] mr-20 z-50 w-[36%]"
                        width={482}
                        height={364}
                    />
                </div>
                <div>
                    <div className="rounded-4xl absolute right-[50px] top-[295px] shadow-lg flex flex-col p-2 border border-solid border-yellowLight items-center max-w-430">
                        <CardTwoSvg />
                        <h1 className="text-2xl mb-3 text-white text-center font-chakra uppercase font-bold">
                            Full Profile Hero
                        </h1>
                        <p className="text-sm text-lightGrayColor mb-3 text-center font-sans">
                            Upgrade your NFT into a Full Profile Pic Feature (FPFP) to make your hero a standout across your social platforms. Availability varies, enhancing the uniqueness of each hero!
                        </p>
                    </div>
                    <Image
                        src="/assets/roadmap/web/imagecard2.png"
                        alt="Center Image"
                        className="mt-[5px] ml-16 z-50 w-[34%]"
                        width={425}
                        height={401}
                    />
                </div>
                <div className='flex justify-end'>
                    <div className="rounded-4xl absolute left-[50px] top-[620px] shadow-lg flex flex-col p-2 border border-solid border-yellowLight items-center max-w-410">
                    <CardThreeSvg />
                        <h1 className="text-2xl mb-3 text-white text-center font-chakra uppercase font-bold">
                            3D Hero Avatar
                        </h1>
                        <p className="text-sm text-lightGrayColor mb-3 text-center font-sans">
                            Step into the metaverse where your hero awaits! Each NFT not only represents ownership but springs to life as a 3D Hero Avatar, ready to explore and conquer.
                        </p>
                    </div>
                    <Image
                        src="/assets/roadmap/web/imagecard3.png"
                        alt="Center Image"
                        className="mt-[-48px] mr-24 z-50 w-[30%]"
                        width={390}
                        height={485}
                    />
                </div>
                <div>
                    <div className="rounded-4xl absolute right-[50px] top-[955px] shadow-lg flex flex-col p-2 border border-solid border-yellowLight items-center max-w-430">
                        <CardFourSvg />
                        <h1 className="text-2xl mb-3 text-white text-center font-chakra uppercase font-bold">
                            Metaverse Zone
                        </h1>
                        <p className="text-sm text-lightGrayColor mb-3 text-center font-sans">
                            Navigate through distinct zones in the metaverse, each tailored to the lore of your hero. It’s not just a game, it’s a quest across dimensions!
                        </p>
                    </div>
                    <Image
                        src="/assets/roadmap/web/imagecard4.png"
                        alt="Center Image"
                        className="mt-[-60px] ml-16 z-50 w-[33%]"
                        width={410}
                        height={483}
                    />
                </div>
                <div className='flex justify-end'>
                    <div className="rounded-4xl absolute left-[50px] top-[1275px] shadow-lg flex flex-col p-2 border border-solid border-yellowLight items-center max-w-410">
                        <CardFiveSvg />
                        <h1 className="text-2xl mb-3 text-white text-center font-chakra uppercase font-bold">
                            Comic book reveal
                        </h1>
                        <p className="text-sm text-lightGrayColor mb-3 text-center font-sans">
                            {"Navigate through distinct zones in the metaverse, each tailored to the lore of your hero. It’s not just a game, it’s a quest across dimensions!"}                    </p>
                    </div>
                    <Image
                        src="/assets/roadmap/web/imagecard5.png"
                        alt="Center Image"
                        className="mt-[-110px] mr-32 z-50 w-[28%]"
                        width={358}
                        height={586}
                    />
                </div>
            </div>
        </div>
    );
};

export default RoadmapWebComp;
