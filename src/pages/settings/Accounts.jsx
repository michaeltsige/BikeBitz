import "./accounts.css";
import pp from "../../assets/pp.jpg";

export default function Accounts(props) {
  return (
      <div className="account-page-container">
        <div class="account-container">
          <img class="profile-pic" src={pp}/>
          <div class="account-id">Account ID: {props.user}</div>
          <div class="account-balance">Account Balance: $0.00 </div>
        </div>
      </div>
  );
}
