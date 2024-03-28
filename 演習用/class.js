class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }


    describe() {
    console.log('この商品は' + this.name + 'です。');
    }
}

const shampoo = new Product('シャンプー', 500, '生活雑貨');
const coffee = new Product('コーヒー',1500,'飲料');

console.log(shampoo);
console.log(coffee);

shampoo.describe();

// 通常のオブジェクトにメソッドを定義する。userがオブジェクト
// greetがメソッド
const user = {
    name: '侍太郎',
    age: 36,
    gender: '男性',
    greet: () => {
        console.log('よろしくお願いします！');
    }
}

// メソッド(greet)を呼び出す
user.greet();


//クラス…類似のオブジェクトを大量に作れる、オブジェクトの設計図
//オブジェクト…キーと値で管理するデータの集まり　constで作る　name(キー)侍太郎(値)age…
//インスタンス…クラスをもとに作られたオブジェクト
//コンストラクタ…インスタンス化の際に処理を行う関数　最初の処理＝初期化
//引数を渡すことができる
//メソッド…コンストラクタの最初の処理と違って、
//任意のタイミングで処理を行いたい場合に使う　オブジェクトがもつ関数のこと

