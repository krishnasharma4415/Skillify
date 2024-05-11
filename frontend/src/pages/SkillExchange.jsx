import React from 'react';
import { useState, useEffect } from 'react';
import Footer from "../components/Footer";

const SkillExchangePage = () => {

    const [skills, setSkills] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSkills, setFilteredSkills] = useState(skills);
    const [sortBy, setSortBy] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const [skillDescriptions, setSkillDescriptions] = useState({});

    const handleViewDetailsClick = (skill) => {
        setSkillDescriptions({ ...skillDescriptions, [skill.id]: skill.description });
    };

    useEffect(() => {
        fetch('http://localhost:5000/api/skills')
            .then(response => response.json())
            .then(data => {
                setSkills(data);
                setFilteredSkills(data);
            })
            .catch(error => console.error('Error fetching skills:', error));
    }, []);
    
    useEffect(() => {
        const filtered = skills.filter(skill => skill.name.toLowerCase().includes(searchQuery));
        setFilteredSkills(filtered);
    }, [searchQuery, skills]);    

    useEffect(() => {
        const sortSkills = () => {
            return [...filteredSkills].sort((a, b) => {
                switch (sortBy) {
                    case 'popularity':
                        return b.users - a.users;
                    case 'rating':
                        return b.rating - a.rating;
                    case 'name':
                        return a.name.localeCompare(b.name);
                    default:
                        return 0;
                }
            });
        };
        const sortedSkills = sortSkills();
        setFilteredSkills(sortedSkills);
    }, [sortBy, filteredSkills]);

    useEffect(() => {
        setFilteredSkills(skills.filter((skill) => skill.name.toLowerCase().includes(searchQuery)));
    }, [searchQuery, skills]);


    return (
        <div className="bg-gradient-to-br from-gray-900 to-[#070A0E] min-h-screen pt-6 px-8">
            <header className="flex justify-between items-center py-4 px-6">
                <div className="flex items-center">
                    <img src="./logo.png" alt="Skill Exchange Logo" className="w-8 h-8 mr-4" />
                    <h1 className="text-3xl font-bold text-white">Skill Exchange</h1>
                </div>
                <nav className="flex gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for skills"
                            className="w-full px-8 py-2 border rounded-lg focus:outline-none text-black"
                            onChange={handleSearchChange}
                        />
                        <button className="absolute right-0 top-0 mt-1 mr-3">
                            <i className="fas fa-times text-gray-400 hover:text-gray-300"></i>
                        </button>
                    </div>


                </nav>
            </header>

            <main className="container mx-auto px-4 py-8">
                <p class="text-center font-semibold text-gray-200 font-xl">Unleash a learning revolution. Exchange skills, empower each other</p>
                <div className="flex justify-end mb-4">
                    <div className="flex ">
                        <select className="border rounded-lg px-4 py-2 text-gray-700" onChange={handleSortChange}>
                            <option value="">Sort by...</option>
                            <option value="popularity">Popularity</option>
                            <option value="rating">Rating</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredSkills.map((skill) => (
                        <button 
                            key={skill.id} 
                            class="skill-card bg-gray-800 hover:bg-gray-700 shadow-md rounded-lg p-4 transition duration-700 ease-in-out">
                            <div className="flex items-center mb-2">
                                <i className="text-2xl text-blue-600 hover:text-blue-500 fas fa-${skill.icon}"></i>
                                <h3 className="text-lg font-semibold ml-2 text-white ">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-white pl-2">{skill.users} Users</div>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-400 mr-2">Rating:</span>
                                    <div className="flex items-center">
                                        <span className="flex">
                                            {Array(skill.rating)
                                                .fill()
                                                .map((_, i) => (
                                                    <i key={i} className="fas fa-star text-yellow-500 mr-1"></i>
                                                ))}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-4 mr-2 ">
                                <button className="text-sm text-blue-700 hover:text-blue-500"
                                    onClick={(event) => {
                                        handleViewDetailsClick(skill);
                                        event.stopPropagation();
                                    }}>
                                    View Details
                                </button>
                                <div>
                                    <div>
                                        <div style={{ width: `${skill.progress}%` }}></div>
                                    </div>
                                </div>
                            </div>
                            {skillDescriptions && skillDescriptions[skill.id] && (
                                <div class="text-white bg-gray-700 rounded-lg p-4 shadow-md">
                                    <p>{skillDescriptions[skill.id]}</p>
                                    <button className="text-red-500 pt-2" onClick={() => setSkillDescriptions('')}>
                                        Close
                                    </button>
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default SkillExchangePage;