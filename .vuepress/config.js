module.exports = {
	title: 'ListenRobot FE',
	description: 'Just play around',
	base: '/listenRobotFE/',
	themeConfig: {
		sidebar: [
			['/project', '项目结构'],
			{
				title: '依赖',
				children: [
					['/thirdparty', '第三方库'],
				]
			},
			{
				title: '代码规范',
				children: [
					['/spec/css.md', 'css规范'],
					['/spec/page.md', '页面规范']
				]
			},
			{
				title: '组件',
				children: [
					['/component/', '基础组件'],
					['/component/table', '业务组件 - 表格'],
					['/component/page', '业务组件 - 页面容器'],
					['/component/dialog', '业务组件 - 对话框'],
					['/component/loadingPanel', '业务组件 - 加载控制']
				]
			},
			{
				title: 'filter',
				children: [
					['/filter/', '内置filter']
				]
			},
			{
				title: '指令',
				children: [
					['/directive/', '内置指令']
				]
			},
			{
				title: '案例',
				children: [
					['/case/start-up.md', '第一张页面'],
					['/case/http.md', '网络请求'],
					['/case/list.md', '列表页'],
					['/case/add.md', '新增/修改页面'],
					['/case/chart.md', '图表'],
					['case/global.md', '全局方法']
				]
			}
		]
	}
}
