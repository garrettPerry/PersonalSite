import NavBar from '../Components/HomePage/NavBar/NavBar.tsx';
import gandalfImage from '../Assets/AssetPhotos/Gandalf.png';

function Homepage() {
return (
    <>
    <header> <NavBar /> </header>
    <main className="homepage-body">
        <p> 404 this page broke </p>
        <img src={gandalfImage} alt="Gandalf contemplating his mistakes"></img>
    </main>
    </>
);
}

export default Homepage