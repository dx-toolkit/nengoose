'use strict';

module.exports = function get(obj, path, def) {
    const parts = path.split('.');
    let rest = path;
    let cur = obj;
    for (const part of parts) {
        if (cur == null) {
            return def;
        }

        if (cur[rest] != null) {
            return cur[rest];
        }

        cur = getProperty(cur, part);

        rest = rest.substr(part.length + 1);
    }

    return cur == null ? def : cur;
};

function getProperty(obj, prop) {
    if (obj === null) {
        return obj;
    }
    if (obj instanceof Map) {
        return obj.get(prop);
    }
    return obj[prop];
}