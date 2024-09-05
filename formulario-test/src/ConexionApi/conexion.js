export const RegistrarData = async (nombre, telefono, correo, comentarios) => {
    await fetch("http://localhost:3000/registros",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        nombre: nombre,
        telefono: telefono, 
        correo: correo, 
        comentarios: comentarios
    }),
    });

}