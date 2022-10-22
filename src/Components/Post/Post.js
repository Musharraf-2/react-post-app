import { useState } from 'react';
import { getComments } from '../../Api/postsApi';
import { CURRENT_USER } from '../../Pages/Signup';
import { Comment } from '../Comment/Comment';
import { CreateCommentForm } from '../Comment/CreateCommentForm';
import '../Post/style/post.css'

function Post(props) {
  const [title, setTitle] = useState(props.post.title);
  const [body, setBody] = useState(props.post.body);
  const [commentLoaded, setCommentsLoaded] = useState(false);

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

  const showComments = () => {
    if (document.getElementById(`post${props.post.id}-comments`).style.display === '') {
      document.getElementById(`post${props.post.id}-comments`).style.display = 'none';
    }
    if (document.getElementById(`post${props.post.id}-comments`).style.display !== 'none') {
      document.getElementById(`post${props.post.id}-comments`).style.display = 'none';
    }
    else {
      document.getElementById(`post${props.post.id}-comments`).style.display = 'block';
      getComments(props.post.id).then((res) => {
        res.data.forEach(comment => {
          props.comments.push({ commentId: comment.id, postId: comment.postId, username: comment.name, email: comment.email, body: comment.body });
        });
        props.setComments(props.comments);
        setCommentsLoaded(true);
      })
        .catch(error => {
          console.log(error.message);
        })
    }
  }

  const deleteComment = (commentId) => {
    let deletedComment = props.comments.filter(comment => comment.commentId !== commentId)
    props.setComments(deletedComment);
  }

  const createComment = (comment, postId) => {
    props.comments.push({ commentId: props.comments[props.comments.length - 1].commentId + 1, postId: postId, username: CURRENT_USER.username, email: CURRENT_USER.email, body: comment });
    props.setComments([...props.comments]);
  }

  const updateComment = (e, updatedComment, commentId) => {
    e.preventDefault();
    props.comments.forEach(comment => {
      if (comment.commentId === commentId) {
        comment.body = updatedComment;
        props.setComments([...props.comments])
      }
    })
    document.getElementById(`comment-update-${commentId}`).style.display = 'none';
  }

  return (
    <div className="post my-4 py-3 text-center">
      <h3>{props.post.title}</h3>
      <hr />
      <p>{props.post.body}</p>
      <hr />
      {CURRENT_USER.userId === props.post.userId &&
        <div>
          <button className='text-warning mx-2' id='edit-btn' onClick={showUpdateForm}>Edit</button>
          <button className='text-danger mx-2' id='delete-btn' onClick={() => props.deletePost(props.post.id)}>Delete</button>
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
          <hr />
        </div>
      }
      <button className='text-secondary mb-2' id='comment-btn' onClick={showComments}>Comments</button>
      <br />
      {CURRENT_USER.email &&
        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target={`#comment-form-${props.post.id}`}>Add Comment</button>
      }
      <div id={`post${props.post.id}-comments`} className="comments-div">
        {commentLoaded ? <>
          {props.comments.map(comment => { return props.post.id === comment.postId ? <Comment comment={comment} deleteComment={deleteComment} updateComment={updateComment} commentId={comment.commentId} /> : <></> })}
        </> :
          <p>Loading...</p>}
      </div>
      <CreateCommentForm createComment={createComment} postId={props.post.id} />
    </div>
  );
}

export { Post };
