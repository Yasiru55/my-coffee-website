function Menu() {
    const coffeeItems = [
        {
            name: "Cappuccino",
            description: "Rich espresso with steamed milk and foam.",
            price: "$4.50",
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
        },
        {
            name: "Latte",
            description: "Smooth espresso blended with creamy milk.",
            price: "$4.00",
            image: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
        },
        {
            name: "Americano",
            description: "Bold espresso combined with hot water.",
            price: "$3.50",
            image: "https://images.unsplash.com/photo-1551030173-122aabc4489c",
        },
        {
            name: "Mocha",
            description: "Chocolate, espresso, and steamed milk.",
            price: "$4.75",
            image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e",
        },
    ];

    return (
        <section className="menu" id="menu">
            <div className="menu-heading">
                <p className="section-label">OUR MENU</p>
                <h2>Choose Your Favorite</h2>
                <p>Freshly prepared coffee for every mood.</p>
            </div>

            <div className="menu-grid">
                {coffeeItems.map((item) => (
                    <div className="menu-card" key={item.name}>
                        <img
                            src={item.image}
                            alt={item.name}
                            className="coffee-image"
                        />

                        <h3>{item.name}</h3>

                        <p>{item.description}</p>

                        <strong>{item.price}</strong>

                        <button
                            className="order-button"
                            onClick={() => alert(`${item.name} added to your order!`)}
                        >
                            Order Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Menu;