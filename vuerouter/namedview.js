
Vue.use(VueRouter)

const Foo={template:'<div>foo</div>'}
const Bar={template:'<div>bar</div>'}
const Baz={template:'<div>baz</div>'}

const router = new VueRouter({
    routes: [
      {
        path: '/myhomepage/vuerouter/namedview.html/',
        components: {
          default: Foo,
          a: Bar,
          b: Baz
        }
      },
      {
          path:'/myhomepage/vuerouter/namedview.html/other',
          components:{
              default:Baz,
              a:Bar,
              b:Foo
          }
      }
    ]
  })

  new Vue({
      router,
      el:'#app4'
      
    
  })