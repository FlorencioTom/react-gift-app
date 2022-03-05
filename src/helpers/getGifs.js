export const getGifs = async(category) => {
    var url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=qyLtPVkZpGFICBnzcYGk4vbvP7QNf18D`;
    var resp = await fetch(url);
    var {data} = await resp.json();
    var gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;  
} 