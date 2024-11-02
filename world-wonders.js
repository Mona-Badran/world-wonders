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
            if (element === "links"){
                const links = wonder[element];
                console.log("Link: " + Object.values(links)[0]);
                console.log("Image: " + Object.values(links)[4][1]);
            }
        });
    });
};

fetchWorldWonders();
