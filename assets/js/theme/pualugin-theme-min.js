function appendClipboard(){$(".code");var e=$(".code").append('<button class=code__clipboard> <i class="fa fa-clipboard"></i> </button>');$(".code").append('<span class="code__tooltip">클릭시 클럽보드에 복사됩니다.</span>');e.on("click.appendClipboard",function(e){e.stopPropagation(),e.preventDefault();var a=$.trim($(this).closest(".code").find("code").text()),o=document,t=o.createElement("textarea");o.body.appendChild(t),t.value=a,t.select(),o.execCommand("copy"),o.body.removeChild(t)})}hljs.initHighlightingOnLoad(),$("[data-element=nav__anchor]").on("click",function(e){e.stopPropagation(),$(this).closest(".pualugin__header").removeClass("is-active")}),$(".pualugin__menu-button").on("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).closest(".pualugin__header").toggleClass("is-active")}),appendClipboard();