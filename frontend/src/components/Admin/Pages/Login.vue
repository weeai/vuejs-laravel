<template xmlns:v-on="http://www.w3.org/1999/xhtml">

  <div class="ui container login-page">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui teal image header">
          <img src="" class="image">
          <div class="content">
            管理员登录
          </div>
        </h2>
        <form class="ui large form" action="auth/login" method="post" v-auto-form>
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="email" placeholder="电子邮箱">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="密码">
              </div>
            </div>
            <button class="ui fluid large teal submit button" type="submit">登录</button>
          </div>

          <div class="ui error message"></div>

        </form>

        <div class="ui message">
          <a href="#" @click="forgotPassword(event)">忘记密码?</a>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import 'extensions/AutoForm.vue'
  import CurrentUserProvider from 'extensions/CurrentUserProvier.vue'
  import Router from 'components/Admin/router'

  export default {
    data () {
      return {}
    },
    events: {
      onFormComplete: function (form, response) {
        CurrentUserProvider.setCurrentUser(response.data)
        Router.go('/dashboard')
      }
    },
    methods: {
      forgotPassword: function (event) {
        window.alert('TODO forgotPassowrd()')
      }
    },
    components: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .login-page {
    margin-top: 100px;
    .column {
      max-width: 450px;
    }
    .field {
      .error-label {
        float: left;
      }
      &:after {
        display: table;
        content: "";
        width: 0;
        clear: both;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .login-page {
      margin-left: -200px;
    }
  }

  @media only screen and (min-width: 768px) {
    .login-page {
      margin-left: -214px;
    }
  }
</style>
