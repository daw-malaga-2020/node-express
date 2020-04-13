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
    if (req.params.dni != isNaN) {
        res.end(`La letra que corresponde al DNI insertardo es la ${getLetterDNI(req.params.dni)} y su DNI completo es ${req.params.dni}${getLetterDNI(req.params.dni)}`)
    } else {
        console.log('hola')
    }
    res.end()
})

app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`)
})