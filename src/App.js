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

function App() {
    const postsArr = [];
    for (let i = 1; i <= 10; i++) {
        const title = "Java " + i
        const body = "Some body about Java" + i

        postsArr.push({id: i, title: title, body: body})
    }

    const [posts, setPosts] = useState(postsArr)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title={"Список постов"} remove={removePost}/>
        </div>
    );
}


export default App;
