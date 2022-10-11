<template>
    <section id=RegistroMedico>
        <form>
            <h3>Registro medico</h3>
            <h4>
                <label> Nombres </label>
                <br>
                <input name="nombres" type="text">
                <br>
                <label> Apellidos </label>
                <br>
                <input name="apellidos" type="text">
                <br>
                <label> Tipo de documento </label>
                <br>
                <select name="tipo_documento">
                    <option value="">--Elige una opcion--</option>
                    <option value="CC">Cedula de ciudadania</option>
                    <option value="CE">Cedula de extrangeria</option>
                    <option value="TI">Tarjeta de identidad</option>
                </select>
                <br>
                <label> Numero de documento</label>
                <br>
                <input type="number">
                <br>
                <label> Genero </label>
                <br>
                <select name="genero">
                    <option value="">--Elige una opcion--</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="O">Otro</option>
                </select>
                <br>
                <label>Correo electronico </label>
                <br>
                <input type="email">
                <br>
                <label> Telefono </label>
                <br>
                <input type="number">
                <br>
                <label> Direccion </label>
                <br>
                <input type="text">
                <br>
                <label> Ciudad </label>
                <br>
                <input type="text">
                <br>
                <label> Fecha de nacimiento </label>
                <br>
                <input type="date">
                <br>
                <label> Usuario </label>
                <br>
                <input type="text">
                <br>
                <label> Contraseña </label>
                <br>
                <input type="text">
                <br>
                <label> Area de desempeño </label>
                <br>
                <input type="text">
            </h4>
            <br>
            <input type="submit" value="Registrar">
        </form>
    </section>
</template>

<script>
    export default {
        name: 'Medico',
    }
</script>

<style scoped>
    #RegistroMedico {
        background: rgb(181, 174, 151);
        margin: 1%;
        text-align: center;
        float: right;
        width: 40%;
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

    #RegistroMedico{

  background-color: white;
  border: black 1px solid;
  position: relative;
  right:80px;
  top:-600px;
    }
</style>