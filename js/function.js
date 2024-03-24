const sayGoodMorning = () => {
    console.log('おはようございます！');
    console.log('昨日はよく眠れましたか？');
    console.log('今日も一日頑張りましょう！');
}

const sayGoodEvning = () => {
    console.log('こんばんは！');
    console.log('今日も一日お疲れさまでした。');
}

sayGoodMorning();

sayGoodEvning();

const addTwoArguments = (price, shippingFee) => {
    console.log(price + shippingFee + '円');
}