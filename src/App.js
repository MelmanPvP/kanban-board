import Footer from "./Components/footer/footer";
import Header from "./Components/header/header";
import Layout from "./Components/layout/layout";
import Board from "./Components/board/board";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Descrcard from "./Components/board/descr_card/descr_card";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Board/>
    },
    {
        path: "/tasks/:cardId",
        element: <Descrcard/>
    }
])

function App() {

    return (
        <Layout>
            <Header/>
            <main>
                <RouterProvider router={router}/>
            </main>
            <Footer/>
        </Layout>

    );
}

export default App;
