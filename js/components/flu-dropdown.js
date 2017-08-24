var Drop = require('tether-drop');

var Dropdown = {
  init: function () {
    var togglers = document.querySelectorAll('.-has-dropdown');

    if (togglers.length > 0) {

      var toggler, dropdown, popper;

      for (var i = 0, count = togglers.length; i < count; i++) {
        toggler = togglers[i];

        if (toggler.hasAttribute('data-target')) {
          dropdown = document.querySelector(toggler.getAttribute('data-target'));
        }
        else {
          dropdown = toggler.nextElementSibling;
        }

        popper = new Drop({
          target: toggler,
          content: dropdown,
          position: 'bottom left',
          tetherOptions: {
            classes: {
              'element' : '-tether',
              'target' : '-tether',
              'enabled' : '-enabled',
              'abutted' : '-abutted',
              'target-attached' : '-target-attached',
              'element-attached' : '-element-attached'
            }
          }
        });

      }

    }
  }
};

module.exports = Dropdown;