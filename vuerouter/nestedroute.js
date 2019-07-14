
const User = {
  template: `
      <div class="user">
        <h2>User {{ $route.params.id }}</h2>
        <router-view></router-view>
      </div>
    `
}
const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

const router = new VueRouter({
  routes: [
    {
      path: '/user/:id', component: UserHome,
      children: [
        {
          // /user/:id/profile 과 일치 할 때
          // UserProfile은 User의 <router-view> 내에 렌더링 됩니다.
          path: 'profile',
          component: UserProfile
        },
        {
          // /user/:id/posts 과 일치 할 때
          // UserPosts가 User의 <router-view> 내에 렌더링 됩니다.
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})

const app = new Vue({ router }).$mount('#app2')