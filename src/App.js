import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import api from './api';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get("/posts")
      .then( resposta => setPosts(resposta.data))
  },[])

  const pegaPosts = (e) => {
    e.preventDefault();
    api.get("/posts")
      .then( resposta => setPosts(resposta.data))

  }
  return (
    <div className="App">
      <button onClick={pegaPosts}>Pegar Posts</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, i) => 
          <tr key={i}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.author}</td>
          </tr>
          )}
      </tbody>
      </table>
    </div>
  );
}

export default App;
