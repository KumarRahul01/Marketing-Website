import React from 'react'

const TeamImage = ({image, name, role}) => {

  return (
    <div className="lg:w-[25rem] w-72 relative mainDiv">
    <img className="w-fit h-fit object-cover hover:opacity-80 hover:-translate-y-3 transition-all duration-300 " src={image} alt="team1" />
    <div className="hidden absolute bottom-14 w-full px-5 text-center text-white hover:shadow-3xl bg-zinc-600 bg-opacity-30">
      <h1 className="font-semibold tracking-wide text-lg">{name}</h1>
      <p className="">{role}</p>
    </div>
  </div>
  )
}

export default TeamImage