import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Cards from "./components/Card/Cards";
import './App.css';

const buttonTitles = [
    {
        title: 'ALL',
        clickHandler: () => {
            alert('Display all items')
        }
    },
    {
        title: 'Cakes',
        clickHandler: () => {
            alert('Display all cakes')
        }
    },
    {
        title: 'Cupcakes',
        clickHandler: () => {
            alert('Display all cupcakes')
        }
    },
    {
        title: 'Macaroons',
        clickHandler: () => {
            alert('Display all macaroons')
        }
    },
    {
        title: 'DOUGHNUTS',
        clickHandler: () => {
            alert('Display all doughnuts')
        }
    },
]

const shopItems = [
    {
        title: 'Macaroons',
        price: 5,
        imgSrc: 'https://js-beginners.github.io/filter-project/img/sweets-1.jpeg',
        type: 'MACAROONS'
    },
    {
        title: 'Cupcake',
        price: 5,
        imgSrc: 'https://js-beginners.github.io/filter-project/img/cupcake-2.jpeg',
        type: 'cupcakes'
    },
    {
        title: 'Cake',
        price: 5,
        imgSrc: 'https://js-beginners.github.io/filter-project/img/cake-1.jpeg',
        type: 'CAKES'
    },
    {
        title: 'Cupcake',
        price: 15,
        imgSrc: 'https://js-beginners.github.io/filter-project/img/cupcake-3.jpeg',
        type: 'Cupcakes'
    },
    {
        title: 'Cake',
        price: 10,
        imgSrc: 'https://js-beginners.github.io/filter-project/img/cake-2.jpeg',
        type: 'CAKES'
    },
    {
        title: 'Doughnuts',
        price: 10,
        imgSrc: 'https://js-beginners.github.io/filter-project/img/doughnut-2.jpeg',
        type: 'DOUGHNUTS'
    },

]

const App = () => {

  return (
      <div className="container">
      <div className="wrapper">
          <Header />
      </div>
          <div className="wrapper spaces">
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
}

export default App;
