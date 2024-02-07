let myList = new Array(60).join('1.1').split('.');

async function removeItemsFromList() {
    var item = myList.pop();
    if (item) {
      await removeItemsFromList()
    }
};

removeItemsFromList();
console.log(myList);