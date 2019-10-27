<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsible">
            <div class="navbar-nav">
                <router-link to="/" class="nav-item nav-link">Welcome</router-link>
                <router-link to="/about" class="nav-link nav-item" exact-active-class="active">About</router-link>
            </div>
        </div>
        </nav>
        this is our about component :)
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.active {
    color: red
}
</style>
