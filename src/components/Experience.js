import skills from "../data/skills.json";
import history from "../data/history.json";
import './Experience.css';
import htmlImg from "../assets/img/html.png";
import cssImg from "../assets/img/css.png";
import nodeImg from "../assets/img/node.png";
import reactImg from "../assets/img/react.png";
import figmaImg from "../assets/img/figma.png";
import javaImg from "../assets/img/java.png";
import pythonImg from "../assets/img/python.png";
import verilogImg from "../assets/img/verilog.png";

const skillImages = {
  "skills/html.png": htmlImg,
  "skills/css.png": cssImg,
  "skills/node.png": nodeImg,
  "skills/react.png": reactImg,
  "skills/figma.png": figmaImg,
  "skills/python.png": pythonImg,
  "skills/java.png": javaImg,
  "skills/verilog.png": verilogImg,
};

export const Experience = () => {
    return (
        <section className="container" id="experience">
        <h2 className="title">Experience</h2>
        <div className="content">
            <div className="skills">{
                skills.map((skill, id) => {
                    return <div key={id} className="skill">
                        <div className="skillImageContainer">
                            <img src={skillImages[skill.imageSrc]} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })
                }</div>
            <ul className="history">
                {
                    history.map((historyItem, id) => {
                        return <li key={id} className="historyItem">
                            <div className="historyItemDetails">
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>{historyItem.experiences.map((experience, id) => {
                                    return <li key={id}>{experience}</li>
                                })}
                                </ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
)}