<template>
  <div class="container">
    <div class="user-profile-container">
      <div class="user-profile">
        <el-form :model="editProfileForm" label-width="100px">
          <el-form-item label="头像" class="large-form-item">
            <el-upload
                class="avatar-uploader"
                action=""
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :auto-upload="false"
                :on-change="handleAvatarChange">
              <el-avatar :src="editProfileForm.pic" class="user-avatar"></el-avatar>
            </el-upload>
          </el-form-item>
          <el-form-item label="ID" class="large-form-item">
            <el-input v-model="editProfileForm.userId" disabled></el-input>
          </el-form-item>
          <el-form-item label="昵称" class="large-form-item">
            <el-input v-model="editProfileForm.name"></el-input>
          </el-form-item>
          <el-form-item label="Email" class="large-form-item">
            <el-input v-model="editProfileForm.email"></el-input>
          </el-form-item>
          <el-form-item class="large-form-item">
            <el-button type="primary" @click="saveProfile">保存编辑</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/stores/index';
import axios from "axios";
import {updateProfile} from "@/api/user";


const selectedFile = ref(null);
const userStore = useUserStore();
const editProfileForm = ref({
  userId: userStore.userId,
  name: userStore.name,
  pic: userStore.pic,
  email: userStore.email
});

const handleAvatarChange = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    editProfileForm.value.pic = e.target.result;
  };
  reader.readAsDataURL(file.raw);
  selectedFile.value = file.raw;
  console.log(userStore.id)
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

async function saveProfile() {
  console.log('提交个人信息:', editProfileForm.value);
  try {
    const userId = userStore.userId;
    const formData = new FormData();

    if (selectedFile.value) {
      formData.append('file', selectedFile.value);
    } else {
      formData.append('fileUrl', editProfileForm.value.pic);
    }
    formData.append('nickname', editProfileForm.value.name);
    formData.append('email', editProfileForm.value.email);


    const response = await updateProfile(userId, formData);

    userStore.name = editProfileForm.value.name;
    userStore.email = editProfileForm.value.email;

    if (response.data.pic) {
      userStore.pic = response.data.pic;
    }
    userStore.updateUserInfo({
      userId: userId,
      name: editProfileForm.value.name,
      email: editProfileForm.value.email,
      pic: response.data.data
    });
    ElMessage.success('信息更新成功');
  } catch (error) {
    console.error('更新失败:', error);
    ElMessage.error('信息更新失败');
  }
}

/*const updateProfile = (userId, profileData) => {
  return axios.put(`http://localhost:8080/user/upload/${userId}`, profileData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': userStore.token,
    }
  });
};*/


</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: 'YouYuan';
}


.el-menu-demo {
  background-color: transparent;
  border-bottom: none;
}

.user-profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-top: 70px; /* 确保内容不被导航栏遮挡 */
  width: 100%;
}

.user-profile, .account-settings {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  transition: all 0.3s;
}

.user-profile:hover, .account-settings:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.el-form-item {
  margin-bottom: 20px;
}

.avatar-uploader {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.user-avatar {
  width: 120px;  /* 增大头像的宽度 */
  height: 120px; /* 增大头像的高度 */
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

.large-form-item .el-form-item__content {
  height: 50px;  /* 增大每个表单项的高度 */
}

.large-form-item .el-input {
  height: 100%;  /* 确保输入框填充整个高度 */
}

.large-form-item .el-input__inner {
  height: 100%;  /* 确保输入框内部填充整个高度 */
}
</style>
