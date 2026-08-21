import Banner from '../Components/HomePage/Banner/BannerPanel.tsx';
import NavBar from '../Components/HomePage/NavBar/NavBar.tsx';


function Homepage() {
return (
    <>
    <header> <NavBar /> </header>
    <main className="homepage-body">
        <Banner />
    </main>
    </>
);
}

export default Homepage