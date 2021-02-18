if (!("ontouchstart" in window)) {
    document.head.appendChild((() => {
        const element  = document.createElement("link");
        element.href = "/styles/intothegarden.css";
        element.rel = "stylesheet"
        return element;
    })());

    window.onload = () => {
        const getGardenButton = () => document.getElementById("into-the-garden");

        getGardenButton().parentNode.replaceChild((() => {
            const element = document.createElement("a");
            element.innerHTML = `
                <ul>
                    <li>into the garden</li>
                    <li>hasta el jardín</li>
                    <li>vers le jardin</li>
                    <li>para o jardim</li>
                    <li>in i trädgården</li>
                </ul>
            `;
            
            element.href = "/notes/";
            element.id = "into-the-garden";
            return element;
        })(), getGardenButton());

        const gardenOptions = getGardenButton().getElementsByTagName("ul")[0];

        gardenOptions.addEventListener("mouseenter", event => event.target.style.marginTop = -Math.floor(Math.random() * 4 + 1) * 1.5 + "em")

        gardenOptions.addEventListener("mouseleave", event => event.target.style.marginTop = 0);
    };
}