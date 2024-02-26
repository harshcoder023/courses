import React from "react";
import CoursesCategory from "./components/CoursesCategory";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/Courses";
import CourseDetails from "./components/CourseDetails";
const App = () => {
  const courses = [
    {
      id: 0,
      name: "B.Tech in Mechanical Engineering",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "engineering",
      briefDescription:
        " Dive into the world of machines, energy systems, and manufacturing processes. Learn how to design and optimize mechanical systems while developing skills in thermodynamics, fluid mechanics, and materials science.",
      overview:
        "Explore the principles and practices of mechanical engineering with our B.Tech in Mechanical Engineering program. Gain hands-on experience in designing and analyzing mechanical systems.",
      curriculum: [
        "Engineering Mechanics",
        "Thermodynamics",
        "Fluid Mechanics",
        "Machine Design",
        "Manufacturing Processes",
        "Heat Transfer",
        "Automotive Engineering",
      ],
      facultyProfiles: [
        {
          name: "Dr. Michael Smith",
          designation: "Professor of Mechanics",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Sarah Johnson",
          designation: "Associate Professor of Thermodynamics",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Emily Brown",
          designation: "Assistant Professor of Machine Design",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
      ],
      admissionRequirements:
        "Admission to the B.Tech in Mechanical Engineering program is based on a holistic review of each applicant's academic record, extracurricular involvement, personal statement, and letters of recommendation. Prospective students should demonstrate a strong foundation in mathematics and physics.",
      uniqueFeatures: [
        "State-of-the-art laboratories and equipment",
        "Industry collaborations for real-world projects",
        "Research opportunities in advanced materials and engineering",
      ],
    },
    {
      id: 1,
      name: "B.Tech in Electrical Engineering",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "engineering",
      briefDescription:
        "Delve into the field of electronics, power systems, and telecommunications. Acquire expertise in circuit design, signal processing, and renewable energy technologies.",
      overview:
        "Delve into the field of electrical engineering with our B.Tech in Electrical Engineering program. Gain expertise in designing, analyzing, and optimizing electrical systems.",
      curriculum: [
        "Circuit Analysis",
        "Power Systems",
        "Electronics",
        "Digital Signal Processing",
        "Control Systems",
        "Renewable Energy",
        "Smart Grids",
      ],
      facultyProfiles: [
        {
          name: "Dr. Emily Johnson",
          designation: "Professor of Circuit Analysis",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Michael Davis",
          designation: "Associate Professor of Power Systems",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Sarah Miller",
          designation: "Assistant Professor of Electronics",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
      ],
      admissionRequirements:
        "Admission to the B.Tech in Electrical Engineering program is based on a holistic review of each applicant's academic record, extracurricular involvement, personal statement, and letters of recommendation. Prospective students should demonstrate a strong aptitude for mathematics and physics.",
      uniqueFeatures: [
        "Hands-on projects in electrical systems",
        "Internship opportunities with power companies",
        "Research opportunities in sustainable energy",
      ],
    },
    {
      id: 2,
      name: "B.Tech in Computer Science Engineering",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "engineering",
      briefDescription:
        " Master the fundamentals of computer programming, algorithms, and software development. Explore areas such as artificial intelligence, cybersecurity, and data science through practical projects and industry collaborations.",
      overview:
        "Master the fundamentals of computer science and engineering with our B.Tech in Computer Science and Engineering program. Gain expertise in software development, algorithms, and computer systems architecture.",
      curriculum: [
        "Programming Fundamentals",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Software Engineering",
        "Computer Networks",
        "Web Development",
      ],
      facultyProfiles: [
        {
          name: "Dr. John Smith",
          designation: "Professor of Computer Science",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Emily Davis",
          designation: "Associate Professor of Algorithms",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Michael Johnson",
          designation: "Assistant Professor of Software Engineering",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
      ],
      admissionRequirements:
        "Admission to the B.Tech in Computer Science and Engineering program is based on a holistic review of each applicant's academic record, extracurricular involvement, personal statement, and letters of recommendation. Prospective students should demonstrate strong analytical and problem-solving skills.",
      uniqueFeatures: [
        "Hands-on projects in software development",
        "Internship opportunities with tech startups",
        "Research opportunities in emerging technologies",
      ],
    },
    {
      id: 3,
      name: "B.Tech in Electronics and Communication Engineering",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "engineering",
      briefDescription:
        "Focus on the design and implementation of communication systems, digital electronics, and embedded systems. Develop proficiency in wireless technologies, networking protocols, and digital signal processing.",
      overview:
        "Explore the field of electronics and communication engineering with our B.Tech in Electronics and Communication Engineering program. Gain expertise in analog and digital circuits, communication systems, and signal processing.",
      curriculum: [
        "Analog Circuits",
        "Digital Circuits",
        "Communication Systems",
        "Microprocessors and Microcontrollers",
        "Digital Signal Processing",
        "Wireless Communication",
        "VLSI Design",
      ],
      facultyProfiles: [
        {
          name: "Dr. Emily White",
          designation: "Professor of Analog Circuits",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Michael Johnson",
          designation: "Associate Professor of Communication Systems",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Sarah Davis",
          designation: "Assistant Professor of Digital Signal Processing",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
      ],
      admissionRequirements:
        "Admission to the B.Tech in Electronics and Communication Engineering program is based on a holistic review of each applicant's academic record, extracurricular involvement, personal statement, and letters of recommendation. Prospective students should demonstrate strong analytical and problem-solving skills.",
      uniqueFeatures: [
        "Hands-on projects in electronic circuits",
        "Internship opportunities with telecommunications companies",
        "Research opportunities in wireless technologies",
      ],
    },
    {
      id: 4,
      name: "B.Tech in EV Technologies",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "engineering",
      briefDescription:
        "Embrace the future of transportation with a focus on electric vehicle (EV) technologies. Explore the design, development, and implementation of electric powertrains, battery systems, and charging infrastructure. Prepare to be at the forefront of the green mobility revolution and contribute to sustainable transportation solutions.",
      overview:
        "Embrace the future of transportation with our B.Tech in Electric Vehicle (EV) Technologies program. Explore the design, development, and implementation of electric powertrains, battery systems, and charging infrastructure.",
      curriculum: [
        "Electric Vehicle Fundamentals",
        "Battery Technology and Management",
        "Power Electronics Principles",
        "Charging Infrastructure Design",
        "EV Design and Development",
        "Sustainable Transportation Solutions",
        "Energy Management Techniques",
      ],
      facultyProfiles: [
        {
          name: "Dr. John Miller",
          designation: "Professor of EV Technologies",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Emily White",
          designation: "Associate Professor of Battery Technology",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Michael Johnson",
          designation: "Assistant Professor of Power Electronics",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
      ],
      admissionRequirements:
        "Admission to the B.Tech in EV Technologies program is based on a holistic review of each applicant's academic record, extracurricular involvement, personal statement, and letters of recommendation. Prospective students should demonstrate a keen interest in sustainable technologies and engineering.",
      uniqueFeatures: [
        "Hands-on projects in electric vehicle design",
        "Internship opportunities with EV manufacturers",
        "Research opportunities in renewable energy and transportation",
      ],
    },
    {
      id: 5,
      name: "B.Tech in 5G",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "engineering",
      briefDescription:
        "Dive into the next generation of wireless technology with a focus on 5G networks. Study advanced telecommunications concepts, including radio frequency (RF) engineering, network architecture, and mobile computing. Prepare for careers in telecommunications companies, network infrastructure providers, and technology firms driving the 5G revolution.",
      overview:
        "Dive into the next generation of wireless technology with our B.Tech in 5G program. Study advanced telecommunications concepts, including radio frequency (RF) engineering, network architecture, and mobile computing.",
      curriculum: [
        "Telecommunications Fundamentals",
        "RF Engineering Principles",
        "Network Architecture Design",
        "Mobile Computing Technologies",
        "Wireless Networking Protocols",
        "5G Technologies and Standards",
        "Network Security Measures",
      ],
      facultyProfiles: [
        {
          name: "Dr. Sarah Johnson",
          designation: "Professor of Telecommunications",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Michael Williams",
          designation: "Associate Professor of RF Engineering",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Emily Davis",
          designation: "Assistant Professor of Mobile Computing",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
      ],
      admissionRequirements:
        "Admission to the B.Tech in 5G program is highly competitive and based on a holistic review of each applicant's academic record, extracurricular involvement, personal statement, and letters of recommendation. Prospective students should demonstrate a strong aptitude for mathematics and physics.",
      uniqueFeatures: [
        "Hands-on experience with 5G equipment",
        "Collaboration with industry partners on real-world projects",
        "Research opportunities in 5G network optimization",
      ],
    },
    {
      id: 6,
      name: "B.Tech in Artificial Intelligence",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "engineering",
      briefDescription:
        "Explore the cutting-edge field of artificial intelligence (AI) and machine learning (ML). Learn to develop intelligent systems, algorithms, and applications that mimic human cognition. Gain expertise in areas such as natural language processing, computer vision, and data analytics.",
      overview:
        "Embark on a journey into the dynamic world of artificial intelligence and machine learning with our B.Tech in Artificial Intelligence program. Our comprehensive curriculum and hands-on learning approach prepare students for success in the rapidly evolving field of AI.",
      curriculum: [
        "Introduction to Artificial Intelligence",
        "Machine Learning Algorithms",
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning",
        "Ethical AI Practices",
        "AI Applications in Industry",
      ],
      facultyProfiles: [
        {
          name: "Dr. John Smith",
          designation: "Professor of Artificial Intelligence",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Emily Johnson",
          designation: "Associate Professor of Machine Learning",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
        {
          name: "Dr. Michael Brown",
          designation: "Assistant Professor of Natural Language Processing",
          image:
            "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
        },
      ],
      admissionRequirements:
        "Admission to the B.Tech in Artificial Intelligence program is based on a holistic review of each applicant's academic record, extracurricular involvement, personal statement, and letters of recommendation. Prospective students are expected to demonstrate strong analytical and problem-solving skills.",
      uniqueFeatures: [
        "Hands-on projects in AI applications",
        "Internship opportunities with leading tech companies",
        "Research opportunities in cutting-edge AI technologies",
      ],
    },
    {
      id: 7,
      name: "M.Tech in Electronics and Communication Engineering",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "engineering",
      briefDescription:
        "Explore the latest advancements in electronics and communication systems with our M.Tech program. Dive into areas such as digital signal processing, wireless communication, and embedded systems design. Develop the expertise to innovate and lead in industries such as telecommunications, semiconductor, and IoT.",
      overview:
        "Deepen your expertise in electronics and communication engineering with our M.Tech in Electronics and Communication Engineering program. Explore advanced topics in analog and digital circuits, communication systems, and signal processing.",
      curriculum: [
        "Advanced Analog Circuits",
        "Digital Signal Processing Techniques",
        "Wireless Communication Networks",
        "VLSI Design and Testing",
        "Embedded Systems",
        "Optical Communication",
        "Antenna Design",
      ],
      facultyProfiles: [
        {
          name: "Dr. Emily White",
          designation: "Professor of Analog Circuits",
          image: "https://example.com/emily_white.jpg",
        },
        {
          name: "Dr. Michael Johnson",
          designation: "Associate Professor of Wireless Communication",
          image: "https://example.com/michael_johnson.jpg",
        },
        {
          name: "Dr. Sarah Davis",
          designation: "Assistant Professor of Digital Signal Processing",
          image: "https://example.com/sarah_davis.jpg",
        },
      ],
      admissionRequirements:
        "Admission to the M.Tech in Electronics and Communication Engineering program is based on a holistic review of each applicant's academic record, research experience, statement of purpose, and letters of recommendation. Prospective students should demonstrate a strong foundation in electronics and communication engineering.",
      uniqueFeatures: [
        "Cutting-edge research opportunities",
        "Access to advanced laboratory facilities",
        "Industry collaborations for applied research projects",
      ],
    },
    {
      id: 8,
      name: "M.Tech in Computer Science and Engineering",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "engineering",
      briefDescription:
        "Deepen your understanding of computer science principles and advance your technical skills with our M.Tech program. Choose from a variety of specializations such as artificial intelligence, cybersecurity, and data science. Engage in research-driven coursework and hands-on projects to tackle complex challenges in computing.",
      overview:
        "Deepen your knowledge of computer science and engineering with our M.Tech in Computer Science and Engineering program. Choose from a variety of specializations such as artificial intelligence, cybersecurity, and data science.",
      curriculum: [
        "Advanced Algorithms",
        "Artificial Intelligence",
        "Cybersecurity",
        "Data Science",
        "Cloud Computing",
        "Machine Learning",
        "Big Data Analytics",
      ],
      facultyProfiles: [
        {
          name: "Dr. John Smith",
          designation: "Professor of Artificial Intelligence",
          image: "https://example.com/john_smith.jpg",
        },
        {
          name: "Dr. Emily Johnson",
          designation: "Associate Professor of Cybersecurity",
          image: "https://example.com/emily_johnson.jpg",
        },
        {
          name: "Dr. Michael Brown",
          designation: "Assistant Professor of Data Science",
          image: "https://example.com/michael_brown.jpg",
        },
      ],
      admissionRequirements:
        "Admission to the M.Tech in Computer Science and Engineering program is based on a holistic review of each applicant's academic record, research experience, statement of purpose, and letters of recommendation. Prospective students should demonstrate a strong foundation in computer science and related areas.",
      uniqueFeatures: [
        "Cutting-edge research opportunities",
        "Collaboration with industry partners",
        "Access to state-of-the-art computing facilities",
      ],
    },
    {
      id: 9,
      name: "BCA (Bachelor of Computer Application)",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "engineering",
      briefDescription:
        "Kickstart your career in the dynamic field of computer applications with our BCA program. Gain a solid foundation in programming, database management, and web development. Acquire practical skills through internships and industry projects, preparing you for diverse roles in software development, IT consulting, and more.",
      overview:
        "Embark on a journey into the world of computer applications with our Bachelor of Computer Application (BCA) program. Designed to provide a strong foundation in programming, database management, and web development.",
      curriculum: [
        "Programming Fundamentals",
        "Data Structures",
        "Database Management Systems",
        "Web Development",
        "Object-Oriented Programming",
        "Software Engineering",
        "Computer Networks",
      ],
      facultyProfiles: [
        "Dr. John Smith - Professor of Programming Fundamentals",
        "Dr. Emily Johnson - Associate Professor of Database Management Systems",
        "Dr. Michael Brown - Assistant Professor of Web Development",
      ],
      admissionRequirements:
        "Admission to the BCA program is based on a holistic review of each applicant's academic record, extracurricular involvement, personal statement, and letters of recommendation. Prospective students should have a strong foundation in mathematics and logical reasoning.",
      uniqueFeatures: [
        "Practical hands-on learning experiences",
        "Internship opportunities with IT companies",
        "Projects aligned with industry needs",
      ],
    },
    {
      id: 10,
      name: "BBA (Bachelor of Business Administration)",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "management",
      briefDescription:
        "Lay the foundation for a successful career in business management. Acquire essential skills in marketing, finance, human resources, and operations management. Benefit from real-world case studies and internships to apply theoretical knowledge in practical settings.",
      overview:
        "Chart your path to success in the world of business with our Bachelor of Business Administration (BBA) program. Designed to develop well-rounded business leaders, our program equips students with essential skills and knowledge to thrive in diverse industries.",
      curriculum: [
        "Principles of Management",
        "Marketing Management",
        "Financial Accounting",
        "Business Economics",
        "Organizational Behavior",
        "Business Communication",
        "Human Resource Management",
        "Operations Management",
        "Strategic Management",
        "Capstone Project",
      ],
      facultyProfiles: [
        "Dr. John Smith - Professor of Business Administration",
        "Dr. Emily White - Associate Professor of Marketing",
        "Dr. Michael Johnson - Assistant Professor of Finance",
        "Dr. Sarah Brown - Lecturer in Organizational Behavior",
        "Dr. David Miller - Instructor in Business Communication",
      ],
      admissionRequirements:
        "Admission to the BBA program is based on a holistic review of each applicant's academic record, leadership potential, extracurricular activities, and personal statement. Prospective students should demonstrate a strong interest in business and leadership roles.",
      uniqueFeatures: [
        "Industry-relevant case studies and projects",
        "Internship opportunities with leading corporations",
        "Mentorship program with experienced business professionals",
        "Networking events and guest lectures from industry leaders",
      ],
    },
    {
      id: 11,
      name: "MBA (Master of Business Administration)",
      image:
        "https://gpthane.org.in/wp-content/uploads/2023/07/mechanical-engineering.jpg",
      category: "management",
      briefDescription:
        "Elevate your leadership and strategic decision-making abilities with our MBA program. Customize your curriculum with concentrations in areas such as finance, marketing, entrepreneurship, or international business. Engage in experiential learning opportunities and networking events to advance your career.",
      overview:
        "Chart your path to success in the world of business with our Master of Business Administration (MBA) program. Designed to develop well-rounded business leaders with a global perspective.",
      curriculum: [
        "Core Management Courses",
        "Elective Courses in Specializations",
        "Strategic Leadership",
        "Business Analytics",
        "Marketing Strategies",
        "Financial Management",
        "Operations Management",
      ],
      facultyProfiles: [
        "Dr. John Smith - Professor of Strategic Leadership",
        "Dr. Emily White - Associate Professor of Business Analytics",
        "Dr. Michael Johnson - Assistant Professor of Marketing Strategies",
      ],
      admissionRequirements:
        "Admission to the MBA program is highly competitive and based on a holistic review of each applicant's academic record, professional experience, leadership potential, and letters of recommendation.",
      uniqueFeatures: [
        "Global immersion experiences",
        "Executive mentorship program",
        "Networking events with industry leaders",
      ],
    },
  ];

  return (
    <div>
      <Routes>
        <Route path="/courses" element={<CoursesCategory />} />
        <Route
          path="/courses/category/:courseCategory"
          element={<Courses courses={courses} />}
        />
        <Route
          path="/courses/:courseId"
          element={<CourseDetails courses={courses} />}
        />
      </Routes>
    </div>
  );
};

export default App;
