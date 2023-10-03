// Main Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

// Icons
import { FaStore, FaSearch } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import LogoutButton from './Logout';

class Header extends Component {
  render() {
    const { handleChange, searchRequest, cartList, searchRequestEnter, logoutState } = this.props;

    return (
      <div className="header">
        <Link to="/">
          <div className="logo">
            <FaStore />
            <span className="logo-title">
              ECOmmerce
              <br />
              UNIVESP
            </span>
          </div>
        </Link>
        <div className="search-bar">
          <label htmlFor="home-initial-message">
            <input
              type="text"
              id="home-initial-message"
              onChange={ handleChange }
              placeholder="Digite aqui"
              data-testid="query-input"
              className="search-input input"
              onKeyDown={ searchRequestEnter }
            />
          </label>
          <Link to="/">
            <button
              type="submit"
              data-testid="query-button"
              onClick={ searchRequest }
              className="search-button"
            >
              <FaSearch />
            </button>
          </Link>  
        </div>

        { localStorage.getItem('token') ? <div>Olá, {localStorage.getItem('username')}</div> : <></>}
        
        <div className="cart-button">
        <Link to="/Cadastro">
            <button 
            className="header-item btn btn-cadastro">Cadastro
            </button>
        </Link>

        { (!localStorage.getItem('token')) ? 

        <Link to="/Entrar">
            <button 
            className="header-item btn btn-entrar">Entrar
            </button>
        </Link>

        :

        <LogoutButton logoutState={logoutState}></LogoutButton> }
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <div
              data-testid="shopping-cart-size"
              className="cart-quantity"
            >
              {cartList.length}
            </div>
            <button
              type="button"
              className="shopping-cart"
            >
              <AiOutlineShoppingCart />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchRequest: PropTypes.func.isRequired,
  cartList: PropTypes.instanceOf(Array).isRequired,
  searchRequestEnter: PropTypes.func.isRequired,
};

export default Header;
