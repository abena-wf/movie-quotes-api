document.querySelector('.search').addEventListener('click', apiRequest)

async function apiRequest(){
    const movieGenre = document.querySelector('input').value 
    try{
        const response = await fetch(`http://localhost:8000/${movieGenre}`)
        const data = await response.json()

        console.log(data)
        for(let i=0; i< data.one.length; i++){
            const li = document.createElement('li')
            li.innerText= '~  '+ data.one[i] 
            li.style.listStyle= 'none'
            li.style.marginBottom= '20px'
            li.style.fontSize= '16px'
            document.querySelector('ul').appendChild(li)
        }
    }catch(err){
        console.log(`Error ${err}`)
        /*const li = document.createElement('li')
        li.innerText='Not found'
        li.style.listStyle= 'none'
        document.querySelector('ul').appendChild(li)*/

    }
}
//finally worked after MONTHS! 
//const holding objects were not in json
//made res.data displayed as json with the array embeded instead of the raw array
//used forEach(el) instead of forEach(el, i) (needed the i to iterate with not the el) or just a simple for loop
//did not even think of changing the forEach loop
