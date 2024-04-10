import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

import ViewProperty from "../ViewProperty/ViewProperty";




  const router = createBrowserRouter([

        {
            path:'/',
            element:<Root></Root>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>,
                    loader: () => fetch('property.json')

                },

                {
                    path:'/property/:id',
                    element:<ViewProperty></ViewProperty>,
                    loader:() => fetch('../property.json')
                   
                    
                },
                {
                    path:"/login",
                    element:<Login></Login>
                },
                {
                    path:"/register",
                    element:<Register></Register>
                }
                

            ]
        }
  ]);

  export default router;