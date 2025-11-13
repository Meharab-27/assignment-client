import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";
import AllBooks from "../Pages/AllBooks/AllBooks";
import AddBook from "../Pages/AddBook/AddBook";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../Pages/BookDetails/BookDetails";
import MyBooks from "../Pages/MyBooks/MyBooks";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {

        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
            element:<Home></Home>,
            loader:() => fetch('https://assignment-server-red.vercel.app/latest-books')
            },
            {
             path:"/all-books",
             element:<AllBooks></AllBooks>,
             loader: () =>fetch('https://assignment-server-red.vercel.app/books')
           },
           {
            path:"/addBook",
            element:<PrivateRoute>
                <AddBook></AddBook>
            </PrivateRoute>

           },
           {
            path:"/book-details/:id",
            element:<PrivateRoute>
                <BookDetails></BookDetails>
            </PrivateRoute>

           },
           {
            path:"/myBooks",
            element:<PrivateRoute>
                <MyBooks></MyBooks>
            </PrivateRoute>

           },
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element:<Registration></Registration>
            },
            {
                path:"*",
                element:<ErrorPage></ErrorPage>
            }
            
        ]
        
    }
])