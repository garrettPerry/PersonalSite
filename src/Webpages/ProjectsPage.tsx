import { useState } from "react";
import NavBar from "../Components/HomePage/NavBar/NavBar";
import ProjectCard from "../Components/ProjectsPage/ProjectCard/ProjectCard";
import ZoomedImage from "../Components/ProjectsPage/ZoomedImage/ZoomedImage";
function Projectspage() {
//Each project gets a cardContent# const as an array. Split so the read more button works
const cardHeaderNOC = "Service Desk Remote Tool";
const cardContentNOC1 =
       "The main use of this software is to speed up daily tasks used at the Service Desk such as remoting and pinging computers, as well as interfacing with other software that is frequently used such as Goverlan, Ultra VNC, Bigfix, ServiceNow, BeyondTrust and others. Some other common uses are clocking in and out for the day, connecting to status boards which are used to track phone calls and providing convenient links to applications. This software was created in 2007 and has been in continuous use  since, changing over the years to add new features or remove deprecated. The tool was written in Visual Basic 6 and was used in that form until I took over development in 2025. I learned Visual Basic syntax, but there was concern that future hires who may be able to maintain the tool would not know or want to learn visual basic, so I ported it to C# which was a much more straightforward process than I ";
const cardContentNOC2 = 
       "initially expected.\n\nSome new employees found the tool overwhelming when starting out, so I actually attempted to redesign the tool to clear up the visual clutter. Many people that had been at the Service Desk for years did not want the original tool changed, so I developed both concurrently. The new tool was split into four pages, with the goal of only having to change pages once or twice per day and included custom buttons on the home page that could be mapped to features found on other pages. In the end, having two versions of the same tool was increasing complexity with minimal payoff and split the user base into two groups. Since the new version was less popular I scrapped its development and had the users of the redesign mo,ve to the original tool. LESSON LEARNED: Don't fix what ain't broke. Here's a few of the features I've added: \n\n1. Sped up communication with Goverlan, reducing delay between button press and Goverlan connection attempts from ~2 seconds to near instant. \n2. Implemented a log file that tracks button presses, which user pressed it, when it was pressed and the current software version. \n3. Automatically checks for updates on launch and prompts user to . Previously new versions had to be manually pulled from a remote drive. \n4. Administrators set the default browser to Edge in windows, implemented a system to change the default browser for any links opened from the tool. \n5. Plenty more small changes, bug fixes and optimizations.";
const mainPhotoNOC = [
       "src/Assets/ProjectPhotos/NocTool/NocTool.png",
       "src/Assets/ProjectPhotos/NocTool/NocRedesign1.png",
       "src/Assets/ProjectPhotos/NocTool/NocRedesign2.png",
       "src/Assets/ProjectPhotos/NocTool/NocRedesign3.png",
       "src/Assets/ProjectPhotos/NocTool/NocRedesign4.png",
];
<<<<<<< HEAD
=======


>>>>>>> f4c000e (Project image navigation and re-did the color palette)

//GPERRY.LIVE

const cardHeaderSite = "gperry.live";
<<<<<<< HEAD
const cardContentSite1 = "The site you are currently on";
const cardContentSite2 = "\ntest2";
=======


const cardContentSite1 = 
       "This website is a standard react project using HTML, CSS and Typescript. It has no real purpose, being somewhere between coding practice, personal online storage and a resume. Although I did work on a React project in college (see below), I never worked on the front end, mainly doing database work and making sure data flowed between the pages. As you can see this site is far more focused on aesthetics than data flow and functionality but I also have a terrible eye for aesthetics which leaves me quite the conundrum. I spent a lot of time scrolling through webrings of different people’s personal websites, and while I appreciate the whimsy of many people’s sites, I was looking for mine to be a bit more minimalist and cohesive, hence the design you see here.";

const cardContentSite2 = 
       "\n\nRegardless of my own creative limitations, I wanted to create a website that combined modern minimal style with some web 2.0 charm. The two inspirations for the home page is my favorite modern design language, Microsoft’s Metro, and the Australia INfront 2003 site. <link>  Metro, despite its flawed implementation in Windows 8, had a lot of potential and I’m still a big fan of the solid obvious geometry and clear distinction between different functionality. The INfront site inspiration was for similar reasons, each aspect of the site is clearly broken down in different areas and I love the look of a site that looked very futuristic in the early 2000’s. Although Metro’s initial implementation does look admittedly dated, its strange to think my modern inspiration and retro inspiration were only released 7 years apart, yet they look and feel so different.\n\nThis website is going to be a work in progress likely until I cease development, there is a lot of functionality that isn’t yet finished and I’m sure I’ll come up with new idea much faster than I’ll be able to implement them. If you have any ideas or comments about the site, let me know in the guestbook<link> or shoot me an email at webmaster@gperry.live<link>" + "";

//https://www.webdesignmuseum.org/gallery/australian-infront-2003


>>>>>>> f4c000e (Project image navigation and re-did the color palette)

//MISC IMAGES FOR TESTING
const mainPhotoMisc = [
       "src/Assets/AssetPhotos/Gandalf.png", 
       "src/Assets/PhotoOfTheDay/tobe1.jpg", 
       "src/Assets/PhotoOfTheDay/tree.jpg"];

//Set up zoomed image functionality
const [imageArray, setImageArray] = useState(mainPhotoMisc);
function openZoom(imagePath: string[]) {
       var imageContainer = document.querySelector(".image-container") as HTMLElement;
       imageContainer.style.display = "block";
       
       setImageArray(imagePath);
       var imageElement = document.querySelector(".zoomed-image") as HTMLImageElement;
       imageElement.src = imagePath[0];
}


return(
       <>
       <header> <NavBar /> </header>
       <div className="projectspage-body">
              <ProjectCard 
                     header = {cardHeaderNOC}
                     content={cardContentNOC1} 
                     moreContent = {cardContentNOC2} 
                     photoArray={mainPhotoNOC}
                     openZoom={openZoom}/>
              <ProjectCard 
                     header = {cardHeaderSite}
                     content={cardContentSite1} 
                     moreContent = {cardContentSite2}
                     photoArray={mainPhotoMisc}
                     openZoom={openZoom}/>
              <ProjectCard 
                     header = {cardHeaderNOC}
                     content={cardContentNOC1} 
                     moreContent = {cardContentNOC2} 
                     photoArray={mainPhotoMisc}
                     openZoom={openZoom}/>
              <ProjectCard 
                     header = {cardHeaderNOC}
                     content={cardContentNOC1} 
                     moreContent = {cardContentNOC2} 
                     photoArray={mainPhotoMisc}
                     openZoom={openZoom}/>
              <ProjectCard 
                     header = {cardHeaderNOC}
                     content={cardContentNOC1} 
                     moreContent = {cardContentNOC2} 
                     photoArray={mainPhotoMisc}
                     openZoom={openZoom}/>
              
       </div>
       <ZoomedImage imageArray={imageArray} />
       </>
);
}

export default Projectspage