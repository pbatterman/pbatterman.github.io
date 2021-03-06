var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var loader = new THREE.OBJLoader();

  // load a resource
  var gear;
  var gear_small;
  var gear_small2;
  var gear4;
  var gear5;





  

  

  

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.CylinderGeometry( 10, 10, 5, 10 );
  var material = new THREE.MeshPhongMaterial({color: 0x666666});
  var cylinder = new THREE.Mesh( geometry, material );
  // scene.add( cylinder );
  cylinder.rotation.x = Math.PI/2;

  var geometry1 = new THREE.CylinderGeometry( 20, 20, 5, 20 );
  var cylinder2 = new THREE.Mesh( geometry1, material );
  // scene.add( cylinder2 );
  cylinder2.rotation.x = Math.PI/2;
  cylinder2.position.y -= 30;


  // camera.position.z = 30;
  // camera.rotation.x = -Math.PI/8;
  // camera.position.y = 20;


  camera.position.x = -25.42;
  camera.position.y = 15;
  camera.position.z = -20;

  camera.rotation.x = -2.51;
  camera.rotation.y = -0.78;
  camera.rotation.z = -2.67;

  controls = new THREE.OrbitControls( camera, renderer.domElement );

  var ambientLight = new THREE.AmbientLight( 0x000000 );
  scene.add( ambientLight );

  var lights = [];
  lights[0] = new THREE.PointLight( 0xffffff, 1, 0 );
  lights[1] = new THREE.PointLight( 0xffffff, 1, 0 );
  lights[2] = new THREE.PointLight( 0xffffff, 1, 0 );
  
  lights[0].position.set( 0, 200, 0 );
  lights[1].position.set( 100, 200, 100 );
  lights[2].position.set( -100, -200, -100 );

  scene.add( lights[0] );
  scene.add( lights[1] );
  scene.add( lights[2] );


  loader.load(
    // resource URL
    'assets/gear2.obj',
    // Function when resource is loaded
    function ( object ) {
      object.rotation.x = Math.PI/2;
      object.rotation.y = 0;
      // object.position.y -= 30;
      scene.add( object );
      gear = object;
    }
    );

  loader.load(
    // resource URL
    'assets/gear3.obj',
    // Function when resource is loaded
    function ( object ) {
      object.rotation.x = Math.PI/2;
      object.rotation.y = -2;
      object.position.y -= 7.9;
      object.scale.x = 0.9;
      object.scale.y = 0.9;
      object.scale.z = 0.9;
      scene.add( object );
      gear_small = object;


      loader.load(
        // resource URL
        'assets/gear3.obj',
        // Function when resource is loaded
        function ( object ) {
          object.rotation.y = -0.9;
          object.position.y += 20.5;
          object.position.z -= 2.1;
          object.scale.x = 0.9;
          object.scale.y = 0.9;
          object.scale.z = 0.9;
          scene.add( object );
          gear_small2 = object;

          loader.load(
            // resource URL
            'assets/gear4.obj',
            // Function when resource is loaded
            function ( object ) {
              object.rotation.y = -0.9;
              object.position.y += 5.3;
              object.position.z += 2.8;
              object.scale.x = 0.9;
              object.scale.y = 0.9;
              object.scale.z = 0.9;
              scene.add( object );
              gear4 = object;

              loader.load(
                // resource URL
                'assets/gear5.obj',
                // Function when resource is loaded
                function ( object ) {
                  object.rotation.y = -2;
                  object.position.y -= 10.5;
                  object.position.z -= 2.8;
                  object.scale.x = 0.9;
                  object.scale.y = 0.9;
                  object.scale.z = 0.9;
                  scene.add( object );
                  gear5 = object;

                  render();
                }
                );
            }
            );
}
);
}
);




  // while (1) {
  //   if (gear && gear_small2 && gear_small && gear4 && gear5) {
  // setTimeout(function() {
    // render();
  // }, 2000); 

  //     break;
  //   }
  // }

  function render() {
    requestAnimationFrame( render );

    gear.rotation.y += 0.01;
    gear_small.rotation.y -= 0.02;
    gear_small2.rotation.y -= 0.02;
    gear4.rotation.y += 0.02;
    gear5.rotation.y -= 0.02;

    // cylinder.rotation.y += 0.02;
    // cylinder2.rotation.y -= 0.01;

    renderer.render(scene, camera);
  };
  