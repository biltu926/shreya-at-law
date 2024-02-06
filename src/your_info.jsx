//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx

//const backgroundImageUrl = 'https://images.wallpaperscraft.com/image/single/man_photographer_roof_146991_3840x2400.jpg';
const backgroundImageUrl = 'https://images.pexels.com/photos/533424/pexels-photo-533424.jpeg';

// Enter here your first and last name
const name = {
  firstname: 'Shreya',
  lastname: 'Banerjee',
// Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: 'https://www.google.com',
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  'Civil law...',
  'Criminal law...',
  'Corporate...'  
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://www.linkedin.com/in/shreya-banerjee-51930318b?trk=contact-info',
  },
  //   Add more social profiles here, it will automatically add more link-buttons with icons (if available)
  //   {
  //     name: 'Twitter',
  //     icon: 'lni lni-twitter',
  //     url: 'https://twitter.com/your-username',
  //   },
     {
       name: 'Facebook',
       icon: 'lni lni-facebook',
       url: 'https://www.facebook.com/profile.php?id=100089455119538&mibextid=ZbWKwL',
     },
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'Web Development',
    icon: 'lni lni-code',
    title: 'Law',
    description:
      "I have been practicing for the last 2+ years in Alipore court, High court, and Baruipore court. I deal with cases involving land/real-estate registration, deed, mutation, will, divorce, and other criminal issues like domestic violence, animal cruelty, fraud etc.",
    skills: [
      {
        icon: 'lni lni-camera',
        title: 'HTML5',
      },
      {
        icon: 'lni lni-certificate',
        title: 'CSS3',
      },
      {
        icon: 'lni lni-instagram',
        title: 'JavaScript',
      },
    ],
  },
  {
    name: 'Non-profit',
    icon: 'lni lni-code',
    title: 'Non profit',
    description:
    "I have been associated with an NGO based out of the tribal majority rural district of Purulia, West Bengal. My voluntary involvement includes managing, and co-ordinating govt. funded projects involving the unpriviledged among other things.",
    skills: [
      {
        icon: 'lni lni-adobe',
        title: 'adobe',
      },
      {
        icon: 'lni lni-code',
        title: 'Code',
      },
      {
        icon: 'lni lni-sketch',
        title: 'Sketch'
      },
     
      
    ],
  },
  {
    name: 'Animal walfare',
    title: 'Animal walfare',
    description:
    "Being an avid pet lover I rescue, and take care of stray pets. Additionally, I have been building a network of good samaritans to generate funds, medicines, and other essentials for an array of local animal NGOs, and individuals I am personaly involved with.",
    skills: [
      {
        icon: 'lni lni-pinterest',
        title: 'Pinterest',
      },
      {
        icon: 'lni lni-crop',
        title: 'Crop',
      },
      
    ],
  },
  
];

// Here you can give in your achiements in a number counter animation
const achievements = [
  { word: 'Success rate', value: 100, unit: '%' },
  { word: 'cases handled', value: 20, unit: '' },
  { word: 'legal experience', value: 2, unit: ' years' },
];



// If you already have some projects, fill the url 
const projectData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    demoUrl: 'https://wallpaperaccess.com/full/530366.jpg' 
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    demoUrl: 'https://wallpapercave.com/wp/wp1933134.jpg' 
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    demoUrl: 'https://c4.wallpaperflare.com/wallpaper/43/399/700/photography-camera-birds-animals-wallpaper-preview.jpg' 
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    demoUrl: 'src/assets/images/Jonathan Dominion Template.gif' 
  },
  
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////



// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `Hi there, I'm Shreya with 2+ years of experience working in the legal system.
            My expertise includes formulating property deeds, making wills, conducting property registrations,
            drafting, fighting cases of domestic violence, divorce, criminal and legal fraud.
            Before joining the legal industry, I worked at Axis bank as operations executive for 2 years.
            I hold a first class BSc honours, and Msc in Computer science and LLB.
            I am also actively associated with an NGO which works on women, and child development, and
            are part of different animal welfare societies, and NGOs.
    `,
  power_slogan: `Thank you!`,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 

const emailConfig = {
  serviceID: 'service_XXXXXXX',
  templateID: 'template_XXXXXXXX',
  userID: 'XXXXXXXXXXXX',
};

export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
  emailConfig,
};
