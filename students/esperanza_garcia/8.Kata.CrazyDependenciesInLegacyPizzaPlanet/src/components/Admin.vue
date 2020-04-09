<template>
	<div class="row">
		<div class="col-md-12">
			<h1>Admin</h1>
		</div>
		<div class="col-sm-12 col-md-6">
			<!-- New pizza component -->
			<pp-new-pizza></pp-new-pizza>
		</div>
		<div class="col-sm-12 col-md-6">
			<h3>Menú:</h3>
			<table class="table table-hover">
				<thead class="thead-default">
					<tr>
						<th>Item</th>
						<th>Remove From Menu</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Margarita</td>
						<td><button class="btn btn-sm btn-outline-danger">X</button></td>
					</tr>
				</tbody>
			</table>
		</div>		
	</div>
</template>
<script>
	import NewPizza from './NewPizza.vue'

	export default {
		components : {
			ppNewPizza: NewPizza
		}
	}
</script>