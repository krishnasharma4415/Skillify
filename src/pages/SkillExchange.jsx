import React from 'react';
import { useState, useEffect } from 'react';

const SkillExchangePage = () => {
    const [skills, setSkills] = useState([
        { id: 1, name: "JavaScript", icon: "js", users: 120, rating: 5, description: "JavaScript is a versatile programming language used for web development, mobile development, server-side scripting, and more." },
        { id: 2, name: "Python", icon: "python", users: 115, rating: 5, description: "Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used in web development, data analysis, artificial intelligence, and scientific computing." },
        { id: 3, name: "Java", icon: "java", users: 108, rating: 4, description: "Java is a popular object-oriented programming language known for its portability and scalability. It's commonly used for building enterprise-level applications, Android mobile apps, and web development." },
        { id: 4, name: "C++", icon: "cpp", users: 85, rating: 4, description: "C++ is a powerful and efficient programming language used for system/application software, game development, and high-performance computing." },
        { id: 5, name: "C#", icon: "csharp", users: 78, rating: 4, description: "C# is a versatile programming language developed by Microsoft. It's commonly used for building Windows applications, game development with Unity, and enterprise software." },
        { id: 6, name: "React", icon: "react", users: 130, rating: 5, description: "React is a JavaScript library for building user interfaces. It's maintained by Facebook and a community of individual developers and companies." },
        { id: 7, name: "Angular", icon: "angular", users: 112, rating: 4, description: "Angular is a TypeScript-based open-source web application framework developed by Google. It's used for building single-page web applications and large-scale enterprise applications." },
        { id: 8, name: "Vue.js", icon: "vuejs", users: 98, rating: 4, description: "Vue.js is a progressive JavaScript framework used for building interactive web interfaces. It's known for its simplicity, flexibility, and performance." },
        { id: 9, name: "Web Development", icon: "globe", users: 78, rating: 4, description: "Web development refers to building, creating, and maintaining websites and web applications. It involves various technologies such as HTML, CSS, and JavaScript." },
        { id: 10, name: "Mobile Development", icon: "mobile", users: 82, rating: 4, description: "Mobile development involves building applications for mobile devices such as smartphones and tablets. It includes both native app development and cross-platform app development." },
        { id: 11, name: "Data Science", icon: "chart-line", users: 92, rating: 5, description: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data." },
        { id: 12, name: "Cloud Computing", icon: "cloud", users: 70, rating: 4, description: "Cloud computing refers to the delivery of computing services including servers, storage, databases, networking, software, and analytics over the Internet (the cloud) to offer faster innovation, flexible resources, and economies of scale." },
        { id: 13, name: "UI/UX Design", icon: "palette", users: 55, rating: 3, description: "UI/UX design focuses on enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between the user and the product." },
        { id: 14, name: "Ethical Hacking", icon: "bug", users: 25, rating: 2, description: "Ethical hacking, also known as penetration testing or white-hat hacking, involves legally breaking into computers and devices to test an organization's defenses. It's performed by security professionals to identify vulnerabilities that could be exploited by malicious hackers." },
        { id: 15, name: "Cybersecurity", icon: "shield-alt", users: 72, rating: 4, description: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. It includes various technologies, processes, and practices designed to prevent unauthorized access, data breaches, and identity theft." },
        { id: 16, name: "DevOps", icon: "infinity", users: 58, rating: 3, description: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the software development lifecycle and provide continuous delivery with high software quality." },
        { id: 17, name: "Database Management", icon: "database", users: 76, rating: 4, description: "Database management involves designing, implementing, and maintaining database systems to store and manage data effectively. It includes tasks such as data modeling, query optimization, and database security." },
        { id: 18, name: "Software Testing", icon: "bug", users: 52, rating: 3, description: "Software testing is the process of evaluating a software application to ensure it meets specified requirements and functions correctly. It includes various techniques such as unit testing, integration testing, and system testing." },
        { id: 19, name: "Project Management", icon: "project-diagram", users: 74, rating: 4, description: "Project management involves planning, organizing, and overseeing the execution of a project to achieve specific goals within a specified timeframe and budget. It includes tasks such as defining project scope, allocating resources, and managing risks." },
        { id: 20, name: "Agile Methodology", icon: "project-diagram", users: 71, rating: 4, description: "Agile methodology is an iterative approach to software development that focuses on delivering small, incremental releases and adapting to change quickly. It emphasizes collaboration, customer feedback, and continuous improvement." },
        { id: 21, name: "PHP", icon: "php", users: 60, rating: 3, description: "PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language. It's widely used for building dynamic websites and web applications." },
        { id: 22, name: "Swift", icon: "swift", users: 45, rating: 3, description: "Swift is a powerful and intuitive programming language developed by Apple for building iOS, macOS, watchOS, and tvOS applications. It's designed to be safe, fast, and expressive." },
        { id: 23, name: "Kotlin", icon: "android", users: 40, rating: 3, description: "Kotlin is a statically typed programming language developed by JetBrains. It's designed to interoperate fully with Java and is used for building Android applications, server-side applications, and web development." },
        { id: 24, name: "Flutter", icon: "flutter", users: 35, rating: 3, description: "Flutter is an open-source UI software development kit created by Google. It's used for building natively compiled applications for mobile, web, and desktop from a single codebase." },
        { id: 25, name: "Django", icon: "django", users: 55, rating: 4, description: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It's used for building web applications with a clean and pragmatic design." },
        { id: 26, name: "Spring Boot", icon: "java", users: 50, rating: 3, description: "Spring Boot is an open-source Java-based framework used to create microservices and standalone applications. It simplifies the process of building production-ready applications with minimal configuration." },
        { id: 27, name: "Laravel", icon: "laravel", users: 48, rating: 3, description: "Laravel is a PHP framework used for building web applications following the model-view-controller (MVC) architectural pattern. It provides expressive syntax, convenient shortcuts, and tools needed for large, robust applications." },
        { id: 28, name: "SQL", icon: "database", users: 68, rating: 4, description: "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases. It's used to perform tasks such as querying data, updating records, and creating databases and tables." },
        { id: 29, name: "NoSQL", icon: "database", users: 48, rating: 3, description: "NoSQL (Not Only SQL) databases are a type of database that provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases." },
        { id: 30, name: "Cloud Platforms (AWS, Azure, GCP)", icon: "cloud", users: 62, rating: 4, description: "Cloud platforms such as AWS (Amazon Web Services), Azure, and GCP (Google Cloud Platform) provide a range of cloud services including computing power, storage, and databases delivered over the Internet." },
        { id: 31, name: "API Development", icon: "code", users: 69, rating: 4, description: "API (Application Programming Interface) development involves designing, building, and deploying APIs that allow different software applications to communicate with each other. It enables the integration of different systems and services." },
        { id: 32, name: "Microservices Architecture", icon: "infinity", users: 42, rating: 3, description: "Microservices architecture is an architectural style that structures an application as a collection of loosely coupled services. Each service is independently deployable, scalable, and can be developed using different programming languages and frameworks." },
        { id: 33, name: "Machine Learning", icon: "robot", users: 80, rating: 4, description: "Machine learning is a subset of artificial intelligence that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. It's used for tasks such as data mining, pattern recognition, and predictive analytics." },
        { id: 34, name: "Deep Learning", icon: "robot", users: 65, rating: 4, description: "Deep learning is a subset of machine learning that uses artificial neural networks with multiple layers to model and extract patterns from complex data. It's used for tasks such as image recognition, natural language processing, and speech recognition." },
        { id: 35, name: "Computer Vision", icon: "eye", users: 50, rating: 3, description: "Computer vision is a field of artificial intelligence that enables computers to interpret and understand visual information from the real world. It's used for tasks such as object detection, image classification, and image segmentation." },
        { id: 36, name: "Content Marketing", icon: "bullhorn", users: 64, rating: 4, description: "Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. It's used to drive profitable customer action." },
        { id: 37, name: "Copywriting", icon: "pen-alt", users: 61, rating: 4, description: "Copywriting is the act or occupation of writing text for the purpose of advertising or other forms of marketing. It's used to persuade someone to take a particular action, such as purchasing a product or service." },
        { id: 38, name: "Graphic Design", icon: "palette", users: 40, rating: 3, description: "Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography, and illustration. It's used to create visual content for print and digital media." },
        { id: 39, name: "User Experience (UX) Research", icon: "user", users: 63, rating: 4, description: "User experience (UX) research is the process of understanding user behaviors, needs, and motivations through observation techniques, task analysis, and other feedback methodologies. It's used to inform the design and development of products and services." },
        { id: 40, name: "Usability Testing", icon: "chart-pie", users: 41, rating: 3, description: "Usability testing is a technique used to evaluate a product by testing it with representative users to uncover usability problems and gather feedback about the user experience. It's used to identify issues and improve the usability of a product." },
        { id: 41, name: "Information Security", icon: "lock", users: 70, rating: 4, description: "Information security, sometimes shortened to InfoSec, is the practice of protecting information by mitigating information risks. It involves implementing measures to prevent unauthorized access, use, disclosure, disruption, modification, or destruction of information." },
        { id: 42, name: "Network Security", icon: "shield-alt", users: 66, rating: 4, description: "Network security is the practice of securing a computer network infrastructure against unauthorized access, misuse, modification, or denial of service attacks. It involves implementing various technologies and procedures to protect networks from cyber threats." },
        { id: 43, name: "Cloud Security", icon: "cloud", users: 60, rating: 4, description: "Cloud security refers to the set of policies, controls, procedures, and technologies used to protect cloud-based systems, data, and infrastructure from cyber threats and unauthorized access. It ensures the confidentiality, integrity, and availability of cloud resources." },
        { id: 44, name: "Blockchain", icon: "link", users: 30, rating: 3, description: "Blockchain is a distributed ledger technology that enables secure and transparent recording of transactions across multiple parties. It's used for various applications including cryptocurrency, supply chain management, and decentralized finance." },
        { id: 45, name: "Internet of Things (IoT)", icon: "wifi", users: 38, rating: 3, description: "The Internet of Things (IoT) refers to the network of physical objects or things embedded with sensors, software, and other technologies to connect and exchange data with other devices and systems over the Internet." },
        { id: 46, name: "Artificial Intelligence (AI)", icon: "robot", users: 85, rating: 5, description: "Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. It includes learning, reasoning, problem-solving, perception, and language understanding." },
        { id: 47, name: "Natural Language Processing (NLP)", icon: "comment-alt", users: 62, rating: 4, description: "Natural language processing (NLP) is a subfield of artificial intelligence that focuses on the interaction between computers and humans through natural language. It's used for tasks such as language translation, sentiment analysis, and chatbots." },
        { id: 48, name: "Digital Marketing", icon: "bullhorn", users: 88, rating: 4, description: "Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and other websites to connect with current and prospective customers." },
        { id: 49, name: "SEO", icon: "search", users: 75, rating: 4, description: "Search engine optimization (SEO) is the process of optimizing a website to rank higher in search engine results pages (SERPs). It involves improving website quality, content relevance, and user experience to increase organic (non-paid) traffic from search engines." },
        { id: 50, name: "Social Media Marketing", icon: "users", users: 79, rating: 4, description: "Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. It involves creating and sharing content on social media networks to achieve marketing and branding goals." },
        { id: 51, name: "R", icon: "r-project", users: 45, rating: 3, description: "R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing. It's widely used by statisticians and data miners for data analysis and visualization." },
        { id: 52, name: "Ruby", icon: "ruby", users: 40, rating: 3, description: "Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. It's commonly used for web development and known for its elegant syntax and object-oriented programming features." },
        { id: 53, name: "Go", icon: "go", users: 55, rating: 4, description: "Go, also known as Golang, is a statically typed, compiled programming language designed by Google. It's known for its simplicity, efficiency, and concurrency support, making it suitable for building scalable and high-performance systems." },
        { id: 54, name: "TensorFlow", icon: "tensorflow", users: 70, rating: 4, description: "TensorFlow is an open-source machine learning framework developed by Google. It's used for building and training machine learning models, especially deep learning models, across a range of tasks and industries." },
        { id: 55, name: "PyTorch", icon: "torch", users: 65, rating: 4, description: "PyTorch is an open-source machine learning library developed by Facebook. It's used for building and training deep learning models, and it's known for its flexibility, ease of use, and dynamic computational graph." },
        { id: 56, name: "Hadoop", icon: "hadoop", users: 52, rating: 3, description: "Hadoop is an open-source framework for distributed storage and processing of large datasets across clusters of computers. It's used for big data processing and analysis, and it includes components such as Hadoop Distributed File System (HDFS) and MapReduce." },
        { id: 57, name: "Spark", icon: "spark", users: 48, rating: 3, description: "Apache Spark is an open-source distributed computing system used for big data processing and analytics. It provides high-level APIs in Java, Scala, Python, and R, and it's known for its speed, ease of use, and support for various data sources." },
        { id: 58, name: "Big Data Analytics", icon: "chart-bar", users: 58, rating: 4, description: "Big data analytics is the process of examining large and varied datasets to uncover hidden patterns, unknown correlations, market trends, customer preferences, and other useful information. It involves using advanced analytics techniques and technologies to extract insights from big data." },
        { id: 59, name: "Natural Language Understanding (NLU)", icon: "comment-alt", users: 42, rating: 3, description: "Natural language understanding (NLU) is a branch of artificial intelligence that focuses on the comprehension of human language by computers. It involves tasks such as language translation, sentiment analysis, and semantic parsing." },
        { id: 60, name: "Data Engineering", icon: "database", users: 47, rating: 3, description: "Data engineering is the discipline of designing, building, and maintaining systems for collecting, storing, and processing large volumes of data. It involves various technologies and techniques for data ingestion, transformation, and analysis." },
    ]);


    const [searchQuery, setSearchQuery] = useState(''); // State to store search query
    const [filteredSkills, setFilteredSkills] = useState(skills); // State for filtered skills
    const [sortBy, setSortBy] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const [skillDescriptions, setSkillDescriptions] = useState({}); // Object to store skill descriptions

    const handleViewDetailsClick = (skill) => {
        setSkillDescriptions({ ...skillDescriptions, [skill.id]: skill.description });
    };

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
    }, [sortBy, filteredSkills]); // Re-sort when sortBy or filteredSkills change

    useEffect(() => {
        setFilteredSkills(skills.filter((skill) => skill.name.toLowerCase().includes(searchQuery)));
    }, [searchQuery, skills]); // Re-filter when searchQuery or skills change


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
                                        event.stopPropagation(); // Prevent event propagation
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
        </div>
    );
};

export default SkillExchangePage;