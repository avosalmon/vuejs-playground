var data = {
    input: 'Hello Vue.js!!',
    messages: []
};

var methods = {
    addMessage: function() {
        var message = this.input.trim();
        if (message) {
            this.messages.push(message);
            this.input = '';
        }
    },
    removeMessage: function(index) {
        this.messages.splice(index, 1);
    }
};

new Vue({
    el: '#app',
    data: data,
    methods: methods
});
