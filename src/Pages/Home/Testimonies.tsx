import { BsShop } from "react-icons/bs";

const Testimonies = () => {
  return (
    <div className=" w-[100%] gap-3 flex mt-[30px] flex-wrap justify-center items-center">
      {/* card */}
      <div className="w-[300px] h-[100px] bg-white border-[black] border-r-2  flex items-center justify-start m-[20px] max-sm:border-none">
        <div className="mr-3 text-[60px] ">
          <BsShop />
        </div>
        <div>
          <div className="font-bold">line support </div>
          <div className="text-[#cccbcb]">Online</div>
        </div>
      </div>
      {/* card2 */}
      <div className="w-[300px] h-[100px] bg-white border-[black] border-r-2  flex items-center justify-start m-[20px] max-sm:border-none">
        <div className="text-[60px] mr-3 ">
          <BsShop />
        </div>
        <div>
          <div className="font-bold">line support </div>
          <div className="text-[#cccbcb]">Online</div>
        </div>
      </div>
      {/* card 3 */}
      <div className="w-[300px] h-[100px] bg-white border-[black] border-r-2  flex items-center justify-start m-[20px] max-sm:border-none">
        <div className="mr-3 text-[60px] ">
          <BsShop />
        </div>
        <div>
          <div className="font-bold">line support </div>
          <div className="text-[#cccbcb]">Online</div>
        </div>
      </div>
      {/* card 4 */}
      <div className="w-[300px] m-[20px] h-[100px] bg-white  flex items-center justify-start max-sm:border-none">
        <div className="text-[60px] mr-3">
          <BsShop />
        </div>
        <div>
          <div className="font-bold">line support </div>
          <div className="text-[#cccbcb]">Online</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
