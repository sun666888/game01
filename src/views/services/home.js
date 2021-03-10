import request from '../../util/request'


// 验证码
export function code ( code ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/verify',
    method: 'post',
    data: code
  })
}

// 报名
export function login ( login ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/login',
    method: 'post',
    data: login
  })
}

// 首页当前游戏状态
export function initStatus () {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/initStatus',
    method: 'get',
  })
}

// 首页当前游戏状态
export function gameStatus ( token ) {
  return request({
    url: '/wxunicom/activitylittlegame/public/index.php/api/games/status?token='+token,
    method: 'get',
  })
}

// 中奖用户的openid
export function getOpenid ( code ) {
  return request({
    url: 'wxunicom/activitylittlegame/public/index.php/api/openid?flag=1&code='+code,
    method: 'get',
  })
}

