function mostrarMensaje(derecho) {
  const contenido = document.getElementById("contenido");
  let mensaje = "";

  switch (derecho) {
    case 'Educación':
      mensaje = `
        <strong>📘 Derecho a la Educación:</strong><br><br>
        La educación es uno de los derechos fundamentales más poderosos para romper el ciclo de la pobreza. Las mujeres y los niños tienen derecho a una educación inclusiva, equitativa y de calidad.<br><br>
        Muchas niñas en el mundo aún enfrentan barreras para acceder a la escuela debido a la pobreza, los matrimonios forzados, las normas sociales restrictivas o la violencia de género. Garantizar su educación no solo mejora sus vidas, sino también la de sus familias y comunidades.<br><br>
        En el caso de los niños, la educación desde temprana edad fortalece su desarrollo cognitivo, emocional y social. También promueve valores como el respeto, la solidaridad y la igualdad.<br><br>
        <strong>Importancia:</strong><br>
        - Reduce el embarazo adolescente.<br>
        - Disminuye la violencia doméstica.<br>
        - Aumenta las oportunidades de empleo.<br>
        - Fomenta la participación ciudadana.<br><br>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Z7IF4x9U5W4" frameborder="0" allowfullscreen></iframe>
      `;
      break;

    case 'Salud':
      mensaje = `
        <strong>❤️ Derecho a la Salud para Mujeres y Niños:</strong><br><br>
        Todas las mujeres y todos los niños tienen derecho a disfrutar del más alto nivel posible de salud física y mental. Este derecho incluye el acceso a servicios de salud gratuitos o accesibles, atención médica adecuada, información sobre salud sexual y reproductiva, y entornos saludables.<br><br>
        <strong>Salud de las mujeres:</strong><br>
        - Atención médica durante el embarazo, parto y posparto.<br>
        - Acceso a métodos anticonceptivos seguros y legales.<br>
        - Prevención y tratamiento de enfermedades como el cáncer de mama y cuello uterino.<br>
        - Apoyo psicológico ante la violencia doméstica y otros traumas.<br><br>
        <strong>Salud de los niños:</strong><br>
        - Vacunación completa y oportuna.<br>
        - Atención pediátrica de calidad.<br>
        - Nutrición adecuada desde el nacimiento.<br>
        - Acceso a agua potable y servicios de saneamiento.<br><br>
        <strong>Retos:</strong><br>
        En zonas rurales o de pobreza extrema, miles de mujeres y niños mueren por enfermedades prevenibles o por no contar con atención médica inmediata.<br><br>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/yrI-8A-EZ_U" frameborder="0" allowfullscreen></iframe>
      `;
      break;

    case 'Protección':
      mensaje = `
        <strong>🛡️ Derecho a la Protección:</strong><br><br>
        Todos los niños y mujeres tienen derecho a ser protegidos contra cualquier forma de abuso, violencia, explotación y trato inhumano. Este derecho debe garantizarse tanto en el hogar como en la sociedad.<br><br>
        <strong>Para las mujeres:</strong><br>
        - Protección contra la violencia doméstica, el acoso, la trata de personas y la explotación sexual.<br>
        - Acceso a refugios seguros, asistencia legal y servicios de salud física y mental.<br><br>
        <strong>Para los niños:</strong><br>
        - Protección frente al abuso sexual, el trabajo infantil y el maltrato físico y psicológico.<br>
        - Derecho a vivir en un entorno familiar seguro, a no ser reclutado por grupos armados, y a recibir protección si están en situación de migración o abandono.<br><br>
        <strong>Acciones necesarias:</strong><br>
        - Sistemas de denuncia eficaces y accesibles.<br>
        - Capacitación a maestros, policías y personal de salud para identificar y actuar ante casos de violencia.<br>
        - Apoyo emocional, legal y económico a las víctimas.<br><br>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/PwWdBFkUiXA" frameborder="0" allowfullscreen></iframe>
      `;
      break;

    case 'Igualdad':
      mensaje = `
        <strong>⚖️ Derecho a la Igualdad:</strong><br><br>
        La igualdad es un principio fundamental de los derechos humanos. Todas las personas, sin importar su género, edad, etnia o condición económica, deben tener las mismas oportunidades y ser tratadas con respeto y dignidad.<br><br>
        <strong>Mujeres:</strong><br>
        - Igual salario por igual trabajo.<br>
        - Acceso igualitario a la educación, la salud, el empleo y la política.<br>
        - Eliminación de estereotipos de género que limitan su desarrollo.<br><br>
        <strong>Niños y niñas:</strong><br>
        - Ser tratados con equidad sin importar su género, discapacidad o entorno familiar.<br>
        - Igual acceso a juegos, educación, salud y participación.<br><br>
        <strong>Realidad:</strong><br>
        En muchos lugares, las niñas tienen menos posibilidades de asistir a la escuela, las mujeres enfrentan violencia por el simple hecho de serlo, y los niños pobres o con discapacidades son excluidos.<br><br>
        La igualdad no es solo un derecho, es la base de una sociedad justa y en paz.<br><br>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Z7IF4x9U5W4" frameborder="0" allowfullscreen></iframe>
      `;
      break;

    case 'Participación':
      mensaje = `
        <strong>🗣️ Derecho a la Participación:</strong><br><br>
        Toda persona tiene derecho a expresar sus opiniones, a ser escuchada y a participar activamente en las decisiones que le afectan. Esto incluye tanto a niños como a mujeres, quienes históricamente han sido excluidos de estos espacios.<br><br>
        <strong>Niños:</strong><br>
        - Participación en decisiones escolares y familiares.<br>
        - Ser tomados en cuenta en planes comunitarios, programas educativos y políticas públicas.<br>
        - Expresar libremente sus ideas en un ambiente seguro y sin represalias.<br><br>
        <strong>Mujeres:</strong><br>
        - Ser parte de espacios políticos, sociales y económicos.<br>
        - Ser líderes en comunidades, empresas y gobiernos.<br>
        - Expresar sus opiniones sin miedo ni censura.<br><br>
        Fomentar la participación activa fortalece la democracia, promueve la inclusión y construye ciudadanía desde edades tempranas.<br><br>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/9xRnICa0tBg" frameborder="0" allowfullscreen></iframe>
      `;
      break;

    default:
      mensaje = "Haz clic en un derecho para conocer más.";
  }

  contenido.innerHTML = `<p>${mensaje}</p>`;
}

window.addEventListener('DOMContentLoaded', () => {
  const titulo = document.getElementById('titulo-principal');
  titulo.classList.add('animado');
});
