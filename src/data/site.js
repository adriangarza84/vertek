// ---------------------------------------------------------------
// VERTEK — CONFIGURACIÓN Y CONTENIDO CENTRAL
// Todo el copy vive aquí. Editas este archivo y cambia en todo el sitio.
// Los valores marcados con [confirmar] son marcadores pendientes.
// ---------------------------------------------------------------

export const site = {
  nombre: 'Vertek',
  descriptor: 'Industrial Holding',
  dominio: 'https://vertek.mx',

  ciudad: 'San Pedro Garza García, N.L.',
  region: 'Nuevo León',
  correo: 'contacto@vertek.mx',

  // Endpoint del formulario de contacto (Formspree, Basin, Netlify Forms…)
  formEndpoint: 'https://formspree.io/f/xxxxxxxx', // [confirmar]

  claimCorto:
    'Vertek integra empresas especializadas en suministro, equipos y sistemas para la industria pesada, bajo un mismo respaldo corporativo.',
};

// ---------------------------------------------------------------
// RUTAS
// En GitHub Pages el sitio se publica en un subdirectorio (/vertek/), así
// que todos los enlaces internos absolutos deben pasar por ruta(). Al migrar
// a vertek.mx, base pasa a '/' y ruta() deja de agregar prefijo sola.
// ---------------------------------------------------------------

