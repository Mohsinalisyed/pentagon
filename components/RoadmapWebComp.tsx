import Image from 'next/image';
import React from 'react';

const RoadmapWebComponent = () => {
    return (
        <div className='m-max-6xl'>
            <div
                style={{
                    backgroundImage: "url('/roadmap.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "1520px",
                    position: "relative",
                    zIndex:'1'
                }}
            >
                <div className='flex justify-end'>
                    <div className="rounded-lg absolute left-[50px] shadow-lg flex flex-col p-2" style={{ alignItems: 'center', border: '1px solid #EFC23566', maxWidth: "410px" }}>
                        <Image
                            src="/card1image.svg"
                            alt="Center Image"
                            className="w-16 my-2"
                            width={100}
                            height={100}
                        />
                        <h1 className="text-2xl mb-3 text-white text-center">
                            100% Art reveal
                        </h1>
                        <p className="text-sm text-[#969EB2] mb-3 text-center">
                            Hold tight! The true identity of your hero will be unveiled only after all units are claimed. Get ready for the ultimate reveal that will ignite the collector in you!
                        </p>
                    </div>
                    <Image
                        src="/assets/roadmap/web/imagecard1.png"
                        alt="Center Image"
                        className="mt-0 mr-20 z-50"
                        width={340}
                        height={340}
                    />
             </div>
                <div>
                    <div className="rounded-lg absolute right-[70px] top-[300px] shadow-lg flex flex-col p-2" style={{ alignItems: 'center', border: '1px solid #EFC23566', maxWidth: "410px" }}>
                        <Image
                            src="/card2image.svg"
                            alt="Center Image"
                            className="w-16 my-2"
                            width={100}
                            height={100}
                        />
                        <h1 className="text-2xl mb-3 text-white text-center">
                            Full Profile Hero
                        </h1>
                        <p className="text-sm text-[#969EB2] mb-3 text-center">
                            Upgrade your NFT into a Full Profile Pic Feature (FPFP) to make your hero a standout across your social platforms. Availability varies, enhancing the uniqueness of each hero!
                        </p>
                    </div>
                    <Image
                        src="/assets/roadmap/web/imagecard2.png"
                        alt="Center Image"
                        className="mt-[-20px] ml-16 z-50"
                        width={340}
                        height={300}
                    />
              </div>
                <div className='flex justify-end'>
                    <div className="rounded-lg absolute left-[50px] top-[620px] shadow-lg flex flex-col p-2" style={{ alignItems: 'center', border: '1px solid #EFC23566', maxWidth: "410px" }}>
                        <Image
                            src="/card3image.svg"
                            alt="Center Image"
                            className="w-16 my-2"
                            width={100}
                            height={100}
                        />
                        <h1 className="text-2xl mb-3 text-white text-center">
                            3D Hero Avatar
                        </h1>
                        <p className="text-sm text-[#969EB2] mb-3 text-center">
                            Step into the metaverse where your hero awaits! Each NFT not only represents ownership but springs to life as a 3D Hero Avatar, ready to explore and conquer.
                        </p>
                    </div>
                    <Image
                        src="/assets/roadmap/web/imagecard3.png"
                        alt="Center Image"
                        className="mt-[-20px] mr-20 z-50"
                        width={270}
                        height={270}
                    />
                </div>
                <div>
                    <div className="rounded-lg absolute right-[70px] top-[955px] shadow-lg flex flex-col p-2" style={{ alignItems: 'center', border: '1px solid #EFC23566', maxWidth: "410px" }}>
                        <Image
                            src="/card4image.svg"
                            alt="Center Image"
                            className="w-16 my-2"
                            width={100}
                            height={100}
                        />
                        <h1 className="text-2xl mb-3 text-white text-center">
                            Metaverse Zone
                        </h1>
                        <p className="text-sm text-[#969EB2] mb-3 text-center">
                            Navigate through distinct zones in the metaverse, each tailored to the lore of your hero. It’s not just a game, it’s a quest across dimensions!
                        </p>
                    </div>
                    <Image
                        src="/assets/roadmap/web/imagecard4.png"
                        alt="Center Image"
                        className="mt-[-20px] ml-12 z-50"
                        width={300}
                        height={300}
                    />
             </div>
                <div className='flex justify-end'>
                    <div className="rounded-lg absolute left-[50px] top-[1275px] shadow-lg flex flex-col p-2" style={{ alignItems: 'center', border: '1px solid #EFC23566', maxWidth: "410px" }}>
                        <Image
                            src="/card5image.svg"
                            alt="Center Image"
                            className="w-16 my-2"
                            width={100}
                            height={100}
                        />
                        <h1 className="text-2xl mb-3 text-white text-center">
                            Comic book reveal
                        </h1>
                        <p className="text-sm text-[#969EB2] mb-3 text-center">
                            {"Navigate through distinct zones in the metaverse, each tailored to the lore of your hero. It’s not just a game, it’s a quest across dimensions!"}                    </p>
                    </div>
                    <Image
                        src="/assets/roadmap/web/imagecard5.png"
                        alt="Center Image"
                        className="mt-[-60px] mr-20 z-50"
                        width={260}
                        height={260}
                    />
               </div>
            </div>
        </div>
    );
};

export default RoadmapWebComponent;
