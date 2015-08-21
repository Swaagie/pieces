reacts.once('render:s', function render(component, React) {
  React.createClass({
    displayName: 'S',

    render: function render() {
      return (
        React.createElement("strong", null, "S")
      );
    }
  });
});