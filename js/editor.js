var previewHTML = '' +
  '<!DOCTYPE html>\n' +
    '<html>\n' +
      '\t<head>\n' +
      '\t</head>\n' +
      '\t<script src="https://ajax.googleapis.com/ajax/libs/threejs/r69/three.min.js"></script>\n' +
      '\t<style>\n' +
      '\t\tbody {\n' +
      '\t\t\tmargin: 0;\n' +
      '\t\t}\n' +
      '\t</style>\n' +
      '\t<body>\n' +
        '\t\t<div id="WebGL-output"></div>\n' +
        '\t\t<script type="text/javascript">\n' +
        '\t\t\tfunction init() {\n' +
        '\t\t\t\tvar scene = new THREE.Scene();\n' +
        '\t\t\t\tvar camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);\n' +
        '\t\t\t\tvar renderer = new THREE.WebGLRenderer();\n' +
        '\n' +
        '\t\t\t\trenderer.setClearColor(new THREE.Color(0xEEEEEE));\n' +
        '\t\t\t\trenderer.setSize(window.innerWidth, window.innerHeight);\n' +
        '\t\t\t\t//renderer.shadowMapEnabled = true;\n' +
        '\n' +
        '\t\t\t\tvar axes = new THREE.AxisHelper(20);\n' +
        '\t\t\t\tscene.add(axes);\n' +
        '\n' +
        '\t\t\t\tvar planeGeometry = new THREE.PlaneGeometry(60, 20);\n' +
        '\t\t\t\tvar planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});\n' +
        '\t\t\t\tvar plane = new THREE.Mesh(planeGeometry, planeMaterial);\n' +
        '\t\t\t\t//plane.receiveShadow = true;\n' +
        '\n' +
        '\t\t\t\tplane.rotation.x = -0.5 * Math.PI;\n' +
        '\t\t\t\tplane.position.x = 15;\n' +
        '\t\t\t\tplane.position.z = 0;\n' +
        '\t\t\t\tplane.position.y = 0;\n' +
        '\t\t\t\tscene.add(plane);\n' +
        '\t\t\t\t//lambert\n' +
        '\t\t\t\tvar cubeGeometry = new THREE.BoxGeometry(4, 4, 4);\n' +
        '\t\t\t\tvar cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});\n' +
        '\t\t\t\tvar cube = new THREE.Mesh(cubeGeometry, cubeMaterial);\n' +
        '\t\t\t\t//cube.castShadow = true;\n' +
        '\n' +
        '\t\t\t\tcube.position.x = -4;\n' +
        '\t\t\t\tcube.position.y = 3;\n' +
        '\t\t\t\tcube.position.z = 0;\n' +
        '\n' +
        '\t\t\t\tscene.add(cube);\n' +
        '\n' +
        '\t\t\t\tvar sphereGeometry = new THREE.SphereGeometry(4, 20, 20);\n' +
        '\t\t\t\tvar sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: true});\n' +
        '\t\t\t\tvar sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);\n' +
        '\t\t\t\t//sphere.castShadow = true;\n' +
        '\n' +
        '\t\t\t\tsphere.position.x = 20;\n' +
        '\t\t\t\tsphere.position.y = 4;\n' +
        '\t\t\t\tsphere.position.z = 2;\n' +
        '\n' +
        '\t\t\t\tscene.add(sphere);\n' +
        '\n' +
        '\t\t\t\tcamera.position.x = -30;\n' +
        '\t\t\t\tcamera.position.y = 40;\n' +
        '\t\t\t\tcamera.position.z = 30;\n' +
        '\n' +
        '\t\t\t\tcamera.lookAt(scene.position);\n' +
        '\n' +
        '\t\t\t\t//var spotLight = new THREE.SpotLight(0xffffff);\n' +
        '\t\t\t\t//spotLight.position.set(-40, 60, -10);\n' +
        '\t\t\t\t//spotLight.castShadow = true;\n' +
        '\t\t\t\t//scene.add(spotLight);\n' +
        '\n' +
        '\t\t\t\tdocument.getElementById("WebGL-output").appendChild(renderer.domElement);\n' +
        '\t\t\t\trenderer.render(scene, camera);\n' +
        '\t\t\t}\n' +
        '\t\t\twindow.onload = init;\n' +
        '\t\t</script>\n' +
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

var preview = document.querySelector('.preview');
var previewIframe = document.createElement('iframe');

preview.appendChild(previewIframe);

var content = previewIframe.contentDocument || previewIframe.contentWindow.document;

content.open();
content.write(previewHTML);
content.close();

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.keyCode === 83) {
    content.open();
    content.write(editor.getValue());
    content.close();
  }
});
