
var obj = JSON.parse($response.body);
if($request.method=="GET")
{
obj["subscriptions"] = [
    {
      "expire_at": "30000101",
      "subscription": "lifetime_membership",
      "days_to_end": 357323,
      "created_at": "20210711125152",
      "store": "elsa-voucher"
    }
  ];
$done({body: JSON.stringify(obj)});
}
