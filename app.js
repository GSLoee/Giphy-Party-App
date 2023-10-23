// console.log("Let's get this party started!");
const searchBar = $("#search-bar")
const submit = $("#search-btn")
const gifContainer = $(".gif-container")
$("form").on('submit', function(e){
    e.preventDefault(); 
    const search = searchBar.val()
    searchBar.val('')
    async function getApi() {
        const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
            params: {
                api_key:'tIzgI3EOpkIGETbE5H17GBRh5RNHldPC',
                q: search
            }
        })
        console.log(res.data);
        appendGif(res.data); 
    }
    getApi()
})

function appendGif(res) {
    const gifArray = res.data.length
    const randomGif = Math.floor(Math.random() * gifArray);
    const $img = $("<img>", {
        src: res.data[randomGif].images.original.url
    })
    gifContainer.append($img)
}

$("#remove").on('click', function(){
    gifContainer.empty()
})
