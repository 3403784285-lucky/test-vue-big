<template>
  <div class="user-profile-container">
    <div class="user-profile">
      <el-form :model="userProfile" label-width="80px">
        <el-form-item label="ID">
          <el-input v-model="userProfile.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="userProfile.nickname"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="userProfile.email"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-avatar :src="userProfile.avatar" class="user-avatar"></el-avatar>
          <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
          >
            <el-button type="primary">上传新头像</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="房产">
          <el-input v-model="userProfile.possession" prefix-icon="el-icon-money"></el-input>
        </el-form-item>
        <el-form-item label="余额">
          <el-input v-model="userProfile.balance" prefix-icon="el-icon-money"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="userProfile.status" placeholder="请选择状态">
            <el-option label="Active" value="active"></el-option>
            <el-option label="Inactive" value="inactive"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveProfile">保存编辑</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { ElMessage } from 'element-plus';

const userProfile = reactive({
  id: '12345',
  nickname: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://via.placeholder.com/150',
  possession: 'a',
  balance: 100,
  status: 'active'
});

const handleAvatarSuccess = (response, file) => {
  userProfile.avatar = URL.createObjectURL(file.raw);
  ElMessage.success('头像上传成功');
};

const beforeAvatarUpload = (file) => {
  const isJPG = file.type === 'image/jpeg';
  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isJPG) {
    ElMessage.error('上传头像图片只能是 JPG 格式!');
  }
  if (!isLt2M) {
    ElMessage.error('上传头像图片大小不能超过 2MB!');
  }
  return isJPG && isLt2M;
};

const saveProfile = () => {
  // 模拟保存用户信息
  ElMessage.success('用户信息保存成功');
};
</script>

<style scoped>
.user-profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
}

.user-profile {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  transition: all 0.3s;
}

.user-profile:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.el-form-item {
  margin-bottom: 20px;
}

.avatar-uploader {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #eaeaea;
}

.el-button {
  transition: all 0.3s;
}

.el-button:hover {
  background-color: #409EFF;
  border-color: #409EFF;
  color: #fff;
}

.el-input, .el-select {
  width: 100%;
}
</style>
