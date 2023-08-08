// Urutkan harga produk dari yang termurah
// Jika masih cukup uang, tambahkan barang ke pembelian
// Jika uang sudah tidak mencukupi, berhenti mencari barang

function maximumBuyProduct(money, productPrice) {
    
    productPrice.sort((a, b) => a - b);
    let maxBuy = 0;
    let currentMoney = money;
  
    for (let i = 0; i < productPrice.length; i++) {
      if (currentMoney >= productPrice[i]) {
        maxBuy++;
        currentMoney -= productPrice[i];
      } else {
        break;
      }
    }
  
    return maxBuy;
  }
  
  const money1 = 50000;{
  const productPrice1 = [25000, 25000, 10000, 14000];
  console.log(maximumBuyProduct(money1, productPrice1)); // 3
  
  const money2 = 30000;
  const productPrice2 = [15000, 10000, 12000, 5000, 3000];
  console.log(maximumBuyProduct(money2, productPrice2)); // 4

  const money3 = 10000;
  const productPrice3 = [2000, 3000, 1000, 2000, 10000];
  console.log(maximumBuyProduct(money3, productPrice3)); // 4
  
  const money4 = 4000;
  const productPrice4 = [7500, 3000, 2500, 2000];
  console.log(maximumBuyProduct(money4, productPrice4)); // 1

  const money5 = 0;
  const productPrice5 = [10000, 30000];
  console.log(maximumBuyProduct(money5, productPrice5)); // 0
  }