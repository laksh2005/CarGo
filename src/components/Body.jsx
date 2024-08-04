import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Error from "./Error";
import Landing from "./Landing";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { adduser, removeuser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

export const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/error",
      element: <Error />,
    },
    {
      path: "/home",
      element: <Landing />,
    },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName } = user;
        dispatch(adduser({ email: email, displayName: displayName }));
      } else {
        dispatch(removeuser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

