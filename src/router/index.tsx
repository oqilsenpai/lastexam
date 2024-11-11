import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    
    
    {
        path: "/contact",
        element: <></>,
    },
   
]);

export default router;
