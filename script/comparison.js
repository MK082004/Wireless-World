function productonechange()
{
    var Product_Name= document.getElementById("Product_One_Name").value;
    var Product_Img= document.getElementById("Product_One_Img");
    var Product_Detail= document.getElementById("Product_One_Details");
    var Product_Img_1= document.getElementById("Product_One_Img_1");
    var Product_Img_2= document.getElementById("Product_One_Img_2");
    var Product_Img_3= document.getElementById("Product_One_Img_3");
    var Product_Img_4= document.getElementById("Product_One_Img_4");
    var Pname_first = document.getElementById("Product_One_Name").getElementsByTagName("option")[0];
    
    //console.log(Pname_first)

    
    if(Product_Name=="Select Product"){
        //alert("select product is disabled");
        Pname_first.disabled=true;
    }else{
        //alert("select product is enabled");
        Pname_first.disabled=false;
    }

    if(Product_Name=="Iphone 7")
    {
        Product_Img.src="images/iphone-7-1.jpg";
        document.getElementById("Product_One_Img").style.height="540px";
        Product_Img_1.src="images/iphone-7-1.jpg";
        document.getElementById("Product_One_Img_1").style.height="130px";
        document.getElementById("Product_One_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-7-2.jpg";
        document.getElementById("Product_One_Img_2").style.height="130px";
        document.getElementById("Product_One_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-7-3.jpg";
        document.getElementById("Product_One_Img_3").style.height="130px";
        document.getElementById("Product_One_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-7-4.jpg";
        document.getElementById("Product_One_Img_4").style.height="130px";
        document.getElementById("Product_One_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    // else if(Product_Name=="Iphone 7 Plus")
    // {
    //     Product_Img.src="images/iphone-7-plus-1.jpg";
    //     Product_Img_1.src="images/iphone-7-plus-1.jpg";
    //     document.getElementById("Product_One_Img_1").style.height="130px";
    //     document.getElementById("Product_One_Img_1").style.border="1px solid lightgrey";
    //     document.getElementById("Product_One_Img_1").style.padding="5px";
    //     Product_Img_2.src="images/iphone-7-plus-2.jpg";
    //     document.getElementById("Product_One_Img_2").style.height="130px";
    //     document.getElementById("Product_One_Img_2").style.border="1px solid lightgrey";
    //     document.getElementById("Product_One_Img_2").style.padding="5px";
    //     Product_Img_3.src="images/iphone-7-plus-3.jpg";
    //     document.getElementById("Product_One_Img_3").style.height="130px";
    //     document.getElementById("Product_One_Img_3").style.border="1px solid lightgrey";
    //     document.getElementById("Product_One_Img_3").style.padding="5px";
    //     Product_Img_4.src="images/iphone-7-plus-4.jpg";
    //     document.getElementById("Product_One_Img_4").style.height="130px";
    //     document.getElementById("Product_One_Img_4").style.border="1px solid lightgrey";
    //     document.getElementById("Product_One_Img_4").style.padding="5px";
    //     Product_Detail.innerHTML="<li> <span> RAM </span> 4GB </li>";
    // }

    else if(Product_Name=="Iphone 8")
    {
        Product_Img.src="images/iphone-8-1.jpg";
        document.getElementById("Product_One_Img").style.height="540px";
        Product_Img_1.src="images/iphone-8-1.jpg";
        document.getElementById("Product_One_Img_1").style.height="130px";
        document.getElementById("Product_One_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-8-2.jpg";
        document.getElementById("Product_One_Img_2").style.height="130px";
        document.getElementById("Product_One_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-8-3.jpg";
        document.getElementById("Product_One_Img_3").style.height="130px";
        document.getElementById("Product_One_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-8-4.jpg";
        document.getElementById("Product_One_Img_4").style.height="130px";
        document.getElementById("Product_One_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    // else if(Product_Name=="Iphone 8 Plus")
    // {
    //     Product_Img.src="images/iphone-8-plus-1.jpg";
    //     Product_Img_1.src="images/iphone-8-plus-1.jpg";
    //     document.getElementById("Product_One_Img_1").style.height="130px";
    //     document.getElementById("Product_One_Img_1").style.border="1px solid lightgrey";
    //     document.getElementById("Product_One_Img_1").style.padding="5px";
    //     Product_Img_2.src="images/iphone-8-plus-2.jpg";
    //     document.getElementById("Product_One_Img_2").style.height="130px";
    //     document.getElementById("Product_One_Img_2").style.border="1px solid lightgrey";
    //     document.getElementById("Product_One_Img_2").style.padding="5px";
    //     Product_Img_3.src="images/iphone-8-plus-3.jpg";
    //     document.getElementById("Product_One_Img_3").style.height="130px";
    //     document.getElementById("Product_One_Img_3").style.border="1px solid lightgrey";
    //     document.getElementById("Product_One_Img_3").style.padding="5px";
    //     Product_Img_4.src="images/iphone-8-plus-4.jpg";
    //     document.getElementById("Product_One_Img_4").style.height="130px";
    //     document.getElementById("Product_One_Img_4").style.border="1px solid lightgrey";
    //     document.getElementById("Product_One_Img_4").style.padding="5px";
    //     Product_Detail.innerHTML="<li> <span> RAM </span> 6GB</li>";
    // }

    else if(Product_Name=="Iphone X")
    {
        Product_Img.src="images/iphone-x-1.jpg";
        document.getElementById("Product_One_Img").style.height="540px";
        Product_Img_1.src="images/iphone-x-1.jpg";
        document.getElementById("Product_One_Img_1").style.height="130px";
        document.getElementById("Product_One_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-x-2.jpg";
        document.getElementById("Product_One_Img_2").style.height="130px";
        document.getElementById("Product_One_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-x-3.jpg";
        document.getElementById("Product_One_Img_3").style.height="130px";
        document.getElementById("Product_One_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-x-4.jpg";
        document.getElementById("Product_One_Img_4").style.height="130px";
        document.getElementById("Product_One_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 11")
    {
        Product_Img.src="images/iphone-11-1.jpg";
        document.getElementById("Product_One_Img").style.height="540px";
        Product_Img_1.src="images/iphone-11-1.jpg";
        document.getElementById("Product_One_Img_1").style.height="130px";
        document.getElementById("Product_One_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-11-2.jpg";
        document.getElementById("Product_One_Img_2").style.height="130px";
        document.getElementById("Product_One_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-11-3.jpg";
        document.getElementById("Product_One_Img_3").style.height="130px";
        document.getElementById("Product_One_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-11-4.jpg";
        document.getElementById("Product_One_Img_4").style.height="130px";
        document.getElementById("Product_One_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 12")
    {
        Product_Img.src="images/iphone-12-1.jpg";
        document.getElementById("Product_One_Img").style.height="540px";
        Product_Img_1.src="images/iphone-12-1.jpg";
        document.getElementById("Product_One_Img_1").style.height="130px";
        document.getElementById("Product_One_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-12-2.jpg";
        document.getElementById("Product_One_Img_2").style.height="130px";
        document.getElementById("Product_One_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-12-3.jpg";
        document.getElementById("Product_One_Img_3").style.height="130px";
        document.getElementById("Product_One_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-12-4.jpg";
        document.getElementById("Product_One_Img_4").style.height="130px";
        document.getElementById("Product_One_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 13")
    {
        Product_Img.src="images/iphone-13-1.jpg";
        document.getElementById("Product_One_Img").style.height="540px";
        Product_Img_1.src="images/iphone-13-1.jpg";
        document.getElementById("Product_One_Img_1").style.height="130px";
        document.getElementById("Product_One_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-13-2.jpg";
        document.getElementById("Product_One_Img_2").style.height="130px";
        document.getElementById("Product_One_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-13-3.jpg";
        document.getElementById("Product_One_Img_3").style.height="130px";
        document.getElementById("Product_One_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-13-4.jpg";
        document.getElementById("Product_One_Img_4").style.height="130px";
        document.getElementById("Product_One_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 14")
    {
        Product_Img.src="images/iphone-14-1.jpg";
        document.getElementById("Product_One_Img").style.height="540px";
        Product_Img_1.src="images/iphone-14-1.jpg";
        document.getElementById("Product_One_Img_1").style.height="130px";
        document.getElementById("Product_One_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-14-2.jpg";
        document.getElementById("Product_One_Img_2").style.height="130px";
        document.getElementById("Product_One_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-14-3.jpg";
        document.getElementById("Product_One_Img_3").style.height="130px";
        document.getElementById("Product_One_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-14-4.jpg";
        document.getElementById("Product_One_Img_4").style.height="130px";
        document.getElementById("Product_One_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_One_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Select Product")
    {
        Product_Img.src="";
        document.getElementById("Product_One_Img").style.height="0px";
        Product_Img_1.src="";
        Product_Img_2.src="";
        document.getElementById("Product_One_Img_1").style.height="0px";
        document.getElementById("Product_One_Img_1").style.border="none";
        document.getElementById("Product_One_Img_1").style.padding="0px";
        document.getElementById("Product_One_Img_2").style.height="0";
        document.getElementById("Product_One_Img_2").style.border="none";
        document.getElementById("Product_One_Img_2").style.padding="0px";
        Product_Img_3.src="";
        Product_Img_4.src="";
        document.getElementById("Product_One_Img_3").style.height="0px";
        document.getElementById("Product_One_Img_3").style.border="none";
        document.getElementById("Product_One_Img_3").style.padding="0px";
        document.getElementById("Product_One_Img_4").style.height="0px";
        document.getElementById("Product_One_Img_4").style.border="none";
        document.getElementById("Product_One_Img_4").style.padding="0px";
        Product_Detail.innerHTML="";
    }

    // else(Product_Name=="")
    // {
    //     Product_Img.src="";
    //     Product_Detail.innerHTML="";
    // }
}

function changeimage(smallImg)
{
    var fullImg= document.getElementById("Product_One_Img");
    fullImg.src = smallImg.src;

}





function producttwochange()
{
    var Product_Name= document.getElementById("Product_Two_Name").value;
    var Product_Img= document.getElementById("Product_Two_Img");
    var Product_Detail= document.getElementById("Product_Two_Details");
    var Product_Img_1= document.getElementById("Product_two_Img_1");
    var Product_Img_2= document.getElementById("Product_two_Img_2");
    var Product_Img_3= document.getElementById("Product_two_Img_3");
    var Product_Img_4= document.getElementById("Product_two_Img_4");

    var Pname_first = document.getElementById("Product_Two_Name").getElementsByTagName("option")[0];
    
    //console.log(Pname_first)

    
    if(Product_Name=="Select Product"){
        //alert("select product is disabled");
        Pname_first.disabled=true;
    }else{
        //alert("select product is enabled");
        Pname_first.disabled=false;
    }

    if(Product_Name=="Iphone 7 Plus")
    {
        Product_Img.src="images/iphone-7-plus-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-7-plus-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-7-plus-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-7-plus-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-7-plus-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 8 Plus")
    {
        Product_Img.src="images/iphone-8-plus-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-8-plus-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-8-plus-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-8-plus-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-8-plus-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone XS")
    {
        Product_Img.src="images/iphone-xs-max-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-xs-max-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-xs-max-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-xs-max-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-xs-max-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 11 pro max")
    {
        Product_Img.src="images/iphone-11-pro-max-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-11-pro-max-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-11-pro-max-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-11-pro-max-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-11-pro-max-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 12")
    {
        Product_Img.src="images/iphone-12-pro-max-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-12-pro-max-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-12-pro-max-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-12-pro-max-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-12-pro-max-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 13")
    {
        Product_Img.src="images/iphone-13-pro max-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-13-pro max-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-13-pro max-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-13-pro max-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-13-pro max-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 14")
    {
        Product_Img.src="images/iphone-14-pro max-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-14-pro max-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-14-pro max-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-14-pro max-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-14-pro max-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Select Product")
    {
        Product_Img.src="";
        document.getElementById("Product_Two_Img").style.height="0px";
        Product_Img_1.src="";
        Product_Img_2.src="";
        document.getElementById("Product_two_Img_1").style.height="0px";
        document.getElementById("Product_two_Img_1").style.border="none";
        document.getElementById("Product_two_Img_1").style.padding="0px";
        document.getElementById("Product_two_Img_2").style.height="0";
        document.getElementById("Product_two_Img_2").style.border="none";
        document.getElementById("Product_two_Img_2").style.padding="0px";
        Product_Img_3.src="";
        Product_Img_4.src="";
        document.getElementById("Product_two_Img_3").style.height="0px";
        document.getElementById("Product_two_Img_3").style.border="none";
        document.getElementById("Product_two_Img_3").style.padding="0px";
        document.getElementById("Product_two_Img_4").style.height="0px";
        document.getElementById("Product_two_Img_4").style.border="none";
        document.getElementById("Product_two_Img_4").style.padding="0px";
        Product_Detail.innerHTML="";
    }

    // else(Product_Name=="")
    // {
    //     Product_Img.src="";
    //     Product_Detail.innerHTML="";
    // }
}

function productthreechange()
{
    var Product_Name= document.getElementById("Product_Two_Name").value;
    var Product_Img= document.getElementById("Product_Two_Img");
    var Product_Detail= document.getElementById("Product_Two_Details");
    var Product_Img_1= document.getElementById("Product_two_Img_1");
    var Product_Img_2= document.getElementById("Product_two_Img_2");
    var Product_Img_3= document.getElementById("Product_two_Img_3");
    var Product_Img_4= document.getElementById("Product_two_Img_4");

    var Pname_first = document.getElementById("Product_Two_Name").getElementsByTagName("option")[0];
    
    //console.log(Pname_first)

    
    if(Product_Name=="Select Product"){
        //alert("select product is disabled");
        Pname_first.disabled=true;
    }else{
        //alert("select product is enabled");
        Pname_first.disabled=false;
    }

    if(Product_Name=="Iphone 7 Plus")
    {
        Product_Img.src="images/iphone-7-plus-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-7-plus-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-7-plus-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-7-plus-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-7-plus-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 8 Plus")
    {
        Product_Img.src="images/iphone-8-plus-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-8-plus-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-8-plus-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-8-plus-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-8-plus-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone XS")
    {
        Product_Img.src="images/iphone-xs-max-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-xs-max-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-xs-max-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-xs-max-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-xs-max-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 11 pro max")
    {
        Product_Img.src="images/iphone-11-pro-max-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-11-pro-max-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-11-pro-max-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-11-pro-max-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-11-pro-max-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 12")
    {
        Product_Img.src="images/iphone-12-pro-max-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-12-pro-max-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-12-pro-max-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-12-pro-max-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-12-pro-max-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 13")
    {
        Product_Img.src="images/iphone-13-pro max-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-13-pro max-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-13-pro max-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-13-pro max-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-13-pro max-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Iphone 14")
    {
        Product_Img.src="images/iphone-14-pro max-1.jpg";
        document.getElementById("Product_Two_Img").style.height="540px";
        Product_Img_1.src="images/iphone-14-pro max-1.jpg";
        document.getElementById("Product_two_Img_1").style.height="130px";
        document.getElementById("Product_two_Img_1").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_1").style.padding="5px";
        Product_Img_2.src="images/iphone-14-pro max-2.jpg";
        document.getElementById("Product_two_Img_2").style.height="130px";
        document.getElementById("Product_two_Img_2").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_2").style.padding="5px";
        Product_Img_3.src="images/iphone-14-pro max-3.jpg";
        document.getElementById("Product_two_Img_3").style.height="130px";
        document.getElementById("Product_two_Img_3").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_3").style.padding="5px";
        Product_Img_4.src="images/iphone-14-pro max-4.jpg";
        document.getElementById("Product_two_Img_4").style.height="130px";
        document.getElementById("Product_two_Img_4").style.border="1px solid lightgrey";
        document.getElementById("Product_two_Img_4").style.padding="5px";
        Product_Detail.innerHTML="<li> <span> RAM </span> : 2GB </li> <li> <span> ROM </span> : 128GB </li> <li> <span> Back-Camera </span> : 8MP </li> <li> <span> Front-Camera </span> : 5MP </li> <li> <span> Battery </span> : 2910 mAh </li> <li> <span> Screen </span> : 5.5 inches </li>";
    }

    else if(Product_Name=="Select Product")
    {
        Product_Img.src="";
        document.getElementById("Product_Two_Img").style.height="0px";
        Product_Img_1.src="";
        Product_Img_2.src="";
        document.getElementById("Product_two_Img_1").style.height="0px";
        document.getElementById("Product_two_Img_1").style.border="none";
        document.getElementById("Product_two_Img_1").style.padding="0px";
        document.getElementById("Product_two_Img_2").style.height="0";
        document.getElementById("Product_two_Img_2").style.border="none";
        document.getElementById("Product_two_Img_2").style.padding="0px";
        Product_Img_3.src="";
        Product_Img_4.src="";
        document.getElementById("Product_two_Img_3").style.height="0px";
        document.getElementById("Product_two_Img_3").style.border="none";
        document.getElementById("Product_two_Img_3").style.padding="0px";
        document.getElementById("Product_two_Img_4").style.height="0px";
        document.getElementById("Product_two_Img_4").style.border="none";
        document.getElementById("Product_two_Img_4").style.padding="0px";
        Product_Detail.innerHTML="";
    }

    // else(Product_Name=="")
    // {
    //     Product_Img.src="";
    //     Product_Detail.innerHTML="";
    // }
}


function changetwoimage(smallImg)
{
    var fullImg= document.getElementById("Product_Two_Img");
    fullImg.src = smallImg.src;

}
