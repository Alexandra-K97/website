"use client";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const skillsData = [
  { name: "HTML/CSS", level: 60, color: "#ff0000" },
  { name: "JavaScript", level: 30, color: "#0011ff" },
  { name: "React", level: 25, color: "#ff8c00" },
  { name: "TypeScript", level: 25, color: "#0bf207" },
  { name: "Next.js", level: 10, color: "#e7f207" },
  { name: "WordPress", level: 40, color: "#00e6ff" },
  { name: "PHP", level: 20, color: "#8a005c" },
];
const ProgressBar: React.FC = () => {
  return (
    <div className="  ">
      <div className="flex flex-col gap-10  ">
        {skillsData.map((skill, index) => (
          <div key={index} className=" ">
            <span className="text-slate-950 text-sm w-20">{skill.name}</span>

            <div className="w-12 h-12">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                strokeWidth={15}
                styles={buildStyles({
                  pathColor: skill.color,
                  textColor: "#000000",
                  trailColor: "#ababab",
                  textSize: "25px",
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
