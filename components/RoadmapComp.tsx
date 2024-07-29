import React from 'react'
interface Iprops {
    heading: string
    imgSrc: string
    desc: string
    heading2:string
}

const RoadmapComp: React.FC<Iprops> = ({ heading, imgSrc, desc, heading2 }) => {
  return (
      <div className="rounded-lg shadow-lg flex flex-col p-5 my-8" style={{ alignItems: 'center', border:'1px solid #EFC23566'}}>
          <img
              src={imgSrc}
              alt="Center Image"
              className="w-32"
              style={{ borderRadius: "160px", border: "20px solid black" }}
          />
          <h1 className="text-3xl mb-4 text-white text-center">
              {heading}
              <br />
              {heading2}
          </h1>
          <p className="text-lg text-[#969EB2] mb-5 text-center">
            {desc}
          </p>
      </div>
  )
}

export default RoadmapComp