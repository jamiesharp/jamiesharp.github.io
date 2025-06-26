export const skillItems = [
  { id: 1, name: "Excel", icon: "/excel.svg" },
  { id: 4, name: "Power BI", icon: "/powerbi.svg" },
  { id: 5, name: "SQL", icon: "/sql.svg" },
  { id: 6, name: "Python", icon: "/python.svg" },
]


export const projects = [
  {
    id: 1,
    title: "Olist E-Commerce SQL Analysis & Dashboard",
    des: "This project involves querying the Olist E-commerce dataset using SQL, preparing the data to be imported into Power BI, and designing an interactive dashboard for insightful visualization.",
    img: "/p1.png",
    iconLists: [
      { icon: "/sql.svg", name: "SQL" },
      { icon: "/powerbi.svg", name: "Power BI" },
    ],
    link: "https://github.com/jamiesharp/data-analysis-projects/tree/main/Olist%20E-Commerce%20SQL%20Analysis%20%26%20Dashboard"
  },
  {
    id: 2,
    title: "Olympics Dashboard",
    des: "Power BI dashboard created from the Tokyo 2020 Olympic Summer Games dataset.",
    img: "/p2.svg",
    iconLists: [
      { icon: "/powerbi.svg", name: "Power BI" },
    ],
    link: "https://github.com/jamiesharp/data-analysis-projects/tree/main/Olympics%20Dashboard"
  },
  {
    id: 3,
    title: "Netflix Library EDA",
    des: "Exploratory Data Analysis of the Netflix Contents Dataset with Python.",
    img: "/p3.svg",
    iconLists: [
      { icon: "/python.svg", name: "Python" },
      { icon: "/pandas.svg", name: "Pandas" },
      { icon: "/matplotlib.svg", name: "Matplotlib" },
    ],
    link: "https://github.com/jamiesharp/data-analysis-projects/tree/main/Portfolio%20EDA%20of%20Netflix%20Contents"
  },
  // {
  //   id: 4,
  //   title: "UK International Trade Dashboard",
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  //   img: "/p4.svg",
  //   iconLists: [
  //     { icon: "excel.svg", name: "Excel"}
  //   ],
  // },

];
