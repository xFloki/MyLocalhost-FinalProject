const request = require('request');
const cheerio = require('cheerio');
const rp = require('request-promise');

module.exports = {
  getProduct: (req, res) => {
    let product = req.params.product;
    
    const options = {
      uri: `http://www.carritus.com/tienda/super/carrefour/cp/08016/buscar/${product}`,
      transform: function (body) {
        return cheerio.load(body);
      }
    };

    rp(options)
    .then(($)=> {
        let products = [];
      $('.item.item-product').each(function(i, element){
        console.log('ITEM ' + i);
        // var a = $(this).children().eq(3).text();
        var brand = $(this).children().eq(2).text();
        var name = $(this).children().eq(1).children().children().attr("alt");
        var img = $(this).children().eq(1).children().children().attr("src");

        var product = {
          brand,
          name,
          img
        };
        console.log(product);
        products.push(product);
      });
      res.status(200).json(products);
    })
    .catch((err) => res.status(200).json(err));
  }
};
