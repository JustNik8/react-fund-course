import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import postList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    // const postsArr = [];
    // for (let i = 1; i <= 5; i++) {
    //     const title = "Java " + i
    //     const body = "Some body about Java" + i
    //
    //     postsArr.push({id: i, title: title, body: body})
    // }

    const [posts, setPosts] = useState([
        {id: 1, title: "aa", body: "fds"},
        {id: 2, title: "gg", body: "asd1"},
        {id: 3, title: "cc", body: "asd2"}
    ])
    const [selectedSort, setSelectedSort] = useState("")

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        {value: "title", name: "По названию"},
                        {value: "body", name: "По описанию"}
                    ]}/>
            </div>
            {posts.length !== 0
                ? <PostList posts={posts} title={"Список постов"} remove={removePost}/>
                : <h1 style={{textAlign: "center"}}>Посты не найдеты!</h1>
            }
        </div>
    );
}


export default App;
