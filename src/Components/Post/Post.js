import { useState } from 'react';
import { currentUser } from '../../Pages/Signup';
import '../Post/style/post.css'

function Post(props) {
  const [title, setTitle] = useState(props.post.title);
  const [body, setBody] = useState(props.post.body);

  const showUpdateForm = () => {
    if (document.getElementById(`post-${props.post.id}`).style.display === '') {
      document.getElementById(`post-${props.post.id}`).style.display = 'none';
    }
    if (document.getElementById(`post-${props.post.id}`).style.display !== 'none') {
      document.getElementById(`post-${props.post.id}`).style.display = 'none';
    }
    else {
      document.getElementById(`post-${props.post.id}`).style.display = 'block';
    }
  }

  return (
    <div className="post my-4 py-3 text-center">
      <h3>{props.post.title}</h3>
      <hr />
      <p>{props.post.body}</p>
      <hr />
      <button className='btn btn-secondary mx-2'>Comments</button>
      <hr />
      {currentUser[0] && currentUser[0].userId === props.post.userId &&
        <div>
          <button className='btn btn-warning mx-2' onClick={showUpdateForm}>Edit</button>
          <button className='btn btn-danger mx-2' onClick={() => props.deletePost(props.post.id)}>Delete</button>
          <div className='row justify-content-center'>
            <div className='col-7'>
              <form id={`post-${props.post.id}`} className="post-update-form my-3" onSubmit={e => props.updatePost(e, props.post.id, title, body)}>
                <input type="text" required placeholder="Enter post title" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                <br />
                <input type="text" required placeholder="Enter post body" className="form-control mb-4" value={body} onChange={e => setBody(e.target.value)} />
                <button className="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export { Post };
