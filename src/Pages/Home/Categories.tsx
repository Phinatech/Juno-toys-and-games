// import React from 'react'

import { Category } from "../../Components"
import CardProps from "../../Components/common/Props/CardProps"

const Categories = () => {
  return (
    <div className="w-full h-[fit -content] flex justify-center">
        <div className="w-[95%] flex  flex-col max">
            <div className="m-[30px]">
                <Category subtitle="CATEGORIES" subtitle2="We  design toys not just for kids but with kids"/>
            </div>
            <div  className="grid gap-4 place-items-center grid-cols-4 max-sm:grid-cols-1 max-xl:grid-cols-2">
                <CardProps/>
                <CardProps/>
                <CardProps/>
                <CardProps/>
            </div>
        </div>
    </div>
  )
}

export default Categories