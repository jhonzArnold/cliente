// Función para enviar el pedido a la URL de administración
function enviarPedido(pedido) {
    const url = 'https://script.google.com/macros/s/AKfycbxiW3FIzqYvdc1agPa73HVYUPMcLsWSZXajZTBllec/dev'; // Cambia esto por tu URL de Google Apps Script

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(pedido),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert('Pedido realizado con éxito.');
        } else {
            alert('Error al realizar el pedido.');
        }
    })
    .catch(error => {
        alert('Ocurrió un error al realizar el pedido: ' + error);
    });
}
