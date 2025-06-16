const modoBtn = document.getElementById('modoBtn');
modoBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const form = document.getElementById('formContrato');
const resultadoContrato = document.getElementById('resultadoContrato');
const contratoText = document.getElementById('contratoText');
const btnSalvarPDF = document.getElementById('btnSalvarPDF');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const parteA = form.parteA.value.trim();
  const parteB = form.parteB.value.trim();
  const objeto = form.objeto.value.trim();
  const valor = parseFloat(form.valor.value).toFixed(2);
  const prazo = parseInt(form.prazo.value);

  if (!parteA || !parteB || !objeto || isNaN(valor) || isNaN(prazo)) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  const contrato = `CONTRATO DE PRESTAÇÃO DE SERVIÇOS

Entre as partes:

Parte A: ${parteA}
Parte B: ${parteB}

Cláusula 1 - Objeto
${objeto}

Cláusula 2 - Valor
O valor total do contrato é de R$ ${valor}.

Cláusula 3 - Prazo
O prazo para cumprimento do contrato é de ${prazo} meses.

Assinam as partes abaixo para firma do presente contrato.

______________________________
${parteA}

______________________________
${parteB}
`;

  contratoText.textContent = contrato;
  resultadoContrato.style.display = 'block';
});

btnSalvarPDF.addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const texto = contratoText.textContent;
  const linhas = doc.splitTextToSize(texto, 180);
  doc.text(linhas, 10, 10);
  doc.save('contrato.pdf');
});