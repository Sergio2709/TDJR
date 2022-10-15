<template>
    <section id="RegistroPaciente">
      <a id="atras" href="#/Login/">atras</a>
      <h3>Registro paciente</h3>
      <form v-on:submit.prevent="processSignUpPaciente">
        <h4>
          <br>
          <label> Nombres </label>
          <input type="text" v-model="paciente.nombres" placeholder="Nombres" /><br />
          <br>
          <label> Apellidos </label>
          <input type="text" v-model="paciente.apellidos" placeholder="Apellidos" /><br />
          <br>
          <label> Tipo de documento </label>
          <select type="text" v-model="paciente.tipo_documento" placeholder="Tipo de documento">  
            <option value="">--Elige una opcion--</option>
            <option value="CC">Cedula de ciudadania</option>
            <option value="CE">Cedula de extrangeria</option>
            <option value="TI">Tarjeta de identidad</option>
          </select> <br />
          <br>
          <label> Numero de documento </label>
          <input type="text" v-model="paciente.numero_documento" placeholder="Numero de documento" />        <br />
          <br>
          <label> Género </label>
          <select type="text" v-model="paciente.genero" placeholder="Genero">  
            <option value="">--Elige una opción--</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="O">Otro</option>
          </select> <br />
          <br>
          <label>Correo electronico </label>
          <input type="text" v-model="paciente.correo" placeholder="Correo Electrónico"/><br />
          <br>
          <label> Telefono </label>
          <input type="text" v-model="paciente.telefono" placeholder="Télefono" /> <br />
          <br>
          <label> Direccion </label>
          <input type="text" v-model="paciente.direccion" placeholder="Dirección"/> <br />
          <br>
          <label> Ciudad </label>
          <input type="text" v-model="paciente.ciudad" placeholder="Ciudad"/> <br />
          <br>
          <label> Fecha de nacimiento </label>
          <input type="date" v-model="paciente.fecha_nacimiento" placeholder="fecha_nacimiento"/> <br />
          <br>
          <label> Usuario </label>
          <input type="text" v-model="paciente.username" placeholder="Username" /> <br />
          <br>
          <label> Contraseña </label>
          <input type="text" v-model="paciente.password" placeholder="password" /><br />
          <br>
          <label> EPS </label>
          <input type="text" v-model="paciente.eps" placeholder="EPS"/> <br />
          <br>
          <label> Familiar asignado </label>
          <input type="number" v-model="paciente.familiar_paciente" placeholder="Ingresa un numero"/> <br />
          <br>
          <label> Medico asignado </label>
          <input type="number" v-model="paciente.medico_asignado" placeholder="Ingresa un numero"/> <br />
        
        </h4>
        <br />
      <input class="registrar" type="submit" value="Registrar" />
      </form>
    </section>
  
  </template>
  
  <style scoped>
      #RegistroPaciente {
          background: rgb(181, 174, 151);
          margin: 1%;
          text-align: center;
          float: right;
          width: 30%;
      }
  
      #RegistroPaciente form input {
          float: right;
          margin-right: 10px;
          border-bottom-color: black;
          background-color: rgb(232, 235, 206);
      }
  
      #RegistroPaciente form select {
          float: right;
          margin-right: 10px;
          border-bottom-color: black;
          background-color: rgb(232, 235, 206);
      }
  
      #RegistroPaciente form label {
          float: left;
          margin-left: 10px;
      }
  
      #RegistroPaciente li {
          float: left;
          list-style: none;
          margin: 15px;
      }
  
      #RegistroPaciente {
          background-color: white;
          border: black 1px solid;
          position: relative;
          right: 80px;
          top: -600px;
      }
  
      #RegistroPaciente form .registrar {
          background-color: rgb(181, 174, 151);
          border-bottom-color: black;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 20px;
          padding: 4px 25px;
          border: 4px black;
          float: right;
          margin-right: 10px;
      }
  
      #atras {
          background-color: rgb(181, 174, 151);
          border-bottom-color: black;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 20px;
          padding: 4px 25px;
          border: 4px black;
          float: left;
          margin-left: 10px;
          margin-top: 10px;
      }

      #RegistroPaciente form .registrar:hover {
         background: rgb(195, 70, 8);
      }
      #atras:hover {
         background-color: rgb(195, 70, 8);
      }
  
  </style>
  
  <script>
  import axios from "axios";
  import Swal from "sweetalert2";
  export default {
    name: "Paciente",
    data: function () {
      return {
        paciente: {
          nombres: "",
          apellidos: "",
          tipo_documento: {},
          numero_documento: "",
          genero: {},
          correo: "",
          telefono: "",
          direccion: "",
          ciudad: "",
          fecha_nacimiento: "",
          username: "",
          password: "",
          eps: "",
          familiar_paciente: "",
          medico_asignado: ""
        },
      };
    },
    methods: {
      processSignUpPaciente: function () {
          axios.post("https://healthtdjrfinal.herokuapp.com/paciente/",
          this.paciente, 
          { headers: {} })
          .then((result) => {
  
              let dataSignUp = {
                  username: this.paciente.username,
                  token_access: result.data.access,
                  token_refresh: result.data.refresh,
              };
              this.$emit("completedSignUp", dataSignUp); //completesingout
  
              Swal.fire(
                  "Datos registrados Corectamente!",
                  "You clicked the button!",
                  "success"
                  );
              })
              this.$router.push("Login")
              .catch((error) => {
                  console.log(error);
                      Swal.fire({
                      title: "Error!",
                      text: "Datos no registrados",
                      icon: "error",
                      confirmButtonText: "Intentar nuevamente",
                      });
                  });
              },
          },
      };
  </script>