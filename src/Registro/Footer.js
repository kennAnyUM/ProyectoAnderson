import React, { Component } from 'react';
import './Registro.css';

class Footer extends Component {
    render() {
        return (
            <footer class="footer-distributed">

                <div class="footer-left">

                    <p class="footer-links">
                        <a href="#">Home</a>
                        ·
					<a href="#">Blog</a>
                        ·
					<a href="#">Pricing</a>
                        ·
					<a href="#">About</a>
                        ·
					<a href="#">Faq</a>
                        ·
					<a href="#">Contact</a>
                    </p>

                    <p>Impesa &copy; 2018</p>
                </div>

            </footer>
        )
    }
}

export default Footer;
