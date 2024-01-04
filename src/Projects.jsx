export function Projects() {
  const projectsData = [
    {
      title: "2D Game Engine",
      img1: "assets/2d_game_pic.png",
      img2: "assets/2d_game_github_pic.png",
      link: "https://github.com/Lhafer/2D-Game",
      useIframe: false,
      iframeSrc: "",
    },
    {
      title: "2D Game Engine",
      img1: "assets/2d_game_pic.png",
      img2: "assets/2d_game_github_pic.png",
      link: "https://github.com/Lhafer/2D-Game",
      useIframe: false,
      iframeSrc: "",
    },
    {
      title: "This Portfolio Page",
      img1: "assets/portfolio_pic.png",
      img2: "assets/portfolio_github_pic.png",
      link: "https://github.com/Lhafer/lhafer.github.io/",
      useIframe: true,
      iframeSrc: "https://lhafer.github.io/",
    },
    // Add more project data as needed
  ];
  return (
    <>
      <h1 id="projectsHead">Projects</h1>
      <div
        className="projects"
        style={{ height: `${projectsData.length * 60}vh` }}
      >
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            img1={project.img1}
            img2={project.img2}
            link={project.link}
            useIframe={project.useIframe}
            iframeSrc={project.iframeSrc}
            alignLeft={index % 2 === 0}
          />
        ))}
      </div>
    </>
  );
}

function Project({ title, img1, img2, link, useIframe, iframeSrc, alignLeft }) {
  const wrapperClassName = `projectWrapper ${
    alignLeft ? "align-left" : "align-right"
  }`;
  return (
    <div className="projCompWrap">
      <a className="projLink" href={link}>
        <div className={wrapperClassName}>
          <h1 className="projectTitle">{title}</h1>
          <div className="circleCont">
            <div className="circle">
              {useIframe ? (
                <>
                  <iframe
                    title={title}
                    id="portIframe"
                    src={iframeSrc}
                  ></iframe>
                  <img
                    className="circleImg2"
                    src={img2}
                    alt={`${title} Image 2`}
                  />
                </>
              ) : (
                <>
                  <img
                    className="circleImg"
                    src={img1}
                    alt={`${title} Image 1`}
                  />
                  <img
                    className="circleImg2"
                    src={img2}
                    alt={`${title} Image 2`}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
