const Skill = ({ iconClass, refSkill }) => {
  return (
    <li ref={refSkill}>
      <i className={iconClass}></i>
    </li>
  );
};

export default Skill;
