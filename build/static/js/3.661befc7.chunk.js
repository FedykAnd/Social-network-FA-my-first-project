(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{295:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1HnZa",mainPhoto:"ProfileInfo_mainPhoto__afAOX"}},296:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__OS2Gu",posts:"MyPosts_posts__2el69"}},297:function(e,t,a){e.exports={item:"Post_item__HD8yI"}},298:function(e,t,a){"use strict";a.r(t);var s=a(31),n=a(32),o=a(34),r=a(33),u=a(0),i=a.n(u),l=a(295),c=a.n(l),p=a(42),m=a(122),f=function(e){var t=Object(u.useState)(!1),a=Object(m.a)(t,2),s=a[0],n=a[1],o=Object(u.useState)(e.status),r=Object(m.a)(o,2),l=r[0],c=r[1];Object(u.useEffect)(function(){c(e.status)},[e.status]);return i.a.createElement("div",null,!s&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){n(!0)}},e.status||"-------")),s&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(l)},value:l})))},d=a(90),h=a.n(d),v=function(e){var t=e.profile,a=e.status,s=e.updateStatus,n=e.isOwner,o=e.savePhoto;if(!t)return i.a.createElement(p.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:c.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||h.a,className:c.a.mainPhoto}),n&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),i.a.createElement(f,{status:a,updateStatus:s})))},P=a(91),E=a(35),b=a(296),g=a.n(b),O=a(297),j=a.n(O),k=function(e){return i.a.createElement("div",{className:j.a.item},i.a.createElement("img",{src:h.a}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like")," ",e.likesCount))},S=a(85),w=a(121),_=a(53),y=a(28),I=Object(_.a)(10),x=Object(w.a)({form:"ProfileAddNewPostForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(S.a,{name:"newPostText",component:y.b,placeholder:"Post message",validate:[_.b,I]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))}),B=i.a.memo(function(e){var t=Object(E.a)(e.posts).reverse().map(function(e){return i.a.createElement(k,{message:e.message,likesCount:e.likesCount})});i.a.createRef();return i.a.createElement("div",{className:g.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(x,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:g.a.posts},t))}),C=a(13),N=Object(C.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(P.a)(t))}}})(B),A=function(e){return i.a.createElement("div",null,i.a.createElement(v,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(N,null))},T=a(293),U=a(7),D=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(A,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(i.a.Component);t.default=Object(U.d)(Object(C.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:P.d,getStatus:P.c,updateStatus:P.f,savePhoto:P.e}),T.a)(D)}}]);
//# sourceMappingURL=3.661befc7.chunk.js.map