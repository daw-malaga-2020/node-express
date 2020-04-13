<template>
	<form>
		<h3>Add a new pizza</h3>

		<div class="form-group row">
			<label for="" class="col-sm-3">Name</label>
			<div class="col-sm-9">
				<input type="text" name="" id="" class="form-control" v-model="newPizza.name">
			</div>
		</div>

		<div class="form-group row">
			<label for="" class="col-sm-3">Description</label>
			<div class="col-sm-9">
				<textarea type="text" name="" id="" class="form-control" rows="5" v-model="newPizza.description"></textarea>
			</div>
		</div>

		<p><strong>Option 1:</strong></p>
		<div class="form-group row">
			<label for="" class="col-sm-3">Size('')</label>
			<div class="col-sm-9">
				<input type="text" name="" id="" class="form-control" v-model="newPizza.options[0].size">
			</div>
		</div>

		<div class="form-group row">
			<label for="" class="col-sm-3">Price</label>
			<div class="col-sm-9">
				<input type="text" name="" id="" class="form-control" v-model="newPizza.options[0].price">
			</div>
		</div>

		<p><strong>Option 2:</strong></p>
		<div class="form-group row">
			<label for="" class="col-sm-3">Size('')</label>
			<div class="col-sm-9">
				<input type="text" name="" id="" class="form-control" v-model="newPizza.options[1].size">
			</div>
		</div>

		<div class="form-group row">
			<label for="" class="col-sm-3">Price</label>
			<div class="col-sm-9">
				<input type="text" name="" id="" class="form-control" v-model="newPizza.options[1].price">
			</div>
		</div>
		<div class="form-group row">
			<button class="btn btn-success btn-block" type="button" @click="addMenuItem()">Add New Pizza</button>
		</div>
	</form>

	
</template>

<script>
	export default {
		data(){
			return{
				newPizza: {
			  	'name': 'Margherita',
				  'description': 'A delicious tomato based pizza topped with mozzarella',
				  'options': [{
				    'size': 9,
				    'price': 6.95
				  }, {
				    'size': 12,
				    'price': 10.95
				  }]
				}
			} 
		},
		methods: {
			addMenuItem() {
				console.log(this.newPizza)
			}
		}
	}
</script>