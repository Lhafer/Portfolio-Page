export function TopBar({ learning }) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50 || learning) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });
  return (
    <>
      <div id="topBar">
        <div id="about_button" className="topLink">
          <a href="#about">About Me</a>
        </div>
        <div className="topLink">
          <a href="#projects">Projects</a>
        </div>
        <div className="topLink">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
}
