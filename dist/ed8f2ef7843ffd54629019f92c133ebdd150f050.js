var Main = React.createClass({
  displayName: 'main',

  render: function render() {
    return (
      React.createElement("div", {className: "yellow"}, 
        React.createElement("div", {"data-pagelet": "j"}), 
        React.createElement("div", {"data-pagelet": "s"})
      )
    );
  }
});