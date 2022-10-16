<template>
  <div class="about">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="dy-card">
          <div class="card-title">element-plus bug</div>
          <div class="card-content">
            <div class="card-descript">
              “Mustache”语法 (双大括号) 的文本插值 变化 <br />
              onBeforeUpdate,onUpdated 无法检测
            </div>
            <div class="card-bar">
              <!-- <el-ss @click="increment">
                This is an about page {{ count }} {{ double }}
              </el-ss> -->
              <el-button @click="increment">
                This is an about page {{ count }} {{ double }}
              </el-button>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="dy-card">
          <div class="card-title">动态路由匹配</div>
          <div class="card-content">
            <div class="card-descript">
              路由参数 /search/:id/:foo <br />
              路由组件传参 /search/:id/:foo 当 props 设置为 true
              时，route.params 将被设置为组件的 props。
            </div>
            <div class="card-bar">
              <el-button @click="pushRoute">pushRoute</el-button>
              <el-button @click="adRoute">adRoute</el-button>
              <el-button @click="rmRoute">rmRoute</el-button>
              <el-button @click="getRoute">getRoute</el-button>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="dy-card">
          <div class="card-title">动态路由匹配</div>
          <div class="card-content">
            <div class="card-descript">路由参数 /min/:id/:foo route.params</div>
            <div class="card-bar">
              <el-button @click="pushRouteMin">pushRouteMin</el-button>
              <el-button @click="adRoute1">adRoute1</el-button>
              <el-button @click="rmRoute1">rmRoute1</el-button>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="dy-card">
          <div class="card-title">动态路由匹配 静态传参</div>
          <div class="card-content">
            <div class="card-descript">路由参数 /max prop 静态数据 传参</div>
            <div class="card-bar">
              <el-button @click="pushRouteMax">pushRouteMax</el-button>
              <el-button @click="adRouteMax">adRouteMax</el-button>
              <el-button @click="rmRouteMax">rmRouteMax</el-button>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="dy-card">
          <div class="card-title">动态路由匹配 动态对象传参</div>
          <div class="card-content">
            <div class="card-descript">路由参数</div>
            <div class="card-bar">
              <el-button @click="pushRouteNormal">pushRouteNormal</el-button>
              <el-button @click="adRouteNormal">adRouteNormal</el-button>
              <el-button @click="rmRouteNormal">rmRouteNormal</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
// http://localhost:9000/html?dv=sm&ff=dd#ddd
import useCounter from "./useCounter.js";
import epRoute from "./epRoute.js";
import epRouteMin from "./epRouteMin.js";
import epRouteMax from "./epRouteMax.js";
import epRouteNormal from "./epRouteNormal.js";
const { count, double, increment } = useCounter();
const { pushRoute, adRoute, rmRoute, getRoute } = epRoute();
const { pushRoute: pushRouteMin, adRoute1, rmRoute1 } = epRouteMin();
const { pushRouteMax, adRouteMax, rmRouteMax } = epRouteMax();
const {
  pushRoute: pushRouteNormal,
  adRoute: adRouteNormal,
  rmRoute: rmRouteNormal,
} = epRouteNormal();
</script>
<style scoped>
.dy-card {
  padding: 20px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.card-title {
  font-size: 16px;
  font-weight: 600;
}
.card-descript {
  font-size: 13px;
  line-height: 26px;
}
.card-bar {
  padding: 10px;
}
</style>
