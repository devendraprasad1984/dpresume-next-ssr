const getFromApi = async (url, callback) => {
    // let res = await fetch(url)
    // let data = await res.json()
    // // console.log('DATA',data)
    // callback(data)
    fetch(url).then(res => res.json()).then(data => callback(data)).catch(err => callback(err))
}
export default getFromApi
