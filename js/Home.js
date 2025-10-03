let pagina = 1;

async function Home() {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
  const data = await res.json();

  let lista = `
    <h2>Personajes</h2>
    <div class='lista'>
  `;

  data.results.forEach(personaje => {
    lista += `
      <div class="card">
        <img src="${personaje.image}" alt="${personaje.name}" width="150" height="150">
        <h3>${personaje.name}</h3>
        <p>${personaje.species}</p>
        <button onclick="Detalle(${personaje.id})">Ver detalle</button>
        <button onclick="agregarFavorito(${personaje.id}, '${personaje.name}', '${personaje.image}')">⭐ Favorito</button>
      </div>
    `;
  });

  lista += "</div>";

  // Paginación
  lista += `
    <div class="paginacion">
      <button onclick="anterior()">⬅️ Anterior</button>
      <span>Página ${pagina}</span>
      <button onclick="siguiente()">Siguiente ➡️</button>
    </div>
  `;

  document.getElementById("root").innerHTML = lista;
}

function siguiente() {
  pagina++;
  Home();
}

function anterior() {
  if (pagina > 1) {
    pagina--;
    Home();
  }
}
