(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="160",Id=0,Fo=1,Ud=2,Tc=1,uo=2,Rn=3,ii=0,Gt=1,Ht=2,Zn=0,Qi=1,zo=2,Bo=3,Ho=4,Nd=5,gi=100,Od=101,Fd=102,Go=103,Vo=104,zd=200,Bd=201,Hd=202,Gd=203,Yr=204,jr=205,Vd=206,Wd=207,Xd=208,qd=209,$d=210,Yd=211,jd=212,Kd=213,Jd=214,Zd=0,Qd=1,eu=2,As=3,tu=4,nu=5,iu=6,au=7,ho=0,su=1,ru=2,Qn=0,ou=1,lu=2,cu=3,Ac=4,du=5,uu=6,Lc=300,ta=301,na=302,Kr=303,Jr=304,Is=306,Zr=1e3,pn=1001,Qr=1002,$t=1003,Wo=1004,js=1005,sn=1006,hu=1007,Ia=1008,ei=1009,pu=1010,fu=1011,po=1012,Cc=1013,Kn=1014,Jn=1015,Ua=1016,Rc=1017,kc=1018,xi=1020,mu=1021,fn=1023,gu=1024,vu=1025,bi=1026,ia=1027,xu=1028,Pc=1029,bu=1030,Dc=1031,Ic=1033,Ks=33776,Js=33777,Zs=33778,Qs=33779,Xo=35840,qo=35841,$o=35842,Yo=35843,Uc=36196,jo=37492,Ko=37496,Jo=37808,Zo=37809,Qo=37810,el=37811,tl=37812,nl=37813,il=37814,al=37815,sl=37816,rl=37817,ol=37818,ll=37819,cl=37820,dl=37821,er=36492,ul=36494,hl=36495,_u=36283,pl=36284,fl=36285,ml=36286,Nc=3e3,_i=3001,yu=3200,Mu=3201,fo=0,wu=1,ln="",Dt="srgb",Fn="srgb-linear",mo="display-p3",Us="display-p3-linear",Ls="linear",vt="srgb",Cs="rec709",Rs="p3",Li=7680,gl=519,Su=512,Eu=513,Tu=514,Oc=515,Au=516,Lu=517,Cu=518,Ru=519,eo=35044,vl="300 es",to=1035,In=2e3,ks=2001;class la{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tr=Math.PI/180,no=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function ku(n,e){return(n%e+e)%e}function nr(n,e,t){return(1-t)*n+t*e}function xl(n){return(n&n-1)===0&&n!==0}function io(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,a,s,r,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,c)}set(e,t,i,a,s,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=a[0],m=a[3],u=a[6],x=a[1],b=a[4],_=a[7],k=a[2],w=a[5],S=a[8];return s[0]=r*v+o*x+l*k,s[3]=r*m+o*b+l*w,s[6]=r*u+o*_+l*S,s[1]=c*v+d*x+h*k,s[4]=c*m+d*b+h*w,s[7]=c*u+d*_+h*S,s[2]=f*v+p*x+g*k,s[5]=f*m+p*b+g*w,s[8]=f*u+p*_+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*r-o*c,f=o*l-d*s,p=c*s-r*l,g=t*h+i*f+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(a*c-d*i)*v,e[2]=(o*i-a*r)*v,e[3]=f*v,e[4]=(d*t-a*l)*v,e[5]=(a*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(r*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ir.makeScale(e,t)),this}rotate(e){return this.premultiply(ir.makeRotation(-e)),this}translate(e,t){return this.premultiply(ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new et;function Fc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pu(){const n=Ps("canvas");return n.style.display="block",n}const bl={};function Ta(n){n in bl||(bl[n]=!0,console.warn(n))}const _l=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yl=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qa={[Fn]:{transfer:Ls,primaries:Cs,toReference:n=>n,fromReference:n=>n},[Dt]:{transfer:vt,primaries:Cs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Us]:{transfer:Ls,primaries:Rs,toReference:n=>n.applyMatrix3(yl),fromReference:n=>n.applyMatrix3(_l)},[mo]:{transfer:vt,primaries:Rs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(yl),fromReference:n=>n.applyMatrix3(_l).convertLinearToSRGB()}},Du=new Set([Fn,Us]),ct={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Du.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=qa[e].toReference,a=qa[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return qa[n].primaries},getTransfer:function(n){return n===ln?Ls:qa[n].transfer}};function ea(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ci;class zc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ci===void 0&&(Ci=Ps("canvas")),Ci.width=e.width,Ci.height=e.height;const i=Ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ea(s[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ea(t[i]/255)*255):t[i]=ea(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Iu=0;class Bc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(sr(a[r].image)):s.push(sr(a[r]))}else s=sr(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function sr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uu=0;class Zt extends la{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=pn,a=pn,s=sn,r=Ia,o=fn,l=ei,c=Zt.DEFAULT_ANISOTROPY,d=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=ti(),this.name="",this.source=new Bc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===_i?Dt:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?_i:Nc}set encoding(e){Ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_i?Dt:ln}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Lc;Zt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,a=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,_=(p+1)/2,k=(u+1)/2,w=(d+f)/4,S=(h+v)/4,I=(g+m)/4;return b>_&&b>k?b<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(b),a=w/i,s=S/i):_>k?_<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(_),i=w/a,s=I/a):k<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(k),i=S/s,a=I/s),this.set(i,a,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(f-d)/x,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nu extends la{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(Ta("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_i?Dt:ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Zt(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Nu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hc extends Zt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$t,this.minFilter=$t,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ou extends Zt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$t,this.minFilter=$t,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],h=i[a+3];const f=s[r+0],p=s[r+1],g=s[r+2],v=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==p||d!==g){let m=1-o;const u=l*f+c*p+d*g+h*v,x=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const k=Math.sqrt(b),w=Math.atan2(k,u*x);m=Math.sin(m*w)/k,o=Math.sin(o*w)/k}const _=o*x;if(l=l*m+f*_,c=c*m+p*_,d=d*m+g*_,h=h*m+v*_,m===1-o){const k=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=k,c*=k,d*=k,h*=k}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],h=s[r],f=s[r+1],p=s[r+2],g=s[r+3];return e[t]=o*g+d*h+l*p-c*f,e[t+1]=l*g+d*f+c*h-o*p,e[t+2]=c*g+d*p+o*f-l*h,e[t+3]=d*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),h=o(s/2),f=l(i/2),p=l(a/2),g=l(s/2);switch(r){case"XYZ":this._x=f*d*h+c*p*g,this._y=c*p*h-f*d*g,this._z=c*d*g+f*p*h,this._w=c*d*h-f*p*g;break;case"YXZ":this._x=f*d*h+c*p*g,this._y=c*p*h-f*d*g,this._z=c*d*g-f*p*h,this._w=c*d*h+f*p*g;break;case"ZXY":this._x=f*d*h-c*p*g,this._y=c*p*h+f*d*g,this._z=c*d*g+f*p*h,this._w=c*d*h-f*p*g;break;case"ZYX":this._x=f*d*h-c*p*g,this._y=c*p*h+f*d*g,this._z=c*d*g-f*p*h,this._w=c*d*h+f*p*g;break;case"YZX":this._x=f*d*h+c*p*g,this._y=c*p*h+f*d*g,this._z=c*d*g-f*p*h,this._w=c*d*h-f*p*g;break;case"XZY":this._x=f*d*h-c*p*g,this._y=c*p*h-f*d*g,this._z=c*d*g+f*p*h,this._w=c*d*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*i+t*this._x,this._y=p*a+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=r*h+this._w*f,this._x=i*h+this._x*f,this._y=a*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*i),d=2*(o*t-s*a),h=2*(s*i-r*t);return this.x=t+l*c+r*h-o*d,this.y=i+l*d+o*c-s*h,this.z=a+l*h+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rr.copy(this).projectOnVector(e),this.sub(rr)}reflect(e){return this.sub(rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new L,Ml=new Oa;class Fa{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,dn):dn.fromBufferAttribute(s,r),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Ya.subVectors(this.max,pa),Ri.subVectors(e.a,pa),ki.subVectors(e.b,pa),Pi.subVectors(e.c,pa),Vn.subVectors(ki,Ri),Wn.subVectors(Pi,ki),ci.subVectors(Ri,Pi);let t=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-ci.z,ci.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,ci.z,0,-ci.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-ci.y,ci.x,0];return!or(t,Ri,ki,Pi,Ya)||(t=[1,0,0,0,1,0,0,0,1],!or(t,Ri,ki,Pi,Ya))?!1:(ja.crossVectors(Vn,Wn),t=[ja.x,ja.y,ja.z],or(t,Ri,ki,Pi,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,$a=new Fa,Ri=new L,ki=new L,Pi=new L,Vn=new L,Wn=new L,ci=new L,pa=new L,Ya=new L,ja=new L,di=new L;function or(n,e,t,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){di.fromArray(n,s);const o=a.x*Math.abs(di.x)+a.y*Math.abs(di.y)+a.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),d=i.dot(di);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Fu=new Fa,fa=new L,lr=new L;class za{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fu.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(fa,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(lr)),this.expandByPoint(fa.copy(e.center).sub(lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new L,cr=new L,Ka=new L,Xn=new L,dr=new L,Ja=new L,ur=new L;class go{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){cr.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(cr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ka),o=Xn.dot(this.direction),l=-Xn.dot(Ka),c=Xn.lengthSq(),d=Math.abs(1-r*r);let h,f,p,g;if(d>0)if(h=r*l-o,f=r*o-l,g=s*d,h>=0)if(f>=-g)if(f<=g){const v=1/d;h*=v,f*=v,p=h*(h+r*f+2*o)+f*(r*h+f+2*l)+c}else f=s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-r*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(r*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=r>0?-s:s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(cr).addScaledVector(Ka,f),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),a=Tn.dot(Tn)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,r=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,r=(e.min.y-f.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,a,s){dr.subVectors(t,e),Ja.subVectors(i,e),ur.crossVectors(dr,Ja);let r=this.direction.dot(ur),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Xn.subVectors(this.origin,e);const l=o*this.direction.dot(Ja.crossVectors(Xn,Ja));if(l<0)return null;const c=o*this.direction.dot(dr.cross(Xn));if(c<0||l+c>r)return null;const d=-o*Xn.dot(ur);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,a,s,r,o,l,c,d,h,f,p,g,v,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,c,d,h,f,p,g,v,m)}set(e,t,i,a,s,r,o,l,c,d,h,f,p,g,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),r=1/Di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=r*d,p=r*h,g=o*d,v=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,g=c*d,v=c*h;t[0]=f+v*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*h,t[5]=r*d,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,g=c*d,v=c*h;t[0]=f-v*o,t[4]=-r*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*d,t[9]=v-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*d,p=r*h,g=o*d,v=o*h;t[0]=l*d,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=r*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+v,t[5]=r*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*d,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zu,e,Bu)}lookAt(e,t,i){const a=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),qn.crossVectors(i,en),qn.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),qn.crossVectors(i,en)),qn.normalize(),Za.crossVectors(en,qn),a[0]=qn.x,a[4]=Za.x,a[8]=en.x,a[1]=qn.y,a[5]=Za.y,a[9]=en.y,a[2]=qn.z,a[6]=Za.z,a[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],u=i[14],x=i[3],b=i[7],_=i[11],k=i[15],w=a[0],S=a[4],I=a[8],M=a[12],A=a[1],N=a[5],G=a[9],ie=a[13],P=a[2],O=a[6],W=a[10],Z=a[14],$=a[3],Y=a[7],J=a[11],ue=a[15];return s[0]=r*w+o*A+l*P+c*$,s[4]=r*S+o*N+l*O+c*Y,s[8]=r*I+o*G+l*W+c*J,s[12]=r*M+o*ie+l*Z+c*ue,s[1]=d*w+h*A+f*P+p*$,s[5]=d*S+h*N+f*O+p*Y,s[9]=d*I+h*G+f*W+p*J,s[13]=d*M+h*ie+f*Z+p*ue,s[2]=g*w+v*A+m*P+u*$,s[6]=g*S+v*N+m*O+u*Y,s[10]=g*I+v*G+m*W+u*J,s[14]=g*M+v*ie+m*Z+u*ue,s[3]=x*w+b*A+_*P+k*$,s[7]=x*S+b*N+_*O+k*Y,s[11]=x*I+b*G+_*W+k*J,s[15]=x*M+b*ie+_*Z+k*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+s*l*h-a*c*h-s*o*f+i*c*f+a*o*p-i*l*p)+v*(+t*l*p-t*c*f+s*r*f-a*r*p+a*c*d-s*l*d)+m*(+t*c*h-t*o*p-s*r*h+i*r*p+s*o*d-i*c*d)+u*(-a*o*d-t*l*h+t*o*f+a*r*h-i*r*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],u=e[15],x=h*m*c-v*f*c+v*l*p-o*m*p-h*l*u+o*f*u,b=g*f*c-d*m*c-g*l*p+r*m*p+d*l*u-r*f*u,_=d*v*c-g*h*c+g*o*p-r*v*p-d*o*u+r*h*u,k=g*h*l-d*v*l-g*o*f+r*v*f+d*o*m-r*h*m,w=t*x+i*b+a*_+s*k;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=x*S,e[1]=(v*f*s-h*m*s-v*a*p+i*m*p+h*a*u-i*f*u)*S,e[2]=(o*m*s-v*l*s+v*a*c-i*m*c-o*a*u+i*l*u)*S,e[3]=(h*l*s-o*f*s-h*a*c+i*f*c+o*a*p-i*l*p)*S,e[4]=b*S,e[5]=(d*m*s-g*f*s+g*a*p-t*m*p-d*a*u+t*f*u)*S,e[6]=(g*l*s-r*m*s-g*a*c+t*m*c+r*a*u-t*l*u)*S,e[7]=(r*f*s-d*l*s+d*a*c-t*f*c-r*a*p+t*l*p)*S,e[8]=_*S,e[9]=(g*h*s-d*v*s-g*i*p+t*v*p+d*i*u-t*h*u)*S,e[10]=(r*v*s-g*o*s+g*i*c-t*v*c-r*i*u+t*o*u)*S,e[11]=(d*o*s-r*h*s-d*i*c+t*h*c+r*i*p-t*o*p)*S,e[12]=k*S,e[13]=(d*v*a-g*h*a+g*i*f-t*v*f-d*i*m+t*h*m)*S,e[14]=(g*o*a-r*v*a-g*i*l+t*v*l+r*i*m-t*o*m)*S,e[15]=(r*h*a-d*o*a+d*i*l-t*h*l-r*i*f+t*o*f)*S,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,d=r+r,h=o+o,f=s*c,p=s*d,g=s*h,v=r*d,m=r*h,u=o*h,x=l*c,b=l*d,_=l*h,k=i.x,w=i.y,S=i.z;return a[0]=(1-(v+u))*k,a[1]=(p+_)*k,a[2]=(g-b)*k,a[3]=0,a[4]=(p-_)*w,a[5]=(1-(f+u))*w,a[6]=(m+x)*w,a[7]=0,a[8]=(g+b)*S,a[9]=(m-x)*S,a[10]=(1-(f+v))*S,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=Di.set(a[0],a[1],a[2]).length();const r=Di.set(a[4],a[5],a[6]).length(),o=Di.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],un.copy(this);const c=1/s,d=1/r,h=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=d,un.elements[5]*=d,un.elements[6]*=d,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),i.x=s,i.y=r,i.z=o,this}makePerspective(e,t,i,a,s,r,o=In){const l=this.elements,c=2*s/(t-e),d=2*s/(i-a),h=(t+e)/(t-e),f=(i+a)/(i-a);let p,g;if(o===In)p=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===ks)p=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,r,o=In){const l=this.elements,c=1/(t-e),d=1/(i-a),h=1/(r-s),f=(t+e)*c,p=(i+a)*d;let g,v;if(o===In)g=(r+s)*h,v=-2*h;else if(o===ks)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Di=new L,un=new bt,zu=new L(0,0,0),Bu=new L(1,1,1),qn=new L,Za=new L,en=new L,wl=new bt,Sl=new Oa;class Ns{constructor(e=0,t=0,i=0,a=Ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],h=a[2],f=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ns.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hu=0;const El=new L,Ii=new Oa,An=new bt,Qa=new L,ma=new L,Gu=new L,Vu=new Oa,Tl=new L(1,0,0),Al=new L(0,1,0),Ll=new L(0,0,1),Wu={type:"added"},Xu={type:"removed"};class Tt extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new L,t=new Ns,i=new Oa,a=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new bt},normalMatrix:{value:new et}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Tl,e)}rotateY(e){return this.rotateOnAxis(Al,e)}rotateZ(e){return this.rotateOnAxis(Ll,e)}translateOnAxis(e,t){return El.copy(e).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tl,e)}translateY(e){return this.translateOnAxis(Al,e)}translateZ(e){return this.translateOnAxis(Ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qa.copy(e):Qa.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(ma,Qa,this.up):An.lookAt(Qa,ma,this.up),this.quaternion.setFromRotationMatrix(An),a&&(An.extractRotation(a.matrixWorld),Ii.setFromRotationMatrix(An),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,Gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,Vu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++){const o=a[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),h=r(e.shapes),f=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Tt.DEFAULT_UP=new L(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new L,Ln=new L,hr=new L,Cn=new L,Ui=new L,Ni=new L,Cl=new L,pr=new L,fr=new L,mr=new L;let es=!1;class rn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),hn.subVectors(e,t),a.cross(hn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){hn.subVectors(a,t),Ln.subVectors(i,t),hr.subVectors(e,t);const r=hn.dot(hn),o=hn.dot(Ln),l=hn.dot(hr),c=Ln.dot(Ln),d=Ln.dot(hr),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*d)*f,g=(r*d-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,i,a,s,r,o,l){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),this.getInterpolation(e,t,i,a,s,r,o,l)}static getInterpolation(e,t,i,a,s,r,o,l){return this.getBarycoord(e,t,i,a,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(r,Cn.y),l.addScaledVector(o,Cn.z),l)}static isFrontFacing(e,t,i,a){return hn.subVectors(i,t),Ln.subVectors(e,t),hn.cross(Ln).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),hn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),rn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}getInterpolation(e,t,i,a,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let r,o;Ui.subVectors(a,i),Ni.subVectors(s,i),pr.subVectors(e,i);const l=Ui.dot(pr),c=Ni.dot(pr);if(l<=0&&c<=0)return t.copy(i);fr.subVectors(e,a);const d=Ui.dot(fr),h=Ni.dot(fr);if(d>=0&&h<=d)return t.copy(a);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(i).addScaledVector(Ui,r);mr.subVectors(e,s);const p=Ui.dot(mr),g=Ni.dot(mr);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ni,o);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Cl.subVectors(s,a),o=(h-d)/(h-d+(p-g)),t.copy(a).addScaledVector(Cl,o);const u=1/(m+v+f);return r=v*u,o=f*u,t.copy(i).addScaledVector(Ui,r).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ts={h:0,s:0,l:0};function gr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=ct.workingColorSpace){if(e=ku(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=gr(r,s,e+1/3),this.g=gr(r,s,e),this.b=gr(r,s,e-1/3)}return ct.toWorkingColorSpace(this,a),this}setStyle(e,t=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=Vc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ct.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Nt(Bt.r*255,0,255))*65536+Math.round(Nt(Bt.g*255,0,255))*256+Math.round(Nt(Bt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,a=Bt.g,s=Bt.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Dt){ct.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,a=Bt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(ts);const i=nr($n.h,ts.h,t),a=nr($n.s,ts.s,t),s=nr($n.l,ts.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Be;Be.NAMES=Vc;let qu=0;class Hn extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Qi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=jr,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yr&&(i.blendSrc=this.blendSrc),this.blendDst!==jr&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class At extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new L,ns=new xe;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eo&&(e.usage=this.usage),e}}class Wc extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xc extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $u=0;const an=new bt,vr=new Tt,Oi=new L,tn=new Fa,ga=new Fa,Pt=new L;class gt extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fc(e)?Xc:Wc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(tn.min,ga.min),tn.expandByPoint(Pt),Pt.addVectors(tn.max,ga.max),tn.expandByPoint(Pt)):(tn.expandByPoint(ga.min),tn.expandByPoint(ga.max))}tn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Pt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Pt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Pt.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(e,c),Pt.add(Oi)),a=Math.max(a,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,s=t.normal.array,r=t.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let A=0;A<o;A++)c[A]=new L,d[A]=new L;const h=new L,f=new L,p=new L,g=new xe,v=new xe,m=new xe,u=new L,x=new L;function b(A,N,G){h.fromArray(a,A*3),f.fromArray(a,N*3),p.fromArray(a,G*3),g.fromArray(r,A*2),v.fromArray(r,N*2),m.fromArray(r,G*2),f.sub(h),p.sub(h),v.sub(g),m.sub(g);const ie=1/(v.x*m.y-m.x*v.y);isFinite(ie)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(ie),x.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(ie),c[A].add(u),c[N].add(u),c[G].add(u),d[A].add(x),d[N].add(x),d[G].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let A=0,N=_.length;A<N;++A){const G=_[A],ie=G.start,P=G.count;for(let O=ie,W=ie+P;O<W;O+=3)b(i[O+0],i[O+1],i[O+2])}const k=new L,w=new L,S=new L,I=new L;function M(A){S.fromArray(s,A*3),I.copy(S);const N=c[A];k.copy(N),k.sub(S.multiplyScalar(S.dot(N))).normalize(),w.crossVectors(I,N);const ie=w.dot(d[A])<0?-1:1;l[A*4]=k.x,l[A*4+1]=k.y,l[A*4+2]=k.z,l[A*4+3]=ie}for(let A=0,N=_.length;A<N;++A){const G=_[A],ie=G.start,P=G.count;for(let O=ie,W=ie+P;O<W;O+=3)M(i[O+0]),M(i[O+1]),M(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new L,s=new L,r=new L,o=new L,l=new L,c=new L,d=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*d;for(let u=0;u<d;u++)f[g++]=c[p++]}return new cn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new bt,ui=new go,is=new za,kl=new L,Fi=new L,zi=new L,Bi=new L,xr=new L,as=new L,ss=new xe,rs=new xe,os=new xe,Pl=new L,Dl=new L,Il=new L,ls=new L,cs=new L;class C extends Tt{constructor(e=new gt,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){as.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(xr.fromBufferAttribute(h,e),r?as.addScaledVector(xr,d):as.addScaledVector(xr.sub(t),d))}t.add(as)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(s),ui.copy(e.ray).recast(e.near),!(is.containsPoint(ui.origin)===!1&&(ui.intersectSphere(is,kl)===null||ui.origin.distanceToSquared(kl)>(e.far-e.near)**2))&&(Rl.copy(s).invert(),ui.copy(e.ray).applyMatrix4(Rl),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=r[m.materialIndex],x=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,k=b;_<k;_+=3){const w=o.getX(_),S=o.getX(_+1),I=o.getX(_+2);a=ds(this,u,e,i,c,d,h,w,S,I),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const x=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);a=ds(this,r,e,i,c,d,h,x,b,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=r[m.materialIndex],x=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,k=b;_<k;_+=3){const w=_,S=_+1,I=_+2;a=ds(this,u,e,i,c,d,h,w,S,I),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const x=m,b=m+1,_=m+2;a=ds(this,r,e,i,c,d,h,x,b,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Yu(n,e,t,i,a,s,r,o){let l;if(e.side===Gt?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===ii,o),l===null)return null;cs.copy(o),cs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(cs);return c<t.near||c>t.far?null:{distance:c,point:cs.clone(),object:n}}function ds(n,e,t,i,a,s,r,o,l,c){n.getVertexPosition(o,Fi),n.getVertexPosition(l,zi),n.getVertexPosition(c,Bi);const d=Yu(n,e,t,i,Fi,zi,Bi,ls);if(d){a&&(ss.fromBufferAttribute(a,o),rs.fromBufferAttribute(a,l),os.fromBufferAttribute(a,c),d.uv=rn.getInterpolation(ls,Fi,zi,Bi,ss,rs,os,new xe)),s&&(ss.fromBufferAttribute(s,o),rs.fromBufferAttribute(s,l),os.fromBufferAttribute(s,c),d.uv1=rn.getInterpolation(ls,Fi,zi,Bi,ss,rs,os,new xe),d.uv2=d.uv1),r&&(Pl.fromBufferAttribute(r,o),Dl.fromBufferAttribute(r,l),Il.fromBufferAttribute(r,c),d.normal=rn.getInterpolation(ls,Fi,zi,Bi,Pl,Dl,Il,new L),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};rn.getNormal(Fi,zi,Bi,h.normal),d.face=h}return d}class te extends gt{constructor(e=1,t=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,a,r,2),g("x","z","y",1,-1,e,i,-t,a,r,3),g("x","y","z",1,-1,e,t,i,a,s,4),g("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(h,2));function g(v,m,u,x,b,_,k,w,S,I,M){const A=_/S,N=k/I,G=_/2,ie=k/2,P=w/2,O=S+1,W=I+1;let Z=0,$=0;const Y=new L;for(let J=0;J<W;J++){const ue=J*N-ie;for(let pe=0;pe<O;pe++){const X=pe*A-G;Y[v]=X*x,Y[m]=ue*b,Y[u]=P,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[u]=w>0?1:-1,d.push(Y.x,Y.y,Y.z),h.push(pe/S),h.push(1-J/I),Z+=1}}for(let J=0;J<I;J++)for(let ue=0;ue<S;ue++){const pe=f+ue+O*J,X=f+ue+O*(J+1),ae=f+(ue+1)+O*(J+1),be=f+(ue+1)+O*J;l.push(pe,X,be),l.push(X,ae,be),$+=6}o.addGroup(p,$,M),p+=$,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new te(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function aa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=aa(n[t]);for(const a in i)e[a]=i[a]}return e}function ju(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qc(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}const Ku={clone:aa,merge:qt};var Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $c extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=In}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends $c{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Gi=1;class Qu extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kt(Hi,Gi,e,t);a.layers=this.layers,this.add(a);const s=new Kt(Hi,Gi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Hi,Gi,e,t);r.layers=this.layers,this.add(r);const o=new Kt(Hi,Gi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Hi,Gi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Hi,Gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,r),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,a),e.render(t,d),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Yc extends Zt{constructor(e,t,i,a,s,r,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ta,super(e,t,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eh extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(Ta("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_i?Dt:ln),this.texture=new Yc(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new te(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Zn});s.uniforms.tEquirect.value=t;const r=new C(a,s),o=t.minFilter;return t.minFilter===Ia&&(t.minFilter=sn),new Qu(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(s)}}const br=new L,th=new L,nh=new et;class fi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=br.subVectors(i,t).cross(th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(br),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nh.getNormalMatrix(e),a=this.coplanarPoint(br).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new za,us=new L;class vo{constructor(e=new fi,t=new fi,i=new fi,a=new fi,s=new fi,r=new fi){this.planes=[e,t,i,a,s,r]}set(e,t,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In){const i=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],d=a[5],h=a[6],f=a[7],p=a[8],g=a[9],v=a[10],m=a[11],u=a[12],x=a[13],b=a[14],_=a[15];if(i[0].setComponents(l-s,f-c,m-p,_-u).normalize(),i[1].setComponents(l+s,f+c,m+p,_+u).normalize(),i[2].setComponents(l+r,f+d,m+g,_+x).normalize(),i[3].setComponents(l-r,f-d,m-g,_-x).normalize(),i[4].setComponents(l-o,f-h,m-v,_-b).normalize(),t===In)i[5].setComponents(l+o,f+h,m+v,_+b).normalize();else if(t===ks)i[5].setComponents(o,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(us.x=a.normal.x>0?e.max.x:e.min.x,us.y=a.normal.y>0?e.max.y:e.min.y,us.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jc(){let n=null,e=!1,t=null,i=null;function a(s,r){t(s,r),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ih(n,e){const t=e.isWebGL2,i=new WeakMap;function a(c,d){const h=c.array,f=c.usage,p=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,d,h){const f=d.array,p=d._updateRange,g=d.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&g.length===0&&n.bufferSubData(h,0,f),g.length!==0){for(let v=0,m=g.length;v<m;v++){const u=g[v];t?n.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,a(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:r,remove:o,update:l}}class yt extends gt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,h=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let u=0;u<d;u++){const x=u*f-r;for(let b=0;b<c;b++){const _=b*h-s;g.push(_,-x,0),v.push(0,0,1),m.push(b/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const b=x+c*u,_=x+c*(u+1),k=x+1+c*(u+1),w=x+1+c*u;p.push(b,_,w),p.push(_,k,w)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.widthSegments,e.heightSegments)}}var ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ah=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ch=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ap=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const af=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ef=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:ah,alphahash_pars_fragment:sh,alphamap_fragment:rh,alphamap_pars_fragment:oh,alphatest_fragment:lh,alphatest_pars_fragment:ch,aomap_fragment:dh,aomap_pars_fragment:uh,batching_pars_vertex:hh,batching_vertex:ph,begin_vertex:fh,beginnormal_vertex:mh,bsdfs:gh,iridescence_fragment:vh,bumpmap_pars_fragment:xh,clipping_planes_fragment:bh,clipping_planes_pars_fragment:_h,clipping_planes_pars_vertex:yh,clipping_planes_vertex:Mh,color_fragment:wh,color_pars_fragment:Sh,color_pars_vertex:Eh,color_vertex:Th,common:Ah,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Ch,displacementmap_pars_vertex:Rh,displacementmap_vertex:kh,emissivemap_fragment:Ph,emissivemap_pars_fragment:Dh,colorspace_fragment:Ih,colorspace_pars_fragment:Uh,envmap_fragment:Nh,envmap_common_pars_fragment:Oh,envmap_pars_fragment:Fh,envmap_pars_vertex:zh,envmap_physical_pars_fragment:Jh,envmap_vertex:Bh,fog_vertex:Hh,fog_pars_vertex:Gh,fog_fragment:Vh,fog_pars_fragment:Wh,gradientmap_pars_fragment:Xh,lightmap_fragment:qh,lightmap_pars_fragment:$h,lights_lambert_fragment:Yh,lights_lambert_pars_fragment:jh,lights_pars_begin:Kh,lights_toon_fragment:Zh,lights_toon_pars_fragment:Qh,lights_phong_fragment:ep,lights_phong_pars_fragment:tp,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:ap,lights_fragment_maps:sp,lights_fragment_end:rp,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:dp,map_fragment:up,map_pars_fragment:hp,map_particle_fragment:pp,map_particle_pars_fragment:fp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphcolor_vertex:vp,morphnormal_vertex:xp,morphtarget_pars_vertex:bp,morphtarget_vertex:_p,normal_fragment_begin:yp,normal_fragment_maps:Mp,normal_pars_fragment:wp,normal_pars_vertex:Sp,normal_vertex:Ep,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Rp,opaque_fragment:kp,packing:Pp,premultiplied_alpha_fragment:Dp,project_vertex:Ip,dithering_fragment:Up,dithering_pars_fragment:Np,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:Bp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Gp,skinbase_vertex:Vp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:qp,specularmap_fragment:$p,specularmap_pars_fragment:Yp,tonemapping_fragment:jp,tonemapping_pars_fragment:Kp,transmission_fragment:Jp,transmission_pars_fragment:Zp,uv_pars_fragment:Qp,uv_pars_vertex:ef,uv_vertex:tf,worldpos_vertex:nf,background_vert:af,background_frag:sf,backgroundCube_vert:rf,backgroundCube_frag:of,cube_vert:lf,cube_frag:cf,depth_vert:df,depth_frag:uf,distanceRGBA_vert:hf,distanceRGBA_frag:pf,equirect_vert:ff,equirect_frag:mf,linedashed_vert:gf,linedashed_frag:vf,meshbasic_vert:xf,meshbasic_frag:bf,meshlambert_vert:_f,meshlambert_frag:yf,meshmatcap_vert:Mf,meshmatcap_frag:wf,meshnormal_vert:Sf,meshnormal_frag:Ef,meshphong_vert:Tf,meshphong_frag:Af,meshphysical_vert:Lf,meshphysical_frag:Cf,meshtoon_vert:Rf,meshtoon_frag:kf,points_vert:Pf,points_frag:Df,shadow_vert:If,shadow_frag:Uf,sprite_vert:Nf,sprite_frag:Of},fe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},vn={basic:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:qt([fe.points,fe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:qt([fe.common,fe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:qt([fe.sprite,fe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:qt([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:qt([fe.lights,fe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};vn.physical={uniforms:qt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const hs={r:0,b:0,g:0};function Ff(n,e,t,i,a,s,r){const o=new Be(0);let l=s===!0?0:1,c,d,h=null,f=0,p=null;function g(m,u){let x=!1,b=u.isScene===!0?u.background:null;b&&b.isTexture&&(b=(u.backgroundBlurriness>0?t:e).get(b)),b===null?v(o,l):b&&b.isColor&&(v(b,1),x=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Is)?(d===void 0&&(d=new C(new te(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:aa(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(k,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=ct.getTransfer(b.colorSpace)!==vt,(h!==b||f!==b.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,h=b,f=b.version,p=n.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new C(new yt(2,2),new Mi({name:"BackgroundMaterial",uniforms:aa(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ct.getTransfer(b.colorSpace)!==vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,u){m.getRGB(hs,qc(n)),i.buffers.color.setClear(hs.r,hs.g,hs.b,u,r)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function zf(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,o={},l=m(null);let c=l,d=!1;function h(P,O,W,Z,$){let Y=!1;if(r){const J=v(Z,W,O);c!==J&&(c=J,p(c.object)),Y=u(P,Z,W,$),Y&&x(P,Z,W,$)}else{const J=O.wireframe===!0;(c.geometry!==Z.id||c.program!==W.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=W.id,c.wireframe=J,Y=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(Y||d)&&(d=!1,I(P,O,W,Z),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,O,W){const Z=W.wireframe===!0;let $=o[P.id];$===void 0&&($={},o[P.id]=$);let Y=$[O.id];Y===void 0&&(Y={},$[O.id]=Y);let J=Y[Z];return J===void 0&&(J=m(f()),Y[Z]=J),J}function m(P){const O=[],W=[],Z=[];for(let $=0;$<a;$++)O[$]=0,W[$]=0,Z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:Z,object:P,attributes:{},index:null}}function u(P,O,W,Z){const $=c.attributes,Y=O.attributes;let J=0;const ue=W.getAttributes();for(const pe in ue)if(ue[pe].location>=0){const ae=$[pe];let be=Y[pe];if(be===void 0&&(pe==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),pe==="instanceColor"&&P.instanceColor&&(be=P.instanceColor)),ae===void 0||ae.attribute!==be||be&&ae.data!==be.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function x(P,O,W,Z){const $={},Y=O.attributes;let J=0;const ue=W.getAttributes();for(const pe in ue)if(ue[pe].location>=0){let ae=Y[pe];ae===void 0&&(pe==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),pe==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));const be={};be.attribute=ae,ae&&ae.data&&(be.data=ae.data),$[pe]=be,J++}c.attributes=$,c.attributesNum=J,c.index=Z}function b(){const P=c.newAttributes;for(let O=0,W=P.length;O<W;O++)P[O]=0}function _(P){k(P,0)}function k(P,O){const W=c.newAttributes,Z=c.enabledAttributes,$=c.attributeDivisors;W[P]=1,Z[P]===0&&(n.enableVertexAttribArray(P),Z[P]=1),$[P]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),$[P]=O)}function w(){const P=c.newAttributes,O=c.enabledAttributes;for(let W=0,Z=O.length;W<Z;W++)O[W]!==P[W]&&(n.disableVertexAttribArray(W),O[W]=0)}function S(P,O,W,Z,$,Y,J){J===!0?n.vertexAttribIPointer(P,O,W,$,Y):n.vertexAttribPointer(P,O,W,Z,$,Y)}function I(P,O,W,Z){if(i.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const $=Z.attributes,Y=W.getAttributes(),J=O.defaultAttributeValues;for(const ue in Y){const pe=Y[ue];if(pe.location>=0){let X=$[ue];if(X===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){const ae=X.normalized,be=X.itemSize,ke=t.get(X);if(ke===void 0)continue;const Re=ke.buffer,Fe=ke.type,Xe=ke.bytesPerElement,Oe=i.isWebGL2===!0&&(Fe===n.INT||Fe===n.UNSIGNED_INT||X.gpuType===Cc);if(X.isInterleavedBufferAttribute){const tt=X.data,F=tt.stride,Rt=X.offset;if(tt.isInstancedInterleavedBuffer){for(let Ie=0;Ie<pe.locationSize;Ie++)k(pe.location+Ie,tt.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Ie=0;Ie<pe.locationSize;Ie++)_(pe.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let Ie=0;Ie<pe.locationSize;Ie++)S(pe.location+Ie,be/pe.locationSize,Fe,ae,F*Xe,(Rt+be/pe.locationSize*Ie)*Xe,Oe)}else{if(X.isInstancedBufferAttribute){for(let tt=0;tt<pe.locationSize;tt++)k(pe.location+tt,X.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let tt=0;tt<pe.locationSize;tt++)_(pe.location+tt);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let tt=0;tt<pe.locationSize;tt++)S(pe.location+tt,be/pe.locationSize,Fe,ae,be*Xe,be/pe.locationSize*tt*Xe,Oe)}}else if(J!==void 0){const ae=J[ue];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(pe.location,ae);break;case 3:n.vertexAttrib3fv(pe.location,ae);break;case 4:n.vertexAttrib4fv(pe.location,ae);break;default:n.vertexAttrib1fv(pe.location,ae)}}}}w()}function M(){G();for(const P in o){const O=o[P];for(const W in O){const Z=O[W];for(const $ in Z)g(Z[$].object),delete Z[$];delete O[W]}delete o[P]}}function A(P){if(o[P.id]===void 0)return;const O=o[P.id];for(const W in O){const Z=O[W];for(const $ in Z)g(Z[$].object),delete Z[$];delete O[W]}delete o[P.id]}function N(P){for(const O in o){const W=o[O];if(W[P.id]===void 0)continue;const Z=W[P.id];for(const $ in Z)g(Z[$].object),delete Z[$];delete W[P.id]}}function G(){ie(),d=!0,c!==l&&(c=l,p(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:ie,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:_,disableUnusedAttributes:w}}function Bf(n,e,t,i){const a=i.isWebGL2;let s;function r(d){s=d}function o(d,h){n.drawArrays(s,d,h),t.update(h,s,1)}function l(d,h,f){if(f===0)return;let p,g;if(a)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,d,h,f),t.update(h,s,f)}function c(d,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(d[g],h[g]);else{p.multiDrawArraysWEBGL(s,d,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];t.update(g,s,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Hf(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,_=r||e.has("OES_texture_float"),k=b&&_,w=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:k,maxSamples:w}}function Gf(n){const e=this;let t=null,i=0,a=!1,s=!1;const r=new fi,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||a;return a=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,u=n.get(h);if(!a||g===null||g.length===0||s&&!m)s?d(null):c();else{const x=s?0:i,b=x*4;let _=u.clippingState||null;l.value=_,_=d(g,f,b,p);for(let k=0;k!==b;++k)_[k]=t[k];u.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=p+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,_=p;b!==v;++b,_+=4)r.copy(h[b]).applyMatrix4(x,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Vf(n){let e=new WeakMap;function t(r,o){return o===Kr?r.mapping=ta:o===Jr&&(r.mapping=na),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Kr||o===Jr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new eh(l.height/2);return c.fromEquirectangularTexture(n,r),e.set(r,c),r.addEventListener("dispose",a),t(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Kc extends $c{constructor(e=-1,t=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,Ul=[.125,.215,.35,.446,.526,.582],vi=20,_r=new Kc,Nl=new Be;let yr=null,Mr=0,wr=0;const mi=(1+Math.sqrt(5))/2,Vi=1/mi,Ol=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,mi,Vi),new L(0,mi,-Vi),new L(Vi,0,mi),new L(-Vi,0,mi),new L(mi,Vi,0),new L(-mi,Vi,0)];class Fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){yr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yr,Mr,wr),e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ta||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Ua,format:fn,colorSpace:Fn,depthBuffer:!1},a=zl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wf(s)),this._blurMaterial=Xf(s,e,t)}return a}_compileMaterial(e){const t=new C(this._lodPlanes[0],e);this._renderer.compile(t,_r)}_sceneToCubeUV(e,t,i,a){const o=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Nl),d.toneMapping=Qn,d.autoClear=!1;const p=new At({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new C(new te,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Nl),v=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):x===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const b=this._cubeSize;ps(a,x*b,u>2?b:0,b,b),d.setRenderTarget(a),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ta||e.mapping===na;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new C(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ps(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,_r)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=Ol[(a-1)%Ol.length];this._blur(e,a-1,a,s,r)}t.autoClear=i}_blur(e,t,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new C(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const u=[];let x=0;for(let S=0;S<vi;++S){const I=S/v,M=Math.exp(-I*I/2);u.push(M),S===0?x+=M:S<m&&(x+=2*M)}for(let S=0;S<u.length;S++)u[S]=u[S]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const _=this._sizeLods[a],k=3*_*(a>b-Ji?a-b+Ji:0),w=4*(this._cubeSize-_);ps(t,k,w,3*_,2*_),l.setRenderTarget(t),l.render(h,_r)}}function Wf(n){const e=[],t=[],i=[];let a=n;const s=n-Ji+1+Ul.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>n-Ji?l=Ul[r-n+Ji-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,v=3,m=2,u=1,x=new Float32Array(v*g*p),b=new Float32Array(m*g*p),_=new Float32Array(u*g*p);for(let w=0;w<p;w++){const S=w%3*2/3-1,I=w>2?0:-1,M=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];x.set(M,v*g*w),b.set(f,m*g*w);const A=[w,w,w,w,w,w];_.set(A,u*g*w)}const k=new gt;k.setAttribute("position",new cn(x,v)),k.setAttribute("uv",new cn(b,m)),k.setAttribute("faceIndex",new cn(_,u)),e.push(k),a>Ji&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zl(n,e,t){const i=new yi(n,e,t);return i.texture.mapping=Is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Xf(n,e,t){const i=new Float32Array(vi),a=new L(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Bl(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Hl(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Kr||l===Jr,d=l===ta||l===na;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Fl(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||d&&h&&a(h)){t===null&&(t=new Fl(n));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function a(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function $f(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Yf(n,e,t,i){const a={},s=new WeakMap;function r(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}f.removeEventListener("dispose",r),delete a[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,u=v.length;m<u;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let b=0,_=x.length;b<_;b+=3){const k=x[b+0],w=x[b+1],S=x[b+2];f.push(k,w,w,S,S,k)}}else if(g!==void 0){const x=g.array;v=g.version;for(let b=0,_=x.length/3-1;b<_;b+=3){const k=b+0,w=b+1,S=b+2;f.push(k,w,w,S,S,k)}}else return;const m=new(Fc(f)?Xc:Wc)(f,1);m.version=v;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function jf(n,e,t,i){const a=i.isWebGL2;let s;function r(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function d(p,g){n.drawElements(s,g,o,p*l),t.update(g,s,1)}function h(p,g,v){if(v===0)return;let m,u;if(a)m=n,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,g,o,p*l,v),t.update(g,s,v)}function f(p,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<v;u++)this.render(p[u]/l,g[u]);else{m.multiDrawElementsWEBGL(s,g,0,o,p,0,v);let u=0;for(let x=0;x<v;x++)u+=g[x];t.update(u,s,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function Kf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Jf(n,e){return n[0]-e[0]}function Zf(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Qf(n,e,t){const i={},a=new Float32Array(8),s=new WeakMap,r=new xt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(d);if(m===void 0||m.count!==v){let O=function(){ie.dispose(),s.delete(d),d.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const b=d.morphAttributes.position!==void 0,_=d.morphAttributes.normal!==void 0,k=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let M=0;b===!0&&(M=1),_===!0&&(M=2),k===!0&&(M=3);let A=d.attributes.position.count*M,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const G=new Float32Array(A*N*4*v),ie=new Hc(G,A,N,v);ie.type=Jn,ie.needsUpdate=!0;const P=M*4;for(let W=0;W<v;W++){const Z=w[W],$=S[W],Y=I[W],J=A*N*4*W;for(let ue=0;ue<Z.count;ue++){const pe=ue*P;b===!0&&(r.fromBufferAttribute(Z,ue),G[J+pe+0]=r.x,G[J+pe+1]=r.y,G[J+pe+2]=r.z,G[J+pe+3]=0),_===!0&&(r.fromBufferAttribute($,ue),G[J+pe+4]=r.x,G[J+pe+5]=r.y,G[J+pe+6]=r.z,G[J+pe+7]=0),k===!0&&(r.fromBufferAttribute(Y,ue),G[J+pe+8]=r.x,G[J+pe+9]=r.y,G[J+pe+10]=r.z,G[J+pe+11]=Y.itemSize===4?r.w:1)}}m={count:v,texture:ie,size:new xe(A,N)},s.set(d,m),d.addEventListener("dispose",O)}let u=0;for(let b=0;b<f.length;b++)u+=f[b];const x=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let v=i[d.id];if(v===void 0||v.length!==g){v=[];for(let _=0;_<g;_++)v[_]=[_,0];i[d.id]=v}for(let _=0;_<g;_++){const k=v[_];k[0]=_,k[1]=f[_]}v.sort(Zf);for(let _=0;_<8;_++)_<g&&v[_][1]?(o[_][0]=v[_][0],o[_][1]=v[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Jf);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const k=o[_],w=k[0],S=k[1];w!==Number.MAX_SAFE_INTEGER&&S?(m&&d.getAttribute("morphTarget"+_)!==m[w]&&d.setAttribute("morphTarget"+_,m[w]),u&&d.getAttribute("morphNormal"+_)!==u[w]&&d.setAttribute("morphNormal"+_,u[w]),a[_]=S,x+=S):(m&&d.hasAttribute("morphTarget"+_)===!0&&d.deleteAttribute("morphTarget"+_),u&&d.hasAttribute("morphNormal"+_)===!0&&d.deleteAttribute("morphNormal"+_),a[_]=0)}const b=d.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:l}}function e0(n,e,t,i){let a=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(a.get(h)!==c&&(e.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return h}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class Jc extends Zt{constructor(e,t,i,a,s,r,o,l,c,d){if(d=d!==void 0?d:bi,d!==bi&&d!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===bi&&(i=Kn),i===void 0&&d===ia&&(i=xi),super(null,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zc=new Zt,Qc=new Jc(1,1);Qc.compareFunction=Oc;const ed=new Hc,td=new Ou,nd=new Yc,Gl=[],Vl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),ql=new Float32Array(4);function ca(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=Gl[a];if(s===void 0&&(s=new Float32Array(a),Gl[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Os(n,e){let t=Vl[e];t===void 0&&(t=new Int32Array(e),Vl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function t0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function s0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Lt(t,i))return;ql.set(i),n.uniformMatrix2fv(this.addr,!1,ql),Ct(t,i)}}function r0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Lt(t,i))return;Xl.set(i),n.uniformMatrix3fv(this.addr,!1,Xl),Ct(t,i)}}function o0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Lt(t,i))return;Wl.set(i),n.uniformMatrix4fv(this.addr,!1,Wl),Ct(t,i)}}function l0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function c0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function u0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function h0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function m0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function g0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?Qc:Zc;t.setTexture2D(e||s,a)}function v0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||td,a)}function x0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||nd,a)}function b0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||ed,a)}function _0(n){switch(n){case 5126:return t0;case 35664:return n0;case 35665:return i0;case 35666:return a0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return d0;case 35669:case 35673:return u0;case 5125:return h0;case 36294:return p0;case 36295:return f0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return b0}}function y0(n,e){n.uniform1fv(this.addr,e)}function M0(n,e){const t=ca(e,this.size,2);n.uniform2fv(this.addr,t)}function w0(n,e){const t=ca(e,this.size,3);n.uniform3fv(this.addr,t)}function S0(n,e){const t=ca(e,this.size,4);n.uniform4fv(this.addr,t)}function E0(n,e){const t=ca(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function T0(n,e){const t=ca(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function A0(n,e){const t=ca(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function L0(n,e){n.uniform1iv(this.addr,e)}function C0(n,e){n.uniform2iv(this.addr,e)}function R0(n,e){n.uniform3iv(this.addr,e)}function k0(n,e){n.uniform4iv(this.addr,e)}function P0(n,e){n.uniform1uiv(this.addr,e)}function D0(n,e){n.uniform2uiv(this.addr,e)}function I0(n,e){n.uniform3uiv(this.addr,e)}function U0(n,e){n.uniform4uiv(this.addr,e)}function N0(n,e,t){const i=this.cache,a=e.length,s=Os(t,a);Lt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||Zc,s[r])}function O0(n,e,t){const i=this.cache,a=e.length,s=Os(t,a);Lt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||td,s[r])}function F0(n,e,t){const i=this.cache,a=e.length,s=Os(t,a);Lt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||nd,s[r])}function z0(n,e,t){const i=this.cache,a=e.length,s=Os(t,a);Lt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||ed,s[r])}function B0(n){switch(n){case 5126:return y0;case 35664:return M0;case 35665:return w0;case 35666:return S0;case 35674:return E0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return L0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return k0;case 5125:return P0;case 36294:return D0;case 36295:return I0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return z0}}class H0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_0(t.type)}}class G0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B0(t.type)}}class V0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],i)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function $l(n,e){n.seq.push(e),n.map[e.id]=e}function W0(n,e,t){const i=n.name,a=i.length;for(Sr.lastIndex=0;;){const s=Sr.exec(i),r=Sr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){$l(t,c===void 0?new H0(o,n,e):new G0(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new V0(o),$l(t,h)),t=h}}}class Es{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);W0(s,r,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&i.push(r)}return i}}function Yl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const X0=37297;let q0=0;function $0(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}function Y0(n){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n);let i;switch(e===t?i="":e===Rs&&t===Cs?i="LinearDisplayP3ToLinearSRGB":e===Cs&&t===Rs&&(i="LinearSRGBToLinearDisplayP3"),n){case Fn:case Us:return[i,"LinearTransferOETF"];case Dt:case mo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function jl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+$0(n.getShaderSource(e),r)}else return a}function j0(n,e){const t=Y0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function K0(n,e){let t;switch(e){case ou:t="Linear";break;case lu:t="Reinhard";break;case cu:t="OptimizedCineon";break;case Ac:t="ACESFilmic";break;case uu:t="AgX";break;case du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function J0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function Z0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zi).join(`
`)}function Q0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function em(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),r=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Zi(n){return n!==""}function Kl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(n){return n.replace(tm,im)}const nm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function im(n,e){let t=Je[e];if(t===void 0){const i=nm.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ao(t)}const am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(n){return n.replace(am,sm)}function sm(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Ql(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uo?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function om(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ta:case na:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case na:e="ENVMAP_MODE_REFRACTION";break}return e}function cm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ho:e="ENVMAP_BLENDING_MULTIPLY";break;case su:e="ENVMAP_BLENDING_MIX";break;case ru:e="ENVMAP_BLENDING_ADD";break}return e}function dm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function um(n,e,t,i){const a=n.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=rm(t),c=om(t),d=lm(t),h=cm(t),f=dm(t),p=t.isWebGL2?"":J0(t),g=Z0(t),v=Q0(s),m=a.createProgram();let u,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zi).join(`
`),u.length>0&&(u+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zi).join(`
`),x.length>0&&(x+=`
`)):(u=[Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),x=[p,Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Qn?K0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,j0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),r=ao(r),r=Kl(r,t),r=Jl(r,t),o=ao(o),o=Kl(o,t),o=Jl(o,t),r=Zl(r),o=Zl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=b+u+r,k=b+x+o,w=Yl(a,a.VERTEX_SHADER,_),S=Yl(a,a.FRAGMENT_SHADER,k);a.attachShader(m,w),a.attachShader(m,S),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function I(G){if(n.debug.checkShaderErrors){const ie=a.getProgramInfoLog(m).trim(),P=a.getShaderInfoLog(w).trim(),O=a.getShaderInfoLog(S).trim();let W=!0,Z=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,m,w,S);else{const $=jl(a,w,"vertex"),Y=jl(a,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+$+`
`+Y)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(P===""||O==="")&&(Z=!1);Z&&(G.diagnostics={runnable:W,programLog:ie,vertexShader:{log:P,prefix:u},fragmentShader:{log:O,prefix:x}})}a.deleteShader(w),a.deleteShader(S),M=new Es(a,m),A=em(a,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(m,X0)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=S,this}let hm=0;class pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fm(e),t.set(e,i)),i}}class fm{constructor(e){this.id=hm++,this.code=e,this.usedTimes=0}}function mm(n,e,t,i,a,s,r){const o=new Gc,l=new pm,c=[],d=a.isWebGL2,h=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,A,N,G,ie){const P=G.fog,O=ie.geometry,W=M.isMeshStandardMaterial?G.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),$=Z&&Z.mapping===Is?Z.image.height:null,Y=g[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ue=J!==void 0?J.length:0;let pe=0;O.morphAttributes.position!==void 0&&(pe=1),O.morphAttributes.normal!==void 0&&(pe=2),O.morphAttributes.color!==void 0&&(pe=3);let X,ae,be,ke;if(Y){const It=vn[Y];X=It.vertexShader,ae=It.fragmentShader}else X=M.vertexShader,ae=M.fragmentShader,l.update(M),be=l.getVertexShaderID(M),ke=l.getFragmentShaderID(M);const Re=n.getRenderTarget(),Fe=ie.isInstancedMesh===!0,Xe=ie.isBatchedMesh===!0,Oe=!!M.map,tt=!!M.matcap,F=!!Z,Rt=!!M.aoMap,Ie=!!M.lightMap,He=!!M.bumpMap,Le=!!M.normalMap,ht=!!M.displacementMap,qe=!!M.emissiveMap,T=!!M.metalnessMap,y=!!M.roughnessMap,z=M.anisotropy>0,ce=M.clearcoat>0,oe=M.iridescence>0,ee=M.sheen>0,Ce=M.transmission>0,ve=z&&!!M.anisotropyMap,Se=ce&&!!M.clearcoatMap,Ne=ce&&!!M.clearcoatNormalMap,Ye=ce&&!!M.clearcoatRoughnessMap,re=oe&&!!M.iridescenceMap,st=oe&&!!M.iridescenceThicknessMap,Ke=ee&&!!M.sheenColorMap,Ge=ee&&!!M.sheenRoughnessMap,De=!!M.specularMap,Ee=!!M.specularColorMap,D=!!M.specularIntensityMap,ne=Ce&&!!M.transmissionMap,Me=Ce&&!!M.thicknessMap,ge=!!M.gradientMap,Q=!!M.alphaMap,R=M.alphaTest>0,se=!!M.alphaHash,le=!!M.extensions,Te=!!O.attributes.uv1,q=!!O.attributes.uv2,ye=!!O.attributes.uv3;let it=Qn;return M.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(it=n.toneMapping),{isWebGL2:d,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:ae,defines:M.defines,customVertexShaderID:be,customFragmentShaderID:ke,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Xe,instancing:Fe,instancingColor:Fe&&ie.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Fn,map:Oe,matcap:tt,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:$,aoMap:Rt,lightMap:Ie,bumpMap:He,normalMap:Le,displacementMap:f&&ht,emissiveMap:qe,normalMapObjectSpace:Le&&M.normalMapType===wu,normalMapTangentSpace:Le&&M.normalMapType===fo,metalnessMap:T,roughnessMap:y,anisotropy:z,anisotropyMap:ve,clearcoat:ce,clearcoatMap:Se,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ye,iridescence:oe,iridescenceMap:re,iridescenceThicknessMap:st,sheen:ee,sheenColorMap:Ke,sheenRoughnessMap:Ge,specularMap:De,specularColorMap:Ee,specularIntensityMap:D,transmission:Ce,transmissionMap:ne,thicknessMap:Me,gradientMap:ge,opaque:M.transparent===!1&&M.blending===Qi,alphaMap:Q,alphaTest:R,alphaHash:se,combine:M.combine,mapUv:Oe&&v(M.map.channel),aoMapUv:Rt&&v(M.aoMap.channel),lightMapUv:Ie&&v(M.lightMap.channel),bumpMapUv:He&&v(M.bumpMap.channel),normalMapUv:Le&&v(M.normalMap.channel),displacementMapUv:ht&&v(M.displacementMap.channel),emissiveMapUv:qe&&v(M.emissiveMap.channel),metalnessMapUv:T&&v(M.metalnessMap.channel),roughnessMapUv:y&&v(M.roughnessMap.channel),anisotropyMapUv:ve&&v(M.anisotropyMap.channel),clearcoatMapUv:Se&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&v(M.sheenRoughnessMap.channel),specularMapUv:De&&v(M.specularMap.channel),specularColorMapUv:Ee&&v(M.specularColorMap.channel),specularIntensityMapUv:D&&v(M.specularIntensityMap.channel),transmissionMapUv:ne&&v(M.transmissionMap.channel),thicknessMapUv:Me&&v(M.thicknessMap.channel),alphaMapUv:Q&&v(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Le||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:q,vertexUv3s:ye,pointsUvs:ie.isPoints===!0&&!!O.attributes.uv&&(Oe||Q),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ie.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:pe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&ct.getTransfer(M.map.colorSpace)===vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ht,flipSided:M.side===Gt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:le&&M.extensions.derivatives===!0,extensionFragDepth:le&&M.extensions.fragDepth===!0,extensionDrawBuffers:le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)A.push(N),A.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(x(A,M),b(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function x(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function b(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function _(M){const A=g[M.type];let N;if(A){const G=vn[A];N=Ku.clone(G.uniforms)}else N=M.uniforms;return N}function k(M,A){let N;for(let G=0,ie=c.length;G<ie;G++){const P=c[G];if(P.cacheKey===A){N=P,++N.usedTimes;break}}return N===void 0&&(N=new um(n,A,M,s),c.push(N)),N}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function S(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:k,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:I}}function gm(){let n=new WeakMap;function e(s){let r=n.get(s);return r===void 0&&(r={},n.set(s,r)),r}function t(s){n.delete(s)}function i(s,r,o){n.get(s)[r]=o}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function vm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ec(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tc(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function r(h,f,p,g,v,m){let u=n[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=v,u.group=m),e++,u}function o(h,f,p,g,v,m){const u=r(h,f,p,g,v,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):t.push(u)}function l(h,f,p,g,v,m){const u=r(h,f,p,g,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):t.unshift(u)}function c(h,f){t.length>1&&t.sort(h||vm),i.length>1&&i.sort(f||ec),a.length>1&&a.sort(f||ec)}function d(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:d,sort:c}}function xm(){let n=new WeakMap;function e(i,a){const s=n.get(i);let r;return s===void 0?(r=new tc,n.set(i,[r])):a>=s.length?(r=new tc,s.push(r)):r=s[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function bm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function _m(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ym=0;function Mm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wm(n,e){const t=new bm,i=_m(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new L);const s=new L,r=new bt,o=new bt;function l(d,h){let f=0,p=0,g=0;for(let G=0;G<9;G++)a.probe[G].set(0,0,0);let v=0,m=0,u=0,x=0,b=0,_=0,k=0,w=0,S=0,I=0,M=0;d.sort(Mm);const A=h===!0?Math.PI:1;for(let G=0,ie=d.length;G<ie;G++){const P=d[G],O=P.color,W=P.intensity,Z=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*W*A,p+=O.g*W*A,g+=O.b*W*A;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)a.probe[Y].addScaledVector(P.sh.coefficients[Y],W);M++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const J=P.shadow,ue=i.get(P);ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,a.directionalShadow[v]=ue,a.directionalShadowMap[v]=$,a.directionalShadowMatrix[v]=P.shadow.matrix,_++}a.directional[v]=Y,v++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(O).multiplyScalar(W*A),Y.distance=Z,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,a.spot[u]=Y;const J=P.shadow;if(P.map&&(a.spotLightMap[S]=P.map,S++,J.updateMatrices(P),P.castShadow&&I++),a.spotLightMatrix[u]=J.matrix,P.castShadow){const ue=i.get(P);ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,a.spotShadow[u]=ue,a.spotShadowMap[u]=$,w++}u++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(O).multiplyScalar(W),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),a.rectArea[x]=Y,x++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*A),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const J=P.shadow,ue=i.get(P);ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,ue.shadowCameraNear=J.camera.near,ue.shadowCameraFar=J.camera.far,a.pointShadow[m]=ue,a.pointShadowMap[m]=$,a.pointShadowMatrix[m]=P.shadow.matrix,k++}a.point[m]=Y,m++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(W*A),Y.groundColor.copy(P.groundColor).multiplyScalar(W*A),a.hemi[b]=Y,b++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=fe.LTC_FLOAT_1,a.rectAreaLTC2=fe.LTC_FLOAT_2):(a.rectAreaLTC1=fe.LTC_HALF_1,a.rectAreaLTC2=fe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=fe.LTC_FLOAT_1,a.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=fe.LTC_HALF_1,a.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=f,a.ambient[1]=p,a.ambient[2]=g;const N=a.hash;(N.directionalLength!==v||N.pointLength!==m||N.spotLength!==u||N.rectAreaLength!==x||N.hemiLength!==b||N.numDirectionalShadows!==_||N.numPointShadows!==k||N.numSpotShadows!==w||N.numSpotMaps!==S||N.numLightProbes!==M)&&(a.directional.length=v,a.spot.length=u,a.rectArea.length=x,a.point.length=m,a.hemi.length=b,a.directionalShadow.length=_,a.directionalShadowMap.length=_,a.pointShadow.length=k,a.pointShadowMap.length=k,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=_,a.pointShadowMatrix.length=k,a.spotLightMatrix.length=w+S-I,a.spotLightMap.length=S,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=M,N.directionalLength=v,N.pointLength=m,N.spotLength=u,N.rectAreaLength=x,N.hemiLength=b,N.numDirectionalShadows=_,N.numPointShadows=k,N.numSpotShadows=w,N.numSpotMaps=S,N.numLightProbes=M,a.version=ym++)}function c(d,h){let f=0,p=0,g=0,v=0,m=0;const u=h.matrixWorldInverse;for(let x=0,b=d.length;x<b;x++){const _=d[x];if(_.isDirectionalLight){const k=a.directional[f];k.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),k.direction.sub(s),k.direction.transformDirection(u),f++}else if(_.isSpotLight){const k=a.spot[g];k.position.setFromMatrixPosition(_.matrixWorld),k.position.applyMatrix4(u),k.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),k.direction.sub(s),k.direction.transformDirection(u),g++}else if(_.isRectAreaLight){const k=a.rectArea[v];k.position.setFromMatrixPosition(_.matrixWorld),k.position.applyMatrix4(u),o.identity(),r.copy(_.matrixWorld),r.premultiply(u),o.extractRotation(r),k.halfWidth.set(_.width*.5,0,0),k.halfHeight.set(0,_.height*.5,0),k.halfWidth.applyMatrix4(o),k.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const k=a.point[p];k.position.setFromMatrixPosition(_.matrixWorld),k.position.applyMatrix4(u),p++}else if(_.isHemisphereLight){const k=a.hemi[m];k.direction.setFromMatrixPosition(_.matrixWorld),k.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:a}}function nc(n,e){const t=new wm(n,e),i=[],a=[];function s(){i.length=0,a.length=0}function r(h){i.push(h)}function o(h){a.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Sm(n,e){let t=new WeakMap;function i(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new nc(n,e),t.set(s,[l])):r>=o.length?(l=new nc(n,e),o.push(l)):l=o[r],l}function a(){t=new WeakMap}return{get:i,dispose:a}}class Em extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tm extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cm(n,e,t){let i=new vo;const a=new xe,s=new xe,r=new xt,o=new Em({depthPacking:Mu}),l=new Tm,c={},d=t.maxTextureSize,h={[ii]:Gt,[Gt]:ii,[Ht]:Ht},f=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Am,fragmentShader:Lm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new gt;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new C(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let u=this.type;this.render=function(w,S,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),A=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Zn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ie=u!==Rn&&this.type===Rn,P=u===Rn&&this.type!==Rn;for(let O=0,W=w.length;O<W;O++){const Z=w[O],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const Y=$.getFrameExtents();if(a.multiply(Y),s.copy($.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/Y.x),a.x=s.x*Y.x,$.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/Y.y),a.y=s.y*Y.y,$.mapSize.y=s.y)),$.map===null||ie===!0||P===!0){const ue=this.type!==Rn?{minFilter:$t,magFilter:$t}:{};$.map!==null&&$.map.dispose(),$.map=new yi(a.x,a.y,ue),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const J=$.getViewportCount();for(let ue=0;ue<J;ue++){const pe=$.getViewport(ue);r.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),G.viewport(r),$.updateMatrices(Z,ue),i=$.getFrustum(),_(S,I,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===Rn&&x($,I),$.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(M,A,N)};function x(w,S){const I=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yi(a.x,a.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(S,null,I,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(S,null,I,p,v,null)}function b(w,S,I,M){let A=null;const N=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)A=N;else if(A=I.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const G=A.uuid,ie=S.uuid;let P=c[G];P===void 0&&(P={},c[G]=P);let O=P[ie];O===void 0&&(O=A.clone(),P[ie]=O,S.addEventListener("dispose",k)),A=O}if(A.visible=S.visible,A.wireframe=S.wireframe,M===Rn?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:h[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=n.properties.get(A);G.light=I}return A}function _(w,S,I,M,A){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===Rn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const ie=e.update(w),P=w.material;if(Array.isArray(P)){const O=ie.groups;for(let W=0,Z=O.length;W<Z;W++){const $=O[W],Y=P[$.materialIndex];if(Y&&Y.visible){const J=b(w,Y,M,A);w.onBeforeShadow(n,w,S,I,ie,J,$),n.renderBufferDirect(I,null,ie,J,w,$),w.onAfterShadow(n,w,S,I,ie,J,$)}}}else if(P.visible){const O=b(w,P,M,A);w.onBeforeShadow(n,w,S,I,ie,O,null),n.renderBufferDirect(I,null,ie,O,w,null),w.onAfterShadow(n,w,S,I,ie,O,null)}}const G=w.children;for(let ie=0,P=G.length;ie<P;ie++)_(G[ie],S,I,M,A)}function k(w){w.target.removeEventListener("dispose",k);for(const I in c){const M=c[I],A=w.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function Rm(n,e,t){const i=t.isWebGL2;function a(){let R=!1;const se=new xt;let le=null;const Te=new xt(0,0,0,0);return{setMask:function(q){le!==q&&!R&&(n.colorMask(q,q,q,q),le=q)},setLocked:function(q){R=q},setClear:function(q,ye,it,pt,It){It===!0&&(q*=pt,ye*=pt,it*=pt),se.set(q,ye,it,pt),Te.equals(se)===!1&&(n.clearColor(q,ye,it,pt),Te.copy(se))},reset:function(){R=!1,le=null,Te.set(-1,0,0,0)}}}function s(){let R=!1,se=null,le=null,Te=null;return{setTest:function(q){q?Xe(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(q){se!==q&&!R&&(n.depthMask(q),se=q)},setFunc:function(q){if(le!==q){switch(q){case Zd:n.depthFunc(n.NEVER);break;case Qd:n.depthFunc(n.ALWAYS);break;case eu:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case tu:n.depthFunc(n.EQUAL);break;case nu:n.depthFunc(n.GEQUAL);break;case iu:n.depthFunc(n.GREATER);break;case au:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=q}},setLocked:function(q){R=q},setClear:function(q){Te!==q&&(n.clearDepth(q),Te=q)},reset:function(){R=!1,se=null,le=null,Te=null}}}function r(){let R=!1,se=null,le=null,Te=null,q=null,ye=null,it=null,pt=null,It=null;return{setTest:function(ft){R||(ft?Xe(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(ft){se!==ft&&!R&&(n.stencilMask(ft),se=ft)},setFunc:function(ft,Vt,gn){(le!==ft||Te!==Vt||q!==gn)&&(n.stencilFunc(ft,Vt,gn),le=ft,Te=Vt,q=gn)},setOp:function(ft,Vt,gn){(ye!==ft||it!==Vt||pt!==gn)&&(n.stencilOp(ft,Vt,gn),ye=ft,it=Vt,pt=gn)},setLocked:function(ft){R=ft},setClear:function(ft){It!==ft&&(n.clearStencil(ft),It=ft)},reset:function(){R=!1,se=null,le=null,Te=null,q=null,ye=null,it=null,pt=null,It=null}}}const o=new a,l=new s,c=new r,d=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,v=[],m=null,u=!1,x=null,b=null,_=null,k=null,w=null,S=null,I=null,M=new Be(0,0,0),A=0,N=!1,G=null,ie=null,P=null,O=null,W=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=Y>=1):J.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=Y>=2);let ue=null,pe={};const X=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),be=new xt().fromArray(X),ke=new xt().fromArray(ae);function Re(R,se,le,Te){const q=new Uint8Array(4),ye=n.createTexture();n.bindTexture(R,ye),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<le;it++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,q):n.texImage2D(se+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,q);return ye}const Fe={};Fe[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Fe[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Fe[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Fe[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Xe(n.DEPTH_TEST),l.setFunc(As),qe(!1),T(Fo),Xe(n.CULL_FACE),Le(Zn);function Xe(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function Oe(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function tt(R,se){return p[R]!==se?(n.bindFramebuffer(R,se),p[R]=se,i&&(R===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=se),R===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function F(R,se){let le=v,Te=!1;if(R)if(le=g.get(se),le===void 0&&(le=[],g.set(se,le)),R.isWebGLMultipleRenderTargets){const q=R.texture;if(le.length!==q.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,it=q.length;ye<it;ye++)le[ye]=n.COLOR_ATTACHMENT0+ye;le.length=q.length,Te=!0}}else le[0]!==n.COLOR_ATTACHMENT0&&(le[0]=n.COLOR_ATTACHMENT0,Te=!0);else le[0]!==n.BACK&&(le[0]=n.BACK,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Rt(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const Ie={[gi]:n.FUNC_ADD,[Od]:n.FUNC_SUBTRACT,[Fd]:n.FUNC_REVERSE_SUBTRACT};if(i)Ie[Go]=n.MIN,Ie[Vo]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ie[Go]=R.MIN_EXT,Ie[Vo]=R.MAX_EXT)}const He={[zd]:n.ZERO,[Bd]:n.ONE,[Hd]:n.SRC_COLOR,[Yr]:n.SRC_ALPHA,[$d]:n.SRC_ALPHA_SATURATE,[Xd]:n.DST_COLOR,[Vd]:n.DST_ALPHA,[Gd]:n.ONE_MINUS_SRC_COLOR,[jr]:n.ONE_MINUS_SRC_ALPHA,[qd]:n.ONE_MINUS_DST_COLOR,[Wd]:n.ONE_MINUS_DST_ALPHA,[Yd]:n.CONSTANT_COLOR,[jd]:n.ONE_MINUS_CONSTANT_COLOR,[Kd]:n.CONSTANT_ALPHA,[Jd]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(R,se,le,Te,q,ye,it,pt,It,ft){if(R===Zn){u===!0&&(Oe(n.BLEND),u=!1);return}if(u===!1&&(Xe(n.BLEND),u=!0),R!==Nd){if(R!==x||ft!==N){if((b!==gi||w!==gi)&&(n.blendEquation(n.FUNC_ADD),b=gi,w=gi),ft)switch(R){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zo:n.blendFunc(n.ONE,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ho:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ho:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}_=null,k=null,S=null,I=null,M.set(0,0,0),A=0,x=R,N=ft}return}q=q||se,ye=ye||le,it=it||Te,(se!==b||q!==w)&&(n.blendEquationSeparate(Ie[se],Ie[q]),b=se,w=q),(le!==_||Te!==k||ye!==S||it!==I)&&(n.blendFuncSeparate(He[le],He[Te],He[ye],He[it]),_=le,k=Te,S=ye,I=it),(pt.equals(M)===!1||It!==A)&&(n.blendColor(pt.r,pt.g,pt.b,It),M.copy(pt),A=It),x=R,N=!1}function ht(R,se){R.side===Ht?Oe(n.CULL_FACE):Xe(n.CULL_FACE);let le=R.side===Gt;se&&(le=!le),qe(le),R.blending===Qi&&R.transparent===!1?Le(Zn):Le(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Te=R.stencilWrite;c.setTest(Te),Te&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),z(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Xe(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(R){G!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),G=R)}function T(R){R!==Id?(Xe(n.CULL_FACE),R!==ie&&(R===Fo?n.cullFace(n.BACK):R===Ud?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),ie=R}function y(R){R!==P&&($&&n.lineWidth(R),P=R)}function z(R,se,le){R?(Xe(n.POLYGON_OFFSET_FILL),(O!==se||W!==le)&&(n.polygonOffset(se,le),O=se,W=le)):Oe(n.POLYGON_OFFSET_FILL)}function ce(R){R?Xe(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function oe(R){R===void 0&&(R=n.TEXTURE0+Z-1),ue!==R&&(n.activeTexture(R),ue=R)}function ee(R,se,le){le===void 0&&(ue===null?le=n.TEXTURE0+Z-1:le=ue);let Te=pe[le];Te===void 0&&(Te={type:void 0,texture:void 0},pe[le]=Te),(Te.type!==R||Te.texture!==se)&&(ue!==le&&(n.activeTexture(le),ue=le),n.bindTexture(R,se||Fe[R]),Te.type=R,Te.texture=se)}function Ce(){const R=pe[ue];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ve(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ye(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function st(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ge(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function D(R){be.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),be.copy(R))}function ne(R){ke.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ke.copy(R))}function Me(R,se){let le=h.get(se);le===void 0&&(le=new WeakMap,h.set(se,le));let Te=le.get(R);Te===void 0&&(Te=n.getUniformBlockIndex(se,R.name),le.set(R,Te))}function ge(R,se){const Te=h.get(se).get(R);d.get(se)!==Te&&(n.uniformBlockBinding(se,Te,R.__bindingPointIndex),d.set(se,Te))}function Q(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ue=null,pe={},p={},g=new WeakMap,v=[],m=null,u=!1,x=null,b=null,_=null,k=null,w=null,S=null,I=null,M=new Be(0,0,0),A=0,N=!1,G=null,ie=null,P=null,O=null,W=null,be.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Xe,disable:Oe,bindFramebuffer:tt,drawBuffers:F,useProgram:Rt,setBlending:Le,setMaterial:ht,setFlipSided:qe,setCullFace:T,setLineWidth:y,setPolygonOffset:z,setScissorTest:ce,activeTexture:oe,bindTexture:ee,unbindTexture:Ce,compressedTexImage2D:ve,compressedTexImage3D:Se,texImage2D:De,texImage3D:Ee,updateUBOMapping:Me,uniformBlockBinding:ge,texStorage2D:Ke,texStorage3D:Ge,texSubImage2D:Ne,texSubImage3D:Ye,compressedTexSubImage2D:re,compressedTexSubImage3D:st,scissor:D,viewport:ne,reset:Q}}function km(n,e,t,i,a,s,r){const o=a.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return p?new OffscreenCanvas(T,y):Ps("canvas")}function v(T,y,z,ce){let oe=1;if((T.width>ce||T.height>ce)&&(oe=ce/Math.max(T.width,T.height)),oe<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ee=y?io:Math.floor,Ce=ee(oe*T.width),ve=ee(oe*T.height);h===void 0&&(h=g(Ce,ve));const Se=z?g(Ce,ve):h;return Se.width=Ce,Se.height=ve,Se.getContext("2d").drawImage(T,0,0,Ce,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Ce+"x"+ve+")."),Se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return xl(T.width)&&xl(T.height)}function u(T){return o?!1:T.wrapS!==pn||T.wrapT!==pn||T.minFilter!==$t&&T.minFilter!==sn}function x(T,y){return T.generateMipmaps&&y&&T.minFilter!==$t&&T.minFilter!==sn}function b(T){n.generateMipmap(T)}function _(T,y,z,ce,oe=!1){if(o===!1)return y;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=y;if(y===n.RED&&(z===n.FLOAT&&(ee=n.R32F),z===n.HALF_FLOAT&&(ee=n.R16F),z===n.UNSIGNED_BYTE&&(ee=n.R8)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.R8UI),z===n.UNSIGNED_SHORT&&(ee=n.R16UI),z===n.UNSIGNED_INT&&(ee=n.R32UI),z===n.BYTE&&(ee=n.R8I),z===n.SHORT&&(ee=n.R16I),z===n.INT&&(ee=n.R32I)),y===n.RG&&(z===n.FLOAT&&(ee=n.RG32F),z===n.HALF_FLOAT&&(ee=n.RG16F),z===n.UNSIGNED_BYTE&&(ee=n.RG8)),y===n.RGBA){const Ce=oe?Ls:ct.getTransfer(ce);z===n.FLOAT&&(ee=n.RGBA32F),z===n.HALF_FLOAT&&(ee=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ee=Ce===vt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function k(T,y,z){return x(T,z)===!0||T.isFramebufferTexture&&T.minFilter!==$t&&T.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function w(T){return T===$t||T===Wo||T===js?n.NEAREST:n.LINEAR}function S(T){const y=T.target;y.removeEventListener("dispose",S),M(y),y.isVideoTexture&&d.delete(y)}function I(T){const y=T.target;y.removeEventListener("dispose",I),N(y)}function M(T){const y=i.get(T);if(y.__webglInit===void 0)return;const z=T.source,ce=f.get(z);if(ce){const oe=ce[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&A(T),Object.keys(ce).length===0&&f.delete(z)}i.remove(T)}function A(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const z=T.source,ce=f.get(z);delete ce[y.__cacheKey],r.memory.textures--}function N(T){const y=T.texture,z=i.get(T),ce=i.get(y);if(ce.__webglTexture!==void 0&&(n.deleteTexture(ce.__webglTexture),r.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(z.__webglFramebuffer[oe]))for(let ee=0;ee<z.__webglFramebuffer[oe].length;ee++)n.deleteFramebuffer(z.__webglFramebuffer[oe][ee]);else n.deleteFramebuffer(z.__webglFramebuffer[oe]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[oe])}else{if(Array.isArray(z.__webglFramebuffer))for(let oe=0;oe<z.__webglFramebuffer.length;oe++)n.deleteFramebuffer(z.__webglFramebuffer[oe]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let oe=0;oe<z.__webglColorRenderbuffer.length;oe++)z.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[oe]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let oe=0,ee=y.length;oe<ee;oe++){const Ce=i.get(y[oe]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),r.memory.textures--),i.remove(y[oe])}i.remove(y),i.remove(T)}let G=0;function ie(){G=0}function P(){const T=G;return T>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),G+=1,T}function O(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function W(T,y){const z=i.get(T);if(T.isVideoTexture&&ht(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const ce=T.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(z,T,y);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function Z(T,y){const z=i.get(T);if(T.version>0&&z.__version!==T.version){be(z,T,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function $(T,y){const z=i.get(T);if(T.version>0&&z.__version!==T.version){be(z,T,y);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function Y(T,y){const z=i.get(T);if(T.version>0&&z.__version!==T.version){ke(z,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}const J={[Zr]:n.REPEAT,[pn]:n.CLAMP_TO_EDGE,[Qr]:n.MIRRORED_REPEAT},ue={[$t]:n.NEAREST,[Wo]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[hu]:n.LINEAR_MIPMAP_NEAREST,[Ia]:n.LINEAR_MIPMAP_LINEAR},pe={[Su]:n.NEVER,[Ru]:n.ALWAYS,[Eu]:n.LESS,[Oc]:n.LEQUAL,[Tu]:n.EQUAL,[Cu]:n.GEQUAL,[Au]:n.GREATER,[Lu]:n.NOTEQUAL};function X(T,y,z){if(z?(n.texParameteri(T,n.TEXTURE_WRAP_S,J[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,J[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,J[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ue[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ue[y.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==pn||y.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,w(y.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,w(y.minFilter)),y.minFilter!==$t&&y.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===$t||y.minFilter!==js&&y.minFilter!==Ia||y.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Ua&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(T,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function ae(T,y){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",S));const ce=y.source;let oe=f.get(ce);oe===void 0&&(oe={},f.set(ce,oe));const ee=O(y);if(ee!==T.__cacheKey){oe[ee]===void 0&&(oe[ee]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,z=!0),oe[ee].usedTimes++;const Ce=oe[T.__cacheKey];Ce!==void 0&&(oe[T.__cacheKey].usedTimes--,Ce.usedTimes===0&&A(y)),T.__cacheKey=ee,T.__webglTexture=oe[ee].texture}return z}function be(T,y,z){let ce=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ce=n.TEXTURE_3D);const oe=ae(T,y),ee=y.source;t.bindTexture(ce,T.__webglTexture,n.TEXTURE0+z);const Ce=i.get(ee);if(ee.version!==Ce.__version||oe===!0){t.activeTexture(n.TEXTURE0+z);const ve=ct.getPrimaries(ct.workingColorSpace),Se=y.colorSpace===ln?null:ct.getPrimaries(y.colorSpace),Ne=y.colorSpace===ln||ve===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Ye=u(y)&&m(y.image)===!1;let re=v(y.image,Ye,!1,a.maxTextureSize);re=qe(y,re);const st=m(re)||o,Ke=s.convert(y.format,y.colorSpace);let Ge=s.convert(y.type),De=_(y.internalFormat,Ke,Ge,y.colorSpace,y.isVideoTexture);X(ce,y,st);let Ee;const D=y.mipmaps,ne=o&&y.isVideoTexture!==!0&&De!==Uc,Me=Ce.__version===void 0||oe===!0,ge=k(y,re,st);if(y.isDepthTexture)De=n.DEPTH_COMPONENT,o?y.type===Jn?De=n.DEPTH_COMPONENT32F:y.type===Kn?De=n.DEPTH_COMPONENT24:y.type===xi?De=n.DEPTH24_STENCIL8:De=n.DEPTH_COMPONENT16:y.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===bi&&De===n.DEPTH_COMPONENT&&y.type!==po&&y.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Kn,Ge=s.convert(y.type)),y.format===ia&&De===n.DEPTH_COMPONENT&&(De=n.DEPTH_STENCIL,y.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=xi,Ge=s.convert(y.type))),Me&&(ne?t.texStorage2D(n.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,De,re.width,re.height,0,Ke,Ge,null));else if(y.isDataTexture)if(D.length>0&&st){ne&&Me&&t.texStorage2D(n.TEXTURE_2D,ge,De,D[0].width,D[0].height);for(let Q=0,R=D.length;Q<R;Q++)Ee=D[Q],ne?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ee.width,Ee.height,Ke,Ge,Ee.data):t.texImage2D(n.TEXTURE_2D,Q,De,Ee.width,Ee.height,0,Ke,Ge,Ee.data);y.generateMipmaps=!1}else ne?(Me&&t.texStorage2D(n.TEXTURE_2D,ge,De,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,Ke,Ge,re.data)):t.texImage2D(n.TEXTURE_2D,0,De,re.width,re.height,0,Ke,Ge,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ne&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,De,D[0].width,D[0].height,re.depth);for(let Q=0,R=D.length;Q<R;Q++)Ee=D[Q],y.format!==fn?Ke!==null?ne?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Ee.width,Ee.height,re.depth,Ke,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,De,Ee.width,Ee.height,re.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Ee.width,Ee.height,re.depth,Ke,Ge,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,De,Ee.width,Ee.height,re.depth,0,Ke,Ge,Ee.data)}else{ne&&Me&&t.texStorage2D(n.TEXTURE_2D,ge,De,D[0].width,D[0].height);for(let Q=0,R=D.length;Q<R;Q++)Ee=D[Q],y.format!==fn?Ke!==null?ne?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Ee.width,Ee.height,Ke,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ee.width,Ee.height,Ke,Ge,Ee.data):t.texImage2D(n.TEXTURE_2D,Q,De,Ee.width,Ee.height,0,Ke,Ge,Ee.data)}else if(y.isDataArrayTexture)ne?(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,De,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ke,Ge,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,Ke,Ge,re.data);else if(y.isData3DTexture)ne?(Me&&t.texStorage3D(n.TEXTURE_3D,ge,De,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ke,Ge,re.data)):t.texImage3D(n.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,Ke,Ge,re.data);else if(y.isFramebufferTexture){if(Me)if(ne)t.texStorage2D(n.TEXTURE_2D,ge,De,re.width,re.height);else{let Q=re.width,R=re.height;for(let se=0;se<ge;se++)t.texImage2D(n.TEXTURE_2D,se,De,Q,R,0,Ke,Ge,null),Q>>=1,R>>=1}}else if(D.length>0&&st){ne&&Me&&t.texStorage2D(n.TEXTURE_2D,ge,De,D[0].width,D[0].height);for(let Q=0,R=D.length;Q<R;Q++)Ee=D[Q],ne?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ke,Ge,Ee):t.texImage2D(n.TEXTURE_2D,Q,De,Ke,Ge,Ee);y.generateMipmaps=!1}else ne?(Me&&t.texStorage2D(n.TEXTURE_2D,ge,De,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ke,Ge,re)):t.texImage2D(n.TEXTURE_2D,0,De,Ke,Ge,re);x(y,st)&&b(ce),Ce.__version=ee.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ke(T,y,z){if(y.image.length!==6)return;const ce=ae(T,y),oe=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);const ee=i.get(oe);if(oe.version!==ee.__version||ce===!0){t.activeTexture(n.TEXTURE0+z);const Ce=ct.getPrimaries(ct.workingColorSpace),ve=y.colorSpace===ln?null:ct.getPrimaries(y.colorSpace),Se=y.colorSpace===ln||Ce===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ne=y.isCompressedTexture||y.image[0].isCompressedTexture,Ye=y.image[0]&&y.image[0].isDataTexture,re=[];for(let Q=0;Q<6;Q++)!Ne&&!Ye?re[Q]=v(y.image[Q],!1,!0,a.maxCubemapSize):re[Q]=Ye?y.image[Q].image:y.image[Q],re[Q]=qe(y,re[Q]);const st=re[0],Ke=m(st)||o,Ge=s.convert(y.format,y.colorSpace),De=s.convert(y.type),Ee=_(y.internalFormat,Ge,De,y.colorSpace),D=o&&y.isVideoTexture!==!0,ne=ee.__version===void 0||ce===!0;let Me=k(y,st,Ke);X(n.TEXTURE_CUBE_MAP,y,Ke);let ge;if(Ne){D&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ee,st.width,st.height);for(let Q=0;Q<6;Q++){ge=re[Q].mipmaps;for(let R=0;R<ge.length;R++){const se=ge[R];y.format!==fn?Ge!==null?D?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,0,0,se.width,se.height,Ge,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,Ee,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,0,0,se.width,se.height,Ge,De,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,Ee,se.width,se.height,0,Ge,De,se.data)}}}else{ge=y.mipmaps,D&&ne&&(ge.length>0&&Me++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ee,re[0].width,re[0].height));for(let Q=0;Q<6;Q++)if(Ye){D?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,re[Q].width,re[Q].height,Ge,De,re[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ee,re[Q].width,re[Q].height,0,Ge,De,re[Q].data);for(let R=0;R<ge.length;R++){const le=ge[R].image[Q].image;D?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,0,0,le.width,le.height,Ge,De,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,Ee,le.width,le.height,0,Ge,De,le.data)}}else{D?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ge,De,re[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ee,Ge,De,re[Q]);for(let R=0;R<ge.length;R++){const se=ge[R];D?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,0,0,Ge,De,se.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,Ee,Ge,De,se.image[Q])}}}x(y,Ke)&&b(n.TEXTURE_CUBE_MAP),ee.__version=oe.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Re(T,y,z,ce,oe,ee){const Ce=s.convert(z.format,z.colorSpace),ve=s.convert(z.type),Se=_(z.internalFormat,Ce,ve,z.colorSpace);if(!i.get(y).__hasExternalTextures){const Ye=Math.max(1,y.width>>ee),re=Math.max(1,y.height>>ee);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ee,Se,Ye,re,y.depth,0,Ce,ve,null):t.texImage2D(oe,ee,Se,Ye,re,0,Ce,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Le(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,oe,i.get(z).__webglTexture,0,He(y)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,oe,i.get(z).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(T,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer&&!y.stencilBuffer){let ce=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||Le(y)){const oe=y.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Jn?ce=n.DEPTH_COMPONENT32F:oe.type===Kn&&(ce=n.DEPTH_COMPONENT24));const ee=He(y);Le(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,ce,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,ce,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,ce,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(y.depthBuffer&&y.stencilBuffer){const ce=He(y);z&&Le(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,y.width,y.height):Le(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const ce=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let oe=0;oe<ce.length;oe++){const ee=ce[oe],Ce=s.convert(ee.format,ee.colorSpace),ve=s.convert(ee.type),Se=_(ee.internalFormat,Ce,ve,ee.colorSpace),Ne=He(y);z&&Le(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Se,y.width,y.height):Le(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Se,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const ce=i.get(y.depthTexture).__webglTexture,oe=He(y);if(y.depthTexture.format===bi)Le(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(y.depthTexture.format===ia)Le(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Oe(T){const y=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Xe(y.__webglFramebuffer,T)}else if(z){y.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ce]),y.__webglDepthbuffer[ce]=n.createRenderbuffer(),Fe(y.__webglDepthbuffer[ce],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Fe(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(T,y,z){const ce=i.get(T);y!==void 0&&Re(ce.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Oe(T)}function F(T){const y=T.texture,z=i.get(T),ce=i.get(y);T.addEventListener("dispose",I),T.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=y.version,r.memory.textures++);const oe=T.isWebGLCubeRenderTarget===!0,ee=T.isWebGLMultipleRenderTargets===!0,Ce=m(T)||o;if(oe){z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(o&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ve]=[];for(let Se=0;Se<y.mipmaps.length;Se++)z.__webglFramebuffer[ve][Se]=n.createFramebuffer()}else z.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ve=0;ve<y.mipmaps.length;ve++)z.__webglFramebuffer[ve]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ee)if(a.drawBuffers){const ve=T.texture;for(let Se=0,Ne=ve.length;Se<Ne;Se++){const Ye=i.get(ve[Se]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Le(T)===!1){const ve=ee?y:[y];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Se=0;Se<ve.length;Se++){const Ne=ve[Se];z.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Se]);const Ye=s.convert(Ne.format,Ne.colorSpace),re=s.convert(Ne.type),st=_(Ne.internalFormat,Ye,re,Ne.colorSpace,T.isXRRenderTarget===!0),Ke=He(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,st,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,z.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),X(n.TEXTURE_CUBE_MAP,y,Ce);for(let ve=0;ve<6;ve++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)Re(z.__webglFramebuffer[ve][Se],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Se);else Re(z.__webglFramebuffer[ve],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(y,Ce)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const ve=T.texture;for(let Se=0,Ne=ve.length;Se<Ne;Se++){const Ye=ve[Se],re=i.get(Ye);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),X(n.TEXTURE_2D,Ye,Ce),Re(z.__webglFramebuffer,T,Ye,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),x(Ye,Ce)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ve=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,ce.__webglTexture),X(ve,y,Ce),o&&y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)Re(z.__webglFramebuffer[Se],T,y,n.COLOR_ATTACHMENT0,ve,Se);else Re(z.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,ve,0);x(y,Ce)&&b(ve),t.unbindTexture()}T.depthBuffer&&Oe(T)}function Rt(T){const y=m(T)||o,z=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ce=0,oe=z.length;ce<oe;ce++){const ee=z[ce];if(x(ee,y)){const Ce=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(ee).__webglTexture;t.bindTexture(Ce,ve),b(Ce),t.unbindTexture()}}}function Ie(T){if(o&&T.samples>0&&Le(T)===!1){const y=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],z=T.width,ce=T.height;let oe=n.COLOR_BUFFER_BIT;const ee=[],Ce=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(T),Se=T.isWebGLMultipleRenderTargets===!0;if(Se)for(let Ne=0;Ne<y.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ne=0;Ne<y.length;Ne++){ee.push(n.COLOR_ATTACHMENT0+Ne),T.depthBuffer&&ee.push(Ce);const Ye=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ye===!1&&(T.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),Se&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ne]),Ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ce]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ce])),Se){const re=i.get(y[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,z,ce,0,0,z,ce,oe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let Ne=0;Ne<y.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ne]);const Ye=i.get(y[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function He(T){return Math.min(a.maxSamples,T.samples)}function Le(T){const y=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ht(T){const y=r.render.frame;d.get(T)!==y&&(d.set(T,y),T.update())}function qe(T,y){const z=T.colorSpace,ce=T.format,oe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===to||z!==Fn&&z!==ln&&(ct.getTransfer(z)===vt?o===!1?e.has("EXT_sRGB")===!0&&ce===fn?(T.format=to,T.minFilter=sn,T.generateMipmaps=!1):y=zc.sRGBToLinear(y):(ce!==fn||oe!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}this.allocateTextureUnit=P,this.resetTextureUnits=ie,this.setTexture2D=W,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=tt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Le}function Pm(n,e,t){const i=t.isWebGL2;function a(s,r=ln){let o;const l=ct.getTransfer(r);if(s===ei)return n.UNSIGNED_BYTE;if(s===Rc)return n.UNSIGNED_SHORT_4_4_4_4;if(s===kc)return n.UNSIGNED_SHORT_5_5_5_1;if(s===pu)return n.BYTE;if(s===fu)return n.SHORT;if(s===po)return n.UNSIGNED_SHORT;if(s===Cc)return n.INT;if(s===Kn)return n.UNSIGNED_INT;if(s===Jn)return n.FLOAT;if(s===Ua)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===mu)return n.ALPHA;if(s===fn)return n.RGBA;if(s===gu)return n.LUMINANCE;if(s===vu)return n.LUMINANCE_ALPHA;if(s===bi)return n.DEPTH_COMPONENT;if(s===ia)return n.DEPTH_STENCIL;if(s===to)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===xu)return n.RED;if(s===Pc)return n.RED_INTEGER;if(s===bu)return n.RG;if(s===Dc)return n.RG_INTEGER;if(s===Ic)return n.RGBA_INTEGER;if(s===Ks||s===Js||s===Zs||s===Qs)if(l===vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ks)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ks)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Js)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xo||s===qo||s===$o||s===Yo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Xo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$o)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===jo||s===Ko)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===jo)return l===vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ko)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jo||s===Zo||s===Qo||s===el||s===tl||s===nl||s===il||s===al||s===sl||s===rl||s===ol||s===ll||s===cl||s===dl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Jo)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zo)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qo)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===el)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===il)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===al)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ol)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ll)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===er||s===ul||s===hl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===er)return l===vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ul)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_u||s===pl||s===fl||s===ml)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===er)return o.COMPRESSED_RED_RGTC1_EXT;if(s===pl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ml)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class Dm extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yt extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Im={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Im)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Um extends la{constructor(e,t){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,g=null;const v=t.getContextAttributes();let m=null,u=null;const x=[],b=[],_=new xe;let k=null;const w=new Kt;w.layers.enable(1),w.viewport=new xt;const S=new Kt;S.layers.enable(2),S.viewport=new xt;const I=[w,S],M=new Dm;M.layers.enable(1),M.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ae=x[X];return ae===void 0&&(ae=new Er,x[X]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(X){let ae=x[X];return ae===void 0&&(ae=new Er,x[X]=ae),ae.getGripSpace()},this.getHand=function(X){let ae=x[X];return ae===void 0&&(ae=new Er,x[X]=ae),ae.getHandSpace()};function G(X){const ae=b.indexOf(X.inputSource);if(ae===-1)return;const be=x[ae];be!==void 0&&(be.update(X.inputSource,X.frame,c||r),be.dispatchEvent({type:X.type,data:X.inputSource}))}function ie(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",ie),a.removeEventListener("inputsourceschange",P);for(let X=0;X<x.length;X++){const ae=b[X];ae!==null&&(b[X]=null,x[X].disconnect(ae))}A=null,N=null,e.setRenderTarget(m),p=null,f=null,h=null,a=null,u=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",ie),a.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(_),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:a.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,t,ae),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new yi(p.framebufferWidth,p.framebufferHeight,{format:fn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ae=null,be=null,ke=null;v.depth&&(ke=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=v.stencil?ia:bi,be=v.stencil?xi:Kn);const Re={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};h=new XRWebGLBinding(a,t),f=h.createProjectionLayer(Re),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new yi(f.textureWidth,f.textureHeight,{format:fn,type:ei,depthTexture:new Jc(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Fe=e.properties.get(u);Fe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),pe.setContext(a),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function P(X){for(let ae=0;ae<X.removed.length;ae++){const be=X.removed[ae],ke=b.indexOf(be);ke>=0&&(b[ke]=null,x[ke].disconnect(be))}for(let ae=0;ae<X.added.length;ae++){const be=X.added[ae];let ke=b.indexOf(be);if(ke===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=b.length){b.push(be),ke=Fe;break}else if(b[Fe]===null){b[Fe]=be,ke=Fe;break}if(ke===-1)break}const Re=x[ke];Re&&Re.connect(be)}}const O=new L,W=new L;function Z(X,ae,be){O.setFromMatrixPosition(ae.matrixWorld),W.setFromMatrixPosition(be.matrixWorld);const ke=O.distanceTo(W),Re=ae.projectionMatrix.elements,Fe=be.projectionMatrix.elements,Xe=Re[14]/(Re[10]-1),Oe=Re[14]/(Re[10]+1),tt=(Re[9]+1)/Re[5],F=(Re[9]-1)/Re[5],Rt=(Re[8]-1)/Re[0],Ie=(Fe[8]+1)/Fe[0],He=Xe*Rt,Le=Xe*Ie,ht=ke/(-Rt+Ie),qe=ht*-Rt;ae.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(qe),X.translateZ(ht),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const T=Xe+ht,y=Oe+ht,z=He-qe,ce=Le+(ke-qe),oe=tt*Oe/y*T,ee=F*Oe/y*T;X.projectionMatrix.makePerspective(z,ce,oe,ee,T,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function $(X,ae){ae===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ae.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;M.near=S.near=w.near=X.near,M.far=S.far=w.far=X.far,(A!==M.near||N!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,N=M.far);const ae=X.parent,be=M.cameras;$(M,ae);for(let ke=0;ke<be.length;ke++)$(be[ke],ae);be.length===2?Z(M,w,S):M.projectionMatrix.copy(w.projectionMatrix),Y(X,M,ae)};function Y(X,ae,be){be===null?X.matrix.copy(ae.matrixWorld):(X.matrix.copy(be.matrixWorld),X.matrix.invert(),X.matrix.multiply(ae.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ae.projectionMatrix),X.projectionMatrixInverse.copy(ae.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=no*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let J=null;function ue(X,ae){if(d=ae.getViewerPose(c||r),g=ae,d!==null){const be=d.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ke=!1;be.length!==M.cameras.length&&(M.cameras.length=0,ke=!0);for(let Re=0;Re<be.length;Re++){const Fe=be[Re];let Xe=null;if(p!==null)Xe=p.getViewport(Fe);else{const tt=h.getViewSubImage(f,Fe);Xe=tt.viewport,Re===0&&(e.setRenderTargetTextures(u,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(u))}let Oe=I[Re];Oe===void 0&&(Oe=new Kt,Oe.layers.enable(Re),Oe.viewport=new xt,I[Re]=Oe),Oe.matrix.fromArray(Fe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Fe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Re===0&&(M.matrix.copy(Oe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ke===!0&&M.cameras.push(Oe)}}for(let be=0;be<x.length;be++){const ke=b[be],Re=x[be];ke!==null&&Re!==void 0&&Re.update(ke,ae,c||r)}J&&J(X,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const pe=new jc;pe.setAnimationLoop(ue),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}}function Nm(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,qc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,x,b,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,x,b):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Gt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Gt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=e.get(u).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*b,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=b*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Gt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const x=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Om(n,e,t,i){let a={},s={},r=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,b){const _=b.program;i.uniformBlockBinding(x,_)}function c(x,b){let _=a[x.id];_===void 0&&(g(x),_=d(x),a[x.id]=_,x.addEventListener("dispose",m));const k=b.program;i.updateUBOMapping(x,k);const w=e.render.frame;s[x.id]!==w&&(f(x),s[x.id]=w)}function d(x){const b=h();x.__bindingPointIndex=b;const _=n.createBuffer(),k=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,k,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function h(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const b=a[x.id],_=x.uniforms,k=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,S=_.length;w<S;w++){const I=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,A=I.length;M<A;M++){const N=I[M];if(p(N,w,M,k)===!0){const G=N.__offset,ie=Array.isArray(N.value)?N.value:[N.value];let P=0;for(let O=0;O<ie.length;O++){const W=ie[O],Z=v(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,G+P,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,b,_,k){const w=x.value,S=b+"_"+_;if(k[S]===void 0)return typeof w=="number"||typeof w=="boolean"?k[S]=w:k[S]=w.clone(),!0;{const I=k[S];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return k[S]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(x){const b=x.uniforms;let _=0;const k=16;for(let S=0,I=b.length;S<I;S++){const M=Array.isArray(b[S])?b[S]:[b[S]];for(let A=0,N=M.length;A<N;A++){const G=M[A],ie=Array.isArray(G.value)?G.value:[G.value];for(let P=0,O=ie.length;P<O;P++){const W=ie[P],Z=v(W),$=_%k;$!==0&&k-$<Z.boundary&&(_+=k-$),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=Z.storage}}}const w=_%k;return w>0&&(_+=k-w),x.__size=_,x.__cache={},this}function v(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){const b=x.target;b.removeEventListener("dispose",m);const _=r.indexOf(b.__bindingPointIndex);r.splice(_,1),n.deleteBuffer(a[b.id]),delete a[b.id],delete s[b.id]}function u(){for(const x in a)n.deleteBuffer(a[x]);r=[],a={},s={}}return{bind:l,update:c,dispose:u}}class bo{constructor(e={}){const{canvas:t=Pu(),context:i=null,depth:a=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=r;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const u=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const b=this;let _=!1,k=0,w=0,S=null,I=-1,M=null;const A=new xt,N=new xt;let G=null;const ie=new Be(0);let P=0,O=t.width,W=t.height,Z=1,$=null,Y=null;const J=new xt(0,0,O,W),ue=new xt(0,0,O,W);let pe=!1;const X=new vo;let ae=!1,be=!1,ke=null;const Re=new bt,Fe=new xe,Xe=new L,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return S===null?Z:1}let F=i;function Rt(E,U){for(let H=0;H<E.length;H++){const V=E[H],B=t.getContext(V,U);if(B!==null)return B}return null}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",se,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&U.shift(),F=Rt(U,E),F===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ie,He,Le,ht,qe,T,y,z,ce,oe,ee,Ce,ve,Se,Ne,Ye,re,st,Ke,Ge,De,Ee,D,ne;function Me(){Ie=new $f(F),He=new Hf(F,Ie,e),Ie.init(He),Ee=new Pm(F,Ie,He),Le=new Rm(F,Ie,He),ht=new Kf(F),qe=new gm,T=new km(F,Ie,Le,qe,He,Ee,ht),y=new Vf(b),z=new qf(b),ce=new ih(F,He),D=new zf(F,Ie,ce,He),oe=new Yf(F,ce,ht,D),ee=new e0(F,oe,ce,ht),Ke=new Qf(F,He,T),Ye=new Gf(qe),Ce=new mm(b,y,z,Ie,He,D,Ye),ve=new Nm(b,qe),Se=new xm,Ne=new Sm(Ie,He),st=new Ff(b,y,z,Le,ee,f,l),re=new Cm(b,ee,He),ne=new Om(F,ht,He,Le),Ge=new Bf(F,Ie,ht,He),De=new jf(F,Ie,ht,He),ht.programs=Ce.programs,b.capabilities=He,b.extensions=Ie,b.properties=qe,b.renderLists=Se,b.shadowMap=re,b.state=Le,b.info=ht}Me();const ge=new Um(b,F);this.xr=ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(O,W,!1))},this.getSize=function(E){return E.set(O,W)},this.setSize=function(E,U,H=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,W=U,t.width=Math.floor(E*Z),t.height=Math.floor(U*Z),H===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(O*Z,W*Z).floor()},this.setDrawingBufferSize=function(E,U,H){O=E,W=U,Z=H,t.width=Math.floor(E*H),t.height=Math.floor(U*H),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,U,H,V){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,U,H,V),Le.viewport(A.copy(J).multiplyScalar(Z).floor())},this.getScissor=function(E){return E.copy(ue)},this.setScissor=function(E,U,H,V){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,U,H,V),Le.scissor(N.copy(ue).multiplyScalar(Z).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(E){Le.setScissorTest(pe=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(E=!0,U=!0,H=!0){let V=0;if(E){let B=!1;if(S!==null){const we=S.texture.format;B=we===Ic||we===Dc||we===Pc}if(B){const we=S.texture.type,Pe=we===ei||we===Kn||we===po||we===xi||we===Rc||we===kc,ze=st.getClearColor(),Ve=st.getClearAlpha(),Ze=ze.r,$e=ze.g,je=ze.b;Pe?(p[0]=Ze,p[1]=$e,p[2]=je,p[3]=Ve,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=Ze,g[1]=$e,g[2]=je,g[3]=Ve,F.clearBufferiv(F.COLOR,0,g))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT),H&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Se.dispose(),Ne.dispose(),qe.dispose(),y.dispose(),z.dispose(),ee.dispose(),D.dispose(),ne.dispose(),Ce.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",It),ge.removeEventListener("sessionend",ft),ke&&(ke.dispose(),ke=null),Vt.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const E=ht.autoReset,U=re.enabled,H=re.autoUpdate,V=re.needsUpdate,B=re.type;Me(),ht.autoReset=E,re.enabled=U,re.autoUpdate=H,re.needsUpdate=V,re.type=B}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function le(E){const U=E.target;U.removeEventListener("dispose",le),Te(U)}function Te(E){q(E),qe.remove(E)}function q(E){const U=qe.get(E).programs;U!==void 0&&(U.forEach(function(H){Ce.releaseProgram(H)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,H,V,B,we){U===null&&(U=Oe);const Pe=B.isMesh&&B.matrixWorld.determinant()<0,ze=Rd(E,U,H,V,B);Le.setMaterial(V,Pe);let Ve=H.index,Ze=1;if(V.wireframe===!0){if(Ve=oe.getWireframeAttribute(H),Ve===void 0)return;Ze=2}const $e=H.drawRange,je=H.attributes.position;let wt=$e.start*Ze,Qt=($e.start+$e.count)*Ze;we!==null&&(wt=Math.max(wt,we.start*Ze),Qt=Math.min(Qt,(we.start+we.count)*Ze)),Ve!==null?(wt=Math.max(wt,0),Qt=Math.min(Qt,Ve.count)):je!=null&&(wt=Math.max(wt,0),Qt=Math.min(Qt,je.count));const kt=Qt-wt;if(kt<0||kt===1/0)return;D.setup(B,V,ze,H,Ve);let Sn,_t=Ge;if(Ve!==null&&(Sn=ce.get(Ve),_t=De,_t.setIndex(Sn)),B.isMesh)V.wireframe===!0?(Le.setLineWidth(V.wireframeLinewidth*tt()),_t.setMode(F.LINES)):_t.setMode(F.TRIANGLES);else if(B.isLine){let Qe=V.linewidth;Qe===void 0&&(Qe=1),Le.setLineWidth(Qe*tt()),B.isLineSegments?_t.setMode(F.LINES):B.isLineLoop?_t.setMode(F.LINE_LOOP):_t.setMode(F.LINE_STRIP)}else B.isPoints?_t.setMode(F.POINTS):B.isSprite&&_t.setMode(F.TRIANGLES);if(B.isBatchedMesh)_t.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)_t.renderInstances(wt,kt,B.count);else if(H.isInstancedBufferGeometry){const Qe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Xs=Math.min(H.instanceCount,Qe);_t.renderInstances(wt,kt,Xs)}else _t.render(wt,kt)};function ye(E,U,H){E.transparent===!0&&E.side===Ht&&E.forceSinglePass===!1?(E.side=Gt,E.needsUpdate=!0,Xa(E,U,H),E.side=ii,E.needsUpdate=!0,Xa(E,U,H),E.side=Ht):Xa(E,U,H)}this.compile=function(E,U,H=null){H===null&&(H=E),m=Ne.get(H),m.init(),x.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(b._useLegacyLights);const V=new Set;return E.traverse(function(B){const we=B.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const ze=we[Pe];ye(ze,H,B),V.add(ze)}else ye(we,H,B),V.add(we)}),x.pop(),m=null,V},this.compileAsync=function(E,U,H=null){const V=this.compile(E,U,H);return new Promise(B=>{function we(){if(V.forEach(function(Pe){qe.get(Pe).currentProgram.isReady()&&V.delete(Pe)}),V.size===0){B(E);return}setTimeout(we,10)}Ie.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let it=null;function pt(E){it&&it(E)}function It(){Vt.stop()}function ft(){Vt.start()}const Vt=new jc;Vt.setAnimationLoop(pt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(E){it=E,ge.setAnimationLoop(E),E===null?Vt.stop():Vt.start()},ge.addEventListener("sessionstart",It),ge.addEventListener("sessionend",ft),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(U),U=ge.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,U,S),m=Ne.get(E,x.length),m.init(),x.push(m),Re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Re),be=this.localClippingEnabled,ae=Ye.init(this.clippingPlanes,be),v=Se.get(E,u.length),v.init(),u.push(v),gn(E,U,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort($,Y),this.info.render.frame++,ae===!0&&Ye.beginShadows();const H=m.state.shadowsArray;if(re.render(H,E,U),ae===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(v,E),m.setupLights(b._useLegacyLights),U.isArrayCamera){const V=U.cameras;for(let B=0,we=V.length;B<we;B++){const Pe=V[B];Po(v,E,Pe,Pe.viewport)}}else Po(v,E,U);S!==null&&(T.updateMultisampleRenderTarget(S),T.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(b,E,U),D.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function gn(E,U,H,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){V&&Xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);const Pe=ee.update(E),ze=E.material;ze.visible&&v.push(E,Pe,ze,H,Xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const Pe=ee.update(E),ze=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xe.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Xe.copy(Pe.boundingSphere.center)),Xe.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(ze)){const Ve=Pe.groups;for(let Ze=0,$e=Ve.length;Ze<$e;Ze++){const je=Ve[Ze],wt=ze[je.materialIndex];wt&&wt.visible&&v.push(E,Pe,wt,H,Xe.z,je)}}else ze.visible&&v.push(E,Pe,ze,H,Xe.z,null)}}const we=E.children;for(let Pe=0,ze=we.length;Pe<ze;Pe++)gn(we[Pe],U,H,V)}function Po(E,U,H,V){const B=E.opaque,we=E.transmissive,Pe=E.transparent;m.setupLightsView(H),ae===!0&&Ye.setGlobalState(b.clippingPlanes,H),we.length>0&&Cd(B,we,U,H),V&&Le.viewport(A.copy(V)),B.length>0&&Wa(B,U,H),we.length>0&&Wa(we,U,H),Pe.length>0&&Wa(Pe,U,H),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Cd(E,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const we=He.isWebGL2;ke===null&&(ke=new yi(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?Ua:ei,minFilter:Ia,samples:we?4:0})),b.getDrawingBufferSize(Fe),we?ke.setSize(Fe.x,Fe.y):ke.setSize(io(Fe.x),io(Fe.y));const Pe=b.getRenderTarget();b.setRenderTarget(ke),b.getClearColor(ie),P=b.getClearAlpha(),P<1&&b.setClearColor(16777215,.5),b.clear();const ze=b.toneMapping;b.toneMapping=Qn,Wa(E,H,V),T.updateMultisampleRenderTarget(ke),T.updateRenderTargetMipmap(ke);let Ve=!1;for(let Ze=0,$e=U.length;Ze<$e;Ze++){const je=U[Ze],wt=je.object,Qt=je.geometry,kt=je.material,Sn=je.group;if(kt.side===Ht&&wt.layers.test(V.layers)){const _t=kt.side;kt.side=Gt,kt.needsUpdate=!0,Do(wt,H,V,Qt,kt,Sn),kt.side=_t,kt.needsUpdate=!0,Ve=!0}}Ve===!0&&(T.updateMultisampleRenderTarget(ke),T.updateRenderTargetMipmap(ke)),b.setRenderTarget(Pe),b.setClearColor(ie,P),b.toneMapping=ze}function Wa(E,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let B=0,we=E.length;B<we;B++){const Pe=E[B],ze=Pe.object,Ve=Pe.geometry,Ze=V===null?Pe.material:V,$e=Pe.group;ze.layers.test(H.layers)&&Do(ze,U,H,Ve,Ze,$e)}}function Do(E,U,H,V,B,we){E.onBeforeRender(b,U,H,V,B,we),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(b,U,H,V,E,we),B.transparent===!0&&B.side===Ht&&B.forceSinglePass===!1?(B.side=Gt,B.needsUpdate=!0,b.renderBufferDirect(H,U,V,B,E,we),B.side=ii,B.needsUpdate=!0,b.renderBufferDirect(H,U,V,B,E,we),B.side=Ht):b.renderBufferDirect(H,U,V,B,E,we),E.onAfterRender(b,U,H,V,B,we)}function Xa(E,U,H){U.isScene!==!0&&(U=Oe);const V=qe.get(E),B=m.state.lights,we=m.state.shadowsArray,Pe=B.state.version,ze=Ce.getParameters(E,B.state,we,U,H),Ve=Ce.getProgramCacheKey(ze);let Ze=V.programs;V.environment=E.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(E.isMeshStandardMaterial?z:y).get(E.envMap||V.environment),Ze===void 0&&(E.addEventListener("dispose",le),Ze=new Map,V.programs=Ze);let $e=Ze.get(Ve);if($e!==void 0){if(V.currentProgram===$e&&V.lightsStateVersion===Pe)return Uo(E,ze),$e}else ze.uniforms=Ce.getUniforms(E),E.onBuild(H,ze,b),E.onBeforeCompile(ze,b),$e=Ce.acquireProgram(ze,Ve),Ze.set(Ve,$e),V.uniforms=ze.uniforms;const je=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(je.clippingPlanes=Ye.uniform),Uo(E,ze),V.needsLights=Pd(E),V.lightsStateVersion=Pe,V.needsLights&&(je.ambientLightColor.value=B.state.ambient,je.lightProbe.value=B.state.probe,je.directionalLights.value=B.state.directional,je.directionalLightShadows.value=B.state.directionalShadow,je.spotLights.value=B.state.spot,je.spotLightShadows.value=B.state.spotShadow,je.rectAreaLights.value=B.state.rectArea,je.ltc_1.value=B.state.rectAreaLTC1,je.ltc_2.value=B.state.rectAreaLTC2,je.pointLights.value=B.state.point,je.pointLightShadows.value=B.state.pointShadow,je.hemisphereLights.value=B.state.hemi,je.directionalShadowMap.value=B.state.directionalShadowMap,je.directionalShadowMatrix.value=B.state.directionalShadowMatrix,je.spotShadowMap.value=B.state.spotShadowMap,je.spotLightMatrix.value=B.state.spotLightMatrix,je.spotLightMap.value=B.state.spotLightMap,je.pointShadowMap.value=B.state.pointShadowMap,je.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=$e,V.uniformsList=null,$e}function Io(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Es.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Uo(E,U){const H=qe.get(E);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Rd(E,U,H,V,B){U.isScene!==!0&&(U=Oe),T.resetTextureUnits();const we=U.fog,Pe=V.isMeshStandardMaterial?U.environment:null,ze=S===null?b.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Fn,Ve=(V.isMeshStandardMaterial?z:y).get(V.envMap||Pe),Ze=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$e=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),je=!!H.morphAttributes.position,wt=!!H.morphAttributes.normal,Qt=!!H.morphAttributes.color;let kt=Qn;V.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(kt=b.toneMapping);const Sn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_t=Sn!==void 0?Sn.length:0,Qe=qe.get(V),Xs=m.state.lights;if(ae===!0&&(be===!0||E!==M)){const nn=E===M&&V.id===I;Ye.setState(V,E,nn)}let Mt=!1;V.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Xs.state.version||Qe.outputColorSpace!==ze||B.isBatchedMesh&&Qe.batching===!1||!B.isBatchedMesh&&Qe.batching===!0||B.isInstancedMesh&&Qe.instancing===!1||!B.isInstancedMesh&&Qe.instancing===!0||B.isSkinnedMesh&&Qe.skinning===!1||!B.isSkinnedMesh&&Qe.skinning===!0||B.isInstancedMesh&&Qe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Qe.instancingColor===!1&&B.instanceColor!==null||Qe.envMap!==Ve||V.fog===!0&&Qe.fog!==we||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ye.numPlanes||Qe.numIntersection!==Ye.numIntersection)||Qe.vertexAlphas!==Ze||Qe.vertexTangents!==$e||Qe.morphTargets!==je||Qe.morphNormals!==wt||Qe.morphColors!==Qt||Qe.toneMapping!==kt||He.isWebGL2===!0&&Qe.morphTargetsCount!==_t)&&(Mt=!0):(Mt=!0,Qe.__version=V.version);let oi=Qe.currentProgram;Mt===!0&&(oi=Xa(V,U,B));let No=!1,ha=!1,qs=!1;const Ft=oi.getUniforms(),li=Qe.uniforms;if(Le.useProgram(oi.program)&&(No=!0,ha=!0,qs=!0),V.id!==I&&(I=V.id,ha=!0),No||M!==E){Ft.setValue(F,"projectionMatrix",E.projectionMatrix),Ft.setValue(F,"viewMatrix",E.matrixWorldInverse);const nn=Ft.map.cameraPosition;nn!==void 0&&nn.setValue(F,Xe.setFromMatrixPosition(E.matrixWorld)),He.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,ha=!0,qs=!0)}if(B.isSkinnedMesh){Ft.setOptional(F,B,"bindMatrix"),Ft.setOptional(F,B,"bindMatrixInverse");const nn=B.skeleton;nn&&(He.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ft.setValue(F,"boneTexture",nn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ft.setOptional(F,B,"batchingTexture"),Ft.setValue(F,"batchingTexture",B._matricesTexture,T));const $s=H.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&He.isWebGL2===!0)&&Ke.update(B,H,oi),(ha||Qe.receiveShadow!==B.receiveShadow)&&(Qe.receiveShadow=B.receiveShadow,Ft.setValue(F,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(li.envMap.value=Ve,li.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ha&&(Ft.setValue(F,"toneMappingExposure",b.toneMappingExposure),Qe.needsLights&&kd(li,qs),we&&V.fog===!0&&ve.refreshFogUniforms(li,we),ve.refreshMaterialUniforms(li,V,Z,W,ke),Es.upload(F,Io(Qe),li,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Es.upload(F,Io(Qe),li,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ft.setValue(F,"center",B.center),Ft.setValue(F,"modelViewMatrix",B.modelViewMatrix),Ft.setValue(F,"normalMatrix",B.normalMatrix),Ft.setValue(F,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const nn=V.uniformsGroups;for(let Ys=0,Dd=nn.length;Ys<Dd;Ys++)if(He.isWebGL2){const Oo=nn[Ys];ne.update(Oo,oi),ne.bind(Oo,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function kd(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Pd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,U,H){qe.get(E.texture).__webglTexture=U,qe.get(E.depthTexture).__webglTexture=H;const V=qe.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const H=qe.get(E);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,H=0){S=E,k=U,w=H;let V=!0,B=null,we=!1,Pe=!1;if(E){const Ve=qe.get(E);Ve.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(F.FRAMEBUFFER,null),V=!1):Ve.__webglFramebuffer===void 0?T.setupRenderTarget(E):Ve.__hasExternalTextures&&T.rebindTextures(E,qe.get(E.texture).__webglTexture,qe.get(E.depthTexture).__webglTexture);const Ze=E.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Pe=!0);const $e=qe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($e[U])?B=$e[U][H]:B=$e[U],we=!0):He.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?B=qe.get(E).__webglMultisampledFramebuffer:Array.isArray($e)?B=$e[H]:B=$e,A.copy(E.viewport),N.copy(E.scissor),G=E.scissorTest}else A.copy(J).multiplyScalar(Z).floor(),N.copy(ue).multiplyScalar(Z).floor(),G=pe;if(Le.bindFramebuffer(F.FRAMEBUFFER,B)&&He.drawBuffers&&V&&Le.drawBuffers(E,B),Le.viewport(A),Le.scissor(N),Le.setScissorTest(G),we){const Ve=qe.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ve.__webglTexture,H)}else if(Pe){const Ve=qe.get(E.texture),Ze=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.__webglTexture,H||0,Ze)}I=-1},this.readRenderTargetPixels=function(E,U,H,V,B,we,Pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=qe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(ze=ze[Pe]),ze){Le.bindFramebuffer(F.FRAMEBUFFER,ze);try{const Ve=E.texture,Ze=Ve.format,$e=Ve.type;if(Ze!==fn&&Ee.convert(Ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=$e===Ua&&(Ie.has("EXT_color_buffer_half_float")||He.isWebGL2&&Ie.has("EXT_color_buffer_float"));if($e!==ei&&Ee.convert($e)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===Jn&&(He.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&H>=0&&H<=E.height-B&&F.readPixels(U,H,V,B,Ee.convert(Ze),Ee.convert($e),we)}finally{const Ve=S!==null?qe.get(S).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(E,U,H=0){const V=Math.pow(2,-H),B=Math.floor(U.image.width*V),we=Math.floor(U.image.height*V);T.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,E.x,E.y,B,we),Le.unbindTexture()},this.copyTextureToTexture=function(E,U,H,V=0){const B=U.image.width,we=U.image.height,Pe=Ee.convert(H.format),ze=Ee.convert(H.type);T.setTexture2D(H,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,B,we,Pe,ze,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Pe,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,Pe,ze,U.image),V===0&&H.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(E,U,H,V,B=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=E.max.x-E.min.x+1,Pe=E.max.y-E.min.y+1,ze=E.max.z-E.min.z+1,Ve=Ee.convert(V.format),Ze=Ee.convert(V.type);let $e;if(V.isData3DTexture)T.setTexture3D(V,0),$e=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)T.setTexture2DArray(V,0),$e=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const je=F.getParameter(F.UNPACK_ROW_LENGTH),wt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Qt=F.getParameter(F.UNPACK_SKIP_PIXELS),kt=F.getParameter(F.UNPACK_SKIP_ROWS),Sn=F.getParameter(F.UNPACK_SKIP_IMAGES),_t=H.isCompressedTexture?H.mipmaps[B]:H.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),H.isDataTexture||H.isData3DTexture?F.texSubImage3D($e,B,U.x,U.y,U.z,we,Pe,ze,Ve,Ze,_t.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D($e,B,U.x,U.y,U.z,we,Pe,ze,Ve,_t.data)):F.texSubImage3D($e,B,U.x,U.y,U.z,we,Pe,ze,Ve,Ze,_t),F.pixelStorei(F.UNPACK_ROW_LENGTH,je),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qt),F.pixelStorei(F.UNPACK_SKIP_ROWS,kt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Sn),B===0&&V.generateMipmaps&&F.generateMipmap($e),Le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){k=0,w=0,S=null,Le.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===mo?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Us?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?_i:Nc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_i?Dt:Fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Fm extends bo{}Fm.prototype.isWebGL1Renderer=!0;class Ba{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new Ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ha{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=i}clone(){return new Ha(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class da extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class zm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new L;class Ds{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ds(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ai extends Hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wi;const va=new L,Xi=new L,qi=new L,$i=new xe,xa=new xe,id=new bt,fs=new L,ba=new L,ms=new L,ic=new xe,Tr=new xe,ac=new xe;class Ai extends Tt{constructor(e=new ai){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zm(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Ds(i,3,0,!1)),Wi.setAttribute("uv",new Ds(i,2,3,!1))}this.geometry=Wi,this.material=e,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),id.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;gs(fs.set(-.5,-.5,0),qi,r,Xi,a,s),gs(ba.set(.5,-.5,0),qi,r,Xi,a,s),gs(ms.set(.5,.5,0),qi,r,Xi,a,s),ic.set(0,0),Tr.set(1,0),ac.set(1,1);let o=e.ray.intersectTriangle(fs,ba,ms,!1,va);if(o===null&&(gs(ba.set(-.5,.5,0),qi,r,Xi,a,s),Tr.set(0,1),o=e.ray.intersectTriangle(fs,ms,ba,!1,va),o===null))return;const l=e.ray.origin.distanceTo(va);l<e.near||l>e.far||t.push({distance:l,point:va.clone(),uv:rn.getInterpolation(va,fs,ba,ms,ic,Tr,ac,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gs(n,e,t,i,a,s){$i.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(xa.x=s*$i.x-a*$i.y,xa.y=a*$i.x+s*$i.y):xa.copy($i),n.copy(e),n.x+=xa.x,n.y+=xa.y,n.applyMatrix4(id)}class ua extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sc=new L,rc=new L,oc=new bt,Ar=new go,vs=new za;class zn extends Tt{constructor(e=new gt,t=new ua){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)sc.fromBufferAttribute(t,a-1),rc.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=sc.distanceTo(rc);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(a),vs.radius+=s,e.ray.intersectsSphere(vs)===!1)return;oc.copy(a).invert(),Ar.copy(e.ray).applyMatrix4(oc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,d=new L,h=new L,f=new L,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const u=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let b=u,_=x-1;b<_;b+=p){const k=g.getX(b),w=g.getX(b+1);if(c.fromBufferAttribute(m,k),d.fromBufferAttribute(m,w),Ar.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,r.start),x=Math.min(m.count,r.start+r.count);for(let b=u,_=x-1;b<_;b+=p){if(c.fromBufferAttribute(m,b),d.fromBufferAttribute(m,b+1),Ar.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class ad extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lc=new bt,so=new go,xs=new za,bs=new L;class Bm extends Tt{constructor(e=new gt,t=new ad){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(a),xs.radius+=s,e.ray.intersectsSphere(xs)===!1)return;lc.copy(a).invert(),so.copy(e.ray).applyMatrix4(lc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);bs.fromBufferAttribute(h,m),cc(bs,m,l,a,e,t,this)}}else{const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let g=f,v=p;g<v;g++)bs.fromBufferAttribute(h,g),cc(bs,g,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function cc(n,e,t,i,a,s,r){const o=so.distanceSqToPoint(n);if(o<t){const l=new L;so.closestPointToPoint(n,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class Fs extends Zt{constructor(e,t,i,a,s,r,o,l,c){super(e,t,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const s=i.length;let r;t?r=t:r=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);const d=i[a],f=i[a+1]-d,p=(r-d)/f;return(a+p)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);const r=this.getPoint(a),o=this.getPoint(s),l=t||(r.isVector2?new xe:new L);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,a=[],s=[],r=[],o=new L,l=new bt;for(let p=0;p<=e;p++){const g=p/e;a[p]=this.getTangentAt(g,new L)}s[0]=new L,r[0]=new L;let c=Number.MAX_VALUE;const d=Math.abs(a[0].x),h=Math.abs(a[0].y),f=Math.abs(a[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Nt(a[p-1].dot(a[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(a[p],s[p])}if(t===!0){let p=Math.acos(Nt(s[0].dot(s[e]),-1,1));p/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(a[g],p*g)),r[g].crossVectors(a[g],s[g])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _o extends wn{constructor(e=0,t=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new xe,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*h+this.aX,c=f*h+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hm extends _o{constructor(e,t,i,a,s,r){super(e,t,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function yo(){let n=0,e=0,t=0,i=0;function a(s,r,o,l){n=s,e=o,t=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){a(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,d,h){let f=(r-s)/c-(o-s)/(c+d)+(o-r)/d,p=(o-r)/d-(l-r)/(d+h)+(l-o)/h;f*=d,p*=d,a(r,o,f,p)},calc:function(s){const r=s*s,o=r*s;return n+e*s+t*r+i*o}}}const _s=new L,Lr=new yo,Cr=new yo,Rr=new yo;class sd extends wn{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new L){const i=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,d;this.closed||o>0?c=a[(o-1)%s]:(_s.subVectors(a[0],a[1]).add(a[0]),c=_s);const h=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?d=a[(o+2)%s]:(_s.subVectors(a[s-1],a[s-2]).add(a[s-1]),d=_s),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Lr.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,g,v,m),Cr.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,g,v,m),Rr.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(Lr.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),Cr.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Rr.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return i.set(Lr.calc(l),Cr.calc(l),Rr.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new L().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dc(n,e,t,i,a){const s=(i-e)*.5,r=(a-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+r)*l+(-3*t+3*i-2*s-r)*o+s*n+t}function Gm(n,e){const t=1-n;return t*t*e}function Vm(n,e){return 2*(1-n)*n*e}function Wm(n,e){return n*n*e}function Aa(n,e,t,i){return Gm(n,e)+Vm(n,t)+Wm(n,i)}function Xm(n,e){const t=1-n;return t*t*t*e}function qm(n,e){const t=1-n;return 3*t*t*n*e}function $m(n,e){return 3*(1-n)*n*n*e}function Ym(n,e){return n*n*n*e}function La(n,e,t,i,a){return Xm(n,e)+qm(n,t)+$m(n,i)+Ym(n,a)}class rd extends wn{constructor(e=new xe,t=new xe,i=new xe,a=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new xe){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(La(e,a.x,s.x,r.x,o.x),La(e,a.y,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jm extends wn{constructor(e=new L,t=new L,i=new L,a=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new L){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(La(e,a.x,s.x,r.x,o.x),La(e,a.y,s.y,r.y,o.y),La(e,a.z,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class od extends wn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Km extends wn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ld extends wn{constructor(e=new xe,t=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new xe){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(Aa(e,a.x,s.x,r.x),Aa(e,a.y,s.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jm extends wn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(Aa(e,a.x,s.x,r.x),Aa(e,a.y,s.y,r.y),Aa(e,a.z,s.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const i=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),o=s-r,l=a[r===0?r:r-1],c=a[r],d=a[r>a.length-2?a.length-1:r+1],h=a[r>a.length-3?a.length-1:r+2];return i.set(dc(o,l.x,c.x,d.x,h.x),dc(o,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new xe().fromArray(a))}return this}}var uc=Object.freeze({__proto__:null,ArcCurve:Hm,CatmullRomCurve3:sd,CubicBezierCurve:rd,CubicBezierCurve3:jm,EllipseCurve:_o,LineCurve:od,LineCurve3:Km,QuadraticBezierCurve:ld,QuadraticBezierCurve3:Jm,SplineCurve:cd});class Zm extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let s=0;for(;s<a.length;){if(a[s]>=i){const r=a[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,s=this.curves;a<s.length;a++){const r=s[a],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new uc[a.type]().fromJSON(a))}return this}}class Qm extends Zm{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new od(this.currentPoint.clone(),new xe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const s=new ld(this.currentPoint.clone(),new xe(e,t),new xe(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,s,r){const o=new rd(this.currentPoint.clone(),new xe(e,t),new xe(i,a),new xe(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new cd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,a,s,r),this}absarc(e,t,i,a,s,r){return this.absellipse(e,t,i,i,a,s,r),this}ellipse(e,t,i,a,s,r,o,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,a,s,r,o,l),this}absellipse(e,t,i,a,s,r,o,l){const c=new _o(e,t,i,a,s,r,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Mo extends gt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,i=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:a},t=Math.floor(t),a=Nt(a,0,Math.PI*2);const s=[],r=[],o=[],l=[],c=[],d=1/t,h=new L,f=new xe,p=new L,g=new L,v=new L;let m=0,u=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,u=e[x+1].y-e[x].y,p.x=u*1,p.y=-m,p.z=u*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,u=e[x+1].y-e[x].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let x=0;x<=t;x++){const b=i+x*d*a,_=Math.sin(b),k=Math.cos(b);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*_,h.y=e[w].y,h.z=e[w].x*k,r.push(h.x,h.y,h.z),f.x=x/t,f.y=w/(e.length-1),o.push(f.x,f.y);const S=l[3*w+0]*_,I=l[3*w+1],M=l[3*w+0]*k;c.push(S,I,M)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){const _=b+x*e.length,k=_,w=_+e.length,S=_+e.length+1,I=_+1;s.push(k,w,I),s.push(S,I,w)}this.setIndex(s),this.setAttribute("position",new mt(r,3)),this.setAttribute("uv",new mt(o,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.points,e.segments,e.phiStart,e.phiLength)}}class wo extends Mo{constructor(e=1,t=1,i=4,a=8){const s=new Qm;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),a),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:a}}static fromJSON(e){return new wo(e.radius,e.length,e.capSegments,e.radialSegments)}}class yn extends gt{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const s=[],r=[],o=[],l=[],c=new L,d=new xe;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=i+h/t*a;c.x=e*Math.cos(p),c.y=e*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(r[f]/e+1)/2,d.y=(r[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class he extends gt{constructor(e=1,t=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const d=[],h=[],f=[],p=[];let g=0;const v=[],m=i/2;let u=0;x(),r===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(p,2));function x(){const _=new L,k=new L;let w=0;const S=(t-e)/i;for(let I=0;I<=s;I++){const M=[],A=I/s,N=A*(t-e)+e;for(let G=0;G<=a;G++){const ie=G/a,P=ie*l+o,O=Math.sin(P),W=Math.cos(P);k.x=N*O,k.y=-A*i+m,k.z=N*W,h.push(k.x,k.y,k.z),_.set(O,S,W).normalize(),f.push(_.x,_.y,_.z),p.push(ie,1-A),M.push(g++)}v.push(M)}for(let I=0;I<a;I++)for(let M=0;M<s;M++){const A=v[M][I],N=v[M+1][I],G=v[M+1][I+1],ie=v[M][I+1];d.push(A,N,ie),d.push(N,G,ie),w+=6}c.addGroup(u,w,0),u+=w}function b(_){const k=g,w=new xe,S=new L;let I=0;const M=_===!0?e:t,A=_===!0?1:-1;for(let G=1;G<=a;G++)h.push(0,m*A,0),f.push(0,A,0),p.push(.5,.5),g++;const N=g;for(let G=0;G<=a;G++){const P=G/a*l+o,O=Math.cos(P),W=Math.sin(P);S.x=M*W,S.y=m*A,S.z=M*O,h.push(S.x,S.y,S.z),f.push(0,A,0),w.x=O*.5+.5,w.y=W*.5*A+.5,p.push(w.x,w.y),g++}for(let G=0;G<a;G++){const ie=k+G,P=N+G;_===!0?d.push(P,P+1,ie):d.push(P+1,P,ie),I+=3}c.addGroup(u,I,_===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new he(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bn extends he{constructor(e=1,t=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Bn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class So extends gt{constructor(e=.5,t=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],c=[],d=[];let h=e;const f=(t-e)/a,p=new L,g=new xe;for(let v=0;v<=a;v++){for(let m=0;m<=i;m++){const u=s+m/i*r;p.x=h*Math.cos(u),p.y=h*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,d.push(g.x,g.y)}h+=f}for(let v=0;v<a;v++){const m=v*(i+1);for(let u=0;u<i;u++){const x=u+m,b=x,_=x+i+1,k=x+i+2,w=x+1;o.push(b,_,w),o.push(_,k,w)}}this.setIndex(o),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class at extends gt{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const d=[],h=new L,f=new L,p=[],g=[],v=[],m=[];for(let u=0;u<=i;u++){const x=[],b=u/i;let _=0;u===0&&r===0?_=.5/t:u===i&&l===Math.PI&&(_=-.5/t);for(let k=0;k<=t;k++){const w=k/t;h.x=-e*Math.cos(a+w*s)*Math.sin(r+b*o),h.y=e*Math.cos(r+b*o),h.z=e*Math.sin(a+w*s)*Math.sin(r+b*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(w+_,1-b),x.push(c++)}d.push(x)}for(let u=0;u<i;u++)for(let x=0;x<t;x++){const b=d[u][x+1],_=d[u][x],k=d[u+1][x],w=d[u+1][x+1];(u!==0||r>0)&&p.push(b,_,w),(u!==i-1||l<Math.PI)&&p.push(_,k,w)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mn extends gt{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);const r=[],o=[],l=[],c=[],d=new L,h=new L,f=new L;for(let p=0;p<=i;p++)for(let g=0;g<=a;g++){const v=g/a*s,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(g/a),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=a;g++){const v=(a+1)*p+g-1,m=(a+1)*(p-1)+g-1,u=(a+1)*(p-1)+g,x=(a+1)*p+g;r.push(v,m,x),r.push(m,u,x)}this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class j extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _e extends Hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zs extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class eg extends zs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const kr=new bt,hc=new L,pc=new L;class dd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(hc),pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pc),t.updateMatrixWorld(),kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fc=new bt,_a=new L,Pr=new L;class tg extends dd{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),i.position.copy(_a),Pr.copy(i.position),Pr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Pr),i.updateMatrixWorld(),a.makeTranslation(-_a.x,-_a.y,-_a.z),fc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc)}}class ni extends zs{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new tg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ng extends dd{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mn extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new ng}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ga extends zs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ud{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const ot=60,We=40,Ut=14,Dr=[new L(-16,0,6),new L(0,0,-6),new L(16,0,6)];function ig(){const n=new da;n.background=new Be(1711918),n.fog=new Ha(1711918,40,90),n.add(new Ga(13691135,.55));const e=[[-18,Ut-.5,8],[-18,Ut-.5,-8],[0,Ut-.5,8],[0,Ut-.5,-8],[18,Ut-.5,8],[18,Ut-.5,-8]];for(const[i,a,s]of e){const r=new ni(15267071,1.2,28);r.position.set(i,a,s),n.add(r)}const t=new Mn(16777215,.5);return t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),n.add(t),{scene:n}}function ag(n){sg(n),rg(n),og(n)}function sg(n){const e=new j({color:15263976,roughness:.8,metalness:0}),t=new j({color:14541804,roughness:.85,metalness:0}),i=new j({color:16119288,roughness:.9,metalness:0});new j({color:2764605,roughness:.7,metalness:.1});const a=new C(new yt(ot,We),e);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);const s=new ua({color:13421772});for(let u=-ot/2;u<=ot/2;u+=3){const x=new gt().setFromPoints([new L(u,.01,-We/2),new L(u,.01,We/2)]);n.add(new zn(x,s))}for(let u=-We/2;u<=We/2;u+=3){const x=new gt().setFromPoints([new L(-ot/2,.01,u),new L(ot/2,.01,u)]);n.add(new zn(x,s))}const r=new C(new yt(ot,We),i);r.rotation.x=Math.PI/2,r.position.y=Ut,n.add(r);const o=[{w:ot,h:Ut,x:0,y:Ut/2,z:-We/2,ry:0},{w:ot,h:Ut,x:0,y:Ut/2,z:We/2,ry:Math.PI},{w:We,h:Ut,x:-ot/2,y:Ut/2,z:0,ry:Math.PI/2},{w:We,h:Ut,x:ot/2,y:Ut/2,z:0,ry:-Math.PI/2}];for(const u of o){const x=new C(new yt(u.w,u.h),t);x.position.set(u.x,u.y,u.z),x.rotation.y=u.ry,n.add(x)}const l=new _e({color:11581640}),c=[{w:ot,x:0,z:-We/2+.05,ry:0},{w:ot,x:0,z:We/2-.05,ry:Math.PI},{w:We,x:-ot/2+.05,z:0,ry:Math.PI/2},{w:We,x:ot/2-.05,z:0,ry:-Math.PI/2}];for(const u of c){const x=new C(new te(u.w,.5,.1),l);x.position.set(u.x,.25,u.z),x.rotation.y=u.ry,n.add(x)}const d=new _e({color:16777215}),h=new j({color:15663088,emissive:15663088,emissiveIntensity:.9});for(const[u,,x]of[[-18,0,8],[-18,0,-8],[0,0,8],[0,0,-8],[18,0,8],[18,0,-8]]){const b=new C(new te(6,.25,.8),d);b.position.set(u,Ut-.12,x),n.add(b);const _=new C(new he(.1,.1,5.6,16),h);_.rotation.z=Math.PI/2,_.position.set(u,Ut-.3,x),n.add(_)}const f=new _e({color:9083568}),p=new _e({color:5929626}),g=new C(new te(3.2,7.2,.15),f);g.position.set(0,3.6,We/2-.05),n.add(g);const v=new C(new te(2.8,6.8,.1),p);v.position.set(0,3.4,We/2-.04),n.add(v);const m=new _e({color:6993128,transparent:!0,opacity:.35});for(const u of[-14,0,14]){const x=new C(new te(5,4,.15),f);x.position.set(u,8,-We/2+.05),n.add(x);const b=new C(new te(4.4,3.4,.08),m);b.position.set(u,8,-We/2+.06),n.add(b)}}function rg(n){const e=new j({color:15791336,roughness:.55,metalness:.05}),t=new j({color:4871528,roughness:.7,metalness:.05}),i=new j({color:13687016,roughness:.6,metalness:0}),a=new j({color:8952234,roughness:.4,metalness:.5}),s=[{x:-16,z:5},{x:0,z:-6},{x:16,z:5}];for(const{x:m,z:u}of s){const x=new C(new te(7,3,3),t);x.position.set(m,1.5,u),x.castShadow=!0,n.add(x);const b=new C(new te(7.2,.15,3.2),e);b.position.set(m,3.08,u),b.castShadow=!0,n.add(b);for(const[_,k]of[[-3.2,-1.3],[3.2,-1.3],[-3.2,1.3],[3.2,1.3]]){const w=new C(new te(.2,3,.2),a);w.position.set(m+_,1.5,u+k),n.add(w)}for(let _=0;_<3;_++){const k=new C(new te(2,.6,.05),i);k.position.set(m-2.2+_*2.2,1.8,u+1.52),n.add(k)}if(m===0){const _=new j({color:13426158,roughness:.3,metalness:.3}),k=new C(new te(1.2,.2,.9),_);k.position.set(2.5,3.15,u),n.add(k);const w=new C(new he(.05,.05,.6,16),a);w.position.set(2.5,3.55,u-.3),n.add(w);const S=new C(new at(.09,16,14),a);S.position.set(2.5,3.85,u),n.add(S)}}for(let m=-22;m<=22;m+=11)for(let u=0;u<3;u++){const x=new C(new te(9,.12,1.2),i);x.position.set(m,5+u*2.2,-We/2+.8),n.add(x);for(const b of[-4,4]){const _=new C(new te(.1,.5,1),a);_.position.set(m+b,4.75+u*2.2,-We/2+.8),n.add(_)}}const r=new C(new te(3,3,22),t);r.position.set(-ot/2+2,1.5,0),r.castShadow=!0,n.add(r);const o=new C(new te(3.2,.15,22.2),e);o.position.set(-ot/2+2,3.08,0),n.add(o);const l=new C(new te(3,3,22),t);l.position.set(ot/2-2,1.5,0),l.castShadow=!0,n.add(l);const c=new C(new te(3.2,.15,22.2),e);c.position.set(ot/2-2,3.08,0),n.add(c);const d=new j({color:6978186,roughness:.6,metalness:.1}),h=new j({color:8965341,transparent:!0,opacity:.4,roughness:.1,metalness:0}),f=new C(new te(6,5,2.5),d);f.position.set(-20,4.5,-We/2+1.5),n.add(f);const p=new C(new te(5,3,.08),h);p.position.set(-20,4.8,-We/2+2.8),n.add(p);const g=new C(new te(6.2,3,2.8),t);g.position.set(-20,1.5,-We/2+1.6),n.add(g);const v=new C(new te(6.2,.15,2.8),e);v.position.set(-20,3.08,-We/2+1.6),n.add(v)}function og(n){const e=new j({color:11197934,transparent:!0,opacity:.7,roughness:.05,metalness:0}),t=new j({color:4033344,transparent:!0,opacity:.85,roughness:.15,metalness:0}),i=new j({color:8010768,transparent:!0,opacity:.85,roughness:.2,metalness:0}),a=new j({color:12597547,transparent:!0,opacity:.85,roughness:.15,metalness:0}),s=new j({color:16777215,roughness:.7,metalness:0}),r=new j({color:8952234,roughness:.35,metalness:.6});new j({color:16774604,roughness:.8});const o=[{x:-24,y:5.3,z:-We/2+.7,mat:t,r:.22,h:.7},{x:-22,y:5.3,z:-We/2+.7,mat:i,r:.18,h:.9},{x:-20,y:5.3,z:-We/2+.7,mat:a,r:.2,h:.75},{x:-18,y:5.3,z:-We/2+.7,mat:e,r:.16,h:.65},{x:-13,y:5.3,z:-We/2+.7,mat:i,r:.2,h:.85},{x:-11,y:5.3,z:-We/2+.7,mat:t,r:.25,h:.6},{x:-2,y:5.3,z:-We/2+.7,mat:a,r:.18,h:.8},{x:0,y:5.3,z:-We/2+.7,mat:e,r:.22,h:.7},{x:2,y:5.3,z:-We/2+.7,mat:t,r:.2,h:.9},{x:10,y:5.3,z:-We/2+.7,mat:i,r:.19,h:.7},{x:12,y:5.3,z:-We/2+.7,mat:a,r:.21,h:.8},{x:22,y:5.3,z:-We/2+.7,mat:e,r:.23,h:.65},{x:24,y:5.3,z:-We/2+.7,mat:t,r:.17,h:.9},{x:-23,y:7.5,z:-We/2+.7,mat:a,r:.2,h:.8},{x:-21,y:7.5,z:-We/2+.7,mat:e,r:.18,h:.7},{x:-1,y:7.5,z:-We/2+.7,mat:i,r:.22,h:.85},{x:1,y:7.5,z:-We/2+.7,mat:t,r:.2,h:.7},{x:21,y:7.5,z:-We/2+.7,mat:a,r:.19,h:.75}];for(const w of o){const S=new C(new he(w.r,w.r*.9,w.h,20),w.mat);S.position.set(w.x,w.y+w.h/2,w.z),n.add(S);const I=new C(new he(w.r*.7,w.r*.7,.12,20),s);I.position.set(w.x,w.y+w.h+.06,w.z),n.add(I)}lg(n,-ot/2+2.5,3.2,-6,r,s),cg(n,-ot/2+2.5,3.2,4,r,s),dg(n,ot/2-2.5,3.2,-5,r);for(let w=0;w<4;w++){const S=w%2===0?i:e,I=new C(new he(.22,.2,.5,20),S);I.position.set(ot/2-2.5+(w-1.5)*.7,3.5,5+w%2*.6),n.add(I)}const l=new _e({color:16769154}),c=new C(new te(3.5,5,.06),l);c.position.set(ot/2-.06,6,10),c.rotation.y=-Math.PI/2,n.add(c);const d=kn(`⚠ KESELAMATAN
LABORATORIUM`,15022389);d.scale.set(4,1.6,1),d.position.set(ot/2-.3,6.5,10),n.add(d);const h=new C(new he(.06,.06,1.5,16),r);h.position.set(-ot/2+.2,9,14),h.rotation.z=Math.PI/2,n.add(h);for(const w of[-.5,0,.5]){const S=new C(new mn(.14,.03,12,24,Math.PI),r);S.position.set(-ot/2+.25,8.6,14+w),S.rotation.y=Math.PI/2,n.add(S)}const f=new _e({color:16448250}),p=new C(new te(.05,2.5,1.5),f);p.position.set(-ot/2+.28,7.8,14),n.add(p);const g=new _e({color:15158332}),v=new _e({color:15965202});for(const[w,S,I]of[[-8,14,g],[8,14,v]]){const M=new C(new he(.45,.38,1,20),I);M.position.set(w,.5,S),n.add(M)}const m=new _e({color:12597547}),u=new C(new he(.2,.22,1.1,20),m);u.position.set(ot/2-.8,1.8,-14),n.add(u);const x=new C(new he(.1,.2,.3,20),r);x.position.set(ot/2-.8,2.5,-14),n.add(x);const b=new _e({color:16777215}),_=new C(new he(.7,.7,.1,24),b);_.rotation.x=Math.PI/2,_.position.set(8,10.5,-We/2+.1),n.add(_);const k=new C(new mn(.7,.06,12,40),r);k.rotation.x=Math.PI/2,k.position.set(8,10.5,-We/2+.12),n.add(k)}function lg(n,e,t,i,a,s){const r=new C(new he(.65,.7,.7,24),s);r.position.set(e,t+.35,i),n.add(r);const o=new C(new he(.66,.66,.12,24),a);o.position.set(e,t+.76,i),n.add(o);const l=new C(new at(.1,16,14),a);l.position.set(e,t+.88,i),n.add(l)}function cg(n,e,t,i,a,s){const r=new C(new te(.7,.12,.55),a);r.position.set(e,t+.06,i),n.add(r);const o=new C(new te(.12,1.4,.12),a);o.position.set(e,t+.76,i-.1),n.add(o);const l=new C(new he(.1,.12,.5,16),a);l.position.set(e,t+1.7,i-.15),l.rotation.z=.4,n.add(l);const c=new C(new he(.06,.08,.35,16),s);c.position.set(e+.05,t+.75,i+.05),n.add(c)}function dg(n,e,t,i,a){const s=new j({color:2899536,roughness:.6,metalness:.15}),r=new C(new te(1,.18,1),s);r.position.set(e,t+.09,i),n.add(r);const o=new C(new he(.38,.38,.04,20),a);o.position.set(e,t+.2,i),n.add(o);const l=new j({color:16737792,emissive:16737792,emissiveIntensity:.6,transparent:!0,opacity:.7}),c=new C(new yn(.3,20),l);c.rotation.x=-Math.PI/2,c.position.set(e,t+.22,i),n.add(c);const d=new _e({color:11197934,transparent:!0,opacity:.8}),h=new C(new at(.3,20,16),d);h.position.set(e,t+.55,i),n.add(h);const f=new C(new he(.08,.12,.35,20),d);f.position.set(e,t+.9,i),n.add(f)}function hd(n){const e=[];{const t=Dr[0],i=new Yt;i.position.copy(t);const a=new _e({color:11197934,transparent:!0,opacity:.75}),s=new _e({color:7027216,transparent:!0,opacity:.9}),r=new _e({color:8952234}),o=new _e({color:16448250}),l=new _e({color:15791336}),c=new C(new te(6.8,.12,2.8),l);c.position.set(0,3.14,0),i.add(c);const d=new _e({color:14540253}),h=new C(new te(2,.18,.45),d);h.position.set(-1.5,3.3,.2),i.add(h);for(let M=0;M<5;M++){const A=new C(new he(.07,.07,.55,16),s);A.position.set(-2.2+M*.42,3.62,.2),i.add(A)}const f=new C(new at(.38,20,16),a);f.position.set(.8,3.62,-.3),i.add(f);const p=new C(new he(.1,.15,.45,20),a);p.position.set(.8,4.05,-.3),i.add(p);const g=new C(new at(.32,18,16),s);g.position.set(.8,3.58,-.3),i.add(g);const v=new C(new he(.04,.04,1,16),r);v.position.set(.8,4.2,-.3),i.add(v);const m=new C(new te(.5,.35,.15),o);m.position.set(.8,4.85,-.3),i.add(m);const u=new _e({color:16775399}),x=new C(new te(.7,.9,.05),u);x.position.set(2.3,3.85,-.5),x.rotation.y=-.3,i.add(x);const b=new _e({color:8952234}),_=new C(new te(.35,.12,.06),b);_.position.set(2.3,4.34,-.46),_.rotation.y=-.3,i.add(_);const k=kn("❓ Fenomena 1 — Kualitas Air",54527);k.position.set(0,3.2,0),i.add(k);const w=kn("✅ Selesai",3066993);w.position.set(0,4.2,0),w.visible=!1,i.add(w);const S=new j({color:54527,emissive:54527,emissiveIntensity:.5,transparent:!0,opacity:.25,side:Ht}),I=new C(new yn(3.2,32),S);I.rotation.x=-Math.PI/2,I.position.y=.02,i.add(I),n.add(i),e.push({group:i,glowMat:S,idx:0,pos:t,done:!1,doneSprite:w,_probe:v,_meter:m})}{const t=Dr[1],i=new Yt;i.position.copy(t);const a=new _e({color:11197934,transparent:!0,opacity:.7}),s=new _e({color:5910024,transparent:!0,opacity:.9});new _e({color:1735226,transparent:!0,opacity:.85});const r=new _e({color:8952234}),o=new _e({color:16448250});new _e({color:15965202});const l=new C(new te(6.8,.12,2.8),new _e({color:15791336}));l.position.set(0,3.14,0),i.add(l);const c=new C(new te(.22,.9,.14),o);c.position.set(-2,3.75,0),i.add(c);const d=new C(new te(.16,.3,.05),new _e({color:1714714}));d.position.set(-2,3.88,.1),i.add(d);const h=new C(new he(.03,.03,.5,16),r);h.position.set(-2,3.05,0),i.add(h);const f=new C(new he(.42,.38,.8,20),a);f.position.set(-.5,3.7,.2),i.add(f);const p=new C(new he(.38,.34,.6,20),s);p.position.set(-.5,3.6,.2),i.add(p),new _e({color:2899536});const g=new C(new he(.05,.05,1.4,14),r);g.position.set(1.2,3.9,-.7),i.add(g);const v=new C(new te(1.4,1,.05),new _e({color:16775399}));v.position.set(1.2,4.85,-.7),i.add(v);const m=kn("K⁺  Ca²⁺  Cl⁻",1735226);m.scale.set(2.8,.75,1),m.position.set(1.2,4.92,-.6),i.add(m);const u=new C(new te(.55,.4,.22),o);u.position.set(2.2,3.4,0),i.add(u);const x=new C(new te(.38,.22,.06),new _e({color:662026}));x.position.set(2.2,3.44,.14),i.add(x);for(const[S,I]of[[2.8,s],[3.3,a]]){const M=new C(new he(.18,.16,.7,20),I);M.position.set(S,3.55,-.5),i.add(M)}const b=kn("❓ Fenomena 2 — Komposisi TDS",16750848);b.position.set(0,3.2,0),i.add(b);const _=kn("✅ Selesai",3066993);_.position.set(0,4.2,0),_.visible=!1,i.add(_);const k=new j({color:16750848,emissive:16750848,emissiveIntensity:.5,transparent:!0,opacity:.25,side:Ht}),w=new C(new yn(3.2,32),k);w.rotation.x=-Math.PI/2,w.position.y=.02,i.add(w),n.add(i),e.push({group:i,glowMat:k,idx:1,pos:t,done:!1,doneSprite:_,_beaker:f,_liq:p})}{const t=Dr[2],i=new Yt;i.position.copy(t);const a=new _e({color:8018990}),s=new _e({color:5025616}),r=new _e({color:11059264}),o=new _e({color:11887901}),l=new _e({color:11197934,transparent:!0,opacity:.7}),c=new _e({color:16448250}),d=new _e({color:8952234}),h=new C(new te(6.8,.12,2.8),new _e({color:15791336}));h.position.set(0,3.14,0),i.add(h);const f=[{x:-2,mat:s,height:.9,label:`Thn 1
62%`,lColor:5025616},{x:0,mat:r,height:1.1,label:`Thn 2
78%`,lColor:11059264},{x:2,mat:o,height:.35,label:`Thn 3
34%`,lColor:15158332}];for(const N of f){const G=new C(new te(1.2,.2,.9),a);G.position.set(N.x,3.35,.2),i.add(G);for(let P=-1;P<=1;P+=2){const O=new C(new he(.04,.055,N.height,5),N.mat),W=N.x+P*.22;O.position.set(W,3.45+N.height/2,.2),i.add(O);const Z=new C(new at(N.height>.8?.14:.06,12,8),N.mat);Z.position.set(W+(N.mat===o?.1:0),3.45+N.height+.08,.2),i.add(Z)}const ie=kn(N.label,N.lColor);ie.scale.set(2,.75,1),ie.position.set(N.x,3.45+N.height+.6,.2),i.add(ie)}const p=new C(new te(.22,.75,.14),c);p.position.set(-2.9,3.65,-.4),i.add(p);const g=new C(new he(.025,.025,.55,16),d);g.position.set(-2.9,3.12,-.4),i.add(g);const v=new C(new te(.15,.22,.05),new _e({color:662026}));v.position.set(-2.9,3.72,-.33),i.add(v);const m=new _e({color:8018990,transparent:!0,opacity:.9}),u=new C(new he(.28,.25,.6,20),l);u.position.set(2.8,3.55,-.4),i.add(u);const x=new C(new he(.24,.22,.38,20),m);x.position.set(2.8,3.44,-.4),i.add(x);const b=new _e({color:16775399}),_=new C(new te(.8,1,.05),b);_.position.set(3.2,3.95,-.6),_.rotation.y=-.25,i.add(_);const k=[5025616,11059264,15158332],w=[.22,.3,.1];for(let N=0;N<3;N++){const G=new _e({color:k[N]}),ie=new C(new te(.12,w[N],.04),G);ie.position.set(3.05+N*.2,3.5+w[N]/2,-.57),ie.rotation.y=-.25,i.add(ie)}const S=kn("❓ Fenomena 3 — Panen Padi",4521864);S.position.set(0,3.2,0),i.add(S);const I=kn("✅ Selesai",3066993);I.position.set(0,4.4,0),I.visible=!1,i.add(I);const M=new j({color:4521864,emissive:4521864,emissiveIntensity:.5,transparent:!0,opacity:.25,side:Ht}),A=new C(new yn(3.2,32),M);A.rotation.x=-Math.PI/2,A.position.y=.02,i.add(A),n.add(i),e.push({group:i,glowMat:M,idx:2,pos:t,done:!1,doneSprite:I,_stems:i.children})}return e}function kn(n,e){const t=document.createElement("canvas");t.width=320,t.height=72;const i=t.getContext("2d");i.fillStyle="rgba(10,20,40,0.85)",i.beginPath(),i.roundRect(4,8,312,56,16),i.fill();const a=e>>16&255,s=e>>8&255,r=e&255;i.strokeStyle=`rgb(${a},${s},${r})`,i.lineWidth=3,i.beginPath(),i.roundRect(4,8,312,56,16),i.stroke(),i.fillStyle=`rgb(${a},${s},${r})`,i.font="bold 24px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,160,36);const o=new Fs(t),l=new ai({map:o,transparent:!0}),c=new Ai(l);return c.scale.set(5,1.1,1),c}function ug(n,e){for(const t of n){if(t.done){t.glowMat.emissiveIntensity=.15+Math.sin(e*1.2)*.05,t.glowMat.opacity=.12;continue}const i=.5+.5*Math.sin(e*2.2+t.idx*1.3);if(t.glowMat.emissiveIntensity=.3+i*.5,t.glowMat.opacity=.15+i*.15,t.idx===0&&(t._probe&&(t._probe.position.y=4.2+Math.sin(e*1.4)*.12),t._meter&&(t._meter.position.y=4.85+Math.sin(e*1.4)*.12)),t.idx===1&&t._liq){const a=1+Math.sin(e*2.5)*.04;t._liq.scale.set(1,a,1)}t.idx===2&&(t.group.rotation.z=Math.sin(e*.6)*.008),t.group.position.y=Math.sin(e*.5+t.idx)*.04}}const St=70,Xt=50,rt=18;new L(-18,0,10),new L(0,0,-8),new L(18,0,10);function hg(){const n=new da;n.background=new Be(1708552),n.fog=new Ha(1708552,35,85),n.add(new Ga(16771248,.4));const e=[[-22,rt-1,10],[-22,rt-1,-10],[0,rt-1,10],[0,rt-1,-10],[22,rt-1,10],[22,rt-1,-10]];for(const[s,r,o]of e){const l=new ni(16765056,1.1,30);l.position.set(s,r,o),n.add(l)}const t=new ni(16737792,1.5,18);t.position.set(-18,6,8),n.add(t);const i=new ni(8956671,.8,14);i.position.set(0,6,-6),n.add(i);const a=new Mn(16773324,.4);return a.position.set(10,20,10),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),n.add(a),{scene:n}}function pg(n){fg(n),gg(n),_g(n)}function fg(n){const e=new j({color:5919299,roughness:.9,metalness:0}),t=new j({color:4866096,roughness:.85,metalness:0}),i=new j({color:3024410,roughness:.9,metalness:0}),a=new C(new yt(St,Xt),e);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);const s=new ua({color:3813920});for(let g=-St/2;g<=St/2;g+=5){const v=new gt().setFromPoints([new L(g,.01,-Xt/2),new L(g,.01,Xt/2)]);n.add(new zn(v,s))}for(let g=-Xt/2;g<=Xt/2;g+=5){const v=new gt().setFromPoints([new L(-St/2,.01,g),new L(St/2,.01,g)]);n.add(new zn(v,s))}const r=new C(new yt(St,Xt),i);r.rotation.x=Math.PI/2,r.position.y=rt,n.add(r);const o=new _e({color:1971728});for(let g=-St/2;g<=St/2;g+=4){const v=new C(new te(.4,.15,Xt),o);v.position.set(g,rt,0),n.add(v)}const l=.6,c=[{pos:[0,rt/2,-Xt/2],size:[St,rt,l]},{pos:[0,rt/2,Xt/2],size:[St,rt,l]},{pos:[-St/2,rt/2,0],size:[l,rt,Xt]},{pos:[St/2,rt/2,0],size:[l,rt,Xt]}];for(const g of c){const v=new C(new te(...g.size),t);v.position.set(...g.pos),n.add(v)}const d=new _e({color:3813408}),h=[[-St/2+1,rt/2,-Xt/2+1],[St/2-1,rt/2,-Xt/2+1],[-St/2+1,rt/2,Xt/2-1],[St/2-1,rt/2,Xt/2-1],[-St/2+1,rt/2,0],[St/2-1,rt/2,0]];for(const[g,v,m]of h){const u=new C(new te(1.2,rt,1.2),d);u.position.set(g,v,m),n.add(u)}const f=new _e({color:8947848}),p=new j({color:16774592,emissive:16765024,emissiveIntensity:1.2});for(const[g,,v]of mg){const m=new C(new te(1.5,.4,.6),f);m.position.set(g,rt-.8,v),n.add(m);const u=new C(new at(.25,16,10),p);u.position.set(g,rt-1.1,v),n.add(u)}}const mg=[[-22,rt-1,10],[-22,rt-1,-10],[0,rt-1,10],[0,rt-1,-10],[22,rt-1,10],[22,rt-1,-10]];function gg(n){vg(n,-18,0,6),xg(n,0,0,-12),bg(n,18,0,6)}function vg(n,e,t,i){const a=new Yt;a.position.set(e,t,i);const s=new _e({color:3944480}),r=new C(new te(5,.4,5),s);r.position.y=.2,a.add(r);const o=new j({color:7372944,metalness:.7,roughness:.3}),l=new C(new he(2,2,5.5,24),o);l.position.y=3.15,a.add(l);const c=new C(new at(2,24,14,0,Math.PI*2,0,Math.PI/2),o);c.position.y=5.9,a.add(c);const d=new C(new at(2,24,14,0,Math.PI*2,Math.PI/2,Math.PI/2),o);d.position.y=.4,a.add(d);const h=new _e({color:9474208});for(let k=1.5;k<=5.5;k+=1.5){const w=new C(new mn(2.06,.09,10,40),h);w.rotation.x=Math.PI/2,w.position.y=k+.5,a.add(w)}const f=new j({color:6719658,metalness:.6,roughness:.4}),p=new C(new he(.12,.12,2,16),f);p.position.set(.8,7.2,0),a.add(p);const g=new C(new he(.15,.15,1.8,16),f);g.rotation.z=Math.PI/2,g.position.set(-2.8,1.2,0),a.add(g);const v=new C(new at(.18,16,14),f);v.position.set(-3.7,1.2,0),a.add(v);const m=new C(new he(.15,.15,1.2,16),f);m.position.set(-3.7,.6,0),a.add(m);const u=new j({color:13378082,metalness:.5,roughness:.5}),x=new C(new he(.22,.22,.5,16),u);x.rotation.z=Math.PI/2,x.position.set(-2.85,2.5,0),a.add(x);const b=new C(new he(.1,.1,2.5,16),f);b.position.set(-.5,8,0),a.add(b);const _=new j({color:8965375,transparent:!0,opacity:.35,roughness:.2,metalness:0});for(let k=0;k<5;k++){const w=new C(new at(.12+k*.04,12,10),_);w.position.set(-.5,8.8+k*.28,0),w.userData.bubbleIndex=k,a.add(w)}return Eo(a,`FERMENTOR
DRUM`,0,9.5,0,16752704),n.add(a),a}function xg(n,e,t,i){const a=new Yt;a.position.set(e,t,i);const s=new j({color:11189196,metalness:.8,roughness:.25}),r=new j({color:5596791,metalness:.7,roughness:.35}),o=new j({color:8952234,metalness:.6,roughness:.4}),l=new C(new te(4,.4,4),r);l.position.y=.2,a.add(l);const c=new C(new he(.8,1,8,24),s);c.position.y=4.4,a.add(c);for(let S=1.5;S<=7.5;S+=1.2){const I=new C(new he(.95,.95,.12,24),r);I.position.y=S,a.add(I)}const d=new C(new he(.7,.7,1.5,20),r);d.position.y=9.2,a.add(d);const h=new j({color:8956620,metalness:.8,roughness:.2});for(let S=0;S<4;S++){const I=new C(new mn(.5,.06,12,36),h);I.rotation.x=Math.PI/2,I.position.y=9.1+S*.28,a.add(I)}const f=new C(new at(.7,18,10,0,Math.PI*2,0,Math.PI/2),r);f.position.y=10.2,a.add(f);const p=new C(new he(.12,.12,2.5,16),o);p.rotation.z=Math.PI/2,p.position.set(-1.85,6.5,0),a.add(p);const g=new C(new he(.1,.1,1.5,16),o);g.position.set(.5,11,0),a.add(g);const v=new C(new he(.13,.13,2,16),o);v.rotation.z=Math.PI/2,v.position.set(1.8,9.6,0),a.add(v);const m=new C(new he(.16,.16,1.4,16),o);m.position.set(.8,.3,0),a.add(m);const u=new j({color:8016432,metalness:.3,roughness:.7}),x=new C(new he(.65,.6,1.2,20),u);x.position.set(.8,-.2,0),a.add(x);const b=new C(new he(.66,.66,.08,20),r);b.position.set(.8,.42,0),a.add(b);const _=new j({color:11197951,transparent:!0,opacity:.5}),k=new C(new he(.07,.07,4,16),_);k.position.set(-.92,3,.7),a.add(k);const w=new C(new he(.06,.06,2.5,16),new j({color:6332608,transparent:!0,opacity:.7}));return w.position.set(-.92,2.25,.7),a.add(w),Eo(a,`DESTILATOR
KOLOM`,0,11.5,0,8441087),n.add(a),a}function bg(n,e,t,i){const a=new Yt;a.position.set(e,t,i);const s=new j({color:4473924,metalness:.6,roughness:.5}),r=new _e({color:9127187}),o=new j({color:16737792,emissive:16724736,emissiveIntensity:.9}),l=new j({color:7368816,metalness:.8,roughness:.3}),c=new C(new te(3.5,2,3),r);c.position.y=1,a.add(c);const d=new C(new te(3.5,.15,3),s);d.position.y=2.08,a.add(d);for(let S=-1.4;S<=1.4;S+=.5){const I=new C(new te(.1,.16,2.5),new _e({color:2236962}));I.position.set(S,2.08,0),a.add(I)}const h=new C(new Bn(.5,1.2,14),o);h.position.y=2.9,a.add(h);const f=new C(new Bn(.3,.9,14),o.clone());f.position.set(.6,2.85,.4),a.add(f);const p=new C(new he(1.2,1,1.4,24),l);p.position.y=3.75,a.add(p);const g=new j({color:8145424,transparent:!0,opacity:.85}),v=new C(new he(1.18,1.18,.8,24),g);v.position.y=3.85,a.add(v);const m=new j({color:14540253,transparent:!0,opacity:.25});for(let S=0;S<3;S++){const I=new C(new at(.25+S*.12,12,10),m);I.position.set((S-1)*.4,5+S*.5,(S-1)*.3),I.userData.steamIndex=S,a.add(I)}const u=new j({color:13421772,metalness:.5}),x=new C(new he(.22,.22,.08,20),u);x.rotation.x=Math.PI/2,x.position.set(1.5,3.2,-1.4),a.add(x);const b=new C(new yn(.2,12),new j({color:16777215}));b.rotation.x=-Math.PI/2,b.position.set(1.5,3.21,-1.62),a.add(b);const _=new _e({color:3355443}),k=new C(new he(.25,.3,3,20),_);k.position.set(-1.2,3.5,-1.2),a.add(k);const w=new j({color:8947848,transparent:!0,opacity:.2});for(let S=0;S<4;S++){const I=new C(new at(.18+S*.1,12,10),w);I.position.set(-1.2,5+S*.6,-1.2),I.userData.smokeIndex=S,a.add(I)}return Eo(a,`KOMPOR
PEMANAS`,0,7.5,0,16746564),n.add(a),a}function _g(n){const e=new j({color:5910544,metalness:.2,roughness:.8}),t=new j({color:8947848,metalness:.6,roughness:.4}),i=[[-28,0,-16],[-28,0,-12],[-28,0,-8],[-24,0,-16],[-24,0,-12],[-24,0,-8]];for(const[d,,h]of i){const f=new C(new he(.7,.65,1.5,20),e);f.position.set(d,.75,h),n.add(f);const p=new C(new mn(.72,.05,10,28),t);p.rotation.x=Math.PI/2,p.position.set(d,1.2,h),n.add(p);const g=p.clone();g.position.set(d,.4,h),n.add(g)}Ts(n,`MOLASSES
STORAGE`,-26,3.2,-12,16755234,1.8);const a=new _e({color:5275840}),s=[[28,0,-18],[28,0,-15],[28,0,-12]];for(const[d,,h]of s){const f=new C(new te(.8,.5,1.2),a);f.position.set(d,.25,h),n.add(f);const p=new C(new te(.8,.5,1.2),a);p.position.set(d+.9,.25,h),n.add(p)}Ts(n,"NPK / UREA",29,2.8,-15,8956671,1.6);const r=new j({color:13412928,metalness:.5});for(let d=0;d<3;d++){const h=new C(new he(.3,.3,.9,20),r);h.position.set(28,.45,-6+d*1.2),n.add(h)}Ts(n,`RAGI
(YEAST)`,29,2.4,-5,16768384,1.5),Ur(n,-St/2+.8,5,-10,`⚠️ BAHAYA
GAS BERTEKANAN`),Ur(n,-St/2+.8,5,10,`🔥 AREA
PANAS`),Ur(n,St/2-.8,5,-10,`☣️ LIMBAH
VINASSE`),Ir(n,-18,.05,5,0),Ir(n,-9,.05,3,-Math.PI/4),Ir(n,9,.05,3,Math.PI/4),yg(n);const o=new j({color:5583633}),l=new C(new te(2.5,.15,2.5),o);l.position.set(0,.08,-12),n.add(l);const c=new C(new te(2.3,.08,2.3),new j({color:3807232,transparent:!0,opacity:.9}));c.position.set(0,.12,-12),n.add(c)}function yg(n){const e=new j({color:10066346,metalness:.6,roughness:.4}),t=new C(new he(.14,.14,22,16),e);t.rotation.z=Math.PI/2,t.position.set(-9,11,0),n.add(t);const i=new C(new he(.14,.14,5,16),e);i.position.set(0,8.5,-12),n.add(i);const a=new C(new he(.14,.14,20,16),e);a.rotation.z=Math.PI/2,a.position.set(9,11,0),n.add(a);for(const[s,r]of[[-18,6],[0,-12],[18,6]]){const o=new C(new he(.14,.14,3,16),e);o.position.set(s,9.5,r),n.add(o)}}function Ir(n,e,t,i,a){const s=new _e({color:16755200}),r=new C(new te(.3,.05,5),s);r.position.set(e,t,i),r.rotation.y=a,n.add(r);const o=new C(new Bn(.5,.9,4),s);o.rotation.x=Math.PI/2,o.rotation.z=a,o.position.set(e+Math.sin(a)*3,t,i+Math.cos(a)*-3),n.add(o)}function Ur(n,e,t,i,a){const s=new _e({color:16763904}),r=new C(new te(1.8,1.2,.06),s);r.position.set(e,t,i),e<0?r.rotation.y=Math.PI/2:r.rotation.y=-Math.PI/2,n.add(r),Ts(n,a,e,t,i,2236962,1.2,r.rotation.y)}function Eo(n,e,t,i,a,s=16777215){const r=e.split(`
`),o=document.createElement("canvas");o.width=256,o.height=64*r.length;const l=o.getContext("2d");l.fillStyle="rgba(0,0,0,0)",l.fillRect(0,0,o.width,o.height);const c="#"+s.toString(16).padStart(6,"0");l.fillStyle=c,l.font="bold 28px sans-serif",l.textAlign="center",l.textBaseline="middle",r.forEach((p,g)=>{l.fillText(p,128,32+g*64)});const d=new Fs(o),h=new ai({map:d,depthTest:!1}),f=new Ai(h);f.scale.set(3.5,1*r.length,1),f.position.set(t,i,a),n.add(f)}function Ts(n,e,t,i,a,s=16777215,r=2,o=0){const l=e.split(`
`),c=document.createElement("canvas");c.width=256,c.height=64*l.length;const d=c.getContext("2d");d.fillStyle="rgba(0,0,0,0)",d.fillRect(0,0,c.width,c.height);const h="#"+s.toString(16).padStart(6,"0");d.fillStyle=h,d.font="bold 28px sans-serif",d.textAlign="center",d.textBaseline="middle",l.forEach((v,m)=>d.fillText(v,128,32+m*64));const f=new Fs(c),p=new ai({map:f,depthTest:!1}),g=new Ai(p);g.scale.set(r*l.length*.7+1,r*.7*l.length*.5+.5,1),g.position.set(t,i,a),n.add(g)}const pd=60,fd=50,xn=new L(0,0,-10);function Mg(){const n=new da;n.background=new Be(1718810),n.fog=new Ba(1716240,.012),n.add(new Ga(13166784,1));const e=new Mn(16773296,1.8);e.position.set(20,28,20),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.near=.5,e.shadow.camera.far=120,e.shadow.camera.left=-40,e.shadow.camera.right=40,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,n.add(e);const t=new Mn(10535167,.7);t.position.set(-15,20,-15),n.add(t);const i=new ni(8446048,1.6,40);i.position.set(0,6,0),n.add(i);const a=new ni(16772761,1.4,20);return a.position.set(xn.x,8,xn.z),n.add(a),{scene:n}}function wg(n){Sg(n),Eg(n),Tg(n),Ag(n),Lg(n),Cg(n),kg(n)}function Sg(n){const e=new _e({color:1849872});new _e({color:2760202});const t=new C(new yt(pd*2,fd*2),e);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const i=new _e({color:4864032}),a=new C(new yt(3,22),i);a.rotation.x=-Math.PI/2,a.position.set(0,.01,0),n.add(a)}function Eg(n){const e=new _e({color:8017200}),t=new ua({color:4874304}),i=pd/2,a=fd/2,s=[[-i,-a],[i,-a],[i,a],[-i,a],[-i,-a]],r=s.map(([l,c])=>new L(l,1.2,c)),o=new gt().setFromPoints(r);n.add(new zn(o,t));for(let l=0;l<4;l++){const[c,d]=s[l],[h,f]=s[l+1],p=Math.ceil(Math.sqrt((h-c)**2+(f-d)**2)/8);for(let g=0;g<=p;g++){const v=g/p,m=new C(new he(.1,.1,2.4,5),e);m.position.set(c+(h-c)*v,1.2,d+(f-d)*v),n.add(m)}}}function Tg(n){const e=new _e({color:3815472}),t=new _e({color:2762776}),i=new _e({color:1574912,transparent:!0,opacity:.92}),a=new _e({color:667664,transparent:!0,opacity:.85}),s=.6,r=22,o=16,l=1.5,c=new C(new te(r+s*2,l,s),e);c.position.set(0,l/2,-8),n.add(c);const d=c.clone();d.position.set(0,l/2,o/2),n.add(d);const h=new C(new te(s,l,o),e);h.position.set(r/2,l/2,0),n.add(h);const f=h.clone();f.position.set(-r/2,l/2,0),n.add(f);const p=new C(new yt(r,o),t);p.rotation.x=-Math.PI/2,p.position.y=.01,n.add(p);const g=new C(new yt(r-s*2,o-s*2),i);g.rotation.x=-Math.PI/2,g.position.y=.8,n.add(g);const v=new C(new te(s,l,o),e);v.position.set(4,l/2,0),n.add(v);const m=new C(new yt(r/2-4-s*1.5,o-s*2),a);m.rotation.x=-Math.PI/2,m.position.set(r/2-(r/4-2+s*.5)-1.5,.8,0),n.add(m),md(n,`REAKTOR
BIOREMEDIASI`,0,2.5,-o/2-1.2,4259712)}function Ag(n){const e=new _e({color:5271648}),t=new _e({color:3162160}),i=new C(new he(.22,.22,14,20),e);i.rotation.x=Math.PI/2,i.position.set(-1.2,1.8,-3),n.add(i);const a=new C(new te(.5,.5,.5),e);a.position.set(-1.2,1.8,-8),n.add(a);const s=new C(new he(.22,.22,2,20),e);s.position.set(-1.2,.8,-8.2),n.add(s);for(const r of[-2,-5,-8]){const o=new C(new te(.3,.6,.15),t);o.position.set(-.7,2.1,r),n.add(o)}}function Lg(n){const e=new _e({color:9056272}),t=new _e({color:13388320}),i=new _e({color:3160112}),a=xn.x,s=xn.z,r=new C(new he(.15,.2,3.5,16),i);r.position.set(a,1.75,s),n.add(r);const o=new C(new te(1,.8,1.2),e);o.position.set(a,3.5,s),n.add(o);const l=new C(new mn(.55,.1,12,32),t);l.position.set(a,3.5,s-.7),l.rotation.x=Math.PI/2,n.add(l);for(let c=0;c<4;c++){const d=new C(new he(.05,.05,1,14),t);d.rotation.z=c/4*Math.PI,d.position.set(a,3.5,s-.7),n.add(d)}md(n,`KRAN
VINASSE`,a,5.5,s,16752736)}function Cg(n){const e=new _e({color:1728544}),t=new _e({color:2785344,transparent:!0,opacity:.8}),i=[[-7,-4],[-8,0],[-7,3],[-9,-2]];for(const[r,o]of i){const l=new C(new yt(2+Math.random()*1.5,1.2+Math.random()),t);l.rotation.x=-Math.PI/2,l.position.set(r,.85,o),n.add(l)}const a=[[-24,-18],[-20,18],[22,-14],[26,8],[-28,4],[16,20],[-12,-20],[18,-20]];for(const[r,o]of a)Rg(n,r,o,e);const s=new _e({color:9089088});for(let r=-3;r<=3;r++){const o=new C(new he(.07,.09,3.5+Math.random(),6),s);o.position.set(-28+r*.4,1.75,-22+Math.random()*2),n.add(o)}}function Rg(n,e,t,i){const a=.6+Math.random()*.5,s=new C(new Bn(.6+Math.random()*.3,a,6),i);s.position.set(e,a/2,t),n.add(s)}function kg(n){const e=new At({color:1453070,side:Gt}),t=new C(new at(120,20,14),e);n.add(t);const i=new gt,a=180,s=new Float32Array(a*3);for(let r=0;r<a;r++){const o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);s[r*3]=100*Math.sin(l)*Math.cos(o),s[r*3+1]=Math.abs(100*Math.cos(l))+10,s[r*3+2]=100*Math.sin(l)*Math.sin(o)}i.setAttribute("position",new cn(s,3)),n.add(new Bm(i,new ad({color:16777215,size:.5})))}function Pg(n){const e=new At({color:16744480,transparent:!0,opacity:.6,side:Ht}),t=new C(new mn(1.2,.25,10,32),e);t.position.set(xn.x,5.5,xn.z),t.rotation.x=Math.PI/2,n.add(t);const i=new ai({color:3066993}),a=new Ai(i);return a.scale.set(1.5,1.5,1.5),a.position.set(xn.x,7,xn.z),a.visible=!1,n.add(a),{idx:0,pos:{x:xn.x,z:xn.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isValve:!0}}function Dg(n,e){!n||n.done||(n.glowMat.opacity=.4+.35*Math.sin(e*3.5),n.glowMesh.rotation.z=e*1.2)}function md(n,e,t,i,a,s){const r=new C(new te(2.5,.8,.1),new At({color:s}));r.position.set(t,i,a),n.add(r)}const ji=56,Ki=44,bn=new L(0,0,-14);function Ig(){const n=new da;n.background=new Be(1715780),n.fog=new Ba(1583168,.012),n.add(new Ga(10537192,1));const e=new Mn(15267071,1.6);e.position.set(0,20,5),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=80,e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,n.add(e);const t=new ni(6343935,2,28);t.position.set(bn.x,4,bn.z),n.add(t);const i=new Mn(9482448,.8);return i.position.set(-18,10,-10),n.add(i),{scene:n}}function Ug(n){Ng(n),Og(n),Fg(n),zg(n),Bg(n)}function Ng(n){const e=new j({color:1712688,roughness:.9,metalness:.05}),t=new j({color:1846332,roughness:.85,metalness:0}),i=new j({color:1120288,roughness:1,metalness:0}),a=ji/2,s=Ki/2,r=10,o=new C(new yt(ji,Ki),e);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);const l=new C(new yt(ji,Ki),i);l.rotation.x=Math.PI/2,l.position.y=r,n.add(l);const c=[{pos:[0,r/2,-s],rot:[0,0,0],size:[ji,r]},{pos:[0,r/2,s],rot:[0,Math.PI,0],size:[ji,r]},{pos:[-a,r/2,0],rot:[0,Math.PI/2,0],size:[Ki,r]},{pos:[a,r/2,0],rot:[0,-Math.PI/2,0],size:[Ki,r]}];for(const f of c){const p=new C(new yt(...f.size),t);p.position.set(...f.pos),p.rotation.set(...f.rot),n.add(p)}const d=new At({color:9488639});for(let f=-18;f<=18;f+=12){const p=new C(new te(.3,.08,18),d);p.position.set(f,r-.05,0),n.add(p)}const h=new ua({color:1716304});for(let f=-a;f<=a;f+=4){const p=[new L(f,.01,-s),new L(f,.01,s)];n.add(new zn(new gt().setFromPoints(p),h))}for(let f=-s;f<=s;f+=4){const p=[new L(-a,.01,f),new L(a,.01,f)];n.add(new zn(new gt().setFromPoints(p),h))}}function Og(n){const e=new j({color:2767434,roughness:.7}),t=new j({color:1714224,roughness:.8}),i=new j({color:2130080,transparent:!0,opacity:.35,roughness:.1,metalness:.1}),a=new j({color:2099712,transparent:!0,opacity:.85,roughness:.3}),s=new j({color:4213328,roughness:.5,metalness:.3});[{x:-16,z:2},{x:0,z:2},{x:16,z:2}].forEach(({x:o,z:l})=>{const c=new C(new te(8,.15,3.5),e);c.position.set(o,3.1,l),c.castShadow=!0,c.receiveShadow=!0,n.add(c);for(const[v,m]of[[-3.5,-1.4],[3.5,-1.4],[-3.5,1.4],[3.5,1.4]]){const u=new C(new te(.15,3.1,.15),t);u.position.set(o+v,1.55,l+m),n.add(u)}const d=new C(new te(3,1.6,1.6),i);d.position.set(o-1,4.1,l),n.add(d);const h=new C(new yt(2.8,1.5),a);h.rotation.x=-Math.PI/2,h.position.set(o-1,3.42,l),n.add(h);const f=new C(new te(.5,.4,.4),s);f.position.set(o+2.2,3.35,l-.5),n.add(f);const p=new j({color:8429712,roughness:.6}),g=new C(new he(.04,.04,.9,8),p);g.position.set(o+1.8,3.75,l-.5),n.add(g)})}function Fg(n){const e=new j({color:2767402,roughness:.8}),t=new j({color:4214880,roughness:.6,metalness:.2}),i=new j({color:6303776,roughness:.7}),a=new At({color:4259788});for(let s=-18;s<=18;s+=18){const r=new C(new te(8,6,.2),e);r.position.set(s,3,-22+.15),n.add(r);for(let o=0;o<3;o++){const l=new C(new te(7.6,.08,.5),e);l.position.set(s,1.2+o*2,-22+.45),n.add(l);for(let d=-2;d<=2;d++){const h=.3+Math.random()*.5,f=new C(new he(.18,.18,h,8),d%2===0?t:i);f.position.set(s+d*1.4,1.25+o*2+h/2,-22+.5),n.add(f)}const c=new C(new te(6,.06,.08),a);c.position.set(s,1.18+o*2,-22+.6),n.add(c)}}}function zg(n){const e=new j({color:1714224,roughness:.6,metalness:.3}),t=new j({color:6192,roughness:.1,metalness:.2,emissive:new Be(16544),emissiveIntensity:.5}),i=new j({color:3160128,roughness:.5,metalness:.5}),a=new j({color:2765376,roughness:.8}),s=bn.x,r=bn.z,o=new C(new he(.5,.65,3.4,16),e);o.position.set(s,1.7,r),o.castShadow=!0,n.add(o);const l=new C(new te(2.4,1.8,.12),i);l.position.set(s,4.4,r),n.add(l);const c=new C(new te(2.2,1.6,.06),t);c.position.set(s,4.4,r-.04),n.add(c);const d=new C(new te(1.8,.06,.7),a);d.position.set(s,3.55,r+.3),n.add(d);const h=new At({color:4245759});for(let m=0;m<3;m++){const u=new C(new te(1.5,.02,.08),h);u.position.set(s,3.59,r+.12+m*.16),n.add(u)}const f=new At({color:43775}),p=new C(new te(2.8,.5,.08),f);p.position.set(s,5.7,r),n.add(p);const g=new At({color:4259839}),v=new C(new te(.3,.3,.1),g);v.position.set(s-1.3,4.4,r-.1),n.add(v)}function Bg(n){const e=ji/2,t=Ki/2,i=new j({color:3689016,roughness:.8});for(const[l,c]of[[e-1.5,-t+1.2],[e-1.5,t-1.2]]){const d=new C(new te(2.4,5,1.6),i);d.position.set(l,2.5,c),d.castShadow=!0,n.add(d);const h=new C(new te(.06,.4,.06),new j({color:10526816,metalness:.8,roughness:.2}));h.position.set(l-.7,2.5,c-.85),n.add(h)}const a=new j({color:1720416,roughness:.9}),s=new At({color:54527});for(const l of[-10,0,10]){const c=new C(new te(.08,3,2.2),a);c.position.set(-e+.08,4.5,l),n.add(c);const d=new C(new te(.04,2.4,.08),s);d.position.set(-e+.1,5.2,l),n.add(d)}const r=new j({color:6963232,roughness:.9}),o=new j({color:1728544,roughness:1});for(const[l,c]of[[-e+2,t-2],[-e+2,-t+2]]){const d=new C(new he(.4,.3,.7,12),r);d.position.set(l,.35,c),n.add(d);const h=new C(new Bn(.7,1.4,8),o);h.position.set(l,1.4,c),n.add(h)}}function Hg(n){const e=new At({color:52479,transparent:!0,opacity:.65,side:Ht}),t=new C(new mn(1.1,.2,10,32),e);t.position.set(bn.x,6.2,bn.z),t.rotation.x=Math.PI/2,n.add(t);const i=new ai({color:3066993}),a=new Ai(i);return a.scale.set(1.5,1.5,1.5),a.position.set(bn.x,7.2,bn.z),a.visible=!1,n.add(a),{idx:0,pos:{x:bn.x,z:bn.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isTerminal:!0}}function Gg(n,e){!n||n.done||(n.glowMat.opacity=.4+.3*Math.sin(e*4),n.glowMesh.rotation.z=e*1.5)}const Yn=52,jn=40,_n=new L(0,0,-12);function Vg(){const n=new da;n.background=new Be(1714748),n.fog=new Ba(1450032,.01),n.add(new Ga(11585760,1));const e=new Mn(14741759,1.6);e.position.set(5,18,8),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=80,e.shadow.camera.left=-28,e.shadow.camera.right=28,e.shadow.camera.top=28,e.shadow.camera.bottom=-28,n.add(e);const t=new ni(16768384,2.2,22);t.position.set(_n.x,5,_n.z),n.add(t);const i=new Mn(8425664,.7);return i.position.set(-15,8,-5),n.add(i),{scene:n}}function Wg(n){Xg(n),qg(n),$g(n),Yg(n),jg(n)}function Xg(n){const e=new j({color:1450030,roughness:.85,metalness:.05}),t=new j({color:1582132,roughness:.9}),i=new j({color:924200,roughness:1}),a=Yn/2,s=jn/2,r=9,o=new C(new yt(Yn,jn),e);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);const l=new C(new yt(Yn,jn),i);l.rotation.x=Math.PI/2,l.position.y=r,n.add(l);const c=[{pos:[0,r/2,-s],rot:[0,0,0],size:[Yn,r]},{pos:[0,r/2,s],rot:[0,Math.PI,0],size:[Yn,r]},{pos:[-a,r/2,0],rot:[0,Math.PI/2,0],size:[jn,r]},{pos:[a,r/2,0],rot:[0,-Math.PI/2,0],size:[jn,r]}];for(const f of c){const p=new C(new yt(...f.size),t);p.position.set(...f.pos),p.rotation.set(...f.rot),n.add(p)}const d=new ua({color:1714746});for(let f=-a;f<=a;f+=3){const p=[new L(f,.01,-s),new L(f,.01,s)];n.add(new zn(new gt().setFromPoints(p),d))}for(let f=-s;f<=s;f+=3){const p=[new L(-a,.01,f),new L(a,.01,f)];n.add(new zn(new gt().setFromPoints(p),d))}const h=new At({color:6334719});for(const[f,p,g,v]of[[0,-s+.1,Yn,.1],[0,s-.1,Yn,.1],[-a+.1,0,.1,jn],[a-.1,0,.1,jn]]){const m=new C(new te(g,.06,v),h);m.position.set(f,r-.05,p),n.add(m)}}function qg(n){const e=new j({color:2635848,roughness:.7}),t=new j({color:1581104,roughness:.8}),i=[new j({color:1705216,transparent:!0,opacity:.9}),new j({color:5908480,transparent:!0,opacity:.8}),new j({color:8435776,transparent:!0,opacity:.7})],a=new j({color:8965375,transparent:!0,opacity:.3,roughness:.05,metalness:.05});[[-14,6],[0,6],[14,6]].forEach(([r,o],l)=>{const c=new C(new te(7,.12,3),e);c.position.set(r,3.1,o),c.castShadow=!0,c.receiveShadow=!0,n.add(c);for(const[g,v]of[[-3,-1.2],[3,-1.2],[-3,1.2],[3,1.2]]){const m=new C(new te(.12,3.1,.12),t);m.position.set(r+g,1.55,o+v),n.add(m)}for(let g=0;g<3;g++){const v=new C(new he(.3,.28,.8,12),a);v.position.set(r-1.8+g*1.8,3.56,o-.5),n.add(v);const m=.3+g*.1,u=new C(new he(.27,.25,m,12),i[g]);u.position.set(r-1.8+g*1.8,3.17+m/2,o-.5),n.add(u)}const d=new j({color:2113642,roughness:.9}),h=new C(new te(1.2,.04,.9),d);h.position.set(r+2.5,3.18,o+.5),n.add(h);const f=new j({color:4243616,roughness:.5,metalness:.3}),p=new C(new he(.05,.05,1,8),f);p.position.set(r-2.8,3.75,o),p.rotation.z=.3,n.add(p)})}function $g(n){const e=new j({color:1579552,roughness:.5,metalness:.5}),t=new j({color:2107440,roughness:.5,metalness:.6}),i=new j({color:4227264,roughness:.1,metalness:.8}),a=new j({color:2113696,roughness:.1,metalness:.9}),s=_n.x,r=_n.z,o=new C(new te(3.5,.5,3),e);o.position.set(s,.25,r),o.castShadow=!0,n.add(o);const l=new C(new te(.4,4,.4),t);l.position.set(s-.8,2.25,r),l.castShadow=!0,n.add(l);const c=new C(new te(1.8,.35,.35),t);c.position.set(s+.1,4.1,r),n.add(c);const d=new C(new he(.3,.35,1.2,16),i);d.position.set(s+.8,3.4,r),n.add(d);const h=new C(new he(.1,.2,.5,12),i);h.position.set(s+.8,2.55,r),n.add(h);const f=new C(new he(.18,.22,.6,12),a);f.position.set(s+.8,4.85,r),n.add(f);const p=new C(new te(1.2,.06,1),e);p.position.set(s+.8,2.3,r),n.add(p);const g=new At({color:16763968,transparent:!0,opacity:.7}),v=new C(new yn(.25,16),g);v.rotation.x=-Math.PI/2,v.position.set(s+.8,2.34,r),n.add(v)}function Yg(n){const e=new j({color:794688,roughness:.9}),t=new At({color:54527}),i=[new At({color:16728128}),new At({color:4259712})],a=new C(new te(18,5.5,.1),e);a.position.set(0,4.5,-20+.12),n.add(a);const s=new C(new te(17.6,.35,.08),t);s.position.set(0,6.95,-20+.17),n.add(s);for(let r=0;r<2;r++){const o=new C(new te(15,.25,.06),i[r]);o.position.set(0,6-r*1.2,-20+.17),n.add(o);const l=r===0?[8,6.4,.4]:[.6,.5,.1];for(let c=0;c<3;c++){const d=new C(new te(l[c],.55,.06),i[r]);d.position.set(-7.5+l[c]/2+c*5.2,5-r*1.2,-20+.17),n.add(d)}}}function jg(n){const e=Yn/2,t=jn/2,i=new j({color:2636344,roughness:.85});for(const s of[-12,0,12]){const r=new C(new te(1.8,5,2),i);r.position.set(e-1,2.5,s),r.castShadow=!0,n.add(r)}const a=new j({color:3817520,roughness:.9});for(const s of[-8,8]){const r=new C(new he(.4,.35,.9,10),a);r.position.set(s,.45,t-2),n.add(r)}}function Kg(n){const e=new At({color:16763904,transparent:!0,opacity:.65,side:Ht}),t=new C(new mn(1,.2,10,32),e);t.position.set(_n.x+.8,5.8,_n.z),t.rotation.x=Math.PI/2,n.add(t);const i=new ai({color:3066993}),a=new Ai(i);return a.scale.set(1.5,1.5,1.5),a.position.set(_n.x+.8,7,_n.z),a.visible=!1,n.add(a),{idx:0,pos:{x:_n.x+.8,z:_n.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isScope:!0}}function Jg(n,e){!n||n.done||(n.glowMat.opacity=.4+.28*Math.sin(e*3.8),n.glowMesh.rotation.z=e*1.3)}const Zg=.65;function Ue(n,e,t,i){return{minX:n-t,maxX:n+t,minZ:e-i,maxZ:e+i}}const ys=60,Nr=40,Or=70,Fr=50,Qg=[Ue(0,-20,ys/2+2,1.5),Ue(0,Nr/2,ys/2+2,1.5),Ue(-30,0,1.5,Nr/2+2),Ue(ys/2,0,1.5,Nr/2+2),Ue(-16,5,3.6,1.8),Ue(0,-6,3.6,1.8),Ue(16,5,3.6,1.8),Ue(-28,0,2,11.5),Ue(ys/2-2,0,2,11.5),Ue(-20,-18.4,3.5,1.6)],ev=[Ue(0,-25,Or/2+2,1.5),Ue(0,Fr/2,Or/2+2,1.5),Ue(-35,0,1.5,Fr/2+2),Ue(Or/2,0,1.5,Fr/2+2),Ue(-18,6,2.8,2.8),Ue(0,-12,2,2.5),Ue(18,6,2.5,2.5),Ue(-26,-12,4,6),Ue(28,-13,3,6)],zr=60,Br=50,tv=[Ue(0,-25,zr/2+2,1.5),Ue(0,Br/2,zr/2+2,1.5),Ue(-30,0,1.5,Br/2+2),Ue(zr/2,0,1.5,Br/2+2),Ue(0,-8,11.6,.8),Ue(0,8,11.6,.8),Ue(-11,0,.8,8.6),Ue(11,0,.8,8.6),Ue(0,-10,.8,.8)];let sa=Qg;function nv(){sa=ev}function iv(){sa=tv}const ya=56,Hr=44,av=[Ue(0,-22,ya/2+2,1.5),Ue(0,Hr/2,ya/2+2,1.5),Ue(-28,0,1.5,Hr/2+2),Ue(ya/2,0,1.5,Hr/2+2),Ue(-16,2,4.5,2),Ue(0,2,4.5,2),Ue(16,2,4.5,2),Ue(0,-14,1.4,1.4),Ue(-18,-21.5,4.5,.8),Ue(0,-21.5,4.5,.8),Ue(18,-21.5,4.5,.8),Ue(ya/2-1.5,-10,1.5,1.5),Ue(ya/2-1.5,10,1.5,1.5)],Yi=52,Gr=40,sv=[Ue(0,-20,Yi/2+2,1.5),Ue(0,Gr/2,Yi/2+2,1.5),Ue(-26,0,1.5,Gr/2+2),Ue(Yi/2,0,1.5,Gr/2+2),Ue(-14,6,4,2),Ue(0,6,4,2),Ue(14,6,4,2),Ue(.8,-12,1.8,1.8),Ue(Yi/2-1,-12,1.5,1.5),Ue(Yi/2-1,0,1.5,1.5),Ue(Yi/2-1,12,1.5,1.5)];function rv(){sa=av}function ov(){sa=sv}function lv(n,e,t){const i=Zg;let a=n.x+e;for(const r of sa)a+i>r.minX&&a-i<r.maxX&&n.z+i>r.minZ&&n.z-i<r.maxZ&&(e>0?a=r.minX-i:a=r.maxX+i,e=a-n.x);let s=n.z+t;for(const r of sa)a+i>r.minX&&a-i<r.maxX&&s+i>r.minZ&&s-i<r.maxZ&&(t>0?s=r.minZ-i:s=r.maxZ+i,t=s-n.z);return{dx:e,dz:t}}const K={playerName:"",currentLevel:1,totalPoints:0,levelAttempts:0,levelPoints:0,phenomenonIndex:0,answered:!1,wrongAnswers:0,levelBreakdown:[],pointsAtLevelStart:0,stage3:{valveOpened:!1},stage4:{selectedItems:[],reactorResult:null,terminalDone:!1},stage5:{scopeDone:!1},completedRooms:[]};function cv(){K.levelAttempts=0,K.levelPoints=0,K.phenomenonIndex=0,K.answered=!1,K.wrongAnswers=0}const dv={1:"Level 1 – Lab Sains",2:"Level 2 – Pabrik Etanol",3:"Level 3 – Kolam Remediasi",4:"Level 4 – Workshop IPAL",5:"Level 5 – Lab Observasi"};function gd(n){const e=K.totalPoints-K.pointsAtLevelStart;K.levelBreakdown.push({level:n,label:dv[n]||`Level ${n}`,points:e})}class uv{constructor(e){this.scene=e,this.group=new Yt,this._build(),e.add(this.group),this.group.position.set(0,0,12),this.speed=.12,this.keys={},this._moving=!1,this._walkCycle=0,this._legAngle=0,this._armAngle=0,this._bindKeys(),this._bindTouch()}_bindKeys(){window.addEventListener("keydown",e=>{this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1})}_bindTouch(){if(this._touchAxis={x:0,y:0},!(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1))return;const t=document.getElementById("mobile-controls");t&&(t.style.display="block");const i=document.getElementById("joystick-base"),a=document.getElementById("joystick-knob");if(!i||!a)return;const s=32;let r=null,o=null,l=0,c=0;const d=p=>{if(r!==null)return;r=p.changedTouches[0].identifier,o=i.getBoundingClientRect(),l=o.left+o.width/2,c=o.top+o.height/2,p.preventDefault()},h=p=>{for(const g of p.changedTouches){if(g.identifier!==r)continue;const v=g.clientX-l,m=g.clientY-c,u=Math.sqrt(v*v+m*m),x=Math.min(u,s),b=Math.atan2(m,v),_=Math.cos(b)*x,k=Math.sin(b)*x;a.style.transform=`translate(calc(-50% + ${_}px), calc(-50% + ${k}px))`,this._touchAxis.x=_/s,this._touchAxis.y=-k/s,p.preventDefault()}},f=p=>{for(const g of p.changedTouches)g.identifier===r&&(r=null,a.style.transform="translate(-50%, -50%)",this._touchAxis.x=0,this._touchAxis.y=0)};i.addEventListener("touchstart",d,{passive:!1}),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f,{passive:!1}),window.addEventListener("touchcancel",f,{passive:!1})}_build(){const e=new j({color:16108455,roughness:.7,metalness:0}),t=new j({color:2719929,roughness:.6,metalness:.05}),i=new j({color:2899536,roughness:.65,metalness:.05}),a=new j({color:2890254,roughness:.8,metalness:0}),s=new j({color:1710618,roughness:.6,metalness:.1}),r=new j({color:16448250,roughness:.7,metalness:0}),o=new C(new he(.48,.52,1.6,16),t);o.position.y=2.2,o.castShadow=!0,this.group.add(o),this._torso=o;const l=new C(new he(.5,.54,1.58,16),r);l.position.y=2.2,this.group.add(l),this._coat=l;for(const g of[-1,1]){const v=new C(new at(.28,12,10),r);v.position.set(g*.62,2.9,0),this.group.add(v)}const c=new C(new at(.52,20,16),e);c.position.y=3.62,c.scale.set(1,1.05,1),c.castShadow=!0,this.group.add(c),this._head=c;const d=new C(new at(.54,16,10,0,Math.PI*2,0,Math.PI*.55),a);d.position.y=3.85,this.group.add(d);for(const g of[-1,1]){const v=new C(new at(.1,8,8),e);v.position.set(g*.53,3.65,0),this.group.add(v)}const h=new j({color:1710618});for(const g of[-1,1]){const v=new C(new at(.07,8,8),h);v.position.set(g*.2,3.72,.47),this.group.add(v)}const f=new j({color:13936778}),p=new C(new at(.05,8,8),f);p.position.set(0,3.58,.52),this.group.add(p),this._legs=[];for(const[g,v]of[[-1,-1],[1,1]]){const m=new Yt;m.position.set(v*.3,1.55,0);const u=new C(new he(.2,.18,.72,12),i);u.position.y=-.36,u.castShadow=!0,m.add(u);const x=new Yt;x.position.y=-.72,m.add(x);const b=new C(new he(.16,.14,.64,12),i);b.position.y=-.32,b.castShadow=!0,x.add(b);const _=new C(new wo(.13,.3,6,10),s);_.rotation.x=Math.PI/2,_.position.set(0,-.68,.12),x.add(_),this.group.add(m),this._legs.push({pivot:m,kneePivot:x,side:v,i:g===-1?0:1})}this._arms=[];for(const[g,v]of[[-1,-1],[1,1]]){const m=new Yt;m.position.set(v*.76,2.92,0);const u=new C(new he(.16,.14,.62,12),r);u.position.y=-.31,u.castShadow=!0,m.add(u);const x=new Yt;x.position.y=-.62,m.add(x);const b=new C(new he(.13,.12,.56,12),e);b.position.y=-.28,x.add(b);const _=new C(new at(.13,10,8),e);_.position.y=-.6,x.add(_),this.group.add(m),this._arms.push({pivot:m,elbowPivot:x,side:v,i:g===-1?0:1})}this._nameLabel=null}setName(e){if(this._nameLabel&&this.group.remove(this._nameLabel),!e)return;const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.clearRect(0,0,256,64),i.fillStyle="rgba(15,25,40,0.8)",i.roundRect(4,4,248,56,12),i.fill(),i.fillStyle="#2ecc71",i.font="bold 26px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,32);const a=new Fs(t),s=new ai({map:a,transparent:!0}),r=new Ai(s);r.scale.set(3.5,.9,1),r.position.y=5.2,this._nameLabel=r,this.group.add(r)}update(e,t=!1,i=null){const a=this.keys;let s=0,r=0;if((a.KeyW||a.ArrowUp)&&(s+=1),(a.KeyS||a.ArrowDown)&&(s-=1),(a.KeyA||a.ArrowLeft)&&(r-=1),(a.KeyD||a.ArrowRight)&&(r+=1),this._touchAxis&&(s+=this._touchAxis.y,r+=this._touchAxis.x,s=Math.max(-1,Math.min(1,s)),r=Math.max(-1,Math.min(1,r))),this._moving=s!==0||r!==0,this._moving&&!t){let o=0,l=0;i?(o=i.fwd.x*s+i.right.x*r,l=i.fwd.z*s+i.right.z*r):(o=r,l=-s);const c=Math.sqrt(o*o+l*l)||1;o=o/c*this.speed,l=l/c*this.speed,{dx:o,dz:l}=lv(this.group.position,o,l),this.group.position.x+=o,this.group.position.z+=l;const d=K.currentLevel===2?33:K.currentLevel===3?27:28,h=K.currentLevel===2?23:K.currentLevel===3?22:18;this.group.position.x=Math.max(-d,Math.min(d,this.group.position.x)),this.group.position.z=Math.max(-h,Math.min(h,this.group.position.z)),this.group.rotation.y=Math.atan2(o,l),this._walkCycle+=.18;const f=this._walkCycle;for(const{pivot:p,kneePivot:g,i:v}of this._legs){const m=f+v*Math.PI,u=Math.sin(m)*.55;p.rotation.x=u;const x=Math.max(0,-Math.sin(m)*.45);g.rotation.x=x}for(const{pivot:p,elbowPivot:g,side:v,i:m}of this._arms){const u=f+(1-m)*Math.PI,x=Math.sin(u)*.42;p.rotation.x=x,p.rotation.z=v*(.08+Math.sin(u+Math.PI*.5)*.06),g.rotation.x=Math.max(0,Math.sin(u+.4)*.28)}this._torso&&(this._torso.rotation.y=Math.sin(f+Math.PI)*.08),this._coat&&(this._coat.rotation.y=Math.sin(f+Math.PI)*.08),this._head&&(this._head.position.y=3.62+Math.abs(Math.sin(f*2))*.06),this.group.position.y=Math.abs(Math.sin(f*2))*.055}else{this._walkCycle=0;for(const{pivot:o,kneePivot:l}of this._legs)o.rotation.x*=.75,l.rotation.x*=.75;for(const{pivot:o,elbowPivot:l,side:c}of this._arms)o.rotation.x*=.75,o.rotation.z+=(c*.08-o.rotation.z)*.15,l.rotation.x*=.75;this._torso&&(this._torso.rotation.y*=.8),this._coat&&(this._coat.rotation.y*=.8),this._head&&(this._head.position.y=3.62+Math.sin(e*1.2)*.02),this.group.position.y=Math.sin(e*1.4)*.04}return{x:this.group.position.x,z:this.group.position.z}}get position(){return this.group.position}removeFromScene(e){e.remove(this.group)}addToScene(e){this.scene=e,e.add(this.group)}}const hv=[{id:1,title:"Fenomena 1",image:null,tableData:{headers:["Stasiun","Suhu (°C)","pH","DO (mg/L)","COD (mg/L)","TDS (mg/L)"],rows:[{label:"Hulu",values:["30,39","7,26","8,38","80.000","777"],classes:["","","blue","",""]},{label:"Tengah",values:["31,17","6,96","1,90","90.000","1.343"],classes:["","","red","","red"]},{label:"Hilir",values:["29,63","7,36","11,12","100.000","1.300"],classes:["","","","red",""]}],note:"Biru: rata-rata terendah | Merah: rata-rata tertinggi. Sumber: Zahra, 2023"},context:"Seorang peneliti lingkungan mengamati data kualitas air sungai di stasiun berbeda, yaitu: hulu, tengah, dan hilir dari aliran anak Sungai Bengawan solo yang berdekatan dengan pabrik etanol. Data menunjukkan:",question:"Berdasarkan data, Stasiun Tengah menunjukkan nilai TDS melonjak drastis menjadi 1.343 mg/L, namun nilai DO justru berada di angka 1,90 mg/L dengan COD 90.000 mg/L. Jika diketahui sumber pencemar adalah limbah vinasse yang kaya bahan organik, manakah evaluasi paling kritis mengenai data tersebut?",options:[{label:"A",text:"Tingginya TDS disebabkan oleh mineral anorganik, sedangkan seluruh bakteri telah terurai oleh bakteri dari hulu ke tengah.",correct:!1},{label:"B",text:"Masuknya limbah vinasse seharusnya meningkatkan TDS, DO, dan COD secara simultan.",correct:!0},{label:"C",text:"TDS, COD, dan DO memiliki hubungan yang terbalik, semakin banyak zat terlarut, semakin sedikit oksigen yang dibutuhkan.",correct:!1}],correctKey:"B",explanation:"✅ <strong>Jawaban benar!</strong><br>Limbah organik vinasse seharusnya berkontribusi pada TDS dan COD. Jika TDS dan COD naik tajam karena limbah masuk, DO seharusnya tidak turun drastis."},{id:2,title:"Fenomena 2",image:null,tableData:null,standardTable:{title:"Baku Mutu Air Limbah Industri Bir/Etanol (Permen LH No.5/2014)",headers:["Parameter","Kadar Maks (mg/L)","Beban Maks (g/hL)"],rows:[["BOD₅","40","24,0"],["COD","100","60,0"],["TSS","40","24,0"],["pH","6,0 – 9,0","—"],["Debit limbah maks","—","6 hL/hL produk"]]},context:"Berdasarkan data Stasiun Tengah nilai TDS 1.343 mg/L, COD 90.000 mg/L dan DO 1,90 mg/L, komponen apakah yang paling dominan menyusun nilai TDS tersebut?",question:"Berdasarkan data Stasiun Tengah nilai TDS 1.343 mg/L, COD 90.000 mg/L dan DO 1,90 mg/L, komponen apakah yang paling dominan menyusun nilai TDS tersebut?",options:[{label:"A",text:"Adanya bakteri coliform dan mikroorganisme pengurai.",correct:!1},{label:"B",text:"Ion anorganik seperti K, Ca dan Cl yang tidak dapat dioksidasi.",correct:!0},{label:"C",text:"Suspensi padatan lumpur yang belum mengendap.",correct:!1}],correctKey:"B",explanation:"✅ <strong>Jawaban benar!</strong><br>Ion anorganik seperti K, Ca dan Cl yang tidak dapat dioksidasi mendominasi nilai TDS di Stasiun Tengah."},{id:3,title:"Fenomena 3",image:null,riceGraph:!0,tableData:null,context:"Perhatikan grafik produktivitas lahan persawahan padi berikut:",question:"Manakah interpretasi ilmiah yang paling tepat menjelaskan mekanisme penyebab fenomena penurunan hasil panen padi tersebut?",options:[{label:"A",text:"Kenaikan hasil panen di Tahun ke-2 terjadi karena suplai bahan organik berada di bawah ambang batas pencemaran sehingga justru memperkaya hara tanah, namun pada Tahun ke-3 akumulasi pH dan COD telah menyebabkan kerusakan pada jaringan akar padi.",correct:!0},{label:"B",text:"Penurunan hasil panen pada Tahun ke-3 disebabkan oleh kurangnya pasokan air, karena tingginya nilai COD menyebabkan air menjadi kental dan sulit diserap oleh akar tanaman.",correct:!1},{label:"C",text:"Peningkatan hasil panen pada Tahun ke-2 disebabkan oleh bakteri patogen dalam limbah yang memicu mutasi genetik pada padi menjadi varietas unggul, sedangkan penurunan di Tahun ke-3 adalah fase kematian alami bakteri tersebut.",correct:!1}],correctKey:"A",explanation:"✅ <strong>Jawaban benar!</strong><br>Meskipun COD naik menjadi 80, pH tanah sebesar 8,6 masih dalam rentang toleransi padi. Bahan organik dalam limbah vinasse mengandung N, P, dan K. Pada tahap ini, efek negatif belum mendominasi, sehingga tanaman justru merespons positif terhadap tambahan nutrisi tersebut. Ketika COD mencapai >100 mg/L dan pH >9 kondisi tanah menjadi toksik. pH yang tinggi menyebabkan ion logam di tanah menjadi larut dan meracuni akar, serta menghambat penyerapan Fosfor. Hal ini menyebabkan tanaman gagal tumbuh."}],Ma={phenomena:hv},pv=9e4,fv=45e3,Ms=1e3;function mv(n){const e=Math.max(0,Math.min(Ms,n)),t=Ms-e,i=e/Ms,a=Math.round(pv*i),s=Math.round(fv*i),r=Math.pow(10,-3.8),o=Math.pow(10,-7),l=(r*e+o*t)/Ms,c=Math.max(3.5,Math.min(7,-Math.log10(l)));return{cod:a,bod:s,ph:parseFloat(c.toFixed(2)),dilutionFactor:i}}function gv(n,e){const t=Math.max(0,Math.min(72,e)),i=Math.round(n.bod*Math.exp(-.08*t)),a=n.bod-i,s=n.cod*.55,r=n.cod*.45,o=s*Math.exp(-.08*t),l=Math.round(o+r),c=parseFloat(Math.min(6.8,n.ph+(6.8-n.ph)*(1-Math.exp(-.08*.5*t))).toFixed(2)),d=n.bod>0?Math.round(a/n.bod*100):0,h=n.cod>0?Math.round((n.cod-l)/n.cod*100):0,f=i<=40&&l<=100;return{cod:l,bod:i,ph:c,bodRemovalPct:d,codRemovalPct:h,compliant:f}}const vd="biovine_scores",To="biovine_checkpoint";function vv({playerName:n,totalPoints:e,levelBreakdown:t,completedAt:i,essayAnswer:a}){const s=xv();s.push({playerName:n,totalPoints:e,levelBreakdown:t,completedAt:i,essayAnswer:a}),s.length>200&&s.splice(0,s.length-200);try{localStorage.setItem(vd,JSON.stringify(s))}catch(r){console.warn("[db] saveScore failed:",r)}}function xv(){try{return JSON.parse(localStorage.getItem(vd)||"[]")}catch{return[]}}function bv({playerName:n,currentLevel:e,totalPoints:t,levelBreakdown:i,completedRooms:a}){const s={playerName:n,currentLevel:e,totalPoints:t,levelBreakdown:i||[],completedRooms:a||[],savedAt:new Date().toISOString()};try{localStorage.setItem(To,JSON.stringify(s))}catch(r){console.warn("[db] saveCheckpoint failed:",r)}}function Ao(){try{const n=localStorage.getItem(To);return n?JSON.parse(n):null}catch{return null}}function xd(){localStorage.removeItem(To)}const Ae=n=>document.getElementById(n);let ro=null,Vr=null;function _v(n,e){ro=n,Vr=e||null;const t=Ao(),i=Ae("resume-section");if(t&&i&&Vr){const a=new Date(t.savedAt),s=a.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})+" "+a.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});i.classList.remove("hidden"),i.innerHTML=`
      <div class="resume-card">
        <div class="resume-info">
          <span class="resume-avatar">🎮</span>
          <div>
            <strong>${t.playerName}</strong>
            <div style="font-size:12px;color:#aaa;margin-top:2px">
              Level ${t.currentLevel} &nbsp;·&nbsp; ${t.totalPoints} poin &nbsp;·&nbsp; ${s}
            </div>
          </div>
        </div>
        <button class="btn-resume" id="btn-resume-game">▶ Lanjutkan</button>
        <button class="btn-new-checkpoint" id="btn-discard-checkpoint" title="Mulai baru">✕</button>
      </div>
    `,document.getElementById("btn-resume-game").onclick=()=>{bd(),Vr(t)},document.getElementById("btn-discard-checkpoint").onclick=()=>{xd(),i.classList.add("hidden")}}else i&&i.classList.add("hidden");Ae("profile-screen").classList.remove("hidden")}function bd(){Ae("profile-screen").classList.add("hidden")}function yv(n){const e=Ae("synopsis-screen");e.classList.remove("hidden");const t=[{tag:"Bagian 1 dari 3",title:"Industri Etanol di Desa Bekonang",text:"Industri etanol di Desa Bekonang, Sukoharjo, adalah warisan <strong>turun-temurun</strong> yang sudah ada sejak zaman kolonial. Banyak pabrik di sini memproduksi minuman keras tradisional bernama <strong>ciu</strong> dibuat dari tetes tebu, tape singkong, atau nira aren melalui proses fermentasi dan penyulingan.<br><br>Seiring waktu, industri ini berkembang menjadi produksi <strong>etanol medis</strong> yang digunakan untuk kebutuhan rumah sakit dan dunia kesehatan."},{tag:"Bagian 2 dari 3",title:"Masalah: Limbah Vinasse",text:"Proses produksi etanol menghasilkan limbah cair bernama <strong>vinasse</strong>. Setiap harinya, satu pabrik bisa menghasilkan <strong>150–200 liter</strong> limbah ini tanpa sistem pengolahan yang memadai.<br><br>Vinasse berwarna <strong>hitam pekat</strong>, berbau menyengat, dan sangat berbahaya jika dibuang langsung ke sungai. Vinasse <strong>menyerap oksigen</strong> di dalam air, menyebabkan ikan-ikan mati dan sungai tercemar parah."},{tag:"Bagian 3 dari 3",title:"Solusi: Vinasse → Pupuk Organik Cair",text:"Kabar baiknya, limbah vinasse bisa diolah menjadi <strong>Pupuk Organik Cair (POC)</strong>! Caranya dengan menambahkan <strong>mikroorganisme berupa ragi</strong> ke dalam vinasse yang sudah diaerasi minimal 24 jam.<br><br>Setelah ditumbuhkan selama <strong>15 hari</strong> dalam bak terbuka beraeasi, limbah berubah menjadi pupuk: tidak berbau asam, berwarna coklat muda. Diaplikasikan ke tanaman dengan perbandingan <strong>1 : 10</strong> (POC : air). Ukur kadar COD, BOD, dan pH untuk memastikan kualitasnya!"}];let i=0,a=!1,s=null;const r=Ae("syn-seg-tag"),o=Ae("syn-seg-title"),l=Ae("syn-seg-text"),c=Ae("syn-dots"),d=Ae("btn-syn-prev"),h=Ae("btn-syn-next"),f=Ae("btn-syn-skip"),p=Ae("synopsis-content-panel"),g=Ae("syn-mouth");function v(){m(),s=setInterval(()=>{a=!a,g&&g.setAttribute("d",a?"M84 124 Q100 144 116 124":"M84 126 Q100 138 116 126")},280)}function m(){s&&(clearInterval(s),s=null),g&&g.setAttribute("d","M84 126 Q100 138 116 126")}function u(){m(),e.classList.add("hidden"),n()}function x(b){const _=t[b];p.classList.remove("synopsis-slide"),p.offsetWidth,p.classList.add("synopsis-slide"),r.textContent=_.tag,o.textContent=_.title,l.innerHTML=_.text,c.innerHTML=t.map((k,w)=>`<span class="synopsis-dot ${w===b?"active":""}"></span>`).join(""),d.style.display=b===0?"none":"",h.textContent=b===t.length-1?"🚀 Mulai Petualangan →":"Lanjutkan →",v()}x(0),d.onclick=()=>{i>0&&x(--i)},h.onclick=()=>{i<t.length-1?x(++i):u()},f.onclick=()=>u()}const ws=[{id:"c4gsn1rkK1g",title:"Video Edukasi 1: Limbah Vinasse & Dampak Lingkungan",subtitle:"Pelajari dampak pencemaran vinasse terhadap lingkungan sekitar"},{id:"ajNZ7FcnZvU",title:"Video Edukasi 2: Teknologi Bioremediasi Azolla",subtitle:"Kenali solusi bioremediasi berbasis tanaman Azolla"}];let _d=!1;const yd=[];window.onYouTubeIframeAPIReady=()=>{_d=!0,yd.splice(0).forEach(n=>n())};function Mv(){return new Promise(n=>{if(_d){n();return}if(yd.push(n),!document.getElementById("yt-api-script")){const e=document.createElement("script");e.id="yt-api-script",e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}})}function wv(n){const e=Ae("youtube-screen");e.classList.remove("hidden"),Dn&&Dn.pause();let t=0,i=null;function a(){const r=e.querySelector(".youtube-frame-wrap");r.innerHTML='<div id="yt-player-container"><div class="yt-loading">Memuat video…</div></div>'}function s(r){const o=ws[r];Ae("yt-title").textContent=o.title,Ae("yt-subtitle").textContent=o.subtitle,Ae("yt-counter").textContent=`${r+1} / ${ws.length}`;const l=Ae("btn-yt-next");l.textContent=r<ws.length-1?"Video Berikutnya →":"Lanjutkan ke Simulasi →",l.disabled=!1,l.title="",i&&(i.destroy(),i=null),a(),Mv().then(()=>{i=new YT.Player("yt-player-container",{videoId:o.id,playerVars:{rel:0,modestbranding:1,playsinline:1},events:{}})})}s(0),Ae("btn-yt-next").onclick=()=>{t+=1,t<ws.length?s(t):(i&&(i.destroy(),i=null),e.classList.add("hidden"),Dn&&Dn.play().catch(()=>{}),n())}}let Dn=null;function gc(){Dn||(Dn=new Audio("/intro-music.mp3"),Dn.loop=!0,Dn.volume=.45,Dn.play().catch(()=>{}))}function Sv(n){const e=Ae("intro-video-screen");e.classList.remove("hidden");const t=Ae("intro-3d-canvas"),i=window.innerWidth,a=window.innerHeight,s=new bo({canvas:t,antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(i,a,!1),s.shadowMap.enabled=!0,s.shadowMap.type=uo;const r=new da;r.background=new Be(8900331),r.fog=new Ha(12114160,90,210);const o=new Kt(50,i/a,.1,300);o.position.set(0,65,75),o.lookAt(0,0,0),r.add(new eg(10409208,5929536,1.2));const l=new Mn(16775136,2.8);l.position.set(40,80,50),l.castShadow=!0,l.shadow.mapSize.setScalar(2048),l.shadow.camera.left=l.shadow.camera.bottom=-90,l.shadow.camera.right=l.shadow.camera.top=90,l.shadow.camera.far=220,r.add(l);const c=new Mn(11587839,.45);c.position.set(-30,25,-20),r.add(c),r.add(new C(new at(190,16,8),new At({color:6991584,side:Gt})));function d(D,ne=.78,Me=0,ge,Q){const R={color:D,roughness:ne,metalness:Me};return ge!==void 0&&(R.emissive=ge,R.emissiveIntensity=Q||.2),new j(R)}function h(D,ne,Me,ge,Q,R,se){const le=new C(new te(ge,Q,R),se);return le.position.set(D,ne+Q*.5,Me),le.castShadow=!0,le.receiveShadow=!0,r.add(le),le}function f(D,ne,Me,ge,Q,R,se,le){const Te=new C(new he(ge,Q,R,se),le);return Te.position.set(D,ne+R*.5,Me),Te.castShadow=!0,Te.receiveShadow=!0,r.add(Te),Te}function p(D,ne,Me,ge,Q,R=.84){const se=new C(new yt(Me,ge),new j({color:Q,transparent:!0,opacity:R,roughness:.04,metalness:.18}));return se.rotation.x=-Math.PI/2,se.position.set(D,.22,ne),r.add(se),se}function g(D,ne,Me,ge,Q,R,se=5596791,le=.24){const Te=new L(D,ne,Me),q=new L(ge,Q,R),ye=q.clone().sub(Te),it=ye.length();if(it<.05)return;const pt=new C(new he(le,le,it,8),d(se,.45,.65));pt.position.copy(Te.clone().add(q).multiplyScalar(.5)),pt.quaternion.setFromUnitVectors(new L(0,1,0),ye.normalize()),r.add(pt)}const v=new C(new yt(260,260),d(8033368,.95));v.rotation.x=-Math.PI/2,v.receiveShadow=!0,r.add(v),h(6,-.05,1,82,.1,68,d(11708816,.88));const m=7,u=13,x=5,b=7,_=1.4,k=.36,w=D=>-21+D*b,S=[8008464,6965782,4872744,2977352,2127994,1608346,960716],I=[],M=[];for(let D=0;D<m;D++){const ne=w(D),Me=S[D],ge=d(8028272,.78);h(0,0,ne-x/2,u*2+k*2,_,k,ge),h(0,0,ne+x/2,u*2+k*2,_,k,ge),h(-u,0,ne,k,_,x,ge),h(u,0,ne,k,_,x,ge),h(0,-.25,ne,u*2,.28,x,d(10524800,.88));const Q=.76+D*.015,R=p(0,ne,u*2-.1,x-.12,Me,Q);if(I.push({mesh:R,baseOp:Q}),D===3||D===4)for(let se=-1;se<=1;se++){const le=f(se*7,.25,ne,.75,.75,.28,12,d(11189196,.4,.55,3381708,.3));M.push(le),h(se*7,.28,ne,.14,1,.14,d(8948121,.5,.5))}}const A=d(12761250,.88);for(let D=0;D<=m;D++){const ne=-21-b/2+D*b;h(6,0,ne,82,.12,2,A)}h(-20,0,1,2.2,.12,70,A),h(32,0,1,2.2,.12,70,A);for(let D=0;D<m-1;D++){const ne=D%2===0?u+.5:-13.5,Me=w(D),ge=w(D+1);h(ne,0,(Me+ge)*.5,2.2,_,Math.abs(ge-Me)+.5,d(6977672,.65,.3))}h(-28,0,-30,12,5.5,8,d(5924984,.62,.1)),h(-28,5.5,-30,12.5,.55,8.5,d(3819608,.5));for(let D=-1.5;D<=1.5;D+=.65)h(-22.8,0,-30+D,.1,2.4,.1,d(3359829,.4,.7));h(-27,2,-33.7,1.8,1.2,.08,d(8969727,.08,0,13141,.9)),h(-29.5,2,-33.7,1.8,1.2,.08,d(8969727,.08,0,13141,.9));const N=-34,G=-30;f(N,0,G,1.1,.9,14,16,d(8952234,.38,.55)),f(N,14,G,1.2,1.2,.3,16,d(11189196,.35,.5)),[2,4.5,7.5,10.5,13].forEach(D=>{f(N,D,G,1.18,1.18,.18,16,d(10070715,.42,.6))}),g(N+1.1,1.2,G,-22,1.2,-30,4478310,.28),h(N-2.2,6,G,2.8,1.4,1.4,d(6977672,.55,.3)),g(N-1.1,6.5,G,N-1.8,6.5,G,5596791,.22);const ie=-24,P=-14,O=12,W=9;h(ie,0,P,O,1.5,W,d(7241328,.75)),h(ie,0,P,O-k*2,.24,W-k*2,d(10129544,.88));const Z=p(ie,P,O-.8,W-.8,5926976,.82);g(-22,.9,-28,-22,.9,-14,4478310,.3),g(-18.2,.9,-14,-13.2,.9,-21,4478310,.3),h(-28,0,8,8,4.5,6.5,d(6975600,.65,.1)),h(-28,4.5,8,8.5,.42,7,d(3817552,.5)),f(-25.5,4.9,6,.34,.34,4.5,10,d(8947864,.5,.3));for(let D=0;D<3;D++)g(-18.5,.8,-21+D*14,-21,.8,-21+D*14,4478310,.2);[-14,-6,2].forEach(D=>{h(-32+D*.3,0,32,6,.42,9.5,d(10522720,.93))});const $=30,Y=18,J=10;f($,0,Y,J+.55,J+.55,1.6,48,d(8030328,.7)),f($,0,Y,J,J,1.6,48,d(8030328,.7)),f($,-.25,Y,J,J,.28,48,d(10127472,.88));const ue=new C(new yn(J-.08,48),new j({color:3057848,transparent:!0,opacity:.86,roughness:.04,metalness:.2}));ue.rotation.x=-Math.PI/2,ue.position.set($,.22,Y),r.add(ue),f($,1.6,Y,.58,.58,3.8,10,d(5925495,.5,.5)),h($,1.6,Y,J*2-.3,.22,.38,d(8952234,.45,.4));const pe=new C(new Bn(4.5,2.8,32),d(5911312,.85));pe.rotation.x=Math.PI,pe.position.set($,.9,Y),r.add(pe),g(u+.4,.9,w(6),$-J-.6,.9,Y,4482696,.3),[[44,-10],[52,-10]].forEach(([D,ne])=>{h(D,0,ne,6.5,1.1,10,d(7899288,.7)),p(D,ne,6,9.5,6728396,.82)}),f(58,0,-5,.95,.95,3.4,14,d(14544639,.32,.28,8930559,.4)),g($+J+.5,.9,Y,44,.9,-10,4482696,.28),g(48,.9,-10,52,.9,-10,4482696,.25),g(55.5,.9,-10,58,.9,-5,4482696,.25),h(58,0,16,.36,9,.36,d(10066602,.4,.6)),h(58,9,16,1.6,.9,1,d(13378082,.5,.3,16711680,.55));const X=new C(new at(.32,8,8),new j({color:16720418,emissive:16711680,emissiveIntensity:2.5}));X.position.set(58,10.2,16),r.add(X);const ae=[];for(let D=0;D<4;D++){const ne=new C(new at(.22,6,6),new j({color:2293691,emissive:52360,emissiveIntensity:1.8,transparent:!0,opacity:.9}));ne.userData.i=D,r.add(ne),ae.push(ne)}const be=p(72,8,18,60,2263227,.78);g(58,.9,-5,66,.9,0,4482696,.3);const ke=new j({color:7027210,roughness:.95}),Re=[d(2981178,.9),d(3837764,.88),d(4888896,.85),d(2263098,.92),d(5474352,.87),d(1992226,.93)],Fe=[];for(let D=-58;D<=78;D+=6.5)Fe.push([D,-42]),Fe.push([D,44]);for(let D=-40;D<=42;D+=6.5)Fe.push([-58,D]),Fe.push([78,D]);[[-44,-22],[-46,-8],[-44,18],[-44,30],[56,-28],[58,-12],[56,10],[56,30],[-36,38],[-18,40],[2,40],[20,40],[38,40],[-36,-36],[-18,-38],[2,-38],[22,-38],[42,-36],[52,-36]].forEach(D=>Fe.push(D)),Fe.forEach(([D,ne])=>{const Me=.85+Math.random()*.75,ge=new C(new he(.18*Me,.3*Me,2.2*Me,7),ke);ge.position.set(D,1.1*Me,ne),ge.castShadow=!0,r.add(ge);const Q=Re[Math.floor(Math.random()*Re.length)];if(Math.random()>.42){const R=new C(new at(1.5*Me,8,7),Q);R.position.set(D,3.8*Me,ne),R.castShadow=!0,r.add(R)}else for(let R=0;R<3;R++){const se=new C(new Bn((1.3-R*.28)*Me,1.3*Me,8),Q);se.position.set(D,(2.5+R*1.2)*Me,ne),se.castShadow=!0,r.add(se)}});const Xe=new sd([new L(-23,.7,-30),new L(-23,.7,-21),new L(ie,.7,P),new L(-13,.7,-21),new L(0,.7,-21),new L(13,.7,-21),new L(14,.7,-17.5),new L(13,.7,-14),new L(0,.7,-14),new L(-13,.7,-14),new L(-14,.7,-10.5),new L(-13,.7,-7),new L(0,.7,-7),new L(13,.7,-7),new L(14,.7,-3.5),new L(13,.7,0),new L(0,.7,0),new L(-13,.7,0),new L(-14,.7,3.5),new L(-13,.7,7),new L(0,.7,7),new L(13,.7,7),new L(14,.7,10.5),new L(13,.7,14),new L(0,.7,14),new L(-13,.7,14),new L(-14,.7,17.5),new L(-13,.7,21),new L(0,.7,21),new L(13,.7,21),new L(22,.7,21),new L($,.7,Y),new L(44,.7,-10),new L(58,.7,-5),new L(66,.7,0)]);function Oe(D,ne,Me){const ge=D>>16&255,Q=D>>8&255,R=D&255,se=ne>>16&255,le=ne>>8&255,Te=ne&255;return Math.round(ge+(se-ge)*Me)<<16|Math.round(Q+(le-Q)*Me)<<8|Math.round(R+(Te-R)*Me)}const tt=90,F=[];for(let D=0;D<tt;D++){const ne=D/tt,Me=Oe(8005632,1091800,ne),ge=D%3!==0,Q=ge?new So(.1+D%6*.04,.28+D%5*.07,20):new yn(.16+D%7*.03,12),R=new C(Q,new j({color:Me,emissive:Me,emissiveIntensity:ge?.65:.3,roughness:.04,metalness:.1,transparent:!0,opacity:ge?.72:.52,side:Ht}));R.rotation.x=-Math.PI/2,R.userData.t=ne,R.userData.ph=D*.618033%1,r.add(R),F.push(R)}const Rt=[],Ie=50,He=[[-7,0],[0,0],[7,0],[-7,7],[0,7],[7,7]];for(let D=0;D<Ie;D++){const ne=He[D%He.length],Me=new C(new at(.07+Math.random()*.09,5,5),new j({color:12118271,transparent:!0,opacity:.72}));Me.userData.phase=D/Ie*Math.PI*2,Me.userData.ox=ne[0]+(Math.random()-.5)*10,Me.userData.oz=ne[1]+(Math.random()-.5)*(x-1),r.add(Me),Rt.push(Me)}const Le=[],ht=28;for(let D=0;D<ht;D++){const ne=new C(new at(.14,5,5),new j({color:7025425,transparent:!0,opacity:.78}));ne.userData.phase=D/ht,ne.userData.ang=Math.random()*Math.PI*2,ne.userData.r=1.5+Math.random()*(J-3),r.add(ne),Le.push(ne)}const qe=[],T=36;for(let D=0;D<T;D++){const ne=new C(new at(.3+Math.random()*.22,7,7),new j({color:15661311,emissive:11197934,emissiveIntensity:.18,transparent:!0,opacity:.55,roughness:.85}));ne.userData.life=D/T,ne.userData.ox=(Math.random()-.5)*1.2,ne.userData.oz=(Math.random()-.5)*1.2,r.add(ne),qe.push(ne)}const y=[],z=22;for(let D=0;D<z;D++){const ne=new C(new at(.26,5,5),new j({color:11184810,transparent:!0,opacity:.38}));ne.userData.life=D/z,ne.userData.ox=(Math.random()-.5)*.6,ne.userData.oz=(Math.random()-.5)*.6,r.add(ne),y.push(ne)}const ce=[],oe=12;for(let D=0;D<oe;D++){const ne=new C(new at(.13,5,5),new j({color:14548872,transparent:!0,opacity:.88}));ne.userData.phase=D/oe,ne.userData.ox=(Math.random()-.5)*3.5,r.add(ne),ce.push(ne)}const ee=[{tag:"Tahap 1 dari 5",title:"Penampungan Awal (Bak Ekualisasi)",subtitle:"Equalization Basin",waterQuality:5,camPos:[-40,32,-36],camLook:[-24,0,-24],desc:"Limbah vinasse yang pekat dari industri etanol dialirkan dan ditampung terlebih dahulu di bak penampungan awal IPAL Ciunik. Pada tahap ini, dilakukan penyamaan atau stabilisasi debit, suhu, dan tingkat keasaman (pH) limbah agar kondisinya ideal dan tidak merusak sistem pengolahan di tahap selanjutnya."},{tag:"Tahap 2 dari 5",title:"Proses Aerasi (Injeksi Oksigen)",subtitle:"Aeration Process",waterQuality:28,camPos:[-10,28,-10],camLook:[0,0,0],desc:"Setelah stabil, limbah dialirkan ke dalam bak aerasi. Di dalam bak ini, air limbah dipompa dan disuplai dengan gelembung udara (oksigen) secara terus-menerus menggunakan mesin aerator. Oksigen ini sangat krusial untuk menjaga agar kondisi air tetap kaya oksigen terlarut."},{tag:"Tahap 3 dari 5",title:"Penambahan Mikroorganisme (Bakteri Pengurai)",subtitle:"Biological Treatment",waterQuality:55,camPos:[8,32,16],camLook:[6,0,2],desc:"Bersamaan dengan suplai oksigen yang melimpah, ditambahkan mikroorganisme aerobik (bakteri pengurai) ke dalam bak aerasi. Mikroorganisme ini bekerja dengan cara menguraikan polutan serta zat-zat organik berbahaya yang terkandung dalam vinasse, mengubahnya menjadi pupuk organik cair."},{tag:"Tahap 4 dari 5",title:"Pengendapan (Clarifier)",subtitle:"Secondary Clarifier",waterQuality:80,camPos:[32,28,28],camLook:[30,0,18],desc:"Setelah zat organik hancur terurai, campuran air limbah dan mikroorganisme dialirkan ke bak pengendap. Gumpalan bakteri dan sisa kotoran akan dibiarkan mengendap ke dasar bak, sementara air yang sudah jernih akan terpisah dan naik ke permukaan."},{tag:"Tahap 5 dari 5",title:"Pelepasan Air Bersih (Output)",subtitle:"Clean Water Discharge",waterQuality:100,camPos:[62,30,30],camLook:[54,0,14],desc:"Air hasil pemisahan tersebut kini memiliki kadar polutan (seperti BOD dan COD) yang sangat rendah dan sudah memenuhi standar baku mutu lingkungan. Air ini dapat dikembalikan atau dilepas ke alam tanpa mencemari ekosistem sekitarnya atau dimanfaatkan menjadi pupuk organik cair."}],Ce=Ae("intro-stage-label");let ve=-1;const Se=11,Ne=Se*ee.length;function Ye(D){return D<.5?2*D*D:-1+(4-2*D)*D}function re(D,ne,Me){return[D[0]+(ne[0]-D[0])*Me,D[1]+(ne[1]-D[1])*Me,D[2]+(ne[2]-D[2])*Me]}let st=null,Ke=!1;const Ge=new ud,De=Ae("btn-intro-continue");De.disabled=!0;function Ee(){st=requestAnimationFrame(Ee);const D=Ge.getElapsedTime();!Ke&&D>=Ne&&(Ke=!0,De.disabled=!1);const Me=D%Ne/Se,ge=Math.min(Math.floor(Me),ee.length-1),Q=Me-Math.floor(Me),R=(ge+ee.length-1)%ee.length,se=.15;let le,Te;if(Q<se){const q=Ye(Q/se);le=re(ee[R].camPos,ee[ge].camPos,q),Te=re(ee[R].camLook,ee[ge].camLook,q)}else{const q=ee[ge].camPos,ye=ee[ge].camLook;le=[q[0]+Math.sin(D*.26)*1.4,q[1]+Math.sin(D*.19)*.6,q[2]+Math.cos(D*.22)*1.1],Te=[...ye]}if(o.position.set(le[0],le[1],le[2]),o.lookAt(Te[0],Te[1],Te[2]),ge!==ve&&Ce){ve=ge;const q=ee[ge],ye=q.waterQuality,it=ye<40?"#e05020":ye<75?"#d4aa20":"#22bb55";Ce.innerHTML=`<div class="sl-tag">${q.tag}</div><div class="sl-title">${q.title}</div><div class="sl-subtitle">${q.subtitle}</div><div class="sl-desc">${q.desc}</div><div class="sl-wq"><span style="font-size:11px;opacity:.75;margin-right:6px">Kualitas Air</span><div class="sl-wq-bar"><div class="sl-wq-fill" style="width:${ye}%;background:${it}"></div></div><span class="sl-wq-val" style="color:${it}">${ye}%</span></div><div class="sl-dots">${ee.map((pt,It)=>`<span class="sl-dot${It===ge?" active":""}"></span>`).join("")}</div>`}F.forEach(q=>{q.userData.t=(q.userData.t+.00145)%1;const ye=q.userData.t;q.position.copy(Xe.getPoint(ye)),q.position.y=.27;const it=(q.userData.ph+D*.32)%1;q.scale.setScalar(.4+it*2.2),q.material.opacity=Math.max(0,.8-it*.88);const pt=Oe(8005632,1091800,ye);q.material.color.setHex(pt),q.material.emissive.setHex(pt)}),Rt.forEach(q=>{const ye=(D*.82+q.userData.phase)%(Math.PI*2)/(Math.PI*2);q.position.set(q.userData.ox,.22+ye*1.55,q.userData.oz),q.material.opacity=ye<.72?.7:(1-ye)*4.5}),Le.forEach(q=>{const ye=(D*.22+q.userData.phase)%1;q.position.set($+Math.cos(q.userData.ang+D*.04)*q.userData.r,1.3-ye*1.2,Y+Math.sin(q.userData.ang+D*.04)*q.userData.r),q.material.opacity=ye>.75?(1-ye)*5:.72}),M.forEach((q,ye)=>{q.rotation.y=D*(1.5+ye%3*.4)}),qe.forEach(q=>{q.userData.life=(q.userData.life+.0048)%1;const ye=q.userData.life;q.position.set(N+q.userData.ox+Math.sin(ye*4.2+D*.7)*.55,14.3+ye*8,G+q.userData.oz+Math.cos(ye*3.5+D*.5)*.55),q.scale.setScalar(.5+ye*2.8),q.material.opacity=Math.max(0,.55-ye*.62)}),y.forEach(q=>{q.userData.life=(q.userData.life+.0036)%1;const ye=q.userData.life;q.position.set(-25.5+q.userData.ox+Math.sin(ye*3.5+D)*.5,4.9+ye*5.5,6+q.userData.oz+Math.cos(ye*2.8+D*.6)*.4),q.material.opacity=Math.max(0,(1-ye)*.4),q.scale.setScalar(.18+ye*1.25)}),ce.forEach(q=>{const ye=(D*1.05+q.userData.phase)%1;q.position.set(58+q.userData.ox,3.8-ye*4.5,-5),q.material.opacity=.88*(1-ye)}),X.material.emissiveIntensity=1.2+1.5*Math.sin(D*5.8),ae.forEach(q=>{const ye=(D*.58+q.userData.i*.25)%1;q.position.set(58+ye*14,10.2+Math.sin(ye*Math.PI)*5,16+ye*6),q.material.opacity=(1-ye)*.88}),I.forEach(q=>{q.mesh.material.opacity=q.baseOp+.03*Math.sin(D*.75+q.baseOp*14)}),ue.material.opacity=.84+.05*Math.sin(D*1.05),Z.material.opacity=.8+.04*Math.sin(D*.68),be.material.opacity=.75+.06*Math.sin(D*.88),s.render(r,o)}Ee(),Ae("btn-intro-continue").onclick=()=>{cancelAnimationFrame(st),s.dispose(),e.classList.add("hidden"),n()}}function Ev(n){Ae("instructions-screen").classList.remove("hidden");const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1,t=Ae("instr-controls-text");t&&(t.innerHTML=e?"Gunakan <strong>joystick virtual</strong> di kiri bawah layar untuk bergerak. Dekati objek bercahaya lalu ketuk tombol <strong>E</strong> di kanan bawah untuk berinteraksi.":"Gunakan <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> atau tombol panah untuk bergerak. Dekati objek bercahaya lalu tekan <kbd>E</kbd> untuk berinteraksi.");const i=Ae("instr-level-guide");if(i){const a=[{num:1,icon:"🔬",name:"Lab Sains",desc:"Amati 3 fenomena pencemaran vinasse di laboratorium dan jawab pertanyaan ilmiah."},{num:2,icon:"🏭",name:"Pabrik Etanol",desc:"Kunjungi 3 stasiun pabrik, lakukan simulasi pengolahan COD/BOD/pH secara interaktif."},{num:3,icon:"🌿",name:"Kolam Remediasi",desc:"Pilih mikroorganisme yang tepat di toko, hitung dosis, lalu buka kran vinasse."},{num:4,icon:"🔧",name:"Workshop IPAL",desc:"Rancang prototype reaktor IPAL: pilih alat & bahan, ikuti prosedur, evaluasi hasilnya."},{num:5,icon:"🔭",name:"Lab Observasi",desc:"Analisis kegagalan reaktor dari Level 4 dan jawab soal evaluasi mikroskop."}];i.innerHTML=a.map(s=>`
      <div class="level-guide-card">
        <span class="lg-icon">${s.icon}</span>
        <div><strong>Level ${s.num} – ${s.name}</strong><div class="lg-desc">${s.desc}</div></div>
      </div>
    `).join("")}Ae("btn-start-game").onclick=()=>{Ae("instructions-screen").classList.add("hidden"),n()}}function Tv(){jt(),Ae("btn-glossary").onclick=()=>wd()}function Av(n,e){const t=Ae("pause-menu-overlay");Ae("btn-pause-menu").onclick=()=>{const i=Ao(),a=Ae("pause-checkpoint-info"),s=Ae("btn-pm-resume");if(i){const r=new Date(i.savedAt),o=r.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})+" "+r.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});a.innerHTML=`💾 Checkpoint tersimpan: <strong>${i.playerName}</strong> · Level ${i.currentLevel} · ${i.totalPoints} poin<br><small style="color:#aaa">${o}</small>`,s.disabled=!1,s.title=""}else a.innerHTML='<span style="color:#aaa">Belum ada checkpoint tersimpan.</span>',s.disabled=!0,s.title="Tidak ada checkpoint tersimpan";t.classList.remove("hidden")},Ae("btn-pm-continue").onclick=()=>{t.classList.add("hidden")},Ae("btn-pm-resume").onclick=()=>{t.classList.add("hidden"),n()},Ae("btn-pm-newgame").onclick=()=>{confirm("Yakin ingin memulai ulang? Semua progres sesi ini akan hilang.")&&(t.classList.add("hidden"),e())},t.addEventListener("click",i=>{i.target===t&&t.classList.add("hidden")})}function jt(){Ae("hud-player").textContent=K.playerName||"Pemain",Ae("hud-level").textContent=`Level ${K.currentLevel}`,Ae("hud-points").textContent=K.totalPoints;const n=Ae("hud-attempts");n.innerHTML="";for(let e=0;e<3;e++){const t=document.createElement("div");t.className="attempt-dot"+(e<K.levelAttempts?" used":""),n.appendChild(t)}}function Lo(n){const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1;let t=Ae("interact-prompt");t||(t=document.createElement("div"),t.id="interact-prompt",t.style.cssText=`
      position:fixed; bottom:${e?"200px":"120px"}; left:50%; transform:translateX(-50%);
      background:rgba(10,20,40,0.88); color:#fff; padding:10px 22px;
      border-radius:24px; font-size:15px; pointer-events:none;
      border:2px solid #00d4ff; box-shadow:0 0 18px #00d4ff88;
      transition:opacity 0.25s; z-index:200; white-space:nowrap;
    `,document.body.appendChild(t)),e&&n&&(n=n.replace(/Tekan <kbd>E<\/kbd>/g,"👆 Ketuk tombol <b>E</b>")),n?(t.innerHTML=n,t.style.opacity="1",t.style.display="block"):(t.style.opacity="0",setTimeout(()=>{t.style.display="none"},260))}function Lv(n,e,t){const i=Ae("stage-screen");i.classList.remove("hidden"),i.style.pointerEvents="all",K.phenomenonIndex=n,Md(n,()=>{i.classList.add("hidden"),i.style.pointerEvents="none",e&&e()},()=>{i.classList.add("hidden"),i.style.pointerEvents="none",t&&t()},!0)}function wa(n){var t;K.levelAttempts++,gd(K.currentLevel);const e=((t=K.levelBreakdown.at(-1))==null?void 0:t.points)??0;Uv(e,"🏠 Kembali ke Pilihan Ruangan →",()=>{cv(),jt(),n&&n()})}const Cv=[{level:1,icon:"🔬",name:"Lab Sains",desc:"Analisis fenomena pencemaran vinasse melalui kuis MCQ",color:"#2980b9"},{level:2,icon:"🏭",name:"Pabrik Etanol",desc:"Simulasi pengukuran COD, BOD & pH limbah vinasse",color:"#e67e22"},{level:3,icon:"🌿",name:"Kolam Remediasi",desc:"Pilih mikroorganisme & buka kran bioremediasi",color:"#27ae60"},{level:4,icon:"⚙️",name:"Workshop IPAL",desc:"Rancang reaktor pengolahan limbah IPAL",color:"#8e44ad"},{level:5,icon:"🔭",name:"Lab Observasi",desc:"Analisis hasil reaktor & evaluasi akhir",color:"#c0392b"}];function Rv(n){const e=document.getElementById("room-select-overlay");e.classList.remove("hidden");function t(){const i=document.getElementById("room-select-grid");i.innerHTML=Cv.map(a=>{const s=K.completedRooms.includes(a.level);return`
        <button class="room-card ${s?"room-card--done":""}" data-level="${a.level}"
          style="--room-color:${a.color}">
          <div class="room-card-icon">${a.icon}</div>
          <div class="room-card-body">
            <div class="room-card-name">Level ${a.level} — ${a.name}</div>
            <div class="room-card-desc">${a.desc}</div>
          </div>
          <div class="room-card-status">${s?"✅ Selesai":"▶ Mulai"}</div>
        </button>
      `}).join(""),document.getElementById("room-hub-points").textContent=`🪙 ${K.totalPoints} poin`,document.getElementById("room-hub-progress").textContent=`${K.completedRooms.length} / 5 ruangan selesai`,i.querySelectorAll(".room-card").forEach(a=>{a.addEventListener("click",()=>{const s=parseInt(a.dataset.level);e.classList.add("hidden"),n(s)})})}t(),e._refresh=t}function kv(){var t;gd(K.currentLevel),vv({playerName:K.playerName,totalPoints:K.totalPoints,levelBreakdown:K.levelBreakdown,completedAt:new Date().toISOString(),essayAnswer:((t=K.stage5)==null?void 0:t.essayAnswer)||""}),xd();const n=K.levelBreakdown.map(i=>`
    <tr>
      <td style="text-align:left;padding:6px 12px;color:#ccc">${i.label}</td>
      <td style="text-align:right;padding:6px 12px;font-weight:700;color:#ffe040">+${i.points}</td>
    </tr>
  `).join(""),e=document.createElement("div");e.id="game-complete-overlay",e.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    z-index:9999;font-family:system-ui,sans-serif;color:#fff;text-align:center;
    animation:fadeIn .5s ease;overflow-y:auto;padding:20px 0;
  `,e.innerHTML=`
    <div style="max-width:560px;width:92%;padding:36px 32px;
          background:linear-gradient(135deg,#1a2a1a,#0d1a10);
          border-radius:20px;border:2px solid #2ecc71;box-shadow:0 0 60px rgba(46,204,113,.4)">
      <div style="font-size:64px;margin-bottom:8px">🏆</div>
      <h1 style="font-size:26px;margin:0 0 6px;color:#2ecc71">Selamat, Kamu Menyelesaikan<br>3D BIOVINE!</h1>
      <p style="font-size:14px;color:#aaa;margin:0 0 20px">
        Kamu telah berhasil mengolah limbah vinasse menjadi<br>
        <strong style="color:#ffe040">Pupuk Organik Cair (POC)</strong> yang bermanfaat 🌿
      </p>

      <!-- Per-level breakdown -->
      <div style="background:rgba(0,0,0,.3);border-radius:12px;padding:16px;margin-bottom:20px;text-align:left">
        <div style="font-size:13px;font-weight:700;color:#2ecc71;margin-bottom:10px;text-transform:uppercase;letter-spacing:.05em">📊 Rincian Poin per Level</div>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tbody>
            ${n}
          </tbody>
          <tfoot>
            <tr style="border-top:1px solid rgba(255,255,255,.15)">
              <td style="text-align:left;padding:8px 12px;font-weight:700;color:#fff">Total</td>
              <td style="text-align:right;padding:8px 12px;font-size:22px;font-weight:700;color:#ffe040">${K.totalPoints}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button id="btn-gc-restart" style="
          padding:12px 28px;border-radius:10px;border:none;cursor:pointer;font-size:15px;font-weight:600;
          background:linear-gradient(135deg,#2ecc71,#27ae60);color:#fff;
          box-shadow:0 4px 16px rgba(46,204,113,.4)">
          🔄 Main Lagi dari Awal
        </button>
        <button id="btn-gc-close" style="
          padding:12px 28px;border-radius:10px;border:none;cursor:pointer;font-size:15px;font-weight:600;
          background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.2)">
          ✕ Tutup
        </button>
      </div>
    </div>
    <style>@keyframes fadeIn{from{opacity:0}to{opacity:1}}</style>
  `,document.body.appendChild(e),e.querySelector("#btn-gc-close").onclick=()=>{e.remove(),jt()},e.querySelector("#btn-gc-restart").onclick=()=>{e.remove(),window.location.reload()}}function Md(n,e,t,i=!1){const a=Ma.phenomena[n],s=Ae("stage-screen");K.wrongAnswers=0;const r=s.querySelector(".stage-panel");r&&r.remove();const o=document.createElement("div");o.className="stage-panel fade-in",o.innerHTML=`
    <div class="phenomenon-header">
      <span class="phenomenon-badge">${a.title}</span>
      ${i?"":`<span class="question-progress">${n+1} / ${Ma.phenomena.length}</span>`}
      ${t?'<button class="panel-close-btn" id="panel-close-btn" title="Tutup">✕</button>':""}
    </div>
    ${i?"":`
    <div class="progress-bar-wrap">
      ${Ma.phenomena.map((g,v)=>`<div class="prog-dot ${v<n?"done":v===n?"active":""}"></div>`).join("")}
    </div>`}
  `,t&&setTimeout(()=>{const g=o.querySelector("#panel-close-btn");g&&(g.onclick=t)},0);const l=document.createElement("div");if(l.className="question-text",l.innerHTML=a.context,o.appendChild(l),a.image){const g=document.createElement("div");g.style.cssText="text-align:center;margin:10px 0";const v=document.createElement("img");v.src=a.image,v.alt=a.title||"Gambar soal",v.style.cssText="max-width:100%;max-height:260px;border-radius:10px;border:2px solid rgba(255,255,255,.15);object-fit:contain",g.appendChild(v),o.appendChild(g)}a.tableData&&o.appendChild(Pv(a.tableData)),a.standardTable&&o.appendChild(Dv(a.standardTable)),a.riceGraph&&o.appendChild(Iv());const c=document.createElement("div");c.className="question-text",c.style.marginTop="4px",c.style.borderLeftColor="#e67e22",c.innerHTML=`<strong>❓ Pertanyaan:</strong><br>${a.question}`,o.appendChild(c);const d=document.createElement("div");d.className="answer-options";let h=!1;a.options.forEach(g=>{const v=document.createElement("button");v.className="answer-btn",v.innerHTML=`<strong>${g.label}.</strong> ${g.text}`,v.dataset.correct=g.correct,v.onclick=()=>{if(!h)if(g.correct){h=!0,v.classList.add("correct");const m=K.wrongAnswers===0?100:K.wrongAnswers<=1?50:25;K.totalPoints+=m,jt(),vc(o,!0,a.explanation+`<br><strong>+${m} poin!</strong>`),p.classList.add("visible"),d.querySelectorAll(".answer-btn").forEach(u=>u.disabled=!0)}else v.classList.add("wrong"),v.disabled=!0,K.wrongAnswers++,jt(),vc(o,!1,"❌ Jawaban kurang tepat. Coba pilihan lain!")},d.appendChild(v)}),o.appendChild(d);const f=document.createElement("div");f.className="feedback-box",f.id="feedback-box",o.appendChild(f);const p=document.createElement("button");p.className="next-btn",p.textContent=i?"✅ Selesai":n<Ma.phenomena.length-1?"Fenomena Berikutnya →":"✅ Selesai Level 1",p.onclick=()=>{i||n>=Ma.phenomena.length-1?(s.classList.add("hidden"),s.style.pointerEvents="none",e&&e()):(K.phenomenonIndex++,Md(K.phenomenonIndex,e,t,!1))},o.appendChild(p),s.appendChild(o)}function vc(n,e,t){const i=n.querySelector("#feedback-box");i&&(i.className="feedback-box "+(e?"correct":"wrong"),i.innerHTML=t)}function Pv(n){const e=document.createElement("div");e.className="data-table-wrap";let t='<table class="data-table"><thead><tr>';for(const i of n.headers)t+=`<th>${i}</th>`;t+="</tr></thead><tbody>";for(const i of n.rows)t+=`<tr><td><strong>${i.label}</strong></td>`,i.values.forEach((a,s)=>{const r=i.classes[s]?` class="${i.classes[s]}"`:"";t+=`<td${r}>${a}</td>`}),t+="</tr>";return t+="</tbody></table>",n.note&&(t+=`<div class="info-label" style="margin-top:6px">📌 ${n.note}</div>`),e.innerHTML=t,e}function Dv(n){const e=document.createElement("div");e.className="std-table-wrap";let t=`<div class="info-label" style="margin-bottom:6px">📋 ${n.title}</div>`;t+='<table class="std-table"><thead><tr>';for(const i of n.headers)t+=`<th>${i}</th>`;t+="</tr></thead><tbody>";for(const i of n.rows)t+="<tr>"+i.map(a=>`<td>${a}</td>`).join("")+"</tr>";return t+="</tbody></table>",e.innerHTML=t,e}function Iv(){const n=document.createElement("div");n.className="rice-graph-wrap";const e=document.createElement("img");return e.src="/rice-graph.png",e.alt="Grafik produktivitas panen padi",e.style.cssText="width:100%;border-radius:8px;border:1px solid rgba(255,255,255,0.1);display:block;",n.appendChild(e),n}function Uv(n,e,t){const i=Ae("result-overlay");i.classList.remove("hidden");const a=n>=75;Ae("result-icon").textContent=a?"🎉":n>=50?"👍":"💡",Ae("result-title").textContent=a?"Luar Biasa!":n>=50?"Bagus!":"Terus Belajar!",Ae("result-score").textContent=`+${n} poin`,Ae("result-total").textContent=`Total: ${K.totalPoints} poin`;const s=K.levelAttempts,r=s===1?"🥇 Berhasil di percobaan pertama!":s===2?"🥈 Berhasil di percobaan ke-2.":"🥉 Berhasil di percobaan ke-3.";Ae("result-attempts").textContent=r;const o=Ae("btn-result-continue");o.textContent=e,o.onclick=()=>{i.classList.add("hidden"),t()}}function wd(){Ae("glossary-modal").classList.toggle("hidden")}function Nv(){const n=Ae("hud");n.innerHTML=`
    <div id="hud-bar">
      <div id="hud-left">
        <span id="hud-player">Pemain</span>
        <span id="hud-level">Level 1</span>
      </div>
      <div id="hud-center">
        <div class="progress-bar-wrap" id="level-progress">
          ${[1,2,3,4,5].map((t,i)=>`<div class="prog-dot ${i===0?"active":""}" title="Level ${t}"></div>`).join("")}
        </div>
      </div>
      <div id="hud-right">
        <span id="hud-points">0</span>
        <div id="hud-attempts"></div>
        <button id="btn-glossary">📖 Buku Saku</button>
        <button id="btn-pause-menu">⚙️ Menu</button>
      </div>
    </div>
  `,n.style.display="none";const e=Ae("ui-overlay");e.innerHTML=`
    <!-- PAUSE MENU MODAL -->
    <div id="pause-menu-overlay" class="hidden">
      <div id="pause-menu-card">
        <div id="pause-menu-title">⚙️ Menu Permainan</div>
        <div id="pause-checkpoint-info"></div>
        <button class="btn-pause-action" id="btn-pm-continue">▶ Lanjutkan Bermain</button>
        <button class="btn-pause-action btn-pause-checkpoint" id="btn-pm-resume">↩ Kembali ke Checkpoint</button>
        <button class="btn-pause-action btn-pause-newgame" id="btn-pm-newgame">🔄 Mulai Ulang (New Game)</button>
      </div>
    </div>

    <!-- PROFILE SCREEN -->
    <div class="screen" id="profile-screen">
      <div class="profile-card">
        <div class="logo">🌿</div>
        <h1>3D BIOVINE</h1>
        <p class="subtitle">Game Edukasi Penyelamatan Lingkungan<br>dari Pencemaran Limbah Vinasse</p>

        <!-- Checkpoint resume banner (populated dynamically) -->
        <div id="resume-section" class="hidden"></div>

        <label for="input-name">Nama Karakter Kamu</label>
        <input type="text" id="input-name" placeholder="Masukkan nama karakter..." maxlength="30" />
        <button class="btn-primary" id="btn-profile-start">Mulai Petualangan →</button>
      </div>
    </div>

    <!-- INSTRUCTIONS SCREEN -->
    <div class="screen hidden" id="instructions-screen">
      <div class="instructions-card">
        <h2>📋 Petunjuk Permainan</h2>

        <div class="instr-section">
          <h3>🎯 Misi Utama</h3>
          <p>Selamatkan lingkungan dari pencemaran limbah <strong>Vinasse</strong> akibat industri etanol di kawasan Bekonang. Kamu akan menjelajahi kawasan pabrik, sungai, dan persawahan untuk memahami dampak pencemaran ini.</p>
        </div>

        <div class="instr-section">
          <h3>�️ Kontrol Gerak</h3>
          <p id="instr-controls-text"></p>
        </div>

        <div class="instr-section">
          <h3>�📊 Sistem Level</h3>
          <p>Terdapat <strong>6 Level</strong> yang harus diselesaikan secara berurutan. Setiap level memiliki 3 fenomena dengan masing-masing 1 pertanyaan.</p>
        </div>

        <div class="instr-section">
          <h3>🪙 Sistem Poin</h3>
          <table class="point-table">
            <thead><tr><th>Percobaan</th><th>Poin Diperoleh</th></tr></thead>
            <tbody>
              <tr><td>✅ Percobaan ke-1 (0 salah)</td><td>100 poin</td></tr>
              <tr><td>✅ Percobaan ke-2 (≤2 salah)</td><td>50 poin</td></tr>
              <tr><td>✅ Percobaan ke-3</td><td>25 poin</td></tr>
            </tbody>
          </table>
        </div>

        <div class="instr-section">
          <h3>�️ Panduan Level</h3>
          <div id="instr-level-guide"></div>
        </div>

        <div class="instr-section">
          <h3>💡 Tips Bermain</h3>
          <ul class="instr-tips">
            <li>🔴 Jawab dengan hati-hati karena setiap jawaban salah mengurangi poin yang kamu dapatkan.</li>
            <li>🟡 Progres permainan tersimpan otomatis setiap kali kamu menyelesaikan sebuah level!</li>
            <li>🟢 Jika kamu menutup permainan, kamu bisa <strong>melanjutkan dari level terakhir</strong> kapan saja.</li>
            <li>🔵 Gunakan <strong>Buku Saku</strong> di HUD jika kamu tidak mengenal istilah kimia.</li>
          </ul>
        </div>

        <div class="instr-section">
          <h3>�📖 Bantuan</h3>
          <p>Klik ikon <strong>"Buku Saku"</strong> di pojok kanan atas jika kamu butuh penjelasan tentang istilah kimia seperti pH, BOD, COD, DO, atau Vinasse.</p>
        </div>

        <button class="btn-primary" id="btn-start-game">🚀 Mulai Level 1</button>
      </div>
    </div>

    <!-- SYNOPSIS SCREEN (shown before intro video) -->
    <div class="screen hidden" id="synopsis-screen">
      <div class="synopsis-container">
        <!-- Avatar panel -->
        <div class="synopsis-avatar-wrap">
          <svg viewBox="0 0 200 400" class="synopsis-avatar" xmlns="http://www.w3.org/2000/svg">
            <!-- Shadow -->
            <ellipse cx="100" cy="393" rx="52" ry="6" fill="rgba(0,0,0,0.18)"/>
            <!-- Shoes -->
            <ellipse cx="80"  cy="387" rx="19" ry="7" fill="#1a1a2a"/>
            <ellipse cx="120" cy="387" rx="19" ry="7" fill="#1a1a2a"/>
            <!-- Legs (dark trousers) -->
            <rect x="68"  y="290" width="22" height="100" rx="9" fill="#2c3e50"/>
            <rect x="110" y="290" width="22" height="100" rx="9" fill="#2c3e50"/>
            <!-- Lab coat body -->
            <path d="M40 163 L160 163 L164 302 L36 302 Z" fill="#f0f4f8"/>
            <!-- Lab coat lapels -->
            <path d="M100 163 L76 214 L52 192 L40 163 Z" fill="#dde3e8"/>
            <path d="M100 163 L124 214 L148 192 L160 163 Z" fill="#dde3e8"/>
            <!-- Shirt / tie area -->
            <path d="M100 163 L76 214 L124 214 Z" fill="#2980b9"/>
            <polygon points="100,175 94,210 100,220 106,210" fill="#1a5276"/>
            <!-- Right arm (relaxed along side) -->
            <path d="M160 178 Q182 208 175 252" stroke="#dde3e8" stroke-width="28" fill="none" stroke-linecap="round"/>
            <path d="M160 178 Q182 208 175 252" stroke="#f5cba7" stroke-width="20" fill="none" stroke-linecap="round"/>
            <ellipse cx="174" cy="257" rx="13" ry="10" fill="#f5cba7"/>
            <!-- Left arm (raised / gesturing at viewer) -->
            <path d="M40 178 Q14 202 18 248" stroke="#f0f4f8" stroke-width="28" fill="none" stroke-linecap="round"/>
            <path d="M40 178 Q14 202 18 248" stroke="#f5cba7" stroke-width="20" fill="none" stroke-linecap="round"/>
            <ellipse cx="17" cy="253" rx="13" ry="10" fill="#f5cba7"/>
            <!-- Pointing index finger -->
            <line x1="17" y1="248" x2="4" y2="236" stroke="#f5cba7" stroke-width="7" stroke-linecap="round"/>
            <!-- Neck -->
            <rect x="87" y="140" width="26" height="28" rx="9" fill="#f5cba7"/>
            <!-- Head -->
            <ellipse cx="100" cy="98" rx="56" ry="60" fill="#f5cba7"/>
            <!-- Hair (dark, neat) -->
            <path d="M46 82 Q46 36 100 36 Q154 36 154 82 Q150 48 100 48 Q50 48 46 82 Z" fill="#1c0c02"/>
            <!-- Side hair -->
            <path d="M46 78 Q44 108 48 132" stroke="#1c0c02" stroke-width="9" fill="none" stroke-linecap="round"/>
            <path d="M154 78 Q156 108 152 132" stroke="#1c0c02" stroke-width="9" fill="none" stroke-linecap="round"/>
            <!-- Ears -->
            <ellipse cx="46"  cy="100" rx="8" ry="12" fill="#e8a87c"/>
            <ellipse cx="154" cy="100" rx="8" ry="12" fill="#e8a87c"/>
            <!-- Eyes (whites) -->
            <ellipse cx="78"  cy="98" rx="13" ry="14" fill="white"/>
            <ellipse cx="122" cy="98" rx="13" ry="14" fill="white"/>
            <!-- Irises -->
            <circle cx="80"  cy="100" r="9" fill="#2c1a0e"/>
            <circle cx="124" cy="100" r="9" fill="#2c1a0e"/>
            <!-- Pupils / highlight -->
            <circle cx="82"  cy="98" r="3.5" fill="white"/>
            <circle cx="126" cy="98" r="3.5" fill="white"/>
            <!-- Eyebrows -->
            <path d="M65 83 Q78 76 91 83" stroke="#1c0c02" stroke-width="3.2" fill="none" stroke-linecap="round"/>
            <path d="M109 83 Q122 76 135 83" stroke="#1c0c02" stroke-width="3.2" fill="none" stroke-linecap="round"/>
            <!-- Glasses frames -->
            <rect x="62"  y="87" width="30" height="22" rx="7" fill="rgba(180,220,255,0.08)" stroke="#556" stroke-width="2.5"/>
            <rect x="108" y="87" width="30" height="22" rx="7" fill="rgba(180,220,255,0.08)" stroke="#556" stroke-width="2.5"/>
            <line x1="92"  y1="98" x2="108" y2="98" stroke="#556" stroke-width="2.5"/>
            <line x1="62"  y1="98" x2="52"  y2="94" stroke="#556" stroke-width="2.5"/>
            <line x1="138" y1="98" x2="148" y2="94" stroke="#556" stroke-width="2.5"/>
            <!-- Mouth (animated by JS) -->
            <path id="syn-mouth" d="M84 126 Q100 138 116 126" stroke="#c0392b" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <!-- Cheek blush -->
            <ellipse cx="64"  cy="115" rx="9" ry="6" fill="rgba(255,150,100,0.18)"/>
            <ellipse cx="136" cy="115" rx="9" ry="6" fill="rgba(255,150,100,0.18)"/>
            <!-- Lab coat pocket with pen -->
            <rect x="116" y="212" width="30" height="36" rx="6" fill="none" stroke="#c8d0d8" stroke-width="1.5"/>
            <line x1="125" y1="212" x2="125" y2="206" stroke="#888" stroke-width="2" stroke-linecap="round"/>
            <line x1="131" y1="212" x2="131" y2="204" stroke="#aaa" stroke-width="2" stroke-linecap="round"/>
            <line x1="137" y1="212" x2="137" y2="207" stroke="#e74c3c" stroke-width="2" stroke-linecap="round"/>
            <!-- Name badge -->
            <rect x="48" y="212" width="46" height="32" rx="5" fill="rgba(41,128,185,0.18)" stroke="rgba(41,128,185,0.5)" stroke-width="1.5"/>
            <text x="71" y="226" text-anchor="middle" fill="#7ed6f7" font-size="6.5" font-family="monospace" font-weight="bold">PENELITI</text>
            <text x="71" y="236" text-anchor="middle" fill="#95a5a6" font-size="5.5" font-family="monospace">BIOVINE</text>
          </svg>
          <div class="synopsis-avatar-name">Dr. Ana Wijaya</div>
        </div>

        <!-- Text content panel -->
        <div class="synopsis-content" id="synopsis-content-panel">
          <button id="btn-syn-skip" class="synopsis-btn-skip">Lewati ⟶</button>
          <div id="syn-seg-tag"   class="synopsis-segment-tag">Bagian 1 dari 3</div>
          <div id="syn-seg-title" class="synopsis-segment-title">Industri Etanol di Desa Bekonang</div>
          <div id="syn-seg-text"  class="synopsis-text"></div>
          <div class="synopsis-photos">
            <img src="synopsis/Synopsis-1.jpeg" alt="Desa Bekonang" class="synopsis-photo" />
            <img src="synopsis/Synopsis-2.jpeg" alt="Desa Bekonang" class="synopsis-photo" />
            <img src="synopsis/Synopsis-3.jpeg" alt="Desa Bekonang" class="synopsis-photo" />
          </div>
          <div id="syn-dots" class="synopsis-dots"></div>
          <div class="synopsis-nav">
            <button id="btn-syn-prev" class="synopsis-btn-prev">← Kembali</button>
            <button id="btn-syn-next" class="synopsis-btn-next">Lanjutkan →</button>
          </div>
        </div>
      </div>
    </div>

    <!-- YOUTUBE VIDEOS SCREEN (shown before 3D IPAL sim) -->
    <div class="screen hidden" id="youtube-screen">
      <div class="youtube-container">
        <div class="youtube-header">
          <div class="youtube-logo">🎬</div>
          <div>
            <div class="youtube-title" id="yt-title">Video Edukasi</div>
            <div class="youtube-subtitle" id="yt-subtitle">Tonton video berikut (opsional sebelum melanjutkan)</div>
          </div>
          <div class="youtube-counter" id="yt-counter">1 / 2</div>
        </div>
        <div class="youtube-frame-wrap">
          <div id="yt-player-container"><div class="yt-loading">Memuat video…</div></div>
        </div>
        <button class="btn-primary youtube-btn-next" id="btn-yt-next">Lanjutkan →</button>
      </div>
    </div>

    <!-- INTRO VIDEO SCREEN -->
    <div class="screen hidden" id="intro-video-screen">
      <div class="intro-scene-wrap">
        <canvas id="intro-3d-canvas"></canvas>

        <!-- Title overlay top-left -->
        <div class="intro-overlay-title">
          <div class="intro-overlay-logo">🌿</div>
          <div>
            <div class="intro-overlay-h">3D BIOVINE</div>
            <div class="intro-overlay-sub">Simulasi IPAL Kawasan Industri &amp; Sistem Pengelolaan Limbah Vinasse</div>
          </div>
        </div>

        <!-- Stage label bottom-left -->
        <div id="intro-stage-label"></div>

        <!-- Continue button bottom-right -->
        <button class="btn-primary intro-btn-continue" id="btn-intro-continue">Lanjutkan ke Petunjuk →</button>
      </div>
    </div>

    <!-- STAGE SCREEN (quiz panel appended dynamically) -->
    <div class="screen hidden" id="stage-screen" style="background:transparent; pointer-events:none;"></div>

    <!-- ROOM SELECT HUB -->
    <div class="popup-overlay hidden" id="room-select-overlay">
      <div class="room-hub-card">
        <div class="room-hub-header">
          <div>
            <div class="room-hub-title">🏫 Pilih Ruangan</div>
            <div class="room-hub-sub">Kamu bisa masuk ke ruangan mana saja, dalam urutan bebas</div>
          </div>
          <div class="room-hub-meta">
            <div id="room-hub-points">🪙 0 poin</div>
            <div id="room-hub-progress">0 / 5 ruangan selesai</div>
          </div>
        </div>
        <div id="room-select-grid" class="room-select-grid"></div>
      </div>
    </div>

    <!-- RESULT POPUP -->
    <div class="popup-overlay hidden" id="result-overlay">
      <div class="popup-card">
        <div class="result-icon" id="result-icon">🎉</div>
        <h2 id="result-title">Luar Biasa!</h2>
        <div class="result-score" id="result-score">+100 poin</div>
        <p id="result-total">Total: 100 poin</p>
        <p id="result-attempts">🥇 Berhasil di percobaan pertama!</p>
        <button class="btn-primary" id="btn-result-continue">Lanjut ke Level 2 →</button>
      </div>
    </div>

    <!-- GLOSSARY MODAL -->
    <div id="glossary-modal" class="hidden">
      <div class="glossary-card">
        <button class="glossary-close" id="btn-close-glossary">✕ Tutup</button>
        <h2>📖 Buku Saku Kimia Lingkungan</h2>

        <div class="glossary-item">
          <div class="term">Vinasse</div>
          <div class="definition">Limbah cair hasil penyulingan (distilasi) fermentasi tebu menjadi etanol. Berwarna coklat kehitaman, berbau manis menyengat, sangat asam, dan kaya bahan organik seperti asam asetat, asam laktat, gliserol, fenol, dan melanoid.</div>
        </div>
        <div class="glossary-item">
          <div class="term">COD (Chemical Oxygen Demand)</div>
          <div class="definition">Jumlah oksigen yang diperlukan untuk mengurai <em>seluruh</em> bahan organik dalam air secara kimia. Nilai tinggi menandakan banyak polutan organik. Satuan: mg/L.</div>
        </div>
        <div class="glossary-item">
          <div class="term">BOD (Biochemical Oxygen Demand)</div>
          <div class="definition">Jumlah oksigen terlarut yang dibutuhkan mikroorganisme untuk mengurai bahan organik secara biologis (aerobik). Nilai tinggi = air tercemar berat. Satuan: mg/L.</div>
        </div>
        <div class="glossary-item">
          <div class="term">DO (Dissolved Oxygen)</div>
          <div class="definition">Kadar oksigen yang terlarut dalam air. DO rendah (&lt;4 mg/L) berarti air tidak sehat bagi organisme akuatik. Air bersih normal memiliki DO ≥ 6 mg/L.</div>
        </div>
        <div class="glossary-item">
          <div class="term">TDS (Total Dissolved Solids)</div>
          <div class="definition">Total padatan (ion anorganik + senyawa organik terlarut) dalam air. Satuan mg/L. Baku mutu air minum: ≤ 500 mg/L. TDS tinggi mengindikasikan pencemaran berat.</div>
        </div>
        <div class="glossary-item">
          <div class="term">pH</div>
          <div class="definition">Derajat keasaman air. pH &lt; 7 = asam; pH 7 = netral; pH &gt; 7 = basa. Limbah vinasse bersifat sangat asam (pH rendah), merusak ekosistem perairan dan tanah pertanian.</div>
        </div>
        <div class="glossary-item">
          <div class="term">Bakteri Coliform</div>
          <div class="definition">Kelompok bakteri indikator pencemaran feses/organik. Pertumbuhannya meningkat seiring naiknya BOD & COD. Berbahaya bagi kesehatan manusia, dapat menyebabkan diare hingga kematian.</div>
        </div>
        <div class="glossary-item">
          <div class="term">Bakteri Metanogenik & Asidogenik</div>
          <div class="definition">Kelompok bakteri anaerob yang ditemukan dalam limbah vinasse. Bakteri asidogenik menghasilkan asam organik, sedangkan metanogenik menghasilkan gas metana (CH₄) dalam proses fermentasi anaerob.</div>
        </div>
      </div>
    </div>
  `,Ae("btn-profile-start").onclick=()=>{const t=Ae("input-name").value.trim();if(!t){Ae("input-name").style.borderColor="#e74c3c",Ae("input-name").focus();return}K.playerName=t,bd(),ro&&ro(t)},Ae("input-name").addEventListener("keydown",t=>{t.key==="Enter"&&Ae("btn-profile-start").click()}),setTimeout(()=>{const t=Ae("btn-close-glossary");t&&(t.onclick=()=>wd())},100)}const me=n=>document.getElementById(n);function Ov(n){qv();const e=me("sim-overlay");e&&e.remove();const t=document.createElement("div");t.id="sim-overlay",t.className="sim-overlay",t.innerHTML=Fv(),document.body.appendChild(t),requestAnimationFrame(()=>{zv(t,n)})}function Fv(){return`
    <div class="sim-card">
      <!-- Header -->
      <div class="sim-header">
        <span class="sim-badge">🔬 SIMULASI LAB</span>
        <h2 class="sim-title">Pengolahan Limbah Vinasse</h2>
        <p class="sim-subtitle">Ukur COD, BOD & pH — lalu uji efektivitas aerasi</p>
      </div>

      <!-- Step 1: Volume selector -->
      <div class="sim-step" id="sim-step-1">
        <div class="step-title">
          <span class="step-num">1</span>
          Pilih Volume Vinasse yang Dituangkan ke Beker (1 000 mL)
        </div>
        <div class="volume-selector">
          ${[200,400,600,800,1e3].map(n=>`
            <button class="vol-btn" data-vol="${n}">${n} mL</button>
          `).join("")}
        </div>
        <div class="vol-preview" id="vol-preview">
          <div class="beaker-wrap">
            <div class="beaker">
              <div class="beaker-vinasse" id="beaker-vinasse"></div>
              <div class="beaker-water"   id="beaker-water"></div>
              <div class="beaker-scale">
                ${[1e3,800,600,400,200,0].map(n=>`<span>${n}</span>`).join("")}
              </div>
            </div>
          </div>
          <div class="vol-legend">
            <span class="legend-box water-box"></span> Air suling
            <span class="legend-box vinasse-box"></span> Vinasse
          </div>
        </div>
        <button class="sim-btn" id="btn-titrate" disabled>🧪 Lakukan Titrasi →</button>
      </div>

      <!-- Step 2: Interactive titration -->
      <div class="sim-step hidden" id="sim-step-2">
        <div class="step-title">
          <span class="step-num">2</span>
          Titrasi COD — Uji Konsumsi KMnO₄
        </div>
        <div class="titration-layout">
          <!-- Left: lab apparatus (burette above flask) -->
          <div class="tit-apparatus">
            <div class="tit-label-sm">Buret KMnO₄</div>
            <div class="tit-burette" id="tit-burette">
              <div class="tit-burette-liquid" id="tit-burette-liquid"></div>
              <div class="tit-burette-scale">
                ${[0,5,10,15,20,25].map(n=>`<span>${n}</span>`).join("")}
              </div>
            </div>
            <div class="tit-tip-col">
              <div class="tit-tip-line"></div>
              <div class="tit-drop" id="tit-drop"></div>
            </div>
            <div class="tit-flask" id="tit-flask">
              <div class="tit-flask-liquid" id="tit-flask-liquid"></div>
              <div class="tit-ripple" id="tit-ripple"></div>
            </div>
            <div class="tit-label-sm" style="margin-top:5px">Sampel Vinasse (Erlenmeyer)</div>
            <div class="tit-vol-display">
              <span id="tit-vol-reading">0,00</span> mL terpakai
            </div>
          </div>

          <!-- Right: controls & status -->
          <div class="tit-panel">
            <div class="tit-reagent-box">
              <div class="tit-reagent-dot"></div>
              <div>
                <b>KMnO₄</b> — Kalium Permanganat<br>
                <span>Reagen pengoksidasi (ungu). Langsung terdekolorisasi saat bertemu bahan organik sampel, hingga semua teroksidasi — itulah titik akhir titrasi.</span>
              </div>
            </div>
            <div class="tit-status" id="tit-status">
              <span style="color:#b070d8">●</span>
              KMnO₄ langsung terdekolorisasi — masih ada bahan organik yang belum teroksidasi
            </div>
            <div class="tit-ep-notice hidden" id="tit-ep-notice">
              🎯 <b>Titik Akhir!</b> Warna merah muda muncul pertama kali — semua bahan organik telah teroksidasi oleh KMnO₄!
            </div>
            <!-- Valve controls -->
            <div class="tit-valve-section">
              <div class="tit-valve-visual">
                <div class="tit-valve-wheel closed" id="tit-valve-wheel"></div>
                <div class="tit-valve-info">
                  <div class="tit-valve-label" id="tit-valve-label">TUTUP</div>
                  <div class="tit-valve-sublabel">Tahan tombol untuk membuka katup reagen</div>
                </div>
              </div>
              <div class="tit-hold-row">
                <button class="tit-valve-slow" id="btn-valve-slow">💧 Tahan: Tetes Pelan</button>
                <button class="tit-valve-fast" id="btn-valve-fast">💦 Tahan: Aliran Cepat</button>
              </div>
              <div class="tit-flow-indicator">
                <span id="tit-flow-dot">⬜</span>
                <span id="tit-flow-text">Katup TUTUP — tahan tombol untuk mengalirkan KMnO₄</span>
              </div>
            </div>

            <div class="tit-warning hidden" id="tit-warning">
              ⚠️ Mendekati titik akhir! Gunakan <b>tetes pelan</b> saja.
            </div>
            <div class="tit-overflow hidden" id="tit-overflow">
              <div class="tit-overflow-msg">💥 OVERFLOW! Terlalu banyak reagen — titrasi gagal.</div>
              <div class="tit-overflow-sub">KMnO₄ berlebih merusak warna titik akhir. Mulai ulang dan teteskan lebih hati-hati di akhir!</div>
              <button class="tit-btn" id="btn-tit-retry"
                style="margin-top:4px;background:linear-gradient(135deg,#4a1010,#6a2010);color:#ff9090;border:1px solid #aa3020">
                🔄 Coba Lagi Titrasi
              </button>
            </div>

            <button class="sim-btn hidden" id="btn-confirm-endpoint"
              style="margin-top:14px;width:100%;background:linear-gradient(135deg,#1a6040,#2a9060)">
              ✅ Catat Titik Akhir Titrasi
            </button>
          </div>
        </div>

        <!-- Revealed after endpoint is confirmed -->
        <div class="tit-results hidden" id="tit-results">
          <div class="tit-results-heading">📊 Hasil Pengukuran Parameter Awal</div>
          <div class="param-grid" id="initial-params"></div>
          <div class="titration-note" id="titration-note"></div>
          <button class="sim-btn" id="btn-go-aerate">💨 Lanjut ke Simulasi Aerasi →</button>
        </div>
      </div>

      <!-- Step 3: Aeration -->
      <div class="sim-step hidden" id="sim-step-3">
        <div class="step-title">
          <span class="step-num">3</span>
          Simulasi Aerasi (Biodegradasi Aerobik)
        </div>

        <div class="aerator-panel">
          <div class="aerator-visual" id="aerator-visual">
            <div class="aerator-tank">
              <div class="aerator-liquid" id="aerator-liquid"></div>
              <div class="bubble-container" id="bubble-container"></div>
            </div>
            <div class="aerator-machine" id="aerator-machine">
              <div class="motor-body"></div>
              <div class="motor-shaft"></div>
            </div>
          </div>

          <div class="aerator-controls">
            <label class="toggle-label">
              <span>Aerator</span>
              <label class="toggle-switch">
                <input type="checkbox" id="aerator-toggle">
                <span class="toggle-slider"></span>
              </label>
              <span id="aerator-status" class="status-off">MATI</span>
            </label>

            <div class="duration-wrap" id="duration-wrap">
              <label>Durasi Aerasi</label>
              <div class="duration-buttons">
                ${[6,12,24,48,72].map(n=>`
                  <button class="dur-btn" data-hours="${n}">${n} jam</button>
                `).join("")}
              </div>
            </div>
          </div>
        </div>

        <button class="sim-btn hidden" id="btn-calc-result">📊 Hitung Hasil Pengolahan →</button>
      </div>

      <!-- Step 4: Results -->
      <div class="sim-step hidden" id="sim-step-4">
        <div class="step-title">
          <span class="step-num">4</span>
          Hasil Pengolahan & Evaluasi
        </div>
        <div class="results-grid" id="results-grid">
          <!-- populated by JS -->
        </div>
        <div class="compliance-banner" id="compliance-banner"></div>
        <div class="sim-conclusion" id="sim-conclusion"></div>

        <button class="sim-btn hidden" id="btn-sim-finish" style="margin-top:8px">✅ Selesai Level 2 →</button>
      </div>

    </div>
  `}function zv(n,e){let t=null,i=null,a=null,s=!1;n.querySelectorAll(".vol-btn").forEach(r=>{r.onclick=()=>{n.querySelectorAll(".vol-btn").forEach(o=>o.classList.remove("active")),r.classList.add("active"),t=parseInt(r.dataset.vol),me("btn-titrate").disabled=!1,Hv(t)}}),me("btn-titrate").onclick=()=>{i=mv(t),Wr("sim-step-1","sim-step-2"),Sd(t,i)},me("btn-go-aerate").onclick=()=>{Wr("sim-step-2","sim-step-3"),Vv(i)},me("aerator-toggle").onchange=function(){s=this.checked;const r=me("aerator-status");r.textContent=s?"NYALA":"MATI",r.className=s?"status-on":"status-off",me("aerator-machine").classList.toggle("running",s),Wv(s),s?me("duration-wrap").classList.remove("locked"):(me("duration-wrap").classList.add("locked"),a=null,n.querySelectorAll(".dur-btn").forEach(o=>o.classList.remove("active")),me("btn-calc-result").classList.add("hidden"))},n.querySelectorAll(".dur-btn").forEach(r=>{r.onclick=()=>{s&&(n.querySelectorAll(".dur-btn").forEach(o=>o.classList.remove("active")),r.classList.add("active"),a=parseInt(r.dataset.hours),me("btn-calc-result").classList.remove("hidden"))}}),me("btn-calc-result").onclick=()=>{const r=gv(i,a);Wr("sim-step-3","sim-step-4"),Xv(i,r,t,a),me("btn-sim-finish").classList.remove("hidden"),me("btn-sim-finish").onclick=()=>{me("sim-overlay").remove(),e&&e()}}}function Sd(n,e){const t=Math.max(.2,n*.001),i=t*1.4,a=t*.8,s=t*.92,r=50,o=Math.max(4e-4,t/350),l=Math.max(.003,t/60);let c=0,d=null,h=0,f=0,p=!1,g=!1;const v=e.dilutionFactor;me("tit-flask-liquid").style.background=`rgb(${Math.round(55+v*55)},${Math.round(15+v*15)},3)`,me("tit-flask-liquid").style.transition="background 0.3s",me("tit-burette-liquid").style.height="90%",me("tit-vol-reading").textContent="0,00",me("tit-status").style.display="",me("tit-ep-notice").classList.add("hidden"),me("btn-confirm-endpoint").classList.add("hidden"),me("tit-warning").classList.add("hidden"),me("tit-overflow").classList.add("hidden"),me("tit-flask").classList.remove("overflow-shake"),me("btn-valve-slow").disabled=!1,me("btn-valve-fast").disabled=!1,me("tit-flask").querySelectorAll(".overflow-particle").forEach(S=>S.remove()),m(0);function m(S){const I=me("tit-valve-wheel"),M=me("tit-valve-label"),A=me("tit-flow-dot"),N=me("tit-flow-text");I.className="tit-valve-wheel",S<=0?(I.classList.add("closed"),M.textContent="TUTUP",M.style.color="#6080a0",A.textContent="⬜",N.textContent="Katup TUTUP — tahan tombol untuk mengalirkan KMnO₄"):S===o?(I.classList.add("slow"),M.textContent="PELAN",M.style.color="#00aaff",A.textContent="🔵",N.textContent="Mengalir PELAN — ideal untuk mendekati titik akhir"):(I.classList.add("fast"),M.textContent="CEPAT",M.style.color="#ff5500",A.textContent="🔴",N.textContent="Aliran CEPAT ⚠️ — hati-hati mendekati titik akhir!")}function u(){const S=me("tit-drop");S.classList.remove("falling"),S.offsetWidth,S.classList.add("falling"),Bv()}function x(){const S=Math.max(8,90-c/t*78);if(me("tit-burette-liquid").style.height=S+"%",me("tit-vol-reading").textContent=c.toFixed(2).replace(".",","),!p&&c<=t){const I=Math.min(1,c/t),M=Math.round((55+v*55)*(1-I)+255*I),A=Math.round((15+v*15)*(1-I)+155*I),N=Math.round(3*(1-I)+185*I);me("tit-flask-liquid").style.background=`rgb(${M},${A},${N})`}!g&&!p&&(c>=a&&me("tit-warning").classList.remove("hidden"),c>=s&&(me("btn-valve-fast").disabled=!0,h===l&&_()))}function b(S){if(p||g||d)return;h=S,f=0,m(S);const I=S===o?10:3;d=setInterval(()=>{if(c+=S,f++,x(),f%I===0&&u(),c>=i){_(),w();return}c>=t&&(_(),k())},r)}function _(){d&&(clearInterval(d),d=null),h=0,!p&&!g&&m(0)}function k(){g=!0,me("tit-flask-liquid").style.background="rgba(255,155,185,0.88)",me("tit-warning").classList.add("hidden"),me("tit-status").style.display="none",me("tit-ep-notice").classList.remove("hidden"),me("btn-valve-slow").disabled=!0,me("btn-valve-fast").disabled=!0,me("btn-confirm-endpoint").classList.remove("hidden"),m(0)}function w(){p=!0,me("tit-flask-liquid").style.background="rgba(180,20,20,0.85)",me("tit-warning").classList.add("hidden"),me("tit-overflow").classList.remove("hidden"),me("btn-valve-slow").disabled=!0,me("btn-valve-fast").disabled=!0,m(0);const S=me("tit-flask");S.classList.remove("overflow-shake"),S.offsetWidth,S.classList.add("overflow-shake");for(let I=0;I<8;I++){const M=document.createElement("div");M.className="overflow-particle",M.style.left=10+Math.random()*80+"%",M.style.animationDelay=Math.random()*.4+"s",S.appendChild(M),setTimeout(()=>M.remove(),2e3)}}me("btn-valve-slow").onmousedown=S=>{S.preventDefault(),b(o)},me("btn-valve-slow").onmouseup=_,me("btn-valve-slow").onmouseleave=_,me("btn-valve-slow").ontouchstart=S=>{S.preventDefault(),b(o)},me("btn-valve-slow").ontouchend=_,me("btn-valve-slow").ontouchcancel=_,me("btn-valve-fast").onmousedown=S=>{S.preventDefault(),b(l)},me("btn-valve-fast").onmouseup=_,me("btn-valve-fast").onmouseleave=_,me("btn-valve-fast").ontouchstart=S=>{S.preventDefault(),b(l)},me("btn-valve-fast").ontouchend=_,me("btn-valve-fast").ontouchcancel=_,me("btn-confirm-endpoint").onclick=()=>{me("tit-results").classList.remove("hidden"),Gv(e,n),setTimeout(()=>me("tit-results").scrollIntoView({behavior:"smooth",block:"nearest"}),100)},me("btn-tit-retry").onclick=()=>{_(),Sd(n,e)}}function Bv(){const n=me("tit-ripple");n&&(n.classList.remove("ripple-active"),n.offsetWidth,n.classList.add("ripple-active"))}function Hv(n){const t=n/1e3*100,i=100-t,a=me("beaker-vinasse"),s=me("beaker-water");a.style.height=t+"%",a.style.bottom="0%",s.style.height=i+"%",s.style.bottom=t+"%"}function Gv(n,e){const t=me("initial-params"),i=me("titration-note");t.innerHTML=[{icon:"🧫",label:"COD",value:n.cod.toLocaleString("id-ID")+" mg/L",sub:"Chemical Oxygen Demand",status:n.cod>1e3?"danger":n.cod>300?"warn":"good"},{icon:"🦠",label:"BOD",value:n.bod.toLocaleString("id-ID")+" mg/L",sub:"Biochemical Oxygen Demand",status:n.bod>400?"danger":n.bod>100?"warn":"good"},{icon:"⚗️",label:"pH",value:n.ph.toFixed(2),sub:`${n.ph<5?"Sangat Asam ⚠️":n.ph<6.5?"Asam":"Mendekati Netral"}`,status:n.ph<5?"danger":n.ph<6.5?"warn":"good"},{icon:"📏",label:"Faktor Pengenceran",value:`1 : ${(1/n.dilutionFactor).toFixed(1)}`,sub:`${e} mL vinasse dalam 1 000 mL`,status:"neutral"}].map(a=>`
    <div class="param-card ${a.status}">
      <span class="param-icon">${a.icon}</span>
      <span class="param-label">${a.label}</span>
      <span class="param-value">${a.value}</span>
      <span class="param-sub">${a.sub}</span>
    </div>
  `).join(""),i.innerHTML=`
    ⚗️ <strong>Interpretasi:</strong> Dengan ${e} mL vinasse (selebihnya air suling),
    COD = <b>${n.cod.toLocaleString("id-ID")} mg/L</b> dan BOD = <b>${n.bod.toLocaleString("id-ID")} mg/L</b>.
    Baku mutu effluent industri: COD ≤ 100 mg/L, BOD ≤ 40 mg/L (Permen LH No.5/2014).
    ${n.cod>100?"⛔ Sampel <strong>jauh melebihi</strong> baku mutu — perlu pengolahan intensif.":"✅ Sampel sudah memenuhi batas COD."}
  `}function Vv(n){const e=me("aerator-liquid");if(!e)return;const t=Math.min(1,n.cod/45e3),i=Math.round(60+t*60),a=Math.round(20+t*5),s=0;e.style.background=`rgb(${i},${a},${s})`}function Wv(n){const e=me("bubble-container");if(e&&(e.innerHTML="",!!n))for(let t=0;t<14;t++){const i=document.createElement("div");i.className="bubble",i.style.left=5+Math.random()*85+"%",i.style.animationDuration=1.2+Math.random()*2+"s",i.style.animationDelay=Math.random()*2+"s",i.style.width=i.style.height=4+Math.random()*8+"px",e.appendChild(i)}}function Xv(n,e,t,i){const a=me("results-grid"),s=me("compliance-banner"),r=me("sim-conclusion"),o=[{icon:"🧫",label:"COD",before:n.cod.toLocaleString("id-ID")+" mg/L",after:e.cod.toLocaleString("id-ID")+" mg/L",removal:e.codRemovalPct+"%",limit:"≤ 100 mg/L",pass:e.cod<=100},{icon:"🦠",label:"BOD",before:n.bod.toLocaleString("id-ID")+" mg/L",after:e.bod.toLocaleString("id-ID")+" mg/L",removal:e.bodRemovalPct+"%",limit:"≤ 40 mg/L",pass:e.bod<=40},{icon:"⚗️",label:"pH",before:n.ph.toFixed(2),after:e.ph.toFixed(2),removal:"+"+(e.ph-n.ph).toFixed(2),limit:"6.0 – 9.0",pass:e.ph>=6&&e.ph<=9}];a.innerHTML=`
    <div class="results-header-row">
      <span>Parameter</span><span>Sebelum</span><span>Sesudah</span><span>Removal %</span><span>Baku Mutu</span><span>Status</span>
    </div>
    ${o.map(l=>`
      <div class="results-row ${l.pass?"pass":"fail"}">
        <span>${l.icon} ${l.label}</span>
        <span>${l.before}</span>
        <span>${l.after}</span>
        <span>${l.removal}</span>
        <span>${l.limit}</span>
        <span>${l.pass?"✅":"⛔"}</span>
      </div>
    `).join("")}
  `,s.className="compliance-banner "+(e.compliant?"compliant":"not-compliant"),s.innerHTML=e.compliant?"✅ Effluent <strong>MEMENUHI</strong> baku mutu Permen LH No.5/2014 setelah aerasi!":"⛔ Effluent <strong>BELUM MEMENUHI</strong> baku mutu — perlu pengolahan lanjut atau durasi aerasi lebih panjang.",r.innerHTML=`
    <strong>📝 Kesimpulan:</strong> Dengan volume vinasse <b>${t} mL</b> dan aerasi selama
    <b>${i} jam</b>, diperoleh penurunan COD sebesar <b>${e.codRemovalPct}%</b> dan
    BOD sebesar <b>${e.bodRemovalPct}%</b>. pH meningkat dari <b>${n.ph}</b>
    menjadi <b>${e.ph}</b> karena asam organik teroksidasi oleh mikroba aerob.
    ${e.compliant?"Pengolahan ini efektif dan limbah sudah layak dibuang ke badan air penerima.":"Disarankan menambah durasi aerasi atau menggunakan teknologi lanjutan (koagulasi/MBBR) agar sesuai regulasi."}
  `}function Wr(n,e){const t=me(n),i=me(e);t.classList.add("step-exit"),setTimeout(()=>{t.classList.add("hidden"),t.classList.remove("step-exit"),i.classList.remove("hidden"),i.classList.add("step-enter"),setTimeout(()=>i.classList.remove("step-enter"),400)},300)}function qv(){if(document.getElementById("sim-styles"))return;const n=`
    /* ── Simulation overlay ───────────────────────────── */
    .sim-overlay {
      position: fixed; inset: 0;
      background: rgba(5, 12, 25, 0.96);
      display: flex; align-items: center; justify-content: center;
      z-index: 400; overflow-y: auto; padding: 24px 12px;
    }
    .sim-card {
      background: rgba(12, 22, 40, 0.98);
      border: 1px solid #1a4a6a;
      border-radius: 16px;
      max-width: 820px; width: 100%;
      padding: 28px 32px;
      color: #e0eeff;
      box-shadow: 0 0 40px rgba(0, 120, 200, 0.25);
    }
    .sim-header { text-align: center; margin-bottom: 28px; }
    .sim-badge {
      background: rgba(0, 200, 255, 0.15);
      border: 1px solid #00c8ff;
      color: #00c8ff; padding: 4px 14px;
      border-radius: 20px; font-size: 12px; letter-spacing: 1px;
    }
    .sim-title { margin: 10px 0 4px; font-size: 22px; color: #a0d8ff; }
    .sim-subtitle { color: #7090a0; font-size: 13px; }

    /* ── Steps ────────────────────────────────────────── */
    .sim-step { margin-top: 16px; }
    .sim-step.hidden { display: none; }
    .step-title {
      display: flex; align-items: center; gap: 10px;
      font-size: 15px; font-weight: 700; color: #80c8ff;
      margin-bottom: 16px;
    }
    .step-num {
      background: #0a4070; color: #40aaff;
      width: 28px; height: 28px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 800; flex-shrink: 0;
    }
    @keyframes stepEnter { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform: none; } }
    @keyframes stepExit  { from { opacity:1; transform: none; } to { opacity:0; transform: translateY(-8px); } }
    .step-enter { animation: stepEnter 0.4s ease forwards; }
    .step-exit  { animation: stepExit  0.3s ease forwards; }

    /* ── Volume buttons ───────────────────────────────── */
    .volume-selector { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 16px; }
    .vol-btn {
      padding: 10px 18px; border-radius: 8px; border: 2px solid #1a4a6a;
      background: rgba(10, 30, 55, 0.8); color: #7ab0d8; cursor: pointer;
      font-size: 14px; font-weight: 600; transition: all 0.2s;
    }
    .vol-btn:hover { border-color: #00aaff; color: #00aaff; }
    .vol-btn.active { border-color: #00d4ff; color: #00d4ff; background: rgba(0,180,255,0.1); }

    /* ── Beaker visualisation ─────────────────────────── */
    .vol-preview { display: flex; align-items: center; gap: 20px; margin-bottom: 18px; }
    .beaker-wrap { display: flex; flex-direction: column; align-items: center; }
    .beaker {
      position: relative; width: 70px; height: 140px;
      border: 3px solid #88bbcc; border-top: none;
      border-radius: 0 0 8px 8px;
      overflow: hidden; background: rgba(20, 50, 70, 0.3);
    }
    .beaker-scale {
      position: absolute; right: 4px; top: 0; bottom: 0;
      display: flex; flex-direction: column; justify-content: space-between;
      font-size: 8px; color: #88aaaa; pointer-events: none;
      padding: 2px 0;
    }
    .beaker-water {
      position: absolute; left: 0; right: 0;
      background: rgba(100, 170, 220, 0.5);
      transition: height 0.5s ease, bottom 0.5s ease;
      border-bottom: 1px solid rgba(120, 200, 255, 0.4);
    }
    .beaker-vinasse {
      position: absolute; bottom: 0; left: 0; right: 0;
      background: rgba(100, 40, 0, 0.85);
      transition: height 0.5s ease;
      border-top: 1px solid rgba(160, 80, 20, 0.6);
    }
    .vol-legend { font-size: 12px; color: #8090a0; line-height: 1.8; }
    .legend-box { display: inline-block; width: 12px; height: 12px; margin-right: 4px; vertical-align: middle; border-radius: 2px; }
    .water-box   { background: rgba(100, 170, 220, 0.8); }
    .vinasse-box { background: rgba(100, 40, 0, 0.9); }

    /* ── Sim button ───────────────────────────────────── */
    .sim-btn {
      display: inline-block; margin-top: 14px;
      padding: 11px 26px; border-radius: 10px;
      background: linear-gradient(135deg, #0a5080, #0a8080);
      color: #fff; font-size: 15px; font-weight: 700;
      border: none; cursor: pointer; transition: all 0.2s;
    }
    .sim-btn:hover:not(:disabled) { filter: brightness(1.2); }
    .sim-btn:disabled { opacity: 0.4; cursor: default; }
    .sim-btn.hidden { display: none; }

    /* ── Parameter cards ──────────────────────────────── */
    .param-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 12px; margin-bottom: 14px;
    }
    .param-card {
      background: rgba(10, 25, 45, 0.9); border-radius: 10px;
      padding: 12px 14px; border-left: 4px solid #444;
      display: flex; flex-direction: column; gap: 3px;
    }
    .param-card.danger { border-left-color: #e74c3c; }
    .param-card.warn   { border-left-color: #f39c12; }
    .param-card.good   { border-left-color: #2ecc71; }
    .param-card.neutral{ border-left-color: #3498db; }
    .param-icon  { font-size: 20px; }
    .param-label { font-size: 11px; color: #7090a0; text-transform: uppercase; letter-spacing: 0.5px; }
    .param-value { font-size: 18px; font-weight: 800; color: #d0f0ff; }
    .param-sub   { font-size: 11px; color: #8090a0; }

    .titration-note {
      background: rgba(10, 30, 50, 0.8); border-left: 4px solid #1a6a8a;
      padding: 10px 14px; border-radius: 6px; font-size: 13px;
      color: #a0c8d8; margin-bottom: 4px; line-height: 1.6;
    }

    /* ── Aerator panel ────────────────────────────────── */
    .aerator-panel { display: flex; gap: 28px; align-items: flex-start; flex-wrap: wrap; }
    .aerator-visual { flex-shrink: 0; }
    .aerator-tank {
      width: 150px; height: 100px;
      border: 3px solid #4a6a7a; border-top: none;
      border-radius: 0 0 10px 10px;
      background: rgba(5, 20, 35, 0.8);
      position: relative; overflow: hidden;
    }
    .aerator-liquid {
      position: absolute; bottom: 0; left: 0; right: 0; height: 70%;
      background: rgba(80, 30, 5, 0.85);
      transition: background 1s;
    }
    .bubble-container { position: absolute; inset: 0; pointer-events: none; }
    .bubble {
      position: absolute; bottom: 0;
      background: rgba(180, 220, 255, 0.5);
      border-radius: 50%;
      animation: bubbleRise linear infinite;
    }
    @keyframes bubbleRise {
      from { bottom: 0; opacity: 0.7; }
      to   { bottom: 100%; opacity: 0; transform: translateX(8px); }
    }
    .aerator-machine {
      width: 150px; height: 40px;
      background: linear-gradient(180deg, #3a4a5a, #2a3540);
      border-radius: 6px; display: flex; align-items: center;
      padding: 0 12px; gap: 10px; margin-top: 4px;
      border: 2px solid #4a6a7a;
    }
    .motor-body {
      width: 22px; height: 22px; border-radius: 50%;
      background: #607080; border: 3px solid #9ab0c0;
    }
    .motor-shaft {
      flex: 1; height: 6px; background: #607080; border-radius: 3px;
    }
    .aerator-machine.running .motor-body {
      background: #80c040; border-color: #a0ff60;
      box-shadow: 0 0 10px rgba(120, 255, 60, 0.6);
      animation: motorSpin 0.4s linear infinite;
    }
    @keyframes motorSpin {
      from { transform: rotate(0deg); } to { transform: rotate(360deg); }
    }

    .aerator-controls { flex: 1; min-width: 220px; }
    .toggle-label {
      display: flex; align-items: center; gap: 12px;
      font-size: 14px; font-weight: 600; color: #a0c8d8; margin-bottom: 18px;
    }
    .toggle-switch { position: relative; width: 46px; height: 24px; }
    .toggle-switch input { opacity: 0; width: 0; height: 0; }
    .toggle-slider {
      position: absolute; inset: 0; cursor: pointer;
      background: #2a3a4a; border-radius: 24px; transition: 0.3s;
    }
    .toggle-slider:before {
      content: ''; position: absolute;
      width: 18px; height: 18px; border-radius: 50%;
      background: #8090a0; left: 3px; top: 3px; transition: 0.3s;
    }
    .toggle-switch input:checked + .toggle-slider { background: #0a6040; }
    .toggle-switch input:checked + .toggle-slider:before {
      background: #40ff80; transform: translateX(22px);
      box-shadow: 0 0 8px rgba(60, 255, 100, 0.7);
    }
    .status-on  { color: #40ff80; font-weight: 800; }
    .status-off { color: #ff5540; font-weight: 800; }

    .duration-wrap label { font-size: 13px; color: #7090a0; margin-bottom: 8px; display: block; }
    .duration-wrap.locked { opacity: 0.4; pointer-events: none; }
    .duration-buttons { display: flex; gap: 8px; flex-wrap: wrap; }
    .dur-btn {
      padding: 8px 14px; border-radius: 7px;
      border: 2px solid #1a3a5a; background: rgba(10, 25, 45, 0.8);
      color: #7090a0; cursor: pointer; font-size: 13px; transition: all 0.2s;
    }
    .dur-btn:hover { border-color: #0088cc; color: #00aaff; }
    .dur-btn.active { border-color: #00ccff; color: #00ccff; background: rgba(0, 150, 200, 0.12); }

    /* ── Results table ────────────────────────────────── */
    .results-grid {
      display: grid; gap: 1px; border-radius: 8px; overflow: hidden;
      border: 1px solid #1a3a5a; margin-bottom: 14px;
    }
    .results-header-row,
    .results-row {
      display: grid;
      grid-template-columns: 1.4fr 1.2fr 1.2fr 0.9fr 1fr 0.6fr;
      gap: 0; padding: 8px 12px; font-size: 13px; align-items: center;
    }
    .results-header-row {
      background: rgba(10, 40, 70, 0.9); color: #7090a0;
      font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .results-row { background: rgba(8, 20, 38, 0.8); color: #c0d8e8; }
    .results-row:nth-child(even) { background: rgba(10, 25, 45, 0.8); }
    .results-row.pass  { border-left: 3px solid #2ecc71; }
    .results-row.fail  { border-left: 3px solid #e74c3c; }

    .compliance-banner {
      padding: 10px 16px; border-radius: 8px; font-size: 14px;
      margin-bottom: 12px; text-align: center;
    }
    .compliance-banner.compliant {
      background: rgba(30, 100, 40, 0.25); border: 1px solid #2ecc71; color: #80ee90;
    }
    .compliance-banner.not-compliant {
      background: rgba(100, 20, 20, 0.25); border: 1px solid #e74c3c; color: #ff8888;
    }

    .sim-conclusion {
      background: rgba(10, 30, 50, 0.8); border-left: 4px solid #1a6080;
      padding: 10px 14px; border-radius: 6px; font-size: 13px;
      color: #a0c8d8; line-height: 1.7; margin-bottom: 16px;
    }

    /* ── Eval question ────────────────────────────────── */
    .sim-question-wrap { border-top: 1px solid #1a3a5a; padding-top: 18px; }
    .sim-question {
      background: rgba(10, 25, 45, 0.8); border-left: 4px solid #e67e22;
      padding: 10px 14px; border-radius: 6px; font-size: 14px;
      color: #d8e8f0; margin-bottom: 12px; line-height: 1.6;
    }
    .sim-options { display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px; }
    .sim-option-btn {
      padding: 10px 14px; border-radius: 8px;
      border: 2px solid #1a3a5a; background: rgba(10, 25, 45, 0.8);
      color: #c0d8e8; cursor: pointer; text-align: left; font-size: 14px;
      transition: all 0.2s;
    }
    .sim-option-btn:hover:not(:disabled) { border-color: #00aaff; color: #00d4ff; }
    .sim-option-btn.correct { border-color: #2ecc71; background: rgba(30, 100, 40, 0.2); color: #80ee90; }
    .sim-option-btn.wrong   { border-color: #e74c3c; background: rgba(100, 20, 20, 0.2); color: #ff8888; }
    .sim-option-btn:disabled { opacity: 0.65; cursor: default; }

    .sim-feedback {
      padding: 10px 14px; border-radius: 6px; font-size: 13px;
      line-height: 1.6; margin-bottom: 8px;
    }
    .sim-feedback.hidden  { display: none; }
    .sim-feedback.correct { background: rgba(30, 100, 40, 0.2); border-left: 4px solid #2ecc71; color: #a0e8a0; }
    .sim-feedback.wrong   { background: rgba(100, 20, 20, 0.2); border-left: 4px solid #e74c3c; color: #ff9090; }

    /* ── Titration step ───────────────────────────────── */
    .titration-layout {
      display: flex; gap: 24px; align-items: flex-start; flex-wrap: wrap;
      margin-bottom: 16px;
    }
    .tit-apparatus {
      display: flex; flex-direction: column; align-items: center; flex-shrink: 0;
    }
    .tit-label-sm { font-size: 11px; color: #6080a0; text-align: center; margin-bottom: 4px; }
    .tit-burette {
      width: 30px; height: 150px;
      border: 2px solid #5a7a9a; border-radius: 3px 3px 0 0;
      position: relative; overflow: hidden;
      background: rgba(5, 10, 20, 0.5);
    }
    .tit-burette-liquid {
      position: absolute; top: 0; left: 0; right: 0;
      background: linear-gradient(180deg, rgba(80,0,150,.9), rgba(160,0,230,.9));
      transition: height .4s ease;
    }
    .tit-burette-scale {
      position: absolute; right: 2px; top: 0; bottom: 0;
      display: flex; flex-direction: column; justify-content: space-between;
      font-size: 7px; color: rgba(255,255,255,.35); pointer-events: none; padding: 2px 0;
    }
    .tit-tip-col {
      display: flex; flex-direction: column; align-items: center; position: relative;
    }
    .tit-tip-line { width: 7px; height: 26px; background: linear-gradient(180deg,#4a6a8a,#3a5a7a); }
    .tit-drop {
      position: absolute; top: 18px;
      width: 10px; height: 13px;
      background: rgba(160, 0, 240, 0.9);
      border-radius: 50% 50% 60% 60%;
      opacity: 0;
    }
    @keyframes titDropFall {
      0%   { opacity: 1; transform: translateY(0)    scaleY(1);   }
      40%  { opacity: 1; transform: translateY(28px) scaleY(1.1); }
      100% { opacity: 0; transform: translateY(82px) scaleY(0.7); }
    }
    .tit-drop.falling { animation: titDropFall .55s ease-in forwards; }
    .tit-flask {
      width: 120px; height: 88px;
      border: 2px solid #5a7a9a; border-radius: 4px 4px 12px 12px;
      position: relative; overflow: hidden;
      background: rgba(5, 15, 25, 0.4);
    }
    .tit-flask-liquid {
      position: absolute; bottom: 0; left: 0; right: 0; height: 65%;
      transition: background 1s ease;
    }
    .tit-ripple {
      position: absolute; bottom: 62%; left: 50%; transform: translateX(-50%);
      width: 10px; height: 5px;
      border: 1.5px solid rgba(255,255,255,.45); border-radius: 50%;
      opacity: 0; pointer-events: none;
    }
    @keyframes rippleSpread {
      0%   { opacity: .8; transform: translateX(-50%) scale(1); }
      100% { opacity: 0;  transform: translateX(-50%) scale(5); }
    }
    .tit-ripple.ripple-active { animation: rippleSpread .5s ease-out forwards; }
    .tit-vol-display { font-size: 12px; color: #7090a0; margin-top: 7px; text-align: center; }
    .tit-vol-display span { font-size: 15px; font-weight: 700; color: #90b8d0; }
    .tit-panel { flex: 1; min-width: 200px; }
    .tit-reagent-box {
      display: flex; gap: 10px; align-items: flex-start;
      background: rgba(70,0,120,.12); border: 1px solid rgba(120,0,200,.3);
      border-radius: 8px; padding: 10px 12px; margin-bottom: 14px;
      font-size: 13px; color: #b0a0d0; line-height: 1.5;
    }
    .tit-reagent-dot {
      width: 18px; height: 18px; border-radius: 50%;
      background: rgba(140,0,220,.85); border: 1px solid rgba(200,100,255,.5);
      flex-shrink: 0; margin-top: 2px;
    }
    .tit-status {
      background: rgba(10,25,45,.7); border-left: 3px solid rgba(120,0,200,.5);
      padding: 9px 12px; border-radius: 5px;
      font-size: 13px; color: #a090c0; margin-bottom: 14px; line-height: 1.5;
    }
    .tit-ep-notice {
      background: rgba(30,80,40,.25); border: 1px solid #2ecc71; color: #80ee90;
      padding: 9px 12px; border-radius: 7px; font-size: 13px; margin-bottom: 14px;
    }
    .tit-ep-notice.hidden { display: none; }
    .tit-drop-row { display: flex; gap: 10px; flex-wrap: wrap; }
    .tit-btn {
      padding: 10px 18px; border-radius: 9px; border: none; cursor: pointer;
      font-size: 14px; font-weight: 700; transition: all .2s;
    }
    .tit-primary   { background: linear-gradient(135deg,#1a4a8a,#1a6aaa); color: #fff; }
    .tit-primary:hover:not(:disabled)   { filter: brightness(1.2); }
    .tit-secondary { background: rgba(50,20,80,.7); border: 1px solid rgba(120,0,200,.5); color:#c090e0; }
    .tit-secondary:hover:not(:disabled) { border-color: rgba(180,60,255,.7); color:#d8b0ff; }
    .tit-btn:disabled { opacity: .4; cursor: default; }
    .tit-results { margin-top: 20px; }
    .tit-results.hidden { display: none; }
    .tit-results-heading {
      font-size: 14px; font-weight: 700; color: #60b0d0;
      margin-bottom: 12px; padding-top: 16px; border-top: 1px solid #1a3a5a;
    }

    /* ── Valve titration controls ─────────────────────────── */
    .tit-valve-section { display:flex; flex-direction:column; gap:10px; }
    .tit-valve-visual {
      display:flex; align-items:center; gap:14px;
      background:rgba(5,15,30,0.7); border:1px solid #1a3a5a;
      border-radius:10px; padding:10px 14px;
    }
    .tit-valve-wheel {
      width:46px; height:46px; border-radius:50%;
      border:3px solid #2a4a6a; background:rgba(10,25,45,0.9);
      position:relative; flex-shrink:0;
      transition:border-color 0.2s, box-shadow 0.2s;
    }
    .tit-valve-wheel::before {
      content:''; position:absolute;
      width:80%; height:4px; background:#2a4a6a;
      top:50%; left:10%; transform:translateY(-50%);
      border-radius:2px; transition:background 0.2s;
    }
    .tit-valve-wheel::after {
      content:''; position:absolute;
      width:4px; height:80%; background:#2a4a6a;
      left:50%; top:10%; transform:translateX(-50%);
      border-radius:2px; transition:background 0.2s;
    }
    .tit-valve-wheel.slow {
      border-color:#0088ff;
      animation:valveSpin 1.4s linear infinite;
    }
    .tit-valve-wheel.slow::before, .tit-valve-wheel.slow::after { background:#0088ff; }
    .tit-valve-wheel.fast {
      border-color:#ff4400;
      animation:valveSpin 0.28s linear infinite;
      box-shadow:0 0 12px rgba(255,80,0,0.5);
    }
    .tit-valve-wheel.fast::before, .tit-valve-wheel.fast::after { background:#ff6600; }
    @keyframes valveSpin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
    .tit-valve-info { flex:1; min-width:0; }
    .tit-valve-label {
      font-size:13px; font-weight:800; color:#6080a0;
      letter-spacing:1px; transition:color 0.2s; margin-bottom:2px;
    }
    .tit-valve-sublabel { font-size:11px; color:#405060; line-height:1.4; }
    .tit-flow-indicator { font-size:12px; color:#5070a0; display:flex; align-items:center; gap:6px; }
    .tit-hold-row { display:flex; gap:8px; }
    .tit-valve-slow, .tit-valve-fast {
      flex:1; padding:10px 12px; border-radius:9px;
      font-size:13px; font-weight:700; cursor:pointer;
      transition:all 0.15s; user-select:none; -webkit-user-select:none;
    }
    .tit-valve-slow {
      background:linear-gradient(135deg,#0a3060,#0a5080);
      color:#70ccff; border:1px solid #0a60a0;
    }
    .tit-valve-slow:active { background:linear-gradient(135deg,#0a4080,#0a70b0); box-shadow:0 0 10px rgba(0,150,255,0.4); }
    .tit-valve-fast {
      background:linear-gradient(135deg,#3a1010,#6a2010);
      color:#ff9060; border:1px solid #802010;
    }
    .tit-valve-fast:active { background:linear-gradient(135deg,#502020,#9a3020); box-shadow:0 0 10px rgba(255,100,0,0.4); }
    .tit-valve-slow:disabled, .tit-valve-fast:disabled { opacity:0.35; cursor:default; }
    .tit-warning {
      background:rgba(80,50,0,0.3); border:1px solid #c08020;
      color:#ffc040; border-radius:7px; padding:8px 12px;
      font-size:13px; font-weight:600;
    }
    .tit-warning.hidden { display:none; }
    .tit-overflow {
      background:rgba(100,10,10,0.35); border:1px solid #cc2020;
      border-radius:8px; padding:12px 14px;
      display:flex; flex-direction:column; gap:8px;
    }
    .tit-overflow.hidden { display:none; }
    .tit-overflow-msg { font-size:13px; font-weight:700; color:#ff7070; }
    .tit-overflow-sub { font-size:12px; color:#ff9090; line-height:1.5; }
    @keyframes flaskShake {
      0%,100% { transform:translateX(0); }
      15%  { transform:translateX(-5px) rotate(-1.5deg); }
      30%  { transform:translateX(5px)  rotate( 1.5deg); }
      50%  { transform:translateX(-4px) rotate(-1deg); }
      70%  { transform:translateX(4px); }
    }
    .tit-flask.overflow-shake {
      animation:flaskShake 0.5s ease-in-out;
      border-color:#cc2020 !important;
      box-shadow:0 0 18px rgba(200,30,30,0.6);
    }
    .overflow-particle {
      position:absolute; width:5px; height:9px;
      background:rgba(160,0,220,0.75); border-radius:50%;
      pointer-events:none;
      animation:overflowSpill 1.2s ease-out forwards;
    }
    @keyframes overflowSpill {
      0%   { transform:translateY(0)     scaleY(1);   opacity:0.85; }
      50%  { transform:translateY(-20px) scaleY(1.3); opacity:0.5; }
      100% { transform:translateY(-50px) scaleY(0.4); opacity:0; }
    }
  `,e=document.createElement("style");e.id="sim-styles",e.textContent=n,document.head.appendChild(e)}const Ss={context:`
    Limbah vinasse dikenal memiliki warna hitam pekat karena kandungan pigmen melanoidin yang sulit terurai dan senyawa fenolik yang bersifat antimikroba.<br><br>
    Seorang siswa mencoba membuat POC (Pupuk Organik Cair) dari vinasse dengan memasukkan biostarter yang berisi <em>Staphylococcus aureus</em> dan <em>Streptococcus sp.</em>, dengan alasan bahwa kedua bakteri ini dikenal dapat menguraikan jaringan pada infeksi, sehingga dianggap juga mampu menguraikan bahan organik limbah dengan cepat.<br><br>
    Setelah 21 hari, kadar pencemaran (COD) dalam vinasse tidak turun secara signifikan dan warna cairan tetap hitam pekat, menandakan proses penguraian gagal total.
  `,question:"Berdasarkan karakteristik limbah dan fisiologi mikroba, berikan evaluasi kesalahan yang dilakukan siswa tersebut dalam memilih mikroorganisme adalah…",options:[{label:"A",text:"Mikroorganisme yang dipilih adalah bakteri patogen yang membutuhkan inang hidup, sehingga mereka mati karena tidak terdapat jaringan hidup di dalam limbah vinasse.",correct:!1},{label:"B",text:"Siswa tidak menggunakan mikroorganisme spesifik yang memiliki resistensi terhadap senyawa fenolik dan enzim khusus untuk memutus ikatan pigmen melanoidin.",correct:!0},{label:"C",text:"Kedua bakteri tersebut adalah bakteri anaerob obligat yang langsung mati saat terkena oksigen di permukaan limbah cair.",correct:!1}],explanation:"✅ <strong>Benar!</strong> Vinasse mengandung Melanoidin dan Fenol. Senyawa fenolik bersifat bakterisidal bagi mikroba biasa yang tidak memiliki mekanisme pertahanan diri. Pengolahan vinasse membutuhkan mikroba yang mampu bertahan hidup di lingkungan yang mengandung racun fenol dengan kadar COD, BOD, pH yang tinggi."},Ca=[{id:"azolla",name:"Azolla microphylla",image:"/Azolla-microphylla.png",price:50,pigment:"Klorofil a+b (hijau)",description:`Paku air (fern) akuatik yang bersimbiosis dengan sianobakteri
      <em>Anabaena azollae</em>. Melalui fotosintesis menghasilkan O₂ ke limbah.
      Akarnya mengeluarkan <em>eksudat rizosfer</em> yang mengandung enzim pengurai
      bahan organik. Efektif menurunkan BOD dan COD — potensi penurunan COD hingga
      <b>96%</b> melalui fitoremediasi.`,citation:"Thepsilvisut et al., 2024; Rizky et al., 2017",outcome:"reward_high",rewardText:`🏆 <b>Pilihan Terbaik!</b> <em>Azolla</em> adalah agen fitoremediasi yang sangat
      efektif untuk vinasse. Akar dan eksudat rizosfernya mampu menyerap polutan organik,
      nutrisi, dan menurunkan COD hingga <b>96%</b>. Nilai poin bonus diberikan!`},{id:"nannochloropsis",name:"Nannochloropsis",image:"/Nannochlopsis.png",price:30,pigment:"Klorofil a + karotenoid (hijau kekuningan)",description:`Mikroalga laut berukuran sangat kecil (~2–5 µm) dengan dinding sel
      yang sangat kuat. Kaya akan pigmen karotenoid. Hidup pada lingkungan dengan
      <b>salinitas tinggi</b>. Umumnya spesies laut; tidak toleran terhadap air tawar.`,citation:"Puente-Padilla et al., 2025",outcome:"punishment",punishmentText:`⛔ <b>Pilihan Salah!</b> <em>Nannochloropsis</em> adalah spesies laut yang
      membutuhkan salinitas tinggi. Vinasse adalah limbah industri gula/etanol berbasis
      air tawar — lingkungan ini tidak sesuai dan alga akan mati sebelum bekerja.
      Kamu kehilangan 1 nyawa!`},{id:"spirulina",name:"Spirulina platensis",image:"/Spirulina-plantesis.png",price:40,pigment:"Fikosianin (biru), klorofil a (hijau)",description:`Sianobakteri filamen dengan pertumbuhan relatif cepat. Bersifat
      <em>fotoheterotrof</em> — membutuhkan cahaya dan CO₂. Menyukai kondisi
      <b>pH basa</b> (pH 8–11). Mengandung karbohidrat tinggi dan pigmen fikosianin
      yang khas berwarna biru.`,citation:"Asghari et al., 2016; Sinaga et al., 2020; Yuliandri et al., 2013",outcome:"reward_mid",rewardText:`👍 <b>Pilihan Cukup Baik.</b> <em>Spirulina</em> memang efektif menyerap
      nutrien, namun ia menyukai kondisi pH basa sementara vinasse umumnya asam (pH 3–5).
      Perlu pengkondisian pH terlebih dahulu. Skor sedang diberikan.`},{id:"chlorella",name:"Chlorella vulgaris",image:"/Chlorella-vulgaris.png",price:40,pigment:"Klorofil a+b, karotenoid (hijau)",description:`Mikroalga <em>kosmopolitan</em> yang toleran terhadap lingkungan tercemar.
      Memiliki <b>fitohormon dan poliamin</b> untuk adaptasi ekosistem air tercemar.
      Mampu memecah <b>lignin dan senyawa melanoidin</b>. Dapat hidup pada kondisi
      anaerobik. Banyak digunakan dalam penelitian bioremediasi vinasse.`,citation:"Hallmann et al., 2016; Rahmanta et al., 2025",outcome:"reward_mid",rewardText:`👍 <b>Pilihan Baik!</b> <em>Chlorella vulgaris</em> adalah mikroalga
      kosmopolitan yang toleran dan mampu memecah melanoidin. Sangat relevan untuk
      bioremediasi vinasse. Skor sedang diberikan.`}],$v={azolla:{dose:"200 g biomassa segar / L vinasse",duration:"7 hari",codRemoval:"96%",bodRemoval:"94%",notes:"Pertahankan cahaya cukup (> 1000 lux) dan suhu 25–30 °C."},nannochloropsis:{dose:"—",duration:"—",codRemoval:"~0%",bodRemoval:"~0%",notes:"⛔ Tidak cocok untuk vinasse air tawar. Alga akan mati dalam 24 jam."},spirulina:{dose:"1 g biomassa kering / L vinasse (+ buffer pH 8)",duration:"14 hari",codRemoval:"55%",bodRemoval:"60%",notes:"Perlu netralisasi pH vinasse ke 7–8 sebelum inokulasi."},chlorella:{dose:"0.5 g biomassa kering / L vinasse",duration:"10 hari",codRemoval:"70%",bodRemoval:"75%",notes:"Pertahankan kondisi anaerob-fakultatif. Berikan CO₂ setiap 2 hari."}};function Xr(n,e){const t=$v[n];if(!t||t.codRemoval==="~0%")return null;const i=t.dose.match(/^([\d.]+)\s*(g\s*biomassa\s*(?:segar|kering))/i),a=i?parseFloat(i[1]):.5,s=i?i[2].trim():"g";return{total:(a*e).toFixed(1),unit:s,duration:t.duration,codRemoval:t.codRemoval,bodRemoval:t.bodRemoval,notes:t.notes}}const de=n=>document.getElementById(n);function Yv(n){Qv(),Va(),jv(()=>{Kv(e=>{Jv(e,()=>{Zv(n)})})})}function jv(n){const e=Bs("s3-overlay");e.innerHTML=`
    <div class="s3-card" id="s3-challenge-card">
      <div class="s3-header">
        <span class="s3-badge">🧪 LEVEL 3 – MENEMUKAN SOLUSI</span>
        <h2 class="s3-title">Tantangan: Pilih Mikroorganisme yang Tepat</h2>
      </div>

      <div class="s3-step-indicator">
        <span class="s3-step active">1. Tantangan</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">2. Toko</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">3. Lab</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">4. Kran Vinasse</span>
      </div>

      <div class="s3-context" id="s3-ctx"></div>
      <div class="s3-question" id="s3-q"></div>
      <div class="s3-options"  id="s3-opts"></div>
      <div class="s3-feedback hidden" id="s3-fb"></div>
      <button class="s3-btn hidden" id="s3-next-challenge">
        🛒 Lanjut ke Toko Mikroorganisme →
      </button>
    </div>
  `,document.body.appendChild(e),de("s3-ctx").innerHTML=Ss.context,de("s3-q").innerHTML=`<strong>❓ Pertanyaan:</strong><br>${Ss.question}`;const t=de("s3-opts");let i=!1;Ss.options.forEach(a=>{const s=document.createElement("button");s.className="s3-option",s.innerHTML=`<strong>${a.label}.</strong> ${a.text}`,s.onclick=()=>{if(!i)if(a.correct){i=!0,s.classList.add("correct"),t.querySelectorAll(".s3-option").forEach(l=>l.disabled=!0);const r=K.wrongAnswers??0,o=r===0?100:r<=2?50:25;K.totalPoints+=o,K.levelAttempts++,jt(),xc("s3-fb",!0,Ss.explanation+`<br><br>🎉 +${o} poin tambahan!`),de("s3-next-challenge").classList.remove("hidden")}else s.classList.add("wrong"),s.disabled=!0,K.wrongAnswers=(K.wrongAnswers??0)+1,jt(),xc("s3-fb",!1,"❌ Kurang tepat. Coba pilihan lain!")},t.appendChild(s)}),de("s3-next-challenge").onclick=()=>{Va(),n()}}function Kv(n){const e=Bs("s3-overlay");e.innerHTML=`
    <div class="s3-card s3-shop-card">
      <div class="s3-header">
        <span class="s3-badge">🛒 TOKO MIKROORGANISME</span>
        <h2 class="s3-title">Pilih Mikroorganisme untuk Bioremediasi Vinasse</h2>
        <p class="s3-subtitle">Poin kamu saat ini: <span id="s3-shop-pts" class="s3-pts-badge"></span>
        — Pilih mikroorganisme yang sesuai dengan karakteristik vinasse (air tawar, pH asam, melanoidin).</p>
      </div>

      <div class="s3-step-indicator">
        <span class="s3-step done">✔ Tantangan</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step active">2. Toko</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">3. Lab</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">4. Kran Vinasse</span>
      </div>

      <div class="s3-shop-grid" id="s3-shop-grid"></div>

      <div class="s3-shop-result hidden" id="s3-shop-result"></div>
      <button class="s3-btn hidden" id="s3-btn-to-lab">🔬 Lanjut ke Lab Kalkulasi →</button>
      <button class="s3-btn s3-btn-restart hidden" id="s3-btn-restart">
        🔄 Poin tidak cukup — Mulai dari Awal
      </button>
    </div>
  `,document.body.appendChild(e);let t=null;function i(){const a=de("s3-shop-grid");a.innerHTML="",Ca.forEach(s=>{const r=document.createElement("div");r.className="s3-micro-card",t&&s.id===t&&r.classList.add("chosen");const o=K.totalPoints>=s.price;r.innerHTML=`
        <div class="s3-micro-img-wrap"><img src="${s.image}" alt="${s.name}" class="s3-micro-img"></div>
        <div class="s3-micro-name">${s.name}</div>
        <div class="s3-micro-pigment">🔬 Pigmen: ${s.pigment}</div>
        <div class="s3-micro-desc">${s.description}</div>
        <div class="s3-micro-citation">📄 ${s.citation}</div>
        <div class="s3-micro-price ${o?"":"unaffordable"}">
          💰 ${s.price} poin
          ${o?"":'<span class="s3-not-enough">(poin tidak cukup)</span>'}
        </div>
        <button class="s3-buy-btn ${!o||t?"disabled":""}"
                data-id="${s.id}" ${!o||t?"disabled":""}>
          ${t&&s.id===t?"✅ Dipilih":"Beli"}
        </button>
      `,a.appendChild(r)})}i(),de("s3-shop-pts").textContent=K.totalPoints+" poin",de("s3-shop-grid").addEventListener("click",a=>{const s=a.target.closest(".s3-buy-btn");if(!s||s.disabled||t)return;const r=Ca.find(l=>l.id===s.dataset.id);if(!r)return;K.totalPoints-=r.price,jt(),de("s3-shop-pts").textContent=K.totalPoints+" poin";const o=de("s3-shop-result");o.classList.remove("hidden"),r.outcome==="punishment"?(o.className="s3-shop-result punishment",o.innerHTML=r.punishmentText+"<br><br>💡 <b>Coba lagi</b> — pilih mikroorganisme yang lebih tepat!",i(),de("s3-shop-pts").textContent=K.totalPoints+" poin",Ca.filter(c=>c.outcome!=="punishment").some(c=>K.totalPoints>=c.price)||(o.innerHTML+="<br><br>⛔ <b>Poin kamu tidak cukup</b> untuk membeli mikroorganisme yang tepat.",de("s3-btn-restart").classList.remove("hidden"))):(t=r.id,o.className="s3-shop-result "+(r.outcome==="reward_high"?"reward-high":"reward-mid"),o.innerHTML=r.rewardText,i(),setTimeout(()=>de("s3-btn-to-lab").classList.remove("hidden"),800))}),de("s3-btn-to-lab").onclick=()=>{Va(),n(t)},de("s3-btn-restart").onclick=()=>{window.location.reload()}}function Jv(n,e){const t=Ca.find(g=>g.id===n)||Ca[0],i=Bs("s3-overlay");i.innerHTML=`
    <div class="s3-card">
      <div class="s3-header">
        <span class="s3-badge">🔬 LAB KALKULASI</span>
        <h2 class="s3-title">Tuangkan Mikroorganisme ke Vinasse</h2>
        <p class="s3-subtitle">Mikroorganisme dipilih: <b>${t.name}</b></p>
      </div>

      <div class="s3-step-indicator">
        <span class="s3-step done">✔ Tantangan</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step done">✔ Toko</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step active">3. Lab</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step">4. Kran Vinasse</span>
      </div>

      <!-- Volume selector -->
      <div class="s3-lab-section">
        <label class="s3-lab-label">📦 Pilih Volume Vinasse yang Akan Diolah</label>
        <div class="s3-vol-btns">
          ${[10,50,100,500,1e3].map(g=>`
            <button class="s3-vol-btn" data-vol="${g}">${g} L</button>
          `).join("")}
        </div>
      </div>

      <!-- Sprinkler scene (hidden until volume picked) -->
      <div class="s3-sprinkler-scene hidden" id="s3-sprinkler-scene">
        <div class="s3-spk-label" id="s3-spk-dose-label"></div>
        <!-- Interactive spray zone — tahan klik + geser mouse untuk menuangkan -->
        <div class="s3-spray-zone" id="s3-spray-zone">
          <div class="s3-sprinkler-head" id="s3-spk-head">
            <div class="s3-spk-body"></div>
            <div class="s3-spk-nozzles">
              ${Array.from({length:7},()=>'<div class="s3-spk-nozzle"></div>').join("")}
            </div>
          </div>
          <div class="s3-spk-particles" id="s3-spk-particles"></div>
          <div class="s3-spk-tank">
            <div class="s3-spk-vinasse"></div>
            <div class="s3-spk-micro-layer" id="s3-spk-micro-layer"></div>
            <div class="s3-spk-target-line" id="s3-spk-target-line"></div>
            <div class="s3-spk-tank-label">Kolam Vinasse</div>
          </div>
        </div>
        <p class="s3-pour-hint" id="s3-pour-hint">🖱️ Tahan klik + gerakkan mouse di area ini untuk menuangkan</p>
        <div class="s3-pour-counter hidden" id="s3-pour-counter">
          Dituangkan: <b id="s3-poured-amt">0.0</b> <span id="s3-poured-unit"></span>
          &nbsp;/&nbsp; Target: <b id="s3-target-amt"></b> <span id="s3-target-unit"></span>
        </div>
        <div class="s3-pour-progress-wrap hidden" id="s3-pour-progress-wrap">
          <div class="s3-pour-bar-fill" id="s3-pour-bar-fill"></div>
          <div class="s3-pour-target-mark"></div>
        </div>
        <div class="s3-pour-feedback hidden" id="s3-pour-feedback"></div>
        <button class="s3-btn hidden" id="s3-btn-confirm-pour">✅ Konfirmasi Takaran</button>
      </div>

      <!-- Result cards (hidden until pour complete) -->
      <div class="s3-lab-result hidden" id="s3-lab-result">
        <div class="s3-calc-grid" id="s3-calc-grid"></div>
        <div class="s3-lab-notes" id="s3-lab-notes"></div>
      </div>

      <button class="s3-btn hidden" id="s3-btn-to-valve">🚰 Aktifkan Kran Vinasse →</button>
    </div>
  `,document.body.appendChild(i);let a=null,s=0,r=!1,o=!1,l=0;const d={azolla:"#4ecb47",nannochloropsis:"#c8b820",spirulina:"#2ab8d8",chlorella:"#38d878"}[t.id]||"#80e880";i.querySelectorAll(".s3-vol-btn").forEach(g=>{g.onclick=()=>{i.querySelectorAll(".s3-vol-btn").forEach(m=>m.classList.remove("active")),g.classList.add("active"),a=parseInt(g.dataset.vol);const v=Xr(n,a);s=0,r=!1,o=!1,de("s3-lab-result").classList.add("hidden"),de("s3-btn-to-valve").classList.add("hidden"),de("s3-spk-micro-layer").style.transition="none",de("s3-spk-micro-layer").style.height="0%",de("s3-spk-head").classList.remove("spk-active"),de("s3-spk-particles").innerHTML="",de("s3-pour-counter").classList.add("hidden"),de("s3-pour-progress-wrap").classList.add("hidden"),de("s3-pour-feedback").classList.add("hidden"),de("s3-btn-confirm-pour").classList.add("hidden"),de("s3-pour-hint").classList.remove("hidden"),de("s3-poured-amt").textContent="0.0",de("s3-pour-bar-fill").style.width="0%",v?(de("s3-target-amt").textContent=v.total,de("s3-target-unit").textContent=v.unit,de("s3-poured-unit").textContent=v.unit,de("s3-spk-target-line").style.display=""):de("s3-spk-target-line").style.display="none",de("s3-spk-dose-label").innerHTML=v?`Dosis yang dibutuhkan: <b>${v.total} ${v.unit}</b> untuk ${a} L vinasse`:`⛔ ${t.name} tidak cocok untuk vinasse ini`,de("s3-sprinkler-scene").classList.remove("hidden"),de("s3-sprinkler-scene").scrollIntoView({behavior:"smooth",block:"nearest"})}});function h(g){const v=de("s3-calc-grid"),m=de("s3-lab-notes");g?(v.innerHTML=[{icon:"⚗️",label:"Volume Vinasse",value:`${a} L`},{icon:"🧫",label:"Dosis Mikro",value:`${g.total} ${g.unit}`},{icon:"⏱️",label:"Durasi Perlakuan",value:g.duration},{icon:"📉",label:"Penurunan COD",value:g.codRemoval},{icon:"💧",label:"Penurunan BOD",value:g.bodRemoval}].map(u=>`
        <div class="s3-calc-card">
          <span class="s3-calc-icon">${u.icon}</span>
          <span class="s3-calc-label">${u.label}</span>
          <span class="s3-calc-value">${u.value}</span>
        </div>`).join(""),m.innerHTML=`📝 <b>Catatan:</b> ${g.notes}`):(v.innerHTML=`
        <div class="s3-calc-card fail">
          <span class="s3-calc-icon">⛔</span>
          <span class="s3-calc-label">Tidak dapat digunakan</span>
          <span class="s3-calc-value">${t.name} tidak cocok untuk vinasse ini</span>
        </div>`,m.innerHTML="⚠️ Pilihan mikroorganisme tidak valid untuk kondisi vinasse ini."),de("s3-lab-result").classList.remove("hidden"),de("s3-btn-to-valve").classList.remove("hidden"),de("s3-lab-result").scrollIntoView({behavior:"smooth",block:"nearest"})}function f(){setTimeout(()=>{s=0,o=!1,de("s3-spk-micro-layer").style.transition="none",de("s3-spk-micro-layer").style.height="0%",de("s3-poured-amt").textContent="0.0",de("s3-pour-bar-fill").style.width="0%",de("s3-pour-counter").classList.add("hidden"),de("s3-pour-progress-wrap").classList.add("hidden"),de("s3-btn-confirm-pour").classList.add("hidden"),de("s3-pour-hint").classList.remove("hidden"),de("s3-pour-feedback").classList.add("hidden"),de("s3-spk-head").classList.remove("spk-active"),de("s3-spk-particles").innerHTML=""},2500)}const p=de("s3-spray-zone");p.addEventListener("mousedown",g=>{r=!0,g.preventDefault()}),document.addEventListener("mouseup",()=>{r=!1}),p.addEventListener("mouseleave",()=>{de("s3-spk-head").classList.remove("spk-active")}),p.addEventListener("mousemove",g=>{if(!a)return;const v=p.getBoundingClientRect(),m=Math.max(.05,Math.min(.95,(g.clientX-v.left)/v.width));if(de("s3-spk-head").style.left=m*100+"%",!r)return;const u=Xr(n,a),x=u?parseFloat(u.total):0;if(o||(o=!0,de("s3-pour-hint").classList.add("hidden"),x&&(de("s3-pour-counter").classList.remove("hidden"),de("s3-pour-progress-wrap").classList.remove("hidden")),de("s3-btn-confirm-pour").classList.remove("hidden")),de("s3-spk-head").classList.add("spk-active"),x){const _=x/180;s=Math.min(s+_,x*2),de("s3-poured-amt").textContent=s.toFixed(1);const k=Math.min(s/(x*2),1)*30;de("s3-spk-micro-layer").style.transition="none",de("s3-spk-micro-layer").style.height=k+"%",de("s3-spk-micro-layer").style.background=d;const w=Math.min(s/(x*1.5),1)*100;de("s3-pour-bar-fill").style.width=w+"%";const S=s/x;de("s3-pour-bar-fill").style.background=S<.7?"#20a0d0":S<.8?"#60d060":S<=1.2?"#00e870":S<=1.5?"#e8a020":"#e04020"}const b=Date.now();if(b-l>40){l=b;const _=document.createElement("div");_.className="s3-spk-drop";const k=-40+Math.random()*80,w=.45+Math.random()*.35;_.style.cssText=`
        --spread-x: ${k}px; --dur: ${w}s;
        background: ${d};
        left: calc(${m*100}% + ${k*.2}px);
      `,de("s3-spk-particles").appendChild(_),setTimeout(()=>_.remove(),w*1e3+80)}}),p.addEventListener("touchstart",g=>{r=!0,g.preventDefault()},{passive:!1}),p.addEventListener("touchend",()=>{r=!1}),p.addEventListener("touchmove",g=>{g.preventDefault();const v=g.touches[0],m=new MouseEvent("mousemove",{clientX:v.clientX,clientY:v.clientY});p.dispatchEvent(m)},{passive:!1}),de("s3-btn-confirm-pour").onclick=()=>{const g=Xr(n,a),v=de("s3-pour-feedback");if(v.classList.remove("hidden"),de("s3-btn-confirm-pour").classList.add("hidden"),!g){v.className="s3-pour-feedback punishment",v.innerHTML="⚠️ Mikroorganisme ini tidak cocok — hasilnya tidak optimal.",setTimeout(()=>h(null),1200);return}const m=parseFloat(g.total),u=s/m;u<.8?(v.className="s3-pour-feedback wrong",v.innerHTML=`⚠️ <b>Kurang!</b> Kamu menuangkan <b>${s.toFixed(1)} ${g.unit}</b>,
        padahal target <b>${g.total} ${g.unit}</b>. Geser mouse lebih lama!`,f()):u>1.2?(v.className="s3-pour-feedback wrong",v.innerHTML=`⚠️ <b>Terlalu banyak!</b> Kamu menuangkan <b>${s.toFixed(1)} ${g.unit}</b>,
        target hanya <b>${g.total} ${g.unit}</b>. Coba lagi!`,f()):(v.className="s3-pour-feedback correct",v.innerHTML=`✅ <b>Tepat!</b> <b>${s.toFixed(1)} ${g.unit}</b> — sesuai dosis bioremediasi!`,de("s3-spk-head").classList.remove("spk-active"),de("s3-spk-micro-layer").style.transition="height 1.2s ease",de("s3-spk-micro-layer").style.height="30%",setTimeout(()=>h(g),1500))},de("s3-btn-to-valve").onclick=()=>{Va(),e()}}function Zv(n){const e=Bs("s3-overlay");e.innerHTML=`
    <div class="s3-card s3-valve-card">
      <div class="s3-header">
        <span class="s3-badge">🚰 AKTIVASI KRAN VINASSE</span>
        <h2 class="s3-title">Saatnya Memulai Bioremediasi!</h2>
      </div>

      <div class="s3-step-indicator">
        <span class="s3-step done">✔ Tantangan</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step done">✔ Toko</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step done">✔ Lab</span>
        <span class="s3-step-arrow">→</span>
        <span class="s3-step active">4. Kran Vinasse</span>
      </div>

      <div class="s3-valve-scene" id="s3-valve-scene">
        <!-- Animated pipe and valve -->
        <div class="s3-pipe s3-pipe-top"></div>
        <div class="s3-valve-body" id="s3-valve-body">
          <div class="s3-valve-wheel" id="s3-valve-wheel">⊕</div>
          <div class="s3-valve-label">KRAN<br>VINASSE</div>
        </div>
        <div class="s3-pipe s3-pipe-bottom"></div>
        <div class="s3-flow-container" id="s3-flow">
          <!-- Flow animated with CSS when valve open -->
        </div>
        <div class="s3-tank" id="s3-tank">
          <div class="s3-tank-liquid" id="s3-tank-liquid"></div>
          <div class="s3-tank-label">Reaktor<br>Bioremediasi</div>
        </div>
      </div>

      <div class="s3-valve-instruction" id="s3-valve-instr">
        Klik tombol di bawah untuk membuka kran dan mengalirkan vinasse ke reaktor bioremediasi!
      </div>

      <button class="s3-btn s3-valve-btn" id="s3-btn-open-valve">
        🔓 Buka Kran Vinasse
      </button>

      <div class="s3-level-complete hidden" id="s3-level-complete">
        <div class="s3-complete-icon">🎉</div>
        <h3>Level 3 Selesai!</h3>
        <p>Vinasse mengalir ke reaktor bioremediasi. Mikroorganisme pilihanmu akan bekerja
           memecah melanoidin dan polutan organik dalam vinasse.</p>
        <div class="s3-final-score">
          Total Poin: <span id="s3-final-pts"></span>
        </div>
        <button class="s3-btn" id="s3-btn-finish">✅ Lanjut ke Level 4 →</button>
      </div>
    </div>
  `,document.body.appendChild(e);let t=!1;de("s3-btn-open-valve").onclick=()=>{if(t)return;t=!0;const i=de("s3-valve-wheel");i.style.animation="valveSpin 0.8s ease forwards";const a=de("s3-flow");a.innerHTML="";for(let s=0;s<8;s++){const r=document.createElement("div");r.className="s3-drop",r.style.animationDelay=s*.12+"s",r.style.left=30+Math.random()*30+"%",a.appendChild(r)}a.classList.add("flowing"),setTimeout(()=>{de("s3-tank-liquid").style.height="75%"},600),de("s3-btn-open-valve").disabled=!0,de("s3-btn-open-valve").textContent="✅ Kran Terbuka",de("s3-valve-instr").textContent="Vinasse mengalir ke reaktor bioremediasi…",setTimeout(()=>{de("s3-level-complete").classList.remove("hidden"),de("s3-final-pts").textContent=K.totalPoints+" poin"},1800)},de("s3-btn-finish").onclick=()=>{Va(),n&&n()}}function Bs(n){const e=document.createElement("div");return e.id=n,e.className="s3-overlay",e}function Va(){const n=de("s3-overlay");n&&n.remove()}function xc(n,e,t){const i=de(n);i&&(i.className="s3-feedback "+(e?"correct":"wrong"),i.innerHTML=t,i.classList.remove("hidden"))}function Qv(){if(de("s3-styles"))return;const n=`
    /* ── Overlay ─────────────────────────────────────── */
    .s3-overlay {
      position: fixed; inset: 0;
      background: rgba(5, 12, 20, 0.97);
      display: flex; align-items: center; justify-content: center;
      z-index: 500; overflow-y: auto; padding: 20px 12px;
    }
    .s3-card {
      background: rgba(10, 20, 35, 0.99);
      border: 1px solid #1a4060;
      border-radius: 16px;
      max-width: 860px; width: 100%;
      padding: 26px 30px;
      color: #ddeeff;
      box-shadow: 0 0 50px rgba(0,150,255,0.15);
    }
    .s3-shop-card { max-width: 1040px; }

    /* ── Header ──────────────────────────────────────── */
    .s3-header { text-align: center; margin-bottom: 20px; }
    .s3-badge {
      background: rgba(0,200,100,0.12); border: 1px solid #00c864;
      color: #00e870; padding: 4px 14px; border-radius: 20px;
      font-size: 12px; letter-spacing: 1px;
    }
    .s3-title   { margin: 10px 0 4px; font-size: 20px; color: #a0f0c0; }
    .s3-subtitle { color: #7090a0; font-size: 13px; margin: 0; }
    .s3-pts-badge {
      background: rgba(255,200,0,0.15); border: 1px solid #ffc800;
      color: #ffe040; padding: 2px 10px; border-radius: 12px;
      font-weight: 700;
    }

    /* ── Step indicator ──────────────────────────────── */
    .s3-step-indicator {
      display: flex; align-items: center; justify-content: center;
      gap: 6px; margin-bottom: 20px; flex-wrap: wrap;
    }
    .s3-step {
      padding: 4px 12px; border-radius: 12px; font-size: 12px;
      background: rgba(20,40,60,0.8); color: #507090;
      border: 1px solid #1a3a5a;
    }
    .s3-step.active { background: rgba(0,100,60,0.25); color: #40e890; border-color: #00c864; }
    .s3-step.done   { background: rgba(0,100,60,0.1);  color: #40a870; border-color: #007040; }
    .s3-step-arrow  { color: #304050; font-size: 14px; }

    /* ── Context / question ──────────────────────────── */
    .s3-context {
      background: rgba(8,20,38,0.8); border-left: 4px solid #00a060;
      padding: 12px 16px; border-radius: 6px; font-size: 14px;
      line-height: 1.7; color: #b0d8c0; margin-bottom: 14px;
    }
    .s3-question {
      background: rgba(8,20,38,0.8); border-left: 4px solid #e67e22;
      padding: 10px 16px; border-radius: 6px; font-size: 14px;
      line-height: 1.6; color: #d8e0cc; margin-bottom: 12px;
    }

    /* ── Options ─────────────────────────────────────── */
    .s3-options { display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px; }
    .s3-option {
      padding: 10px 14px; border-radius: 8px;
      border: 2px solid #1a3a5a; background: rgba(8,20,38,0.8);
      color: #b0c8d8; cursor: pointer; text-align: left;
      font-size: 13px; transition: all 0.2s; line-height: 1.5;
    }
    .s3-option:hover:not(:disabled) { border-color: #00aaff; color: #00d4ff; }
    .s3-option.correct { border-color: #2ecc71; background: rgba(30,100,40,0.2); color: #80ee90; }
    .s3-option.wrong   { border-color: #e74c3c; background: rgba(100,20,20,0.2); color: #ff8888; }
    .s3-option:disabled { opacity: 0.6; cursor: default; }

    /* ── Feedback ────────────────────────────────────── */
    .s3-feedback {
      padding: 10px 14px; border-radius: 6px; font-size: 13px;
      line-height: 1.7; margin-bottom: 8px;
    }
    .s3-feedback.hidden  { display: none; }
    .s3-feedback.correct { background: rgba(30,100,40,0.2); border-left: 4px solid #2ecc71; color: #a0e8a0; }
    .s3-feedback.wrong   { background: rgba(100,20,20,0.2); border-left: 4px solid #e74c3c; color: #ff9090; }

    /* ── Button ──────────────────────────────────────── */
    .s3-btn {
      display: inline-block; margin-top: 14px;
      padding: 11px 26px; border-radius: 10px;
      background: linear-gradient(135deg, #0a6030, #0a8040);
      color: #fff; font-size: 15px; font-weight: 700;
      border: none; cursor: pointer; transition: all 0.2s;
    }
    .s3-btn:hover:not(:disabled) { filter: brightness(1.2); }
    .s3-btn:disabled { opacity: 0.4; cursor: default; }
    .s3-btn.hidden   { display: none; }
    .s3-btn-restart  { background: linear-gradient(135deg, #7a0a0a, #b01414); margin-left: 10px; }

    /* ── Shop grid ───────────────────────────────────── */
    .s3-shop-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 14px; margin-bottom: 16px;
    }
    .s3-micro-card {
      background: rgba(8, 20, 38, 0.9); border: 2px solid #1a3a5a;
      border-radius: 12px; padding: 14px; display: flex;
      flex-direction: column; gap: 6px; transition: border-color 0.2s;
    }
    .s3-micro-card.chosen { border-color: #00e870; background: rgba(0,60,30,0.25); }
    .s3-micro-img-wrap { text-align: center; margin-bottom: 2px; }
    .s3-micro-img { width: 100%; max-height: 110px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); }
    .s3-micro-name   { font-size: 15px; font-weight: 700; color: #c0e8d8; text-align: center; }
    .s3-micro-pigment { font-size: 11px; color: #6090a0; font-style: italic; }
    .s3-micro-desc   { font-size: 12px; color: #8090a0; line-height: 1.5; flex: 1; }
    .s3-micro-citation { font-size: 10px; color: #506070; }
    .s3-micro-price  { font-size: 13px; font-weight: 700; color: #ffe040; }
    .s3-micro-price.unaffordable { color: #886040; }
    .s3-not-enough   { color: #cc6633; font-size: 11px; margin-left: 4px; }
    .s3-buy-btn {
      margin-top: 4px; padding: 7px 0; border-radius: 7px; width: 100%;
      border: 2px solid #00a060; background: rgba(0,80,40,0.25);
      color: #40e880; cursor: pointer; font-size: 13px; font-weight: 700;
      transition: all 0.2s;
    }
    .s3-buy-btn:hover:not(:disabled) { background: rgba(0,120,60,0.4); }
    .s3-buy-btn.disabled, .s3-buy-btn:disabled { opacity: 0.35; cursor: default; border-color: #2a4a3a; color: #4a7a5a; }

    /* ── Shop result banner ──────────────────────────── */
    .s3-shop-result {
      padding: 12px 16px; border-radius: 8px; margin: 10px 0; font-size: 14px; line-height: 1.7;
    }
    .s3-shop-result.hidden     { display: none; }
    .s3-shop-result.reward-high { background: rgba(0,100,50,0.25); border: 1px solid #00c864; color: #80ff90; }
    .s3-shop-result.reward-mid  { background: rgba(0,80,120,0.2); border: 1px solid #0088cc; color: #80ccff; }
    .s3-shop-result.punishment  { background: rgba(140,10,10,0.25); border: 1px solid #cc2222; color: #ff8080; }

    /* ── Lab section ─────────────────────────────────── */
    .s3-lab-intro {
      background: rgba(8,20,38,0.8); border-left: 4px solid #1a80a0;
      padding: 12px 16px; border-radius: 6px; font-size: 13px;
      color: #a0c0d8; line-height: 1.7; margin-bottom: 16px;
    }
    .s3-lab-intro ul { margin: 6px 0 0 16px; }
    .s3-lab-section  { margin-bottom: 16px; }
    .s3-lab-label    { font-size: 13px; color: #7090a0; display: block; margin-bottom: 8px; }
    .s3-vol-btns     { display: flex; gap: 8px; flex-wrap: wrap; }
    .s3-vol-btn {
      padding: 8px 16px; border-radius: 7px;
      border: 2px solid #1a3a5a; background: rgba(8,20,38,0.8);
      color: #6090a0; cursor: pointer; font-size: 13px; font-weight: 600;
      transition: all 0.2s;
    }
    .s3-vol-btn:hover  { border-color: #00aaff; color: #00ccff; }
    .s3-vol-btn.active { border-color: #00e870; color: #00e870; background: rgba(0,100,50,0.15); }

    /* ── Calc result grid ────────────────────────────── */
    .s3-lab-result { margin-top: 10px; }
    .s3-calc-grid  {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px; margin-bottom: 10px;
    }
    .s3-calc-card {
      background: rgba(8,20,38,0.9); border: 1px solid #1a3a5a;
      border-radius: 9px; padding: 10px 12px;
      display: flex; flex-direction: column; gap: 4px; align-items: center;
    }
    .s3-calc-card.fail { border-color: #cc2222; }
    .s3-calc-icon  { font-size: 20px; }
    .s3-calc-label { font-size: 11px; color: #6090a0; text-align: center; }
    .s3-calc-value { font-size: 15px; font-weight: 700; color: #a0e8d8; text-align: center; }
    .s3-lab-notes  {
      background: rgba(8,20,38,0.8); border-left: 4px solid #1a6080;
      padding: 8px 14px; border-radius: 6px; font-size: 12px;
      color: #80a8c0; line-height: 1.6;
    }

    /* ── Sprinkler / spray zone ──────────────────────── */
    .s3-sprinkler-scene { margin: 12px 0 6px; }
    .s3-sprinkler-scene.hidden { display: none; }
    .s3-spk-label {
      font-size: 13px; color: #80b0c8; text-align: center;
      margin-bottom: 10px;
    }
    /* Interactive spray zone */
    .s3-spray-zone {
      position: relative;
      width: 100%; max-width: 360px; height: 200px;
      margin: 0 auto;
      cursor: crosshair;
      user-select: none; -webkit-user-select: none;
      border: 2px dashed rgba(80,160,180,0.2);
      border-radius: 12px;
      background: rgba(0,5,10,0.3);
      transition: border-color 0.2s;
    }
    .s3-spray-zone:hover { border-color: rgba(80,160,180,0.45); }
    /* Sprinkler head — tracks mouse X via JS */
    .s3-spray-zone .s3-sprinkler-head {
      position: absolute; top: 8px;
      transform: translateX(-50%);
      display: flex; flex-direction: column; align-items: center;
      z-index: 3; pointer-events: none;
      transition: left 0.04s linear;
    }
    .s3-spk-body {
      width: 48px; height: 22px;
      background: linear-gradient(180deg, #5a7a8a, #3a5060);
      border-radius: 6px 6px 0 0; border: 2px solid #6a8a9a;
    }
    .s3-spk-nozzles {
      display: flex; gap: 4px; background: #2a3a4a;
      padding: 4px 6px; border-radius: 0 0 8px 8px;
      border: 2px solid #3a5060; border-top: none;
    }
    .s3-spk-nozzle {
      width: 5px; height: 8px;
      background: #8ab0c0; border-radius: 0 0 3px 3px;
    }
    .s3-sprinkler-head.spk-active .s3-spk-nozzle {
      background: #40d8ff;
      box-shadow: 0 0 6px rgba(60, 220, 255, 0.8);
    }
    /* Particle container — fills the spray zone above the tank */
    .s3-spray-zone .s3-spk-particles {
      position: absolute; top: 55px; left: 0; right: 0; bottom: 80px;
      overflow: hidden; pointer-events: none;
    }
    .s3-spk-drop {
      position: absolute; top: 0;
      width: 5px; height: 10px;
      border-radius: 50% 50% 60% 60%;
      opacity: 0.85;
      animation: spkFall var(--dur, 0.7s) ease-in forwards;
    }
    @keyframes spkFall {
      0%   { transform: translateY(0)  translateX(0)                scaleY(1);   opacity: .9; }
      70%  { opacity: .8; }
      100% { transform: translateY(65px) translateX(var(--spread-x)) scaleY(1.3); opacity: 0; }
    }
    /* Vinasse tank — pinned to bottom of spray zone */
    .s3-spray-zone .s3-spk-tank {
      position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
      width: 240px; height: 75px;
      border: 3px solid #4a6a7a; border-top: none;
      border-radius: 0 0 12px 12px;
      background: rgba(5, 15, 25, 0.6);
      overflow: hidden;
    }
    .s3-spk-vinasse {
      position: absolute; bottom: 0; left: 0; right: 0; height: 55%;
      background: rgba(70, 28, 5, 0.85);
    }
    .s3-spk-micro-layer {
      position: absolute; bottom: 55%; left: 0; right: 0; height: 0%;
    }
    /* Target line — shows where correct dose fills to */
    .s3-spk-target-line {
      position: absolute; left: 0; right: 0; bottom: 70%;
      height: 2px; background: rgba(255, 220, 0, 0.8);
      z-index: 4; pointer-events: none;
    }
    .s3-spk-target-line::after {
      content: 'TARGET';
      position: absolute; right: 4px; top: -10px;
      font-size: 8px; font-weight: 700; color: #ffd040; letter-spacing: 0.5px;
    }
    .s3-spk-tank-label {
      position: absolute; bottom: 4px; left: 0; right: 0;
      text-align: center; font-size: 10px; color: rgba(255,255,255,0.3);
      pointer-events: none;
    }
    /* Pour status row */
    .s3-pour-hint {
      margin: 8px 0 0; font-size: 12px; color: #6090a8; text-align: center;
    }
    .s3-pour-counter {
      margin: 8px 0 0; text-align: center; font-size: 13px; color: #a0c8e0;
    }
    .s3-pour-counter.hidden { display: none; }
    /* Progress bar */
    .s3-pour-progress-wrap {
      position: relative; height: 14px;
      background: rgba(10,20,30,0.6); border-radius: 7px;
      margin: 8px 0; overflow: visible;
    }
    .s3-pour-progress-wrap.hidden { display: none; }
    .s3-pour-bar-fill {
      height: 100%; width: 0%; border-radius: 7px;
      transition: width 0.08s, background 0.25s;
    }
    /* Target marker on progress bar at 66.7% (= 100% / 150% max) */
    .s3-pour-target-mark {
      position: absolute; top: -3px; bottom: -3px; left: 66.7%; width: 3px;
      background: rgba(255,220,0,0.9); border-radius: 2px; pointer-events: none;
    }
    .s3-pour-target-mark::after {
      content: '▲'; position: absolute; bottom: -12px; left: 50%;
      transform: translateX(-50%); font-size: 9px; color: #ffd040;
    }
    /* Pour feedback banners */
    .s3-pour-feedback {
      margin: 8px 0; padding: 10px 14px; border-radius: 8px;
      font-size: 13px; line-height: 1.6;
    }
    .s3-pour-feedback.hidden     { display: none; }
    .s3-pour-feedback.correct    { background: rgba(0,80,40,0.3);   border: 1px solid #00c864; color: #80ff90; }
    .s3-pour-feedback.wrong      { background: rgba(140,30,10,0.25); border: 1px solid #cc4422; color: #ff9060; }
    .s3-pour-feedback.punishment { background: rgba(140,10,10,0.25); border: 1px solid #cc2222; color: #ff8080; }

    /* ── Valve scene ─────────────────────────────────── */
    .s3-valve-card { max-width: 600px; }
    .s3-valve-scene {
      display: flex; flex-direction: column; align-items: center;
      gap: 0; margin: 16px auto; width: 160px; position: relative;
    }
    .s3-pipe {
      width: 28px; height: 40px;
      background: linear-gradient(90deg, #4a6070, #6a8090, #4a6070);
      border-radius: 4px; position: relative; z-index: 1;
    }
    .s3-valve-body {
      background: linear-gradient(180deg, #3a4a5a, #2a3540);
      border: 3px solid #4a6a7a; border-radius: 8px;
      width: 80px; padding: 8px 6px; text-align: center;
      position: relative; z-index: 2;
    }
    .s3-valve-wheel {
      font-size: 28px; color: #e05010; cursor: pointer;
      display: inline-block; transition: color 0.4s;
      transform-origin: center;
    }
    .s3-valve-label { font-size: 9px; color: #8090a0; line-height: 1.2; }
    @keyframes valveSpin {
      0%   { transform: rotate(0deg);   color: #e05010; }
      50%  { transform: rotate(180deg); color: #ff8020; }
      100% { transform: rotate(360deg); color: #40e870; }
    }
    .s3-tank {
      width: 120px; height: 90px; margin-top: 0;
      border: 3px solid #4a7a6a; border-top: none;
      border-radius: 0 0 10px 10px;
      background: rgba(5,20,15,0.8); position: relative; overflow: hidden;
    }
    .s3-tank-liquid {
      position: absolute; bottom: 0; left: 0; right: 0; height: 0;
      background: linear-gradient(180deg, rgba(100,40,5,0.6), rgba(60,20,0,0.9));
      transition: height 1.4s ease;
    }
    .s3-tank-label {
      position: absolute; inset: 0; display: flex; align-items: center;
      justify-content: center; font-size: 10px; color: #6090a0; text-align: center;
      pointer-events: none;
    }
    /* Flow drops */
    .s3-flow-container {
      width: 28px; height: 30px; position: relative; overflow: hidden;
    }
    .s3-drop {
      position: absolute; width: 5px; height: 10px;
      background: rgba(80,30,0,0.8); border-radius: 3px;
      animation: dropFall 0.6s linear infinite;
      opacity: 0;
    }
    @keyframes dropFall {
      from { top: -10px; opacity: 1; }
      to   { top: 100%;  opacity: 0; }
    }
    .s3-flow-container.flowing .s3-drop { opacity: 1; }

    .s3-valve-instruction {
      text-align: center; font-size: 13px; color: #7090a0;
      margin: 8px 0 0; line-height: 1.5;
    }
    .s3-valve-btn {
      background: linear-gradient(135deg, #8a2010, #c04020);
      display: block; margin: 10px auto 0;
    }
    .s3-valve-btn:hover:not(:disabled) { filter: brightness(1.25); }

    /* ── Level complete ──────────────────────────────── */
    .s3-level-complete {
      margin-top: 18px; text-align: center;
      padding: 18px; border-radius: 10px;
      background: rgba(0,80,40,0.2); border: 1px solid #00c864;
    }
    .s3-level-complete.hidden { display: none; }
    .s3-complete-icon { font-size: 40px; margin-bottom: 6px; }
    .s3-level-complete h3 { color: #40ff80; margin: 0 0 8px; font-size: 20px; }
    .s3-level-complete p  { font-size: 13px; color: #80a890; line-height: 1.6; margin: 0 0 12px; }
    .s3-final-score {
      font-size: 18px; font-weight: 700; color: #ffe040; margin-bottom: 10px;
    }
  `,e=document.createElement("style");e.id="s3-styles",e.textContent=n,document.head.appendChild(e)}const ex=[{id:"aerator_1",category:"alat",name:"Aerator (1 unit)",emoji:"💨",desc:"Pompa udara kecil untuk mensuplai O₂ ke dalam cairan. 1 unit = aerasi lemah.",effect:{aerationLevel:1},required:!0},{id:"aerator_2",category:"alat",name:"Aerator (2 unit)",emoji:"💨💨",desc:"Dua pompa udara — aerasi sedang, O₂ terdistribusi lebih merata.",effect:{aerationLevel:2},required:!1},{id:"aerator_3",category:"alat",name:"Aerator (3 unit)",emoji:"💨💨💨",desc:"Tiga pompa udara — aerasi maksimal, O₂ penuh, pH lebih cepat turun.",effect:{aerationLevel:3},required:!1},{id:"aquarium",category:"alat",name:"Aquarium / Bak Kolam",emoji:"🪣",desc:"Wadah penampung cairan vinasse. Diletakkan dalam kondisi tertutup rapat saat percobaan berjalan.",effect:{hasContainer:!0},required:!0},{id:"selang",category:"alat",name:"Pipa / Selang",emoji:"🔩",desc:"Menghubungkan aerator ke dalam cairan. Diperlukan agar gelembung udara sampai ke dasar.",effect:{hasHose:!0},required:!0},{id:"listrik",category:"alat",name:"Aliran Listrik",emoji:"⚡",desc:"Sumber daya untuk aerator dan lampu. Wajib jika menggunakan peralatan listrik.",effect:{hasPower:!0},required:!0},{id:"penyaring",category:"alat",name:"Penyaring",emoji:"🕸️",desc:"Filter mekanik untuk menyaring biomassa Azolla atau partikel kasar setelah perlakuan.",effect:{hasFilter:!0},required:!1},{id:"lampu",category:"alat",name:"Lampu (Grow-light)",emoji:"💡",desc:"Pencahayaan tambahan > 1000 lux untuk mendukung fotosintesis Azolla. Sangat dianjurkan.",effect:{hasLight:!0},required:!1}],tx=[{id:"vinasse",category:"bahan",name:"Limbah Vinasse",emoji:"🪣",desc:"Bahan utama — limbah cair dari distilasi etanol. COD awal ±80.000 mg/L, pH 3–4.",required:!0},{id:"azolla_bio",category:"bahan",name:"Azolla microphylla (biomassa)",emoji:"🌿",desc:"Agen bioremediasi utama. Dosis: 200 g biomassa segar per 1 L vinasse.",required:!0},{id:"air_pengencer",category:"bahan",name:"Air Pengencer",emoji:"💧",desc:"Untuk mengencerkan vinasse ke konsentrasi yang optimal bagi pertumbuhan Azolla.",required:!1},{id:"buffer_ph",category:"bahan",name:"Buffer pH (NaHCO₃)",emoji:"🧪",desc:"Meningkatkan pH vinasse ke 5–7 agar Azolla dapat hidup pada fase awal inokulasi.",required:!1}],nx=[{step:1,icon:"🪣",title:"Siapkan Wadah",desc:"Masukkan air limbah vinasse ke dalam aquarium/bak/kolam yang sudah disiapkan.",requires:["aquarium","vinasse"]},{step:2,icon:"🧫",title:"Ukur Parameter Awal",desc:"Ukur kadar COD, BOD dengan titrasi; pH menggunakan kertas lakmus atau pH meter.",requires:[]},{step:3,icon:"🌿",title:"Tambahkan Mikroorganisme",desc:"Tambahkan Azolla microphylla dengan 3 variasi konsentrasi (10%, 50%, 100% dosis referensi). Jika cair: pengenceran; jika padat: tambahkan bibit terlebih dahulu.",requires:["azolla_bio"]},{step:4,icon:"💨",title:"Nyalakan Aerator",desc:"Nyalakan aerator yang telah terhubung selang. Sesuaikan kecepatan aerasi sesuai jumlah aerator yang dipilih.",requires:["aerator_1","selang","listrik"]},{step:5,icon:"💡",title:"Tambahkan Pencahayaan",desc:"Pasang grow-light karena Azolla membutuhkan cahaya untuk fotosintesis. Target: > 1000 lux.",requires:["lampu"]},{step:6,icon:"🔒",title:"Tutup & Jalankan",desc:"Tutup aquarium dan biarkan aerator terus menyala tanpa terputus selama 7 hari (durasi berdasarkan literatur).",requires:["aquarium"]},{step:7,icon:"🔬",title:"Amati Perubahan",desc:"Catat perubahan warna, bau, dan kondisi Azolla setiap hari. Warna vinasse berubah dari hitam → coklat muda menandakan penurunan melanoidin.",requires:[]},{step:8,icon:"📊",title:"Ukur Parameter Akhir",desc:"Ukur COD, BOD, dan pH akhir. Bandingkan dengan nilai awal untuk menghitung persentase penurunan.",requires:[]},{step:9,icon:"📝",title:"Tulis Laporan",desc:"Susun laporan penelitian: latar belakang, metode, hasil (tabel COD/BOD awal-akhir), pembahasan, dan kesimpulan.",requires:[]}];function ix(n,e){const t=new Set(n),i=t.has("aquarium"),a=t.has("aerator_1")||t.has("aerator_2")||t.has("aerator_3"),s=t.has("aerator_3")?3:t.has("aerator_2")?2:t.has("aerator_1")?1:0,r=t.has("selang"),o=t.has("listrik"),l=t.has("lampu"),c=t.has("penyaring"),d=t.has("azolla_bio"),h=t.has("vinasse"),f=t.has("buffer_ph"),p=[];if(i||p.push("Aquarium/Bak (wadah wajib)"),a||p.push("Aerator (aerasi wajib untuk O₂)"),r||p.push("Pipa/Selang (penghubung aerator)"),o||p.push("Aliran Listrik (sumber daya aerator)"),d||p.push("Azolla microphylla (agen bioremediasi)"),h||p.push("Limbah Vinasse (bahan utama)"),p.length>0)return{success:!1,codReduction:0,bodReduction:0,grade:"Gagal",gradeColor:"#ff4444",missing:p,feedback:`❌ Rancangan tidak lengkap! Item yang kurang: ${p.join(", ")}.`};let g=60,v=58;s>=2&&(g+=12,v+=10),s>=3&&(g+=8,v+=6),l&&(g+=16,v+=14),f&&(g+=8,v+=8),c&&(g+=4),g=Math.min(g,96),v=Math.min(v,94);let m,u;g>=85?(m="Sangat Baik ⭐⭐⭐",u="#40ff80"):g>=70?(m="Baik ⭐⭐",u="#a0c840"):(m="Cukup ⭐",u="#e0a020");const x=e&&e.concentrations||[10,50,100],b=e&&e.duration||7,_=Math.min(1,.6+b/25),k=x.map(w=>{const S=Math.min(1,.4+w/100*.6)*_,I=Math.round(g*S),M=Math.round(v*S);let A;return w<=15?A="Dosis sangat rendah; penurunan terbatas":w<=40?A="Dosis rendah; penurunan sedang":w<=80?A="Dosis moderat; efisiensi cukup baik":w<=110?A="Dosis optimal; performa terbaik":A="Dosis lebih; tidak banyak tambahan manfaat",{conc:w,cod:I,bod:M,note:A}});return{success:!0,aerationLvl:s,hasLight:l,hasFilter:c,hasBuffer:f,codReduction:g,bodReduction:v,grade:m,gradeColor:u,missing:[],feedback:`✅ Reaktor berhasil dirancang! Perkiraan penurunan COD rata-rata: <b>${g}%</b>, BOD: <b>${v}%</b>.`,perConcentration:k}}const nt=n=>document.getElementById(n);function Ed(n){lx(),ra(),ax(e=>{sx(e,t=>{const i=ix(e,t);K.stage4.selectedItems=e,K.stage4.reactorResult=i,K.stage4.concentrationCfg=t,rx(i,()=>{ox(i,n)})})})}function ax(n){const e=[...ex,...tx],t=Gs();t.innerHTML=`
    <div class="s4-card s4-builder-card">
      <div class="s4-header">
        <span class="s4-badge">🛠️ BUILDER REAKTOR</span>
        <h2 class="s4-title">Pilih Alat & Bahan untuk Reaktor Vinassemu</h2>
        <p class="s4-subtitle">Centang semua komponen yang ingin kamu masukkan ke dalam rancangan reaktor.
          Item wajib ditandai <span class="s4-required-tag">WAJIB</span>.</p>
      </div>
      ${Hs(1)}

      <div class="s4-builder-grid" id="s4-builder-grid"></div>

      <div class="s4-selection-summary" id="s4-sel-summary">
        <span id="s4-sel-count">0 item dipilih</span>
        <span id="s4-sel-aerator" class="s4-aer-badge hidden">💨 Aerasi: —</span>
      </div>

      <button class="s4-btn" id="s4-btn-build">⚗️ Lihat Prosedur & Bangun Reaktor →</button>
    </div>
  `,document.body.appendChild(t);const i=new Set(e.filter(r=>r.required).map(r=>r.id));function a(){const r=nt("s4-builder-grid");r.innerHTML="";for(const o of["alat","bahan"]){const l=document.createElement("div");l.className="s4-cat-label",l.textContent=o==="alat"?"🔩 ALAT":"🧪 BAHAN",r.appendChild(l),e.filter(d=>d.category===o).forEach(d=>{const h=i.has(d.id),f=document.createElement("div");f.className=`s4-item-card${h?" selected":""}`,f.dataset.id=d.id;const p=d.id.startsWith("aerator_");f.innerHTML=`
          <div class="s4-item-check">${h?"☑":"☐"}</div>
          <div class="s4-item-emoji">${d.emoji}</div>
          <div class="s4-item-name">${d.name}
            ${d.required?'<span class="s4-required-tag">WAJIB</span>':""}
          </div>
          <div class="s4-item-desc">${d.desc}</div>
        `,f.onclick=()=>{d.required||(p&&["aerator_1","aerator_2","aerator_3"].forEach(g=>i.delete(g)),i.has(d.id)?i.delete(d.id):i.add(d.id),s(),a())},r.appendChild(f)})}}function s(){nt("s4-sel-count").textContent=`${i.size} item dipilih`;const r=i.has("aerator_3")?3:i.has("aerator_2")?2:i.has("aerator_1")?1:0,o=nt("s4-sel-aerator");r>0?(o.textContent=`💨 Aerasi: ${r} unit`,o.classList.remove("hidden")):o.classList.add("hidden")}a(),s(),nt("s4-btn-build").onclick=()=>{ra(),n([...i])}}function sx(n,e){const t=Gs();t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">🧪 PERLAKUAN & ULANGAN</span>
        <h2 class="s4-title">Rancangan Percobaan: Konsentrasi, Ulangan & Dosis</h2>
        <p class="s4-subtitle">Tentukan variasi konsentrasi Azolla, jumlah ulangan, dan lama perlakuan sesuai rancangan penelitianmu.</p>
      </div>
      ${Hs(2)}

      <!-- Concentration tiers -->
      <div class="s4-cfg-section">
        <div class="s4-cfg-label">🌿 Variasi Konsentrasi Azolla (pilih 3 taraf)</div>
        <p class="s4-cfg-hint">Geser setiap slider untuk mengatur konsentrasi relatif terhadap dosis referensi (200 g/L).
          Standar praktikum: 10%, 50%, 100%.</p>
        <div class="s4-conc-sliders" id="s4-conc-sliders"></div>
        <div class="s4-conc-preview" id="s4-conc-preview"></div>
      </div>

      <!-- Repetitions -->
      <div class="s4-cfg-section">
        <div class="s4-cfg-label">🔁 Jumlah Ulangan (Replikasi)</div>
        <p class="s4-cfg-hint">Lebih banyak ulangan = data lebih valid secara statistik. Minimal 3 ulangan disarankan.</p>
        <div class="s4-rep-btns" id="s4-rep-btns">
          ${[1,2,3,4,5].map(p=>`<button class="s4-rep-btn${p===3?" active":""}" data-rep="${p}">${p}×</button>`).join("")}
        </div>
        <div class="s4-rep-feedback" id="s4-rep-feedback"></div>
      </div>

      <!-- Duration -->
      <div class="s4-cfg-section">
        <div class="s4-cfg-label">⏱️ Lama Perlakuan</div>
        <p class="s4-cfg-hint">Durasi inkubasi dengan aerasi aktif. Literatur: 7–15 hari optimal untuk Azolla.</p>
        <div class="s4-dur-btns" id="s4-dur-btns">
          ${[3,5,7,10,14].map(p=>`<button class="s4-dur-btn${p===7?" active":""}" data-day="${p}">${p} hari</button>`).join("")}
        </div>
        <div class="s4-dur-feedback" id="s4-dur-feedback"></div>
      </div>

      <button class="s4-btn" id="s4-btn-cfg-done">📋 Lanjut ke Prosedur →</button>
    </div>
  `,document.body.appendChild(t);const i=[10,50,100],a=[...i],s=nt("s4-conc-sliders");function r(){nt("s4-conc-preview").innerHTML=a.map((p,g)=>{const v=(200*p/100).toFixed(1);return`<div class="s4-conc-pill">
        <span class="s4-conc-pill-label">T${g+1}</span>
        <b>${p}%</b> <span class="s4-conc-pill-sub">(${v} g/L)</span>
      </div>`}).join("")}for(let p=0;p<3;p++){const g=document.createElement("div");g.className="s4-slider-row",g.innerHTML=`
      <span class="s4-slider-tier">T${p+1}</span>
      <input type="range" class="s4-slider" min="5" max="200" step="5"
             value="${i[p]}" id="s4-slider-${p}">
      <span class="s4-slider-val" id="s4-slval-${p}">${i[p]}%</span>
    `,s.appendChild(g),document.getElementById(`s4-slider-${p}`).addEventListener("input",v=>{a[p]=parseInt(v.target.value),nt(`s4-slval-${p}`).textContent=a[p]+"%",r()})}r();let o=3;const l={1:"⚠️ 1 ulangan tidak memenuhi syarat validitas statistik.",2:"⚠️ 2 ulangan cukup minimal.",3:"✅ 3 ulangan — standar minimum penelitian ilmiah.",4:"✅ 4 ulangan — lebih baik, data makin valid.",5:"✅ 5 ulangan — sangat baik untuk replikasi!"};function c(){nt("s4-rep-feedback").innerHTML=l[o]||"",nt("s4-rep-feedback").className="s4-rep-feedback "+(o>=3?"good":"warn")}nt("s4-rep-btns").querySelectorAll(".s4-rep-btn").forEach(p=>{p.onclick=()=>{nt("s4-rep-btns").querySelectorAll(".s4-rep-btn").forEach(g=>g.classList.remove("active")),p.classList.add("active"),o=parseInt(p.dataset.rep),c()}}),c();let d=7;const h={3:"⚠️ 3 hari terlalu singkat untuk degradasi Azolla yang signifikan.",5:"🟡 5 hari: penurunan mulai terlihat tetapi belum optimal.",7:"✅ 7 hari: sesuai rekomendasi literatur (Rizky et al., 2017).",10:"✅ 10 hari: lebih optimal, terutama jika aerasi sedang.",14:"✅ 14 hari: maksimal untuk hasil terbaik pada dosis rendah."};function f(){nt("s4-dur-feedback").innerHTML=h[d]||"",nt("s4-dur-feedback").className="s4-dur-feedback "+(d>=7?"good":d>=5?"warn":"bad")}nt("s4-dur-btns").querySelectorAll(".s4-dur-btn").forEach(p=>{p.onclick=()=>{nt("s4-dur-btns").querySelectorAll(".s4-dur-btn").forEach(g=>g.classList.remove("active")),p.classList.add("active"),d=parseInt(p.dataset.day),f()}}),f(),nt("s4-btn-cfg-done").onclick=()=>{ra(),e({concentrations:[...a],repetitions:o,duration:d})}}function rx(n,e){var s;const t=Gs();t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">📋 PROSEDUR PRAKTIKUM</span>
        <h2 class="s4-title">Langkah-langkah Percobaan Reaktor Vinasse</h2>
        <p class="s4-subtitle">Baca setiap langkah percobaan, lalu klik <b>Selesai Baca</b> untuk melanjutkan.</p>
      </div>
      ${Hs(3)}
      <div class="s4-procedure-list" id="s4-proc-list"></div>
      <div class="s4-cfg-summary" id="s4-cfg-summary"></div>
      <button class="s4-btn" id="s4-btn-proc-done">✅ Selesai Baca — Lihat Hasil Reaktor →</button>
    </div>
  `,document.body.appendChild(t);const i=(s=K.stage4)==null?void 0:s.concentrationCfg;i&&(nt("s4-cfg-summary").innerHTML=`
      <div class="s4-info-box">
        Rancangan kamu: Konsentrasi <b>${i.concentrations.join("%, ")}%</b>
        · Ulangan <b>${i.repetitions}×</b> · Durasi <b>${i.duration} hari</b>
      </div>`);const a=nt("s4-proc-list");nx.forEach(r=>{const o=document.createElement("div");o.className="s4-proc-step",o.innerHTML=`
      <div class="s4-proc-icon">${r.icon}</div>
      <div class="s4-proc-body">
        <div class="s4-proc-title">Langkah ${r.step}: ${r.title}</div>
        <div class="s4-proc-desc">${r.desc}</div>
      </div>
    `,a.appendChild(o)}),nt("s4-btn-proc-done").onclick=()=>{ra(),e()}}function ox(n,e){var s;const t=Gs(),i=((s=K.stage4)==null?void 0:s.concentrationCfg)||{repetitions:3,duration:7};if(t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">⚗️ HASIL RANCANGAN REAKTOR</span>
        <h2 class="s4-title">Simulasi Performa Reaktor Vinassemu</h2>
      </div>
      ${Hs(4)}

      ${n.success?`
        <!-- Reactor diagram -->
        <div class="s4-reactor-wrap" id="s4-reactor-wrap">
          <div class="s4-reactor-diagram">
            <!-- Lamp indicator -->
            <div class="s4-rd-lamp ${n.hasLight?"on":"off"}" id="s4-rd-lamp">
              ${n.hasLight?"💡":"🔦"}
              <span>${n.hasLight?"Lampu ON":"Tanpa Lampu"}</span>
            </div>
            <!-- Aquarium body -->
            <div class="s4-rd-tank" id="s4-rd-tank">
              <div class="s4-rd-liquid" id="s4-rd-liquid"></div>
              <div class="s4-rd-azolla" id="s4-rd-azolla"></div>
              <div class="s4-rd-bubbles" id="s4-rd-bubbles"></div>
              <div class="s4-rd-tank-label">Reaktor Vinasse</div>
            </div>
            <!-- Aerator units -->
            <div class="s4-rd-aerators">
              ${Array.from({length:n.aerationLvl||1},(r,o)=>`
                <div class="s4-rd-aer-unit" style="animation-delay:${o*.4}s">💨</div>
              `).join("")}
              <span class="s4-rd-aer-label">Aerator ×${n.aerationLvl||1}</span>
            </div>
          </div>

          <!-- Animated run button -->
          <button class="s4-btn s4-run-btn" id="s4-run-sim">▶ Jalankan Simulasi Reaktor</button>
          <p class="s4-run-hint">Klik untuk melihat simulasi penurunan COD & BOD selama ${i.duration} hari</p>
        </div>

        <!-- Results (hidden until sim runs) -->
        <div class="s4-sim-results hidden" id="s4-sim-results">
          <div class="s4-grade-badge" style="color:${n.gradeColor}">${n.grade}</div>

          <!-- COD/BOD bar charts animated -->
          <div class="s4-perf-bars" id="s4-perf-bars">
            <div class="s4-bar-section-title">📊 Rata-rata Penurunan Parameter (semua konsentrasi)</div>
            <div class="s4-bar-row">
              <span class="s4-bar-label">📉 Penurunan COD</span>
              <div class="s4-bar-track"><div class="s4-bar-fill" id="s4-bar-cod" style="width:0%;background:${n.gradeColor}"></div></div>
              <span class="s4-bar-val" id="s4-val-cod">0%</span>
            </div>
            <div class="s4-bar-row">
              <span class="s4-bar-label">💧 Penurunan BOD</span>
              <div class="s4-bar-track"><div class="s4-bar-fill" id="s4-bar-bod" style="width:0%;background:${n.gradeColor}"></div></div>
              <span class="s4-bar-val" id="s4-val-bod">0%</span>
            </div>
          </div>

          <!-- Per-concentration table -->
          <div class="s4-conc-table-wrap">
            <div class="s4-cfg-label">🧪 Hasil Per Variasi Konsentrasi</div>
            <table class="s4-conc-table">
              <thead><tr>
                <th>Taraf</th><th>Konsentrasi</th><th>Dosis (g/L)</th>
                <th>COD turun</th><th>BOD turun</th><th>Keterangan</th>
              </tr></thead>
              <tbody id="s4-conc-tbody"></tbody>
            </table>
          </div>

          <!-- Design tags -->
          <div class="s4-design-tags">
            ${n.hasLight?'<span class="s4-tag green">💡 Lampu ✔</span>':'<span class="s4-tag red">💡 Tanpa Lampu</span>'}
            ${n.hasFilter?'<span class="s4-tag green">🕸️ Filter ✔</span>':'<span class="s4-tag gray">🕸️ Tanpa Filter</span>'}
            ${n.hasBuffer?'<span class="s4-tag green">⚗️ Buffer pH ✔</span>':'<span class="s4-tag gray">⚗️ Tanpa Buffer</span>'}
            <span class="s4-tag blue">💨 Aerasi ${n.aerationLvl||1} unit</span>
            <span class="s4-tag blue">🔁 ${i.repetitions}× ulangan</span>
            <span class="s4-tag blue">⏱️ ${i.duration} hari</span>
          </div>

          <div class="s4-level-complete">
            <div class="s4-complete-icon">🎉</div>
            <h3>Level 4 Selesai!</h3>
            <p>Reaktor berhasil dirancang dan disimulasikan. Saatnya melakukan evaluasi pada Level 5.</p>
            <div class="s4-final-score">Total Poin: <span>${K.totalPoints}</span></div>
          </div>
        </div>
      `:`
        <div class="s4-result-box fail">
          <div class="s4-result-icon">❌</div>
          <div class="s4-result-feedback">${n.feedback}</div>
          <ul class="s4-missing-list">${n.missing.map(r=>`<li>⚠️ ${r}</li>`).join("")}</ul>
        </div>
        <div class="s4-retry-hint">Kembali untuk melengkapi rancangan reaktormu.</div>
      `}

      <button class="s4-btn ${n.success?"hidden":""}" id="s4-btn-finish">
        ${n.success?"➡️ Lanjut ke Level 5 – Evaluasi":"🔄 Coba Lagi"}
      </button>
    </div>
  `,document.body.appendChild(t),!n.success){nt("s4-btn-finish").onclick=()=>{ra(),Ed(e)};return}let a=!1;nt("s4-run-sim").onclick=()=>{if(a)return;a=!0,nt("s4-run-sim").disabled=!0,nt("s4-run-sim").textContent="⏳ Simulasi berjalan…";const r=nt("s4-rd-liquid"),o=nt("s4-rd-azolla");nt("s4-rd-bubbles").classList.add("active"),r.classList.add("treating"),o.classList.add("growing"),setTimeout(()=>{nt("s4-run-sim").textContent="✅ Simulasi Selesai",nt("s4-sim-results").classList.remove("hidden");const c=nt("s4-conc-tbody");c.innerHTML="",n.perConcentration.forEach((d,h)=>{const f=document.createElement("tr");f.innerHTML=`
          <td>T${h+1}</td>
          <td>${d.conc}%</td>
          <td>${(200*d.conc/100).toFixed(1)} g/L</td>
          <td style="color:${n.gradeColor}">${d.cod}%</td>
          <td style="color:${n.gradeColor}">${d.bod}%</td>
          <td style="font-size:11px;color:#6090a0">${d.note}</td>
        `,c.appendChild(f)}),setTimeout(()=>{nt("s4-bar-cod").style.width=Math.min(100,n.codReduction)+"%",nt("s4-val-cod").textContent=n.codReduction+"%",nt("s4-bar-bod").style.width=Math.min(100,n.bodReduction)+"%",nt("s4-val-bod").textContent=n.bodReduction+"%"},100),setTimeout(()=>{const d=document.createElement("button");d.className="s4-btn",d.style.marginTop="8px",d.textContent="➡️ Lanjut ke Level 5 – Evaluasi",d.onclick=()=>{ra(),e&&e()},nt("s4-sim-results").appendChild(d),d.scrollIntoView({behavior:"smooth",block:"nearest"})},900)},2200)}}function Hs(n){return`<div class="s4-step-indicator">
    ${[{n:1,label:"Builder"},{n:2,label:"Konsentrasi"},{n:3,label:"Prosedur"},{n:4,label:"Hasil"}].map((t,i)=>`
      ${i>0?'<span class="s4-step-arrow">→</span>':""}
      <span class="s4-step ${t.n<n?"done":t.n===n?"active":""}">
        ${t.n<n?"✔ ":""}${t.n}. ${t.label}
      </span>
    `).join("")}
  </div>`}function Gs(){const n=document.createElement("div");return n.id="s4-overlay",n.className="s4-overlay",n}function ra(){const n=nt("s4-overlay");n&&n.remove()}function lx(){if(nt("s4-styles"))return;const n=document.createElement("style");n.id="s4-styles",n.textContent=`
    .s4-overlay {
      position:fixed;inset:0;background:rgba(5,10,22,0.97);
      display:flex;align-items:center;justify-content:center;
      z-index:500;overflow-y:auto;padding:20px 12px;
    }
    .s4-card {
      background:rgba(8,18,34,0.99);border:1px solid #1a3a60;
      border-radius:16px;max-width:860px;width:100%;
      padding:26px 30px;color:#ddeeff;
      box-shadow:0 0 50px rgba(0,100,255,0.12);
    }
    .s4-builder-card { max-width:1000px; }
    .s4-header { text-align:center;margin-bottom:18px; }
    .s4-badge {
      background:rgba(0,100,200,0.15);border:1px solid #0080d0;
      color:#40ccff;padding:4px 14px;border-radius:20px;
      font-size:12px;letter-spacing:1px;
    }
    .s4-title  { margin:10px 0 4px;font-size:20px;color:#80ccff; }
    .s4-subtitle { color:#607090;font-size:13px;margin:0; }

    .s4-step-indicator {
      display:flex;align-items:center;justify-content:center;
      gap:6px;margin-bottom:20px;flex-wrap:wrap;
    }
    .s4-step {
      padding:4px 12px;border-radius:12px;font-size:12px;
      background:rgba(20,40,70,0.8);color:#405070;border:1px solid #1a3a5a;
    }
    .s4-step.active { background:rgba(0,60,120,0.3);color:#40aaff;border-color:#0080cc; }
    .s4-step.done   { background:rgba(0,60,100,0.15);color:#4080a0;border-color:#004060; }
    .s4-step-arrow  { color:#304050;font-size:14px; }

    .s4-context {
      background:rgba(6,16,34,0.85);border-left:4px solid #0080c0;
      padding:12px 16px;border-radius:6px;font-size:14px;
      line-height:1.7;color:#90c8e0;margin-bottom:14px;
    }
    .s4-question {
      background:rgba(6,16,34,0.85);border-left:4px solid #e07020;
      padding:10px 16px;border-radius:6px;font-size:14px;
      line-height:1.6;color:#d8ddc8;margin-bottom:12px;
    }
    .s4-options { display:flex;flex-direction:column;gap:8px;margin-bottom:10px; }
    .s4-option {
      padding:10px 14px;border-radius:8px;border:2px solid #1a3a5a;
      background:rgba(6,16,34,0.8);color:#90b0c8;cursor:pointer;
      text-align:left;font-size:13px;transition:all 0.2s;line-height:1.5;
    }
    .s4-option:hover:not(:disabled) { border-color:#0090ff;color:#40ccff; }
    .s4-option.correct { border-color:#2ecc71;background:rgba(20,80,30,0.2);color:#80ee90; }
    .s4-option.wrong   { border-color:#e74c3c;background:rgba(80,10,10,0.2);color:#ff8888; }
    .s4-option:disabled { opacity:0.6;cursor:default; }
    .s4-feedback {
      padding:10px 14px;border-radius:6px;font-size:13px;
      line-height:1.7;margin-bottom:8px;
    }
    .s4-feedback.hidden  { display:none; }
    .s4-feedback.correct { background:rgba(20,80,30,0.2);border-left:4px solid #2ecc71;color:#a0e8a0; }
    .s4-feedback.wrong   { background:rgba(80,10,10,0.2);border-left:4px solid #e74c3c;color:#ff9090; }

    .s4-btn {
      display:inline-block;margin-top:14px;padding:11px 26px;border-radius:10px;
      background:linear-gradient(135deg,#0a3a70,#0a5090);
      color:#fff;font-size:15px;font-weight:700;border:none;cursor:pointer;
      transition:all 0.2s;
    }
    .s4-btn:hover:not(:disabled) { filter:brightness(1.2); }
    .s4-btn:disabled { opacity:0.4;cursor:default; }
    .s4-btn.hidden   { display:none; }

    /* Builder grid */
    .s4-builder-grid {
      display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
      gap:10px;margin-bottom:14px;max-height:54vh;overflow-y:auto;
      padding-right:4px;
    }
    .s4-cat-label {
      grid-column:1/-1;font-size:12px;font-weight:700;color:#40aaff;
      letter-spacing:2px;padding:6px 0 2px;border-bottom:1px solid #1a3a5a;
    }
    .s4-item-card {
      background:rgba(6,18,38,0.9);border:2px solid #1a3a5a;
      border-radius:10px;padding:12px;cursor:pointer;
      transition:border-color 0.2s,background 0.2s;
      display:flex;flex-direction:column;gap:4px;
    }
    .s4-item-card:hover { border-color:#0080cc; }
    .s4-item-card.selected { border-color:#40aaff;background:rgba(0,40,80,0.3); }
    .s4-item-check { font-size:18px;color:#40aaff; }
    .s4-item-emoji { font-size:24px;text-align:center; }
    .s4-item-name  { font-size:13px;font-weight:700;color:#90c8e0; }
    .s4-item-desc  { font-size:11px;color:#506070;line-height:1.5; }
    .s4-required-tag {
      background:rgba(0,60,120,0.3);border:1px solid #0060aa;
      color:#60aaff;font-size:10px;padding:1px 6px;border-radius:8px;
      margin-left:4px;vertical-align:middle;
    }
    .s4-selection-summary {
      display:flex;align-items:center;gap:12px;
      font-size:13px;color:#6090b0;margin:4px 0 8px;
    }
    .s4-aer-badge {
      background:rgba(0,60,100,0.2);border:1px solid #0060a0;
      color:#40aaff;padding:3px 10px;border-radius:10px;font-size:12px;
    }
    .s4-aer-badge.hidden { display:none; }

    /* Procedure */
    .s4-procedure-list {
      display:flex;flex-direction:column;gap:10px;
      max-height:55vh;overflow-y:auto;padding-right:4px;
    }
    .s4-proc-step {
      display:flex;gap:12px;align-items:flex-start;
      background:rgba(6,16,34,0.85);border:1px solid #1a3a5a;
      border-radius:8px;padding:10px 14px;
    }
    .s4-proc-icon  { font-size:22px;flex-shrink:0; }
    .s4-proc-title { font-size:13px;font-weight:700;color:#80b8d8;margin-bottom:4px; }
    .s4-proc-desc  { font-size:12px;color:#7090a0;line-height:1.6; }

    /* Result */
    .s4-result-box {
      padding:14px 18px;border-radius:10px;margin:10px 0;
      font-size:14px;line-height:1.7;
    }
    .s4-result-box.success { background:rgba(0,80,40,0.2);border:1px solid #00aa60;color:#80ffa0; }
    .s4-result-box.fail    { background:rgba(100,10,10,0.2);border:1px solid #aa2020;color:#ff9090; }
    .s4-result-icon { font-size:26px;margin-bottom:6px; }
    .s4-missing-list { margin:8px 0 0 16px;font-size:13px;color:#ff9090; }
    .s4-grade-badge {
      text-align:center;font-size:22px;font-weight:800;margin:10px 0;
      text-shadow:0 0 12px currentColor;
    }
    .s4-perf-bars { display:flex;flex-direction:column;gap:10px;margin:12px 0; }
    .s4-bar-row { display:flex;align-items:center;gap:10px; }
    .s4-bar-label { font-size:13px;color:#7090b0;width:160px;flex-shrink:0; }
    .s4-bar-track {
      flex:1;height:14px;background:rgba(10,20,40,0.8);
      border-radius:7px;overflow:hidden;border:1px solid #1a3a5a;
    }
    .s4-bar-fill  { height:100%;border-radius:7px;transition:width 0.8s ease; }
    .s4-bar-val   { font-size:14px;font-weight:700;color:#a0c8e0;width:44px;text-align:right; }
    .s4-design-tags { display:flex;flex-wrap:wrap;gap:8px;margin:10px 0; }
    .s4-tag {
      padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;
    }
    .s4-tag.green { background:rgba(0,80,40,0.25);color:#40ff80;border:1px solid #00aa60; }
    .s4-tag.red   { background:rgba(80,10,10,0.2);color:#ff8080;border:1px solid #aa3030; }
    .s4-tag.gray  { background:rgba(30,40,50,0.3);color:#607080;border:1px solid #2a3a4a; }
    .s4-tag.blue  { background:rgba(0,50,100,0.25);color:#60aaff;border:1px solid #0060a0; }
    .s4-level-complete {
      margin-top:16px;text-align:center;padding:16px;border-radius:10px;
      background:rgba(0,60,120,0.2);border:1px solid #0080c0;
    }
    .s4-complete-icon { font-size:38px;margin-bottom:6px; }
    .s4-level-complete h3 { color:#40aaff;margin:0 0 8px;font-size:20px; }
    .s4-level-complete p  { font-size:13px;color:#7090a0;line-height:1.6;margin:0 0 10px; }
    .s4-final-score { font-size:18px;font-weight:700;color:#ffe040;margin-bottom:8px; }
    .s4-retry-hint {
      text-align:center;color:#7090a0;font-size:13px;margin:10px 0;
    }

    /* Concentration config panel */
    .s4-cfg-section {
      background:rgba(6,16,34,0.7);border:1px solid #1a3a5a;
      border-radius:10px;padding:14px 16px;margin-bottom:14px;
    }
    .s4-cfg-label {
      font-size:13px;font-weight:700;color:#60aaff;margin-bottom:4px;
    }
    .s4-cfg-hint { font-size:12px;color:#506070;margin:0 0 10px;line-height:1.5; }
    .s4-conc-sliders { display:flex;flex-direction:column;gap:8px;margin-bottom:10px; }
    .s4-slider-row { display:flex;align-items:center;gap:10px; }
    .s4-slider-tier { font-size:12px;font-weight:700;color:#40aaff;width:22px;flex-shrink:0; }
    .s4-slider {
      flex:1;accent-color:#0080cc;
      cursor:pointer;
    }
    .s4-slider-val { font-size:13px;font-weight:700;color:#a0c8e0;width:44px;text-align:right;flex-shrink:0; }
    .s4-conc-preview { display:flex;gap:10px;flex-wrap:wrap;margin-top:4px; }
    .s4-conc-pill {
      background:rgba(0,40,80,0.4);border:1px solid #0060a0;
      border-radius:8px;padding:5px 10px;font-size:13px;color:#80c0e0;
    }
    .s4-conc-pill-label { font-size:10px;color:#40aaff;margin-right:4px; }
    .s4-conc-pill-sub   { font-size:11px;color:#506070; }
    /* Rep/Duration group buttons */
    .s4-rep-btns, .s4-dur-btns {
      display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;
    }
    .s4-rep-btn, .s4-dur-btn {
      padding:6px 16px;border-radius:8px;border:2px solid #1a3a5a;
      background:rgba(6,16,34,0.8);color:#6090b0;cursor:pointer;
      font-size:13px;font-weight:600;transition:all 0.15s;
    }
    .s4-rep-btn.active, .s4-dur-btn.active {
      border-color:#0080cc;background:rgba(0,50,100,0.3);color:#40aaff;
    }
    .s4-rep-feedback, .s4-dur-feedback {
      font-size:12px;line-height:1.5;padding:4px 0;
    }
    .s4-rep-feedback.good, .s4-dur-feedback.good { color:#40cc80; }
    .s4-rep-feedback.warn, .s4-dur-feedback.warn { color:#e0a020; }
    .s4-rep-feedback.bad,  .s4-dur-feedback.bad  { color:#ff6060; }
    /* Info box */
    .s4-info-box {
      background:rgba(0,40,80,0.2);border-left:4px solid #0070c0;
      padding:8px 14px;border-radius:6px;font-size:13px;color:#80b8e0;
      margin-bottom:12px;line-height:1.6;
    }
    .s4-bar-section-title {
      font-size:12px;color:#4080a0;grid-column:1/-1;margin-bottom:4px;
    }

    /* Reactor diagram */
    .s4-reactor-wrap { display:flex;flex-direction:column;align-items:center;gap:12px;margin:12px 0; }
    .s4-reactor-diagram {
      display:flex;align-items:flex-end;gap:20px;
      background:rgba(5,12,25,0.6);border:1px solid #1a3a5a;
      border-radius:12px;padding:14px 20px;
    }
    /* Lamp */
    .s4-rd-lamp {
      display:flex;flex-direction:column;align-items:center;gap:4px;
      font-size:22px;color:#8090a0;font-size:12px;
    }
    .s4-rd-lamp.on  { color:#ffe060;text-shadow:0 0 10px #ffe040; }
    .s4-rd-lamp.off { color:#404050;opacity:0.5; }
    /* Tank */
    .s4-rd-tank {
      width:160px;height:100px;border:3px solid #4a6a8a;border-radius:6px;
      background:rgba(5,15,30,0.7);position:relative;overflow:hidden;
    }
    .s4-rd-liquid {
      position:absolute;bottom:0;left:0;right:0;height:70%;
      background:rgba(60,20,5,0.85);
      transition:background 2s ease;
    }
    .s4-rd-liquid.treating { background:rgba(30,60,10,0.6); }
    .s4-rd-azolla {
      position:absolute;bottom:70%;left:0;right:0;height:0%;
      background:rgba(40,140,40,0.6);
      transition:height 2s ease;
    }
    .s4-rd-azolla.growing { height:15%; }
    .s4-rd-bubbles { position:absolute;inset:0;pointer-events:none; }
    .s4-rd-tank-label {
      position:absolute;bottom:4px;left:0;right:0;
      text-align:center;font-size:10px;color:rgba(255,255,255,0.3);
    }
    /* Animated bubbles via pseudo element injected by JS class */
    .s4-rd-bubbles.active::before,
    .s4-rd-bubbles.active::after {
      content:'';position:absolute;
      width:6px;height:6px;border-radius:50%;
      background:rgba(80,200,255,0.35);
      bottom:0;animation:rdBubbleRise 1.4s ease-in infinite;
    }
    .s4-rd-bubbles.active::before { left:35%;animation-delay:0s; }
    .s4-rd-bubbles.active::after  { left:60%;animation-delay:0.7s; }
    @keyframes rdBubbleRise {
      0%   { transform:translateY(0);opacity:.7; }
      100% { transform:translateY(-90px);opacity:0; }
    }
    /* Aerator units */
    .s4-rd-aerators {
      display:flex;flex-direction:column;align-items:center;gap:4px;
    }
    .s4-rd-aer-unit {
      font-size:20px;
      animation:aerPulse 1.2s ease-in-out infinite;
    }
    @keyframes aerPulse {
      0%,100% { opacity:.6;transform:scale(1); }
      50%      { opacity:1;transform:scale(1.15); }
    }
    .s4-rd-aer-label { font-size:11px;color:#4080a0;margin-top:2px; }
    .s4-run-btn { font-size:16px;padding:12px 32px; }
    .s4-run-hint { font-size:12px;color:#405060;margin:0; }
    .s4-sim-results { margin-top:10px; }
    .s4-sim-results.hidden { display:none; }
    /* Concentration table */
    .s4-conc-table-wrap { margin:12px 0; }
    .s4-conc-table {
      width:100%;border-collapse:collapse;font-size:12px;
    }
    .s4-conc-table th {
      background:rgba(0,40,80,0.4);color:#60aaff;
      padding:6px 8px;border:1px solid #1a3a5a;text-align:left;
    }
    .s4-conc-table td {
      padding:5px 8px;border:1px solid #0e2040;color:#90b8d0;
    }
    .s4-conc-table tr:nth-child(even) td { background:rgba(0,20,40,0.2); }
  `,document.head.appendChild(n)}const cx=[{id:"no_light",title:"Kegagalan: Azolla Tidak Dapat Berfotosintesis",emoji:"🌑",condition:n=>!n.hasLight,symptom:"Warna vinasse tetap hitam pekat setelah 7 hari. Azolla menguning dan mati pada hari ke-3.",cause:"Aquarium tidak mendapat pencahayaan yang cukup (< 200 lux). Azolla tidak dapat melakukan fotosintesis sehingga tidak menghasilkan O₂.",theory:"Azolla microphylla adalah fototrofi obligat — ia wajib mendapat cahaya (> 1000 lux) untuk mengaktifkan fotosistem II dan menghasilkan ATP yang diperlukan untuk pertumbuhan dan produksi eksudat enzimatis pengurai melanoidin.",fix:"Pasang grow-light 1000–3000 lux, atau letakkan reaktor di bawah sinar matahari langsung.",scoreImpact:-15},{id:"low_aeration",title:"Kegagalan: Aerasi Kurang — O₂ Tidak Mencukupi",emoji:"💧",condition:n=>n.aerationLvl<2,symptom:"pH turun sangat lambat. Bau asam tetap tajam pada hari ke-5. COD hanya turun ~40%.",cause:"Hanya 1 aerator yang digunakan. Distribusi O₂ tidak merata — zona anoksik terbentuk di sudut reaktor dan menghambat aktivitas Azolla.",theory:"Proses aerob dalam bioremediasi sangat bergantung pada suplai O₂ terlarut (DO). Nilai DO optimal adalah > 4 mg/L. Dengan 1 aerator kecil, zona pusat reaktor mungkin cukup, tetapi sudut-sudut reaktor akan mengalami anoksia yang menghambat degradasi polutan.",fix:"Tambahkan minimal 2 aerator dan atur posisi selang agar gelembung udara mencapai seluruh volume cairan.",scoreImpact:-10},{id:"no_buffer",title:"Peringatan: pH Terlalu Asam di Awal",emoji:"⚗️",condition:n=>!n.hasBuffer,symptom:n=>`Azolla tumbuh lambat ${n&&n.duration<=5?"di hari-hari pertama percobaan":"pada minggu pertama"}. Beberapa tanaman mengalami klorosis (daun kuning) karena stres pH asam.`,cause:"Vinasse murni memiliki pH 3–4. Azolla bekerja optimal pada pH 5–7. Tanpa buffer pH, fase adaptasi berlangsung lama.",theory:"Enzim nitrogenase pada simbiont Anabaena azollae sangat sensitif terhadap pH rendah. Pada pH < 4.5, aktivitas nitrogenase menurun drastis sehingga fiksasi N₂ dan produksi eksudat berhenti. Penambahan NaHCO₃ (buffer) membantu menstabilkan pH ke 5.5–6.5 pada fase awal.",fix:"Tambahkan NaHCO₃ atau air kapur secukupnya hingga pH vinasse mencapai 5.5–6 sebelum inokulasi Azolla.",scoreImpact:-5},{id:"no_filter",title:"Catatan: Effluen Belum Tersaring",emoji:"🕸️",condition:n=>!n.hasFilter,symptom:"Cairan effluen mengandung partikel biomassa Azolla yang terlepas, membuat cairan tampak keruh meski COD sudah turun.",cause:"Tidak ada penyaring mekanik di akhir proses. Biomassa Azolla yang mati terlarut dan meningkatkan TSS (Total Suspended Solid) effluen.",theory:"Standar baku mutu air limbah (PERMEN LH No. 5/2014) mensyaratkan TSS < 200 mg/L untuk buangan ke badan air. Tanpa filtrasi, meski COD/BOD sudah memenuhi syarat, TSS bisa melebihi batas.",fix:"Pasang penyaring mesh 100–200 µm di outlet reaktor sebelum effluen dibuang atau diproses lanjut menjadi POC.",scoreImpact:0}],wi=n=>document.getElementById(n);function dx(n){fx(),Vs(),ux(()=>{hx(()=>{px(n)})})}function ux(n){var a;const e=K.stage4.reactorResult||{},t=cx.filter(s=>s.condition(e)),i=Ro();if(i.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">🔍 LEVEL 5 – EVALUASI PERCOBAAN</span>
        <h2 class="s5-title">Apa yang Terjadi pada Reaktormu?</h2>
        <p class="s5-subtitle">Analisis kegagalan dan keberhasilan percobaan berdasarkan desain yang kamu buat.</p>
      </div>
      ${Co(1)}

      ${t.length===0?`
        <div class="s5-success-banner">
          <div class="s5-success-icon">🏆</div>
          <h3>Reaktor Sempurna!</h3>
          <p>Desain reaktormu sudah sangat baik — tidak ditemukan kegagalan kritis.
            Reaktor berjalan optimal dengan semua komponen terpenuhi.</p>
        </div>
      `:`
        <div class="s5-analysis-intro">
          📋 Ditemukan <b>${t.length}</b> poin evaluasi pada reaktormu. Pelajari setiap temuan:
        </div>
        <div class="s5-scenario-list" id="s5-scen-list"></div>
      `}

      <button class="s5-btn" id="s5-btn-to-mcq">
        ✏️ Lanjut ke Evaluasi Esai →
      </button>
    </div>
  `,document.body.appendChild(i),t.length>0){const s=((a=K.stage4)==null?void 0:a.concentrationCfg)||null,r=wi("s5-scen-list");t.forEach((o,l)=>{const c=typeof o.symptom=="function"?o.symptom(s):o.symptom,d=document.createElement("div");d.className="s5-scenario-card",d.innerHTML=`
        <div class="s5-scen-header" onclick="this.parentElement.classList.toggle('open')">
          <span class="s5-scen-emoji">${o.emoji}</span>
          <span class="s5-scen-title">${o.title}</span>
          <span class="s5-scen-chevron">▼</span>
        </div>
        <div class="s5-scen-body">
          <div class="s5-scen-row"><span class="s5-scen-lbl">🔎 Gejala</span><p>${c}</p></div>
          <div class="s5-scen-row"><span class="s5-scen-lbl">⚙️ Penyebab</span><p>${o.cause}</p></div>
          <div class="s5-scen-row"><span class="s5-scen-lbl">📚 Teori</span><p>${o.theory}</p></div>
          <div class="s5-scen-row fix"><span class="s5-scen-lbl">✅ Solusi</span><p>${o.fix}</p></div>
        </div>
      `,l===0&&d.classList.add("open"),r.appendChild(d)})}wi("s5-btn-to-mcq").onclick=()=>{Vs(),n()}}function hx(n){const e=`Dalam proyek yang telah kalian buat, limbah vinasse dari industri etanol di Bekonang memiliki karakteristik pH yang sangat asam, kadar COD dan BOD yang sangat tinggi, serta mengandung pigmen melanoidin dan senyawa fenol.
Berdasarkan konsep bioremediasi yang telah kalian pelajari, analisislah mengapa penggunaan bakteri pengurai seringkali gagal dalam memulihkan limbah vinasse ini? Selanjutnya, jelaskan mekanisme pemilihan agen biologis dapat secara efektif menurunkan kadar polutan dalam proses valorisasi limbah tersebut menjadi Pupuk Organik Cair (POC) yang aman bagi lingkungan`,t=Ro();t.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">✏️ EVALUASI ESAI</span>
        <h2 class="s5-title">Jawab Pertanyaan Berikut</h2>
      </div>
      ${Co(2)}
      <div class="s5-question s5-essay-question">${e.replace(/\n/g,"<br>")}</div>
      <textarea class="s5-essay-textarea" id="s5-essay-input"
        placeholder="Tuliskan jawaban analisismu di sini..."
        rows="8"></textarea>
      <div class="s5-essay-hint">Jawaban akan ditampilkan di halaman ringkasan akhir.</div>
      <button class="s5-btn" id="s5-btn-essay-submit" disabled>✅ Simpan Jawaban</button>
    </div>
  `,document.body.appendChild(t);const i=wi("s5-essay-input"),a=wi("s5-btn-essay-submit");i.oninput=()=>{a.disabled=i.value.trim().length<10},a.onclick=()=>{K.stage5=K.stage5||{},K.stage5.essayAnswer=i.value.trim(),Vs(),n()}}function px(n){var s,r;const e=K.stage4.reactorResult||{},t=((s=K.stage4)==null?void 0:s.concentrationCfg)||null,i=(e.perConcentration||[]).map((o,l)=>`
    <tr>
      <td>T${l+1}</td>
      <td>${o.conc}%</td>
      <td>${(200*o.conc/100).toFixed(1)} g/L</td>
      <td style="color:${e.gradeColor||"#40cc80"}">${o.cod}%</td>
      <td style="color:${e.gradeColor||"#40cc80"}">${o.bod}%</td>
      <td style="font-size:11px;color:#6090a0">${o.note}</td>
    </tr>
  `).join(""),a=Ro();a.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">📊 RINGKASAN EVALUASI</span>
        <h2 class="s5-title">Kesimpulan Percobaan Reaktor Vinasse</h2>
      </div>
      ${Co(3)}

      <div class="s5-debrief-grid">
        <div class="s5-debrief-card">
          <div class="s5-deb-icon">📉</div>
          <div class="s5-deb-label">Efisiensi COD (rata-rata)</div>
          <div class="s5-deb-value" style="color:${e.gradeColor||"#a0e8d8"}">${e.codReduction||0}%</div>
        </div>
        <div class="s5-debrief-card">
          <div class="s5-deb-icon">💧</div>
          <div class="s5-deb-label">Efisiensi BOD (rata-rata)</div>
          <div class="s5-deb-value" style="color:${e.gradeColor||"#a0e8d8"}">${e.bodReduction||0}%</div>
        </div>
        <div class="s5-debrief-card">
          <div class="s5-deb-icon">⭐</div>
          <div class="s5-deb-label">Nilai Reaktor</div>
          <div class="s5-deb-value" style="color:${e.gradeColor||"#a0e8d8"}">${e.grade||"—"}</div>
        </div>
        <div class="s5-debrief-card">
          <div class="s5-deb-icon">🏅</div>
          <div class="s5-deb-label">Total Poin</div>
          <div class="s5-deb-value" style="color:#ffe040">${K.totalPoints}</div>
        </div>
      </div>

      ${t?`
        <div class="s5-conc-recap">
          <div class="s5-conc-recap-title">🧪 Rancangan Percobaan yang Digunakan</div>
          <div class="s5-info-box">
            Konsentrasi: <b>${t.concentrations.join("%, ")}%</b>
            &nbsp;·&nbsp; Ulangan: <b>${t.repetitions}×</b>
            &nbsp;·&nbsp; Durasi: <b>${t.duration} hari</b>
          </div>
          ${i?`
            <table class="s5-conc-table">
              <thead><tr>
                <th>Taraf</th><th>Konsentrasi</th><th>Dosis (g/L)</th>
                <th>COD turun</th><th>BOD turun</th><th>Keterangan</th>
              </tr></thead>
              <tbody>${i}</tbody>
            </table>
          `:""}
        </div>
      `:""}

      <div class="s5-conclusion">
        <h4>💡 Kesimpulan Ilmiah</h4>
        <p>Bioremediasi dengan <b>Azolla microphylla</b> terbukti efektif menurunkan kadar COD dan BOD pada limbah vinasse.
          Efisiensi maksimal tercapai dengan kombinasi: pencahayaan cukup, aerasi multi-unit, dan pengkondisian pH awal.
          Namun, nilai akhir COD belum memenuhi baku mutu PERMEN LH No. 5/2014 (300 mg/L) — artinya perlakuan
          lanjutan seperti koagulasi atau wetland buatan masih diperlukan untuk aplikasi skala industri.</p>
        <p>Produk akhir proses ini adalah <b>Pupuk Organik Cair (POC)</b> kaya kalium yang dapat
          digunakan kembali di perkebunan tebu — sebuah pendekatan <em>circular economy</em>!</p>
      </div>

      <div class="s5-level-complete">
        <div class="s5-complete-icon">🎉</div>
        <h3>Level 5 Selesai!</h3>
        <p>Selamat! Kamu telah menyelesaikan seluruh tahap percobaan bioremediasi vinasse.</p>
        <div class="s5-final-score">Total Poin: <span>${K.totalPoints}</span></div>
      </div>

      ${(r=K.stage5)!=null&&r.essayAnswer?`
        <div class="s5-essay-recap">
          <div class="s5-essay-recap-title">✏️ Jawaban Esaimu</div>
          <div class="s5-essay-recap-body">${K.stage5.essayAnswer.replace(/\n/g,"<br>")}</div>
        </div>
      `:""}

      <button class="s5-btn" id="s5-btn-finish">🏁 Lihat Hasil Akhir →</button>
    </div>
  `,document.body.appendChild(a),wi("s5-btn-finish").onclick=()=>{Vs(),n&&n()}}function Co(n){return`<div class="s5-step-indicator">
    ${[{n:1,label:"Analisis"},{n:2,label:"Esai"},{n:3,label:"Kesimpulan"}].map((t,i)=>`
      ${i>0?'<span class="s5-step-arrow">→</span>':""}
      <span class="s5-step ${t.n<n?"done":t.n===n?"active":""}">
        ${t.n<n?"✔ ":""}${t.n}. ${t.label}
      </span>
    `).join("")}
  </div>`}function Ro(){const n=document.createElement("div");return n.id="s5-overlay",n.className="s5-overlay",n}function Vs(){const n=wi("s5-overlay");n&&n.remove()}function fx(){if(wi("s5-styles"))return;const n=document.createElement("style");n.id="s5-styles",n.textContent=`
    .s5-overlay {
      position:fixed;inset:0;background:rgba(5,8,18,0.97);
      display:flex;align-items:center;justify-content:center;
      z-index:500;overflow-y:auto;padding:20px 12px;
    }
    .s5-card {
      background:rgba(6,14,28,0.99);border:1px solid #2a3060;
      border-radius:16px;max-width:860px;width:100%;
      padding:26px 30px;color:#dde8ff;
      box-shadow:0 0 50px rgba(60,0,200,0.12);
    }
    .s5-header { text-align:center;margin-bottom:18px; }
    .s5-badge {
      background:rgba(60,0,180,0.15);border:1px solid #6040cc;
      color:#9080ff;padding:4px 14px;border-radius:20px;
      font-size:12px;letter-spacing:1px;
    }
    .s5-title  { margin:10px 0 4px;font-size:20px;color:#b0a0ff; }
    .s5-subtitle { color:#5060a0;font-size:13px;margin:0; }

    .s5-step-indicator {
      display:flex;align-items:center;justify-content:center;
      gap:6px;margin-bottom:20px;flex-wrap:wrap;
    }
    .s5-step {
      padding:4px 12px;border-radius:12px;font-size:12px;
      background:rgba(20,20,60,0.8);color:#404070;border:1px solid #2a2a5a;
    }
    .s5-step.active { background:rgba(40,20,100,0.3);color:#8070ff;border-color:#6050cc; }
    .s5-step.done   { background:rgba(20,10,60,0.15);color:#5050a0;border-color:#3030a0; }
    .s5-step-arrow  { color:#303050;font-size:14px; }

    .s5-success-banner {
      text-align:center;padding:20px;border-radius:10px;
      background:rgba(0,80,40,0.2);border:1px solid #00aa60;margin-bottom:16px;
    }
    .s5-success-banner h3 { color:#40ff80;margin:6px 0; }
    .s5-success-banner p  { font-size:13px;color:#70a880; }
    .s5-success-icon { font-size:36px;margin-bottom:4px; }

    .s5-analysis-intro {
      font-size:13px;color:#8090c0;
      background:rgba(10,10,40,0.6);padding:10px 14px;border-radius:6px;
      border-left:4px solid #5040cc;margin-bottom:14px;
    }

    .s5-scenario-list { display:flex;flex-direction:column;gap:8px;margin-bottom:14px; }
    .s5-scenario-card {
      background:rgba(8,8,28,0.9);border:1px solid #2a2a5a;border-radius:10px;overflow:hidden;
    }
    .s5-scen-header {
      display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;
      background:rgba(20,18,60,0.6);user-select:none;
    }
    .s5-scen-header:hover { background:rgba(30,25,70,0.8); }
    .s5-scen-emoji { font-size:20px; }
    .s5-scen-title { flex:1;font-size:14px;font-weight:700;color:#9090d8; }
    .s5-scen-chevron { color:#5050a0;font-size:12px;transition:transform 0.2s; }
    .s5-scenario-card.open .s5-scen-chevron { transform:rotate(180deg); }
    .s5-scen-body {
      display:none;padding:12px 14px;
      border-top:1px solid #1a1a4a;
    }
    .s5-scenario-card.open .s5-scen-body { display:block; }
    .s5-scen-row { margin-bottom:10px; }
    .s5-scen-row p { font-size:13px;color:#7080a0;line-height:1.6;margin:4px 0 0 0; }
    .s5-scen-lbl {
      font-size:11px;font-weight:700;color:#7070c0;
      background:rgba(20,20,60,0.5);padding:2px 8px;border-radius:8px;
    }
    .s5-scen-row.fix .s5-scen-lbl { color:#40ff80;background:rgba(0,60,20,0.3); }
    .s5-scen-row.fix p { color:#60c890; }

    .s5-question {
      background:rgba(8,8,30,0.85);border-left:4px solid #7060cc;
      padding:12px 16px;border-radius:6px;font-size:14px;
      line-height:1.7;color:#c0c8e8;margin-bottom:12px;
    }
    .s5-options { display:flex;flex-direction:column;gap:8px;margin-bottom:10px; }
    .s5-option {
      padding:10px 14px;border-radius:8px;border:2px solid #2a2a5a;
      background:rgba(8,8,30,0.8);color:#8090c0;cursor:pointer;
      text-align:left;font-size:13px;transition:all 0.2s;line-height:1.5;
    }
    .s5-option:hover:not(:disabled) { border-color:#7060ff;color:#a090ff; }
    .s5-option.correct { border-color:#2ecc71;background:rgba(20,80,30,0.2);color:#80ee90; }
    .s5-option.wrong   { border-color:#e74c3c;background:rgba(80,10,10,0.2);color:#ff8888; }
    .s5-option:disabled { opacity:0.6;cursor:default; }
    .s5-feedback {
      padding:10px 14px;border-radius:6px;font-size:13px;line-height:1.7;margin-bottom:8px;
    }
    .s5-feedback.hidden  { display:none; }
    .s5-feedback.correct { background:rgba(20,80,30,0.2);border-left:4px solid #2ecc71;color:#a0e8a0; }
    .s5-feedback.wrong   { background:rgba(80,10,10,0.2);border-left:4px solid #e74c3c;color:#ff9090; }

    .s5-btn {
      display:inline-block;margin-top:14px;padding:11px 26px;border-radius:10px;
      background:linear-gradient(135deg,#2a1070,#3a20a0);
      color:#fff;font-size:15px;font-weight:700;border:none;cursor:pointer;transition:all 0.2s;
    }
    .s5-btn:hover { filter:brightness(1.2); }
    .s5-btn.hidden { display:none; }

    /* Debrief */
    .s5-debrief-grid {
      display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:12px 0;
    }
    .s5-debrief-card {
      background:rgba(8,8,30,0.9);border:1px solid #2a2a5a;
      border-radius:10px;padding:12px;text-align:center;
    }
    .s5-deb-icon  { font-size:22px;margin-bottom:4px; }
    .s5-deb-label { font-size:11px;color:#5060a0;margin-bottom:6px; }
    .s5-deb-value { font-size:20px;font-weight:800; }

    .s5-conclusion {
      background:rgba(8,8,30,0.85);border-left:4px solid #5040cc;
      padding:12px 16px;border-radius:6px;margin:12px 0;
    }
    .s5-conclusion h4 { color:#9080ff;margin:0 0 8px;font-size:14px; }
    .s5-conclusion p  { font-size:13px;color:#7080a0;line-height:1.7;margin:0 0 8px; }
    .s5-conclusion p:last-child { margin:0; }

    .s5-level-complete {
      margin-top:16px;text-align:center;padding:16px;border-radius:10px;
      background:rgba(40,20,100,0.2);border:1px solid #6040cc;
    }
    .s5-complete-icon { font-size:38px;margin-bottom:6px; }
    .s5-level-complete h3 { color:#a090ff;margin:0 0 8px;font-size:20px; }
    .s5-level-complete p  { font-size:13px;color:#6070a0;line-height:1.6;margin:0 0 10px; }
    .s5-final-score { font-size:18px;font-weight:700;color:#ffe040;margin-bottom:8px; }

    /* Concentration recap in debrief */
    .s5-conc-recap { margin:12px 0; }
    .s5-conc-recap-title {
      font-size:13px;font-weight:700;color:#60aaff;margin-bottom:6px;
    }
    .s5-info-box {
      background:rgba(0,40,80,0.2);border-left:4px solid #0070c0;
      padding:8px 14px;border-radius:6px;font-size:13px;color:#80b8e0;
      margin-bottom:10px;line-height:1.6;
    }
    .s5-conc-table {
      width:100%;border-collapse:collapse;font-size:12px;margin-top:6px;
    }
    .s5-conc-table th {
      background:rgba(0,40,80,0.4);color:#60aaff;
      padding:6px 8px;border:1px solid #1a3a5a;text-align:left;
    }
    .s5-conc-table td {
      padding:5px 8px;border:1px solid #0e2040;color:#90b8d0;
    }
    .s5-conc-table tr:nth-child(even) td { background:rgba(0,20,40,0.2); }

    /* Essay step */
    .s5-essay-question {
      white-space: pre-line;
    }
    .s5-essay-textarea {
      width:100%;box-sizing:border-box;margin-top:12px;
      background:rgba(5,10,25,0.9);border:1px solid #2a3a6a;
      border-radius:8px;color:#c8d8f8;font-size:13px;
      line-height:1.7;padding:12px 14px;resize:vertical;
      font-family:inherit;outline:none;transition:border-color 0.2s;
    }
    .s5-essay-textarea:focus { border-color:#6050cc; }
    .s5-essay-hint {
      font-size:11px;color:#404870;margin-top:6px;margin-bottom:2px;
    }

    /* Essay answer recap in debrief */
    .s5-essay-recap {
      margin:12px 0;background:rgba(5,10,30,0.85);
      border-left:4px solid #5040cc;border-radius:6px;padding:12px 16px;
    }
    .s5-essay-recap-title {
      font-size:13px;font-weight:700;color:#9080ff;margin-bottom:8px;
    }
    .s5-essay-recap-body {
      font-size:13px;color:#8090b8;line-height:1.8;white-space:pre-wrap;
    }
  `,document.head.appendChild(n)}const mx="https://script.google.com/macros/s/AKfycbys_sNNVIFJCQGmvNHUMuiLpZGINttOvNN5LnIJ8z5Gak8h8KQ8BdTo342_K5H05RxbXw/exec";function gx(n){const{playerName:e,totalPoints:t,levelBreakdown:i,completedRooms:a}=K,s={1:null,2:null,3:null,4:null,5:null};i.forEach(l=>{s[l.level]=l.points});const r=s[n]??0,o={playerName:e,totalPoints:t,completedLevel:n,thisLevelPoints:r,level1Points:s[1],level2Points:s[2],level3Points:s[3],level4Points:s[4],level5Points:s[5],completedRooms:a,timestamp:new Date().toISOString()};fetch(mx,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(o)}).catch(l=>{console.warn("[sheets] Upload failed (network error):",l)})}const Ws=document.getElementById("game-canvas"),Gn=new bo({canvas:Ws,antialias:!0});Gn.setPixelRatio(Math.min(window.devicePixelRatio,2));Gn.setSize(window.innerWidth,window.innerHeight);Gn.shadowMap.enabled=!0;Gn.shadowMap.type=uo;Gn.toneMapping=Ac;Gn.toneMappingExposure=1.1;Gn.outputColorSpace=Dt;let si=null;const{scene:Jt}=ig();ag(Jt);const{scene:Si}=hg();pg(Si);const{scene:Un}=Mg();wg(Un);const{scene:Nn}=Ig();Ug(Nn);const{scene:On}=Vg();Wg(On);si=Jt;const lt=new Kt(60,window.innerWidth/window.innerHeight,.1,1e3);lt.position.set(0,18,38);lt.lookAt(0,0,0);const dt=new uv(Jt);let Na=hd(Jt),Ra=null,ka=null,Pa=null,ri=Na;function ko(n,e){var t,i;n&&(n.glowMesh&&(e.remove(n.glowMesh),(t=n.glowMesh.geometry)==null||t.dispose()),n.glowMat&&n.glowMat.dispose(),n.doneSprite&&(e.remove(n.doneSprite),(i=n.doneSprite.material)==null||i.dispose()))}const bc=22,_c=26,yc=24,Mc=22,wc=21,Sc=14,qr=.08;let oa=!1,Sa=null,oo=!1,Da=0,pi=Math.PI,Ec=Math.PI,$r=0,Ei=27,Ti=17;function vx(n,e){Ei=n,Ti=e}function xx(n){if(!oa){$r+=.0012,lt.position.x=Math.sin($r)*38,lt.position.z=Math.cos($r)*38,lt.position.y=18+Math.sin(n*.3)*1.5,lt.lookAt(0,2,0);return}const e=dt.position.x,t=dt.position.z;if(oo&&Sa){Da=Math.min(1,Da+.04);const l=1-Math.pow(1-Da,3),c=Sa.x,d=Sa.z,h=Sa.y??4,f=c+(e-c)*.35,p=d+(t-d)*.35,g=h+6,v=K.currentLevel===2?_c:K.currentLevel===3?yc:K.currentLevel===4?Mc:K.currentLevel===5?wc:bc,m=e+Math.sin(pi)*v,u=t+Math.cos(pi)*v,x=Sc;lt.position.x=m+(f-m)*l,lt.position.y=x+(g-x)*l,lt.position.z=u+(p-u)*l,lt.fov=60-20*l,lt.updateProjectionMatrix(),lt.lookAt(c,h,d);return}Math.abs(lt.fov-60)>.5&&(lt.fov+=(60-lt.fov)*.1,lt.updateProjectionMatrix()),Ec=(dt.group?dt.group.rotation.y:pi)+Math.PI;let a=Ec-pi;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;pi+=a*.04;const s=K.currentLevel===2?_c:K.currentLevel===3?yc:K.currentLevel===4?Mc:K.currentLevel===5?wc:bc;let r=e+Math.sin(pi)*s,o=t+Math.cos(pi)*s;r=Math.max(-Ei,Math.min(Ei,r)),o=Math.max(-Ti,Math.min(Ti,o)),lt.position.x+=(r-lt.position.x)*qr,lt.position.z+=(o-lt.position.z)*qr,lt.position.y+=(Sc-lt.position.y)*qr,lt.lookAt(e,3,t)}function bx(){const n=new L(dt.position.x-lt.position.x,0,dt.position.z-lt.position.z).normalize(),e=new L().crossVectors(n,new L(0,1,0)).normalize();return{fwd:n,right:e}}const _x=6.5;let Ot=null,on=!1;function yx(){if(on)return;let n=null,e=1/0;for(const t of ri){if(t.done)continue;const i=dt.position.x-t.pos.x,a=dt.position.z-t.pos.z,s=Math.sqrt(i*i+a*a);s<_x&&s<e&&(e=s,n=t)}if(n!==Ot){Ot=n;const t=K.currentLevel===2?`Tekan <kbd>E</kbd> &nbsp;— 🏭 Stasiun ${n?n.idx+1:""}`:K.currentLevel===3?"Tekan <kbd>E</kbd> &nbsp;— 🚰 Buka Kran Vinasse":K.currentLevel===4?"Tekan <kbd>E</kbd> &nbsp;— 💻 IPAL Builder Terminal":K.currentLevel===5?"Tekan <kbd>E</kbd> &nbsp;— 🔬 Analisis Mikroskop":`Tekan <kbd>E</kbd> &nbsp;— ❓ Fenomena ${n?n.idx+1:""}`;Lo(n?t:null)}}window.addEventListener("keydown",n=>{n.code==="KeyE"&&Ot&&!on&&oa&&Td(Ot)});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("btn-interact-mobile");n&&n.addEventListener("touchstart",e=>{e.preventDefault(),Ot&&!on&&oa&&Td(Ot)},{passive:!1})});function Td(n){on=!0,Lo(null),Sa=n.pos?{x:n.pos.x,y:3,z:n.pos.z}:{x:0,y:3,z:0},oo=!0,Da=0;function e(){oo=!1,Da=0}if(K.currentLevel===3&&n.isValve){Yv(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),on=!1,Ot=null,K.stage3.valveOpened=!0,setTimeout(()=>wa(()=>Ea(3)),600)});return}if(K.currentLevel===4&&n.isTerminal){Ed(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),on=!1,Ot=null,K.stage4.terminalDone=!0,setTimeout(()=>wa(()=>Ea(4)),600)});return}if(K.currentLevel===5&&n.isScope){dx(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),on=!1,Ot=null,K.stage5.scopeDone=!0,setTimeout(()=>wa(()=>Ea(5)),600)});return}Lv(n.idx,()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.emissive.set(3066993),n.glowMat.emissiveIntensity=.2,e(),on=!1,Ot=null,ri.every(i=>i.done)&&K.currentLevel===1&&setTimeout(()=>wa(()=>Ea(1)),600)},()=>{e(),on=!1,Ot=null})}function Ea(n){if(K.completedRooms.includes(n)||K.completedRooms.push(n),gx(n),bv({playerName:K.playerName,currentLevel:n,totalPoints:K.totalPoints,levelBreakdown:K.levelBreakdown,completedRooms:K.completedRooms}),K.completedRooms.length>=5){kv();return}lo()}function lo(){on=!0,Ot=null,Lo(null),Rv(n=>{on=!1,Mx(n)})}function Mx(n){K.currentLevel=n,K.pointsAtLevelStart=K.totalPoints,n===1?wx():n===2?Sx():n===3?Ex():n===4?Tx():n===5&&Ax()}function wx(){[Jt,Si,Un,Nn,On].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Jt),dt.position.set(0,0,12),si=Jt,Na=hd(Jt),ri=Na,vx(27,17),Ot=null,jt()}function Sx(){si=Si,nv(),Ei=30,Ti=20,[Jt,Un,Nn,On].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Si),dt.position.set(0,0,18),ri=[],Ot=null,jt(),setTimeout(()=>Ov(()=>{setTimeout(()=>wa(()=>Ea(2)),600)}),400)}function Ex(){si=Un,iv(),Ei=26,Ti=21,[Jt,Si,Nn,On].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Un),dt.position.set(0,0,16),ko(Ra,Un),Ra=Pg(Un),ri=[Ra],Ot=null,jt()}function Tx(){si=Nn,rv(),Ei=24,Ti=18,[Jt,Si,Un,On].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Nn),dt.position.set(0,0,14),ko(ka,Nn),ka=Hg(Nn),ri=[ka],Ot=null,jt()}function Ax(){si=On,ov(),Ei=22,Ti=16,[Jt,Si,Un,Nn].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(On),dt.position.set(0,0,12),ko(Pa,On),Pa=Kg(On),ri=[Pa],Ot=null,jt()}window.addEventListener("resize",()=>{Gn.setSize(window.innerWidth,window.innerHeight),lt.aspect=window.innerWidth/window.innerHeight,lt.updateProjectionMatrix()});Ws.addEventListener("touchstart",n=>n.preventDefault(),{passive:!1});Ws.addEventListener("touchmove",n=>n.preventDefault(),{passive:!1});Ws.addEventListener("touchend",n=>n.preventDefault(),{passive:!1});Nv();function Ad(){oa=!0,document.getElementById("hud").style.display="block",Tv(),jt(),Av(()=>{const n=Ao();n&&(K.completedRooms=n.completedRooms||[],K.totalPoints=n.totalPoints,K.levelBreakdown=n.levelBreakdown||[],jt()),lo()},()=>{location.reload()}),dt.addToScene(Jt),dt.position.set(0,0,12),si=Jt,ri=Na,lo()}function Lx(n){K.playerName=n.playerName,K.totalPoints=n.totalPoints,K.levelBreakdown=n.levelBreakdown||[],K.completedRooms=n.completedRooms||[],K.pointsAtLevelStart=n.totalPoints,dt.setName(K.playerName),Ad()}_v(n=>{dt.setName(n),gc(),yv(()=>{wv(()=>{Sv(()=>{Ev(()=>{Ad()})})})})},n=>{gc(),Lx(n)});const Cx=new ud;function Ld(){requestAnimationFrame(Ld);const n=Cx.getElapsedTime();xx(n),dt.update(n,on||!oa,bx()),oa&&yx(),K.currentLevel===1?ug(Na,n):K.currentLevel===3&&Ra?Dg(Ra,n):K.currentLevel===4&&ka?Gg(ka,n):K.currentLevel===5&&Pa&&Jg(Pa,n),Gn.render(si,lt)}Ld();
