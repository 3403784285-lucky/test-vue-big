<template>
  <div class="container">
    <div class="card manage-frame">
      <div class="container">
        <div class="split"></div>
        <div class="row">
          <div class="col-md-2"></div>
        </div>
        <div class="row suc" v-for="user in users" :key="user.id">
          <div class="img-frame col-md-1">
            <img
              class="img-fluid"
              src="https://tse4-mm.cn.bing.net/th/id/OIP-C.aQ7tvYNWibb-AKW51952BAAAAA?w=210&h=210&c=7&r=0&o=5&dpr=2&pid=1.7"
              alt="用户头像"
            />
          </div>
          <div class="name col-md-3 align-self-center">
            小星星({{ user.id }})
          </div>
          <div class="col-md-5"></div>
          <div class="col-md-3 d-flex align-items-center justify-content-end">
            <button
              type="button"
              class="rounded-2 fre"
              id="judgeF"
              @click="() => debounceFuncFreeze(user)"
            >
              {{ controlName(user.status) }}
            </button>
          </div>

          <div class="split"></div>
        </div>
      </div>
      <nav aria-label="Page navigation example" class="test">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              @click="prePage"
              >上一页</a
            >
          </li>

          <li class="page-item">
            <a class="page-link" href="#">{{ page }}</a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#" @click="nextPage">下一页</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<!-- ...（其余的script和style部分） -->

<script setup>
import { ref } from 'vue'
import _ from 'lodash'
import {
  userManageService,
  userFreezeService,
  userUnfreezeService
} from '@/api/user'
let users = ref()
const page = ref(1)
const totalPage = ref()
const init = async () => {
  const res = await userManageService(page.value)
  console.log(res.data.data)
  users.value = res.data.data.records
  totalPage.value = res.data.data.pages
}
const controlName = (status) => {
  if (status == '0') {
    return '冻结账号'
  } else {
    return '解冻账号'
  }
}

init()
//上一页
const prePage = () => {
  if (page.value != 1) {
    page.value--
    init()
  }
}
const fre = async (id) => {
  await userFreezeService(id)
}

const unfre = async (id) => {
  await userUnfreezeService(id)
}
const freeze = (user) => {
  if (user.status == '0') {
    console.log('冻结')
    fre(user.id)
    user.status = -1
    ElMessage.success('冻结账号成功')
  } else {
    unfre(user.id)
    user.status = 0

    ElMessage.success('解冻账号成功')
  }
}
const debounceFuncFreeze = _.debounce((user) => freeze(user), 500, {
  leading: true, // 延长开始后调用
  trailing: false // 延长结束前调用
})

//下一页
const nextPage = () => {
  if (page.value != totalPage.value) {
    page.value++
    init()
  }
}
</script>
<style scoped>
.manage-frame {
  padding: 2rem;
}
.test {
  margin-top: 1rem;
  font-family: 'YouYuan';
}
.page-link {
  color: black;
}
.name {
  font-size: 0.9rem;
  font-family: 'YouYuan';
}

.fre {
  width: 4rem;
  height: 2rem;
  font-size: 0.7rem;
  background-color: rgb(201, 105, 105);
  color: white;
  border: 0;
  outline: none;
}

.split {
  height: 0.02rem;
  background-color: rgb(202, 202, 197);
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
