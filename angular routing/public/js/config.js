var app=angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/register", {
       templateUrl : "register.html",
      controller:"myctrlreg"
  })
   .when("/login", {
      templateUrl : "login.html",
      controller:"myctrl2"
  })
.when("/Dashboard", {
      templateUrl: "Dashboard.html",
      //controller:"dashboardCtrl"
       });


});


    app.controller("myctrlreg",function($scope,$http,nameService){

$scope.myfun=function(){
  nameService.setmyname($scope.myname)

}



     $scope.subbtn=function(){
     	$scope.registerdetails={email:$scope.emailname,password:$scope.pwd,confrompassword:$scope.conpwd,firstName:$scope.fname,lastName:$scope.lname}
     	$http({
                    method: "post",
                    url: "/register",
                    data: $scope.registerdetails,
                }).then(function mySuccess (res) {
                  console.log(res);
                window.location.href="/login";

                }, function error(err) {
                  alert("something went be wrong...please try after something")

                })

     }
    });

app.service("nameService",function(){
  this.name;
  this.setmyname=function(x){
    this.name=x;
  }
  this.getmyname=function(){
    return this.name;
  }
})

	app.controller("myctrl2",function($scope,$http, nameService){
  $scope.mynam2=nameService.getmyname();
     $scope.submitbtn=function(){
     	$scope.logindetails={email:$scope.useremail,password:$scope.userpassword}
     	$http({
                    method: "post",
                    url: "/login",
                    data: $scope.logindetails,
                }).then(function mySuccess (res) {
                  console.log(res);
                    if(res.data.status=="OK"){
                  alert(res.data.msg)
                  window.location.href="/Dashboard";

                }
                else {
                  alert(res.data.msg)
                }

                },
                function error(err) {

                })
     }
	})
