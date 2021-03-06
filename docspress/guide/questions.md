# 常见问题

## 1. 表单组件返回的数据是数组或Object类型，提交到后台之前怎么处理？
可以配置valueResolve(row, col)
```js
column:[
  {
    key:'xxx',
    valueResolve(row, col){
      row.xxx = JSON.stringify(row.xxx) //修改form表单数据
    } 
  }
]
```
或者重写`this.editBefore(row)`、`this.addBefore(row)` 这两个方法，修改row数据

## 2. form组件的value需要的是数组，后台返回的是string，要怎么处理？
与上一个问题对应,可以配置valueBuilder(row, col)
```js
column:[
  {
    key:'xxx',
    valueBuilder(row, col){
      row.xxx = JSON.parse(row.xxx) //修改行数据，用于行展示组件显示
    } 
  }
]
```

## 3. 如何在crud.js中拿到this？
修改两处地方即可
```js
// crud.js
export const crudOptions = (vm) => { //这里改成一个Function
  return {
    columns: [
      {
        key:'xxx',
        valueBuilder(row, col){
          // 比如这里就可以用vm.$set等方法啦
        } 
      } 
    ]
  }
}
```
```js
// index.vue
export default {
  ...
  methods: {
    getCrudOptions () {
      return crudOptions(this) //这里调用这个Function，把this传进去
    }
  }
}
```
示例： http://qiniu.veryreader.com/D2CrudPlusExample/index.html#/form/select


## 4. 怎么获取某个字段的数据字典的选项列表？
```js
let columnKey = '你的字段key'
let dictData = this.crud.columnsMap[columnKey].dict.data;

//通过字典value获取label
let value = '某个字典项的value'
let label = this.crud.columnsMap[columnKey].dict.dataMap[value]
```
示例： http://qiniu.veryreader.com/D2CrudPlusExample/index.html#/form/select
