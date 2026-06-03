const PARTIDOS = [
  {
    "fecha": "2026-06-11",
    "grupo": "Grupo A",
    "equipo1": "Corea",
    "equipo2": "Rep. Checa",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-11",
    "grupo": "Grupo A",
    "equipo1": "México",
    "equipo2": "Sudáfrica",
    "senal": "Dsports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-12",
    "grupo": "Grupo B",
    "equipo1": "USA",
    "equipo2": "Paraguay",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-12",
    "grupo": "Grupo B",
    "equipo1": "Canadá",
    "equipo2": "Bosnia",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-13",
    "grupo": "Grupo C",
    "equipo1": "Australia",
    "equipo2": "Turquía",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-13",
    "grupo": "Grupo C",
    "equipo1": "Haití",
    "equipo2": "Escocia",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-13",
    "grupo": "Grupo C",
    "equipo1": "Brasil",
    "equipo2": "Marruecos",
    "senal": "Dsports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-13",
    "grupo": "Grupo C",
    "equipo1": "Qatar",
    "equipo2": "Suiza",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-14",
    "grupo": "Grupo D",
    "equipo1": "Suecia",
    "equipo2": "Túnez",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-14",
    "grupo": "Grupo D",
    "equipo1": "Holanda",
    "equipo2": "Japón",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-14",
    "grupo": "Grupo D",
    "equipo1": "Costa de Marfil",
    "equipo2": "Ecuador",
    "senal": "Dsports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-14",
    "grupo": "Grupo D",
    "equipo1": "Alemania",
    "equipo2": "Curazao",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-15",
    "grupo": "Grupo E",
    "equipo1": "Uruguay",
    "equipo2": "Arabia Saudita",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-15",
    "grupo": "Grupo E",
    "equipo1": "Irán",
    "equipo2": "Nueva Zelanda",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-15",
    "grupo": "Grupo E",
    "equipo1": "Bélgica",
    "equipo2": "Egipto",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-15",
    "grupo": "Grupo E",
    "equipo1": "España",
    "equipo2": "Cabo Verde",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-16",
    "grupo": "Grupo F",
    "equipo1": "Irak",
    "equipo2": "Noruega",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-16",
    "grupo": "Grupo F",
    "equipo1": "Austria",
    "equipo2": "Jordania",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-16",
    "grupo": "Grupo F",
    "equipo1": "Argentina",
    "equipo2": "Argelia",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-16",
    "grupo": "Grupo F",
    "equipo1": "Francia",
    "equipo2": "Senegal",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-17",
    "grupo": "Grupo G",
    "equipo1": "Inglaterra",
    "equipo2": "Croacia",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-17",
    "grupo": "Grupo G",
    "equipo1": "Ghana",
    "equipo2": "Panamá",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-17",
    "grupo": "Grupo G",
    "equipo1": "Uzbekistán",
    "equipo2": "Colombia",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-17",
    "grupo": "Grupo G",
    "equipo1": "Portugal",
    "equipo2": "RD Congo",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-18",
    "grupo": "Grupo A",
    "equipo1": "México",
    "equipo2": "Corea",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-18",
    "grupo": "Grupo A",
    "equipo1": "Rep. Checa",
    "equipo2": "Sudáfrica",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-18",
    "grupo": "Grupo A",
    "equipo1": "Suiza",
    "equipo2": "Bosnia",
    "senal": "Dsports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-18",
    "grupo": "Grupo A",
    "equipo1": "Canadá",
    "equipo2": "Qatar",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-19",
    "grupo": "Grupo B",
    "equipo1": "Brasil",
    "equipo2": "Haití",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-19",
    "grupo": "Grupo B",
    "equipo1": "USA",
    "equipo2": "Australia",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-19",
    "grupo": "Grupo B",
    "equipo1": "Escocia",
    "equipo2": "Marruecos",
    "senal": "Dsports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-19",
    "grupo": "Grupo B",
    "equipo1": "Turquía",
    "equipo2": "Paraguay",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-20",
    "grupo": "Grupo C",
    "equipo1": "Holanda",
    "equipo2": "Suecia",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-20",
    "grupo": "Grupo C",
    "equipo1": "Alemania",
    "equipo2": "Costa de Marfil",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-20",
    "grupo": "Grupo C",
    "equipo1": "Ecuador",
    "equipo2": "Curazao",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-20",
    "grupo": "Grupo C",
    "equipo1": "Túnez",
    "equipo2": "Japón",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-21",
    "grupo": "Grupo D",
    "equipo1": "España",
    "equipo2": "Arabia Saudita",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-21",
    "grupo": "Grupo D",
    "equipo1": "Nueva Zelanda",
    "equipo2": "Egipto",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-21",
    "grupo": "Grupo D",
    "equipo1": "Uruguay",
    "equipo2": "Cabo Verde",
    "senal": "Dsports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-21",
    "grupo": "Grupo D",
    "equipo1": "Bélgica",
    "equipo2": "Irán",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-22",
    "grupo": "Grupo E",
    "equipo1": "Argentina",
    "equipo2": "Austria",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-22",
    "grupo": "Grupo E",
    "equipo1": "Noruega",
    "equipo2": "Senegal",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-22",
    "grupo": "Grupo E",
    "equipo1": "Francia",
    "equipo2": "Irak",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-22",
    "grupo": "Grupo E",
    "equipo1": "Jordania",
    "equipo2": "Argelia",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-23",
    "grupo": "Grupo F",
    "equipo1": "Portugal",
    "equipo2": "Uzbekistán",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-23",
    "grupo": "Grupo F",
    "equipo1": "Panamá",
    "equipo2": "Croacia",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-23",
    "grupo": "Grupo F",
    "equipo1": "Inglaterra",
    "equipo2": "Ghana",
    "senal": "Dsports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-23",
    "grupo": "Grupo F",
    "equipo1": "Colombia",
    "equipo2": "RD Congo",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-24",
    "grupo": "Grupo G",
    "equipo1": "Marruecos",
    "equipo2": "Haití",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-24",
    "grupo": "Grupo G",
    "equipo1": "Suiza",
    "equipo2": "Canadá",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-24",
    "grupo": "Grupo G",
    "equipo1": "Sudáfrica",
    "equipo2": "Corea",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-24",
    "grupo": "Grupo G",
    "equipo1": "Brasil",
    "equipo2": "Escocia",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-24",
    "grupo": "Grupo G",
    "equipo1": "Rep. Checa",
    "equipo2": "México",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-24",
    "grupo": "Grupo G",
    "equipo1": "Bosnia",
    "equipo2": "Qatar",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-25",
    "grupo": "Grupo H",
    "equipo1": "Ecuador",
    "equipo2": "Alemania",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-25",
    "grupo": "Grupo H",
    "equipo1": "Paraguay",
    "equipo2": "Australia",
    "senal": "Dsports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-25",
    "grupo": "Grupo H",
    "equipo1": "Turquía",
    "equipo2": "USA",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-25",
    "grupo": "Grupo H",
    "equipo1": "Japón",
    "equipo2": "Suecia",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-25",
    "grupo": "Grupo H",
    "equipo1": "Curazao",
    "equipo2": "Costa de Marfil",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-25",
    "grupo": "Grupo H",
    "equipo1": "Ecuador",
    "equipo2": "Alemania",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-25",
    "grupo": "Grupo H",
    "equipo1": "Túnez",
    "equipo2": "Países Bajos",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-26",
    "grupo": "Grupo I",
    "equipo1": "España",
    "equipo2": "Uruguay",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-26",
    "grupo": "Grupo I",
    "equipo1": "Francia",
    "equipo2": "Noruega",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-26",
    "grupo": "Grupo I",
    "equipo1": "Egipto",
    "equipo2": "Irán",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-26",
    "grupo": "Grupo I",
    "equipo1": "Senegal",
    "equipo2": "Irak",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-26",
    "grupo": "Grupo I",
    "equipo1": "Cabo Verde",
    "equipo2": "Arabia Saudita",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-26",
    "grupo": "Grupo I",
    "equipo1": "Nueva Zelanda",
    "equipo2": "Bélgica",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-27",
    "grupo": "Grupo J",
    "equipo1": "Croacia",
    "equipo2": "Ghana",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-27",
    "grupo": "Grupo J",
    "equipo1": "Argelia",
    "equipo2": "Austria",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-27",
    "grupo": "Grupo J",
    "equipo1": "Colombia",
    "equipo2": "Portugal",
    "senal": "Dsports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-27",
    "grupo": "Grupo J",
    "equipo1": "Jordania",
    "equipo2": "Argentina",
    "senal": "TyC Sports",
    "simulcast": "Telefe",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-27",
    "grupo": "Grupo J",
    "equipo1": "Panamá",
    "equipo2": "Inglaterra",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  },
  {
    "fecha": "2026-06-27",
    "grupo": "Grupo J",
    "equipo1": "Congo",
    "equipo2": "Uzbekistán",
    "senal": "TyC Sports",
    "simulcast": "",
    "hora": "4:00 p.m."
  }
];
