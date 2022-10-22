import { useEffect, useState } from "react";
import { getPosts } from "../Api/postsApi";
import { Post } from "../Components/Post/Post";
import '../Components/Post/style/post.css';
import { CURRENT_USER } from './Signup';
import { CreatePostForm } from "../Components/Post/CreatePostForm";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res.data);
      setIsLoaded(true);
    })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const deletePost = (postId) => {
    let postRemoved = posts.filter(post => post.id !== postId)
    setPosts(postRemoved);
  }

  const createPost = (e, title, body) => {
    e.preventDefault();
    posts.push({ userId: CURRENT_USER.userId, id: posts[posts.length - 1].id + 1, title: title, body: body })
    setPosts([...posts]);
  }

  const updatePost = (e, id, title, body) => {
    e.preventDefault();
    posts.forEach(post => {
      if (post.id === id) {
        post.title = title;
        post.body = body;
        setPosts([...posts])
      }
    }
    );
    document.getElementById(`post-${id}`).style.display = 'none';
  }

  return (
    <div className="mt-4 container">
      <h1 className="text-center">Posts</h1>
      {CURRENT_USER.email &&
        <button className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#form">Create Post</button>
      }
      {!isLoaded ? <p>Loading...</p> :
        <div className="posts p-4">
          {posts.map(post => {
            return <Post post={post} key={post.id} deletePost={deletePost} updatePost={updatePost} comments={comments} setComments={setComments} />
          })}
        </div>}
      <CreatePostForm createPost={createPost} />
    </div>
  );
}

export { Posts };
