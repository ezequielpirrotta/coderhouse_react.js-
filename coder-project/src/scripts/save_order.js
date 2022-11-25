
button.addEventListener("click", (e) =>
{
    e.preventDefault();
    Swal.fire({
        title: 'Atención!',
        text: 'Estás seguro que quieres volver? Perderás tus datos del pedido!',
        icon: 'warning',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: 'No guardar'
    }).then((result) => {
        if (result.isConfirmed) 
        {
            const fs = require('fs/promises');
            console.log(fs);
            fs.writeFileSync("../assets/save_loans.json", JSON.stringify(loans));
            let loans = null;
            //console.log(parseFloat(Math.random()*1000).toFixed(0));
            //loans[Math.random()*1000]=(loan);
            Swal.fire('Préstamo guardado!', '', 'success')
        } 
        else if (result.isDenied) 
        {
            localStorage.clear();
            window.location.href = "../sections/loan_info.html";
            Swal.fire('No se guardó tu préstamo!', '', 'info')
        }
    });
});