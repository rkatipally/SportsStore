angular.module("sportsStore").constant("dataUrl",
		"http://localhost:2403/products").constant("orderUrl",
		"http://localhost:2403/orders").controller("sportsStoreCtrl",
		function($scope, $http, $location, dataUrl, orderUrl, cart) {
			$scope.data = {};
			$http.get(dataUrl).success(function(data) {
				$scope.data.products = data;
			}).error(function(error) {
				$scope.data.error = error;
			});
			
			$scope.sendOrder = function (shippingDetails) {
				var order = angular.copy(shippingDetails);
				
				order.products = cart.getProducts();
				console.log(order);
				$http.post(orderUrl, order).success(function (data) {
					alert("clicked success");
					$scope.data.orderId = data.id;
					cart.getProducts().length = 0;
				}).error(function (error) {
					alert("clicked failure");
					$scope.data.orderError = error;
				}).finally(function () {
					alert("clicked finally	");
					$location.path("/complete");
				});
			}
		});