import React from 'react'
import { useState } from 'react';

const EducationThumbnail = ({ title, content, handleEditClick }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(content || '');

    const handleEdit = () => {
        setIsEditing(!isEditing);
        setEditContent(content);
    };

    const handleSave = () => {
        setIsEditing(false);
        handleEditClick(editContent);
    };

    return (
        <div
            className={`thumbnail bg-gray-100 p-4 h-2/4 w-80 rounded shadow-md border border-gray-200`}
        >
            <h3 className="text-lg font-medium text-gray-700">{title}</h3>
            {isEditing ? (
                <textarea
                    className="w-full h-24 border border-gray-200 rounded px-2 py-1 text-gray-600"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                />
            ) : (
                <ul className="list-disc pl-4 text-gray-600">
                    {content.split('\n').map((item, index) => (
                        <li key={index} className="mb-2">
                            {item.trim()}
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex justify-end mt-2">
                {!isEditing && (
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                )}
                {isEditing && (
                    <>
                        <button className="text-green-500 hover:underline mr-2" onClick={handleSave}>
                            Save
                        </button>
                        <button className="text-red-500 hover:underline" onClick={handleEdit}>
                            Cancel
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default EducationThumbnail
