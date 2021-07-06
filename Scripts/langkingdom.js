obj = {
    "error_code": 0,
    "message": "Success",
    "title": "Ch\u1ecdn g\u00f3i thanh to\u00e1n",
    "remain_time":280834,
    "offer_expire_timestamp":1607705999,
	"product_ids": [
		{
			"product_id":"premium_6months",
			"price":520000,
			"original_price":780000,
			"currency_code":"VND",
			"months":6,
			"more_months":3,
			"best_value":1
		},
		{
			"product_id":"premium_2years_20",
			"price":1670000,
			"original_price":2080000,
			"currency_code":"VND",
			"months":24,
			"more_months":0,
			"offer":20
		}
	],
	"can_pay":1
};
$done({body: JSON.stringify(obj)});
