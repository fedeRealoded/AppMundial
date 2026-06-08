const flagMap = {
  "Argentina": "ar",
  "Argelia": "dz",
  "Arabia Saudita": "sa",
  "Australia": "au",
  "Austria": "at",
  "Bélgica": "be",
  "Bosnia": "ba",
  "Brasil": "br",
  "Cabo Verde": "cv",
  "Canadá": "ca",
  "Colombia": "co",
  "Corea": "kr",
  "Costa de Marfil": "ci",
  "Croacia": "hr",
  "Curazao": "cw",
  "Ecuador": "ec",
  "Egipto": "eg",
  "Escocia": "gb-sct",
  "España": "es",
  "Francia": "fr",
  "Ghana": "gh",
  "Haití": "ht",
  "Holanda": "nl",
  "Países Bajos": "nl",
  "Inglaterra": "gb-eng",
  "Irak": "iq",
  "Irán": "ir",
  "Japón": "jp",
  "Jordania": "jo",
  "Marruecos": "ma",
  "México": "mx",
  "Noruega": "no",
  "Nueva Zelanda": "nz",
  "Panamá": "pa",
  "Paraguay": "py",
  "Portugal": "pt",
  "Qatar": "qa",
  "RD Congo": "cd",
  "Rep. Checa": "cz",
  "Senegal": "sn",
  "Sudáfrica": "za",
  "Suecia": "se",
  "Suiza": "ch",
  "Túnez": "tn",
  "Turquía": "tr",
  "USA": "us",
  "Uzbekistán": "uz"
};

const gridPositions = {
  "Dsports": "22.3 / 105",
  "TyC Sports": "21.4 / 112",
  "Telefe": "11.2 / 11"
};

const dateSelect = document.querySelector("#dateSelect");
const todayButton = document.querySelector("#todayButton");
const dateStatus = document.querySelector("#dateStatus");
const matchesContainer = document.querySelector("#matchesContainer");
const emptyState = document.querySelector("#emptyState");

function todayFromBrowser() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function uniqueDates() {
  return [...new Set(PARTIDOS.map((partido) => partido.fecha))].sort();
}

function formatDateShort(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const date = new Date(Date.UTC(year, month - 1, day));

  return `${dias[date.getUTCDay()]}, ${day}/${month}`;
}

function formatDateLong(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);

  return new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function flagUrl(team) {
  const code = flagMap[team];

  return code ? `https://flagcdn.com/w160/${code}.png` : "";
}

function channelLogo(channel) {
  const gridText = gridPositions[channel] || "";

  if (channel === "Dsports") {
    return `
      <span class="channel-logo logo-dsports">
        <span class="d-mark">D</span>
        <span class="channel-logo__name">SPORTS</span>
        <span class="channel-logo__grid">${gridText}</span>
      </span>
    `;
  }

  if (channel === "TyC Sports") {
    return `
      <span class="channel-logo logo-tyc">
        <span class="channel-logo__name">TyC Sports</span>
        <span class="channel-logo__grid">${gridText}</span>
      </span>
    `;
  }

  if (channel === "Telefe") {
    return `
      <span class="channel-logo logo-telefe">
        <span class="telefe-dots">
          <span class="dot blue"></span>
          <span class="dot green"></span>
          <span class="dot red"></span>
        </span>
        <span class="channel-logo__name">telefe</span>
        <span class="channel-logo__grid">${gridText}</span>
      </span>
    `;
  }

  return `
    <span class="channel-logo">
      <span class="channel-logo__name">${channel}</span>
      <span class="channel-logo__grid">${gridText}</span>
    </span>
  `;
}

