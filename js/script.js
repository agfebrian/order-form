$.get('https://raw.githubusercontent.com/agfebrian/order-form/master/pizza.json', function (data) {
	let menu = data;
	// console.log(menu);

	$.each(JSON.parse(menu), function (index, item) {
		$('#product').append(`
			<div class='card-product'>
				<div class='card-head'>
					<img src='img/menu/${item.gambar}' style='width: 300px; height: 300px;'>
				</div>
				<div class='card-body'>
					<h2>${item.nama}</h2>
					<p>${item.deskripsi}</p>
					<h3>Rp ${item.harga}</h3>
				</div>
				<div class='choose-product'>
					<i class="fas fa-plus-circle"></i>
				</div>
			</div>
		`);
		// console.log(item.nama);
	})
})