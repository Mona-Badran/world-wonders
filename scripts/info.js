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
                }
                if (name === param) {
                    if (element === "links") {
                        links_object = wonder[element];
                        images_src_arr = Object.values(links_object.images);

                        const imageContainer = document.getElementById("imageContainer");
                        images_src_arr.forEach(src => {
                            const img = document.createElement("img");
                            img.src = src;
                            img.style.width = "200px";
                            imageContainer.appendChild(img);
                        });
                        wiki_link = links_object.wiki;
                        britannica_link = links_object.britannica;
                        google_maps_link = links_object.google_maps;
                        trip_advisor_link = links_object.trip_advisor;

                    }
                    if (element === "summary") {
                        summary = wonder[element];
                        // console.log("summary: " + summary);
                    }
                    if (element === "location") {
                        location = wonder[element];
                        // console.log("location: " + wonder[element]);
                    }
                    if (element === "build_year") {
                        build_year = wonder[element];
                        // console.log("build_year: " + wonder[element]);
                    }
                    if (element === "time_period") {
                        time_period = wonder[element];
                        // console.log("time_period: " + wonder[element]);
                    }
                    const heading = document.createElement("h1");
                    heading.textContent = name;
                    document.body.prepend(heading);

                    const detailsContainer = document.createElement("div");
                    detailsContainer.classList.add("detailsContainer");

                    detailsContainer.innerHTML = `
                        <p><strong>Summary:</strong> ${summary}</p>
                        <p><strong>Location:</strong> ${location}</p>
                        <p><strong>Build Year:</strong> ${build_year}</p>
                        <p><strong>Time Period:</strong> ${time_period}</p>
                        <p><strong>Wikipedia:</strong> <a href="${wiki_link}" target="_blank">View</a></p>
                        <p><strong>Britannica:</strong> <a href="${britannica_link}" target="_blank">View</a></p>
                        <p><strong>Google Maps:</strong> <a href="${google_maps_link}" target="_blank">View</a></p>
                        <p><strong>TripAdvisor:</strong> <a href="${trip_advisor_link}" target="_blank">View</a></p>
                    `;
                    document.body.appendChild(detailsContainer);
                    return;
                }
            });

        });
    };

    fetchWorldWonders();
});
