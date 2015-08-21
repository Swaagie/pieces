reacts.view(5e5bed702b83943d83e53ebc7a1dc3c3, function view(data
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
return html("<strong className=\"whitesmoke\">J</strong>", data || {});
});