export const AddProdctScreen = () => {
  return (
    <div>
      <div className="main">
        <form action="" method="post" className="form" id="form-validation">
          <h2 className="form-heading">Add Product Form</h2>

          <div className="form-group">
            <label htmlFor="fullname" className="form-label">
              Name Product:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="T-shirt"
              className="form-control"
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Price:
            </label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="500000"
              className="form-control"
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="birthday" className="form-label">
              Image:
            </label>
            <input
              id="image"
              name="image"
              type="text"
              placeholder="https://..."
              className="form-control"
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="birthday" className="form-label">
              Quantity:
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              placeholder="100"
              className="form-control"
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="note" className="form-label">
              Product description:
            </label>
            <textarea
              name="note"
              id="note"
              cols={5}
              rows={5}
              className="form-control note"
            ></textarea>
            <span className="form-message"></span>
          </div>

          <button className="form-submit" id="submit">
            Create Product
          </button>
        </form>

        <table
          className="form-table"
          id="input-table"
          border={1}
          cellSpacing={0}
        >
          <thead>
            <tr>
              <th>STT</th>
              <th className="cell-break">Name product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th className="cell-break">Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>
    </div>
  );
};
