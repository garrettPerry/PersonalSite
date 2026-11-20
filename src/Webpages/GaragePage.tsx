import NavBar from "../Components/HomePage/NavBar/NavBar";

function Homepage() {
return (
    <>
    <header> <NavBar /> </header>
    <main className="garage-body">    
        <div className="garageCarSelect">car select</div>
        <div className="garageContent">main content</div>
        <div className="garagePhoto">photo select</div>
    </main>
    </>
);
}

export default Homepage