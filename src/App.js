import {Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories'

import './App.css';

function App() {
    return (
        <div className="container">
            <Header />

            <Switch>
                <Route path="/" component={Categories} exact/>
                <Route path="/categories/:category" component ={Categories}/>
            </Switch>
            
            <Footer />
        </div>
    );
}

export default App;
