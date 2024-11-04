document.addEventListener("DOMContentLoaded", () => {

    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('param');
    console.log(param);

    const instance = axios.create({
        baseURL: "https://www.world-wonders-api.org/v0"
    });
    const fetchWorldWonders = async () => {
        const response = await instance.get("/wonders");

        response.data.forEach(wonder => {

            let name = "";
            let links_object = "";
            let images_src_arr = [];
            let summary = "";
            let location = "";
            let build_year = "";
            let time_period = "";
            let wiki_link = "";
            let britannica_link = "";
            let google_maps_link = "";
            let trip_advisor_link = "";

            Object.keys(wonder).forEach(element => {
                if (element === "name") {
                    name = wonder[element];
                    console.log("Name: " + wonder[element]);
                }
                if (element === "summary") {
                    summary = wonder[element];
                    console.log("summary: " + wonder[element]);
                }
                if (element === "location") {
                    location = wonder[element];
                    console.log("location: " + wonder[element]);
                }
                if (element === "build_year") {
                    build_year = wonder[element];
                    console.log("build_year: " + wonder[element]);
                }
                if (element === "time_period") {
                    time_period = wonder[element];
                    console.log("time_period: " + wonder[element]);
                }
                if (element === "links") {
                    links_object = wonder[element];
                    wiki_link = links_object.wiki;
                    britannica_link = links_object.britannica;
                    google_maps_link = links_object.google_maps;
                    trip_advisor_link = links_object.trip_advisor;

                    // console.log("trip_advisor_link: " + trip_advisor_link);
                    // console.log("britannica_link: " + britannica_link);
                    // console.log("google_maps_link: " + google_maps_link);

                    // console.log("images: " + typeof links_object.images);

                    images_src_arr = Object.values(links_object.images);
                    // console.log("images arr: " + typeof images_src_arr);

                    const imageContainer = document.getElementById("imageContainer");
                    images_src_arr.forEach(src => {
                        const img = document.createElement("img");
                        img.src = src;
                        img.style.width = "200px";
                        imageContainer.appendChild(img);
                    });

                }
            });
            // let card = document.createElement("div")
            // card.classList.add("card");
            // card.innerHTML = `
            // <img src="${imagesrc}" alt="World Wonder Image" class = "imageContainer">
            // <div class="container">
            //     <h2>${name}</h2>
            //     <button class = "btn" onclick="window.location.href='${link}'">More Info</button>
            // </div>
            // `;

            // cardsContainer.innerHTML += card.outerHTML;

        });
    };

    fetchWorldWonders();
});
