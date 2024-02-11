

import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Sider from "../common/Sider";


const Layout = () => {
  return (
//     <div>
//       <Header />
//     <div className="w-[100%] flex ">
//     <Sider/>
//  <div className="max-w-[80vw]">
//  <Outlet/>
//  </div>
 
  
//     </div>
  
//     </div>

<div>
  <Header/>
  <div className="flex  justify-between bg-slate-500">
  <Sider/>
  <div className="flex   w-full justify-end ">
 
 <Outlet/>
  </div>
  


  </div>
</div>





  );
};

export default Layout;

// const Container = styled.div`
//   width: calc(100vw - 200px);

//   @media screen and (max-width: 640px) {
//     width: 100%;
  // }
// `
;