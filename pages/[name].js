import Project from "../components/Project";
import WebApp from "../components/WebApp";

function Projects({ name, webApp }) {
  return (
    <div>
      {webApp.message == "Not Found" ? (
        <Project name={name} />
      ) : (
        <WebApp webApp={webApp} />
      )}
    </div>
  );
}

export default Projects;

export async function getServerSideProps(context) {
  const { name } = context.query;
  const webApp = await fetch(
    `https://api.github.com/repos/Jubstaaa/${name}`
  ).then((response) => response.json());

  return {
    props: {
      name,
      webApp,
    },
  };
}
