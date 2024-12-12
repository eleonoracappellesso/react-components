import posts from "./data/post";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";

function App() {

  return (
    <>
      <HeaderComponent />
      <MainComponent post={posts} />
      <FooterComponent />
    </>
  )
}

export default App;
