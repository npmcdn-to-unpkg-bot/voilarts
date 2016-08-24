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
        //posts = this.$http.get('http://localhost/wordpress/voilarts/wp-json/wp/v2/artists-api/?per_page=4.');
        //posts = this.$http.get('http://localhost/voilarts/wp-json/wp/v2/artists-api/?per_page=4.');

        posts.then(function(posts){
            this.$set('posts', posts.data);
            console.log(posts);
            $(document).ready(function(){
  $('.bxslider').bxSlider();
});
        })
    }
})


var Slider = Vue.extend({
    template:'slider-vl',
    data: function(){
        return {
            mensaje: 'Hola  won la!'
        }
    }
})

var router = new VueRouter();

router.map({
    '/':{
        component: postList
    },
    '/slider' : {
        component: Slider
    }
});

router.start(App, '#app');

