import Layout from "./Components/layout/layout";
import './App.css';
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Board from "./Components/board/board";
function App() {
  return (
    <>
<Layout>
    <Header/>
    <main>
        <Board></Board>
    </main>
    <Footer/>
</Layout>
    </>
  );
}

export default App;
