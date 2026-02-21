import { useState } from 'react'
import { Link } from 'react-router'
import './singleProduct.css'

export default function SingleProduct() {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)

  const relatedProducts = [
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

  return (
    <section className="single-product-page">
      <div className="single-product-detail">
        <div className="single-product-gallery">
          <div className="single-product-thumbs">
            <button type="button" className="single-product-thumb">
              <img src="/public/Group 94.svg" alt="Thumbnail 1" />
            </button>
            <button type="button" className="single-product-thumb">
              <img src="/public/Mask group (1).svg" alt="Thumbnail 2" />
            </button>
            <button type="button" className="single-product-thumb">
              <img src="/public/Mask group (3).svg" alt="Thumbnail 3" />
            </button>
            <button type="button" className="single-product-thumb">
              <img src="/public/Asgaard sofa 3.svg" alt="Thumbnail 4" />
            </button>
          </div>

          <div className="single-product-main-image">
            <img src="/public/Asgaard sofa 3.svg" alt="Asgaard sofa" />
          </div>
        </div>

        <div className="single-product-info">
          <h1>Asgaard sofa</h1>
          <p className="single-product-price">Rs. 250,000.00</p>

          <div className="single-product-rating">
            <span className="single-product-stars">*****</span>
            <span className="single-product-review">5 Customer Review</span>
          </div>

          <p className="single-product-desc">
            Setting the bar as one of the loudest speakers in its class, the kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound.
          </p>

          <div className="single-product-size">
            <p>Size</p>
            <div className="single-product-size-buttons">
              <button type="button" className="active">L</button>
              <button type="button">XL</button>
              <button type="button">XS</button>
            </div>
          </div>

          <div className="single-product-color">
            <p>Color</p>
            <div className="single-product-color-dots">
              <button type="button" className="dot dot-purple" aria-label="Purple" />
              <button type="button" className="dot dot-black" aria-label="Black" />
              <button type="button" className="dot dot-gold" aria-label="Gold" />
            </div>
          </div>

          <div className="single-product-actions">
            <div className="single-product-qty">
              <button type="button">-</button>
              <span>1</span>
              <button type="button">+</button>
            </div>
            <button
              type="button"
              className="single-product-add"
              onClick={() => setIsMiniCartOpen(true)}
            >
              Add To Cart
            </button>
            <button type="button" className="single-product-compare">+ Compare</button>
          </div>

          <div className="single-product-meta">
            <p><span>SKU</span><span>: SS001</span></p>
            <p><span>Category</span><span>: Sofas</span></p>
            <p><span>Tags</span><span>: Sofa, Chair, Home, Shop</span></p>
            <p className="single-product-share">
              <span>Share</span>
              <span>: </span>
              <a href="#">f</a>
              <a href="#">in</a>
              <a href="#">t</a>
            </p>
          </div>
        </div>
      </div>

      <section className="single-product-description">
        <div className="single-product-tabs">
          <button type="button" className="active">Description</button>
          <button type="button">Additional Information</button>
          <button type="button">Reviews [5]</button>
        </div>

        <div className="single-product-description-text">
          <p>
            Embodying the raw, wayward spirit of rock n roll, the kilburn portable active stereo
            speaker takes the unmistakable look and sound of marshall, unplugs the chords, and
            takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the kilburn is a lightweight piece of vintage styled
            engineering. Setting the bar as one of the loudest speakers in its class, the kilburn
            is a compact, stout-hearted hero with a well-balanced audio which boasts a clear
            midrange and extended highs for a sound that is both articulate and pronounced.
          </p>
        </div>

        <div className="single-product-description-images">
          <div className="description-image-box">
            <img src="/public/Rectangle 37.png" alt="Sofa description 1" />
          </div>
          <div className="description-image-box">
            <img src="/public/Rectangle 38.svg" alt="Sofa description 2" />
          </div>
        </div>
      </section>

      <section className="single-product-related">
        <h2>Related Products</h2>
        <div className="related-grid">
          {relatedProducts.map((product) => (
            <article className="related-card" key={product.name}>
              <div className="related-card__media">
                {product.badge && (
                  <span className={`related-card__badge related-card__badge--${product.badgeType}`}>
                    {product.badge}
                  </span>
                )}
                <img src={product.image} alt={product.name} />
              </div>
              <div className="related-card__content">
                <h3>{product.name}</h3>
                <p className="related-card__model">{product.model}</p>
                <div className="related-card__prices">
                  <p className="related-card__price">{product.price}</p>
                  {product.oldPrice && <p className="related-card__old">{product.oldPrice}</p>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <button type="button" className="related-show-more">Show More</button>
      </section>

      {isMiniCartOpen && (
        <div className="mini-cart-overlay" onClick={() => setIsMiniCartOpen(false)}>
          <aside className="mini-cart" onClick={(event) => event.stopPropagation()}>
            <div className="mini-cart__header">
              <h3>Shopping Cart</h3>
              <button type="button" onClick={() => setIsMiniCartOpen(false)}>x</button>
            </div>

            <div className="mini-cart__items">
              <article className="mini-cart__item">
                <img src="/public/Asgaard sofa 3.svg" alt="Asgaard sofa" />
                <div className="mini-cart__item-info">
                  <h4>Asgaard sofa</h4>
                  <p>1 x <span>Rs. 250,000.00</span></p>
                </div>
                <button type="button" className="mini-cart__remove">x</button>
              </article>

              <article className="mini-cart__item">
                <img src="/public/Rectangle 25.png" alt="Casaliving Wood" />
                <div className="mini-cart__item-info">
                  <h4>Casaliving Wood</h4>
                  <p>1 x <span>Rs. 270,000.00</span></p>
                </div>
                <button type="button" className="mini-cart__remove">x</button>
              </article>
            </div>

            <div className="mini-cart__subtotal">
              <p>Subtotal</p>
              <span>Rs. 520,000.00</span>
            </div>

            <div className="mini-cart__actions">
              <Link to="/cart" onClick={() => setIsMiniCartOpen(false)}>Cart</Link>
              <button type="button">Checkout</button>
              <button type="button">Comparison</button>
            </div>
          </aside>
        </div>
      )}
    </section>
  )
}
