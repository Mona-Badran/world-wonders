console.log("World Wonders");

const instance = axios.create({
    baseURL : "https://www.world-wonders-api.org/v0"
});

const fetchWorldWonders = async()=>{
    const response = await instance.get("/wonders")
    console.log(typeof response.data)
};
fetchWorldWonders();
