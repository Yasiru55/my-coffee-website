function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p>WELCOME TO AMAYU CAFE</p>

                <h1>Fresh Coffee,<br />Made With Love</h1>

                <p>
                    Enjoy freshly brewed coffee, delicious treats,
                    and unforgettable moments in a warm and relaxing atmosphere.
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