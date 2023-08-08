function mostAppearItem(arr) {
    const itemCount = {};
  
    for (const item of arr) {
      if (item in itemCount) {
        itemCount[item]++;
      } else {
        itemCount[item] = 1;
      }
    }
  
    // Urutkan berdasarkan jumlah kemunculan secara menurun
    const sortedItems = Object.keys(itemCount).sort((a, b) => itemCount[b] - itemCount[a]);
  
    // Tampilkan hasil
    for (const item of sortedItems) {
      console.log(`${item}->${itemCount[item]}`);
    }
  }
  
  const input1 = ["js", "js", "golang", "ruby", "ruby", "js", "js"];{
  mostAppearItem(input1); // golang->1 ruby->2 js->4

  const input2 = ["A", "B", "B", "C", "A", "A", "B", "A", "D", "D"];
  mostAppearItem(input2); // C->1 D->2 B->3 A->4

  const input3 = ["football", "basketball", "tenis"];
  mostAppearItem(input3); // football->1 basketball->1 tenis->1
  }