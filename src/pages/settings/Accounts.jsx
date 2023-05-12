import "./accounts.css";
import pp from "../../assets/pp.jpg";

import { UsersContext } from "../../helpers/UserContext/UserDataContext";
import { useContext } from "react";

export default function Accounts(props) {

  const { users, userBalance, disconnectWalletHandler } = useContext(UsersContext);

  return (
      <div className="account-page-container">
        <div class="account-container">
          <img class="profile-pic" src={pp}/>
          <div class="account-id">Account ID: {props.user}</div>
          <div class="account-balance">Account Balance: ${userBalance} </div>
          <div>
            <button className="disconnect-button" onClick={disconnectWalletHandler}>
             Disconnect
            </button>
          </div>
        </div>
      </div>
  );
}
