import React from 'react';

const UserCard = ({ user }) => {
  return (
    <>
      <div className="user-card dark:bg-gray-900 border border-gray-400  text-white rounded-lg shadow-md hover:shadow-lg transition ease-in-out duration-150 flex items-center p-4 gap-4">
        <div className="flex flex-col items-start w-1/2">
          <img
            src={user.profilePicture}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover mb-2"
          />
          <h3 className="text-xl font-medium">{user.name}</h3>
        </div>
        <div className="flex-grow skills ml-auto">
          <ul className="flex flex-wrap gap-2">
            {user.skills.map((skill) => (
              <li key={skill}>
                <button className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-indigo-700   transition ease-in-out duration-150">{skill}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
};

export default UserCard;