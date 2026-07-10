(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="160",Hd=0,$o=1,Gd=2,Ic=1,wo=2,Bn=3,ui=0,Qt=1,zt=2,ri=0,la=1,Yo=2,jo=3,Ko=4,Vd=5,Ei=100,Wd=101,Xd=102,Jo=103,Zo=104,qd=200,$d=201,Yd=202,jd=203,so=204,ro=205,Kd=206,Jd=207,Zd=208,Qd=209,eu=210,tu=211,nu=212,iu=213,au=214,su=0,ru=1,ou=2,Is=3,lu=4,cu=5,du=6,uu=7,Mo=0,pu=1,hu=2,oi=0,fu=1,mu=2,gu=3,Uc=4,xu=5,bu=6,Nc=300,da=301,ua=302,oo=303,lo=304,Hs=306,co=1e3,Sn=1001,uo=1002,sn=1003,Qo=1004,ar=1005,mn=1006,vu=1007,Wa=1008,li=1009,_u=1010,yu=1011,So=1012,Oc=1013,ai=1014,si=1015,Xa=1016,zc=1017,Fc=1018,Ai=1020,wu=1021,En=1023,Mu=1024,Su=1025,ki=1026,pa=1027,Eu=1028,Bc=1029,Tu=1030,Hc=1031,Gc=1033,sr=33776,rr=33777,or=33778,lr=33779,el=35840,tl=35841,nl=35842,il=35843,Vc=36196,al=37492,sl=37496,rl=37808,ol=37809,ll=37810,cl=37811,dl=37812,ul=37813,pl=37814,hl=37815,fl=37816,ml=37817,gl=37818,xl=37819,bl=37820,vl=37821,cr=36492,_l=36494,yl=36495,Au=36283,wl=36284,Ml=36285,Sl=36286,Wc=3e3,Li=3001,ku=3200,Lu=3201,Eo=0,Cu=1,bn="",Xt="srgb",$n="srgb-linear",To="display-p3",Gs="display-p3-linear",Us="linear",wt="srgb",Ns="rec709",Os="p3",Oi=7680,El=519,Ru=512,Pu=513,Du=514,Xc=515,Iu=516,Uu=517,Nu=518,Ou=519,po=35044,Tl="300 es",ho=1035,Vn=2e3,zs=2001;class xa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dr=Math.PI/180,fo=180/Math.PI;function ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function zu(n,e){return(n%e+e)%e}function ur(n,e,t){return(1-t)*n+t*e}function Al(n){return(n&n-1)===0&&n!==0}function mo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,a,s,r,o,l,d){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,d)}set(e,t,i,a,s,r,o,l,d){const c=this.elements;return c[0]=e,c[1]=a,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=r,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],d=i[1],c=i[4],p=i[7],f=i[2],h=i[5],g=i[8],x=a[0],m=a[3],u=a[6],v=a[1],b=a[4],_=a[7],k=a[2],w=a[5],E=a[8];return s[0]=r*x+o*v+l*k,s[3]=r*m+o*b+l*w,s[6]=r*u+o*_+l*E,s[1]=d*x+c*v+p*k,s[4]=d*m+c*b+p*w,s[7]=d*u+c*_+p*E,s[2]=f*x+h*v+g*k,s[5]=f*m+h*b+g*w,s[8]=f*u+h*_+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],d=e[7],c=e[8];return t*r*c-t*o*d-i*s*c+i*o*l+a*s*d-a*r*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],d=e[7],c=e[8],p=c*r-o*d,f=o*l-c*s,h=d*s-r*l,g=t*p+i*f+a*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=p*x,e[1]=(a*d-c*i)*x,e[2]=(o*i-a*r)*x,e[3]=f*x,e[4]=(c*t-a*l)*x,e[5]=(a*s-o*t)*x,e[6]=h*x,e[7]=(i*l-d*t)*x,e[8]=(r*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,r,o){const l=Math.cos(s),d=Math.sin(s);return this.set(i*l,i*d,-i*(l*r+d*o)+r+e,-a*d,a*l,-a*(-d*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(pr.makeScale(e,t)),this}rotate(e){return this.premultiply(pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pr=new at;function qc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fu(){const n=Fs("canvas");return n.style.display="block",n}const kl={};function Na(n){n in kl||(kl[n]=!0,console.warn(n))}const Ll=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cl=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Za={[$n]:{transfer:Us,primaries:Ns,toReference:n=>n,fromReference:n=>n},[Xt]:{transfer:wt,primaries:Ns,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Gs]:{transfer:Us,primaries:Os,toReference:n=>n.applyMatrix3(Cl),fromReference:n=>n.applyMatrix3(Ll)},[To]:{transfer:wt,primaries:Os,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Cl),fromReference:n=>n.applyMatrix3(Ll).convertLinearToSRGB()}},Bu=new Set([$n,Gs]),xt={enabled:!0,_workingColorSpace:$n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Bu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Za[e].toReference,a=Za[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Za[n].primaries},getTransfer:function(n){return n===bn?Us:Za[n].transfer}};function ca(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zi;class $c{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=Fs("canvas")),zi.width=e.width,zi.height=e.height;const i=zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ca(s[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ca(t[i]/255)*255):t[i]=ca(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hu=0;class Yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(fr(a[r].image)):s.push(fr(a[r]))}else s=fr(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function fr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$c.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gu=0;class cn extends xa{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Sn,a=Sn,s=mn,r=Wa,o=En,l=li,d=cn.DEFAULT_ANISOTROPY,c=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=ci(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Li?Xt:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xt?Li:Wc}set encoding(e){Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Li?Xt:bn}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Nc;cn.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,a=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const l=e.elements,d=l[0],c=l[4],p=l[8],f=l[1],h=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(c-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+m)<.1&&Math.abs(d+h+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,_=(h+1)/2,k=(u+1)/2,w=(c+f)/4,E=(p+x)/4,N=(g+m)/4;return b>_&&b>k?b<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(b),a=w/i,s=E/i):_>k?_<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(_),i=w/a,s=N/a):k<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(k),i=E/s,a=N/s),this.set(i,a,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(p-x)*(p-x)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(p-x)/v,this.z=(f-c)/v,this.w=Math.acos((d+h+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends xa{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(Na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Li?Xt:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Vu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jc extends cn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=sn,this.minFilter=sn,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wu extends cn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=sn,this.minFilter=sn,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,r,o){let l=i[a+0],d=i[a+1],c=i[a+2],p=i[a+3];const f=s[r+0],h=s[r+1],g=s[r+2],x=s[r+3];if(o===0){e[t+0]=l,e[t+1]=d,e[t+2]=c,e[t+3]=p;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=x;return}if(p!==x||l!==f||d!==h||c!==g){let m=1-o;const u=l*f+d*h+c*g+p*x,v=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const k=Math.sqrt(b),w=Math.atan2(k,u*v);m=Math.sin(m*w)/k,o=Math.sin(o*w)/k}const _=o*v;if(l=l*m+f*_,d=d*m+h*_,c=c*m+g*_,p=p*m+x*_,m===1-o){const k=1/Math.sqrt(l*l+d*d+c*c+p*p);l*=k,d*=k,c*=k,p*=k}}e[t]=l,e[t+1]=d,e[t+2]=c,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,a,s,r){const o=i[a],l=i[a+1],d=i[a+2],c=i[a+3],p=s[r],f=s[r+1],h=s[r+2],g=s[r+3];return e[t]=o*g+c*p+l*h-d*f,e[t+1]=l*g+c*f+d*p-o*h,e[t+2]=d*g+c*h+o*f-l*p,e[t+3]=c*g-o*p-l*f-d*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,d=o(i/2),c=o(a/2),p=o(s/2),f=l(i/2),h=l(a/2),g=l(s/2);switch(r){case"XYZ":this._x=f*c*p+d*h*g,this._y=d*h*p-f*c*g,this._z=d*c*g+f*h*p,this._w=d*c*p-f*h*g;break;case"YXZ":this._x=f*c*p+d*h*g,this._y=d*h*p-f*c*g,this._z=d*c*g-f*h*p,this._w=d*c*p+f*h*g;break;case"ZXY":this._x=f*c*p-d*h*g,this._y=d*h*p+f*c*g,this._z=d*c*g+f*h*p,this._w=d*c*p-f*h*g;break;case"ZYX":this._x=f*c*p-d*h*g,this._y=d*h*p+f*c*g,this._z=d*c*g-f*h*p,this._w=d*c*p+f*h*g;break;case"YZX":this._x=f*c*p+d*h*g,this._y=d*h*p+f*c*g,this._z=d*c*g-f*h*p,this._w=d*c*p-f*h*g;break;case"XZY":this._x=f*c*p-d*h*g,this._y=d*h*p-f*c*g,this._z=d*c*g+f*h*p,this._w=d*c*p+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],d=t[2],c=t[6],p=t[10],f=i+o+p;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-d)*h,this._z=(r-a)*h}else if(i>o&&i>p){const h=2*Math.sqrt(1+i-o-p);this._w=(c-l)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+d)/h}else if(o>p){const h=2*Math.sqrt(1+o-i-p);this._w=(s-d)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+p-i-o);this._w=(r-a)/h,this._x=(s+d)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,d=t._z,c=t._w;return this._x=i*c+r*o+a*d-s*l,this._y=a*c+r*l+s*o-i*d,this._z=s*c+r*d+i*l-a*o,this._w=r*c-i*o-a*l-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*r+t*this._w,this._x=h*i+t*this._x,this._y=h*a+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const d=Math.sqrt(l),c=Math.atan2(d,o),p=Math.sin((1-t)*c)/d,f=Math.sin(t*c)/d;return this._w=r*p+this._w*f,this._x=i*p+this._x*f,this._y=a*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,i=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,d=2*(r*a-o*i),c=2*(o*t-s*a),p=2*(s*i-r*t);return this.x=t+l*d+r*p-o*c,this.y=i+l*c+o*d-s*p,this.z=a+l*p+s*c-r*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mr.copy(this).projectOnVector(e),this.sub(mr)}reflect(e){return this.sub(mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mr=new T,Rl=new $a;class Ya{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,_n):_n.fromBufferAttribute(s,r),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qa.copy(i.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),es.subVectors(this.max,Ma),Fi.subVectors(e.a,Ma),Bi.subVectors(e.b,Ma),Hi.subVectors(e.c,Ma),Jn.subVectors(Bi,Fi),Zn.subVectors(Hi,Bi),bi.subVectors(Fi,Hi);let t=[0,-Jn.z,Jn.y,0,-Zn.z,Zn.y,0,-bi.z,bi.y,Jn.z,0,-Jn.x,Zn.z,0,-Zn.x,bi.z,0,-bi.x,-Jn.y,Jn.x,0,-Zn.y,Zn.x,0,-bi.y,bi.x,0];return!gr(t,Fi,Bi,Hi,es)||(t=[1,0,0,0,1,0,0,0,1],!gr(t,Fi,Bi,Hi,es))?!1:(ts.crossVectors(Jn,Zn),t=[ts.x,ts.y,ts.z],gr(t,Fi,Bi,Hi,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new T,new T,new T,new T,new T,new T,new T,new T],_n=new T,Qa=new Ya,Fi=new T,Bi=new T,Hi=new T,Jn=new T,Zn=new T,bi=new T,Ma=new T,es=new T,ts=new T,vi=new T;function gr(n,e,t,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){vi.fromArray(n,s);const o=a.x*Math.abs(vi.x)+a.y*Math.abs(vi.y)+a.z*Math.abs(vi.z),l=e.dot(vi),d=t.dot(vi),c=i.dot(vi);if(Math.max(-Math.max(l,d,c),Math.min(l,d,c))>o)return!1}return!0}const Xu=new Ya,Sa=new T,xr=new T;class Vs{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xu.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Sa,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(xr)),this.expandByPoint(Sa.copy(e.center).sub(xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new T,br=new T,ns=new T,Qn=new T,vr=new T,is=new T,_r=new T;class Kc{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){br.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(br);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ns),o=Qn.dot(this.direction),l=-Qn.dot(ns),d=Qn.lengthSq(),c=Math.abs(1-r*r);let p,f,h,g;if(c>0)if(p=r*l-o,f=r*o-l,g=s*c,p>=0)if(f>=-g)if(f<=g){const x=1/c;p*=x,f*=x,h=p*(p+r*f+2*o)+f*(r*p+f+2*l)+d}else f=s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+d;else f=-s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+d;else f<=-g?(p=Math.max(0,-(-r*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+d):f<=g?(p=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+d):(p=Math.max(0,-(r*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+d);else f=r>0?-s:s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(br).addScaledVector(ns,f),h}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),a=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,r,o,l;const d=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,f=this.origin;return d>=0?(i=(e.min.x-f.x)*d,a=(e.max.x-f.x)*d):(i=(e.max.x-f.x)*d,a=(e.min.x-f.x)*d),c>=0?(s=(e.min.y-f.y)*c,r=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,r=(e.min.y-f.y)*c),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,a,s){vr.subVectors(t,e),is.subVectors(i,e),_r.crossVectors(vr,is);let r=this.direction.dot(_r),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Qn.subVectors(this.origin,e);const l=o*this.direction.dot(is.crossVectors(Qn,is));if(l<0)return null;const d=o*this.direction.dot(vr.cross(Qn));if(d<0||l+d>r)return null;const c=-o*Qn.dot(_r);return c<0?null:this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,i,a,s,r,o,l,d,c,p,f,h,g,x,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,d,c,p,f,h,g,x,m)}set(e,t,i,a,s,r,o,l,d,c,p,f,h,g,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=d,u[6]=c,u[10]=p,u[14]=f,u[3]=h,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),r=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),d=Math.sin(a),c=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=r*c,h=r*p,g=o*c,x=o*p;t[0]=l*c,t[4]=-l*p,t[8]=d,t[1]=h+g*d,t[5]=f-x*d,t[9]=-o*l,t[2]=x-f*d,t[6]=g+h*d,t[10]=r*l}else if(e.order==="YXZ"){const f=l*c,h=l*p,g=d*c,x=d*p;t[0]=f+x*o,t[4]=g*o-h,t[8]=r*d,t[1]=r*p,t[5]=r*c,t[9]=-o,t[2]=h*o-g,t[6]=x+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*c,h=l*p,g=d*c,x=d*p;t[0]=f-x*o,t[4]=-r*p,t[8]=g+h*o,t[1]=h+g*o,t[5]=r*c,t[9]=x-f*o,t[2]=-r*d,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*c,h=r*p,g=o*c,x=o*p;t[0]=l*c,t[4]=g*d-h,t[8]=f*d+x,t[1]=l*p,t[5]=x*d+f,t[9]=h*d-g,t[2]=-d,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,h=r*d,g=o*l,x=o*d;t[0]=l*c,t[4]=x-f*p,t[8]=g*p+h,t[1]=p,t[5]=r*c,t[9]=-o*c,t[2]=-d*c,t[6]=h*p+g,t[10]=f-x*p}else if(e.order==="XZY"){const f=r*l,h=r*d,g=o*l,x=o*d;t[0]=l*c,t[4]=-p,t[8]=d*c,t[1]=f*p+x,t[5]=r*c,t[9]=h*p-g,t[2]=g*p-h,t[6]=o*c,t[10]=x*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qu,e,$u)}lookAt(e,t,i){const a=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ei.crossVectors(i,un),ei.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ei.crossVectors(i,un)),ei.normalize(),as.crossVectors(un,ei),a[0]=ei.x,a[4]=as.x,a[8]=un.x,a[1]=ei.y,a[5]=as.y,a[9]=un.y,a[2]=ei.z,a[6]=as.z,a[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],d=i[12],c=i[1],p=i[5],f=i[9],h=i[13],g=i[2],x=i[6],m=i[10],u=i[14],v=i[3],b=i[7],_=i[11],k=i[15],w=a[0],E=a[4],N=a[8],M=a[12],L=a[1],I=a[5],B=a[9],Y=a[13],P=a[2],F=a[6],X=a[10],ne=a[14],$=a[3],j=a[7],J=a[11],V=a[15];return s[0]=r*w+o*L+l*P+d*$,s[4]=r*E+o*I+l*F+d*j,s[8]=r*N+o*B+l*X+d*J,s[12]=r*M+o*Y+l*ne+d*V,s[1]=c*w+p*L+f*P+h*$,s[5]=c*E+p*I+f*F+h*j,s[9]=c*N+p*B+f*X+h*J,s[13]=c*M+p*Y+f*ne+h*V,s[2]=g*w+x*L+m*P+u*$,s[6]=g*E+x*I+m*F+u*j,s[10]=g*N+x*B+m*X+u*J,s[14]=g*M+x*Y+m*ne+u*V,s[3]=v*w+b*L+_*P+k*$,s[7]=v*E+b*I+_*F+k*j,s[11]=v*N+b*B+_*X+k*J,s[15]=v*M+b*Y+_*ne+k*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],d=e[13],c=e[2],p=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*l*p-a*d*p-s*o*f+i*d*f+a*o*h-i*l*h)+x*(+t*l*h-t*d*f+s*r*f-a*r*h+a*d*c-s*l*c)+m*(+t*d*p-t*o*h-s*r*p+i*r*h+s*o*c-i*d*c)+u*(-a*o*c-t*l*p+t*o*f+a*r*p-i*r*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],d=e[7],c=e[8],p=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],u=e[15],v=p*m*d-x*f*d+x*l*h-o*m*h-p*l*u+o*f*u,b=g*f*d-c*m*d-g*l*h+r*m*h+c*l*u-r*f*u,_=c*x*d-g*p*d+g*o*h-r*x*h-c*o*u+r*p*u,k=g*p*l-c*x*l-g*o*f+r*x*f+c*o*m-r*p*m,w=t*v+i*b+a*_+s*k;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(x*f*s-p*m*s-x*a*h+i*m*h+p*a*u-i*f*u)*E,e[2]=(o*m*s-x*l*s+x*a*d-i*m*d-o*a*u+i*l*u)*E,e[3]=(p*l*s-o*f*s-p*a*d+i*f*d+o*a*h-i*l*h)*E,e[4]=b*E,e[5]=(c*m*s-g*f*s+g*a*h-t*m*h-c*a*u+t*f*u)*E,e[6]=(g*l*s-r*m*s-g*a*d+t*m*d+r*a*u-t*l*u)*E,e[7]=(r*f*s-c*l*s+c*a*d-t*f*d-r*a*h+t*l*h)*E,e[8]=_*E,e[9]=(g*p*s-c*x*s-g*i*h+t*x*h+c*i*u-t*p*u)*E,e[10]=(r*x*s-g*o*s+g*i*d-t*x*d-r*i*u+t*o*u)*E,e[11]=(c*o*s-r*p*s-c*i*d+t*p*d+r*i*h-t*o*h)*E,e[12]=k*E,e[13]=(c*x*a-g*p*a+g*i*f-t*x*f-c*i*m+t*p*m)*E,e[14]=(g*o*a-r*x*a-g*i*l+t*x*l+r*i*m-t*o*m)*E,e[15]=(r*p*a-c*o*a+c*i*l-t*p*l-r*i*f+t*o*f)*E,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,d=s*r,c=s*o;return this.set(d*r+i,d*o-a*l,d*l+a*o,0,d*o+a*l,c*o+i,c*l-a*r,0,d*l-a*o,c*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,d=s+s,c=r+r,p=o+o,f=s*d,h=s*c,g=s*p,x=r*c,m=r*p,u=o*p,v=l*d,b=l*c,_=l*p,k=i.x,w=i.y,E=i.z;return a[0]=(1-(x+u))*k,a[1]=(h+_)*k,a[2]=(g-b)*k,a[3]=0,a[4]=(h-_)*w,a[5]=(1-(f+u))*w,a[6]=(m+v)*w,a[7]=0,a[8]=(g+b)*E,a[9]=(m-v)*E,a[10]=(1-(f+x))*E,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=Gi.set(a[0],a[1],a[2]).length();const r=Gi.set(a[4],a[5],a[6]).length(),o=Gi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],yn.copy(this);const d=1/s,c=1/r,p=1/o;return yn.elements[0]*=d,yn.elements[1]*=d,yn.elements[2]*=d,yn.elements[4]*=c,yn.elements[5]*=c,yn.elements[6]*=c,yn.elements[8]*=p,yn.elements[9]*=p,yn.elements[10]*=p,t.setFromRotationMatrix(yn),i.x=s,i.y=r,i.z=o,this}makePerspective(e,t,i,a,s,r,o=Vn){const l=this.elements,d=2*s/(t-e),c=2*s/(i-a),p=(t+e)/(t-e),f=(i+a)/(i-a);let h,g;if(o===Vn)h=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===zs)h=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,r,o=Vn){const l=this.elements,d=1/(t-e),c=1/(i-a),p=1/(r-s),f=(t+e)*d,h=(i+a)*c;let g,x;if(o===Vn)g=(r+s)*p,x=-2*p;else if(o===zs)g=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new T,yn=new At,qu=new T(0,0,0),$u=new T(1,1,1),ei=new T,as=new T,un=new T,Pl=new At,Dl=new $a;class Ws{constructor(e=0,t=0,i=0,a=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],d=a[5],c=a[9],p=a[2],f=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,d)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,d));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yu=0;const Il=new T,Vi=new $a,On=new At,ss=new T,Ea=new T,ju=new T,Ku=new $a,Ul=new T(1,0,0),Nl=new T(0,1,0),Ol=new T(0,0,1),Ju={type:"added"},Zu={type:"removed"};class Ft extends xa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new T,t=new Ws,i=new $a,a=new T(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new At},normalMatrix:{value:new at}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Il.copy(e).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ss.copy(e):ss.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ea,ss,this.up):On.lookAt(ss,Ea,this.up),this.quaternion.setFromRotationMatrix(On),a&&(On.extractRotation(a.matrixWorld),Vi.setFromRotationMatrix(On),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ju)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,ju),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++){const o=a[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let d=0,c=l.length;d<c;d++){const p=l[d];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,d=this.material.length;l<d;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),d=r(e.textures),c=r(e.images),p=r(e.shapes),f=r(e.skeletons),h=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),d.length>0&&(i.textures=d),c.length>0&&(i.images=c),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(o){const l=[];for(const d in o){const c=o[d];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Ft.DEFAULT_UP=new T(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new T,zn=new T,yr=new T,Fn=new T,Wi=new T,Xi=new T,zl=new T,wr=new T,Mr=new T,Sr=new T;let rs=!1;class gn{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),wn.subVectors(e,t),a.cross(wn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){wn.subVectors(a,t),zn.subVectors(i,t),yr.subVectors(e,t);const r=wn.dot(wn),o=wn.dot(zn),l=wn.dot(yr),d=zn.dot(zn),c=zn.dot(yr),p=r*d-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,h=(d*l-o*c)*f,g=(r*c-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,i,a,s,r,o,l){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),this.getInterpolation(e,t,i,a,s,r,o,l)}static getInterpolation(e,t,i,a,s,r,o,l){return this.getBarycoord(e,t,i,a,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(r,Fn.y),l.addScaledVector(o,Fn.z),l)}static isFrontFacing(e,t,i,a){return wn.subVectors(i,t),zn.subVectors(e,t),wn.cross(zn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),wn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),gn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}getInterpolation(e,t,i,a,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let r,o;Wi.subVectors(a,i),Xi.subVectors(s,i),wr.subVectors(e,i);const l=Wi.dot(wr),d=Xi.dot(wr);if(l<=0&&d<=0)return t.copy(i);Mr.subVectors(e,a);const c=Wi.dot(Mr),p=Xi.dot(Mr);if(c>=0&&p<=c)return t.copy(a);const f=l*p-c*d;if(f<=0&&l>=0&&c<=0)return r=l/(l-c),t.copy(i).addScaledVector(Wi,r);Sr.subVectors(e,s);const h=Wi.dot(Sr),g=Xi.dot(Sr);if(g>=0&&h<=g)return t.copy(s);const x=h*d-l*g;if(x<=0&&d>=0&&g<=0)return o=d/(d-g),t.copy(i).addScaledVector(Xi,o);const m=c*g-h*p;if(m<=0&&p-c>=0&&h-g>=0)return zl.subVectors(s,a),o=(p-c)/(p-c+(h-g)),t.copy(a).addScaledVector(zl,o);const u=1/(m+x+f);return r=x*u,o=f*u,t.copy(i).addScaledVector(Wi,r).addScaledVector(Xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},os={h:0,s:0,l:0};function Er(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=xt.workingColorSpace){if(e=zu(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=Er(r,s,e+1/3),this.g=Er(r,s,e),this.b=Er(r,s,e-1/3)}return xt.toWorkingColorSpace(this,a),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=Zc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return xt.fromWorkingColorSpace(Zt.copy(this),e),Math.round($t(Zt.r*255,0,255))*65536+Math.round($t(Zt.g*255,0,255))*256+Math.round($t(Zt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Zt.copy(this),t);const i=Zt.r,a=Zt.g,s=Zt.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,d;const c=(o+r)/2;if(o===r)l=0,d=0;else{const p=r-o;switch(d=c<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=d,e.l=c,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Xt){xt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,a=Zt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(os);const i=ur(ti.h,os.h,t),a=ur(ti.s,os.s,t),s=ur(ti.l,os.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new $e;$e.NAMES=Zc;let Qu=0;class pi extends xa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=la,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==la&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==so&&(i.blendSrc=this.blendSrc),this.blendDst!==ro&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ct extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new T,ls=new _e;class Tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=po,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),a=vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),a=vt(a,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==po&&(e.usage=this.usage),e}}class Qc extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ed extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ep=0;const fn=new At,Tr=new Ft,qi=new T,pn=new Ya,Ta=new Ya,Wt=new T;class Et extends xa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qc(e)?ed:Qc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(pn.min,Ta.min),pn.expandByPoint(Wt),Wt.addVectors(pn.max,Ta.max),pn.expandByPoint(Wt)):(pn.expandByPoint(Ta.min),pn.expandByPoint(Ta.max))}pn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Wt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Wt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let d=0,c=o.count;d<c;d++)Wt.fromBufferAttribute(o,d),l&&(qi.fromBufferAttribute(e,d),Wt.add(qi)),a=Math.max(a,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,s=t.normal.array,r=t.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,d=[],c=[];for(let L=0;L<o;L++)d[L]=new T,c[L]=new T;const p=new T,f=new T,h=new T,g=new _e,x=new _e,m=new _e,u=new T,v=new T;function b(L,I,B){p.fromArray(a,L*3),f.fromArray(a,I*3),h.fromArray(a,B*3),g.fromArray(r,L*2),x.fromArray(r,I*2),m.fromArray(r,B*2),f.sub(p),h.sub(p),x.sub(g),m.sub(g);const Y=1/(x.x*m.y-m.x*x.y);isFinite(Y)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(h,-x.y).multiplyScalar(Y),v.copy(h).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(Y),d[L].add(u),d[I].add(u),d[B].add(u),c[L].add(v),c[I].add(v),c[B].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let L=0,I=_.length;L<I;++L){const B=_[L],Y=B.start,P=B.count;for(let F=Y,X=Y+P;F<X;F+=3)b(i[F+0],i[F+1],i[F+2])}const k=new T,w=new T,E=new T,N=new T;function M(L){E.fromArray(s,L*3),N.copy(E);const I=d[L];k.copy(I),k.sub(E.multiplyScalar(E.dot(I))).normalize(),w.crossVectors(N,I);const Y=w.dot(c[L])<0?-1:1;l[L*4]=k.x,l[L*4+1]=k.y,l[L*4+2]=k.z,l[L*4+3]=Y}for(let L=0,I=_.length;L<I;++L){const B=_[L],Y=B.start,P=B.count;for(let F=Y,X=Y+P;F<X;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const a=new T,s=new T,r=new T,o=new T,l=new T,d=new T,c=new T,p=new T;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),c.subVectors(r,s),p.subVectors(a,s),c.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),d.fromBufferAttribute(i,m),o.add(c),l.add(c),d.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let f=0,h=t.count;f<h;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),c.subVectors(r,s),p.subVectors(a,s),c.cross(p),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const d=o.array,c=o.itemSize,p=o.normalized,f=new d.constructor(l.length*c);let h=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?h=l[x]*o.data.stride+o.offset:h=l[x]*c;for(let u=0;u<c;u++)f[g++]=d[h++]}return new Tn(f,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],d=e(l,i);t.setAttribute(o,d)}const s=this.morphAttributes;for(const o in s){const l=[],d=s[o];for(let c=0,p=d.length;c<p;c++){const f=d[c],h=e(f,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const d=r[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const d=i[l];e.data.attributes[l]=d.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],c=[];for(let p=0,f=d.length;p<f;p++){const h=d[p];c.push(h.toJSON(e.data))}c.length>0&&(a[l]=c,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const d in a){const c=a[d];this.setAttribute(d,c.clone(t))}const s=e.morphAttributes;for(const d in s){const c=[],p=s[d];for(let f=0,h=p.length;f<h;f++)c.push(p[f].clone(t));this.morphAttributes[d]=c}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let d=0,c=r.length;d<c;d++){const p=r[d];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new At,_i=new Kc,cs=new Vs,Bl=new T,$i=new T,Yi=new T,ji=new T,Ar=new T,ds=new T,us=new _e,ps=new _e,hs=new _e,Hl=new T,Gl=new T,Vl=new T,fs=new T,ms=new T;class C extends Ft{constructor(e=new Et,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){ds.set(0,0,0);for(let l=0,d=s.length;l<d;l++){const c=o[l],p=s[l];c!==0&&(Ar.fromBufferAttribute(p,e),r?ds.addScaledVector(Ar,c):ds.addScaledVector(Ar.sub(t),c))}t.add(ds)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(cs.containsPoint(_i.origin)===!1&&(_i.intersectSphere(cs,Bl)===null||_i.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(Fl.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Fl),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,d=s.attributes.uv,c=s.attributes.uv1,p=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=r[m.materialIndex],v=Math.max(m.start,h.start),b=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let _=v,k=b;_<k;_+=3){const w=o.getX(_),E=o.getX(_+1),N=o.getX(_+2);a=gs(this,u,e,i,d,c,p,w,E,N),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=g,u=x;m<u;m+=3){const v=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);a=gs(this,r,e,i,d,c,p,v,b,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=r[m.materialIndex],v=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let _=v,k=b;_<k;_+=3){const w=_,E=_+1,N=_+2;a=gs(this,u,e,i,d,c,p,w,E,N),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,u=x;m<u;m+=3){const v=m,b=m+1,_=m+2;a=gs(this,r,e,i,d,c,p,v,b,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function tp(n,e,t,i,a,s,r,o){let l;if(e.side===Qt?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===ui,o),l===null)return null;ms.copy(o),ms.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(ms);return d<t.near||d>t.far?null:{distance:d,point:ms.clone(),object:n}}function gs(n,e,t,i,a,s,r,o,l,d){n.getVertexPosition(o,$i),n.getVertexPosition(l,Yi),n.getVertexPosition(d,ji);const c=tp(n,e,t,i,$i,Yi,ji,fs);if(c){a&&(us.fromBufferAttribute(a,o),ps.fromBufferAttribute(a,l),hs.fromBufferAttribute(a,d),c.uv=gn.getInterpolation(fs,$i,Yi,ji,us,ps,hs,new _e)),s&&(us.fromBufferAttribute(s,o),ps.fromBufferAttribute(s,l),hs.fromBufferAttribute(s,d),c.uv1=gn.getInterpolation(fs,$i,Yi,ji,us,ps,hs,new _e),c.uv2=c.uv1),r&&(Hl.fromBufferAttribute(r,o),Gl.fromBufferAttribute(r,l),Vl.fromBufferAttribute(r,d),c.normal=gn.getInterpolation(fs,$i,Yi,ji,Hl,Gl,Vl,new T),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const p={a:o,b:l,c:d,normal:new T,materialIndex:0};gn.getNormal($i,Yi,ji,p.normal),c.face=p}return c}class ae extends Et{constructor(e=1,t=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],d=[],c=[],p=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,a,r,2),g("x","z","y",1,-1,e,i,-t,a,r,3),g("x","y","z",1,-1,e,t,i,a,s,4),g("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(p,2));function g(x,m,u,v,b,_,k,w,E,N,M){const L=_/E,I=k/N,B=_/2,Y=k/2,P=w/2,F=E+1,X=N+1;let ne=0,$=0;const j=new T;for(let J=0;J<X;J++){const V=J*I-Y;for(let K=0;K<F;K++){const z=K*L-B;j[x]=z*v,j[m]=V*b,j[u]=P,d.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[u]=w>0?1:-1,c.push(j.x,j.y,j.z),p.push(K/E),p.push(1-J/N),ne+=1}}for(let J=0;J<N;J++)for(let V=0;V<E;V++){const K=f+V+F*J,z=f+V+F*(J+1),Q=f+(V+1)+F*(J+1),ue=f+(V+1)+F*J;l.push(K,z,ue),l.push(z,Q,ue),$+=6}o.addGroup(h,$,M),h+=$,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ae(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ha(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=ha(n[t]);for(const a in i)e[a]=i[a]}return e}function np(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function td(n){return n.getRenderTarget()===null?n.outputColorSpace:xt.workingColorSpace}const ip={clone:ha,merge:an};var ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nd extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends nd{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,d=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*i/d,a*=r.width/l,i*=r.height/d}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Ji=1;class rp extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new on(Ki,Ji,e,t);a.layers=this.layers,this.add(a);const s=new on(Ki,Ji,e,t);s.layers=this.layers,this.add(s);const r=new on(Ki,Ji,e,t);r.layers=this.layers,this.add(r);const o=new on(Ki,Ji,e,t);o.layers=this.layers,this.add(o);const l=new on(Ki,Ji,e,t);l.layers=this.layers,this.add(l);const d=new on(Ki,Ji,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,r,o,l]=t;for(const d of t)this.remove(d);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,d,c]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,r),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,a),e.render(t,c),e.setRenderTarget(p,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class id extends cn{constructor(e,t,i,a,s,r,o,l,d,c){e=e!==void 0?e:[],t=t!==void 0?t:da,super(e,t,i,a,s,r,o,l,d,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class op extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(Na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Li?Xt:bn),this.texture=new id(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ae(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ri});s.uniforms.tEquirect.value=t;const r=new C(a,s),o=t.minFilter;return t.minFilter===Wa&&(t.minFilter=mn),new rp(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(s)}}const kr=new T,lp=new T,cp=new at;class Mi{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=kr.subVectors(i,t).cross(lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(kr),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cp.getNormalMatrix(e),a=this.coplanarPoint(kr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Vs,xs=new T;class Ao{constructor(e=new Mi,t=new Mi,i=new Mi,a=new Mi,s=new Mi,r=new Mi){this.planes=[e,t,i,a,s,r]}set(e,t,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn){const i=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],l=a[3],d=a[4],c=a[5],p=a[6],f=a[7],h=a[8],g=a[9],x=a[10],m=a[11],u=a[12],v=a[13],b=a[14],_=a[15];if(i[0].setComponents(l-s,f-d,m-h,_-u).normalize(),i[1].setComponents(l+s,f+d,m+h,_+u).normalize(),i[2].setComponents(l+r,f+c,m+g,_+v).normalize(),i[3].setComponents(l-r,f-c,m-g,_-v).normalize(),i[4].setComponents(l-o,f-p,m-x,_-b).normalize(),t===Vn)i[5].setComponents(l+o,f+p,m+x,_+b).normalize();else if(t===zs)i[5].setComponents(o,p,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(xs.x=a.normal.x>0?e.max.x:e.min.x,xs.y=a.normal.y>0?e.max.y:e.min.y,xs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ad(){let n=null,e=!1,t=null,i=null;function a(s,r){t(s,r),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dp(n,e){const t=e.isWebGL2,i=new WeakMap;function a(d,c){const p=d.array,f=d.usage,h=p.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,p,f),d.onUploadCallback();let x;if(p instanceof Float32Array)x=n.FLOAT;else if(p instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=n.SHORT;else if(p instanceof Uint32Array)x=n.UNSIGNED_INT;else if(p instanceof Int32Array)x=n.INT;else if(p instanceof Int8Array)x=n.BYTE;else if(p instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:h}}function s(d,c,p){const f=c.array,h=c._updateRange,g=c.updateRanges;if(n.bindBuffer(p,d),h.count===-1&&g.length===0&&n.bufferSubData(p,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){const u=g[x];t?n.bufferSubData(p,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(p,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}c.clearUpdateRanges()}h.count!==-1&&(t?n.bufferSubData(p,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count):n.bufferSubData(p,h.offset*f.BYTES_PER_ELEMENT,f.subarray(h.offset,h.offset+h.count)),h.count=-1),c.onUploadCallback()}function r(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const c=i.get(d);c&&(n.deleteBuffer(c.buffer),i.delete(d))}function l(d,c){if(d.isGLBufferAttribute){const f=i.get(d);(!f||f.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);if(p===void 0)i.set(d,a(d,c));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,c),p.version=d.version}}return{get:r,remove:o,update:l}}class kt extends Et{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(a),d=o+1,c=l+1,p=e/o,f=t/l,h=[],g=[],x=[],m=[];for(let u=0;u<c;u++){const v=u*f-r;for(let b=0;b<d;b++){const _=b*p-s;g.push(_,-v,0),x.push(0,0,1),m.push(b/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const b=v+d*u,_=v+d*(u+1),k=v+1+d*(u+1),w=v+1+d*u;h.push(b,_,w),h.push(_,k,w)}this.setIndex(h),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.widthSegments,e.heightSegments)}}var up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
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
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xp=`#ifdef USE_AOMAP
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
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vp=`#ifdef USE_BATCHING
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
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ep=`#ifdef USE_BUMPMAP
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ip=`#define PI 3.141592653589793
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
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Np=`vec3 transformedNormal = objectNormal;
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
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`
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
}`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,th=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ih=`uniform bool receiveShadow;
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
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,sh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ch=`PhysicalMaterial material;
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
#endif`,dh=`struct PhysicalMaterial {
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
}`,uh=`
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
#endif`,ph=`#if defined( RE_IndirectDiffuse )
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
#endif`,hh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_h=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yh=`#if defined( USE_POINTS_UV )
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
#endif`,wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eh=`#ifdef USE_MORPHNORMALS
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
#endif`,Th=`#ifdef USE_MORPHTARGETS
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
#endif`,Ah=`#ifdef USE_MORPHTARGETS
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
#endif`,kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ph=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dh=`#ifdef USE_NORMALMAP
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
#endif`,Ih=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$h=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jh=`float getShadowMask() {
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
}`,Kh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jh=`#ifdef USE_SKINNING
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
#endif`,Zh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qh=`#ifdef USE_SKINNING
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
#endif`,ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sf=`#ifdef USE_TRANSMISSION
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
#endif`,rf=`#ifdef USE_TRANSMISSION
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
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
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
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
}`,bf=`#if DEPTH_PACKING == 3200
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
}`,vf=`#define DISTANCE
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
}`,_f=`#define DISTANCE
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Af=`#define LAMBERT
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
}`,kf=`#define LAMBERT
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
}`,Lf=`#define MATCAP
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
}`,Cf=`#define MATCAP
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
}`,Rf=`#define NORMAL
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
}`,Pf=`#define NORMAL
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
}`,Df=`#define PHONG
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
}`,If=`#define PHONG
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
}`,Uf=`#define STANDARD
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
}`,Nf=`#define STANDARD
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
}`,Of=`#define TOON
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
}`,zf=`#define TOON
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
}`,Ff=`uniform float size;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,Hf=`#include <common>
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
}`,Gf=`uniform vec3 color;
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
}`,Vf=`uniform float rotation;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:up,alphahash_pars_fragment:pp,alphamap_fragment:hp,alphamap_pars_fragment:fp,alphatest_fragment:mp,alphatest_pars_fragment:gp,aomap_fragment:xp,aomap_pars_fragment:bp,batching_pars_vertex:vp,batching_vertex:_p,begin_vertex:yp,beginnormal_vertex:wp,bsdfs:Mp,iridescence_fragment:Sp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:kp,clipping_planes_vertex:Lp,color_fragment:Cp,color_pars_fragment:Rp,color_pars_vertex:Pp,color_vertex:Dp,common:Ip,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Np,displacementmap_pars_vertex:Op,displacementmap_vertex:zp,emissivemap_fragment:Fp,emissivemap_pars_fragment:Bp,colorspace_fragment:Hp,colorspace_pars_fragment:Gp,envmap_fragment:Vp,envmap_common_pars_fragment:Wp,envmap_pars_fragment:Xp,envmap_pars_vertex:qp,envmap_physical_pars_fragment:ah,envmap_vertex:$p,fog_vertex:Yp,fog_pars_vertex:jp,fog_fragment:Kp,fog_pars_fragment:Jp,gradientmap_pars_fragment:Zp,lightmap_fragment:Qp,lightmap_pars_fragment:eh,lights_lambert_fragment:th,lights_lambert_pars_fragment:nh,lights_pars_begin:ih,lights_toon_fragment:sh,lights_toon_pars_fragment:rh,lights_phong_fragment:oh,lights_phong_pars_fragment:lh,lights_physical_fragment:ch,lights_physical_pars_fragment:dh,lights_fragment_begin:uh,lights_fragment_maps:ph,lights_fragment_end:hh,logdepthbuf_fragment:fh,logdepthbuf_pars_fragment:mh,logdepthbuf_pars_vertex:gh,logdepthbuf_vertex:xh,map_fragment:bh,map_pars_fragment:vh,map_particle_fragment:_h,map_particle_pars_fragment:yh,metalnessmap_fragment:wh,metalnessmap_pars_fragment:Mh,morphcolor_vertex:Sh,morphnormal_vertex:Eh,morphtarget_pars_vertex:Th,morphtarget_vertex:Ah,normal_fragment_begin:kh,normal_fragment_maps:Lh,normal_pars_fragment:Ch,normal_pars_vertex:Rh,normal_vertex:Ph,normalmap_pars_fragment:Dh,clearcoat_normal_fragment_begin:Ih,clearcoat_normal_fragment_maps:Uh,clearcoat_pars_fragment:Nh,iridescence_pars_fragment:Oh,opaque_fragment:zh,packing:Fh,premultiplied_alpha_fragment:Bh,project_vertex:Hh,dithering_fragment:Gh,dithering_pars_fragment:Vh,roughnessmap_fragment:Wh,roughnessmap_pars_fragment:Xh,shadowmap_pars_fragment:qh,shadowmap_pars_vertex:$h,shadowmap_vertex:Yh,shadowmask_pars_fragment:jh,skinbase_vertex:Kh,skinning_pars_vertex:Jh,skinning_vertex:Zh,skinnormal_vertex:Qh,specularmap_fragment:ef,specularmap_pars_fragment:tf,tonemapping_fragment:nf,tonemapping_pars_fragment:af,transmission_fragment:sf,transmission_pars_fragment:rf,uv_pars_fragment:of,uv_pars_vertex:lf,uv_vertex:cf,worldpos_vertex:df,background_vert:uf,background_frag:pf,backgroundCube_vert:hf,backgroundCube_frag:ff,cube_vert:mf,cube_frag:gf,depth_vert:xf,depth_frag:bf,distanceRGBA_vert:vf,distanceRGBA_frag:_f,equirect_vert:yf,equirect_frag:wf,linedashed_vert:Mf,linedashed_frag:Sf,meshbasic_vert:Ef,meshbasic_frag:Tf,meshlambert_vert:Af,meshlambert_frag:kf,meshmatcap_vert:Lf,meshmatcap_frag:Cf,meshnormal_vert:Rf,meshnormal_frag:Pf,meshphong_vert:Df,meshphong_frag:If,meshphysical_vert:Uf,meshphysical_frag:Nf,meshtoon_vert:Of,meshtoon_frag:zf,points_vert:Ff,points_frag:Bf,shadow_vert:Hf,shadow_frag:Gf,sprite_vert:Vf,sprite_frag:Wf},me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},kn={basic:{uniforms:an([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:an([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:an([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:an([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:an([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:an([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:an([me.points,me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:an([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:an([me.common,me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:an([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:an([me.sprite,me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:an([me.common,me.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:an([me.lights,me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};kn.physical={uniforms:an([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const bs={r:0,b:0,g:0};function Xf(n,e,t,i,a,s,r){const o=new $e(0);let l=s===!0?0:1,d,c,p=null,f=0,h=null;function g(m,u){let v=!1,b=u.isScene===!0?u.background:null;b&&b.isTexture&&(b=(u.backgroundBlurriness>0?t:e).get(b)),b===null?x(o,l):b&&b.isColor&&(x(b,1),v=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Hs)?(c===void 0&&(c=new C(new ae(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ha(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(k,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=xt.getTransfer(b.colorSpace)!==wt,(p!==b||f!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,p=b,f=b.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new C(new kt(2,2),new Ri({name:"BackgroundMaterial",uniforms:ha(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=xt.getTransfer(b.colorSpace)!==wt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||f!==b.version||h!==n.toneMapping)&&(d.material.needsUpdate=!0,p=b,f=b.version,h=n.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function x(m,u){m.getRGB(bs,td(n)),i.buffers.color.setClear(bs.r,bs.g,bs.b,u,r)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function qf(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,o={},l=m(null);let d=l,c=!1;function p(P,F,X,ne,$){let j=!1;if(r){const J=x(ne,X,F);d!==J&&(d=J,h(d.object)),j=u(P,ne,X,$),j&&v(P,ne,X,$)}else{const J=F.wireframe===!0;(d.geometry!==ne.id||d.program!==X.id||d.wireframe!==J)&&(d.geometry=ne.id,d.program=X.id,d.wireframe=J,j=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(j||c)&&(c=!1,N(P,F,X,ne),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function h(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,F,X){const ne=X.wireframe===!0;let $=o[P.id];$===void 0&&($={},o[P.id]=$);let j=$[F.id];j===void 0&&(j={},$[F.id]=j);let J=j[ne];return J===void 0&&(J=m(f()),j[ne]=J),J}function m(P){const F=[],X=[],ne=[];for(let $=0;$<a;$++)F[$]=0,X[$]=0,ne[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:ne,object:P,attributes:{},index:null}}function u(P,F,X,ne){const $=d.attributes,j=F.attributes;let J=0;const V=X.getAttributes();for(const K in V)if(V[K].location>=0){const Q=$[K];let ue=j[K];if(ue===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),Q===void 0||Q.attribute!==ue||ue&&Q.data!==ue.data)return!0;J++}return d.attributesNum!==J||d.index!==ne}function v(P,F,X,ne){const $={},j=F.attributes;let J=0;const V=X.getAttributes();for(const K in V)if(V[K].location>=0){let Q=j[K];Q===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));const ue={};ue.attribute=Q,Q&&Q.data&&(ue.data=Q.data),$[K]=ue,J++}d.attributes=$,d.attributesNum=J,d.index=ne}function b(){const P=d.newAttributes;for(let F=0,X=P.length;F<X;F++)P[F]=0}function _(P){k(P,0)}function k(P,F){const X=d.newAttributes,ne=d.enabledAttributes,$=d.attributeDivisors;X[P]=1,ne[P]===0&&(n.enableVertexAttribArray(P),ne[P]=1),$[P]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),$[P]=F)}function w(){const P=d.newAttributes,F=d.enabledAttributes;for(let X=0,ne=F.length;X<ne;X++)F[X]!==P[X]&&(n.disableVertexAttribArray(X),F[X]=0)}function E(P,F,X,ne,$,j,J){J===!0?n.vertexAttribIPointer(P,F,X,$,j):n.vertexAttribPointer(P,F,X,ne,$,j)}function N(P,F,X,ne){if(i.isWebGL2===!1&&(P.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const $=ne.attributes,j=X.getAttributes(),J=F.defaultAttributeValues;for(const V in j){const K=j[V];if(K.location>=0){let z=$[V];if(z===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(z=P.instanceColor)),z!==void 0){const Q=z.normalized,ue=z.itemSize,ke=t.get(z);if(ke===void 0)continue;const Te=ke.buffer,Ne=ke.type,We=ke.bytesPerElement,ze=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||z.gpuType===Oc);if(z.isInterleavedBufferAttribute){const st=z.data,D=st.stride,He=z.offset;if(st.isInstancedInterleavedBuffer){for(let be=0;be<K.locationSize;be++)k(K.location+be,st.meshPerAttribute);P.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let be=0;be<K.locationSize;be++)_(K.location+be);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let be=0;be<K.locationSize;be++)E(K.location+be,ue/K.locationSize,Ne,Q,D*We,(He+ue/K.locationSize*be)*We,ze)}else{if(z.isInstancedBufferAttribute){for(let st=0;st<K.locationSize;st++)k(K.location+st,z.meshPerAttribute);P.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let st=0;st<K.locationSize;st++)_(K.location+st);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let st=0;st<K.locationSize;st++)E(K.location+st,ue/K.locationSize,Ne,Q,ue*We,ue/K.locationSize*st*We,ze)}}else if(J!==void 0){const Q=J[V];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(K.location,Q);break;case 3:n.vertexAttrib3fv(K.location,Q);break;case 4:n.vertexAttrib4fv(K.location,Q);break;default:n.vertexAttrib1fv(K.location,Q)}}}}w()}function M(){B();for(const P in o){const F=o[P];for(const X in F){const ne=F[X];for(const $ in ne)g(ne[$].object),delete ne[$];delete F[X]}delete o[P]}}function L(P){if(o[P.id]===void 0)return;const F=o[P.id];for(const X in F){const ne=F[X];for(const $ in ne)g(ne[$].object),delete ne[$];delete F[X]}delete o[P.id]}function I(P){for(const F in o){const X=o[F];if(X[P.id]===void 0)continue;const ne=X[P.id];for(const $ in ne)g(ne[$].object),delete ne[$];delete X[P.id]}}function B(){Y(),c=!0,d!==l&&(d=l,h(d.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:B,resetDefaultState:Y,dispose:M,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:_,disableUnusedAttributes:w}}function $f(n,e,t,i){const a=i.isWebGL2;let s;function r(c){s=c}function o(c,p){n.drawArrays(s,c,p),t.update(p,s,1)}function l(c,p,f){if(f===0)return;let h,g;if(a)h=n,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,c,p,f),t.update(p,s,f)}function d(c,p,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<f;g++)this.render(c[g],p[g]);else{h.multiDrawArraysWEBGL(s,c,0,p,0,f);let g=0;for(let x=0;x<f;x++)g+=p[x];t.update(g,s,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=d}function Yf(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const d=r||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,_=r||e.has("OES_texture_float"),k=b&&_,w=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:d,getMaxAnisotropy:a,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:p,maxVertexTextures:f,maxTextureSize:h,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:k,maxSamples:w}}function jf(n){const e=this;let t=null,i=0,a=!1,s=!1;const r=new Mi,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const h=p.length!==0||f||i!==0||a;return a=f,i=p.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=c(p,f,0)},this.setState=function(p,f,h){const g=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,u=n.get(p);if(!a||g===null||g.length===0||s&&!m)s?c(null):d();else{const v=s?0:i,b=v*4;let _=u.clippingState||null;l.value=_,_=c(g,f,b,h);for(let k=0;k!==b;++k)_[k]=t[k];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(p,f,h,g){const x=p!==null?p.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const u=h+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,_=h;b!==x;++b,_+=4)r.copy(p[b]).applyMatrix4(v,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Kf(n){let e=new WeakMap;function t(r,o){return o===oo?r.mapping=da:o===lo&&(r.mapping=ua),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===oo||o===lo)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const d=new op(l.height/2);return d.fromEquirectangularTexture(n,r),e.set(r,d),r.addEventListener("dispose",a),t(d.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sd extends nd{constructor(e=-1,t=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,r=s+d*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ra=4,Wl=[.125,.215,.35,.446,.526,.582],Ti=20,Lr=new sd,Xl=new $e;let Cr=null,Rr=0,Pr=0;const Si=(1+Math.sqrt(5))/2,Zi=1/Si,ql=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Si,Zi),new T(0,Si,-Zi),new T(Zi,0,Si),new T(-Zi,0,Si),new T(Si,Zi,0),new T(-Si,Zi,0)];class $l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Cr=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cr,Rr,Pr),e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===da||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cr=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Xa,format:En,colorSpace:$n,depthBuffer:!1},a=Yl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(s)),this._blurMaterial=Zf(s,e,t)}return a}_compileMaterial(e){const t=new C(this._lodPlanes[0],e);this._renderer.compile(t,Lr)}_sceneToCubeUV(e,t,i,a){const o=new on(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,p=c.autoClear,f=c.toneMapping;c.getClearColor(Xl),c.toneMapping=oi,c.autoClear=!1;const h=new Ct({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new C(new ae,h);let x=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,x=!0):(h.color.copy(Xl),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(d[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,d[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,d[u]));const b=this._cubeSize;vs(a,v*b,u>2?b:0,b,b),c.setRenderTarget(a),x&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=p,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===da||e.mapping===ua;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new C(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Lr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=ql[(a-1)%ql.length];this._blur(e,a-1,a,s,r)}t.autoClear=i}_blur(e,t,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,r,o){const l=this._renderer,d=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,p=new C(this._lodPlanes[a],d),f=d.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ti-1),x=s/g,m=isFinite(s)?1+Math.floor(c*x):Ti;m>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const u=[];let v=0;for(let E=0;E<Ti;++E){const N=E/x,M=Math.exp(-N*N/2);u.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<u.length;E++)u[E]=u[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const _=this._sizeLods[a],k=3*_*(a>b-ra?a-b+ra:0),w=4*(this._cubeSize-_);vs(t,k,w,3*_,2*_),l.setRenderTarget(t),l.render(p,Lr)}}function Jf(n){const e=[],t=[],i=[];let a=n;const s=n-ra+1+Wl.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>n-ra?l=Wl[r-n+ra-1]:r===0&&(l=0),i.push(l);const d=1/(o-2),c=-d,p=1+d,f=[c,c,p,c,p,p,c,c,p,p,c,p],h=6,g=6,x=3,m=2,u=1,v=new Float32Array(x*g*h),b=new Float32Array(m*g*h),_=new Float32Array(u*g*h);for(let w=0;w<h;w++){const E=w%3*2/3-1,N=w>2?0:-1,M=[E,N,0,E+2/3,N,0,E+2/3,N+1,0,E,N,0,E+2/3,N+1,0,E,N+1,0];v.set(M,x*g*w),b.set(f,m*g*w);const L=[w,w,w,w,w,w];_.set(L,u*g*w)}const k=new Et;k.setAttribute("position",new Tn(v,x)),k.setAttribute("uv",new Tn(b,m)),k.setAttribute("faceIndex",new Tn(_,u)),e.push(k),a>ra&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yl(n,e,t){const i=new Ci(n,e,t);return i.texture.mapping=Hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Zf(n,e,t){const i=new Float32Array(Ti),a=new T(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ko(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function jl(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Kl(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ko(){return`

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
	`}function Qf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,d=l===oo||l===lo,c=l===da||l===ua;if(d||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new $l(n)),p=d?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(d&&p&&p.height>0||c&&p&&a(p)){t===null&&(t=new $l(n));const f=d?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function a(o){let l=0;const d=6;for(let c=0;c<d;c++)o[c]!==void 0&&l++;return l===d}function s(o){const l=o.target;l.removeEventListener("dispose",s);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function e0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function t0(n,e,t,i){const a={},s=new WeakMap;function r(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",r),delete a[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function l(p){const f=p.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const h=p.morphAttributes;for(const g in h){const x=h[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],n.ARRAY_BUFFER)}}function d(p){const f=[],h=p.index,g=p.attributes.position;let x=0;if(h!==null){const v=h.array;x=h.version;for(let b=0,_=v.length;b<_;b+=3){const k=v[b+0],w=v[b+1],E=v[b+2];f.push(k,w,w,E,E,k)}}else if(g!==void 0){const v=g.array;x=g.version;for(let b=0,_=v.length/3-1;b<_;b+=3){const k=b+0,w=b+1,E=b+2;f.push(k,w,w,E,E,k)}}else return;const m=new(qc(f)?ed:Qc)(f,1);m.version=x;const u=s.get(p);u&&e.remove(u),s.set(p,m)}function c(p){const f=s.get(p);if(f){const h=p.index;h!==null&&f.version<h.version&&d(p)}else d(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:c}}function n0(n,e,t,i){const a=i.isWebGL2;let s;function r(h){s=h}let o,l;function d(h){o=h.type,l=h.bytesPerElement}function c(h,g){n.drawElements(s,g,o,h*l),t.update(g,s,1)}function p(h,g,x){if(x===0)return;let m,u;if(a)m=n,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,g,o,h*l,x),t.update(g,s,x)}function f(h,g,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<x;u++)this.render(h[u]/l,g[u]);else{m.multiDrawElementsWEBGL(s,g,0,o,h,0,x);let u=0;for(let v=0;v<x;v++)u+=g[v];t.update(u,s,1)}}this.setMode=r,this.setIndex=d,this.render=c,this.renderInstances=p,this.renderMultiDraw=f}function i0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function a0(n,e){return n[0]-e[0]}function s0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function r0(n,e,t){const i={},a=new Float32Array(8),s=new WeakMap,r=new St,o=[];for(let d=0;d<8;d++)o[d]=[d,0];function l(d,c,p){const f=d.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=g!==void 0?g.length:0;let m=s.get(c);if(m===void 0||m.count!==x){let F=function(){Y.dispose(),s.delete(c),c.removeEventListener("dispose",F)};var h=F;m!==void 0&&m.texture.dispose();const b=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,k=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],N=c.morphAttributes.color||[];let M=0;b===!0&&(M=1),_===!0&&(M=2),k===!0&&(M=3);let L=c.attributes.position.count*M,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const B=new Float32Array(L*I*4*x),Y=new jc(B,L,I,x);Y.type=si,Y.needsUpdate=!0;const P=M*4;for(let X=0;X<x;X++){const ne=w[X],$=E[X],j=N[X],J=L*I*4*X;for(let V=0;V<ne.count;V++){const K=V*P;b===!0&&(r.fromBufferAttribute(ne,V),B[J+K+0]=r.x,B[J+K+1]=r.y,B[J+K+2]=r.z,B[J+K+3]=0),_===!0&&(r.fromBufferAttribute($,V),B[J+K+4]=r.x,B[J+K+5]=r.y,B[J+K+6]=r.z,B[J+K+7]=0),k===!0&&(r.fromBufferAttribute(j,V),B[J+K+8]=r.x,B[J+K+9]=r.y,B[J+K+10]=r.z,B[J+K+11]=j.itemSize===4?r.w:1)}}m={count:x,texture:Y,size:new _e(L,I)},s.set(c,m),c.addEventListener("dispose",F)}let u=0;for(let b=0;b<f.length;b++)u+=f[b];const v=c.morphTargetsRelative?1:1-u;p.getUniforms().setValue(n,"morphTargetBaseInfluence",v),p.getUniforms().setValue(n,"morphTargetInfluences",f),p.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let x=i[c.id];if(x===void 0||x.length!==g){x=[];for(let _=0;_<g;_++)x[_]=[_,0];i[c.id]=x}for(let _=0;_<g;_++){const k=x[_];k[0]=_,k[1]=f[_]}x.sort(s0);for(let _=0;_<8;_++)_<g&&x[_][1]?(o[_][0]=x[_][0],o[_][1]=x[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(a0);const m=c.morphAttributes.position,u=c.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const k=o[_],w=k[0],E=k[1];w!==Number.MAX_SAFE_INTEGER&&E?(m&&c.getAttribute("morphTarget"+_)!==m[w]&&c.setAttribute("morphTarget"+_,m[w]),u&&c.getAttribute("morphNormal"+_)!==u[w]&&c.setAttribute("morphNormal"+_,u[w]),a[_]=E,v+=E):(m&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),u&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),a[_]=0)}const b=c.morphTargetsRelative?1:1-v;p.getUniforms().setValue(n,"morphTargetBaseInfluence",b),p.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:l}}function o0(n,e,t,i){let a=new WeakMap;function s(l){const d=i.render.frame,c=l.geometry,p=e.get(l,c);if(a.get(p)!==d&&(e.update(p),a.set(p,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==d&&(f.update(),a.set(f,d))}return p}function r(){a=new WeakMap}function o(l){const d=l.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:r}}class rd extends cn{constructor(e,t,i,a,s,r,o,l,d,c){if(c=c!==void 0?c:ki,c!==ki&&c!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ki&&(i=ai),i===void 0&&c===pa&&(i=Ai),super(null,a,s,r,o,l,c,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const od=new cn,ld=new rd(1,1);ld.compareFunction=Xc;const cd=new jc,dd=new Wu,ud=new id,Jl=[],Zl=[],Ql=new Float32Array(16),ec=new Float32Array(9),tc=new Float32Array(4);function ba(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=Jl[a];if(s===void 0&&(s=new Float32Array(a),Jl[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(s,o)}return s}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xs(n,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function l0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function c0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function u0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function p0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;tc.set(i),n.uniformMatrix2fv(this.addr,!1,tc),Ht(t,i)}}function h0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;ec.set(i),n.uniformMatrix3fv(this.addr,!1,ec),Ht(t,i)}}function f0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;Ql.set(i),n.uniformMatrix4fv(this.addr,!1,Ql),Ht(t,i)}}function m0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function b0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function v0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function M0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?ld:od;t.setTexture2D(e||s,a)}function S0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||dd,a)}function E0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||ud,a)}function T0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||cd,a)}function A0(n){switch(n){case 5126:return l0;case 35664:return c0;case 35665:return d0;case 35666:return u0;case 35674:return p0;case 35675:return h0;case 35676:return f0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return x0;case 35669:case 35673:return b0;case 5125:return v0;case 36294:return _0;case 36295:return y0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}function k0(n,e){n.uniform1fv(this.addr,e)}function L0(n,e){const t=ba(e,this.size,2);n.uniform2fv(this.addr,t)}function C0(n,e){const t=ba(e,this.size,3);n.uniform3fv(this.addr,t)}function R0(n,e){const t=ba(e,this.size,4);n.uniform4fv(this.addr,t)}function P0(n,e){const t=ba(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D0(n,e){const t=ba(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I0(n,e){const t=ba(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U0(n,e){n.uniform1iv(this.addr,e)}function N0(n,e){n.uniform2iv(this.addr,e)}function O0(n,e){n.uniform3iv(this.addr,e)}function z0(n,e){n.uniform4iv(this.addr,e)}function F0(n,e){n.uniform1uiv(this.addr,e)}function B0(n,e){n.uniform2uiv(this.addr,e)}function H0(n,e){n.uniform3uiv(this.addr,e)}function G0(n,e){n.uniform4uiv(this.addr,e)}function V0(n,e,t){const i=this.cache,a=e.length,s=Xs(t,a);Bt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||od,s[r])}function W0(n,e,t){const i=this.cache,a=e.length,s=Xs(t,a);Bt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||dd,s[r])}function X0(n,e,t){const i=this.cache,a=e.length,s=Xs(t,a);Bt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||ud,s[r])}function q0(n,e,t){const i=this.cache,a=e.length,s=Xs(t,a);Bt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||cd,s[r])}function $0(n){switch(n){case 5126:return k0;case 35664:return L0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return D0;case 35676:return I0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return O0;case 35669:case 35673:return z0;case 5125:return F0;case 36294:return B0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}class Y0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=A0(t.type)}}class j0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$0(t.type)}}class K0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],i)}}}const Dr=/(\w+)(\])?(\[|\.)?/g;function nc(n,e){n.seq.push(e),n.map[e.id]=e}function J0(n,e,t){const i=n.name,a=i.length;for(Dr.lastIndex=0;;){const s=Dr.exec(i),r=Dr.lastIndex;let o=s[1];const l=s[2]==="]",d=s[3];if(l&&(o=o|0),d===void 0||d==="["&&r+2===a){nc(t,d===void 0?new Y0(o,n,e):new j0(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new K0(o),nc(t,p)),t=p}}}class Ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);J0(s,r,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&i.push(r)}return i}}function ic(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Z0=37297;let Q0=0;function em(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}function tm(n){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(n);let i;switch(e===t?i="":e===Os&&t===Ns?i="LinearDisplayP3ToLinearSRGB":e===Ns&&t===Os&&(i="LinearSRGBToLinearDisplayP3"),n){case $n:case Gs:return[i,"LinearTransferOETF"];case Xt:case To:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ac(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+em(n.getShaderSource(e),r)}else return a}function nm(n,e){const t=tm(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function im(n,e){let t;switch(e){case fu:t="Linear";break;case mu:t="Reinhard";break;case gu:t="OptimizedCineon";break;case Uc:t="ACESFilmic";break;case bu:t="AgX";break;case xu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function am(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oa).join(`
`)}function sm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(oa).join(`
`)}function rm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function om(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),r=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function oa(n){return n!==""}function sc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(n){return n.replace(lm,dm)}const cm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dm(n,e){let t=et[e];if(t===void 0){const i=cm.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return go(t)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(n){return n.replace(um,pm)}function pm(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function lc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wo?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function fm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case da:case ua:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ua:e="ENVMAP_MODE_REFRACTION";break}return e}function gm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mo:e="ENVMAP_BLENDING_MULTIPLY";break;case pu:e="ENVMAP_BLENDING_MIX";break;case hu:e="ENVMAP_BLENDING_ADD";break}return e}function xm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bm(n,e,t,i){const a=n.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=hm(t),d=fm(t),c=mm(t),p=gm(t),f=xm(t),h=t.isWebGL2?"":am(t),g=sm(t),x=rm(s),m=a.createProgram();let u,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(oa).join(`
`),u.length>0&&(u+=`
`),v=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(oa).join(`
`),v.length>0&&(v+=`
`)):(u=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),v=[h,lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?et.tonemapping_pars_fragment:"",t.toneMapping!==oi?im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,nm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),r=go(r),r=sc(r,t),r=rc(r,t),o=go(o),o=sc(o,t),o=rc(o,t),r=oc(r),o=oc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=b+u+r,k=b+v+o,w=ic(a,a.VERTEX_SHADER,_),E=ic(a,a.FRAGMENT_SHADER,k);a.attachShader(m,w),a.attachShader(m,E),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function N(B){if(n.debug.checkShaderErrors){const Y=a.getProgramInfoLog(m).trim(),P=a.getShaderInfoLog(w).trim(),F=a.getShaderInfoLog(E).trim();let X=!0,ne=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,m,w,E);else{const $=ac(a,w,"vertex"),j=ac(a,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+$+`
`+j)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(P===""||F==="")&&(ne=!1);ne&&(B.diagnostics={runnable:X,programLog:Y,vertexShader:{log:P,prefix:u},fragmentShader:{log:F,prefix:v}})}a.deleteShader(w),a.deleteShader(E),M=new Ps(a,m),L=om(a,m)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let L;this.getAttributes=function(){return L===void 0&&N(this),L};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=a.getProgramParameter(m,Z0)),I},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=E,this}let vm=0;class _m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ym(e),t.set(e,i)),i}}class ym{constructor(e){this.id=vm++,this.code=e,this.usedTimes=0}}function wm(n,e,t,i,a,s,r){const o=new Jc,l=new _m,d=[],c=a.isWebGL2,p=a.logarithmicDepthBuffer,f=a.vertexTextures;let h=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,L,I,B,Y){const P=B.fog,F=Y.geometry,X=M.isMeshStandardMaterial?B.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),$=ne&&ne.mapping===Hs?ne.image.height:null,j=g[M.type];M.precision!==null&&(h=a.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,V=J!==void 0?J.length:0;let K=0;F.morphAttributes.position!==void 0&&(K=1),F.morphAttributes.normal!==void 0&&(K=2),F.morphAttributes.color!==void 0&&(K=3);let z,Q,ue,ke;if(j){const Ot=kn[j];z=Ot.vertexShader,Q=Ot.fragmentShader}else z=M.vertexShader,Q=M.fragmentShader,l.update(M),ue=l.getVertexShaderID(M),ke=l.getFragmentShaderID(M);const Te=n.getRenderTarget(),Ne=Y.isInstancedMesh===!0,We=Y.isBatchedMesh===!0,ze=!!M.map,st=!!M.matcap,D=!!ne,He=!!M.aoMap,be=!!M.lightMap,Re=!!M.bumpMap,Se=!!M.normalMap,_t=!!M.displacementMap,Ke=!!M.emissiveMap,A=!!M.metalnessMap,y=!!M.roughnessMap,H=M.anisotropy>0,le=M.clearcoat>0,re=M.iridescence>0,oe=M.sheen>0,Le=M.transmission>0,xe=H&&!!M.anisotropyMap,Ae=le&&!!M.clearcoatMap,Fe=le&&!!M.clearcoatNormalMap,Je=le&&!!M.clearcoatRoughnessMap,se=re&&!!M.iridescenceMap,ot=re&&!!M.iridescenceThicknessMap,tt=oe&&!!M.sheenColorMap,Xe=oe&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,ye=!!M.specularColorMap,Ge=!!M.specularIntensityMap,ct=Le&&!!M.transmissionMap,Mt=Le&&!!M.thicknessMap,je=!!M.gradientMap,pe=!!M.alphaMap,R=M.alphaTest>0,ge=!!M.alphaHash,fe=!!M.extensions,Ue=!!F.attributes.uv1,Ce=!!F.attributes.uv2,dt=!!F.attributes.uv3;let pt=oi;return M.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(pt=n.toneMapping),{isWebGL2:c,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:Q,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:ke,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:We,instancing:Ne,instancingColor:Ne&&Y.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Te===null?n.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:$n,map:ze,matcap:st,envMap:D,envMapMode:D&&ne.mapping,envMapCubeUVHeight:$,aoMap:He,lightMap:be,bumpMap:Re,normalMap:Se,displacementMap:f&&_t,emissiveMap:Ke,normalMapObjectSpace:Se&&M.normalMapType===Cu,normalMapTangentSpace:Se&&M.normalMapType===Eo,metalnessMap:A,roughnessMap:y,anisotropy:H,anisotropyMap:xe,clearcoat:le,clearcoatMap:Ae,clearcoatNormalMap:Fe,clearcoatRoughnessMap:Je,iridescence:re,iridescenceMap:se,iridescenceThicknessMap:ot,sheen:oe,sheenColorMap:tt,sheenRoughnessMap:Xe,specularMap:Ie,specularColorMap:ye,specularIntensityMap:Ge,transmission:Le,transmissionMap:ct,thicknessMap:Mt,gradientMap:je,opaque:M.transparent===!1&&M.blending===la,alphaMap:pe,alphaTest:R,alphaHash:ge,combine:M.combine,mapUv:ze&&x(M.map.channel),aoMapUv:He&&x(M.aoMap.channel),lightMapUv:be&&x(M.lightMap.channel),bumpMapUv:Re&&x(M.bumpMap.channel),normalMapUv:Se&&x(M.normalMap.channel),displacementMapUv:_t&&x(M.displacementMap.channel),emissiveMapUv:Ke&&x(M.emissiveMap.channel),metalnessMapUv:A&&x(M.metalnessMap.channel),roughnessMapUv:y&&x(M.roughnessMap.channel),anisotropyMapUv:xe&&x(M.anisotropyMap.channel),clearcoatMapUv:Ae&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&x(M.sheenRoughnessMap.channel),specularMapUv:Ie&&x(M.specularMap.channel),specularColorMapUv:ye&&x(M.specularColorMap.channel),specularIntensityMapUv:Ge&&x(M.specularIntensityMap.channel),transmissionMapUv:ct&&x(M.transmissionMap.channel),thicknessMapUv:Mt&&x(M.thicknessMap.channel),alphaMapUv:pe&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Se||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Ce,vertexUv3s:dt,pointsUvs:Y.isPoints===!0&&!!F.attributes.uv&&(ze||pe),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:Y.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:K,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&xt.getTransfer(M.map.colorSpace)===wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zt,flipSided:M.side===Qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:fe&&M.extensions.derivatives===!0,extensionFragDepth:fe&&M.extensions.fragDepth===!0,extensionDrawBuffers:fe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)L.push(I),L.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(v(L,M),b(L,M),L.push(n.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function v(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function b(M,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.matcap&&o.enable(4),L.envMap&&o.enable(5),L.normalMapObjectSpace&&o.enable(6),L.normalMapTangentSpace&&o.enable(7),L.clearcoat&&o.enable(8),L.iridescence&&o.enable(9),L.alphaTest&&o.enable(10),L.vertexColors&&o.enable(11),L.vertexAlphas&&o.enable(12),L.vertexUv1s&&o.enable(13),L.vertexUv2s&&o.enable(14),L.vertexUv3s&&o.enable(15),L.vertexTangents&&o.enable(16),L.anisotropy&&o.enable(17),L.alphaHash&&o.enable(18),L.batching&&o.enable(19),M.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.useLegacyLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function _(M){const L=g[M.type];let I;if(L){const B=kn[L];I=ip.clone(B.uniforms)}else I=M.uniforms;return I}function k(M,L){let I;for(let B=0,Y=d.length;B<Y;B++){const P=d[B];if(P.cacheKey===L){I=P,++I.usedTimes;break}}return I===void 0&&(I=new bm(n,L,M,s),d.push(I)),I}function w(M){if(--M.usedTimes===0){const L=d.indexOf(M);d[L]=d[d.length-1],d.pop(),M.destroy()}}function E(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:k,releaseProgram:w,releaseShaderCache:E,programs:d,dispose:N}}function Mm(){let n=new WeakMap;function e(s){let r=n.get(s);return r===void 0&&(r={},n.set(s,r)),r}function t(s){n.delete(s)}function i(s,r,o){n.get(s)[r]=o}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function Sm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dc(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function r(p,f,h,g,x,m){let u=n[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:h,groupOrder:g,renderOrder:p.renderOrder,z:x,group:m},n[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=h,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=x,u.group=m),e++,u}function o(p,f,h,g,x,m){const u=r(p,f,h,g,x,m);h.transmission>0?i.push(u):h.transparent===!0?a.push(u):t.push(u)}function l(p,f,h,g,x,m){const u=r(p,f,h,g,x,m);h.transmission>0?i.unshift(u):h.transparent===!0?a.unshift(u):t.unshift(u)}function d(p,f){t.length>1&&t.sort(p||Sm),i.length>1&&i.sort(f||cc),a.length>1&&a.sort(f||cc)}function c(){for(let p=e,f=n.length;p<f;p++){const h=n[p];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:c,sort:d}}function Em(){let n=new WeakMap;function e(i,a){const s=n.get(i);let r;return s===void 0?(r=new dc,n.set(i,[r])):a>=s.length?(r=new dc,s.push(r)):r=s[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new $e};break;case"SpotLight":t={position:new T,direction:new T,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=t,t}}}function Am(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let km=0;function Lm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Cm(n,e){const t=new Tm,i=Am(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)a.probe.push(new T);const s=new T,r=new At,o=new At;function l(c,p){let f=0,h=0,g=0;for(let B=0;B<9;B++)a.probe[B].set(0,0,0);let x=0,m=0,u=0,v=0,b=0,_=0,k=0,w=0,E=0,N=0,M=0;c.sort(Lm);const L=p===!0?Math.PI:1;for(let B=0,Y=c.length;B<Y;B++){const P=c[B],F=P.color,X=P.intensity,ne=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*X*L,h+=F.g*X*L,g+=F.b*X*L;else if(P.isLightProbe){for(let j=0;j<9;j++)a.probe[j].addScaledVector(P.sh.coefficients[j],X);M++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*L),P.castShadow){const J=P.shadow,V=i.get(P);V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,a.directionalShadow[x]=V,a.directionalShadowMap[x]=$,a.directionalShadowMatrix[x]=P.shadow.matrix,_++}a.directional[x]=j,x++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(F).multiplyScalar(X*L),j.distance=ne,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,a.spot[u]=j;const J=P.shadow;if(P.map&&(a.spotLightMap[E]=P.map,E++,J.updateMatrices(P),P.castShadow&&N++),a.spotLightMatrix[u]=J.matrix,P.castShadow){const V=i.get(P);V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,a.spotShadow[u]=V,a.spotShadowMap[u]=$,w++}u++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(F).multiplyScalar(X),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),a.rectArea[v]=j,v++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*L),j.distance=P.distance,j.decay=P.decay,P.castShadow){const J=P.shadow,V=i.get(P);V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,a.pointShadow[m]=V,a.pointShadowMap[m]=$,a.pointShadowMatrix[m]=P.shadow.matrix,k++}a.point[m]=j,m++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(X*L),j.groundColor.copy(P.groundColor).multiplyScalar(X*L),a.hemi[b]=j,b++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=me.LTC_FLOAT_1,a.rectAreaLTC2=me.LTC_FLOAT_2):(a.rectAreaLTC1=me.LTC_HALF_1,a.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=me.LTC_FLOAT_1,a.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=me.LTC_HALF_1,a.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=f,a.ambient[1]=h,a.ambient[2]=g;const I=a.hash;(I.directionalLength!==x||I.pointLength!==m||I.spotLength!==u||I.rectAreaLength!==v||I.hemiLength!==b||I.numDirectionalShadows!==_||I.numPointShadows!==k||I.numSpotShadows!==w||I.numSpotMaps!==E||I.numLightProbes!==M)&&(a.directional.length=x,a.spot.length=u,a.rectArea.length=v,a.point.length=m,a.hemi.length=b,a.directionalShadow.length=_,a.directionalShadowMap.length=_,a.pointShadow.length=k,a.pointShadowMap.length=k,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=_,a.pointShadowMatrix.length=k,a.spotLightMatrix.length=w+E-N,a.spotLightMap.length=E,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=M,I.directionalLength=x,I.pointLength=m,I.spotLength=u,I.rectAreaLength=v,I.hemiLength=b,I.numDirectionalShadows=_,I.numPointShadows=k,I.numSpotShadows=w,I.numSpotMaps=E,I.numLightProbes=M,a.version=km++)}function d(c,p){let f=0,h=0,g=0,x=0,m=0;const u=p.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){const _=c[v];if(_.isDirectionalLight){const k=a.directional[f];k.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),k.direction.sub(s),k.direction.transformDirection(u),f++}else if(_.isSpotLight){const k=a.spot[g];k.position.setFromMatrixPosition(_.matrixWorld),k.position.applyMatrix4(u),k.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),k.direction.sub(s),k.direction.transformDirection(u),g++}else if(_.isRectAreaLight){const k=a.rectArea[x];k.position.setFromMatrixPosition(_.matrixWorld),k.position.applyMatrix4(u),o.identity(),r.copy(_.matrixWorld),r.premultiply(u),o.extractRotation(r),k.halfWidth.set(_.width*.5,0,0),k.halfHeight.set(0,_.height*.5,0),k.halfWidth.applyMatrix4(o),k.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const k=a.point[h];k.position.setFromMatrixPosition(_.matrixWorld),k.position.applyMatrix4(u),h++}else if(_.isHemisphereLight){const k=a.hemi[m];k.direction.setFromMatrixPosition(_.matrixWorld),k.direction.transformDirection(u),m++}}}return{setup:l,setupView:d,state:a}}function uc(n,e){const t=new Cm(n,e),i=[],a=[];function s(){i.length=0,a.length=0}function r(p){i.push(p)}function o(p){a.push(p)}function l(p){t.setup(i,p)}function d(p){t.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:l,setupLightsView:d,pushLight:r,pushShadow:o}}function Rm(n,e){let t=new WeakMap;function i(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new uc(n,e),t.set(s,[l])):r>=o.length?(l=new uc(n,e),o.push(l)):l=o[r],l}function a(){t=new WeakMap}return{get:i,dispose:a}}class Pm extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dm extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
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
}`;function Nm(n,e,t){let i=new Ao;const a=new _e,s=new _e,r=new St,o=new Pm({depthPacking:Lu}),l=new Dm,d={},c=t.maxTextureSize,p={[ui]:Qt,[Qt]:ui,[zt]:zt},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Im,fragmentShader:Um}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new C(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let u=this.type;this.render=function(w,E,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),L=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ri),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Y=u!==Bn&&this.type===Bn,P=u===Bn&&this.type!==Bn;for(let F=0,X=w.length;F<X;F++){const ne=w[F],$=ne.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const j=$.getFrameExtents();if(a.multiply(j),s.copy($.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(s.x=Math.floor(c/j.x),a.x=s.x*j.x,$.mapSize.x=s.x),a.y>c&&(s.y=Math.floor(c/j.y),a.y=s.y*j.y,$.mapSize.y=s.y)),$.map===null||Y===!0||P===!0){const V=this.type!==Bn?{minFilter:sn,magFilter:sn}:{};$.map!==null&&$.map.dispose(),$.map=new Ci(a.x,a.y,V),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const J=$.getViewportCount();for(let V=0;V<J;V++){const K=$.getViewport(V);r.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),B.viewport(r),$.updateMatrices(ne,V),i=$.getFrustum(),_(E,N,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===Bn&&v($,N),$.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(M,L,I)};function v(w,E){const N=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ci(a.x,a.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,N,f,x,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,N,h,x,null)}function b(w,E,N,M){let L=null;const I=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)L=I;else if(L=N.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=L.uuid,Y=E.uuid;let P=d[B];P===void 0&&(P={},d[B]=P);let F=P[Y];F===void 0&&(F=L.clone(),P[Y]=F,E.addEventListener("dispose",k)),L=F}if(L.visible=E.visible,L.wireframe=E.wireframe,M===Bn?L.side=E.shadowSide!==null?E.shadowSide:E.side:L.side=E.shadowSide!==null?E.shadowSide:p[E.side],L.alphaMap=E.alphaMap,L.alphaTest=E.alphaTest,L.map=E.map,L.clipShadows=E.clipShadows,L.clippingPlanes=E.clippingPlanes,L.clipIntersection=E.clipIntersection,L.displacementMap=E.displacementMap,L.displacementScale=E.displacementScale,L.displacementBias=E.displacementBias,L.wireframeLinewidth=E.wireframeLinewidth,L.linewidth=E.linewidth,N.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=n.properties.get(L);B.light=N}return L}function _(w,E,N,M,L){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Bn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const Y=e.update(w),P=w.material;if(Array.isArray(P)){const F=Y.groups;for(let X=0,ne=F.length;X<ne;X++){const $=F[X],j=P[$.materialIndex];if(j&&j.visible){const J=b(w,j,M,L);w.onBeforeShadow(n,w,E,N,Y,J,$),n.renderBufferDirect(N,null,Y,J,w,$),w.onAfterShadow(n,w,E,N,Y,J,$)}}}else if(P.visible){const F=b(w,P,M,L);w.onBeforeShadow(n,w,E,N,Y,F,null),n.renderBufferDirect(N,null,Y,F,w,null),w.onAfterShadow(n,w,E,N,Y,F,null)}}const B=w.children;for(let Y=0,P=B.length;Y<P;Y++)_(B[Y],E,N,M,L)}function k(w){w.target.removeEventListener("dispose",k);for(const N in d){const M=d[N],L=w.target.uuid;L in M&&(M[L].dispose(),delete M[L])}}}function Om(n,e,t){const i=t.isWebGL2;function a(){let R=!1;const ge=new St;let fe=null;const Ue=new St(0,0,0,0);return{setMask:function(Ce){fe!==Ce&&!R&&(n.colorMask(Ce,Ce,Ce,Ce),fe=Ce)},setLocked:function(Ce){R=Ce},setClear:function(Ce,dt,pt,Rt,Ot){Ot===!0&&(Ce*=Rt,dt*=Rt,pt*=Rt),ge.set(Ce,dt,pt,Rt),Ue.equals(ge)===!1&&(n.clearColor(Ce,dt,pt,Rt),Ue.copy(ge))},reset:function(){R=!1,fe=null,Ue.set(-1,0,0,0)}}}function s(){let R=!1,ge=null,fe=null,Ue=null;return{setTest:function(Ce){Ce?We(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(Ce){ge!==Ce&&!R&&(n.depthMask(Ce),ge=Ce)},setFunc:function(Ce){if(fe!==Ce){switch(Ce){case su:n.depthFunc(n.NEVER);break;case ru:n.depthFunc(n.ALWAYS);break;case ou:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case lu:n.depthFunc(n.EQUAL);break;case cu:n.depthFunc(n.GEQUAL);break;case du:n.depthFunc(n.GREATER);break;case uu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=Ce}},setLocked:function(Ce){R=Ce},setClear:function(Ce){Ue!==Ce&&(n.clearDepth(Ce),Ue=Ce)},reset:function(){R=!1,ge=null,fe=null,Ue=null}}}function r(){let R=!1,ge=null,fe=null,Ue=null,Ce=null,dt=null,pt=null,Rt=null,Ot=null;return{setTest:function(mt){R||(mt?We(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(mt){ge!==mt&&!R&&(n.stencilMask(mt),ge=mt)},setFunc:function(mt,Pt,jt){(fe!==mt||Ue!==Pt||Ce!==jt)&&(n.stencilFunc(mt,Pt,jt),fe=mt,Ue=Pt,Ce=jt)},setOp:function(mt,Pt,jt){(dt!==mt||pt!==Pt||Rt!==jt)&&(n.stencilOp(mt,Pt,jt),dt=mt,pt=Pt,Rt=jt)},setLocked:function(mt){R=mt},setClear:function(mt){Ot!==mt&&(n.clearStencil(mt),Ot=mt)},reset:function(){R=!1,ge=null,fe=null,Ue=null,Ce=null,dt=null,pt=null,Rt=null,Ot=null}}}const o=new a,l=new s,d=new r,c=new WeakMap,p=new WeakMap;let f={},h={},g=new WeakMap,x=[],m=null,u=!1,v=null,b=null,_=null,k=null,w=null,E=null,N=null,M=new $e(0,0,0),L=0,I=!1,B=null,Y=null,P=null,F=null,X=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,j=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=j>=1):J.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=j>=2);let V=null,K={};const z=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),ue=new St().fromArray(z),ke=new St().fromArray(Q);function Te(R,ge,fe,Ue){const Ce=new Uint8Array(4),dt=n.createTexture();n.bindTexture(R,dt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pt=0;pt<fe;pt++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(ge,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(ge+pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return dt}const Ne={};Ne[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),d.setClear(0),We(n.DEPTH_TEST),l.setFunc(Is),Ke(!1),A($o),We(n.CULL_FACE),Se(ri);function We(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function ze(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function st(R,ge){return h[R]!==ge?(n.bindFramebuffer(R,ge),h[R]=ge,i&&(R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ge),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ge)),!0):!1}function D(R,ge){let fe=x,Ue=!1;if(R)if(fe=g.get(ge),fe===void 0&&(fe=[],g.set(ge,fe)),R.isWebGLMultipleRenderTargets){const Ce=R.texture;if(fe.length!==Ce.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,pt=Ce.length;dt<pt;dt++)fe[dt]=n.COLOR_ATTACHMENT0+dt;fe.length=Ce.length,Ue=!0}}else fe[0]!==n.COLOR_ATTACHMENT0&&(fe[0]=n.COLOR_ATTACHMENT0,Ue=!0);else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ue=!0);Ue&&(t.isWebGL2?n.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function He(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const be={[Ei]:n.FUNC_ADD,[Wd]:n.FUNC_SUBTRACT,[Xd]:n.FUNC_REVERSE_SUBTRACT};if(i)be[Jo]=n.MIN,be[Zo]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(be[Jo]=R.MIN_EXT,be[Zo]=R.MAX_EXT)}const Re={[qd]:n.ZERO,[$d]:n.ONE,[Yd]:n.SRC_COLOR,[so]:n.SRC_ALPHA,[eu]:n.SRC_ALPHA_SATURATE,[Zd]:n.DST_COLOR,[Kd]:n.DST_ALPHA,[jd]:n.ONE_MINUS_SRC_COLOR,[ro]:n.ONE_MINUS_SRC_ALPHA,[Qd]:n.ONE_MINUS_DST_COLOR,[Jd]:n.ONE_MINUS_DST_ALPHA,[tu]:n.CONSTANT_COLOR,[nu]:n.ONE_MINUS_CONSTANT_COLOR,[iu]:n.CONSTANT_ALPHA,[au]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(R,ge,fe,Ue,Ce,dt,pt,Rt,Ot,mt){if(R===ri){u===!0&&(ze(n.BLEND),u=!1);return}if(u===!1&&(We(n.BLEND),u=!0),R!==Vd){if(R!==v||mt!==I){if((b!==Ei||w!==Ei)&&(n.blendEquation(n.FUNC_ADD),b=Ei,w=Ei),mt)switch(R){case la:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yo:n.blendFunc(n.ONE,n.ONE);break;case jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ko:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case la:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ko:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}_=null,k=null,E=null,N=null,M.set(0,0,0),L=0,v=R,I=mt}return}Ce=Ce||ge,dt=dt||fe,pt=pt||Ue,(ge!==b||Ce!==w)&&(n.blendEquationSeparate(be[ge],be[Ce]),b=ge,w=Ce),(fe!==_||Ue!==k||dt!==E||pt!==N)&&(n.blendFuncSeparate(Re[fe],Re[Ue],Re[dt],Re[pt]),_=fe,k=Ue,E=dt,N=pt),(Rt.equals(M)===!1||Ot!==L)&&(n.blendColor(Rt.r,Rt.g,Rt.b,Ot),M.copy(Rt),L=Ot),v=R,I=!1}function _t(R,ge){R.side===zt?ze(n.CULL_FACE):We(n.CULL_FACE);let fe=R.side===Qt;ge&&(fe=!fe),Ke(fe),R.blending===la&&R.transparent===!1?Se(ri):Se(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Ue=R.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(R.stencilWriteMask),d.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),d.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),H(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?We(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(R){B!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),B=R)}function A(R){R!==Hd?(We(n.CULL_FACE),R!==Y&&(R===$o?n.cullFace(n.BACK):R===Gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),Y=R}function y(R){R!==P&&($&&n.lineWidth(R),P=R)}function H(R,ge,fe){R?(We(n.POLYGON_OFFSET_FILL),(F!==ge||X!==fe)&&(n.polygonOffset(ge,fe),F=ge,X=fe)):ze(n.POLYGON_OFFSET_FILL)}function le(R){R?We(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function re(R){R===void 0&&(R=n.TEXTURE0+ne-1),V!==R&&(n.activeTexture(R),V=R)}function oe(R,ge,fe){fe===void 0&&(V===null?fe=n.TEXTURE0+ne-1:fe=V);let Ue=K[fe];Ue===void 0&&(Ue={type:void 0,texture:void 0},K[fe]=Ue),(Ue.type!==R||Ue.texture!==ge)&&(V!==fe&&(n.activeTexture(fe),V=fe),n.bindTexture(R,ge||Ne[R]),Ue.type=R,Ue.texture=ge)}function Le(){const R=K[V];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Je(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function tt(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xe(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ge(R){ue.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),ue.copy(R))}function ct(R){ke.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ke.copy(R))}function Mt(R,ge){let fe=p.get(ge);fe===void 0&&(fe=new WeakMap,p.set(ge,fe));let Ue=fe.get(R);Ue===void 0&&(Ue=n.getUniformBlockIndex(ge,R.name),fe.set(R,Ue))}function je(R,ge){const Ue=p.get(ge).get(R);c.get(ge)!==Ue&&(n.uniformBlockBinding(ge,Ue,R.__bindingPointIndex),c.set(ge,Ue))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},V=null,K={},h={},g=new WeakMap,x=[],m=null,u=!1,v=null,b=null,_=null,k=null,w=null,E=null,N=null,M=new $e(0,0,0),L=0,I=!1,B=null,Y=null,P=null,F=null,X=null,ue.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),d.reset()}return{buffers:{color:o,depth:l,stencil:d},enable:We,disable:ze,bindFramebuffer:st,drawBuffers:D,useProgram:He,setBlending:Se,setMaterial:_t,setFlipSided:Ke,setCullFace:A,setLineWidth:y,setPolygonOffset:H,setScissorTest:le,activeTexture:re,bindTexture:oe,unbindTexture:Le,compressedTexImage2D:xe,compressedTexImage3D:Ae,texImage2D:Ie,texImage3D:ye,updateUBOMapping:Mt,uniformBlockBinding:je,texStorage2D:tt,texStorage3D:Xe,texSubImage2D:Fe,texSubImage3D:Je,compressedTexSubImage2D:se,compressedTexSubImage3D:ot,scissor:Ge,viewport:ct,reset:pe}}function zm(n,e,t,i,a,s,r){const o=a.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let p;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return h?new OffscreenCanvas(A,y):Fs("canvas")}function x(A,y,H,le){let re=1;if((A.width>le||A.height>le)&&(re=le/Math.max(A.width,A.height)),re<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const oe=y?mo:Math.floor,Le=oe(re*A.width),xe=oe(re*A.height);p===void 0&&(p=g(Le,xe));const Ae=H?g(Le,xe):p;return Ae.width=Le,Ae.height=xe,Ae.getContext("2d").drawImage(A,0,0,Le,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Le+"x"+xe+")."),Ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Al(A.width)&&Al(A.height)}function u(A){return o?!1:A.wrapS!==Sn||A.wrapT!==Sn||A.minFilter!==sn&&A.minFilter!==mn}function v(A,y){return A.generateMipmaps&&y&&A.minFilter!==sn&&A.minFilter!==mn}function b(A){n.generateMipmap(A)}function _(A,y,H,le,re=!1){if(o===!1)return y;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=y;if(y===n.RED&&(H===n.FLOAT&&(oe=n.R32F),H===n.HALF_FLOAT&&(oe=n.R16F),H===n.UNSIGNED_BYTE&&(oe=n.R8)),y===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(oe=n.R8UI),H===n.UNSIGNED_SHORT&&(oe=n.R16UI),H===n.UNSIGNED_INT&&(oe=n.R32UI),H===n.BYTE&&(oe=n.R8I),H===n.SHORT&&(oe=n.R16I),H===n.INT&&(oe=n.R32I)),y===n.RG&&(H===n.FLOAT&&(oe=n.RG32F),H===n.HALF_FLOAT&&(oe=n.RG16F),H===n.UNSIGNED_BYTE&&(oe=n.RG8)),y===n.RGBA){const Le=re?Us:xt.getTransfer(le);H===n.FLOAT&&(oe=n.RGBA32F),H===n.HALF_FLOAT&&(oe=n.RGBA16F),H===n.UNSIGNED_BYTE&&(oe=Le===wt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function k(A,y,H){return v(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function w(A){return A===sn||A===Qo||A===ar?n.NEAREST:n.LINEAR}function E(A){const y=A.target;y.removeEventListener("dispose",E),M(y),y.isVideoTexture&&c.delete(y)}function N(A){const y=A.target;y.removeEventListener("dispose",N),I(y)}function M(A){const y=i.get(A);if(y.__webglInit===void 0)return;const H=A.source,le=f.get(H);if(le){const re=le[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&L(A),Object.keys(le).length===0&&f.delete(H)}i.remove(A)}function L(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const H=A.source,le=f.get(H);delete le[y.__cacheKey],r.memory.textures--}function I(A){const y=A.texture,H=i.get(A),le=i.get(y);if(le.__webglTexture!==void 0&&(n.deleteTexture(le.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(H.__webglFramebuffer[re]))for(let oe=0;oe<H.__webglFramebuffer[re].length;oe++)n.deleteFramebuffer(H.__webglFramebuffer[re][oe]);else n.deleteFramebuffer(H.__webglFramebuffer[re]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[re])}else{if(Array.isArray(H.__webglFramebuffer))for(let re=0;re<H.__webglFramebuffer.length;re++)n.deleteFramebuffer(H.__webglFramebuffer[re]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let re=0;re<H.__webglColorRenderbuffer.length;re++)H.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[re]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let re=0,oe=y.length;re<oe;re++){const Le=i.get(y[re]);Le.__webglTexture&&(n.deleteTexture(Le.__webglTexture),r.memory.textures--),i.remove(y[re])}i.remove(y),i.remove(A)}let B=0;function Y(){B=0}function P(){const A=B;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),B+=1,A}function F(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){const H=i.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const le=A.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,A,y);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+y)}function ne(A,y){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ue(H,A,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+y)}function $(A,y){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ue(H,A,y);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+y)}function j(A,y){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ke(H,A,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+y)}const J={[co]:n.REPEAT,[Sn]:n.CLAMP_TO_EDGE,[uo]:n.MIRRORED_REPEAT},V={[sn]:n.NEAREST,[Qo]:n.NEAREST_MIPMAP_NEAREST,[ar]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[vu]:n.LINEAR_MIPMAP_NEAREST,[Wa]:n.LINEAR_MIPMAP_LINEAR},K={[Ru]:n.NEVER,[Ou]:n.ALWAYS,[Pu]:n.LESS,[Xc]:n.LEQUAL,[Du]:n.EQUAL,[Nu]:n.GEQUAL,[Iu]:n.GREATER,[Uu]:n.NOTEQUAL};function z(A,y,H){if(H?(n.texParameteri(A,n.TEXTURE_WRAP_S,J[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,J[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,J[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,V[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,V[y.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Sn||y.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,w(y.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,w(y.minFilter)),y.minFilter!==sn&&y.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,K[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===sn||y.minFilter!==ar&&y.minFilter!==Wa||y.type===si&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Xa&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(A,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function Q(A,y){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",E));const le=y.source;let re=f.get(le);re===void 0&&(re={},f.set(le,re));const oe=F(y);if(oe!==A.__cacheKey){re[oe]===void 0&&(re[oe]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,H=!0),re[oe].usedTimes++;const Le=re[A.__cacheKey];Le!==void 0&&(re[A.__cacheKey].usedTimes--,Le.usedTimes===0&&L(y)),A.__cacheKey=oe,A.__webglTexture=re[oe].texture}return H}function ue(A,y,H){let le=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(le=n.TEXTURE_3D);const re=Q(A,y),oe=y.source;t.bindTexture(le,A.__webglTexture,n.TEXTURE0+H);const Le=i.get(oe);if(oe.version!==Le.__version||re===!0){t.activeTexture(n.TEXTURE0+H);const xe=xt.getPrimaries(xt.workingColorSpace),Ae=y.colorSpace===bn?null:xt.getPrimaries(y.colorSpace),Fe=y.colorSpace===bn||xe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Je=u(y)&&m(y.image)===!1;let se=x(y.image,Je,!1,a.maxTextureSize);se=Ke(y,se);const ot=m(se)||o,tt=s.convert(y.format,y.colorSpace);let Xe=s.convert(y.type),Ie=_(y.internalFormat,tt,Xe,y.colorSpace,y.isVideoTexture);z(le,y,ot);let ye;const Ge=y.mipmaps,ct=o&&y.isVideoTexture!==!0&&Ie!==Vc,Mt=Le.__version===void 0||re===!0,je=k(y,se,ot);if(y.isDepthTexture)Ie=n.DEPTH_COMPONENT,o?y.type===si?Ie=n.DEPTH_COMPONENT32F:y.type===ai?Ie=n.DEPTH_COMPONENT24:y.type===Ai?Ie=n.DEPTH24_STENCIL8:Ie=n.DEPTH_COMPONENT16:y.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ki&&Ie===n.DEPTH_COMPONENT&&y.type!==So&&y.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ai,Xe=s.convert(y.type)),y.format===pa&&Ie===n.DEPTH_COMPONENT&&(Ie=n.DEPTH_STENCIL,y.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ai,Xe=s.convert(y.type))),Mt&&(ct?t.texStorage2D(n.TEXTURE_2D,1,Ie,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ie,se.width,se.height,0,tt,Xe,null));else if(y.isDataTexture)if(Ge.length>0&&ot){ct&&Mt&&t.texStorage2D(n.TEXTURE_2D,je,Ie,Ge[0].width,Ge[0].height);for(let pe=0,R=Ge.length;pe<R;pe++)ye=Ge[pe],ct?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ye.width,ye.height,tt,Xe,ye.data):t.texImage2D(n.TEXTURE_2D,pe,Ie,ye.width,ye.height,0,tt,Xe,ye.data);y.generateMipmaps=!1}else ct?(Mt&&t.texStorage2D(n.TEXTURE_2D,je,Ie,se.width,se.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,tt,Xe,se.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,se.width,se.height,0,tt,Xe,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ct&&Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ie,Ge[0].width,Ge[0].height,se.depth);for(let pe=0,R=Ge.length;pe<R;pe++)ye=Ge[pe],y.format!==En?tt!==null?ct?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ye.width,ye.height,se.depth,tt,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Ie,ye.width,ye.height,se.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ye.width,ye.height,se.depth,tt,Xe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Ie,ye.width,ye.height,se.depth,0,tt,Xe,ye.data)}else{ct&&Mt&&t.texStorage2D(n.TEXTURE_2D,je,Ie,Ge[0].width,Ge[0].height);for(let pe=0,R=Ge.length;pe<R;pe++)ye=Ge[pe],y.format!==En?tt!==null?ct?t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,ye.width,ye.height,tt,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ye.width,ye.height,tt,Xe,ye.data):t.texImage2D(n.TEXTURE_2D,pe,Ie,ye.width,ye.height,0,tt,Xe,ye.data)}else if(y.isDataArrayTexture)ct?(Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ie,se.width,se.height,se.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,tt,Xe,se.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,tt,Xe,se.data);else if(y.isData3DTexture)ct?(Mt&&t.texStorage3D(n.TEXTURE_3D,je,Ie,se.width,se.height,se.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,tt,Xe,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,tt,Xe,se.data);else if(y.isFramebufferTexture){if(Mt)if(ct)t.texStorage2D(n.TEXTURE_2D,je,Ie,se.width,se.height);else{let pe=se.width,R=se.height;for(let ge=0;ge<je;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ie,pe,R,0,tt,Xe,null),pe>>=1,R>>=1}}else if(Ge.length>0&&ot){ct&&Mt&&t.texStorage2D(n.TEXTURE_2D,je,Ie,Ge[0].width,Ge[0].height);for(let pe=0,R=Ge.length;pe<R;pe++)ye=Ge[pe],ct?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,tt,Xe,ye):t.texImage2D(n.TEXTURE_2D,pe,Ie,tt,Xe,ye);y.generateMipmaps=!1}else ct?(Mt&&t.texStorage2D(n.TEXTURE_2D,je,Ie,se.width,se.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,tt,Xe,se)):t.texImage2D(n.TEXTURE_2D,0,Ie,tt,Xe,se);v(y,ot)&&b(le),Le.__version=oe.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ke(A,y,H){if(y.image.length!==6)return;const le=Q(A,y),re=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);const oe=i.get(re);if(re.version!==oe.__version||le===!0){t.activeTexture(n.TEXTURE0+H);const Le=xt.getPrimaries(xt.workingColorSpace),xe=y.colorSpace===bn?null:xt.getPrimaries(y.colorSpace),Ae=y.colorSpace===bn||Le===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Je=y.image[0]&&y.image[0].isDataTexture,se=[];for(let pe=0;pe<6;pe++)!Fe&&!Je?se[pe]=x(y.image[pe],!1,!0,a.maxCubemapSize):se[pe]=Je?y.image[pe].image:y.image[pe],se[pe]=Ke(y,se[pe]);const ot=se[0],tt=m(ot)||o,Xe=s.convert(y.format,y.colorSpace),Ie=s.convert(y.type),ye=_(y.internalFormat,Xe,Ie,y.colorSpace),Ge=o&&y.isVideoTexture!==!0,ct=oe.__version===void 0||le===!0;let Mt=k(y,ot,tt);z(n.TEXTURE_CUBE_MAP,y,tt);let je;if(Fe){Ge&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,ye,ot.width,ot.height);for(let pe=0;pe<6;pe++){je=se[pe].mipmaps;for(let R=0;R<je.length;R++){const ge=je[R];y.format!==En?Xe!==null?Ge?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,R,0,0,ge.width,ge.height,Xe,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,R,ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,R,0,0,ge.width,ge.height,Xe,Ie,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,R,ye,ge.width,ge.height,0,Xe,Ie,ge.data)}}}else{je=y.mipmaps,Ge&&ct&&(je.length>0&&Mt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,ye,se[0].width,se[0].height));for(let pe=0;pe<6;pe++)if(Je){Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,se[pe].width,se[pe].height,Xe,Ie,se[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ye,se[pe].width,se[pe].height,0,Xe,Ie,se[pe].data);for(let R=0;R<je.length;R++){const fe=je[R].image[pe].image;Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,R+1,0,0,fe.width,fe.height,Xe,Ie,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,R+1,ye,fe.width,fe.height,0,Xe,Ie,fe.data)}}else{Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Xe,Ie,se[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ye,Xe,Ie,se[pe]);for(let R=0;R<je.length;R++){const ge=je[R];Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,R+1,0,0,Xe,Ie,ge.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,R+1,ye,Xe,Ie,ge.image[pe])}}}v(y,tt)&&b(n.TEXTURE_CUBE_MAP),oe.__version=re.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Te(A,y,H,le,re,oe){const Le=s.convert(H.format,H.colorSpace),xe=s.convert(H.type),Ae=_(H.internalFormat,Le,xe,H.colorSpace);if(!i.get(y).__hasExternalTextures){const Je=Math.max(1,y.width>>oe),se=Math.max(1,y.height>>oe);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,oe,Ae,Je,se,y.depth,0,Le,xe,null):t.texImage2D(re,oe,Ae,Je,se,0,Le,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Se(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,re,i.get(H).__webglTexture,0,Re(y)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,re,i.get(H).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(A,y,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let le=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||Se(y)){const re=y.depthTexture;re&&re.isDepthTexture&&(re.type===si?le=n.DEPTH_COMPONENT32F:re.type===ai&&(le=n.DEPTH_COMPONENT24));const oe=Re(y);Se(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,le,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,le,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const le=Re(y);H&&Se(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,y.width,y.height):Se(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const le=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let re=0;re<le.length;re++){const oe=le[re],Le=s.convert(oe.format,oe.colorSpace),xe=s.convert(oe.type),Ae=_(oe.internalFormat,Le,xe,oe.colorSpace),Fe=Re(y);H&&Se(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ae,y.width,y.height):Se(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Ae,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const le=i.get(y.depthTexture).__webglTexture,re=Re(y);if(y.depthTexture.format===ki)Se(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(y.depthTexture.format===pa)Se(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ze(A){const y=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");We(y.__webglFramebuffer,A)}else if(H){y.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[le]),y.__webglDepthbuffer[le]=n.createRenderbuffer(),Ne(y.__webglDepthbuffer[le],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Ne(y.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(A,y,H){const le=i.get(A);y!==void 0&&Te(le.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ze(A)}function D(A){const y=A.texture,H=i.get(A),le=i.get(y);A.addEventListener("dispose",N),A.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=y.version,r.memory.textures++);const re=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,Le=m(A)||o;if(re){H.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(o&&y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<y.mipmaps.length;Ae++)H.__webglFramebuffer[xe][Ae]=n.createFramebuffer()}else H.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let xe=0;xe<y.mipmaps.length;xe++)H.__webglFramebuffer[xe]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(oe)if(a.drawBuffers){const xe=A.texture;for(let Ae=0,Fe=xe.length;Ae<Fe;Ae++){const Je=i.get(xe[Ae]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Se(A)===!1){const xe=oe?y:[y];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const Fe=xe[Ae];H.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Ae]);const Je=s.convert(Fe.format,Fe.colorSpace),se=s.convert(Fe.type),ot=_(Fe.internalFormat,Je,se,Fe.colorSpace,A.isXRRenderTarget===!0),tt=Re(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,ot,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,H.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),z(n.TEXTURE_CUBE_MAP,y,Le);for(let xe=0;xe<6;xe++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let Ae=0;Ae<y.mipmaps.length;Ae++)Te(H.__webglFramebuffer[xe][Ae],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else Te(H.__webglFramebuffer[xe],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(y,Le)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const xe=A.texture;for(let Ae=0,Fe=xe.length;Ae<Fe;Ae++){const Je=xe[Ae],se=i.get(Je);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),z(n.TEXTURE_2D,Je,Le),Te(H.__webglFramebuffer,A,Je,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),v(Je,Le)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?xe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,le.__webglTexture),z(xe,y,Le),o&&y.mipmaps&&y.mipmaps.length>0)for(let Ae=0;Ae<y.mipmaps.length;Ae++)Te(H.__webglFramebuffer[Ae],A,y,n.COLOR_ATTACHMENT0,xe,Ae);else Te(H.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,xe,0);v(y,Le)&&b(xe),t.unbindTexture()}A.depthBuffer&&ze(A)}function He(A){const y=m(A)||o,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0,re=H.length;le<re;le++){const oe=H[le];if(v(oe,y)){const Le=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(oe).__webglTexture;t.bindTexture(Le,xe),b(Le),t.unbindTexture()}}}function be(A){if(o&&A.samples>0&&Se(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,le=A.height;let re=n.COLOR_BUFFER_BIT;const oe=[],Le=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(A),Ae=A.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Fe=0;Fe<y.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Fe=0;Fe<y.length;Fe++){oe.push(n.COLOR_ATTACHMENT0+Fe),A.depthBuffer&&oe.push(Le);const Je=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Je===!1&&(A.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),Ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Fe]),Je===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Le]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Le])),Ae){const se=i.get(y[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,H,le,0,0,H,le,re,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<y.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Fe]);const Je=i.get(y[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Re(A){return Math.min(a.maxSamples,A.samples)}function Se(A){const y=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _t(A){const y=r.render.frame;c.get(A)!==y&&(c.set(A,y),A.update())}function Ke(A,y){const H=A.colorSpace,le=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ho||H!==$n&&H!==bn&&(xt.getTransfer(H)===wt?o===!1?e.has("EXT_sRGB")===!0&&le===En?(A.format=ho,A.minFilter=mn,A.generateMipmaps=!1):y=$c.sRGBToLinear(y):(le!==En||re!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}this.allocateTextureUnit=P,this.resetTextureUnits=Y,this.setTexture2D=X,this.setTexture2DArray=ne,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=st,this.setupRenderTarget=D,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Se}function Fm(n,e,t){const i=t.isWebGL2;function a(s,r=bn){let o;const l=xt.getTransfer(r);if(s===li)return n.UNSIGNED_BYTE;if(s===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Fc)return n.UNSIGNED_SHORT_5_5_5_1;if(s===_u)return n.BYTE;if(s===yu)return n.SHORT;if(s===So)return n.UNSIGNED_SHORT;if(s===Oc)return n.INT;if(s===ai)return n.UNSIGNED_INT;if(s===si)return n.FLOAT;if(s===Xa)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===wu)return n.ALPHA;if(s===En)return n.RGBA;if(s===Mu)return n.LUMINANCE;if(s===Su)return n.LUMINANCE_ALPHA;if(s===ki)return n.DEPTH_COMPONENT;if(s===pa)return n.DEPTH_STENCIL;if(s===ho)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Eu)return n.RED;if(s===Bc)return n.RED_INTEGER;if(s===Tu)return n.RG;if(s===Hc)return n.RG_INTEGER;if(s===Gc)return n.RGBA_INTEGER;if(s===sr||s===rr||s===or||s===lr)if(l===wt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===sr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===sr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===rr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===or)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===el||s===tl||s===nl||s===il)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===el)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===il)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===al||s===sl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===al)return l===wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===sl)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rl||s===ol||s===ll||s===cl||s===dl||s===ul||s===pl||s===hl||s===fl||s===ml||s===gl||s===xl||s===bl||s===vl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===rl)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ol)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ll)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cl)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dl)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ul)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pl)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hl)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fl)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ml)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gl)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xl)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bl)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vl)return l===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cr||s===_l||s===yl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===cr)return l===wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_l)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Au||s===wl||s===Ml||s===Sl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===cr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===wl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ml)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ai?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class Bm extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rn extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hm={type:"move"};class Ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){r=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),u=this._getHandJoint(d,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const c=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],f=c.position.distanceTo(p.position),h=.02,g=.005;d.inputState.pinching&&f>h+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&f<=h-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),d!==null&&(d.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Gm extends xa{constructor(e,t){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,d=null,c=null,p=null,f=null,h=null,g=null;const x=t.getContextAttributes();let m=null,u=null;const v=[],b=[],_=new _e;let k=null;const w=new on;w.layers.enable(1),w.viewport=new St;const E=new on;E.layers.enable(2),E.viewport=new St;const N=[w,E],M=new Bm;M.layers.enable(1),M.layers.enable(2);let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Q=v[z];return Q===void 0&&(Q=new Ir,v[z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(z){let Q=v[z];return Q===void 0&&(Q=new Ir,v[z]=Q),Q.getGripSpace()},this.getHand=function(z){let Q=v[z];return Q===void 0&&(Q=new Ir,v[z]=Q),Q.getHandSpace()};function B(z){const Q=b.indexOf(z.inputSource);if(Q===-1)return;const ue=v[Q];ue!==void 0&&(ue.update(z.inputSource,z.frame,d||r),ue.dispatchEvent({type:z.type,data:z.inputSource}))}function Y(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",P);for(let z=0;z<v.length;z++){const Q=b[z];Q!==null&&(b[z]=null,v[z].disconnect(Q))}L=null,I=null,e.setRenderTarget(m),h=null,f=null,p=null,a=null,u=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||r},this.setReferenceSpace=function(z){d=z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(z){if(a=z,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(_),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:a.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,t,Q),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),u=new Ci(h.framebufferWidth,h.framebufferHeight,{format:En,type:li,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,ue=null,ke=null;x.depth&&(ke=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=x.stencil?pa:ki,ue=x.stencil?Ai:ai);const Te={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};p=new XRWebGLBinding(a,t),f=p.createProjectionLayer(Te),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Ci(f.textureWidth,f.textureHeight,{format:En,type:li,depthTexture:new rd(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ne=e.properties.get(u);Ne.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),d=null,r=await a.requestReferenceSpace(o),K.setContext(a),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function P(z){for(let Q=0;Q<z.removed.length;Q++){const ue=z.removed[Q],ke=b.indexOf(ue);ke>=0&&(b[ke]=null,v[ke].disconnect(ue))}for(let Q=0;Q<z.added.length;Q++){const ue=z.added[Q];let ke=b.indexOf(ue);if(ke===-1){for(let Ne=0;Ne<v.length;Ne++)if(Ne>=b.length){b.push(ue),ke=Ne;break}else if(b[Ne]===null){b[Ne]=ue,ke=Ne;break}if(ke===-1)break}const Te=v[ke];Te&&Te.connect(ue)}}const F=new T,X=new T;function ne(z,Q,ue){F.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(ue.matrixWorld);const ke=F.distanceTo(X),Te=Q.projectionMatrix.elements,Ne=ue.projectionMatrix.elements,We=Te[14]/(Te[10]-1),ze=Te[14]/(Te[10]+1),st=(Te[9]+1)/Te[5],D=(Te[9]-1)/Te[5],He=(Te[8]-1)/Te[0],be=(Ne[8]+1)/Ne[0],Re=We*He,Se=We*be,_t=ke/(-He+be),Ke=_t*-He;Q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ke),z.translateZ(_t),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const A=We+_t,y=ze+_t,H=Re-Ke,le=Se+(ke-Ke),re=st*ze/y*A,oe=D*ze/y*A;z.projectionMatrix.makePerspective(H,le,re,oe,A,y),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function $(z,Q){Q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(a===null)return;M.near=E.near=w.near=z.near,M.far=E.far=w.far=z.far,(L!==M.near||I!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,I=M.far);const Q=z.parent,ue=M.cameras;$(M,Q);for(let ke=0;ke<ue.length;ke++)$(ue[ke],Q);ue.length===2?ne(M,w,E):M.projectionMatrix.copy(w.projectionMatrix),j(z,M,Q)};function j(z,Q,ue){ue===null?z.matrix.copy(Q.matrixWorld):(z.matrix.copy(ue.matrixWorld),z.matrix.invert(),z.matrix.multiply(Q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Q.projectionMatrix),z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=fo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=z)};let J=null;function V(z,Q){if(c=Q.getViewerPose(d||r),g=Q,c!==null){const ue=c.views;h!==null&&(e.setRenderTargetFramebuffer(u,h.framebuffer),e.setRenderTarget(u));let ke=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,ke=!0);for(let Te=0;Te<ue.length;Te++){const Ne=ue[Te];let We=null;if(h!==null)We=h.getViewport(Ne);else{const st=p.getViewSubImage(f,Ne);We=st.viewport,Te===0&&(e.setRenderTargetTextures(u,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(u))}let ze=N[Te];ze===void 0&&(ze=new on,ze.layers.enable(Te),ze.viewport=new St,N[Te]=ze),ze.matrix.fromArray(Ne.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ne.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(We.x,We.y,We.width,We.height),Te===0&&(M.matrix.copy(ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ke===!0&&M.cameras.push(ze)}}for(let ue=0;ue<v.length;ue++){const ke=b[ue],Te=v[ue];ke!==null&&Te!==void 0&&Te.update(ke,Q,d||r)}J&&J(z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const K=new ad;K.setAnimationLoop(V),this.setAnimationLoop=function(z){J=z},this.dispose=function(){}}}function Vm(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,td(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,v,b,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),c(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&h(m,u,_)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,b):u.isSpriteMaterial?d(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Qt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Qt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*b,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=b*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function h(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Wm(n,e,t,i){let a={},s={},r=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,b){const _=b.program;i.uniformBlockBinding(v,_)}function d(v,b){let _=a[v.id];_===void 0&&(g(v),_=c(v),a[v.id]=_,v.addEventListener("dispose",m));const k=b.program;i.updateUBOMapping(v,k);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const b=p();v.__bindingPointIndex=b;const _=n.createBuffer(),k=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,k,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function p(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const b=a[v.id],_=v.uniforms,k=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,E=_.length;w<E;w++){const N=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,L=N.length;M<L;M++){const I=N[M];if(h(I,w,M,k)===!0){const B=I.__offset,Y=Array.isArray(I.value)?I.value:[I.value];let P=0;for(let F=0;F<Y.length;F++){const X=Y[F],ne=x(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,B+P,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,P),P+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,b,_,k){const w=v.value,E=b+"_"+_;if(k[E]===void 0)return typeof w=="number"||typeof w=="boolean"?k[E]=w:k[E]=w.clone(),!0;{const N=k[E];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return k[E]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(v){const b=v.uniforms;let _=0;const k=16;for(let E=0,N=b.length;E<N;E++){const M=Array.isArray(b[E])?b[E]:[b[E]];for(let L=0,I=M.length;L<I;L++){const B=M[L],Y=Array.isArray(B.value)?B.value:[B.value];for(let P=0,F=Y.length;P<F;P++){const X=Y[P],ne=x(X),$=_%k;$!==0&&k-$<ne.boundary&&(_+=k-$),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=ne.storage}}}const w=_%k;return w>0&&(_+=k-w),v.__size=_,v.__cache={},this}function x(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const _=r.indexOf(b.__bindingPointIndex);r.splice(_,1),n.deleteBuffer(a[b.id]),delete a[b.id],delete s[b.id]}function u(){for(const v in a)n.deleteBuffer(a[v]);r=[],a={},s={}}return{bind:l,update:d,dispose:u}}class Lo{constructor(e={}){const{canvas:t=Fu(),context:i=null,depth:a=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=r;const h=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const u=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const b=this;let _=!1,k=0,w=0,E=null,N=-1,M=null;const L=new St,I=new St;let B=null;const Y=new $e(0);let P=0,F=t.width,X=t.height,ne=1,$=null,j=null;const J=new St(0,0,F,X),V=new St(0,0,F,X);let K=!1;const z=new Ao;let Q=!1,ue=!1,ke=null;const Te=new At,Ne=new _e,We=new T,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return E===null?ne:1}let D=i;function He(S,O){for(let G=0;G<S.length;G++){const q=S[G],W=t.getContext(q,O);if(W!==null)return W}return null}try{const S={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:c,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yo}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ge,!1),D===null){const O=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&O.shift(),D=He(O,S),D===null)throw He(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let be,Re,Se,_t,Ke,A,y,H,le,re,oe,Le,xe,Ae,Fe,Je,se,ot,tt,Xe,Ie,ye,Ge,ct;function Mt(){be=new e0(D),Re=new Yf(D,be,e),be.init(Re),ye=new Fm(D,be,Re),Se=new Om(D,be,Re),_t=new i0(D),Ke=new Mm,A=new zm(D,be,Se,Ke,Re,ye,_t),y=new Kf(b),H=new Qf(b),le=new dp(D,Re),Ge=new qf(D,be,le,Re),re=new t0(D,le,_t,Ge),oe=new o0(D,re,le,_t),tt=new r0(D,Re,A),Je=new jf(Ke),Le=new wm(b,y,H,be,Re,Ge,Je),xe=new Vm(b,Ke),Ae=new Em,Fe=new Rm(be,Re),ot=new Xf(b,y,H,Se,oe,f,l),se=new Nm(b,oe,Re),ct=new Wm(D,_t,Re,Se),Xe=new $f(D,be,_t,Re),Ie=new n0(D,be,_t,Re),_t.programs=Le.programs,b.capabilities=Re,b.extensions=be,b.properties=Ke,b.renderLists=Ae,b.shadowMap=se,b.state=Se,b.info=_t}Mt();const je=new Gm(b,D);this.xr=je,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(F,X,!1))},this.getSize=function(S){return S.set(F,X)},this.setSize=function(S,O,G=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=S,X=O,t.width=Math.floor(S*ne),t.height=Math.floor(O*ne),G===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(F*ne,X*ne).floor()},this.setDrawingBufferSize=function(S,O,G){F=S,X=O,ne=G,t.width=Math.floor(S*G),t.height=Math.floor(O*G),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(J)},this.setViewport=function(S,O,G,q){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,O,G,q),Se.viewport(L.copy(J).multiplyScalar(ne).floor())},this.getScissor=function(S){return S.copy(V)},this.setScissor=function(S,O,G,q){S.isVector4?V.set(S.x,S.y,S.z,S.w):V.set(S,O,G,q),Se.scissor(I.copy(V).multiplyScalar(ne).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(S){Se.setScissorTest(K=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(S=!0,O=!0,G=!0){let q=0;if(S){let W=!1;if(E!==null){const Ee=E.texture.format;W=Ee===Gc||Ee===Hc||Ee===Bc}if(W){const Ee=E.texture.type,Pe=Ee===li||Ee===ai||Ee===So||Ee===Ai||Ee===zc||Ee===Fc,Ve=ot.getClearColor(),qe=ot.getClearAlpha(),nt=Ve.r,Ze=Ve.g,Qe=Ve.b;Pe?(h[0]=nt,h[1]=Ze,h[2]=Qe,h[3]=qe,D.clearBufferuiv(D.COLOR,0,h)):(g[0]=nt,g[1]=Ze,g[2]=Qe,g[3]=qe,D.clearBufferiv(D.COLOR,0,g))}else q|=D.COLOR_BUFFER_BIT}O&&(q|=D.DEPTH_BUFFER_BIT),G&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ae.dispose(),Fe.dispose(),Ke.dispose(),y.dispose(),H.dispose(),oe.dispose(),Ge.dispose(),ct.dispose(),Le.dispose(),je.dispose(),je.removeEventListener("sessionstart",Ot),je.removeEventListener("sessionend",mt),ke&&(ke.dispose(),ke=null),Pt.stop()};function pe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const S=_t.autoReset,O=se.enabled,G=se.autoUpdate,q=se.needsUpdate,W=se.type;Mt(),_t.autoReset=S,se.enabled=O,se.autoUpdate=G,se.needsUpdate=q,se.type=W}function ge(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function fe(S){const O=S.target;O.removeEventListener("dispose",fe),Ue(O)}function Ue(S){Ce(S),Ke.remove(S)}function Ce(S){const O=Ke.get(S).programs;O!==void 0&&(O.forEach(function(G){Le.releaseProgram(G)}),S.isShaderMaterial&&Le.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,G,q,W,Ee){O===null&&(O=ze);const Pe=W.isMesh&&W.matrixWorld.determinant()<0,Ve=ht(S,O,G,q,W);Se.setMaterial(q,Pe);let qe=G.index,nt=1;if(q.wireframe===!0){if(qe=re.getWireframeAttribute(G),qe===void 0)return;nt=2}const Ze=G.drawRange,Qe=G.attributes.position;let Dt=Ze.start*nt,dn=(Ze.start+Ze.count)*nt;Ee!==null&&(Dt=Math.max(Dt,Ee.start*nt),dn=Math.min(dn,(Ee.start+Ee.count)*nt)),qe!==null?(Dt=Math.max(Dt,0),dn=Math.min(dn,qe.count)):Qe!=null&&(Dt=Math.max(Dt,0),dn=Math.min(dn,Qe.count));const Vt=dn-Dt;if(Vt<0||Vt===1/0)return;Ge.setup(W,q,Ve,G,qe);let In,Tt=Xe;if(qe!==null&&(In=le.get(qe),Tt=Ie,Tt.setIndex(In)),W.isMesh)q.wireframe===!0?(Se.setLineWidth(q.wireframeLinewidth*st()),Tt.setMode(D.LINES)):Tt.setMode(D.TRIANGLES);else if(W.isLine){let it=q.linewidth;it===void 0&&(it=1),Se.setLineWidth(it*st()),W.isLineSegments?Tt.setMode(D.LINES):W.isLineLoop?Tt.setMode(D.LINE_LOOP):Tt.setMode(D.LINE_STRIP)}else W.isPoints?Tt.setMode(D.POINTS):W.isSprite&&Tt.setMode(D.TRIANGLES);if(W.isBatchedMesh)Tt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)Tt.renderInstances(Dt,Vt,W.count);else if(G.isInstancedBufferGeometry){const it=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,er=Math.min(G.instanceCount,it);Tt.renderInstances(Dt,Vt,er)}else Tt.render(Dt,Vt)};function dt(S,O,G){S.transparent===!0&&S.side===zt&&S.forceSinglePass===!1?(S.side=Qt,S.needsUpdate=!0,ee(S,O,G),S.side=ui,S.needsUpdate=!0,ee(S,O,G),S.side=zt):ee(S,O,G)}this.compile=function(S,O,G=null){G===null&&(G=S),m=Fe.get(G),m.init(),v.push(m),G.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),S!==G&&S.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(b._useLegacyLights);const q=new Set;return S.traverse(function(W){const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Ve=Ee[Pe];dt(Ve,G,W),q.add(Ve)}else dt(Ee,G,W),q.add(Ee)}),v.pop(),m=null,q},this.compileAsync=function(S,O,G=null){const q=this.compile(S,O,G);return new Promise(W=>{function Ee(){if(q.forEach(function(Pe){Ke.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){W(S);return}setTimeout(Ee,10)}be.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let pt=null;function Rt(S){pt&&pt(S)}function Ot(){Pt.stop()}function mt(){Pt.start()}const Pt=new ad;Pt.setAnimationLoop(Rt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(S){pt=S,je.setAnimationLoop(S),S===null?Pt.stop():Pt.start()},je.addEventListener("sessionstart",Ot),je.addEventListener("sessionend",mt),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(O),O=je.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,O,E),m=Fe.get(S,v.length),m.init(),v.push(m),Te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),z.setFromProjectionMatrix(Te),ue=this.localClippingEnabled,Q=Je.init(this.clippingPlanes,ue),x=Ae.get(S,u.length),x.init(),u.push(x),jt(S,O,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort($,j),this.info.render.frame++,Q===!0&&Je.beginShadows();const G=m.state.shadowsArray;if(se.render(G,S,O),Q===!0&&Je.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(x,S),m.setupLights(b._useLegacyLights),O.isArrayCamera){const q=O.cameras;for(let W=0,Ee=q.length;W<Ee;W++){const Pe=q[W];ya(x,S,Pe,Pe.viewport)}}else ya(x,S,O);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(b,S,O),Ge.resetDefaultState(),N=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function jt(S,O,G,q){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||z.intersectsSprite(S)){q&&We.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Te);const Pe=oe.update(S),Ve=S.material;Ve.visible&&x.push(S,Pe,Ve,G,We.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||z.intersectsObject(S))){const Pe=oe.update(S),Ve=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),We.copy(S.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),We.copy(Pe.boundingSphere.center)),We.applyMatrix4(S.matrixWorld).applyMatrix4(Te)),Array.isArray(Ve)){const qe=Pe.groups;for(let nt=0,Ze=qe.length;nt<Ze;nt++){const Qe=qe[nt],Dt=Ve[Qe.materialIndex];Dt&&Dt.visible&&x.push(S,Pe,Dt,G,We.z,Qe)}}else Ve.visible&&x.push(S,Pe,Ve,G,We.z,null)}}const Ee=S.children;for(let Pe=0,Ve=Ee.length;Pe<Ve;Pe++)jt(Ee[Pe],O,G,q)}function ya(S,O,G,q){const W=S.opaque,Ee=S.transmissive,Pe=S.transparent;m.setupLightsView(G),Q===!0&&Je.setGlobalState(b.clippingPlanes,G),Ee.length>0&&U(W,Ee,O,G),q&&Se.viewport(L.copy(q)),W.length>0&&ie(W,O,G),Ee.length>0&&ie(Ee,O,G),Pe.length>0&&ie(Pe,O,G),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function U(S,O,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const Ee=Re.isWebGL2;ke===null&&(ke=new Ci(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Xa:li,minFilter:Wa,samples:Ee?4:0})),b.getDrawingBufferSize(Ne),Ee?ke.setSize(Ne.x,Ne.y):ke.setSize(mo(Ne.x),mo(Ne.y));const Pe=b.getRenderTarget();b.setRenderTarget(ke),b.getClearColor(Y),P=b.getClearAlpha(),P<1&&b.setClearColor(16777215,.5),b.clear();const Ve=b.toneMapping;b.toneMapping=oi,ie(S,G,q),A.updateMultisampleRenderTarget(ke),A.updateRenderTargetMipmap(ke);let qe=!1;for(let nt=0,Ze=O.length;nt<Ze;nt++){const Qe=O[nt],Dt=Qe.object,dn=Qe.geometry,Vt=Qe.material,In=Qe.group;if(Vt.side===zt&&Dt.layers.test(q.layers)){const Tt=Vt.side;Vt.side=Qt,Vt.needsUpdate=!0,ve(Dt,G,q,dn,Vt,In),Vt.side=Tt,Vt.needsUpdate=!0,qe=!0}}qe===!0&&(A.updateMultisampleRenderTarget(ke),A.updateRenderTargetMipmap(ke)),b.setRenderTarget(Pe),b.setClearColor(Y,P),b.toneMapping=Ve}function ie(S,O,G){const q=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Ee=S.length;W<Ee;W++){const Pe=S[W],Ve=Pe.object,qe=Pe.geometry,nt=q===null?Pe.material:q,Ze=Pe.group;Ve.layers.test(G.layers)&&ve(Ve,O,G,qe,nt,Ze)}}function ve(S,O,G,q,W,Ee){S.onBeforeRender(b,O,G,q,W,Ee),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(b,O,G,q,S,Ee),W.transparent===!0&&W.side===zt&&W.forceSinglePass===!1?(W.side=Qt,W.needsUpdate=!0,b.renderBufferDirect(G,O,q,W,S,Ee),W.side=ui,W.needsUpdate=!0,b.renderBufferDirect(G,O,q,W,S,Ee),W.side=zt):b.renderBufferDirect(G,O,q,W,S,Ee),S.onAfterRender(b,O,G,q,W,Ee)}function ee(S,O,G){O.isScene!==!0&&(O=ze);const q=Ke.get(S),W=m.state.lights,Ee=m.state.shadowsArray,Pe=W.state.version,Ve=Le.getParameters(S,W.state,Ee,O,G),qe=Le.getProgramCacheKey(Ve);let nt=q.programs;q.environment=S.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(S.isMeshStandardMaterial?H:y).get(S.envMap||q.environment),nt===void 0&&(S.addEventListener("dispose",fe),nt=new Map,q.programs=nt);let Ze=nt.get(qe);if(Ze!==void 0){if(q.currentProgram===Ze&&q.lightsStateVersion===Pe)return De(S,Ve),Ze}else Ve.uniforms=Le.getUniforms(S),S.onBuild(G,Ve,b),S.onBeforeCompile(Ve,b),Ze=Le.acquireProgram(Ve,qe),nt.set(qe,Ze),q.uniforms=Ve.uniforms;const Qe=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Qe.clippingPlanes=Je.uniform),De(S,Ve),q.needsLights=Gt(S),q.lightsStateVersion=Pe,q.needsLights&&(Qe.ambientLightColor.value=W.state.ambient,Qe.lightProbe.value=W.state.probe,Qe.directionalLights.value=W.state.directional,Qe.directionalLightShadows.value=W.state.directionalShadow,Qe.spotLights.value=W.state.spot,Qe.spotLightShadows.value=W.state.spotShadow,Qe.rectAreaLights.value=W.state.rectArea,Qe.ltc_1.value=W.state.rectAreaLTC1,Qe.ltc_2.value=W.state.rectAreaLTC2,Qe.pointLights.value=W.state.point,Qe.pointLightShadows.value=W.state.pointShadow,Qe.hemisphereLights.value=W.state.hemi,Qe.directionalShadowMap.value=W.state.directionalShadowMap,Qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Qe.spotShadowMap.value=W.state.spotShadowMap,Qe.spotLightMatrix.value=W.state.spotLightMatrix,Qe.spotLightMap.value=W.state.spotLightMap,Qe.pointShadowMap.value=W.state.pointShadowMap,Qe.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=Ze,q.uniformsList=null,Ze}function Me(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Ps.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function De(S,O){const G=Ke.get(S);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function ht(S,O,G,q,W){O.isScene!==!0&&(O=ze),A.resetTextureUnits();const Ee=O.fog,Pe=q.isMeshStandardMaterial?O.environment:null,Ve=E===null?b.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:$n,qe=(q.isMeshStandardMaterial?H:y).get(q.envMap||Pe),nt=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ze=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Qe=!!G.morphAttributes.position,Dt=!!G.morphAttributes.normal,dn=!!G.morphAttributes.color;let Vt=oi;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Vt=b.toneMapping);const In=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Tt=In!==void 0?In.length:0,it=Ke.get(q),er=m.state.lights;if(Q===!0&&(ue===!0||S!==M)){const hn=S===M&&q.id===N;Je.setState(q,S,hn)}let Lt=!1;q.version===it.__version?(it.needsLights&&it.lightsStateVersion!==er.state.version||it.outputColorSpace!==Ve||W.isBatchedMesh&&it.batching===!1||!W.isBatchedMesh&&it.batching===!0||W.isInstancedMesh&&it.instancing===!1||!W.isInstancedMesh&&it.instancing===!0||W.isSkinnedMesh&&it.skinning===!1||!W.isSkinnedMesh&&it.skinning===!0||W.isInstancedMesh&&it.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&it.instancingColor===!1&&W.instanceColor!==null||it.envMap!==qe||q.fog===!0&&it.fog!==Ee||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Je.numPlanes||it.numIntersection!==Je.numIntersection)||it.vertexAlphas!==nt||it.vertexTangents!==Ze||it.morphTargets!==Qe||it.morphNormals!==Dt||it.morphColors!==dn||it.toneMapping!==Vt||Re.isWebGL2===!0&&it.morphTargetsCount!==Tt)&&(Lt=!0):(Lt=!0,it.__version=q.version);let gi=it.currentProgram;Lt===!0&&(gi=ee(q,O,W));let Xo=!1,wa=!1,tr=!1;const Kt=gi.getUniforms(),xi=it.uniforms;if(Se.useProgram(gi.program)&&(Xo=!0,wa=!0,tr=!0),q.id!==N&&(N=q.id,wa=!0),Xo||M!==S){Kt.setValue(D,"projectionMatrix",S.projectionMatrix),Kt.setValue(D,"viewMatrix",S.matrixWorldInverse);const hn=Kt.map.cameraPosition;hn!==void 0&&hn.setValue(D,We.setFromMatrixPosition(S.matrixWorld)),Re.logarithmicDepthBuffer&&Kt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Kt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,wa=!0,tr=!0)}if(W.isSkinnedMesh){Kt.setOptional(D,W,"bindMatrix"),Kt.setOptional(D,W,"bindMatrixInverse");const hn=W.skeleton;hn&&(Re.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Kt.setValue(D,"boneTexture",hn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Kt.setOptional(D,W,"batchingTexture"),Kt.setValue(D,"batchingTexture",W._matricesTexture,A));const nr=G.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0&&Re.isWebGL2===!0)&&tt.update(W,G,gi),(wa||it.receiveShadow!==W.receiveShadow)&&(it.receiveShadow=W.receiveShadow,Kt.setValue(D,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(xi.envMap.value=qe,xi.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),wa&&(Kt.setValue(D,"toneMappingExposure",b.toneMappingExposure),it.needsLights&&Ut(xi,tr),Ee&&q.fog===!0&&xe.refreshFogUniforms(xi,Ee),xe.refreshMaterialUniforms(xi,q,ne,X,ke),Ps.upload(D,Me(it),xi,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ps.upload(D,Me(it),xi,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Kt.setValue(D,"center",W.center),Kt.setValue(D,"modelViewMatrix",W.modelViewMatrix),Kt.setValue(D,"normalMatrix",W.normalMatrix),Kt.setValue(D,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const hn=q.uniformsGroups;for(let ir=0,Bd=hn.length;ir<Bd;ir++)if(Re.isWebGL2){const qo=hn[ir];ct.update(qo,gi),ct.bind(qo,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function Ut(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Gt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,O,G){Ke.get(S.texture).__webglTexture=O,Ke.get(S.depthTexture).__webglTexture=G;const q=Ke.get(S);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){const G=Ke.get(S);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,G=0){E=S,k=O,w=G;let q=!0,W=null,Ee=!1,Pe=!1;if(S){const qe=Ke.get(S);qe.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(D.FRAMEBUFFER,null),q=!1):qe.__webglFramebuffer===void 0?A.setupRenderTarget(S):qe.__hasExternalTextures&&A.rebindTextures(S,Ke.get(S.texture).__webglTexture,Ke.get(S.depthTexture).__webglTexture);const nt=S.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Pe=!0);const Ze=Ke.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ze[O])?W=Ze[O][G]:W=Ze[O],Ee=!0):Re.isWebGL2&&S.samples>0&&A.useMultisampledRTT(S)===!1?W=Ke.get(S).__webglMultisampledFramebuffer:Array.isArray(Ze)?W=Ze[G]:W=Ze,L.copy(S.viewport),I.copy(S.scissor),B=S.scissorTest}else L.copy(J).multiplyScalar(ne).floor(),I.copy(V).multiplyScalar(ne).floor(),B=K;if(Se.bindFramebuffer(D.FRAMEBUFFER,W)&&Re.drawBuffers&&q&&Se.drawBuffers(S,W),Se.viewport(L),Se.scissor(I),Se.setScissorTest(B),Ee){const qe=Ke.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,qe.__webglTexture,G)}else if(Pe){const qe=Ke.get(S.texture),nt=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,qe.__webglTexture,G||0,nt)}N=-1},this.readRenderTargetPixels=function(S,O,G,q,W,Ee,Pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ke.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){Se.bindFramebuffer(D.FRAMEBUFFER,Ve);try{const qe=S.texture,nt=qe.format,Ze=qe.type;if(nt!==En&&ye.convert(nt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ze===Xa&&(be.has("EXT_color_buffer_half_float")||Re.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ze!==li&&ye.convert(Ze)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===si&&(Re.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-q&&G>=0&&G<=S.height-W&&D.readPixels(O,G,q,W,ye.convert(nt),ye.convert(Ze),Ee)}finally{const qe=E!==null?Ke.get(E).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(S,O,G=0){const q=Math.pow(2,-G),W=Math.floor(O.image.width*q),Ee=Math.floor(O.image.height*q);A.setTexture2D(O,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,S.x,S.y,W,Ee),Se.unbindTexture()},this.copyTextureToTexture=function(S,O,G,q=0){const W=O.image.width,Ee=O.image.height,Pe=ye.convert(G.format),Ve=ye.convert(G.type);A.setTexture2D(G,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment),O.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,q,S.x,S.y,W,Ee,Pe,Ve,O.image.data):O.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,q,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,Pe,O.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,q,S.x,S.y,Pe,Ve,O.image),q===0&&G.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(S,O,G,q,W=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=S.max.x-S.min.x+1,Pe=S.max.y-S.min.y+1,Ve=S.max.z-S.min.z+1,qe=ye.convert(q.format),nt=ye.convert(q.type);let Ze;if(q.isData3DTexture)A.setTexture3D(q,0),Ze=D.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)A.setTexture2DArray(q,0),Ze=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment);const Qe=D.getParameter(D.UNPACK_ROW_LENGTH),Dt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=D.getParameter(D.UNPACK_SKIP_PIXELS),Vt=D.getParameter(D.UNPACK_SKIP_ROWS),In=D.getParameter(D.UNPACK_SKIP_IMAGES),Tt=G.isCompressedTexture?G.mipmaps[W]:G.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,S.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,S.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,S.min.z),G.isDataTexture||G.isData3DTexture?D.texSubImage3D(Ze,W,O.x,O.y,O.z,Ee,Pe,Ve,qe,nt,Tt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ze,W,O.x,O.y,O.z,Ee,Pe,Ve,qe,Tt.data)):D.texSubImage3D(Ze,W,O.x,O.y,O.z,Ee,Pe,Ve,qe,nt,Tt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Dt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,In),W===0&&q.generateMipmaps&&D.generateMipmap(Ze),Se.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){k=0,w=0,E=null,Se.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===To?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===Gs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xt?Li:Wc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Li?Xt:$n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Xm extends Lo{}Xm.prototype.isWebGL1Renderer=!0;class ja{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new ja(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ka{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new Ka(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class va extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class qm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=po,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new T;class Bs{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),a=vt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),a=vt(a,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new Tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hi extends pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qi;const Aa=new T,ea=new T,ta=new T,na=new _e,ka=new _e,pd=new At,_s=new T,La=new T,ys=new T,pc=new _e,Ur=new _e,hc=new _e;class Ni extends Ft{constructor(e=new hi){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qm(t,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new Bs(i,3,0,!1)),Qi.setAttribute("uv",new Bs(i,2,3,!1))}this.geometry=Qi,this.material=e,this.center=new _e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ea.setFromMatrixScale(this.matrixWorld),pd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ta.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ea.multiplyScalar(-ta.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;ws(_s.set(-.5,-.5,0),ta,r,ea,a,s),ws(La.set(.5,-.5,0),ta,r,ea,a,s),ws(ys.set(.5,.5,0),ta,r,ea,a,s),pc.set(0,0),Ur.set(1,0),hc.set(1,1);let o=e.ray.intersectTriangle(_s,La,ys,!1,Aa);if(o===null&&(ws(La.set(-.5,.5,0),ta,r,ea,a,s),Ur.set(0,1),o=e.ray.intersectTriangle(_s,ys,La,!1,Aa),o===null))return;const l=e.ray.origin.distanceTo(Aa);l<e.near||l>e.far||t.push({distance:l,point:Aa.clone(),uv:gn.getInterpolation(Aa,_s,La,ys,pc,Ur,hc,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ws(n,e,t,i,a,s){na.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(ka.x=s*na.x-a*na.y,ka.y=a*na.x+s*na.y):ka.copy(na),n.copy(e),n.x+=ka.x,n.y+=ka.y,n.applyMatrix4(pd)}class _a extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fc=new T,mc=new T,gc=new At,Nr=new Kc,Ms=new Vs;class Yn extends Ft{constructor(e=new Et,t=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)fc.fromBufferAttribute(t,a-1),mc.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=fc.distanceTo(mc);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(a),Ms.radius+=s,e.ray.intersectsSphere(Ms)===!1)return;gc.copy(a).invert(),Nr.copy(e.ray).applyMatrix4(gc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=new T,c=new T,p=new T,f=new T,h=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const u=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let b=u,_=v-1;b<_;b+=h){const k=g.getX(b),w=g.getX(b+1);if(d.fromBufferAttribute(m,k),c.fromBufferAttribute(m,w),Nr.distanceSqToSegment(d,c,f,p)>l)continue;f.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:p.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,r.start),v=Math.min(m.count,r.start+r.count);for(let b=u,_=v-1;b<_;b+=h){if(d.fromBufferAttribute(m,b),c.fromBufferAttribute(m,b+1),Nr.distanceSqToSegment(d,c,f,p)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:p.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class qs extends cn{constructor(e,t,i,a,s,r,o,l,d){super(e,t,i,a,s,r,o,l,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const s=i.length;let r;t?r=t:r=e*i[s-1];let o=0,l=s-1,d;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),d=i[a]-r,d<0)o=a+1;else if(d>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);const c=i[a],f=i[a+1]-c,h=(r-c)/f;return(a+h)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);const r=this.getPoint(a),o=this.getPoint(s),l=t||(r.isVector2?new _e:new T);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new T,a=[],s=[],r=[],o=new T,l=new At;for(let h=0;h<=e;h++){const g=h/e;a[h]=this.getTangentAt(g,new T)}s[0]=new T,r[0]=new T;let d=Number.MAX_VALUE;const c=Math.abs(a[0].x),p=Math.abs(a[0].y),f=Math.abs(a[0].z);c<=d&&(d=c,i.set(1,0,0)),p<=d&&(d=p,i.set(0,1,0)),f<=d&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),o.crossVectors(a[h-1],a[h]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos($t(a[h-1].dot(a[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,g))}r[h].crossVectors(a[h],s[h])}if(t===!0){let h=Math.acos($t(s[0].dot(s[e]),-1,1));h/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(a[g],h*g)),r[g].crossVectors(a[g],s[g])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Co extends Dn{constructor(e=0,t=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new _e,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),d=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,h=d-this.aY;l=f*c-h*p+this.aX,d=f*p+h*c+this.aY}return i.set(l,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $m extends Co{constructor(e,t,i,a,s,r){super(e,t,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ro(){let n=0,e=0,t=0,i=0;function a(s,r,o,l){n=s,e=o,t=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,d){a(r,o,d*(o-s),d*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,d,c,p){let f=(r-s)/d-(o-s)/(d+c)+(o-r)/c,h=(o-r)/c-(l-r)/(c+p)+(l-o)/p;f*=c,h*=c,a(r,o,f,h)},calc:function(s){const r=s*s,o=r*s;return n+e*s+t*r+i*o}}}const Ss=new T,Or=new Ro,zr=new Ro,Fr=new Ro;class hd extends Dn{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new T){const i=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let d,c;this.closed||o>0?d=a[(o-1)%s]:(Ss.subVectors(a[0],a[1]).add(a[0]),d=Ss);const p=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?c=a[(o+2)%s]:(Ss.subVectors(a[s-1],a[s-2]).add(a[s-1]),c=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(d.distanceToSquared(p),h),x=Math.pow(p.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(c),h);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Or.initNonuniformCatmullRom(d.x,p.x,f.x,c.x,g,x,m),zr.initNonuniformCatmullRom(d.y,p.y,f.y,c.y,g,x,m),Fr.initNonuniformCatmullRom(d.z,p.z,f.z,c.z,g,x,m)}else this.curveType==="catmullrom"&&(Or.initCatmullRom(d.x,p.x,f.x,c.x,this.tension),zr.initCatmullRom(d.y,p.y,f.y,c.y,this.tension),Fr.initCatmullRom(d.z,p.z,f.z,c.z,this.tension));return i.set(Or.calc(l),zr.calc(l),Fr.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new T().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xc(n,e,t,i,a){const s=(i-e)*.5,r=(a-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+r)*l+(-3*t+3*i-2*s-r)*o+s*n+t}function Ym(n,e){const t=1-n;return t*t*e}function jm(n,e){return 2*(1-n)*n*e}function Km(n,e){return n*n*e}function Oa(n,e,t,i){return Ym(n,e)+jm(n,t)+Km(n,i)}function Jm(n,e){const t=1-n;return t*t*t*e}function Zm(n,e){const t=1-n;return 3*t*t*n*e}function Qm(n,e){return 3*(1-n)*n*n*e}function eg(n,e){return n*n*n*e}function za(n,e,t,i,a){return Jm(n,e)+Zm(n,t)+Qm(n,i)+eg(n,a)}class fd extends Dn{constructor(e=new _e,t=new _e,i=new _e,a=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new _e){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(za(e,a.x,s.x,r.x,o.x),za(e,a.y,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tg extends Dn{constructor(e=new T,t=new T,i=new T,a=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new T){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(za(e,a.x,s.x,r.x,o.x),za(e,a.y,s.y,r.y,o.y),za(e,a.z,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class md extends Dn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ng extends Dn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gd extends Dn{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(Oa(e,a.x,s.x,r.x),Oa(e,a.y,s.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ig extends Dn{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(Oa(e,a.x,s.x,r.x),Oa(e,a.y,s.y,r.y),Oa(e,a.z,s.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xd extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const i=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),o=s-r,l=a[r===0?r:r-1],d=a[r],c=a[r>a.length-2?a.length-1:r+1],p=a[r>a.length-3?a.length-1:r+2];return i.set(xc(o,l.x,d.x,c.x,p.x),xc(o,l.y,d.y,c.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new _e().fromArray(a))}return this}}var bc=Object.freeze({__proto__:null,ArcCurve:$m,CatmullRomCurve3:hd,CubicBezierCurve:fd,CubicBezierCurve3:tg,EllipseCurve:Co,LineCurve:md,LineCurve3:ng,QuadraticBezierCurve:gd,QuadraticBezierCurve3:ig,SplineCurve:xd});class ag extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let s=0;for(;s<a.length;){if(a[s]>=i){const r=a[s]-i,o=this.curves[s],l=o.getLength(),d=l===0?0:1-r/l;return o.getPointAt(d,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,s=this.curves;a<s.length;a++){const r=s[a],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let d=0;d<l.length;d++){const c=l[d];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new bc[a.type]().fromJSON(a))}return this}}class sg extends ag{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new md(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const s=new gd(this.currentPoint.clone(),new _e(e,t),new _e(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,s,r){const o=new fd(this.currentPoint.clone(),new _e(e,t),new _e(i,a),new _e(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new xd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,a,s,r),this}absarc(e,t,i,a,s,r){return this.absellipse(e,t,i,i,a,s,r),this}ellipse(e,t,i,a,s,r,o,l){const d=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+d,t+c,i,a,s,r,o,l),this}absellipse(e,t,i,a,s,r,o,l){const d=new Co(e,t,i,a,s,r,o,l);if(this.curves.length>0){const p=d.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(d);const c=d.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Po extends Et{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,i=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:a},t=Math.floor(t),a=$t(a,0,Math.PI*2);const s=[],r=[],o=[],l=[],d=[],c=1/t,p=new T,f=new _e,h=new T,g=new T,x=new T;let m=0,u=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,h.x=u*1,h.y=-m,h.z=u*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,h.x=u*1,h.y=-m,h.z=u*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(g)}for(let v=0;v<=t;v++){const b=i+v*c*a,_=Math.sin(b),k=Math.cos(b);for(let w=0;w<=e.length-1;w++){p.x=e[w].x*_,p.y=e[w].y,p.z=e[w].x*k,r.push(p.x,p.y,p.z),f.x=v/t,f.y=w/(e.length-1),o.push(f.x,f.y);const E=l[3*w+0]*_,N=l[3*w+1],M=l[3*w+0]*k;d.push(E,N,M)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){const _=b+v*e.length,k=_,w=_+e.length,E=_+e.length+1,N=_+1;s.push(k,w,N),s.push(E,N,w)}this.setIndex(s),this.setAttribute("position",new yt(r,3)),this.setAttribute("uv",new yt(o,2)),this.setAttribute("normal",new yt(d,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.points,e.segments,e.phiStart,e.phiLength)}}class Do extends Po{constructor(e=1,t=1,i=4,a=8){const s=new sg;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),a),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:a}}static fromJSON(e){return new Do(e.radius,e.length,e.capSegments,e.radialSegments)}}class vn extends Et{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const s=[],r=[],o=[],l=[],d=new T,c=new _e;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=t;p++,f+=3){const h=i+p/t*a;d.x=e*Math.cos(h),d.y=e*Math.sin(h),r.push(d.x,d.y,d.z),o.push(0,0,1),c.x=(r[f]/e+1)/2,c.y=(r[f+1]/e+1)/2,l.push(c.x,c.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(o,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class he extends Et{constructor(e=1,t=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const d=this;a=Math.floor(a),s=Math.floor(s);const c=[],p=[],f=[],h=[];let g=0;const x=[],m=i/2;let u=0;v(),r===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(h,2));function v(){const _=new T,k=new T;let w=0;const E=(t-e)/i;for(let N=0;N<=s;N++){const M=[],L=N/s,I=L*(t-e)+e;for(let B=0;B<=a;B++){const Y=B/a,P=Y*l+o,F=Math.sin(P),X=Math.cos(P);k.x=I*F,k.y=-L*i+m,k.z=I*X,p.push(k.x,k.y,k.z),_.set(F,E,X).normalize(),f.push(_.x,_.y,_.z),h.push(Y,1-L),M.push(g++)}x.push(M)}for(let N=0;N<a;N++)for(let M=0;M<s;M++){const L=x[M][N],I=x[M+1][N],B=x[M+1][N+1],Y=x[M][N+1];c.push(L,I,Y),c.push(I,B,Y),w+=6}d.addGroup(u,w,0),u+=w}function b(_){const k=g,w=new _e,E=new T;let N=0;const M=_===!0?e:t,L=_===!0?1:-1;for(let B=1;B<=a;B++)p.push(0,m*L,0),f.push(0,L,0),h.push(.5,.5),g++;const I=g;for(let B=0;B<=a;B++){const P=B/a*l+o,F=Math.cos(P),X=Math.sin(P);E.x=M*X,E.y=m*L,E.z=M*F,p.push(E.x,E.y,E.z),f.push(0,L,0),w.x=F*.5+.5,w.y=X*.5*L+.5,h.push(w.x,w.y),g++}for(let B=0;B<a;B++){const Y=k+B,P=I+B;_===!0?c.push(P,P+1,Y):c.push(P+1,P,Y),N+=3}d.addGroup(u,N,_===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new he(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jn extends he{constructor(e=1,t=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends Et{constructor(e=.5,t=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],d=[],c=[];let p=e;const f=(t-e)/a,h=new T,g=new _e;for(let x=0;x<=a;x++){for(let m=0;m<=i;m++){const u=s+m/i*r;h.x=p*Math.cos(u),h.y=p*Math.sin(u),l.push(h.x,h.y,h.z),d.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,c.push(g.x,g.y)}p+=f}for(let x=0;x<a;x++){const m=x*(i+1);for(let u=0;u<i;u++){const v=u+m,b=v,_=v+i+1,k=v+i+2,w=v+1;o.push(b,_,w),o.push(_,k,w)}}this.setIndex(o),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class lt extends Et{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let d=0;const c=[],p=new T,f=new T,h=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){const v=[],b=u/i;let _=0;u===0&&r===0?_=.5/t:u===i&&l===Math.PI&&(_=-.5/t);for(let k=0;k<=t;k++){const w=k/t;p.x=-e*Math.cos(a+w*s)*Math.sin(r+b*o),p.y=e*Math.cos(r+b*o),p.z=e*Math.sin(a+w*s)*Math.sin(r+b*o),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),m.push(w+_,1-b),v.push(d++)}c.push(v)}for(let u=0;u<i;u++)for(let v=0;v<t;v++){const b=c[u][v+1],_=c[u][v],k=c[u+1][v],w=c[u+1][v+1];(u!==0||r>0)&&h.push(b,_,w),(u!==i-1||l<Math.PI)&&h.push(_,k,w)}this.setIndex(h),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class An extends Et{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);const r=[],o=[],l=[],d=[],c=new T,p=new T,f=new T;for(let h=0;h<=i;h++)for(let g=0;g<=a;g++){const x=g/a*s,m=h/i*Math.PI*2;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),o.push(p.x,p.y,p.z),c.x=e*Math.cos(x),c.y=e*Math.sin(x),f.subVectors(p,c).normalize(),l.push(f.x,f.y,f.z),d.push(g/a),d.push(h/i)}for(let h=1;h<=i;h++)for(let g=1;g<=a;g++){const x=(a+1)*h+g-1,m=(a+1)*(h-1)+g-1,u=(a+1)*(h-1)+g,v=(a+1)*h+g;r.push(x,m,v),r.push(m,u,v)}this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class te extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class we extends pi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $s extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class bd extends $s{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Br=new At,vc=new T,_c=new T;class vd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(vc),_c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_c),t.updateMatrixWorld(),Br.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Br)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yc=new At,Ca=new T,Hr=new T;class rg extends vd{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ca),Hr.copy(i.position),Hr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Hr),i.updateMatrixWorld(),a.makeTranslation(-Ca.x,-Ca.y,-Ca.z),yc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc)}}class di extends $s{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new rg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class og extends vd{constructor(){super(new sd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pn extends $s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new og}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ys extends $s{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _d{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);const ft=60,Ye=40,qt=14,Gr=[new T(-16,0,6),new T(0,0,-6),new T(16,0,6)];function lg(){const n=new va;n.background=new $e(1711918),n.fog=new Ka(1711918,40,90),n.add(new Ys(13691135,.55));const e=[[-18,qt-.5,8],[-18,qt-.5,-8],[0,qt-.5,8],[0,qt-.5,-8],[18,qt-.5,8],[18,qt-.5,-8]];for(const[i,a,s]of e){const r=new di(15267071,1.2,28);r.position.set(i,a,s),n.add(r)}const t=new Pn(16777215,.5);return t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),n.add(t),{scene:n}}function cg(n){dg(n),ug(n),pg(n)}function dg(n){const e=new te({color:15263976,roughness:.8,metalness:0}),t=new te({color:14541804,roughness:.85,metalness:0}),i=new te({color:16119288,roughness:.9,metalness:0});new te({color:2764605,roughness:.7,metalness:.1});const a=new C(new kt(ft,Ye),e);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);const s=new _a({color:13421772});for(let u=-ft/2;u<=ft/2;u+=3){const v=new Et().setFromPoints([new T(u,.01,-Ye/2),new T(u,.01,Ye/2)]);n.add(new Yn(v,s))}for(let u=-Ye/2;u<=Ye/2;u+=3){const v=new Et().setFromPoints([new T(-ft/2,.01,u),new T(ft/2,.01,u)]);n.add(new Yn(v,s))}const r=new C(new kt(ft,Ye),i);r.rotation.x=Math.PI/2,r.position.y=qt,n.add(r);const o=[{w:ft,h:qt,x:0,y:qt/2,z:-Ye/2,ry:0},{w:ft,h:qt,x:0,y:qt/2,z:Ye/2,ry:Math.PI},{w:Ye,h:qt,x:-ft/2,y:qt/2,z:0,ry:Math.PI/2},{w:Ye,h:qt,x:ft/2,y:qt/2,z:0,ry:-Math.PI/2}];for(const u of o){const v=new C(new kt(u.w,u.h),t);v.position.set(u.x,u.y,u.z),v.rotation.y=u.ry,n.add(v)}const l=new we({color:11581640}),d=[{w:ft,x:0,z:-Ye/2+.05,ry:0},{w:ft,x:0,z:Ye/2-.05,ry:Math.PI},{w:Ye,x:-ft/2+.05,z:0,ry:Math.PI/2},{w:Ye,x:ft/2-.05,z:0,ry:-Math.PI/2}];for(const u of d){const v=new C(new ae(u.w,.5,.1),l);v.position.set(u.x,.25,u.z),v.rotation.y=u.ry,n.add(v)}const c=new we({color:16777215}),p=new te({color:15663088,emissive:15663088,emissiveIntensity:.9});for(const[u,,v]of[[-18,0,8],[-18,0,-8],[0,0,8],[0,0,-8],[18,0,8],[18,0,-8]]){const b=new C(new ae(6,.25,.8),c);b.position.set(u,qt-.12,v),n.add(b);const _=new C(new he(.1,.1,5.6,16),p);_.rotation.z=Math.PI/2,_.position.set(u,qt-.3,v),n.add(_)}const f=new we({color:9083568}),h=new we({color:5929626}),g=new C(new ae(3.2,7.2,.15),f);g.position.set(0,3.6,Ye/2-.05),n.add(g);const x=new C(new ae(2.8,6.8,.1),h);x.position.set(0,3.4,Ye/2-.04),n.add(x);const m=new we({color:6993128,transparent:!0,opacity:.35});for(const u of[-14,0,14]){const v=new C(new ae(5,4,.15),f);v.position.set(u,8,-Ye/2+.05),n.add(v);const b=new C(new ae(4.4,3.4,.08),m);b.position.set(u,8,-Ye/2+.06),n.add(b)}}function ug(n){const e=new te({color:15791336,roughness:.55,metalness:.05}),t=new te({color:4871528,roughness:.7,metalness:.05}),i=new te({color:13687016,roughness:.6,metalness:0}),a=new te({color:8952234,roughness:.4,metalness:.5}),s=[{x:-16,z:5},{x:0,z:-6},{x:16,z:5}];for(const{x:m,z:u}of s){const v=new C(new ae(7,3,3),t);v.position.set(m,1.5,u),v.castShadow=!0,n.add(v);const b=new C(new ae(7.2,.15,3.2),e);b.position.set(m,3.08,u),b.castShadow=!0,n.add(b);for(const[_,k]of[[-3.2,-1.3],[3.2,-1.3],[-3.2,1.3],[3.2,1.3]]){const w=new C(new ae(.2,3,.2),a);w.position.set(m+_,1.5,u+k),n.add(w)}for(let _=0;_<3;_++){const k=new C(new ae(2,.6,.05),i);k.position.set(m-2.2+_*2.2,1.8,u+1.52),n.add(k)}if(m===0){const _=new te({color:13426158,roughness:.3,metalness:.3}),k=new C(new ae(1.2,.2,.9),_);k.position.set(2.5,3.15,u),n.add(k);const w=new C(new he(.05,.05,.6,16),a);w.position.set(2.5,3.55,u-.3),n.add(w);const E=new C(new lt(.09,16,14),a);E.position.set(2.5,3.85,u),n.add(E)}}for(let m=-22;m<=22;m+=11)for(let u=0;u<3;u++){const v=new C(new ae(9,.12,1.2),i);v.position.set(m,5+u*2.2,-Ye/2+.8),n.add(v);for(const b of[-4,4]){const _=new C(new ae(.1,.5,1),a);_.position.set(m+b,4.75+u*2.2,-Ye/2+.8),n.add(_)}}const r=new C(new ae(3,3,22),t);r.position.set(-ft/2+2,1.5,0),r.castShadow=!0,n.add(r);const o=new C(new ae(3.2,.15,22.2),e);o.position.set(-ft/2+2,3.08,0),n.add(o);const l=new C(new ae(3,3,22),t);l.position.set(ft/2-2,1.5,0),l.castShadow=!0,n.add(l);const d=new C(new ae(3.2,.15,22.2),e);d.position.set(ft/2-2,3.08,0),n.add(d);const c=new te({color:6978186,roughness:.6,metalness:.1}),p=new te({color:8965341,transparent:!0,opacity:.4,roughness:.1,metalness:0}),f=new C(new ae(6,5,2.5),c);f.position.set(-20,4.5,-Ye/2+1.5),n.add(f);const h=new C(new ae(5,3,.08),p);h.position.set(-20,4.8,-Ye/2+2.8),n.add(h);const g=new C(new ae(6.2,3,2.8),t);g.position.set(-20,1.5,-Ye/2+1.6),n.add(g);const x=new C(new ae(6.2,.15,2.8),e);x.position.set(-20,3.08,-Ye/2+1.6),n.add(x)}function pg(n){const e=new te({color:11197934,transparent:!0,opacity:.7,roughness:.05,metalness:0}),t=new te({color:4033344,transparent:!0,opacity:.85,roughness:.15,metalness:0}),i=new te({color:8010768,transparent:!0,opacity:.85,roughness:.2,metalness:0}),a=new te({color:12597547,transparent:!0,opacity:.85,roughness:.15,metalness:0}),s=new te({color:16777215,roughness:.7,metalness:0}),r=new te({color:8952234,roughness:.35,metalness:.6});new te({color:16774604,roughness:.8});const o=[{x:-24,y:5.3,z:-Ye/2+.7,mat:t,r:.22,h:.7},{x:-22,y:5.3,z:-Ye/2+.7,mat:i,r:.18,h:.9},{x:-20,y:5.3,z:-Ye/2+.7,mat:a,r:.2,h:.75},{x:-18,y:5.3,z:-Ye/2+.7,mat:e,r:.16,h:.65},{x:-13,y:5.3,z:-Ye/2+.7,mat:i,r:.2,h:.85},{x:-11,y:5.3,z:-Ye/2+.7,mat:t,r:.25,h:.6},{x:-2,y:5.3,z:-Ye/2+.7,mat:a,r:.18,h:.8},{x:0,y:5.3,z:-Ye/2+.7,mat:e,r:.22,h:.7},{x:2,y:5.3,z:-Ye/2+.7,mat:t,r:.2,h:.9},{x:10,y:5.3,z:-Ye/2+.7,mat:i,r:.19,h:.7},{x:12,y:5.3,z:-Ye/2+.7,mat:a,r:.21,h:.8},{x:22,y:5.3,z:-Ye/2+.7,mat:e,r:.23,h:.65},{x:24,y:5.3,z:-Ye/2+.7,mat:t,r:.17,h:.9},{x:-23,y:7.5,z:-Ye/2+.7,mat:a,r:.2,h:.8},{x:-21,y:7.5,z:-Ye/2+.7,mat:e,r:.18,h:.7},{x:-1,y:7.5,z:-Ye/2+.7,mat:i,r:.22,h:.85},{x:1,y:7.5,z:-Ye/2+.7,mat:t,r:.2,h:.7},{x:21,y:7.5,z:-Ye/2+.7,mat:a,r:.19,h:.75}];for(const w of o){const E=new C(new he(w.r,w.r*.9,w.h,20),w.mat);E.position.set(w.x,w.y+w.h/2,w.z),n.add(E);const N=new C(new he(w.r*.7,w.r*.7,.12,20),s);N.position.set(w.x,w.y+w.h+.06,w.z),n.add(N)}hg(n,-ft/2+2.5,3.2,-6,r,s),fg(n,-ft/2+2.5,3.2,4,r,s),mg(n,ft/2-2.5,3.2,-5,r);for(let w=0;w<4;w++){const E=w%2===0?i:e,N=new C(new he(.22,.2,.5,20),E);N.position.set(ft/2-2.5+(w-1.5)*.7,3.5,5+w%2*.6),n.add(N)}const l=new we({color:16769154}),d=new C(new ae(3.5,5,.06),l);d.position.set(ft/2-.06,6,10),d.rotation.y=-Math.PI/2,n.add(d);const c=Hn(`⚠ KESELAMATAN
LABORATORIUM`,15022389);c.scale.set(4,1.6,1),c.position.set(ft/2-.3,6.5,10),n.add(c);const p=new C(new he(.06,.06,1.5,16),r);p.position.set(-ft/2+.2,9,14),p.rotation.z=Math.PI/2,n.add(p);for(const w of[-.5,0,.5]){const E=new C(new An(.14,.03,12,24,Math.PI),r);E.position.set(-ft/2+.25,8.6,14+w),E.rotation.y=Math.PI/2,n.add(E)}const f=new we({color:16448250}),h=new C(new ae(.05,2.5,1.5),f);h.position.set(-ft/2+.28,7.8,14),n.add(h);const g=new we({color:15158332}),x=new we({color:15965202});for(const[w,E,N]of[[-8,14,g],[8,14,x]]){const M=new C(new he(.45,.38,1,20),N);M.position.set(w,.5,E),n.add(M)}const m=new we({color:12597547}),u=new C(new he(.2,.22,1.1,20),m);u.position.set(ft/2-.8,1.8,-14),n.add(u);const v=new C(new he(.1,.2,.3,20),r);v.position.set(ft/2-.8,2.5,-14),n.add(v);const b=new we({color:16777215}),_=new C(new he(.7,.7,.1,24),b);_.rotation.x=Math.PI/2,_.position.set(8,10.5,-Ye/2+.1),n.add(_);const k=new C(new An(.7,.06,12,40),r);k.rotation.x=Math.PI/2,k.position.set(8,10.5,-Ye/2+.12),n.add(k)}function hg(n,e,t,i,a,s){const r=new C(new he(.65,.7,.7,24),s);r.position.set(e,t+.35,i),n.add(r);const o=new C(new he(.66,.66,.12,24),a);o.position.set(e,t+.76,i),n.add(o);const l=new C(new lt(.1,16,14),a);l.position.set(e,t+.88,i),n.add(l)}function fg(n,e,t,i,a,s){const r=new C(new ae(.7,.12,.55),a);r.position.set(e,t+.06,i),n.add(r);const o=new C(new ae(.12,1.4,.12),a);o.position.set(e,t+.76,i-.1),n.add(o);const l=new C(new he(.1,.12,.5,16),a);l.position.set(e,t+1.7,i-.15),l.rotation.z=.4,n.add(l);const d=new C(new he(.06,.08,.35,16),s);d.position.set(e+.05,t+.75,i+.05),n.add(d)}function mg(n,e,t,i,a){const s=new te({color:2899536,roughness:.6,metalness:.15}),r=new C(new ae(1,.18,1),s);r.position.set(e,t+.09,i),n.add(r);const o=new C(new he(.38,.38,.04,20),a);o.position.set(e,t+.2,i),n.add(o);const l=new te({color:16737792,emissive:16737792,emissiveIntensity:.6,transparent:!0,opacity:.7}),d=new C(new vn(.3,20),l);d.rotation.x=-Math.PI/2,d.position.set(e,t+.22,i),n.add(d);const c=new we({color:11197934,transparent:!0,opacity:.8}),p=new C(new lt(.3,20,16),c);p.position.set(e,t+.55,i),n.add(p);const f=new C(new he(.08,.12,.35,20),c);f.position.set(e,t+.9,i),n.add(f)}function yd(n){const e=[];{const t=Gr[0],i=new rn;i.position.copy(t);const a=new we({color:11197934,transparent:!0,opacity:.75}),s=new we({color:7027216,transparent:!0,opacity:.9}),r=new we({color:8952234}),o=new we({color:16448250}),l=new we({color:15791336}),d=new C(new ae(6.8,.12,2.8),l);d.position.set(0,3.14,0),i.add(d);const c=new we({color:14540253}),p=new C(new ae(2,.18,.45),c);p.position.set(-1.5,3.3,.2),i.add(p);for(let M=0;M<5;M++){const L=new C(new he(.07,.07,.55,16),s);L.position.set(-2.2+M*.42,3.62,.2),i.add(L)}const f=new C(new lt(.38,20,16),a);f.position.set(.8,3.62,-.3),i.add(f);const h=new C(new he(.1,.15,.45,20),a);h.position.set(.8,4.05,-.3),i.add(h);const g=new C(new lt(.32,18,16),s);g.position.set(.8,3.58,-.3),i.add(g);const x=new C(new he(.04,.04,1,16),r);x.position.set(.8,4.2,-.3),i.add(x);const m=new C(new ae(.5,.35,.15),o);m.position.set(.8,4.85,-.3),i.add(m);const u=new we({color:16775399}),v=new C(new ae(.7,.9,.05),u);v.position.set(2.3,3.85,-.5),v.rotation.y=-.3,i.add(v);const b=new we({color:8952234}),_=new C(new ae(.35,.12,.06),b);_.position.set(2.3,4.34,-.46),_.rotation.y=-.3,i.add(_);const k=Hn("❓ Fenomena 1 — Kualitas Air",54527);k.position.set(0,3.2,0),i.add(k);const w=Hn("✅ Selesai",3066993);w.position.set(0,4.2,0),w.visible=!1,i.add(w);const E=new te({color:54527,emissive:54527,emissiveIntensity:.5,transparent:!0,opacity:.25,side:zt}),N=new C(new vn(3.2,32),E);N.rotation.x=-Math.PI/2,N.position.y=.02,i.add(N),n.add(i),e.push({group:i,glowMat:E,idx:0,pos:t,done:!1,doneSprite:w,_probe:x,_meter:m})}{const t=Gr[1],i=new rn;i.position.copy(t);const a=new we({color:11197934,transparent:!0,opacity:.7}),s=new we({color:5910024,transparent:!0,opacity:.9});new we({color:1735226,transparent:!0,opacity:.85});const r=new we({color:8952234}),o=new we({color:16448250});new we({color:15965202});const l=new C(new ae(6.8,.12,2.8),new we({color:15791336}));l.position.set(0,3.14,0),i.add(l);const d=new C(new ae(.22,.9,.14),o);d.position.set(-2,3.75,0),i.add(d);const c=new C(new ae(.16,.3,.05),new we({color:1714714}));c.position.set(-2,3.88,.1),i.add(c);const p=new C(new he(.03,.03,.5,16),r);p.position.set(-2,3.05,0),i.add(p);const f=new C(new he(.42,.38,.8,20),a);f.position.set(-.5,3.7,.2),i.add(f);const h=new C(new he(.38,.34,.6,20),s);h.position.set(-.5,3.6,.2),i.add(h),new we({color:2899536});const g=new C(new he(.05,.05,1.4,14),r);g.position.set(1.2,3.9,-.7),i.add(g);const x=new C(new ae(1.4,1,.05),new we({color:16775399}));x.position.set(1.2,4.85,-.7),i.add(x);const m=Hn("K⁺  Ca²⁺  Cl⁻",1735226);m.scale.set(2.8,.75,1),m.position.set(1.2,4.92,-.6),i.add(m);const u=new C(new ae(.55,.4,.22),o);u.position.set(2.2,3.4,0),i.add(u);const v=new C(new ae(.38,.22,.06),new we({color:662026}));v.position.set(2.2,3.44,.14),i.add(v);for(const[E,N]of[[2.8,s],[3.3,a]]){const M=new C(new he(.18,.16,.7,20),N);M.position.set(E,3.55,-.5),i.add(M)}const b=Hn("❓ Fenomena 2 — Komposisi TDS",16750848);b.position.set(0,3.2,0),i.add(b);const _=Hn("✅ Selesai",3066993);_.position.set(0,4.2,0),_.visible=!1,i.add(_);const k=new te({color:16750848,emissive:16750848,emissiveIntensity:.5,transparent:!0,opacity:.25,side:zt}),w=new C(new vn(3.2,32),k);w.rotation.x=-Math.PI/2,w.position.y=.02,i.add(w),n.add(i),e.push({group:i,glowMat:k,idx:1,pos:t,done:!1,doneSprite:_,_beaker:f,_liq:h})}{const t=Gr[2],i=new rn;i.position.copy(t);const a=new we({color:8018990}),s=new we({color:5025616}),r=new we({color:11059264}),o=new we({color:11887901}),l=new we({color:11197934,transparent:!0,opacity:.7}),d=new we({color:16448250}),c=new we({color:8952234}),p=new C(new ae(6.8,.12,2.8),new we({color:15791336}));p.position.set(0,3.14,0),i.add(p);const f=[{x:-2,mat:s,height:.9,label:`Thn 1
62%`,lColor:5025616},{x:0,mat:r,height:1.1,label:`Thn 2
78%`,lColor:11059264},{x:2,mat:o,height:.35,label:`Thn 3
34%`,lColor:15158332}];for(const I of f){const B=new C(new ae(1.2,.2,.9),a);B.position.set(I.x,3.35,.2),i.add(B);for(let P=-1;P<=1;P+=2){const F=new C(new he(.04,.055,I.height,5),I.mat),X=I.x+P*.22;F.position.set(X,3.45+I.height/2,.2),i.add(F);const ne=new C(new lt(I.height>.8?.14:.06,12,8),I.mat);ne.position.set(X+(I.mat===o?.1:0),3.45+I.height+.08,.2),i.add(ne)}const Y=Hn(I.label,I.lColor);Y.scale.set(2,.75,1),Y.position.set(I.x,3.45+I.height+.6,.2),i.add(Y)}const h=new C(new ae(.22,.75,.14),d);h.position.set(-2.9,3.65,-.4),i.add(h);const g=new C(new he(.025,.025,.55,16),c);g.position.set(-2.9,3.12,-.4),i.add(g);const x=new C(new ae(.15,.22,.05),new we({color:662026}));x.position.set(-2.9,3.72,-.33),i.add(x);const m=new we({color:8018990,transparent:!0,opacity:.9}),u=new C(new he(.28,.25,.6,20),l);u.position.set(2.8,3.55,-.4),i.add(u);const v=new C(new he(.24,.22,.38,20),m);v.position.set(2.8,3.44,-.4),i.add(v);const b=new we({color:16775399}),_=new C(new ae(.8,1,.05),b);_.position.set(3.2,3.95,-.6),_.rotation.y=-.25,i.add(_);const k=[5025616,11059264,15158332],w=[.22,.3,.1];for(let I=0;I<3;I++){const B=new we({color:k[I]}),Y=new C(new ae(.12,w[I],.04),B);Y.position.set(3.05+I*.2,3.5+w[I]/2,-.57),Y.rotation.y=-.25,i.add(Y)}const E=Hn("❓ Fenomena 3 — Panen Padi",4521864);E.position.set(0,3.2,0),i.add(E);const N=Hn("✅ Selesai",3066993);N.position.set(0,4.4,0),N.visible=!1,i.add(N);const M=new te({color:4521864,emissive:4521864,emissiveIntensity:.5,transparent:!0,opacity:.25,side:zt}),L=new C(new vn(3.2,32),M);L.rotation.x=-Math.PI/2,L.position.y=.02,i.add(L),n.add(i),e.push({group:i,glowMat:M,idx:2,pos:t,done:!1,doneSprite:N,_stems:i.children})}return e}function Hn(n,e){const t=document.createElement("canvas");t.width=320,t.height=72;const i=t.getContext("2d");i.fillStyle="rgba(10,20,40,0.85)",i.beginPath(),i.roundRect(4,8,312,56,16),i.fill();const a=e>>16&255,s=e>>8&255,r=e&255;i.strokeStyle=`rgb(${a},${s},${r})`,i.lineWidth=3,i.beginPath(),i.roundRect(4,8,312,56,16),i.stroke(),i.fillStyle=`rgb(${a},${s},${r})`,i.font="bold 24px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,160,36);const o=new qs(t),l=new hi({map:o,transparent:!0}),d=new Ni(l);return d.scale.set(5,1.1,1),d}function gg(n,e){for(const t of n){if(t.done){t.glowMat.emissiveIntensity=.15+Math.sin(e*1.2)*.05,t.glowMat.opacity=.12;continue}const i=.5+.5*Math.sin(e*2.2+t.idx*1.3);if(t.glowMat.emissiveIntensity=.3+i*.5,t.glowMat.opacity=.15+i*.15,t.idx===0&&(t._probe&&(t._probe.position.y=4.2+Math.sin(e*1.4)*.12),t._meter&&(t._meter.position.y=4.85+Math.sin(e*1.4)*.12)),t.idx===1&&t._liq){const a=1+Math.sin(e*2.5)*.04;t._liq.scale.set(1,a,1)}t.idx===2&&(t.group.rotation.z=Math.sin(e*.6)*.008),t.group.position.y=Math.sin(e*.5+t.idx)*.04}}const It=70,nn=50,ut=18;new T(-18,0,10),new T(0,0,-8),new T(18,0,10);function xg(){const n=new va;n.background=new $e(1708552),n.fog=new Ka(1708552,35,85),n.add(new Ys(16771248,.4));const e=[[-22,ut-1,10],[-22,ut-1,-10],[0,ut-1,10],[0,ut-1,-10],[22,ut-1,10],[22,ut-1,-10]];for(const[s,r,o]of e){const l=new di(16765056,1.1,30);l.position.set(s,r,o),n.add(l)}const t=new di(16737792,1.5,18);t.position.set(-18,6,8),n.add(t);const i=new di(8956671,.8,14);i.position.set(0,6,-6),n.add(i);const a=new Pn(16773324,.4);return a.position.set(10,20,10),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),n.add(a),{scene:n}}function bg(n){vg(n),yg(n),Eg(n)}function vg(n){const e=new te({color:5919299,roughness:.9,metalness:0}),t=new te({color:4866096,roughness:.85,metalness:0}),i=new te({color:3024410,roughness:.9,metalness:0}),a=new C(new kt(It,nn),e);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);const s=new _a({color:3813920});for(let g=-It/2;g<=It/2;g+=5){const x=new Et().setFromPoints([new T(g,.01,-nn/2),new T(g,.01,nn/2)]);n.add(new Yn(x,s))}for(let g=-nn/2;g<=nn/2;g+=5){const x=new Et().setFromPoints([new T(-It/2,.01,g),new T(It/2,.01,g)]);n.add(new Yn(x,s))}const r=new C(new kt(It,nn),i);r.rotation.x=Math.PI/2,r.position.y=ut,n.add(r);const o=new we({color:1971728});for(let g=-It/2;g<=It/2;g+=4){const x=new C(new ae(.4,.15,nn),o);x.position.set(g,ut,0),n.add(x)}const l=.6,d=[{pos:[0,ut/2,-nn/2],size:[It,ut,l]},{pos:[0,ut/2,nn/2],size:[It,ut,l]},{pos:[-It/2,ut/2,0],size:[l,ut,nn]},{pos:[It/2,ut/2,0],size:[l,ut,nn]}];for(const g of d){const x=new C(new ae(...g.size),t);x.position.set(...g.pos),n.add(x)}const c=new we({color:3813408}),p=[[-It/2+1,ut/2,-nn/2+1],[It/2-1,ut/2,-nn/2+1],[-It/2+1,ut/2,nn/2-1],[It/2-1,ut/2,nn/2-1],[-It/2+1,ut/2,0],[It/2-1,ut/2,0]];for(const[g,x,m]of p){const u=new C(new ae(1.2,ut,1.2),c);u.position.set(g,x,m),n.add(u)}const f=new we({color:8947848}),h=new te({color:16774592,emissive:16765024,emissiveIntensity:1.2});for(const[g,,x]of _g){const m=new C(new ae(1.5,.4,.6),f);m.position.set(g,ut-.8,x),n.add(m);const u=new C(new lt(.25,16,10),h);u.position.set(g,ut-1.1,x),n.add(u)}}const _g=[[-22,ut-1,10],[-22,ut-1,-10],[0,ut-1,10],[0,ut-1,-10],[22,ut-1,10],[22,ut-1,-10]];function yg(n){wg(n,-18,0,6),Mg(n,0,0,-12),Sg(n,18,0,6)}function wg(n,e,t,i){const a=new rn;a.position.set(e,t,i);const s=new we({color:3944480}),r=new C(new ae(5,.4,5),s);r.position.y=.2,a.add(r);const o=new te({color:7372944,metalness:.7,roughness:.3}),l=new C(new he(2,2,5.5,24),o);l.position.y=3.15,a.add(l);const d=new C(new lt(2,24,14,0,Math.PI*2,0,Math.PI/2),o);d.position.y=5.9,a.add(d);const c=new C(new lt(2,24,14,0,Math.PI*2,Math.PI/2,Math.PI/2),o);c.position.y=.4,a.add(c);const p=new we({color:9474208});for(let k=1.5;k<=5.5;k+=1.5){const w=new C(new An(2.06,.09,10,40),p);w.rotation.x=Math.PI/2,w.position.y=k+.5,a.add(w)}const f=new te({color:6719658,metalness:.6,roughness:.4}),h=new C(new he(.12,.12,2,16),f);h.position.set(.8,7.2,0),a.add(h);const g=new C(new he(.15,.15,1.8,16),f);g.rotation.z=Math.PI/2,g.position.set(-2.8,1.2,0),a.add(g);const x=new C(new lt(.18,16,14),f);x.position.set(-3.7,1.2,0),a.add(x);const m=new C(new he(.15,.15,1.2,16),f);m.position.set(-3.7,.6,0),a.add(m);const u=new te({color:13378082,metalness:.5,roughness:.5}),v=new C(new he(.22,.22,.5,16),u);v.rotation.z=Math.PI/2,v.position.set(-2.85,2.5,0),a.add(v);const b=new C(new he(.1,.1,2.5,16),f);b.position.set(-.5,8,0),a.add(b);const _=new te({color:8965375,transparent:!0,opacity:.35,roughness:.2,metalness:0});for(let k=0;k<5;k++){const w=new C(new lt(.12+k*.04,12,10),_);w.position.set(-.5,8.8+k*.28,0),w.userData.bubbleIndex=k,a.add(w)}return Uo(a,`FERMENTOR
DRUM`,0,9.5,0,16752704),n.add(a),a}function Mg(n,e,t,i){const a=new rn;a.position.set(e,t,i);const s=new te({color:11189196,metalness:.8,roughness:.25}),r=new te({color:5596791,metalness:.7,roughness:.35}),o=new te({color:8952234,metalness:.6,roughness:.4}),l=new C(new ae(4,.4,4),r);l.position.y=.2,a.add(l);const d=new C(new he(.8,1,8,24),s);d.position.y=4.4,a.add(d);for(let E=1.5;E<=7.5;E+=1.2){const N=new C(new he(.95,.95,.12,24),r);N.position.y=E,a.add(N)}const c=new C(new he(.7,.7,1.5,20),r);c.position.y=9.2,a.add(c);const p=new te({color:8956620,metalness:.8,roughness:.2});for(let E=0;E<4;E++){const N=new C(new An(.5,.06,12,36),p);N.rotation.x=Math.PI/2,N.position.y=9.1+E*.28,a.add(N)}const f=new C(new lt(.7,18,10,0,Math.PI*2,0,Math.PI/2),r);f.position.y=10.2,a.add(f);const h=new C(new he(.12,.12,2.5,16),o);h.rotation.z=Math.PI/2,h.position.set(-1.85,6.5,0),a.add(h);const g=new C(new he(.1,.1,1.5,16),o);g.position.set(.5,11,0),a.add(g);const x=new C(new he(.13,.13,2,16),o);x.rotation.z=Math.PI/2,x.position.set(1.8,9.6,0),a.add(x);const m=new C(new he(.16,.16,1.4,16),o);m.position.set(.8,.3,0),a.add(m);const u=new te({color:8016432,metalness:.3,roughness:.7}),v=new C(new he(.65,.6,1.2,20),u);v.position.set(.8,-.2,0),a.add(v);const b=new C(new he(.66,.66,.08,20),r);b.position.set(.8,.42,0),a.add(b);const _=new te({color:11197951,transparent:!0,opacity:.5}),k=new C(new he(.07,.07,4,16),_);k.position.set(-.92,3,.7),a.add(k);const w=new C(new he(.06,.06,2.5,16),new te({color:6332608,transparent:!0,opacity:.7}));return w.position.set(-.92,2.25,.7),a.add(w),Uo(a,`DESTILATOR
KOLOM`,0,11.5,0,8441087),n.add(a),a}function Sg(n,e,t,i){const a=new rn;a.position.set(e,t,i);const s=new te({color:4473924,metalness:.6,roughness:.5}),r=new we({color:9127187}),o=new te({color:16737792,emissive:16724736,emissiveIntensity:.9}),l=new te({color:7368816,metalness:.8,roughness:.3}),d=new C(new ae(3.5,2,3),r);d.position.y=1,a.add(d);const c=new C(new ae(3.5,.15,3),s);c.position.y=2.08,a.add(c);for(let E=-1.4;E<=1.4;E+=.5){const N=new C(new ae(.1,.16,2.5),new we({color:2236962}));N.position.set(E,2.08,0),a.add(N)}const p=new C(new jn(.5,1.2,14),o);p.position.y=2.9,a.add(p);const f=new C(new jn(.3,.9,14),o.clone());f.position.set(.6,2.85,.4),a.add(f);const h=new C(new he(1.2,1,1.4,24),l);h.position.y=3.75,a.add(h);const g=new te({color:8145424,transparent:!0,opacity:.85}),x=new C(new he(1.18,1.18,.8,24),g);x.position.y=3.85,a.add(x);const m=new te({color:14540253,transparent:!0,opacity:.25});for(let E=0;E<3;E++){const N=new C(new lt(.25+E*.12,12,10),m);N.position.set((E-1)*.4,5+E*.5,(E-1)*.3),N.userData.steamIndex=E,a.add(N)}const u=new te({color:13421772,metalness:.5}),v=new C(new he(.22,.22,.08,20),u);v.rotation.x=Math.PI/2,v.position.set(1.5,3.2,-1.4),a.add(v);const b=new C(new vn(.2,12),new te({color:16777215}));b.rotation.x=-Math.PI/2,b.position.set(1.5,3.21,-1.62),a.add(b);const _=new we({color:3355443}),k=new C(new he(.25,.3,3,20),_);k.position.set(-1.2,3.5,-1.2),a.add(k);const w=new te({color:8947848,transparent:!0,opacity:.2});for(let E=0;E<4;E++){const N=new C(new lt(.18+E*.1,12,10),w);N.position.set(-1.2,5+E*.6,-1.2),N.userData.smokeIndex=E,a.add(N)}return Uo(a,`KOMPOR
PEMANAS`,0,7.5,0,16746564),n.add(a),a}function Eg(n){const e=new te({color:5910544,metalness:.2,roughness:.8}),t=new te({color:8947848,metalness:.6,roughness:.4}),i=[[-28,0,-16],[-28,0,-12],[-28,0,-8],[-24,0,-16],[-24,0,-12],[-24,0,-8]];for(const[c,,p]of i){const f=new C(new he(.7,.65,1.5,20),e);f.position.set(c,.75,p),n.add(f);const h=new C(new An(.72,.05,10,28),t);h.rotation.x=Math.PI/2,h.position.set(c,1.2,p),n.add(h);const g=h.clone();g.position.set(c,.4,p),n.add(g)}Ds(n,`MOLASSES
STORAGE`,-26,3.2,-12,16755234,1.8);const a=new we({color:5275840}),s=[[28,0,-18],[28,0,-15],[28,0,-12]];for(const[c,,p]of s){const f=new C(new ae(.8,.5,1.2),a);f.position.set(c,.25,p),n.add(f);const h=new C(new ae(.8,.5,1.2),a);h.position.set(c+.9,.25,p),n.add(h)}Ds(n,"NPK / UREA",29,2.8,-15,8956671,1.6);const r=new te({color:13412928,metalness:.5});for(let c=0;c<3;c++){const p=new C(new he(.3,.3,.9,20),r);p.position.set(28,.45,-6+c*1.2),n.add(p)}Ds(n,`RAGI
(YEAST)`,29,2.4,-5,16768384,1.5),Wr(n,-It/2+.8,5,-10,`⚠️ BAHAYA
GAS BERTEKANAN`),Wr(n,-It/2+.8,5,10,`🔥 AREA
PANAS`),Wr(n,It/2-.8,5,-10,`☣️ LIMBAH
VINASSE`),Vr(n,-18,.05,5,0),Vr(n,-9,.05,3,-Math.PI/4),Vr(n,9,.05,3,Math.PI/4),Tg(n);const o=new te({color:5583633}),l=new C(new ae(2.5,.15,2.5),o);l.position.set(0,.08,-12),n.add(l);const d=new C(new ae(2.3,.08,2.3),new te({color:3807232,transparent:!0,opacity:.9}));d.position.set(0,.12,-12),n.add(d)}function Tg(n){const e=new te({color:10066346,metalness:.6,roughness:.4}),t=new C(new he(.14,.14,22,16),e);t.rotation.z=Math.PI/2,t.position.set(-9,11,0),n.add(t);const i=new C(new he(.14,.14,5,16),e);i.position.set(0,8.5,-12),n.add(i);const a=new C(new he(.14,.14,20,16),e);a.rotation.z=Math.PI/2,a.position.set(9,11,0),n.add(a);for(const[s,r]of[[-18,6],[0,-12],[18,6]]){const o=new C(new he(.14,.14,3,16),e);o.position.set(s,9.5,r),n.add(o)}}function Vr(n,e,t,i,a){const s=new we({color:16755200}),r=new C(new ae(.3,.05,5),s);r.position.set(e,t,i),r.rotation.y=a,n.add(r);const o=new C(new jn(.5,.9,4),s);o.rotation.x=Math.PI/2,o.rotation.z=a,o.position.set(e+Math.sin(a)*3,t,i+Math.cos(a)*-3),n.add(o)}function Wr(n,e,t,i,a){const s=new we({color:16763904}),r=new C(new ae(1.8,1.2,.06),s);r.position.set(e,t,i),e<0?r.rotation.y=Math.PI/2:r.rotation.y=-Math.PI/2,n.add(r),Ds(n,a,e,t,i,2236962,1.2,r.rotation.y)}function Uo(n,e,t,i,a,s=16777215){const r=e.split(`
`),o=document.createElement("canvas");o.width=256,o.height=64*r.length;const l=o.getContext("2d");l.fillStyle="rgba(0,0,0,0)",l.fillRect(0,0,o.width,o.height);const d="#"+s.toString(16).padStart(6,"0");l.fillStyle=d,l.font="bold 28px sans-serif",l.textAlign="center",l.textBaseline="middle",r.forEach((h,g)=>{l.fillText(h,128,32+g*64)});const c=new qs(o),p=new hi({map:c,depthTest:!1}),f=new Ni(p);f.scale.set(3.5,1*r.length,1),f.position.set(t,i,a),n.add(f)}function Ds(n,e,t,i,a,s=16777215,r=2,o=0){const l=e.split(`
`),d=document.createElement("canvas");d.width=256,d.height=64*l.length;const c=d.getContext("2d");c.fillStyle="rgba(0,0,0,0)",c.fillRect(0,0,d.width,d.height);const p="#"+s.toString(16).padStart(6,"0");c.fillStyle=p,c.font="bold 28px sans-serif",c.textAlign="center",c.textBaseline="middle",l.forEach((x,m)=>c.fillText(x,128,32+m*64));const f=new qs(d),h=new hi({map:f,depthTest:!1}),g=new Ni(h);g.scale.set(r*l.length*.7+1,r*.7*l.length*.5+.5,1),g.position.set(t,i,a),n.add(g)}const wd=60,Md=50,Ln=new T(0,0,-10);function Ag(){const n=new va;n.background=new $e(8900331),n.fog=new ja(11589872,.008),n.add(new bd(10409208,8034896,1.1));const e=new Pn(16774604,2.4);e.position.set(25,40,20),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.near=.5,e.shadow.camera.far=140,e.shadow.camera.left=-44,e.shadow.camera.right=44,e.shadow.camera.top=44,e.shadow.camera.bottom=-44,n.add(e);const t=new Pn(12114175,.6);t.position.set(-20,18,-15),n.add(t);const i=new di(16769168,.8,35);i.position.set(0,5,0),n.add(i);const a=new di(16772761,1,18);return a.position.set(Ln.x,8,Ln.z),n.add(a),{scene:n}}function kg(n){Lg(n),Cg(n),Rg(n),Pg(n),Dg(n),Ig(n),Ng(n)}function Lg(n){const e=new we({color:1849872});new we({color:2760202});const t=new C(new kt(wd*2,Md*2),e);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const i=new we({color:4864032}),a=new C(new kt(3,22),i);a.rotation.x=-Math.PI/2,a.position.set(0,.01,0),n.add(a)}function Cg(n){const e=new we({color:8017200}),t=new _a({color:4874304}),i=wd/2,a=Md/2,s=[[-i,-a],[i,-a],[i,a],[-i,a],[-i,-a]],r=s.map(([l,d])=>new T(l,1.2,d)),o=new Et().setFromPoints(r);n.add(new Yn(o,t));for(let l=0;l<4;l++){const[d,c]=s[l],[p,f]=s[l+1],h=Math.ceil(Math.sqrt((p-d)**2+(f-c)**2)/8);for(let g=0;g<=h;g++){const x=g/h,m=new C(new he(.1,.1,2.4,5),e);m.position.set(d+(p-d)*x,1.2,c+(f-c)*x),n.add(m)}}}function Rg(n){const e=new we({color:3815472}),t=new we({color:2762776}),i=new we({color:1574912,transparent:!0,opacity:.92}),a=new we({color:667664,transparent:!0,opacity:.85}),s=.6,r=22,o=16,l=1.5,d=new C(new ae(r+s*2,l,s),e);d.position.set(0,l/2,-8),n.add(d);const c=d.clone();c.position.set(0,l/2,o/2),n.add(c);const p=new C(new ae(s,l,o),e);p.position.set(r/2,l/2,0),n.add(p);const f=p.clone();f.position.set(-r/2,l/2,0),n.add(f);const h=new C(new kt(r,o),t);h.rotation.x=-Math.PI/2,h.position.y=.01,n.add(h);const g=new C(new kt(r-s*2,o-s*2),i);g.rotation.x=-Math.PI/2,g.position.y=.8,n.add(g);const x=new C(new ae(s,l,o),e);x.position.set(4,l/2,0),n.add(x);const m=new C(new kt(r/2-4-s*1.5,o-s*2),a);m.rotation.x=-Math.PI/2,m.position.set(r/2-(r/4-2+s*.5)-1.5,.8,0),n.add(m),Sd(n,`REAKTOR
BIOREMEDIASI`,0,2.5,-o/2-1.2,4259712)}function Pg(n){const e=new we({color:5271648}),t=new we({color:3162160}),i=new C(new he(.22,.22,14,20),e);i.rotation.x=Math.PI/2,i.position.set(-1.2,1.8,-3),n.add(i);const a=new C(new ae(.5,.5,.5),e);a.position.set(-1.2,1.8,-8),n.add(a);const s=new C(new he(.22,.22,2,20),e);s.position.set(-1.2,.8,-8.2),n.add(s);for(const r of[-2,-5,-8]){const o=new C(new ae(.3,.6,.15),t);o.position.set(-.7,2.1,r),n.add(o)}}function Dg(n){const e=new we({color:9056272}),t=new we({color:13388320}),i=new we({color:3160112}),a=Ln.x,s=Ln.z,r=new C(new he(.15,.2,3.5,16),i);r.position.set(a,1.75,s),n.add(r);const o=new C(new ae(1,.8,1.2),e);o.position.set(a,3.5,s),n.add(o);const l=new C(new An(.55,.1,12,32),t);l.position.set(a,3.5,s-.7),l.rotation.x=Math.PI/2,n.add(l);for(let d=0;d<4;d++){const c=new C(new he(.05,.05,1,14),t);c.rotation.z=d/4*Math.PI,c.position.set(a,3.5,s-.7),n.add(c)}Sd(n,`KRAN
VINASSE`,a,5.5,s,16752736)}function Ig(n){const e=new we({color:1728544}),t=new we({color:2785344,transparent:!0,opacity:.8}),i=[[-7,-4],[-8,0],[-7,3],[-9,-2]];for(const[r,o]of i){const l=new C(new kt(2+Math.random()*1.5,1.2+Math.random()),t);l.rotation.x=-Math.PI/2,l.position.set(r,.85,o),n.add(l)}const a=[[-24,-18],[-20,18],[22,-14],[26,8],[-28,4],[16,20],[-12,-20],[18,-20]];for(const[r,o]of a)Ug(n,r,o,e);const s=new we({color:9089088});for(let r=-3;r<=3;r++){const o=new C(new he(.07,.09,3.5+Math.random(),6),s);o.position.set(-28+r*.4,1.75,-22+Math.random()*2),n.add(o)}}function Ug(n,e,t,i){const a=.6+Math.random()*.5,s=new C(new jn(.6+Math.random()*.3,a,6),i);s.position.set(e,a/2,t),n.add(s)}function Ng(n){const e=new Ct({color:6993128,side:Qt}),t=new C(new lt(120,20,14),e);n.add(t);const i=new Ct({color:16776672,side:zt}),a=new C(new vn(8,24),i);a.position.set(30,22,-88),a.lookAt(0,14,0),n.add(a);const s=new Ct({color:16774560,transparent:!0,opacity:.35,side:zt}),r=new C(new vn(13,24),s);r.position.copy(a.position),r.rotation.copy(a.rotation),n.add(r);const o=new Ct({color:16448250,transparent:!0,opacity:.88,side:zt});[[0,22,-85,1.1],[-35,20,-78,.9],[50,21,-80,1],[-30,22,85,1],[35,20,80,.85],[-90,21,10,.9],[90,20,-5,.8]].forEach(([l,d,c,p])=>{const f=new T(l,d,c).normalize();[-1,0,1].forEach(h=>{const x=new T().crossVectors(f,new T(0,1,0)).normalize().clone().multiplyScalar(h*7*p),m=new C(new lt(5*p,8,6),o);m.position.set(l+x.x,d+(h===0?2*p:0),c+x.z),n.add(m)})})}function Og(n){const e=new Ct({color:16744480,transparent:!0,opacity:.6,side:zt}),t=new C(new An(1.2,.25,10,32),e);t.position.set(Ln.x,5.5,Ln.z),t.rotation.x=Math.PI/2,n.add(t);const i=new hi({color:3066993}),a=new Ni(i);return a.scale.set(1.5,1.5,1.5),a.position.set(Ln.x,7,Ln.z),a.visible=!1,n.add(a),{idx:0,pos:{x:Ln.x,z:Ln.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isValve:!0}}function zg(n,e){!n||n.done||(n.glowMat.opacity=.4+.35*Math.sin(e*3.5),n.glowMesh.rotation.z=e*1.2)}function Sd(n,e,t,i,a,s){const r=new C(new ae(2.5,.8,.1),new Ct({color:s}));r.position.set(t,i,a),n.add(r)}const aa=56,sa=44,Cn=new T(0,0,-14);function Fg(){const n=new va;n.background=new $e(1715780),n.fog=new ja(1583168,.012),n.add(new Ys(10537192,1));const e=new Pn(15267071,1.6);e.position.set(0,20,5),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=80,e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,n.add(e);const t=new di(6343935,2,28);t.position.set(Cn.x,4,Cn.z),n.add(t);const i=new Pn(9482448,.8);return i.position.set(-18,10,-10),n.add(i),{scene:n}}function Bg(n){Hg(n),Gg(n),Vg(n),Wg(n),Xg(n)}function Hg(n){const e=new te({color:1712688,roughness:.9,metalness:.05}),t=new te({color:1846332,roughness:.85,metalness:0}),i=new te({color:1120288,roughness:1,metalness:0}),a=aa/2,s=sa/2,r=10,o=new C(new kt(aa,sa),e);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);const l=new C(new kt(aa,sa),i);l.rotation.x=Math.PI/2,l.position.y=r,n.add(l);const d=[{pos:[0,r/2,-s],rot:[0,0,0],size:[aa,r]},{pos:[0,r/2,s],rot:[0,Math.PI,0],size:[aa,r]},{pos:[-a,r/2,0],rot:[0,Math.PI/2,0],size:[sa,r]},{pos:[a,r/2,0],rot:[0,-Math.PI/2,0],size:[sa,r]}];for(const f of d){const h=new C(new kt(...f.size),t);h.position.set(...f.pos),h.rotation.set(...f.rot),n.add(h)}const c=new Ct({color:9488639});for(let f=-18;f<=18;f+=12){const h=new C(new ae(.3,.08,18),c);h.position.set(f,r-.05,0),n.add(h)}const p=new _a({color:1716304});for(let f=-a;f<=a;f+=4){const h=[new T(f,.01,-s),new T(f,.01,s)];n.add(new Yn(new Et().setFromPoints(h),p))}for(let f=-s;f<=s;f+=4){const h=[new T(-a,.01,f),new T(a,.01,f)];n.add(new Yn(new Et().setFromPoints(h),p))}}function Gg(n){const e=new te({color:2767434,roughness:.7}),t=new te({color:1714224,roughness:.8}),i=new te({color:2130080,transparent:!0,opacity:.35,roughness:.1,metalness:.1}),a=new te({color:2099712,transparent:!0,opacity:.85,roughness:.3}),s=new te({color:4213328,roughness:.5,metalness:.3});[{x:-16,z:2},{x:0,z:2},{x:16,z:2}].forEach(({x:o,z:l})=>{const d=new C(new ae(8,.15,3.5),e);d.position.set(o,3.1,l),d.castShadow=!0,d.receiveShadow=!0,n.add(d);for(const[x,m]of[[-3.5,-1.4],[3.5,-1.4],[-3.5,1.4],[3.5,1.4]]){const u=new C(new ae(.15,3.1,.15),t);u.position.set(o+x,1.55,l+m),n.add(u)}const c=new C(new ae(3,1.6,1.6),i);c.position.set(o-1,4.1,l),n.add(c);const p=new C(new kt(2.8,1.5),a);p.rotation.x=-Math.PI/2,p.position.set(o-1,3.42,l),n.add(p);const f=new C(new ae(.5,.4,.4),s);f.position.set(o+2.2,3.35,l-.5),n.add(f);const h=new te({color:8429712,roughness:.6}),g=new C(new he(.04,.04,.9,8),h);g.position.set(o+1.8,3.75,l-.5),n.add(g)})}function Vg(n){const e=new te({color:2767402,roughness:.8}),t=new te({color:4214880,roughness:.6,metalness:.2}),i=new te({color:6303776,roughness:.7}),a=new Ct({color:4259788});for(let s=-18;s<=18;s+=18){const r=new C(new ae(8,6,.2),e);r.position.set(s,3,-22+.15),n.add(r);for(let o=0;o<3;o++){const l=new C(new ae(7.6,.08,.5),e);l.position.set(s,1.2+o*2,-22+.45),n.add(l);for(let c=-2;c<=2;c++){const p=.3+Math.random()*.5,f=new C(new he(.18,.18,p,8),c%2===0?t:i);f.position.set(s+c*1.4,1.25+o*2+p/2,-22+.5),n.add(f)}const d=new C(new ae(6,.06,.08),a);d.position.set(s,1.18+o*2,-22+.6),n.add(d)}}}function Wg(n){const e=new te({color:1714224,roughness:.6,metalness:.3}),t=new te({color:6192,roughness:.1,metalness:.2,emissive:new $e(16544),emissiveIntensity:.5}),i=new te({color:3160128,roughness:.5,metalness:.5}),a=new te({color:2765376,roughness:.8}),s=Cn.x,r=Cn.z,o=new C(new he(.5,.65,3.4,16),e);o.position.set(s,1.7,r),o.castShadow=!0,n.add(o);const l=new C(new ae(2.4,1.8,.12),i);l.position.set(s,4.4,r),n.add(l);const d=new C(new ae(2.2,1.6,.06),t);d.position.set(s,4.4,r-.04),n.add(d);const c=new C(new ae(1.8,.06,.7),a);c.position.set(s,3.55,r+.3),n.add(c);const p=new Ct({color:4245759});for(let m=0;m<3;m++){const u=new C(new ae(1.5,.02,.08),p);u.position.set(s,3.59,r+.12+m*.16),n.add(u)}const f=new Ct({color:43775}),h=new C(new ae(2.8,.5,.08),f);h.position.set(s,5.7,r),n.add(h);const g=new Ct({color:4259839}),x=new C(new ae(.3,.3,.1),g);x.position.set(s-1.3,4.4,r-.1),n.add(x)}function Xg(n){const e=aa/2,t=sa/2,i=new te({color:3689016,roughness:.8});for(const[l,d]of[[e-1.5,-t+1.2],[e-1.5,t-1.2]]){const c=new C(new ae(2.4,5,1.6),i);c.position.set(l,2.5,d),c.castShadow=!0,n.add(c);const p=new C(new ae(.06,.4,.06),new te({color:10526816,metalness:.8,roughness:.2}));p.position.set(l-.7,2.5,d-.85),n.add(p)}const a=new te({color:1720416,roughness:.9}),s=new Ct({color:54527});for(const l of[-10,0,10]){const d=new C(new ae(.08,3,2.2),a);d.position.set(-e+.08,4.5,l),n.add(d);const c=new C(new ae(.04,2.4,.08),s);c.position.set(-e+.1,5.2,l),n.add(c)}const r=new te({color:6963232,roughness:.9}),o=new te({color:1728544,roughness:1});for(const[l,d]of[[-e+2,t-2],[-e+2,-t+2]]){const c=new C(new he(.4,.3,.7,12),r);c.position.set(l,.35,d),n.add(c);const p=new C(new jn(.7,1.4,8),o);p.position.set(l,1.4,d),n.add(p)}}function qg(n){const e=new Ct({color:52479,transparent:!0,opacity:.65,side:zt}),t=new C(new An(1.1,.2,10,32),e);t.position.set(Cn.x,6.2,Cn.z),t.rotation.x=Math.PI/2,n.add(t);const i=new hi({color:3066993}),a=new Ni(i);return a.scale.set(1.5,1.5,1.5),a.position.set(Cn.x,7.2,Cn.z),a.visible=!1,n.add(a),{idx:0,pos:{x:Cn.x,z:Cn.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isTerminal:!0}}function $g(n,e){!n||n.done||(n.glowMat.opacity=.4+.3*Math.sin(e*4),n.glowMesh.rotation.z=e*1.5)}const ni=52,ii=40,Rn=new T(0,0,-12);function Yg(){const n=new va;n.background=new $e(1714748),n.fog=new ja(1450032,.01),n.add(new Ys(11585760,1));const e=new Pn(14741759,1.6);e.position.set(5,18,8),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=80,e.shadow.camera.left=-28,e.shadow.camera.right=28,e.shadow.camera.top=28,e.shadow.camera.bottom=-28,n.add(e);const t=new di(16768384,2.2,22);t.position.set(Rn.x,5,Rn.z),n.add(t);const i=new Pn(8425664,.7);return i.position.set(-15,8,-5),n.add(i),{scene:n}}function jg(n){Kg(n),Jg(n),Zg(n),Qg(n),ex(n)}function Kg(n){const e=new te({color:1450030,roughness:.85,metalness:.05}),t=new te({color:1582132,roughness:.9}),i=new te({color:924200,roughness:1}),a=ni/2,s=ii/2,r=9,o=new C(new kt(ni,ii),e);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);const l=new C(new kt(ni,ii),i);l.rotation.x=Math.PI/2,l.position.y=r,n.add(l);const d=[{pos:[0,r/2,-s],rot:[0,0,0],size:[ni,r]},{pos:[0,r/2,s],rot:[0,Math.PI,0],size:[ni,r]},{pos:[-a,r/2,0],rot:[0,Math.PI/2,0],size:[ii,r]},{pos:[a,r/2,0],rot:[0,-Math.PI/2,0],size:[ii,r]}];for(const f of d){const h=new C(new kt(...f.size),t);h.position.set(...f.pos),h.rotation.set(...f.rot),n.add(h)}const c=new _a({color:1714746});for(let f=-a;f<=a;f+=3){const h=[new T(f,.01,-s),new T(f,.01,s)];n.add(new Yn(new Et().setFromPoints(h),c))}for(let f=-s;f<=s;f+=3){const h=[new T(-a,.01,f),new T(a,.01,f)];n.add(new Yn(new Et().setFromPoints(h),c))}const p=new Ct({color:6334719});for(const[f,h,g,x]of[[0,-s+.1,ni,.1],[0,s-.1,ni,.1],[-a+.1,0,.1,ii],[a-.1,0,.1,ii]]){const m=new C(new ae(g,.06,x),p);m.position.set(f,r-.05,h),n.add(m)}}function Jg(n){const e=new te({color:2635848,roughness:.7}),t=new te({color:1581104,roughness:.8}),i=[new te({color:1705216,transparent:!0,opacity:.9}),new te({color:5908480,transparent:!0,opacity:.8}),new te({color:8435776,transparent:!0,opacity:.7})],a=new te({color:8965375,transparent:!0,opacity:.3,roughness:.05,metalness:.05});[[-14,6],[0,6],[14,6]].forEach(([r,o],l)=>{const d=new C(new ae(7,.12,3),e);d.position.set(r,3.1,o),d.castShadow=!0,d.receiveShadow=!0,n.add(d);for(const[g,x]of[[-3,-1.2],[3,-1.2],[-3,1.2],[3,1.2]]){const m=new C(new ae(.12,3.1,.12),t);m.position.set(r+g,1.55,o+x),n.add(m)}for(let g=0;g<3;g++){const x=new C(new he(.3,.28,.8,12),a);x.position.set(r-1.8+g*1.8,3.56,o-.5),n.add(x);const m=.3+g*.1,u=new C(new he(.27,.25,m,12),i[g]);u.position.set(r-1.8+g*1.8,3.17+m/2,o-.5),n.add(u)}const c=new te({color:2113642,roughness:.9}),p=new C(new ae(1.2,.04,.9),c);p.position.set(r+2.5,3.18,o+.5),n.add(p);const f=new te({color:4243616,roughness:.5,metalness:.3}),h=new C(new he(.05,.05,1,8),f);h.position.set(r-2.8,3.75,o),h.rotation.z=.3,n.add(h)})}function Zg(n){const e=new te({color:1579552,roughness:.5,metalness:.5}),t=new te({color:2107440,roughness:.5,metalness:.6}),i=new te({color:4227264,roughness:.1,metalness:.8}),a=new te({color:2113696,roughness:.1,metalness:.9}),s=Rn.x,r=Rn.z,o=new C(new ae(3.5,.5,3),e);o.position.set(s,.25,r),o.castShadow=!0,n.add(o);const l=new C(new ae(.4,4,.4),t);l.position.set(s-.8,2.25,r),l.castShadow=!0,n.add(l);const d=new C(new ae(1.8,.35,.35),t);d.position.set(s+.1,4.1,r),n.add(d);const c=new C(new he(.3,.35,1.2,16),i);c.position.set(s+.8,3.4,r),n.add(c);const p=new C(new he(.1,.2,.5,12),i);p.position.set(s+.8,2.55,r),n.add(p);const f=new C(new he(.18,.22,.6,12),a);f.position.set(s+.8,4.85,r),n.add(f);const h=new C(new ae(1.2,.06,1),e);h.position.set(s+.8,2.3,r),n.add(h);const g=new Ct({color:16763968,transparent:!0,opacity:.7}),x=new C(new vn(.25,16),g);x.rotation.x=-Math.PI/2,x.position.set(s+.8,2.34,r),n.add(x)}function Qg(n){const e=new te({color:794688,roughness:.9}),t=new Ct({color:54527}),i=[new Ct({color:16728128}),new Ct({color:4259712})],a=new C(new ae(18,5.5,.1),e);a.position.set(0,4.5,-20+.12),n.add(a);const s=new C(new ae(17.6,.35,.08),t);s.position.set(0,6.95,-20+.17),n.add(s);for(let r=0;r<2;r++){const o=new C(new ae(15,.25,.06),i[r]);o.position.set(0,6-r*1.2,-20+.17),n.add(o);const l=r===0?[8,6.4,.4]:[.6,.5,.1];for(let d=0;d<3;d++){const c=new C(new ae(l[d],.55,.06),i[r]);c.position.set(-7.5+l[d]/2+d*5.2,5-r*1.2,-20+.17),n.add(c)}}}function ex(n){const e=ni/2,t=ii/2,i=new te({color:2636344,roughness:.85});for(const s of[-12,0,12]){const r=new C(new ae(1.8,5,2),i);r.position.set(e-1,2.5,s),r.castShadow=!0,n.add(r)}const a=new te({color:3817520,roughness:.9});for(const s of[-8,8]){const r=new C(new he(.4,.35,.9,10),a);r.position.set(s,.45,t-2),n.add(r)}}function tx(n){const e=new Ct({color:16763904,transparent:!0,opacity:.65,side:zt}),t=new C(new An(1,.2,10,32),e);t.position.set(Rn.x+.8,5.8,Rn.z),t.rotation.x=Math.PI/2,n.add(t);const i=new hi({color:3066993}),a=new Ni(i);return a.scale.set(1.5,1.5,1.5),a.position.set(Rn.x+.8,7,Rn.z),a.visible=!1,n.add(a),{idx:0,pos:{x:Rn.x+.8,z:Rn.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isScope:!0}}function nx(n,e){!n||n.done||(n.glowMat.opacity=.4+.28*Math.sin(e*3.8),n.glowMesh.rotation.z=e*1.3)}const ix=.65;function Oe(n,e,t,i){return{minX:n-t,maxX:n+t,minZ:e-i,maxZ:e+i}}const Es=60,Xr=40,qr=70,$r=50,ax=[Oe(0,-20,Es/2+2,1.5),Oe(0,Xr/2,Es/2+2,1.5),Oe(-30,0,1.5,Xr/2+2),Oe(Es/2,0,1.5,Xr/2+2),Oe(-16,5,3.6,1.8),Oe(0,-6,3.6,1.8),Oe(16,5,3.6,1.8),Oe(-28,0,2,11.5),Oe(Es/2-2,0,2,11.5),Oe(-20,-18.4,3.5,1.6)],sx=[Oe(0,-25,qr/2+2,1.5),Oe(0,$r/2,qr/2+2,1.5),Oe(-35,0,1.5,$r/2+2),Oe(qr/2,0,1.5,$r/2+2),Oe(-18,6,2.8,2.8),Oe(0,-12,2,2.5),Oe(18,6,2.5,2.5),Oe(-26,-12,4,6),Oe(28,-13,3,6)],Yr=60,jr=50,rx=[Oe(0,-25,Yr/2+2,1.5),Oe(0,jr/2,Yr/2+2,1.5),Oe(-30,0,1.5,jr/2+2),Oe(Yr/2,0,1.5,jr/2+2),Oe(0,-8,11.6,.8),Oe(0,8,11.6,.8),Oe(-11,0,.8,8.6),Oe(11,0,.8,8.6),Oe(0,-10,.8,.8)];let fa=ax;function ox(){fa=sx}function lx(){fa=rx}const Ra=56,Kr=44,cx=[Oe(0,-22,Ra/2+2,1.5),Oe(0,Kr/2,Ra/2+2,1.5),Oe(-28,0,1.5,Kr/2+2),Oe(Ra/2,0,1.5,Kr/2+2),Oe(-16,2,4.5,2),Oe(0,2,4.5,2),Oe(16,2,4.5,2),Oe(0,-14,1.4,1.4),Oe(-18,-21.5,4.5,.8),Oe(0,-21.5,4.5,.8),Oe(18,-21.5,4.5,.8),Oe(Ra/2-1.5,-10,1.5,1.5),Oe(Ra/2-1.5,10,1.5,1.5)],ia=52,Jr=40,dx=[Oe(0,-20,ia/2+2,1.5),Oe(0,Jr/2,ia/2+2,1.5),Oe(-26,0,1.5,Jr/2+2),Oe(ia/2,0,1.5,Jr/2+2),Oe(-14,6,4,2),Oe(0,6,4,2),Oe(14,6,4,2),Oe(.8,-12,1.8,1.8),Oe(ia/2-1,-12,1.5,1.5),Oe(ia/2-1,0,1.5,1.5),Oe(ia/2-1,12,1.5,1.5)];function ux(){fa=cx}function px(){fa=dx}function hx(n,e,t){const i=ix;let a=n.x+e;for(const r of fa)a+i>r.minX&&a-i<r.maxX&&n.z+i>r.minZ&&n.z-i<r.maxZ&&(e>0?a=r.minX-i:a=r.maxX+i,e=a-n.x);let s=n.z+t;for(const r of fa)a+i>r.minX&&a-i<r.maxX&&s+i>r.minZ&&s-i<r.maxZ&&(t>0?s=r.minZ-i:s=r.maxZ+i,t=s-n.z);return{dx:e,dz:t}}const Z={playerName:"",currentLevel:1,totalPoints:0,levelAttempts:0,levelPoints:0,phenomenonIndex:0,answered:!1,wrongAnswers:0,levelBreakdown:[],pointsAtLevelStart:0,stage3:{valveOpened:!1},stage4:{selectedItems:[],reactorResult:null,terminalDone:!1},stage5:{scopeDone:!1},completedRooms:[]};function fx(){Z.levelAttempts=0,Z.levelPoints=0,Z.phenomenonIndex=0,Z.answered=!1,Z.wrongAnswers=0}const mx={1:"Level 1 – Lab Sains",2:"Level 2 – Pabrik Etanol",3:"Level 3 – Kolam Remediasi",4:"Level 4 – Membuat Reaktor Sederhana",5:"Level 5 – Lab Observasi"};function Ed(n){const e=Z.totalPoints-Z.pointsAtLevelStart;Z.levelBreakdown.push({level:n,label:mx[n]||`Level ${n}`,points:e})}class gx{constructor(e){this.scene=e,this.group=new rn,this._build(),e.add(this.group),this.group.position.set(0,0,12),this.speed=.12,this.keys={},this._moving=!1,this._walkCycle=0,this._legAngle=0,this._armAngle=0,this._facingAngle=0,this._bindKeys(),this._bindTouch()}_bindKeys(){window.addEventListener("keydown",e=>{this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1})}_bindTouch(){if(this._touchAxis={x:0,y:0},!(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1))return;const t=document.getElementById("mobile-controls");t&&(t.style.display="block");const i=document.getElementById("joystick-base"),a=document.getElementById("joystick-knob");if(!i||!a)return;const s=32;let r=null,o=null,l=0,d=0;const c=h=>{if(r!==null)return;r=h.changedTouches[0].identifier,o=i.getBoundingClientRect(),l=o.left+o.width/2,d=o.top+o.height/2,h.preventDefault()},p=h=>{for(const g of h.changedTouches){if(g.identifier!==r)continue;const x=g.clientX-l,m=g.clientY-d,u=Math.sqrt(x*x+m*m),v=Math.min(u,s),b=Math.atan2(m,x),_=Math.cos(b)*v,k=Math.sin(b)*v;a.style.transform=`translate(calc(-50% + ${_}px), calc(-50% + ${k}px))`,this._touchAxis.x=_/s,this._touchAxis.y=-k/s,h.preventDefault()}},f=h=>{for(const g of h.changedTouches)g.identifier===r&&(r=null,a.style.transform="translate(-50%, -50%)",this._touchAxis.x=0,this._touchAxis.y=0)};i.addEventListener("touchstart",c,{passive:!1}),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",f,{passive:!1}),window.addEventListener("touchcancel",f,{passive:!1})}_build(){const e=new te({color:16108455,roughness:.7,metalness:0}),t=new te({color:2719929,roughness:.6,metalness:.05}),i=new te({color:2899536,roughness:.65,metalness:.05}),a=new te({color:2890254,roughness:.8,metalness:0}),s=new te({color:1710618,roughness:.6,metalness:.1}),r=new te({color:16448250,roughness:.7,metalness:0}),o=new C(new he(.48,.52,1.6,16),t);o.position.y=2.2,o.castShadow=!0,this.group.add(o),this._torso=o;const l=new C(new he(.5,.54,1.58,16),r);l.position.y=2.2,this.group.add(l),this._coat=l;for(const g of[-1,1]){const x=new C(new lt(.28,12,10),r);x.position.set(g*.62,2.9,0),this.group.add(x)}const d=new C(new lt(.52,20,16),e);d.position.y=3.62,d.scale.set(1,1.05,1),d.castShadow=!0,this.group.add(d),this._head=d;const c=new C(new lt(.54,16,10,0,Math.PI*2,0,Math.PI*.55),a);c.position.y=3.85,this.group.add(c);for(const g of[-1,1]){const x=new C(new lt(.1,8,8),e);x.position.set(g*.53,3.65,0),this.group.add(x)}const p=new te({color:1710618});for(const g of[-1,1]){const x=new C(new lt(.07,8,8),p);x.position.set(g*.2,3.72,.47),this.group.add(x)}const f=new te({color:13936778}),h=new C(new lt(.05,8,8),f);h.position.set(0,3.58,.52),this.group.add(h),this._legs=[];for(const[g,x]of[[-1,-1],[1,1]]){const m=new rn;m.position.set(x*.3,1.55,0);const u=new C(new he(.2,.18,.72,12),i);u.position.y=-.36,u.castShadow=!0,m.add(u);const v=new rn;v.position.y=-.72,m.add(v);const b=new C(new he(.16,.14,.64,12),i);b.position.y=-.32,b.castShadow=!0,v.add(b);const _=new C(new Do(.13,.3,6,10),s);_.rotation.x=Math.PI/2,_.position.set(0,-.68,.12),v.add(_),this.group.add(m),this._legs.push({pivot:m,kneePivot:v,side:x,i:g===-1?0:1})}this._arms=[];for(const[g,x]of[[-1,-1],[1,1]]){const m=new rn;m.position.set(x*.76,2.92,0);const u=new C(new he(.16,.14,.62,12),r);u.position.y=-.31,u.castShadow=!0,m.add(u);const v=new rn;v.position.y=-.62,m.add(v);const b=new C(new he(.13,.12,.56,12),e);b.position.y=-.28,v.add(b);const _=new C(new lt(.13,10,8),e);_.position.y=-.6,v.add(_),this.group.add(m),this._arms.push({pivot:m,elbowPivot:v,side:x,i:g===-1?0:1})}this._nameLabel=null}setName(e){if(this._nameLabel&&this.group.remove(this._nameLabel),!e)return;const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.clearRect(0,0,256,64),i.fillStyle="rgba(15,25,40,0.8)",i.roundRect(4,4,248,56,12),i.fill(),i.fillStyle="#2ecc71",i.font="bold 26px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,32);const a=new qs(t),s=new hi({map:a,transparent:!0}),r=new Ni(s);r.scale.set(3.5,.9,1),r.position.y=5.2,this._nameLabel=r,this.group.add(r)}update(e,t=!1,i=null){const a=this.keys;let s=0,r=0;if((a.KeyW||a.ArrowUp)&&(s+=1),(a.KeyS||a.ArrowDown)&&(s-=1),(a.KeyA||a.ArrowLeft)&&(r-=1),(a.KeyD||a.ArrowRight)&&(r+=1),this._touchAxis&&(s+=this._touchAxis.y,r+=this._touchAxis.x,s=Math.max(-1,Math.min(1,s)),r=Math.max(-1,Math.min(1,r))),this._moving=s!==0||r!==0,this._moving&&!t){let o=0,l=0;const d=s<0;if(d&&i){o=i.fwd.x*s+i.right.x*r,l=i.fwd.z*s+i.right.z*r;const h=Math.sqrt(o*o+l*l)||1;o=o/h*this.speed,l=l/h*this.speed}else if(d)o=-Math.sin(this._facingAngle)*this.speed,l=-Math.cos(this._facingAngle)*this.speed;else if(i){o=i.fwd.x*s+i.right.x*r,l=i.fwd.z*s+i.right.z*r;const h=Math.sqrt(o*o+l*l)||1;o=o/h*this.speed,l=l/h*this.speed}else{o=r,l=-s;const h=Math.sqrt(o*o+l*l)||1;o=o/h*this.speed,l=l/h*this.speed}({dx:o,dz:l}=hx(this.group.position,o,l)),this.group.position.x+=o,this.group.position.z+=l;const c=Z.currentLevel===2?33:Z.currentLevel===3?27:28,p=Z.currentLevel===2?23:Z.currentLevel===3?22:18;this.group.position.x=Math.max(-c,Math.min(c,this.group.position.x)),this.group.position.z=Math.max(-p,Math.min(p,this.group.position.z)),d||(this._facingAngle=Math.atan2(o,l)),this.group.rotation.y=this._facingAngle,this._walkCycle+=.18;const f=this._walkCycle;for(const{pivot:h,kneePivot:g,i:x}of this._legs){const m=f+x*Math.PI,u=Math.sin(m)*.55;h.rotation.x=u;const v=Math.max(0,-Math.sin(m)*.45);g.rotation.x=v}for(const{pivot:h,elbowPivot:g,side:x,i:m}of this._arms){const u=f+(1-m)*Math.PI,v=Math.sin(u)*.42;h.rotation.x=v,h.rotation.z=x*(.08+Math.sin(u+Math.PI*.5)*.06),g.rotation.x=Math.max(0,Math.sin(u+.4)*.28)}this._torso&&(this._torso.rotation.y=Math.sin(f+Math.PI)*.08),this._coat&&(this._coat.rotation.y=Math.sin(f+Math.PI)*.08),this._head&&(this._head.position.y=3.62+Math.abs(Math.sin(f*2))*.06),this.group.position.y=Math.abs(Math.sin(f*2))*.055}else{this._walkCycle=0;for(const{pivot:o,kneePivot:l}of this._legs)o.rotation.x*=.75,l.rotation.x*=.75;for(const{pivot:o,elbowPivot:l,side:d}of this._arms)o.rotation.x*=.75,o.rotation.z+=(d*.08-o.rotation.z)*.15,l.rotation.x*=.75;this._torso&&(this._torso.rotation.y*=.8),this._coat&&(this._coat.rotation.y*=.8),this._head&&(this._head.position.y=3.62+Math.sin(e*1.2)*.02),this.group.position.y=Math.sin(e*1.4)*.04}return{x:this.group.position.x,z:this.group.position.z}}get position(){return this.group.position}removeFromScene(e){e.remove(this.group)}addToScene(e){this.scene=e,e.add(this.group)}}const xx=[{id:1,title:"Fenomena 1",image:null,tableData:{headers:["Stasiun","Suhu (°C)","pH","DO (mg/L)","COD (mg/L)","TDS (mg/L)"],rows:[{label:"Hulu",values:["30,39","7,26","8,38","635","777"],classes:["","","blue","",""]},{label:"Tengah",values:["31,17","6,96","1,90","775","1.343"],classes:["","","red","","red"]},{label:"Hilir",values:["29,63","7,36","11,12","879","1.300"],classes:["","","","red",""]}],note:"Biru: rata-rata terendah | Merah: rata-rata tertinggi. Sumber: Zahra, 2023"},context:"Seorang peneliti lingkungan mengamati data kualitas air sungai di stasiun berbeda, yaitu: hulu, tengah, dan hilir dari aliran anak Sungai Bengawan solo yang berdekatan dengan pabrik etanol. Data menunjukkan:",question:"Berdasarkan data, Stasiun Tengah menunjukkan nilai TDS melonjak drastis menjadi 1.343 mg/L, namun nilai DO justru berada di angka 1,90 mg/L dengan COD 90.000 mg/L. Jika diketahui sumber pencemar adalah limbah vinasse yang kaya bahan organik, manakah evaluasi paling kritis mengenai data tersebut?",options:[{label:"A",text:"Tingginya TDS disebabkan oleh mineral anorganik, sedangkan seluruh bakteri telah terurai oleh bakteri dari hulu ke tengah.",correct:!1},{label:"B",text:"Masuknya limbah vinasse seharusnya meningkatkan TDS, DO, dan COD secara simultan.",correct:!0},{label:"C",text:"TDS, COD, dan DO memiliki hubungan yang terbalik, semakin banyak zat terlarut, semakin sedikit oksigen yang dibutuhkan.",correct:!1}],correctKey:"B",explanation:"✅ <strong>Jawaban benar!</strong><br>Limbah organik vinasse seharusnya berkontribusi pada TDS dan COD. Jika TDS dan COD naik tajam karena limbah masuk, DO seharusnya tidak turun drastis."},{id:2,title:"Fenomena 2",image:null,tableData:null,standardTable:{title:"Baku Mutu Air Limbah Industri Bir/Etanol (Permen LH No.5/2014)",headers:["Parameter","Kadar Maks (mg/L)","Beban Maks (g/hL)"],rows:[["BOD₅","40","24,0"],["COD","100","60,0"],["TSS","40","24,0"],["pH","6,0 – 9,0","—"],["Debit limbah maks","—","6 hL/hL produk"]]},context:"Berdasarkan data Stasiun Tengah nilai TDS 1.343 mg/L, COD 90.000 mg/L dan DO 1,90 mg/L, komponen apakah yang paling dominan menyusun nilai TDS tersebut?",question:"Berdasarkan data Stasiun Tengah nilai TDS 1.343 mg/L, COD 90.000 mg/L dan DO 1,90 mg/L, komponen apakah yang paling dominan menyusun nilai TDS tersebut?",options:[{label:"A",text:"Adanya bakteri coliform dan mikroorganisme pengurai.",correct:!1},{label:"B",text:"Ion anorganik seperti K, Ca dan Cl yang tidak dapat dioksidasi.",correct:!0},{label:"C",text:"Suspensi padatan lumpur yang belum mengendap.",correct:!1}],correctKey:"B",explanation:"✅ <strong>Jawaban benar!</strong><br>Ion anorganik seperti K, Ca dan Cl yang tidak dapat dioksidasi mendominasi nilai TDS di Stasiun Tengah."},{id:3,title:"Fenomena 3",image:null,riceGraph:!0,tableData:null,context:"Perhatikan grafik produktivitas lahan persawahan padi berikut:",question:"Manakah interpretasi ilmiah yang paling tepat menjelaskan mekanisme penyebab fenomena penurunan hasil panen padi tersebut?",options:[{label:"A",text:"Kenaikan hasil panen di Tahun ke-2 terjadi karena suplai bahan organik berada di bawah ambang batas pencemaran sehingga justru memperkaya hara tanah, namun pada Tahun ke-3 akumulasi pH dan COD telah menyebabkan kerusakan pada jaringan akar padi.",correct:!0},{label:"B",text:"Penurunan hasil panen pada Tahun ke-3 disebabkan oleh kurangnya pasokan air, karena tingginya nilai COD menyebabkan air menjadi kental dan sulit diserap oleh akar tanaman.",correct:!1},{label:"C",text:"Peningkatan hasil panen pada Tahun ke-2 disebabkan oleh bakteri patogen dalam limbah yang memicu mutasi genetik pada padi menjadi varietas unggul, sedangkan penurunan di Tahun ke-3 adalah fase kematian alami bakteri tersebut.",correct:!1}],correctKey:"A",explanation:"✅ <strong>Jawaban benar!</strong><br>Meskipun COD naik menjadi 80, pH tanah sebesar 8,6 masih dalam rentang toleransi padi. Bahan organik dalam limbah vinasse mengandung N, P, dan K. Pada tahap ini, efek negatif belum mendominasi, sehingga tanaman justru merespons positif terhadap tambahan nutrisi tersebut. Ketika COD mencapai >100 mg/L dan pH >9 kondisi tanah menjadi toksik. pH yang tinggi menyebabkan ion logam di tanah menjadi larut dan meracuni akar, serta menghambat penyerapan Fosfor. Hal ini menyebabkan tanaman gagal tumbuh."}],Pa={phenomena:xx},bx=879,vx=635,Ts=1e3;function _x(n){const e=Math.max(0,Math.min(Ts,n)),t=Ts-e,i=e/Ts,a=Math.round(bx*i),s=Math.round(vx*i),r=Math.pow(10,-3.8),o=Math.pow(10,-7),l=(r*e+o*t)/Ts,d=Math.max(3.5,Math.min(7,-Math.log10(l)));return{cod:a,bod:s,ph:parseFloat(d.toFixed(2)),dilutionFactor:i}}function yx(n,e){const t=Math.max(0,Math.min(72,e)),i=Math.round(n.bod*Math.exp(-.08*t)),a=n.bod-i,s=n.cod*.55,r=n.cod*.45,o=s*Math.exp(-.08*t),l=Math.round(o+r),d=parseFloat(Math.min(6.8,n.ph+(6.8-n.ph)*(1-Math.exp(-.08*.5*t))).toFixed(2)),c=n.bod>0?Math.round(a/n.bod*100):0,p=n.cod>0?Math.round((n.cod-l)/n.cod*100):0,f=i<=40&&l<=100;return{cod:l,bod:i,ph:d,bodRemovalPct:c,codRemovalPct:p,compliant:f}}const Td="biovine_scores",No="biovine_checkpoint";function wx({playerName:n,totalPoints:e,levelBreakdown:t,completedAt:i,essayAnswer:a}){const s=Mx();s.push({playerName:n,totalPoints:e,levelBreakdown:t,completedAt:i,essayAnswer:a}),s.length>200&&s.splice(0,s.length-200);try{localStorage.setItem(Td,JSON.stringify(s))}catch(r){console.warn("[db] saveScore failed:",r)}}function Mx(){try{return JSON.parse(localStorage.getItem(Td)||"[]")}catch{return[]}}function Sx({playerName:n,currentLevel:e,totalPoints:t,levelBreakdown:i,completedRooms:a}){const s={playerName:n,currentLevel:e,totalPoints:t,levelBreakdown:i||[],completedRooms:a||[],savedAt:new Date().toISOString()};try{localStorage.setItem(No,JSON.stringify(s))}catch(r){console.warn("[db] saveCheckpoint failed:",r)}}function Oo(){try{const n=localStorage.getItem(No);return n?JSON.parse(n):null}catch{return null}}function Ad(){localStorage.removeItem(No)}const zo="https://script.google.com/macros/s/AKfycbys_sNNVIFJCQGmvNHUMuiLpZGINttOvNN5LnIJ8z5Gak8h8KQ8BdTo342_K5H05RxbXw/exec";function Ex(n){const{playerName:e,totalPoints:t,levelBreakdown:i,completedRooms:a}=Z,s={1:null,2:null,3:null,4:null,5:null};i.forEach(l=>{s[l.level]=l.points});const r=s[n]??0,o={playerName:e,totalPoints:t,completedLevel:n,thisLevelPoints:r,level1Points:s[1],level2Points:s[2],level3Points:s[3],level4Points:s[4],level5Points:s[5],completedRooms:a,timestamp:new Date().toISOString()};fetch(zo,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(o)}).catch(l=>{console.warn("[sheets] Upload failed (network error):",l)})}function Tx(n){const e={sheet:"Kelompok",...n};return fetch(zo,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)}).catch(t=>{throw console.warn("[sheets] Experiment upload failed (network error):",t),t})}function Ax(n){const e={sheet:"Esai",playerName:n.playerName||"",essayAnswer:n.essayAnswer||"",timestamp:n.timestamp||new Date().toISOString()};fetch(zo,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)}).catch(t=>{console.warn("[sheets] Essay upload failed (network error):",t)})}const Mn=n=>document.getElementById(n),Fo="experiment-form-overlay",Mc="experiment-form-css";function kx(){if(document.getElementById(Mc))return;const n=document.createElement("style");n.id=Mc,n.textContent=`
    #${Fo} {
      position: fixed; inset: 0; z-index: 10000;
      background: rgba(0,5,15,0.94);
      display: flex; align-items: flex-start; justify-content: center;
      overflow-y: auto; padding: 24px 12px;
      font-family: system-ui, sans-serif; color: #e8ecf0;
      animation: exp-fadein .3s ease;
    }
    @keyframes exp-fadein { from { opacity:0 } to { opacity:1 } }

    .exp-card {
      width: 100%; max-width: 900px;
      background: linear-gradient(160deg, #0d1b2a, #091525);
      border: 1px solid rgba(60,140,220,.35);
      border-radius: 18px; padding: 28px 28px 32px;
      box-shadow: 0 0 60px rgba(40,120,220,.18);
      position: relative;
    }

    .exp-header { margin-bottom: 20px; }
    .exp-badge {
      display: inline-block;
      background: rgba(40,120,220,.2); border: 1px solid rgba(40,120,220,.4);
      color: #7ec8ff; border-radius: 20px;
      padding: 4px 14px; font-size: 12px; font-weight: 700;
      letter-spacing: .04em; text-transform: uppercase; margin-bottom: 8px;
    }
    .exp-title {
      margin: 0 0 6px; font-size: 22px; font-weight: 800;
      color: #fff; line-height: 1.25;
    }
    .exp-subtitle { font-size: 13px; color: #8a9ab0; margin: 0; line-height: 1.6; }

    .exp-close-btn {
      position: absolute; top: 20px; right: 20px;
      background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15);
      color: #ccc; border-radius: 8px;
      padding: 6px 12px; cursor: pointer; font-size: 14px;
      transition: background .18s;
    }
    .exp-close-btn:hover { background: rgba(255,60,60,.18); color: #fff; }

    .exp-section { margin-top: 24px; }
    .exp-section-title {
      font-size: 14px; font-weight: 700; color: #7ec8ff;
      text-transform: uppercase; letter-spacing: .06em;
      margin-bottom: 12px; padding-bottom: 6px;
      border-bottom: 1px solid rgba(60,140,220,.2);
    }

    /* Identity row */
    .exp-identity-row { display: flex; gap: 14px; flex-wrap: wrap; }
    .exp-field { display: flex; flex-direction: column; gap: 5px; flex: 1; min-width: 160px; }
    .exp-field label { font-size: 12px; color: #8a9ab0; font-weight: 600; letter-spacing: .03em; }
    .exp-input {
      background: rgba(255,255,255,.05); border: 1px solid rgba(60,140,220,.3);
      border-radius: 8px; color: #e8ecf0;
      padding: 8px 12px; font-size: 14px; outline: none;
      transition: border-color .18s;
    }
    .exp-input:focus { border-color: rgba(60,180,255,.7); background: rgba(255,255,255,.08); }
    .exp-input::placeholder { color: #3a5070; }

    /* Tables */
    .exp-table-wrap {
      overflow-x: auto;
      border-radius: 10px;
      border: 1px solid rgba(60,140,220,.2);
    }
    .exp-table {
      width: 100%; border-collapse: collapse; font-size: 13px;
      min-width: 560px;
    }
    .exp-obs-table { min-width: 900px; }

    .exp-table th {
      background: rgba(40,100,180,.25); color: #7ec8ff;
      padding: 8px 10px; font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: .04em;
      border: 1px solid rgba(60,140,220,.18); white-space: nowrap;
    }
    .exp-table td {
      border: 1px solid rgba(60,140,220,.12);
      padding: 4px;
      background: rgba(255,255,255,.02);
    }
    .exp-treatment-label {
      padding: 8px 12px !important;
      font-size: 12px; font-weight: 700;
      color: #8a9ab0; white-space: nowrap;
      background: rgba(40,100,180,.12) !important;
      min-width: 110px;
    }
    .exp-cell {
      width: 100%; min-width: 60px;
      background: transparent; border: none; outline: none;
      color: #e8ecf0; font-size: 13px;
      padding: 6px 8px;
      box-sizing: border-box;
    }
    .exp-cell:focus {
      background: rgba(60,180,255,.08);
      border-radius: 4px;
    }
    .exp-cell::placeholder { color: #2a4060; }

    /* Submit row */
    .exp-submit-row {
      margin-top: 28px; display: flex;
      flex-direction: column; align-items: flex-start; gap: 12px;
    }
    .exp-note {
      font-size: 12px; color: #5a7090; line-height: 1.5;
    }
    .exp-btn {
      padding: 12px 30px; border-radius: 10px; border: none; cursor: pointer;
      font-size: 15px; font-weight: 700;
      background: linear-gradient(135deg, #1565c0, #0d47a1);
      color: #fff; letter-spacing: .02em;
      box-shadow: 0 4px 18px rgba(21,101,192,.35);
      transition: opacity .18s, transform .15s;
    }
    .exp-btn:hover:not(:disabled) { opacity: .9; transform: translateY(-1px); }
    .exp-btn:disabled { opacity: .55; cursor: not-allowed; transform: none; }

    .exp-status {
      padding: 10px 16px; border-radius: 8px; font-size: 14px; font-weight: 600;
    }
    .exp-status.ok  { background: rgba(30,150,80,.18); border: 1px solid rgba(30,200,80,.35); color: #5de0a0; }
    .exp-status.err { background: rgba(180,40,40,.18); border: 1px solid rgba(220,60,60,.35); color: #ff8080; }
    .exp-status.hidden { display: none; }
  `,document.head.appendChild(n)}function Lx(){const n=document.createElement("div");return n.id=Fo,n}function Zr(){var n;(n=document.getElementById(Fo))==null||n.remove()}function As(n){return["warna","bau","keruh","ph","sal","tds","cod","bod","do"].map(t=>`<td><input type="text" class="exp-cell" id="${n}-${t}" /></td>`).join("")}function Bo(){kx(),Zr();const n=Lx();n.innerHTML=`
    <div class="exp-card">
      <button class="exp-close-btn" id="exp-close">✕ Tutup</button>

      <div class="exp-header">
        <div class="exp-badge">🧪 Percobaan Nyata</div>
        <h2 class="exp-title">Upload Hasil Percobaan Kelompok</h2>
        <p class="exp-subtitle">
          Isi data hasil percobaan nyata yang telah kelompokmu lakukan di laboratorium.<br>
          Pengisian ini bersifat <strong>opsional</strong> dan tidak mempengaruhi poin permainan.
        </p>
      </div>

      <!-- ─── Identitas ─────────────────────────────────────────── -->
      <div class="exp-section">
        <div class="exp-section-title">📋 Identitas Kelompok</div>
        <div class="exp-identity-row">
          <div class="exp-field">
            <label for="exp-kelompok">Nomor Kelompok <span style="color:#e06060">*</span></label>
            <input type="text" id="exp-kelompok" placeholder="Contoh: 3" maxlength="20" class="exp-input" />
          </div>
          <div class="exp-field">
            <label for="exp-kelas">Kelas <span style="color:#e06060">*</span></label>
            <input type="text" id="exp-kelas" placeholder="Contoh: X-IPA-2" maxlength="30" class="exp-input" />
          </div>
          <div class="exp-field" style="flex:2">
            <label for="exp-nama">Nama Anggota (opsional)</label>
            <input type="text" id="exp-nama" placeholder="Nama-nama anggota kelompok…" maxlength="150" class="exp-input" />
          </div>
        </div>
      </div>

      <!-- ─── Tabel Pengamatan Mikroorganisme ───────────────────── -->
      <div class="exp-section">
        <div class="exp-section-title">🔬 Tabel Pengamatan Mikroorganisme</div>
        <div class="exp-table-wrap">
          <table class="exp-table">
            <thead>
              <tr>
                <th>Nama Mikroorganisme</th>
                <th colspan="2">Keadaan Lingkungan</th>
              </tr>
              <tr>
                <th></th>
                <th>Intensitas Cahaya</th>
                <th>Suhu Ruang</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" class="exp-cell" id="t1-mikro"  placeholder="Nama mikroorganisme…" /></td>
                <td><input type="text" class="exp-cell" id="t1-cahaya" placeholder="Contoh: 1200 lux"    /></td>
                <td><input type="text" class="exp-cell" id="t1-suhu"   placeholder="Contoh: 27 °C"       /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ─── Hasil Pengamatan Awal ─────────────────────────────── -->
      <div class="exp-section">
        <div class="exp-section-title">📊 Hasil Pengamatan Awal</div>
        <div class="exp-table-wrap">
          <table class="exp-table exp-obs-table">
            <thead>
              <tr>
                <th rowspan="2">Treatment</th>
                <th colspan="9">Hasil Pengamatan Awal</th>
              </tr>
              <tr>
                <th>Warna</th><th>Bau</th><th>Kekeruhan</th>
                <th>PH</th><th>Salinitas</th><th>TDS</th>
                <th>COD</th><th>BOD</th><th>DO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="exp-treatment-label">Dengan<br>Mikroorganisme</td>
                ${As("awal-dg")}
              </tr>
              <tr>
                <td class="exp-treatment-label">Tanpa<br>Mikroorganisme</td>
                ${As("awal-tp")}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ─── Hasil Pengamatan Akhir ────────────────────────────── -->
      <div class="exp-section">
        <div class="exp-section-title">📊 Hasil Pengamatan Akhir</div>
        <div class="exp-table-wrap">
          <table class="exp-table exp-obs-table">
            <thead>
              <tr>
                <th rowspan="2">Treatment</th>
                <th colspan="9">Hasil Pengamatan Akhir</th>
              </tr>
              <tr>
                <th>Warna</th><th>Bau</th><th>Kekeruhan</th>
                <th>PH</th><th>Salinitas</th><th>TDS</th>
                <th>COD</th><th>BOD</th><th>DO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="exp-treatment-label">Dengan<br>Mikroorganisme</td>
                ${As("akhir-dg")}
              </tr>
              <tr>
                <td class="exp-treatment-label">Tanpa<br>Mikroorganisme</td>
                ${As("akhir-tp")}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ─── Submit ────────────────────────────────────────────── -->
      <div class="exp-submit-row">
        <p class="exp-note">
          📌 Data ini akan dikirimkan ke sheet <strong>Kelompok</strong> untuk digunakan oleh guru/peneliti.
          Kolom yang kosong akan dikirim sebagai tanda hubung (–).
        </p>
        <button class="exp-btn" id="exp-submit">📤 Kirim Hasil Percobaan</button>
        <div class="exp-status hidden" id="exp-status"></div>
      </div>
    </div>
  `,document.body.appendChild(n),Mn("exp-close").onclick=Zr,n.addEventListener("click",t=>{t.target===n&&Zr()}),Mn("exp-submit").onclick=()=>{const t=Mn("exp-kelompok").value.trim(),i=Mn("exp-kelas").value.trim();if(!t||!i){e("⚠️ Nomor Kelompok dan Kelas wajib diisi!",!1);return}const a=["warna","bau","keruh","ph","sal","tds","cod","bod","do"];function s(l){return Object.fromEntries(a.map(d=>{var c;return[d,((c=Mn(`${l}-${d}`))==null?void 0:c.value.trim())||"–"]}))}const r={nomorKelompok:t,kelas:i,namaAnggota:Mn("exp-nama").value.trim()||"–",playerName:Z.playerName||"–",timestamp:new Date().toISOString(),mikroorganisme:Mn("t1-mikro").value.trim()||"–",intensitasCahaya:Mn("t1-cahaya").value.trim()||"–",suhuRuang:Mn("t1-suhu").value.trim()||"–",awalDengan:s("awal-dg"),awalTanpa:s("awal-tp"),akhirDengan:s("akhir-dg"),akhirTanpa:s("akhir-tp")},o=Mn("exp-submit");o.disabled=!0,o.textContent="⏳ Mengirim…",Tx(r).then(()=>{e("✅ Berhasil! Data percobaan kelompokmu telah dikirimkan.",!0),o.textContent="✅ Terkirim"}).catch(()=>{e("❌ Gagal mengirim. Periksa koneksi internet dan coba lagi.",!1),o.disabled=!1,o.textContent="📤 Kirim Ulang"})};function e(t,i){const a=Mn("exp-status");a.className="exp-status "+(i?"ok":"err"),a.innerHTML=t,a.scrollIntoView({behavior:"smooth",block:"nearest"})}}const ce=n=>document.getElementById(n);let xo=null,Qr=null;function Cx(n,e){xo=n,Qr=e||null;const t=Oo(),i=ce("resume-section");if(t&&i&&Qr){const a=new Date(t.savedAt),s=a.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})+" "+a.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});i.classList.remove("hidden"),i.innerHTML=`
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
    `,document.getElementById("btn-resume-game").onclick=()=>{kd(),Qr(t)},document.getElementById("btn-discard-checkpoint").onclick=()=>{Ad(),i.classList.add("hidden")}}else i&&i.classList.add("hidden");ce("profile-screen").classList.remove("hidden")}function kd(){ce("profile-screen").classList.add("hidden")}function Rx(n){const e=ce("synopsis-screen");e.classList.remove("hidden");const t=[{tag:"Bagian 1 dari 3",title:"Industri Etanol di Desa Bekonang",text:"Industri etanol di Desa Bekonang, Sukoharjo, adalah warisan <strong>turun-temurun</strong> yang sudah ada sejak zaman kolonial. Banyak pabrik di sini memproduksi minuman keras tradisional bernama <strong>ciu</strong> dibuat dari tetes tebu, tape singkong, atau nira aren melalui proses fermentasi dan penyulingan.<br><br>Seiring waktu, industri ini berkembang menjadi produksi <strong>etanol medis</strong> yang digunakan untuk kebutuhan rumah sakit dan dunia kesehatan."},{tag:"Bagian 2 dari 3",title:"Masalah: Limbah Vinasse",text:"Proses produksi etanol menghasilkan limbah cair bernama <strong>vinasse</strong>. Setiap harinya, satu pabrik bisa menghasilkan <strong>150–200 liter</strong> limbah ini tanpa sistem pengolahan yang memadai.<br><br>Vinasse berwarna <strong>hitam pekat</strong>, berbau menyengat, dan sangat berbahaya jika dibuang langsung ke sungai. Vinasse <strong>menyerap oksigen</strong> di dalam air, menyebabkan ikan-ikan mati dan sungai tercemar parah."},{tag:"Bagian 3 dari 3",title:"Solusi: Vinasse → Pupuk Organik Cair",text:"Kabar baiknya, limbah vinasse bisa diolah menjadi <strong>Pupuk Organik Cair (POC)</strong>! Caranya dengan menambahkan <strong>mikroorganisme berupa ragi</strong> ke dalam vinasse yang sudah diaerasi minimal 24 jam.<br><br>Setelah ditumbuhkan selama <strong>15 hari</strong> dalam bak terbuka beraeasi, limbah berubah menjadi pupuk: tidak berbau asam, berwarna coklat muda. Diaplikasikan ke tanaman dengan perbandingan <strong>1 : 10</strong> (POC : air). Ukur kadar COD, BOD, dan pH untuk memastikan kualitasnya!"}];let i=0,a=!1,s=null;const r=ce("syn-seg-tag"),o=ce("syn-seg-title"),l=ce("syn-seg-text"),d=ce("syn-dots"),c=ce("btn-syn-prev"),p=ce("btn-syn-next"),f=ce("btn-syn-skip"),h=ce("synopsis-content-panel"),g=ce("syn-mouth");function x(){m(),s=setInterval(()=>{a=!a,g&&g.setAttribute("d",a?"M84 124 Q100 144 116 124":"M84 126 Q100 138 116 126")},280)}function m(){s&&(clearInterval(s),s=null),g&&g.setAttribute("d","M84 126 Q100 138 116 126")}function u(){m(),e.classList.add("hidden"),n()}function v(b){const _=t[b];h.classList.remove("synopsis-slide"),h.offsetWidth,h.classList.add("synopsis-slide"),r.textContent=_.tag,o.textContent=_.title,l.innerHTML=_.text,d.innerHTML=t.map((k,w)=>`<span class="synopsis-dot ${w===b?"active":""}"></span>`).join(""),c.style.display=b===0?"none":"",p.textContent=b===t.length-1?"🚀 Mulai Petualangan →":"Lanjutkan →",x()}v(0),c.onclick=()=>{i>0&&v(--i)},p.onclick=()=>{i<t.length-1?v(++i):u()},f.onclick=()=>u()}const ks=[{id:"uvrGTeHVYq4",title:"Video Edukasi Pencemaran Limbah Vinasse",subtitle:"Pelajari dampak pencemaran vinasse terhadap lingkungan sekitar"}];let Ld=!1;const Cd=[];window.onYouTubeIframeAPIReady=()=>{Ld=!0,Cd.splice(0).forEach(n=>n())};function Px(){return new Promise(n=>{if(Ld){n();return}if(Cd.push(n),!document.getElementById("yt-api-script")){const e=document.createElement("script");e.id="yt-api-script",e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}})}function Dx(n){const e=ce("youtube-screen");e.classList.remove("hidden");let t=0,i=null;function a(){const r=e.querySelector(".youtube-frame-wrap");r.innerHTML='<div id="yt-player-container"><div class="yt-loading">Memuat video…</div></div>'}function s(r){const o=ks[r];ce("yt-title").textContent=o.title,ce("yt-subtitle").textContent=o.subtitle,ce("yt-counter").textContent=`${r+1} / ${ks.length}`;const l=ce("btn-yt-next");l.textContent=r<ks.length-1?"Video Berikutnya →":"Lanjutkan ke Simulasi →",l.disabled=!1,l.title="",i&&(i.destroy(),i=null),a(),Px().then(()=>{i=new YT.Player("yt-player-container",{videoId:o.id,playerVars:{rel:0,modestbranding:1,playsinline:1},events:{}})})}s(0),ce("btn-yt-next").onclick=()=>{t+=1,t<ks.length?s(t):(i&&(i.destroy(),i=null),e.classList.add("hidden"),n())}}function Ix(n){const e=ce("intro-video-screen");e.classList.remove("hidden");const t=ce("intro-3d-canvas"),i=window.innerWidth,a=window.innerHeight,s=new Lo({canvas:t,antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(i,a,!1),s.shadowMap.enabled=!0,s.shadowMap.type=wo;const r=new va;r.background=new $e(8900331),r.fog=new Ka(12114160,90,210);const o=new on(50,i/a,.1,300);o.position.set(0,65,75),o.lookAt(0,0,0),r.add(new bd(10409208,5929536,1.2));const l=new Pn(16775136,2.8);l.position.set(40,80,50),l.castShadow=!0,l.shadow.mapSize.setScalar(2048),l.shadow.camera.left=l.shadow.camera.bottom=-90,l.shadow.camera.right=l.shadow.camera.top=90,l.shadow.camera.far=220,r.add(l);const d=new Pn(11587839,.45);d.position.set(-30,25,-20),r.add(d),r.add(new C(new lt(190,16,8),new Ct({color:6991584,side:Qt})));function c(U,ie=.78,ve=0,ee,Me){const De={color:U,roughness:ie,metalness:ve};return ee!==void 0&&(De.emissive=ee,De.emissiveIntensity=Me||.2),new te(De)}function p(U,ie,ve,ee,Me,De,ht){const Ut=new C(new ae(ee,Me,De),ht);return Ut.position.set(U,ie+Me*.5,ve),Ut.castShadow=!0,Ut.receiveShadow=!0,r.add(Ut),Ut}function f(U,ie,ve,ee,Me,De,ht,Ut){const Gt=new C(new he(ee,Me,De,ht),Ut);return Gt.position.set(U,ie+De*.5,ve),Gt.castShadow=!0,Gt.receiveShadow=!0,r.add(Gt),Gt}function h(U,ie,ve,ee,Me,De=.84){const ht=new C(new kt(ve,ee),new te({color:Me,transparent:!0,opacity:De,roughness:.04,metalness:.18}));return ht.rotation.x=-Math.PI/2,ht.position.set(U,.22,ie),r.add(ht),ht}function g(U,ie,ve,ee,Me,De,ht=5596791,Ut=.24){const Gt=new T(U,ie,ve),S=new T(ee,Me,De),O=S.clone().sub(Gt),G=O.length();if(G<.05)return;const q=new C(new he(Ut,Ut,G,8),c(ht,.45,.65));q.position.copy(Gt.clone().add(S).multiplyScalar(.5)),q.quaternion.setFromUnitVectors(new T(0,1,0),O.normalize()),r.add(q)}const x=new C(new kt(260,260),c(8033368,.95));x.rotation.x=-Math.PI/2,x.receiveShadow=!0,r.add(x),p(6,-.05,1,82,.1,68,c(11708816,.88));const m=7,u=13,v=5,b=7,_=1.4,k=.36,w=U=>-21+U*b,E=[8008464,6965782,4872744,2977352,2127994,1608346,960716],N=[],M=[];for(let U=0;U<m;U++){const ie=w(U),ve=E[U],ee=c(8028272,.78);p(0,0,ie-v/2,u*2+k*2,_,k,ee),p(0,0,ie+v/2,u*2+k*2,_,k,ee),p(-u,0,ie,k,_,v,ee),p(u,0,ie,k,_,v,ee),p(0,-.25,ie,u*2,.28,v,c(10524800,.88));const Me=.76+U*.015,De=h(0,ie,u*2-.1,v-.12,ve,Me);if(N.push({mesh:De,baseOp:Me}),U===3||U===4)for(let ht=-1;ht<=1;ht++){const Ut=f(ht*7,.25,ie,.75,.75,.28,12,c(11189196,.4,.55,3381708,.3));M.push(Ut),p(ht*7,.28,ie,.14,1,.14,c(8948121,.5,.5))}}const L=c(12761250,.88);for(let U=0;U<=m;U++){const ie=-21-b/2+U*b;p(6,0,ie,82,.12,2,L)}p(-20,0,1,2.2,.12,70,L),p(32,0,1,2.2,.12,70,L);for(let U=0;U<m-1;U++){const ie=U%2===0?u+.5:-13.5,ve=w(U),ee=w(U+1);p(ie,0,(ve+ee)*.5,2.2,_,Math.abs(ee-ve)+.5,c(6977672,.65,.3))}p(-28,0,-30,12,5.5,8,c(5924984,.62,.1)),p(-28,5.5,-30,12.5,.55,8.5,c(3819608,.5));for(let U=-1.5;U<=1.5;U+=.65)p(-22.8,0,-30+U,.1,2.4,.1,c(3359829,.4,.7));p(-27,2,-33.7,1.8,1.2,.08,c(8969727,.08,0,13141,.9)),p(-29.5,2,-33.7,1.8,1.2,.08,c(8969727,.08,0,13141,.9));const I=-34,B=-30;f(I,0,B,1.1,.9,14,16,c(8952234,.38,.55)),f(I,14,B,1.2,1.2,.3,16,c(11189196,.35,.5)),[2,4.5,7.5,10.5,13].forEach(U=>{f(I,U,B,1.18,1.18,.18,16,c(10070715,.42,.6))}),g(I+1.1,1.2,B,-22,1.2,-30,4478310,.28),p(I-2.2,6,B,2.8,1.4,1.4,c(6977672,.55,.3)),g(I-1.1,6.5,B,I-1.8,6.5,B,5596791,.22);const Y=-24,P=-14,F=12,X=9;p(Y,0,P,F,1.5,X,c(7241328,.75)),p(Y,0,P,F-k*2,.24,X-k*2,c(10129544,.88));const ne=h(Y,P,F-.8,X-.8,5926976,.82);g(-22,.9,-28,-22,.9,-14,4478310,.3),g(-18.2,.9,-14,-13.2,.9,-21,4478310,.3),p(-28,0,8,8,4.5,6.5,c(6975600,.65,.1)),p(-28,4.5,8,8.5,.42,7,c(3817552,.5)),f(-25.5,4.9,6,.34,.34,4.5,10,c(8947864,.5,.3));for(let U=0;U<3;U++)g(-18.5,.8,-21+U*14,-21,.8,-21+U*14,4478310,.2);[-14,-6,2].forEach(U=>{p(-32+U*.3,0,32,6,.42,9.5,c(10522720,.93))});const $=30,j=18,J=10;f($,0,j,J+.55,J+.55,1.6,48,c(8030328,.7)),f($,0,j,J,J,1.6,48,c(8030328,.7)),f($,-.25,j,J,J,.28,48,c(10127472,.88));const V=new C(new vn(J-.08,48),new te({color:3057848,transparent:!0,opacity:.86,roughness:.04,metalness:.2}));V.rotation.x=-Math.PI/2,V.position.set($,.22,j),r.add(V),f($,1.6,j,.58,.58,3.8,10,c(5925495,.5,.5)),p($,1.6,j,J*2-.3,.22,.38,c(8952234,.45,.4));const K=new C(new jn(4.5,2.8,32),c(5911312,.85));K.rotation.x=Math.PI,K.position.set($,.9,j),r.add(K),g(u+.4,.9,w(6),$-J-.6,.9,j,4482696,.3),[[44,-10],[52,-10]].forEach(([U,ie])=>{p(U,0,ie,6.5,1.1,10,c(7899288,.7)),h(U,ie,6,9.5,6728396,.82)}),f(58,0,-5,.95,.95,3.4,14,c(14544639,.32,.28,8930559,.4)),g($+J+.5,.9,j,44,.9,-10,4482696,.28),g(48,.9,-10,52,.9,-10,4482696,.25),g(55.5,.9,-10,58,.9,-5,4482696,.25),p(58,0,16,.36,9,.36,c(10066602,.4,.6)),p(58,9,16,1.6,.9,1,c(13378082,.5,.3,16711680,.55));const z=new C(new lt(.32,8,8),new te({color:16720418,emissive:16711680,emissiveIntensity:2.5}));z.position.set(58,10.2,16),r.add(z);const Q=[];for(let U=0;U<4;U++){const ie=new C(new lt(.22,6,6),new te({color:2293691,emissive:52360,emissiveIntensity:1.8,transparent:!0,opacity:.9}));ie.userData.i=U,r.add(ie),Q.push(ie)}const ue=h(72,8,18,60,2263227,.78);g(58,.9,-5,66,.9,0,4482696,.3);const ke=new te({color:7027210,roughness:.95}),Te=[c(2981178,.9),c(3837764,.88),c(4888896,.85),c(2263098,.92),c(5474352,.87),c(1992226,.93)],Ne=[];for(let U=-58;U<=78;U+=6.5)Ne.push([U,-42]),Ne.push([U,44]);for(let U=-40;U<=42;U+=6.5)Ne.push([-58,U]),Ne.push([78,U]);[[-44,-22],[-46,-8],[-44,18],[-44,30],[56,-28],[58,-12],[56,10],[56,30],[-36,38],[-18,40],[2,40],[20,40],[38,40],[-36,-36],[-18,-38],[2,-38],[22,-38],[42,-36],[52,-36]].forEach(U=>Ne.push(U)),Ne.forEach(([U,ie])=>{const ve=.85+Math.random()*.75,ee=new C(new he(.18*ve,.3*ve,2.2*ve,7),ke);ee.position.set(U,1.1*ve,ie),ee.castShadow=!0,r.add(ee);const Me=Te[Math.floor(Math.random()*Te.length)];if(Math.random()>.42){const De=new C(new lt(1.5*ve,8,7),Me);De.position.set(U,3.8*ve,ie),De.castShadow=!0,r.add(De)}else for(let De=0;De<3;De++){const ht=new C(new jn((1.3-De*.28)*ve,1.3*ve,8),Me);ht.position.set(U,(2.5+De*1.2)*ve,ie),ht.castShadow=!0,r.add(ht)}});const We=new hd([new T(-23,.7,-30),new T(-23,.7,-21),new T(Y,.7,P),new T(-13,.7,-21),new T(0,.7,-21),new T(13,.7,-21),new T(14,.7,-17.5),new T(13,.7,-14),new T(0,.7,-14),new T(-13,.7,-14),new T(-14,.7,-10.5),new T(-13,.7,-7),new T(0,.7,-7),new T(13,.7,-7),new T(14,.7,-3.5),new T(13,.7,0),new T(0,.7,0),new T(-13,.7,0),new T(-14,.7,3.5),new T(-13,.7,7),new T(0,.7,7),new T(13,.7,7),new T(14,.7,10.5),new T(13,.7,14),new T(0,.7,14),new T(-13,.7,14),new T(-14,.7,17.5),new T(-13,.7,21),new T(0,.7,21),new T(13,.7,21),new T(22,.7,21),new T($,.7,j),new T(44,.7,-10),new T(58,.7,-5),new T(66,.7,0)]);function ze(U,ie,ve){const ee=U>>16&255,Me=U>>8&255,De=U&255,ht=ie>>16&255,Ut=ie>>8&255,Gt=ie&255;return Math.round(ee+(ht-ee)*ve)<<16|Math.round(Me+(Ut-Me)*ve)<<8|Math.round(De+(Gt-De)*ve)}const st=90,D=[];for(let U=0;U<st;U++){const ie=U/st,ve=ze(8005632,1091800,ie),ee=U%3!==0,Me=ee?new Io(.1+U%6*.04,.28+U%5*.07,20):new vn(.16+U%7*.03,12),De=new C(Me,new te({color:ve,emissive:ve,emissiveIntensity:ee?.65:.3,roughness:.04,metalness:.1,transparent:!0,opacity:ee?.72:.52,side:zt}));De.rotation.x=-Math.PI/2,De.userData.t=ie,De.userData.ph=U*.618033%1,r.add(De),D.push(De)}const He=[],be=50,Re=[[-7,0],[0,0],[7,0],[-7,7],[0,7],[7,7]];for(let U=0;U<be;U++){const ie=Re[U%Re.length],ve=new C(new lt(.07+Math.random()*.09,5,5),new te({color:12118271,transparent:!0,opacity:.72}));ve.userData.phase=U/be*Math.PI*2,ve.userData.ox=ie[0]+(Math.random()-.5)*10,ve.userData.oz=ie[1]+(Math.random()-.5)*(v-1),r.add(ve),He.push(ve)}const Se=[],_t=28;for(let U=0;U<_t;U++){const ie=new C(new lt(.14,5,5),new te({color:7025425,transparent:!0,opacity:.78}));ie.userData.phase=U/_t,ie.userData.ang=Math.random()*Math.PI*2,ie.userData.r=1.5+Math.random()*(J-3),r.add(ie),Se.push(ie)}const Ke=[],A=36;for(let U=0;U<A;U++){const ie=new C(new lt(.3+Math.random()*.22,7,7),new te({color:15661311,emissive:11197934,emissiveIntensity:.18,transparent:!0,opacity:.55,roughness:.85}));ie.userData.life=U/A,ie.userData.ox=(Math.random()-.5)*1.2,ie.userData.oz=(Math.random()-.5)*1.2,r.add(ie),Ke.push(ie)}const y=[],H=22;for(let U=0;U<H;U++){const ie=new C(new lt(.26,5,5),new te({color:11184810,transparent:!0,opacity:.38}));ie.userData.life=U/H,ie.userData.ox=(Math.random()-.5)*.6,ie.userData.oz=(Math.random()-.5)*.6,r.add(ie),y.push(ie)}const le=[],re=12;for(let U=0;U<re;U++){const ie=new C(new lt(.13,5,5),new te({color:14548872,transparent:!0,opacity:.88}));ie.userData.phase=U/re,ie.userData.ox=(Math.random()-.5)*3.5,r.add(ie),le.push(ie)}const oe=[{tag:"Tahap 1 dari 5",title:"Penampungan Awal (Bak Ekualisasi)",subtitle:"Equalization Basin",waterQuality:5,camPos:[-28,18,-24],camLook:[-24,0,-24],desc:"Limbah vinasse yang pekat dari industri etanol dialirkan dan ditampung terlebih dahulu di bak penampungan awal IPAL Ciunik. Pada tahap ini, dilakukan penyamaan atau stabilisasi debit, suhu, dan tingkat keasaman (pH) limbah agar kondisinya ideal dan tidak merusak sistem pengolahan di tahap selanjutnya."},{tag:"Tahap 2 dari 5",title:"Proses Aerasi (Injeksi Oksigen)",subtitle:"Aeration Process",waterQuality:28,camPos:[-8,16,-8],camLook:[0,0,0],desc:"Setelah stabil, limbah dialirkan ke dalam bak aerasi. Di dalam bak ini, air limbah dipompa dan disuplai dengan gelembung udara (oksigen) secara terus-menerus menggunakan mesin aerator. Oksigen ini sangat krusial untuk menjaga agar kondisi air tetap kaya oksigen terlarut."},{tag:"Tahap 3 dari 5",title:"Penambahan Mikroorganisme (Bakteri Pengurai)",subtitle:"Biological Treatment",waterQuality:55,camPos:[6,18,14],camLook:[6,0,2],desc:"Bersamaan dengan suplai oksigen yang melimpah, ditambahkan mikroorganisme aerobik (bakteri pengurai) ke dalam bak aerasi. Mikroorganisme ini bekerja dengan cara menguraikan polutan serta zat-zat organik berbahaya yang terkandung dalam vinasse, mengubahnya menjadi pupuk organik cair."},{tag:"Tahap 4 dari 5",title:"Pengendapan (Clarifier)",subtitle:"Secondary Clarifier",waterQuality:80,camPos:[22,16,20],camLook:[30,0,18],desc:"Setelah zat organik hancur terurai, campuran air limbah dan mikroorganisme dialirkan ke bak pengendap. Gumpalan bakteri dan sisa kotoran akan dibiarkan mengendap ke dasar bak, sementara air yang sudah jernih akan terpisah dan naik ke permukaan."},{tag:"Tahap 5 dari 5",title:"Pelepasan Air Bersih (Output)",subtitle:"Clean Water Discharge",waterQuality:100,camPos:[44,18,26],camLook:[54,0,14],desc:"Air hasil pemisahan tersebut kini memiliki kadar polutan (seperti BOD dan COD) yang sangat rendah dan sudah memenuhi standar baku mutu lingkungan. Air ini dapat dikembalikan atau dilepas ke alam tanpa mencemari ekosistem sekitarnya atau dimanfaatkan menjadi pupuk organik cair."}];function Le(U){return U<.5?2*U*U:-1+(4-2*U)*U}function xe(U,ie,ve){return[U[0]+(ie[0]-U[0])*ve,U[1]+(ie[1]-U[1])*ve,U[2]+(ie[2]-U[2])*ve]}function Ae(){if(ce("intro-steps-styles"))return;const U=`
      .intro-steps-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 150;
        pointer-events: none;
      }

      .intro-step-btn {
        position: fixed;
        padding: 10px 14px 12px;
        border: none;
        background: linear-gradient(135deg, rgba(52, 152, 219, 0.95), rgba(41, 128, 185, 0.9));
        color: #fff;
        font-size: 10px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
        backdrop-filter: blur(8px);
        white-space: nowrap;
        pointer-events: auto;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .intro-step-btn::before {
        content: attr(data-tag);
        display: block;
        transform: rotate(45deg);
        font-size: 15px;
        line-height: 1.2;
      }

      .intro-step-btn:hover {
        background: linear-gradient(135deg, rgba(52, 152, 219, 1), rgba(41, 128, 185, 1));
        transform: rotate(-45deg) scale(1.1);
        box-shadow: 0 6px 18px rgba(0,0,0,0.6);
      }

      .intro-step-btn.active {
        background: linear-gradient(135deg, rgba(46, 204, 113, 0.95), rgba(39, 174, 96, 0.9));
        border: 2px solid #2ecc71;
        color: #fff;
        box-shadow: 0 0 25px rgba(46, 204, 113, 0.7), inset 0 0 10px rgba(255, 255, 255, 0.2);
        transform: rotate(-45deg) scale(1.15);
      }

      .intro-info-card {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(20, 40, 60, 0.98);
        border: 2px solid rgba(52, 152, 219, 0.6);
        border-radius: 16px;
        padding: 24px;
        max-width: 500px;
        width: calc(100vw - 40px);
        max-height: 80vh;
        overflow-y: auto;
        z-index: 210;
        color: #ddeeff;
        backdrop-filter: blur(12px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.6);
        animation: slideInCenter 0.3s ease-out;
        display: none;
      }

      .intro-info-card.visible {
        display: block;
      }

      .intro-info-image {
        width: 100%;
        height: 220px;
        border-radius: 12px;
        background: rgba(0, 20, 40, 0.8);
        margin-bottom: 16px;
        object-fit: cover;
        display: block;
      }

      .intro-info-title {
        font-size: 20px;
        font-weight: 700;
        color: #2ecc71;
        margin-bottom: 6px;
      }

      .intro-info-subtitle {
        font-size: 13px;
        color: #a0d4ff;
        margin-bottom: 12px;
      }

      .intro-info-desc {
        font-size: 13px;
        line-height: 1.6;
        color: #b0d0e0;
        margin-bottom: 12px;
      }

      .intro-info-component {
        font-size: 11px;
        color: #7db0d0;
        margin-bottom: 12px;
        font-style: italic;
      }

      .intro-info-wq {
        font-size: 12px;
        color: #a0d4ff;
        margin-bottom: 16px;
        padding: 8px 12px;
        background: rgba(52, 152, 219, 0.2);
        border-radius: 6px;
      }

      .intro-info-back-btn {
        width: 100%;
        padding: 10px 16px;
        border-radius: 8px;
        border: 1px solid rgba(52, 152, 219, 0.6);
        background: rgba(52, 152, 219, 0.2);
        color: #a0d4ff;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }

      .intro-info-back-btn:hover {
        background: rgba(52, 152, 219, 0.4);
        border-color: #3498db;
        color: #fff;
      }

      @keyframes slideInCenter {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
        to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      }

      @media (max-width: 600px) {
        .intro-info-card {
          top: auto;
          left: auto;
          right: 10px;
          bottom: 80px;
          transform: none;
          max-width: calc(100vw - 20px);
          width: auto;
          max-height: 50vh;
          padding: 16px;
        }
        .intro-info-title { font-size: 16px; }
        .intro-info-subtitle { font-size: 12px; }
        .intro-info-desc { font-size: 12px; }
      }
    `,ie=document.createElement("style");ie.id="intro-steps-styles",ie.textContent=U,document.head.appendChild(ie)}Ae();const Fe=document.createElement("div");Fe.className="intro-steps-container",e.appendChild(Fe);const Je=[new T(Y,2,P),new T(0,1,0),new T(0,1,7),new T($,1,j),new T(60,1,0)],se=[];oe.forEach((U,ie)=>{const ve=document.createElement("button");ve.className="intro-step-btn",ve.setAttribute("data-tag",(ie+1).toString()),ve.dataset.step=ie,ve.onclick=()=>Mt(ie),ve.userData={worldPos:Je[ie]},Fe.appendChild(ve),se.push(ve)});const ot=document.createElement("div");ot.className="intro-info-card",ot.innerHTML=`
    <img class="intro-info-image" id="intro-info-image" src="" alt="Stage image" />
    <div class="intro-info-title" id="intro-info-title"></div>
    <div class="intro-info-subtitle" id="intro-info-subtitle"></div>
    <div class="intro-info-desc" id="intro-info-desc"></div>
    <div class="intro-info-component" id="intro-info-component"></div>
    <div class="intro-info-wq" id="intro-info-wq"></div>
    <button class="intro-info-back-btn" id="btn-back-to-eagle">↶ Kembali ke Pandangan Keseluruhan</button>
  `,e.appendChild(ot);const tt=["stages/stage1.png","stages/stage2.png","stages/stage3.png","stages/stage4.png","stages/stage5.png"],Xe=["Bak Ekualisasi: Menyeimbangkan pH, suhu, dan debit limbah","Bak Aerasi: Injeksi oksigen untuk mendukung bakteri","Proses Biologis: Bakteri mengurai polutan","Bak Pengendap: Sludge mengendap ke dasar","Pelepasan: Air bersih dilepas ke alam"];function Ie(U,ie,ve){const ee=U.clone();ee.project(ie);const Me=(ee.x*.5+.5)*ve.clientWidth,De=(-ee.y*.5+.5)*ve.clientHeight;return{x:Me,y:De,visible:ee.z>=0&&ee.z<=1}}let ye=null,Ge=null,ct=1.2;function Mt(U){ye=U,Ge=Ot.getElapsedTime(),document.querySelectorAll(".intro-step-btn").forEach((ee,Me)=>{ee.classList.toggle("active",Me===U)});const ie=oe[U];ce("intro-info-image").src=tt[U],ce("intro-info-image").onerror=()=>{ce("intro-info-image").style.backgroundColor="#2a3a4a",ce("intro-info-image").style.display="flex",ce("intro-info-image").style.alignItems="center",ce("intro-info-image").style.justifyContent="center",ce("intro-info-image").style.color="#666",ce("intro-info-image").textContent="(Image not found)"},ce("intro-info-title").textContent=ie.title,ce("intro-info-subtitle").textContent=ie.subtitle,ce("intro-info-desc").textContent=ie.desc,ce("intro-info-component").textContent=Xe[U],ce("intro-info-wq").innerHTML=`<strong>Kualitas Air: ${ie.waterQuality}%</strong>`,ot.classList.add("visible");const ve=ot.querySelector("#btn-back-to-eagle");ve&&(ve.onclick=()=>{ye=null,Ge=Ot.getElapsedTime(),ot.classList.remove("visible"),document.querySelectorAll(".intro-step-btn").forEach(ee=>ee.classList.remove("active"))})}const je=[0,0,0];let pe=0,R=.3;const ge=120;let fe=!1,Ue=0,Ce=0;const dt=.005;function pt(){const U=ge*Math.cos(R)*Math.sin(pe),ie=ge*Math.sin(R),ve=ge*Math.cos(R)*Math.cos(pe);return[U,ie,ve]}t.addEventListener("mousedown",U=>{fe=!0,Ue=U.clientX,Ce=U.clientY}),t.addEventListener("mousemove",U=>{if(!fe||ye!==null)return;const ie=U.clientX-Ue,ve=U.clientY-Ce;pe-=ie*dt,R+=ve*dt,R=Math.max(-Math.PI*.33,Math.min(Math.PI*.33,R)),Ue=U.clientX,Ce=U.clientY}),t.addEventListener("mouseup",()=>{fe=!1}),t.addEventListener("mouseleave",()=>{fe=!1}),t.addEventListener("touchstart",U=>{U.touches.length===1&&(fe=!0,Ue=U.touches[0].clientX,Ce=U.touches[0].clientY)},!1),t.addEventListener("touchmove",U=>{if(!fe||ye!==null||U.touches.length!==1)return;const ie=U.touches[0].clientX-Ue,ve=U.touches[0].clientY-Ce;pe-=ie*dt,R+=ve*dt,R=Math.max(-Math.PI*.33,Math.min(Math.PI*.33,R)),Ue=U.touches[0].clientX,Ce=U.touches[0].clientY},!1),t.addEventListener("touchend",()=>{fe=!1},!1);let Rt=null;const Ot=new _d,mt=ce("btn-intro-continue");mt.disabled=!1;let Pt=pt(),jt=je;function ya(){Rt=requestAnimationFrame(ya);const U=Ot.getElapsedTime();let ie,ve;if(ye!==null&&Ge!==null){const ee=U-Ge,Me=Math.min(ee/ct,1),De=Le(Me),ht=Pt,Ut=jt,Gt=oe[ye].camPos,S=oe[ye].camLook;ie=xe(ht,Gt,De),ve=xe(Ut,S,De),Me>=1&&(Pt=Gt,jt=S)}else if(ye===null&&Ge!==null){const ee=U-Ge,Me=Math.min(ee/ct,1),De=Le(Me),ht=Pt,Ut=jt,Gt=pt();ie=xe(ht,Gt,De),ve=xe(Ut,je,De),Me>=1&&(Ge=null,Pt=Gt,jt=je)}else ie=pt(),ve=je,Pt=ie,jt=ve;o.position.set(ie[0],ie[1],ie[2]),o.lookAt(ve[0],ve[1],ve[2]),se.forEach((ee,Me)=>{const De=Ie(Je[Me],o,t);De.visible&&De.x>0&&De.x<t.clientWidth&&De.y>0&&De.y<t.clientHeight?(ee.style.left=De.x-25+"px",ee.style.top=De.y-50+"px",ee.style.opacity="1",ee.style.pointerEvents="auto"):(ee.style.opacity="0.3",ee.style.pointerEvents="none")}),D.forEach(ee=>{ee.userData.t=(ee.userData.t+.00145)%1;const Me=ee.userData.t;ee.position.copy(We.getPoint(Me)),ee.position.y=.27;const De=(ee.userData.ph+U*.32)%1;ee.scale.setScalar(.4+De*2.2),ee.material.opacity=Math.max(0,.8-De*.88);const ht=ze(8005632,1091800,Me);ee.material.color.setHex(ht),ee.material.emissive.setHex(ht)}),He.forEach(ee=>{const Me=(U*.82+ee.userData.phase)%(Math.PI*2)/(Math.PI*2);ee.position.set(ee.userData.ox,.22+Me*1.55,ee.userData.oz),ee.material.opacity=Me<.72?.7:(1-Me)*4.5}),Se.forEach(ee=>{const Me=(U*.22+ee.userData.phase)%1;ee.position.set($+Math.cos(ee.userData.ang+U*.04)*ee.userData.r,1.3-Me*1.2,j+Math.sin(ee.userData.ang+U*.04)*ee.userData.r),ee.material.opacity=Me>.75?(1-Me)*5:.72}),M.forEach((ee,Me)=>{ee.rotation.y=U*(1.5+Me%3*.4)}),Ke.forEach(ee=>{ee.userData.life=(ee.userData.life+.0048)%1;const Me=ee.userData.life;ee.position.set(I+ee.userData.ox+Math.sin(Me*4.2+U*.7)*.55,14.3+Me*8,B+ee.userData.oz+Math.cos(Me*3.5+U*.5)*.55),ee.scale.setScalar(.5+Me*2.8),ee.material.opacity=Math.max(0,.55-Me*.62)}),y.forEach(ee=>{ee.userData.life=(ee.userData.life+.0036)%1;const Me=ee.userData.life;ee.position.set(-25.5+ee.userData.ox+Math.sin(Me*3.5+U)*.5,4.9+Me*5.5,6+ee.userData.oz+Math.cos(Me*2.8+U*.6)*.4),ee.material.opacity=Math.max(0,(1-Me)*.4),ee.scale.setScalar(.18+Me*1.25)}),le.forEach(ee=>{const Me=(U*1.05+ee.userData.phase)%1;ee.position.set(58+ee.userData.ox,3.8-Me*4.5,-5),ee.material.opacity=.88*(1-Me)}),z.material.emissiveIntensity=1.2+1.5*Math.sin(U*5.8),Q.forEach(ee=>{const Me=(U*.58+ee.userData.i*.25)%1;ee.position.set(58+Me*14,10.2+Math.sin(Me*Math.PI)*5,16+Me*6),ee.material.opacity=(1-Me)*.88}),N.forEach(ee=>{ee.mesh.material.opacity=ee.baseOp+.03*Math.sin(U*.75+ee.baseOp*14)}),V.material.opacity=.84+.05*Math.sin(U*1.05),ne.material.opacity=.8+.04*Math.sin(U*.68),ue.material.opacity=.75+.06*Math.sin(U*.88),s.render(r,o)}ya(),ce("btn-intro-continue").onclick=()=>{cancelAnimationFrame(Rt),s.dispose(),e.classList.add("hidden"),n()}}function Rd(n){ce("instructions-screen").classList.remove("hidden");const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1,t=ce("instr-controls-text");t&&(t.innerHTML=e?"Gunakan <strong>joystick virtual</strong> di kiri bawah layar untuk bergerak. Dekati objek bercahaya lalu ketuk tombol <strong>E</strong> di kanan bawah untuk berinteraksi.":"Gunakan <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> atau tombol panah untuk bergerak. Dekati objek bercahaya lalu tekan <kbd>E</kbd> untuk berinteraksi.");const i=ce("instr-level-guide");if(i){const a=[{num:1,icon:"🔬",name:"Lab Sains",desc:"Amati 3 fenomena pencemaran vinasse di laboratorium dan jawab pertanyaan ilmiah."},{num:2,icon:"🏭",name:"Pabrik Etanol",desc:"Kunjungi 3 stasiun pabrik, lakukan simulasi pengolahan COD/BOD/pH secara interaktif."},{num:3,icon:"🌿",name:"Kolam Remediasi",desc:"Pilih mikroorganisme yang tepat di toko, hitung dosis, lalu buka kran vinasse."},{num:4,icon:"🔧",name:"Membuat Reaktor Sederhana",desc:"Rancang prototype reaktor IPAL: pilih alat & bahan, ikuti prosedur, evaluasi hasilnya."},{num:5,icon:"🔭",name:"Lab Observasi",desc:"Analisis kegagalan reaktor dari Level 4 dan jawab soal evaluasi mikroskop."}];i.innerHTML=a.map(s=>`
      <div class="level-guide-card">
        <span class="lg-icon">${s.icon}</span>
        <div><strong>Level ${s.num} – ${s.name}</strong><div class="lg-desc">${s.desc}</div></div>
      </div>
    `).join("")}ce("btn-start-game").onclick=()=>{ce("instructions-screen").classList.add("hidden"),n()}}function Sc(){Rd(()=>{});const n=ce("btn-start-game");n.textContent="✕ Tutup Petunjuk"}function Ux(){en(),ce("btn-glossary").onclick=()=>bo(),ce("btn-instructions-hud").onclick=()=>Sc();const n=document.getElementById("btn-instructions-hud-mobile"),e=document.getElementById("btn-glossary-mobile"),t=document.getElementById("btn-pause-menu-mobile");n&&n.addEventListener("touchstart",i=>{i.preventDefault(),Sc()},{passive:!1}),e&&e.addEventListener("touchstart",i=>{i.preventDefault(),bo()},{passive:!1}),t&&t.addEventListener("touchstart",i=>{i.preventDefault(),ce("btn-pause-menu").click()},{passive:!1})}function Nx(n,e,t){const i=ce("pause-menu-overlay");ce("btn-pause-menu").onclick=()=>{const a=Oo(),s=ce("pause-checkpoint-info"),r=ce("btn-pm-resume");if(a){const o=new Date(a.savedAt),l=o.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})+" "+o.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});s.innerHTML=`💾 Checkpoint tersimpan: <strong>${a.playerName}</strong> · Level ${a.currentLevel} · ${a.totalPoints} poin<br><small style="color:#aaa">${l}</small>`,r.disabled=!1,r.title=""}else s.innerHTML='<span style="color:#aaa">Belum ada checkpoint tersimpan.</span>',r.disabled=!0,r.title="Tidak ada checkpoint tersimpan";i.classList.remove("hidden")},ce("btn-pm-continue").onclick=()=>{i.classList.add("hidden")},ce("btn-pm-resume").onclick=()=>{i.classList.add("hidden"),n()},ce("btn-pm-newgame").onclick=()=>{confirm("Yakin ingin memulai ulang? Semua progres sesi ini akan hilang.")&&(i.classList.add("hidden"),e())},ce("btn-pm-experiment").onclick=()=>{i.classList.add("hidden"),Bo()},ce("btn-pm-change-level").onclick=()=>{i.classList.add("hidden"),Bx(a=>{t&&t(a)})},i.addEventListener("click",a=>{a.target===i&&i.classList.add("hidden")})}function en(){ce("hud-player").textContent=Z.playerName||"Pemain",ce("hud-level").textContent=`Level ${Z.currentLevel}`,ce("hud-points").textContent=Z.totalPoints;const n=ce("hud-attempts");n.innerHTML="";for(let e=0;e<3;e++){const t=document.createElement("div");t.className="attempt-dot"+(e<Z.levelAttempts?" used":""),n.appendChild(t)}}function Ho(n){const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1;let t=ce("interact-prompt");t||(t=document.createElement("div"),t.id="interact-prompt",t.style.cssText=`
      position:fixed; bottom:${e?"200px":"120px"}; left:50%; transform:translateX(-50%);
      background:rgba(10,20,40,0.88); color:#fff; padding:10px 22px;
      border-radius:24px; font-size:15px; pointer-events:none;
      border:2px solid #00d4ff; box-shadow:0 0 18px #00d4ff88;
      transition:opacity 0.25s; z-index:200; white-space:nowrap;
    `,document.body.appendChild(t)),e&&n&&(n=n.replace(/Tekan <kbd>E<\/kbd>/g,"👆 Ketuk tombol <b>E</b>")),n?(t.innerHTML=n,t.style.opacity="1",t.style.display="block"):(t.style.opacity="0",setTimeout(()=>{t.style.display="none"},260))}function Ox(n){if(!ce("level-info-styles")){const a=document.createElement("style");a.id="level-info-styles",a.textContent=`
      .level-info-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        justify-content: center;
        z-index: 1500;
        animation: fadeIn 0.4s ease-out;
      }

      .level-info-card {
        background: linear-gradient(135deg, rgba(20, 40, 60, 0.98) 0%, rgba(30, 50, 70, 0.96) 100%);
        border: 2px solid rgba(52, 152, 219, 0.7);
        border-radius: 16px;
        padding: 40px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(16px);
        color: #e0e8f0;
        text-align: center;
        overflow-y: auto;
      }

      .level-info-card h2 {
        font-size: 28px;
        margin: 0 0 20px 0;
        color: #4ab0e6;
        text-shadow: 0 2px 8px rgba(74, 176, 230, 0.3);
      }

      .level-info-card .warning-icon {
        font-size: 48px;
        margin-bottom: 16px;
      }

      .level-info-card .info-section {
        background: rgba(0, 0, 0, 0.3);
        border-left: 4px solid rgba(74, 176, 230, 0.6);
        padding: 16px;
        margin: 16px 0;
        text-align: left;
        border-radius: 8px;
        font-size: 14px;
        line-height: 1.8;
      }

      .level-info-card .info-section strong {
        color: #4ab0e6;
      }

      .level-info-card ul {
        list-style: none;
        padding: 0;
        margin: 12px 0;
      }

      .level-info-card li {
        padding: 8px 0;
        display: flex;
        align-items: center;
      }

      .level-info-card li:before {
        content: "✓";
        color: #22bb88;
        font-weight: bold;
        margin-right: 12px;
        font-size: 18px;
      }

      .level-info-card .warning-item {
        padding: 12px;
        background: rgba(200, 100, 60, 0.2);
        border-left: 4px solid #c8643c;
        margin: 12px 0;
        border-radius: 4px;
        font-weight: 500;
      }

      .level-info-card .warning-item:before {
        content: "⚠ ";
        color: #ff9966;
        margin-right: 8px;
      }

      .level-info-continue-btn {
        background: linear-gradient(135deg, #3a8fc9 0%, #2a6fa9 100%);
        color: white;
        border: none;
        padding: 14px 32px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 24px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(58, 143, 201, 0.3);
      }

      .level-info-continue-btn:hover {
        background: linear-gradient(135deg, #4a9fd9 0%, #3a7fb9 100%);
        box-shadow: 0 6px 20px rgba(58, 143, 201, 0.5);
        transform: translateY(-2px);
      }

      .level-info-continue-btn:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(58, 143, 201, 0.3);
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `,document.head.appendChild(a)}const e=document.createElement("div");e.className="level-info-overlay";const t=document.createElement("div");t.className="level-info-card",t.innerHTML=`
    <div class="warning-icon">📋</div>
    <h2>Tahap 1: Laboratorium</h2>
    
    <div class="info-section">
      <strong>Level Briefing:</strong>
      <ul>
        <li>3 pertanyaan akan ditampilkan secara berurutan</li>
        <li>Setiap pertanyaan adalah tantangan yang berbeda</li>
        <li>Baca dengan teliti untuk memahami fenomena</li>
      </ul>
    </div>

    <div class="info-section">
      <strong>⏱️ Aturan Waktu:</strong>
      <ul>
        <li>Setiap pertanyaan memiliki batas waktu <strong>2 menit</strong></li>
        <li>Hitung mundur dimulai saat pertanyaan muncul</li>
        <li>Jika waktu habis, pertanyaan otomatis lanjut</li>
      </ul>
    </div>

    <div class="warning-item">
      Jika Anda melampaui batas waktu untuk suatu pertanyaan, skor untuk pertanyaan itu akan menjadi 0.
    </div>

    <button class="level-info-continue-btn">Siap! Lanjutkan →</button>
  `,e.appendChild(t);const i=t.querySelector(".level-info-continue-btn");i.onclick=()=>{e.style.animation="fadeOut 0.3s ease-out",setTimeout(()=>{e.remove()},300)},document.body.appendChild(e)}function zx(n,e,t){const i=ce("stage-screen");i.classList.remove("hidden"),i.style.pointerEvents="all",Z.phenomenonIndex=n,Pd(n,()=>{i.classList.add("hidden"),i.style.pointerEvents="none",e&&e()},()=>{i.classList.add("hidden"),i.style.pointerEvents="none",t&&t()},!0)}function Da(n){var t;Z.levelAttempts++,Ed(Z.currentLevel);const e=((t=Z.levelBreakdown.at(-1))==null?void 0:t.points)??0;qx(e,"🏠 Kembali ke Pilihan Ruangan →",()=>{fx(),en(),n&&n()})}const Fx=[{level:1,icon:"🔬",name:"Lab Sains",desc:"Analisis fenomena pencemaran vinasse melalui kuis MCQ",color:"#2980b9"},{level:2,icon:"🏭",name:"Pabrik Etanol",desc:"Simulasi pengukuran COD, BOD & pH limbah vinasse",color:"#e67e22"},{level:3,icon:"🌿",name:"Kolam Remediasi",desc:"Pilih mikroorganisme & buka kran bioremediasi",color:"#27ae60"},{level:4,icon:"⚙️",name:"Membuat Reaktor Sederhana",desc:"Rancang reaktor pengolahan limbah IPAL",color:"#8e44ad"},{level:5,icon:"🔭",name:"Lab Observasi",desc:"Analisis hasil reaktor & evaluasi akhir",color:"#c0392b"}];function Bx(n){const e=document.createElement("div");e.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.85);
    display:flex;align-items:center;
    z-index:9998;flex-direction:column;gap:20px;padding:40px 20px;
    font-family:system-ui,sans-serif;color:#fff;
  `;const t=document.createElement("div");t.style.cssText=`
    background:linear-gradient(160deg,#0d1b2a,#091525);border:1px solid rgba(60,140,220,.35);
    border-radius:18px;padding:32px 40px;text-align:center;max-width:600px;overflow-y:auto;
  `,t.innerHTML=`
    <h2 style="margin:0 0 20px;font-size:24px;color:#a0d8ff">Pilih Level</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px">
      ${[1,2,3,4,5].map(a=>`
        <button data-level="${a}" style="
          padding:16px;border-radius:10px;border:2px solid rgba(60,140,220,.4);
          background:rgba(10,25,45,0.8);color:#7ec8ff;font-size:16px;font-weight:700;
          cursor:pointer;transition:all .2s;
        ">Level ${a}</button>
      `).join("")}
    </div>
  `,e.appendChild(t),document.body.appendChild(e),t.querySelectorAll("button[data-level]").forEach(a=>{a.onclick=()=>{e.remove(),n(parseInt(a.dataset.level))},a.onmouseover=()=>{a.style.borderColor="rgba(60,200,255,.7)",a.style.background="rgba(0,100,180,0.2)"},a.onmouseout=()=>{a.style.borderColor="rgba(60,140,220,.4)",a.style.background="rgba(10,25,45,0.8)"}});const i=document.createElement("button");i.style.cssText=`
    padding:10px 24px;border-radius:8px;border:1px solid rgba(255,255,255,.2);
    background:rgba(255,255,255,.08);color:#ccc;font-size:14px;cursor:pointer;
    transition:all .2s;
  `,i.textContent="✕ Batal",i.onmouseover=()=>{i.style.background="rgba(255,60,60,.18)",i.style.color="#fff"},i.onmouseout=()=>{i.style.background="rgba(255,255,255,.08)",i.style.color="#ccc"},i.onclick=()=>e.remove(),e.appendChild(i)}function Hx(n){const e=document.getElementById("room-select-overlay");e.classList.remove("hidden");function t(){const i=document.getElementById("room-select-grid");i.innerHTML=Fx.map(s=>{const r=Z.completedRooms.includes(s.level);return`
        <button class="room-card ${r?"room-card--done":""}" data-level="${s.level}"
          style="--room-color:${s.color}">
          <div class="room-card-icon">${s.icon}</div>
          <div class="room-card-body">
            <div class="room-card-name">Level ${s.level} — ${s.name}</div>
            <div class="room-card-desc">${s.desc}</div>
          </div>
          <div class="room-card-status">${r?"✅ Selesai":"▶ Mulai"}</div>
        </button>
      `}).join(""),document.getElementById("room-hub-points").textContent=`🪙 ${Z.totalPoints} poin`,document.getElementById("room-hub-progress").textContent=`${Z.completedRooms.length} / 5 ruangan selesai`,i.querySelectorAll(".room-card").forEach(s=>{s.addEventListener("click",()=>{const r=parseInt(s.dataset.level);e.classList.add("hidden"),n(r)})});let a=document.getElementById("room-hub-optional");a||(a=document.createElement("div"),a.id="room-hub-optional",a.style.cssText=`
        margin-top:14px;padding-top:12px;
        border-top:1px solid rgba(255,255,255,.08);
      `,i.parentElement.insertBefore(a,i.nextSibling)),a.innerHTML=`
      <div style="font-size:11px;font-weight:700;color:#4a6080;text-transform:uppercase;
                  letter-spacing:.06em;margin-bottom:8px">
        ⬇ Opsional
      </div>
      <button id="btn-room-upload-exp" style="
        width:100%;display:flex;align-items:center;gap:14px;
        background:rgba(21,101,192,.12);border:1px solid rgba(100,160,255,.25);
        border-radius:12px;padding:12px 16px;cursor:pointer;text-align:left;
        color:#7eb8ff;transition:background .18s;">
        <div style="font-size:26px;line-height:1">📋</div>
        <div style="flex:1">
          <div style="font-size:14px;font-weight:700;margin-bottom:2px">Upload Hasil Percobaan Nyata</div>
          <div style="font-size:12px;color:#4a7090">
            Isi tabel data kelompokmu dari percobaan di laboratorium — tidak mempengaruhi poin
          </div>
        </div>
        <div style="font-size:12px;color:#2a6090;white-space:nowrap">📤 Opsional</div>
      </button>
    `,a.querySelector("#btn-room-upload-exp").onmouseenter=function(){this.style.background="rgba(21,101,192,.22)"},a.querySelector("#btn-room-upload-exp").onmouseleave=function(){this.style.background="rgba(21,101,192,.12)"},a.querySelector("#btn-room-upload-exp").onclick=()=>{e.classList.add("hidden"),Bo()}}t(),e._refresh=t}function Gx(){var t;Ed(Z.currentLevel),wx({playerName:Z.playerName,totalPoints:Z.totalPoints,levelBreakdown:Z.levelBreakdown,completedAt:new Date().toISOString(),essayAnswer:((t=Z.stage5)==null?void 0:t.essayAnswer)||""}),Ad();const n=Z.levelBreakdown.map(i=>`
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
      <h1 style="font-size:26px;margin:0 0 6px;color:#2ecc71">Selamat, Kamu Menyelesaikan<br>Semi Immersive VR!</h1>
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
              <td style="text-align:right;padding:8px 12px;font-size:22px;font-weight:700;color:#ffe040">${Z.totalPoints}</td>
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
        <button id="btn-gc-experiment" style="
          padding:12px 28px;border-radius:10px;border:none;cursor:pointer;font-size:15px;font-weight:600;
          background:linear-gradient(135deg,#1565c0,#0d47a1);color:#fff;
          border:1px solid rgba(100,160,255,.35);box-shadow:0 4px 16px rgba(21,101,192,.35)">
          📋 Upload Hasil Percobaan
        </button>
        <button id="btn-gc-close" style="
          padding:12px 28px;border-radius:10px;border:none;cursor:pointer;font-size:15px;font-weight:600;
          background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.2)">
          ✕ Tutup
        </button>
      </div>
    </div>
    <style>@keyframes fadeIn{from{opacity:0}to{opacity:1}}</style>
  `,document.body.appendChild(e),e.querySelector("#btn-gc-close").onclick=()=>{e.remove(),en()},e.querySelector("#btn-gc-restart").onclick=()=>{e.remove(),window.location.reload()},e.querySelector("#btn-gc-experiment").onclick=()=>{Bo()}}function Pd(n,e,t,i=!1){const a=Pa.phenomena[n],s=ce("stage-screen");Z.wrongAnswers=0;const r=s.querySelector(".stage-panel");r&&r.remove();const o=document.createElement("div");o.className="stage-panel fade-in",o.innerHTML=`
    <div class="phenomenon-header">
      <span class="phenomenon-badge">${a.title}</span>
      <div class="header-right">
        <span class="timer-display" id="timer-${n}">⏱️ 2:00</span>
        ${i?"":`<span class="question-progress">${n+1} / ${Pa.phenomena.length}</span>`}
      </div>
      ${t?'<button class="panel-close-btn" id="panel-close-btn" title="Tutup">✕</button>':""}
    </div>
    ${i?"":`
    <div class="progress-bar-wrap">
      ${Pa.phenomena.map((v,b)=>`<div class="prog-dot ${b<n?"done":b===n?"active":""}"></div>`).join("")}
    </div>`}
  `,t&&setTimeout(()=>{const v=o.querySelector("#panel-close-btn");v&&(v.onclick=()=>{clearInterval(f),t()})},0);const l=document.createElement("div");if(l.className="question-text",l.innerHTML=a.context,o.appendChild(l),a.image){const v=document.createElement("div");v.style.cssText="text-align:center;margin:10px 0";const b=document.createElement("img");b.src=a.image,b.alt=a.title||"Gambar soal",b.style.cssText="max-width:100%;max-height:260px;border-radius:10px;border:2px solid rgba(255,255,255,.15);object-fit:contain",v.appendChild(b),o.appendChild(v)}a.tableData&&o.appendChild(Vx(a.tableData)),a.standardTable&&o.appendChild(Wx(a.standardTable)),a.riceGraph&&o.appendChild(Xx());const d=document.createElement("div");d.className="question-text",d.style.marginTop="4px",d.style.borderLeftColor="#e67e22",d.innerHTML=`<strong>❓ Pertanyaan:</strong><br>${a.question}`,o.appendChild(d);const c=document.createElement("div");c.className="answer-options";let p=120,f=null;function h(v){const b=Math.floor(v/60),_=v%60;return`⏱️ ${b}:${_.toString().padStart(2,"0")}`}function g(){const v=o.querySelector(`#timer-${n}`);v&&(v.textContent=h(p),p<=10&&(v.style.color="#ff5555")),p--,p<0&&(clearInterval(f),x||(x=!0,c.querySelectorAll(".answer-btn").forEach(b=>b.disabled=!0),Z.totalPoints+=0,en(),eo(o,!1,"❌ Waktu habis! Nilai: 0 poin"),u.classList.add("visible")))}f=setInterval(g,1e3);let x=!1;a.options.forEach(v=>{const b=document.createElement("button");b.className="answer-btn",b.innerHTML=`<strong>${v.label}.</strong> ${v.text}`,b.dataset.correct=v.correct,b.onclick=()=>{if(!x)if(v.correct){x=!0,clearInterval(f),b.classList.add("correct");const _=Z.wrongAnswers===0?100:Z.wrongAnswers<=1?50:25;Z.totalPoints+=_,en(),eo(o,!0,a.explanation+`<br><strong>+${_} poin!</strong>`),u.classList.add("visible"),c.querySelectorAll(".answer-btn").forEach(k=>k.disabled=!0)}else b.classList.add("wrong"),b.disabled=!0,Z.wrongAnswers++,en(),eo(o,!1,"❌ Jawaban kurang tepat. Coba pilihan lain!")},c.appendChild(b)}),o.appendChild(c);const m=document.createElement("div");m.className="feedback-box",m.id="feedback-box",o.appendChild(m);const u=document.createElement("button");u.className="next-btn",u.textContent=i?"✅ Selesai":n<Pa.phenomena.length-1?"Fenomena Berikutnya →":"✅ Selesai Level 1",u.onclick=()=>{clearInterval(f),i||n>=Pa.phenomena.length-1?(s.classList.add("hidden"),s.style.pointerEvents="none",e&&e()):(Z.phenomenonIndex++,Pd(Z.phenomenonIndex,e,t,!1))},o.appendChild(u),s.appendChild(o)}function eo(n,e,t){const i=n.querySelector("#feedback-box");i&&(i.className="feedback-box "+(e?"correct":"wrong"),i.innerHTML=t)}function Vx(n){const e=document.createElement("div");e.className="data-table-wrap";let t='<table class="data-table"><thead><tr>';for(const i of n.headers)t+=`<th>${i}</th>`;t+="</tr></thead><tbody>";for(const i of n.rows)t+=`<tr><td><strong>${i.label}</strong></td>`,i.values.forEach((a,s)=>{const r=i.classes[s]?` class="${i.classes[s]}"`:"";t+=`<td${r}>${a}</td>`}),t+="</tr>";return t+="</tbody></table>",n.note&&(t+=`<div class="info-label" style="margin-top:6px">📌 ${n.note}</div>`),e.innerHTML=t,e}function Wx(n){const e=document.createElement("div");e.className="std-table-wrap";let t=`<div class="info-label" style="margin-bottom:6px">📋 ${n.title}</div>`;t+='<table class="std-table"><thead><tr>';for(const i of n.headers)t+=`<th>${i}</th>`;t+="</tr></thead><tbody>";for(const i of n.rows)t+="<tr>"+i.map(a=>`<td>${a}</td>`).join("")+"</tr>";return t+="</tbody></table>",e.innerHTML=t,e}function Xx(){const n=document.createElement("div");n.className="rice-graph-wrap";const e=document.createElement("img");return e.src="rice-graph.png",e.alt="Grafik produktivitas panen padi",e.style.cssText="width:100%;border-radius:8px;border:1px solid rgba(255,255,255,0.1);display:block;",n.appendChild(e),n}function qx(n,e,t){const i=ce("result-overlay");i.classList.remove("hidden");const a=n>=75;ce("result-icon").textContent=a?"🎉":n>=50?"👍":"💡",ce("result-title").textContent=a?"Luar Biasa!":n>=50?"Bagus!":"Terus Belajar!",ce("result-score").textContent=`+${n} poin`,ce("result-total").textContent=`Total: ${Z.totalPoints} poin`;const s=Z.levelAttempts,r=s===1?"🥇 Berhasil di percobaan pertama!":s===2?"🥈 Berhasil di percobaan ke-2.":"🥉 Berhasil di percobaan ke-3.";ce("result-attempts").textContent=r;const o=ce("btn-result-continue");o.textContent=e,o.onclick=()=>{i.classList.add("hidden"),t()}}function bo(){ce("glossary-modal").classList.toggle("hidden")}function $x(){const n=ce("hud");n.innerHTML=`
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
        <button id="btn-instructions-hud"><span class="btn-icon">📋</span><span class="btn-label"> Petunjuk</span></button>
        <button id="btn-glossary"><span class="btn-icon">📖</span><span class="btn-label"> Buku Saku</span></button>
        <button id="btn-pause-menu"><span class="btn-icon">⚙️</span><span class="btn-label"> Menu</span></button>
      </div>
    </div>
  `,n.style.display="none";const e=ce("ui-overlay");e.innerHTML=`
    <!-- PAUSE MENU MODAL -->
    <div id="pause-menu-overlay" class="hidden">
      <div id="pause-menu-card">
        <div id="pause-menu-title">⚙️ Menu Permainan</div>
        <div id="pause-checkpoint-info"></div>
        <button class="btn-pause-action" id="btn-pm-continue">▶ Lanjutkan Bermain</button>
        <button class="btn-pause-action btn-pause-checkpoint" id="btn-pm-resume">↩ Kembali ke Checkpoint</button>
        <button class="btn-pause-action btn-pause-newgame" id="btn-pm-newgame">🔄 Mulai Ulang (New Game)</button>
        <button class="btn-pause-action" id="btn-pm-experiment" style="background:rgba(21,101,192,.25);border-color:rgba(100,160,255,.4);color:#7ec8ff">📋 Upload Hasil Percobaan</button>
        <button class="btn-pause-action" id="btn-pm-change-level" style="background:rgba(180,100,20,.25);border-color:rgba(220,140,60,.4);color:#ffb366">🔀 Ubah Level</button>
      </div>
    </div>

    <!-- PROFILE SCREEN -->
    <div class="screen" id="profile-screen">
      <div class="profile-card">
        <div class="logo">🌿</div>
        <h1>Semi Immersive VR</h1>
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
          <p>Terdapat <strong>5 Level</strong> yang harus diselesaikan secara berurutan. Setiap level memiliki 3 fenomena dengan masing-masing 1 pertanyaan.</p>
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
            <div class="intro-overlay-h">Semi Immersive VR</div>
            <div class="intro-overlay-sub">Simulasi IPAL Kawasan Industri &amp; Sistem Pengelolaan Limbah Vinasse</div>
          </div>
        </div>

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

        <!-- Page 1: Handbook image -->
        <div class="glossary-page" id="glossary-page-1">
          <img src="HandbookVinasse.png" alt="Handbook Vinasse" style="width:100%;border-radius:8px;">
        </div>

        <!-- Page 2: Glossary terms -->
        <div class="glossary-page hidden" id="glossary-page-2">
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

        <!-- Page navigation -->
        <div class="glossary-nav">
          <button class="glossary-nav-btn" id="btn-glossary-prev" disabled>← Kembali</button>
          <span id="glossary-page-indicator">1 / 2</span>
          <button class="glossary-nav-btn" id="btn-glossary-next">Berikutnya →</button>
        </div>
      </div>
    </div>
  `,ce("btn-profile-start").onclick=()=>{const t=ce("input-name").value.trim();if(!t){ce("input-name").style.borderColor="#e74c3c",ce("input-name").focus();return}Z.playerName=t,kd(),xo&&xo(t)},ce("input-name").addEventListener("keydown",t=>{t.key==="Enter"&&ce("btn-profile-start").click()}),setTimeout(()=>{const t=ce("btn-close-glossary");t&&(t.onclick=()=>bo());let i=1;const a=2;function s(){ce("glossary-page-1").classList.toggle("hidden",i!==1),ce("glossary-page-2").classList.toggle("hidden",i!==2),ce("glossary-page-indicator").textContent=`${i} / ${a}`,ce("btn-glossary-prev").disabled=i===1,ce("btn-glossary-next").disabled=i===a;const l=ce("glossary-modal").querySelector(".glossary-card");l&&(l.scrollTop=0)}ce("btn-glossary-next").onclick=()=>{i<a&&(i++,s())},ce("btn-glossary-prev").onclick=()=>{i>1&&(i--,s())};const r=ce("glossary-modal");new MutationObserver(()=>{r.classList.contains("hidden")||(i=1,s())}).observe(r,{attributes:!0,attributeFilter:["class"]})},100)}const Be=n=>document.getElementById(n);function Dd(n){eb();const e=Be("sim-overlay");e&&e.remove();const t=document.createElement("div");t.id="sim-overlay",t.className="sim-overlay",t.innerHTML=Yx(),document.body.appendChild(t),requestAnimationFrame(()=>{jx(t,n)})}function Yx(){return`
    <div class="sim-card">
      <!-- Header with Reset Button -->
      <div class="sim-header">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 12px;">
          <div>
            <span class="sim-badge">🔬 SIMULASI LAB</span>
          </div>
          <button class="sim-btn-reset" id="btn-sim-reset" title="Reset seluruh simulasi">🔄 Reset</button>
        </div>
        <h2 class="sim-title">Pengolahan Limbah Vinasse</h2>
        <p class="sim-subtitle">Ukur TDS, DO & pH — lalu uji efektivitas aerasi</p>
      </div>

      <!-- Persistent Beaker Container (stays visible across transitions) -->
      <div class="sim-persistent-beaker" id="persistent-beaker-zone">
        <div class="beaker-pour-row">
          <div class="beaker-drop-zone" id="beaker-drop-zone">
            <div class="beaker-drops" id="beaker-drops"></div>
            <div class="beaker-wrap">
              <div class="beaker" style="position: relative;">
                <div class="beaker-vinasse" id="beaker-vinasse"></div>
                <div class="beaker-water"   id="beaker-water"></div>
                <div class="beaker-scale">
                  ${[1e3,800,600,400,200,0].map(n=>`<span>${n}</span>`).join("")}
                </div>
                <!-- Bubble container for aerator visualization in Step 3 -->
                <div class="bubble-container" id="bubble-container"></div>
              </div>
            </div>
          </div>
          <div class="pour-readout">
            <div class="vol-display" id="vol-display">
              <div class="vol-display-row">
                <span class="vol-display-icon">🟤</span>
                <span><b><span id="vol-display-num">0</span> mL</b> Vinasse</span>
              </div>
              <div class="vol-display-row secondary">
                <span class="vol-display-icon">💧</span>
                <span><span id="vol-display-water">1000</span> mL Air Suling</span>
              </div>
            </div>
            <div class="beaker-drop-label" id="beaker-drop-label">Jatuhkan di sini</div>
            <div class="vol-legend" style="margin-top:10px">
              <span class="legend-box water-box"></span> Air suling
              <span class="legend-box vinasse-box"></span> Vinasse
            </div>
          </div>
        </div>
      </div>

      <!-- Step 1: Multi-glass drag-to-pour (with mobile input option) -->
      <div class="sim-step" id="sim-step-1">
        <div class="step-title">
          <span class="step-num">1</span>
          Tuangkan Vinasse ke dalam Beker
        </div>
        
        <!-- Methods container with grid layout -->
        <div class="methods-container">
          <!-- Method A: Direct input option -->
          <div class="step1-mobile-section hidden" id="step1-mobile-section">
            <div class="method-label">📱 Metode 1: Masukkan Jumlah Langsung</div>
            <div class="vinasse-input-group">
              <label for="vinasse-input">Jumlah Vinasse (mL):</label>
              <input type="number" id="vinasse-input" min="0" max="1000" value="0" step="100">
              <div class="input-buttons">
                <button class="input-btn" data-add="100">+100</button>
                <button class="input-btn" data-add="200">+200</button>
                <button class="input-btn" data-add="500">+500</button>
              </div>
              <button class="sim-btn" id="btn-confirm-pour" style="margin-top:8px; width:100%;">✓ Konfirmasi</button>
            </div>
          </div>

          <!-- Method B: Drag glasses -->
          <div class="step1-desktop-section" id="step1-desktop-section">
            <div class="method-label">✋ Metode 2: Seret Gelas ke Beker</div>
            <div class="glasses-row-wrap">
              <div class="glasses-row" id="glasses-row">
                ${[0,1,2,3,4].map(n=>`
                  <div class="vinasse-glass" id="vglass-${n}" data-idx="${n}">
                    <div class="vg-liquid" id="vglass-liq-${n}"></div>
                    <div class="vg-label">200 mL</div>
                  </div>
                `).join("")}
              </div>
              <div class="glasses-hint">↙️ Seret ke BEKER untuk menuang</div>
            </div>
          </div>
        </div>
        
        <button class="sim-btn" id="btn-titrate" disabled>📏 Ukur Parameter →</button>
      </div>

      <!-- Step 2: TDS/DO Meter dip (with mobile button option) -->
      <div class="sim-step hidden" id="sim-step-2">
        <div class="step-title">
          <span class="step-num">2</span>
          Ukur Parameter — Celupkan TDS/DO Meter ke Beaker
        </div>
        <div class="meter-layout">
          <!-- Display unit -->
          <div class="meter-display-unit">
            <div class="mdu-head">
              <div class="mdu-brand">TDS · DO · pH · SAL</div>
              <div class="mdu-screen">
                <div class="mr-row"><span class="mr-lbl">DO</span><span class="mr-val" id="mr-do">—</span><span class="mr-unit">ppm</span></div>
                <div class="mr-row"><span class="mr-lbl">TDS</span><span class="mr-val" id="mr-tds">—</span><span class="mr-unit">ppm</span></div>
                <div class="mr-row"><span class="mr-lbl">pH</span><span class="mr-val" id="mr-ph">—</span></div>
                <div class="mr-row"><span class="mr-lbl">SAL</span><span class="mr-val" id="mr-sal">—</span><span class="mr-unit">‰</span></div>
              </div>
            </div>
            <div class="mdu-stick"></div>
          </div>

          <!-- Methods container with grid layout -->
          <div class="methods-container">
            <!-- Method A: Draggable probe option -->
            <div class="meter-drag-section" id="meter-drag-section">
              <div class="method-label">✋ Metode 1: Seret Probe Sensor</div>
              <div class="meter-instruction" id="meter-instruction-drag">⤵️ Seret probe ke beaker untuk mengukur</div>
              <div class="meter-instrument-row-step2">
                <svg class="meter-cable-svg" viewBox="0 0 80 40" preserveAspectRatio="none">
                  <path d="M0,20 C20,6 60,34 80,20" stroke="#3a7a9a" stroke-width="2.5" fill="none" stroke-dasharray="5,4"/>
                </svg>
                <div class="meter-probe-stick" id="meter-probe-stick" title="Seret ke dalam larutan">
                  <div class="mps-handle">⊕</div>
                  <div class="mps-shaft"></div>
                  <div class="mps-tip"></div>
                </div>
              </div>
            </div>

            <!-- Method B: Button option -->
            <div class="meter-button-section hidden" id="meter-button-section">
              <div class="method-label">📱 Metode 2: Tekan Tombol Pengukur</div>
              <div class="meter-instruction" id="meter-instruction-button">Ketuk tombol untuk mengukur semua parameter</div>
              <div class="meter-buttons-group">
                <button class="meter-measure-btn" id="btn-measure-all">📊 Ukur Semua</button>
              </div>
            </div>
          </div>

          <!-- Results appear below after measurement -->
          <div class="meter-result-grid hidden" id="meter-result-grid"></div>
          <div class="meter-note hidden" id="meter-note"></div>
          <button class="sim-btn hidden" id="btn-go-aerate">💨 Lanjut ke Simulasi Aerasi →</button>
        </div>
      </div>

      <!-- Step 3: Aeration -->
      <div class="sim-step hidden" id="sim-step-3">
        <div class="step-title">
          <span class="step-num">3</span>
          Simulasi Aerasi Biodegradasi pada Beaker
        </div>

        <div class="aerator-controls-layout">
          <!-- Aerator controls (positioned above persistent beaker) -->
          <div class="aerator-controls">
            <label class="toggle-label">
              <span>Nyalakan Aerator</span>
              <label class="toggle-switch">
                <input type="checkbox" id="aerator-toggle">
                <span class="toggle-slider"></span>
              </label>
              <span id="aerator-status" class="status-off">MATI</span>
            </label>

            <div class="duration-wrap" id="duration-wrap">
              <label>Pilih Durasi Aerasi</label>
              <div class="duration-buttons">
                ${[6,12,24,48,72].map(n=>`
                  <button class="dur-btn" data-hours="${n}">${n} jam</button>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Aerator visual indicator (displayed above persistent beaker) -->
          <div class="aerator-visual-indicator" id="aerator-visual">
            <div class="aerator-machine" id="aerator-machine">
              <div class="motor-body"></div>
              <div class="motor-shaft"></div>
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
  `}function jx(n,e){let t=0,i=null,a=null,s=!1,r=null;const o=Be("step1-mobile-section"),l=Be("step1-desktop-section"),d=Be("meter-drag-section"),c=Be("meter-button-section");o&&o.classList.add("visible"),l&&l.classList.add("visible"),d&&d.classList.add("visible"),c&&c.classList.add("visible");{let ne=function(){document.getElementById("vol-display-num").textContent=t,document.getElementById("vol-display-water").textContent=1e3-t},$=function(D){const He=document.getElementById(`vglass-liq-${D}`),be=document.getElementById(`vglass-${D}`);!He||!be||(He.style.height=I[D]/200*100+"%",I[D]<=0&&(be.classList.add("empty"),be.classList.remove("dragging")))},j=function(){const D=document.getElementById("beaker-drops");if(!D)return;const He=document.createElement("div");He.className="sim-drop",He.style.setProperty("--spread",(Math.random()-.5)*10+"px"),He.style.setProperty("--dur",.28+Math.random()*.24+"s"),D.appendChild(He),setTimeout(()=>He.remove(),600)},J=function(){P||Y===null||(P=setInterval(()=>{if(Y===null||I[Y]<=0||t>=1e3){V();return}const D=Math.min(25,I[Y],1e3-t);I[Y]-=D,t=Math.min(1e3,t+D),to(t),ne(),Be("btn-titrate").disabled=!1;const He=document.getElementById("vg-ghost-liquid");He&&(He.style.height=I[Y]/200*100+"%"),$(Y)},80),F=setInterval(j,55))},V=function(){clearInterval(P),clearInterval(F),P=F=null},K=function(D,He){B.style.left=D-18+"px",B.style.top=He-64+"px";const be=document.getElementById("beaker-drop-zone");if(!be)return;const Re=be.getBoundingClientRect(),Se=D>=Re.left&&D<=Re.right&&He>=Re.top&&He<=Re.bottom;Se!==X&&(X=Se,be.classList.toggle("active",Se),B.classList.toggle("tilting",Se),Se?J():V())},z=function(D,He,be){var Se;if(I[D]<=0)return;Y=D,X=!1,(Se=document.getElementById(`vglass-${D}`))==null||Se.classList.add("dragging"),B.classList.remove("hidden");const Re=document.getElementById("vg-ghost-liquid");Re&&(Re.style.height=I[D]/200*100+"%"),K(He,be)},Q=function(){var He,be;if(Y===null)return;V(),$(Y),(He=document.getElementById(`vglass-${Y}`))==null||He.classList.remove("dragging"),Y=null,X=!1,B.classList.add("hidden"),B.classList.remove("tilting"),(be=document.getElementById("beaker-drop-zone"))==null||be.classList.remove("active");const D=document.getElementById("beaker-drop-label");D&&(D.textContent=t>0?`✓ ${t} mL dituang — seret gelas lagi untuk menambah`:"Jatuhkan di sini")},ue=function(D){Y!==null&&K(D.clientX,D.clientY)},ke=function(){Q()},Te=function(D){Y!==null&&(K(D.touches[0].clientX,D.touches[0].clientY),D.preventDefault())},Ne=function(){Q()};var p=ne,f=$,h=j,g=J,x=V,m=K,u=z,v=Q,b=ue,_=ke,k=Te,w=Ne;const I=Array(5).fill(200);t=0,to(0);const B=document.createElement("div");B.id="vg-ghost",B.className="vg-ghost hidden",B.innerHTML='<div class="vg-ghost-liquid" id="vg-ghost-liquid"></div>',document.body.appendChild(B);let Y=null,P=null,F=null,X=!1;for(let D=0;D<5;D++){const He=document.getElementById(`vglass-${D}`);He&&(He.addEventListener("mousedown",be=>{z(D,be.clientX,be.clientY),be.preventDefault()}),He.addEventListener("touchstart",be=>{z(D,be.touches[0].clientX,be.touches[0].clientY),be.preventDefault()},{passive:!1}))}window.addEventListener("mousemove",ue),window.addEventListener("mouseup",ke),window.addEventListener("touchmove",Te,{passive:!1}),window.addEventListener("touchend",Ne),r=()=>{Q(),window.removeEventListener("mousemove",ue),window.removeEventListener("mouseup",ke),window.removeEventListener("touchmove",Te),window.removeEventListener("touchend",Ne);const D=document.getElementById("vg-ghost");D&&D.remove()};const We=Be("vinasse-input"),ze=Be("btn-confirm-pour");document.querySelectorAll(".input-btn").forEach(D=>{D.addEventListener("click",()=>{const He=parseInt(D.dataset.add),be=Math.max(0,parseInt(We.value)||0),Re=Math.min(1e3,be+He);We.value=Re})}),ze.addEventListener("click",()=>{const D=Math.max(0,Math.min(1e3,parseInt(We.value)||0));t=D,to(D),ne(),I.fill(0);for(let He=0;He<5;He++)$(He);Be("btn-titrate").disabled=!1})}Be("btn-titrate").onclick=()=>{r&&(r(),r=null),i=_x(t),no("sim-step-1","sim-step-2"),Kx(t)},Be("btn-go-aerate").onclick=()=>{no("sim-step-2","sim-step-3"),Jx(i)},Be("btn-sim-reset").onclick=()=>{const E=document.getElementById("vg-ghost");E&&E.remove(),r&&r(),Be("sim-overlay").remove(),Dd(e)},Be("aerator-toggle").onchange=function(){s=this.checked;const E=Be("aerator-status");E.textContent=s?"NYALA":"MATI",E.className=s?"status-on":"status-off",Be("aerator-machine").classList.toggle("running",s),Zx(s),s?Be("duration-wrap").classList.remove("locked"):(Be("duration-wrap").classList.add("locked"),a=null,n.querySelectorAll(".dur-btn").forEach(N=>N.classList.remove("active")),Be("btn-calc-result").classList.add("hidden"))},n.querySelectorAll(".dur-btn").forEach(E=>{E.onclick=()=>{s&&(n.querySelectorAll(".dur-btn").forEach(N=>N.classList.remove("active")),E.classList.add("active"),a=parseInt(E.dataset.hours),Be("btn-calc-result").classList.remove("hidden"),Be("btn-back-aerate").classList.remove("hidden"))}}),Be("btn-calc-result").onclick=()=>{const E=yx(i,a);no("sim-step-3","sim-step-4"),Qx(i,E,t,a),Be("btn-sim-finish").classList.remove("hidden"),Be("btn-sim-finish").onclick=()=>{Be("sim-overlay").remove(),e&&e()}}}const Ls={200:{doVal:1.8,tds:22,ph:2.2,sal:13},400:{doVal:2.3,tds:26,ph:2.8,sal:13.8},600:{doVal:3.2,tds:27,ph:3,sal:14},800:{doVal:4,tds:30.1,ph:3.7,sal:15}};function Id(n){const e=[200,400,600,800];if(n<=200)return{...Ls[200]};if(n>=800)return{...Ls[800]};let t=200,i=800;for(let o=0;o<e.length-1;o++)if(n>e[o]&&n<=e[o+1]){t=e[o],i=e[o+1];break}const a=(n-t)/(i-t),s=Ls[t],r=Ls[i];return{doVal:parseFloat((s.doVal+(r.doVal-s.doVal)*a).toFixed(1)),tds:parseFloat((s.tds+(r.tds-s.tds)*a).toFixed(1)),ph:parseFloat((s.ph+(r.ph-s.ph)*a).toFixed(1)),sal:parseFloat((s.sal+(r.sal-s.sal)*a).toFixed(1))}}function Kx(n,e){const t=n/1e3*100,i=Be("meter-bk-vinasse");i&&(i.style.height=t+"%");const a=Be("meter-vol-label");a&&(a.textContent=n+" mL");const s=Be("meter-bk-ripple"),r=Id(n),o=Be("meter-probe-stick"),l=Be("beaker-drop-zone");let d=!1,c=null;function p(){c&&(c.remove(),c=null),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",x),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",x)}function f(b){return b.changedTouches?{x:b.changedTouches[0].clientX,y:b.changedTouches[0].clientY}:b.touches?{x:b.touches[0].clientX,y:b.touches[0].clientY}:{x:b.clientX,y:b.clientY}}function h(b){if(!c)return;const{x:_,y:k}=f(b);c.style.left=_-15+"px",c.style.top=k-12+"px";const w=l.getBoundingClientRect();l.classList.toggle("drop-hover",_>=w.left&&_<=w.right&&k>=w.top&&k<=w.bottom)}function g(b){b.preventDefault(),h(b)}function x(b){if(!c)return;const{x:_,y:k}=f(b),w=l.getBoundingClientRect(),E=_>=w.left&&_<=w.right&&k>=w.top&&k<=w.bottom;p(),l.classList.remove("drop-hover"),E&&!d?(d=!0,o.classList.add("probe-dipped"),u()):o.style.opacity="1"}function m(b){if(d)return;b.preventDefault(),o.style.opacity="0.35",c=document.createElement("div"),c.className="meter-probe-ghost",c.innerHTML='<div class="mps-handle">⊕</div><div class="mps-shaft"></div><div class="mps-tip"></div>';const{x:_,y:k}=f(b);c.style.left=_-15+"px",c.style.top=k-12+"px",document.body.appendChild(c),window.addEventListener("mousemove",h),window.addEventListener("mouseup",x),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",x)}function u(){Be("meter-instruction-button").textContent="Sensor mendeteksi parameter larutan…",setTimeout(()=>{s&&(s.classList.remove("ripple-active"),s.offsetWidth,s.classList.add("ripple-active"))},300),setTimeout(()=>{Cs("mr-do",r.doVal,1200,1),Cs("mr-tds",r.tds,1200,1),Cs("mr-ph",r.ph,1200,2),Cs("mr-sal",r.sal,1200,1)},500),setTimeout(()=>{Be("meter-instruction-button").textContent="✅ Pengukuran selesai — catat hasil parameter!";const b=Be("meter-result-grid");b.innerHTML=[{icon:"💧",label:"DO",value:r.doVal.toFixed(1)+" ppm",sub:"Dissolved Oxygen",status:r.doVal<2?"danger":r.doVal<4?"warn":"good"},{icon:"📊",label:"TDS",value:r.tds.toFixed(1)+" ppm",sub:"Total Dissolved Solids",status:r.tds>30?"danger":r.tds>25?"warn":"good"},{icon:"⚗️",label:"pH",value:r.ph.toFixed(1),sub:r.ph<4?"Sangat Asam ⚠️":r.ph<6?"Asam":"Mendekati Netral",status:r.ph<4?"danger":r.ph<6?"warn":"good"},{icon:"🧂",label:"Salinometer",value:r.sal.toFixed(1)+" ‰",sub:"Kadar salinitas",status:r.sal>15?"danger":r.sal>13?"warn":"good"}].map(k=>`
        <div class="param-card ${k.status}">
          <span class="param-icon">${k.icon}</span>
          <span class="param-label">${k.label}</span>
          <span class="param-value">${k.value}</span>
          <span class="param-sub">${k.sub}</span>
        </div>
      `).join(""),b.classList.remove("hidden");const _=Be("meter-note");_.innerHTML=`⚗️ <strong>Interpretasi:</strong> Dengan ${n} mL vinasse,
        DO = <b>${r.doVal.toFixed(1)} ppm</b>, TDS = <b>${r.tds.toFixed(1)} ppm</b>,
        pH = <b>${r.ph.toFixed(1)}</b> (${r.ph<4?"sangat asam":"asam"}),
        Salinometer = <b>${r.sal.toFixed(1)} ‰</b>.
        <div class="meter-source">📄 Sumber: Irmanto, et al. (2013)</div>`,_.classList.remove("hidden"),Be("btn-go-aerate").classList.remove("hidden"),Be("btn-back-meter").classList.remove("hidden"),setTimeout(()=>Be("btn-go-aerate").scrollIntoView({behavior:"smooth",block:"nearest"}),100)},1800)}o.addEventListener("mousedown",m),o.addEventListener("touchstart",m,{passive:!1});const v=Be("btn-measure-all");v&&v.addEventListener("click",()=>{d||(d=!0,o.classList.add("probe-dipped"),u(),v.disabled=!0)})}function Cs(n,e,t,i){const a=Be(n);if(!a)return;const s=performance.now(),r=l=>1-(1-l)**2;function o(l){const d=Math.min(1,(l-s)/t);a.textContent=(e*r(d)).toFixed(i),d<1&&requestAnimationFrame(o)}requestAnimationFrame(o)}function to(n){const t=n/1e3*100,i=100-t,a=Be("beaker-vinasse"),s=Be("beaker-water");a.style.height=t+"%",a.style.bottom="0%",s.style.height=i+"%",s.style.bottom=t+"%"}function Jx(n){const e=Be("beaker-vinasse");if(!e)return;const t=Math.min(1,n.cod/45e3),i=Math.round(60+t*60),a=Math.round(20+t*5),s=0;e.style.background=`linear-gradient(180deg, rgba(${i},${a},${s},0.88) 0%, rgba(${Math.max(30,i-30)},${Math.max(10,a-10)},0,0.96) 100%)`}function Zx(n){const e=Be("bubble-container");if(e&&(e.innerHTML="",!!n))for(let t=0;t<14;t++){const i=document.createElement("div");i.className="bubble",i.style.left=5+Math.random()*85+"%",i.style.animationDuration=1.2+Math.random()*2+"s",i.style.animationDelay=Math.random()*2+"s",i.style.width=i.style.height=4+Math.random()*8+"px",e.appendChild(i)}}function Qx(n,e,t,i){const a=Be("results-grid"),s=Be("compliance-banner"),r=Be("sim-conclusion"),o=Id(t);a.innerHTML=`
    <div class="param-grid" style="margin-bottom:0">
      <div class="param-card neutral">
        <span class="param-icon">🧪</span>
        <span class="param-label">Vinasse Dituang</span>
        <span class="param-value">${t} mL</span>
        <span class="param-sub">dari 1 000 mL total larutan</span>
      </div>
      <div class="param-card ${o.doVal<2?"danger":o.doVal<4?"warn":"good"}">
        <span class="param-icon">📏</span>
        <span class="param-label">Hasil TDS/DO Meter</span>
        <span class="param-value">DO ${o.doVal.toFixed(1)} ppm</span>
        <span class="param-sub">TDS ${o.tds.toFixed(1)} ppm · pH ${o.ph.toFixed(1)} · SAL ${o.sal.toFixed(1)} ‰</span>
      </div>
      <div class="param-card neutral">
        <span class="param-icon">⏱️</span>
        <span class="param-label">Durasi Aerasi</span>
        <span class="param-value">${i} Jam</span>
        <span class="param-sub">simulasi aerasi aerobik</span>
      </div>
    </div>
  `,s.className="compliance-banner "+(e.compliant?"compliant":"not-compliant"),s.innerHTML=e.compliant?"✅ Effluent <strong>MEMENUHI</strong> baku mutu Permen LH No.5/2014 setelah aerasi!":"⛔ Effluent <strong>BELUM MEMENUHI</strong> baku mutu — perlu pengolahan lanjut atau durasi aerasi lebih panjang.",r.innerHTML=`
    <strong>📝 Kesimpulan:</strong> Dengan volume vinasse <b>${t} mL</b> dan aerasi selama
    <b>${i} jam</b>, pH meningkat dari <b>${n.ph}</b> menjadi <b>${e.ph}</b>
    karena asam organik teroksidasi oleh mikroba aerob.
    ${e.compliant?"Pengolahan ini efektif dan limbah sudah layak dibuang ke badan air penerima.":"Disarankan menambah durasi aerasi atau menggunakan teknologi lanjutan (koagulasi/MBBR) agar sesuai regulasi."}
  `}function no(n,e){const t=Be(n),i=Be(e);if(n==="sim-step-1"&&e==="sim-step-2"){const a=Be("glasses-row-wrap"),s=Be("btn-titrate");a&&(a.style.opacity="0",a.style.transform="translateY(-12px)",a.style.transition="all 0.3s ease",a.style.pointerEvents="none"),s&&(s.style.opacity="0",s.style.transform="translateY(8px)",s.style.transition="all 0.3s ease",s.style.pointerEvents="none"),setTimeout(()=>{t.classList.add("hidden"),i.classList.remove("hidden"),i.classList.add("step-enter"),setTimeout(()=>i.classList.remove("step-enter"),400)},300)}else t.classList.add("step-exit"),setTimeout(()=>{t.classList.add("hidden"),t.classList.remove("step-exit"),i.classList.remove("hidden"),i.classList.add("step-enter"),setTimeout(()=>i.classList.remove("step-enter"),400)},300)}function eb(){if(document.getElementById("sim-styles"))return;const n=`
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
      max-height: 85vh;
      overflow-y: auto;
    }
    .sim-header {
      text-align: center;
      margin-bottom: 28px;
      position: sticky;
      top: 0;
      background: rgba(12, 22, 40, 0.98);
      z-index: 10;
      padding-bottom: 12px;
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(80, 120, 160, 0.2);
    }
    .sim-badge {
      background: rgba(0, 200, 255, 0.15);
      border: 1px solid #00c8ff;
      color: #00c8ff; padding: 4px 14px;
      border-radius: 20px; font-size: 12px; letter-spacing: 1px;
    }
    .sim-title { margin: 10px 0 4px; font-size: 22px; color: #a0d8ff; }
    .sim-subtitle { color: #7090a0; font-size: 13px; }

    /* ── Persistent Beaker Zone (stays visible across transitions) ────────── */
    .sim-persistent-beaker {
      margin: 20px 0;
      padding: 14px;
      background: rgba(10, 20, 30, 0.5);
      border: 1px solid rgba(80, 120, 160, 0.2);
      border-radius: 10px;
      transition: all 0.3s ease;
    }
    .sim-persistent-beaker.hidden { display: none; }

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

    /* ── Beaker continuity transitions ─────────────────── */
    .glasses-row-wrap { transition: opacity 0.3s ease, transform 0.3s ease; }
    .glasses-row-wrap.fade-out { opacity: 0; transform: translateY(-8px); }
    .glasses-hint { transition: opacity 0.3s ease; }
    .glasses-hint.fade-out { opacity: 0; }

    /* ── Volume buttons (kept for compat) ────────────── */
    .volume-selector { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 16px; }
    .vol-btn {
      padding: 10px 18px; border-radius: 8px; border: 2px solid #1a4a6a;
      background: rgba(10, 30, 55, 0.8); color: #7ab0d8; cursor: pointer;
      font-size: 14px; font-weight: 600; transition: all 0.2s;
    }
    .vol-btn:hover { border-color: #00aaff; color: #00aaff; }
    .vol-btn.active { border-color: #00d4ff; color: #00d4ff; background: rgba(0,180,255,0.1); }

    /* ── Multi-glass drag-to-pour mechanic ─────────────── */
    .glasses-row-wrap { display: flex; flex-direction: column; align-items: center; gap: 8px; margin-bottom: 16px; }
    .glasses-row { display: flex; gap: 8px; align-items: flex-end; }
    .glasses-hint { font-size: 11px; color: #4a7a9a; font-style: italic; text-align: center; }
    .vinasse-glass {
      position: relative; width: 38px; height: 56px;
      border: 2px solid #7a3818; border-top: none; border-radius: 0 0 6px 6px;
      background: rgba(18, 6, 0, 0.82); overflow: hidden;
      cursor: grab; transition: box-shadow 0.2s, border-color 0.2s, opacity 0.3s;
      user-select: none;
    }
    .vinasse-glass:not(.empty):hover { box-shadow: 0 0 8px rgba(180,80,20,0.5); border-color: #bb6020; }
    .vinasse-glass.empty { opacity: 0.28; cursor: not-allowed; border-color: #3a2010; }
    .vinasse-glass.dragging { opacity: 0.45; cursor: grabbing; }
    .vg-liquid {
      position: absolute; bottom: 0; left: 0; right: 0; height: 85%;
      background: linear-gradient(180deg, rgba(195,78,5,0.88) 0%, rgba(120,36,0,0.96) 100%);
      transition: height 0.18s ease;
    }
    .vg-label {
      position: absolute; bottom: 2px; left: 0; right: 0;
      font-size: 7px; text-align: center; color: rgba(255,205,145,0.85);
      font-weight: 700; pointer-events: none; z-index: 2;
    }
    .vg-ghost {
      position: fixed; z-index: 9999; pointer-events: none;
      width: 38px; height: 56px;
      border: 2px solid #ff7020; border-top: none; border-radius: 0 0 8px 8px;
      background: rgba(18, 6, 0, 0.92); overflow: hidden;
      transform-origin: bottom center; transition: transform 0.18s;
      box-shadow: 0 0 16px rgba(220,100,20,0.7);
    }
    .vg-ghost.tilting { transform: rotate(-42deg); }
    .vg-ghost-liquid {
      position: absolute; bottom: 0; left: 0; right: 0;
      background: linear-gradient(180deg, rgba(200,85,5,0.9) 0%, rgba(140,40,0,0.97) 100%);
      transition: height 0.18s ease;
    }
    .beaker-pour-row { display: flex; align-items: flex-end; gap: 20px; flex-wrap: wrap; margin-bottom: 16px; }
    .beaker-drop-zone {
      position: relative; padding: 10px 12px;
      border: 2px dashed rgba(80,120,160,0.3); border-radius: 12px;
      transition: border-color 0.2s, background 0.2s;
    }
    .beaker-drop-zone.active {
      border-color: rgba(0,210,120,0.75); background: rgba(0,80,55,0.14);
    }
    .beaker-drops {
      position: absolute; top: 8px; left: 50%; transform: translateX(-50%);
      width: 30px; height: 40px; pointer-events: none; overflow: visible;
    }
    .beaker-drop-label { font-size: 10px; color: #4a6a8a; font-style: italic; text-align: center; margin-top: 4px; }
    .pour-readout { display: flex; flex-direction: column; gap: 8px; }
    .vol-display {
      background: rgba(10,25,45,0.9); border-radius: 10px; padding: 12px 16px;
      border: 1px solid #1a4a6a; min-width: 150px;
    }
    .vol-display-row { display: flex; align-items: center; gap: 8px; color: #a0c8e0; font-size: 14px; font-weight: 600; }
    .vol-display-row.secondary { margin-top: 6px; color: #607890; font-size: 13px; font-weight: 400; }
    .vol-display-icon { font-size: 18px; }
    .vol-display-tip { font-size: 11px; color: #4a7090; margin-top: 8px; font-style: italic; }
    .sim-btn-sm {
      padding: 6px 14px; border-radius: 8px;
      background: transparent; color: #607890;
      border: 1.5px solid #2a4a6a; font-size: 12px;
      cursor: pointer; transition: all 0.2s;
    }
    .sim-btn-sm:hover { border-color: #4a7a9a; color: #aac8e0; }
    .sim-drop {
      position: absolute; width: 5px; height: 9px;
      border-radius: 50% 50% 45% 45%; background: rgba(160, 65, 0, 0.92);
      left: calc(50% + var(--spread, 0px)); transform: translateX(-50%);
      animation: simDropFall var(--dur, 0.45s) ease-in forwards;
    }
    @keyframes simDropFall {
      from { transform: translateX(-50%) translateY(0);    opacity: 1; }
      to   { transform: translateX(-50%) translateY(80px); opacity: 0; }
    }

    /* ── Beaker visualisation ─────────────────────────── */
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

    /* ── Reset button ────────────────────────────────── */
    .sim-btn-reset {
      padding: 7px 16px; border-radius: 8px;
      background: rgba(100, 60, 60, 0.6);
      color: #d0a0a0; font-size: 13px; font-weight: 600;
      border: 1.5px solid rgba(200, 100, 100, 0.4);
      cursor: pointer; transition: all 0.2s;
    }
    .sim-btn-reset:hover {
      background: rgba(140, 80, 80, 0.8);
      border-color: rgba(220, 120, 120, 0.7);
      color: #ff9999;
    }

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

    /* ── Aerator panel (legacy - keeping for compat) ────────── */
    .aerator-panel { display: flex; gap: 28px; align-items: flex-start; flex-wrap: wrap; }
    
    /* ── Aerator controls layout (new - with persistent beaker) ──*/
    .aerator-controls-layout { display: flex; flex-direction: column; gap: 16px; align-items: center; }
    .aerator-visual-indicator { margin: 12px 0; }

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

    /* ── TDS/DO Meter (two-stick design) ────────────── */
    .meter-layout { display: flex; flex-direction: column; gap: 16px; margin-bottom: 16px; }
    .meter-instrument-row { display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
    .meter-instrument-row-step2 { display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; }
    /* --- Display unit (left stick) --- */
    .meter-display-unit { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
    .mdu-head {
      width: 108px; background: linear-gradient(180deg,#0a1e2e,#102838);
      border: 2px solid #2a6a7a; border-radius: 7px 7px 4px 4px;
      padding: 8px; display: flex; flex-direction: column; align-items: center; gap: 5px;
    }
    .mdu-brand { font-size: 8px; color: #2a9a7a; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }
    .mdu-screen {
      width: 100%; background: #040e06; border: 1px solid #1a4a2a;
      border-radius: 4px; padding: 5px 7px; display: flex; flex-direction: column; gap: 3px;
    }
    .mdu-stick { width: 14px; height: 68px; background: linear-gradient(180deg,#2a5a7a,#1a3a5a); border: 1px solid #3a7a9a; border-top: none; border-radius: 0 0 5px 5px; }
    .mr-row  { display: flex; align-items: baseline; gap: 3px; }
    .mr-lbl  { color: #2a8a5a; width: 26px; font-size: 9px; font-weight: 800; letter-spacing: 0.5px; flex-shrink: 0; }
    .mr-val  { color: #00ff8a; font-size: 16px; font-weight: 900; font-family: monospace; min-width: 36px; text-align: right; }
    .mr-unit { color: #2a7a5a; font-size: 9px; }
    /* --- Decorative cable --- */
    .meter-cable-svg { width: 80px; height: 40px; flex-shrink: 0; }
    /* --- Probe stick (no beaker, just probe) --- */
    .meter-probe-stick {
      display: flex; flex-direction: column; align-items: center;
      cursor: grab; user-select: none; transition: opacity 0.2s;
    }
    .meter-probe-stick:active { cursor: grabbing; }
    .meter-probe-stick.probe-dipped { opacity: 0.45; cursor: not-allowed; }
    .mps-handle {
      width: 30px; height: 22px;
      background: linear-gradient(180deg,#3a6a8a,#2a5a7a);
      border: 1.5px solid #4a8a9a; border-radius: 4px 4px 2px 2px;
      display: flex; align-items: center; justify-content: center; font-size: 12px; color: #88ccdd;
    }
    .mps-shaft { width: 6px; height: 50px; background: linear-gradient(180deg,#4a8aaa,#2a6a8a); border-left: 1px solid #5a9aaa; border-right: 1px solid #2a6a7a; }
    .mps-tip { width: 14px; height: 14px; background: radial-gradient(circle,#40ffaa,#00cc80); border-radius: 50%; box-shadow: 0 0 8px rgba(0,220,130,0.8); }
    /* Ghost (follows cursor while dragging) */
    .meter-probe-ghost { position: fixed; pointer-events: none; z-index: 9999; display: flex; flex-direction: column; align-items: center; }
    /* Beaker / drop zone */
    .meter-beaker-wrap { display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .meter-beaker {
      position: relative; width: 86px; height: 110px;
      border: 2.5px solid #4a8a9a; border-top: none; border-radius: 0 0 10px 10px;
      overflow: hidden; background: rgba(8,22,35,0.5); transition: border-color 0.2s;
    }
    .meter-beaker.drop-hover { border-color: #00ff8a; box-shadow: 0 0 10px rgba(0,255,138,0.4); }
    .meter-bk-vinasse { position: absolute; bottom: 0; left: 0; right: 0; height: 0%; background: rgba(100,38,0,0.88); transition: height 0.6s ease; }
    .meter-bk-scale {
      position: absolute; right: 3px; top: 0; bottom: 0;
      display: flex; flex-direction: column; justify-content: space-between;
      font-size: 7px; color: #88aaaa; pointer-events: none; padding: 2px 0;
    }
    .meter-bk-ripple {
      position: absolute; left: 50%; transform: translateX(-50%);
      width: 16px; height: 8px; border: 1.5px solid rgba(255,255,255,0.55); border-radius: 50%;
      opacity: 0; pointer-events: none;
    }
    @keyframes rippleMeter {
      0%   { opacity: 0.9; transform: translateX(-50%) scale(1); }
      100% { opacity: 0;   transform: translateX(-50%) scale(5); }
    }
    .meter-bk-ripple.ripple-active { animation: rippleMeter 0.55s ease-out forwards; }
    .meter-bk-label { font-size: 11px; color: #4a7a9a; text-align: center; }
    .meter-instruction {
      background: rgba(10,25,45,0.7); border-left: 3px solid #1a6a8a;
      padding: 9px 12px; border-radius: 5px; font-size: 13px; color: #80a8c0; line-height: 1.5;
    }
    .meter-result-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px,1fr)); gap: 10px; }
    .meter-result-grid.hidden { display: none; }
    .meter-note {
      background: rgba(10,30,50,0.8); border-left: 4px solid #1a6a8a;
      padding: 10px 14px; border-radius: 6px; font-size: 13px; color: #a0c8d8; line-height: 1.6;
    }
    .meter-note.hidden { display: none; }
    .meter-source { margin-top: 7px; font-size: 11px; color: #4a7090; font-style: italic; }
    .sim-btn-back { display: inline-block; margin-top: 14px; margin-left: 8px; padding: 11px 20px; border-radius: 10px; background: rgba(100,100,100,0.3); color: #aaa; font-size: 14px; font-weight: 600; border: 1px solid rgba(100,100,100,0.5); cursor: pointer; transition: all 0.2s; }
    .sim-btn-back:hover { background: rgba(100,100,100,0.5); color: #ddd; }
    .sim-btn-back.hidden { display: none; }
    .sim-btn-back { display: inline-block; margin-top: 14px; padding: 11px 20px; border-radius: 10px; background: rgba(100,100,100,0.4); color: #ccc; font-size: 14px; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .sim-btn-back:hover { background: rgba(120,120,120,0.6); color: #fff; }
    .sim-btn-back.hidden { display: none; }
    .titration-layout {
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

    .step1-mobile-section, .step1-desktop-section,
    .meter-drag-section, .meter-button-section {
      display: none;
      background: rgba(10, 20, 35, 0.8);
      border: 1px solid rgba(80, 120, 160, 0.3);
      border-radius: 12px;
      padding: 14px;
      transition: all 0.2s;
    }

    .step1-mobile-section.visible, .step1-desktop-section.visible,
    .meter-drag-section.visible, .meter-button-section.visible {
      display: block;
    }

    /* ── Responsive: Mobile-friendly stacking ────────────────────── */
    @media (max-width: 600px) {
      .step1-mobile-section { margin-bottom: 16px; }
      .step1-desktop-section { margin-bottom: 16px; }
      .vinasse-input-group { padding: 12px; }
      .input-buttons { flex-wrap: wrap; }
      .input-btn { font-size: 11px; padding: 6px 8px; }
      .meter-measure-btn { width: 100%; }
      .glasses-row { gap: 6px; }
      .vinasse-glass { width: 35px; height: 50px; }
    }

    /* keep titration CSS class names but hide unused elements gracefully */
    .titration-layout, .tit-apparatus, .tit-panel,
    .tit-burette, .tit-flask, .tit-valve-section { display: none; }
  `,e=document.createElement("style");e.id="sim-styles",e.textContent=n,document.head.appendChild(e)}const Rs={context:`
    Limbah vinasse dikenal memiliki warna hitam pekat karena kandungan pigmen melanoidin yang sulit terurai dan senyawa fenolik yang bersifat antimikroba.<br><br>
    Seorang siswa mencoba membuat POC (Pupuk Organik Cair) dari vinasse dengan memasukkan biostarter yang berisi <em>Staphylococcus aureus</em> dan <em>Streptococcus sp.</em>, dengan alasan bahwa kedua bakteri ini dikenal dapat menguraikan jaringan pada infeksi, sehingga dianggap juga mampu menguraikan bahan organik limbah dengan cepat.<br><br>
    Setelah 21 hari, kadar pencemaran (COD) dalam vinasse tidak turun secara signifikan dan warna cairan tetap hitam pekat, menandakan proses penguraian gagal total.
  `,question:"Berdasarkan karakteristik limbah dan fisiologi mikroba, berikan evaluasi kesalahan yang dilakukan siswa tersebut dalam memilih mikroorganisme adalah…",options:[{label:"A",text:"Mikroorganisme yang dipilih adalah bakteri patogen yang membutuhkan inang hidup, sehingga mereka mati karena tidak terdapat jaringan hidup di dalam limbah vinasse.",correct:!1},{label:"B",text:"Siswa tidak menggunakan mikroorganisme spesifik yang memiliki resistensi terhadap senyawa fenolik dan enzim khusus untuk memutus ikatan pigmen melanoidin.",correct:!0},{label:"C",text:"Kedua bakteri tersebut adalah bakteri anaerob obligat yang langsung mati saat terkena oksigen di permukaan limbah cair.",correct:!1}],explanation:"✅ <strong>Benar!</strong> Vinasse mengandung Melanoidin dan Fenol. Senyawa fenolik bersifat bakterisidal bagi mikroba biasa yang tidak memiliki mekanisme pertahanan diri. Pengolahan vinasse membutuhkan mikroba yang mampu bertahan hidup di lingkungan yang mengandung racun fenol dengan kadar COD, BOD, pH yang tinggi."},Fa=[{id:"azolla",name:"Azolla microphylla",image:"Azolla-microphylla.png",price:50,pigment:"Klorofil a+b (hijau)",description:`Paku air (fern) akuatik yang bersimbiosis dengan sianobakteri
      <em>Anabaena azollae</em>. Melalui fotosintesis menghasilkan O₂ ke limbah.
      Akarnya mengeluarkan <em>eksudat rizosfer</em> yang mengandung enzim pengurai
      bahan organik. Efektif menurunkan BOD dan COD — potensi penurunan COD hingga
      <b>96%</b> melalui fitoremediasi.`,citation:"Thepsilvisut et al., 2024; Rizky et al., 2017",outcome:"reward_high",rewardText:`🏆 <b>Pilihan Terbaik!</b> <em>Azolla</em> adalah agen fitoremediasi yang sangat
      efektif untuk vinasse. Akar dan eksudat rizosfernya mampu menyerap polutan organik,
      nutrisi, dan menurunkan COD hingga <b>96%</b>. Nilai poin bonus diberikan!`},{id:"nannochloropsis",name:"Nannochloropsis",image:"Nannochlopsis.png",price:30,pigment:"Klorofil a + karotenoid (hijau kekuningan)",description:`Mikroalga laut berukuran sangat kecil (~2–5 µm) dengan dinding sel
      yang sangat kuat. Kaya akan pigmen karotenoid. Hidup pada lingkungan dengan
      <b>salinitas tinggi</b>. Umumnya spesies laut; tidak toleran terhadap air tawar.`,citation:"Puente-Padilla et al., 2025",outcome:"punishment",punishmentText:`⛔ <b>Pilihan Salah!</b> <em>Nannochloropsis</em> adalah spesies laut yang
      membutuhkan salinitas tinggi. Vinasse adalah limbah industri gula/etanol berbasis
      air tawar — lingkungan ini tidak sesuai dan alga akan mati sebelum bekerja.
      Kamu kehilangan 1 nyawa!`},{id:"spirulina",name:"Spirulina platensis",image:"Spirulina-plantesis.png",price:40,pigment:"Fikosianin (biru), klorofil a (hijau)",description:`Sianobakteri filamen dengan pertumbuhan relatif cepat. Bersifat
      <em>fotoheterotrof</em> — membutuhkan cahaya dan CO₂. Menyukai kondisi
      <b>pH basa</b> (pH 8–11). Mengandung karbohidrat tinggi dan pigmen fikosianin
      yang khas berwarna biru.`,citation:"Asghari et al., 2016; Sinaga et al., 2020; Yuliandri et al., 2013",outcome:"reward_mid",rewardText:`👍 <b>Pilihan Cukup Baik.</b> <em>Spirulina</em> memang efektif menyerap
      nutrien, namun ia menyukai kondisi pH basa sementara vinasse umumnya asam (pH 3–5).
      Perlu pengkondisian pH terlebih dahulu. Skor sedang diberikan.`},{id:"chlorella",name:"Chlorella vulgaris",image:"Chlorella-vulgaris.png",price:40,pigment:"Klorofil a+b, karotenoid (hijau)",description:`Mikroalga <em>kosmopolitan</em> yang toleran terhadap lingkungan tercemar.
      Memiliki <b>fitohormon dan poliamin</b> untuk adaptasi ekosistem air tercemar.
      Mampu memecah <b>lignin dan senyawa melanoidin</b>. Dapat hidup pada kondisi
      anaerobik. Banyak digunakan dalam penelitian bioremediasi vinasse.`,citation:"Hallmann et al., 2016; Rahmanta et al., 2025",outcome:"reward_mid",rewardText:`👍 <b>Pilihan Baik!</b> <em>Chlorella vulgaris</em> adalah mikroalga
      kosmopolitan yang toleran dan mampu memecah melanoidin. Sangat relevan untuk
      bioremediasi vinasse. Skor sedang diberikan.`}],tb={azolla:{dose:"200 g biomassa segar / L vinasse",duration:"7 hari",codRemoval:"96%",bodRemoval:"94%",notes:"Pertahankan cahaya cukup (> 1000 lux) dan suhu 25–30 °C."},nannochloropsis:{dose:"—",duration:"—",codRemoval:"~0%",bodRemoval:"~0%",notes:"⛔ Tidak cocok untuk vinasse air tawar. Alga akan mati dalam 24 jam."},spirulina:{dose:"1 g biomassa kering / L vinasse (+ buffer pH 8)",duration:"14 hari",codRemoval:"55%",bodRemoval:"60%",notes:"Perlu netralisasi pH vinasse ke 7–8 sebelum inokulasi."},chlorella:{dose:"0.5 g biomassa kering / L vinasse",duration:"10 hari",codRemoval:"70%",bodRemoval:"75%",notes:"Pertahankan kondisi anaerob-fakultatif. Berikan CO₂ setiap 2 hari."}};function Ec(n,e){const t=tb[n];if(!t||t.codRemoval==="~0%")return null;const i=t.dose.match(/^([\d.]+)\s*(g\s*biomassa\s*(?:segar|kering))/i),a=i?parseFloat(i[1]):.5,s=i?i[2].trim():"g";return{total:(a*e).toFixed(1),unit:s,duration:t.duration,codRemoval:t.codRemoval,bodRemoval:t.bodRemoval,notes:t.notes}}const de=n=>document.getElementById(n);function nb(n){ob(),lb(),Ja(),cb(),ib(()=>{ab(e=>{sb(e,()=>{rb(n)})})})}function ib(n){const e=js("s3-overlay");e.innerHTML=`
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
  `,document.body.appendChild(e),de("s3-ctx").innerHTML=Rs.context,de("s3-q").innerHTML=`<strong>❓ Pertanyaan:</strong><br>${Rs.question}`;const t=de("s3-opts");let i=!1;Rs.options.forEach(a=>{const s=document.createElement("button");s.className="s3-option",s.innerHTML=`<strong>${a.label}.</strong> ${a.text}`,s.onclick=()=>{if(!i)if(a.correct){i=!0,s.classList.add("correct"),t.querySelectorAll(".s3-option").forEach(l=>l.disabled=!0);const r=Z.wrongAnswers??0,o=r===0?100:r<=2?50:25;Z.totalPoints+=o,Z.levelAttempts++,en(),Tc("s3-fb",!0,Rs.explanation+`<br><br>🎉 +${o} poin tambahan!`),de("s3-next-challenge").classList.remove("hidden")}else s.classList.add("wrong"),s.disabled=!0,Z.wrongAnswers=(Z.wrongAnswers??0)+1,en(),Tc("s3-fb",!1,"❌ Kurang tepat. Coba pilihan lain!")},t.appendChild(s)}),de("s3-next-challenge").onclick=()=>{Ja(),n()}}function ab(n){const e=js("s3-overlay");e.innerHTML=`
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
  `,document.body.appendChild(e);let t=null;function i(){const a=de("s3-shop-grid");a.innerHTML="",Fa.forEach(s=>{const r=document.createElement("div");r.className="s3-micro-card",t&&s.id===t&&r.classList.add("chosen");const o=Z.totalPoints>=s.price;r.innerHTML=`
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
      `,a.appendChild(r)})}i(),de("s3-shop-pts").textContent=Z.totalPoints+" poin",de("s3-shop-grid").addEventListener("click",a=>{const s=a.target.closest(".s3-buy-btn");if(!s||s.disabled||t)return;const r=Fa.find(l=>l.id===s.dataset.id);if(!r)return;Z.totalPoints-=r.price,en(),de("s3-shop-pts").textContent=Z.totalPoints+" poin";const o=de("s3-shop-result");o.classList.remove("hidden"),r.outcome==="punishment"?(o.className="s3-shop-result punishment",o.innerHTML=r.punishmentText+"<br><br>💡 <b>Coba lagi</b> — pilih mikroorganisme yang lebih tepat!",i(),de("s3-shop-pts").textContent=Z.totalPoints+" poin",Fa.filter(d=>d.outcome!=="punishment").some(d=>Z.totalPoints>=d.price)||(o.innerHTML+="<br><br>⛔ <b>Poin kamu tidak cukup</b> untuk membeli mikroorganisme yang tepat.",de("s3-btn-restart").classList.remove("hidden"))):(t=r.id,o.className="s3-shop-result "+(r.outcome==="reward_high"?"reward-high":"reward-mid"),o.innerHTML=r.rewardText,i(),setTimeout(()=>de("s3-btn-to-lab").classList.remove("hidden"),800))}),de("s3-btn-to-lab").onclick=()=>{Ja(),n(t)},de("s3-btn-restart").onclick=()=>{window.location.reload()}}function sb(n,e){const t=Fa.find(_=>_.id===n)||Fa[0],i=js("s3-overlay");i.innerHTML=`
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
          ${[10,50,100,500,1e3].map(_=>`
            <button class="s3-vol-btn" data-vol="${_}">${_} L</button>
          `).join("")}
        </div>
      </div>

      <!-- Sprinkler scene (hidden until volume picked) -->
      <div class="s3-sprinkler-scene hidden" id="s3-sprinkler-scene">
        <div class="s3-spk-label" id="s3-spk-dose-label"></div>
        <!-- Multi-glass pour scene -->
        <div class="s3-glass-pour-layout">
          <div class="s3-glass-side">
            <div class="s3-glass-row" id="s3-glass-row">
              <!-- glasses built by JS when volume is picked -->
            </div>
            <div class="s3-glass-hint" id="s3-pour-hint">↓ Seret gelas ke kolam vinasse</div>
          </div>
          <div class="s3-tank-side">
            <div class="s3-tank-drop-zone" id="s3-tank-drop-zone">
              <div class="s3-tank-drops" id="s3-tank-drops"></div>
              <div class="s3-spk-tank">
                <div class="s3-spk-vinasse"></div>
                <div class="s3-spk-micro-layer" id="s3-spk-micro-layer"></div>
                <div class="s3-spk-target-line" id="s3-spk-target-line"></div>
                <div class="s3-spk-tank-label">Kolam Vinasse</div>
              </div>
            </div>
            <div class="s3-tank-drop-lbl" id="s3-tank-drop-lbl">Jatuhkan di sini</div>
          </div>
        </div>
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
        <button class="s3-btn s3-btn-reset hidden" id="s3-btn-reset-pour">🔄 Ulang Tuangan</button>
      </div>

      <!-- Result cards (hidden until pour complete) -->
      <div class="s3-lab-result hidden" id="s3-lab-result">
        <div class="s3-calc-grid" id="s3-calc-grid"></div>
        <div class="s3-lab-notes" id="s3-lab-notes"></div>
      </div>

      <button class="s3-btn hidden" id="s3-btn-to-valve">🚰 Aktifkan Kran Vinasse →</button>
    </div>
  `,document.body.appendChild(i);let a=null,s=0,r=!1,o=null,l=0,d=[],c=null,p=null,f=null,h=!1,g=null;const x=6,u={azolla:"#4ecb47",nannochloropsis:"#c8b820",spirulina:"#2ab8d8",chlorella:"#38d878"}[t.id]||"#80e880";i.querySelectorAll(".s3-vol-btn").forEach(_=>{_.onclick=()=>{i.querySelectorAll(".s3-vol-btn").forEach(V=>V.classList.remove("active")),_.classList.add("active"),a=parseInt(_.dataset.vol);const k=Ec(n,a);g&&(g(),g=null),s=0,r=!1,de("s3-lab-result").classList.add("hidden"),de("s3-btn-to-valve").classList.add("hidden"),de("s3-spk-micro-layer").style.transition="none",de("s3-spk-micro-layer").style.height="0%",de("s3-pour-counter").classList.add("hidden"),de("s3-pour-progress-wrap").classList.add("hidden"),de("s3-pour-feedback").classList.add("hidden"),de("s3-btn-confirm-pour").classList.add("hidden"),de("s3-pour-hint").classList.remove("hidden"),de("s3-poured-amt").textContent="0.0",de("s3-pour-bar-fill").style.width="0%",k?(de("s3-target-amt").textContent=k.total,de("s3-target-unit").textContent=k.unit,de("s3-poured-unit").textContent=k.unit,de("s3-spk-target-line").style.display=""):de("s3-spk-target-line").style.display="none",de("s3-spk-dose-label").innerHTML=k?`Dosis yang dibutuhkan: <b>${k.total} ${k.unit}</b> untuk ${a} L vinasse`:`⛔ ${t.name} tidak cocok untuk vinasse ini`,o=k;const w=k?parseFloat(k.total):0;l=w*.25,d=Array(x).fill(l),c=null;const E=de("s3-glass-row");if(E.innerHTML="",k)for(let V=0;V<x;V++){const K=document.createElement("div");K.className="s3-micro-glass",K.id=`s3-mg-${V}`,K.dataset.idx=String(V),K.innerHTML=`<div class="s3-mg-liquid" id="s3-mg-liq-${V}" style="background:${u};height:85%"></div><div class="s3-mg-label">¼</div>`,E.appendChild(K)}const N=document.getElementById("s3-mg-ghost");N&&N.remove();const M=document.createElement("div");M.id="s3-mg-ghost",M.className="s3-mg-ghost hidden",M.innerHTML=`<div class="s3-mg-ghost-liquid" id="s3-mg-ghost-liquid" style="background:${u}"></div>`,document.body.appendChild(M);function L(V){const K=document.getElementById(`s3-mg-liq-${V}`),z=document.getElementById(`s3-mg-${V}`);!K||!z||(K.style.height=l>0?d[V]/l*100+"%":"0%",d[V]<=0&&(z.classList.add("empty"),z.classList.remove("dragging")))}function I(){const V=document.getElementById("s3-tank-drops");if(!V)return;const K=document.createElement("div");K.className="s3-mg-drop",K.style.background=u,K.style.setProperty("--spread",(Math.random()-.5)*10+"px"),K.style.setProperty("--dur",.26+Math.random()*.26+"s"),V.appendChild(K),setTimeout(()=>K.remove(),600)}function B(){if(p||c===null||!o)return;const V=w*1.5;p=setInterval(()=>{if(c===null||d[c]<=0||s>=V){Y();return}const K=Math.max(w*.01,.001),z=Math.min(K,d[c],V-s);d[c]-=z,s=Math.min(s+z,V),L(c),de("s3-poured-amt").textContent=s.toFixed(1);const Q=document.getElementById("s3-mg-ghost-liquid");Q&&(Q.style.height=l>0?d[c]/l*100+"%":"0%");const ue=Math.min(s/V,1)*30;de("s3-spk-micro-layer").style.transition="none",de("s3-spk-micro-layer").style.height=ue+"%",de("s3-spk-micro-layer").style.background=u;const ke=Math.min(s/V,1)*100;de("s3-pour-bar-fill").style.width=ke+"%";const Te=w>0?s/w:0;de("s3-pour-bar-fill").style.background=Te<.7?"#20a0d0":Te<.8?"#60d060":Te<=1.2?"#00e870":Te<=1.5?"#e8a020":"#e04020"},80),f=setInterval(I,55)}function Y(){clearInterval(p),clearInterval(f),p=f=null}function P(V,K){M.style.left=V-18+"px",M.style.top=K-60+"px";const z=document.getElementById("s3-tank-drop-zone");if(!z)return;const Q=z.getBoundingClientRect(),ue=V>=Q.left&&V<=Q.right&&K>=Q.top&&K<=Q.bottom;ue!==h&&(h=ue,z.classList.toggle("active",ue),M.classList.toggle("tilting",ue),ue?B():Y())}function F(V,K,z){var ue;if(d[V]<=0)return;c=V,h=!1,(ue=document.getElementById(`s3-mg-${V}`))==null||ue.classList.add("dragging"),M.classList.remove("hidden");const Q=document.getElementById("s3-mg-ghost-liquid");Q&&(Q.style.height=l>0?d[V]/l*100+"%":"85%"),r||(r=!0,de("s3-pour-hint").classList.add("hidden"),de("s3-pour-counter").classList.remove("hidden"),de("s3-pour-progress-wrap").classList.remove("hidden"),de("s3-btn-confirm-pour").classList.remove("hidden"),de("s3-btn-reset-pour").classList.remove("hidden")),P(K,z)}function X(){var K,z;if(c===null)return;Y(),L(c),(K=document.getElementById(`s3-mg-${c}`))==null||K.classList.remove("dragging"),c=null,h=!1,M.classList.add("hidden"),M.classList.remove("tilting"),(z=document.getElementById("s3-tank-drop-zone"))==null||z.classList.remove("active");const V=document.getElementById("s3-tank-drop-lbl");V&&(V.textContent=s>0&&o?`✓ ${s.toFixed(1)} ${o.unit} dituang`:"Jatuhkan di sini")}for(let V=0;V<x;V++){const K=document.getElementById(`s3-mg-${V}`);K&&(K.addEventListener("mousedown",z=>{F(V,z.clientX,z.clientY),z.preventDefault()}),K.addEventListener("touchstart",z=>{F(V,z.touches[0].clientX,z.touches[0].clientY),z.preventDefault()},{passive:!1}))}function ne(V){c!==null&&P(V.clientX,V.clientY)}function $(){X()}function j(V){c!==null&&(P(V.touches[0].clientX,V.touches[0].clientY),V.preventDefault())}function J(){X()}window.addEventListener("mousemove",ne),window.addEventListener("mouseup",$),window.addEventListener("touchmove",j,{passive:!1}),window.addEventListener("touchend",J),g=()=>{X(),window.removeEventListener("mousemove",ne),window.removeEventListener("mouseup",$),window.removeEventListener("touchmove",j),window.removeEventListener("touchend",J);const V=document.getElementById("s3-mg-ghost");V&&V.remove()},de("s3-sprinkler-scene").classList.remove("hidden"),de("s3-sprinkler-scene").scrollIntoView({behavior:"smooth",block:"nearest"})}});function v(_){const k=de("s3-calc-grid"),w=de("s3-lab-notes");_?(k.innerHTML=[{icon:"⚗️",label:"Volume Vinasse",value:`${a} L`},{icon:"🧫",label:"Dosis Mikro",value:`${_.total} ${_.unit}`},{icon:"⏱️",label:"Durasi Perlakuan",value:_.duration}].map(E=>`
        <div class="s3-calc-card">
          <span class="s3-calc-icon">${E.icon}</span>
          <span class="s3-calc-label">${E.label}</span>
          <span class="s3-calc-value">${E.value}</span>
        </div>`).join(""),w.innerHTML=`📝 <b>Catatan:</b> ${_.notes}`):(k.innerHTML=`
        <div class="s3-calc-card fail">
          <span class="s3-calc-icon">⛔</span>
          <span class="s3-calc-label">Tidak dapat digunakan</span>
          <span class="s3-calc-value">${t.name} tidak cocok untuk vinasse ini</span>
        </div>`,w.innerHTML="⚠️ Pilihan mikroorganisme tidak valid untuk kondisi vinasse ini."),de("s3-lab-result").classList.remove("hidden"),de("s3-btn-to-valve").classList.remove("hidden"),de("s3-lab-result").scrollIntoView({behavior:"smooth",block:"nearest"})}function b(){setTimeout(()=>{if(s=0,r=!1,l>0)for(let k=0;k<x;k++){d[k]=l;const w=document.getElementById(`s3-mg-liq-${k}`),E=document.getElementById(`s3-mg-${k}`);w&&(w.style.height="85%"),E&&E.classList.remove("empty","dragging")}de("s3-spk-micro-layer").style.transition="none",de("s3-spk-micro-layer").style.height="0%",de("s3-poured-amt").textContent="0.0",de("s3-pour-bar-fill").style.width="0%",de("s3-pour-counter").classList.add("hidden"),de("s3-pour-progress-wrap").classList.add("hidden"),de("s3-btn-confirm-pour").classList.add("hidden"),de("s3-btn-reset-pour").classList.add("hidden"),de("s3-pour-hint").classList.remove("hidden"),de("s3-pour-feedback").classList.add("hidden");const _=document.getElementById("s3-tank-drop-lbl");_&&(_.textContent="Jatuhkan di sini")},2500)}de("s3-btn-confirm-pour").onclick=()=>{const _=Ec(n,a),k=de("s3-pour-feedback");if(k.classList.remove("hidden"),de("s3-btn-confirm-pour").classList.add("hidden"),de("s3-btn-reset-pour").classList.add("hidden"),!_){k.className="s3-pour-feedback punishment",k.innerHTML="⚠️ Mikroorganisme ini tidak cocok — hasilnya tidak optimal.",setTimeout(()=>v(null),1200);return}const w=parseFloat(_.total),E=s/w;E<.8?(k.className="s3-pour-feedback wrong",k.innerHTML=`⚠️ <b>Kurang!</b> Kamu menuangkan <b>${s.toFixed(1)} ${_.unit}</b>,
        padahal target <b>${_.total} ${_.unit}</b>. Seret lebih banyak gelas!`,b()):E>1.2?(k.className="s3-pour-feedback wrong",k.innerHTML=`⚠️ <b>Terlalu banyak!</b> Kamu menuangkan <b>${s.toFixed(1)} ${_.unit}</b>,
        target hanya <b>${_.total} ${_.unit}</b>. Coba lagi!`,b()):(k.className="s3-pour-feedback correct",k.innerHTML=`✅ <b>Tepat!</b> <b>${s.toFixed(1)} ${_.unit}</b> — sesuai dosis bioremediasi!`,de("s3-spk-micro-layer").style.transition="height 1.2s ease",de("s3-spk-micro-layer").style.height="30%",setTimeout(()=>v(_),1500))},de("s3-btn-reset-pour").onclick=()=>{de("s3-pour-feedback").classList.add("hidden"),b()},de("s3-btn-to-valve").onclick=()=>{g&&(g(),g=null),Ja(),e()}}function rb(n){const e=js("s3-overlay");e.innerHTML=`
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
  `,document.body.appendChild(e);let t=!1;de("s3-btn-open-valve").onclick=()=>{if(t)return;t=!0;const i=de("s3-valve-wheel");i.style.animation="valveSpin 0.8s ease forwards";const a=de("s3-flow");a.innerHTML="";for(let s=0;s<8;s++){const r=document.createElement("div");r.className="s3-drop",r.style.animationDelay=s*.12+"s",r.style.left=30+Math.random()*30+"%",a.appendChild(r)}a.classList.add("flowing"),setTimeout(()=>{de("s3-tank-liquid").style.height="75%"},600),de("s3-btn-open-valve").disabled=!0,de("s3-btn-open-valve").textContent="✅ Kran Terbuka",de("s3-valve-instr").textContent="Vinasse mengalir ke reaktor bioremediasi…",setTimeout(()=>{de("s3-level-complete").classList.remove("hidden"),de("s3-final-pts").textContent=Z.totalPoints+" poin"},1800)},de("s3-btn-finish").onclick=()=>{Ja(),n&&n()}}function js(n){const e=document.createElement("div");return e.id=n,e.className="s3-overlay",e}function Ja(){const n=de("s3-overlay");n&&n.remove()}function Tc(n,e,t){const i=de(n);i&&(i.className="s3-feedback "+(e?"correct":"wrong"),i.innerHTML=t,i.classList.remove("hidden"))}function ob(){if(de("s3-styles"))return;const n=`
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
    .s3-btn-reset    { background: linear-gradient(135deg, #8040a0, #6030a0); margin-left: 10px; }

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

    /* ── Glass pour mechanic ────────────────────────── */
    .s3-sprinkler-scene { margin: 12px 0 6px; }
    .s3-sprinkler-scene.hidden { display: none; }
    .s3-spk-label { font-size: 13px; color: #80b0c8; text-align: center; margin-bottom: 10px; }
    /* Layout: glasses on left, tank on right */
    .s3-glass-pour-layout {
      display: flex; align-items: flex-end; gap: 20px;
      flex-wrap: wrap; justify-content: center; margin: 4px 0 12px;
    }
    .s3-glass-side { display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .s3-glass-row  { display: flex; gap: 6px; align-items: flex-end; min-height: 64px; }
    .s3-glass-hint { font-size: 11px; color: #3a8a5a; font-style: italic; text-align: center; }
    /* Individual micro glass */
    .s3-micro-glass {
      position: relative; width: 36px; height: 54px;
      border: 2px solid #2a6a4a; border-top: none; border-radius: 0 0 6px 6px;
      background: rgba(5, 18, 10, 0.85); overflow: hidden;
      cursor: grab; user-select: none;
      transition: box-shadow 0.2s, border-color 0.2s, opacity 0.3s;
    }
    .s3-micro-glass:not(.empty):hover { box-shadow: 0 0 8px rgba(0,200,80,0.4); border-color: #3a9a6a; }
    .s3-micro-glass.empty    { opacity: 0.28; cursor: not-allowed; border-color: #1a3a2a; }
    .s3-micro-glass.dragging { opacity: 0.45; cursor: grabbing; }
    .s3-mg-liquid {
      position: absolute; bottom: 0; left: 0; right: 0; height: 85%;
      transition: height 0.18s ease;
    }
    .s3-mg-label {
      position: absolute; bottom: 2px; left: 0; right: 0;
      font-size: 7px; text-align: center; color: rgba(200,255,210,0.8);
      font-weight: 700; pointer-events: none; z-index: 2;
    }
    /* Ghost glass follows cursor */
    .s3-mg-ghost {
      position: fixed; z-index: 9999; pointer-events: none;
      width: 36px; height: 54px;
      border: 2px solid rgba(0,255,120,0.7); border-top: none; border-radius: 0 0 8px 8px;
      background: rgba(5, 18, 10, 0.92); overflow: hidden;
      transform-origin: bottom center; transition: transform 0.18s;
      box-shadow: 0 0 14px rgba(0,220,80,0.6);
    }
    .s3-mg-ghost.tilting { transform: rotate(-42deg); }
    .s3-mg-ghost-liquid { position: absolute; bottom: 0; left: 0; right: 0; transition: height 0.18s ease; }
    /* Tank side */
    .s3-tank-side  { display: flex; flex-direction: column; align-items: center; gap: 6px; }
    .s3-tank-drop-zone {
      position: relative; padding: 8px 10px;
      border: 2px dashed rgba(60,130,80,0.3); border-radius: 12px;
      transition: border-color 0.2s, background 0.2s;
    }
    .s3-tank-drop-zone.active { border-color: rgba(0,210,90,0.7); background: rgba(0,80,40,0.12); }
    .s3-tank-drops {
      position: absolute; top: 6px; left: 50%; transform: translateX(-50%);
      width: 30px; height: 30px; pointer-events: none; overflow: visible;
    }
    .s3-tank-drop-lbl { font-size: 10px; color: #3a6a4a; font-style: italic; text-align: center; }
    /* Drop particle */
    .s3-mg-drop {
      position: absolute; width: 5px; height: 9px;
      border-radius: 50% 50% 45% 45%;
      left: calc(50% + var(--spread, 0px)); transform: translateX(-50%);
      animation: mgDropFall var(--dur, 0.42s) ease-in forwards;
    }
    @keyframes mgDropFall {
      from { transform: translateX(-50%) translateY(0);    opacity: 0.9; }
      to   { transform: translateX(-50%) translateY(60px); opacity: 0; }
    }
    /* Vinasse tank (shared) */
    .s3-spk-tank {
      position: relative; width: 200px; height: 75px;
      border: 3px solid #4a6a7a; border-top: none; border-radius: 0 0 12px 12px;
      background: rgba(5, 15, 25, 0.6); overflow: hidden;
    }
    .s3-spk-vinasse {
      position: absolute; bottom: 0; left: 0; right: 0; height: 55%;
      background: rgba(70, 28, 5, 0.85);
    }
    .s3-spk-micro-layer { position: absolute; bottom: 55%; left: 0; right: 0; height: 0%; }
    .s3-spk-target-line {
      position: absolute; left: 0; right: 0; bottom: 70%;
      height: 2px; background: rgba(255, 220, 0, 0.8); z-index: 4; pointer-events: none;
    }
    .s3-spk-target-line::after {
      content: 'TARGET'; position: absolute; right: 4px; top: -10px;
      font-size: 8px; font-weight: 700; color: #ffd040; letter-spacing: 0.5px;
    }
    .s3-spk-tank-label {
      position: absolute; bottom: 4px; left: 0; right: 0;
      text-align: center; font-size: 10px; color: rgba(255,255,255,0.3); pointer-events: none;
    }
    /* Pour status row */
    .s3-glass-hint { margin: 8px 0 0; font-size: 12px; color: #3a8a5a; text-align: center; }
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
  `,e=document.createElement("style");e.id="s3-styles",e.textContent=n,document.head.appendChild(e)}function lb(){if(de("ipal-labels-styles"))return;const n=`
    .ipal-labels-panel {
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: rgba(25, 50, 75, 0.9);
      border: 2px solid rgba(52, 152, 219, 0.6);
      border-radius: 12px;
      padding: 16px;
      max-width: 280px;
      z-index: 100;
      color: #ddeeff;
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
      animation: slideInLeft 0.4s ease-out;
    }

    .ipal-labels-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(52, 152, 219, 0.3);
    }

    .ipal-labels-title {
      font-size: 13px;
      font-weight: 700;
      color: #3498db;
      letter-spacing: 0.5px;
    }

    .ipal-labels-close {
      background: none;
      border: none;
      color: #3498db;
      font-size: 16px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      transition: color 0.2s;
    }

    .ipal-labels-close:hover {
      color: #2ecc71;
    }

    .ipal-labels-item {
      display: flex;
      gap: 10px;
      margin-bottom: 12px;
      font-size: 12px;
      line-height: 1.4;
    }

    .ipal-labels-item:last-child {
      margin-bottom: 0;
    }

    .ipal-labels-icon {
      font-size: 18px;
      min-width: 20px;
      text-align: center;
    }

    .ipal-labels-content {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .ipal-labels-name {
      font-weight: 600;
      color: #a0f0c0;
    }

    .ipal-labels-desc {
      color: #80b0c0;
      font-size: 11px;
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,e=document.createElement("style");e.id="ipal-labels-styles",e.textContent=n,document.head.appendChild(e)}function cb(){if(de("ipal-labels-panel"))return;const n=document.createElement("div");n.id="ipal-labels-panel",n.className="ipal-labels-panel",n.innerHTML=`
    <div class="ipal-labels-header">
      <div class="ipal-labels-title">📍 Komponen 3D IPAL</div>
      <button class="ipal-labels-close" id="btn-close-ipal-labels" title="Tutup">✕</button>
    </div>

    <div class="ipal-labels-item">
      <div class="ipal-labels-icon">⚙️</div>
      <div class="ipal-labels-content">
        <div class="ipal-labels-name">Aerator</div>
        <div class="ipal-labels-desc">Pemompa udara untuk proses aerasi. Menginjeksi gelembung oksigen ke air limbah.</div>
      </div>
    </div>

    <div class="ipal-labels-item">
      <div class="ipal-labels-icon">🪣</div>
      <div class="ipal-labels-content">
        <div class="ipal-labels-name">Bak Penampungan</div>
        <div class="ipal-labels-desc">Reservoir untuk menyimpan dan mengolah limbah vinasse secara bertahap.</div>
      </div>
    </div>

    <div class="ipal-labels-item">
      <div class="ipal-labels-icon">🩸</div>
      <div class="ipal-labels-content">
        <div class="ipal-labels-name">Aliran Air</div>
        <div class="ipal-labels-desc">Jalur pemindahan air limbah yang sudah diolah menuju tahap berikutnya.</div>
      </div>
    </div>
  `,document.body.appendChild(n);const e=de("btn-close-ipal-labels");e&&(e.onclick=()=>{n.style.animation="slideInLeft 0.3s ease-out reverse",setTimeout(()=>n.remove(),300)})}const db=[{id:"aerator_1",category:"alat",name:"Aerator (1 unit)",emoji:"💨",desc:"Pompa udara kecil untuk mensuplai O₂ ke dalam cairan. 1 unit = aerasi lemah.",effect:{aerationLevel:1},required:!0},{id:"aerator_2",category:"alat",name:"Aerator (2 unit)",emoji:"💨💨",desc:"Dua pompa udara — aerasi sedang, O₂ terdistribusi lebih merata.",effect:{aerationLevel:2},required:!1},{id:"aerator_3",category:"alat",name:"Aerator (3 unit)",emoji:"💨💨💨",desc:"Tiga pompa udara — aerasi maksimal, O₂ penuh, pH lebih cepat turun.",effect:{aerationLevel:3},required:!1},{id:"aquarium",category:"alat",name:"Aquarium / Bak Kolam",emoji:"🪣",desc:"Wadah penampung cairan vinasse. Diletakkan dalam kondisi tertutup rapat saat percobaan berjalan.",effect:{hasContainer:!0},required:!0},{id:"selang",category:"alat",name:"Pipa / Selang",emoji:"🔩",desc:"Menghubungkan aerator ke dalam cairan. Diperlukan agar gelembung udara sampai ke dasar.",effect:{hasHose:!0},required:!0},{id:"listrik",category:"alat",name:"Aliran Listrik",emoji:"⚡",desc:"Sumber daya untuk aerator dan lampu. Wajib jika menggunakan peralatan listrik.",effect:{hasPower:!0},required:!0},{id:"penyaring",category:"alat",name:"Penyaring",emoji:"🕸️",desc:"Filter mekanik untuk menyaring biomassa Azolla atau partikel kasar setelah perlakuan.",effect:{hasFilter:!0},required:!1},{id:"lampu",category:"alat",name:"Lampu (Grow-light)",emoji:"💡",desc:"Pencahayaan tambahan > 1000 lux untuk mendukung fotosintesis Azolla. Sangat dianjurkan.",effect:{hasLight:!0},required:!1}],ub=[{id:"vinasse",category:"bahan",name:"Limbah Vinasse",emoji:"🪣",desc:"Bahan utama — limbah cair dari distilasi etanol. COD awal ±80.000 mg/L, pH 3–4.",required:!0},{id:"azolla_bio",category:"bahan",name:"Azolla microphylla (biomassa)",emoji:"🌿",desc:"Agen bioremediasi utama. Dosis: 200 g biomassa segar per 1 L vinasse.",required:!0},{id:"air_pengencer",category:"bahan",name:"Air Pengencer",emoji:"💧",desc:"Untuk mengencerkan vinasse ke konsentrasi yang optimal bagi pertumbuhan Azolla.",required:!1},{id:"buffer_ph",category:"bahan",name:"Buffer pH (NaHCO₃)",emoji:"🧪",desc:"Meningkatkan pH vinasse ke 5–7 agar Azolla dapat hidup pada fase awal inokulasi.",required:!1}],pb=[{step:1,icon:"🪣",title:"Siapkan Wadah",desc:"Masukkan air limbah vinasse ke dalam aquarium/bak/kolam yang sudah disiapkan.",requires:["aquarium","vinasse"]},{step:2,icon:"🧫",title:"Ukur Parameter Awal",desc:"Ukur kadar COD, BOD dengan titrasi; pH menggunakan kertas lakmus atau pH meter.",requires:[]},{step:3,icon:"🌿",title:"Tambahkan Mikroorganisme",desc:"Tambahkan Azolla microphylla dengan 3 variasi konsentrasi (10%, 50%, 100% dosis referensi). Jika cair: pengenceran; jika padat: tambahkan bibit terlebih dahulu.",requires:["azolla_bio"]},{step:4,icon:"💨",title:"Nyalakan Aerator",desc:"Nyalakan aerator yang telah terhubung selang. Sesuaikan kecepatan aerasi sesuai jumlah aerator yang dipilih.",requires:["aerator_1","selang","listrik"]},{step:5,icon:"💡",title:"Tambahkan Pencahayaan",desc:"Pasang grow-light karena Azolla membutuhkan cahaya untuk fotosintesis. Target: > 1000 lux.",requires:["lampu"]},{step:6,icon:"🔒",title:"Tutup & Jalankan",desc:"Tutup aquarium dan biarkan aerator terus menyala tanpa terputus selama 7 hari (durasi berdasarkan literatur).",requires:["aquarium"]},{step:7,icon:"🔬",title:"Amati Perubahan",desc:"Catat perubahan warna, bau, dan kondisi Azolla setiap hari. Warna vinasse berubah dari hitam → coklat muda menandakan penurunan melanoidin.",requires:[]},{step:8,icon:"📊",title:"Ukur Parameter Akhir",desc:"Ukur COD, BOD, dan pH akhir. Bandingkan dengan nilai awal untuk menghitung persentase penurunan.",requires:[]},{step:9,icon:"📝",title:"Tulis Laporan",desc:"Susun laporan penelitian: latar belakang, metode, hasil (tabel COD/BOD awal-akhir), pembahasan, dan kesimpulan.",requires:[]}];function hb(n,e){const t=new Set(n),i=t.has("aquarium"),a=t.has("aerator_1")||t.has("aerator_2")||t.has("aerator_3"),s=t.has("aerator_3")?3:t.has("aerator_2")?2:t.has("aerator_1")?1:0,r=t.has("selang"),o=t.has("listrik"),l=t.has("lampu"),d=t.has("penyaring"),c=t.has("azolla_bio"),p=t.has("vinasse"),f=t.has("buffer_ph"),h=[];if(i||h.push("Aquarium/Bak (wadah wajib)"),a||h.push("Aerator (aerasi wajib untuk O₂)"),r||h.push("Pipa/Selang (penghubung aerator)"),o||h.push("Aliran Listrik (sumber daya aerator)"),c||h.push("Azolla microphylla (agen bioremediasi)"),p||h.push("Limbah Vinasse (bahan utama)"),h.length>0)return{success:!1,codReduction:0,bodReduction:0,grade:"Gagal",gradeColor:"#ff4444",missing:h,feedback:`❌ Rancangan tidak lengkap! Item yang kurang: ${h.join(", ")}.`};let g=60,x=58;s>=2&&(g+=12,x+=10),s>=3&&(g+=8,x+=6),l&&(g+=16,x+=14),f&&(g+=8,x+=8),d&&(g+=4),g=Math.min(g,96),x=Math.min(x,94);let m,u;g>=85?(m="Sangat Baik ⭐⭐⭐",u="#40ff80"):g>=70?(m="Baik ⭐⭐",u="#a0c840"):(m="Cukup ⭐",u="#e0a020");const v=e&&e.concentrations||[10,50,100],b=e&&e.duration||7,_=Math.min(1,.6+b/25),k=v.map(w=>{const E=Math.min(1,.4+w/100*.6)*_,N=Math.round(g*E),M=Math.round(x*E);let L;return w<=15?L="Dosis sangat rendah; penurunan terbatas":w<=40?L="Dosis rendah; penurunan sedang":w<=80?L="Dosis moderat; efisiensi cukup baik":w<=110?L="Dosis optimal; performa terbaik":L="Dosis lebih; tidak banyak tambahan manfaat",{conc:w,cod:N,bod:M,note:L}});return{success:!0,aerationLvl:s,hasLight:l,hasFilter:d,hasBuffer:f,codReduction:g,bodReduction:x,grade:m,gradeColor:u,missing:[],feedback:`✅ Reaktor berhasil dirancang! Perkiraan penurunan COD rata-rata: <b>${g}%</b>, BOD: <b>${x}%</b>.`,perConcentration:k}}const rt=n=>document.getElementById(n);function Ud(n){bb(),ma(),fb(e=>{mb(e,t=>{const i=hb(e,t);Z.stage4.selectedItems=e,Z.stage4.reactorResult=i,Z.stage4.concentrationCfg=t,gb(i,()=>{xb(i,n)})})})}function fb(n){const e=[...db,...ub],t=Js();t.innerHTML=`
    <div class="s4-card s4-builder-card">
      <div class="s4-header">
        <span class="s4-badge">🛠️ BUILDER REAKTOR</span>
        <h2 class="s4-title">Pilih Alat & Bahan untuk Reaktor Vinassemu</h2>
        <p class="s4-subtitle">Centang semua komponen yang ingin kamu masukkan ke dalam rancangan reaktor.
          Item wajib ditandai <span class="s4-required-tag">WAJIB</span>.</p>
      </div>
      ${Ks(1)}

      <div class="s4-builder-grid" id="s4-builder-grid"></div>

      <div class="s4-selection-summary" id="s4-sel-summary">
        <span id="s4-sel-count">0 item dipilih</span>
        <span id="s4-sel-aerator" class="s4-aer-badge hidden">💨 Aerasi: —</span>
      </div>

      <button class="s4-btn" id="s4-btn-build">⚗️ Lihat Prosedur & Bangun Reaktor →</button>
    </div>
  `,document.body.appendChild(t);const i=new Set(e.filter(r=>r.required).map(r=>r.id));function a(){const r=rt("s4-builder-grid");r.innerHTML="";for(const o of["alat","bahan"]){const l=document.createElement("div");l.className="s4-cat-label",l.textContent=o==="alat"?"🔩 ALAT":"🧪 BAHAN",r.appendChild(l),e.filter(c=>c.category===o).forEach(c=>{const p=i.has(c.id),f=document.createElement("div");f.className=`s4-item-card${p?" selected":""}`,f.dataset.id=c.id;const h=c.id.startsWith("aerator_");f.innerHTML=`
          <div class="s4-item-check">${p?"☑":"☐"}</div>
          <div class="s4-item-emoji">${c.emoji}</div>
          <div class="s4-item-name">${c.name}
            ${c.required?'<span class="s4-required-tag">WAJIB</span>':""}
          </div>
          <div class="s4-item-desc">${c.desc}</div>
        `,f.onclick=()=>{c.required||(h&&["aerator_1","aerator_2","aerator_3"].forEach(g=>i.delete(g)),i.has(c.id)?i.delete(c.id):i.add(c.id),s(),a())},r.appendChild(f)})}}function s(){rt("s4-sel-count").textContent=`${i.size} item dipilih`;const r=i.has("aerator_3")?3:i.has("aerator_2")?2:i.has("aerator_1")?1:0,o=rt("s4-sel-aerator");r>0?(o.textContent=`💨 Aerasi: ${r} unit`,o.classList.remove("hidden")):o.classList.add("hidden")}a(),s(),rt("s4-btn-build").onclick=()=>{ma(),n([...i])}}function mb(n,e){const t=Js();t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">🧪 PERLAKUAN & ULANGAN</span>
        <h2 class="s4-title">Rancangan Percobaan: Konsentrasi, Ulangan & Dosis</h2>
        <p class="s4-subtitle">Tentukan variasi konsentrasi Azolla, jumlah ulangan, dan lama perlakuan sesuai rancangan penelitianmu.</p>
      </div>
      ${Ks(2)}

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
          ${[1,2,3,4,5].map(h=>`<button class="s4-rep-btn${h===3?" active":""}" data-rep="${h}">${h}×</button>`).join("")}
        </div>
        <div class="s4-rep-feedback" id="s4-rep-feedback"></div>
      </div>

      <!-- Duration -->
      <div class="s4-cfg-section">
        <div class="s4-cfg-label">⏱️ Lama Perlakuan</div>
        <p class="s4-cfg-hint">Durasi inkubasi dengan aerasi aktif. Literatur: 7–15 hari optimal untuk Azolla.</p>
        <div class="s4-dur-btns" id="s4-dur-btns">
          ${[3,5,7,10,14].map(h=>`<button class="s4-dur-btn${h===7?" active":""}" data-day="${h}">${h} hari</button>`).join("")}
        </div>
        <div class="s4-dur-feedback" id="s4-dur-feedback"></div>
      </div>

      <button class="s4-btn" id="s4-btn-cfg-done">📋 Lanjut ke Prosedur →</button>
    </div>
  `,document.body.appendChild(t);const i=[10,50,100],a=[...i],s=rt("s4-conc-sliders");function r(){rt("s4-conc-preview").innerHTML=a.map((h,g)=>{const x=(200*h/100).toFixed(1);return`<div class="s4-conc-pill">
        <span class="s4-conc-pill-label">T${g+1}</span>
        <b>${h}%</b> <span class="s4-conc-pill-sub">(${x} g/L)</span>
      </div>`}).join("")}for(let h=0;h<3;h++){const g=document.createElement("div");g.className="s4-slider-row",g.innerHTML=`
      <span class="s4-slider-tier">T${h+1}</span>
      <input type="range" class="s4-slider" min="5" max="200" step="5"
             value="${i[h]}" id="s4-slider-${h}">
      <span class="s4-slider-val" id="s4-slval-${h}">${i[h]}%</span>
    `,s.appendChild(g),document.getElementById(`s4-slider-${h}`).addEventListener("input",x=>{a[h]=parseInt(x.target.value),rt(`s4-slval-${h}`).textContent=a[h]+"%",r()})}r();let o=3;const l={1:"⚠️ 1 ulangan tidak memenuhi syarat validitas statistik.",2:"⚠️ 2 ulangan cukup minimal.",3:"✅ 3 ulangan — standar minimum penelitian ilmiah.",4:"✅ 4 ulangan — lebih baik, data makin valid.",5:"✅ 5 ulangan — sangat baik untuk replikasi!"};function d(){rt("s4-rep-feedback").innerHTML=l[o]||"",rt("s4-rep-feedback").className="s4-rep-feedback "+(o>=3?"good":"warn")}rt("s4-rep-btns").querySelectorAll(".s4-rep-btn").forEach(h=>{h.onclick=()=>{rt("s4-rep-btns").querySelectorAll(".s4-rep-btn").forEach(g=>g.classList.remove("active")),h.classList.add("active"),o=parseInt(h.dataset.rep),d()}}),d();let c=7;const p={3:"⚠️ 3 hari terlalu singkat untuk degradasi Azolla yang signifikan.",5:"🟡 5 hari: penurunan mulai terlihat tetapi belum optimal.",7:"✅ 7 hari: sesuai rekomendasi literatur (Rizky et al., 2017).",10:"✅ 10 hari: lebih optimal, terutama jika aerasi sedang.",14:"✅ 14 hari: maksimal untuk hasil terbaik pada dosis rendah."};function f(){rt("s4-dur-feedback").innerHTML=p[c]||"",rt("s4-dur-feedback").className="s4-dur-feedback "+(c>=7?"good":c>=5?"warn":"bad")}rt("s4-dur-btns").querySelectorAll(".s4-dur-btn").forEach(h=>{h.onclick=()=>{rt("s4-dur-btns").querySelectorAll(".s4-dur-btn").forEach(g=>g.classList.remove("active")),h.classList.add("active"),c=parseInt(h.dataset.day),f()}}),f(),rt("s4-btn-cfg-done").onclick=()=>{ma(),e({concentrations:[...a],repetitions:o,duration:c})}}function gb(n,e){var s;const t=Js();t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">📋 PROSEDUR PRAKTIKUM</span>
        <h2 class="s4-title">Langkah-langkah Percobaan Reaktor Vinasse</h2>
        <p class="s4-subtitle">Baca setiap langkah percobaan, lalu klik <b>Selesai Baca</b> untuk melanjutkan.</p>
      </div>
      ${Ks(3)}
      <div class="s4-procedure-list" id="s4-proc-list"></div>
      <div class="s4-cfg-summary" id="s4-cfg-summary"></div>
      <button class="s4-btn" id="s4-btn-proc-done">✅ Selesai Baca — Lihat Hasil Reaktor →</button>
    </div>
  `,document.body.appendChild(t);const i=(s=Z.stage4)==null?void 0:s.concentrationCfg;i&&(rt("s4-cfg-summary").innerHTML=`
      <div class="s4-info-box">
        Rancangan kamu: Konsentrasi <b>${i.concentrations.join("%, ")}%</b>
        · Ulangan <b>${i.repetitions}×</b> · Durasi <b>${i.duration} hari</b>
      </div>`);const a=rt("s4-proc-list");pb.forEach(r=>{const o=document.createElement("div");o.className="s4-proc-step",o.innerHTML=`
      <div class="s4-proc-icon">${r.icon}</div>
      <div class="s4-proc-body">
        <div class="s4-proc-title">Langkah ${r.step}: ${r.title}</div>
        <div class="s4-proc-desc">${r.desc}</div>
      </div>
    `,a.appendChild(o)}),rt("s4-btn-proc-done").onclick=()=>{ma(),e()}}function xb(n,e){var s;const t=Js(),i=((s=Z.stage4)==null?void 0:s.concentrationCfg)||{repetitions:3,duration:7};if(t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">⚗️ HASIL RANCANGAN REAKTOR</span>
        <h2 class="s4-title">Simulasi Performa Reaktor Vinassemu</h2>
      </div>
      ${Ks(4)}

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
            <div class="s4-final-score">Total Poin: <span>${Z.totalPoints}</span></div>
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
  `,document.body.appendChild(t),!n.success){rt("s4-btn-finish").onclick=()=>{ma(),Ud(e)};return}let a=!1;rt("s4-run-sim").onclick=()=>{if(a)return;a=!0,rt("s4-run-sim").disabled=!0,rt("s4-run-sim").textContent="⏳ Simulasi berjalan…";const r=rt("s4-rd-liquid"),o=rt("s4-rd-azolla");rt("s4-rd-bubbles").classList.add("active"),r.classList.add("treating"),o.classList.add("growing"),setTimeout(()=>{rt("s4-run-sim").textContent="✅ Simulasi Selesai",rt("s4-sim-results").classList.remove("hidden");const d=rt("s4-conc-tbody");d.innerHTML="",n.perConcentration.forEach((c,p)=>{const f=document.createElement("tr");f.innerHTML=`
          <td>T${p+1}</td>
          <td>${c.conc}%</td>
          <td>${(200*c.conc/100).toFixed(1)} g/L</td>
          <td style="color:${n.gradeColor}">${c.cod}%</td>
          <td style="color:${n.gradeColor}">${c.bod}%</td>
          <td style="font-size:11px;color:#6090a0">${c.note}</td>
        `,d.appendChild(f)}),setTimeout(()=>{rt("s4-bar-cod").style.width=Math.min(100,n.codReduction)+"%",rt("s4-val-cod").textContent=n.codReduction+"%",rt("s4-bar-bod").style.width=Math.min(100,n.bodReduction)+"%",rt("s4-val-bod").textContent=n.bodReduction+"%"},100),setTimeout(()=>{const c=document.createElement("button");c.className="s4-btn",c.style.marginTop="8px",c.textContent="➡️ Lanjut ke Level 5 – Evaluasi",c.onclick=()=>{ma(),e&&e()},rt("s4-sim-results").appendChild(c),c.scrollIntoView({behavior:"smooth",block:"nearest"})},900)},2200)}}function Ks(n){return`<div class="s4-step-indicator">
    ${[{n:1,label:"Builder"},{n:2,label:"Konsentrasi"},{n:3,label:"Prosedur"},{n:4,label:"Hasil"}].map((t,i)=>`
      ${i>0?'<span class="s4-step-arrow">→</span>':""}
      <span class="s4-step ${t.n<n?"done":t.n===n?"active":""}">
        ${t.n<n?"✔ ":""}${t.n}. ${t.label}
      </span>
    `).join("")}
  </div>`}function Js(){const n=document.createElement("div");return n.id="s4-overlay",n.className="s4-overlay",n}function ma(){const n=rt("s4-overlay");n&&n.remove()}function bb(){if(rt("s4-styles"))return;const n=document.createElement("style");n.id="s4-styles",n.textContent=`
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
  `,document.head.appendChild(n)}const vb=[{id:"no_light",title:"Kegagalan: Azolla Tidak Dapat Berfotosintesis",emoji:"🌑",condition:n=>!n.hasLight,symptom:"Warna vinasse tetap hitam pekat setelah 7 hari. Azolla menguning dan mati pada hari ke-3.",cause:"Aquarium tidak mendapat pencahayaan yang cukup (< 200 lux). Azolla tidak dapat melakukan fotosintesis sehingga tidak menghasilkan O₂.",theory:"Azolla microphylla adalah fototrofi obligat — ia wajib mendapat cahaya (> 1000 lux) untuk mengaktifkan fotosistem II dan menghasilkan ATP yang diperlukan untuk pertumbuhan dan produksi eksudat enzimatis pengurai melanoidin.",fix:"Pasang grow-light 1000–3000 lux, atau letakkan reaktor di bawah sinar matahari langsung.",scoreImpact:-15},{id:"low_aeration",title:"Kegagalan: Aerasi Kurang — O₂ Tidak Mencukupi",emoji:"💧",condition:n=>n.aerationLvl<2,symptom:"pH turun sangat lambat. Bau asam tetap tajam pada hari ke-5. COD hanya turun ~40%.",cause:"Hanya 1 aerator yang digunakan. Distribusi O₂ tidak merata — zona anoksik terbentuk di sudut reaktor dan menghambat aktivitas Azolla.",theory:"Proses aerob dalam bioremediasi sangat bergantung pada suplai O₂ terlarut (DO). Nilai DO optimal adalah > 4 mg/L. Dengan 1 aerator kecil, zona pusat reaktor mungkin cukup, tetapi sudut-sudut reaktor akan mengalami anoksia yang menghambat degradasi polutan.",fix:"Tambahkan minimal 2 aerator dan atur posisi selang agar gelembung udara mencapai seluruh volume cairan.",scoreImpact:-10},{id:"no_buffer",title:"Peringatan: pH Terlalu Asam di Awal",emoji:"⚗️",condition:n=>!n.hasBuffer,symptom:n=>`Azolla tumbuh lambat ${n&&n.duration<=5?"di hari-hari pertama percobaan":"pada minggu pertama"}. Beberapa tanaman mengalami klorosis (daun kuning) karena stres pH asam.`,cause:"Vinasse murni memiliki pH 3–4. Azolla bekerja optimal pada pH 5–7. Tanpa buffer pH, fase adaptasi berlangsung lama.",theory:"Enzim nitrogenase pada simbiont Anabaena azollae sangat sensitif terhadap pH rendah. Pada pH < 4.5, aktivitas nitrogenase menurun drastis sehingga fiksasi N₂ dan produksi eksudat berhenti. Penambahan NaHCO₃ (buffer) membantu menstabilkan pH ke 5.5–6.5 pada fase awal.",fix:"Tambahkan NaHCO₃ atau air kapur secukupnya hingga pH vinasse mencapai 5.5–6 sebelum inokulasi Azolla.",scoreImpact:-5},{id:"no_filter",title:"Catatan: Effluen Belum Tersaring",emoji:"🕸️",condition:n=>!n.hasFilter,symptom:"Cairan effluen mengandung partikel biomassa Azolla yang terlepas, membuat cairan tampak keruh meski COD sudah turun.",cause:"Tidak ada penyaring mekanik di akhir proses. Biomassa Azolla yang mati terlarut dan meningkatkan TSS (Total Suspended Solid) effluen.",theory:"Standar baku mutu air limbah (PERMEN LH No. 5/2014) mensyaratkan TSS < 200 mg/L untuk buangan ke badan air. Tanpa filtrasi, meski COD/BOD sudah memenuhi syarat, TSS bisa melebihi batas.",fix:"Pasang penyaring mesh 100–200 µm di outlet reaktor sebelum effluen dibuang atau diproses lanjut menjadi POC.",scoreImpact:0}],Pi=n=>document.getElementById(n);function _b(n){Sb(),Zs(),yb(()=>{wb(()=>{Mb(n)})})}function yb(n){var a;const e=Z.stage4.reactorResult||{},t=vb.filter(s=>s.condition(e)),i=Vo();if(i.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">🔍 LEVEL 5 – EVALUASI PERCOBAAN</span>
        <h2 class="s5-title">Apa yang Terjadi pada Reaktormu?</h2>
        <p class="s5-subtitle">Analisis kegagalan dan keberhasilan percobaan berdasarkan desain yang kamu buat.</p>
      </div>
      ${Go(1)}

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
  `,document.body.appendChild(i),t.length>0){const s=((a=Z.stage4)==null?void 0:a.concentrationCfg)||null,r=Pi("s5-scen-list");t.forEach((o,l)=>{const d=typeof o.symptom=="function"?o.symptom(s):o.symptom,c=document.createElement("div");c.className="s5-scenario-card",c.innerHTML=`
        <div class="s5-scen-header" onclick="this.parentElement.classList.toggle('open')">
          <span class="s5-scen-emoji">${o.emoji}</span>
          <span class="s5-scen-title">${o.title}</span>
          <span class="s5-scen-chevron">▼</span>
        </div>
        <div class="s5-scen-body">
          <div class="s5-scen-row"><span class="s5-scen-lbl">🔎 Gejala</span><p>${d}</p></div>
          <div class="s5-scen-row"><span class="s5-scen-lbl">⚙️ Penyebab</span><p>${o.cause}</p></div>
          <div class="s5-scen-row"><span class="s5-scen-lbl">📚 Teori</span><p>${o.theory}</p></div>
          <div class="s5-scen-row fix"><span class="s5-scen-lbl">✅ Solusi</span><p>${o.fix}</p></div>
        </div>
      `,l===0&&c.classList.add("open"),r.appendChild(c)})}Pi("s5-btn-to-mcq").onclick=()=>{Zs(),n()}}function wb(n){const e=`Dalam proyek yang telah kalian buat, limbah vinasse dari industri etanol di Bekonang memiliki karakteristik pH yang sangat asam, kadar COD dan BOD yang sangat tinggi, serta mengandung pigmen melanoidin dan senyawa fenol.
Berdasarkan konsep bioremediasi yang telah kalian pelajari, analisislah mengapa penggunaan bakteri pengurai seringkali gagal dalam memulihkan limbah vinasse ini? Selanjutnya, jelaskan mekanisme pemilihan agen biologis dapat secara efektif menurunkan kadar polutan dalam proses valorisasi limbah tersebut menjadi Pupuk Organik Cair (POC) yang aman bagi lingkungan`,t=Vo();t.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">✏️ EVALUASI ESAI</span>
        <h2 class="s5-title">Jawab Pertanyaan Berikut</h2>
      </div>
      ${Go(2)}
      <div class="s5-question s5-essay-question">${e.replace(/\n/g,"<br>")}</div>
      <textarea class="s5-essay-textarea" id="s5-essay-input"
        placeholder="Tuliskan jawaban analisismu di sini..."
        rows="8"></textarea>
      <div class="s5-essay-hint">Jawaban akan ditampilkan di halaman ringkasan akhir.</div>
      <button class="s5-btn" id="s5-btn-essay-submit" disabled>✅ Simpan Jawaban</button>
    </div>
  `,document.body.appendChild(t);const i=Pi("s5-essay-input"),a=Pi("s5-btn-essay-submit");i.oninput=()=>{a.disabled=i.value.trim().length<10},a.onclick=()=>{Z.stage5=Z.stage5||{},Z.stage5.essayAnswer=i.value.trim(),Ax({playerName:Z.playerName||"",essayAnswer:Z.stage5.essayAnswer,timestamp:new Date().toISOString()}),Zs(),n()}}function Mb(n){var s,r;const e=Z.stage4.reactorResult||{},t=((s=Z.stage4)==null?void 0:s.concentrationCfg)||null,i=(e.perConcentration||[]).map((o,l)=>`
    <tr>
      <td>T${l+1}</td>
      <td>${o.conc}%</td>
      <td>${(200*o.conc/100).toFixed(1)} g/L</td>
      <td style="color:${e.gradeColor||"#40cc80"}">${o.cod}%</td>
      <td style="color:${e.gradeColor||"#40cc80"}">${o.bod}%</td>
      <td style="font-size:11px;color:#6090a0">${o.note}</td>
    </tr>
  `).join(""),a=Vo();a.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">📊 RINGKASAN EVALUASI</span>
        <h2 class="s5-title">Kesimpulan Percobaan Reaktor Vinasse</h2>
      </div>
      ${Go(3)}

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
          <div class="s5-deb-value" style="color:#ffe040">${Z.totalPoints}</div>
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
        <div class="s5-final-score">Total Poin: <span>${Z.totalPoints}</span></div>
      </div>

      ${(r=Z.stage5)!=null&&r.essayAnswer?`
        <div class="s5-essay-recap">
          <div class="s5-essay-recap-title">✏️ Jawaban Esaimu</div>
          <div class="s5-essay-recap-body">${Z.stage5.essayAnswer.replace(/\n/g,"<br>")}</div>
        </div>
      `:""}

      <button class="s5-btn" id="s5-btn-finish">🏁 Lihat Hasil Akhir →</button>
    </div>
  `,document.body.appendChild(a),Pi("s5-btn-finish").onclick=()=>{Zs(),n&&n()}}function Go(n){return`<div class="s5-step-indicator">
    ${[{n:1,label:"Analisis"},{n:2,label:"Esai"},{n:3,label:"Kesimpulan"}].map((t,i)=>`
      ${i>0?'<span class="s5-step-arrow">→</span>':""}
      <span class="s5-step ${t.n<n?"done":t.n===n?"active":""}">
        ${t.n<n?"✔ ":""}${t.n}. ${t.label}
      </span>
    `).join("")}
  </div>`}function Vo(){const n=document.createElement("div");return n.id="s5-overlay",n.className="s5-overlay",n}function Zs(){const n=Pi("s5-overlay");n&&n.remove()}function Sb(){if(Pi("s5-styles"))return;const n=document.createElement("style");n.id="s5-styles",n.textContent=`
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
  `,document.head.appendChild(n)}const Qs=document.getElementById("game-canvas"),Kn=new Lo({canvas:Qs,antialias:!0});Kn.setPixelRatio(Math.min(window.devicePixelRatio,2));Kn.setSize(window.innerWidth,window.innerHeight);Kn.shadowMap.enabled=!0;Kn.shadowMap.type=wo;Kn.toneMapping=Uc;Kn.toneMappingExposure=1.1;Kn.outputColorSpace=Xt;let fi=null;const{scene:ln}=lg();cg(ln);const{scene:Di}=xg();bg(Di);const{scene:Wn}=Ag();kg(Wn);const{scene:Xn}=Fg();Bg(Xn);const{scene:qn}=Yg();jg(qn);fi=ln;const gt=new on(60,window.innerWidth/window.innerHeight,.1,1e3);gt.position.set(0,18,38);gt.lookAt(0,0,0);const bt=new gx(ln);let qa=yd(ln),Ba=null,Ha=null,Ga=null,mi=qa;function Wo(n,e){var t,i;n&&(n.glowMesh&&(e.remove(n.glowMesh),(t=n.glowMesh.geometry)==null||t.dispose()),n.glowMat&&n.glowMat.dispose(),n.doneSprite&&(e.remove(n.doneSprite),(i=n.doneSprite.material)==null||i.dispose()))}const Ac=22,kc=26,Lc=24,Cc=22,Rc=21,Pc=14,io=.08;let ga=!1,Ia=null,vo=!1,Va=0,wi=Math.PI,Dc=Math.PI,ao=0,Ii=27,Ui=17;function Eb(n,e){Ii=n,Ui=e}function Tb(n){if(!ga){ao+=.0012,gt.position.x=Math.sin(ao)*38,gt.position.z=Math.cos(ao)*38,gt.position.y=18+Math.sin(n*.3)*1.5,gt.lookAt(0,2,0);return}const e=bt.position.x,t=bt.position.z;if(vo&&Ia){Va=Math.min(1,Va+.04);const l=1-Math.pow(1-Va,3),d=Ia.x,c=Ia.z,p=Ia.y??4,f=d+(e-d)*.35,h=c+(t-c)*.35,g=p+6,x=Z.currentLevel===2?kc:Z.currentLevel===3?Lc:Z.currentLevel===4?Cc:Z.currentLevel===5?Rc:Ac,m=e+Math.sin(wi)*x,u=t+Math.cos(wi)*x,v=Pc;gt.position.x=m+(f-m)*l,gt.position.y=v+(g-v)*l,gt.position.z=u+(h-u)*l,gt.fov=60-20*l,gt.updateProjectionMatrix(),gt.lookAt(d,p,c);return}Math.abs(gt.fov-60)>.5&&(gt.fov+=(60-gt.fov)*.1,gt.updateProjectionMatrix()),Dc=(bt.group?bt.group.rotation.y:wi)+Math.PI;let a=Dc-wi;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;wi+=a*.04;const s=Z.currentLevel===2?kc:Z.currentLevel===3?Lc:Z.currentLevel===4?Cc:Z.currentLevel===5?Rc:Ac;let r=e+Math.sin(wi)*s,o=t+Math.cos(wi)*s;r=Math.max(-Ii,Math.min(Ii,r)),o=Math.max(-Ui,Math.min(Ui,o)),gt.position.x+=(r-gt.position.x)*io,gt.position.z+=(o-gt.position.z)*io,gt.position.y+=(Pc-gt.position.y)*io,gt.lookAt(e,3,t)}function Ab(){const n=new T(bt.position.x-gt.position.x,0,bt.position.z-gt.position.z).normalize(),e=new T().crossVectors(n,new T(0,1,0)).normalize();return{fwd:n,right:e}}const kb=6.5;let Yt=null,xn=!1;function Lb(){if(xn)return;let n=null,e=1/0;for(const t of mi){if(t.done)continue;const i=bt.position.x-t.pos.x,a=bt.position.z-t.pos.z,s=Math.sqrt(i*i+a*a);s<kb&&s<e&&(e=s,n=t)}if(n!==Yt){Yt=n;const t=Z.currentLevel===2?`Tekan <kbd>E</kbd> &nbsp;— 🏭 Stasiun ${n?n.idx+1:""}`:Z.currentLevel===3?"Tekan <kbd>E</kbd> &nbsp;— 🚰 Buka Kran Vinasse":Z.currentLevel===4?"Tekan <kbd>E</kbd> &nbsp;— 💻 IPAL Builder Terminal":Z.currentLevel===5?"Tekan <kbd>E</kbd> &nbsp;— 🔬 Analisis Mikroskop":`Tekan <kbd>E</kbd> &nbsp;— ❓ Fenomena ${n?n.idx+1:""}`;Ho(n?t:null)}}window.addEventListener("keydown",n=>{n.code==="KeyE"&&Yt&&!xn&&ga&&Nd(Yt)});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("btn-interact-mobile");n&&n.addEventListener("touchstart",e=>{e.preventDefault(),Yt&&!xn&&ga&&Nd(Yt)},{passive:!1})});function Nd(n){xn=!0,Ho(null),Ia=n.pos?{x:n.pos.x,y:3,z:n.pos.z}:{x:0,y:3,z:0},vo=!0,Va=0;function e(){vo=!1,Va=0}if(Z.currentLevel===3&&n.isValve){nb(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),xn=!1,Yt=null,Z.stage3.valveOpened=!0,setTimeout(()=>Da(()=>Ua(3)),600)});return}if(Z.currentLevel===4&&n.isTerminal){Ud(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),xn=!1,Yt=null,Z.stage4.terminalDone=!0,setTimeout(()=>Da(()=>Ua(4)),600)});return}if(Z.currentLevel===5&&n.isScope){_b(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),xn=!1,Yt=null,Z.stage5.scopeDone=!0,setTimeout(()=>Da(()=>Ua(5)),600)});return}zx(n.idx,()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.emissive.set(3066993),n.glowMat.emissiveIntensity=.2,e(),xn=!1,Yt=null,mi.every(i=>i.done)&&Z.currentLevel===1&&setTimeout(()=>Da(()=>Ua(1)),600)},()=>{e(),xn=!1,Yt=null})}function Ua(n){if(Z.completedRooms.includes(n)||Z.completedRooms.push(n),Ex(n),Sx({playerName:Z.playerName,currentLevel:n,totalPoints:Z.totalPoints,levelBreakdown:Z.levelBreakdown,completedRooms:Z.completedRooms}),Z.completedRooms.length>=5){Gx();return}_o()}function _o(){xn=!0,Yt=null,Ho(null),Hx(n=>{xn=!1,Od(n)})}function Od(n){Z.currentLevel=n,Z.pointsAtLevelStart=Z.totalPoints,n===1?Cb():n===2?Rb():n===3?Pb():n===4?Db():n===5&&Ib()}function Cb(){[ln,Di,Wn,Xn,qn].forEach(n=>{try{bt.removeFromScene(n)}catch{}}),bt.addToScene(ln),bt.position.set(0,0,12),fi=ln,qa=yd(ln),mi=qa,Eb(27,17),Yt=null,en(),Ox()}function Rb(){fi=Di,ox(),Ii=30,Ui=20,[ln,Wn,Xn,qn].forEach(n=>{try{bt.removeFromScene(n)}catch{}}),bt.addToScene(Di),bt.position.set(0,0,18),mi=[],Yt=null,en(),setTimeout(()=>Dd(()=>{setTimeout(()=>Da(()=>Ua(2)),600)}),400)}function Pb(){fi=Wn,lx(),Ii=26,Ui=21,[ln,Di,Xn,qn].forEach(n=>{try{bt.removeFromScene(n)}catch{}}),bt.addToScene(Wn),bt.position.set(0,0,16),Wo(Ba,Wn),Ba=Og(Wn),mi=[Ba],Yt=null,en()}function Db(){fi=Xn,ux(),Ii=24,Ui=18,[ln,Di,Wn,qn].forEach(n=>{try{bt.removeFromScene(n)}catch{}}),bt.addToScene(Xn),bt.position.set(0,0,14),Wo(Ha,Xn),Ha=qg(Xn),mi=[Ha],Yt=null,en()}function Ib(){fi=qn,px(),Ii=22,Ui=16,[ln,Di,Wn,Xn].forEach(n=>{try{bt.removeFromScene(n)}catch{}}),bt.addToScene(qn),bt.position.set(0,0,12),Wo(Ga,qn),Ga=tx(qn),mi=[Ga],Yt=null,en()}window.addEventListener("resize",()=>{Kn.setSize(window.innerWidth,window.innerHeight),gt.aspect=window.innerWidth/window.innerHeight,gt.updateProjectionMatrix()});Qs.addEventListener("touchstart",n=>n.preventDefault(),{passive:!1});Qs.addEventListener("touchmove",n=>n.preventDefault(),{passive:!1});Qs.addEventListener("touchend",n=>n.preventDefault(),{passive:!1});$x();function zd(){ga=!0,document.getElementById("hud").style.display="block",Ux(),en(),Nx(()=>{const n=Oo();n&&(Z.completedRooms=n.completedRooms||[],Z.totalPoints=n.totalPoints,Z.levelBreakdown=n.levelBreakdown||[],en()),_o()},()=>{location.reload()},Od),bt.addToScene(ln),bt.position.set(0,0,12),fi=ln,mi=qa,_o()}function Ub(n){Z.playerName=n.playerName,Z.totalPoints=n.totalPoints,Z.levelBreakdown=n.levelBreakdown||[],Z.completedRooms=n.completedRooms||[],Z.pointsAtLevelStart=n.totalPoints,bt.setName(Z.playerName),zd()}Cx(n=>{bt.setName(n),Rx(()=>{Dx(()=>{Ix(()=>{Rd(()=>{zd()})})})})},n=>{Ub(n)});const Nb=new _d;function Fd(){requestAnimationFrame(Fd);const n=Nb.getElapsedTime();Tb(n),bt.update(n,xn||!ga,Ab()),ga&&Lb(),Z.currentLevel===1?gg(qa,n):Z.currentLevel===3&&Ba?zg(Ba,n):Z.currentLevel===4&&Ha?$g(Ha,n):Z.currentLevel===5&&Ga&&nx(Ga,n),Kn.render(fi,gt)}Fd();
