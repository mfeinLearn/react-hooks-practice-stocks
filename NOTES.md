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

[] 4. In PortfolioContainer when one stock is clicked delete from your list of stocks

- [] 4a. filter out the stock that we clicked in our PortfolioContainer state and log the result (fun error).

[] 5. when the checkbox clicked sort stocks either alphabetically or by price (ascending order ) in StockContainer
[] 6. filter stocks based on type of stock in StockContainer

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
