import postData from "./data/posts.json";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Form from "./components/Form";
import PostTable from "./components/PostTable";
import MainDisplay from "./components/MainDisplay";
import "./index.css";
import Footer from "./components/Footer";
import { useState } from "react";
import "./index.css"

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="main">
      <Nav postData={postData} />
      <Header />
      <Form
        postData={postData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div class="container">
        <div class="row">
          <div class="col-8">
            <MainDisplay postData={postData} searchTerm={searchTerm} />
          </div>
          <div class="col-4">
            <PostTable postData={postData} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
