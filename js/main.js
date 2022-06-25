document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    try{
        const movieGenre = document.querySelector('input').value;
        const response = await fetch(`https://localhost:8080/api/${movieGenre}`);
        const data = await response.json();

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