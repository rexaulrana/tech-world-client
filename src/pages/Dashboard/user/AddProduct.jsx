const AddProduct = () => {
  return (
    <div>
      <div></div>
      <div>
        <form>
          <div className="flex  flex-col lg:flex-row justify-evenly items-center gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="product-Name"
                  className="input input-bordered lg:w-full"
                  name="productName"
                />
              </label>
            </div>
            {/*  */}
            <div className=" form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Brand Name</span>
              </label>
              <label className="input-group">
                <select
                  name="brandName"
                  className="select select-bordered lg:w-full"
                >
                  <option>Select Brand Name</option>
                  <option>Walmart</option>
                  <option>AliBaba</option>
                  <option>eBay</option>
                  <option>Amazon</option>
                  <option>Target</option>
                  <option>Best Buy</option>
                </select>
              </label>
            </div>
          </div>
          <div className="flex  flex-col lg:flex-row justify-evenly items-center gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="price"
                  className="input input-bordered md:w-full"
                  name="price"
                />
              </label>
            </div>
            {/*  */}
          </div>
          <div className="flex  flex-col lg:flex-row justify-evenly items-center gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered md:w-full"
                  name="rating"
                />
              </label>
            </div>
            {/*  */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Product Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Product image"
                  className="input input-bordered md:w-full"
                  name="image"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-4 mb-6 ">
            <button className="btn bg-green-500 w-full hover:bg-green-600">
              Add
            </button>
            {/* <ToastContainer /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
