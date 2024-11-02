console.log("World Wonders");

const instance = axios.create({
    baseURL : "https://www.world-wonders-api.org/v0"
});

const fetchWorldWonders = async()=>{
    const response = await instance.get("/wonders")
    let worldWonders = response.data;
    let keys = Object.keys(response.data);
    for(let i = 0; i < worldWonders.length; i++){
        console.log(worldWonders[keys[i]])
    }
    console.log(worldWonders)
};
fetchWorldWonders();
