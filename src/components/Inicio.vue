<template>
    <form id= bienvenida v-on:submit.prevent="seeStartPage">
        <h2>Bienvenido </h2>
        <input type="text" v-on:model="familiar.username">
            
    </form>
    

</template>

<style>
#bienvenida {
  background: rgb(181, 174, 151);
  margin: 1%;
  text-align: center;
  float: right;
  width: 30%;
  background-color: white;
  border: black 1px solid;
  position: relative;
  right: 80px;
  top: -500px;
}

</style>

<script>
    import axios from 'axios';
    import Swal from 'sweetalert2'
    export default {
            name: "Inicio",
            data: function(){
                return {
                    familiar: {
                        username:"",
                        password:""
                        }
                    }
                },               
    methods: {
        seeStartPage: function(){
            axios.get("https://healthtdjrfinal.herokuapp.com/familiar/",
            this.familiar,
                {headers: {}}
            )
            .then((result) => {
                let dataLogin = {
                    username: this.user.username,
                    token_access: result.data.access,
                    token_refresh: result.data.refresh,
                }
            this.$emit('completedLogin', dataLogin) 
            })
            .catch((error) => {
                if (error.response.status == "401")
                Swal.fire({
                title: 'Error!',
                text: 'Este usuario no fue autenticado correctamente',
                icon: 'error',
                confirmButtonText: 'Volver'
                })
            });
        }
    }
}

</script>  