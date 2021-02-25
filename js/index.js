Vue.createApp({
    data() {
        return {
            num: null,
            num1: null,
            result: null,
            operation: "+"
        }
    },
    methods: {
        Calculate() {
            switch (this.operation) {
                case "+":
                    this.result = this.num + this.num1
                    break;
                case "-":
                    this.result = this.num - this.num1
                break;
                case "*":
                    this.result = this.num * this.num1
                break;
                case "/":
                    this.result = this.num / this.num1
                break;
                default:
                    break;
            }
            
        }
    }
}).mount("#app")