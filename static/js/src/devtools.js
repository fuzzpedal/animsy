chrome.devtools.panels.create("Animsy",
    "icon.png",
    "Panel.html",
    function (panel) {
        console.log('panel created');
    }
);

chrome.devtools.inspectedWindow.eval(
    "document.getElementById('test').innerHTML = 'Boom!'",
    function(result, isException) {
        console.log(result)
    }
);

document.getElementById('timeline').innerHTML = '----'

