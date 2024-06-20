import request from '@/utils/request'
//注册接口
export const userRegisterService = ({
  email,
  password,
  rePassword,
  confirm
}) => {
  return request.post('/user/regist', { email, password, rePassword, confirm })
}

//登录接口
export const userLoginService = ({ id, password }) => {
  return request.post('/user/login', { id, password })
}

export const updateProfile = (userId, profileData) => {
  return request.put(`/upload/${userId}`, profileData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
};


//发送邮箱,获取验证码的接口
export const userConfirmService = (email) => {
  return request.post('/user/getConfirm', { email })
}

//关注房源
export const userFocusService = (focusId, houseId) => {
  return request.post('/user/focus', { focusId, houseId })
}
//搜索房源和用户的关系
export const userFocusedService = (focusId, houseId) => {
  return request.post('/user/focused', { focusId, houseId })
}

//移除关注
export const userSearchFocusService = (focusId, houseId) => {
  return request.post('/user/searchFocus', { focusId, houseId })
}

//最先显示未支付的
export const userUnPayService = (userId) => {
  return request.post('/user/searchUnPay', { userId })
}

//显示未进行的订单
export const userDoingService = (userId) => {
  return request.post('/user/doing', { userId })
}

//显示已完成的订单
export const userFinishService = (userId) => {
  return request.post('/user/finish', { userId })
}

//取消订单
export const userCancelOrderService = (orderSkuId) => {
  return request.post('/user/cancelOrder', { orderSkuId })
}

//申请退款
export const userReturnService = ({
  orderSkuId,
  userId,
  orderSpuId,
  orderCreateTime,
  orderStatus,
  orderBadTime,
  orderEndTime,
  description,
  skuId,
  totalPrice
}) => {
  return request.post('/user/return', {
    orderSkuId,
    userId,
    orderSpuId,
    orderCreateTime,
    orderStatus,
    orderBadTime,
    orderEndTime,
    description,
    skuId,
    totalPrice
  })
}

//删除订单
export const userDeleteService = ({
  orderSkuId,
  userId,
  orderSpuId,
  orderCreateTime,
  orderStatus,
  orderBadTime,
  orderEndTime,
  description,
  skuId,
  totalPrice
}) => {
  return request.post('/user/delete', {
    orderSkuId,
    userId,
    orderSpuId,
    orderCreateTime,
    orderStatus,
    orderBadTime,
    orderEndTime,
    description,
    skuId,
    totalPrice
  })
}

//求一下余额
export const userAllowanceService = (userId) => {
  return request.post('/user/allowance', { userId })
}

//去支付
export const userPayService = ({
  orderSkuId,
  userId,
  orderSpuId,
  orderCreateTime,
  orderStatus,
  orderBadTime,
  orderEndTime,
  description,
  skuId,
  totalPrice,
  password
}) => {
  return request.post('/user/pay', {
    orderSkuId,
    userId,
    orderSpuId,
    orderCreateTime,
    orderStatus,
    orderBadTime,
    orderEndTime,
    description,
    skuId,
    totalPrice,
    password
  })
}

//管理用户
export const userManageService = (page) => {
  return request.post('/user/manage', { page })
}

//冻结用户
export const userFreezeService = (userId) => {
  return request.post('/user/freeze', { userId })
}

//解冻用户
export const userUnfreezeService = (userId) => {
  return request.post('/user/unfreeze', { userId })
}
//查询用户订单
export const userAskOrderService = (userId) => {
  return request.post('/user/askOrder', { userId })
}

export const userCancelService = (userId) => {
  return request.post('/user/cancel', { userId })
}

//修改用户信息
export const updateUserInfo = ({
  userId,
  name,
  email,
  pic
}) => {
  return request.put('/user/update',{
    userId,
    name,
    email,
    pic
  })
}


