<template>
  <div class="full">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#8696a7"
      text-color="#fff"
      active-text-color="#f8edb8"
    >
      <el-submenu index="1">
        <template slot="title">学生出勤</template>
        <el-menu-item index="1-1">拍照签到</el-menu-item>
        <el-menu-item index="1-2">出勤详情</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">我的课程</template>
        <el-menu-item index="2-1">课程信息</el-menu-item>
        <el-submenu index="2-2">
          <template slot="title">班级信息</template>
          <el-menu-item index="2-2-1">我的班级</el-menu-item>
          <el-menu-item index="2-2-2">签到信息</el-menu-item>
          <el-menu-item index="2-2-3">学生权限</el-menu-item>
        </el-submenu>
        <el-menu-item index="2-3">信息审批</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">我的工作台3</template>
        <el-menu-item index="3-1">选项3.1</el-menu-item>
        <el-menu-item index="3-2">选项3.2</el-menu-item>
        <el-menu-item index="3-3">选项3.3</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">个人主页</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.full {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
</style>
