import Project from "../components/Project";

function Projects({ name }) {
  return (
    <div>
      <Project name={name} />
    </div>
  );
}

export default Projects;

export async function getServerSideProps(context) {
  const { name } = context.query;

  return {
    props: {
      name,
    },
  };
}
