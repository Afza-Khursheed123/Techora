const courses = [
    {
      id: 1,
      title: "Machine Learning Basics",
      description: "An introduction to the fundamental concepts of Machine Learning, designed for beginners.",
      details: "In this course, we explore the basics of Machine Learning. Topics include supervised and unsupervised learning, classification, regression, and neural networks. You'll gain hands-on experience by building simple models and using popular ML libraries like scikit-learn and TensorFlow. By the end of the course, you will be equipped to understand the foundations of ML and apply them in real-world scenarios.",
      fee: 12000,
      tutor: "John Doe",
      image: "images/img1.jpg",
    },
    {
      id: 2,
      title: "Advanced AI Concepts",
      description: "A deep dive into Artificial Intelligence, focusing on advanced techniques and algorithms.",
      details: "This course covers advanced AI concepts like reinforcement learning, deep learning, and neural networks in greater detail. You will learn how to implement sophisticated AI algorithms and tackle complex problems in fields such as robotics and natural language processing.",
      fee: 15000,
      tutor: "Jane Smith",
      image: "images/img2.jpg",
    },
    {
      id: 3,
      title: "Introduction to Data Science",
      description: "A beginner's guide to Data Science concepts and techniques.",
      details: "In this course, students will explore key aspects of Data Science, including data cleaning, data visualization, statistical analysis, and machine learning. Learn to use tools like Python and R to work with real-world datasets.",
      fee: 11000,
      tutor: "Mike Johnson",
      image: "images/img3.jpg",
    },
    {
      id: 4,
      title: "Deep Learning with TensorFlow",
      description: "Learn how to implement deep learning algorithms using TensorFlow.",
      details: "This course covers the fundamentals of deep learning using TensorFlow. You will learn about neural networks, convolutional networks, and recurrent networks, and how to apply them to various applications like image classification and natural language processing.",
      fee: 17000,
      tutor: "Alice Brown",
      image: "images/img4.jpg",
    },
    {
      id: 5,
      title: "Natural Language Processing",
      description: "Learn how machines process and analyze human language.",
      details: "In this course, you will explore how NLP algorithms are used to process and analyze text data. Topics include text preprocessing, sentiment analysis, machine translation, and chatbot development.",
      fee: 14000,
      tutor: "Robert Lee",
      image: "images/img5.jpg",
    },
    {
      id: 6,
      title: "Introduction to Python Programming",
      description: "A beginner-friendly course on Python programming.",
      details: "This course covers the basics of Python programming, including variables, data types, functions, loops, and file handling. It is designed for those who are new to programming.",
      fee: 9000,
      tutor: "Emily White",
      image: "images/img6.jpg",
    },
    {
      id: 7,
      title: "Data Structures and Algorithms",
      description: "Master data structures and algorithms for efficient problem-solving.",
      details: "This course dives into the core data structures and algorithms used in computer science. Topics include arrays, linked lists, trees, graphs, sorting algorithms, and dynamic programming.",
      fee: 13000,
      tutor: "David Green",
      image: "images/img7.jpg",
    },
    {
      id: 8,
      title: "AI in Healthcare",
      description: "Understand how AI is transforming the healthcare industry.",
      details: "Explore the applications of Artificial Intelligence in healthcare, including diagnostic tools, predictive analytics, and drug discovery. Learn how AI is helping healthcare professionals make better decisions.",
      fee: 16000,
      tutor: "Sophia Adams",
      image: "images/img8.jpg",
    },
    {
      id: 9,
      title: "Computer Vision with OpenCV",
      description: "Learn computer vision techniques using OpenCV.",
      details: "In this course, you will learn how to process and analyze images and videos using OpenCV. Topics include object detection, facial recognition, and image segmentation.",
      fee: 15000,
      tutor: "James Carter",
      image: "images/img9.jpg",
    },
    {
      id: 10,
      title: "Big Data and Hadoop",
      description: "An introduction to Big Data and distributed processing with Hadoop.",
      details: "Learn how to process large datasets using Hadoop and the MapReduce framework. Understand the fundamentals of Big Data, storage systems, and data processing pipelines.",
      fee: 14000,
      tutor: "Chris Johnson",
      image: "images/img10.jpg",
    },
    {
      id: 11,
      title: "Introduction to Cloud Computing",
      description: "Learn the basics of cloud computing and its applications.",
      details: "This course covers the key concepts of cloud computing, including IaaS, PaaS, and SaaS. You will also explore popular cloud platforms like AWS, Microsoft Azure, and Google Cloud.",
      fee: 12000,
      tutor: "Liam Scott",
      image: "images/img11.jpg",
    },
    {
      id: 12,
      title: "Blockchain and Cryptocurrency",
      description: "Learn the principles of blockchain and its applications in cryptocurrency.",
      details: "This course covers the basics of blockchain technology, cryptocurrency, and decentralized applications. You will learn about Bitcoin, Ethereum, smart contracts, and the future of blockchain in various industries.",
      fee: 18000,
      tutor: "Isabella Morris",
      image: "images/img12.jpg",
    },
    {
      id: 13,
      title: "Data Analytics with R",
      description: "Learn data analytics using the R programming language.",
      details: "In this course, you will learn how to analyze and visualize data using R. Topics include statistical analysis, data visualization with ggplot2, and performing regression analysis.",
      fee: 13000,
      tutor: "Mason Davis",
      image: "images/img13.jpg",
    },
    {
      id: 14,
      title: "Introduction to Robotics",
      description: "Learn the fundamentals of robotics and automation.",
      details: "This course covers the basic concepts of robotics, including sensors, actuators, control systems, and robot programming. You'll also learn how to design and build simple robots.",
      fee: 15000,
      tutor: "Olivia King",
      image: "images/img14.jpg",
    },
    {
      id: 15,
      title: "Cybersecurity Essentials",
      description: "Understand the fundamentals of cybersecurity and how to protect systems from threats.",
      details: "In this course, you will learn about network security, cryptography, ethical hacking, and security best practices to safeguard against cyber-attacks.",
      fee: 14000,
      tutor: "Ethan Clark",
      image: "images/img15.jpg",
    },
    {
      id: 16,
      title: "Web Development with JavaScript",
      description: "Learn how to build dynamic websites and web applications using JavaScript.",
      details: "This course covers JavaScript basics, DOM manipulation, and building interactive web pages. You will also explore modern frameworks like React and Node.js.",
      fee: 11000,
      tutor: "Ava Martinez",
      image: "images/img16.jpg",
    },
    {
      id: 17,
      title: "Digital Marketing with AI",
      description: "Learn how AI is transforming digital marketing strategies.",
      details: "This course explores the role of Artificial Intelligence in digital marketing, including automation, personalization, predictive analytics, and customer segmentation.",
      fee: 12500,
      tutor: "Lily Brown",
      image: "images/img17.jpg",
    },
    {
      id: 18,
      title: "Augmented Reality Development",
      description: "Learn how to develop AR applications for mobile and web platforms.",
      details: "In this course, you will learn how to build augmented reality applications using ARKit, ARCore, and Unity. Topics include image recognition, 3D modeling, and user interaction.",
      fee: 14000,
      tutor: "Daniel Wilson",
      image: "images/img18.jpg",
    },
    {
      id: 19,
      title: "IoT (Internet of Things) Basics",
      description: "An introduction to IoT and its applications in various industries.",
      details: "This course covers the fundamentals of IoT, including sensor networks, embedded systems, and cloud computing. You will learn how to build IoT applications using platforms like Arduino and Raspberry Pi.",
      fee: 13500,
      tutor: "Mia Taylor",
      image: "images/img19.jpg",
    },
    {
      id: 20,
      title: "DevOps Fundamentals",
      description: "Learn the core principles of DevOps and how to automate software development processes.",
      details: "This course covers DevOps practices such as continuous integration, continuous delivery, and infrastructure as code. You will learn to use tools like Docker, Kubernetes, and Jenkins for automation.",
      fee: 16000,
      tutor: "Benjamin Lewis",
      image: "images/img20.jpg",
    }
];

function generateCourseCards() {
    const container = document.getElementById('course-container');
    console.log(container);
    
    courses.forEach(course => {
        console.log(course)
        const card = document.createElement('div');



        card.classList.add('card', 'max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-xl', 'shadow-sm', 'dark:bg-gray-800', 'dark:border-gray-700', 'transition-transform', 'duration-300', 'ease-in-out', 'hover:transform', 'hover:-translate-y-2.5','mb-10');
        card.innerHTML = `
          
    <a href="#">
        <img class="rounded-t-lg w-full h-50" src="${course.image}" alt="Machine Learning Basics" />
    </a>
    <div class="p-5">
        <a href="${course.link}">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" id="title">${course.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 " id="description">${course.description}</p>
        <div class="p-5 flex justify-between">
            <a href="${course.link}" class="inline-flex items-center md:px-3 md:py-2 px-1 py-1 text-xs md:text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                More Info
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="${course.link}" class="inline-flex items-center md:px-3 md:py-2 px-1 py-1 text-xs md:text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Start Learning
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</div>

        `;

        container.append(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    generateCourseCards();
});
