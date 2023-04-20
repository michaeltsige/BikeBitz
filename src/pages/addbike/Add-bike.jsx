import "./Add-bike.css";

export default function AddBike() {
  return (
    <div className="add-bike-body">
      <div className="add-bike-container">
        <div className="add-bike-card">
          <img className="add-bike-img" src="https://cdn.pixabay.com/photo/2016/11/18/12/49/bicycle-1834265_960_720.jpg" alt="Card Image" />
          <form className="add-bike-form">
            <div className="input-container">
              <label htmlFor="rentfee" className="add-bike-label">
                Rent-Fee:
              </label>
              <input type="number" id="rentfee" name="rentfee" className="add-bike-input" />
              <button type="submit" className="add-bike-button">
                +
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
