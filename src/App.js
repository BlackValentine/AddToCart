import React from 'react';
import Header from './Components/Header'
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer'
import CartContainer from './containers/CartContainer'
import Footer from './Components/Footer'

function App() {
    return (
        <div>
            <Header />

            <main id="mainContainer">
                <div className="container">
                    <ProductsContainer />

                    <MessageContainer />

                    <CartContainer />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
