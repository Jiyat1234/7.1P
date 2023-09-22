import { Link } from "react-router-dom"


const TopBar = () => {
  return (

    <div className="Top">
      <Link to='/'>
        <div className="Home">
              DEV@Deakin
        </div>
      </Link>

      <div className="searchBar">
        <input type="search" placeholder="Search" />
      </div>

      <div className="btn">
        
        <Link to='login'>
          <button value="Login">
            Login
          </button>
        </Link>
      </div>
      <div className="btn">
        
        <Link to='signup'>
          <button value="Login">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;