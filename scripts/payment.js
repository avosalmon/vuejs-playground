var payments = [
    {
        id: 1,
        type: 'credit-card',
        name: 'クレジットカード',
        description: 'クレジットカードの説明'
    },
    {
        id: 2,
        type: 'cod',
        name: '代金引換',
        description: '【決済手数料】324円（税込）<br><div class="small">ヤマト運輸 宅急便コレクトによる代金引換決済に対応しております。<br>商品代金は、商品配達時にヤマト運輸の配送員にお支払いください。</div>'
    },
    {
        id: 3,
        type: 'deferred',
        name: '後払い',
        description: '【決済手数料】205円（税込）<br><br><img src="https://s3-ap-northeast-1.amazonaws.com/kurashicom-images/shop/2016-05-11/70c7acb94883ebe149cf1dbd574f911c.png" alt="NP logo"><br><br><div class="small">商品の到着を確認してから、「コンビニ」「郵便局」「銀行」で後払いできる安心・簡単な決済方法です。<br>お支払い用紙はご注文商品とは別途、郵送にてご注文者さまへお届けいたします。<br>※営業日の正午12時までに後払い決済会社による、ご利用の確認が取れない場合、最短の出荷が翌営業日以降となる可能性もございます。誠に恐縮ではございますが、予めご了承ください。<br>※後払いのご注文には、<a href="http://www.netprotections.com/" target="_blank">株式会社ネットプロテクションズ</a>の提供するNP後払いサービスが適用され、サービスの範囲内で個人情報を提供し、代金債権を譲渡します。<br>※ご利用限度額は累計残高で54,000円（税込）迄です。<br>※お支払い用紙の発行より、14日以内にお支払いをお願い致します。</div>'
    },
    {
        id: 4,
        type: 'bankwire',
        name: '銀行振込',
        description: '【金融機関名】ジャパンネット銀行<br><div class="small">※お振込を確認後、ご注文商品の発送とさせていただきます。<br>※ご注文確認のメールにてお振込先情報をご連絡いたします。<br>※恐れ入りますが振込手数料はご負担をお願いしております。</div>'
    }
];

var methods = {

};

new Vue({
    el: '#payment',
    data: {
        payments: payments,
        currentPayment: 1
    },
    methods: methods
});
