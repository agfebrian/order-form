$.get('https://raw.githubusercontent.com/agfebrian/order-form/master/pizza.json', function (data) {
	let menu = data;
	// console.log(menu);

	$.each(JSON.parse(menu), function (index, item) {
		$('#product').append(
			`<div class='card-product'>
				<div>
					<img src='img/menu/${item.gambar}' style='width: 250px'>
				</div>
				<div>
					<h2>${item.nama}</h2>
				</div>
			</div>`);
		// console.log(item.nama);
	})
})