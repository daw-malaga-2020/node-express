<template>
    <div>
    <h1>About </h1>
    <div class="row">
        <div class="col-md-4">
 <ul class="navbar-nav">
        <router-link tag="li" to="/about/contact" class="nav-item">
            <a href="#" class="nav-link">
                Contact
            </a>
        </router-link>
        <router-link tag="li" to="/about/delivering" class="nav-item">
            <a href="#" class="nav-link">
                Delivery
            </a>
        </router-link>
        <router-link tag="li" to="/about/history" class="nav-item">
            <a href="#" class="nav-link">
                History
            </a>
        </router-link>
        <router-link tag="li" to="/about/ordening" class="nav-item">
            <a href="#" class="nav-link">
                Ordening
            </a>
        </router-link>
    </ul>
        </div>
        <div class="col-md-8">
    <router-view></router-view>

        </div>
    </div>
   
    </div>
</template>