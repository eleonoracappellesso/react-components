import posts from "./data/post";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";

function App() {

  return (
    <>
      <HeaderComponent />
      <MainComponent post={posts} />
    </>
  )
}

export default App;
