(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29326d9f"],{"2fef":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col justify-center items-center min-h-screen"},[a("router-link",{staticClass:"hidden md:block pt-10 pb-14",attrs:{to:"/"}},[a("Logo",{attrs:{height:28}})],1),a("div",{staticClass:"p-6 md:p-[4.5rem] rounded-lg md:border border-gray-200 w-full max-w-[30rem] mb-auto md:my-auto"},[a("router-link",{staticClass:"md:hidden flex items-center justify-center mb-4 w-10 h-10 bg-gray-100 rounded-full",attrs:{to:"/"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"}},[a("path",{attrs:{fill:"#484848","fill-rule":"evenodd",d:"M.723 8.657c.001-.472.204-.921.557-1.234L8.933.676a.985.985 0 0 1 1.364.112.989.989 0 0 1-.064 1.37L4.321 7.37a.172.172 0 0 0 .113.3h11.715a.987.987 0 0 1 0 1.975H4.436a.172.172 0 0 0-.113.3l5.912 5.211a.988.988 0 0 1-.316 1.708.984.984 0 0 1-.984-.226L1.28 9.891a1.653 1.653 0 0 1-.558-1.234z"}})])]),a("div",{staticClass:"flex w-full rounded-[10px] bg-gray-100 p-0.5 mb-7"},[t._l(t.tab,(function(e){return[a("router-link",{staticClass:"flex-1 h-12 flex items-center justify-center rounded-lg text-gray-700 font-semibold",class:{"bg-white":t.$route.params.method===e.link},attrs:{to:e.link}},[t._v(" "+t._s(e.title)+" ")])]}))],2),a("form",{directives:[{name:"show",rawName:"v-show",value:"login"===t.$route.params.method,expression:"$route.params.method === 'login'"}],attrs:{method:"post",action:"#"}},[t._m(0),t._m(1),a("button",{staticClass:"auth__button mb-5"},[t._v("Giriş yap")]),a("router-link",{staticClass:"text-orange-500 font-semibold text-sm",attrs:{to:"/"}},[t._v("Şifremi unuttum")])],1),a("form",{directives:[{name:"show",rawName:"v-show",value:"register"===t.$route.params.method,expression:"$route.params.method === 'register'"}],attrs:{method:"post",action:"#"}},[a("div",{staticClass:"auth__line"},[t._v("E-posta adresi ile üye ol")]),t._m(2),t._m(3),t._m(4),t._m(5),a("button",{staticClass:"auth__button",attrs:{disabled:""}},[t._v("Üye ol")]),t._m(6)])],1),a("div",{staticClass:"pt-10 pb-6 flex flex-col items-center justify-center"},[a("div",{staticClass:"flex items-center"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"21",viewBox:"0 0 18 21"}},[a("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[a("path",{attrs:{stroke:"#484848","stroke-linecap":"round","stroke-linejoin":"round",d:"M1.208 3.675v6.345a9.923 9.923 0 0 0 6.36 9.261l.868.334a2.497 2.497 0 0 0 1.795 0l.867-.334a9.923 9.923 0 0 0 6.36-9.26V3.674a1.24 1.24 0 0 0-.723-1.135 18.09 18.09 0 0 0-7.402-1.509 18.09 18.09 0 0 0-7.401 1.51 1.24 1.24 0 0 0-.724 1.134z"}}),a("path",{attrs:{fill:"#5AD363",d:"M3.5 6.877v3.936a5.574 5.574 0 0 0 3.6 5.148l.484.186c.321.123.677.123.999 0l.483-.186a5.574 5.574 0 0 0 3.6-5.148V6.877a.69.69 0 0 0-.402-.632 10.46 10.46 0 0 0-4.178-.838 10.462 10.462 0 0 0-4.184.838.69.69 0 0 0-.402.632z"}}),a("path",{attrs:{stroke:"#484848","stroke-linecap":"round","stroke-linejoin":"round",d:"M6.596 15.67l8.362-8.363M13.621 4.23l-9.103 9.098"}}),a("path",{attrs:{stroke:"#484848","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.25",d:"M3.708 5.336v4.834a6.845 6.845 0 0 0 4.417 6.321l.593.229c.394.151.83.151 1.225 0l.592-.229a6.845 6.845 0 0 0 4.417-6.321V5.336a.847.847 0 0 0-.494-.775 12.816 12.816 0 0 0-5.125-1.03 12.82 12.82 0 0 0-5.131 1.03.847.847 0 0 0-.494.775z"}})])]),a("div",{staticClass:"ml-[11px] text-[#439e4a] text-[11px] font-bold"},[t._v("Güvenli alışveriş")])]),t._m(7)])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"mb-4 flex w-full",attrs:{for:"login_email"}},[a("input",{staticClass:"auth__input",attrs:{type:"email",id:"login_email",name:"email",placeholder:"E-posta adresi"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"mb-8 flex w-full",attrs:{for:"login_password"}},[a("input",{staticClass:"auth__input",attrs:{type:"password",id:"login_password",name:"password",placeholder:"Şifre"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid grid-flow-col auto-cols-auto gap-x-4 mb-4"},[a("label",{staticClass:"flex w-full",attrs:{for:"register_name"}},[a("input",{staticClass:"auth__input",attrs:{type:"text",id:"register_name",name:"name",placeholder:"Ad"}})]),a("label",{staticClass:"flex w-full",attrs:{for:"register_surname"}},[a("input",{staticClass:"auth__input",attrs:{type:"text",id:"register_surname",name:"surname",placeholder:"Soyad"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"mb-4 flex w-full",attrs:{for:"register_email"}},[a("input",{staticClass:"auth__input",attrs:{type:"email",id:"register_email",name:"email",placeholder:"E-posta adresi"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"mb-4 flex w-full",attrs:{for:"register_password"}},[a("input",{staticClass:"auth__input",attrs:{type:"password",id:"register_password",name:"password",placeholder:"Şifre"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex mb-8"},[a("input",{staticClass:"h-6 w-6 cursor-pointer rounded-lg border-2 border-gray-400 bg-white mr-4 !ring-0 checked:!bg-orange-500 !ring-transparent !shadow-none transition-colors duration-200",attrs:{id:"accept",name:"accept",type:"checkbox"}}),a("label",{staticClass:"block text-sm text-gray-600 leading-5 cursor-pointer select-none",attrs:{for:"accept"}},[t._v("Önemli kampanyalardan haberdar olmak için "),a("b",{staticClass:"hover:underline"},[t._v("Rıza Metni")]),t._v(" kapsamında elektronik ileti almak istiyorum.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4 text-[11px] text-gray-500 leading-[1.5]"},[t._v("Kişisel verileriniz, "),a("b",[t._v("Aydınlatma Metni")]),t._v(' kapsamında işlenmektedir. "Üye ol" veya "Sosyal Hesap" butonlarından birine basarak '),a("b",[t._v("Üyelik Sözleşmesi")]),t._v("'ni, "),a("b",[t._v("Rıza Metni")]),t._v("'ni, "),a("b",[t._v("Çerez Politikası")]),t._v("'nı okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-[11px] mt-3 text-gray-600 tracking-[.2px]"},[t._v("© Copyright 2021 "),a("a",{attrs:{href:"https://github.com/berkaltiok/hepsiburada"}},[t._v("Hepsişurada E-Ticaret Teması")])])}],i=a("2b57"),l={components:{Logo:i["a"]},data:function(){return{tab:[{link:"login",title:"Giriş yap"},{link:"register",title:"Üye ol"}]}},metaInfo:{title:"Üye Giriş Sayfası & Üye Ol"}},n=l,o=(a("a58b"),a("2877")),c=Object(o["a"])(n,s,r,!1,null,"5179b2cc",null);e["default"]=c.exports},a58b:function(t,e,a){"use strict";a("b45b")},b45b:function(t,e,a){}}]);
//# sourceMappingURL=chunk-29326d9f.a259d7af.js.map