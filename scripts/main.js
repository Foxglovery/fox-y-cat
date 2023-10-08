fetch("https://randomfox.ca/floof/")
    .then(response => response.json())
    .then(
        (convertedData) => {
            const foxImgEl = document.querySelector("#fox")
            foxImgEl.src = convertedData.image
        }
    )

const getCat =  async () => {
    const response = await fetch(`http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false`)
    const convertedData = await response.json()
    const catImgEl = document.querySelector("#cat")
    catImgEl.src = convertedData[0]
}

getCat()