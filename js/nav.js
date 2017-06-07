
(function() {
  [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
    var menuItems = menu.querySelectorAll('.menu-link'),
      setCurrent = function(ev) {
        ev.preventDefault();

        var item = ev.target.parentNode; // li

        // return if already current
        if (classie.has(item, 'current-item-selected')) {
          return false;
        }
        // remove current
        classie.remove(menu.querySelector('.current-item-selected'), 'current-item-selected');
        // set current
        classie.add(item, 'current-item-selected');
      };

    [].slice.call(menuItems).forEach(function(el) {
      el.addEventListener('click', setCurrent);
    });
  });

  [].slice.call(document.querySelectorAll('.link-copy')).forEach(function(link) {
    link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
    new Clipboard(link);
    link.addEventListener('click', function() {
      classie.add(link, 'link-copy--animate');
      setTimeout(function() {
        classie.remove(link, 'link-copy--animate');
      }, 300);
    });
  });
})(window);
