
let basket = {
    Goods : new Array(),
    checkGoodInBasket: function(iId) {
        for (let iElem in this.Goods) {
            if (this.Goods[iElem].id == iId) {
                return iElem;
            }
        }
    },
    addGoodToBasket: function(iId, sName, iCount, fPrice) {
        console.log(this.Goods);
        if (iCount != 0) {
            if (this.checkGoodInBasket(iId) == undefined) {
                console.log(this.Goods.length);
                this.Goods[this.Goods.length] = {
                    id: iId, //ид товара
                    name: sName, //назнание товара
                    count: iCount, //кол-во товара
                    price: fPrice //
                }    
            } else {
                this.Goods[this.checkGoodInBasket(iId)].count += iCount; 
            }
        } 
    },
    deleteGoodFromBasket: function(iId, iCount) {
        let iElem = this.checkGoodInBasket(iId);
        
        if ((this.Goods[iElem].id == iId) && (this.Goods[iElem].count <= iCount)) {
            this.Goods.splice(iElem,1);
        } else if ((this.Goods[iElem].id == iId) && (this.Goods[iElem].count > iCount)) {
            this.Goods[iElem].count -= iCount;
        }
    },
    countGoodsInBasket: function() {
        let iCountGoods = 0;
        
        for (let iElem in this.Goods) {
            iCountGoods += this.Goods[iElem].count; 
        }
        
        return iCountGoods;    
    },
    fullPriceInBasket: function() {
        let fFullPrice = 0;
        
        for (let iElem in this.Goods) {
            fFullPrice += this.Goods[iElem].count * this.Goods[iElem].price; 
        }
        
        return fFullPrice.toFixed(2);    
    },
    outGoods: function() {
    let countbasket = this.countGoodsInBasket(),
        nameProd = "";
        ((countbasket == 1) || (countbasket > 20 && countbasket % 10 == 1)) ? nameProd = " товар на сумму " : (countbasket % 10 > 1 && countbasket % 10 < 5 && (countbasket < 10 || countbasket > 20)) ? nameProd = " товара на сумму " :nameProd = " товаров на сумму ";        
        basketObj.innerHTML = this.countGoodsInBasket() + nameProd + this.fullPriceInBasket() + " руб.";
    }
}
    
function init() {
    var product = document.querySelectorAll(".product-trend"),
        basketObj = document.querySelector("#basketObj");
    for (let i = 0; i < product.length; i++) {
        product[i].getElementsByClassName("onbasket")[0].addEventListener("click", function() {
        basket.addGoodToBasket(i,product[i].getElementsByTagName("h2")[0].innerHTML,1,parseFloat(product[i].getElementsByTagName("span")[0].innerHTML.slice(4,10)));
        basket.outGoods();
        });
        }
}

window.onload = init;






