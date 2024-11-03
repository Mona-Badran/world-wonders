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
            let summary = "";
            let linksObject = "";
            let link = "";
            let imagesrc = "";

            Object.keys(wonder).forEach(element => {
                if (element === "name") {
                    name = wonder[element];
                    console.log("Name: " + wonder[element]);
                }
                if (element === "summary") {
                    summary = wonder[element];
                    console.log("Summary: " + wonder[element]);
                }
                if (element === "links") {
                    linksObject = wonder[element];
                    link = Object.values(linksObject)[0];
                    console.log("Link: " + Object.values(linksObject)[0]);

                    imagesrc = Object.values(linksObject)[4][1]
                    // console.log("Image: " + imagesrc);

                    // let imageContainer = document.getElementById("imageContainer")
                }
            });
            let card = document.createElement("div")
            card.classList.add("card");
            card.innerHTML = `
            <img src="${imagesrc}" alt="World Wonder Image" class = "imageContainer">
            <div class="container">
                <h2>${name}</h2>
                <button class = "btn">More Info</button>
            </div>
            `;
            // let imgElement = document.createElement("img");
            // imgElement.src = imagesrc;
            // imgElement.alt = "World Wonder Image";
            // imageContainer.appendChild(imgElement);

            cardsContainer.innerHTML += card.outerHTML;

        });
    };

    fetchWorldWonders();
});