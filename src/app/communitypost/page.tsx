import MakePost from '@/components/MakePost'
import React from 'react'

export default function page() {
  return (
    <>
        <div className="  w-full h-full mt-5 flex flex-row justify-center ">
            <div className=" bg-[#F9F9FF] w-[85%] h-full rounded-md flex flex-row justify-center">
              <MakePost/>
            </div>
        </div>
    </>
  )
}
