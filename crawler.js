var page           = require('webpage').create();
var testindex      = 0;
var loadInProgress = false;
var fs             = require('fs');
var system         = require('system');

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.onLoadStarted = function() {
  loadInProgress = true;
};

page.onLoadFinished = function() {
  loadInProgress = false;
};

var steps = [
  function() {
    page.open("https://m.facebook.com/groups/1687270451485004?view=photos");
  },
  function() {
    return page.evaluate(function(env) {
      document.querySelector('input[name="email"]').value = env.EMAIL;
      document.querySelector('input[name="pass"]').value = env.PASSWORD;
      return 0;
    }, system.env);
  },
  function() {
    return page.evaluate(function() {
      document.querySelector('button[name="login"]').click();
      return 0;
    });
  },
  function() {
    return page.evaluate(function() {
      document.querySelector('#m_more_item a').click();
      return 0;
    });
  },
  function() {
    return page.evaluate(function() {
      if (document.querySelector('#m_more_item a')) {
        return 1;
      }

      return 0;
    });
  },
  function() {
    return page.evaluate(function() {
      var nodes = document.querySelectorAll('.albums .item.tall');

      return Array.prototype.map.call(nodes, function(item) {
        var name = item.querySelector('a.touchable').href.match(/facebook.com\/(.+)\/albums/);
        name = name ? name[1] : '';

        return {
          title: item.querySelector('strong').innerHTML,
          name: name,
          url: item.querySelector('a.touchable').href.replace(/m.facebook/, 'facebook'),
          img: item.querySelector('.img').style.backgroundImage.substring(4).slice(0, -1),
          count: item.querySelector('.subtitle').innerHTML
        };
      });
    });
  }
];

setInterval(function() {
  if (!loadInProgress && typeof steps[testindex] == "function") {
    console.log("step " + (testindex + 1));

    var result = steps[testindex]();
    if (result == 1) {
      testindex = 3;
    }
    else {
      if (typeof result == 'object') {
        var path = 'build/data.json';
        var content = JSON.stringify(result);
        fs.writeFile(path, content);
      }

      testindex++;
    }
  }

  if (typeof steps[testindex] != "function") {
    console.log("test complete!");
    phantom.exit();
  }
}, 500);
