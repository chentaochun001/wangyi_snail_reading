<template>
    <div >
        <mt-header title="登录" fixed class="header">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
		<div class="body">
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field label="密码" placeholder="输入6-18位密码" type="password" v-model="password"></mt-field>
			<div class="body-test">
				<label>[测试账号：Amy;&nbsp;密码：111111]</label>
			</div>
		</div>
		<div class="footer" @click="submit()">登录</div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			username: '',
			password: '', 
		}
	},
	methods: {
		submit() {
			if (this.username == '' || this.password == '') {
				alert("请先输入用户名或密码");
			}
			else if(this.username == 'Amy' && this.password == '111111') {
				console.log('登录成功');
				this.$router.push('/mine');
				sessionStorage.setItem("key", "value"); 
			} else {
				alert("用户名或密码错误");
				// MessageBox('提示', '用户名或密码错误');
				console.log('用户名或密码错误');
			}
		}
	}
    
}
</script>
<style>
.header {
	background-color: #444444;
	font-size: 17px;
}
.body {
	margin-top: 40px;
}
.body-test {
	width: 90%;
	height: 40px;
	line-height: 40px;
	text-align: center;
	margin: 0 auto;
	color: lightcoral;	
}
.footer {
	width: 90%;
	height: 40px;
	line-height: 40px;
	margin: 0 auto;
	margin-top: 30px;
	color: #fff;
	font-size: 20px;
	background-color: #00af8f;
	text-align: center;
	border-radius: 5px;
}
.footer-btn {
	width: 100%;
	height: 40px;
	margin: 0 auto;
	color: #fff;
	font-size: 20px;
	background-color: #00afbf;

}
</style>

