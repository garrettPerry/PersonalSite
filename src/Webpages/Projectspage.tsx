import NavBar from "../Components/HomePage/NavBar/NavBar";
import ProjectCard from "../Components/ProjectsPage/ProjectCard/ProjectCard";
import ViewSettings from "../Components/ProjectsPage/ViewSettings/ViewSettings";

function Projectspage() {
       //Each project gets a cardContent# const as an array. Split so the read more button works
       const cardContentNOC =
              "The main use of this software is to speed up daily tasks used at the Service Desk such as remoting and pinging computers, as well as interfacing with other software that is frequently used such as Goverlan, Ultra VNC, Bigfix, ServiceNow, BeyondTrust and others. Some other common uses are clocking in and out for the day, connecting to status boards which are used to track phone calls and providing convenient links to applications. This software was created in 2007 and has been in continuous use since, changing over the years to add new features or remove deprecated. The tool was written in Visual Basic 6 and was used in that form until I took over development in 2025. I learned Visual Basic syntax, but there was concern that future hires who may be able to maintain the tool would not know or want to learn visual basic, so I ported it to C# which was a much more straightforward process than I initially expected.\n\nSome new employees found the tool overwhelming when starting out, so I actually attempted to redesign the tool to clear up the visual clutter. Many people that had been at the Service Desk for years did not want the original tool changed, so I developed both concurrently. The new tool was split into four pages, with the goal of only having to change pages once or twice per day and included custom buttons on the home page that could be mapped to features found on other pages. In the end, having two versions of the same tool was increasing complexity with minimal payoff and split the user base into two groups. Since the new version was less popular I scrapped its development and had the users of the redesign mo,ve to the original tool. LESSON LEARNED: Don't fix what ain't broke. Here's a few of the features I've added: \n\n 1. Sped up communication with Goverlan, reducing delay between button press and Goverlan connection attempts from ~2 seconds to near instant. \n2. Implemented a log file that tracks button presses, which user pressed it, when it was pressed and the current software version.  \n3. Automatically checks for updates on launch and prompts user to . Previously new versions had to be manually pulled from a remote drive.  \n4. Administrators set the default browser to Edge in windows, implemented a system to change the default browser for any links opened from the tool. \n5. Plenty more small changes, bug fixes and optimizations. ";
       const loremIpsum = 
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula dui ut velit semper, eu condimentum justo sagittis. Etiam elementum purus pulvinar, faucibus urna in, finibus velit. Sed viverra accumsan vestibulum. Praesent odio ligula, ultrices quis nunc et, pellentesque sollicitudin lacus. Quisque pellentesque, diam sed bibendum interdum, magna mi aliquam metus, nec vehicula mauris libero in quam. Nam ut aliquet diam, et iaculis enim. Duis malesuada eleifend augue ultricies sodales. Aliquam id placerat tortor. Morbi tincidunt neque et tortor eleifend maximus. Curabitur faucibus mauris auctor mauris ultricies, at volutpat nunc vestibulum.\n Aliquam laoreet neque quis lobortis viverra. Cras non posuere libero, ac elementum nibh. Nunc nunc ligula, aliquet et finibus ac, tristique sed ligula. Vivamus vitae sagittis nunc. Fusce dignissim non risus vitae suscipit. In hac habitasse platea dictumst. Fusce eu dui sem. Vestibulum nulla est, tempor nec justo at, ultrices scelerisque justo. Maecenas sit amet lectus eu lorem iaculis sagittis finibus vel magna. Donec malesuada, ante ut elementum commodo, magna dolor tristique justo, at placerat ex nisl iaculis enim. Mauris sit amet nisl vel nunc semper consectetur non sit amet ex. Sed magna massa, euismod vel gravida at, imperdiet ac est. \n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris facilisis felis pulvinar efficitur feugiat. Curabitur eros magna, mattis nec viverra sed, convallis sed nunc. Nullam feugiat, lectus ac rhoncus ultricies, augue magna pharetra dolor, vel aliquam mauris leo a nunc. Pellentesque eu urna ultrices leo viverra scelerisque. In sed sem luctus, sodales mi quis, scelerisque lectus. Phasellus convallis feugiat leo, et ullamcorper magna efficitur facilisis. Phasellus a felis et risus ultricies viverra. Donec feugiat nibh metus, et facilisis dolor elementum ac. Nullam quis sodales tortor, at egestas lorem. Etiam in ex sed tellus ultrices eleifend a sit amet ex. Sed fringilla interdum justo, et tincidunt odio feugiat quis. Nunc volutpat vitae turpis sed egestas. Donec non ex a nisl ornare euismod ac vitae lacus. Nullam pharetra ante eget tortor vestibulum, quis auctor nibh sollicitudin. ";



return(
       <>
       <header> <NavBar /> </header>
       <div className="projectspage-body">
              <ProjectCard content={cardContentNOC} />
              <ProjectCard content={loremIpsum}/>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
       </div>
       <footer> <ViewSettings /> </footer>

       </>
);
}

export default Projectspage