import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error/Error";
import Movies from "../Pages/Movies/Movies";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Movies />
            },
            {
                path: '/movieDetails',
                element: <MovieDetails />
            },
            {
                path: '/bookings',
                element: <Bookings />
            }
        ]
    }
]);

export default router;