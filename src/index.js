/*
 * @Author: Daniel Hfood 
 * @Date: 2018-03-10 14:08:05 
 * @Last Modified by: Daniel
 * @Last Modified time: 2018-03-14 17:31:47
 * @description:webpack入口文件
 */

import "./css/normalize.css";
import "./css/base.less";
import utils from './common/utils';

window.onresize =function(){  
  utils.changeRootSize();
}  
window.onload=function(){
  utils.changeRootSize();
}