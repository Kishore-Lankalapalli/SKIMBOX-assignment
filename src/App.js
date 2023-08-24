import {useState} from 'react'
import './App.css'

const App = () => {
  const [pair, setPair] = useState('2')

  const getTotalAmount = () => {
    let amount
    if (pair === '1') {
      amount = 195
    } else if (pair === '2') {
      amount = 345
    } else if (pair === '3') {
      amount = 528
    }
    return amount
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="heading-text">Bundle & Save</h1>
        <div
          className={
            pair === '1'
              ? 'input-container selected-input-container'
              : 'input-container'
          }
        >
          <div className="input-value-container">
            <input
              onChange={e => setPair(e.target.value)}
              name="pair"
              className="input-item"
              type="radio"
              value="1"
            />
            <div className="product-price-details-container">
              <p className="quantity-text">1 Pair</p>
              <p className="price-text">DKK 195.00</p>
            </div>
          </div>
          <p className="discount-text">50% OFF</p>
        </div>

        <div
          className={
            pair === '2' ? 'pair-2-input-container' : 'pair2-container'
          }
        >
          <div className="input-2-container">
            <div className="input-value-container">
              <input
                name="pair"
                className="input-item"
                type="radio"
                value="2"
                onChange={e => setPair(e.target.value)}
              />
              <div className="product-price-details-container">
                <p className="quantity-text">2 Pair</p>
                <p className="price-text">DKK 345.00</p>
              </div>
            </div>
            <p className="crossed-price-text">DKK 195</p>
            <div>
              <h1 className="most-popular-text">Most Popular</h1>
              <p className="discount-text">40% OFF</p>
            </div>
          </div>
          <div>
            <div className="filters-text-container">
              <p className="size-filter-text">Size</p>
              <p className="size-filter-text">Color</p>
            </div>
            <div className="product-size-color-container">
              <p className="first-prefered-label-text">1#</p>
              <select className="size-select-element-container">
                <option value="m">S</option>
                <option value="m">M</option>
                <option value="m">L</option>
              </select>
              <select className="size-select-element-container">
                <option value="m">Colour</option>
                <option value="m">M</option>
                <option value="m">L</option>
              </select>
            </div>

            <div className="product-size-color-container">
              <p className="first-prefered-label-text">2#</p>
              <select className="size-select-element-container">
                <option value="m">S</option>
                <option value="m">M</option>
                <option value="m">L</option>
              </select>
              <select className="size-select-element-container">
                <option value="m">Colour</option>
                <option value="m">M</option>
                <option value="m">L</option>
              </select>
            </div>
          </div>
        </div>
        {/* pair -3 */}

        <div
          className={
            pair === '3'
              ? 'input-container selected-input-container'
              : 'input-container'
          }
        >
          <div className="input-value-container">
            <input
              onChange={e => setPair(e.target.value)}
              name="pair"
              className="input-item"
              type="radio"
              value="3"
            />
            <div className="product-price-details-container">
              <p className="quantity-text">3 Pair</p>
              <p className="price-text">DKK 528.00</p>
            </div>
          </div>
          <p className="discount-text">60% OFF</p>
        </div>

        <div className="free-shipping-order-total-container">
          <p className="free-shipping-text">Free 2 Day Shipping</p>
          <p className="total-price-text">
            Total: <span className="price-text">DKK {getTotalAmount()} </span>
          </p>
        </div>
        <button className="add-button">+ Add to Cart</button>
        <p className="subsidiary-text"> Powered by Pumper</p>
      </div>
    </div>
  )
}

export default App
