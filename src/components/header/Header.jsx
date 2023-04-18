import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">BlockChain BikeSharing</span>
        <span className="headerTitleLg">BikeBitz</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/4065712/pexels-photo-4065712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}
