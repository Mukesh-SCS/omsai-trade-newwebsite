// The following line is critical for menu operation, and must appear only once.
menunum=0;menus=new Array();_d=document;function addmenu(){menunum++;menus[menunum]=menu;}function dumpmenus(){mt="<script language=javascript>";for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/script>";_d.write(mt)}
//Please leave the above line intact
////////////////////////////////////
// Editable properties START here //
////////////////////////////////////
effect = "fade(duration=0.3);Alpha(style=0,opacity=100);Shadow(color='#6f8cb5', Direction=0, Strength=0)" // Special effect string for IE5.5 or above please visit http://www.milonic.co.uk/menu/filters_sample.php for more filters
timegap=200                                // The time delay for menus to remain visible
followspeed=5                        // Follow Scrolling speed
followrate=40                        // Follow Scrolling Rate
suboffset_top=0;                // Sub menu offset Top position 
suboffset_left=-5;                // Sub menu offset Left position
style1=[                                // style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"ffffff",                                // Mouse Off Font Color
"0C5EB1",                                // Mouse Off Background Color
"ffffff",                                // Mouse On Font Color
"3385D6",                                // Mouse On Background Color
"297ACB",                                // Menu Border Color 
11,                                                // Font Size in pixels
"normal",                                // Font Style (italic or normal)
"bold",                                        // Font Weight (bold or normal)
"Tahoma, Ariel,Verdana,Helvetica",                // Font Name
7,                                                // Menu Item Padding
,                   // Menu Image (Leave this blank if not needed)
1,                                // 3D Border & Separator bar
"0755A3",                                // 3D High Color
"0755A3",                        // 3D Low Color
"",                        // Current Page Item Font Color (leave this blank to disable)
"",                          // Current Page Item Background Color (leave this blank to disable)
"",                                // Top Bar image (Leave this blank to disable)
"",                                // Menu Header Font Color (Leave blank if headers are not needed)
"",                                // Menu Header Background Color (Leave blank if headers are not needed)
]
addmenu(menu=[                // This is the array that contains your menu properties and details
"mainmenu",                        // Menu Name - This is needed in order for the menu to be called
129,                                        // Menu Top - The Top position of the menu in pixels
0,                                        // Menu Left - The Left position of the menu in pixels
107,                                // Menu Width - Menus width in pixels
0,                                        // Menu Border Width 
"center",                                        // Screen Position - here you can use "center;left;right;middle;top;bottom" or a                                             combination of "center:middle"

style1,                                // Properties Array - this is set higher up, as above
1,                                        // Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"center",                                // Alignment - sets the menu elements text alignment, values valid here are: left, right or center
"effect",                                // Filter - Text variable for setting transitional effects on menu activation - see above for more info
,                                        // Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
1,                                       // Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,                                        // Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,                                        // Position of TOP sub image left:center:right
,                                        // ..Now Obsolete..
,                                        // Right To Left - Used in Hebrew for example. (1=on/0=off)
,                                        // Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,                                        // ID of the div you want to hide on MouseOver (useful for hiding form elements)
,                                        // Reserved for future use
,                                        // Reserved for future use
,                                        // Reserved for future use






,"Home","index.html","index.html","About us",1
,"About Us","about-us.html","#","About Us",1
,"Products","products.html","#","Products",1
,"Clients","clients.html","#","Clients",1
,"Services","services.html","#","Services",1
,"Call Center","call-center.html","#","Call Center",1
,"Enquiry","enquiry.html","#","Enquiry",1
,"Contact Us","contact-us.html","#","Contact Us",1





])

//-----------------------------------------------------------------------------------------------------
 
 addmenu(menu=["abt",
		,,175,1,"",style1,,"left",effect,,,,,,,,,,,,
		
        ,"About Us","about-us.html","#","About Us",1            
		,"Philosophy","#","#","Philosophy",1
	    ,"Vision","#","#","Vision",1
		,"Management Profile","#","#","Management Profile",1            
		,"Board of Directors","#","#","Board of Directors",1
        ,"Leadership Team","#","#","Leadership Team",1
		,"Management Profile","#","#","Management Profile",1            
		,"Quick Facts","#","#","Quick Facts",1
        ,"Global Engineering Model (GEM)","#","#","Global Engineering Model (GEM)",1
])
 
 addmenu(menu=["gar-sheo",
		,,125,1,"",style1,,"left",effect,,,,,,,,,,,,
		
        ,"Summer Collection","show-menu=summer","#","Summer Collection",1            
		,"Winter Collection ","show-menu=winter","#","Winter Collection ",1

	    
])

addmenu(menu=["summer",
		,,125,1,"",style1,,"left",effect,,,,,,,,,,,,
		
        ,"New Born","show-menu=sum-new-born","#","New Born",1            
		,"3-7 Years Old","show-menu=sum-3-7-old","#","3-7 Years Old",1
		,"8-14 Years Old","show-menu=sum-8-14-old","#","8-14 Years Old",1            
		,"Shoes","show-menu=sum-shoes","#","Shoes",1
        
])



 dumpmenus()
  