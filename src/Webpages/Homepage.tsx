import Banner from '../Components/HomePage/Banner/BannerPanel.tsx';
import AboutMe from '../Components/HomePage/AboutMe/AboutPanel.tsx';
import PhotoOfTheDay from '../Components/HomePage/Photo/PhotoPanel.tsx';
import Webring from '../Components/HomePage/Webring/WebringPanel.tsx';
import Projects from '../Components/HomePage/Projects/ProjectsPanel.tsx';
import Weather from '../Components/HomePage/Weather/WeatherPanel.tsx';
import Visitors from '../Components/HomePage/VisitorCounter/VisitorPanel.tsx'
import Guestbook from '../Components/HomePage/Guestbook/GuestbookPanel.tsx';
import NavBar from '../Components/HomePage/NavBar/NavBar.tsx';


function Homepage() {
return (
    <>
    <header> <NavBar /> </header>
    <main className="homepage-body">
        <Banner />
        <AboutMe />
        <PhotoOfTheDay />
        <Weather />
        <Projects />
        <Visitors />
        <Guestbook />
        <Webring />
    </main>
    </>
);
}

export default Homepage