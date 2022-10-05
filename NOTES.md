TODO:

[x] 1. fetch the stocks

- use the fetch api in a useEffect
- console.log all of the fetched stocks
  [x] 2. render all the stocks onto the page (render all the stocks by default into the StockContainer)
  [x] useState (to store the stocks from the fetch)
  [x] add a listener to each stock
  [x] when stock is clicked log something to the console
  [x] communicate between the StockContainer and the PortfolioContainer
  [] add the createdObj into the myStocks state in PortfolioContainer

---

[] 3. when a stock is clicked (in StockContainer) add stock to PortfolioContainer
[] 4. In PortfolioContainer when one stock is clicked delete from your list of stocks
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
