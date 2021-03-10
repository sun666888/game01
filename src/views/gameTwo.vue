<template>
  <div class="gameone">
    <!-- 头部 -->
    <div class="logo father">
      <img src="./../assets/img/logo.png" alt srcset />
      <span class="rule" @click="showPopup"></span>
    </div>
    <!-- 标题 -->
    <div class="title">
      <img class="title1" src="./../assets/img/11.11.png" alt />
      <img class="title2" src="./../assets/img/explain4.png" alt srcset />
    </div>

    <!-- 游戏 -->

    <div class="centergame">
      <p class="game">
        <span>{{m}}</span> :
        <span>{{s}}</span>.
        <span>{{ms}}</span>
      </p>
    </div>
    <!-- 挑战开始 -->
    <div class="tiaozhan">
      <div class="con">
        剩余{{ iconNum }}次
        <p class="ab"></p>
      </div>
      <p class="huoqu" @click="operate" v-show="!counting">开始挑战</p>
      <p class="count-active" @click="ting" v-show="counting">暂停</p>
    </div>
    <!-- 参照框 -->
    <!-- <div class="reference father">
            <img src="./../assets/img/suoluetu.png" alt="" srcset="">
    </div>-->
    <!-- 获取额外挑战次数 -->
    <!-- <div class="frequency"> -->
    <!-- <p class="vanbutton">获取额外挑战次数</p> -->
    <!-- <van-button plain type="info" @click="share">获取额外挑战次数</van-button> -->
    <!-- </div> -->
    <!-- 底部 -->
    <div id="ewai" @click="share"></div>
    <div class="word">
      <p>长按扫描下方二维码</p>
      <p>获取中奖信息</p>
    </div>
    <div class="ewm">
      <img src="./../assets/img/erweima.jpg" alt="" srcset="">
    </div>
    <div class="word">
      <p>立即关注</p>
      <p>【联通eSIM智能穿戴设备】</p>
      <p>开启无卡新生活</p>
    </div>
    <!-- 弹框 活动介绍-->
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
        <p>1、用户挑战成功后点击【领取手表优惠券】-【我的优惠券】-【复制优惠券券码】；</p>
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
    <!-- 弹框成功 -->
    <van-popup v-model="showSuccess" class="success" :close-on-click-overlay="closeonclickoverlay">
      <div class="successcenter">
        <p>挑战成功</p>
        <!-- <img src="./../assets/img/youhuiquan.png" alt class="youhuiquan" @click="getQuan" /> -->
        <div class="youhuiquan" @click="getQuan"></div>
        <div class="huoqu1" @click="huoqu">
          <img src="./../assets/img/shou.png" alt class="shou" />
        </div>
        <img src="./../assets/img/guang.png" alt class="guang" />
        <div class="jieshao">
          <img src="./../assets/img/icon1.png" alt srcset />
          <span class="titlespan">优惠券使用规则：</span>
          <p>1.用户挑战成功后点击【领取优惠券】-【我的优惠券】-【复制优惠券领取链接】</p>
          <p>2.在手机浏览器粘贴链接并打开，点击“立即领取”；</p>
          <p>3.登录京东账号，点击“去活动页”；</p>
          <p>4.选择优惠券适用商品进行下单；</p>
          <p>5.进入订单支付页面，选择京东优惠券即可。</p>
          <p>注：如果没有出现优惠券免减选项，请私信京东卖家客服处理。</p>
        </div>
        <img src="./../assets/img/x.png" alt srcset @click="successcancel" class="quxiao" />
      </div>
    </van-popup>
    <!-- 弹框失败-->
    <van-popup v-model="showfail" class="fail" :close-on-click-overlay="closeonclickoverlay">
      <div class="successcenter">
        <p>挑战失败</p>
        <img src="./../assets/img/jixu.png" alt class="youhuiquan" @click="jixu" />
        <div class="huoqu1" @click="huoqu">
          <img src="./../assets/img/shou.png" alt class="shou" />
        </div>
        <!-- <img src="./../assets/img/huoqu.png" alt class="huoqu" /> -->
        <!-- <img src="./../assets/img/shou.png" alt class="shou" /> -->
        <!-- <img src="./../assets/img/guang.png" alt="" class="guang"> -->
        <img src="./../assets/img/x.png" alt srcset @click="failcancel" class="quxiao" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Button, Popup, Toast } from "vant";
