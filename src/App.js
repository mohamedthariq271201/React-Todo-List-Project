import React, { useState } from 'react';
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Additem from './Additem';
import Searchitem from './Searchitem';

function App() {
  const [items, setItems] = useState(JSON.parse
    (localStorage.getItem('todo_list'))
   );

  const [newItem, setNewItem] = useState('');
  const [search,setsearch]=useState('')

  const additem = (item) =>{
    const id=items.length ? items[items.length -1].id+1:1;
    const addNewItem={id,checked:false,item}
    const listitems=[...items,addNewItem]
  }

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    localStorage.setItem("todo_list", JSON.stringify(updatedItems));
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("todo_list", JSON.stringify(updatedItems));
  };

  const addItem = (item) => {
    const newItem = { id: items.length + 1, checked: false, item };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("todo_list", JSON.stringify(updatedItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
    
  };

  return (
    <div className="App">
      <Header title="To Do List" />
      <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Searchitem
      search={search}
      setsearch={setsearch}
      />
      <Content 
        items={items.filter(item=> ((item.item).
         toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
    
  );
}

export default App;
