module.exports = function (content) {
  this.cacheable && this.cacheable();

  var lines = content.split('\n');
  var match, result = {};

  var reg = /^\s*([a-z0-9_]+)\s*=\s*(.*?)\s*$/i;

  for (var i = 0, len = lines.length; i < len; i++) {
    match = reg.exec(lines[i]);

    if (!match) continue;

    result[match[1]] = match[2];
  }

  this.value = result;

  return "module.exports = " + JSON.stringify(result) + ";";
}
