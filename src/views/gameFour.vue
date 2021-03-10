<template>
  <div class="gameone">
    <!-- 头部 -->
    <div class="logo father">
      <img src="./../assets/img/logo.png" alt srcset />
      <span class="rule" @click="showPopup"></span>
    </div>
    <!-- 标题 -->
    <img class="title" src="./../assets/img/zhua.png" alt />

    <!-- 游戏 -->
    <div class="centergame"></div>

    <div id="content">
      <ul class="father">
        <li v-show="isE">
          <img src="./../assets/img/e_1.png" alt />
        </li>
        <li v-show="!isE">
          <img src="./../assets/img/e.png" alt />
        </li>
        <li v-show="isS" class="margin">
          <img src="./../assets/img/S_1.png" alt />
        </li>
        <li v-show="!isS" class="margin">
          <img src="./../assets/img/S.png" alt />
        </li>
        <li v-show="isI" class="margin">
          <img src="./../assets/img/I_1.png" alt />
        </li>
        <li v-show="!isI" class="margin">
          <img src="./../assets/img/I.png" alt />
        </li>
        <li v-show="isM" class="fr">
          <img src="./../assets/img/M_1.png" alt />
        </li>
        <li v-show="!isM" class="fr">
          <img src="./../assets/img/M.png" alt />
        </li>
      </ul>
      <div class="game">
        <!--爪子-->
        <div class="paw">
          <div class="pawer"></div>
          <div class="pawerPic">
            <img src="./../assets/img/zhuashou.png" class="lose" />
            <div class="win" v-if="gzShow2">
              <img :src="t_img" />
            </div>
          </div>
        </div>
        <!--区域-->
        <div class="area">
          <!--娃娃滚动-->
          <div id="pack" ref="pack">
            <div id="sel1" class="father" ref="imgs">
              <img
                v-for="img in imgs"
                :class="img.isSuc ? 'yes' : 'no'"
                :src="img.img"
                :key="img.id"
                :alt="img.isSuc"
              />
            </div>
          </div>
        </div>
        <span class="button" @click="zhua"></span>
      </div>
      <div id="tiao" @click="start">
        {{ isStar ? count + 's' : '开始挑战' }}
        <span class="icon">剩余{{ iconNum }}次</span>
      </div>
      <div id="ewai" @click="share"></div>
      <div class="word">
        <p>长按扫描下方二维码</p>
        <p>获取中奖信息</p>
      </div>
      <div class="ewm">
        <img src="./../assets/img/erweima.jpg" alt srcset />
      </div>
      <div class="word">
        <p>立即关注</p>
        <p>【联通eSIM智能穿戴设备】</p>
        <p>开启无卡新生活</p>
      </div>
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
        <p>2、用户完成当天挑战，即有机会获得该日优惠券；；</p>
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
        <div class="youhuiquan" @click="getQuan" v-show="isShow"></div>
        <div class="youhuiquan1" v-show="!isShow"></div>
        <div class="huoqu1" @click="huoqu">
          <img src="./../assets/img/shou.png" alt class="shou" />
        </div>
        <img src="./../assets/img/guang.png" alt class="guang" />
        <div class="jieshao">
          <img src="./../assets/img/icon1.png" alt srcset />
          <span class="titlespan">优惠券使用规则：</span>
          <p>1、用户挑战成功后点击【领取手表优惠券】-【我的优惠券】-【复制优惠券券码】；</p>
          <p>2、至京东平台与瑞恒客服兑换优惠券即可使用。</p>
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
import $ from "jquery";
import md5 from "md5";
import { log } from "util";
import Cookies from "js-cookie";
import { gameStatus } from "./services/home";
import { gameStar, gameSubThree, getRui } from "./services/game";

