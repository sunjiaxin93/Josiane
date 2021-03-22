<template>
  <div class="homeWrap">
    <el-container style="height:100%;" direction="vertical">
      <el-header height="60px"><navigation-bar></navigation-bar></el-header>
      <el-main height="100%">Main</el-main>
      <el-footer>
        版权所有© Copyright 2018-2022 西南大学网络工程小组   版本V-1.1.1
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue'
export default {
  name: "Teacher",
   components: {
      NavigationBar
  }
}
</script>

<style scoped>
.homeWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;

}
.el-footer {
  background-color: #b3c0d1;
  color: rgb(250, 250, 250);
  text-align: center;
  line-height: 60px;
  font-size: 12px;
}
body > .el-container {
  margin-bottom: 40px;

}
</style>
