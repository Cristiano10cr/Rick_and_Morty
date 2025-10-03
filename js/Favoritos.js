function agregarFavorito(id, name, image) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // evitar duplicados
  if (!favoritos.some(fav => fav.id === id)) {
    favoritos.push({ id, name, image });
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert(name + " agregado a favoritos!");
  }
}

function Favoritos() {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    document.getElementById("root").innerHTML = "<h2>No tienes favoritos</h2>";
    return;
  }

  let lista = "<h2>Favoritos</h2><div class='lista'>";

  favoritos.forEach(fav => {
    lista += `
      <div class="card">
        <img src="${fav.image}" alt="${fav.name}" width="150" height="150">
        <h3>${fav.name}</h3>
        <button onclick="Detalle(${fav.id})">Ver detalle</button>
      </div>
    `;
  });

  lista += "</div>";
  document.getElementById("root").innerHTML = lista;
}
