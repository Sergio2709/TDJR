<template>
  <section id="RegistroMedico">
    <a id="atras" href="#/Login/">atras</a>
    <h3>Registro medico</h3>
    <form v-on:submit.prevent="processSignUpMedico">
      <h4>
        <br>
        <label> Nombres </label>
        <input type="text" v-model="medico.nombres" placeholder="Nombres" /><br />
        <br>
        <label> Apellidos </label>
        <input type="text" v-model="medico.apellidos" placeholder="Apellidos" /><br />
        <br>
        <label> Tipo de documento </label>
        <select type="text" v-model="medico.tipo_documento">  
          <option value="">--Elige una opcion--</option>
          <option value="CC">Cedula de ciudadania</option>
          <option value="CE">Cedula de extrangeria</option>
          <option value="TI">Tarjeta de identidad</option>
        </select> <br />
        <br>
        <label> Numero de documento </label>
        <input type="text" v-model="medico.numero_documento" placeholder="Numero de documento" />        <br />
        <br>
        <label> Género </label>
        <select type="text" v-model="medico.genero" placeholder="Genero">  
          <option value="">--Elige una opción--</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
          <option value="O">Otro</option>
        </select> <br />
        <br>
        <label>Correo electronico </label>
        <input type="text" v-model="medico.correo" placeholder="Correo Electrónico"/><br />
        <br>
        <label> Telefono </label>
        <input type="text" v-model="medico.telefono" placeholder="Télefono" /> <br />
        <br>
        <label> Direccion </label>
        <input type="text" v-model="medico.direccion" placeholder="Dirección"/> <br />
        <br>
        <label> Ciudad </label>
        <input type="text" v-model="medico.ciudad" placeholder="Ciudad"/> <br />
        <br>
        <label> Fecha de nacimiento </label>
        <input type="date" v-model="medico.fecha_nacimiento" placeholder="fecha_nacimiento"/> <br />
        <br>
        <label> Usuario </label>
        <input type="text" v-model="medico.username" placeholder="Username" /> <br />
        <br>
        <label> Contraseña </label>
        <input type="text" v-model="medico.password" placeholder="password" /><br />
        <br>
        <label> Area de desempeño </label>
        <input type="text" v-model="medico.area_desempeno" placeholder="Area de desempeño"/> <br />
      </h4>
      <br />
    <input class="registrar" type="submit" value="Registrar" />
    </form>
  </section>

</template>

<style scoped>
    #RegistroMedico {
        background: rgb(181, 174, 151);
        margin: 1%;
        text-align: center;
        float: right;
        width: 30%;
    }

    #RegistroMedico form input {
        float: right;
        margin-right: 10px;
        border-bottom-color: black;
        background-color: rgb(232, 235, 206);
    }

    #RegistroMedico form select {
        float: right;
        margin-right: 10px;
        border-bottom-color: black;
        background-color: rgb(232, 235, 206);
    }

    #RegistroMedico form label {
        float: left;
        margin-left: 10px;
    }

    #RegistroMedico li {
        float: left;
        list-style: none;
        margin: 15px;
    }

    #RegistroMedico {
        background-color: white;
        border: black 1px solid;
        position: relative;
        right: 80px;
        top: -600px;
    }

    #RegistroMedico form .registrar {
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
    #RegistroFamiliar form .registrar:hover {
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
  name: "Medico",
  data: function () {
    return {
      medico: {
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
        area_desempeno: ""
      },
    };
  },
  methods: {
    processSignUpMedico: function () {
        axios.post("https://healthtdjrfinal.herokuapp.com/personal_Medico/",
        this.medico, 
        { headers: {} })
        .then((result) => {

            let dataSignUp = {
                username: this.medico.username,
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
