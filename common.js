function getHeader(page){
  return '<div class="head">'+
	'<table border=3 cellspacing=10 cellpadding=3 class="border">'+
		'<tr>'+
			'<td class="head"'+ ((page=='main') ? 'bgcolor="orange"': "" )+'><a href="index.html" class="head">home</a></td>'+
			'<td class="head"'+ ((page=='skinny mann') ? 'bgcolor="orange"': "" )+'><a href="skinny mann.html" class="head">skinny mann</a></td>'+
			'<td class="head"'+ ((page=='about') ? 'bgcolor="orange"': "" )+'><a href="about.html" class="head">about</a></td>'+
			'<td class="head"'+ ((page=='android') ? 'bgcolor="orange"': "" )+'><a href="skinny-mann-for-android.html" class="head">skinny mann for android</a></td>'+
      '<td class="head"'+ ((page=='level creator') ? 'bgcolor="orange"': "" )+'><a href="level creator.html" class="head">skinny mann level creator</a></td>'+
		'</tr>'+
	'</table>'+
'</div>'
}

window.loadPageHead = function loadPageHead(page){
    document.querySelector('.header').outerHTML = getHeader(page)
}