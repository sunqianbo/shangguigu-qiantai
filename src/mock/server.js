import Mock from 'mockjs'
import banner from "./banner.json";
import floor from "./floor.json";
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})
//通过mockjs模块实现模拟数据
//对外暴露的是一个对象
//对于一些模块：图片、json文件默认对外暴露