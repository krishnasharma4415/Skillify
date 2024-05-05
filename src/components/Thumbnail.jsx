import React from "react";

const Thumbnail = ({ title, content, skills, editingThumbnail, handleEditClick, skillsList}) => {
    const isEditing = editingThumbnail === title;
    const filteredSkills = skillsList?.filter((skill) => !skills.includes(skill));

    return (
        <div
            className={`thumbnail bg-gray-100 p-4 h-2/4 w-80 rounded shadow-md ${isEditing ? 'border border-blue-500' : ''
                }`}
            onClick={(event) => {
                handleEditClick(title);
                event.stopPropagation();
            }}
        >
            <div className="flex">
                <h3>{title}</h3>
                <button className="">
                    <select
                        className="w-32"
                        onChange={(event) => handleAddSkill(event.target.value, title)}
                    >
                        <option value="">-- Add Skill --</option>
                        {skillsList
                            .filter((skill) => !skills.includes(skill))
                            .map((skill) => (
                                <option key={skill} value={skill}>
                                    {skill}
                                </option>
                            ))}
                    </select>
                </button>
            </div>

            {isEditing ? (
                <div className="flex flex-wrap h-80 overflow-y-auto">
                    {skills.map((skill) => (
                        <button key={skill} className="skill-chip flex items-center mr-2 mb-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                            {skill}
                            <button className="ml-2 w-4 fill-current text-red-500"
                                onClick={() => handleRemoveSkill(skill, title)}>
                                x
                            </button>
                        </button>
                    ))}
                </div>
            ) : (
                <p>{'No skills selected'}</p>
            )}
        </div>
    );
};


export default Thumbnail;
