if (!("ontouchstart" in window)) {
    document.head.appendChild(html`
        <link rel="stylesheet" href="/styles/into-the-garden.css">
    `);

    window.onload = () => {
        const getGardenButton = () => document.getElementById("into-the-garden");
        
        getGardenButton().parentNode.replaceChild(html`
            <a href="notes" id="into-the-garden">
                <ul>
                    <li>into the garden</li>
                    <li>hacia el jardín</li>
                    <li>vers le jardin</li>
                    <li>para o jardim</li>
                    <li>in i trädgården</li>
                </ul>
            </a>
        `, getGardenButton());

        const gardenOptions = getGardenButton().getElementsByTagName("ul")[0];

        gardenOptions.addEventListener("mouseenter",
            event => event.target.style.marginTop = -Math.floor(Math.random() * 4 + 1) * 1.5 + "em"
        );

        gardenOptions.addEventListener("mouseleave",
            event => event.target.style.marginTop = 0
        );
    };
}
