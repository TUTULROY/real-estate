import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

import ViewProperty from "../ViewProperty/ViewProperty";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserProfile from "../UserProfile/UserProfile";
import Agent from "../Agent/Agent";




  const router = createBrowserRouter([

        {
            path:"/",
            element:<Root></Root>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader: () => fetch('/property.json')

                },

                {
                    path:'/property/:id',
                    element:<PrivateRoute>
                        <ViewProperty></ViewProperty>
                    </PrivateRoute>,
                    
                    loader:() => fetch('../property.json')               
                },
                {
                    path:"/update",
                    element:<PrivateRoute>
                        <UpdateProfile></UpdateProfile>
                    </PrivateRoute>
                    
                },
                {
                    path:"/login",
                    element:<Login></Login>
                },
                {
                    path:"/register",
                    element:<Register></Register>
                },
                {
                    path:'/user-info',
                    element:<PrivateRoute>
                        <UserProfile></UserProfile>
                    </PrivateRoute>
                },
                {
                    path:'/agent',
                    element:<PrivateRoute>
                        <Agent></Agent>
                    </PrivateRoute>,
                    loader:() =>fetch('/agent.json')
                }
                

            ]
        }
  ]);

  export default router;