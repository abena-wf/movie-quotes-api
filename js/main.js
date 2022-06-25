document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const movieGenre = document.querySelector('input').value
    try{
        const response = await fetch(`https://a-movie-quotes-api.herokuapp.com/api/${movieGenre}`)
        const data = await response.json()

        console.log(data)
        data.forEach(el =>{
            const li = document.createElement('li')
            li.innerText = '~ '+ el
            document.querySelector('ul').appendChild(li)
        
        })
    }catch(err){
        console.log(err)
    }
}