function matchCard(partido) {
  return `
    <article class="match-card">
      <div class="left-panel">
        <p class="group">${partido.grupo}</p>

        <div class="team-row">
          <div class="team-badge">
            <img src="${flagUrl(partido.equipo1)}" alt="Bandera de ${partido.equipo1}" />
          </div>
          <h2>${partido.equipo1}</h2>
        </div>

        <div class="team-row">
          <div class="team-badge">
            <img src="${flagUrl(partido.equipo2)}" alt="Bandera de ${partido.equipo2}" />
          </div>
          <h2>${partido.equipo2}</h2>
        </div>
      </div>

      <div class="divider" aria-hidden="true"></div>

      <div class="right-panel">
        <div class="info-block">
          <div class="info-line">
            <span class="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="17" rx="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </span>
            <span class="info-text">${formatDateShort(partido.fecha)}</span>
          </div>

          <div class="info-line">
            <span class="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <polyline points="12 7 12 12 16 14"></polyline>
              </svg>
            </span>
            <span class="info-text">${partido.hora}</span>
          </div>
        </div>

        <div class="channel-box">
          <span class="channel-label">Canal</span>
          <div class="channels">
            ${partido.canales.map(channelLogo).join("")}
          </div>
        </div>
      </div>
    </article>
  `;
}

function fillDateSelect() {
  dateSelect.innerHTML = uniqueDates()
    .map((date) => `<option value="${date}">${formatDateLong(date)}</option>`)
    .join("");
}

function renderDate(date) {
  const matches = PARTIDOS.filter((partido) => partido.fecha === date);

  dateSelect.value = date;
  matchesContainer.innerHTML = "";
  emptyState.hidden = true;

  matchesContainer.className = "matches-container";

  if (matches.length === 1) {
    matchesContainer.classList.add("count-1");
  } else if (matches.length === 2) {
    matchesContainer.classList.add("count-2");
  } else if (matches.length === 3) {
    matchesContainer.classList.add("count-3");
  } else if (matches.length === 4) {
    matchesContainer.classList.add("count-4");
  } else {
    matchesContainer.classList.add("count-many");
  }

  if (!matches.length) {
    emptyState.hidden = false;
    dateStatus.textContent = `Fecha del navegador: ${formatDateLong(date)}.`;
    return;
  }

  matchesContainer.innerHTML = matches.map(matchCard).join("");
  dateStatus.textContent = `${formatDateLong(date)} · ${matches.length} partido${matches.length === 1 ? "" : "s"} · hora Argentina`;
}

function initialDate() {
  const today = todayFromBrowser();
  const dates = uniqueDates();

  return dates.includes(today) ? today : dates[0];
}

fillDateSelect();
renderDate(initialDate());

dateSelect.addEventListener("change", () => renderDate(dateSelect.value));
todayButton.addEventListener("click", () => renderDate(todayFromBrowser()));

/* Popup inicial de grilla */
const gridPopup = document.querySelector("#gridPopup");
const gridPopupOk = document.querySelector("#gridPopupOk");
const openGridPopup = document.querySelector("#openGridPopup");

let gridPopupTimer = null;

function closeGridPopup() {
  if (gridPopup) {
    gridPopup.classList.add("is-hidden");
  }

  if (gridPopupTimer) {
    clearTimeout(gridPopupTimer);
    gridPopupTimer = null;
  }
}

function openGridPopupWindow(autoClose = false) {
  if (!gridPopup) return;

  gridPopup.classList.remove("is-hidden");

  if (gridPopupTimer) {
    clearTimeout(gridPopupTimer);
    gridPopupTimer = null;
  }

  if (autoClose) {
    gridPopupTimer = setTimeout(() => {
      closeGridPopup();
    }, 5000);
  }
}

if (gridPopup) {
  // Al cargar la página, se muestra y se cierra solo a los 5 segundos.
  openGridPopupWindow(true);

  // Cierra tocando fuera del cartel o con la X.
  gridPopup.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-popup]")) {
      closeGridPopup();
    }
  });

  // Cierra con botón Entendido.
  if (gridPopupOk) {
    gridPopupOk.addEventListener("click", closeGridPopup);
  }

  // Abre manualmente con el botón Ver grilla.
  if (openGridPopup) {
    openGridPopup.addEventListener("click", () => {
      // Manualmente queda abierto hasta que el usuario lo cierre.
      openGridPopupWindow(false);
    });
  }

  // Cierra con Escape.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeGridPopup();
    }
  });
}
