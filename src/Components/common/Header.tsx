import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineWifi } from "react-icons/ai";
import { FaBatteryHalf } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { MdArrowBack } from "react-icons/md";
import { RiMenuFoldLine } from "react-icons/ri";



const Header = () => {
  return (
  <div>
      <div className='h-[60px] w-[100%]  bg-white fixed tablet:hidden laptop:flex lg:flex flex phone:hidden '>
   
   <div className=' w-[300px]  h-full text-[#011747] flex text-[20px] justify-center items-center'
    style={{
     boxShadow:
       " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
   }}
   > Easei

</div>
<div className="border-black  w-[70%] flex justify-end text-[30px] items-center ">
<div>
<IoMdNotificationsOutline />  
<div className="w-4 h-4 top-2 ml-3 absolute rounded-full bg-red-500 text-[10px] text-white flex justify-center items-center">3</div>
</div>
</div>
 <div className="flex justify-center items-center ml-4 ">
 <CgProfile />
<div className="ml-2">  Oluwafemi Josephine </div> 
 </div>
</div>








<div className=" h-[50px] text-[12px] phone-flex tablet-flex laptop:hidden lg:hidden bg-white ">
<div className="w-full flex justify-between items-center ">
<div className="ml-3">9:15</div>
<div className=" ">
<div className=" w-[70px] flex justify-between mr-3">
<AiOutlineWifi />
<FaBatteryHalf />
<GiNetworkBars />
</div>
</div>
</div>
<div className="flex justify-between items-center mt-2">
<div className="flex justify-center ml-3 items-center font-bold">
<RiMenuFoldLine />
<div className="ml-3 ">Reminders</div>
</div>
<div>
<MdArrowBack className="mr-3" />
</div>
</div>
  </div>


  </div>
  )}
    export default Header