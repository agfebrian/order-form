$.get('https://raw.githubusercontent.com/agfebrian/order-form/master/pizza.json', function (data) {
	let menu = data;
	// console.log(menu);

	$.each(JSON.parse(menu), function (index, item) {
		$('#product').append(""+ item.nama +"");
		// console.log(item.nama);
	})
})