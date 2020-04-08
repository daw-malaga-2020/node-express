let horaIntroducida = 20
const horaActual = horaIntroducida || new Date().getHours();

if (horaActual >= 7 && horaActual <= 15) {
    console.log('Buenos días')
} else if (horaActual >= 16 && horaActual <= 19) {
    console.log('Buenas tardes')
} else if (horaActual <= 6 || horaActual >= 20) {
    console.log('Buenas noches')
}