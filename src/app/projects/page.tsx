import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "weather app",
      description:
        "To summarize and brief in short, Weather App is the application of science and technology to predict the conditions of the atmosphere for a given location and time. ",
      tags: ["Reactjs", "javascript", "bootstrap"],
      link: "https://eh-weather.vercel.app/",
    },
    {
      title: "PasswordGenerator",
      description:
        "PasswordGenerator is a simple platform where user can create a personalized page to showcase all your social media profiles in one place. ",
      tags: ["bootstrap", "reactjs"],
      link: "https://eh-password-generator.vercel.app/",
    },
    {
      title: "Crud-App",
      description:
        "This is a simple CRUD app made with reactjs and bootstrap. ",
      tags: ["bootstrap", "reactjs"],
      link: "https://eh-crud-react.vercel.app/",
    },
    {
      title: "Mern-Stack-Event-Project",
      description:
        "This is mern-stack app with a Collection of reactjs Components - (Currently under Devlelopment) ",
      tags: ["reactjs", , "Npx","Library"],
      link: "http://eh-mern-stack-project.vercel.app",
    },
    
    
    {
      title: "Dice Game",
      description:
    " Dice game used in gambling and in various social games by being shaken and thrown down to come to rest at random on a flat surface. ",
      tags: ["reactjs", "tailwindcss", "supabase"],
      link: "https://eh-dice-game-reactjs.vercel.app/",
    },

    
    {
      title: "foody-zone",
      description:
        "This is mern-stack app with a Collection of reactjs Components - (Currently under Devlelopment) ",
      tags: ["reactjs", , "Npx","Library"],
      link: "https://github.com/ehrazhussain/foodyzone-4",
      
    },



    {
      title: "Contact Form",
      description:
        "This is mern-stack app with a Collection of reactjs Components - (Currently under Devlelopment) ",
      tags: ["reactjs", , "Npx","Library"],
      link: "https://github.com/ehrazhussain/contact-page",
      
    },
    

    
    {
      title: "firebase-save-reactjs",
      description:
        "This is mern-stack app with a Collection of reactjs Components - (Currently under Devlelopment) ",
      tags: ["reactjs", , "Npx","Library"],
      link: "https://firebase-5.vercel.app/",
      
    },





    {
      title: "Currency-Dashboard",
      description:
        "This is mern-stack app with a Collection of reactjs Components - (Currently under Devlelopment) ",
      tags: ["reactjs", , "Npx","Library"],
      link: "https://dashboard-6-ten.vercel.app/",
      
    },

  ];

  
 

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
