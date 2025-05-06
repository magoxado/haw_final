import React from "react";

const CsoportokPage = () => {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>Művészetterápia Csoportok</h1>
            <p>
                Üdvözöljük a művészetterápiás csoportok oldalán! Itt talál információkat a jelenleg elérhető csoportokról, időpontokról és jelentkezési lehetőségekről.
            </p>
            <section>
                <h2>Elérhető csoportok</h2>
                <ul>
                    <li>Felnőtt művészetterápiás csoport - Hétfő 18:00</li>
                    <li>Gyermek művészetterápiás csoport - Szerda 16:00</li>
                    <li>Online csoport - Péntek 17:00</li>
                </ul>
            </section>
        </main>
    );
};

export default CsoportokPage;