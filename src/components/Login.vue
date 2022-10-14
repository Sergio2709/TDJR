<template>
    <aside id=login>
        <br>
        <h2>Ingreso</h2>
        <br>
        <form v-on:submit.prevent="processLogInUser">
            <h3>
            <label>Usuario </label>
            <input id="usuario" type="text" v-model="user.username" placeholder="Username">
            <br />
            <br>
            <label>Contraseña</label>
            <input type="password" v-model="user.password" placeholder="Password">
        </h3>
        <br>
        <br>
        <input id="boton_ingreso" type="submit" value="Ingresar" onclick='saveUser()'>
        <br>
    </form>
        <h2>Registrarme</h2>
        <h4>
            <li>
                <a class="links" href="/#/Paciente">paciente</a>
            </li>
            <li>
                <a class="links" href="/#/Medico">medico</a>
            </li>
            <li>
                <a class="links" href="/#/Familiar">familiar</a>
            </li>
        </h4>
    </aside>
</template>
<style scoped>
   
    #login {
        background: rgb(181, 174, 151);
        margin: 1%;
        text-align: center;
        float: right;
        width: 40%;
    }

    #login input {
        float: right;
        margin-right: 10px;
        border-bottom-color: black;
        background-color: rgb(232, 235, 206);
    }

    #login form label {
        float: left;
        margin-left: 10px;
    }

    #login li {
        float: left;
        list-style: none;
        margin: 15px;
    }

    #login {

  background-color: white;
  border: black 1px solid;
  position: relative;
  right:80px;
  top:-500px;
    }

    #boton_ingreso{

    padding: 4px 25px;
    background: rgb(92, 89, 88);
    border: 1px solid #1161B0;
    color: rgb(23, 19, 19);
    border-radius: 4px;
    text-decoration:none;
    transition: background-color .5s;
    }
    #boton_ingreso:hover{
        background:  #0b8256;
        font-weight: bold;
    }

 .links{
    padding: 4px 25px;
    background: rgb(181, 174, 151);
    border: 1px solid #1161B0;
    color: rgb(23, 19, 19);
    border-radius: 4px;
   display: block;
   font-size: 20px;
   color: black;
   text-decoration: none;
   padding: 7px 15px;
   text-transform: uppercase;
 }
 
 .links:hover {
    text-decoration:underline
 }
</style>

<script>
    import axios from 'axios';
    import Swal from 'sweetalert2'
    export default {
            name: "Login",
            data: function(){
                return {
                    user: {
                        username:"",
                        password:""
                        }
                    }
                },
                   
    methods: {
        processLogInUser: function(){
            axios.post("https://healthtdjrfinal.herokuapp.com/login/",
            this.user,
                {headers: {}}
            )
            .then((result) => {
                let dataLogin = {
                    username: this.user.username,
                    token_access: result.data.access,
                    token_refresh: result.data.refresh,
                }
            this.$emit('completedLogin', dataLogin) 
                Swal.fire(
                'Acceso Correcto!',
                'You clicked the button!',
                'success'
                )    
                
            })
            this.$router.push("Inicio")
            .catch((error) => {
                if (error.response.status == "401")
                Swal.fire({
                title: 'Error!',
                text: 'Datos incorrectos',
                icon: 'error',
                confirmButtonText: 'Volver'
                })
            });
        }
    }
}
</script>  