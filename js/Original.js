async function Original() {
  const randomId = Math.floor(Math.random() * 826) + 1; // total de personajes = 826
  const res = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
  const data = await res.json();

  const contenido = `
    <section>
      <h2>Personaje Random 🎲</h2>
      <img src="${data.image}" alt="${data.name}" height="200">
      <p><strong>${data.name}</strong></p>
      <p>Status: ${data.status}</p>
      <button onclick="Detalle(${data.id})">Ver detalle</button>
    </section>
  `;

  document.getElementById("root").innerHTML = contenido;
}
