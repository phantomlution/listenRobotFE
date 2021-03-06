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
					['/component/table', '基础组件 - 表格'],
					['/component/page', '基础组件 - 页面容器'],
					['/component/dialog', '基础组件 - 对话框'],
					['/component/loadingPanel', '基础组件 - 加载控制'],
					['/component/select', '基础组件 - 状态下拉'],
					['/component/selectLabel', '基础组件 - 状态标签渲染'],
					['/component/expandButton', '基础组件 - 弹出式按钮'],
					['/component/slideoutPanel', '基础组件 - 侧方面板'],
					['/component/audioPlayer', '基础组件 - 音频播放'],
					['/component/upload', '基础组件 - excel上传' ],
          ['/component/downloadButton', '业务组件 - 下载按钮'],
          ['/component/formEditor', '业务组件 - 表单编辑插件'],
					['/component/batchUpload', '业务组件 - 批量excel上传弹窗'],
					['/component/followState', '业务组件 - 跟进记录']
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
					['/case/global.md', '全局变量']
				]
			}
		]
	}
}
