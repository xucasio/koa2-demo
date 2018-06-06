const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
 
let subhome = new Router();
subhome.get('/subhome',async(ctx)=>{
    ctx.body="Home JSPang subhome";
})

let home = new Router();
home.get('/jspang',async(ctx)=>{
    ctx.body="Home JSPang";
}).get('/todo',async(ctx)=>{
    ctx.body ='Home ToDo';
})
 
let page = new Router();
page.get('/jspang',async(ctx)=>{
    ctx.body="Page JSPang";
}).get('/todo',async(ctx)=>{
    ctx.body ='Page ToDo';
})
 
//装载所有子路由
let router = new Router({
    prefix:'/xucasio' // 设置路由的前置路由
});
home.use('/jspang',subhome.routes(),subhome.allowedMethods()); // /xucasio/home/jspang/subhome 子路由下的孙子路由
router.use('/home',home.routes(),home.allowedMethods()); //关键是在这里定义了router在home和page上层
router.use('/page',page.routes(),page.allowedMethods());

// routes[obj.method ? obj.method : 'post'](url, api[key]);,在另外的项目里发现的
// router['get']('/aaa',async (ctx)=>{
//     ctx.body='另类加路由，受不鸟'
// })

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods()); // 最终要用app去use

app.listen(3005,()=>{
    console.log('[demo] server is starting at port 3005');
});