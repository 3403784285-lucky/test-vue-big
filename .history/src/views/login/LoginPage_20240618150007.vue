<script setup>
import * as yup from 'yup'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useCountStore } from '@/stores/index'
import { useUserStore } from '@/stores/index'
import { useRouter } from 'vue-router'
import {
  userRegisterService,
  userLoginService,
  userConfirmService
} from '@/api/user'
import $ from 'jquery'

const isRegister = ref(true)

const countRemailTime = new useCountStore()
const confirmText = ref('验证码')
const router = useRouter()
const isModify = ref(false)
const userStore = useUserStore()
let timePut = null
let timeInter = null

onUnmounted(() => {
  clearTimeout(timePut)
})

// 注册功能，整个的用于提交的form对象
// 设置预校验

const login = async () => {
  simpleSchemaLogin
    .validate(loginFormModel.value, { abortEarly: false })
    .then(async () => {
      const res = await userLoginService(loginFormModel.value)
      if (res.data.code == 503) ElMessage.error('密码错误')
      else if (res.data.code == 501) ElMessage.error('账号不存在')
      else {
        userStore.setToken(res.data.data.token)
        console.log(res.data.data.userId)
        userStore.userId = res.data.data.userId
        userStore.email = res.data.data.email
        userStore.pic = res.data.data.userPic
        userStore.name = res.data.data.nickname
        ElMessage.success('登录成功')

        router.push('/')
      }
    })
    .catch((error) => {
      // 预校验未通过
      console.error('预校验未通过:', error.errors)
    })
}
onMounted(() => {
  console.log(formModel.value.email)
})

//注册的回调函数
const register = async () => {
  console.log(formModel.value)
  simpleSchemaRegister
    .validate(formModel.value, { abortEarly: false })
    .then(async () => {
      const res = await userRegisterService(formModel.value)
      if (res.data.code == 506) ElMessage.error('验证码错误')
      else if (res.data.code == 200) {
        ElMessage.success('注册成功')
        isRegister.value = false
      }
    })
    .catch((error) => {
      // 预校验未通过
      console.error('预校验未通过:', error.errors)
    })
}

//获取验证码的回调函数
const getConfirm = async () => {
  simpleSchemaRegister
    .validateAt('email', formModel.value)
    .then(async () => {
      // 预校验通过
      console.log('预校验通过')
      await userConfirmService(formModel.value.email)
      timeInter = setInterval(() => {
        countRemailTime.sub()
        confirmText.value = countRemailTime.count + 's'
      }, 1000)
      timePut = setTimeout(() => {
        clearInterval(timeInter)
        confirmText.value = '验证码'
        $('.getConfirm').css('pointer-events', 'auto')
        countRemailTime.count = 60
      }, 60000)
      ElMessage.success('验证码已发送到您的邮箱,有效期为5分钟')
      $('.getConfirm').css('pointer-events', 'none')
    })
    .catch((error) => {
      // 预校验未通过
      console.error('预校验未通过:', error.errors)
    })
}

//点击跳转的回调函数
const toLogin = () => {
  isRegister.value = false
  isModify.value = false
}
const toModify = () => {
  isRegister.value = true
  isModify.value = true
}
const toRegister = () => {
  isRegister.value = true
  isModify.value = false
}

const formModel = ref({
  email: '',
  password: '',
  rePassword: '',
  confirm: ''
})
const loginFormModel = ref({
  id: 0,
  password: ''
})

watch(isRegister, () => {
  formModel.value = {
    email: '',
    password: '',
    rePassword: ''
  }
  loginFormModel.value = {
    id: '',
    password: ''
  }
})

const simpleSchemaRegister = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('该选项不能为空1')
    .matches('^[1-9]\\d{4,10}@qq\\.com$', '输入的内容不满足邮箱格式'),
  password: yup
    .string()
    .trim()
    .required('该选项不能为空2')
    .min(8, '密码必须为至少8位字符')
    .test('test2', '与第一次输入的密码不匹配', function (password) {
      const rePassword = this.parent.rePassword
      if (password !== rePassword) {
        return this.createError({ path: 'confirmPassword' })
      }
      return true
    }),
  rePassword: yup
    .string()
    .trim()
    .required('该选项不能为空3')
    .test('test1', '与第一次输入的密码不匹配', function (rePassword) {
      const password = this.parent.password
      if (password !== rePassword) {
        return false
      }
      return true
    })
})
const simpleSchemaLogin = yup.object().shape({
  password: yup
    .string()
    .trim()
    .required('该选项不能为空')
    .min(8, '密码必须为至少8位字符'),
  // 要么是数字要么是字符串2选1，trim是字符串特有的，只有number不能专门提示
  id: yup
    .number()
    .required('输入的必须为非空数字')
    .min(10, '账号必须是10位数字哦')
})
</script>

