import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectByName } from "../../services/dataService";

export default function SingleProject() {
  const { name } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await getProjectByName(name);
        setProject(projectData);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };
    fetchProject();
  }, [name]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <section id="about" className="about">
      <div className="section-heading text-center">
        <h2>{project.name}</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>
                {project.title}
                </h3>
                <p>
               {project.description}
                </p>
                <div className="row" style={{ justifyContent: 'space-between', display: 'flex' }}>
                  <div className="col-sm-4" >
                    <div className="single-about-add-info">
                      <h3>name</h3>
                      <p>{project.name}</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>Github Repository</h3>
                      <p>{project.repo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
                <Link to={`${project.link}`}>
              <div className="single-about-img">
                <img
                  src={`/${project.imageUrl}`}
                  alt="profile_image"
                  style={{
                    width: "100%", 
                    maxWidth: "1760px", 
                    height: "auto", 
                    borderRadius: "10px", 
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
                  }}
                />
              </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  );
}
