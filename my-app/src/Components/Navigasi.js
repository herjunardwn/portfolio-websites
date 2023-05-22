import "../css/Navigasi.css";

const Navbars = () => {
  const isScrolling = () => {
    const headerEl = document.querySelector(".primary-header");
    let windowPosition = window.scrollY > 50;
    headerEl.classList.toggle("active", windowPosition);
  };
  window.addEventListener("scroll", isScrolling);

  return (
    <>
      <header className="primary-header px-4">
        <nav className="navbar container navbar-expand d-flex justify-content-between align-items-center">
          <a href="https://herjunardwn.my.id" className="navbar-brand logo">
            IWNRDWN
          </a>

          <div className="nav-sosmed d-flex gap-3 mx-auto d-none d-lg-flex">
            <a href="https://github.com/herjunardwn/" target={"_blank"}>
              <i className="bi bi-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/iwn-rdwn/" target={"_blank"}>
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <a href="mailto:herjunahr@gmail.com" className="button rounded-2">
            <i className="bi bi-envelope-at-fill"></i> Send Mail
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbars;
