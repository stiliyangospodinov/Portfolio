import { useEffect, useState } from "react";
import { getAllProjects } from "../../services/dataService";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getAllProjects();
        setProjects(projectData); // Store projects in state
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-details">
        <div className="section-heading text-center">
          <h2>Projects</h2>
        </div>
        <div className="container">
          <div className="portfolio-content">
            <div className="isotope">
              <div className="row" style={{ justifyContent: 'center', display: 'flex' }}>
                {projects.map((project, index) => (
                  <div className="col-sm-4" key={index}>
                    <div className="item">
                      <img src={project.imageUrl} alt="portfolio image" />
                      <div className="isotope-overlay">
                      <Link to={`/projects/${project.name}`}>{project.title}</Link> {/* Link to project detail page */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
