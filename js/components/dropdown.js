var Tether = require('tether');

function FluDropdown(toggler, dropdown) {
  new Tether({
    element: dropdown,
    target: toggler,
    attachment: 'top left',
    targetAttachment: 'top right',
    classes: {
      'element' : 'dropdown',
      'target' : '-has-dropdown',
      'enabled' : '-dropdown-enabled',
      'abutted' : '-dropdown-abutted',
      'target-attached' : '-at',
      'element-attached' : '-attached'
    }
  });

  function toggle(event) {
    if (dropdown.classList.contains('-open')) {
      close(event);
    }
    else {
      open(event);
    }
  }

  function closeHandler(event) {
    if (event.target === toggler || event.target === dropdown) {
      return;
    }
    if (dropdown.contains(event.target)) {
      return;
    }
    close(event);
  }

  function open(event) {
    dropdown.classList.add('-open');
  }

  function close(event) {
    dropdown.classList.remove('-open');
  }

  toggler.addEventListener('click', toggle);
  document.addEventListener('click', closeHandler);
}

var Dropdown = {
  init : function () {
    var togglers = document.querySelectorAll('.-has-dropdown');
    console.log(togglers);
    var toggler, attachment;
    for (var i = 0, count = togglers.length; i < count; i++) {
      var toggler = togglers[i];

      if(toggler.hasAttribute('data-target')) {
        attachment = document.querySelector(toggler.getAttribute('data-target'));
      }
      else {
        attachment = toggler.nextElementSibling
      }

      new FluDropdown(toggler, attachment);

      // document.addEventListener('click', function (event) {
      //   if (!event.target.classList.contains('-has-dropdown')) {
      //     document.querySelector('.dropdown.-open').classList.remove('-open');
      //   }
      //
      // });
    }
  }
}
module.exports = Dropdown;
