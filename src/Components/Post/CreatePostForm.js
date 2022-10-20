import { useState } from "react";

function CreatePostForm(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleFormSubmit = (e) => {
    props.createPost(e, title, body);
    setTitle("");
    setBody("");
  }

  return (
    <div className="modal fade" id="form" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content text-center">
          <div className="modal-header">
            <h5 className="modal-title text-center" id="exampleModalLabel">Create Post</h5>
            <button type="button" className="close btn" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <input type="text" id="post-title" required placeholder="Enter post title" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
              <br />
              <input type="text" id="post-body" required placeholder="Enter post body" className="form-control mb-4" value={body} onChange={e => setBody(e.target.value)} />
              <button className="btn btn-primary" type="submit">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CreatePostForm };
