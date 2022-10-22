import './style/comment.css';
import { CURRENT_USER } from '../../Pages/Signup';
import { useState } from 'react';

const Comment = (props) => {
  const [comment, setComment] = useState(props.comment.body)

  const showUpdateCommentForm = () => {
    if (document.getElementById(`comment-update-${props.comment.commentId}`).style.display === '') {
      document.getElementById(`comment-update-${props.comment.commentId}`).style.display = 'none';
    }
    if (document.getElementById(`comment-update-${props.comment.commentId}`).style.display !== 'none') {
      document.getElementById(`comment-update-${props.comment.commentId}`).style.display = 'none';
    }
    else {
      document.getElementById(`comment-update-${props.comment.commentId}`).style.display = 'block';
    }
  }

  return (
    <div className="row justify-content-center my-4">
      <div className="col-7 comment-div pt-3">
        <p>{props.comment.body}</p>
        <p className="text-primary">{props.comment.email}</p>
        {CURRENT_USER.email === props.comment.email &&
          <>
            <button className='comment-edit-btn text-warning mx-2' onClick={showUpdateCommentForm}>Edit</button>
            <button className='comment-delete-btn text-danger mx-2' onClick={() => { props.deleteComment(props.commentId) }}>Delete</button>
            <form id={`comment-update-${props.comment.commentId}`} className="update-comment-form">
              <input type="text" value={comment} onChange={e => setComment(e.target.value)} className="form-control my-2" />
              <button className='btn btn-primary my-2' onClick={(e) => props.updateComment(e, comment, props.comment.commentId)}>Update Comment</button>
            </form>
          </>
        }
      </div>
    </div>
  );
}

export { Comment };
