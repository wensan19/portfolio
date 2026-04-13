const projectsData = [
  {
    title: "Pawfect Wellness",
    label: "Project 1 - BED CA2",
    meta: "Full-Stack Web Development",
    embedUrl: "https://www.youtube.com/embed/a32uwPxuJTE",
    alt: "Pawfect Wellness demo video",
    description:
      "Pawfect Wellness is a full-stack wellness web application that gamifies healthy habits through a virtual pet system. Users can buy a dog from a blind box using points, raise and care for their dog by completing exercises and wellness challenges, and stay motivated through an interactive reward-based experience. The platform includes user authentication, database-backed dynamic content, and engaging features that encourage users to build healthier routines in a fun and meaningful way.",
    highlights: [
      "Built a full-stack web application with authentication and database integration.",
      "Created a virtual pet wellness system where users buy dogs from blind boxes and raise them through exercise.",
      "Designed interactive and reward-based features to make wellness tracking more engaging and motivating.",
    ],
    links: [
      {
        label: "View Live Website",
        url: "https://pawfect-wellness-bed.onrender.com",
      },
    ],
  },
  {
    title: "Job Views Factor Analysis",
    label: "Project 2 - PDAS CA1",
    meta: "Data Analysis & Presentation",
    alt: "Job views factor analysis notebook preview",
    mediaType: "notebook",
    documents: [
      {
        label: "PDAS",
        title: "Job Views Factor Analysis",
        fileName: "DAAAFT1B07-2518367-GohWenSan.ipynb",
        url: "../assets/projects/pdas/DAAAFT1B07-2518367-GohWenSan.ipynb",
      },
    ],
    additionalPdf: {
      title: "Interactive PDF Viewer",
      fileName: "PDAS CA1 PPT.pdf",
      url: "../assets/projects/pdas/PDAS CA1 PPT.pdf",
    },
    description:
      "Data analysis project exploring which factors, including salary, job title, work type, and geographical location, have the greatest impact on the number of job views. Research question: Which factors, including salary, job title, work type, and geographical location, have the greatest impact on the number of job views?",
    highlights: [
      "Explored key variables linked to job posting visibility and audience engagement.",
      "Compared factors such as salary, job title, work type, and location.",
      "Presented findings in a concise, portfolio-ready data analysis format.",
    ],
  },
  {
    title: "Customer Segmentation & Energy Consumption Forecasting",
    label: "Project 3 - AI/ML CA2",
    meta: "Python, Machine Learning & Time-Series Forecasting",
    alt: "AI and machine learning notebook preview",
    mediaType: "notebook",
    documents: [
      {
        label: "Part A",
        title: "Customer Segmentation",
        fileName: "p2518367_CA2_PartA_GOHWENSAN.ipynb",
        url: "../assets/projects/aiml/p2518367_CA2_PartA_GOHWENSAN.ipynb",
      },
      {
        label: "Part B",
        title: "Energy Consumption Forecasting",
        fileName: "p2518367_CA2_PartB_GOHWENSAN.ipynb",
        url: "../assets/projects/aiml/p2518367_CA2_PartB_GOHWENSAN.ipynb",
      },
    ],
    additionalPdf: {
      title: "Interactive PDF Viewer",
      fileName: "job-views-factor-analysis.pdf",
      url: "../assets/projects/aiml/job-views-factor-analysis.pdf",
    },
    description:
      "Python-based AI/ML project that combines unsupervised learning and time-series forecasting in Jupyter notebooks. The first part uses unsupervised learning to perform customer segmentation, describe the characteristics of each cluster, and identify which cluster needs the most attention and why. The second part applies a full machine learning workflow to the Energy Consumption dataset by building and tuning Statsmodels forecasting models for gas, electricity, and water, evaluating performance using proper train, validation, and test splits, and producing 60-month forecasts with clear analysis, charts, and reporting.",
    highlights: [
      "Applied unsupervised learning to perform customer segmentation and cluster interpretation.",
      "Built and tuned Statsmodels forecasting models for gas, electricity, and water usage.",
      "Produced clear evaluation, visual analysis, and 60-month forecasts in notebook reports.",
    ],
  },
];

createShowcasePage(projectsData);
