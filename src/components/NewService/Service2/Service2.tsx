import React from 'react'

const Service2 = () => {
  return (
    <>
      <div className="container flex justify-center items-center w-[calc(100%-80px)] max-w-[1440px] p-0 mt-[250px] gap-[20px]">
        <div className="box flex justify-center w-[800px] h-auto p-[30px_62px] gap-0 rounded-[20px] bg-[#1E2251] transition-opacity duration-300">
          <div className="content flex flex-1 justify-center items-center gap-[20px] w-full">
            <div className="left w-[40%]">
              <h2 className="text-white w-[337.67px] h-[29.19px] text-[38px] p-0 gap-0">Let's Get Started</h2>
            </div>
            <div className="right w-[60%] flex justify-center items-center">
              <div className="search-bar flex items-center gap-[10px] w-full bg-white rounded-[1px] p-[4px]">
                <input type="text" placeholder="Search" className="w-[calc(100%-129px)] h-[39px] p-[8px] border-none rounded-[10px]" />
                <button className="bg-[#7C56FE] text-white p-[20px_23px] border-none rounded-[1px] cursor-pointer w-[105px]">Get a call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service2