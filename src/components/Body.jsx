    import { createBrowserRouter, RouterProvider } from "react-router-dom"
    import Login from "./Login"

    export const Body = () => {

    const approuter = createBrowserRouter([
        {
            path:'/',
            element:<Login />,
        },
    ])

    return (
        <div>
            <RouterProvider router={approuter} />
        </div>
    )
    }
