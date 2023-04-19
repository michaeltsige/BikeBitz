import "./accounts.css";
import pp from "../../assets/pp.jpg";

export default function Accounts() {
  return (
      <div className="account-page-container">
        <div class="account-container">
          <img class="profile-pic" src={pp}/>
          <div class="account-id">Account ID: #123456</div>
          <div class="account-balance">Account Balance: $1,234.56</div>
        </div>
      </div>
  );
}
