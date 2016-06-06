/*TMODJS:{"version":"1.0.0"}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},"function"==typeof define?define(function(){return a}):"undefined"!=typeof exports?module.exports=a:this.template=a,/*v:48*/
a("index",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.list,e=(a.$value,a.$index,b.$escape),f="";return f+='<header> <img src="images/logo.png" class="logo"> <div class="search-container"> <img src="images/header-bg.png"> <div> <div class="search"> <input type="text" id="search-input"> <a href="javascript:;" class="search-submit">\u641c\u7d22</a> </div> <a href="report_upload.html" class="upload-file" target="upload_window">\u4e0a\u4f20\u6587\u4ef6</a> </div> </div> </header> <section> ',c(d,function(a){f+=' <div class="report"> <input type="hidden" value="',f+=e(a.document_id),f+='"> ',"doc"===a.type||"docx"===a.type?(f+=' <a class="icon word" href="report_detail.html?id=',f+=e(a.document_id),f+='" target="view_window"> <div class="report-logo"> <img src="images/word_logo.png" alt=""> </div> </a> '):"ppt"===a.type||"pptx"===a.type?(f+=' <a class="icon ppt" href="report_detail.html?id=',f+=e(a.document_id),f+='" target="view_window"> <div class="report-logo"> <img src="images/ppt_logo.png" alt=""> </div> </a> '):"pdf"===a.type?(f+=' <a class="icon pdf" href="report_detail.html?id=',f+=e(a.document_id),f+='" target="view_window"> <div class="report-logo"> <img src="images/pdf_logo.png" alt=""> </div> </a> '):"zip"===a.type?(f+=' <a class="icon zip" href="report_detail.html?id=',f+=e(a.document_id),f+='" target="view_window"> <div class="report-logo"> <img src="images/zip_logo.png" alt=""> </div> </a> '):"rar"===a.type&&(f+=' <a class="icon zip" href="report_detail.html?id=',f+=e(a.document_id),f+='" target="view_window"> <div class="report-logo"> <img src="images/zip_logo.png" alt=""> </div> </a> '),f+=' <div class="report-intro"> <a>',f+=e(a.document_name),f+="</a> <p>",f+=e(a.grade),f+="&nbsp;",f+=e(a.institute),f+="&nbsp;",f+=e(a.class),f+="</p> <span>\u5df2\u6709",f+=e(a.downloads),f+="\u4eba\u4e0b\u8f7d</span> </div> </div> "}),f+=" </section> ",new k(f)}),/*v:1*/
a("report_content",function(a){"use strict";var b=this,c=(b.$helpers,a.result),d=b.$escape,e=b.$each,f=(a.$value,a.$index,"");return f+='<div class="report-preview"> <div class="report-thumb-container clearfix"> ',"doc"===c.type||"docx"===c.type?f+=' <img src="images/word.png"> ':"ppt"===c.type||"pptx"===c.type?f+=' <img src="images/ppt.png"> ':"zip"===c.type||"rar"===c.type?f+=' <img src="images/zip.png"> ':"pdf"===c.type&&(f+=' <img src="images/pdf.png"> '),f+=" <div> <h2>",f+=d(c.document_name),f+='</h2> <p class="report-thumb-info">',f+=d(c.grade),f+=" ",f+=d(c.institute),f+=" ",f+=d(c.class),f+='</p> <p class="download-count">\u5df2\u6709',f+=d(c.downloads),f+="\u4eba\u4e0b\u8f7d</p> </div> </div> ",c.preview?(f+=' <div class="report-ifr-container" id="report-ifr-container"> <!--<iframe src="',f+=d(c.preview),f+='" id="report-preview-file" scrolling="no" frameborder="0"></iframe>--> <iframe id="report-preview-file"></iframe> </div> '):f+=' <div class="report-miss-container"> <img src="images/report-preview-miss.png"> </div> ',f+=' <div class="report-download-bar"> <input type="hidden" value="',f+=d(c.downloadUrl),f+='" id="downloadLink"> <a href="javascript:;" class="report-download-button"> <span>\u4e0b\u8f7d</span> </a> </div> </div> <div class="report-related"> <h2>\u76f8\u5173\u6587\u6863\u63a8\u8350</h2> <ul class="report-related-list"> ',e(c.related,function(a){f+=' <li> <a href="report_detail.html?id=',f+=d(a.document_id),f+='" title="',f+=d(a.class),f+=" ",f+=d(a.document_name),f+='"> ',"doc"===a.type||"docx"===a.type?f+=' <img src="images/word.png"> ':"ppt"===a.type||"pptx"===a.type?f+=' <img src="images/ppt.png"> ':"zip"===a.type||"rar"===a.type?f+=' <img src="images/zip.png"> ':"pdf"===a.type&&(f+=' <img src="images/pdf.png"> '),f+=" <div> <h3>",f+=d(a.document_name),f+="</h3> <p>",f+=d(a.institute),f+="</p> </div> </a> </li> "}),f+=" </ul> </div>",new k(f)}),/*v:4*/
a("search",' <div class="search"> <div class="searchbox"> <form action=""> <input type="text"> <div class="search-button">\u641c\u7d22</div> </form> </div> <a href="" class="upload">\u4e0a\u4f20\u6587\u4ef6</a> </div>')}();