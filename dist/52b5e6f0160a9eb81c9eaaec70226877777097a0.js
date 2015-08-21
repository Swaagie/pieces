reacts.view(355ad21811a88fe4167e85b40e50bade, function view(data
/**/) {
function html(template, data, key) {
  var has = Object.prototype.hasOwnProperty;

  for (key in data) {
    if (has.call(data, key)) {
      //
      // Prevent
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter
      // from messing up the content.
      //
      template = template.replace(new RegExp('{'+ key +'}','g'), function hack() {
        return data[key];
      });
    }
  }

  return template;
}
return html("<div className=\"yellow\">\n  <strong data-pagelet=\"j\"></strong>\n  <strong data-pagelet=\"s\"></strong>\n</div>", data || {});
});