import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reqType, setReqType] = useState("users");
  const [items,setItems] = useState([]);

  useEffect(() => { 
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch(`${API_URL}${reqType}`);
      const data = await res.json();
      setItems(data);
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, [reqType]);



  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      <List items={items}/>
      
      
    </div>
  );
}

export default App;
