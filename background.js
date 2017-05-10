console.log('well, we got this far');

var barf = function(err) {
  console.error(err);
};

browser.windows.getAll({populate: true,
                        windowTypes: ['normal']})
  .then(function(windows) {
    windows.forEach(function(window) {
      console.log('a window!');
      window.tabs.forEach(function(tab) {
        console.log('  a tab: ' + tab.title);
        browser.tabs.executeScript(tab.id, {
          file: '/content.js'
        });
      });
    });
  }, barf);
