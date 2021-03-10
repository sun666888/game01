<template>
  <div class="home">
    <!-- 头部 -->
    <div class="logo father">
      <img src="./../assets/img/logo.png" alt="" srcset="" class="logo1">
      <img src="./../assets/img/rule1.png" alt="" @click="showPopup" class="logo2">
      <!-- <van-button type="default">活动规则</van-button> -->
    </div>
    <!-- 标题 -->
    <div class="title">
      <img src="./../assets/img/title.png" alt="">
      <img src="./../assets/img/esim.png" alt="" class="title2">
    </div>
    <!-- 品牌 -->
    <div class="brand">
      <ul class="father">
        <li>
          <img src="./../assets/img/Nubia.png" alt="" srcset="">
          <p>一等奖</p>
          <p style="line-height: 1.2;">努比亚腕机*1</p>
        </li>
        <li style="margin-left: 2.5%;">
          <img src="./../assets/img/Ticwatch.png" alt="" srcset="">
          <p>二等奖</p>
          <p class="wenwen">TicWatch <br /> Pro 4G*1</p>
        </li>
        <li style="margin-left: 2.5%;">
          <img src="./../assets/img/Xiaomi.png" alt="" srcset="">
          <p>二等奖</p>
          <p style="line-height: 1.2;">小米手表*1</p>
        </li>
        <li style="float:right;">
          <img src="./../assets/img/TicPods2.png" alt="" srcset="">
          <p>三等奖</p>
          <p style="line-height: 1.2;">TicPods 2*3</p>
        </li>
      </ul>
      <p class="tishi">
        <img class="img1" src="./../assets/img/circle.png" alt="" srcset="">
        <span>完成全部4关挑战即可参与手表大抽奖</span>
        <img class="img2" src="./../assets/img/circle.png" alt="" srcset="">
        </p>
        <!-- <van-button plain type="info" @click="Return" class="returnhome">返回活动主页</van-button> -->
    </div>
    <!-- 分享 -->
    <div class="share">
      <p class="tishi1">
        <img src="./../assets/img/cion1.png" alt="" srcset="" class="img3">
        <span>获取额外的挑战次数</span>
        <img src="./../assets/img/cion2.png" alt="" srcset="" class="img4">
      </p>
        <!-- <van-button plain type="info" class="frequency">获取额外挑战次数</van-button> -->
      <div class="game">
      <div class="center father">
        <b>任务一</b>
        <p>了解联通eSIM业务<br>
            <span>挑战次数+1</span>
        </p>
        <span class="anniu" @click="getnum(1)">去了解</span>
        <!-- <a class="anniu" href="https://mp.weixin.qq.com/s/LvEE358qazjUIWaS8ziOmQ" @click="getnum(1)">去了解</a> -->
      </div>
      <div class="center father">
        <b>任务二</b>
        <p>浏览eSIM智能穿戴设备<br>
            <span>挑战次数+1</span>
        </p>
        <span class="anniu" @click="getnum(2)">去了解</span>
        <!-- <a class="anniu" href="http://esimwx.10010sh.cn:8999/html/ProductIntroduction/index.html" @click="getnum(2)">去了解</a> -->
      </div>
      <div class="center father">
        <b>任务三</b>
        <p>查看联通eSIM开通教程<br>
            <span>挑战次数+1</span>
        </p>
        <span class="anniu" @click="getnum(3)">去了解</span>
        <!-- <a class="anniu" href="http://esimwx.10010sh.cn:8999/html/eSIMOpenGuide/eSIMOpen.html" @click="getnum(3)">去了解</a> -->
      </div>
    </div>
    </div>
    <div class="quanma" @click="Return">
      <p>返回活动主页</p>
    </div>
    <!-- 弹框 -->
    <van-popup v-model="show" class="vanpopup">
      <div class="popup">
        <img src="./../assets/img/huodong.png" alt srcset />
        <h3 class="h3">优惠券使用规则:</h3>
        <span class="span">TicPods 2、TicWatch Pro 4G、AMAZFIT 智能手表 2优惠券使用规则：</span>
        <p>1、用户挑战成功后点击【领取手表优惠券】-【我的优惠券】-【复制优惠券领取链接】</p>
        <p>2、在手机浏览器粘贴链接并打开，点击“立即领取”；</p>
        <p>3、登录京东账号，点击“去活动页”；</p>
        <p>4、选择优惠券适用商品进行下单；</p>
        <p>5、进入订单支付页面，选择京东优惠券即可。</p>
        <span class="span">瑞恒手表优惠券使用规则：</span>
        <p>1、用户挑战成功后点击【领取手表优惠券】-【我的优惠券】-【复制优惠券券码】</p>
        <p>2、至京东平台与瑞恒客服兑换优惠券即可使用。</p>
        <h3 class="h3">活动规则：</h3>
        <p>1、活动时间：2019/11/08~11/11(共计4天)；</p>
        <p>2、用户完成当天挑战，即有机会获得该日优惠券；</p>
        <p>3、每个用户每天只有3次挑战机会，完成额外任务可额外再增加3次，即一个用户每天最多6次挑战机会，仅当天使用，不限关数；</p>
        <p>4、活动期间，用户可挑战当天及当天前所有游戏；</p>
        <p>5、活动期间，游戏将按每天上午6点更新一关的速度进行开放，即11月11日，全部闯关开放挑战；</p>
        <p>6、用户完成全部闯关任务（4关），11月12日将由【第三方抽奖平台】随机抽出共计6名幸运用户获得奖励，且每人最多中奖1次；</p>
        <p>7、本活动确保公平、公开、公正，如存在用户作弊行为，一经查实，将一律取消获奖资格；</p>
        <p>8、请务必填写本人真实有效信息，如因信息有误而导致无法派奖，联通eSIM微信公众号概不负责；</p>
        <p>9、奖品将在开奖后7个工作日内进行派送；</p>
        <p>10、奖品以实物为准，产品图仅供参考；</p>
        <p>11、本活动最终解释权归联通eSIM智能穿戴设备公众号所有。</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Button, Popup } from "vant";
