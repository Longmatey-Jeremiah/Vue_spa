<template>
    <div class="base-navbar">
         <nav class="navbar navbar-expand-sm navbar-dark container">
            <router-link to="/" class="navbar-brand">Home</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav justify-content-end ml-auto">
                    <router-link to="/about" class="nav-link nav-item">About</router-link>
                    <router-link to="/contact" class="nav-item nav-link">Contact</router-link>
                    <router-link to="/blog" class="nav-item nav-link">Blog</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default{
    name:'base-navbar',
}

</script>

<style scoped>
.base-navbar{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:13px;
    background-color:rgba(100, 100, 100,0.5);
    padding:10px;
 }
 .base-navbar .nav-item{
     color:rgb(92, 134, 252);
     font-weight: bold;
     font-style:normal;
     margin:0 12px;
    animation-name: welcome;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    outline:none; 
}

@keyframes welcome{
  0%   {color:white;}
  25%  {color:powderblue;}
  50%  {color:yellow;}
  75%  {color:springgreen;}
  100% {color:white;}
  }
</style>