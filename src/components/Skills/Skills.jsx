import React, { useState, useEffect } from "react";
import { getTechnicalSkills, getSoftSkills } from "../../services/dataService";

export default function Skills() {
  const [technicalSkills, setTechnicalSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [techProgress, setTechProgress] = useState([]);
  const [softProgress, setSoftProgress] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const techData = await getTechnicalSkills();
        const softData = await getSoftSkills();

        const sortedTechSkills = Object.entries(techData)
          .map(([name, value]) => ({ name, value: Number(value) }))
          .sort((a, b) => b.value - a.value);

        const sortedSoftSkills = Object.entries(softData)
          .map(([name, value]) => ({ name, value: Number(value) }))
          .sort((a, b) => b.value - a.value);

        setTechnicalSkills(sortedTechSkills);
        setSoftSkills(sortedSoftSkills);

        sortedTechSkills.forEach((skill, index) => {
          setTimeout(() => {
            setTechProgress((prev) => {
              const newProgress = [...prev];
              newProgress[index] = skill.value;
              return newProgress;
            });
          }, index * 300);
        });

        sortedSoftSkills.forEach((skill, index) => {
          setTimeout(() => {
            setSoftProgress((prev) => {
              const newProgress = [...prev];
              newProgress[index] = skill.value;
              return newProgress;
            });
          }, index * 300);
        });
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchData();
  }, []);

  const renderSkillBars = (skills, progress) =>
    skills.map((skill, index) => (
      <div key={skill.name} className="single-skill-content">
        <div className="barWrapper">
          <span className="progressText">{skill.name}</span>
          <div className="single-progress-txt">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${progress[index]}%`,
                  transition: "width 1s ease-in-out",
                }}
                aria-valuenow={progress[index]}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <h3>{progress[index]}%</h3>
          </div>
        </div>
      </div>
    ));

  return (
    <section id="skills" className="skills">
      <div className="section-heading text-center">
        <h2>Skills</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Technical Skills</h2>
            {renderSkillBars(technicalSkills, techProgress)}
          </div>
          <div className="col-md-6">
            <h2>Soft Skills</h2>
            {renderSkillBars(softSkills, softProgress)}
          </div>
        </div>
      </div>
    </section>
  );
}
