
<template>
  <!--<router-link to="/">Home</router-link> -->


    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> App </title>
  </head>
  <header>
    <h1>App Medicina en Casa - Mision Tic 2022</h1>
  </header>
  <nav>
    <ul>
      <h1>
        <li>
          <a id="inicio" href="#/">Inicio</a>
        </li>
      </h1>
      <h1>
        <li>
          <a id="logina" href="#/Login/">Login</a>
        </li>
      </h1>
    </ul>
  </nav>

  


  <div id=clearfix> </div>
  <aside id="texto">
    <h1>Health - Medicina en casa</h1>
    <h4>Esta pagina esta diseñada para que el contacto virtual entre el paciente y el medico, para seguir los pacientes
      de manera integra y monitorearlos mientras estan en la comodidad de la casa </h4>
    <img width="80%" alt="homehealth"
      src="@/assets/medico.jpg">

  </aside>
  <router-view  /> 

</template>

<style>
  #clearfix {
    clear: both
  }

  nav ul li {
    float: left;
    list-style: none;
    margin: 10px;
  }

  body {
    background: rgb(232, 235, 206);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 10px;

  }

  header {
    background: rgb(181, 174, 151);
    width: 100%;
  }

  nav {
    background: rgb(181, 174, 151);
    width: 50%;
  }

  #texto {
    width: 50%;

  }

  #inicio{
    padding: 4px 25px;
    background: rgb(181, 174, 151);
    border: 4px  rgb(92, 89, 88);
    color: #fff;
    border-radius: 4px;
    text-decoration:none;
    transition: background-color .5s;

  }

  #logina{
    padding: 4px 25px;
    background:rgb(181, 174, 151);
    border: 4px  rgb(92, 89, 88);
    color: #fff;
    border-radius: 4px;
    text-decoration:none;
    transition: background-color .5s;
  }

  #logina:hover {
    background: rgb(195, 70, 8)
  }

  #inicio:hover {
    background: rgb(195, 70, 8);


  }

</style>

