export function Banner({ updateLearning }) {
  function scrollBanner() {
    const banner = document.getElementById("about");
    const underBanner = document.getElementById("underBanner");
    // Add the 'moved' class to trigger the animation
    banner.classList.remove("unmove");
    banner.classList.add("moved");
    underBanner.classList.add("show");
    document.body.classList.add("scrolled");
    updateLearning();
  }

  function unmove() {
    const banner = document.getElementById("about");
    // Add the 'moved' class to trigger the animation
    banner.classList.remove("moved");
    banner.classList.add("unmove");
    document.body.classList.remove("scrolled");
    updateLearning();
  }

  return (
    <>
      <div className="underBanner" id="underBanner">
        <button className="showLess" onClick={() => unmove()}>
          Show Less
        </button>
        <table id="techStack">
          <caption>Tech Stack</caption>
          <tr>
            <th>Front End</th>
            <th>Back End</th>
            <th>Additional Skills</th>
          </tr>
          <tr>
            <td>HTML</td>
            <td></td>
            <td>Java</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td></td>
            <td>Python</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td></td>
            <td>API'S</td>
          </tr>
          <tr>
            <td>React.js</td>
            <td></td>
            <td>WebScraping</td>
          </tr>
          <tr> </tr>
        </table>
      </div>
      <div className="banner" id="about">
        <div className="text">Hi, I'm Logan Shafer.</div>
        <div className="text" id="textU">
          I'd like to help you develop your website.
        </div>
        <button onClick={() => scrollBanner()} id="learnMore">
          Learn More
        </button>
      </div>
    </>
  );
}
