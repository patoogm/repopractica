const obtenerInfoPersonaje = async () => {
  const id = localStorage.getItem('id')
  const personaje = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const result = await personaje.json()
  return result
}

const createCardPersonaje = async () => {
  const personajes = await obtenerInfoPersonaje();
  const div = document.getElementById('personajes');

  const cards = (`
    <div class="card m-3 estiloCard" style="width: 18rem;">
      <img src=${personajes.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${personajes.name}</h5>
        <p class="card-text">Status: ${personajes.status}</p>
        <p class="card-text">Species: ${personajes.species}</p>
      </div>
    </div>
  `)

  div.innerHTML = cards
}

createCardPersonaje()
