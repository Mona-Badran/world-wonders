console.log("World Wonders");

const instance = axios.create({
    baseURL: "https://www.world-wonders-api.org/v0"
});

const fetchWorldWonders = async () => {
    const response = await instance.get("/wonders");
    response.data.forEach(element => {
        console.log(typeof element)
    });

    // let worldWonders = response.data[keysWorldWonders[i]];
    // for (let j = 0; j < worldWonders.length; j++) {
    //     console.log(worldWonders[Object.keys(worldWonders)[i]]);
    // }

};
fetchWorldWonders();
