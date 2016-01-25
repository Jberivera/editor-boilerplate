var previewHTML = '' +
  '<!DOCTYPE html>\n' +
    '<html>\n' +
      '\t<head>\n' +
      '\t</head>\n' +
      '\t<body>\n' +
        '\t\tHola\n' +
      '\t</body>\n' +
    '</html>\n';

var editor = CodeMirror(document.querySelector('#editor'), {
  value: previewHTML,
  mode: 'text/html',
  lineNumbers: true,
  matchBrackets: true,
  indentWithTabs: true,
  tabSize: 2,
  indentUnit: 4
});

// editor.on('change', function() {
//   buttonSave.style.display = '';
//   buttonDownload.style.display = 'none';
//   if ( documents[ 0 ].autoupdate === false ) return;
//   clearTimeout( interval );
//   interval = setTimeout( update, 500 );
// });

var preview = document.querySelector('.preview');
var previewIframe = document.createElement('iframe');

preview.appendChild(previewIframe);

var content = previewIframe.contentDocument || previewIframe.contentWindow.document;

content.open();
content.write(previewHTML);
content.close();
