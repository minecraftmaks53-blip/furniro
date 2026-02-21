import { Link } from 'react-router'
import './home.css'

export default function Home() {
  const products = [
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
    },
    {
      name: 'Grifo',
      model: 'Night lamp',
      price: 'Rp 1.500.000',
      image: '/public/Images (3).png'
    },
    {
      name: 'Muggo',
      model: 'Small mug',
      price: 'Rp 150.000',
      image: '/public/Images (3).png',
      badge: 'New',
      badgeType: 'new'
    },
    {
      name: 'Pingky',
      model: 'Cute bed set',
      price: 'Rp 7.000.000',
      oldPrice: 'Rp 14.000.000',
      image: '/public/Images (4).png',
      badge: '-50%',
      badgeType: 'discount'
    },
    {
      name: 'Potty',
      model: 'Minimalist flower pot',
      price: 'Rp 500.000',
      image: '/public/Images (5).png',
      badge: 'New',
      badgeType: 'new'
    }
  ]

  return (
    
    <div>

    <section className="home">
      <div className="home__card">
        <p className="home__tag">New Arrival</p>
        <h1 className="home__title">Discover Our New Collection</h1>
        <p className="home__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </p>
        <button type="button" className="home__btn">
          BUY NOW
        </button>
      </div>
    </section>


      <div className="limon">

      <h1>Browse The Range</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      </div>

      <div className="mazgi">


      <div className="img">

        <img src="/public/Mask Group.png" alt="" />

        <img src="/public/Image-living room.png" alt="" />

        <img src="/public/Mask Group (1).png" alt="" />

      </div>

      <div className="yozude">

      <h1>Dining</h1>

      <h1>Living</h1>

      <h1>Bedroom</h1>

      </div>


      </div>



      <section className="ikki">

      <h1 className='komo'>Our Oroducts</h1>


      <div className="card-parent">
      {products.map((product) => (
        <div className="card" key={product.name}>
          <div className="card__media">
            {product.badge && (
              <span className={`card__badge card__badge--${product.badgeType}`}>
                {product.badge}
              </span>
            )}

            <div className="card__overlay">
              <Link to="/single-product" className="card__button">Add to cart</Link>
              <div className="card__actions">
                <span>Share</span>
                <span>Compare</span>
                <span>Like</span>
              </div>
            </div>

            <img src={product.image} alt={product.name} className="card__img" />
          </div>

          <div className="card__content">
            <h1 className='name'>{product.name}</h1>
            <p className='model'>{product.model}</p>
            <div className="card__prices">
              <p className='price'>{product.price}</p>
              {product.oldPrice && <p className="old-price">{product.oldPrice}</p>}
            </div>
          </div>
        </div>
      ))}
      </div>

      <div className="show-more-wrap">
        <Link to="/shop" className="show-more-btn">Show More</Link>
      </div>

      </section>

      <section className="rooms">
        <div className="rooms__content">
          <h2 className="rooms__title">50+ Beautiful rooms inspiration</h2>
          <p className="rooms__desc">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <Link to="/shop" className="rooms__btn">Explore More</Link>
        </div>

        <div className="rooms__gallery">
          <article className="rooms__card rooms__card--main">
            <img src="/public/Mask Group.png" alt="Bedroom inspiration" />
            <div className="rooms__caption">
              <p>01 - Bed Room</p>
              <h3>Inner Peace</h3>
            </div>
          </article>

          <article className="rooms__card rooms__card--side">
            <img src="/public/Image-living room.png" alt="Dining room inspiration" />
          </article>

          <div className="rooms__slider-ui">
            <span className="rooms__dot rooms__dot--active" />
            <span className="rooms__dot" />
            <span className="rooms__dot" />
            <span className="rooms__dot" />
          </div>
        </div>
      </section>

      <section className="setup">
        <p className="setup__sub">Share your setup with</p>
        <h2 className="setup__title">#FuniroFurniture</h2>

        <div className="setup__grid">
          <img src="/public/Mask Group (1).png" alt="Furniture 1" className="setup__item setup__item--a" />
          <img src="/public/Images.svg" alt="Furniture 2" className="setup__item setup__item--b" />
          <img src="/public/Image-living room.png" alt="Furniture 3" className="setup__item setup__item--c" />
          <img src="/public/Images (1).png" alt="Furniture 4" className="setup__item setup__item--d" />
          <img src="/public/Mask Group.png" alt="Furniture 5" className="setup__item setup__item--e" />
          <img src="/public/Images (2).png" alt="Furniture 6" className="setup__item setup__item--f" />
          <img src="/public/Images (3).png" alt="Furniture 7" className="setup__item setup__item--g" />
          <img src="/public/Images (4).png" alt="Furniture 8" className="setup__item setup__item--h" />
          <img src="/public/Images (5).png" alt="Furniture 9" className="setup__item setup__item--i" />
        </div>
      </section>

    </div>

    
  )
}

