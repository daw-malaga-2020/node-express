<template>
	<div class="row">
		<div class="col-sm-12 col-md-6">
			<table class="table table-hover">
				<thead class="thead-default">
					<tr>
						<th>Size</th>
						<th>Price</th>
						<th>Add to basket</th>
					</tr>
				</thead>
				<tbody v-for = 'item in getMenuItems'>
					<tr>
						<td><strong>{{ item.name }}</strong></td>
					</tr>
					<tr v-for = 'options in item.options'>
						<td>{{ options.size + '"' }}</td>
						<td>{{ options.price }}</td>
						<td><button class="btn btn-sm btn-outline-success" @click="addToBasket(item, options)">Add</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="col-sm-12 col-md-6">
			<div  v-if="basket.length > 0">
				<table class="table">
					<thead class="thead-default">
						<tr>
							<th>Quantity</th>
							<th>Item</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody v-for="item in basket">
						<tr>
							<td>
								<button class="btn btn-sm btn-outline-danger" @click="decreaseQuantity(item)">-</button>
								<span>{{item.quantity}}</span>
								<button class="btn btn-sm btn-outline-success" @click="increaseQuantity(item)">+</button>							
							</td>
							<td>{{ item.name  + " " + item.size }}</td>
							<td>{{ (item.price * item.quantity).toFixed(2) }}</td>
						</tr>
					</tbody>
				</table>
				<p>Order Total:</p>
				<button class="btn btn-success btn-block">Place Order</button>
			</div>
			<div v-else>
				{{basketText}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				basket: [],
				basketText: 'Your basket is empty!',
				getMenuItems: {
					1: {
				  	'name': 'Margherita',
					  'description': 'A delicious tomato based pizza topped with mozzarella',
					  'options': [{
					    'size': 9,
					    'price': 6.95
					  }, {
					    'size': 12,
					    'price': 10.95
					  }]
					},
					2: {
					  'name': 'Pepperoni',
					  'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
					  'options': [{
					    'size': 9,
					    'price': 7.95
					  }, {
					    'size': 12,
					    'price': 12.95
					  }]
					},
					3: {
					  'name': 'Ham and Pineapple',
					  'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
					  'options': [{
					    'size': 9,
					    'price': 7.95
					  }, {
					    'size': 12,
					    'price': 12.95
					  }]
					}
				} 
			}
		},
		methods: {
			addToBasket(item, options){
				this.basket.push({
					name: item.name,
					price: options.price,
					size: options.size,
					quantity: 1
				})
			}, 
			removeFromBasket(item){
				this.basket.splice(this.basket.indexOf(item), 1)
			},
			decreaseQuantity(item){
				item.quantity--;
				if(item.quantity === 0){
					this.removeFromBasket(item)
				}
			},
			increaseQuantity(item){
				item.quantity++
			}
		}
	}
</script>




















