export default function Header() {
  return (
    <section className="sidebar full" aria-labelledby="sidebar-title">
      <button className="btn btn-close-sidebar" onClick={toggleSidebar}>x</button>
      <h3 id="sidebar-title">Architectural and decorative lighting</h3>
      <div className="sidebar-tag tag-text">Design</div>
      <img
        src="/images/shutterstock_1154928898.jpg"
        alt=""
        className="sidebar-image"
      />
      <p className="sidebar-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque sint
        architecto omnis rerum. Fugiat, quaerat nisi quia reprehenderit architecto
        ullam eum ratione aliquid harum ea exercitationem necessitatibus
        blanditiis doloremque.
      </p>
    </section>
  )
}

function toggleSidebar() {
  console.log('helllo')
  document.body.classList.toggle("sidebar-open");
}
