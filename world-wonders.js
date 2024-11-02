document.addEventListener("DOMContentLoaded", () => {
    console.log("World Wonders");

    const instance = axios.create({
        baseURL: "https://www.world-wonders-api.org/v0"
    });

    const fetchWorldWonders = async () => {
        const response = await instance.get("/wonders");
        response.data.forEach(wonder => {
            Object.keys(wonder).forEach(element => {
                if (element === "name")
                    console.log("Name: " + wonder[element]);
                if (element === "summary")
                    console.log("Summary: " + wonder[element]);
                if (element === "links") {
                    let links = wonder[element];
                    console.log("Link: " + Object.values(links)[0]);

                    let imageContainer = document.getElementById("imageContainer")
                    let imagesrc = Object.values(links)[4][1]
                    console.log("Image: " + imagesrc);

                    let imgElement = document.createElement("img");
                    imgElement.src = imagesrc;
                    imgElement.alt = "World Wonder Image";

                    imageContainer.appendChild(imgElement);
                }
            });
        });
    };

    fetchWorldWonders();
});