import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-bottom">
        <p class="footer-paragraph">
          2021-2027 - Gobierno Constitucional del Estado de Nayarit
        </p>
        <button class="privacity">Aviso de privacidad</button>
        <ul>
          <span class="social">
            <li>
              <i class="fa-brands fa-facebook facebook"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter twitter"></i>
            </li>
          </span>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
