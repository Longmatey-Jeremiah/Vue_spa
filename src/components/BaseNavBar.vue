<template>
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-center">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link" exact-active-class="active">Welcome</router-link>
                    <router-link to="/about" class="nav-link nav-item">About</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default{
    name:'basenavbar',
}

</script>

<style scoped>

</style>