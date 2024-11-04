
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
            let name = wonder.name;

            if (name === param) {
                if (!document.querySelector("h1")) {
                    const heading = document.createElement("h1");
                    heading.textContent = name;
                    document.body.prepend(heading);
                }

                const links = wonder.links || {};
                const imagesSrcArr = Object.values(links.images || {});
                const imageContainer = document.getElementById("imageContainer");

                imageContainer.innerHTML = "";

                imagesSrcArr.forEach(src => {
                    const img = document.createElement("img");
                    img.src = src;
                    img.style.width = "200px";
                    imageContainer.appendChild(img);
                });

                const detailsContainer = document.querySelector(".detailsContainer") || document.createElement("div");
                detailsContainer.classList.add("detailsContainer");
                detailsContainer.innerHTML = `
                    <p><strong>Summary:</strong> ${wonder.summary || ''}</p>
                    <p><strong>Location:</strong> ${wonder.location || ''}</p>
                    <p><strong>Build Year:</strong> ${wonder.build_year || ''}</p>
                    <p><strong>Time Period:</strong> ${wonder.time_period || ''}</p>
                    <p><strong>Wikipedia:</strong> <a href="${links.wiki || '#'}" target="_blank">View</a></p>
                    <p><strong>Britannica:</strong> <a href="${links.britannica || '#'}" target="_blank">View</a></p>
                    <p><strong>Google Maps:</strong> <a href="${links.google_maps || '#'}" target="_blank">View</a></p>
                    <p><strong>TripAdvisor:</strong> <a href="${links.trip_advisor || '#'}" target="_blank">View</a></p>
                `;
                document.body.appendChild(detailsContainer);

                return;
            }
        });
    };

    fetchWorldWonders();
});