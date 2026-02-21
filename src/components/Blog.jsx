import { Link } from 'react-router'
import './blog.css'

export default function Blog() {
  const recentPosts = [
    { title: 'Going all-in with millennial design', date: '03 Aug 2022', image: '/public/Rectangle 69.png' },
    { title: 'Exploring new ways of decorating', date: '03 Aug 2022', image: '/public/Rectangle 69 (1).svg' },
    { title: 'Handmade pieces that took time to make', date: '03 Aug 2022', image: '/public/Rectangle 69 (2).svg' },
    { title: 'Modern home in Milan', date: '03 Aug 2022', image: '/public/Rectangle 69 (3).svg' },
    { title: 'Colorful office redesign', date: '03 Aug 2022', image: '/public/Rectangle 69.svg' }
  ]

  return (
    <section className="blog-page">
      <div className="blog-hero">
        <div className="blog-hero__overlay">
          <img src="/public/Frame 168.svg" alt="Funiro logo" className="blog-hero__logo" />
          <h1>Blog</h1>
          <div className="blog-hero__crumb">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      <section className="blog-content">
        <div className="blog-content__main">
          <article className="blog-post">
            <img src="/public/Rectangle 68.png" alt="Blog post" className="blog-post__image" />
            <div className="blog-post__meta">
              <span>Admin</span>
              <span>14 Oct 2022</span>
              <span>Wood</span>
            </div>
            <h2>Going all-in with millennial design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
              aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
              turpis in cursus mattis molestie a iaculis at erat.
            </p>
            <button type="button" className="blog-post__more">Read more</button>
          </article>

          <article className="blog-post blog-post--text">
            <h2>Exploring new ways of decorating</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
              aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
              turpis in cursus mattis molestie a iaculis at erat.
            </p>
            <button type="button" className="blog-post__more">Read more</button>
          </article>

          <article className="blog-post">
            <img src="/public/Rectangle 68 (1).png" alt="Blog post" className="blog-post__image" />
            <div className="blog-post__meta">
              <span>Admin</span>
              <span>14 Oct 2022</span>
              <span>Wood</span>
            </div>
            <h2>Handmade pieces that took time to make</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
              aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
              turpis in cursus mattis molestie a iaculis at erat.
            </p>
            <button type="button" className="blog-post__more">Read more</button>
          </article>
        </div>

        <aside className="blog-sidebar">
          <div className="blog-search">
            <input type="text" placeholder="" />
            <span>Q</span>
          </div>

          <div className="blog-categories">
            <h3>Categories</h3>
            <div className="blog-categories__list">
              <p><span>Crafts</span><span>2</span></p>
              <p><span>Design</span><span>8</span></p>
              <p><span>Handmade</span><span>7</span></p>
              <p><span>Interior</span><span>1</span></p>
              <p><span>Wood</span><span>6</span></p>
            </div>
          </div>

          <div className="blog-recent">
            <h3>Recent Posts</h3>
            <div className="blog-recent__list">
              {recentPosts.map((post) => (
                <article className="blog-recent__item" key={post.title}>
                  <img src={post.image} alt={post.title} />
                  <div>
                    <h4>{post.title}</h4>
                    <p>{post.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </section>
  )
}
