const getPersonajes = async () => {
  const resultado = await fetch('https://rickandmortyapi.com/api/character');
  const personajes = await resultado.json();
  return personajes.results
}

const createCard = async () => {
  const personajes = await getPersonajes();
  const div = document.getElementById('card');

  const cards = personajes.map(personaje => (`
    <div class="card m-3 estiloCard" style="width: 18rem;">
      <img src=${personaje.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${personaje.name}</h5>
        <p class="card-text">Status: ${personaje.status}</p>
        <p class="card-text">Species: ${personaje.species}</p>
        <button onclick='redirectDetail(${personaje.id})' class="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  `))

  div.innerHTML = cards
}

createCard()

const redirectDetail = (id) => {
  localStorage.setItem('id', id)
  window.location.href = '/personajes.html'
}

const createUser = () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  fetch('http://localhost:3000/user', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      role: 'client'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  alert('Usuario creado con exito')
}

const loginUser = async () => {
  const email = document.getElementById('emailLogin').value
  const password = document.getElementById('passwordLogin').value

  const result = await fetch('http://localhost:3000/user');
  const users = await result.json()

  const user = users.find(user => user.email === email);
  console.log(user)

  if (!user) {
    return alert('Los datos no coinciden')
  }
  
  if (user.password === password) {
    localStorage.setItem('role', user.role)
    window.location.href = './admin.html'    
  } else {
    alert('Los datos no coinciden')
  }
}

const obtenerUsers = async () => {
  const results = await fetch('http://localhost:3000/user')
  const users = await results.json()
  return users
}

const listUser = async () => {
  const lista = await obtenerUsers()
  const div = document.getElementById('listUser')

  const users = lista.map(user => (`
    <li>${user.email}</li>
  `))

  div.innerHTML = users
}

listUser()
