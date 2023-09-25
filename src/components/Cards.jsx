export default function Header() {
  return (
  <section className="cards-container">
    <div className="card" onClick={toggleSidebar}>
      <div className="card-tag tag-text">Design</div>
      <img
        src="/images/shutterstock_1154928898.jpg"
        alt=""
        className="card-image"
      />
      <div className="card-desc">Architectural and decorative lighting</div>
    </div>

    <div className="card">
      <div className="card-tag tag-text">Technic</div>
      <img src="/images/Image_1.jpg" alt="" className="card-image" />
      <div className="card-desc">Technical and industrial lighting</div>
    </div>

    <div className="card">
      <div className="card-tag tag-text">Safety & control</div>
      <img src="/images/safety_light.jpg" alt="" className="card-image" />
      <div className="card-desc">Safety lighting and control</div>
    </div>

    <div className="teaser teaser-center">
      <img
        src="/images/forscani_light_02.png"
        alt=""
        className="news-item-image"
      />
      <span className="item-name">Brand: <mark>Foscarini </mark> | Model: Twiggy</span
      >
    </div>
  </section >
)
}

function toggleSidebar() {
  console.log('helllo')
  document.body.classList.toggle("sidebar-open");
}
