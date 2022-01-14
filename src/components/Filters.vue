<template>
<div>
 <div class="heading">Select a date: <date-picker v-model="selectedDate" valueType="format" default-value :confirm="getDate()"></date-picker></div>
 <div class="loader" v-if="loading">
   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background:transparent; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
     <g transform="rotate(0 50 50)">
       <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
         <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/>
       </rect>
     </g><g transform="rotate(30 50 50)">
     <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
       <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/>
     </rect>
   </g><g transform="rotate(60 50 50)">
     <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
       <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/>
     </rect>
   </g><g transform="rotate(90 50 50)">
     <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
       <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/>
     </rect>
   </g><g transform="rotate(120 50 50)">
     <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
       <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/>
     </rect>
   </g><g transform="rotate(150 50 50)">
     <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
       <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"/>
     </rect>
   </g><g transform="rotate(180 50 50)">
     <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
       <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/>
     </rect>
   </g><g transform="rotate(210 50 50)">
     <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
       <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/>
     </rect>
   </g><g transform="rotate(240 50 50)">
     <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
       <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"/>
     </rect>
   </g><g transform="rotate(270 50 50)">
     <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
       <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/>
     </rect>
   </g><g transform="rotate(300 50 50)">
     <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
       <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/>
     </rect>
   </g><g transform="rotate(330 50 50)">
     <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
       <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/>
     </rect>
   </g>
     </svg>
 </div>
  <div v-else class="container">
    <div class="row">
      <div class="col-lg-4 col-sm-4">
        <div class="card">
          <div class="card-inner">
            <div class="img-thumbnail" v-if="media_type === 'image'">
              <img :src="image" alt="" class="card-img">
              <div class="btn-cls">
                <button class="like-btn" @click="active" :class="liked ? 'like':'nothing'">
                  <svg class="likeOne" :class="liked ? 'like':'nothing'" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                      <path d="M2701 5109 c-86 -26 -153 -94 -190 -194 -29 -77 -44 -206 -36 -311 l6 -92 -59 -148 c-197 -492 -440 -963 -625 -1210 -41 -55 -113 -136 -160 -181 -97 -93 -143 -151 -211 -269 l-47 -80 -67 23 c-65 22 -77 22 -463 23 -421 0 -445 -2 -542 -52 -86 -43 -173 -147 -213 -253 -18 -48 -19 -95 -22 -965 -2 -567 1 -939 7 -978 30 -190 185 -345 373 -372 35 -5 216 -10 403 -10 372 0 435 7 525 56 l50 27 182 -22 c468 -55 796 -76 1459 -92 366 -8 521 -8 625 0 413 34 722 166 879 373 89 118 125 226 127 383 1 98 1 101 33 135 92 99 161 220 189 331 22 91 21 237 -4 333 l-20 78 31 44 c81 118 125 267 115 390 -8 97 -47 217 -96 293 l-41 63 15 44 c42 123 41 278 -1 394 -27 74 -101 178 -167 232 -247 206 -730 252 -1358 128 -84 -16 -159 -30 -167 -30 -11 0 -13 16 -7 85 8 107 37 232 114 490 75 251 99 359 111 512 11 132 3 248 -24 348 -60 224 -239 403 -464 460 -80 20 -215 28 -260 14z m212 -300 c149 -50 225 -156 246 -341 17 -153 -12 -326 -103 -619 -96 -308 -132 -498 -124 -659 10 -187 94 -290 239 -290 20 0 114 16 210 35 295 60 372 69 624 69 185 1 248 -3 320 -17 301 -61 410 -234 300 -478 -50 -109 -47 -130 31 -226 140 -171 134 -323 -19 -505 -55 -65 -60 -119 -21 -208 26 -58 29 -76 29 -175 0 -102 -2 -115 -29 -170 -20 -41 -57 -86 -117 -146 -52 -50 -91 -97 -95 -114 -4 -16 -1 -70 6 -121 14 -107 5 -168 -37 -247 -73 -133 -266 -233 -551 -284 -84 -15 -154 -17 -512 -15 -684 3 -1210 31 -1650 88 l-45 6 3 886 c3 620 0 919 -8 993 -11 106 -11 107 17 180 51 130 106 211 228 334 189 191 340 417 529 794 119 236 225 473 320 713 l66 168 -3 147 c-1 82 2 165 6 186 7 34 11 37 43 37 19 0 63 -9 97 -21z m-1663 -2451 c18 -13 43 -36 54 -51 21 -28 21 -31 21 -946 l0 -917 -27 -41 c-48 -72 -60 -74 -475 -71 -347 3 -363 4 -389 24 -15 11 -37 33 -48 48 -21 27 -21 36 -24 940 l-2 912 23 44 c42 80 40 80 463 80 368 0 371 0 404 -22z"/>
                    </g>
                  </svg>
                </button>
                <button class="unlike-btn" @click="notActive" :class="disliked ? 'dislike':'nothing'">
                  <svg class="likeTwo" :class="disliked ? 'dislike':'nothing'" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                      <path d="M2960 5110 c-530 -13 -791 -30 -1254 -81 l-278 -31 -49 27 c-89 48 -152 55 -529 55 -190 0 -371 -4 -404 -10 -187 -30 -338 -183 -367 -372 -6 -39 -8 -412 -7 -978 4 -1001 1 -948 63 -1054 32 -55 118 -137 173 -165 93 -47 131 -51 547 -51 381 1 392 1 458 24 l67 23 37 -66 c60 -110 116 -181 235 -301 62 -63 138 -151 169 -195 184 -260 394 -670 597 -1165 l55 -135 2 -155 c3 -259 54 -385 182 -450 42 -22 61 -25 143 -24 169 2 321 61 442 173 161 149 226 354 206 649 -9 145 -37 272 -113 528 -74 247 -105 380 -112 482 -7 96 -17 91 123 62 271 -57 562 -86 769 -77 451 19 717 165 816 447 32 91 33 245 1 348 l-23 72 24 33 c55 72 104 206 113 308 12 122 -28 267 -107 390 l-39 60 20 76 c25 95 27 240 4 332 -28 114 -92 226 -188 329 -29 31 -30 35 -32 140 -8 390 -297 642 -839 733 -149 25 -431 31 -905 19z m883 -309 c410 -72 609 -254 568 -519 -21 -136 -22 -135 77 -231 56 -55 99 -109 120 -148 56 -105 58 -231 7 -353 -43 -103 -36 -141 47 -241 62 -75 92 -152 92 -234 0 -88 -27 -153 -101 -242 -30 -37 -55 -79 -59 -99 -6 -35 -3 -47 42 -154 40 -93 40 -196 2 -261 -91 -155 -303 -218 -688 -206 -207 7 -307 20 -559 71 -196 41 -258 44 -316 17 -91 -42 -136 -127 -143 -271 -8 -161 28 -351 124 -659 91 -292 119 -459 103 -615 -20 -193 -110 -308 -274 -352 -79 -21 -101 -19 -111 14 -5 15 -9 101 -9 192 l0 165 -44 110 c-100 254 -190 456 -316 710 -201 407 -360 652 -534 825 -140 138 -194 217 -246 355 -25 67 -26 71 -15 179 8 76 10 389 8 992 l-3 882 145 16 c417 47 704 64 1180 72 195 4 357 9 360 11 13 14 431 -7 543 -26z m-2607 -30 c25 -12 50 -33 65 -57 l24 -39 3 -880 c2 -615 0 -895 -8 -931 -11 -51 -40 -89 -87 -113 -15 -7 -137 -11 -390 -11 -416 0 -417 0 -460 76 l-23 39 0 903 c0 958 -1 942 46 984 54 47 58 48 434 48 325 0 359 -2 396 -19z"/>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div class="img-thumbnail" v-if="media_type === 'video'">
              <a :href="url" class="card-img">
                <img src="https://i.ibb.co/KGb08F3/youtube.jpg" alt="youtube" class="card-img">
              </a>
            </div>
            <div class="inner">
              <div class="title">{{title}} - <span class="date-cls">{{date}}</span>
              </div>

              <div class="title-info">
                {{explanation}}
              </div>
              <div class="copyright">
                - {{copyright}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Service from "../util/Service";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: 'list',

  components: {DatePicker},
  data() {
    return {
      image:'',
      title:'',
      date:'',
      media_type:'',
      url:'',
      copyright:'',
      explanation:'',
      selectedDate: '2021-12-20',
      liked:false,
      disliked:false,
      loading:true
    };
  },

  mounted() {
    this.getDate();
  },

  methods: {
    getFilters() {

      Service.getData(this.selectedDate).then(response => {
        this.selectedDate = response.date;
        this.image= response.hdurl;
        this.title= response.title;
        this.date= response.date;
        this.media_type= response.media_type;
        this.url= response.url;
        this.copyright= response.copyright;
        this.explanation= response.explanation;
        this.loading = false;
      })
          .catch(e => {
            console.log(e);
          });
    },
    getDate(){
      setTimeout(() =>{
        this.getFilters();
      },30000)

   },
    active() {
      this.liked = true;
      this.disliked = false;
    },

    notActive() {
      this.liked = false;
      this.disliked = true;
    }
  }
}
</script>
<style scoped>
.img-thumbnail {
  width: 100%;
}
.card-inner{
  display: flex;
}
.heading {
  font-weight: 600;
  color: #fff;
}
img.card-img {
  height: 410px;
  width: 400px;
  object-fit: cover;
  border-radius: 15px;
}
.inner {
  width: 100%;
  margin: auto;
}
.loader{
  margin-top: 20px;
}
.container {
  margin: 0 auto;
  margin-top: 60px;
  width: 70%;
  background-color: #0000005c;
  padding: 20px;
  border-radius: 20px;
  color: #fff;
}
.title {
  font-weight: 700;
  font-size: large;
}

.title-info {
  font-weight: 300;
  text-align: initial;
  padding: 10px;
  font-size: 15px;
}
.likeOne{
  width: 30px;
  height: 30px;
}
.likeTwo{
  width: 30px;
  height: 30px;
}
button.like-btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
button.unlike-btn {
  border: none;
  margin-left: 10px;
  background-color: transparent;
  cursor: pointer;
}
.copyright {
  text-align: end;
  margin-right: 20px;
  margin-top: 20px;
  font-weight: 700;
}
svg.like g {
  fill: red;
}
svg.dislike g {
  fill: red;
}
</style>
