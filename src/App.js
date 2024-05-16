import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
    return (
        <Router>
            <Header />
            <main className="container content">
                <Switch>
                    <Route exact path="/" component={Home}>
                        <Home></Home>
                    </Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contacts" component={Contact}></Route>
                    <Route path="/category/:name" component={Category}></Route>
                    <Route path="/meal/:id" component={Recipe}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
