<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<router-link to="/" class="navbar-brand">Pizza Planet</router-link>
			<ul class="navbar-nav">
				<router-link tag="li" to="/" class="nav-item">
					<a href="#" class="nav-link">
						Home
					</a>
				</router-link>

				<router-link tag="li" to="/menu" class="nav-item">
					<a href="#" class="nav-link">
						Menu
					</a>
				</router-link>
			</ul>
		</nav>
	</header>
</template>

<style>
	header {
		margin-bottom: 20px;
	}
	.navbar-brand {
		font-size: 1.5em;
	}
</style>