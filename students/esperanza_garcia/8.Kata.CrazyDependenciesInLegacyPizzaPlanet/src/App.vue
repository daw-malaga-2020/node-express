<template>
	<div id="app">
		
		<div class="container">
			<pp-header></pp-header>

			<router-view></router-view>
			
			<pp-footer></pp-footer>
		</div>
		
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'
	import Home from './components/Home.vue'
	import Menu from './components/Menu.vue'
	import Contact from './components/Contact.vue'
	import Admin from './components/Admin.vue'

	export default {
		components: {
			ppHeader: Header,
			ppFooter: Footer,
			ppHome: Home,
			ppMenu: Menu,
			ppAdmin: Admin
		}
	}
</script>

<style>
	
</style>
















