const func = async () => {
    const response = await window.versions.ping()
    document.getElementById('info').innerText = response
}

setInterval(() => {
    func()
},1000)