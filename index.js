let citytours = [
    { id: 1, nombre: "Casco histórico", turno: "domingo" },
    { id: 2, nombre: "Patrimonio arquitectura", turno: "sábado" },
    { id: 3, nombre: "Calles con historia", turno: "viernes" },
    { id: 4, nombre: "Iglesias", turno: "jueves" },
  ];

  let turno = prompt("De jueves a domingo, elige un día y te contamos qué citytour podés hacer");
  let filtrados = citytours.filter(item => item.nombre === turno); 

  for(const producto of filtrados){
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>ID: ${producto.id}</h2>
      <p>Producto: ${producto.nombre}</p>
      <b>${producto.turno}</b>
    `;
    contenedor.append(div);
  } 

 /* Marce, en la parte de filter, no está bien pensado? que de acuerdo al dia elegido me filtre qué tour hay disponible?*/ 
/*porque no logro que aparezca en el html?? */