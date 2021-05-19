function transfer(from,to,amt) {
      
    var myTab = document.getElementById('tbl');
    for (i = 1; i < myTab.rows.length; i++) {
        var objCells = myTab.rows.item(i).cells;
        accNo = objCells.item(0).innerHTML;
        if (accNo==from){
            var ans = parseInt(objCells.item(3).innerHTML);
            ans = ans - parseInt(amt)
            objCells.item(3).innerHTML=ans
            var cFrom= objCells.item(1);
        }
        if (accNo==to){
            var ans = parseInt(objCells.item(3).innerHTML);
            ans = ans + parseInt(amt)
            objCells.item(3).innerHTML=ans
            var cTo= objCells.item(1);

        }
    }
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = cFrom.innerHTML;
    cell2.innerHTML = cTo.innerHTML;
    cell3.innerHTML = amt;
}