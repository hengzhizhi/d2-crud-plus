export const crudOptions = {
  indexRow: { // 或者直接传true,不显示title，不居中
    title: '序号',
    align: 'center'
  },
  columns: [
    {
      title: 'id',
      key: 'id',
      sortable: true,
      width: 100,
      form: { disabled: true }
    },
    {
      title: '标题',
      key: 'title',
      sortable: true,
      width: 400,
      form: { component: { span: 24 } }
    },
    {
      title: '摘要',
      key: 'text',
      sortable: true,
      type: 'text-area'
    },
    {
      title: '内容',
      key: 'content',
      sortable: true,
      width: 300,
      type: 'editor-quill', // 富文本图片上传依赖file-uploader，请先配置好file-uploader
      disabled: true, // 设置true可以在行展示中隐藏
      form: {
        component: {
          props: {
            uploader: {
              type: 'form' // 上传后端类型【cos,aliyun,oss,form】
            }
          }
        }
      }
    }
  ]
}
