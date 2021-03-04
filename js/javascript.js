const obj = {
    length: 6,
    area: function () {
        return obj.length * obj.length;
    }
}

console.log('obj area:');
console.log(obj.area());