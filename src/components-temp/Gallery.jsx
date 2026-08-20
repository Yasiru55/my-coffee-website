import { useState } from "react";

function Gallery() {
    const images = [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="gallery" id="gallery">

            <div className="gallery-heading">
                <p className="section-label">OUR SPACE</p>

                <h2>Inside My Coffee</h2>

                <p>
                    A warm place to relax and enjoy your favorite coffee.
                </p>
            </div>

            <div className="gallery-grid">

                {images.map((image, index) => (
                    <div
                        className="gallery-item"
                        key={index}
                        onClick={() => setSelectedImage(image)}
                    >
                        <img
                            src={image}
                            alt={`Coffee shop ${index + 1}`}
                        />
                    </div>
                ))}

            </div>

            {selectedImage && (
                <div
                    className="gallery-modal"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="gallery-close"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>

                    <img
                        src={selectedImage}
                        alt="Selected coffee shop"
                        className="gallery-large-image"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}

        </section>
    );
}

export default Gallery;