import md5 from "md5";
import { gameNum } from "./services/game";
import Cookies from 'js-cookie' 

export default {
  name: "home",
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup
  },
  data() {
    return {
      show: false,
      token: ''
    };
  },
  mounted(){
    this.token = Cookies.get('token')  // 获取存储的token
  },
  methods: {
    showPopup (){
      this.show = true;
    },
    Return () {
        this.$router.push({
          path: '/'
        })
    },
    getnum(n) {
      
      if (n == 1) {
        window.location.href = 'https://mp.weixin.qq.com/s/LvEE358qazjUIWaS8ziOmQ'
      } else if (n == 2) {
        window.location.href = 'http://mp.weixin.qq.com/s?__biz=MzU1NDA2ODM1Mw==&mid=100006210&idx=1&sn=524be77c6c924ac81d209326a95c41dc&chksm=7be869ac4c9fe0ba9f03343cbbbf55b5f3e2b2a38cecf3787e8593ddc86ce9dfcba07c647202#rd'
      } else if (n == 3) {
        window.location.href = 'http://esimwx.10010sh.cn:8999/html/eSIMOpenGuide/eSIMOpen.html'
      }
      let num = {
        type: n,
        token: this.token
      }
      gameNum(num).then( res=> {
        console.log(res)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
*{
  margin: 0 auto;
  padding: 0;
}
.father:after{
  content: '';
  display: block;
  height: 0;
  clear: both;
}
.father{
  zoom: 1;
}
a {
  text-decoration: none;
}
.home {
  width: 750px;
  min-height: 101vh;
  background: url("./../assets/img/background.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  padding-top:40px ;
  padding-bottom: 30px;
  background-color: #3d73ed;
    // 顶部
  .logo {
    padding: 0 40px;
    img.logo1{
      width: 83px;;
      float: left;
    }
    img.logo2{
      float:right;
      width: 38px;
      height: 116px;
    }
    .van-button {
      float:right;
      height: 60px;
      line-height: 40px;
      padding: 10px;
    }
  }
// 头部标题
  .title {
    width: 522px;
    // text-align: center;
    // margin-top: 20px;
    // padding: 20px 200px;
    img {
      width: 100%;
      margin-top: -40px;
    }
    img.title2 {
      width: 80%;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    // p {
    //   font-size: 26px;
    //   margin-bottom: 30px;
    // }
  }
    // 品牌
  .brand {
    ul {
      width: 90%;
      margin: 0 auto;
      li {
        width: 23%;
        height: 220px;
        background: url("./../assets/img/prizebg.png") no-repeat;
        background-size: 100% 100%;
        float: left;
        margin: 0 auto;
        // padding: 5px;
        border-radius: 15px;
        img {
          width: 75px;
          height: 108px;
          margin-top: 20px;
        }
        p {
          color: #235bf5;
          margin: 5px auto;
          font-size: 20px;
          line-height: 1.5;
        }
        .wenwen {
          // width: 120px;
          font-size: 18px;
          line-height: 1;
        }
      }
    }
    .tishi{
      padding: 0 120px;
      margin-top: 30px;
      .img1{
        width: 37px;
        float: left;
      }
      .img2{
        width: 37px;
        float: right
      }
      span{color: #fff;
        font-size: 26px;
        display: inline-block;
        line-height: 37px;
      }
    }
    // .returnhome {
    //   border-radius: 10px;
    //   padding: 0 20px;
    //   font-size: 30px;
    //   font-weight: bold;
    //   margin-top: 30px;
    //   margin-bottom: 30px;
    // }
  }
    // 分享
    .share {
        // padding: 20px;
        .tishi1{
          padding: 0 120px;
          margin-top: 50px;
          .img3{
            width: 70px;
            float: left;
          }
          .img4{
            width: 70px;
            float: right
          }
          span{color: #fff;
            font-size: 30px;
            display: inline-block;
            line-height: 20px;
          }
        }
        .game{
          padding: 0 60px;
            .center{
              // width: 560px;
              // height: 90px;
              background-image: url("./../assets/img/levelbg2.png");
              background-size: 100%;
              background-repeat:no-repeat;
              padding: 20px 30px 20px;
              margin-top: 50px;
              margin-bottom: 25px;
                b{
                  display: inline-block;
                  width: 80px;
                  height: 80px;
                  line-height: 80px;
                  font-size: 24px;
                  border: 4px solid #fee34b;
                  border-radius: 60px;
                  float: left;
                  color: #8e1ef9;
                  font-weight:bold; 
                  background-color: #fff;
                }
                p{
                    font-size: 28px;
                    font-weight: bold;
                    text-align: left;
                    float: left;
                    line-height: 1.5;
                    margin-top: 10px;
                    margin-left: 20px;
                    color: #fff;
                    span{
                        font-weight:initial;
                    }
                }
                .anniu{
                  display: inline-block;
                  padding: 10px 30px;
                  font-size: 26px;
                  font-weight: bold;
                  background-color: #f6bc10;
                  // box-shadow: 0px 10px 10px #888888;
                  text-decoration:none;
                  color: #7c42ff;
                  border-radius: 30px;
                  float: right;
                  margin-top: 20px;
                }
            } 
        }
    }
    .quanma {
      width: 370px;
      height: 70px;
      margin-top: 40px;
      // margin-bottom: 30px;
      background-image: url("./../assets/img/button4.png");
      background-size: 100% 100%;
      p {
        height: 70px;
        line-height: 70px;
        font-size: 30px;
        color: #7c42ff;
      }
   }
  // 弹框
  .van-popup.vanpopup{
    width: 70%;
    height: 70%;
    border-radius: 20px;
    img{
      width: 116px;
      margin-top: 30px;
      margin-bottom: 30px;
      display: inherit;
    }
    .popup{
      text-align: left;
      padding: 0 30px 20px 30px;
      font-size: 18px;
      line-height: 1.5;
      p{
        font-size: 24px;
        text-indent: -1.4em;
        margin-left: 1.4em;
        line-height: 1.5;
      }
    }
  }
}
</style>
