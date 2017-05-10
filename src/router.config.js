
const routes=[
	{
		path:'/user',
		name: 'user',
		component(resolve){
			require(['./pages/welcome.vue'], resolve)
		}
	},{
		path:'/myBlog',
		name:'myBlog',
		component(resolve){
			require(['./pages/myBlog.vue'], resolve)
		}
	},
	{
		path:'/columns',
		name:'columns',
		component(resolve){
			require(['./pages/css/columns.vue'], resolve)
		}
	},
	{
		path:'/webAssemblyCartoon',
		name:'webAssemblyCartoon',
		component(resolve){
			require(['./pages/webAssembly/cartoon.vue'], resolve)
		}
	},
	{
		path:'/JITCompilers',
		name:'JITCompilers',
		component(resolve){
			require(['./pages/webAssembly/compilers.vue'], resolve)
		}
	}
];

export default routes;