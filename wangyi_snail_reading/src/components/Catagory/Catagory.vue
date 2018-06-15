<template>
    <div class="container">
        <mt-header title="分类" fixed class="header"></mt-header>
        <div class="body">
            <div v-for="(item, index) in stackList" :key="index" class="stack" @click="stackDetail(item)">
                <mt-cell-swipe class="stack-cell ">
                    <img :src="item.typeCover" class="stack-image " />
                    <div class="stack-name">{{item.bookTypes}}</div>
                    <div class="stack-numb">{{item.bookNumb}}</div>
                </mt-cell-swipe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            stackList: [
                {
                    "typeCover": "https://static.lagou.com/thumbnail_300x300/i/image/M00/34/24/Cgp3O1dU6HyANL84AABjDPaaLyk231.png",
                    "bookTypes": "上海译文",
                    "bookNumb": "1608册",
                    "publisher": "上海译文出版社",
                    "state": "以译介和传播世界各民族优秀文化为己任，专注出版国际文坛举足轻重的名家名作，享有良好的声誉。",
                    "bookList": [
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://5b0988e595225.cdn.sohucs.com/images/20171205/80339b628aae40a682764eca63ad6e57.jpeg"
                        },
                        {
                        "bookName": "狗样的春天",
                        "bookDes": "有时候你不由地会想到，我们的记忆和立拍得照片差不多，只是一些短暂、即时的片段。1964年的春天，“我”认识了摄影师冉森，他为一本美国杂志工作。",
                        "authorName": "【法】帕特里克·莫迪亚诺 徐和瑾",
                        "bookCover": "https://img3.doubanio.com/lpic/s29493185.jpg"
                        },
                        {
                        "bookName": "东野圭吾作品系列",
                        "bookDes": "《东野圭吾作品系列套装(套装共6本) 》选录《虚像小丑》《雪国之劫》《禁忌魔术》、《十一字杀人》和《绑架游戏》等《濒死之眼》、供广大悬疑推理小说迷们阅读。六部经典作品，",
                        "authorName": "【日】东野圭吾",
                        "bookCover": "https://img1.doubanio.com/lpic/s24514468.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://5b0988e595225.cdn.sohucs.com/images/20171205/80339b628aae40a682764eca63ad6e57.jpeg"
                        },
                        {
                        "bookName": "狗样的春天",
                        "bookDes": "有时候你不由地会想到，我们的记忆和立拍得照片差不多，只是一些短暂、即时的片段。1964年的春天，“我”认识了摄影师冉森，他为一本美国杂志工作。",
                        "authorName": "【法】帕特里克·莫迪亚诺 徐和瑾",
                        "bookCover": "https://img3.doubanio.com/lpic/s29493185.jpg"
                        },
                        {
                        "bookName": "东野圭吾作品系列",
                        "bookDes": "《东野圭吾作品系列套装(套装共6本) 》选录《虚像小丑》《雪国之劫》《禁忌魔术》、《十一字杀人》和《绑架游戏》等《濒死之眼》、供广大悬疑推理小说迷们阅读。六部经典作品，",
                        "authorName": "【日】东野圭吾",
                        "bookCover": "https://img1.doubanio.com/lpic/s24514468.jpg"
                        }
                    ]
                },
                {
                    "typeCover": "http://img2.3lian.com/img2007/19/29/007.jpg ",
                    "bookTypes": "理想国 ",
                    "bookNumb": "12608册",
                    "publisher": "理想国",
                    "state": " 始终保持对一个理想社会的期待，并用开放的眼睛，看待世界的丰富性与复杂性。",
                    "bookList": [
                        {
                        "bookName": "经济学原理",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "https://img3.doubanio.com/lpic/s5831482.jpg"
                        },
                        {
                        "bookName": "我们这是精神病院",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "https://img1.doubanio.com/lpic/s26338127.jpg"
                        },
                        {
                        "bookName": "恋爱课",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "https://img1.doubanio.com/lpic/s6131868.jpg"
                        },
                        {
                        "bookName": "经济学原理",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "https://img3.doubanio.com/lpic/s5831482.jpg"
                        },
                        {
                        "bookName": "我们这是精神病院",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "https://img1.doubanio.com/lpic/s26338127.jpg"
                        },
                        {
                        "bookName": "恋爱课",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "https://img1.doubanio.com/lpic/s6131868.jpg"
                        }
                    ]
                },
                {
                    "typeCover": "http://image.read.duokan.com/mfsv2/download/s010/p01ibXhBfWTb/bCGsgWf6xKjJGd.jpg",
                    "bookTypes": "译林出版 ",
                    "bookNumb": "1658册",
                    "publisher": "译林出版社",
                    "state": "不过坏日子，不读坏东西。译，传承，经典。",
                    "bookList": [
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://5b0988e595225.cdn.sohucs.com/images/20171205/80339b628aae40a682764eca63ad6e57.jpeg"
                        },
                        {
                        "bookName": "狗样的春天",
                        "bookDes": "有时候你不由地会想到，我们的记忆和立拍得照片差不多，只是一些短暂、即时的片段。1964年的春天，“我”认识了摄影师冉森，他为一本美国杂志工作。",
                        "authorName": "【法】帕特里克·莫迪亚诺 徐和瑾",
                        "bookCover": "https://img3.doubanio.com/lpic/s29493185.jpg"
                        },
                        {
                        "bookName": "东野圭吾作品系列",
                        "bookDes": "《东野圭吾作品系列套装(套装共6本) 》选录《虚像小丑》《雪国之劫》《禁忌魔术》、《十一字杀人》和《绑架游戏》等《濒死之眼》、供广大悬疑推理小说迷们阅读。六部经典作品，",
                        "authorName": "【日】东野圭吾",
                        "bookCover": "https://img1.doubanio.com/lpic/s24514468.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        }
                    ]
                },
                {
                    "typeCover": " http://i4.qhmsg.com/dr/270_500_/t014dec8a4df2d0dc8c.jpg",
                    "bookTypes": "磨铁",
                    "bookNumb": "1058册",
                    "publisher": "磨铁数盟",
                    "state": "不过坏日子，不读坏东西。译，传承，经典。",
                    "bookList": [
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://5b0988e595225.cdn.sohucs.com/images/20171205/80339b628aae40a682764eca63ad6e57.jpeg"
                        },
                        {
                        "bookName": "狗样的春天",
                        "bookDes": "有时候你不由地会想到，我们的记忆和立拍得照片差不多，只是一些短暂、即时的片段。1964年的春天，“我”认识了摄影师冉森，他为一本美国杂志工作。",
                        "authorName": "【法】帕特里克·莫迪亚诺 徐和瑾",
                        "bookCover": "https://img3.doubanio.com/lpic/s29493185.jpg"
                        },
                        {
                        "bookName": "东野圭吾作品系列",
                        "bookDes": "《东野圭吾作品系列套装(套装共6本) 》选录《虚像小丑》《雪国之劫》《禁忌魔术》、《十一字杀人》和《绑架游戏》等《濒死之眼》、供广大悬疑推理小说迷们阅读。六部经典作品，",
                        "authorName": "【日】东野圭吾",
                        "bookCover": "https://img1.doubanio.com/lpic/s24514468.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        }
                    ]
                },
                {
                    "typeCover": " http://i2.sinaimg.cn/edu/2011/1214/U4999P42DT20111214211153.jpg",
                    "bookTypes": "果麦",
                    "bookNumb": "158册",
                    "publisher": "果麦文化",
                    "state": "不过坏日子，不读坏东西。译，传承，经典。",
                    "bookList": [
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://5b0988e595225.cdn.sohucs.com/images/20171205/80339b628aae40a682764eca63ad6e57.jpeg"
                        },
                        {
                        "bookName": "狗样的春天",
                        "bookDes": "有时候你不由地会想到，我们的记忆和立拍得照片差不多，只是一些短暂、即时的片段。1964年的春天，“我”认识了摄影师冉森，他为一本美国杂志工作。",
                        "authorName": "【法】帕特里克·莫迪亚诺 徐和瑾",
                        "bookCover": "https://img3.doubanio.com/lpic/s29493185.jpg"
                        },
                        {
                        "bookName": "东野圭吾作品系列",
                        "bookDes": "《东野圭吾作品系列套装(套装共6本) 》选录《虚像小丑》《雪国之劫》《禁忌魔术》、《十一字杀人》和《绑架游戏》等《濒死之眼》、供广大悬疑推理小说迷们阅读。六部经典作品，",
                        "authorName": "【日】东野圭吾",
                        "bookCover": "https://img1.doubanio.com/lpic/s24514468.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        }
                    ]
                },
                {
                    "typeCover": "http://i7.qhimg.com/dr/270_500_/t019125742b5b9f6351.jpg ",
                    "bookTypes": "读客",
                    "bookNumb": "1584册",
                    "publisher": "读客英雄君",
                    "state": "不过坏日子，不读坏东西。译，传承，经典。",
                    "bookList": [
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://5b0988e595225.cdn.sohucs.com/images/20171205/80339b628aae40a682764eca63ad6e57.jpeg"
                        },
                        {
                        "bookName": "狗样的春天",
                        "bookDes": "有时候你不由地会想到，我们的记忆和立拍得照片差不多，只是一些短暂、即时的片段。1964年的春天，“我”认识了摄影师冉森，他为一本美国杂志工作。",
                        "authorName": "【法】帕特里克·莫迪亚诺 徐和瑾",
                        "bookCover": "https://img3.doubanio.com/lpic/s29493185.jpg"
                        },
                        {
                        "bookName": "东野圭吾作品系列",
                        "bookDes": "《东野圭吾作品系列套装(套装共6本) 》选录《虚像小丑》《雪国之劫》《禁忌魔术》、《十一字杀人》和《绑架游戏》等《濒死之眼》、供广大悬疑推理小说迷们阅读。六部经典作品，",
                        "authorName": "【日】东野圭吾",
                        "bookCover": "https://img1.doubanio.com/lpic/s24514468.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        }
                    ]
                },
                {
                    "typeCover": "http://www.234.cn/uploadfile/image/20130918095942_9218.jpg",
                    "bookTypes": "小说 ",
                    "bookNumb": "2658册",
                    "publisher": "蒲荔子",
                    "state": " 始终保持对一个理想社会的期待，并用开放的眼睛，看待世界的丰富性与复杂性。",
                    "bookList": [
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://5b0988e595225.cdn.sohucs.com/images/20171205/80339b628aae40a682764eca63ad6e57.jpeg"
                        },
                        {
                        "bookName": "狗样的春天",
                        "bookDes": "有时候你不由地会想到，我们的记忆和立拍得照片差不多，只是一些短暂、即时的片段。1964年的春天，“我”认识了摄影师冉森，他为一本美国杂志工作。",
                        "authorName": "【法】帕特里克·莫迪亚诺 徐和瑾",
                        "bookCover": "https://img3.doubanio.com/lpic/s29493185.jpg"
                        },
                        {
                        "bookName": "东野圭吾作品系列",
                        "bookDes": "《东野圭吾作品系列套装(套装共6本) 》选录《虚像小丑》《雪国之劫》《禁忌魔术》、《十一字杀人》和《绑架游戏》等《濒死之眼》、供广大悬疑推理小说迷们阅读。六部经典作品，",
                        "authorName": "【日】东野圭吾",
                        "bookCover": "https://img1.doubanio.com/lpic/s24514468.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        }
                    ]
                },
                {
                    "typeCover": "http://pic.baike.soso.com/p/20090106/20090106120000-106587.jpg ",
                    "bookTypes": "历史",
                    "bookNumb": "9658册",
                    "publisher": "谭伯牛",
                    "state": " 始终保持对一个理想社会的期待，并用开放的眼睛，看待世界的丰富性与复杂性。",
                    "bookList": [
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://5b0988e595225.cdn.sohucs.com/images/20171205/80339b628aae40a682764eca63ad6e57.jpeg"
                        },
                        {
                        "bookName": "狗样的春天",
                        "bookDes": "有时候你不由地会想到，我们的记忆和立拍得照片差不多，只是一些短暂、即时的片段。1964年的春天，“我”认识了摄影师冉森，他为一本美国杂志工作。",
                        "authorName": "【法】帕特里克·莫迪亚诺 徐和瑾",
                        "bookCover": "https://img3.doubanio.com/lpic/s29493185.jpg"
                        },
                        {
                        "bookName": "东野圭吾作品系列",
                        "bookDes": "《东野圭吾作品系列套装(套装共6本) 》选录《虚像小丑》《雪国之劫》《禁忌魔术》、《十一字杀人》和《绑架游戏》等《濒死之眼》、供广大悬疑推理小说迷们阅读。六部经典作品，",
                        "authorName": "【日】东野圭吾",
                        "bookCover": "https://img1.doubanio.com/lpic/s24514468.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        },
                        {
                        "bookName": "废墟的花朵",
                        "bookDes": "1933年4月24日，一对年轻夫妇在租借的巴黎公寓内自杀。那个晚上，这对小夫妻应该认识了一些人，还去了一次舞厅，他们为什么最终选择了自杀?",
                        "authorName": "【法】帕特里克·莫迪亚诺 胡小跃",
                        "bookCover": "http://www.gmw.cn/images/2005-03/03/xin_af64ec33e7ac464180147d31c60e08eb_0206a1a.jpg"
                        }
                    ]
                }
            ],
        }
    },
    methods: {
        stackDetail(item) {
            this.item = item;
            console.log(this.item);
            this.$router.push({
                name: 'stock',
                query: {stack: this.item}
            });
        }
    }
    
}
</script>
<style scoped>
.container {
    width: 100%;
    height: 100%;
}
.header, .stack {
    background-color: #fff;
}
.header {
    color: #333333;
    border-bottom: 1px solid #ededed;
    font-weight: bold;
    text-decoration: none; 
    font-size: 18px;
}
.body {
    margin-top: 40px;       
}
.stack {
    margin-bottom: 10px;
}
.stack-cell{
  height: 140px;
}
.stack-image{
  width: 150px;
  height: 100px;
  float: left;
  margin-left: 10px;
  border-radius: 5%;
}

.stack-name{
  color: #222;
  font-size: 20px;
  width: 80px;
  margin-left: 30px;
  float: left;
  height: 140px;
  line-height: 140px;
  text-align: center;
}

.stack-numb{
  color: #9c9a9c;
  width: 80px;
  font-size: 16px;
  margin-right: 20px;
  text-align: right;
  float: right;
  height: 140px;
  line-height: 140px;
}
</style>
