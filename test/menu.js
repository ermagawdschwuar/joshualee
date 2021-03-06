$(document).ready(function() {
  $('.drawer').drawer();
});

$('.drawer').drawer({
  class: {
    nav: 'drawer-nav',
    toggle: 'drawer-toggle',
    overlay: 'drawer-overlay',
    open: 'drawer-open',
    close: 'drawer-close',
    dropdown: 'drawer-dropdown'
  },
  iscroll: {
    // Configuring the iScroll
    // https://github.com/cubiq/iscroll#configuring-the-iscroll
    mouseWheel: true,
    preventDefault: false
  },
  showOverlay: true
});

$('.drawer').on('drawer.opened', function(){});

$('.drawer').on('drawer.closed', function(){});

$('.drawer').drawer('open');

$('.drawer').drawer('destroy');

$('.drawer').drawer('toggle');

$('.drawer').drawer('close');