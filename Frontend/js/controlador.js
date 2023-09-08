function votar(i) {
  console.log('Agregar votación ', i);
}

function modalUsuario() {
  $('#modal-usuarios').modal('show');
  obtenerUsuarios();
}

function modalPregunta() {
  $('#modal-pregunta').modal('show');
}

function seleccionarUsuario(id) {


  fetch(`http://localhost:3000/usuarios/${id}`).then(response => response.json())
  .then(data => {
    if (data.status) {
      localStorage.removeItem('usuario');
      const usuario = JSON.stringify(data.usuario);
      localStorage.setItem("usuario", usuario);
      console.log(usuario); 
      document.getElementById('navbarSupportedContent').innerHTML=`<form class="form-inline my-2 my-lg-0 ml-auto">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-warning my-2 my-sm-0" type="button">Search</button>
    </form><img src="${data.usuario.urlImagen}" class="profile-pic" onclick="modalUsuario()">`;

      
    } else {
      console.log('No se encontraron usuarios:', data.message);
    }
  });

obtenerPreguntas();

  console.log('Usuario', id);
}

function verPreguntas() {
  document.getElementById('listaPreguntas').style.display = 'block';
  document.getElementById('detallePregunta').style.display = 'none';
}

function  verDetallePregunta() {
  document.getElementById('listaPreguntas').style.display = 'none';
  document.getElementById('detallePregunta').style.display = 'block';
}


function obtenerUsuarios() {
  document.getElementById('UsuariosImages').innerHTML="";
  fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const Usuarios = data.Usuarios; 
        Usuarios.forEach(usuario => {
          document.getElementById('UsuariosImages').innerHTML+=`<img src="${usuario.urlImagen}" class="img-fluid select-image" onclick="seleccionarUsuario('${usuario._id}')">`;
        });
      } else {
        console.log('No se encontraron motoristas:', data.message);
      }
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });

    
}

function obtenerPreguntas(){
  const usuarioJSON = localStorage.getItem("usuario");
  const usuario = JSON.parse(usuarioJSON);
  const preguntas = usuario.preguntas;
console.log(preguntas);

  document.getElementById('listaPreguntas').innerHTML=`<div class="row">
  <div class="col-12">
    <h2>Preguntas Top</h2>
    <button class="btn btn-outline-warning btn-sm" onclick="modalPregunta()">Nueva Pregunta</button>
  </div>
</div>`;


  preguntas.forEach(pregunta => {
    console.log(pregunta.id);


    fetch(`http://localhost:3000/preguntas/${pregunta.id}`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        const Pregunta = data.Pregunta; 
        const hasttags = Pregunta.hashtags;
        let Nrespuestas = Pregunta.respuestas.length;

        let Hastag;
        hasttags.forEach(hastagn =>{

          Hastag+= `<span class="badge badge-warning">${hastagn}</span>`;

        });



        document.getElementById('listaPreguntas').innerHTML+=`
        <!-- Item -->
          <div class="row question-row">
            <div class="col-md-2 col-lg-1 text-center text-muted small">
              <div>${Pregunta.votos}</div>
              <div>Votos</div>
            </div>
            <div class="col-md-2 col-lg-1 text-center text-muted small">
              <div>${Nrespuestas}</div>
              <div>Respuestas</div>
            </div>
            <div class="col-md-2 col-lg-1 text-center text-muted small">
              <div>${Pregunta.vistas}</div>
              <div>Vistas</div>
            </div>
            <div class="col-md-6 col-lg-9">
              <div>
                <button class="btn btn-link" onclick="verDetallePregunta()">${Pregunta.titulo}</button>
              </div>
              <div>
                ${Hastag}
              </div>
              <div class="float-right">
                <span class="small text-muted">12/12/2012</span>
                <span class="small user-text">${usuario.nombre}</span>
                <img src="${usuario.urlImagen}" class="small-profile-pic">
              </div>
            </div>
          </div>
          <!-- Fin Itemn -->
        `;
      } else {
        console.log('No se encontraron motoristas:', data.message);
      }
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });

  });


}
