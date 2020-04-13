const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

function getLetterDNI(dni) {
    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE',
        resultado = dni % 23;

    letra = letras.substring(resultado, resultado + 1)
    return letra
}

app.get('/calcular-dni/:dni', (req, res) => {
    console.log()
    if (isNaN(req.params.dni) || req.params.dni.length !== 8) {
        res.end('El dni introducido no es correcto, por favor introduzca uno en el final de la URL');
    }
    res.end(`La letra que corresponde al DNI insertardo es la ${getLetterDNI(req.params.dni)} y su DNI completo es ${req.params.dni}${getLetterDNI(req.params.dni)}`);
})

app.get('/', (req, res) => {
    res.redirect('/calcular-dni/')
})

app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`)
})