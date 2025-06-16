document.addEventListener('DOMContentLoaded', () => {
  const modoBtn = document.getElementById('modoBtn');
  if (modoBtn) {
    modoBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});

document.getElementById('contratoForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const conteudo = document.getElementById('conteudo').value;
  const assinatura = document.getElementById('assinatura').value;

  const loader = document.getElementById('loader');
  loader.style.display = 'block';

  const res = await fetch('/api/contratos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo, conteudo, assinatura })
  });

  loader.style.display = 'none';
  alert('Contrato salvo com sucesso!');
  e.target.reset();
});

async function buscarContrato() {
  const termo = document.getElementById('buscaInput').value;
  const res = await fetch('/api/contratos?titulo=' + encodeURIComponent(termo));
  const data = await res.json();

  const resultado = document.getElementById('resultadoBusca');
  resultado.innerHTML = '';

  if (data.length === 0) {
    resultado.innerHTML = '<p>Nenhum contrato encontrado.</p>';
    return;
  }

  data.forEach(c => {
    const el = document.createElement('div');
    el.innerHTML = `
      <h3>${c.titulo}</h3>
      <p>${c.conteudo}</p>
      <strong>Assinado por:</strong> ${c.assinatura}
      <hr />
    `;
    resultado.appendChild(el);
  });
}
