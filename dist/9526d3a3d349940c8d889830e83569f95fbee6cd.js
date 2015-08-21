reacts.once('render:j', function render(component, React) {
  React.createClass({
    displayName: 'J',

    render: function render() {
      return (
        React.createElement("strong", null, "J")
      );
    }
  });
});