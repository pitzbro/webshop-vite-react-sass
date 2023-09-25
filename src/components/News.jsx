export default function Header() {

  return (

    <section className="news-container">
      <h2 className="news-category">News</h2>
      <div className="news">
        <h3 className="news-title">Lorem ipsum dolor sit amet</h3>
        <p className="news-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
        <button className="btn">Read more</button>
        <div className="pager news-pager">
          <ul className="clean-list flex">
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>

      <img src="/images/news915.jpg" alt="" className="news-image" />

      <div className="teaser teaser-start">
        <img
          src="/images/pracht_light.png"
          alt=""
          className="news-item-image"
        />
        <span className="item-name">Brand: <mark>Pracht </mark> | Model: Mirona</span>
      </div>
    </section>

  )
}
