function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p>Welcome to My Coffee</p>

                <h1>Fresh Coffee,<br />Made With Love</h1>

                <p>
                    Enjoy freshly brewed coffee and delicious treats
                    in a warm and relaxing place.
                </p>

                <button onClick={() => {
                    document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                    });
                }}>
                    Explore Our Menu
                </button>
            </div>
        </section>
    );
}

export default Hero;