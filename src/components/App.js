import React from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import "../index.css";

function App() {  
      const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []); // сохраняет список [] - не выдает ошибку если лист пустой1

      const [newItem, setNewItem] = useState('');
      const [search, setSearch] = useState('');

      useEffect( () => {
            localStorage.setItem('shoppinglist', JSON.stringify(items))
      }, [items])

      // add new item

      const addItem = (item) => {
            // faind item on Id
            const id = items.length ? items[items.length - 1].id + 1 : 1;
            const myNewItem = {id, checked: false, item}
            const listitem = [...items, myNewItem]
            setItems(listitem)
      }

      const handleCheck = (id) => {
            // console.log(`key: ${id}`);
            const listItems = items.map( (item) => (
                  item.id === id ? {...item, checked: !item.checked} : item)
            );
            setItems(listItems);
      }
      
      const handleDelete = (id) => {
            // console.log(id);
            const listItems = items.filter( (item) => (
                  item.id !== id)
            );
            setItems(listItems);
      }

      const hadleSubmit = (e) => {
            e.preventDefault();
            //если нет новой записи вернуть пустую функцию
            if(!newItem) return;
            console.log(newItem);
            // добавить новое поле
            addItem(newItem);// добавляет но не сохраняет!
            setNewItem('');
      }

      return (
            <div className="App">
                  <Header title="Simple *To-Do list*"/>
                  <AddItem 
                        newItem = {newItem}
                        setNewItem = {setNewItem}
                        hadleSubmit = {hadleSubmit}
                  />
                  <SearchItem
                        search = {search}
                        setSearch = {setSearch}
                  />
                  <Content
                        items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
                        handleCheck = {handleCheck}
                        handleDelete = {handleDelete}
                  />
                  <Footer length = {items.length} />
            </div>
      )
}

export default App;