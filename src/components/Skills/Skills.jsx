import React from 'react'
import styles from "./skills.module.css"
import { FaReact, FaNodeJs, FaLinux, FaHtml5, FaCss3, FaGitAlt, FaBootstrap, FaPython } from "react-icons/fa";
import { SiVite, SiJest, SiTailwindcss, SiExpress, SiMongodb, SiPrisma, SiWebpack, SiEslint , SiGnubash, SiCplusplus} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbSql } from "react-icons/tb";
import { IconContext } from "react-icons";

const skillData = [
  {
    id:1,
    title:"FrontEnd",
    colorTheme:"#008080",
    tecnologies:[
        {
        name:"react",
        reactIcon:() =><FaReact />,
        },
        {
          name:"javaScript",
          reactIcon: () => <IoLogoJavascript></IoLogoJavascript>
        },
        {
          name:"html",
          reactIcon: () => <FaHtml5></FaHtml5>
        },
        {
          name:"css",
          reactIcon: () =><FaCss3></FaCss3>
        },
        {
          name:"vite",
          reactIcon: () => <SiVite></SiVite>
        },
        {
          name:"jestFronted",
          reactIcon: () =><SiJest></SiJest>
        },
        {
          name:"tailwind",
          reactIcon: ()=> <SiTailwindcss></SiTailwindcss>
        },{
          name:"boostrap",
          reactIcon: () => <FaBootstrap></FaBootstrap>
        }
    ]
},
{
    id:2,
    title:"BackEnd",
    colorTheme:"#4169E1",
    tecnologies:[
      {
        name:"nodeJs",
        reactIcon:() =><FaNodeJs />,
      },
      {
        name:"express",
        reactIcon: () => <SiExpress></SiExpress>
      },
      {
        name:"mongodb",
        reactIcon: () => <SiMongodb></SiMongodb>
      },
      {
        name:"prisma",
        reactIcon: () =><SiPrisma></SiPrisma>  
      },
      {
        name:"sql",
        reactIcon: () => <TbSql></TbSql>
      }
    ]
},
{
    id:3,
    title:"Others",
    colorTheme:"#d52941",
    tecnologies:[
      {
      name:"linux",
      reactIcon:() => <FaLinux />,
      },
      {
        name:"git",
        reactIcon: () => <FaGitAlt></FaGitAlt>
      },
      {
        name: "webpack",
        reactIcon: () =><SiWebpack></SiWebpack>
      },
      {
        name:"esLint",
        reactIcon : () =><SiEslint></SiEslint>
      },
      {
        name:"bash",
        reactIcon: () => <SiGnubash></SiGnubash>
      },
      {
        name:"python",
        reactIcon: () => <FaPython></FaPython>
      },
      {
        name:"cplusplus",
        reactIcon: () => <SiCplusplus></SiCplusplus>
      }
    ]
}
]

const Skills = () => {

  const renderBar = (skill) =>{
    if(skill.id !== skillData.length){
      return <hr className={styles.sep_bar}></hr>
    }
    return;
  }

  return (
    <div className={styles.skill_conteiner}>
      <h3>My Skills</h3>
      <div className={styles.skills}>
        {skillData.map((skill => {
            return ( 
              <div className={styles.skill} key={skill.id}>
                    <div className={styles.skill}>
                      <h3 >{skill.title}</h3>
                      <hr className={styles.bar} style={{borderColor:skill.colorTheme}}/>
                      <ul>
                        {skill.tecnologies.map(tecnology => {
                          return (<li key={tecnology.name} className={styles.tecnologies}><IconContext.Provider value={{size:"32px"}}>{tecnology.reactIcon()} </IconContext.Provider > </li>)
                        })}
                      </ul>
                    </div>
                    {renderBar(skill)}
              </div>
            )
          }))
        }
      </div>
    </div>
  )
}

export default Skills