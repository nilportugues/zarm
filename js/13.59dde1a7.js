webpackJsonp([13],{241:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=(t(268),t(269)),l=(t(277),t(278)),c=(t(270),t(271)),r=t(64),u=t.n(r),i=t(65),o=t.n(i),s=t(66),d=t.n(s),m=t(67),p=t.n(m),h=t(68),E=t.n(h),v=t(0),f=t.n(v),b=t(283),k=t(285),C=t(284),y=t(380),g=(t.n(y),function(e){function a(e){o()(this,a);var t=p()(this,(a.__proto__||u()(a)).call(this,e));return t.state={checkbox:[]},t}return E()(a,e),d()(a,[{key:"render",value:function(){return f.a.createElement(b.a,{className:"checkbox-page"},f.a.createElement(k.a,{title:"复选框 Checkbox"}),f.a.createElement("main",null,f.a.createElement(n.a,null,f.a.createElement(n.a.Header,{title:"基本"}),f.a.createElement(n.a.Body,null,f.a.createElement(c.a,null,f.a.createElement(l.a,null,"普通")),f.a.createElement(c.a,null,f.a.createElement(l.a,{defaultChecked:!0},"默认选中")),f.a.createElement(c.a,null,f.a.createElement(l.a,{disabled:!0},"禁用")),f.a.createElement(c.a,null,f.a.createElement(l.a,{defaultChecked:!0,disabled:!0},"选中且禁用")),f.a.createElement(c.a,{className:"agreement-box"},f.a.createElement(l.a,{id:"agreement"}),f.a.createElement("label",{htmlFor:"agreement"},"阅读并同意",f.a.createElement("a",{onClick:function(e){e.preventDefault(),alert("agree it")}},"《XXX条款》"),"中的相关规定")))),f.a.createElement(n.a,null,f.a.createElement(n.a.Header,{title:"按钮样式"}),f.a.createElement(n.a.Body,null,f.a.createElement(c.a,{description:f.a.createElement(l.a.Group,{type:"button"},f.a.createElement(l.a,{value:"0"},"选项一"),f.a.createElement(l.a,{value:"1"},"选项二"),f.a.createElement(l.a,{value:"2"},"选项三"))},"普通"),f.a.createElement(c.a,{description:f.a.createElement(l.a.Group,{type:"button",defaultValue:["0","1"]},f.a.createElement(l.a,{value:"0"},"选项一"),f.a.createElement(l.a,{value:"1"},"选项二"),f.a.createElement(l.a,{value:"2"},"选项三"))},"指定默认值"),f.a.createElement(c.a,{description:f.a.createElement(l.a.Group,{type:"button"},f.a.createElement(l.a,{value:"0"},"选项一"),f.a.createElement(l.a,{value:"1"},"选项二"),f.a.createElement(l.a,{value:"2",disabled:!0},"选项三"))},"禁用指定项"),f.a.createElement(c.a,{description:f.a.createElement(l.a.Group,{type:"button",shape:"radius"},f.a.createElement(l.a,{value:"0"},"选项一"),f.a.createElement(l.a,{value:"1"},"选项二"),f.a.createElement(l.a,{value:"2"},"选项三"))},"圆角"),f.a.createElement(c.a,{description:f.a.createElement(l.a.Group,{type:"button",shape:"round"},f.a.createElement(l.a,{value:"0"},"选项一"),f.a.createElement(l.a,{value:"1"},"选项二"),f.a.createElement(l.a,{value:"2"},"选项三"))},"椭圆角"))),f.a.createElement(n.a,null,f.a.createElement(n.a.Header,{title:"块级样式"}),f.a.createElement(n.a.Body,{className:"block-box"},f.a.createElement(l.a.Group,{block:!0,type:"button"},f.a.createElement(l.a,{value:"0"},"选项一"),f.a.createElement(l.a,{value:"1"},"选项二"),f.a.createElement(l.a,{value:"2"},"选项三")))),f.a.createElement(n.a,null,f.a.createElement(n.a.Header,{title:"列表样式"}),f.a.createElement(n.a.Body,null,f.a.createElement(l.a.Group,{type:"cell"},f.a.createElement(l.a,{value:"0"},"选项一"),f.a.createElement(l.a,{value:"1"},"选项二"),f.a.createElement(l.a,{value:"2",disabled:!0},"选项三（禁止选择）")))),f.a.createElement(n.a,null,f.a.createElement(n.a.Header,{title:"列表样式禁用状态"}),f.a.createElement(n.a.Body,null,f.a.createElement(l.a.Group,{disabled:!0,type:"cell"},f.a.createElement(l.a,{value:"0"},"选项一"),f.a.createElement(l.a,{value:"1"},"选项二"),f.a.createElement(l.a,{value:"2"},"选项三"))))),f.a.createElement(C.a,null))}}]),a}(v.PureComponent));a.default=g},277:function(e,a,t){"use strict";var n=(t(275),t(270),t(272),t(376));t.n(n)},278:function(e,a,t){"use strict";var n=t(377),l=t(378);n.a.Group=l.a,a.a=n.a},376:function(e,a){},377:function(e,a,t){"use strict";function n(e,a){return"checked"in e&&e.checked?e.checked:"defaultChecked"in e&&e.defaultChecked?e.defaultChecked:a}var l=t(276),c=t.n(l),r=t(64),u=t.n(r),i=t(65),o=t.n(i),s=t(66),d=t.n(s),m=t(67),p=t.n(m),h=t(68),E=t.n(h),v=t(0),f=t.n(v),b=t(274),k=t.n(b),C=t(271),y=t(273),g=function(e){function a(e){o()(this,a);var t=p()(this,(a.__proto__||u()(a)).call(this,e));return t.onValueChange=function(){var e=t.props,a=e.disabled,n=e.onChange;if(!a){var l=!t.state.checked;t.setState({checked:l}),"function"==typeof n&&n(l)}},t.state={checked:n(e,!1)},t}return E()(a,e),d()(a,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"render",value:function(){var e,a=this.props,t=a.prefixCls,n=a.className,l=a.shape,r=a.type,u=a.value,i=a.block,o=a.disabled,s=a.id,d=a.children,m=this.state.checked,p=k()(""+t,n,(e={},c()(e,"shape-"+l,!!l),c()(e,"checked",m),c()(e,"disabled",o),e)),h=f.a.createElement("div",{className:p},f.a.createElement("div",{className:t+"-wrapper"},f.a.createElement("span",{className:t+"-inner"}),d&&f.a.createElement("span",{className:t+"-text"},d),f.a.createElement("input",{id:s,type:"checkbox",className:t+"-input",disabled:o,checked:m,onChange:this.onValueChange})));return"cell"===r?f.a.createElement(C.a,{disabled:o,onClick:this.onValueChange},h):"button"===r?f.a.createElement(y.a,{className:p,theme:"primary",shape:l,size:"sm",block:i,bordered:!m,disabled:o},f.a.createElement("input",{type:"checkbox",className:t+"-input",value:u,disabled:o,checked:m,onChange:this.onValueChange}),d):h}}]),a}(v.PureComponent);a.a=g,g.defaultProps={prefixCls:"za-checkbox",disabled:!1}},378:function(e,a,t){"use strict";var n=t(276),l=t.n(n),c=t(64),r=t.n(c),u=t(65),i=t.n(u),o=t(66),s=t.n(o),d=t(67),m=t.n(d),p=t(68),h=t.n(p),E=t(0),v=t.n(E),f=t(274),b=t.n(f),k=function(e){var a=[];return v.a.Children.map(e,function(e){e.props&&e.props.checked&&a.push(e.props.value)}),a},C=function(e,a){return"value"in e?e.value:"defaultValue"in e?e.defaultValue:k(e.children).length>0?k(e.children):a},y=function(e){function a(e){i()(this,a);var t=m()(this,(a.__proto__||r()(a)).call(this,e));return t.onChildChange=function(e){var a=t.state.value,n=a.indexOf(e);n<0?a.push(e):a.splice(n,1),t.setState({value:a});var l=t.props.onChange;"function"==typeof l&&l(a)},t.state={value:C(e,[])},t}return h()(a,e),s()(a,[{key:"componentWillReceiveProps",value:function(e){("value"in e||k(e.children).length>0)&&this.setState({value:e.value||k(e.children)})}},{key:"render",value:function(){var e,a=this,t=this.props,n=t.prefixCls,c=t.className,r=t.shape,u=t.type,i=t.block,o=t.disabled,s=t.compact,d=t.children,m=v.a.Children.map(d,function(e,t){return Object(E.cloneElement)(e,{key:t,type:u,shape:r,block:i||e.props.block,disabled:o||e.props.disabled,onChange:function(){return a.onChildChange(e.props.value)},checked:a.state.value.indexOf(e.props.value)>-1})}),p=b()(""+n,c,(e={},l()(e,"shape-"+r,!!r),l()(e,"is-compact",s),l()(e,"block",i),l()(e,"disabled",o),e));return v.a.createElement("div",{className:p},m)}}]),a}(E.PureComponent);a.a=y,y.defaultProps={prefixCls:"za-checkbox-group",block:!1,disabled:!1,compact:!1}},380:function(e,a){}});