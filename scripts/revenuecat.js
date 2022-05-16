/*
QX: ^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/ url script-response-body revenuecat.js

hostname = api.revenuecat.com

仅限NobyDa Script群组学习交流，严禁外传！

By @sunshy
*/

let obj=JSON.parse($response.body);
let url=$request.url;

if(url.endsWith("offerings")||url.endsWith("products")) {
    $done({});
} else {
    // Weather Line
    obj["subscriber"]["entitlements"]={
        "com.offcoast.weatherline.revenuecat.supercharge" : {
            "expires_date" : "2099-10-22T10:39:06Z",
            "product_identifier" : "com.offcoast.weatherline.iap.yearly",
            "purchase_date" : "2019-10-15T10:39:06Z"
        }
    };
    obj["subscriber"]["subscriptions"]={
        "com.offcoast.weatherline.iap.yearly" : {
            "is_sandbox" : false,
            "period_type" : "trial",
            "billing_issues_detected_at" : null,
            "unsubscribe_detected_at" : null,
            "expires_date" : "2099-10-22T10:39:06Z",
            "original_purchase_date" : "2019-10-15T10:39:07Z",
            "purchase_date" : "2019-10-15T10:39:06Z",
            "store" : "app_store"
        }
    };

    $done({body:JSON.stringify(obj)});
}

/*
	// Noto笔记Lifetime
	if (url.indexOf("EE5F4363-50A2-4A57-8172-DA69F76DE2FB")!=-1) {
		obj["subscriber"]["entitlements"]["pro"]={
			"expires_date": null,
			"product_identifier": "com.lkzhao.editor.full.deal",
			"purchase_date": "2019-12-01T00:00:00Z"
		};
		obj["subscriber"]["non_subscriptions"]["com.lkzhao.editor.full.deal"]=[{
			"id": "12345qwert",
			"is_sandbox": false,
			"original_purchase_date": "2019-12-01T00:00:00Z",
			"purchase_date": "2019-12-01T00:00:00Z",
			"store": "app_store"
		}];
	}
	// Airmail Premium
	if (url.indexOf("5647911E-B243-48C9-A25C-29116412A20D")!=-1) {
		obj["subscriber"]["entitlements"]={
			"Airmail Premium": {
				"expires_date": "2099-12-01T00:00:00Z",
				"product_identifier": "Airmail_iOS_Yearly",
				"purchase_date": "2019-12-01T00:00:00Z"
			}
		};
		obj["subscriber"]["subscriptions"]={
			"Airmail_iOS_Yearly": {
				"is_sandbox": false,
				"period_type": "active",
				"billing_issues_detected_at": null,
				"unsubscribe_detected_at": null,
				"expires_date": "2099-12-01T00:00:00Z",
				"original_purchase_date": "2019-10-31T00:00:00Z",
				"purchase_date": "2019-10-31T00:00:00Z",
				"store": "app_store"
			}
		};
	}

	// Weather Line other way
		obj["subscriber"]["subscriptions"]= {
			"revenuecat.pro.yearly": {
				"is_sandbox": false,
				"period_type": "active",
				"billing_issues_detected_at": null,
				"unsubscribe_detected_at": null,
				"expires_date": "2099-12-01T03:51:32Z",
				"original_purchase_date": "2019-10-31T02:51:33Z",
				"purchase_date": "2019-10-31T02:51:32Z",
				"store": "app_store"
			}
		};

		obj["subscriber"]["entitlements"]= {
			"pro": {
				"expires_date": "2099-12-01T03:51:32Z",
				"product_identifier": "revenuecat.pro.yearly",
				"purchase_date": "2019-10-31T02:51:32Z"
			}
		};
*/
