//https://jsonplaceholder.typicode.com/posts

// Mode Dark & Light

const Click = () => {
    const botaoM = document.getElementById('BotaoM')
    const body = document.querySelector('body');
    const Blogcnt = document.querySelector('.BlogCnt')
    body.classList.toggle('Dark');
    Blogcnt.classList.toggle('DarkBlog')

    if(botaoM.textContent === 'Dark') {
        botaoM.textContent = 'Light'
    } else {
        botaoM.textContent = 'Dark'
    }

}

//Posts

async function readPosts() {
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = '<h3>Carregando...</h3>';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json();

    if (json.length > 0) {
        postArea.innerHTML = ''

        for(let i in json) {
            let postHTML = `<div><h1>${json[i].title}</h1><p>${json[i].body}</p><h5>${json[i].id}</h5><h/></div>`;
            postArea.innerHTML += postHTML;
        }
    } else {
        postArea.innerHTML = '<h3>Nenhum post para exibir</h3>'
    }
}

readPosts()


//Inserir post novo

async function AddPost(title, body) {
    
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                UserId: 2
            })
        }
    )
    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';

    readPosts()

}

document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if(title && body) {
        AddPost(title, body);
    } else {
        alert("Preencha todos os campos")
    }
} )

readPosts()

function AddPostBlog() {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;
}