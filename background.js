//main file
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('www/index.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});