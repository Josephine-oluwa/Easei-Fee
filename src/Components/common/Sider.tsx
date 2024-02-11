import { MdOutlineDashboard } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import {Link} from "react-router-dom"


const Sider = () => {
  return (

     <div className="bg-[#011747]">
       <div className="bg-[#011747] h-[100vh]  text-white w-[300px] laptop:flex  phone:hidden tablet:hidden">
        <Link to ="/">
        <div className="flex px-4  justify-center hover:cursor-pointer mt-10
           hover:bg-[#002776]   hover:text-[#d08415]  py-4 transition-all duration-300  w-full h-[100px] items-center">
         <MdOutlineDashboard />
           <div className="ml-2">Dashboard</div>
         </div>
        </Link>
       
         <div className="flex px-4 justify-center hover:cursor-pointer 
           hover:bg-[#002776]   hover:text-[#d08415]  py-4 transition-all duration-300  w-full h-[100px] items-center">
         <IoMdTime  />
           <div className="ml-2">Reminders</div>
         </div>
         <div className="flex px-4 justify-center hover:cursor-pointer 
           hover:bg-[#002776]   hover:text-[#d08415]  py-4 transition-all duration-300  w-full h-[100px] items-center">
         <CiCalendar />
           <div className="ml-2">My Clients</div>
         </div>
         <div className="flex px-4 justify-center hover:cursor-pointer 
           hover:bg-[#002776]   hover:text-[#d08415]  py-4 transition-all duration-300  w-full h-[100px] items-center">
         <IoSettingsOutline  />
           <div className="ml-2">Settings</div>
         </div>
      </div>








      <div className=" phone:w-[50px] phone:flex text-white  text-[20px] tablet:flex laptop:hidden lg:hidden justify-center">
 <div className="flex   h-[300px] mt-10 justify-between flex-col items-center "> 
 <div> <MdOutlineDashboard/></div>
    <div> <MdOutlineDashboard/></div>
    <div> <CiCalendar /></div>
    <div> < IoSettingsOutline  /></div>
 </div>
      </div> 
     </div>

  )
}

export default Sider 







