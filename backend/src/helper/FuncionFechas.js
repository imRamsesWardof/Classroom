export function separarPorMes(arreglo, propiedadFecha) {
  const meses = {};
  const anioActual = new Date().getFullYear();
  arreglo.forEach((objeto) => {
    const fecha = new Date(objeto[propiedadFecha]);
    console.log('fecha', fecha);
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    if (anio !== anioActual) {
      return;
    }
    const clave = `${mes}-${anio}`;
    if (!(clave in meses)) {
      meses[clave] = [];
    }
    meses[clave].push(objeto);
  });
  // Agregar arrays vacíos para cualquier mes que no tenga tareas
  for (let mes = 1; mes <= 12; mes++) {
    const clave = `${mes}-${anioActual}`;
    if (!(clave in meses)) {
      meses[clave] = [];
    }
  }
  return meses;
}


export function separarPorMes2(arreglo, propiedadFecha) {
  const meses = {};
  const anioActual = new Date().getFullYear();
  arreglo.forEach((objeto) => {
    const fecha = new Date(objeto[propiedadFecha]);
    const mes = fecha.getMonth();
    const anio = fecha.getFullYear();
    if (anio !== anioActual) {
      return;
    }
    const clave = `${mes}-${anio}`;
    if (!(clave in meses)) {
      meses[clave] = 0;
    }
    meses[clave]++;
  });
  // Crear un arreglo de objetos con la estructura { "x": nombre del mes, "y": <count de cantidad de tareas> }
  const resultado = [];
  for (let mes = 0; mes < 12; mes++) {
    const clave = `${mes}-${anioActual}`;
    const nombreMes = new Date(anioActual, mes).toLocaleString('es-ES', { month: 'long' });
    const nombreMesCapitalizado = nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);
    resultado.push({ "x": nombreMesCapitalizado, "y": meses[clave] || 0 });
  }
  return resultado;
}
