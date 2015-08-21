reacts.once('render:main', function render(component, React) {
  React.createClass({
    displayName: 'main',

    render: function render() {
      return (
        React.createElement("div", {className: "yellow"}, 
          React.createElement(J, null), 
          React.createElement(S, null)
        )
      );
    }
  });
});