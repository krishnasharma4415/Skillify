import React from "react";
import UserCard from './UserCard';

const users = [
    {
        id: 1,
        profilePicture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John Doe",
        skills: ["JavaScript", "React", "Node.js", "TypeScript"],
    },
    {
        id: 2,
        profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ", 
        name: "Jane Smith",
        skills: ["Python", "Django",  "Data Science"],
    },
    {
        id: 3,
        profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        name: "Michael Chen",
        skills: ["C#", ".NET", "Cloud Computing", "Azure", "AWS"],
    },
    {
        id: 4,
        profilePicture: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww", 
        name: "Alice Garcia",
        skills: [ "Spring Boot", "Database Management", "NoSQL"],
    },
    {
        id: 5,
        profilePicture: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww", 
        name: "David Kim",
        skills: ["C++", "Game Development", "Unity", "Unreal Engine"],
    },
    {
        id: 6,
        profilePicture: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Emily Williams",
        skills: ["PHP", "Laravel", "Web Development", "UI/UX Design"],
    },
    {
        id: 7,
        profilePicture: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Ryan Thompson",
        skills: ["Java", "Spring Security", "API Development", "Microservices"],
    },
    {
        id: 8,
        profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Sarah Miller",
        skills: ["Python", "Flask", "Data Analysis", "Machine Learning Models"],
    },
    {
        id: 9,
        profilePicture: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Christopher Lee",
        skills: ["C#", ".NET Core", "ASP.NET MVC", "Web API"],
    },
    {
        id: 10,
        profilePicture: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Amanda Garcia",
        skills: ["JavaScript", "React Native", "Mobile Development", "Flutter"],
    },
    {
        id: 11,
        profilePicture: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "William Brown",
        skills: ["Go", "Golang", "Cloud Functions", "Serverless Architecture"],
    },
    {
        id: 12,
        profilePicture: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Olivia Jones",
        skills: ["Ruby", "Rails", "Web Development", "Full-Stack Development"],
    },
    {
        id: 13,
        profilePicture: "https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Benjamin Walker",
        skills: ["Swift", "iOS Development", "Mobile App Development", "UIKit"],
    },
    {
        id: 14,
        profilePicture: "https://images.unsplash.com/photo-1439778615639-28529f7628bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Charlotte Davis",
        skills: ["Kotlin", "Android Development", "Mobile App Development", "Jetpack"],
    },
    {
        id: 15,
        profilePicture: "https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Alexander Hernandez",
        skills: ["C", "C++", "Real-Time Systems", "Microcontrollers"],
    },
    {
        id: 16,
        profilePicture: "https://images.unsplash.com/photo-1518799175676-a0fed7996acb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Elizabeth Johnson",
        skills: ["SQL", "Database Management", "PostgreSQL", "MongoDB"],
    },
    {
        id: 17,
        profilePicture: "https://images.unsplash.com/photo-1484688493527-670f98f9b195?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Daniel Garcia",
        skills: ["DevOps", "CI/CD", "Infrastructure Automation",  "GCP"],
    },
    {
        id: 18,
        profilePicture: "https://images.unsplash.com/photo-1617315072157-5f1d3f55ddd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Sophia Miller",
        skills: ["UI/UX Design", "User Interface Design", "Figma", "Adobe XD"],
    },
    {
        id: 19,
        profilePicture: "https://images.unsplash.com/photo-1621353269062-6aa0165576f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Matthew Moore",
        skills: ["Blockchain", "Solidity", "Cryptocurrency", "Web3 Development"],
    },
    {
        id: 20,
        profilePicture: "https://images.unsplash.com/photo-1522262590532-a991489a0253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", 
        name: "Ashley Hernandez",
        skills: ["Testing", "QA Automation", "End-to-End Testing"],
    },
    {
        id: 21,
        profilePicture: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        name: "Atikh Bana",
        skills: ["DevOps", "CI/CD", "Infrastructure Automation", "AWS Cloud"],
    },
];

const UserList = () => {
    const [users, setUsers] = useState([]);
    return (
        <div className="user-list">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
export const userListProps = users;