import { gameStatus } from "./services/home";
import { gameStar, gameSubFour, getOther } from "./services/game";
import md5 from "md5";
import Cookies from "js-cookie";

export default {
  name: "home",
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Toast.name]: Toast
  },
  data() {
    return {
      closeonclickoverlay: false,
      iconNum: "",
      show: false,
      showSuccess: false,
      // overlay: false,
      showfail: false,
      puzzles: [],
      time: 0,
      counting: false,
      m: "00",
      s: "00",
      ms: "00",
      currentTime: 0,
      intervalId: null,
      token: "",
      state: "", // 游戏状态
      complete: ""
    };
  },
  mounted() {
    this.token = Cookies.get("token"); // 获取存储的token
    this.getGameStatus();
  },
  methods: {
    // 首页当前游戏次数
    getGameStatus() {
      gameStatus(this.token).then(res => {
        console.log(res);
        if (res.msg == "success") {
          this.iconNum = res.data.play_num;
        }
      });
    },
    showPopup() {
      this.show = true;
    },
    // 成功取消
    successcancel() {
      this.showSuccess = false;
    },
    // 失败取消
    failcancel() {
      this.showfail = false;
    },
    share() {
      this.$router.push({
        path: "/share"
      });
    },
    // 继续游戏
    jixu() {
      this.showfail = false;
      this.counting = false;
      this.reset();
    },
    isPass() {
      let seconds = parseInt(this.s);
      let milliseconds = parseInt(this.ms);
      setTimeout(() => {
        // 判断是否在11:00到11:50之间
        if (seconds === 11 && milliseconds < 50) {
          this.showSuccess = true;
          this.state = 1;
          this.complete = seconds + "." + milliseconds;
          let gameOne = {
            state: this.state,
            complete: this.complete,
            token: this.token
          };
          gameSubFour(gameOne).then(res => {
            console.log(res);
          });
        } else {
          this.showfail = true;
          this.state = 2;
          this.complete = seconds + "." + milliseconds;
          let gameOne = {
            state: this.state,
            complete: this.complete,
            token: this.token
          };
          gameSubFour(gameOne).then(res => {
            console.log(res);
          });
        }
      }, 800);
    },
    operate() {
      // Toast.loading({
      //   mask: true,
      //   message: "请稍等..."
      // });
      // gameStar(this.token).then(res => {
      //   console.log(res);
      //   if (res.msg == "success") {
          // 开始操作
          this.start();
          this.counting = true;
          Toast.clear();
          Toast(res.data.info);
          this.iconNum = res.data.play_num;
      //   } else {
      //     Toast.clear();
      //     Toast.fail(res.msg);
      //   }
      // });
    },
    ting() {
      this.counting = false;
      this.stop();
      this.isPass();
    },
    increment() {
      let date = new Date();
      let intervals = date.getTime() - this.currentTime + 0;
      let millisecond = (intervals % 1000) / 10;
      let second = (intervals % 60000) / 1000;
      let minute = (intervals % 3600000) / 60000;
      if (this.format(second) === 13) {
        // 13:00 自动暂停
        clearInterval(this.intervalId);
        this.isPass();
      }   
      this.m = this.format(minute);
      this.s = this.format(second);
      this.ms = this.format(millisecond);
    },
    format(num) {
      return num < 10 ? "0" + Math.floor(num) : Math.floor(num);
    },
    start() {
      let date = new Date();
      this.currentTime = date.getTime();
      this.intervalId = setInterval(this.increment, 16);
    },
    stop() {
      clearInterval(this.intervalId);
    },
    reset() {
      this.stop();
      this.m = "00";
      this.ms = "00";
      this.s = "00";
    },
    // 领取优惠券
    getQuan() {
      getOther(4, this.token).then(res => {
        if (res.msg == "success") {
          Toast.success(res.data.info);
          this.$router.push({
            path: "/quanma"
          });
        } else {
          Toast.fail(res.msg);
        }
      });
    },
    huoqu() {
      window.location.href =
        "http://mp.weixin.qq.com/s?__biz=MzU1NDA2ODM1Mw==&mid=100006210&idx=1&sn=524be77c6c924ac81d209326a95c41dc&chksm=7be869ac4c9fe0ba9f03343cbbbf55b5f3e2b2a38cecf3787e8593ddc86ce9dfcba07c647202#rd";
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("./../assets/css/bootstrap.min.css");

* {
  margin: 0 auto;
  padding: 0;
}
.father:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.father {
  zoom: 1;
}
a {
  text-decoration: none;
}
.gameone {
  width: 750px;
  min-height: 101vh;
  background-image: url("./../assets/img/bg_big.jpg");
  background-size: 100%;
  text-align: center;
  background-color: #3d73ed;
  padding-bottom: 20px;
  // 顶部
  .logo {
    padding: 40px 20px 0 20px;
    position: relative;
    img {
      display: block;
      width: 120px;
      float: left;
    }
    .van-button {
      float: right;
      height: 60px;
      line-height: 40px;
      padding: 10px;
    }
    .rule {
      position: absolute;
      right: 20px;
      top: 30px;
      width: 40px;
      height: 120px;
      background: url(./../assets/img/rule.png) no-repeat;
      background-size: 100%;
    }
  }
  // 标题
  // 头部标题
  .title {
    padding-bottom: 30px;
    width: 94%;
    img.title1 {
      width: 100%;
      margin-top: -20px;
    }
    img.title2 {
      width: 460px;
    }
  }
  // 游戏
  .centergame {
    background: url("./../assets/img/11.11bg.png") no-repeat;
    width: 540px;
    height: 141px;
    background-size: 100%;
    p.game {
      text-align: center;
      height: 100%;
      line-height: 141px;
      font-size: 80px;
      color: yellow;
      span {
        display: inline-block;
        width: 100px;
        font-size: 80px;
      }
    }
  }
  // 挑战开始
  .tiaozhan {
    margin-top: 20px;
    .huoqu {
      width: 316px;
      height: 100px;
      line-height: 80px;
      background-image: url("./../assets/img/button1.png");
      background-repeat: no-repeat;
      background-size: 100%;
      font-size: 30px;
      font-weight: bold;
      font-style: oblique;
      letter-spacing: 10px;
      color: #fff;
      cursor: pointer;
    }
    .count-active {
      width: 316px;
      height: 100px;
      line-height: 80px;
      background-image: url("./../assets/img/button1.png"); // 需要一个暂停的背景图片
      background-repeat: no-repeat;
      background-size: 100%;
      font-size: 30px;
      font-weight: bold;
      font-style: oblique;
      letter-spacing: 10px;
      color: #fff;
      cursor: pointer;
    }
    .con {
      z-index: 99;
      width: 130px;
      height: 50px;
      line-height: 50px;
      background-color: #eed33f;
      color: red;
      margin-bottom: 15px;
      margin-left: 54%;
      .ab {
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 15px solid #eed33f;
      }
    }
  }
  // 挑战次数
  // .frequency {
  //     margin-top: 30px;
  //     margin-bottom: 30px;
  //     .vanbutton {
  //         background-image: url("./../assets/img/btn.png");
  //         background-size: 100%;
  //         width: 490px;
  //         font-size: 30px;
  //         height: 96px;
  //         line-height: 96px;
  //         color: #fff;
  //     }
  // }
  // 底部
  #ewai {
    width: 60%;
    height: 100px;
    margin: 20px auto;
    background: url(./../assets/img/button_2.png) no-repeat;
    background-size: 100%;
  }
  .ewm {
    img{
    width: 258px;
    height: 258px;
    margin: 10px auto;
    // background: url(./../assets/img/erweima.jpg) no-repeat;
    // background-size: 100%;
    }
  }
  .word {
    width: 50%;
    margin: 20px auto;
    p {
      height: 28px;
      margin: 0;
      text-align: center;
      line-height: 28px;
      color: #d7e0fb;
      margin-bottom: 10px;
      font-weight: 700;
    }
  }
  // 弹框
  .van-popup.vanpopup {
    width: 70%;
    height: 70%;
    border-radius: 20px;
    img {
      width: 116px;
      margin-top: 30px;
      margin-bottom: 30px;
      display: inherit;
    }
    .popup {
      text-align: left;
      padding: 0 30px 20px 30px;
      font-size: 24px;
      line-height: 1.5;
      .h3 {
        font-size: 26px;
        color: #235bf5;
        margin-bottom: 10px;
        margin-top: 20px;
      }
      .span {
        display: inline-block;
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 10px;
      }
      p {
        font-size: 24px;
        // text-indent: -1.4em;
        // margin-left: 1.4em;
        line-height: 1.5;
      }
    }
  }
  // 弹框成功
  .van-popup.success {
    background-color: transparent;
    // position: relative;
    .successcenter {
      background-image: url("./../assets/img/bg_small.png");
      width: 520px;
      background-size: 100%;
      background-repeat: no-repeat;
      text-align: center;
      // padding: 40px 0px 40px;
      padding-top: 40px;
      height: 100%;
      margin-top: 100px;
      p {
        color: #fff;
        font-size: 60px;
        font-weight: bold;
        // margin-top: 40px;
      }
      .youhuiquan {
        width: 280px;
        height: 65px;
        display: inherit;
        background: url(./../assets/img/youhuiquan.png) no-repeat;
        background-size: 100%;
        margin-bottom: 20px;
        margin-top: 25px;
        position: relative;
        z-index: 999;
      }
      .huoqu1 {
        background-image: url("./../assets/img/huoqu.png");
        height: 64px;
        width: 400px;
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
        z-index: 999;
        img.shou {
          width: 60px;
          position: absolute;
          top: 40px;
          right: 0%;
        }
      }
      img.guang {
        width: 450px;
        position: absolute;
        top: -90px;
        left: 40px;
        animation: rotation 6s linear infinite;
      }
      @-webkit-keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      img.shou {
        width: 60px;
        position: absolute;
        top: 300px;
        right: 12%;
      }
      .jieshao {
        text-align: left;
        padding-left: 30px;
        padding-right: 20px;
        margin-top: 20px;
        padding-bottom: 140px;
        img {
          width: 16px;
          display: inline-block;
        }
        .titlespan {
          display: inline-block;
          font-size: 26px;
          color: #fff;
          font-weight: bold;
          margin-left: 10px;
          margin-bottom: 10px;
          margin-top: 10px;
        }
        p {
          font-size: 24px;
          color: #fff;
          font-weight: 200;
          text-indent: -0.8em;
          margin-left: 0.8em;
        }
      }
      img.quxiao {
        width: 60px;
        margin-top: 60px;
      }
    }
  }
  // 弹框失败
  .van-popup.fail {
    background-color: transparent;
    // position: relative;
    .successcenter {
      background-image: url("./../assets/img/bg_small1.jpg");
      width: 520px;
      background-size: 100%;
      background-repeat: no-repeat;
      text-align: center;
      padding: 60px 0px 40px;
      height: 100%;
      p {
        color: #fff;
        font-size: 60px;
        font-weight: bold;
        // margin-top: 40px;
      }
      img.youhuiquan {
        width: 280px;
        display: inherit;
        margin-bottom: 20px;
        margin-top: 25px;
      }
      .huoqu1 {
        background-image: url("./../assets/img/huoqu.png");
        height: 64px;
        width: 400px;
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
        img.shou {
          width: 60px;
          position: absolute;
          top: 40px;
          right: 0%;
        }
      }
      img.quxiao {
        width: 60px;
        margin-top: 120px;
      }
    }
  }
}
</style>