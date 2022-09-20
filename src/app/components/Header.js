import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectItems, removeCart} from '../../features/basketSlice';



function Header() {




const logout = () => {

}


const items = useSelector(selectItems);
  return (
  <div className="app">
          <div className='container'>
              <div className='row'>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <Link className="navbar-brand" to="/">React Store</Link>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                  <Link className="nav-link" to="/">Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="./cart">Cart <span>{items.length}</span></Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
                              </li>
                              <li className="nav-item hk_name">
                                 <span>User:</span>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
  </div>    
  )
}

export default Header;
