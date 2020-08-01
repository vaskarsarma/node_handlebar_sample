//const path = require('path');

const express = require('express');

//const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
	console.log('shop.js', adminData.products);
	//res.sendFile(path.join(rootDir, 'views', 'shop.html'));
	res.render('shop', {
		prods: adminData.products,
		docTitle: 'Shop in handlbar',
		productCss: true,
		activeshop: true,
		activeadmin: false,
		hasProducts: adminData.products.length > 0,
	});
});

module.exports = router;
