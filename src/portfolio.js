/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Venkata Sai Krishna",
  title: "Hi all, I'm Krishna",
  subTitle: emoji(
    "A passionate Roboticist 🤖, turns mechanical dreams into digital realities with a sprinkle of code and dash of innovation"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ntpniLAK29J9eocqVsKBgS2LlZKZ6M6F/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Venkatag14",
  linkedin: "https://www.linkedin.com/in/venkatabodda/",
  gmail: "vbodda@wpi.edu",
  stackoverflow: "https://stackoverflow.com/users/23637429/venkata-sai-krishna-bodda",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ROBOTICS ENGINEER TURNING EVERY ACTION INTO ALGORITHM",
  skills: [
    emoji(
      "⚡ Design and Develop impresiive control and dynamic algorithms for Robots ranging form manipulators to Drones"
    ),
    emoji("⚡ Impressive Projects in Traditional and deep learning based Computer Vision"),
    emoji(
      "⚡ Integrating Motion Planning Control Algorithms, SLAM In ROS for Autonomous Robotics Ultrasound Imaging"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ROS",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "Motion Planning",
      fontAwesomeClassname: "fas fa-route"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Deep Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Robot Controls",
      fontAwesomeClassname: "fas fa-cogs"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Worcester Polytechnic Institute",
      logo: require("./assets/images/wpilogo.png"),
      subHeader: "Master of Science in Robotics Engineering",
      duration: "August 2023 - May 2025",
    },
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/vitlogo.png"),
      subHeader: "Bachelor of Technology in Mechanical Engineering",
      duration: "july 2017 - May 2021",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Computer Vision", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Control Systems",
      progressPercentage: "70%"
    },
    {
      Stack: "Robotics",
      progressPercentage: "80%"
    },
    {
      Stack: "Motion Planning",
      progressPercentage: "60%"
    },
    {
      Stack: "SLAM",
      progressPercentage: "70%"
    },
    {
      Stack: "ROS",
      progressPercentage: "90%"
    },
    {
      Stack: "C#",
      progressPercentage: "60%"
    },
    {
      Stack: "Python",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Researcher",
      company: "FUSION LAB, WPI",
      companylogo: require("./assets/images/fusion.jpg"),
      date: "Jan 2024 – Present",
      desc: "Researching on autonomous ultrasound imaging with Franka Emika robot at Fusion Lab, WPI’s medicalrobotics research center.",
      descBullets: [
        "Designed a specialized robot end effector with SolidWorks 3d printed it and precisely attached ultrasound Probe and depth cameras to the robot.",
        "Utilized PCL C++ library to Process Pointcloud data acquired from an Intel RealSense depth sensor. Integrated this data seamlessly into a control algorithm Based on PID using Franka library to dynamically adjust orientation of the end-effector, thereby enhancing imaging capabilities. This control algorithm include Orientation control and contact force control.",
        "Using Ros Noetic to implement the pipeline and control the robot.",
        "Utilizing Masked R-CNN for patient body segmentation, identifying critical scan regions, and dynamically planning trajectories according to scan protocols, enhancing medical imaging."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Wipro Technologies",
      companylogo: require("./assets/images/wiprologo.jpg"),
      date: "Jul 2021 – May 2023",
      desc: "Collaborated within a team to design and develop InMem, a .Net Web App, which the processing of cryptic telemetry data for an Azure application",
      descBullets: [
        "Enhanced the functionality of the In-Mem application by integrating 13 custom telemetry metrics, crucial for visualizing packet transfer data and created unit tests fortesting the application.",
        "Utilized PCL C++ library to Process Pointcloud data acquired from an Intel RealSense depth sensor. Integrated this data seamlessly into a control algorithm Based on PID using Franka library to dynamically adjust orientation of the end-effector, thereby enhancing imaging capabilities. This control algorithm include Orientation control and contact force control.",
        " As a Site-Reliability Engineer forIn-Mem, Iresolved 11 Severity-1 cases, swiftly restoring web application functionality. Accomplishments include troubleshooting telemetry format exceptions, enhancing characterreading to support UTF32 and ASCII, and thoroughly documenting diagnostics and solutions for each case."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some Impressive Projects I have worked on",
  projects: [
    {
      image: require("./assets/images/r_1.png"),
      projectName: "SFM, NeRF",
      projectDesc: "Generated 3D models and Novel views From static Images using Sfm and NeRF",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Venkatag14/neural_radiance_fields.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dynamics.jpg"),
      projectName: "Dynamics of Manipulators",
      projectDesc: "Derived torque inputs for a 3 rotational link robot to move in a smooth trajectory while computing twist and wrench for each link to accurately follow trajectories while holding payloads.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Venkatag14/Dynamics-3R-manipulator.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 5084102359",
  email_address: "vbodda@wpi.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
