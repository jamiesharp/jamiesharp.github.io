export const skillItems = [
  { id: 1, name: "Excel", icon: "/excel.svg" },
  { id: 4, name: "Power BI", icon: "/powerbi.svg" },
  { id: 5, name: "SQL", icon: "/sql.svg" },
  { id: 6, name: "Python", icon: "/python.svg" },
]


export const projects = [
  {
    id: 1,
    title: "Olist E-Commerce SQL Exploratory Data Analysis",
    des: "This project consists of performing an Exploratory Data Analysis of the Olist E-commerce dataset using SQL.",
    img: "/p1-sql-logo.webp",
    iconLists: [
      { icon: "/sql.svg", name: "SQL" },
      // { icon: "/powerbi.svg", name: "Power BI" },
    ],
    link: "https://github.com/jamiesharp/data-analysis-projects/tree/main/Olist%20E-Commerce%20SQL%20Analysis"
  },
  {
    id: 2,
    title: "Olympics Dashboard",
    des: "Power BI dashboard created from the Tokyo 2020 Olympic Summer Games dataset.",
    img: "/p2-olympics-dashboard.png",
    iconLists: [
      { icon: "/powerbi.svg", name: "Power BI" },
    ],
    link: "https://github.com/jamiesharp/data-analysis-projects/tree/main/Olympics%20Dashboard"
  },
  {
    id: 3,
    title: "Netflix Library EDA",
    des: "Exploratory Data Analysis of the Netflix Contents Dataset with Python.",
    img: "/p3-netflix-eda.svg",
    iconLists: [
      { icon: "/python.svg", name: "Python" },
      { icon: "/pandas.svg", name: "Pandas" },
      { icon: "/matplotlib.svg", name: "Matplotlib" },
    ],
    link: "https://github.com/jamiesharp/data-analysis-projects/tree/main/Portfolio%20EDA%20of%20Netflix%20Contents"
  },
  {
    id: 4,
    title: "UK Trade Dashboard",
    des: "Excel dashboard created from international trade data for goods traded to and from the UK in 2024.",
    img: "/p4-uk-trade-dashboard.png",
    iconLists: [
      { icon: "excel.svg", name: "Excel"}
    ],
  },

];
