// ---------------------------------------------------------------
// VERTEK — DICCIONARIO DE INTERFAZ
// Cadenas del armazón: navegación, botones, formulario, pie y páginas
// de servicio. El copy de las secciones no vive aquí, vive en
// src/data/contenido.<idioma>.js.
//
// Ningún componente escribe texto visible directamente: todo pasa por
// aquí, para que no quede español suelto en la versión en inglés.
//
// El registro en inglés es el mismo que en español: técnico y sobrio,
// inglés estadounidense de industria, no traducción literal.
// ---------------------------------------------------------------

const es = {
  // --- Navegación ---
  navIrAlInicio: 'Vertek, inicio',
  navPrincipal: 'Navegación principal',
  navAbrirMenu: 'Abrir menú',
  navCerrarMenu: 'Cerrar menú',
  irAlContenido: 'Ir al contenido',

  // --- Llamadas a la acción ---
  ctaContacto: 'Contacto',
  ctaContactarGrupo: 'Contactar al grupo',
  ctaIrAlInicio: 'Ir al inicio',

  // --- Selector de idioma ---
  // La etiqueta describe a dónde lleva; el código es lo que se ve.
  idiomaCambiar: 'View this page in English',
  idiomaCodigoActual: 'ES',
  idiomaCodigoOtro: 'EN',
  idiomaOtro: 'English',

  // --- Tarjeta de cierre del portafolio ---
  empresaCtaTitulo: 'Un solo interlocutor',
  empresaCtaTexto:
    'Si tu proyecto involucra a más de una empresa del grupo, escríbenos y coordinamos todo desde un mismo punto de contacto.',

  // --- Contacto y formulario ---
  contactoCorreoGrupo: 'Correo del grupo',
  contactoSede: 'Sede',
  formNombre: 'Nombre completo',
  formEmpresa: 'Empresa',
  formCorreo: 'Correo corporativo',
  formTelefono: 'Teléfono',
  formMensaje: 'Mensaje / requerimiento',
  formEnviar: 'Enviar mensaje',
  formNotaAntes: 'Al enviar este formulario aceptas el tratamiento de tus datos conforme a nuestro ',
  formNotaEnlace: 'aviso de privacidad',
  formNotaDespues: '.',

  // --- Estados del envío del formulario ---
  formEnviando: 'Enviando…',
  formExito: 'Mensaje enviado. Te contestamos en menos de 24 horas hábiles.',
  formErrorValidacion: 'Revisa los campos marcados y vuelve a intentarlo.',
  formErrorServidor:
    'No pudimos enviar el mensaje. Escríbenos a contacto@vertek.mx y lo resolvemos igual de rápido.',
  formErrorRed:
    'No hay conexión. Revisa tu red y vuelve a intentarlo, o escríbenos a contacto@vertek.mx.',

  // --- Pie ---
  footerGrupo: 'Grupo',
  footerEmpresas: 'Empresas',
  footerContacto: 'Contacto',
  footerCobertura: 'Cobertura nacional',
  footerProximamente: 'próximamente',
  footerDerechos: 'Todos los derechos reservados.',
  footerLegales: 'Legales',
  footerAviso: 'Aviso de privacidad',

  // --- Legal ---
  legalEyebrow: 'Legal',
  legalActualizado: 'Última actualización:',

  // --- 404 ---
  e404Eyebrow: 'Error 404',
  e404Titulo: 'La página que buscas no existe o cambió de dirección.',
  e404Texto:
    'Vuelve al inicio para conocer las empresas del grupo, o escríbenos y te canalizamos con el equipo indicado.',
};

const en = {
  // --- Navegación ---
  navIrAlInicio: 'Vertek, home',
  navPrincipal: 'Main navigation',
  navAbrirMenu: 'Open menu',
  navCerrarMenu: 'Close menu',
  irAlContenido: 'Skip to content',

  // --- Llamadas a la acción ---
  ctaContacto: 'Contact',
  ctaContactarGrupo: 'Contact the group',
  ctaIrAlInicio: 'Back to home',

  // --- Selector de idioma ---
  idiomaCambiar: 'Ver esta página en español',
  idiomaCodigoActual: 'EN',
  idiomaCodigoOtro: 'ES',
  idiomaOtro: 'Español',

  // --- Tarjeta de cierre del portafolio ---
  empresaCtaTitulo: 'A single point of contact',
  empresaCtaTexto:
    'If your project involves more than one company in the group, write to us and we will coordinate everything from one point of contact.',

  // --- Contacto y formulario ---
  contactoCorreoGrupo: 'Group email',
  contactoSede: 'Headquarters',
  formNombre: 'Full name',
  formEmpresa: 'Company',
  formCorreo: 'Work email',
  formTelefono: 'Phone',
  formMensaje: 'Message / requirement',
  formEnviar: 'Send message',
  formNotaAntes: 'By submitting this form you agree to the processing of your data under our ',
  formNotaEnlace: 'privacy notice',
  formNotaDespues: '.',

  // --- Estados del envío del formulario ---
  formEnviando: 'Sending…',
  formExito: 'Message sent. We will reply within 24 business hours.',
  formErrorValidacion: 'Check the highlighted fields and try again.',
  formErrorServidor:
    'We could not send your message. Write to us at contacto@vertek.mx and we will take it from there.',
  formErrorRed:
    'No connection. Check your network and try again, or write to us at contacto@vertek.mx.',

  // --- Pie ---
  footerGrupo: 'Group',
  footerEmpresas: 'Companies',
  footerContacto: 'Contact',
  footerCobertura: 'Nationwide coverage',
  footerProximamente: 'coming soon',
  footerDerechos: 'All rights reserved.',
  footerLegales: 'Legal',
  footerAviso: 'Privacy notice',

  // --- Legal ---
  legalEyebrow: 'Legal',
  legalActualizado: 'Last updated:',

  // --- 404 ---
  e404Eyebrow: 'Error 404',
  e404Titulo: 'The page you are looking for does not exist or has moved.',
  e404Texto:
    'Go back to the home page to see the companies in the group, or write to us and we will route you to the right team.',
};

const diccionarios = { es, en };

export const traducir = (idioma) => diccionarios[idioma] ?? diccionarios.es;
