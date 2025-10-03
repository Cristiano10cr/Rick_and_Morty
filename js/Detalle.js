async function Detalle(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();

  const detalle = `
    <section class="c-detalle">
        <img src="${data.image}" alt="${data.name}" height="200" width="auto">
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Status:</strong> ${data.status}</p>
        <p><strong>Especie:</strong> ${data.species}</p>
        <p><strong>Género:</strong> ${data.gender}</p>
        <p><strong>Origen:</strong> ${data.origin.name}</p>
        <p><strong>Ubicación:</strong> ${data.location.name}</p>
        <button onclick="Home()">⬅️ Volver</button>
    </section>
  `;

  document.getElementById("root").innerHTML = detalle;
}

