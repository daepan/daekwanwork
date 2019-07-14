var Login = { template: '<p>Login Component</p>' };
var Home = { template: '<p>Home Component</p>' };

var router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
});

router.beforeEach(function (to, from, next) {
    console.log('every single routing is pending');
  });

  new Vue({
	el: '#app8',
	router
});

