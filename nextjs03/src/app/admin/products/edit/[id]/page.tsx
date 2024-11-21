export default function CreatePage() {
  return (
    <div>
      <h1>Update Product</h1>
      <form action="">
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Name..." />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Price..."
          />
        </div>
        <div className="mb-3">
          <label>Mô tả</label>
          <textarea
            className="form-control"
            placeholder="Description..."
          ></textarea>
        </div>
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}
