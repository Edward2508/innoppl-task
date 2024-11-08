import Sidebar from "../dashboard/sidebar/Sidebar";
import React, { useState } from "react";
import "./Skills.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkills,
  removeSkills,
  updateSkills,
} from "../../../utils/store/skillsSlice";
const Skills = () => {
  const dispatch = useDispatch();
  const skillsView = useSelector((store) => store.skills.skillsList);
  const [skillsInput, setSkillsInput] = useState("");
  const [editSkills, setEditSkills] = useState(null);
  const handleAddSkills = () => {
    if (editSkills !== null) {
      dispatch(updateSkills({ index: editSkills, skills: skillsInput }));
      setEditSkills(null);
    } else {
      dispatch(addSkills(skillsInput));
    }
    setSkillsInput("");
  };

  const handleEditSkill = (index) => {
    setEditSkills(index);
    setSkillsInput(skillsView[index]);
  };

  const handleDeleteSkill = (index) => {
    dispatch(removeSkills(index));
  };

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="container-fluid w-100 d-flex justify-content-center align-items-center skills-container">
          <div className="skills-box d-flex flex-column justify-content-center align-items-center">
            <input
              type="text"
              className="form-control w-75 mt-4"
              placeholder="Enter your skills"
              value={skillsInput}
              onChange={(e) => setSkillsInput(e.target.value)}
            ></input>
            <button
              className="btn btn-primary mt-3 w-25"
              type="submit"
              disabled={!skillsInput}
              onClick={handleAddSkills}
            >
              {editSkills !== null ? "Update" : "Add"}
            </button>
            {skillsView.length > 0 && (
              <div className="mt-3 task-list mb-4">
                <ul className="list-group">
                  {skillsView?.map((skill, index) => (
                    <li
                      key={index}
                      className="d-flex justify-content-between align-items-center ps-5 pe-5"
                    >
                      {`${index + 1}. ${skill}`}
                      <div>
                        <button
                          className="btn btn-warning me-2 m-3"
                          onClick={() => handleEditSkill(index)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger m-3"
                          onClick={() => handleDeleteSkill(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
