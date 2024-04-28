/* Arquivo contendo funções */

const classificaExperiencia = (xp) => {
    switch(true) {
        case xp <= 1000:
            return "Ferro";
        case xp > 1000 && xp <= 2000:
            return "Bronze";
        case xp > 2000 && xp <= 5000:
            return "Prata";
        case xp > 5000 && xp <= 7000:
            return "Ouro";
        case xp > 7000 && xp <= 8000:
            return "Platina";
        case xp > 8000 && xp <= 9000:
            return "Ascendente";
        case xp > 9000 && xp <= 10000:
            return "Imortal";
        case xp > 10000:
            return "Radiante";
    }
}

module.exports = (
    classificaExperiencia
);