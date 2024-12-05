<!--
 * @Author: zgj888 2369394195@qq.com
 * @Date: 2024-11-26 10:38:58
 * @LastEditors: zgj888 2369394195@qq.com
 * @LastEditTime: 2024-11-28 09:11:43
 * @FilePath: \uss-webd:\shwork\work\my-vue2-cesium-app\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="cesiumContainer" style="width: 100vw;height:100vh">
  </div>
</template>

<script>
import * as Cesium from "Cesium";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.init()

  },
  methods: {
    init() {
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYTliZTdhYS1lNmVkLTQ2NjgtOWU5NC04MmFiZTMwMDBmNDgiLCJpZCI6MTc0ODA0LCJpYXQiOjE3MDQyNTM1MTR9.dqbswUiM_mP0Ev1plldJQm3YXw6NWFE5lrF0ZTXG2tQ";
      this.map = new Cesium.Viewer("cesiumContainer", {
        homeButton: true, //首页位置，点击之后将视图跳转到默认视角
        sceneModePicker: true, //是否显示投影方式控件
        baseLayerPicker: true, //是否显示图层选择控件
        navigationHelpButton: true, //是否显示帮助信息控件
        geocoder: false, //是否显示地名查找控件
        animation: false, //是否显示动画控件
        timeline: false, //是否显示时间线控件
        fullscreenButton: false, //视察全屏按钮
        vrButton: false,//是否启用虚拟现实 (VR) 模式
        shadows: true, //影子
        infoBox: false, //是否显示点击要素之后显示的信息
      });
      this.initlocal() // 设置初始位置
      this.load3DModel()//创建3d模型
    },
    // 设置初始位置
    initlocal() {
      this.map.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(121.478365, 29.791515, 5000), // 设置位置和高度
      })
    },
    //创建3d模型
    load3DModel() {
      // 创建动态实体
      let postion = Cesium.Cartesian3.fromDegrees(121.478365, 29.791515, 1000);
      let entity = this.map.entities.add({
        position: postion,
        model: {
          uri: '/model.glb',
          minimumPixelSize: 64
        }
      });
      this.map.zoomTo(entity);

      
      // // 创建SampledPositionProperty实例
      // const positionProperty = new Cesium.SampledPositionProperty();

      // // 添加位置样本
      // positionProperty.addSample(Cesium.JulianDate.fromDate(new Date(2024, 0, 1, 12, 0, 0)), new Cesium.Cartesian3(1000000, 2000000, 3000000));
      // positionProperty.addSample(Cesium.JulianDate.fromDate(new Date(2024, 0, 1, 12, 5, 0)), new Cesium.Cartesian3(2000000, 3000000, 4000000));
      // positionProperty.addSample(Cesium.JulianDate.fromDate(new Date(2024, 0, 1, 12, 10, 0)), new Cesium.Cartesian3(3000000, 4000000, 5000000));


      // // 设置时间范围
      // this.map.clock.startTime = Cesium.JulianDate.fromDate(new Date(2024, 0, 1, 12, 0, 0));
      // this.map.clock.stopTime = Cesium.JulianDate.fromDate(new Date(2024, 0, 1, 12, 10, 0));
      // this.map.clock.currentTime = Cesium.JulianDate.fromDate(new Date(2024, 0, 1, 12, 0, 0));
      // this.map.clock.multiplier = 60; // 时间进展速度
      // this.map.scene.requestRender();
    }
  }
}
</script>

<style scoped></style>
