import React from "react";

export default function AddTodo() {
    return (
        <div className="container mt-5">
            <h3>Add a todo</h3>
            <hr />
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Enter title"
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="password"
                        className="form-control"
                        id="description"
                        name="description"
                        placeholder="Enter a description"
                    />
                </div>
                <br />
                <div className="form-group ml-auto">
                    <button type="submit" className="btn btn-primary">
                        + Add
                    </button>
                </div>
            </form>
        </div>
    );
}
