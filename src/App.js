import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Cards from "./components/Card/Cards";
import './App.css';
import buttonTitles from "./components/Button/buttonTitles";
import shopItems from "./components/Card/shopItems";

const App = () => (
    <div>
      <div className="wrapper">
          <Header />
      </div>
          <div className="wrapper">
              {
                  buttonTitles.map(({title, clickHandler}) =>  (
                      <Button
                          buttonTitle = {`${title}`}
                          clickHandler = {clickHandler}
                      />
                  ))
              }
          </div>
          <div className="wrapper">
              {
                  shopItems.map(({imgSrc, price, title}) => (
                      <Cards
                          image = {imgSrc}
                          item = {title}
                          price = {price}
                      />
                  ))
              }
          </div>
    </div>
  );

export default App;
