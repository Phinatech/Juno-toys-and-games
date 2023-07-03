import React from 'react'
import pic from "../../../assets/card1.jpg"
import { BsArrowRight } from "react-icons/bs";

const CardProps = () => {

  const [show,setShow] = React.useState(false)

  const toggleshow = ()=>{
   setShow(!show)
  }

  return (
    <div
      onMouseLeave={() => {
        toggleshow();
      }}
      onMouseOver={() => {
        toggleshow();
      }}
      className="  w-[fit-content] h-[fit-content] rounded-[10px] overflow-hidden "
    >
      <div className="flex justify-center mt-[20px] relative ">
        {/* blurred div */}
        <div
          className={`absolute  w-full h-full  ${
            show ? "bg-[#0000004f] rounded-[10px]" : null
          } rounded-[10px] `}
        ></div>

        {/* imgae card */}
        <div className=" rounded-[10px] max-sm:w-full ">
          <img
            src={pic}
            alt=""
            className={`w-[100%] h-[100%] object-cover rounded-[10px] outline-none  ${
              show ? "" : null
            } `}
          />

          {/*Hovering buttons  */}
          <div className="absolute text-white left-[20px] bottom-[20px] ">
            <div className="font-bold text-[25px]">Bath Toys</div>
            <div
              className={`lk items-center gap-3 justify-center ${
                show ? "flex" : "hidden"
              } `}
            >
              <div className="font-semibold">Show Now</div>
              <div className="font-semibold">
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProps