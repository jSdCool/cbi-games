window.loadPageHead = function loadPageHead(page){
    document.querySelector('.head').outerHTML = getHeader(page)
}

function getHeader(page){
  return '<div class="head">'+
  '<table border=3 cellspacing=10 cellpadding=3 class="border">'+
    '<tr>'+
      '<td class="head"'+ ((page=='main') ? 'style="background-color: #00e7ff47;"': "" )+'><a href="index.html" class="head">Home</a></td>'+
      '<td class="head"'+ ((page=='skinny mann') ? 'style="background-color: #00e7ff47;"': "" )+'><a href="skinny_mann.html" class="head">Skinny Mann</a></td>'+
      '<td class="head"'+ ((page=='android') ? 'style="background-color: #00e7ff47;"': "" )+'><a href="skinny_mann_for_android.html" class="head">Skinny Mann for Android</a></td>'+
    '</tr>'+
  '</table>'+
'</div>'
}

function genStars(num){
  var md = document.createElement('div');
  for(var i=0;i<num;i++){
    var element = document.createElement('div');
    element.style.width=1;
    element.style.height=1;
    element.style.backgroundColor="white";
    element.style.position="absolute";
    element.style.top=Math.floor(Math.random()*1000000%getPageHeight());
    element.style.left=Math.floor(Math.random()*1000000%getPageWidth());
    element.style.zIndex=-1;
    md.appendChild(element);
  }
  document.body.appendChild(md);
}

function getPageWidth() {
    /*return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );*/
    return document.body.scrollWidth
  }
  
  function getPageHeight() {
    /*return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );*/
    return  document.body.scrollHeight
  }
