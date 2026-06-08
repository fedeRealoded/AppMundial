<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mundial 2026 - Partidos de hoy</title>
  <meta name="description" content="Placa dinámica diaria de partidos del Mundial 2026 por fecha, horario y canal." />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <div id="gridPopup" class="grid-popup" role="dialog" aria-modal="true" aria-labelledby="gridPopupTitle">
    <div class="grid-popup__backdrop" data-close-popup></div>

    <section class="grid-popup__card">
      <button class="grid-popup__close" type="button" aria-label="Cerrar aviso" data-close-popup>×</button>

      <div class="grid-popup__header">
        <div class="grid-popup__icon">📺</div>
        <div>
          <p class="grid-popup__eyebrow">Grilla COYSPU</p>
          <h2 id="gridPopupTitle">¿Dónde ver cada señal?</h2>
          <p>Ubicación de los canales para seguir los partidos del Mundial 2026.</p>
        </div>
      </div>

      <div class="grid-popup__groups">
        <article class="grid-group">
          <div class="grid-group__title">
            <span class="grid-group__emoji">📡</span>
            <span>Básico HD</span>
          </div>

          <div class="grid-channel">
            <span class="grid-channel__logo grid-channel__logo--tyc">TyC Sports</span>
            <span class="grid-channel__number">21.4</span>
          </div>

          <div class="grid-channel">
            <span class="grid-channel__logo grid-channel__logo--dsports"><span>D</span>SPORTS</span>
            <span class="grid-channel__number">22.3</span>
          </div>

          <div class="grid-channel">
            <span class="grid-channel__logo grid-channel__logo--telefe">
              <i class="dot blue"></i><i class="dot green"></i><i class="dot red"></i>telefe
            </span>
            <span class="grid-channel__number">11.2</span>
          </div>
        </article>

        <article class="grid-group">
          <div class="grid-group__title">
            <span class="grid-group__emoji">⭐</span>
            <span>Premium HD</span>
          </div>

          <div class="grid-channel">
            <span class="grid-channel__logo grid-channel__logo--tyc">TyC Sports</span>
            <span class="grid-channel__number">112</span>
          </div>

          <div class="grid-channel">
            <span class="grid-channel__logo grid-channel__logo--dsports"><span>D</span>SPORTS</span>
            <span class="grid-channel__number">105</span>
          </div>

          <div class="grid-channel">
            <span class="grid-channel__logo grid-channel__logo--telefe">
              <i class="dot blue"></i><i class="dot green"></i><i class="dot red"></i>telefe
            </span>
            <span class="grid-channel__number">11</span>
          </div>
        </article>
      </div>

      <button id="gridPopupOk" class="grid-popup__ok" type="button">Entendido</button>
    </section>
  </div>

  <main class="wrapper">
    <section class="topbar" aria-label="Controles de fecha">
      <div class="brand-block">
        <img class="coyspu-logo" src="assets/logo-coyspu.png" alt="COYSPU" />
        <div>
          <p class="eyebrow">Mundial 2026</p>
          <h1>Partidos de hoy</h1>
          <p id="dateStatus" class="date-status"></p>
        </div>
      </div>

      <div class="controls">
        <label>
          Ver otra fecha
          <select id="dateSelect"></select>
        </label>
        <button id="todayButton" type="button">Hoy</button>
      </div>
    </section>

    <section id="matchesContainer" class="matches-container" aria-label="Partidos del día"></section>

    <section id="emptyState" class="empty-state" hidden>
      <h2>No hay partidos cargados para hoy</h2>
      <p>La página toma la fecha del navegador. Para probar la placa, elegí una fecha del Mundial en el selector.</p>
    </section>
  </main>

  <script src="partidos.js"></script>
  <script src="app.js"></script>
</body>
</html>
