import { FC } from "react";
import { useLocation } from "react-router-dom"; 
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { ComponentChildrenProps } from "../types";

const MainLayout: FC<ComponentChildrenProps> = ({ children }) => {
  const location = useLocation(); 

  const isLoginPage = location.pathname === '/login'; 
 
  return (
    <>
   
      {!isLoginPage && <Header />}

    
      {!isLoginPage && <Sidebar />}

      <div>
        {children}
      </div>

  
      {!isLoginPage &&  <Footer />}
    </>
  );
};

export default MainLayout;
