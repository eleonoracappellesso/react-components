import posts from "./data/post";
import HeaderComponent from "./components/HeaderComponent";
import CardComponent from "./components/CardComponent";
import FooterComponent from "./components/FooterComponent";

function App() {

  return (
    <>
      <HeaderComponent />
      <main className="d-flex justify-content-between flex-wrap align-items-center">
        {posts.map((post) => (
          <CardComponent key={post.id} post={post} />
        ))}
      </main>
      <FooterComponent />
    </>
  )
}

export default App;
