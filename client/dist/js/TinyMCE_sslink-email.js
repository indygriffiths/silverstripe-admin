webpackJsonp([2],{177:function(e,t){e.exports=InsertLinkModal},24:function(e,t){e.exports=i18n},38:function(e,t){e.exports=Injector},953:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(24),a=n(r),o=i(97),l=n(o),s=i(0),d=n(s),c=i(26),u=n(c),m=i(96),p=i(11),f=n(p),g=i(177),k=i(38);l.default.addAction("sslink",{text:a.default._t("Admin.LINKLABEL_EMAIL","Link to email address"),onclick:function(e){return e.execCommand("sslinkemail")},priority:51}).addCommandWithUrlTest("sslinkemail",/^mailto:/);var h={init:function(e){e.addCommand("sslinkemail",function(){window.jQuery("#"+e.id).entwine("ss").openLinkEmailDialog()})}},A="insert-link__dialog-wrapper--email",_=(0,k.provideInjector)((0,g.createInsertLinkModal)("SilverStripe\\Admin\\LeftAndMain","EditorEmailLink"));f.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkEmailDialog:function(){var t=e("#"+A);t.length||(t=e('<div id="'+A+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+A).entwine({renderModal:function(e){var t=this,i=window.ss.store,n=window.ss.apolloClient,r=function(){return t.close()},o=function(){return t.handleInsert.apply(t,arguments)},l=this.getOriginalAttributes(),s=tinymce.activeEditor.selection,c=s.getContent()||"",p=s.getNode().tagName,f="A"!==p&&""===c.trim();u.default.render(d.default.createElement(m.ApolloProvider,{store:i,client:n},d.default.createElement(_,{show:e,onInsert:o,onHide:r,title:a.default._t("Admin.LINK_EMAIL","Insert email link"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--email",fileAttributes:l,identifier:"Admin.InsertLinkEmailModal",requireLinkText:f})),this[0])},getOriginalAttributes:function(){var t=this.getElement().getEditor(),i=e(t.getSelectedNode()),n=(i.attr("href")||"").split("?"),r=n[0].replace(/^mailto:/,"").split("?")[0];r.match(/.+@.+\..+/)||(r="");var a=n[1]?n[1].match(/subject=([^&]+)/):"";return{Link:r,Subject:a?decodeURIComponent(a[1]):"",Description:i.attr("title")}},buildAttributes:function(e){var t=this._super(e),i="",n=t.href.replace(/^mailto:/,"").split("?")[0];return n.match(/.+@.+\..+/)||(n=""),n&&(i="mailto:"+n),i&&e.Subject&&(i=i+"?subject="+encodeURIComponent(e.Subject)),t.href=i,delete t.target,t}})}),tinymce.PluginManager.add("sslinkemail",function(e){return h.init(e)}),t.default=h},96:function(e,t){e.exports=ReactApollo},97:function(e,t){e.exports=TinyMCEActionRegistrar}},[953]);