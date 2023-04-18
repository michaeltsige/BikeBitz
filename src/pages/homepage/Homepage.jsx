import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import hits_bicycles from "../../hits_bicycles";
import PostGrid from "../../components/post/post-grid";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  
  return (
    <>
      <Header />
      <div className="home">
        <PostGrid />
        <Sidebar />
      </div>
    </>
  );
}
