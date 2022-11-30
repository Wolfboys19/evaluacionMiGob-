import React from "react";
import "../Header/Header.css";
import Logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <header>
      <nav>
        <div class="navbar-left">
            <img
              class="logo-header"
              src={Logo}
              alt="Escudo de Nayarit"
            />
        </div>

        <div class="navbar-right">
          <ul>
            <li>
              <button class="button">
                <a href="">
                  <div>
                    <span>
                      <i class="fa-solid fa-house home"></i>
                    </span>
                  </div>
                </a>
                Inicio
              </button>
            </li>
            <li>
              <button class="button">
                <a href="">
                  <div>
                    <span>
                      <i class="fa-solid fa-box"></i>
                    </span>
                  </div>
                </a>
                Trámites
              </button>
            </li>
            <li>
              <button class="button">
                <a href="">
                  <div>
                    <span>
                      <i class="fa-solid fa-location-dot"></i>
                    </span>
                  </div>
                </a>
                Oficinas
              </button>
            </li>
            <li>
              <button class="button">
                <a href="">
                  <div>
                    <span>
                      <i class="fa-solid fa-book"></i>
                    </span>
                  </div>
                </a>
                Normateca
              </button>
            </li>
            <li>
              <button class="button">
                <a href="">
                  <div>
                    <span>
                      <i class="fa-brands fa-bitcoin"></i>
                    </span>
                  </div>
                </a>
                Pagos
              </button>
            </li>
            <li>
              <button class="button">
                <a href="">
                  <div>
                    <span>
                      <i class="fa-solid fa-file"></i>
                    </span>
                  </div>
                </a>
                Facturación
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
