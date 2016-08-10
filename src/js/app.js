var App = Vue.extend({});

var postList = Vue.extend({
    template:'#post-list-template',
    data: function(){
        return {
            posts: '',
            message: 'Hola  won!'
        }
    },

    ready: function(){
        posts = this.$http.get('http://localhost/voilarts/wp-json/wp/v2/posts');

        posts.then(function(posts){
            this.$set('posts', posts);
            console.log(posts.data[0].id);
        })
    }
})



var router = new VueRouter();

router.map({
    '/':{
        component: postList
    }
});

router.start(App, '#app');

