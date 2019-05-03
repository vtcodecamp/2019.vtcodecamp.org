"use strict";

module.exports = function(data) {
    return JSON.stringify({
        config: data.config,
    });
};