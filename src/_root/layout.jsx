import { Outlet } from "react-router-dom";


const RootLayout = () => {
  return (
    <div className="bg-gray-200 h-screen w-full flex justify-center items-center px-6">
      <div className="w-full md:w-6/12 lg:5/12 xl:w-3/12">
        <div className="bg-gray-100 flex flex-col justify-center py-8 px-8 w-full">

          <Outlet />
          
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