export const ruta = (camino = '/') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${camino}`;

// ---------------------------------------------------------------
// NAVEGACIÓN (una sola página con anclas)
// ---------------------------------------------------------------

export const nav = [
  { titulo: 'El grupo', href: '#grupo' },
  { titulo: 'Empresas', href: '#empresas' },
  { titulo: 'Capacidades', href: '#capacidades' },
  { titulo: 'Sectores', href: '#sectores' },
  { titulo: 'Respaldo', href: '#respaldo' },
];

// ---------------------------------------------------------------
// HERO
// ---------------------------------------------------------------

export const hero = {
  eyebrow: 'Holding industrial',
  titulo: 'Un grupo industrial construido para resolver toda la cadena.',
  subtitulo:
    'Vertek integra empresas especializadas en suministro, equipos y sistemas para la industria pesada. Cada una es experta en lo suyo; juntas, operan bajo un mismo respaldo corporativo, financiero y logístico.',
  ctaPrimario: { titulo: 'Conocer las empresas', href: '#empresas' },
  ctaSecundario: { titulo: 'Contactar al grupo', href: '#contacto' },
  respaldo: [
    { k: 'Portafolio', v: '7 empresas especializadas' },
    { k: 'Sede', v: 'San Pedro Garza García, N.L.' },
    { k: 'Cobertura', v: 'Alcance nacional' },
    { k: 'Estructura', v: 'Respaldo corporativo sólido' },
  ],
};

// ---------------------------------------------------------------
// EL GRUPO
// ---------------------------------------------------------------

export const grupo = {
  eyebrow: 'Quiénes somos',
  titulo: 'Especialistas independientes, respaldo compartido.',
  cuerpo: [
    'Vertek es un holding industrial que reúne empresas especializadas en distintos eslabones de la operación —desde el suministro de materiales críticos hasta los sistemas que mantienen una planta funcionando— y les da una estructura común de respaldo.',
    'Esa estructura es lo que marca la diferencia. Cada empresa conserva su enfoque, su marca y su experiencia técnica. Al mismo tiempo, comparten la capacidad financiera, logística y de ingeniería que ninguna tendría por sí sola. Para el cliente, esto significa tratar con especialistas verdaderos sin renunciar a la seriedad y la capacidad de respuesta de un grupo consolidado.',
  ],
  firma:
    'Vertek forma parte de BlackPixel, grupo con presencia en tecnología, industria, finanzas, bienes raíces y salud.',
  pilares: [
    {
      titulo: 'Especialización real',
      texto:
        'Cada empresa domina su vertical, no es un generalista que abarca todo de forma superficial.',
    },
    {
      titulo: 'Un solo respaldo',
      texto:
        'Solidez financiera, logística y técnica compartida entre todas.',
    },
    {
      titulo: 'Origen y sede',
      texto:
        'Operación central en San Pedro Garza García, epicentro industrial del norte de México, con alcance nacional.',
    },
  ],
};

// ---------------------------------------------------------------
// EMPRESAS
// ---------------------------------------------------------------

export const empresas = [
  {
    nombre: 'Macero',
    categoria: 'Suministro de aceros y materiales',
    texto:
      'Distribuidora de aceros y metales especiales: tornillería especial, estándar y de grado, corte láser, maquinado y fabricaciones. Materia prima y piezas a medida para industria pesada.',
    cta: 'Visitar macero.mx',
    href: 'https://macero.mx',
  },
  {
    nombre: 'Valltor',
    categoria: 'Sourcing global de refacciones críticas',
    texto:
      'Localiza, valida e importa refacciones de alta especificación técnica para industria pesada y sector marítimo, con entrega puesta en planta (DDP). Ingeniería de validación que aporta certeza técnica, no solo logística.',
    cta: 'Visitar valltor.com',
    href: 'https://valltor.com',
  },
  {
    nombre: 'Apex',
    categoria: 'Bridas y válvulas',
    texto:
      'Suministro de bridas y válvulas industriales para control de fluidos y conexiones críticas en sistemas de alta exigencia.',
    cta: 'Sitio próximamente',
    href: null,
  },
  {
    nombre: 'Tecnocranes',
    categoria: 'Sistemas de izaje',
    texto:
      'Diseño, fabricación e instalación de grúas industriales —puente, pórtico y bandera— y polipastos. Soluciones de izaje a la medida, con servicio y mantenimiento a nivel nacional.',
    cta: 'Visitar tecnocranes.com',
    href: 'https://tecnocranes.com',
  },
  {
    nombre: 'Orme',
    categoria: 'Renta de energía de respaldo',
    texto:
      'Renta de generadores diésel para respaldo de energía en la zona metropolitana de Monterrey. Entrega, soporte y continuidad para operaciones que no pueden detenerse.',
    cta: 'Visitar sitio',
    href: 'https://orme-psi.vercel.app', // [confirmar] dominio definitivo
  },
  {
    nombre: 'Fyron',
    categoria: 'Protección contra incendio',
    texto:
      'Integrador de sistemas contra incendio bajo criterio NFPA: diseño e ingeniería, instalación, mantenimiento (ITM) y suministro de material certificado, bajo una sola responsabilidad técnica.',
    cta: 'Visitar sitio',
    href: 'https://adriangarza84.github.io/fyron/', // [confirmar] dominio definitivo
  },
  {
    nombre: 'Subestaciones Juárez',
    categoria: 'Infraestructura eléctrica',
    texto:
      'Subestaciones eléctricas llave en mano: diseño, suministro, instalación y gestión completa de trámites ante CFE, SENER y CENACE. Proyectos con garantía y mantenimiento especializado.',
    cta: 'Visitar subestacionesjuarez.com',
    href: 'https://subestacionesjuarez.com',
  },
];

export const empresasSeccion = {
  eyebrow: 'El portafolio',
  titulo: 'Siete empresas, una sola exigencia técnica.',
  intro:
    'Cada empresa de Vertek resuelve un frente distinto de la operación industrial. Puedes trabajar con una o con varias; el respaldo del grupo es el mismo.',
};

// ---------------------------------------------------------------
// CAPACIDADES / SINERGIA
// ---------------------------------------------------------------

export const capacidades = {
  eyebrow: 'Cómo operamos',
  titulo: 'La ventaja no es tener muchas empresas. Es que trabajan juntas.',
  intro:
    'Las empresas de Vertek cubren tres frentes complementarios de la operación industrial. Un mismo proyecto puede tocar los tres, y el cliente lo resuelve sin coordinar proveedores dispersos ni asumir las juntas entre uno y otro.',
  bloques: [
    {
      titulo: 'Suministro y materiales críticos',
      empresas: ['Macero', 'Valltor', 'Apex'],
      texto:
        'Aceros y tornillería especial, refacciones de alta especificación importadas desde cualquier parte del mundo, y bridas y válvulas para control de fluidos. La materia prima y los componentes que mantienen viva la operación.',
    },
    {
      titulo: 'Equipos y energía en sitio',
      empresas: ['Tecnocranes', 'Orme'],
      texto:
        'Sistemas de izaje diseñados a la medida y energía de respaldo lista cuando la red falla. El equipo pesado que mueve y sostiene la operación, en planta o en obra.',
    },
    {
      titulo: 'Sistemas e infraestructura',
      empresas: ['Fyron', 'Subestaciones Juárez'],
      texto:
        'Protección contra incendio bajo criterio NFPA e infraestructura eléctrica llave en mano. Los sistemas que hacen que una instalación cumpla norma, pase verificación y opere con seguridad.',
    },
  ],
  cierre:
    'Suministro, equipos y sistemas bajo un mismo respaldo corporativo. Esa es la sinergia industrial de Vertek.',
};

// ---------------------------------------------------------------
// SECTORES
// ---------------------------------------------------------------

export const sectoresSeccion = {
  eyebrow: 'Dónde trabajamos',
  titulo: 'Presentes donde la operación no admite errores.',
  intro:
    'Nuestras empresas atienden industrias donde un paro no programado o una falla técnica se traducen en costos altos. Ahí es donde la especialización y el respaldo del grupo importan.',
};

export const sectores = [
  'Generación de energía',
  'Petróleo y gas',
  'Minería',
  'Energía eólica',
  'Marítimo y offshore',
  'Construcción y obra',
  'Manufactura industrial',
  'Aeroespacial',
];

// ---------------------------------------------------------------
// RESPALDO CORPORATIVO
// ---------------------------------------------------------------

export const respaldo = {
  eyebrow: 'Solidez',
  titulo: 'El respaldo de un grupo, la agilidad de un especialista.',
  cuerpo: [
    'Detrás de cada empresa de Vertek hay una estructura pensada para responder en grande. Capacidad para gestionar proyectos y suministros a gran escala, para responder con rapidez y para sostener el compromiso técnico a lo largo de toda la relación.',
    'Con sede de operaciones en San Pedro Garza García, N.L. —epicentro industrial del norte del país— y alcance nacional a través de sus empresas, Vertek ofrece a la industria pesada la seriedad y la capacidad de respuesta que sus proyectos exigen. Como parte de BlackPixel, suma el respaldo de un grupo con presencia en varias industrias.',
  ],
  datos: [
    {
      k: 'Respaldo financiero',
      v: 'Capacidad para proyectos y suministros a gran escala.',
    },
    { k: 'Sede corporativa', v: 'San Pedro Garza García, N.L.' },
    {
      k: 'Alcance',
      v: 'Cobertura nacional a través de las empresas del grupo.',
    },
    {
      k: '7 empresas',
      v: 'Especializadas en distintos frentes de la operación industrial.',
    },
  ],
};

// ---------------------------------------------------------------
// CONTACTO
// ---------------------------------------------------------------

export const contacto = {
  eyebrow: 'Hablemos',
  titulo: '¿Un proyecto que toca a más de una de nuestras empresas?',
  cuerpo:
    'Si tu requerimiento cruza suministro, equipos o sistemas —o si prefieres un solo interlocutor para todo el grupo— escríbenos y te canalizamos con la empresa o el equipo indicado.',
};

// ---------------------------------------------------------------
// FOOTER
// ---------------------------------------------------------------

export const footer = {
  descriptor:
    'Vertek es un holding industrial que integra empresas especializadas en suministro, equipos y sistemas para la industria pesada, bajo un mismo respaldo corporativo.',
  firma: 'Parte de BlackPixel',
};
