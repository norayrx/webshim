jQuery.webshims.ready("form-core form-message dom-extend",function(c,f,y,m,q){if(Modernizr.formvalidation){var j=f.inputTypes,r={};f.addInputType=function(a,e){j[a]=e};f.addValidityRule=function(a,e){r[a]=e};f.addValidityRule("typeMismatch",function(a,e,b,g){if(e==="")return false;g=g.typeMismatch;if(!("type"in b))b.type=(a[0].getAttribute("type")||"").toLowerCase();if(j[b.type]&&j[b.type].mismatch)g=j[b.type].mismatch(e,a);return g});var i=f.cfg.forms.overrideMessages,s=!Modernizr.requiredSelect||
!Modernizr.input.valueAsDate||i,z=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],A=c.attr,t=c.fn.val,o=i?{value:1,checked:1}:{value:1},n=i?["textarea"]:[],B={radio:1,checkbox:1},k=function(a,e){if(a.form){var b=(a.getAttribute&&a.getAttribute("type")||a.type||"").toLowerCase();if(!i)if(!(!Modernizr.requiredSelect&&b=="select-one")&&!j[b])return;i&&!e&&B[b]&&a.name?c(m.getElementsByName(a.name)).each(function(){c.attr(this,
"validity")}):c.attr(a,"validity")}};f.defineNodeNamesProperty(["input","textarea","select"],"setCustomValidity",{value:function(a){a+="";this.setCustomValidity(a);Modernizr.validationmessage||c.data(this,"customvalidationMessage",a);if(s){c.data(this,"hasCustomError",!!a);k(this)}}});if(!y.noHTMLExtFixes&&!Modernizr.requiredSelect||i){c.extend(o,{required:1,size:1,multiple:1,selectedIndex:1});n.push("select")}if(!Modernizr.input.valueAsNumber||i){c.extend(o,{min:1,max:1,step:1});n.push("input")}if(s){n.forEach(function(a){var e=
f.defineNodeNameProperty(a,"validity",{get:function(){var b=this,g=e._supget.call(this);if(!g)return g;var d={};z.forEach(function(h){d[h]=g[h]});if(!c.attr(b,"willValidate"))return d;var u=c(b),C={type:(b.getAttribute&&b.getAttribute("type")||"").toLowerCase(),nodeName:(b.nodeName||"").toLowerCase()},D=t.call(u),v=!!c.data(b,"hasCustomError"),p;d.customError=v;if(d.valid&&d.customError)d.valid=false;else if(!d.valid){var w=true;c.each(d,function(h,l){if(l)return w=false});if(w)d.valid=true}c.each(r,
function(h,l){d[h]=l(u,D,C,d);if(d[h]&&(d.valid||!p)){b.setCustomValidity(f.createValidationMessage(b,h));d.valid=false;p=true}});if(d.valid){b.setCustomValidity("");c.data(b,"hasCustomError",false)}else i&&!p&&!v&&c.each(d,function(h,l){if(h!=="valid"&&l){b.setCustomValidity(f.createValidationMessage(b,h));return false}});return d},set:c.noop},true)});c.fn.val=function(a){var e=t.apply(this,arguments);a!==q&&this.each(function(){k(this)});return e};c.attr=function(a,e,b){var g=A.apply(this,arguments);
o[e]&&b!==q&&a.form&&k(a);return g};if(m.addEventListener){m.addEventListener("change",function(a){k(a.target)},true);Modernizr.input.valueAsNumber||m.addEventListener("input",function(a){k(a.target)},true)}var x=n.join(",");f.addReady(function(a,e){c(x,a).add(e.filter(x)).each(function(){c.attr(this,"validity")})})}}});
