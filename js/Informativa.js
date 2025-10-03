function Informativa() {
  document.getElementById("root").innerHTML = `
    <section>
      <h2>App Rick and Morty</h2>
      <p>Esta aplicación consume la <a href="https://rickandmortyapi.com/" target="_blank">Rick and Morty API</a>
         y te permite:</p>
      <ul>
        <li>Ver lista de personajes con paginación</li>
        <li>Filtrar y buscar personajes</li>
        <li>Consultar detalles de cada personaje</li>
        <li>Guardar favoritos en el dispositivo</li>
      </ul>
    </section>
  `;
}
