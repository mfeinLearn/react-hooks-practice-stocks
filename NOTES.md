TODO:

[x] 1. fetch the stocks

- use the fetch api in a useEffect
- console.log all of the fetched stocks
  [x] 2. render all the stocks onto the page (render all the stocks by default into the StockContainer)
  [x] useState (to store the stocks from the fetch)
  [x] add a listener to each stock
  [x] when stock is clicked log something to the console
  [x] communicate between the StockContainer and the PortfolioContainer
  [] add the createdObj into the myStocks state in PortfolioContainer (fun)

```md
Action Plan:

1. [x] when stock component is clicked console.log stuff
2. [x] console log stock id / stock object
3. [x] how to get the id from theStock obj and "save" it in our component.
```

---

[x] 3. when a stock is clicked (in StockContainer) add stock to PortfolioContainer
[x] 3a. figure out a way to distinguance between a click on the stock from the StockContainer and from the PortfolioContainer

[-] 4. In PortfolioContainer when one stock is clicked delete from your list of stocks

- [-] 4a. filter out the stock that we clicked in our PortfolioContainer state and log the result (fun error).

[-] 5. when the checkbox clicked sort stocks either alphabetically or by price (ascending order ) in StockContainer
[-] 6. filter stocks based on type of stock in StockContainer

---

relationships:

                       App
                        |
                    MainContainer (use as a transporter)

                 /                                       \

StockContainer(collection of stocks place here) PortfolioContainer(collection of my stocks)
| |
Stock Stock

rendered stocks on page, working on buy stock

================================================================

```js
const arr = ["stuff1", "stuff2", "stuff3"];
```

```js
const stocks = [
  {
    id: 1,
    ticker: "GOOG",
    name: "Google",
    type: "Tech",
    price: 1194.8,
  },
  {
    id: 2,
    ticker: "FB",
    name: "Facebook",
    type: "Tech",
    price: 168.85,
  },
  {
    id: 3,
    ticker: "TWTR",
    name: "Twitter",
    type: "Tech",
    price: 29.41,
  },
];

const someId = 2;
const result = stocks.filter((stock) => stock.id == someId);
```

---

Refactor TIME!!!!!

Goal:

1. when click on stock add it to a new array
2. pass new array to prof. com.

Action Plan:

1. [x] access the stocks state array
2. [x] filter that stocks array based on number and string
3. [] sort - returns an array, we need to figure out how to distinguish between Alphabetically and price, use SearchBar

- [] how to access the value from an input
- [] use input value as state
- [] handle state chage in Main container
- [] then use that state in our function (megaSort)

- [] first render out the stocks from state
- [] based on a click from the SearchBar we need to render out a new array based on if the string is either Alphabetically or price

```js
const stocks = [
  {
    id: 1,
    ticker: "GOOG",
    name: "Google",
    type: "Tech",
    price: 1194.8,
  },
  {
    id: 2,
    ticker: "FB",
    name: "Facebook",
    type: "Tech",
    price: 168.85,
  },
  {
    id: 3,
    ticker: "TWTR",
    name: "Twitter",
    type: "Tech",
    price: 29.41,
  },
  {
    id: 4,
    ticker: "AMZN",
    name: "Amazon",
    type: "Tech",
    price: 2013.04,
  },
  {
    id: 5,
    ticker: "V",
    name: "Visa",
    type: "Finance",
    price: 150.05,
  },
  {
    id: 6,
    ticker: "BAC",
    name: "Bank of America",
    type: "Finance",
    price: 29.95,
  },
  {
    id: 7,
    ticker: "JPM",
    name: "JP Morgan",
    type: "Finance",
    price: 114.45,
  },
  {
    id: 8,
    ticker: "C",
    name: "Citi Bank",
    type: "Finance",
    price: 72.94,
  },
  {
    id: 9,
    ticker: "NKE",
    name: "Nike",
    type: "Sportswear",
    price: 84.56,
  },
  {
    id: 10,
    ticker: "UAA",
    name: "Under Armour",
    type: "Sportswear",
    price: 21.07,
  },
];

// function megaSort(stocks, weightToggleEnable = false) {
function megaSort(collectionOfStocks, tickerToggleEnable = false) {
  if (tickerToggleEnable) {
    collectionOfStocks.sort((a, b) => {
      // in place - sort
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return collectionOfStocks;
  } else {
    collectionOfStocks.sort((a, b) => {
      // in place - sort
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return collectionOfStocks;
  }
}
```
