import { Link } from 'react-router'
import './shop.css'

export default function Shop() {
  const baseProducts = [
    {
      name: 'Syltherine',
      model: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      oldPrice: 'Rp 3.500.000',
      image: '/public/Images.svg',
      badge: '-30%',
      badgeType: 'discount'
    },
    {
      name: 'Leviosa',
      model: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      image: '/public/Images.png'
    },
    {
      name: 'Lolito',
      model: 'Luxury big sofa',
      price: 'Rp 7.000.000',
      oldPrice: 'Rp 14.000.000',
      image: '/public/Images (1).png',
      badge: '-50%',
      badgeType: 'discount'
    },
    {
      name: 'Respira',
      model: 'Outdoor bar table and stool',
      price: 'Rp 500.000',
      image: '/public/Images (2).png',
      badge: 'New',
      badgeType: 'new'
    }
  ]

  const products = Array.from({ length: 16 }, (_, index) => ({
    ...baseProducts[index % 4],
    id: `${baseProducts[index % 4].name}-${index}`
  }))

  return (
    <section className="shop-page">
      <div className="shop-hero">
        <div className="shop-hero__overlay">
          <h1>Shop</h1>
          <div className="shop-hero__crumb">
            <Link to="/">Home</Link>
            <span className="shop-hero__arrow">&gt;</span>
            <span>Shop</span>
          </div>
        </div>
      </div>

      <div className="shop-toolbar">
        <div className="shop-toolbar__left">
          <button type="button" className="tool-btn">
            <span className="tool-icon">|||</span>
            Filter
          </button>
          <button type="button" className="tool-icon-btn">[]</button>
          <button type="button" className="tool-icon-btn">===</button>
          <span className="shop-toolbar__divider" />
          <p>Showing 1-16 of 32 results</p>
        </div>

        <div className="shop-toolbar__right">
          <label>
            Show
            <input type="text" value="16" readOnly />
          </label>
          <label>
            Short by
            <input type="text" value="Default" readOnly />
          </label>
        </div>
      </div>

      <div className="shop-products">
        <div className="shop-products__grid">
          {products.map((product) => (
            <article className="shop-card" key={product.id}>
              <div className="shop-card__media">
                {product.badge && (
                  <span className={`shop-card__badge shop-card__badge--${product.badgeType}`}>
                    {product.badge}
                  </span>
                )}

                <div className="shop-card__overlay">
                  <Link to="/single-product" className="shop-card__button">Add to cart</Link>
                  <div className="shop-card__actions">
                    <span>Share</span>
                    <span>Compare</span>
                    <span>Like</span>
                  </div>
                </div>

                <img src={product.image} alt={product.name} className="shop-card__img" />
              </div>

              <div className="shop-card__content">
                <h3>{product.name}</h3>
                <p className="shop-card__model">{product.model}</p>
                <div className="shop-card__prices">
                  <p className="shop-card__price">{product.price}</p>
                  {product.oldPrice && <p className="shop-card__old-price">{product.oldPrice}</p>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="shop-benefits">
        <div className="shop-benefit">
          <span className="shop-benefit__icon">T</span>
          <div>
            <h4>High Quality</h4>
            <p>crafted from top materials</p>
          </div>
        </div>

        <div className="shop-benefit">
          <span className="shop-benefit__icon">O</span>
          <div>
            <h4>Warranty Protection</h4>
            <p>Over 2 years</p>
          </div>
        </div>

        <div className="shop-benefit">
          <span className="shop-benefit__icon">U</span>
          <div>
            <h4>Free Shipping</h4>
            <p>Order over 150 $</p>
          </div>
        </div>

        <div className="shop-benefit">
          <span className="shop-benefit__icon">Q</span>
          <div>
            <h4>24 / 7 Support</h4>
            <p>Dedicated support</p>
          </div>
        </div>
      </section>
    </section>
  )
}

