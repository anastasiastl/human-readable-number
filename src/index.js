module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    } else if (number === 1) {
        return 'one';
    } else if (number === 2) {
        return 'two';
    } else if (number === 3) {
        return 'three';
    } else if (number === 4) {
        return 'four';
    } else if (number === 5) {
        return 'five';
    } else if (number === 6) {
        return 'six';
    } else if (number === 7) {
        return 'seven';
    } else if (number === 8) {
        return 'eight';
    } else if (number === 9) {
        return 'nine';
    } else if (number === 10) {
        return 'ten';
    } else if (number === 11) {
        return 'eleven';
    } else if (number === 12) {
        return 'twelve';
    } else if (number === 13) {
        return 'thirteen';
    } else if (number === 15) {
        return 'fifteen';
    } else if (number === 15) {
        return 'fifteen';
    } else if (number === 18) {
        return 'eighteen';
    }
    
    else if (number >= 14 && number <= 19) {
        return toReadable(number%10) + 'teen';
    } else if (number >= 20 && number < 100) {
        var firstDigit = Math.floor(number/10);
        var result = toReadable(Math.floor(number/10)) + 'ty';
        if (firstDigit === 2) {
            result = 'twenty';
        } else if (firstDigit === 3) {
            result = 'thirty'
        } else if (firstDigit === 4) {
            result = 'forty'
        } else if (firstDigit === 5) {
            result = 'fifty'
        } else if (firstDigit === 8) {
            result = 'eighty'
        }
        if (number%10 !== 0) {
            result += ' ' + toReadable(number%10);
        }
        return result;
    } else if (number >= 100 && number < 1000) {
        var result = toReadable(Math.floor(number/100)) + ' hundred';
        if (number%100 !== 0) {
            result += ' ' + toReadable(number%100);
        }
        return result;
    }


}
