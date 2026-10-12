// ---------------------------------------------------------------
// VERTEK — CONTENIDO EN INGLÉS
// Gemelo de contenido.es.js: misma forma, mismas claves. Si añades una
// clave allá, añádela aquí.
//
// Inglés estadounidense de industria: técnico y sobrio, el mismo
// registro del español. No es traducción literal; los nombres propios
// de las empresas y los organismos mexicanos (CFE, SENER, CENACE) se
// quedan como están.
// ---------------------------------------------------------------

export const en = {
  claimCorto:
    'Vertek brings together specialized companies in supply, equipment and systems for heavy industry, under a single corporate backing.',

  // --- Metadatos por página ---
  meta: {
    inicio: {
      titulo: 'Vertek | Industrial Holding in Monterrey',
      descripcion:
        'Vertek brings together specialized companies in supply, equipment and systems for heavy industry, under a single corporate backing. Headquartered in San Pedro Garza García, N.L.',
      ogTitulo: 'Vertek — Industrial Holding',
      ogDescripcion:
        'An industrial group that solves the entire chain: critical supply, lifting, power, fire protection and electrical infrastructure.',
    },
    privacidad: {
      titulo: 'Privacy notice | Vertek',
      descripcion:
        'Vertek privacy notice: processing of personal data collected through this site.',
      encabezado: 'Privacy notice',
      actualizado: 'October 2026',
    },
    e404: {
      titulo: 'Page not found | Vertek',
      descripcion: 'The page you are looking for does not exist or has moved.',
    },
  },

  // --- Navegación (una sola página con anclas) ---
  // Los href son los mismos que en español: los id de sección no se
  // traducen, así el ancla sigue funcionando al cambiar de idioma.
  nav: [
    { titulo: 'The group', href: '#grupo' },
    { titulo: 'Companies', href: '#empresas' },
    { titulo: 'Capabilities', href: '#capacidades' },
    { titulo: 'Sectors', href: '#sectores' },
    { titulo: 'Strength', href: '#respaldo' },
  ],

  // --- Hero ---
  hero: {
    eyebrow: 'Industrial holding',
    titulo: 'An industrial group built to solve every link in the chain.',
    subtitulo:
      'Vertek brings together specialized companies in supply, equipment and systems for heavy industry. Each one is an expert in its own field; together, they operate under shared corporate, financial and logistical backing.',
    ctaPrimario: { titulo: 'See our companies', href: '#empresas' },
    ctaSecundario: { titulo: 'Contact the group', href: '#contacto' },
    respaldo: [
      { k: 'Portfolio', v: '7 specialized companies' },
      { k: 'Headquarters', v: 'San Pedro Garza García, N.L.' },
      { k: 'Coverage', v: 'Nationwide reach' },
      { k: 'Structure', v: 'Solid corporate backing' },
    ],
  },

  // --- El grupo ---
  grupo: {
    eyebrow: 'Who we are',
    titulo: 'Independent specialists, shared backing.',
    cuerpo: [
      'Vertek is an industrial holding that brings together companies specialized in different links of the operation —from the supply of critical materials to the systems that keep a plant running— and gives them a common structure of support.',
      'That structure is what makes the difference. Each company keeps its own focus, its brand and its technical expertise. At the same time, they share the financial, logistical and engineering capacity that none of them would have on its own. For the client, this means working with true specialists without giving up the rigor and responsiveness of an established group.',
    ],
    firma:
      'Vertek is part of BlackPixel, a group with a presence in technology, industry, finance, real estate and healthcare.',
    pilares: [
      {
        titulo: 'Real specialization',
        texto:
          'Each company masters its own vertical; none is a generalist covering everything on the surface.',
      },
      {
        titulo: 'One single backing',
        texto:
          'Financial, logistical and technical strength shared across all of them.',
      },
      {
        titulo: 'Origin and headquarters',
        texto:
          'Central operations in San Pedro Garza García, the industrial hub of northern Mexico, with nationwide reach.',
      },
    ],
  },

  // --- Empresas ---
  empresas: [
    {
      id: 'macero',
      nombre: 'Macero',
      categoria: 'Steel and materials supply',
      texto:
        'Distributor of steel and specialty metals: special, standard and grade fasteners, laser cutting, machining and fabrication. Raw material and custom parts for heavy industry.',
      cta: 'Visit macero.mx',
    },
    {
      id: 'valltor',
      nombre: 'Valltor',
      categoria: 'Global sourcing of critical spare parts',
      texto:
        'Sources, validates and imports high-specification spare parts for heavy industry and the maritime sector, delivered to plant (DDP). Validation engineering that provides technical certainty, not just logistics.',
      cta: 'Visit valltor.com',
    },
    {
      id: 'apex',
      nombre: 'Apex',
      categoria: 'Flanges and valves',
      texto:
        'Supply of industrial flanges and valves for fluid control and critical connections in high-demand systems.',
      cta: 'Visit Apex',
    },
    {
      id: 'tecnocranes',
      nombre: 'Tecnocranes',
      categoria: 'Lifting systems',
      texto:
        'Design, manufacture and installation of industrial cranes —overhead, gantry and jib— and hoists. Custom lifting solutions, with nationwide service and maintenance.',
      cta: 'Visit tecnocranes.com',
    },
    {
      id: 'orme',
      nombre: 'Orme',
      categoria: 'Backup power rental',
      texto:
        'Diesel generator rental for backup power in the Monterrey metropolitan area. Delivery, support and continuity for operations that cannot stop.',
      cta: 'Visit site',
    },
    {
      id: 'fyron',
      nombre: 'Fyron',
      categoria: 'Fire protection',
      texto:
        'Fire protection systems integrator to NFPA criteria: design and engineering, installation, maintenance (ITM) and supply of certified material, under a single technical responsibility.',
      cta: 'Visit fyron.mx',
    },
    {
      id: 'subestaciones',
      nombre: 'Subestaciones Juárez',
      categoria: 'Electrical infrastructure',
      texto:
        'Turnkey electrical substations: design, supply, installation and full management of permits with CFE, SENER and CENACE. Projects with warranty and specialized maintenance.',
      cta: 'Visit subestacionesjuarez.com',
    },
  ],

  empresasSeccion: {
    eyebrow: 'The portfolio',
    titulo: 'Seven companies, one technical standard.',
    intro:
      'Each Vertek company solves a different front of the industrial operation. You can work with one or with several; the backing of the group is the same.',
  },

  // --- Capacidades / sinergia ---
  capacidades: {
    eyebrow: 'How we operate',
    titulo: 'The advantage is not having many companies. It is that they work together.',
    intro:
      'Vertek companies cover three complementary fronts of the industrial operation. A single project can touch all three, and the client resolves it without coordinating scattered suppliers or absorbing the gaps between them.',
    bloques: [
      {
        titulo: 'Supply and critical materials',
        empresas: ['Macero', 'Valltor', 'Apex'],
        texto:
          'Steel and special fasteners, high-specification spare parts imported from anywhere in the world, and flanges and valves for fluid control. The raw material and the components that keep the operation alive.',
      },
      {
        titulo: 'Equipment and on-site power',
        empresas: ['Tecnocranes', 'Orme'],
        texto:
          'Custom-designed lifting systems and backup power ready for when the grid fails. The heavy equipment that moves and sustains the operation, in the plant or on site.',
      },
      {
        titulo: 'Systems and infrastructure',
        empresas: ['Fyron', 'Subestaciones Juárez'],
        texto:
          'Fire protection to NFPA criteria and turnkey electrical infrastructure. The systems that make a facility meet code, pass inspection and operate safely.',
      },
    ],
    cierre:
      'Supply, equipment and systems under a single corporate backing. That is the industrial synergy of Vertek.',
  },

  // --- Sectores ---
  sectoresSeccion: {
    eyebrow: 'Where we work',
    titulo: 'Present where the operation leaves no room for error.',
    intro:
      'Our companies serve industries where unplanned downtime or a technical failure translates into high costs. That is where specialization and the backing of the group matter.',
  },

  sectores: [
    'Power generation',
    'Oil and gas',
    'Mining',
    'Wind energy',
    'Marine and offshore',
    'Construction',
    'Industrial manufacturing',
    'Aerospace',
  ],

  // --- Respaldo corporativo ---
  respaldo: {
    eyebrow: 'Strength',
    titulo: 'The backing of a group, the agility of a specialist.',
    cuerpo: [
      'Behind every Vertek company there is a structure built to respond at scale. Capacity to manage large-scale projects and supply, to respond quickly and to sustain the technical commitment throughout the relationship.',
      'With operations headquartered in San Pedro Garza García, N.L. —the industrial hub of northern Mexico— and nationwide reach through its companies, Vertek gives heavy industry the rigor and responsiveness its projects demand. As part of BlackPixel, it adds the backing of a group present across several industries.',
    ],
    datos: [
      {
        k: 'Financial backing',
        v: 'Capacity for large-scale projects and supply.',
      },
      { k: 'Corporate headquarters', v: 'San Pedro Garza García, N.L.' },
      {
        k: 'Reach',
        v: 'Nationwide coverage through the companies in the group.',
      },
      {
        k: '7 companies',
        v: 'Specialized in different fronts of the industrial operation.',
      },
    ],
  },

  // --- Contacto ---
  contacto: {
    eyebrow: "Let's talk",
    titulo: 'A project that involves more than one of our companies?',
    cuerpo:
      'If your requirement spans supply, equipment or systems —or if you would rather have a single point of contact for the whole group— write to us and we will route you to the right company or team.',
  },

  // --- Pie ---
  footer: {
    descriptor:
      'Vertek is an industrial holding that brings together specialized companies in supply, equipment and systems for heavy industry, under a single corporate backing.',
    firma: 'Part of BlackPixel',
  },
};
