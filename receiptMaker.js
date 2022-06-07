const maker = {
    setProduct: function (product) {
        this.product = product
    },
    print: function () {
        let {name, price, ...rest} = this.product;
        console.log(name + " " + price);
        console.log(rest);
    }
}

export default maker;