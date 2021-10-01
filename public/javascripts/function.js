
let data;
function getDustbindata(){
    var Bin_id = document.getElementById('Bin_id').value;
    //console.log(assetnumber);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/getdata/"+Bin_id,
        "method": "GET",
        "headers": {
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        data = response;
        if(data.length != []){
            let newtab = "";
            let serialno = 1;
            for(let i=(data.length)-1;i>0;i--){
                newtab = newtab + `<tr> 
                <td> ` +serialno+`</td>
                <td> ` +data[i].Bin_id+`</td>
                <td> ` +data[i].name+`</td>
                <td> ` +data[i].garbageLevel+`</td>
                <td> ` +data[i].latitude+`</td>
                <td> ` +data[i].longitude+`</td>
                <td> ` +moment(data[i].emptied_timeStamp).format("MM/DD/YYYY h:mm:ss a")+`</td>
                </tr>`;
                serialno++;
            }
          
                  
            $("table").find('tbody').html("");
            $("table").find("tbody").append(newtab);
        
           
        }
        else{
            alert("No Dustbin Data Exists For This Dustbin_ID");
        }
    //  console.log(response);    
      });
}
