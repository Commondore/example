import { useState } from 'react';
import './App.css';
import Posts from './components/Posts/Posts';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      icon: "img/icon1.png",
      title: "Connect with our farmers",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores ",
    },
    {
      id: 2,
      icon: "img/icon2.png",
      title: "Connect with our farmers",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores ",
    },
    {
      id: 3,
      icon: "img/icon1.png",
      title: "Connect with our farmers",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores ",
    },
  ]);
  return (
    <div className="App">
      <h1 className="title">New Opportunities</h1>
      <p className="desc">
        We are the first and the only crowdfunding platform enabling you to help
        finance our farmers.
      </p>
      <Posts list={posts}/>
    </div>
  );
}

export default App;
