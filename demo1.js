function getData() {
    return new Promise(resolve=>{
        setTimeout(
            ()=>{
                resolve("还是延迟了，非常完美")
            },3000)
    })
}
async function awaitData(params) {
    const v = await getData()
    console.log(v)

}

awaitData()