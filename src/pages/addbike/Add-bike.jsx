import "./Add-bike.css";

export default function AddBike() {
  return (
    <div className="bg">
      <div className="bike">
        <img
          className="bikeImg"
          src="https://images.pexels.com/photos/686230/pexels-photo-686230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <form className="bikeForm">
          <div className="bikeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            
            <input
              className="bikeInput"
              placeholder="Rate of Rental"
              type="number"
              step="any"
              min="0"
              autoFocus={true}
            />
          </div>
          <button className="bikeSubmit" type="submit">
            Mint
          </button>
        </form>
      </div>
    </div>
  );
}
