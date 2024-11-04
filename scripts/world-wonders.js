document.addEventListener("DOMContentLoaded", () => {
    console.log("World Wonders");

    const instance = axios.create({
        baseURL: "https://www.world-wonders-api.org/v0"
    });

    const fetchWorldWonders = async () => {
        const response = await instance.get("/wonders");

        const cardsContainer = document.getElementById("cardsContainer");

        response.data.forEach(wonder => {

            let name = "";
            let linksObject = "";
            let link = "";
            let imagesrc = "";

            Object.keys(wonder).forEach(element => {
                if (element === "name") {
                    name = wonder[element];
                    console.log("Name: " + wonder[element]);
                }
                if (element === "links") {
                    linksObject = wonder[element];
                    link = Object.values(linksObject)[0];
                    console.log("Link: " + Object.values(linksObject)[0]);

                    imagesrc = Object.values(linksObject)[4][1]
                }
            });

            let param = name;
            let url = `info.html?param=${encodeURIComponent(param)}`;

            let card = document.createElement("div")
            card.classList.add("card");
            card.innerHTML = `
            <img src = "${imagesrc}" alt = "World Wonder Image" class = "imageContainer">
            <div class = "container">
                <h2>${name}</h2>
                <button class = "btn" onclick = "window.location.href = '${url}'">More Info</button>
            </div>
            `;

            cardsContainer.innerHTML += card.outerHTML;

        });
    };

    fetchWorldWonders();
});