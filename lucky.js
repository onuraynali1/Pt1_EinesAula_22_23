function seleccionarNombreAleatorio() {
  reproducirSonidos();
  animarLuces();
  setTimeout(() => {
    fetch('noms.json')
      .then(response => response.json())
      .then(data => {
        const nombres = data.nombres;
        const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
        const nombreAleatorioSpan = document.getElementById('nombreAleatorio');
        nombreAleatorioSpan.textContent = nombreAleatorio;
      });
  }, 4000);
}

function reproducirSonidos() {
  let count = 0;
  const coinInterval = setInterval(() => {
    if (count < 3) {
      const audio = new Audio('coin.m4a');
      audio.play();
      count++;
    } else {
      clearInterval(coinInterval);
      const audio = new Audio('cagaste.m4a');
      audio.play();
    }
  }, 1000);
}

function animarLuces() {
  // Obtener el canvas y el contexto 2D
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Definir los colores de las luces
  const colors = ['#f00', '#0f0', '#00f', '#ff0'];

  // Definir los tiempos de parpadeo de las luces
  const times = [1000, 2000, 3000, 4000];

  // Dibujar las luces
  function drawLights() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar las luces
    for (let i = 0; i < 4; i++) {
      // Cambiar el color de la luz
      ctx.fillStyle = colors[i];

      // Dibujar un círculo
      ctx.beginPath();
      ctx.arc(50 * (i + 1), 50, 20, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Parpadear las luces
    for (let i = 0; i < 4; i++) {
      // Cambiar el color de la luz
      ctx.fillStyle = colors[i];

      // Parpadear la luz
      setTimeout(() => {
        ctx.clearRect(50 * (i + 1) - 20, 30, 40, 40);
      }, times[i]);
    }
  }

  // Iniciar la animación de las luces
  drawLights();
}
