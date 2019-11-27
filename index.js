'use strict';

module.exports = function(x, L, k, x_0) {
    return L / ( 1 + Math.pow( Math.E, -k * ( x - x_0 ) ) );
};