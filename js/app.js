const articles = [
  {
    id: 1,
    title: 'Ford Mustang',
    excerpt: 'Clásico muscle car americano con gran potencia.',
    img: '/img/mustang.avif',
    category: 'Deportivo',
    content: `
      El Ford Mustang es un ícono del automovilismo estadounidense.
      Con motores potentes y diseño agresivo, es un referente entre los muscle cars.
    `,
  },
  {
    id: 2,
    title: 'Volkswagen Gol Trend',
    excerpt: 'Compacto confiable y económico, ideal para ciudad.',
    img: '/img/GolTrend.jpg',
    category: 'Hatchback',
    content: `
      El Gol Trend combina economía y practicidad.
      Su tamaño compacto lo hace perfecto para tránsito urbano y conducción diaria.
    `,
  },
  {
    id: 3,
    title: 'Porsche 911',
    excerpt: 'Deportivo icónico con motor trasero y alto rendimiento.',
    img: '/img/porsche911.avif',
    category: 'Superdeportivo',
    content: `
      El Porsche 911 es símbolo de precisión y lujo deportivo.
      Su motor trasero y diseño atemporal lo convierten en un clásico moderno.
    `,
  },
  {
    id: 4,
    title: 'Peugeot Partner',
    excerpt: 'Vehículo utilitario práctico y espacioso.',
    img: '/img/Partner.avif',
    category: 'Familiar/Utilitario',
    content: `
      La Peugeot Partner es ideal para transporte de carga ligera y familias.
      Su versatilidad y espacio interior la hacen muy funcional.
    `,
  },
  {
    id: 5,
    title: 'Ford Fiesta 1999',
    excerpt: 'Clásico compacto, confiable y económico.',
    img: '/img/FordFiesta.jpeg',
    category: 'Hatchback',
    content: `
      El Ford Fiesta 1999 es recordado por su confiabilidad y bajo consumo.
      Fue un auto popular en su época por su practicidad y facilidad de mantenimiento.
    `,
  },
  {
    id: 6,
    title: 'Chevrolet Corsa',
    excerpt: 'Compacto versátil y accesible, ideal para ciudad.',
    img: '/img/corsa.jpg',
    category: 'Hatchback',
    content: `
      El Chevrolet Corsa destaca por su bajo consumo y facilidad de manejo.
      Popular en muchos países, es una opción económica para transporte diario.
    `,
  },
  {
    id: 7,
    title: 'Subaru Impreza',
    excerpt: 'Sedán o hatchback con tracción integral y espíritu deportivo.',
    img: '/img/impreza.webp',
    category: 'Deportivo',
    content: `
      El Subaru Impreza es conocido por su tracción integral y rendimiento confiable.
      Ideal para quienes buscan deportividad con seguridad en todo terreno.
    `,
  },
  {
    id: 8,
    title: 'Toyota Supra',
    excerpt: 'Deportivo japonés icónico con motor potente y diseño agresivo.',
    img: '/img/Supra.jpg',
    category: 'Deportivo',
    content: `
      El Toyota Supra combina tecnología japonesa con potencia y diseño emblemático.
      Es un referente entre los autos deportivos japoneses de alta gama.
    `,
  },
  {
    id: 9,
    title: 'Ford F100 Clásica',
    excerpt: 'Camioneta clásica con gran resistencia y durabilidad.',
    img: '/img/f100.jpg',
    category: 'Camioneta',
    content: `
      La Ford F100 clásica es conocida por su robustez y longevidad.
      Muy utilizada para trabajo y transporte, se convirtió en un ícono de la marca.
    `,
  },
  {
    id: 10,
    title: 'Gilera Smash',
    excerpt: 'Moto económica, confiable y muy utilizada en ciudad.',
    img: '/img/gilera.jpg',
    category: 'Moto',
    content: `
      La Gilera Smash es una moto ligera, económica y fácil de mantener.
      Ideal para transporte urbano y uso diario, es una de las más populares en su segmento.
    `,
  },
  {
    id: 11,
    title: 'Chevrolet Agile',
    excerpt: 'Hatchback compacto, práctico y económico.',
    img: '/img/agile.jpg',
    category: 'Hatchback',
    content: `
      El Chevrolet Agile es un auto compacto diseñado para la vida urbana.
      Ofrece buen espacio interior y eficiencia en el consumo de combustible.
    `,
  },
];
function renderArticles() {
  const list = document.getElementById('articles-list');
  if (!list) return;
  list.innerHTML = '';
  articles.forEach((a) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${a.img}" alt="${a.title}">
      <div class="card-body">
        <h3>${a.title}</h3>
        <p>${a.excerpt}</p>
        <a class="read-more" href="article.html?id=${a.id}">Leer más...</a>
      </div>`;
    list.appendChild(card);
  });
}
function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}
function renderArticleDetail() {
  const detail = document.getElementById('article-detail');
  if (!detail) return;
  const id = parseInt(getQueryParam('id')) || 1;
  const article = articles.find((x) => x.id === id);
  if (!article) {
    detail.innerHTML = '<h2>Vehículo no encontrado</h2>';
    return;
  }
  detail.innerHTML = `
    <h1>${article.title}</h1>
    <p class="article-meta">Categoría: ${article.category}</p>
    <img src="${article.img}" alt="${article.title}">
    <div class="article-body">${article.content}</div>
  `;

  const related = document.getElementById('related-list');
  if (related) {
    related.innerHTML = '';
    articles
      .filter((a) => a.id !== article.id)
      .forEach((r) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="article.html?id=${r.id}">${r.title}</a>`;
        related.appendChild(li);
      });
  }
}
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const feedback = document.getElementById('form-feedback');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      feedback.style.color = 'red';
      feedback.textContent = 'Por favor completá todos los campos antes de enviar.';
      return;
    }
    feedback.style.color = 'green';
    feedback.textContent = 'Mensaje enviado. ¡Gracias!';
    form.reset();
  });
}
function setupMenuToggle() {
  const btn = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}
document.addEventListener('DOMContentLoaded', () => {
  renderArticles();
  renderArticleDetail();
  setupContactForm();
  setupMenuToggle();
});
