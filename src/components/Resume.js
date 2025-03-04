import ActiveSection from "../activeSection";
const Resume = ({ children, animationIn, animationOut }) => {
  return (
    <div
      className={ActiveSection("skills", animationIn, animationOut)}
      id="skills"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Resume;
