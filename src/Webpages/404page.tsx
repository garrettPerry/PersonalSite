import NavBar from '../Components/HomePage/NavBar/NavBar.tsx';


function Homepage() {
return (
    <>
    <header> <NavBar /> </header>
    <main className="homepage-body">
        <p> 404 this page broke </p>
        <img src="src/Assets/AssetPhotos/Gandalf.png" alt="Gandalf contemplating his mistakes"></img>
    </main>
    </>
);
}

export default Homepage