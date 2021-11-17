(this["webpackJsonpmovie-app-api"]=this["webpackJsonpmovie-app-api"]||[]).push([[0],{19:function(e,t,a){e.exports={card_holder:"moviecard_card_holder__3iik3",img_holder:"moviecard_img_holder__1fwbk",details_holder:"moviecard_details_holder__3CfKS"}},38:function(e,t,a){},39:function(e,t,a){},46:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(17),o=a.n(n),s=(a(38),a(39),a(2)),c=a(8),d=a(9),l=a(12),u=a(11),h=a(10),p=(a(46),a(19)),j=a.n(p),b=a(14),v=a(1),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.poster,r=e.year,i=e.type,n=e.id;return Object(v.jsxs)(b.b,{className:j.a.card_holder,to:"details/".concat(n),children:[Object(v.jsx)("img",{src:a,alt:"",className:j.a.img_holder}),Object(v.jsxs)("div",{className:j.a.details_holder,children:[Object(v.jsx)("h3",{children:t}),Object(v.jsx)("p",{children:r}),Object(v.jsx)("p",{children:i})]})]})}}]),a}(i.a.Component),O="FETCH_MOVIE",f="FETCH_MOVIE_SUCCESS",g="FETCH_MOVIE_FAIL",y="FETCH_MOVIE_DETAILS",x="FETCH_MOVIE_DETAILS_SUCCESS",_="FETCH_MOVIE_DETAILS_FAIL",D=a(22),E=a.n(D),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={movieList:[]},r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.movieData}},{key:"componentDidUpdate",value:function(e){var t=this.props.movieData;e.movieData.isLoading&&!t.isLoading&&this.setState({movieList:t.data.Search})}},{key:"movieSubmit",value:function(){var e=this._inputEl.value;""!==e&&(this.props.onFetchMovie(e),this._inputEl.value="")}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("header",{children:[Object(v.jsx)("input",{type:"text",placeholder:"Movie Name",ref:function(t){return e._inputEl=t}}),Object(v.jsx)("button",{onClick:function(){return e.movieSubmit()},children:"Search"})]}),Object(v.jsx)("div",{children:this.state.movieList.map((function(e){return Object(v.jsx)(m,{title:e.Title,year:e.Year,type:e.Type,poster:e.Poster,id:e.imdbID})}))})]})}}]),a}(i.a.Component),C={onFetchMovie:function(e){return function(t){t({type:O,payload:e});try{E.a.get("https://www.omdbapi.com/?apikey=3571e05b&s=".concat(e,"&page=1")).then((function(e){console.log("res: ",e),200===e.status&&"True"===e.data.Response?t({type:f,payload:e.data}):alert(e.data.Error)})).catch((function(e){console.log("axios error message: ",e.response.data.Error),t({type:g,error:e.response.data.Error})}))}catch(a){console.log("fetch error message: ",a),t({type:g,error:a})}}}},S=Object(h.b)((function(e){return{movieData:e.movie}}),C)(L),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;Object(c.a)(this,a),r=t.call(this,e);var i=window.location.href.split("/"),n=i[i.length-1];return console.log(n),r.state={movieId:n,data:{}},r}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.movieDetailsData;e.movieDetailsData.isLoading&&!t.isLoading&&this.setState({data:t.data})}},{key:"componentDidMount",value:function(){this.props.onFetchMovieDetails(this.state.movieId)}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[console.log(this.state.data),Object(v.jsx)("h1",{children:this.state.data.Title}),Object(v.jsx)("img",{src:this.state.data.Poster,alt:""}),Object(v.jsxs)("p",{children:["Director: ",this.state.data.Director]}),Object(v.jsxs)("p",{children:["Actors: ",this.state.data.Actors]}),Object(v.jsxs)("p",{children:["Plot: ",this.state.data.Plot]}),Object(v.jsx)("p",{children:Object(v.jsxs)("small",{children:["Duration: ",this.state.data.Runtime]})})]})}}]),a}(i.a.Component),F={onFetchMovieDetails:function(e){return function(t){t({type:y});try{E.a.get("http://www.omdbapi.com/?apikey=3571e05b&i=".concat(e)).then((function(e){200===e.status&&t({type:x,payload:e.data})})).catch((function(e){console.log("axios error message: ",e.response.data.Error),t({type:g,error:e.response.data.Error})}))}catch(a){console.log("error 2: ",a),t({type:_,error:a.response.data})}}}},I=Object(h.b)((function(e){return{movieDetailsData:e.movieDetails}}),F)(k);var T=function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(s.c,{children:[Object(v.jsx)(s.a,{path:"/details/:id",element:Object(v.jsx)(I,{})}),Object(v.jsx)(s.a,{path:"/",element:Object(v.jsx)(S,{})})]})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),r(e),i(e),n(e),o(e)}))},M=(a(66),a(33)),A=a(7),H=a(32),P=a.n(H),V=a(3),N=function(e,t){if(void 0===e)return{isLoading:!1,data:{},error:null};switch(t.type){case y:return{isLoading:!0,data:{},error:null};case x:return{isLoading:!1,data:t.payload,error:null};case _:return{isLoading:!1,data:{},error:t.error};default:return e}},U=function(e,t){if(void 0===e)return{isLoading:!1,data:{},error:null};switch(t.type){case O:return{isLoading:!0,data:{},error:null};case f:return{isLoading:!1,data:t.payload,error:null};case g:return{isLoading:!1,data:{},error:t.error};default:return e}},B=Object(V.b)({movie:U,movieDetails:N}),J={key:"root",version:1,storage:P.a},R=Object(A.g)(J,B),z=Object(M.a)({reducer:R,middleware:function(e){return e({serializableCheck:{ignoredActions:[A.a,A.f,A.b,A.c,A.d,A.e]}})}}),K=Object(A.h)(z);o.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(h.a,{store:z,children:Object(v.jsx)(b.a,{basename:"/react-movie-api",loading:null,persistor:K,children:Object(v.jsx)(T,{})})})}),document.getElementById("root")),w()}},[[69,1,2]]]);
//# sourceMappingURL=main.63e6c764.chunk.js.map