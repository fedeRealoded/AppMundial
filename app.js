const flagMap = {
  "Argentina":"ar","Argelia":"dz","Arabia Saudita":"sa","Arabia":"sa","Australia":"au","Austria":"at",
  "Bélgica":"be","Belgica":"be","Bosnia":"ba","Brasil":"br","Cabo Verde":"cv","Canadá":"ca","Canada":"ca",
  "Colombia":"co","Congo":"cg","Corea":"kr","Costa de Marfil":"ci","Croacia":"hr","Curazao":"cw",
  "Ecuador":"ec","Egipto":"eg","Escocia":"gb-sct","España":"es","Francia":"fr","Ghana":"gh",
  "Haití":"ht","Haiti":"ht","Holanda":"nl","Países Bajos":"nl","Inglaterra":"gb-eng","Irak":"iq",
  "Irán":"ir","Iran":"ir","Japón":"jp","Japon":"jp","Jordania":"jo","Marruecos":"ma","México":"mx",
  "Mexico":"mx","Noruega":"no","Nueva Zelanda":"nz","Panamá":"pa","Panama":"pa","Paraguay":"py",
  "Portugal":"pt","Qatar":"qa","RD Congo":"cd","Rep. Checa":"cz","Rep Checa":"cz","Senegal":"sn",
  "Sudáfrica":"za","Sudafrica":"za","Suecia":"se","Suiza":"ch","Túnez":"tn","Tunez":"tn",
  "Turquía":"tr","Turquia":"tr","USA":"us","Uzbekistán":"uz","Uzbequistan":"uz","Uzbekistan":"uz"
};

const dateSelect = document.querySelector("#dateSelect");
const matchSelect = document.querySelector("#matchSelect");
const prevMatch = document.querySelector("#prevMatch");
const nextMatch = document.querySelector("#nextMatch");
const groupName = document.querySelector("#groupName");
const team1Name = document.querySelector("#team1Name");
const team2Name = document.querySelector("#team2Name");
const team1Flag = document.querySelector("#team1Flag");
const team2Flag = document.querySelector("#team2Flag");
const dateText = document.querySelector("#dateText");
const timeText = document.querySelector("#timeText");
const channelBrand = document.querySelector("#channelBrand");
const simulcastBox = document.querySelector("#simulcastBox");
const counter = document.querySelector("#counter");

let currentIndex = 0;

function uniqueDates() {
  return [...new Set(PARTIDOS.map(p => p.fecha))];
}

function matchesByDate(fecha) {
  return PARTIDOS.map((p, i) => ({ ...p, realIndex: i })).filter(p => p.fecha === fecha);
}

function formatDateShort(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const date = new Date(Date.UTC(y, m - 1, d));
  return `${dias[date.getUTCDay()]}, ${d}/${m}`;
}

function flagUrl(team) {
  const code = flagMap[team];
  return code ? `https://flagcdn.com/w160/${code}.png` : "";
}

function channelHtml(channel) {
  if (channel === "Dsports") {
    return `
      <div class="channel-logo">
        <span class="d-mark">D</span>
        <span class="sports-mark">SPORTS</span>
      </div>
      <div class="channel-name">DSPORTS</div>
    `;
  }

  if (channel === "TyC Sports") {
    return `
      <div class="channel-logo">
        <span class="tyc-mark">TyC Sports</span>
      </div>
      <div class="channel-name">TYC SPORTS</div>
    `;
  }

  if (channel === "Telefe") {
    return `
      <div class="channel-logo">
        <span class="telefe-mark">
          <span class="dot blue"></span>
          <span class="dot green"></span>
          <span class="dot red"></span>
          telefe
        </span>
      </div>
      <div class="channel-name">TELEFE</div>
    `;
  }

  return `<div class="channel-logo"><span class="sports-mark">${channel}</span></div>`;
}

function fillDates() {
  dateSelect.innerHTML = uniqueDates()
    .map(fecha => `<option value="${fecha}">${formatDateShort(fecha)}</option>`)
    .join("");
}

function fillMatchesForDate(fecha) {
  const items = matchesByDate(fecha);
  matchSelect.innerHTML = items
    .map(p => `<option value="${p.realIndex}">${p.equipo1} - ${p.equipo2}</option>`)
    .join("");
}

function render() {
  const p = PARTIDOS[currentIndex];

  dateSelect.value = p.fecha;
  fillMatchesForDate(p.fecha);
  matchSelect.value = String(currentIndex);

  groupName.textContent = p.grupo;
  team1Name.textContent = p.equipo1;
  team2Name.textContent = p.equipo2;

  team1Flag.src = flagUrl(p.equipo1);
  team1Flag.alt = `Bandera de ${p.equipo1}`;
  team2Flag.src = flagUrl(p.equipo2);
  team2Flag.alt = `Bandera de ${p.equipo2}`;

  dateText.textContent = formatDateShort(p.fecha);
  timeText.textContent = p.hora || "Horario a confirmar";

  channelBrand.innerHTML = channelHtml(p.senal);
  simulcastBox.innerHTML = p.simulcast ? `También por: ${p.simulcast}` : "";

  counter.textContent = `Partido ${currentIndex + 1} de ${PARTIDOS.length}`;
  prevMatch.disabled = currentIndex === 0;
  nextMatch.disabled = currentIndex === PARTIDOS.length - 1;
}

dateSelect.addEventListener("change", () => {
  const items = matchesByDate(dateSelect.value);
  currentIndex = items[0].realIndex;
  render();
});

matchSelect.addEventListener("change", () => {
  currentIndex = Number(matchSelect.value);
  render();
});

prevMatch.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    render();
  }
});

nextMatch.addEventListener("click", () => {
  if (currentIndex < PARTIDOS.length - 1) {
    currentIndex += 1;
    render();
  }
});

fillDates();
render();
