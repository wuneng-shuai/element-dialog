export default (Vue, component) => {
  const div = document.createElement('div'); //创建dom容器   // 手动创建dom容器
  const el = document.createElement('div');  //创建dom容器
  div.appendChild(el); //添加eldom容器到div上
  document.body.appendChild(div); //添加divdom容器到body上
  const ComponentConstructor = Vue.extend(component);  
  return (propsData = {}, parent = undefined) => {
    let instance = new ComponentConstructor({
      propsData,
      parent,
    }).$mount(el); //手动挂载实例
//销毁对话框方法
    const destroyDialog = () => {
      if (instance && div.parentNode) {  //parentNode父节点
        instance.$destroy(); //销毁实例destroy方法
        instance = null
        div.parentNode && div.parentNode.removeChild(div); //删除节点
      }
    };
    // visible控制
    if (instance["visible"] !== undefined) {  //判断visible是否定义
      // 支持sync/v-model
      instance.$watch("visible", val => {  //监听  如果为false则调用组件销毁方法
        !val && destroyDialog()
      });
      Vue.nextTick(() => (instance["visible"] = true));  //如果不是则调用nextTick 将visible变更为true  弹出框弹出 
    }
    return new Promise((resolve, reject) => {
      instance.$once("done", data => {
        destroyDialog();
        resolve(data);
      });
      instance.$once("cancel", data => {
        destroyDialog();
        reject(data);
      });
    });
  };
};
