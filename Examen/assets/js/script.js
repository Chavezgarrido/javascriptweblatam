async function cambiarValor(){
    const monto = document.getElementById('ingresoValor').value;
    const monedaAConvertir = document.getElementById('monedaConvertir').value;
    
    try{
        const response = await fetch('mindicador.json');
        const data = await response.json();
        const intercambio = data[monedaAConvertir].valor;
        const valorConvertido = (monto / intercambio).toFixed(2);
        document.getElementById('resultadoConversion').innerText = ` El monto en ${monedaAConvertir} es: ${valorConvertido}`; 
    }
    catch (error){
        document.getElementById('resultadoConversion').innerText = ` Error: ${error.message}`;
    }
}

