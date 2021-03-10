
<template>
    <div class="amap-page-container">
 
        <div class="box">
            <!--爪子-->
            <div class="paw">
                <div class="pawer"></div>
                <div class="pawerPic">
                    <!-- <img src="../../assets/images/jiazi.png" class="lose" v-if="gzShow1"> -->
                    <div class="win" v-if="gzShow2">
                        <img :src="t_img">
                    </div>
                </div>
            </div>
            <!--区域-->
            <div class="area">
                <!--娃娃滚动-->
                <div id="pack">
                    <div id="sel1">
                        <!-- <img src="../../assets/images/mks1.png" tr="1">
                        <img src="../../assets/images/mks2.png" tr="2">
                        <img src="../../assets/images/mks3.png" tr="3">
                        <img src="../../assets/images/mks4.png" tr="4"> -->
                    </div>
                </div>
            </div>
            <!--按钮(真)-->
            <div class="btn">
                <!--点击前-->
                <div class="btn_star" @click="start" v-show="startShow"></div>
                <!--点击后-->
                <div class="btn_end" v-show="endShow"></div>
            </div>
        </div>
    </div>
</template>
 
<script>
  import $ from 'jquery'
 
  import { Toast, MessageBox } from 'mint-ui'
  export default {
    data () {
      return {
        showDialogStyle: false, // 显示抓到的礼物
        gzShow1: true, // 初始下拉的钩子
        gzShow2: false, // 上拉的钩子
        long: '',
        areaHeight: '',
        talon: '',
        startShow: true, // 开始按钮的显示
        endShow: false,
        interval: '', // 设置的周期
        screenHeight: document.documentElement.clientHeight, // 屏幕尺寸
        startXDirection: 0, // x轴是否返回的状态，0是值++即向右边移动，1是值--即向左边返回
        t_img: '../../assets/images/mks1.png'// 抓起的礼物图片
      }
    },
    mounted: function () {
      // 活动区域的高
      this.areaHeight = this.screenHeight - 150
    // 爪子伸长的距离(目前娃娃的高度暂定为115px;)
      this.long = this.areaHeight - 115
    /* 赋值给活动区域高度 */
      $('.area').css({height: this.areaHeight})
      this.setGrabInterval()
    },
    components: {
      Toast,
      MessageBox
    },
    methods: {
      /* 点击按钮 */
      start () {
        let _this = this
        clearInterval(this.interval)// 去除钩子左右滑动周期事件
 
        _this.talon = $('.pawerPic').offset().left + 55// 首先获取爪子的位置(这里是固定的)
        _this.startShow = false
        _this.endShow = true
 
        $('.pawer').animate({height: this.long}, 2000)// 伸下去(绳子)
        $('.pawerPic').animate({top: this.long + 30}, 2000, '', function () {
          _this.gzShow2 = true
        })// 伸下去(爪子)
 
        // /*事件调用*/
        setTimeout(function () { _this.ok_no() }, 2000)/* 判断抓没抓到娃娃 */
        setTimeout(function () { _this.end() }, 4000)// 娃娃消失
        setTimeout(function () { _this.btn() }, 4000)// 按钮点击
 
        $('.pawer').animate({height: 20}, 2000)// 缩回来(绳子)
        $('.pawerPic').animate({top: 40}, 2000, '', function () {
          _this.setGrabInterval()
          // MessageBox.confirm('确定执行此操作?').then(action => {
          //   console.log(action)
          // });
        })// 缩回来(爪子)
      },
      /* 抓到娃娃 */
      fn (img) {
        $('.win img').attr('src', img)
        $('.pawerPic').addClass('on')
      },
      btn () {
        this.startShow = true
        this.endShow = false
      },
      /* 娃娃消失 */
      end () {
        $('.pawerPic').removeClass('on')
        this.gzShow1 = true
        this.gzShow2 = false
      },
      ok_no () {
        let _this = this
      /* 打印出此时此刻每个娃娃的位置 */
        for (let i = 0; i < $('#pack img').length; i++) {
          let l = $('#pack img').eq(i).offset().left + 41.61// 此时此刻每个娃娃的位置
          if (l - 10 <= this.talon && this.talon <= l + 10) {
            this.t_img = $('#pack img').eq(i).attr('src')
 
            setTimeout(function () { _this.fn(_this.t_img) }, 0)
            return
          }
          /* 然后和爪子的位置进行比较 */
        }
        Toast('狗屎都没抓到')
      },
      // 爪子设置周期左右滑动
      setGrabInterval () {
        let _this = this
        let objPaw = $('.pawerPic') // 爪子
        let objGrab = $('.pawer') // 绳子
        let pawLeft = objPaw.offset().left + 50// 爪子距离左部的位置
        let grabLeft = objGrab.offset().left// 绳子距离左部的位置
        let winWidth = $(window).width()// 页面的宽
        this.interval = setInterval(function () {
          if (_this.startXDirection == 0) {
            objPaw.css('left', pawLeft++)
            objGrab.css('left', grabLeft++)
          } else if (_this.startXDirection == 1) {
            objPaw.css('left', pawLeft--)
            objGrab.css('left', grabLeft--)
          }
          if (pawLeft - 55 <= 0) {
            _this.startXDirection = 0
          } else if (pawLeft >= winWidth - 55) {
            _this.startXDirection = 1
          }
        }, 10)
      }
    }
  }
</script>
 
<style lang="less" scoped>
    .amap-page-container {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .box{
        width:100%;
        height:100%;
        background:url(../../assets/images/zwwbj.jpg) no-repeat center;
        background-size:cover;
    }
    .paw{
        width:100%;
        height:20px;
        background:#8d3835;
        position:relative;
        box-shadow:2px 2px 5px rgba(0,0,0,0.3)
    }
    .pawer{
        width:10px;
        background:#565656;
        height:20px;
        position:absolute;
        top:20px;
        left:50%;
        margin-left:-5px;
        box-shadow:2px 2px 5px rgba(0,0,0,0.3)
    }
    .pawerPic{
        width:80px;
        height:85px;
        position:absolute;
        top:40px;
        left:50%;
        margin-left:-55px;
    }
    .lose{
        width:100px;
        height:85px;
        display:block;
        margin:0 auto;
    }
    .pawerPic.on .lose{
        display:none;
    }
    .pawerPic.on .win{
        display:block;
    }
    .win{
        width:110px;
        height:105px;
        display:none;
        margin:0 auto;
        background:url(../../assets/images/jiazi2.png);
        background-size:cover;overflow:hidden;
    }
    .win img{
        display:block;
        margin:0 auto;
        margin-top:12px;
    }
    .btn{
        width:120px;
        height:120px;
        position:absolute;
        bottom:0;
        left:50%;
        margin-left:-60px;
    }
    .btn.on .btn_star{
        display:none;
    }
    .btn_star{
        background:url(../../assets/images/kaishi.png) no-repeat center;
        background-size:contain;
        width:120px;
        height:120px;
    }
    .btn_end{
        background:url(../../assets/images/kaishi2.png) no-repeat center;
        background-size:contain;
        width:120px;
        height:120px;
    }
    .area{
        width:100%;
        height:auto;
        overflow:hidden;
        position:absolute;
        top:40px;
        left:0;
    }
    /*娃娃滚动*/
    #pack{
        width:100%;
        height:90px;
        white-space:nowrap;
        overflow:hidden;
        position:absolute;
        bottom:0;
        left:0;
    }
    #sel1{
        display:inline;
    }
    #pack img{
        display:inline-block;
        height:90px;
    }
</style>