import { useState } from "react";

function CreateCommentForm(props) {
  const [comment, setComment] = useState("");

  const handelFormSubmit = (e) => {
    e.preventDefault();
    props.createComment(comment, props.postId);
    setComment("");
  }

  return (
    <div className="modal fade" id={`comment-form-${props.postId}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content text-center">
          <div className="modal-header">
            <h5 className="modal-title text-center" id="exampleModalLabel">Add Comment</h5>
            <button type="button" className="close btn" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => handelFormSubmit(e)}>
              <input type="text" id={`post-comment-${props.postId}`} required placeholder="Enter comment" className="form-control" value={comment} onChange={e => setComment(e.target.value)} />
              <br />
              <button className="btn btn-primary">Add Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CreateCommentForm };