<template>
  <div class="layoutLogin">
    <img
      class="loginBackground"
      src="https://www.2008php.com/2020_Website_appreciate/2020-09-09/20200909235937YVECijFhM8Gf.jpg"
      alt="背景图"
    />
    <Form
      :validation-schema="simpleSchemaRegister"
      :model="formModel"
      class="formRegister"
      v-if="isRegister"
    >
      <div class="title">注册</div>
      <div class="frame">
        <Field
          type="email"
          v-model="formModel.email"
          name="email"
          placeholder="请输入你的邮箱"
        />

        <br />
        <ErrorMessage name="email" />
      </div>

      <div class="frame">
        <Field
          name="password"
          v-model="formModel.password"
          type="password"
          placeholder="请输入你想要的密码"
        />
        <br />
        <ErrorMessage name="password" />
      </div>
      <div class="frame">
        <Field
          name="rePassword"
          type="password"
          placeholder="请再次确认你输入的密码"
          v-model="formModel.rePassword"
        />
        <br />
        <ErrorMessage name="rePassword" />
      </div>
      <div class="frame">
        <Field
          name="confirm"
          type="password"
          placeholder="请输入验证码"
          v-model="formModel.confirm"
          class="confirmInput"
        />
        <span class="getConfirm" @click="getConfirm">{{ confirmText }}</span>
      </div>

      <div @click="register" class="registerButton">&nbsp;&nbsp;&nbsp;注册</div>
      <div class="toWhere">
        <a href="#" class="toLogin" @click="toLogin">已有帐号？去登录</a>
        <br />
        <a href="#" class="toModify" @click="toModify">忘记密码？</a>
      </div>
    </Form>
    <!-- 切换的时候重置表单内容 -->

    <Form
      :validation-schema="simpleSchemaLogin"
      :model="loginFormModel"
      class="formLogin"
      v-else
    >
      <div class="title">登录</div>
      <div class="frame">
        <Field
          type="text"
          v-model="loginFormModel.id"
          name="id"
          placeholder="请输入你的账号"
        />
        <br/>
        <ErrorMessage name="id" />
      </div>

      <div class="frame">
        <Field
          name="password"
          v-model="loginFormModel.password"
          type="password"
          placeholder="请输入密码"
        />
        <br />
        <ErrorMessage name="password" />
      </div>

      <div @click="login" class="registerButton">&nbsp;&nbsp;&nbsp;登录</div>
      <div class="toWhere">
        <a href="#" @click="toRegister" class="toRegister">新用户？去注册</a>
        <br />
        <a href="#" @click="toModify" class="toModify">忘记密码？</a>
      </div>
    </Form>
  </div>
</template>
<style scoped>
* {
  outline: none;
  padding: none;
  margin: 0;
}
.formLogin,
.formRegister {
  width: 30vw;
  min-height: 40vh;
  font-family: 'YouYuan';
  box-shadow: 2px 4px 8px 4px rgba(197, 194, 194, 0.411);
  border-radius: 10px;
  background-color: rgba(177, 173, 173, 0);
}
.title {
  font-size: 40px;

  font-family: 'STCaiyun';
  text-shadow: 5px 5px 3px rgba(235, 235, 235, 0.654);
  color: rgb(254, 254, 254);
  margin-top: 0.5em;
  margin-bottom: 0.2em;
  margin-left: 4em;
}

.layoutLogin {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
/* 对于Field，本质上是input，所以还是要改变这个 */

.confirmInput {
  width: 12em;
}
.getConfirm {
  padding: 0.6rem;
  border-radius: 2rem;
  font-family: 'YouYuan';
  box-shadow: 0px 2px 8px 4px rgba(215, 211, 211, 0.411);
  margin-left: 2rem;
  color: rgba(247, 246, 246, 0.781);
  cursor: pointer;
}
.getConfirm:hover {
  background-color: rgba(135, 139, 143, 0.315);
}
.frame {
  font-weight: bolder;
  margin: 2rem 4em;
}
.loginBackground {
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -1;
}
span {
  font-size: 0.8em;
  color: red;
}
.registerButton:hover {
  background-color: rgba(144, 146, 136, 0.421);
}
.registerButton {
  margin: 0.5em 9.5rem;
  margin-top: 1em;
  border: 0;
  background-color: rgba(193, 197, 196, 0);
  width: 5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 1em;
  color: rgba(255, 255, 255, 0.627);
  box-shadow: 0px 1px 8px 2px rgba(229, 227, 227, 0.223);
}
.toWhere {
  font-size: 0.5em;
  margin-left: 1.5em;
  margin-bottom: 20px;
}
.toLogin,
.toModify,
.toRegister {
  color: rgba(188, 194, 198, 0.764);
}
.toLogin:hover,
.toModify:hover,
.toRegister:hover {
  color: rgb(255, 255, 255);
}
input {
  height: 2em;
  width: 20em;
  border: 0;
  box-shadow: 0px 2px 8px 2px rgba(233, 230, 230, 0.223);
  border-radius: 1em;
  background-color: rgba(125, 131, 131, 0);
  -webkit-text-fill-color: rgb(255, 255, 255);
}
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px rgb(148, 154, 174) inset !important;

  -webkit-text-fill-color: #fff !important;

  -webkit-background-clip: text;
}
</style>
