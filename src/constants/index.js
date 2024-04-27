import {
    Arduino,
    Blender,
    Blogger,
    CMake,
    Contact,
    CPP,
    DEKA,
    Docker,
    Gazebo,
    Git,
    GitHub,
    Linkedin,
    Linux,
    OpenCV,
    PersonalProject,
    Python,
    Qt,
    RaspberryPi,
    ROS,
    UniversityOfRochester
} from '../assets/icons';

export const skills = [
    {
        imageUrl: CPP,
        name: 'C++'
    },
    {
        imageUrl: Python,
        name: 'Python'
    },
    {
        imageUrl: ROS,
        name: 'Robot Operating System'
    },
    {
        imageUrl: Gazebo,
        name: 'Gazebo Simulation'
    },
    {
        imageUrl: OpenCV,
        name: 'OpenCV'
    },
    {
        imageUrl: Qt,
        name: 'Qt Framework'
    },
    {
        imageUrl: Git,
        name: 'Git'
    },
    {
        imageUrl: GitHub,
        name: 'GitHub'
    },
    {
        imageUrl: CMake,
        name: 'CMake'
    },
    {
        imageUrl: Docker,
        name: 'Docker'
    },
    {
        imageUrl: Linux,
        name: 'Linux'
    },
    {
        imageUrl: Blender,
        name: 'Blender'
    },
    {
        imageUrl: RaspberryPi,
        name: 'Raspberry Pi'
    },
    {
        imageUrl: Arduino,
        name: 'Arduino'
    }
];

export const experiences = [
    {
        title: 'Personal Projects',
        company_name: '',
        icon: PersonalProject,
        iconBG: '#e39d10',
        date: 'June 2023 - Present',
        points: [
            'Worked on various coding projects whose topics are related to robotics.'
        ],
    },
    {
        title: 'Software Lead',
        company_name: 'Capstone Project',
        icon: UniversityOfRochester,
        iconBG: '#10427a',
        date: 'Jan 2023 - May 2023',
        points: [
            'Worked with a team of 5 engineers to develop a visualization-aid for a wheelchair-bound client.',
            'Led the software development of the primary GUI application using C++, OpenCV, and Qt5.',
            'Performed code profiling to identify and improve performance bottlenecks so the GUI program can run reliably for 8 hrs/day on an Nvidia Jetson Nano.',
        ],
    },
    {
        title: 'Software Engineer in Test',
        company_name: 'DEKA Research and Development',
        icon: DEKA,
        iconBG: '#da2728',
        date: 'June 2022 - Aug 2022',
        points: [
            'Developed an electro-mechanical fixture to automate the durability testing of a medical device prototype using a Raspberry Pi.',
            'Wrote a state machine C++ program on the Raspberry Pi to move the stepper motors and linear actuators in the correct sequence to perform the durability testing.',
            'Improved a data analysis tool in Python for analyzing medical device test logs.',
        ],
    },
    {
        title: 'Member of Autonomy Team',
        company_name: 'Robotics Club',
        icon: UniversityOfRochester,
        iconBG: '#10427a',
        date: 'Sep 2021 - Dec 2022',
        points: [
            'Developed a feature-based visual odometry system and A* search path planning algorithm using C++ and ROS2.',
            'Modeled the competition arena using Blender and tested the performance of our robot in Gazebo simulation.',
        ],
    }
];

export const projects = [
    {
        theme: 'btn-back-green',
        name: 'RGB-D Visual Odometry',
        description: "Estimating change in a camera's position using SIFT feature matching",
        github: 'https://github.com/Juhyung-L/RGB-D_visual_odometry',
        blogger: 'https://juhyungsprojects.blogspot.com/2024/01/rgb-d-visual-odometry.html'
    },
    {
        theme: 'btn-back-pink',
        name: "Bird's-eye View for Wheelchair",
        description: 'GUI application to help wheelchair users to visualize their surroundings',
        github: 'https://github.com/Juhyung-L/bird_view',
        blogger: 'https://juhyungsprojects.blogspot.com/2023/12/birds-eye-view-for-wheelchair.html'
    },
    {
        theme: 'btn-back-blue',
        name: 'PID Motor Control',
        description: 'Using PID controller to precisely control a DC motor in a wheeled robot',
        github: '',
        blogger: 'https://juhyungsprojects.blogspot.com/2023/11/autonomous-mobile-bot-part-3-pid.html'
    },
    {
        theme: 'btn-back-black',
        name: 'CUDA-Accelerated Iterative Closest Point Algorithm',
        description: 'Using CUDA and Octree implementation to speed up the Iterative Closest Point Algorithm',
        github: 'https://github.com/Juhyung-L/cuda_icp',
        blogger: 'https://juhyungsprojects.blogspot.com/2023/10/iterative-closest-point-algorithm-using.html'
    },
    {
        theme: 'btn-back-red',
        name: 'Autonomous SLAM',
        description: 'Generate waypoints to unexplored regions on the map to automate the mapping of indoor environments',
        github: 'https://github.com/Juhyung-L/autonomous_slam',
        blogger: 'https://juhyungsprojects.blogspot.com/2023/08/autonomous-mobile-bot-part-1-autonomous.html'
    }
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: GitHub,
        link: 'https://github.com/Juhyung-L'
    },
    {
        name: 'Blogger',
        iconUrl: Blogger,
        link: 'https://juhyungsprojects.blogspot.com/'
    },
    {
        name: 'Linkedin',
        iconUrl: Linkedin,
        link: 'https://www.linkedin.com/in/juhyung-lee-2a2b09192/'
    }
];