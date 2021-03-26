import {Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import DemoPage from './components/Demo';

import './App.css';

function App() {
    return (
        <div className="container">
            <Header />

            <Switch>
                <Route path="/" component={Categories} exact/>
                <Route path="/categories/:category" component ={Categories}/>
                <Route path="/pets/details/:petId" component={PetDetails}/>
                <Route path="/demo" component={DemoPage}/>
            </Switch>
            
            <Footer />
        </div>
    );
}

export default App;