export default {
  name: "home",
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Toast.name]: Toast
  },
  inject: ["reload"],
  data() {
    return {
      closeonclickoverlay: false,
      imgs: [
        {
          id: 1,
          img: require("./../assets/img/lipin1.png")
        },
        {
          id: 2,
          img: require("./../assets/img/lipin_e.png"),
          isSuc: 1
        },
        {
          id: 3,
          img: require("./../assets/img/lipin1.png")
        },
        {
          id: 4,
          img: require("./../assets/img/lipin_S.png"),
          isSuc: 2
        },
        {
          id: 5,
          img: require("./../assets/img/lipin2.png")
        },
        {
          id: 6,
          img: require("./../assets/img/lipin1.png")
        },
        {
          id: 7,
          img: require("./../assets/img/lipin_I.png"),
          isSuc: 3
        },
        {
          id: 8,
          img: require("./../assets/img/lipin2.png")
        },
        {
          id: 9,
          img: require("./../assets/img/lipin_M.png"),
          isSuc: 4
        },
        {
          id: 10,
          img: require("./../assets/img/lipin2.png")
        }
        // {
        //     id: 11,
        //     img: require("./../assets/img/lipin1.png"),
        // },
        // {
        //     id: 12,
        //     img: require("./../assets/img/lipin_e.png"),
        //     isSuc: 1,
        // },
        // {
        //     id: 13,
        //     img: require("./../assets/img/lipin1.png"),
        // },
      ],
      iconNum: "",
      talon: "",
      show: false,
      showSuccess: false,
      // overlay: false,
      showfail: false,
      chatTimer: null,
      gzShow2: false,
      t_img: "",
      success: [1, 2, 3, 4],
      isSuc: [],
      isShow: true, // 优惠券是否还有
      token: "",
      isStar: false, // 是否开始
      count: 60, // 60秒倒计时
      timer: null,
      state: "", // 游戏状态
      complete: "",
      isE: true,
      isS: true,
      isI: true,
      isM: true
    };
  },
  mounted() {
    this.token = Cookies.get("token"); // 获取存储的token
    this.getGameStatus();
    this.randomRender();
    this.wawa();
    this.talon = $(".pawerPic").offset().left + 100; // 首先获取爪子的位置(这里是固定的)
  },
  destroyed() {
    clearInterval(this.chatTimer);
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
    // 随机匹配图片
    randomRender() {
      let imgs = this.imgs,
        results = [];
      results = imgs.sort(() => {
        return Math.random() > 0.5 ? -1 : 1;
      });
      let arr = [];
      for (let i = 0; i < 3; i++) {
        arr[i] = results[i];
        arr[i].id = parseInt(i) + 11;
      }
      for (let i in arr) {
        results.push(arr[i]);
      }

      this.imgs = results;
    },
    showPopup() {
      this.show = true;
    },
    // 成功取消
    successcancel() {
      this.showSuccess = false;
      this.reload();
    },
    // 失败取消
    failcancel() {
      this.showfail = false;
      this.reload();
    },
    // 继续游戏
    jixu() {
      this.showfail = false;
      this.reload();
    },
    share() {
      this.$router.push({
        path: "/share"
      });
    },
    // 开始挑战
    start() {
      if (this.isStar) {
        Toast("您已经开始了哦");
      } else {
        // Toast.loading({
        //   mask: true,
        //   message: "请稍等..."
        // });
        // gameStar(this.token).then(res => {
        //   console.log(res);
        //   if (res.msg == "success") {
            Toast.clear();
            // Toast(res.data.info);
            this.isStar = true;
            // this.iconNum = res.data.play_num;
            this.timeDown(); // 倒计时
        //   } else {
        //     Toast.clear();
        //     Toast.fail(res.msg);
        //   }
        // });
      }
    },
    // 娃娃滚动
    wawa() {
      var pack = this.$refs.pack,
        width = $("#pack").width(),
        imgsWidth = (this.imgs.length * width) / 3,
        initLeft = 0;

      this.chatTimer = setInterval(function() {
        initLeft++;

        if (imgsWidth - initLeft < width + 60) {
          initLeft = 0;
        }
        $("#sel1").css({
          width: imgsWidth,
          transform: "translateX(-" + initLeft + "px)"
        });
      }, 15);
    },
    zhua() {
      // if (this.isStar && this.play_num !== 0) {
        let that = this;
        that.t_img = "";
        that.gzShow2 = false;
        var long = $(".game").height() - 230; //爪子伸长的距离

        $(".pawer").animate(
          {
            height: long
          },
          1000
        ); //伸下去(绳子)
        $(".pawerPic").animate(
          {
            top: long + 10
          },
          1000
        ); //伸下去(爪子)

        setTimeout(function() {
          that.ok_no();
        }, 1000); /* 判断抓没抓到娃娃 */

        $(".pawer").animate(
          {
            height: 10
          },
          1000
        ); //伸上去(绳子)
        $(".pawerPic").animate(
          {
            top: 20
          },
          1000
        ); //伸上去(爪子)
      // } else {
      //   Toast("点击开始挑战");
      // }
    },
    ok_no() {
      let that = this;
      /* 打印出此时此刻每个娃娃的位置 */
      let width = $("#sel1 img").width();
      console.log(width);
      for (let i = 0; i < $("#sel1 img").length; i++) {
        let l =
          $("#sel1 img")
            .eq(i)
            .offset().left +
          width / 2; // 此时此刻每个娃娃的位置
        if (l - 15 <= that.talon && that.talon <= l + 15) {
          that.gzShow2 = true;

          that.t_img = $("#pack img")
            .eq(i - 1)
            .attr("src");
          let isSuc = $("#pack img")
            .eq(i - 1)
            .attr("alt");

          if (isSuc !== undefined) {
            switch (isSuc) {
              case "1":
                that.isE = false;
                break;
              case "2":
                that.isS = false;
                break;
              case "3":
                that.isI = false;
                break;
              case "4":
                that.isM = false;
                break;
              default:
                break;
            }
            that.isSuc.push(parseInt(isSuc));
          }
          let ok = that.isContained(that.isSuc, that.success);

          if (ok == true) {
            // console.log('成功')
            clearInterval(this.timer);
            that.showSuccess = true;
            this.state = 1;
            this.complete = 60 - parseInt(this.count);
            let gameOne = {
              state: this.state,
              complete: this.complete,
              token: this.token
            };
            gameSubThree(gameOne).then(res => {
              console.log(res);
              this.count = 60;
              if (res.data.couponCount == 0) {
                this.isShow = false;
              }
            });
          }

          return;
        } else {
          console.log("狗屎都没抓到");
        }
      }
    },
    // 判断抓到的数组是否中奖
    isContained(a, b) {
      if (!(a instanceof Array) || !(b instanceof Array)) return false;
      if (a.length < b.length) return false;
      var aStr = a.toString();
      for (var i = 0, len = b.length; i < len; i++) {
        if (aStr.indexOf(b[i]) == -1) return false;
      }
      return true;
    },
    // 倒计时
    timeDown() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.count > 1) {
            this.count--;
          } else {
            this.isStar = false;
            this.showfail = true;
            clearInterval(this.timer);
            this.timer = null;

            this.state = 2;
            this.complete = 60;
            let gameOne = {
              state: this.state,
              complete: this.complete,
              token: this.token
            };
            gameSubThree(gameOne).then(res => {
              console.log(res);
              this.count = 60;
            });
          }
        }, 1000);
      }
    },
    // 领取优惠券
    getQuan() {
      getRui(this.token).then(res => {
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
li {
  list-style: none;
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
@keyframes bg {
  from {
    background: url(./../assets/img/interface_1.png) no-repeat;
    background-size: 100%;
  }
  to {
    background: url(./../assets/img/interface_2.png) no-repeat;
    background-size: 100%;
  }
}
.gameone {
  width: 750px;
  // height: 100%;
  text-align: center;
  background: url(./../assets/img/bg_big.jpg) no-repeat;
  background-size: 100%;
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
  .title {
    display: block;
    width: 92%;
  }
  .centergame {
    display: block;
    width: 60%;
    height: 80px;
    margin: 20px auto;
    background: url(./../assets/img/explain.png) no-repeat;
    background-size: 100%;
  }

  #content {
    position: relative;
    ul {
      width: 80%;
      margin: 10px auto;
      position: relative;
      z-index: 3;
      li {
        width: 23%;
        height: 150px;
        float: left;
        img {
          display: block;
          width: 100%;
        }
      }
      .margin {
        margin-left: 2%;
      }
      .fr {
        float: right;
      }
    }
    .game {
      width: 80%;
      height: 730px;
      background: url(./../assets/img/interface_1.png) no-repeat;
      background-size: 100%;
      animation: bg infinite 0.6s;
      position: relative;
      top: -60px;
      left: 0;
      z-index: 2;
      .paw {
        position: relative;
        top: 10%;
      }
      .pawer {
        width: 20px;
        background: rgb(170, 219, 254);
        height: 10px;
        position: absolute;
        top: 20px;
        left: 51%;
        margin-left: -15px;
        border-left: 1px solid rgba(42, 59, 156, 0.7);
        border-right: 1px solid rgba(42, 59, 156, 0.7);
      }
      .pawerPic {
        width: 95px;
        // height:85px;
        position: absolute;
        top: 30px;
        left: 51%;
        margin-left: -55px;
        img {
          width: 100%;
        }
        .win {
          position: absolute;
          bottom: -60px;
        }
      }
      .area {
        width: 100%;
        height: 500px;
        // overflow:hidden;
        position: absolute;
        // top:40px;
        left: 0;
        bottom: 40px;
      }
      /*娃娃滚动*/
      #pack {
        width: 80%;
        white-space: nowrap;
        overflow: hidden;
        position: absolute;
        bottom: 60px;
        left: 10%;
        #sel1 {
          display: block;
          img {
            display: block;
            width: 130px;
            height: 150px;
            float: left;
            margin-left: 20px;
          }
        }
      }
      .button {
        display: block;
        width: 130px;
        height: 90px;
        background: url(./../assets/img/button.png) no-repeat;
        background-size: 100%;
        position: absolute;
        bottom: 20px;
        left: 40%;
      }
    }
    #tiao {
      width: 40%;
      height: 100px;
      margin: 20px auto;
      line-height: 70px;
      text-align: center;
      color: #fff;
      font-weight: 900;
      letter-spacing: 10px;
      font-size: 30px;
      font-style: oblique;
      background: url(./../assets/img/button1.png) no-repeat;
      background-size: 100%;
      position: relative;
      .icon {
        position: absolute;
        display: block;
        width: 130px;
        height: 70px;
        right: 20px;
        top: -45px;
        color: red;
        font-size: 18px;
        line-height: 50px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 5px;
        background: url(./../assets/img/icon.png) no-repeat;
        background-size: 100%;
      }
    }
    #ewai {
      width: 60%;
      height: 100px;
      margin: 20px auto;
      background: url(./../assets/img/button_2.png) no-repeat;
      background-size: 100%;
    }
    .ewm {
      img {
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
    width: 100%;
    // height: 50%;
    .successcenter {
      background-image: url("./../assets/img/bg_gui.png");
      width: 520px;
      background-size: 100%;
      background-repeat: no-repeat;
      text-align: center;
      //padding: 40px 0px 150px;
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
      .youhuiquan1 {
        width: 280px;
        height: 65px;
        display: inherit;
        background: url(./../assets/img/youhuiquan1.png) no-repeat;
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
        top: -60px;
        left: 50%;
        margin-left: -225px;
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
        position: absolute;
        bottom: 0;
        left: 45%;
        // margin-top: 80px;
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
      img.quxiao {
        width: 60px;
        margin-top: 120px;
      }
    }
  }
}
</style>