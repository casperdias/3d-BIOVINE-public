(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const po="160",Hd=0,Vo=1,Gd=2,Pc=1,fo=2,Rn=3,ii=0,Ht=1,At=2,Zn=0,ea=1,Wo=2,Xo=3,qo=4,Vd=5,xi=100,Wd=101,Xd=102,$o=103,Yo=104,qd=200,$d=201,Yd=202,jd=203,Jr=204,Zr=205,Kd=206,Jd=207,Zd=208,Qd=209,eu=210,tu=211,nu=212,iu=213,au=214,su=0,ru=1,ou=2,As=3,lu=4,cu=5,du=6,uu=7,mo=0,hu=1,pu=2,Qn=0,fu=1,mu=2,gu=3,Dc=4,xu=5,vu=6,Ic=300,na=301,ia=302,Qr=303,eo=304,Is=306,to=1e3,fn=1001,no=1002,$t=1003,jo=1004,Js=1005,sn=1006,bu=1007,Ua=1008,ei=1009,_u=1010,yu=1011,go=1012,Uc=1013,Kn=1014,Jn=1015,Na=1016,Nc=1017,Oc=1018,bi=1020,wu=1021,mn=1023,Mu=1024,Su=1025,_i=1026,aa=1027,Eu=1028,Fc=1029,Tu=1030,zc=1031,Bc=1033,Zs=33776,Qs=33777,er=33778,tr=33779,Ko=35840,Jo=35841,Zo=35842,Qo=35843,Hc=36196,el=37492,tl=37496,nl=37808,il=37809,al=37810,sl=37811,rl=37812,ol=37813,ll=37814,cl=37815,dl=37816,ul=37817,hl=37818,pl=37819,fl=37820,ml=37821,nr=36492,gl=36494,xl=36495,Au=36283,vl=36284,bl=36285,_l=36286,Gc=3e3,yi=3001,Lu=3200,ku=3201,xo=0,Cu=1,ln="",It="srgb",zn="srgb-linear",vo="display-p3",Us="display-p3-linear",Ls="linear",mt="srgb",ks="rec709",Cs="p3",ki=7680,yl=519,Ru=512,Pu=513,Du=514,Vc=515,Iu=516,Uu=517,Nu=518,Ou=519,io=35044,wl="300 es",ao=1035,Un=2e3,Rs=2001;class ca{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ir=Math.PI/180,so=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function Fu(n,e){return(n%e+e)%e}function ar(n,e,t){return(1-t)*n+t*e}function Ml(n){return(n&n-1)===0&&n!==0}function ro(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,a,s,r,o,l,d){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,d)}set(e,t,i,a,s,r,o,l,d){const c=this.elements;return c[0]=e,c[1]=a,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=r,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],d=i[1],c=i[4],h=i[7],f=i[2],p=i[5],g=i[8],x=a[0],m=a[3],u=a[6],v=a[1],b=a[4],_=a[7],k=a[2],M=a[5],E=a[8];return s[0]=r*x+o*v+l*k,s[3]=r*m+o*b+l*M,s[6]=r*u+o*_+l*E,s[1]=d*x+c*v+h*k,s[4]=d*m+c*b+h*M,s[7]=d*u+c*_+h*E,s[2]=f*x+p*v+g*k,s[5]=f*m+p*b+g*M,s[8]=f*u+p*_+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],d=e[7],c=e[8];return t*r*c-t*o*d-i*s*c+i*o*l+a*s*d-a*r*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],d=e[7],c=e[8],h=c*r-o*d,f=o*l-c*s,p=d*s-r*l,g=t*h+i*f+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(a*d-c*i)*x,e[2]=(o*i-a*r)*x,e[3]=f*x,e[4]=(c*t-a*l)*x,e[5]=(a*s-o*t)*x,e[6]=p*x,e[7]=(i*l-d*t)*x,e[8]=(r*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,r,o){const l=Math.cos(s),d=Math.sin(s);return this.set(i*l,i*d,-i*(l*r+d*o)+r+e,-a*d,a*l,-a*(-d*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sr.makeScale(e,t)),this}rotate(e){return this.premultiply(sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sr=new Ze;function Wc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zu(){const n=Ps("canvas");return n.style.display="block",n}const Sl={};function Aa(n){n in Sl||(Sl[n]=!0,console.warn(n))}const El=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tl=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xa={[zn]:{transfer:Ls,primaries:ks,toReference:n=>n,fromReference:n=>n},[It]:{transfer:mt,primaries:ks,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Us]:{transfer:Ls,primaries:Cs,toReference:n=>n.applyMatrix3(Tl),fromReference:n=>n.applyMatrix3(El)},[vo]:{transfer:mt,primaries:Cs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Tl),fromReference:n=>n.applyMatrix3(El).convertLinearToSRGB()}},Bu=new Set([zn,Us]),ct={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Bu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Xa[e].toReference,a=Xa[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xa[n].primaries},getTransfer:function(n){return n===ln?Ls:Xa[n].transfer}};function ta(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ci;class Xc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ci===void 0&&(Ci=Ps("canvas")),Ci.width=e.width,Ci.height=e.height;const i=Ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ta(s[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ta(t[i]/255)*255):t[i]=ta(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hu=0;class qc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(or(a[r].image)):s.push(or(a[r]))}else s=or(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function or(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gu=0;class Zt extends ca{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=fn,a=fn,s=sn,r=Ua,o=mn,l=ei,d=Zt.DEFAULT_ANISOTROPY,c=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=ti(),this.name="",this.source=new qc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===yi?It:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case to:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case to:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?yi:Gc}set encoding(e){Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yi?It:ln}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Ic;Zt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,a=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const l=e.elements,d=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(d+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,_=(p+1)/2,k=(u+1)/2,M=(c+f)/4,E=(h+x)/4,I=(g+m)/4;return b>_&&b>k?b<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(b),a=M/i,s=E/i):_>k?_<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(_),i=M/a,s=I/a):k<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(k),i=E/s,a=I/s),this.set(i,a,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-c)/v,this.w=Math.acos((d+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends ca{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(Aa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yi?It:ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Zt(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Vu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $c extends Zt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$t,this.minFilter=$t,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wu extends Zt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$t,this.minFilter=$t,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,r,o){let l=i[a+0],d=i[a+1],c=i[a+2],h=i[a+3];const f=s[r+0],p=s[r+1],g=s[r+2],x=s[r+3];if(o===0){e[t+0]=l,e[t+1]=d,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||d!==p||c!==g){let m=1-o;const u=l*f+d*p+c*g+h*x,v=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const k=Math.sqrt(b),M=Math.atan2(k,u*v);m=Math.sin(m*M)/k,o=Math.sin(o*M)/k}const _=o*v;if(l=l*m+f*_,d=d*m+p*_,c=c*m+g*_,h=h*m+x*_,m===1-o){const k=1/Math.sqrt(l*l+d*d+c*c+h*h);l*=k,d*=k,c*=k,h*=k}}e[t]=l,e[t+1]=d,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,a,s,r){const o=i[a],l=i[a+1],d=i[a+2],c=i[a+3],h=s[r],f=s[r+1],p=s[r+2],g=s[r+3];return e[t]=o*g+c*h+l*p-d*f,e[t+1]=l*g+c*f+d*h-o*p,e[t+2]=d*g+c*p+o*f-l*h,e[t+3]=c*g-o*h-l*f-d*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,d=o(i/2),c=o(a/2),h=o(s/2),f=l(i/2),p=l(a/2),g=l(s/2);switch(r){case"XYZ":this._x=f*c*h+d*p*g,this._y=d*p*h-f*c*g,this._z=d*c*g+f*p*h,this._w=d*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+d*p*g,this._y=d*p*h-f*c*g,this._z=d*c*g-f*p*h,this._w=d*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-d*p*g,this._y=d*p*h+f*c*g,this._z=d*c*g+f*p*h,this._w=d*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-d*p*g,this._y=d*p*h+f*c*g,this._z=d*c*g-f*p*h,this._w=d*c*h+f*p*g;break;case"YZX":this._x=f*c*h+d*p*g,this._y=d*p*h+f*c*g,this._z=d*c*g-f*p*h,this._w=d*c*h-f*p*g;break;case"XZY":this._x=f*c*h-d*p*g,this._y=d*p*h-f*c*g,this._z=d*c*g+f*p*h,this._w=d*c*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],d=t[2],c=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-d)*p,this._z=(r-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(c-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+d)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-d)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(r-a)/p,this._x=(s+d)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,d=t._z,c=t._w;return this._x=i*c+r*o+a*d-s*l,this._y=a*c+r*l+s*o-i*d,this._z=s*c+r*d+i*l-a*o,this._w=r*c-i*o-a*l-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*i+t*this._x,this._y=p*a+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const d=Math.sqrt(l),c=Math.atan2(d,o),h=Math.sin((1-t)*c)/d,f=Math.sin(t*c)/d;return this._w=r*h+this._w*f,this._x=i*h+this._x*f,this._y=a*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,d=2*(r*a-o*i),c=2*(o*t-s*a),h=2*(s*i-r*t);return this.x=t+l*d+r*h-o*c,this.y=i+l*c+o*d-s*h,this.z=a+l*h+s*c-r*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lr.copy(this).projectOnVector(e),this.sub(lr)}reflect(e){return this.sub(lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lr=new L,Al=new Fa;class za{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,dn):dn.fromBufferAttribute(s,r),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),$a.subVectors(this.max,fa),Ri.subVectors(e.a,fa),Pi.subVectors(e.b,fa),Di.subVectors(e.c,fa),Vn.subVectors(Pi,Ri),Wn.subVectors(Di,Pi),di.subVectors(Ri,Di);let t=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-di.z,di.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,di.z,0,-di.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-di.y,di.x,0];return!cr(t,Ri,Pi,Di,$a)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Ri,Pi,Di,$a))?!1:(Ya.crossVectors(Vn,Wn),t=[Ya.x,Ya.y,Ya.z],cr(t,Ri,Pi,Di,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,qa=new za,Ri=new L,Pi=new L,Di=new L,Vn=new L,Wn=new L,di=new L,fa=new L,$a=new L,Ya=new L,ui=new L;function cr(n,e,t,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){ui.fromArray(n,s);const o=a.x*Math.abs(ui.x)+a.y*Math.abs(ui.y)+a.z*Math.abs(ui.z),l=e.dot(ui),d=t.dot(ui),c=i.dot(ui);if(Math.max(-Math.max(l,d,c),Math.min(l,d,c))>o)return!1}return!0}const Xu=new za,ma=new L,dr=new L;class Ns{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xu.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(ma,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(dr)),this.expandByPoint(ma.copy(e.center).sub(dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new L,ur=new L,ja=new L,Xn=new L,hr=new L,Ka=new L,pr=new L;class Yc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ur.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(ur);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ja),o=Xn.dot(this.direction),l=-Xn.dot(ja),d=Xn.lengthSq(),c=Math.abs(1-r*r);let h,f,p,g;if(c>0)if(h=r*l-o,f=r*o-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const x=1/c;h*=x,f*=x,p=h*(h+r*f+2*o)+f*(r*h+f+2*l)+d}else f=s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+d;else f=-s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+d;else f<=-g?(h=Math.max(0,-(-r*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+d):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+d):(h=Math.max(0,-(r*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+d);else f=r>0?-s:s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(ur).addScaledVector(ja,f),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),a=An.dot(An)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,r,o,l;const d=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return d>=0?(i=(e.min.x-f.x)*d,a=(e.max.x-f.x)*d):(i=(e.max.x-f.x)*d,a=(e.min.x-f.x)*d),c>=0?(s=(e.min.y-f.y)*c,r=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,r=(e.min.y-f.y)*c),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,a,s){hr.subVectors(t,e),Ka.subVectors(i,e),pr.crossVectors(hr,Ka);let r=this.direction.dot(pr),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Xn.subVectors(this.origin,e);const l=o*this.direction.dot(Ka.crossVectors(Xn,Ka));if(l<0)return null;const d=o*this.direction.dot(hr.cross(Xn));if(d<0||l+d>r)return null;const c=-o*Xn.dot(pr);return c<0?null:this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,a,s,r,o,l,d,c,h,f,p,g,x,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,d,c,h,f,p,g,x,m)}set(e,t,i,a,s,r,o,l,d,c,h,f,p,g,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=d,u[6]=c,u[10]=h,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),r=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),d=Math.sin(a),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=r*c,p=r*h,g=o*c,x=o*h;t[0]=l*c,t[4]=-l*h,t[8]=d,t[1]=p+g*d,t[5]=f-x*d,t[9]=-o*l,t[2]=x-f*d,t[6]=g+p*d,t[10]=r*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,g=d*c,x=d*h;t[0]=f+x*o,t[4]=g*o-p,t[8]=r*d,t[1]=r*h,t[5]=r*c,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,g=d*c,x=d*h;t[0]=f-x*o,t[4]=-r*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*c,t[9]=x-f*o,t[2]=-r*d,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*c,p=r*h,g=o*c,x=o*h;t[0]=l*c,t[4]=g*d-p,t[8]=f*d+x,t[1]=l*h,t[5]=x*d+f,t[9]=p*d-g,t[2]=-d,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,p=r*d,g=o*l,x=o*d;t[0]=l*c,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=r*c,t[9]=-o*c,t[2]=-d*c,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=r*l,p=r*d,g=o*l,x=o*d;t[0]=l*c,t[4]=-h,t[8]=d*c,t[1]=f*h+x,t[5]=r*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*c,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qu,e,$u)}lookAt(e,t,i){const a=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),qn.crossVectors(i,en),qn.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),qn.crossVectors(i,en)),qn.normalize(),Ja.crossVectors(en,qn),a[0]=qn.x,a[4]=Ja.x,a[8]=en.x,a[1]=qn.y,a[5]=Ja.y,a[9]=en.y,a[2]=qn.z,a[6]=Ja.z,a[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],d=i[12],c=i[1],h=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],v=i[3],b=i[7],_=i[11],k=i[15],M=a[0],E=a[4],I=a[8],y=a[12],T=a[1],N=a[5],H=a[9],se=a[13],P=a[2],F=a[6],X=a[10],ne=a[14],$=a[3],K=a[7],J=a[11],V=a[15];return s[0]=r*M+o*T+l*P+d*$,s[4]=r*E+o*N+l*F+d*K,s[8]=r*I+o*H+l*X+d*J,s[12]=r*y+o*se+l*ne+d*V,s[1]=c*M+h*T+f*P+p*$,s[5]=c*E+h*N+f*F+p*K,s[9]=c*I+h*H+f*X+p*J,s[13]=c*y+h*se+f*ne+p*V,s[2]=g*M+x*T+m*P+u*$,s[6]=g*E+x*N+m*F+u*K,s[10]=g*I+x*H+m*X+u*J,s[14]=g*y+x*se+m*ne+u*V,s[3]=v*M+b*T+_*P+k*$,s[7]=v*E+b*N+_*F+k*K,s[11]=v*I+b*H+_*X+k*J,s[15]=v*y+b*se+_*ne+k*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],d=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*l*h-a*d*h-s*o*f+i*d*f+a*o*p-i*l*p)+x*(+t*l*p-t*d*f+s*r*f-a*r*p+a*d*c-s*l*c)+m*(+t*d*h-t*o*p-s*r*h+i*r*p+s*o*c-i*d*c)+u*(-a*o*c-t*l*h+t*o*f+a*r*h-i*r*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],d=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],v=h*m*d-x*f*d+x*l*p-o*m*p-h*l*u+o*f*u,b=g*f*d-c*m*d-g*l*p+r*m*p+c*l*u-r*f*u,_=c*x*d-g*h*d+g*o*p-r*x*p-c*o*u+r*h*u,k=g*h*l-c*x*l-g*o*f+r*x*f+c*o*m-r*h*m,M=t*v+i*b+a*_+s*k;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=v*E,e[1]=(x*f*s-h*m*s-x*a*p+i*m*p+h*a*u-i*f*u)*E,e[2]=(o*m*s-x*l*s+x*a*d-i*m*d-o*a*u+i*l*u)*E,e[3]=(h*l*s-o*f*s-h*a*d+i*f*d+o*a*p-i*l*p)*E,e[4]=b*E,e[5]=(c*m*s-g*f*s+g*a*p-t*m*p-c*a*u+t*f*u)*E,e[6]=(g*l*s-r*m*s-g*a*d+t*m*d+r*a*u-t*l*u)*E,e[7]=(r*f*s-c*l*s+c*a*d-t*f*d-r*a*p+t*l*p)*E,e[8]=_*E,e[9]=(g*h*s-c*x*s-g*i*p+t*x*p+c*i*u-t*h*u)*E,e[10]=(r*x*s-g*o*s+g*i*d-t*x*d-r*i*u+t*o*u)*E,e[11]=(c*o*s-r*h*s-c*i*d+t*h*d+r*i*p-t*o*p)*E,e[12]=k*E,e[13]=(c*x*a-g*h*a+g*i*f-t*x*f-c*i*m+t*h*m)*E,e[14]=(g*o*a-r*x*a-g*i*l+t*x*l+r*i*m-t*o*m)*E,e[15]=(r*h*a-c*o*a+c*i*l-t*h*l-r*i*f+t*o*f)*E,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,d=s*r,c=s*o;return this.set(d*r+i,d*o-a*l,d*l+a*o,0,d*o+a*l,c*o+i,c*l-a*r,0,d*l-a*o,c*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,d=s+s,c=r+r,h=o+o,f=s*d,p=s*c,g=s*h,x=r*c,m=r*h,u=o*h,v=l*d,b=l*c,_=l*h,k=i.x,M=i.y,E=i.z;return a[0]=(1-(x+u))*k,a[1]=(p+_)*k,a[2]=(g-b)*k,a[3]=0,a[4]=(p-_)*M,a[5]=(1-(f+u))*M,a[6]=(m+v)*M,a[7]=0,a[8]=(g+b)*E,a[9]=(m-v)*E,a[10]=(1-(f+x))*E,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=Ii.set(a[0],a[1],a[2]).length();const r=Ii.set(a[4],a[5],a[6]).length(),o=Ii.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],un.copy(this);const d=1/s,c=1/r,h=1/o;return un.elements[0]*=d,un.elements[1]*=d,un.elements[2]*=d,un.elements[4]*=c,un.elements[5]*=c,un.elements[6]*=c,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),i.x=s,i.y=r,i.z=o,this}makePerspective(e,t,i,a,s,r,o=Un){const l=this.elements,d=2*s/(t-e),c=2*s/(i-a),h=(t+e)/(t-e),f=(i+a)/(i-a);let p,g;if(o===Un)p=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===Rs)p=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,r,o=Un){const l=this.elements,d=1/(t-e),c=1/(i-a),h=1/(r-s),f=(t+e)*d,p=(i+a)*c;let g,x;if(o===Un)g=(r+s)*h,x=-2*h;else if(o===Rs)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ii=new L,un=new bt,qu=new L(0,0,0),$u=new L(1,1,1),qn=new L,Ja=new L,en=new L,Ll=new bt,kl=new Fa;class Os{constructor(e=0,t=0,i=0,a=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],d=a[5],c=a[9],h=a[2],f=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,d)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,d));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ll,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yu=0;const Cl=new L,Ui=new Fa,Ln=new bt,Za=new L,ga=new L,ju=new L,Ku=new Fa,Rl=new L(1,0,0),Pl=new L(0,1,0),Dl=new L(0,0,1),Ju={type:"added"},Zu={type:"removed"};class Lt extends ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new L,t=new Os,i=new Fa,a=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ze}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Za.copy(e):Za.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ga,Za,this.up):Ln.lookAt(Za,ga,this.up),this.quaternion.setFromRotationMatrix(Ln),a&&(Ln.extractRotation(a.matrixWorld),Ui.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ju)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,ju),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++){const o=a[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let d=0,c=l.length;d<c;d++){const h=l[d];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,d=this.material.length;l<d;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),d=r(e.textures),c=r(e.images),h=r(e.shapes),f=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),d.length>0&&(i.textures=d),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(o){const l=[];for(const d in o){const c=o[d];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Lt.DEFAULT_UP=new L(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new L,kn=new L,fr=new L,Cn=new L,Ni=new L,Oi=new L,Il=new L,mr=new L,gr=new L,xr=new L;let Qa=!1;class rn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),hn.subVectors(e,t),a.cross(hn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){hn.subVectors(a,t),kn.subVectors(i,t),fr.subVectors(e,t);const r=hn.dot(hn),o=hn.dot(kn),l=hn.dot(fr),d=kn.dot(kn),c=kn.dot(fr),h=r*d-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(d*l-o*c)*f,g=(r*c-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,i,a,s,r,o,l){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),this.getInterpolation(e,t,i,a,s,r,o,l)}static getInterpolation(e,t,i,a,s,r,o,l){return this.getBarycoord(e,t,i,a,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(r,Cn.y),l.addScaledVector(o,Cn.z),l)}static isFrontFacing(e,t,i,a){return hn.subVectors(i,t),kn.subVectors(e,t),hn.cross(kn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),hn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),rn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}getInterpolation(e,t,i,a,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let r,o;Ni.subVectors(a,i),Oi.subVectors(s,i),mr.subVectors(e,i);const l=Ni.dot(mr),d=Oi.dot(mr);if(l<=0&&d<=0)return t.copy(i);gr.subVectors(e,a);const c=Ni.dot(gr),h=Oi.dot(gr);if(c>=0&&h<=c)return t.copy(a);const f=l*h-c*d;if(f<=0&&l>=0&&c<=0)return r=l/(l-c),t.copy(i).addScaledVector(Ni,r);xr.subVectors(e,s);const p=Ni.dot(xr),g=Oi.dot(xr);if(g>=0&&p<=g)return t.copy(s);const x=p*d-l*g;if(x<=0&&d>=0&&g<=0)return o=d/(d-g),t.copy(i).addScaledVector(Oi,o);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return Il.subVectors(s,a),o=(h-c)/(h-c+(p-g)),t.copy(a).addScaledVector(Il,o);const u=1/(m+x+f);return r=x*u,o=f*u,t.copy(i).addScaledVector(Ni,r).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},es={h:0,s:0,l:0};function vr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=ct.workingColorSpace){if(e=Fu(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=vr(r,s,e+1/3),this.g=vr(r,s,e),this.b=vr(r,s,e-1/3)}return ct.toWorkingColorSpace(this,a),this}setStyle(e,t=It){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=Kc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return ct.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Nt(Bt.r*255,0,255))*65536+Math.round(Nt(Bt.g*255,0,255))*256+Math.round(Nt(Bt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,a=Bt.g,s=Bt.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,d;const c=(o+r)/2;if(o===r)l=0,d=0;else{const h=r-o;switch(d=c<=.5?h/(r+o):h/(2-r-o),r){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4;break}l/=6}return e.h=l,e.s=d,e.l=c,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=It){ct.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,a=Bt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(es);const i=ar($n.h,es.h,t),a=ar($n.s,es.s,t),s=ar($n.l,es.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ge;Ge.NAMES=Kc;let Qu=0;class ai extends ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=ea,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Zr,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jr&&(i.blendSrc=this.blendSrc),this.blendDst!==Zr&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wt extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new L,ts=new we;class gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),e}}class Jc extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zc extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let eh=0;const an=new bt,br=new Lt,Fi=new L,tn=new za,xa=new za,Dt=new L;class xt extends ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wc(e)?Zc:Jc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return br.lookAt(e),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(tn.min,xa.min),tn.expandByPoint(Dt),Dt.addVectors(tn.max,xa.max),tn.expandByPoint(Dt)):(tn.expandByPoint(xa.min),tn.expandByPoint(xa.max))}tn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Dt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Dt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let d=0,c=o.count;d<c;d++)Dt.fromBufferAttribute(o,d),l&&(Fi.fromBufferAttribute(e,d),Dt.add(Fi)),a=Math.max(a,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,s=t.normal.array,r=t.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,d=[],c=[];for(let T=0;T<o;T++)d[T]=new L,c[T]=new L;const h=new L,f=new L,p=new L,g=new we,x=new we,m=new we,u=new L,v=new L;function b(T,N,H){h.fromArray(a,T*3),f.fromArray(a,N*3),p.fromArray(a,H*3),g.fromArray(r,T*2),x.fromArray(r,N*2),m.fromArray(r,H*2),f.sub(h),p.sub(h),x.sub(g),m.sub(g);const se=1/(x.x*m.y-m.x*x.y);isFinite(se)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(se),v.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(se),d[T].add(u),d[N].add(u),d[H].add(u),c[T].add(v),c[N].add(v),c[H].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let T=0,N=_.length;T<N;++T){const H=_[T],se=H.start,P=H.count;for(let F=se,X=se+P;F<X;F+=3)b(i[F+0],i[F+1],i[F+2])}const k=new L,M=new L,E=new L,I=new L;function y(T){E.fromArray(s,T*3),I.copy(E);const N=d[T];k.copy(N),k.sub(E.multiplyScalar(E.dot(N))).normalize(),M.crossVectors(I,N);const se=M.dot(c[T])<0?-1:1;l[T*4]=k.x,l[T*4+1]=k.y,l[T*4+2]=k.z,l[T*4+3]=se}for(let T=0,N=_.length;T<N;++T){const H=_[T],se=H.start,P=H.count;for(let F=se,X=se+P;F<X;F+=3)y(i[F+0]),y(i[F+1]),y(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new L,s=new L,r=new L,o=new L,l=new L,d=new L,c=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),c.subVectors(r,s),h.subVectors(a,s),c.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),d.fromBufferAttribute(i,m),o.add(c),l.add(c),d.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let f=0,p=t.count;f<p;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),c.subVectors(r,s),h.subVectors(a,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const d=o.array,c=o.itemSize,h=o.normalized,f=new d.constructor(l.length*c);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*c;for(let u=0;u<c;u++)f[g++]=d[p++]}return new gn(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],d=e(l,i);t.setAttribute(o,d)}const s=this.morphAttributes;for(const o in s){const l=[],d=s[o];for(let c=0,h=d.length;c<h;c++){const f=d[c],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const d=r[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const d=i[l];e.data.attributes[l]=d.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],c=[];for(let h=0,f=d.length;h<f;h++){const p=d[h];c.push(p.toJSON(e.data))}c.length>0&&(a[l]=c,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const d in a){const c=a[d];this.setAttribute(d,c.clone(t))}const s=e.morphAttributes;for(const d in s){const c=[],h=s[d];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[d]=c}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let d=0,c=r.length;d<c;d++){const h=r[d];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new bt,hi=new Yc,ns=new Ns,Nl=new L,zi=new L,Bi=new L,Hi=new L,_r=new L,is=new L,as=new we,ss=new we,rs=new we,Ol=new L,Fl=new L,zl=new L,os=new L,ls=new L;class C extends Lt{constructor(e=new xt,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){is.set(0,0,0);for(let l=0,d=s.length;l<d;l++){const c=o[l],h=s[l];c!==0&&(_r.fromBufferAttribute(h,e),r?is.addScaledVector(_r,c):is.addScaledVector(_r.sub(t),c))}t.add(is)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(ns.containsPoint(hi.origin)===!1&&(hi.intersectSphere(ns,Nl)===null||hi.origin.distanceToSquared(Nl)>(e.far-e.near)**2))&&(Ul.copy(s).invert(),hi.copy(e.ray).applyMatrix4(Ul),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,d=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=r[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,k=b;_<k;_+=3){const M=o.getX(_),E=o.getX(_+1),I=o.getX(_+2);a=cs(this,u,e,i,d,c,h,M,E,I),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const v=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);a=cs(this,r,e,i,d,c,h,v,b,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=r[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,k=b;_<k;_+=3){const M=_,E=_+1,I=_+2;a=cs(this,u,e,i,d,c,h,M,E,I),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const v=m,b=m+1,_=m+2;a=cs(this,r,e,i,d,c,h,v,b,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function th(n,e,t,i,a,s,r,o){let l;if(e.side===Ht?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===ii,o),l===null)return null;ls.copy(o),ls.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(ls);return d<t.near||d>t.far?null:{distance:d,point:ls.clone(),object:n}}function cs(n,e,t,i,a,s,r,o,l,d){n.getVertexPosition(o,zi),n.getVertexPosition(l,Bi),n.getVertexPosition(d,Hi);const c=th(n,e,t,i,zi,Bi,Hi,os);if(c){a&&(as.fromBufferAttribute(a,o),ss.fromBufferAttribute(a,l),rs.fromBufferAttribute(a,d),c.uv=rn.getInterpolation(os,zi,Bi,Hi,as,ss,rs,new we)),s&&(as.fromBufferAttribute(s,o),ss.fromBufferAttribute(s,l),rs.fromBufferAttribute(s,d),c.uv1=rn.getInterpolation(os,zi,Bi,Hi,as,ss,rs,new we),c.uv2=c.uv1),r&&(Ol.fromBufferAttribute(r,o),Fl.fromBufferAttribute(r,l),zl.fromBufferAttribute(r,d),c.normal=rn.getInterpolation(os,zi,Bi,Hi,Ol,Fl,zl,new L),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:l,c:d,normal:new L,materialIndex:0};rn.getNormal(zi,Bi,Hi,h.normal),c.face=h}return c}class oe extends xt{constructor(e=1,t=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],d=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,a,r,2),g("x","z","y",1,-1,e,i,-t,a,r,3),g("x","y","z",1,-1,e,t,i,a,s,4),g("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(h,2));function g(x,m,u,v,b,_,k,M,E,I,y){const T=_/E,N=k/I,H=_/2,se=k/2,P=M/2,F=E+1,X=I+1;let ne=0,$=0;const K=new L;for(let J=0;J<X;J++){const V=J*N-se;for(let Z=0;Z<F;Z++){const O=Z*T-H;K[x]=O*v,K[m]=V*b,K[u]=P,d.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[u]=M>0?1:-1,c.push(K.x,K.y,K.z),h.push(Z/E),h.push(1-J/I),ne+=1}}for(let J=0;J<I;J++)for(let V=0;V<E;V++){const Z=f+V+F*J,O=f+V+F*(J+1),te=f+(V+1)+F*(J+1),Y=f+(V+1)+F*J;l.push(Z,O,Y),l.push(O,te,Y),$+=6}o.addGroup(p,$,y),p+=$,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=sa(n[t]);for(const a in i)e[a]=i[a]}return e}function nh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qc(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}const ih={clone:sa,merge:qt};var ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ah,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ed extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends ed{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=so*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return so*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,d=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*i/d,a*=r.width/l,i*=r.height/d}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Vi=1;class rh extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kt(Gi,Vi,e,t);a.layers=this.layers,this.add(a);const s=new Kt(Gi,Vi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Gi,Vi,e,t);r.layers=this.layers,this.add(r);const o=new Kt(Gi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Gi,Vi,e,t);l.layers=this.layers,this.add(l);const d=new Kt(Gi,Vi,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,r,o,l]=t;for(const d of t)this.remove(d);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,d,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,r),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,a),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class td extends Zt{constructor(e,t,i,a,s,r,o,l,d,c){e=e!==void 0?e:[],t=t!==void 0?t:na,super(e,t,i,a,s,r,o,l,d,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oh extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(Aa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yi?It:ln),this.texture=new td(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new oe(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Zn});s.uniforms.tEquirect.value=t;const r=new C(a,s),o=t.minFilter;return t.minFilter===Ua&&(t.minFilter=sn),new rh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(s)}}const yr=new L,lh=new L,ch=new Ze;class mi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=yr.subVectors(i,t).cross(lh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yr),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ch.getNormalMatrix(e),a=this.coplanarPoint(yr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Ns,ds=new L;class bo{constructor(e=new mi,t=new mi,i=new mi,a=new mi,s=new mi,r=new mi){this.planes=[e,t,i,a,s,r]}set(e,t,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],l=a[3],d=a[4],c=a[5],h=a[6],f=a[7],p=a[8],g=a[9],x=a[10],m=a[11],u=a[12],v=a[13],b=a[14],_=a[15];if(i[0].setComponents(l-s,f-d,m-p,_-u).normalize(),i[1].setComponents(l+s,f+d,m+p,_+u).normalize(),i[2].setComponents(l+r,f+c,m+g,_+v).normalize(),i[3].setComponents(l-r,f-c,m-g,_-v).normalize(),i[4].setComponents(l-o,f-h,m-x,_-b).normalize(),t===Un)i[5].setComponents(l+o,f+h,m+x,_+b).normalize();else if(t===Rs)i[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(ds.x=a.normal.x>0?e.max.x:e.min.x,ds.y=a.normal.y>0?e.max.y:e.min.y,ds.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nd(){let n=null,e=!1,t=null,i=null;function a(s,r){t(s,r),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dh(n,e){const t=e.isWebGL2,i=new WeakMap;function a(d,c){const h=d.array,f=d.usage,p=h.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,h,f),d.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:p}}function s(d,c,h){const f=c.array,p=c._updateRange,g=c.updateRanges;if(n.bindBuffer(h,d),p.count===-1&&g.length===0&&n.bufferSubData(h,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){const u=g[x];t?n.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function r(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const c=i.get(d);c&&(n.deleteBuffer(c.buffer),i.delete(d))}function l(d,c){if(d.isGLBufferAttribute){const f=i.get(d);(!f||f.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const h=i.get(d);if(h===void 0)i.set(d,a(d,c));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,d,c),h.version=d.version}}return{get:r,remove:o,update:l}}class _t extends xt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(a),d=o+1,c=l+1,h=e/o,f=t/l,p=[],g=[],x=[],m=[];for(let u=0;u<c;u++){const v=u*f-r;for(let b=0;b<d;b++){const _=b*h-s;g.push(_,-v,0),x.push(0,0,1),m.push(b/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const b=v+d*u,_=v+d*(u+1),k=v+1+d*(u+1),M=v+1+d*u;p.push(b,_,M),p.push(_,k,M)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.widthSegments,e.heightSegments)}}var uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hh=`#ifdef USE_ALPHAHASH
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
#endif`,ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
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
#endif`,vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
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
#endif`,_h=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sh=`#ifdef USE_IRIDESCENCE
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
#endif`,Eh=`#ifdef USE_BUMPMAP
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
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ih=`#define PI 3.141592653589793
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
} // validated`,Uh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nh=`vec3 transformedNormal = objectNormal;
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
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`
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
}`,Vh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,Yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zh=`#ifdef USE_GRADIENTMAP
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
}`,Qh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,dp=`struct PhysicalMaterial {
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
}`,up=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yp=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
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
#endif`,Tp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
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
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
}`,hf=`uniform sampler2D t2D;
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
}`,pf=`varying vec3 vWorldDirection;
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
}`,vf=`#if DEPTH_PACKING == 3200
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
}`,bf=`#define DISTANCE
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
}`,Lf=`#define LAMBERT
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
}`,kf=`#define MATCAP
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
}`,Ff=`#define TOON
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
}`,zf=`uniform float size;
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
}`,Ye={alphahash_fragment:uh,alphahash_pars_fragment:hh,alphamap_fragment:ph,alphamap_pars_fragment:fh,alphatest_fragment:mh,alphatest_pars_fragment:gh,aomap_fragment:xh,aomap_pars_fragment:vh,batching_pars_vertex:bh,batching_vertex:_h,begin_vertex:yh,beginnormal_vertex:wh,bsdfs:Mh,iridescence_fragment:Sh,bumpmap_pars_fragment:Eh,clipping_planes_fragment:Th,clipping_planes_pars_fragment:Ah,clipping_planes_pars_vertex:Lh,clipping_planes_vertex:kh,color_fragment:Ch,color_pars_fragment:Rh,color_pars_vertex:Ph,color_vertex:Dh,common:Ih,cube_uv_reflection_fragment:Uh,defaultnormal_vertex:Nh,displacementmap_pars_vertex:Oh,displacementmap_vertex:Fh,emissivemap_fragment:zh,emissivemap_pars_fragment:Bh,colorspace_fragment:Hh,colorspace_pars_fragment:Gh,envmap_fragment:Vh,envmap_common_pars_fragment:Wh,envmap_pars_fragment:Xh,envmap_pars_vertex:qh,envmap_physical_pars_fragment:ap,envmap_vertex:$h,fog_vertex:Yh,fog_pars_vertex:jh,fog_fragment:Kh,fog_pars_fragment:Jh,gradientmap_pars_fragment:Zh,lightmap_fragment:Qh,lightmap_pars_fragment:ep,lights_lambert_fragment:tp,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:sp,lights_toon_pars_fragment:rp,lights_phong_fragment:op,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:dp,lights_fragment_begin:up,lights_fragment_maps:hp,lights_fragment_end:pp,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:xp,map_fragment:vp,map_pars_fragment:bp,map_particle_fragment:_p,map_particle_pars_fragment:yp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Mp,morphcolor_vertex:Sp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:Ap,normal_fragment_begin:Lp,normal_fragment_maps:kp,normal_pars_fragment:Cp,normal_pars_vertex:Rp,normal_vertex:Pp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Op,opaque_fragment:Fp,packing:zp,premultiplied_alpha_fragment:Bp,project_vertex:Hp,dithering_fragment:Gp,dithering_pars_fragment:Vp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:$p,shadowmap_vertex:Yp,shadowmask_pars_fragment:jp,skinbase_vertex:Kp,skinning_pars_vertex:Jp,skinning_vertex:Zp,skinnormal_vertex:Qp,specularmap_fragment:ef,specularmap_pars_fragment:tf,tonemapping_fragment:nf,tonemapping_pars_fragment:af,transmission_fragment:sf,transmission_pars_fragment:rf,uv_pars_fragment:of,uv_pars_vertex:lf,uv_vertex:cf,worldpos_vertex:df,background_vert:uf,background_frag:hf,backgroundCube_vert:pf,backgroundCube_frag:ff,cube_vert:mf,cube_frag:gf,depth_vert:xf,depth_frag:vf,distanceRGBA_vert:bf,distanceRGBA_frag:_f,equirect_vert:yf,equirect_frag:wf,linedashed_vert:Mf,linedashed_frag:Sf,meshbasic_vert:Ef,meshbasic_frag:Tf,meshlambert_vert:Af,meshlambert_frag:Lf,meshmatcap_vert:kf,meshmatcap_frag:Cf,meshnormal_vert:Rf,meshnormal_frag:Pf,meshphong_vert:Df,meshphong_frag:If,meshphysical_vert:Uf,meshphysical_frag:Nf,meshtoon_vert:Of,meshtoon_frag:Ff,points_vert:zf,points_frag:Bf,shadow_vert:Hf,shadow_frag:Gf,sprite_vert:Vf,sprite_frag:Wf},xe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},bn={basic:{uniforms:qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:qt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:qt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:qt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:qt([xe.points,xe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:qt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:qt([xe.common,xe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:qt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:qt([xe.sprite,xe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:qt([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:qt([xe.lights,xe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};bn.physical={uniforms:qt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const us={r:0,b:0,g:0};function Xf(n,e,t,i,a,s,r){const o=new Ge(0);let l=s===!0?0:1,d,c,h=null,f=0,p=null;function g(m,u){let v=!1,b=u.isScene===!0?u.background:null;b&&b.isTexture&&(b=(u.backgroundBlurriness>0?t:e).get(b)),b===null?x(o,l):b&&b.isColor&&(x(b,1),v=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Is)?(c===void 0&&(c=new C(new oe(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:sa(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(k,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ct.getTransfer(b.colorSpace)!==mt,(h!==b||f!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new C(new _t(2,2),new Mi({name:"BackgroundMaterial",uniforms:sa(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=ct.getTransfer(b.colorSpace)!==mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,h=b,f=b.version,p=n.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function x(m,u){m.getRGB(us,Qc(n)),i.buffers.color.setClear(us.r,us.g,us.b,u,r)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function qf(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,o={},l=m(null);let d=l,c=!1;function h(P,F,X,ne,$){let K=!1;if(r){const J=x(ne,X,F);d!==J&&(d=J,p(d.object)),K=u(P,ne,X,$),K&&v(P,ne,X,$)}else{const J=F.wireframe===!0;(d.geometry!==ne.id||d.program!==X.id||d.wireframe!==J)&&(d.geometry=ne.id,d.program=X.id,d.wireframe=J,K=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(K||c)&&(c=!1,I(P,F,X,ne),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,F,X){const ne=X.wireframe===!0;let $=o[P.id];$===void 0&&($={},o[P.id]=$);let K=$[F.id];K===void 0&&(K={},$[F.id]=K);let J=K[ne];return J===void 0&&(J=m(f()),K[ne]=J),J}function m(P){const F=[],X=[],ne=[];for(let $=0;$<a;$++)F[$]=0,X[$]=0,ne[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:ne,object:P,attributes:{},index:null}}function u(P,F,X,ne){const $=d.attributes,K=F.attributes;let J=0;const V=X.getAttributes();for(const Z in V)if(V[Z].location>=0){const te=$[Z];let Y=K[Z];if(Y===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),te===void 0||te.attribute!==Y||Y&&te.data!==Y.data)return!0;J++}return d.attributesNum!==J||d.index!==ne}function v(P,F,X,ne){const $={},K=F.attributes;let J=0;const V=X.getAttributes();for(const Z in V)if(V[Z].location>=0){let te=K[Z];te===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const Y={};Y.attribute=te,te&&te.data&&(Y.data=te.data),$[Z]=Y,J++}d.attributes=$,d.attributesNum=J,d.index=ne}function b(){const P=d.newAttributes;for(let F=0,X=P.length;F<X;F++)P[F]=0}function _(P){k(P,0)}function k(P,F){const X=d.newAttributes,ne=d.enabledAttributes,$=d.attributeDivisors;X[P]=1,ne[P]===0&&(n.enableVertexAttribArray(P),ne[P]=1),$[P]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),$[P]=F)}function M(){const P=d.newAttributes,F=d.enabledAttributes;for(let X=0,ne=F.length;X<ne;X++)F[X]!==P[X]&&(n.disableVertexAttribArray(X),F[X]=0)}function E(P,F,X,ne,$,K,J){J===!0?n.vertexAttribIPointer(P,F,X,$,K):n.vertexAttribPointer(P,F,X,ne,$,K)}function I(P,F,X,ne){if(i.isWebGL2===!1&&(P.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const $=ne.attributes,K=X.getAttributes(),J=F.defaultAttributeValues;for(const V in K){const Z=K[V];if(Z.location>=0){let O=$[V];if(O===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),O!==void 0){const te=O.normalized,Y=O.itemSize,me=t.get(O);if(me===void 0)continue;const fe=me.buffer,Ce=me.type,Ue=me.bytesPerElement,Ne=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||O.gpuType===Uc);if(O.isInterleavedBufferAttribute){const et=O.data,z=et.stride,Rt=O.offset;if(et.isInstancedInterleavedBuffer){for(let De=0;De<Z.locationSize;De++)k(Z.location+De,et.meshPerAttribute);P.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let De=0;De<Z.locationSize;De++)_(Z.location+De);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let De=0;De<Z.locationSize;De++)E(Z.location+De,Y/Z.locationSize,Ce,te,z*Ue,(Rt+Y/Z.locationSize*De)*Ue,Ne)}else{if(O.isInstancedBufferAttribute){for(let et=0;et<Z.locationSize;et++)k(Z.location+et,O.meshPerAttribute);P.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let et=0;et<Z.locationSize;et++)_(Z.location+et);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let et=0;et<Z.locationSize;et++)E(Z.location+et,Y/Z.locationSize,Ce,te,Y*Ue,Y/Z.locationSize*et*Ue,Ne)}}else if(J!==void 0){const te=J[V];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(Z.location,te);break;case 3:n.vertexAttrib3fv(Z.location,te);break;case 4:n.vertexAttrib4fv(Z.location,te);break;default:n.vertexAttrib1fv(Z.location,te)}}}}M()}function y(){H();for(const P in o){const F=o[P];for(const X in F){const ne=F[X];for(const $ in ne)g(ne[$].object),delete ne[$];delete F[X]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const F=o[P.id];for(const X in F){const ne=F[X];for(const $ in ne)g(ne[$].object),delete ne[$];delete F[X]}delete o[P.id]}function N(P){for(const F in o){const X=o[F];if(X[P.id]===void 0)continue;const ne=X[P.id];for(const $ in ne)g(ne[$].object),delete ne[$];delete X[P.id]}}function H(){se(),c=!0,d!==l&&(d=l,p(d.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:se,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:_,disableUnusedAttributes:M}}function $f(n,e,t,i){const a=i.isWebGL2;let s;function r(c){s=c}function o(c,h){n.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,f){if(f===0)return;let p,g;if(a)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,c,h,f),t.update(h,s,f)}function d(c,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(c[g],h[g]);else{p.multiDrawArraysWEBGL(s,c,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];t.update(g,s,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=d}function Yf(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const d=r||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,_=r||e.has("OES_texture_float"),k=b&&_,M=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:d,getMaxAnisotropy:a,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:k,maxSamples:M}}function jf(n){const e=this;let t=null,i=0,a=!1,s=!1;const r=new mi,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||a;return a=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=n.get(h);if(!a||g===null||g.length===0||s&&!m)s?c(null):d();else{const v=s?0:i,b=v*4;let _=u.clippingState||null;l.value=_,_=c(g,f,b,p);for(let k=0;k!==b;++k)_[k]=t[k];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const u=p+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,_=p;b!==x;++b,_+=4)r.copy(h[b]).applyMatrix4(v,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Kf(n){let e=new WeakMap;function t(r,o){return o===Qr?r.mapping=na:o===eo&&(r.mapping=ia),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Qr||o===eo)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const d=new oh(l.height/2);return d.fromEquirectangularTexture(n,r),e.set(r,d),r.addEventListener("dispose",a),t(d.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class id extends ed{constructor(e=-1,t=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,r=s+d*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,Bl=[.125,.215,.35,.446,.526,.582],vi=20,wr=new id,Hl=new Ge;let Mr=null,Sr=0,Er=0;const gi=(1+Math.sqrt(5))/2,Wi=1/gi,Gl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,gi,Wi),new L(0,gi,-Wi),new L(Wi,0,gi),new L(-Wi,0,gi),new L(gi,Wi,0),new L(-gi,Wi,0)];class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),Er=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mr,Sr,Er),e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===na||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),Er=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Na,format:mn,colorSpace:zn,depthBuffer:!1},a=Wl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(s)),this._blurMaterial=Zf(s,e,t)}return a}_compileMaterial(e){const t=new C(this._lodPlanes[0],e);this._renderer.compile(t,wr)}_sceneToCubeUV(e,t,i,a){const o=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Hl),c.toneMapping=Qn,c.autoClear=!1;const p=new wt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new C(new oe,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Hl),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(d[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,d[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,d[u]));const b=this._cubeSize;hs(a,v*b,u>2?b:0,b,b),c.setRenderTarget(a),x&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===na||e.mapping===ia;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new C(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,wr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=Gl[(a-1)%Gl.length];this._blur(e,a-1,a,s,r)}t.autoClear=i}_blur(e,t,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,r,o){const l=this._renderer,d=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new C(this._lodPlanes[a],d),f=d.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),x=s/g,m=isFinite(s)?1+Math.floor(c*x):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const u=[];let v=0;for(let E=0;E<vi;++E){const I=E/x,y=Math.exp(-I*I/2);u.push(y),E===0?v+=y:E<m&&(v+=2*y)}for(let E=0;E<u.length;E++)u[E]=u[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const _=this._sizeLods[a],k=3*_*(a>b-Zi?a-b+Zi:0),M=4*(this._cubeSize-_);hs(t,k,M,3*_,2*_),l.setRenderTarget(t),l.render(h,wr)}}function Jf(n){const e=[],t=[],i=[];let a=n;const s=n-Zi+1+Bl.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>n-Zi?l=Bl[r-n+Zi-1]:r===0&&(l=0),i.push(l);const d=1/(o-2),c=-d,h=1+d,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,x=3,m=2,u=1,v=new Float32Array(x*g*p),b=new Float32Array(m*g*p),_=new Float32Array(u*g*p);for(let M=0;M<p;M++){const E=M%3*2/3-1,I=M>2?0:-1,y=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];v.set(y,x*g*M),b.set(f,m*g*M);const T=[M,M,M,M,M,M];_.set(T,u*g*M)}const k=new xt;k.setAttribute("position",new gn(v,x)),k.setAttribute("uv",new gn(b,m)),k.setAttribute("faceIndex",new gn(_,u)),e.push(k),a>Zi&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wl(n,e,t){const i=new wi(n,e,t);return i.texture.mapping=Is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Zf(n,e,t){const i=new Float32Array(vi),a=new L(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Xl(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ql(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function _o(){return`

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
	`}function Qf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,d=l===Qr||l===eo,c=l===na||l===ia;if(d||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Vl(n)),h=d?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(d&&h&&h.height>0||c&&h&&a(h)){t===null&&(t=new Vl(n));const f=d?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function a(o){let l=0;const d=6;for(let c=0;c<d;c++)o[c]!==void 0&&l++;return l===d}function s(o){const l=o.target;l.removeEventListener("dispose",s);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function e0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function t0(n,e,t,i){const a={},s=new WeakMap;function r(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",r),delete a[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const x=p[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],n.ARRAY_BUFFER)}}function d(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let b=0,_=v.length;b<_;b+=3){const k=v[b+0],M=v[b+1],E=v[b+2];f.push(k,M,M,E,E,k)}}else if(g!==void 0){const v=g.array;x=g.version;for(let b=0,_=v.length/3-1;b<_;b+=3){const k=b+0,M=b+1,E=b+2;f.push(k,M,M,E,E,k)}}else return;const m=new(Wc(f)?Zc:Jc)(f,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&d(h)}else d(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function n0(n,e,t,i){const a=i.isWebGL2;let s;function r(p){s=p}let o,l;function d(p){o=p.type,l=p.bytesPerElement}function c(p,g){n.drawElements(s,g,o,p*l),t.update(g,s,1)}function h(p,g,x){if(x===0)return;let m,u;if(a)m=n,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,g,o,p*l,x),t.update(g,s,x)}function f(p,g,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<x;u++)this.render(p[u]/l,g[u]);else{m.multiDrawElementsWEBGL(s,g,0,o,p,0,x);let u=0;for(let v=0;v<x;v++)u+=g[v];t.update(u,s,1)}}this.setMode=r,this.setIndex=d,this.render=c,this.renderInstances=h,this.renderMultiDraw=f}function i0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function a0(n,e){return n[0]-e[0]}function s0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function r0(n,e,t){const i={},a=new Float32Array(8),s=new WeakMap,r=new gt,o=[];for(let d=0;d<8;d++)o[d]=[d,0];function l(d,c,h){const f=d.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=g!==void 0?g.length:0;let m=s.get(c);if(m===void 0||m.count!==x){let F=function(){se.dispose(),s.delete(c),c.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const b=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,k=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let y=0;b===!0&&(y=1),_===!0&&(y=2),k===!0&&(y=3);let T=c.attributes.position.count*y,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const H=new Float32Array(T*N*4*x),se=new $c(H,T,N,x);se.type=Jn,se.needsUpdate=!0;const P=y*4;for(let X=0;X<x;X++){const ne=M[X],$=E[X],K=I[X],J=T*N*4*X;for(let V=0;V<ne.count;V++){const Z=V*P;b===!0&&(r.fromBufferAttribute(ne,V),H[J+Z+0]=r.x,H[J+Z+1]=r.y,H[J+Z+2]=r.z,H[J+Z+3]=0),_===!0&&(r.fromBufferAttribute($,V),H[J+Z+4]=r.x,H[J+Z+5]=r.y,H[J+Z+6]=r.z,H[J+Z+7]=0),k===!0&&(r.fromBufferAttribute(K,V),H[J+Z+8]=r.x,H[J+Z+9]=r.y,H[J+Z+10]=r.z,H[J+Z+11]=K.itemSize===4?r.w:1)}}m={count:x,texture:se,size:new we(T,N)},s.set(c,m),c.addEventListener("dispose",F)}let u=0;for(let b=0;b<f.length;b++)u+=f[b];const v=c.morphTargetsRelative?1:1-u;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let x=i[c.id];if(x===void 0||x.length!==g){x=[];for(let _=0;_<g;_++)x[_]=[_,0];i[c.id]=x}for(let _=0;_<g;_++){const k=x[_];k[0]=_,k[1]=f[_]}x.sort(s0);for(let _=0;_<8;_++)_<g&&x[_][1]?(o[_][0]=x[_][0],o[_][1]=x[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(a0);const m=c.morphAttributes.position,u=c.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const k=o[_],M=k[0],E=k[1];M!==Number.MAX_SAFE_INTEGER&&E?(m&&c.getAttribute("morphTarget"+_)!==m[M]&&c.setAttribute("morphTarget"+_,m[M]),u&&c.getAttribute("morphNormal"+_)!==u[M]&&c.setAttribute("morphNormal"+_,u[M]),a[_]=E,v+=E):(m&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),u&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),a[_]=0)}const b=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:l}}function o0(n,e,t,i){let a=new WeakMap;function s(l){const d=i.render.frame,c=l.geometry,h=e.get(l,c);if(a.get(h)!==d&&(e.update(h),a.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==d&&(f.update(),a.set(f,d))}return h}function r(){a=new WeakMap}function o(l){const d=l.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:r}}class ad extends Zt{constructor(e,t,i,a,s,r,o,l,d,c){if(c=c!==void 0?c:_i,c!==_i&&c!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===_i&&(i=Kn),i===void 0&&c===aa&&(i=bi),super(null,a,s,r,o,l,c,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sd=new Zt,rd=new ad(1,1);rd.compareFunction=Vc;const od=new $c,ld=new Wu,cd=new td,$l=[],Yl=[],jl=new Float32Array(16),Kl=new Float32Array(9),Jl=new Float32Array(4);function da(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=$l[a];if(s===void 0&&(s=new Float32Array(a),$l[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(s,o)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fs(n,e){let t=Yl[e];t===void 0&&(t=new Int32Array(e),Yl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function l0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function c0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function u0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function h0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,i))return;Jl.set(i),n.uniformMatrix2fv(this.addr,!1,Jl),Ct(t,i)}}function p0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,i))return;Kl.set(i),n.uniformMatrix3fv(this.addr,!1,Kl),Ct(t,i)}}function f0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,i))return;jl.set(i),n.uniformMatrix4fv(this.addr,!1,jl),Ct(t,i)}}function m0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function b0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function M0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?rd:sd;t.setTexture2D(e||s,a)}function S0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||ld,a)}function E0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||cd,a)}function T0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||od,a)}function A0(n){switch(n){case 5126:return l0;case 35664:return c0;case 35665:return d0;case 35666:return u0;case 35674:return h0;case 35675:return p0;case 35676:return f0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return x0;case 35669:case 35673:return v0;case 5125:return b0;case 36294:return _0;case 36295:return y0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}function L0(n,e){n.uniform1fv(this.addr,e)}function k0(n,e){const t=da(e,this.size,2);n.uniform2fv(this.addr,t)}function C0(n,e){const t=da(e,this.size,3);n.uniform3fv(this.addr,t)}function R0(n,e){const t=da(e,this.size,4);n.uniform4fv(this.addr,t)}function P0(n,e){const t=da(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D0(n,e){const t=da(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I0(n,e){const t=da(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U0(n,e){n.uniform1iv(this.addr,e)}function N0(n,e){n.uniform2iv(this.addr,e)}function O0(n,e){n.uniform3iv(this.addr,e)}function F0(n,e){n.uniform4iv(this.addr,e)}function z0(n,e){n.uniform1uiv(this.addr,e)}function B0(n,e){n.uniform2uiv(this.addr,e)}function H0(n,e){n.uniform3uiv(this.addr,e)}function G0(n,e){n.uniform4uiv(this.addr,e)}function V0(n,e,t){const i=this.cache,a=e.length,s=Fs(t,a);kt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||sd,s[r])}function W0(n,e,t){const i=this.cache,a=e.length,s=Fs(t,a);kt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||ld,s[r])}function X0(n,e,t){const i=this.cache,a=e.length,s=Fs(t,a);kt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||cd,s[r])}function q0(n,e,t){const i=this.cache,a=e.length,s=Fs(t,a);kt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||od,s[r])}function $0(n){switch(n){case 5126:return L0;case 35664:return k0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return D0;case 35676:return I0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return O0;case 35669:case 35673:return F0;case 5125:return z0;case 36294:return B0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}class Y0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=A0(t.type)}}class j0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$0(t.type)}}class K0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],i)}}}const Tr=/(\w+)(\])?(\[|\.)?/g;function Zl(n,e){n.seq.push(e),n.map[e.id]=e}function J0(n,e,t){const i=n.name,a=i.length;for(Tr.lastIndex=0;;){const s=Tr.exec(i),r=Tr.lastIndex;let o=s[1];const l=s[2]==="]",d=s[3];if(l&&(o=o|0),d===void 0||d==="["&&r+2===a){Zl(t,d===void 0?new Y0(o,n,e):new j0(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new K0(o),Zl(t,h)),t=h}}}class Es{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);J0(s,r,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&i.push(r)}return i}}function Ql(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Z0=37297;let Q0=0;function em(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}function tm(n){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n);let i;switch(e===t?i="":e===Cs&&t===ks?i="LinearDisplayP3ToLinearSRGB":e===ks&&t===Cs&&(i="LinearSRGBToLinearDisplayP3"),n){case zn:case Us:return[i,"LinearTransferOETF"];case It:case vo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ec(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+em(n.getShaderSource(e),r)}else return a}function nm(n,e){const t=tm(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function im(n,e){let t;switch(e){case fu:t="Linear";break;case mu:t="Reinhard";break;case gu:t="OptimizedCineon";break;case Dc:t="ACESFilmic";break;case vu:t="AgX";break;case xu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function am(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qi).join(`
`)}function sm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qi).join(`
`)}function rm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function om(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),r=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Qi(n){return n!==""}function tc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(n){return n.replace(lm,dm)}const cm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dm(n,e){let t=Ye[e];if(t===void 0){const i=cm.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return oo(t)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(n){return n.replace(um,hm)}function hm(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function ac(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fo?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function fm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case na:case ia:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ia:e="ENVMAP_MODE_REFRACTION";break}return e}function gm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mo:e="ENVMAP_BLENDING_MULTIPLY";break;case hu:e="ENVMAP_BLENDING_MIX";break;case pu:e="ENVMAP_BLENDING_ADD";break}return e}function xm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vm(n,e,t,i){const a=n.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=pm(t),d=fm(t),c=mm(t),h=gm(t),f=xm(t),p=t.isWebGL2?"":am(t),g=sm(t),x=rm(s),m=a.createProgram();let u,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qi).join(`
`),u.length>0&&(u+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qi).join(`
`),v.length>0&&(v+=`
`)):(u=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),v=[p,ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Qn?im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,nm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),r=oo(r),r=tc(r,t),r=nc(r,t),o=oo(o),o=tc(o,t),o=nc(o,t),r=ic(r),o=ic(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=b+u+r,k=b+v+o,M=Ql(a,a.VERTEX_SHADER,_),E=Ql(a,a.FRAGMENT_SHADER,k);a.attachShader(m,M),a.attachShader(m,E),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function I(H){if(n.debug.checkShaderErrors){const se=a.getProgramInfoLog(m).trim(),P=a.getShaderInfoLog(M).trim(),F=a.getShaderInfoLog(E).trim();let X=!0,ne=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,m,M,E);else{const $=ec(a,M,"vertex"),K=ec(a,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+$+`
`+K)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(P===""||F==="")&&(ne=!1);ne&&(H.diagnostics={runnable:X,programLog:se,vertexShader:{log:P,prefix:u},fragmentShader:{log:F,prefix:v}})}a.deleteShader(M),a.deleteShader(E),y=new Es(a,m),T=om(a,m)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(m,Z0)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=E,this}let bm=0;class _m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ym(e),t.set(e,i)),i}}class ym{constructor(e){this.id=bm++,this.code=e,this.usedTimes=0}}function wm(n,e,t,i,a,s,r){const o=new jc,l=new _m,d=[],c=a.isWebGL2,h=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,T,N,H,se){const P=H.fog,F=se.geometry,X=y.isMeshStandardMaterial?H.environment:null,ne=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),$=ne&&ne.mapping===Is?ne.image.height:null,K=g[y.type];y.precision!==null&&(p=a.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,V=J!==void 0?J.length:0;let Z=0;F.morphAttributes.position!==void 0&&(Z=1),F.morphAttributes.normal!==void 0&&(Z=2),F.morphAttributes.color!==void 0&&(Z=3);let O,te,Y,me;if(K){const Gt=bn[K];O=Gt.vertexShader,te=Gt.fragmentShader}else O=y.vertexShader,te=y.fragmentShader,l.update(y),Y=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const fe=n.getRenderTarget(),Ce=se.isInstancedMesh===!0,Ue=se.isBatchedMesh===!0,Ne=!!y.map,et=!!y.matcap,z=!!ne,Rt=!!y.aoMap,De=!!y.lightMap,ze=!!y.bumpMap,Le=!!y.normalMap,ht=!!y.displacementMap,We=!!y.emissiveMap,A=!!y.metalnessMap,w=!!y.roughnessMap,B=y.anisotropy>0,ue=y.clearcoat>0,ce=y.iridescence>0,re=y.sheen>0,ke=y.transmission>0,_e=B&&!!y.anisotropyMap,Ee=ue&&!!y.clearcoatMap,Oe=ue&&!!y.clearcoatNormalMap,qe=ue&&!!y.clearcoatRoughnessMap,le=ce&&!!y.iridescenceMap,st=ce&&!!y.iridescenceThicknessMap,je=re&&!!y.sheenColorMap,Be=re&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,D=!!y.specularColorMap,ie=!!y.specularIntensityMap,be=ke&&!!y.transmissionMap,Ae=ke&&!!y.thicknessMap,Te=!!y.gradientMap,Q=!!y.alphaMap,R=y.alphaTest>0,de=!!y.alphaHash,pe=!!y.extensions,j=!!F.attributes.uv1,he=!!F.attributes.uv2,nt=!!F.attributes.uv3;let it=Qn;return y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(it=n.toneMapping),{isWebGL2:c,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:O,fragmentShader:te,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ue,instancing:Ce,instancingColor:Ce&&se.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:zn,map:Ne,matcap:et,envMap:z,envMapMode:z&&ne.mapping,envMapCubeUVHeight:$,aoMap:Rt,lightMap:De,bumpMap:ze,normalMap:Le,displacementMap:f&&ht,emissiveMap:We,normalMapObjectSpace:Le&&y.normalMapType===Cu,normalMapTangentSpace:Le&&y.normalMapType===xo,metalnessMap:A,roughnessMap:w,anisotropy:B,anisotropyMap:_e,clearcoat:ue,clearcoatMap:Ee,clearcoatNormalMap:Oe,clearcoatRoughnessMap:qe,iridescence:ce,iridescenceMap:le,iridescenceThicknessMap:st,sheen:re,sheenColorMap:je,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:D,specularIntensityMap:ie,transmission:ke,transmissionMap:be,thicknessMap:Ae,gradientMap:Te,opaque:y.transparent===!1&&y.blending===ea,alphaMap:Q,alphaTest:R,alphaHash:de,combine:y.combine,mapUv:Ne&&x(y.map.channel),aoMapUv:Rt&&x(y.aoMap.channel),lightMapUv:De&&x(y.lightMap.channel),bumpMapUv:ze&&x(y.bumpMap.channel),normalMapUv:Le&&x(y.normalMap.channel),displacementMapUv:ht&&x(y.displacementMap.channel),emissiveMapUv:We&&x(y.emissiveMap.channel),metalnessMapUv:A&&x(y.metalnessMap.channel),roughnessMapUv:w&&x(y.roughnessMap.channel),anisotropyMapUv:_e&&x(y.anisotropyMap.channel),clearcoatMapUv:Ee&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:st&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:je&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(y.sheenRoughnessMap.channel),specularMapUv:Pe&&x(y.specularMap.channel),specularColorMapUv:D&&x(y.specularColorMap.channel),specularIntensityMapUv:ie&&x(y.specularIntensityMap.channel),transmissionMapUv:be&&x(y.transmissionMap.channel),thicknessMapUv:Ae&&x(y.thicknessMap.channel),alphaMapUv:Q&&x(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Le||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:he,vertexUv3s:nt,pointsUvs:se.isPoints===!0&&!!F.attributes.uv&&(Ne||Q),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:se.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ne&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===At,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:pe&&y.extensions.derivatives===!0,extensionFragDepth:pe&&y.extensions.fragDepth===!0,extensionDrawBuffers:pe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)T.push(N),T.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(v(T,y),b(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function _(y){const T=g[y.type];let N;if(T){const H=bn[T];N=ih.clone(H.uniforms)}else N=y.uniforms;return N}function k(y,T){let N;for(let H=0,se=d.length;H<se;H++){const P=d[H];if(P.cacheKey===T){N=P,++N.usedTimes;break}}return N===void 0&&(N=new vm(n,T,y,s),d.push(N)),N}function M(y){if(--y.usedTimes===0){const T=d.indexOf(y);d[T]=d[d.length-1],d.pop(),y.destroy()}}function E(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:k,releaseProgram:M,releaseShaderCache:E,programs:d,dispose:I}}function Mm(){let n=new WeakMap;function e(s){let r=n.get(s);return r===void 0&&(r={},n.set(s,r)),r}function t(s){n.delete(s)}function i(s,r,o){n.get(s)[r]=o}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function Sm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function sc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rc(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function r(h,f,p,g,x,m){let u=n[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function o(h,f,p,g,x,m){const u=r(h,f,p,g,x,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):t.push(u)}function l(h,f,p,g,x,m){const u=r(h,f,p,g,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):t.unshift(u)}function d(h,f){t.length>1&&t.sort(h||Sm),i.length>1&&i.sort(f||sc),a.length>1&&a.sort(f||sc)}function c(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:c,sort:d}}function Em(){let n=new WeakMap;function e(i,a){const s=n.get(i);let r;return s===void 0?(r=new rc,n.set(i,[r])):a>=s.length?(r=new rc,s.push(r)):r=s[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ge};break;case"SpotLight":t={position:new L,direction:new L,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Am(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Lm=0;function km(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Cm(n,e){const t=new Tm,i=Am(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)a.probe.push(new L);const s=new L,r=new bt,o=new bt;function l(c,h){let f=0,p=0,g=0;for(let H=0;H<9;H++)a.probe[H].set(0,0,0);let x=0,m=0,u=0,v=0,b=0,_=0,k=0,M=0,E=0,I=0,y=0;c.sort(km);const T=h===!0?Math.PI:1;for(let H=0,se=c.length;H<se;H++){const P=c[H],F=P.color,X=P.intensity,ne=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*X*T,p+=F.g*X*T,g+=F.b*X*T;else if(P.isLightProbe){for(let K=0;K<9;K++)a.probe[K].addScaledVector(P.sh.coefficients[K],X);y++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const J=P.shadow,V=i.get(P);V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,a.directionalShadow[x]=V,a.directionalShadowMap[x]=$,a.directionalShadowMatrix[x]=P.shadow.matrix,_++}a.directional[x]=K,x++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(F).multiplyScalar(X*T),K.distance=ne,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,a.spot[u]=K;const J=P.shadow;if(P.map&&(a.spotLightMap[E]=P.map,E++,J.updateMatrices(P),P.castShadow&&I++),a.spotLightMatrix[u]=J.matrix,P.castShadow){const V=i.get(P);V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,a.spotShadow[u]=V,a.spotShadowMap[u]=$,M++}u++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(F).multiplyScalar(X),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),a.rectArea[v]=K,v++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),K.distance=P.distance,K.decay=P.decay,P.castShadow){const J=P.shadow,V=i.get(P);V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,a.pointShadow[m]=V,a.pointShadowMap[m]=$,a.pointShadowMatrix[m]=P.shadow.matrix,k++}a.point[m]=K,m++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(X*T),K.groundColor.copy(P.groundColor).multiplyScalar(X*T),a.hemi[b]=K,b++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=xe.LTC_FLOAT_1,a.rectAreaLTC2=xe.LTC_FLOAT_2):(a.rectAreaLTC1=xe.LTC_HALF_1,a.rectAreaLTC2=xe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=xe.LTC_FLOAT_1,a.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=xe.LTC_HALF_1,a.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=f,a.ambient[1]=p,a.ambient[2]=g;const N=a.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==u||N.rectAreaLength!==v||N.hemiLength!==b||N.numDirectionalShadows!==_||N.numPointShadows!==k||N.numSpotShadows!==M||N.numSpotMaps!==E||N.numLightProbes!==y)&&(a.directional.length=x,a.spot.length=u,a.rectArea.length=v,a.point.length=m,a.hemi.length=b,a.directionalShadow.length=_,a.directionalShadowMap.length=_,a.pointShadow.length=k,a.pointShadowMap.length=k,a.spotShadow.length=M,a.spotShadowMap.length=M,a.directionalShadowMatrix.length=_,a.pointShadowMatrix.length=k,a.spotLightMatrix.length=M+E-I,a.spotLightMap.length=E,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=y,N.directionalLength=x,N.pointLength=m,N.spotLength=u,N.rectAreaLength=v,N.hemiLength=b,N.numDirectionalShadows=_,N.numPointShadows=k,N.numSpotShadows=M,N.numSpotMaps=E,N.numLightProbes=y,a.version=Lm++)}function d(c,h){let f=0,p=0,g=0,x=0,m=0;const u=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){const _=c[v];if(_.isDirectionalLight){const k=a.directional[f];k.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),k.direction.sub(s),k.direction.transformDirection(u),f++}else if(_.isSpotLight){const k=a.spot[g];k.position.setFromMatrixPosition(_.matrixWorld),k.position.applyMatrix4(u),k.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),k.direction.sub(s),k.direction.transformDirection(u),g++}else if(_.isRectAreaLight){const k=a.rectArea[x];k.position.setFromMatrixPosition(_.matrixWorld),k.position.applyMatrix4(u),o.identity(),r.copy(_.matrixWorld),r.premultiply(u),o.extractRotation(r),k.halfWidth.set(_.width*.5,0,0),k.halfHeight.set(0,_.height*.5,0),k.halfWidth.applyMatrix4(o),k.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const k=a.point[p];k.position.setFromMatrixPosition(_.matrixWorld),k.position.applyMatrix4(u),p++}else if(_.isHemisphereLight){const k=a.hemi[m];k.direction.setFromMatrixPosition(_.matrixWorld),k.direction.transformDirection(u),m++}}}return{setup:l,setupView:d,state:a}}function oc(n,e){const t=new Cm(n,e),i=[],a=[];function s(){i.length=0,a.length=0}function r(h){i.push(h)}function o(h){a.push(h)}function l(h){t.setup(i,h)}function d(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:l,setupLightsView:d,pushLight:r,pushShadow:o}}function Rm(n,e){let t=new WeakMap;function i(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new oc(n,e),t.set(s,[l])):r>=o.length?(l=new oc(n,e),o.push(l)):l=o[r],l}function a(){t=new WeakMap}return{get:i,dispose:a}}class Pm extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dm extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Im=`void main() {
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
}`;function Nm(n,e,t){let i=new bo;const a=new we,s=new we,r=new gt,o=new Pm({depthPacking:ku}),l=new Dm,d={},c=t.maxTextureSize,h={[ii]:Ht,[Ht]:ii,[At]:At},f=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Im,fragmentShader:Um}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new xt;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new C(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let u=this.type;this.render=function(M,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const y=n.getRenderTarget(),T=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Zn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const se=u!==Rn&&this.type===Rn,P=u===Rn&&this.type!==Rn;for(let F=0,X=M.length;F<X;F++){const ne=M[F],$=ne.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const K=$.getFrameExtents();if(a.multiply(K),s.copy($.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(s.x=Math.floor(c/K.x),a.x=s.x*K.x,$.mapSize.x=s.x),a.y>c&&(s.y=Math.floor(c/K.y),a.y=s.y*K.y,$.mapSize.y=s.y)),$.map===null||se===!0||P===!0){const V=this.type!==Rn?{minFilter:$t,magFilter:$t}:{};$.map!==null&&$.map.dispose(),$.map=new wi(a.x,a.y,V),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const J=$.getViewportCount();for(let V=0;V<J;V++){const Z=$.getViewport(V);r.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),H.viewport(r),$.updateMatrices(ne,V),i=$.getFrustum(),_(E,I,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===Rn&&v($,I),$.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(y,T,N)};function v(M,E){const I=e.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new wi(a.x,a.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(E,null,I,f,x,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(E,null,I,p,x,null)}function b(M,E,I,y){let T=null;const N=I.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)T=N;else if(T=I.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=T.uuid,se=E.uuid;let P=d[H];P===void 0&&(P={},d[H]=P);let F=P[se];F===void 0&&(F=T.clone(),P[se]=F,E.addEventListener("dispose",k)),T=F}if(T.visible=E.visible,T.wireframe=E.wireframe,y===Rn?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:h[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=n.properties.get(T);H.light=I}return T}function _(M,E,I,y,T){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===Rn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,M.matrixWorld);const se=e.update(M),P=M.material;if(Array.isArray(P)){const F=se.groups;for(let X=0,ne=F.length;X<ne;X++){const $=F[X],K=P[$.materialIndex];if(K&&K.visible){const J=b(M,K,y,T);M.onBeforeShadow(n,M,E,I,se,J,$),n.renderBufferDirect(I,null,se,J,M,$),M.onAfterShadow(n,M,E,I,se,J,$)}}}else if(P.visible){const F=b(M,P,y,T);M.onBeforeShadow(n,M,E,I,se,F,null),n.renderBufferDirect(I,null,se,F,M,null),M.onAfterShadow(n,M,E,I,se,F,null)}}const H=M.children;for(let se=0,P=H.length;se<P;se++)_(H[se],E,I,y,T)}function k(M){M.target.removeEventListener("dispose",k);for(const I in d){const y=d[I],T=M.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function Om(n,e,t){const i=t.isWebGL2;function a(){let R=!1;const de=new gt;let pe=null;const j=new gt(0,0,0,0);return{setMask:function(he){pe!==he&&!R&&(n.colorMask(he,he,he,he),pe=he)},setLocked:function(he){R=he},setClear:function(he,nt,it,Et,Gt){Gt===!0&&(he*=Et,nt*=Et,it*=Et),de.set(he,nt,it,Et),j.equals(de)===!1&&(n.clearColor(he,nt,it,Et),j.copy(de))},reset:function(){R=!1,pe=null,j.set(-1,0,0,0)}}}function s(){let R=!1,de=null,pe=null,j=null;return{setTest:function(he){he?Ue(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(he){de!==he&&!R&&(n.depthMask(he),de=he)},setFunc:function(he){if(pe!==he){switch(he){case su:n.depthFunc(n.NEVER);break;case ru:n.depthFunc(n.ALWAYS);break;case ou:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case lu:n.depthFunc(n.EQUAL);break;case cu:n.depthFunc(n.GEQUAL);break;case du:n.depthFunc(n.GREATER);break;case uu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=he}},setLocked:function(he){R=he},setClear:function(he){j!==he&&(n.clearDepth(he),j=he)},reset:function(){R=!1,de=null,pe=null,j=null}}}function r(){let R=!1,de=null,pe=null,j=null,he=null,nt=null,it=null,Et=null,Gt=null;return{setTest:function(pt){R||(pt?Ue(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(pt){de!==pt&&!R&&(n.stencilMask(pt),de=pt)},setFunc:function(pt,Vt,vn){(pe!==pt||j!==Vt||he!==vn)&&(n.stencilFunc(pt,Vt,vn),pe=pt,j=Vt,he=vn)},setOp:function(pt,Vt,vn){(nt!==pt||it!==Vt||Et!==vn)&&(n.stencilOp(pt,Vt,vn),nt=pt,it=Vt,Et=vn)},setLocked:function(pt){R=pt},setClear:function(pt){Gt!==pt&&(n.clearStencil(pt),Gt=pt)},reset:function(){R=!1,de=null,pe=null,j=null,he=null,nt=null,it=null,Et=null,Gt=null}}}const o=new a,l=new s,d=new r,c=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,x=[],m=null,u=!1,v=null,b=null,_=null,k=null,M=null,E=null,I=null,y=new Ge(0,0,0),T=0,N=!1,H=null,se=null,P=null,F=null,X=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=K>=2);let V=null,Z={};const O=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),Y=new gt().fromArray(O),me=new gt().fromArray(te);function fe(R,de,pe,j){const he=new Uint8Array(4),nt=n.createTexture();n.bindTexture(R,nt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<pe;it++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(de+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return nt}const Ce={};Ce[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),d.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(As),We(!1),A(Vo),Ue(n.CULL_FACE),Le(Zn);function Ue(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function Ne(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function et(R,de){return p[R]!==de?(n.bindFramebuffer(R,de),p[R]=de,i&&(R===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=de),R===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function z(R,de){let pe=x,j=!1;if(R)if(pe=g.get(de),pe===void 0&&(pe=[],g.set(de,pe)),R.isWebGLMultipleRenderTargets){const he=R.texture;if(pe.length!==he.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,it=he.length;nt<it;nt++)pe[nt]=n.COLOR_ATTACHMENT0+nt;pe.length=he.length,j=!0}}else pe[0]!==n.COLOR_ATTACHMENT0&&(pe[0]=n.COLOR_ATTACHMENT0,j=!0);else pe[0]!==n.BACK&&(pe[0]=n.BACK,j=!0);j&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Rt(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const De={[xi]:n.FUNC_ADD,[Wd]:n.FUNC_SUBTRACT,[Xd]:n.FUNC_REVERSE_SUBTRACT};if(i)De[$o]=n.MIN,De[Yo]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(De[$o]=R.MIN_EXT,De[Yo]=R.MAX_EXT)}const ze={[qd]:n.ZERO,[$d]:n.ONE,[Yd]:n.SRC_COLOR,[Jr]:n.SRC_ALPHA,[eu]:n.SRC_ALPHA_SATURATE,[Zd]:n.DST_COLOR,[Kd]:n.DST_ALPHA,[jd]:n.ONE_MINUS_SRC_COLOR,[Zr]:n.ONE_MINUS_SRC_ALPHA,[Qd]:n.ONE_MINUS_DST_COLOR,[Jd]:n.ONE_MINUS_DST_ALPHA,[tu]:n.CONSTANT_COLOR,[nu]:n.ONE_MINUS_CONSTANT_COLOR,[iu]:n.CONSTANT_ALPHA,[au]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(R,de,pe,j,he,nt,it,Et,Gt,pt){if(R===Zn){u===!0&&(Ne(n.BLEND),u=!1);return}if(u===!1&&(Ue(n.BLEND),u=!0),R!==Vd){if(R!==v||pt!==N){if((b!==xi||M!==xi)&&(n.blendEquation(n.FUNC_ADD),b=xi,M=xi),pt)switch(R){case ea:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFunc(n.ONE,n.ONE);break;case Xo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ea:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}_=null,k=null,E=null,I=null,y.set(0,0,0),T=0,v=R,N=pt}return}he=he||de,nt=nt||pe,it=it||j,(de!==b||he!==M)&&(n.blendEquationSeparate(De[de],De[he]),b=de,M=he),(pe!==_||j!==k||nt!==E||it!==I)&&(n.blendFuncSeparate(ze[pe],ze[j],ze[nt],ze[it]),_=pe,k=j,E=nt,I=it),(Et.equals(y)===!1||Gt!==T)&&(n.blendColor(Et.r,Et.g,Et.b,Gt),y.copy(Et),T=Gt),v=R,N=!1}function ht(R,de){R.side===At?Ne(n.CULL_FACE):Ue(n.CULL_FACE);let pe=R.side===Ht;de&&(pe=!pe),We(pe),R.blending===ea&&R.transparent===!1?Le(Zn):Le(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const j=R.stencilWrite;d.setTest(j),j&&(d.setMask(R.stencilWriteMask),d.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),d.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),B(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(R){H!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),H=R)}function A(R){R!==Hd?(Ue(n.CULL_FACE),R!==se&&(R===Vo?n.cullFace(n.BACK):R===Gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),se=R}function w(R){R!==P&&($&&n.lineWidth(R),P=R)}function B(R,de,pe){R?(Ue(n.POLYGON_OFFSET_FILL),(F!==de||X!==pe)&&(n.polygonOffset(de,pe),F=de,X=pe)):Ne(n.POLYGON_OFFSET_FILL)}function ue(R){R?Ue(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function ce(R){R===void 0&&(R=n.TEXTURE0+ne-1),V!==R&&(n.activeTexture(R),V=R)}function re(R,de,pe){pe===void 0&&(V===null?pe=n.TEXTURE0+ne-1:pe=V);let j=Z[pe];j===void 0&&(j={type:void 0,texture:void 0},Z[pe]=j),(j.type!==R||j.texture!==de)&&(V!==pe&&(n.activeTexture(pe),V=pe),n.bindTexture(R,de||Ce[R]),j.type=R,j.texture=de)}function ke(){const R=Z[V];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Oe(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function qe(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function st(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function D(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(R){Y.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Y.copy(R))}function be(R){me.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),me.copy(R))}function Ae(R,de){let pe=h.get(de);pe===void 0&&(pe=new WeakMap,h.set(de,pe));let j=pe.get(R);j===void 0&&(j=n.getUniformBlockIndex(de,R.name),pe.set(R,j))}function Te(R,de){const j=h.get(de).get(R);c.get(de)!==j&&(n.uniformBlockBinding(de,j,R.__bindingPointIndex),c.set(de,j))}function Q(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},V=null,Z={},p={},g=new WeakMap,x=[],m=null,u=!1,v=null,b=null,_=null,k=null,M=null,E=null,I=null,y=new Ge(0,0,0),T=0,N=!1,H=null,se=null,P=null,F=null,X=null,Y.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),d.reset()}return{buffers:{color:o,depth:l,stencil:d},enable:Ue,disable:Ne,bindFramebuffer:et,drawBuffers:z,useProgram:Rt,setBlending:Le,setMaterial:ht,setFlipSided:We,setCullFace:A,setLineWidth:w,setPolygonOffset:B,setScissorTest:ue,activeTexture:ce,bindTexture:re,unbindTexture:ke,compressedTexImage2D:_e,compressedTexImage3D:Ee,texImage2D:Pe,texImage3D:D,updateUBOMapping:Ae,uniformBlockBinding:Te,texStorage2D:je,texStorage3D:Be,texSubImage2D:Oe,texSubImage3D:qe,compressedTexSubImage2D:le,compressedTexSubImage3D:st,scissor:ie,viewport:be,reset:Q}}function Fm(n,e,t,i,a,s,r){const o=a.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return p?new OffscreenCanvas(A,w):Ps("canvas")}function x(A,w,B,ue){let ce=1;if((A.width>ue||A.height>ue)&&(ce=ue/Math.max(A.width,A.height)),ce<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=w?ro:Math.floor,ke=re(ce*A.width),_e=re(ce*A.height);h===void 0&&(h=g(ke,_e));const Ee=B?g(ke,_e):h;return Ee.width=ke,Ee.height=_e,Ee.getContext("2d").drawImage(A,0,0,ke,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ke+"x"+_e+")."),Ee}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Ml(A.width)&&Ml(A.height)}function u(A){return o?!1:A.wrapS!==fn||A.wrapT!==fn||A.minFilter!==$t&&A.minFilter!==sn}function v(A,w){return A.generateMipmaps&&w&&A.minFilter!==$t&&A.minFilter!==sn}function b(A){n.generateMipmap(A)}function _(A,w,B,ue,ce=!1){if(o===!1)return w;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=w;if(w===n.RED&&(B===n.FLOAT&&(re=n.R32F),B===n.HALF_FLOAT&&(re=n.R16F),B===n.UNSIGNED_BYTE&&(re=n.R8)),w===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(re=n.R8UI),B===n.UNSIGNED_SHORT&&(re=n.R16UI),B===n.UNSIGNED_INT&&(re=n.R32UI),B===n.BYTE&&(re=n.R8I),B===n.SHORT&&(re=n.R16I),B===n.INT&&(re=n.R32I)),w===n.RG&&(B===n.FLOAT&&(re=n.RG32F),B===n.HALF_FLOAT&&(re=n.RG16F),B===n.UNSIGNED_BYTE&&(re=n.RG8)),w===n.RGBA){const ke=ce?Ls:ct.getTransfer(ue);B===n.FLOAT&&(re=n.RGBA32F),B===n.HALF_FLOAT&&(re=n.RGBA16F),B===n.UNSIGNED_BYTE&&(re=ke===mt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function k(A,w,B){return v(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function M(A){return A===$t||A===jo||A===Js?n.NEAREST:n.LINEAR}function E(A){const w=A.target;w.removeEventListener("dispose",E),y(w),w.isVideoTexture&&c.delete(w)}function I(A){const w=A.target;w.removeEventListener("dispose",I),N(w)}function y(A){const w=i.get(A);if(w.__webglInit===void 0)return;const B=A.source,ue=f.get(B);if(ue){const ce=ue[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&T(A),Object.keys(ue).length===0&&f.delete(B)}i.remove(A)}function T(A){const w=i.get(A);n.deleteTexture(w.__webglTexture);const B=A.source,ue=f.get(B);delete ue[w.__cacheKey],r.memory.textures--}function N(A){const w=A.texture,B=i.get(A),ue=i.get(w);if(ue.__webglTexture!==void 0&&(n.deleteTexture(ue.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(B.__webglFramebuffer[ce]))for(let re=0;re<B.__webglFramebuffer[ce].length;re++)n.deleteFramebuffer(B.__webglFramebuffer[ce][re]);else n.deleteFramebuffer(B.__webglFramebuffer[ce]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[ce])}else{if(Array.isArray(B.__webglFramebuffer))for(let ce=0;ce<B.__webglFramebuffer.length;ce++)n.deleteFramebuffer(B.__webglFramebuffer[ce]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ce=0;ce<B.__webglColorRenderbuffer.length;ce++)B.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[ce]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ce=0,re=w.length;ce<re;ce++){const ke=i.get(w[ce]);ke.__webglTexture&&(n.deleteTexture(ke.__webglTexture),r.memory.textures--),i.remove(w[ce])}i.remove(w),i.remove(A)}let H=0;function se(){H=0}function P(){const A=H;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),H+=1,A}function F(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function X(A,w){const B=i.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const ue=A.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,A,w);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+w)}function ne(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Y(B,A,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+w)}function $(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Y(B,A,w);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+w)}function K(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){me(B,A,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+w)}const J={[to]:n.REPEAT,[fn]:n.CLAMP_TO_EDGE,[no]:n.MIRRORED_REPEAT},V={[$t]:n.NEAREST,[jo]:n.NEAREST_MIPMAP_NEAREST,[Js]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[bu]:n.LINEAR_MIPMAP_NEAREST,[Ua]:n.LINEAR_MIPMAP_LINEAR},Z={[Ru]:n.NEVER,[Ou]:n.ALWAYS,[Pu]:n.LESS,[Vc]:n.LEQUAL,[Du]:n.EQUAL,[Nu]:n.GEQUAL,[Iu]:n.GREATER,[Uu]:n.NOTEQUAL};function O(A,w,B){if(B?(n.texParameteri(A,n.TEXTURE_WRAP_S,J[w.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,J[w.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,J[w.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,V[w.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,V[w.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==fn||w.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,M(w.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,M(w.minFilter)),w.minFilter!==$t&&w.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===$t||w.minFilter!==Js&&w.minFilter!==Ua||w.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Na&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(A,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function te(A,w){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",E));const ue=w.source;let ce=f.get(ue);ce===void 0&&(ce={},f.set(ue,ce));const re=F(w);if(re!==A.__cacheKey){ce[re]===void 0&&(ce[re]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,B=!0),ce[re].usedTimes++;const ke=ce[A.__cacheKey];ke!==void 0&&(ce[A.__cacheKey].usedTimes--,ke.usedTimes===0&&T(w)),A.__cacheKey=re,A.__webglTexture=ce[re].texture}return B}function Y(A,w,B){let ue=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=n.TEXTURE_3D);const ce=te(A,w),re=w.source;t.bindTexture(ue,A.__webglTexture,n.TEXTURE0+B);const ke=i.get(re);if(re.version!==ke.__version||ce===!0){t.activeTexture(n.TEXTURE0+B);const _e=ct.getPrimaries(ct.workingColorSpace),Ee=w.colorSpace===ln?null:ct.getPrimaries(w.colorSpace),Oe=w.colorSpace===ln||_e===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const qe=u(w)&&m(w.image)===!1;let le=x(w.image,qe,!1,a.maxTextureSize);le=We(w,le);const st=m(le)||o,je=s.convert(w.format,w.colorSpace);let Be=s.convert(w.type),Pe=_(w.internalFormat,je,Be,w.colorSpace,w.isVideoTexture);O(ue,w,st);let D;const ie=w.mipmaps,be=o&&w.isVideoTexture!==!0&&Pe!==Hc,Ae=ke.__version===void 0||ce===!0,Te=k(w,le,st);if(w.isDepthTexture)Pe=n.DEPTH_COMPONENT,o?w.type===Jn?Pe=n.DEPTH_COMPONENT32F:w.type===Kn?Pe=n.DEPTH_COMPONENT24:w.type===bi?Pe=n.DEPTH24_STENCIL8:Pe=n.DEPTH_COMPONENT16:w.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===_i&&Pe===n.DEPTH_COMPONENT&&w.type!==go&&w.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Kn,Be=s.convert(w.type)),w.format===aa&&Pe===n.DEPTH_COMPONENT&&(Pe=n.DEPTH_STENCIL,w.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=bi,Be=s.convert(w.type))),Ae&&(be?t.texStorage2D(n.TEXTURE_2D,1,Pe,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Pe,le.width,le.height,0,je,Be,null));else if(w.isDataTexture)if(ie.length>0&&st){be&&Ae&&t.texStorage2D(n.TEXTURE_2D,Te,Pe,ie[0].width,ie[0].height);for(let Q=0,R=ie.length;Q<R;Q++)D=ie[Q],be?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,D.width,D.height,je,Be,D.data):t.texImage2D(n.TEXTURE_2D,Q,Pe,D.width,D.height,0,je,Be,D.data);w.generateMipmaps=!1}else be?(Ae&&t.texStorage2D(n.TEXTURE_2D,Te,Pe,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,je,Be,le.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,le.width,le.height,0,je,Be,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){be&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Pe,ie[0].width,ie[0].height,le.depth);for(let Q=0,R=ie.length;Q<R;Q++)D=ie[Q],w.format!==mn?je!==null?be?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,D.width,D.height,le.depth,je,D.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Pe,D.width,D.height,le.depth,0,D.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,D.width,D.height,le.depth,je,Be,D.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Pe,D.width,D.height,le.depth,0,je,Be,D.data)}else{be&&Ae&&t.texStorage2D(n.TEXTURE_2D,Te,Pe,ie[0].width,ie[0].height);for(let Q=0,R=ie.length;Q<R;Q++)D=ie[Q],w.format!==mn?je!==null?be?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,D.width,D.height,je,D.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Pe,D.width,D.height,0,D.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,D.width,D.height,je,Be,D.data):t.texImage2D(n.TEXTURE_2D,Q,Pe,D.width,D.height,0,je,Be,D.data)}else if(w.isDataArrayTexture)be?(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Pe,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,je,Be,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,le.width,le.height,le.depth,0,je,Be,le.data);else if(w.isData3DTexture)be?(Ae&&t.texStorage3D(n.TEXTURE_3D,Te,Pe,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,je,Be,le.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,le.width,le.height,le.depth,0,je,Be,le.data);else if(w.isFramebufferTexture){if(Ae)if(be)t.texStorage2D(n.TEXTURE_2D,Te,Pe,le.width,le.height);else{let Q=le.width,R=le.height;for(let de=0;de<Te;de++)t.texImage2D(n.TEXTURE_2D,de,Pe,Q,R,0,je,Be,null),Q>>=1,R>>=1}}else if(ie.length>0&&st){be&&Ae&&t.texStorage2D(n.TEXTURE_2D,Te,Pe,ie[0].width,ie[0].height);for(let Q=0,R=ie.length;Q<R;Q++)D=ie[Q],be?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,je,Be,D):t.texImage2D(n.TEXTURE_2D,Q,Pe,je,Be,D);w.generateMipmaps=!1}else be?(Ae&&t.texStorage2D(n.TEXTURE_2D,Te,Pe,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,je,Be,le)):t.texImage2D(n.TEXTURE_2D,0,Pe,je,Be,le);v(w,st)&&b(ue),ke.__version=re.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function me(A,w,B){if(w.image.length!==6)return;const ue=te(A,w),ce=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const re=i.get(ce);if(ce.version!==re.__version||ue===!0){t.activeTexture(n.TEXTURE0+B);const ke=ct.getPrimaries(ct.workingColorSpace),_e=w.colorSpace===ln?null:ct.getPrimaries(w.colorSpace),Ee=w.colorSpace===ln||ke===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Oe=w.isCompressedTexture||w.image[0].isCompressedTexture,qe=w.image[0]&&w.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!Oe&&!qe?le[Q]=x(w.image[Q],!1,!0,a.maxCubemapSize):le[Q]=qe?w.image[Q].image:w.image[Q],le[Q]=We(w,le[Q]);const st=le[0],je=m(st)||o,Be=s.convert(w.format,w.colorSpace),Pe=s.convert(w.type),D=_(w.internalFormat,Be,Pe,w.colorSpace),ie=o&&w.isVideoTexture!==!0,be=re.__version===void 0||ue===!0;let Ae=k(w,st,je);O(n.TEXTURE_CUBE_MAP,w,je);let Te;if(Oe){ie&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,D,st.width,st.height);for(let Q=0;Q<6;Q++){Te=le[Q].mipmaps;for(let R=0;R<Te.length;R++){const de=Te[R];w.format!==mn?Be!==null?ie?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,0,0,de.width,de.height,Be,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,D,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,0,0,de.width,de.height,Be,Pe,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,D,de.width,de.height,0,Be,Pe,de.data)}}}else{Te=w.mipmaps,ie&&be&&(Te.length>0&&Ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,D,le[0].width,le[0].height));for(let Q=0;Q<6;Q++)if(qe){ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,Be,Pe,le[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,D,le[Q].width,le[Q].height,0,Be,Pe,le[Q].data);for(let R=0;R<Te.length;R++){const pe=Te[R].image[Q].image;ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,0,0,pe.width,pe.height,Be,Pe,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,D,pe.width,pe.height,0,Be,Pe,pe.data)}}else{ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Be,Pe,le[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,D,Be,Pe,le[Q]);for(let R=0;R<Te.length;R++){const de=Te[R];ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,0,0,Be,Pe,de.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,D,Be,Pe,de.image[Q])}}}v(w,je)&&b(n.TEXTURE_CUBE_MAP),re.__version=ce.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function fe(A,w,B,ue,ce,re){const ke=s.convert(B.format,B.colorSpace),_e=s.convert(B.type),Ee=_(B.internalFormat,ke,_e,B.colorSpace);if(!i.get(w).__hasExternalTextures){const qe=Math.max(1,w.width>>re),le=Math.max(1,w.height>>re);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,re,Ee,qe,le,w.depth,0,ke,_e,null):t.texImage2D(ce,re,Ee,qe,le,0,ke,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Le(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,ce,i.get(B).__webglTexture,0,ze(w)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,ce,i.get(B).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(A,w,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let ue=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||Le(w)){const ce=w.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Jn?ue=n.DEPTH_COMPONENT32F:ce.type===Kn&&(ue=n.DEPTH_COMPONENT24));const re=ze(w);Le(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ue,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ue,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,ue,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const ue=ze(w);B&&Le(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,w.width,w.height):Le(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const ue=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ce=0;ce<ue.length;ce++){const re=ue[ce],ke=s.convert(re.format,re.colorSpace),_e=s.convert(re.type),Ee=_(re.internalFormat,ke,_e,re.colorSpace),Oe=ze(w);B&&Le(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ee,w.width,w.height):Le(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Ee,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const ue=i.get(w.depthTexture).__webglTexture,ce=ze(w);if(w.depthTexture.format===_i)Le(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(w.depthTexture.format===aa)Le(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const w=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ue(w.__webglFramebuffer,A)}else if(B){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]=n.createRenderbuffer(),Ce(w.__webglDepthbuffer[ue],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Ce(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(A,w,B){const ue=i.get(A);w!==void 0&&fe(ue.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ne(A)}function z(A){const w=A.texture,B=i.get(A),ue=i.get(w);A.addEventListener("dispose",I),A.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=w.version,r.memory.textures++);const ce=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,ke=m(A)||o;if(ce){B.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(o&&w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[_e]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)B.__webglFramebuffer[_e][Ee]=n.createFramebuffer()}else B.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let _e=0;_e<w.mipmaps.length;_e++)B.__webglFramebuffer[_e]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(re)if(a.drawBuffers){const _e=A.texture;for(let Ee=0,Oe=_e.length;Ee<Oe;Ee++){const qe=i.get(_e[Ee]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Le(A)===!1){const _e=re?w:[w];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Ee=0;Ee<_e.length;Ee++){const Oe=_e[Ee];B.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Ee]);const qe=s.convert(Oe.format,Oe.colorSpace),le=s.convert(Oe.type),st=_(Oe.internalFormat,qe,le,Oe.colorSpace,A.isXRRenderTarget===!0),je=ze(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,st,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,B.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),O(n.TEXTURE_CUBE_MAP,w,ke);for(let _e=0;_e<6;_e++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)fe(B.__webglFramebuffer[_e][Ee],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ee);else fe(B.__webglFramebuffer[_e],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);v(w,ke)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const _e=A.texture;for(let Ee=0,Oe=_e.length;Ee<Oe;Ee++){const qe=_e[Ee],le=i.get(qe);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),O(n.TEXTURE_2D,qe,ke),fe(B.__webglFramebuffer,A,qe,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,0),v(qe,ke)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?_e=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,ue.__webglTexture),O(_e,w,ke),o&&w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)fe(B.__webglFramebuffer[Ee],A,w,n.COLOR_ATTACHMENT0,_e,Ee);else fe(B.__webglFramebuffer,A,w,n.COLOR_ATTACHMENT0,_e,0);v(w,ke)&&b(_e),t.unbindTexture()}A.depthBuffer&&Ne(A)}function Rt(A){const w=m(A)||o,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ue=0,ce=B.length;ue<ce;ue++){const re=B[ue];if(v(re,w)){const ke=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(re).__webglTexture;t.bindTexture(ke,_e),b(ke),t.unbindTexture()}}}function De(A){if(o&&A.samples>0&&Le(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,ue=A.height;let ce=n.COLOR_BUFFER_BIT;const re=[],ke=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(A),Ee=A.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){re.push(n.COLOR_ATTACHMENT0+Oe),A.depthBuffer&&re.push(ke);const qe=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(qe===!1&&(A.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Ee&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Oe]),qe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ke]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ke])),Ee){const le=i.get(w[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,B,ue,0,0,B,ue,ce,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Oe]);const qe=i.get(w[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function ze(A){return Math.min(a.maxSamples,A.samples)}function Le(A){const w=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ht(A){const w=r.render.frame;c.get(A)!==w&&(c.set(A,w),A.update())}function We(A,w){const B=A.colorSpace,ue=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ao||B!==zn&&B!==ln&&(ct.getTransfer(B)===mt?o===!1?e.has("EXT_sRGB")===!0&&ue===mn?(A.format=ao,A.minFilter=sn,A.generateMipmaps=!1):w=Xc.sRGBToLinear(w):(ue!==mn||ce!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}this.allocateTextureUnit=P,this.resetTextureUnits=se,this.setTexture2D=X,this.setTexture2DArray=ne,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=et,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Le}function zm(n,e,t){const i=t.isWebGL2;function a(s,r=ln){let o;const l=ct.getTransfer(r);if(s===ei)return n.UNSIGNED_BYTE;if(s===Nc)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Oc)return n.UNSIGNED_SHORT_5_5_5_1;if(s===_u)return n.BYTE;if(s===yu)return n.SHORT;if(s===go)return n.UNSIGNED_SHORT;if(s===Uc)return n.INT;if(s===Kn)return n.UNSIGNED_INT;if(s===Jn)return n.FLOAT;if(s===Na)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===wu)return n.ALPHA;if(s===mn)return n.RGBA;if(s===Mu)return n.LUMINANCE;if(s===Su)return n.LUMINANCE_ALPHA;if(s===_i)return n.DEPTH_COMPONENT;if(s===aa)return n.DEPTH_STENCIL;if(s===ao)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Eu)return n.RED;if(s===Fc)return n.RED_INTEGER;if(s===Tu)return n.RG;if(s===zc)return n.RG_INTEGER;if(s===Bc)return n.RGBA_INTEGER;if(s===Zs||s===Qs||s===er||s===tr)if(l===mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Zs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Zs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===er)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ko||s===Jo||s===Zo||s===Qo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ko)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===el||s===tl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===el)return l===mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===tl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nl||s===il||s===al||s===sl||s===rl||s===ol||s===ll||s===cl||s===dl||s===ul||s===hl||s===pl||s===fl||s===ml)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===nl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===il)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===al)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ol)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ll)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ul)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ml)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nr||s===gl||s===xl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===nr)return l===mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Au||s===vl||s===bl||s===_l)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===nr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===vl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_l)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class Bm extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yt extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hm={type:"move"};class Ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){r=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),u=this._getHandJoint(d,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const c=d.joints["index-finger-tip"],h=d.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;d.inputState.pinching&&f>p+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&f<=p-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),d!==null&&(d.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Gm extends ca{constructor(e,t){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,d=null,c=null,h=null,f=null,p=null,g=null;const x=t.getContextAttributes();let m=null,u=null;const v=[],b=[],_=new we;let k=null;const M=new Kt;M.layers.enable(1),M.viewport=new gt;const E=new Kt;E.layers.enable(2),E.viewport=new gt;const I=[M,E],y=new Bm;y.layers.enable(1),y.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let te=v[O];return te===void 0&&(te=new Ar,v[O]=te),te.getTargetRaySpace()},this.getControllerGrip=function(O){let te=v[O];return te===void 0&&(te=new Ar,v[O]=te),te.getGripSpace()},this.getHand=function(O){let te=v[O];return te===void 0&&(te=new Ar,v[O]=te),te.getHandSpace()};function H(O){const te=b.indexOf(O.inputSource);if(te===-1)return;const Y=v[te];Y!==void 0&&(Y.update(O.inputSource,O.frame,d||r),Y.dispatchEvent({type:O.type,data:O.inputSource}))}function se(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",se),a.removeEventListener("inputsourceschange",P);for(let O=0;O<v.length;O++){const te=b[O];te!==null&&(b[O]=null,v[O].disconnect(te))}T=null,N=null,e.setRenderTarget(m),p=null,f=null,h=null,a=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||r},this.setReferenceSpace=function(O){d=O},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(O){if(a=O,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",se),a.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(_),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:a.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,t,te),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new wi(p.framebufferWidth,p.framebufferHeight,{format:mn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let te=null,Y=null,me=null;x.depth&&(me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=x.stencil?aa:_i,Y=x.stencil?bi:Kn);const fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(a,t),f=h.createProjectionLayer(fe),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new wi(f.textureWidth,f.textureHeight,{format:mn,type:ei,depthTexture:new ad(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ce=e.properties.get(u);Ce.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),d=null,r=await a.requestReferenceSpace(o),Z.setContext(a),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function P(O){for(let te=0;te<O.removed.length;te++){const Y=O.removed[te],me=b.indexOf(Y);me>=0&&(b[me]=null,v[me].disconnect(Y))}for(let te=0;te<O.added.length;te++){const Y=O.added[te];let me=b.indexOf(Y);if(me===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=b.length){b.push(Y),me=Ce;break}else if(b[Ce]===null){b[Ce]=Y,me=Ce;break}if(me===-1)break}const fe=v[me];fe&&fe.connect(Y)}}const F=new L,X=new L;function ne(O,te,Y){F.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(Y.matrixWorld);const me=F.distanceTo(X),fe=te.projectionMatrix.elements,Ce=Y.projectionMatrix.elements,Ue=fe[14]/(fe[10]-1),Ne=fe[14]/(fe[10]+1),et=(fe[9]+1)/fe[5],z=(fe[9]-1)/fe[5],Rt=(fe[8]-1)/fe[0],De=(Ce[8]+1)/Ce[0],ze=Ue*Rt,Le=Ue*De,ht=me/(-Rt+De),We=ht*-Rt;te.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(We),O.translateZ(ht),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const A=Ue+ht,w=Ne+ht,B=ze-We,ue=Le+(me-We),ce=et*Ne/w*A,re=z*Ne/w*A;O.projectionMatrix.makePerspective(B,ue,ce,re,A,w),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function $(O,te){te===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(te.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(a===null)return;y.near=E.near=M.near=O.near,y.far=E.far=M.far=O.far,(T!==y.near||N!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,N=y.far);const te=O.parent,Y=y.cameras;$(y,te);for(let me=0;me<Y.length;me++)$(Y[me],te);Y.length===2?ne(y,M,E):y.projectionMatrix.copy(M.projectionMatrix),K(O,y,te)};function K(O,te,Y){Y===null?O.matrix.copy(te.matrixWorld):(O.matrix.copy(Y.matrixWorld),O.matrix.invert(),O.matrix.multiply(te.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(te.projectionMatrix),O.projectionMatrixInverse.copy(te.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=so*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let J=null;function V(O,te){if(c=te.getViewerPose(d||r),g=te,c!==null){const Y=c.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let me=!1;Y.length!==y.cameras.length&&(y.cameras.length=0,me=!0);for(let fe=0;fe<Y.length;fe++){const Ce=Y[fe];let Ue=null;if(p!==null)Ue=p.getViewport(Ce);else{const et=h.getViewSubImage(f,Ce);Ue=et.viewport,fe===0&&(e.setRenderTargetTextures(u,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(u))}let Ne=I[fe];Ne===void 0&&(Ne=new Kt,Ne.layers.enable(fe),Ne.viewport=new gt,I[fe]=Ne),Ne.matrix.fromArray(Ce.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Ce.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),fe===0&&(y.matrix.copy(Ne.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),me===!0&&y.cameras.push(Ne)}}for(let Y=0;Y<v.length;Y++){const me=b[Y],fe=v[Y];me!==null&&fe!==void 0&&fe.update(me,te,d||r)}J&&J(O,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Z=new nd;Z.setAnimationLoop(V),this.setAnimationLoop=function(O){J=O},this.dispose=function(){}}}function Vm(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Qc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,v,b,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),c(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,b):u.isSpriteMaterial?d(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ht&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ht&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*b,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=b*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ht&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Wm(n,e,t,i){let a={},s={},r=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,b){const _=b.program;i.uniformBlockBinding(v,_)}function d(v,b){let _=a[v.id];_===void 0&&(g(v),_=c(v),a[v.id]=_,v.addEventListener("dispose",m));const k=b.program;i.updateUBOMapping(v,k);const M=e.render.frame;s[v.id]!==M&&(f(v),s[v.id]=M)}function c(v){const b=h();v.__bindingPointIndex=b;const _=n.createBuffer(),k=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,k,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function h(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const b=a[v.id],_=v.uniforms,k=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let M=0,E=_.length;M<E;M++){const I=Array.isArray(_[M])?_[M]:[_[M]];for(let y=0,T=I.length;y<T;y++){const N=I[y];if(p(N,M,y,k)===!0){const H=N.__offset,se=Array.isArray(N.value)?N.value:[N.value];let P=0;for(let F=0;F<se.length;F++){const X=se[F],ne=x(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,H+P,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,P),P+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,b,_,k){const M=v.value,E=b+"_"+_;if(k[E]===void 0)return typeof M=="number"||typeof M=="boolean"?k[E]=M:k[E]=M.clone(),!0;{const I=k[E];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return k[E]=M,!0}else if(I.equals(M)===!1)return I.copy(M),!0}return!1}function g(v){const b=v.uniforms;let _=0;const k=16;for(let E=0,I=b.length;E<I;E++){const y=Array.isArray(b[E])?b[E]:[b[E]];for(let T=0,N=y.length;T<N;T++){const H=y[T],se=Array.isArray(H.value)?H.value:[H.value];for(let P=0,F=se.length;P<F;P++){const X=se[P],ne=x(X),$=_%k;$!==0&&k-$<ne.boundary&&(_+=k-$),H.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=ne.storage}}}const M=_%k;return M>0&&(_+=k-M),v.__size=_,v.__cache={},this}function x(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const _=r.indexOf(b.__bindingPointIndex);r.splice(_,1),n.deleteBuffer(a[b.id]),delete a[b.id],delete s[b.id]}function u(){for(const v in a)n.deleteBuffer(a[v]);r=[],a={},s={}}return{bind:l,update:d,dispose:u}}class yo{constructor(e={}){const{canvas:t=zu(),context:i=null,depth:a=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=r;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const u=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const b=this;let _=!1,k=0,M=0,E=null,I=-1,y=null;const T=new gt,N=new gt;let H=null;const se=new Ge(0);let P=0,F=t.width,X=t.height,ne=1,$=null,K=null;const J=new gt(0,0,F,X),V=new gt(0,0,F,X);let Z=!1;const O=new bo;let te=!1,Y=!1,me=null;const fe=new bt,Ce=new we,Ue=new L,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return E===null?ne:1}let z=i;function Rt(S,U){for(let W=0;W<S.length;W++){const q=S[W],G=t.getContext(q,U);if(G!==null)return G}return null}try{const S={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${po}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",de,!1),z===null){const U=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&U.shift(),z=Rt(U,S),z===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let De,ze,Le,ht,We,A,w,B,ue,ce,re,ke,_e,Ee,Oe,qe,le,st,je,Be,Pe,D,ie,be;function Ae(){De=new e0(z),ze=new Yf(z,De,e),De.init(ze),D=new zm(z,De,ze),Le=new Om(z,De,ze),ht=new i0(z),We=new Mm,A=new Fm(z,De,Le,We,ze,D,ht),w=new Kf(b),B=new Qf(b),ue=new dh(z,ze),ie=new qf(z,De,ue,ze),ce=new t0(z,ue,ht,ie),re=new o0(z,ce,ue,ht),je=new r0(z,ze,A),qe=new jf(We),ke=new wm(b,w,B,De,ze,ie,qe),_e=new Vm(b,We),Ee=new Em,Oe=new Rm(De,ze),st=new Xf(b,w,B,Le,re,f,l),le=new Nm(b,re,ze),be=new Wm(z,ht,ze,Le),Be=new $f(z,De,ht,ze),Pe=new n0(z,De,ht,ze),ht.programs=ke.programs,b.capabilities=ze,b.extensions=De,b.properties=We,b.renderLists=Ee,b.shadowMap=le,b.state=Le,b.info=ht}Ae();const Te=new Gm(b,z);this.xr=Te,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=De.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=De.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(F,X,!1))},this.getSize=function(S){return S.set(F,X)},this.setSize=function(S,U,W=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=S,X=U,t.width=Math.floor(S*ne),t.height=Math.floor(U*ne),W===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(F*ne,X*ne).floor()},this.setDrawingBufferSize=function(S,U,W){F=S,X=U,ne=W,t.width=Math.floor(S*W),t.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(J)},this.setViewport=function(S,U,W,q){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,U,W,q),Le.viewport(T.copy(J).multiplyScalar(ne).floor())},this.getScissor=function(S){return S.copy(V)},this.setScissor=function(S,U,W,q){S.isVector4?V.set(S.x,S.y,S.z,S.w):V.set(S,U,W,q),Le.scissor(N.copy(V).multiplyScalar(ne).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(S){Le.setScissorTest(Z=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){K=S},this.getClearColor=function(S){return S.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(S=!0,U=!0,W=!0){let q=0;if(S){let G=!1;if(E!==null){const Se=E.texture.format;G=Se===Bc||Se===zc||Se===Fc}if(G){const Se=E.texture.type,Re=Se===ei||Se===Kn||Se===go||Se===bi||Se===Nc||Se===Oc,Fe=st.getClearColor(),He=st.getClearAlpha(),Ke=Fe.r,Xe=Fe.g,$e=Fe.b;Re?(p[0]=Ke,p[1]=Xe,p[2]=$e,p[3]=He,z.clearBufferuiv(z.COLOR,0,p)):(g[0]=Ke,g[1]=Xe,g[2]=$e,g[3]=He,z.clearBufferiv(z.COLOR,0,g))}else q|=z.COLOR_BUFFER_BIT}U&&(q|=z.DEPTH_BUFFER_BIT),W&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ee.dispose(),Oe.dispose(),We.dispose(),w.dispose(),B.dispose(),re.dispose(),ie.dispose(),be.dispose(),ke.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Gt),Te.removeEventListener("sessionend",pt),me&&(me.dispose(),me=null),Vt.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const S=ht.autoReset,U=le.enabled,W=le.autoUpdate,q=le.needsUpdate,G=le.type;Ae(),ht.autoReset=S,le.enabled=U,le.autoUpdate=W,le.needsUpdate=q,le.type=G}function de(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pe(S){const U=S.target;U.removeEventListener("dispose",pe),j(U)}function j(S){he(S),We.remove(S)}function he(S){const U=We.get(S).programs;U!==void 0&&(U.forEach(function(W){ke.releaseProgram(W)}),S.isShaderMaterial&&ke.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,q,G,Se){U===null&&(U=Ne);const Re=G.isMesh&&G.matrixWorld.determinant()<0,Fe=Od(S,U,W,q,G);Le.setMaterial(q,Re);let He=W.index,Ke=1;if(q.wireframe===!0){if(He=ce.getWireframeAttribute(W),He===void 0)return;Ke=2}const Xe=W.drawRange,$e=W.attributes.position;let Mt=Xe.start*Ke,Qt=(Xe.start+Xe.count)*Ke;Se!==null&&(Mt=Math.max(Mt,Se.start*Ke),Qt=Math.min(Qt,(Se.start+Se.count)*Ke)),He!==null?(Mt=Math.max(Mt,0),Qt=Math.min(Qt,He.count)):$e!=null&&(Mt=Math.max(Mt,0),Qt=Math.min(Qt,$e.count));const Pt=Qt-Mt;if(Pt<0||Pt===1/0)return;ie.setup(G,q,Fe,W,He);let En,vt=Be;if(He!==null&&(En=ue.get(He),vt=Pe,vt.setIndex(En)),G.isMesh)q.wireframe===!0?(Le.setLineWidth(q.wireframeLinewidth*et()),vt.setMode(z.LINES)):vt.setMode(z.TRIANGLES);else if(G.isLine){let Je=q.linewidth;Je===void 0&&(Je=1),Le.setLineWidth(Je*et()),G.isLineSegments?vt.setMode(z.LINES):G.isLineLoop?vt.setMode(z.LINE_LOOP):vt.setMode(z.LINE_STRIP)}else G.isPoints?vt.setMode(z.POINTS):G.isSprite&&vt.setMode(z.TRIANGLES);if(G.isBatchedMesh)vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)vt.renderInstances(Mt,Pt,G.count);else if(W.isInstancedBufferGeometry){const Je=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,$s=Math.min(W.instanceCount,Je);vt.renderInstances(Mt,Pt,$s)}else vt.render(Mt,Pt)};function nt(S,U,W){S.transparent===!0&&S.side===At&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,Wa(S,U,W),S.side=ii,S.needsUpdate=!0,Wa(S,U,W),S.side=At):Wa(S,U,W)}this.compile=function(S,U,W=null){W===null&&(W=S),m=Oe.get(W),m.init(),v.push(m),W.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),S!==W&&S.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(b._useLegacyLights);const q=new Set;return S.traverse(function(G){const Se=G.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Fe=Se[Re];nt(Fe,W,G),q.add(Fe)}else nt(Se,W,G),q.add(Se)}),v.pop(),m=null,q},this.compileAsync=function(S,U,W=null){const q=this.compile(S,U,W);return new Promise(G=>{function Se(){if(q.forEach(function(Re){We.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){G(S);return}setTimeout(Se,10)}De.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let it=null;function Et(S){it&&it(S)}function Gt(){Vt.stop()}function pt(){Vt.start()}const Vt=new nd;Vt.setAnimationLoop(Et),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(S){it=S,Te.setAnimationLoop(S),S===null?Vt.stop():Vt.start()},Te.addEventListener("sessionstart",Gt),Te.addEventListener("sessionend",pt),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(U),U=Te.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,U,E),m=Oe.get(S,v.length),m.init(),v.push(m),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),O.setFromProjectionMatrix(fe),Y=this.localClippingEnabled,te=qe.init(this.clippingPlanes,Y),x=Ee.get(S,u.length),x.init(),u.push(x),vn(S,U,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort($,K),this.info.render.frame++,te===!0&&qe.beginShadows();const W=m.state.shadowsArray;if(le.render(W,S,U),te===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(x,S),m.setupLights(b._useLegacyLights),U.isArrayCamera){const q=U.cameras;for(let G=0,Se=q.length;G<Se;G++){const Re=q[G];Oo(x,S,Re,Re.viewport)}}else Oo(x,S,U);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(b,S,U),ie.resetDefaultState(),I=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function vn(S,U,W,q){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||O.intersectsSprite(S)){q&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const Re=re.update(S),Fe=S.material;Fe.visible&&x.push(S,Re,Fe,W,Ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||O.intersectsObject(S))){const Re=re.update(S),Fe=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ue.copy(Re.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(Fe)){const He=Re.groups;for(let Ke=0,Xe=He.length;Ke<Xe;Ke++){const $e=He[Ke],Mt=Fe[$e.materialIndex];Mt&&Mt.visible&&x.push(S,Re,Mt,W,Ue.z,$e)}}else Fe.visible&&x.push(S,Re,Fe,W,Ue.z,null)}}const Se=S.children;for(let Re=0,Fe=Se.length;Re<Fe;Re++)vn(Se[Re],U,W,q)}function Oo(S,U,W,q){const G=S.opaque,Se=S.transmissive,Re=S.transparent;m.setupLightsView(W),te===!0&&qe.setGlobalState(b.clippingPlanes,W),Se.length>0&&Nd(G,Se,U,W),q&&Le.viewport(T.copy(q)),G.length>0&&Va(G,U,W),Se.length>0&&Va(Se,U,W),Re.length>0&&Va(Re,U,W),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Nd(S,U,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const Se=ze.isWebGL2;me===null&&(me=new wi(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?Na:ei,minFilter:Ua,samples:Se?4:0})),b.getDrawingBufferSize(Ce),Se?me.setSize(Ce.x,Ce.y):me.setSize(ro(Ce.x),ro(Ce.y));const Re=b.getRenderTarget();b.setRenderTarget(me),b.getClearColor(se),P=b.getClearAlpha(),P<1&&b.setClearColor(16777215,.5),b.clear();const Fe=b.toneMapping;b.toneMapping=Qn,Va(S,W,q),A.updateMultisampleRenderTarget(me),A.updateRenderTargetMipmap(me);let He=!1;for(let Ke=0,Xe=U.length;Ke<Xe;Ke++){const $e=U[Ke],Mt=$e.object,Qt=$e.geometry,Pt=$e.material,En=$e.group;if(Pt.side===At&&Mt.layers.test(q.layers)){const vt=Pt.side;Pt.side=Ht,Pt.needsUpdate=!0,Fo(Mt,W,q,Qt,Pt,En),Pt.side=vt,Pt.needsUpdate=!0,He=!0}}He===!0&&(A.updateMultisampleRenderTarget(me),A.updateRenderTargetMipmap(me)),b.setRenderTarget(Re),b.setClearColor(se,P),b.toneMapping=Fe}function Va(S,U,W){const q=U.isScene===!0?U.overrideMaterial:null;for(let G=0,Se=S.length;G<Se;G++){const Re=S[G],Fe=Re.object,He=Re.geometry,Ke=q===null?Re.material:q,Xe=Re.group;Fe.layers.test(W.layers)&&Fo(Fe,U,W,He,Ke,Xe)}}function Fo(S,U,W,q,G,Se){S.onBeforeRender(b,U,W,q,G,Se),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(b,U,W,q,S,Se),G.transparent===!0&&G.side===At&&G.forceSinglePass===!1?(G.side=Ht,G.needsUpdate=!0,b.renderBufferDirect(W,U,q,G,S,Se),G.side=ii,G.needsUpdate=!0,b.renderBufferDirect(W,U,q,G,S,Se),G.side=At):b.renderBufferDirect(W,U,q,G,S,Se),S.onAfterRender(b,U,W,q,G,Se)}function Wa(S,U,W){U.isScene!==!0&&(U=Ne);const q=We.get(S),G=m.state.lights,Se=m.state.shadowsArray,Re=G.state.version,Fe=ke.getParameters(S,G.state,Se,U,W),He=ke.getProgramCacheKey(Fe);let Ke=q.programs;q.environment=S.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(S.isMeshStandardMaterial?B:w).get(S.envMap||q.environment),Ke===void 0&&(S.addEventListener("dispose",pe),Ke=new Map,q.programs=Ke);let Xe=Ke.get(He);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===Re)return Bo(S,Fe),Xe}else Fe.uniforms=ke.getUniforms(S),S.onBuild(W,Fe,b),S.onBeforeCompile(Fe,b),Xe=ke.acquireProgram(Fe,He),Ke.set(He,Xe),q.uniforms=Fe.uniforms;const $e=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&($e.clippingPlanes=qe.uniform),Bo(S,Fe),q.needsLights=zd(S),q.lightsStateVersion=Re,q.needsLights&&($e.ambientLightColor.value=G.state.ambient,$e.lightProbe.value=G.state.probe,$e.directionalLights.value=G.state.directional,$e.directionalLightShadows.value=G.state.directionalShadow,$e.spotLights.value=G.state.spot,$e.spotLightShadows.value=G.state.spotShadow,$e.rectAreaLights.value=G.state.rectArea,$e.ltc_1.value=G.state.rectAreaLTC1,$e.ltc_2.value=G.state.rectAreaLTC2,$e.pointLights.value=G.state.point,$e.pointLightShadows.value=G.state.pointShadow,$e.hemisphereLights.value=G.state.hemi,$e.directionalShadowMap.value=G.state.directionalShadowMap,$e.directionalShadowMatrix.value=G.state.directionalShadowMatrix,$e.spotShadowMap.value=G.state.spotShadowMap,$e.spotLightMatrix.value=G.state.spotLightMatrix,$e.spotLightMap.value=G.state.spotLightMap,$e.pointShadowMap.value=G.state.pointShadowMap,$e.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Xe,q.uniformsList=null,Xe}function zo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Es.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Bo(S,U){const W=We.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Od(S,U,W,q,G){U.isScene!==!0&&(U=Ne),A.resetTextureUnits();const Se=U.fog,Re=q.isMeshStandardMaterial?U.environment:null,Fe=E===null?b.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:zn,He=(q.isMeshStandardMaterial?B:w).get(q.envMap||Re),Ke=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),$e=!!W.morphAttributes.position,Mt=!!W.morphAttributes.normal,Qt=!!W.morphAttributes.color;let Pt=Qn;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Pt=b.toneMapping);const En=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=En!==void 0?En.length:0,Je=We.get(q),$s=m.state.lights;if(te===!0&&(Y===!0||S!==y)){const nn=S===y&&q.id===I;qe.setState(q,S,nn)}let yt=!1;q.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==$s.state.version||Je.outputColorSpace!==Fe||G.isBatchedMesh&&Je.batching===!1||!G.isBatchedMesh&&Je.batching===!0||G.isInstancedMesh&&Je.instancing===!1||!G.isInstancedMesh&&Je.instancing===!0||G.isSkinnedMesh&&Je.skinning===!1||!G.isSkinnedMesh&&Je.skinning===!0||G.isInstancedMesh&&Je.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Je.instancingColor===!1&&G.instanceColor!==null||Je.envMap!==He||q.fog===!0&&Je.fog!==Se||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==qe.numPlanes||Je.numIntersection!==qe.numIntersection)||Je.vertexAlphas!==Ke||Je.vertexTangents!==Xe||Je.morphTargets!==$e||Je.morphNormals!==Mt||Je.morphColors!==Qt||Je.toneMapping!==Pt||ze.isWebGL2===!0&&Je.morphTargetsCount!==vt)&&(yt=!0):(yt=!0,Je.__version=q.version);let li=Je.currentProgram;yt===!0&&(li=Wa(q,U,G));let Ho=!1,pa=!1,Ys=!1;const Ft=li.getUniforms(),ci=Je.uniforms;if(Le.useProgram(li.program)&&(Ho=!0,pa=!0,Ys=!0),q.id!==I&&(I=q.id,pa=!0),Ho||y!==S){Ft.setValue(z,"projectionMatrix",S.projectionMatrix),Ft.setValue(z,"viewMatrix",S.matrixWorldInverse);const nn=Ft.map.cameraPosition;nn!==void 0&&nn.setValue(z,Ue.setFromMatrixPosition(S.matrixWorld)),ze.logarithmicDepthBuffer&&Ft.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ft.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,pa=!0,Ys=!0)}if(G.isSkinnedMesh){Ft.setOptional(z,G,"bindMatrix"),Ft.setOptional(z,G,"bindMatrixInverse");const nn=G.skeleton;nn&&(ze.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ft.setValue(z,"boneTexture",nn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Ft.setOptional(z,G,"batchingTexture"),Ft.setValue(z,"batchingTexture",G._matricesTexture,A));const js=W.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0&&ze.isWebGL2===!0)&&je.update(G,W,li),(pa||Je.receiveShadow!==G.receiveShadow)&&(Je.receiveShadow=G.receiveShadow,Ft.setValue(z,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ci.envMap.value=He,ci.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),pa&&(Ft.setValue(z,"toneMappingExposure",b.toneMappingExposure),Je.needsLights&&Fd(ci,Ys),Se&&q.fog===!0&&_e.refreshFogUniforms(ci,Se),_e.refreshMaterialUniforms(ci,q,ne,X,me),Es.upload(z,zo(Je),ci,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Es.upload(z,zo(Je),ci,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ft.setValue(z,"center",G.center),Ft.setValue(z,"modelViewMatrix",G.modelViewMatrix),Ft.setValue(z,"normalMatrix",G.normalMatrix),Ft.setValue(z,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const nn=q.uniformsGroups;for(let Ks=0,Bd=nn.length;Ks<Bd;Ks++)if(ze.isWebGL2){const Go=nn[Ks];be.update(Go,li),be.bind(Go,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function Fd(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function zd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,U,W){We.get(S.texture).__webglTexture=U,We.get(S.depthTexture).__webglTexture=W;const q=We.get(S);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){const W=We.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){E=S,k=U,M=W;let q=!0,G=null,Se=!1,Re=!1;if(S){const He=We.get(S);He.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(z.FRAMEBUFFER,null),q=!1):He.__webglFramebuffer===void 0?A.setupRenderTarget(S):He.__hasExternalTextures&&A.rebindTextures(S,We.get(S.texture).__webglTexture,We.get(S.depthTexture).__webglTexture);const Ke=S.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Re=!0);const Xe=We.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xe[U])?G=Xe[U][W]:G=Xe[U],Se=!0):ze.isWebGL2&&S.samples>0&&A.useMultisampledRTT(S)===!1?G=We.get(S).__webglMultisampledFramebuffer:Array.isArray(Xe)?G=Xe[W]:G=Xe,T.copy(S.viewport),N.copy(S.scissor),H=S.scissorTest}else T.copy(J).multiplyScalar(ne).floor(),N.copy(V).multiplyScalar(ne).floor(),H=Z;if(Le.bindFramebuffer(z.FRAMEBUFFER,G)&&ze.drawBuffers&&q&&Le.drawBuffers(S,G),Le.viewport(T),Le.scissor(N),Le.setScissorTest(H),Se){const He=We.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,He.__webglTexture,W)}else if(Re){const He=We.get(S.texture),Ke=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,He.__webglTexture,W||0,Ke)}I=-1},this.readRenderTargetPixels=function(S,U,W,q,G,Se,Re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=We.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){Le.bindFramebuffer(z.FRAMEBUFFER,Fe);try{const He=S.texture,Ke=He.format,Xe=He.type;if(Ke!==mn&&D.convert(Ke)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Xe===Na&&(De.has("EXT_color_buffer_half_float")||ze.isWebGL2&&De.has("EXT_color_buffer_float"));if(Xe!==ei&&D.convert(Xe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Jn&&(ze.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-q&&W>=0&&W<=S.height-G&&z.readPixels(U,W,q,G,D.convert(Ke),D.convert(Xe),Se)}finally{const He=E!==null?We.get(E).__webglFramebuffer:null;Le.bindFramebuffer(z.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(S,U,W=0){const q=Math.pow(2,-W),G=Math.floor(U.image.width*q),Se=Math.floor(U.image.height*q);A.setTexture2D(U,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,S.x,S.y,G,Se),Le.unbindTexture()},this.copyTextureToTexture=function(S,U,W,q=0){const G=U.image.width,Se=U.image.height,Re=D.convert(W.format),Fe=D.convert(W.type);A.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,S.x,S.y,G,Se,Re,Fe,U.image.data):U.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Re,U.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,q,S.x,S.y,Re,Fe,U.image),q===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(S,U,W,q,G=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=S.max.x-S.min.x+1,Re=S.max.y-S.min.y+1,Fe=S.max.z-S.min.z+1,He=D.convert(q.format),Ke=D.convert(q.type);let Xe;if(q.isData3DTexture)A.setTexture3D(q,0),Xe=z.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)A.setTexture2DArray(q,0),Xe=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const $e=z.getParameter(z.UNPACK_ROW_LENGTH),Mt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Qt=z.getParameter(z.UNPACK_SKIP_PIXELS),Pt=z.getParameter(z.UNPACK_SKIP_ROWS),En=z.getParameter(z.UNPACK_SKIP_IMAGES),vt=W.isCompressedTexture?W.mipmaps[G]:W.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,vt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,S.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,S.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,S.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(Xe,G,U.x,U.y,U.z,Se,Re,Fe,He,Ke,vt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Xe,G,U.x,U.y,U.z,Se,Re,Fe,He,vt.data)):z.texSubImage3D(Xe,G,U.x,U.y,U.z,Se,Re,Fe,He,Ke,vt),z.pixelStorei(z.UNPACK_ROW_LENGTH,$e),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Mt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,En),G===0&&q.generateMipmaps&&z.generateMipmap(Xe),Le.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Le.unbindTexture()},this.resetState=function(){k=0,M=0,E=null,Le.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===vo?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Us?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?yi:Gc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yi?It:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Xm extends yo{}Xm.prototype.isWebGL1Renderer=!0;class Ba{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ha{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new Ha(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ua extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class qm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new L;class Ds{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ds(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class si extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xi;const va=new L,qi=new L,$i=new L,Yi=new we,ba=new we,dd=new bt,ps=new L,_a=new L,fs=new L,lc=new we,Lr=new we,cc=new we;class Li extends Lt{constructor(e=new si){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qm(t,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new Ds(i,3,0,!1)),Xi.setAttribute("uv",new Ds(i,2,3,!1))}this.geometry=Xi,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),dd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-$i.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;ms(ps.set(-.5,-.5,0),$i,r,qi,a,s),ms(_a.set(.5,-.5,0),$i,r,qi,a,s),ms(fs.set(.5,.5,0),$i,r,qi,a,s),lc.set(0,0),Lr.set(1,0),cc.set(1,1);let o=e.ray.intersectTriangle(ps,_a,fs,!1,va);if(o===null&&(ms(_a.set(-.5,.5,0),$i,r,qi,a,s),Lr.set(0,1),o=e.ray.intersectTriangle(ps,fs,_a,!1,va),o===null))return;const l=e.ray.origin.distanceTo(va);l<e.near||l>e.far||t.push({distance:l,point:va.clone(),uv:rn.getInterpolation(va,ps,_a,fs,lc,Lr,cc,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ms(n,e,t,i,a,s){Yi.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(ba.x=s*Yi.x-a*Yi.y,ba.y=a*Yi.x+s*Yi.y):ba.copy(Yi),n.copy(e),n.x+=ba.x,n.y+=ba.y,n.applyMatrix4(dd)}class ha extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new L,uc=new L,hc=new bt,kr=new Yc,gs=new Ns;class Bn extends Lt{constructor(e=new xt,t=new ha){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)dc.fromBufferAttribute(t,a-1),uc.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=dc.distanceTo(uc);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(a),gs.radius+=s,e.ray.intersectsSphere(gs)===!1)return;hc.copy(a).invert(),kr.copy(e.ray).applyMatrix4(hc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=new L,c=new L,h=new L,f=new L,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const u=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let b=u,_=v-1;b<_;b+=p){const k=g.getX(b),M=g.getX(b+1);if(d.fromBufferAttribute(m,k),c.fromBufferAttribute(m,M),kr.distanceSqToSegment(d,c,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,r.start),v=Math.min(m.count,r.start+r.count);for(let b=u,_=v-1;b<_;b+=p){if(d.fromBufferAttribute(m,b),c.fromBufferAttribute(m,b+1),kr.distanceSqToSegment(d,c,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class zs extends Zt{constructor(e,t,i,a,s,r,o,l,d){super(e,t,i,a,s,r,o,l,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const s=i.length;let r;t?r=t:r=e*i[s-1];let o=0,l=s-1,d;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),d=i[a]-r,d<0)o=a+1;else if(d>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);const c=i[a],f=i[a+1]-c,p=(r-c)/f;return(a+p)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);const r=this.getPoint(a),o=this.getPoint(s),l=t||(r.isVector2?new we:new L);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,a=[],s=[],r=[],o=new L,l=new bt;for(let p=0;p<=e;p++){const g=p/e;a[p]=this.getTangentAt(g,new L)}s[0]=new L,r[0]=new L;let d=Number.MAX_VALUE;const c=Math.abs(a[0].x),h=Math.abs(a[0].y),f=Math.abs(a[0].z);c<=d&&(d=c,i.set(1,0,0)),h<=d&&(d=h,i.set(0,1,0)),f<=d&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Nt(a[p-1].dot(a[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(a[p],s[p])}if(t===!0){let p=Math.acos(Nt(s[0].dot(s[e]),-1,1));p/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(a[g],p*g)),r[g].crossVectors(a[g],s[g])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wo extends Sn{constructor(e=0,t=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new we,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),d=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=d-this.aY;l=f*c-p*h+this.aX,d=f*h+p*c+this.aY}return i.set(l,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $m extends wo{constructor(e,t,i,a,s,r){super(e,t,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Mo(){let n=0,e=0,t=0,i=0;function a(s,r,o,l){n=s,e=o,t=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,d){a(r,o,d*(o-s),d*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,d,c,h){let f=(r-s)/d-(o-s)/(d+c)+(o-r)/c,p=(o-r)/c-(l-r)/(c+h)+(l-o)/h;f*=c,p*=c,a(r,o,f,p)},calc:function(s){const r=s*s,o=r*s;return n+e*s+t*r+i*o}}}const xs=new L,Cr=new Mo,Rr=new Mo,Pr=new Mo;class ud extends Sn{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new L){const i=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let d,c;this.closed||o>0?d=a[(o-1)%s]:(xs.subVectors(a[0],a[1]).add(a[0]),d=xs);const h=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?c=a[(o+2)%s]:(xs.subVectors(a[s-1],a[s-2]).add(a[s-1]),c=xs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(d.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(c),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Cr.initNonuniformCatmullRom(d.x,h.x,f.x,c.x,g,x,m),Rr.initNonuniformCatmullRom(d.y,h.y,f.y,c.y,g,x,m),Pr.initNonuniformCatmullRom(d.z,h.z,f.z,c.z,g,x,m)}else this.curveType==="catmullrom"&&(Cr.initCatmullRom(d.x,h.x,f.x,c.x,this.tension),Rr.initCatmullRom(d.y,h.y,f.y,c.y,this.tension),Pr.initCatmullRom(d.z,h.z,f.z,c.z,this.tension));return i.set(Cr.calc(l),Rr.calc(l),Pr.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new L().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pc(n,e,t,i,a){const s=(i-e)*.5,r=(a-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+r)*l+(-3*t+3*i-2*s-r)*o+s*n+t}function Ym(n,e){const t=1-n;return t*t*e}function jm(n,e){return 2*(1-n)*n*e}function Km(n,e){return n*n*e}function La(n,e,t,i){return Ym(n,e)+jm(n,t)+Km(n,i)}function Jm(n,e){const t=1-n;return t*t*t*e}function Zm(n,e){const t=1-n;return 3*t*t*n*e}function Qm(n,e){return 3*(1-n)*n*n*e}function eg(n,e){return n*n*n*e}function ka(n,e,t,i,a){return Jm(n,e)+Zm(n,t)+Qm(n,i)+eg(n,a)}class hd extends Sn{constructor(e=new we,t=new we,i=new we,a=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new we){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(ka(e,a.x,s.x,r.x,o.x),ka(e,a.y,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tg extends Sn{constructor(e=new L,t=new L,i=new L,a=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new L){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(ka(e,a.x,s.x,r.x,o.x),ka(e,a.y,s.y,r.y,o.y),ka(e,a.z,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pd extends Sn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ng extends Sn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fd extends Sn{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(La(e,a.x,s.x,r.x),La(e,a.y,s.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ig extends Sn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(La(e,a.x,s.x,r.x),La(e,a.y,s.y,r.y),La(e,a.z,s.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class md extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const i=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),o=s-r,l=a[r===0?r:r-1],d=a[r],c=a[r>a.length-2?a.length-1:r+1],h=a[r>a.length-3?a.length-1:r+2];return i.set(pc(o,l.x,d.x,c.x,h.x),pc(o,l.y,d.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new we().fromArray(a))}return this}}var fc=Object.freeze({__proto__:null,ArcCurve:$m,CatmullRomCurve3:ud,CubicBezierCurve:hd,CubicBezierCurve3:tg,EllipseCurve:wo,LineCurve:pd,LineCurve3:ng,QuadraticBezierCurve:fd,QuadraticBezierCurve3:ig,SplineCurve:md});class ag extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let s=0;for(;s<a.length;){if(a[s]>=i){const r=a[s]-i,o=this.curves[s],l=o.getLength(),d=l===0?0:1-r/l;return o.getPointAt(d,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,s=this.curves;a<s.length;a++){const r=s[a],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let d=0;d<l.length;d++){const c=l[d];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new fc[a.type]().fromJSON(a))}return this}}class sg extends ag{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new pd(this.currentPoint.clone(),new we(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const s=new fd(this.currentPoint.clone(),new we(e,t),new we(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,s,r){const o=new hd(this.currentPoint.clone(),new we(e,t),new we(i,a),new we(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new md(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,a,s,r),this}absarc(e,t,i,a,s,r){return this.absellipse(e,t,i,i,a,s,r),this}ellipse(e,t,i,a,s,r,o,l){const d=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+d,t+c,i,a,s,r,o,l),this}absellipse(e,t,i,a,s,r,o,l){const d=new wo(e,t,i,a,s,r,o,l);if(this.curves.length>0){const h=d.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(d);const c=d.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class So extends xt{constructor(e=[new we(0,-.5),new we(.5,0),new we(0,.5)],t=12,i=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:a},t=Math.floor(t),a=Nt(a,0,Math.PI*2);const s=[],r=[],o=[],l=[],d=[],c=1/t,h=new L,f=new we,p=new L,g=new L,x=new L;let m=0,u=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,p.x=u*1,p.y=-m,p.z=u*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let v=0;v<=t;v++){const b=i+v*c*a,_=Math.sin(b),k=Math.cos(b);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*_,h.y=e[M].y,h.z=e[M].x*k,r.push(h.x,h.y,h.z),f.x=v/t,f.y=M/(e.length-1),o.push(f.x,f.y);const E=l[3*M+0]*_,I=l[3*M+1],y=l[3*M+0]*k;d.push(E,I,y)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){const _=b+v*e.length,k=_,M=_+e.length,E=_+e.length+1,I=_+1;s.push(k,M,I),s.push(E,I,M)}this.setIndex(s),this.setAttribute("position",new ft(r,3)),this.setAttribute("uv",new ft(o,2)),this.setAttribute("normal",new ft(d,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.points,e.segments,e.phiStart,e.phiLength)}}class Eo extends So{constructor(e=1,t=1,i=4,a=8){const s=new sg;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),a),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:a}}static fromJSON(e){return new Eo(e.radius,e.length,e.capSegments,e.radialSegments)}}class cn extends xt{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const s=[],r=[],o=[],l=[],d=new L,c=new we;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=i+h/t*a;d.x=e*Math.cos(p),d.y=e*Math.sin(p),r.push(d.x,d.y,d.z),o.push(0,0,1),c.x=(r[f]/e+1)/2,c.y=(r[f+1]/e+1)/2,l.push(c.x,c.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ge extends xt{constructor(e=1,t=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const d=this;a=Math.floor(a),s=Math.floor(s);const c=[],h=[],f=[],p=[];let g=0;const x=[],m=i/2;let u=0;v(),r===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(p,2));function v(){const _=new L,k=new L;let M=0;const E=(t-e)/i;for(let I=0;I<=s;I++){const y=[],T=I/s,N=T*(t-e)+e;for(let H=0;H<=a;H++){const se=H/a,P=se*l+o,F=Math.sin(P),X=Math.cos(P);k.x=N*F,k.y=-T*i+m,k.z=N*X,h.push(k.x,k.y,k.z),_.set(F,E,X).normalize(),f.push(_.x,_.y,_.z),p.push(se,1-T),y.push(g++)}x.push(y)}for(let I=0;I<a;I++)for(let y=0;y<s;y++){const T=x[y][I],N=x[y+1][I],H=x[y+1][I+1],se=x[y][I+1];c.push(T,N,se),c.push(N,H,se),M+=6}d.addGroup(u,M,0),u+=M}function b(_){const k=g,M=new we,E=new L;let I=0;const y=_===!0?e:t,T=_===!0?1:-1;for(let H=1;H<=a;H++)h.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),g++;const N=g;for(let H=0;H<=a;H++){const P=H/a*l+o,F=Math.cos(P),X=Math.sin(P);E.x=y*X,E.y=m*T,E.z=y*F,h.push(E.x,E.y,E.z),f.push(0,T,0),M.x=F*.5+.5,M.y=X*.5*T+.5,p.push(M.x,M.y),g++}for(let H=0;H<a;H++){const se=k+H,P=N+H;_===!0?c.push(P,P+1,se):c.push(P+1,P,se),I+=3}d.addGroup(u,I,_===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ge(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hn extends ge{constructor(e=1,t=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Hn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class To extends xt{constructor(e=.5,t=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],d=[],c=[];let h=e;const f=(t-e)/a,p=new L,g=new we;for(let x=0;x<=a;x++){for(let m=0;m<=i;m++){const u=s+m/i*r;p.x=h*Math.cos(u),p.y=h*Math.sin(u),l.push(p.x,p.y,p.z),d.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,c.push(g.x,g.y)}h+=f}for(let x=0;x<a;x++){const m=x*(i+1);for(let u=0;u<i;u++){const v=u+m,b=v,_=v+i+1,k=v+i+2,M=v+1;o.push(b,_,M),o.push(_,k,M)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class at extends xt{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let d=0;const c=[],h=new L,f=new L,p=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){const v=[],b=u/i;let _=0;u===0&&r===0?_=.5/t:u===i&&l===Math.PI&&(_=-.5/t);for(let k=0;k<=t;k++){const M=k/t;h.x=-e*Math.cos(a+M*s)*Math.sin(r+b*o),h.y=e*Math.cos(r+b*o),h.z=e*Math.sin(a+M*s)*Math.sin(r+b*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(M+_,1-b),v.push(d++)}c.push(v)}for(let u=0;u<i;u++)for(let v=0;v<t;v++){const b=c[u][v+1],_=c[u][v],k=c[u+1][v],M=c[u+1][v+1];(u!==0||r>0)&&p.push(b,_,M),(u!==i-1||l<Math.PI)&&p.push(_,k,M)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xn extends xt{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);const r=[],o=[],l=[],d=[],c=new L,h=new L,f=new L;for(let p=0;p<=i;p++)for(let g=0;g<=a;g++){const x=g/a*s,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),c.x=e*Math.cos(x),c.y=e*Math.sin(x),f.subVectors(h,c).normalize(),l.push(f.x,f.y,f.z),d.push(g/a),d.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=a;g++){const x=(a+1)*p+g-1,m=(a+1)*(p-1)+g-1,u=(a+1)*(p-1)+g,v=(a+1)*p+g;r.push(x,m,v),r.push(m,u,v)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ae extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Me extends ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bs extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class gd extends Bs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Dr=new bt,mc=new L,gc=new L;class xd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(mc),gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gc),t.updateMatrixWorld(),Dr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xc=new bt,ya=new L,Ir=new L;class rg extends xd{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),i.position.copy(ya),Ir.copy(i.position),Ir.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ir),i.updateMatrixWorld(),a.makeTranslation(-ya.x,-ya.y,-ya.z),xc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc)}}class ni extends Bs{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new rg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class og extends xd{constructor(){super(new id(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mn extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new og}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hs extends Bs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);const ot=60,Ve=40,Ut=14,Ur=[new L(-16,0,6),new L(0,0,-6),new L(16,0,6)];function lg(){const n=new ua;n.background=new Ge(1711918),n.fog=new Ha(1711918,40,90),n.add(new Hs(13691135,.55));const e=[[-18,Ut-.5,8],[-18,Ut-.5,-8],[0,Ut-.5,8],[0,Ut-.5,-8],[18,Ut-.5,8],[18,Ut-.5,-8]];for(const[i,a,s]of e){const r=new ni(15267071,1.2,28);r.position.set(i,a,s),n.add(r)}const t=new Mn(16777215,.5);return t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),n.add(t),{scene:n}}function cg(n){dg(n),ug(n),hg(n)}function dg(n){const e=new ae({color:15263976,roughness:.8,metalness:0}),t=new ae({color:14541804,roughness:.85,metalness:0}),i=new ae({color:16119288,roughness:.9,metalness:0});new ae({color:2764605,roughness:.7,metalness:.1});const a=new C(new _t(ot,Ve),e);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);const s=new ha({color:13421772});for(let u=-ot/2;u<=ot/2;u+=3){const v=new xt().setFromPoints([new L(u,.01,-Ve/2),new L(u,.01,Ve/2)]);n.add(new Bn(v,s))}for(let u=-Ve/2;u<=Ve/2;u+=3){const v=new xt().setFromPoints([new L(-ot/2,.01,u),new L(ot/2,.01,u)]);n.add(new Bn(v,s))}const r=new C(new _t(ot,Ve),i);r.rotation.x=Math.PI/2,r.position.y=Ut,n.add(r);const o=[{w:ot,h:Ut,x:0,y:Ut/2,z:-Ve/2,ry:0},{w:ot,h:Ut,x:0,y:Ut/2,z:Ve/2,ry:Math.PI},{w:Ve,h:Ut,x:-ot/2,y:Ut/2,z:0,ry:Math.PI/2},{w:Ve,h:Ut,x:ot/2,y:Ut/2,z:0,ry:-Math.PI/2}];for(const u of o){const v=new C(new _t(u.w,u.h),t);v.position.set(u.x,u.y,u.z),v.rotation.y=u.ry,n.add(v)}const l=new Me({color:11581640}),d=[{w:ot,x:0,z:-Ve/2+.05,ry:0},{w:ot,x:0,z:Ve/2-.05,ry:Math.PI},{w:Ve,x:-ot/2+.05,z:0,ry:Math.PI/2},{w:Ve,x:ot/2-.05,z:0,ry:-Math.PI/2}];for(const u of d){const v=new C(new oe(u.w,.5,.1),l);v.position.set(u.x,.25,u.z),v.rotation.y=u.ry,n.add(v)}const c=new Me({color:16777215}),h=new ae({color:15663088,emissive:15663088,emissiveIntensity:.9});for(const[u,,v]of[[-18,0,8],[-18,0,-8],[0,0,8],[0,0,-8],[18,0,8],[18,0,-8]]){const b=new C(new oe(6,.25,.8),c);b.position.set(u,Ut-.12,v),n.add(b);const _=new C(new ge(.1,.1,5.6,16),h);_.rotation.z=Math.PI/2,_.position.set(u,Ut-.3,v),n.add(_)}const f=new Me({color:9083568}),p=new Me({color:5929626}),g=new C(new oe(3.2,7.2,.15),f);g.position.set(0,3.6,Ve/2-.05),n.add(g);const x=new C(new oe(2.8,6.8,.1),p);x.position.set(0,3.4,Ve/2-.04),n.add(x);const m=new Me({color:6993128,transparent:!0,opacity:.35});for(const u of[-14,0,14]){const v=new C(new oe(5,4,.15),f);v.position.set(u,8,-Ve/2+.05),n.add(v);const b=new C(new oe(4.4,3.4,.08),m);b.position.set(u,8,-Ve/2+.06),n.add(b)}}function ug(n){const e=new ae({color:15791336,roughness:.55,metalness:.05}),t=new ae({color:4871528,roughness:.7,metalness:.05}),i=new ae({color:13687016,roughness:.6,metalness:0}),a=new ae({color:8952234,roughness:.4,metalness:.5}),s=[{x:-16,z:5},{x:0,z:-6},{x:16,z:5}];for(const{x:m,z:u}of s){const v=new C(new oe(7,3,3),t);v.position.set(m,1.5,u),v.castShadow=!0,n.add(v);const b=new C(new oe(7.2,.15,3.2),e);b.position.set(m,3.08,u),b.castShadow=!0,n.add(b);for(const[_,k]of[[-3.2,-1.3],[3.2,-1.3],[-3.2,1.3],[3.2,1.3]]){const M=new C(new oe(.2,3,.2),a);M.position.set(m+_,1.5,u+k),n.add(M)}for(let _=0;_<3;_++){const k=new C(new oe(2,.6,.05),i);k.position.set(m-2.2+_*2.2,1.8,u+1.52),n.add(k)}if(m===0){const _=new ae({color:13426158,roughness:.3,metalness:.3}),k=new C(new oe(1.2,.2,.9),_);k.position.set(2.5,3.15,u),n.add(k);const M=new C(new ge(.05,.05,.6,16),a);M.position.set(2.5,3.55,u-.3),n.add(M);const E=new C(new at(.09,16,14),a);E.position.set(2.5,3.85,u),n.add(E)}}for(let m=-22;m<=22;m+=11)for(let u=0;u<3;u++){const v=new C(new oe(9,.12,1.2),i);v.position.set(m,5+u*2.2,-Ve/2+.8),n.add(v);for(const b of[-4,4]){const _=new C(new oe(.1,.5,1),a);_.position.set(m+b,4.75+u*2.2,-Ve/2+.8),n.add(_)}}const r=new C(new oe(3,3,22),t);r.position.set(-ot/2+2,1.5,0),r.castShadow=!0,n.add(r);const o=new C(new oe(3.2,.15,22.2),e);o.position.set(-ot/2+2,3.08,0),n.add(o);const l=new C(new oe(3,3,22),t);l.position.set(ot/2-2,1.5,0),l.castShadow=!0,n.add(l);const d=new C(new oe(3.2,.15,22.2),e);d.position.set(ot/2-2,3.08,0),n.add(d);const c=new ae({color:6978186,roughness:.6,metalness:.1}),h=new ae({color:8965341,transparent:!0,opacity:.4,roughness:.1,metalness:0}),f=new C(new oe(6,5,2.5),c);f.position.set(-20,4.5,-Ve/2+1.5),n.add(f);const p=new C(new oe(5,3,.08),h);p.position.set(-20,4.8,-Ve/2+2.8),n.add(p);const g=new C(new oe(6.2,3,2.8),t);g.position.set(-20,1.5,-Ve/2+1.6),n.add(g);const x=new C(new oe(6.2,.15,2.8),e);x.position.set(-20,3.08,-Ve/2+1.6),n.add(x)}function hg(n){const e=new ae({color:11197934,transparent:!0,opacity:.7,roughness:.05,metalness:0}),t=new ae({color:4033344,transparent:!0,opacity:.85,roughness:.15,metalness:0}),i=new ae({color:8010768,transparent:!0,opacity:.85,roughness:.2,metalness:0}),a=new ae({color:12597547,transparent:!0,opacity:.85,roughness:.15,metalness:0}),s=new ae({color:16777215,roughness:.7,metalness:0}),r=new ae({color:8952234,roughness:.35,metalness:.6});new ae({color:16774604,roughness:.8});const o=[{x:-24,y:5.3,z:-Ve/2+.7,mat:t,r:.22,h:.7},{x:-22,y:5.3,z:-Ve/2+.7,mat:i,r:.18,h:.9},{x:-20,y:5.3,z:-Ve/2+.7,mat:a,r:.2,h:.75},{x:-18,y:5.3,z:-Ve/2+.7,mat:e,r:.16,h:.65},{x:-13,y:5.3,z:-Ve/2+.7,mat:i,r:.2,h:.85},{x:-11,y:5.3,z:-Ve/2+.7,mat:t,r:.25,h:.6},{x:-2,y:5.3,z:-Ve/2+.7,mat:a,r:.18,h:.8},{x:0,y:5.3,z:-Ve/2+.7,mat:e,r:.22,h:.7},{x:2,y:5.3,z:-Ve/2+.7,mat:t,r:.2,h:.9},{x:10,y:5.3,z:-Ve/2+.7,mat:i,r:.19,h:.7},{x:12,y:5.3,z:-Ve/2+.7,mat:a,r:.21,h:.8},{x:22,y:5.3,z:-Ve/2+.7,mat:e,r:.23,h:.65},{x:24,y:5.3,z:-Ve/2+.7,mat:t,r:.17,h:.9},{x:-23,y:7.5,z:-Ve/2+.7,mat:a,r:.2,h:.8},{x:-21,y:7.5,z:-Ve/2+.7,mat:e,r:.18,h:.7},{x:-1,y:7.5,z:-Ve/2+.7,mat:i,r:.22,h:.85},{x:1,y:7.5,z:-Ve/2+.7,mat:t,r:.2,h:.7},{x:21,y:7.5,z:-Ve/2+.7,mat:a,r:.19,h:.75}];for(const M of o){const E=new C(new ge(M.r,M.r*.9,M.h,20),M.mat);E.position.set(M.x,M.y+M.h/2,M.z),n.add(E);const I=new C(new ge(M.r*.7,M.r*.7,.12,20),s);I.position.set(M.x,M.y+M.h+.06,M.z),n.add(I)}pg(n,-ot/2+2.5,3.2,-6,r,s),fg(n,-ot/2+2.5,3.2,4,r,s),mg(n,ot/2-2.5,3.2,-5,r);for(let M=0;M<4;M++){const E=M%2===0?i:e,I=new C(new ge(.22,.2,.5,20),E);I.position.set(ot/2-2.5+(M-1.5)*.7,3.5,5+M%2*.6),n.add(I)}const l=new Me({color:16769154}),d=new C(new oe(3.5,5,.06),l);d.position.set(ot/2-.06,6,10),d.rotation.y=-Math.PI/2,n.add(d);const c=Pn(`⚠ KESELAMATAN
LABORATORIUM`,15022389);c.scale.set(4,1.6,1),c.position.set(ot/2-.3,6.5,10),n.add(c);const h=new C(new ge(.06,.06,1.5,16),r);h.position.set(-ot/2+.2,9,14),h.rotation.z=Math.PI/2,n.add(h);for(const M of[-.5,0,.5]){const E=new C(new xn(.14,.03,12,24,Math.PI),r);E.position.set(-ot/2+.25,8.6,14+M),E.rotation.y=Math.PI/2,n.add(E)}const f=new Me({color:16448250}),p=new C(new oe(.05,2.5,1.5),f);p.position.set(-ot/2+.28,7.8,14),n.add(p);const g=new Me({color:15158332}),x=new Me({color:15965202});for(const[M,E,I]of[[-8,14,g],[8,14,x]]){const y=new C(new ge(.45,.38,1,20),I);y.position.set(M,.5,E),n.add(y)}const m=new Me({color:12597547}),u=new C(new ge(.2,.22,1.1,20),m);u.position.set(ot/2-.8,1.8,-14),n.add(u);const v=new C(new ge(.1,.2,.3,20),r);v.position.set(ot/2-.8,2.5,-14),n.add(v);const b=new Me({color:16777215}),_=new C(new ge(.7,.7,.1,24),b);_.rotation.x=Math.PI/2,_.position.set(8,10.5,-Ve/2+.1),n.add(_);const k=new C(new xn(.7,.06,12,40),r);k.rotation.x=Math.PI/2,k.position.set(8,10.5,-Ve/2+.12),n.add(k)}function pg(n,e,t,i,a,s){const r=new C(new ge(.65,.7,.7,24),s);r.position.set(e,t+.35,i),n.add(r);const o=new C(new ge(.66,.66,.12,24),a);o.position.set(e,t+.76,i),n.add(o);const l=new C(new at(.1,16,14),a);l.position.set(e,t+.88,i),n.add(l)}function fg(n,e,t,i,a,s){const r=new C(new oe(.7,.12,.55),a);r.position.set(e,t+.06,i),n.add(r);const o=new C(new oe(.12,1.4,.12),a);o.position.set(e,t+.76,i-.1),n.add(o);const l=new C(new ge(.1,.12,.5,16),a);l.position.set(e,t+1.7,i-.15),l.rotation.z=.4,n.add(l);const d=new C(new ge(.06,.08,.35,16),s);d.position.set(e+.05,t+.75,i+.05),n.add(d)}function mg(n,e,t,i,a){const s=new ae({color:2899536,roughness:.6,metalness:.15}),r=new C(new oe(1,.18,1),s);r.position.set(e,t+.09,i),n.add(r);const o=new C(new ge(.38,.38,.04,20),a);o.position.set(e,t+.2,i),n.add(o);const l=new ae({color:16737792,emissive:16737792,emissiveIntensity:.6,transparent:!0,opacity:.7}),d=new C(new cn(.3,20),l);d.rotation.x=-Math.PI/2,d.position.set(e,t+.22,i),n.add(d);const c=new Me({color:11197934,transparent:!0,opacity:.8}),h=new C(new at(.3,20,16),c);h.position.set(e,t+.55,i),n.add(h);const f=new C(new ge(.08,.12,.35,20),c);f.position.set(e,t+.9,i),n.add(f)}function bd(n){const e=[];{const t=Ur[0],i=new Yt;i.position.copy(t);const a=new Me({color:11197934,transparent:!0,opacity:.75}),s=new Me({color:7027216,transparent:!0,opacity:.9}),r=new Me({color:8952234}),o=new Me({color:16448250}),l=new Me({color:15791336}),d=new C(new oe(6.8,.12,2.8),l);d.position.set(0,3.14,0),i.add(d);const c=new Me({color:14540253}),h=new C(new oe(2,.18,.45),c);h.position.set(-1.5,3.3,.2),i.add(h);for(let y=0;y<5;y++){const T=new C(new ge(.07,.07,.55,16),s);T.position.set(-2.2+y*.42,3.62,.2),i.add(T)}const f=new C(new at(.38,20,16),a);f.position.set(.8,3.62,-.3),i.add(f);const p=new C(new ge(.1,.15,.45,20),a);p.position.set(.8,4.05,-.3),i.add(p);const g=new C(new at(.32,18,16),s);g.position.set(.8,3.58,-.3),i.add(g);const x=new C(new ge(.04,.04,1,16),r);x.position.set(.8,4.2,-.3),i.add(x);const m=new C(new oe(.5,.35,.15),o);m.position.set(.8,4.85,-.3),i.add(m);const u=new Me({color:16775399}),v=new C(new oe(.7,.9,.05),u);v.position.set(2.3,3.85,-.5),v.rotation.y=-.3,i.add(v);const b=new Me({color:8952234}),_=new C(new oe(.35,.12,.06),b);_.position.set(2.3,4.34,-.46),_.rotation.y=-.3,i.add(_);const k=Pn("❓ Fenomena 1 — Kualitas Air",54527);k.position.set(0,3.2,0),i.add(k);const M=Pn("✅ Selesai",3066993);M.position.set(0,4.2,0),M.visible=!1,i.add(M);const E=new ae({color:54527,emissive:54527,emissiveIntensity:.5,transparent:!0,opacity:.25,side:At}),I=new C(new cn(3.2,32),E);I.rotation.x=-Math.PI/2,I.position.y=.02,i.add(I),n.add(i),e.push({group:i,glowMat:E,idx:0,pos:t,done:!1,doneSprite:M,_probe:x,_meter:m})}{const t=Ur[1],i=new Yt;i.position.copy(t);const a=new Me({color:11197934,transparent:!0,opacity:.7}),s=new Me({color:5910024,transparent:!0,opacity:.9});new Me({color:1735226,transparent:!0,opacity:.85});const r=new Me({color:8952234}),o=new Me({color:16448250});new Me({color:15965202});const l=new C(new oe(6.8,.12,2.8),new Me({color:15791336}));l.position.set(0,3.14,0),i.add(l);const d=new C(new oe(.22,.9,.14),o);d.position.set(-2,3.75,0),i.add(d);const c=new C(new oe(.16,.3,.05),new Me({color:1714714}));c.position.set(-2,3.88,.1),i.add(c);const h=new C(new ge(.03,.03,.5,16),r);h.position.set(-2,3.05,0),i.add(h);const f=new C(new ge(.42,.38,.8,20),a);f.position.set(-.5,3.7,.2),i.add(f);const p=new C(new ge(.38,.34,.6,20),s);p.position.set(-.5,3.6,.2),i.add(p),new Me({color:2899536});const g=new C(new ge(.05,.05,1.4,14),r);g.position.set(1.2,3.9,-.7),i.add(g);const x=new C(new oe(1.4,1,.05),new Me({color:16775399}));x.position.set(1.2,4.85,-.7),i.add(x);const m=Pn("K⁺  Ca²⁺  Cl⁻",1735226);m.scale.set(2.8,.75,1),m.position.set(1.2,4.92,-.6),i.add(m);const u=new C(new oe(.55,.4,.22),o);u.position.set(2.2,3.4,0),i.add(u);const v=new C(new oe(.38,.22,.06),new Me({color:662026}));v.position.set(2.2,3.44,.14),i.add(v);for(const[E,I]of[[2.8,s],[3.3,a]]){const y=new C(new ge(.18,.16,.7,20),I);y.position.set(E,3.55,-.5),i.add(y)}const b=Pn("❓ Fenomena 2 — Komposisi TDS",16750848);b.position.set(0,3.2,0),i.add(b);const _=Pn("✅ Selesai",3066993);_.position.set(0,4.2,0),_.visible=!1,i.add(_);const k=new ae({color:16750848,emissive:16750848,emissiveIntensity:.5,transparent:!0,opacity:.25,side:At}),M=new C(new cn(3.2,32),k);M.rotation.x=-Math.PI/2,M.position.y=.02,i.add(M),n.add(i),e.push({group:i,glowMat:k,idx:1,pos:t,done:!1,doneSprite:_,_beaker:f,_liq:p})}{const t=Ur[2],i=new Yt;i.position.copy(t);const a=new Me({color:8018990}),s=new Me({color:5025616}),r=new Me({color:11059264}),o=new Me({color:11887901}),l=new Me({color:11197934,transparent:!0,opacity:.7}),d=new Me({color:16448250}),c=new Me({color:8952234}),h=new C(new oe(6.8,.12,2.8),new Me({color:15791336}));h.position.set(0,3.14,0),i.add(h);const f=[{x:-2,mat:s,height:.9,label:`Thn 1
62%`,lColor:5025616},{x:0,mat:r,height:1.1,label:`Thn 2
78%`,lColor:11059264},{x:2,mat:o,height:.35,label:`Thn 3
34%`,lColor:15158332}];for(const N of f){const H=new C(new oe(1.2,.2,.9),a);H.position.set(N.x,3.35,.2),i.add(H);for(let P=-1;P<=1;P+=2){const F=new C(new ge(.04,.055,N.height,5),N.mat),X=N.x+P*.22;F.position.set(X,3.45+N.height/2,.2),i.add(F);const ne=new C(new at(N.height>.8?.14:.06,12,8),N.mat);ne.position.set(X+(N.mat===o?.1:0),3.45+N.height+.08,.2),i.add(ne)}const se=Pn(N.label,N.lColor);se.scale.set(2,.75,1),se.position.set(N.x,3.45+N.height+.6,.2),i.add(se)}const p=new C(new oe(.22,.75,.14),d);p.position.set(-2.9,3.65,-.4),i.add(p);const g=new C(new ge(.025,.025,.55,16),c);g.position.set(-2.9,3.12,-.4),i.add(g);const x=new C(new oe(.15,.22,.05),new Me({color:662026}));x.position.set(-2.9,3.72,-.33),i.add(x);const m=new Me({color:8018990,transparent:!0,opacity:.9}),u=new C(new ge(.28,.25,.6,20),l);u.position.set(2.8,3.55,-.4),i.add(u);const v=new C(new ge(.24,.22,.38,20),m);v.position.set(2.8,3.44,-.4),i.add(v);const b=new Me({color:16775399}),_=new C(new oe(.8,1,.05),b);_.position.set(3.2,3.95,-.6),_.rotation.y=-.25,i.add(_);const k=[5025616,11059264,15158332],M=[.22,.3,.1];for(let N=0;N<3;N++){const H=new Me({color:k[N]}),se=new C(new oe(.12,M[N],.04),H);se.position.set(3.05+N*.2,3.5+M[N]/2,-.57),se.rotation.y=-.25,i.add(se)}const E=Pn("❓ Fenomena 3 — Panen Padi",4521864);E.position.set(0,3.2,0),i.add(E);const I=Pn("✅ Selesai",3066993);I.position.set(0,4.4,0),I.visible=!1,i.add(I);const y=new ae({color:4521864,emissive:4521864,emissiveIntensity:.5,transparent:!0,opacity:.25,side:At}),T=new C(new cn(3.2,32),y);T.rotation.x=-Math.PI/2,T.position.y=.02,i.add(T),n.add(i),e.push({group:i,glowMat:y,idx:2,pos:t,done:!1,doneSprite:I,_stems:i.children})}return e}function Pn(n,e){const t=document.createElement("canvas");t.width=320,t.height=72;const i=t.getContext("2d");i.fillStyle="rgba(10,20,40,0.85)",i.beginPath(),i.roundRect(4,8,312,56,16),i.fill();const a=e>>16&255,s=e>>8&255,r=e&255;i.strokeStyle=`rgb(${a},${s},${r})`,i.lineWidth=3,i.beginPath(),i.roundRect(4,8,312,56,16),i.stroke(),i.fillStyle=`rgb(${a},${s},${r})`,i.font="bold 24px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,160,36);const o=new zs(t),l=new si({map:o,transparent:!0}),d=new Li(l);return d.scale.set(5,1.1,1),d}function gg(n,e){for(const t of n){if(t.done){t.glowMat.emissiveIntensity=.15+Math.sin(e*1.2)*.05,t.glowMat.opacity=.12;continue}const i=.5+.5*Math.sin(e*2.2+t.idx*1.3);if(t.glowMat.emissiveIntensity=.3+i*.5,t.glowMat.opacity=.15+i*.15,t.idx===0&&(t._probe&&(t._probe.position.y=4.2+Math.sin(e*1.4)*.12),t._meter&&(t._meter.position.y=4.85+Math.sin(e*1.4)*.12)),t.idx===1&&t._liq){const a=1+Math.sin(e*2.5)*.04;t._liq.scale.set(1,a,1)}t.idx===2&&(t.group.rotation.z=Math.sin(e*.6)*.008),t.group.position.y=Math.sin(e*.5+t.idx)*.04}}const St=70,Xt=50,rt=18;new L(-18,0,10),new L(0,0,-8),new L(18,0,10);function xg(){const n=new ua;n.background=new Ge(1708552),n.fog=new Ha(1708552,35,85),n.add(new Hs(16771248,.4));const e=[[-22,rt-1,10],[-22,rt-1,-10],[0,rt-1,10],[0,rt-1,-10],[22,rt-1,10],[22,rt-1,-10]];for(const[s,r,o]of e){const l=new ni(16765056,1.1,30);l.position.set(s,r,o),n.add(l)}const t=new ni(16737792,1.5,18);t.position.set(-18,6,8),n.add(t);const i=new ni(8956671,.8,14);i.position.set(0,6,-6),n.add(i);const a=new Mn(16773324,.4);return a.position.set(10,20,10),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),n.add(a),{scene:n}}function vg(n){bg(n),yg(n),Eg(n)}function bg(n){const e=new ae({color:5919299,roughness:.9,metalness:0}),t=new ae({color:4866096,roughness:.85,metalness:0}),i=new ae({color:3024410,roughness:.9,metalness:0}),a=new C(new _t(St,Xt),e);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);const s=new ha({color:3813920});for(let g=-St/2;g<=St/2;g+=5){const x=new xt().setFromPoints([new L(g,.01,-Xt/2),new L(g,.01,Xt/2)]);n.add(new Bn(x,s))}for(let g=-Xt/2;g<=Xt/2;g+=5){const x=new xt().setFromPoints([new L(-St/2,.01,g),new L(St/2,.01,g)]);n.add(new Bn(x,s))}const r=new C(new _t(St,Xt),i);r.rotation.x=Math.PI/2,r.position.y=rt,n.add(r);const o=new Me({color:1971728});for(let g=-St/2;g<=St/2;g+=4){const x=new C(new oe(.4,.15,Xt),o);x.position.set(g,rt,0),n.add(x)}const l=.6,d=[{pos:[0,rt/2,-Xt/2],size:[St,rt,l]},{pos:[0,rt/2,Xt/2],size:[St,rt,l]},{pos:[-St/2,rt/2,0],size:[l,rt,Xt]},{pos:[St/2,rt/2,0],size:[l,rt,Xt]}];for(const g of d){const x=new C(new oe(...g.size),t);x.position.set(...g.pos),n.add(x)}const c=new Me({color:3813408}),h=[[-St/2+1,rt/2,-Xt/2+1],[St/2-1,rt/2,-Xt/2+1],[-St/2+1,rt/2,Xt/2-1],[St/2-1,rt/2,Xt/2-1],[-St/2+1,rt/2,0],[St/2-1,rt/2,0]];for(const[g,x,m]of h){const u=new C(new oe(1.2,rt,1.2),c);u.position.set(g,x,m),n.add(u)}const f=new Me({color:8947848}),p=new ae({color:16774592,emissive:16765024,emissiveIntensity:1.2});for(const[g,,x]of _g){const m=new C(new oe(1.5,.4,.6),f);m.position.set(g,rt-.8,x),n.add(m);const u=new C(new at(.25,16,10),p);u.position.set(g,rt-1.1,x),n.add(u)}}const _g=[[-22,rt-1,10],[-22,rt-1,-10],[0,rt-1,10],[0,rt-1,-10],[22,rt-1,10],[22,rt-1,-10]];function yg(n){wg(n,-18,0,6),Mg(n,0,0,-12),Sg(n,18,0,6)}function wg(n,e,t,i){const a=new Yt;a.position.set(e,t,i);const s=new Me({color:3944480}),r=new C(new oe(5,.4,5),s);r.position.y=.2,a.add(r);const o=new ae({color:7372944,metalness:.7,roughness:.3}),l=new C(new ge(2,2,5.5,24),o);l.position.y=3.15,a.add(l);const d=new C(new at(2,24,14,0,Math.PI*2,0,Math.PI/2),o);d.position.y=5.9,a.add(d);const c=new C(new at(2,24,14,0,Math.PI*2,Math.PI/2,Math.PI/2),o);c.position.y=.4,a.add(c);const h=new Me({color:9474208});for(let k=1.5;k<=5.5;k+=1.5){const M=new C(new xn(2.06,.09,10,40),h);M.rotation.x=Math.PI/2,M.position.y=k+.5,a.add(M)}const f=new ae({color:6719658,metalness:.6,roughness:.4}),p=new C(new ge(.12,.12,2,16),f);p.position.set(.8,7.2,0),a.add(p);const g=new C(new ge(.15,.15,1.8,16),f);g.rotation.z=Math.PI/2,g.position.set(-2.8,1.2,0),a.add(g);const x=new C(new at(.18,16,14),f);x.position.set(-3.7,1.2,0),a.add(x);const m=new C(new ge(.15,.15,1.2,16),f);m.position.set(-3.7,.6,0),a.add(m);const u=new ae({color:13378082,metalness:.5,roughness:.5}),v=new C(new ge(.22,.22,.5,16),u);v.rotation.z=Math.PI/2,v.position.set(-2.85,2.5,0),a.add(v);const b=new C(new ge(.1,.1,2.5,16),f);b.position.set(-.5,8,0),a.add(b);const _=new ae({color:8965375,transparent:!0,opacity:.35,roughness:.2,metalness:0});for(let k=0;k<5;k++){const M=new C(new at(.12+k*.04,12,10),_);M.position.set(-.5,8.8+k*.28,0),M.userData.bubbleIndex=k,a.add(M)}return Ao(a,`FERMENTOR
DRUM`,0,9.5,0,16752704),n.add(a),a}function Mg(n,e,t,i){const a=new Yt;a.position.set(e,t,i);const s=new ae({color:11189196,metalness:.8,roughness:.25}),r=new ae({color:5596791,metalness:.7,roughness:.35}),o=new ae({color:8952234,metalness:.6,roughness:.4}),l=new C(new oe(4,.4,4),r);l.position.y=.2,a.add(l);const d=new C(new ge(.8,1,8,24),s);d.position.y=4.4,a.add(d);for(let E=1.5;E<=7.5;E+=1.2){const I=new C(new ge(.95,.95,.12,24),r);I.position.y=E,a.add(I)}const c=new C(new ge(.7,.7,1.5,20),r);c.position.y=9.2,a.add(c);const h=new ae({color:8956620,metalness:.8,roughness:.2});for(let E=0;E<4;E++){const I=new C(new xn(.5,.06,12,36),h);I.rotation.x=Math.PI/2,I.position.y=9.1+E*.28,a.add(I)}const f=new C(new at(.7,18,10,0,Math.PI*2,0,Math.PI/2),r);f.position.y=10.2,a.add(f);const p=new C(new ge(.12,.12,2.5,16),o);p.rotation.z=Math.PI/2,p.position.set(-1.85,6.5,0),a.add(p);const g=new C(new ge(.1,.1,1.5,16),o);g.position.set(.5,11,0),a.add(g);const x=new C(new ge(.13,.13,2,16),o);x.rotation.z=Math.PI/2,x.position.set(1.8,9.6,0),a.add(x);const m=new C(new ge(.16,.16,1.4,16),o);m.position.set(.8,.3,0),a.add(m);const u=new ae({color:8016432,metalness:.3,roughness:.7}),v=new C(new ge(.65,.6,1.2,20),u);v.position.set(.8,-.2,0),a.add(v);const b=new C(new ge(.66,.66,.08,20),r);b.position.set(.8,.42,0),a.add(b);const _=new ae({color:11197951,transparent:!0,opacity:.5}),k=new C(new ge(.07,.07,4,16),_);k.position.set(-.92,3,.7),a.add(k);const M=new C(new ge(.06,.06,2.5,16),new ae({color:6332608,transparent:!0,opacity:.7}));return M.position.set(-.92,2.25,.7),a.add(M),Ao(a,`DESTILATOR
KOLOM`,0,11.5,0,8441087),n.add(a),a}function Sg(n,e,t,i){const a=new Yt;a.position.set(e,t,i);const s=new ae({color:4473924,metalness:.6,roughness:.5}),r=new Me({color:9127187}),o=new ae({color:16737792,emissive:16724736,emissiveIntensity:.9}),l=new ae({color:7368816,metalness:.8,roughness:.3}),d=new C(new oe(3.5,2,3),r);d.position.y=1,a.add(d);const c=new C(new oe(3.5,.15,3),s);c.position.y=2.08,a.add(c);for(let E=-1.4;E<=1.4;E+=.5){const I=new C(new oe(.1,.16,2.5),new Me({color:2236962}));I.position.set(E,2.08,0),a.add(I)}const h=new C(new Hn(.5,1.2,14),o);h.position.y=2.9,a.add(h);const f=new C(new Hn(.3,.9,14),o.clone());f.position.set(.6,2.85,.4),a.add(f);const p=new C(new ge(1.2,1,1.4,24),l);p.position.y=3.75,a.add(p);const g=new ae({color:8145424,transparent:!0,opacity:.85}),x=new C(new ge(1.18,1.18,.8,24),g);x.position.y=3.85,a.add(x);const m=new ae({color:14540253,transparent:!0,opacity:.25});for(let E=0;E<3;E++){const I=new C(new at(.25+E*.12,12,10),m);I.position.set((E-1)*.4,5+E*.5,(E-1)*.3),I.userData.steamIndex=E,a.add(I)}const u=new ae({color:13421772,metalness:.5}),v=new C(new ge(.22,.22,.08,20),u);v.rotation.x=Math.PI/2,v.position.set(1.5,3.2,-1.4),a.add(v);const b=new C(new cn(.2,12),new ae({color:16777215}));b.rotation.x=-Math.PI/2,b.position.set(1.5,3.21,-1.62),a.add(b);const _=new Me({color:3355443}),k=new C(new ge(.25,.3,3,20),_);k.position.set(-1.2,3.5,-1.2),a.add(k);const M=new ae({color:8947848,transparent:!0,opacity:.2});for(let E=0;E<4;E++){const I=new C(new at(.18+E*.1,12,10),M);I.position.set(-1.2,5+E*.6,-1.2),I.userData.smokeIndex=E,a.add(I)}return Ao(a,`KOMPOR
PEMANAS`,0,7.5,0,16746564),n.add(a),a}function Eg(n){const e=new ae({color:5910544,metalness:.2,roughness:.8}),t=new ae({color:8947848,metalness:.6,roughness:.4}),i=[[-28,0,-16],[-28,0,-12],[-28,0,-8],[-24,0,-16],[-24,0,-12],[-24,0,-8]];for(const[c,,h]of i){const f=new C(new ge(.7,.65,1.5,20),e);f.position.set(c,.75,h),n.add(f);const p=new C(new xn(.72,.05,10,28),t);p.rotation.x=Math.PI/2,p.position.set(c,1.2,h),n.add(p);const g=p.clone();g.position.set(c,.4,h),n.add(g)}Ts(n,`MOLASSES
STORAGE`,-26,3.2,-12,16755234,1.8);const a=new Me({color:5275840}),s=[[28,0,-18],[28,0,-15],[28,0,-12]];for(const[c,,h]of s){const f=new C(new oe(.8,.5,1.2),a);f.position.set(c,.25,h),n.add(f);const p=new C(new oe(.8,.5,1.2),a);p.position.set(c+.9,.25,h),n.add(p)}Ts(n,"NPK / UREA",29,2.8,-15,8956671,1.6);const r=new ae({color:13412928,metalness:.5});for(let c=0;c<3;c++){const h=new C(new ge(.3,.3,.9,20),r);h.position.set(28,.45,-6+c*1.2),n.add(h)}Ts(n,`RAGI
(YEAST)`,29,2.4,-5,16768384,1.5),Or(n,-St/2+.8,5,-10,`⚠️ BAHAYA
GAS BERTEKANAN`),Or(n,-St/2+.8,5,10,`🔥 AREA
PANAS`),Or(n,St/2-.8,5,-10,`☣️ LIMBAH
VINASSE`),Nr(n,-18,.05,5,0),Nr(n,-9,.05,3,-Math.PI/4),Nr(n,9,.05,3,Math.PI/4),Tg(n);const o=new ae({color:5583633}),l=new C(new oe(2.5,.15,2.5),o);l.position.set(0,.08,-12),n.add(l);const d=new C(new oe(2.3,.08,2.3),new ae({color:3807232,transparent:!0,opacity:.9}));d.position.set(0,.12,-12),n.add(d)}function Tg(n){const e=new ae({color:10066346,metalness:.6,roughness:.4}),t=new C(new ge(.14,.14,22,16),e);t.rotation.z=Math.PI/2,t.position.set(-9,11,0),n.add(t);const i=new C(new ge(.14,.14,5,16),e);i.position.set(0,8.5,-12),n.add(i);const a=new C(new ge(.14,.14,20,16),e);a.rotation.z=Math.PI/2,a.position.set(9,11,0),n.add(a);for(const[s,r]of[[-18,6],[0,-12],[18,6]]){const o=new C(new ge(.14,.14,3,16),e);o.position.set(s,9.5,r),n.add(o)}}function Nr(n,e,t,i,a){const s=new Me({color:16755200}),r=new C(new oe(.3,.05,5),s);r.position.set(e,t,i),r.rotation.y=a,n.add(r);const o=new C(new Hn(.5,.9,4),s);o.rotation.x=Math.PI/2,o.rotation.z=a,o.position.set(e+Math.sin(a)*3,t,i+Math.cos(a)*-3),n.add(o)}function Or(n,e,t,i,a){const s=new Me({color:16763904}),r=new C(new oe(1.8,1.2,.06),s);r.position.set(e,t,i),e<0?r.rotation.y=Math.PI/2:r.rotation.y=-Math.PI/2,n.add(r),Ts(n,a,e,t,i,2236962,1.2,r.rotation.y)}function Ao(n,e,t,i,a,s=16777215){const r=e.split(`
`),o=document.createElement("canvas");o.width=256,o.height=64*r.length;const l=o.getContext("2d");l.fillStyle="rgba(0,0,0,0)",l.fillRect(0,0,o.width,o.height);const d="#"+s.toString(16).padStart(6,"0");l.fillStyle=d,l.font="bold 28px sans-serif",l.textAlign="center",l.textBaseline="middle",r.forEach((p,g)=>{l.fillText(p,128,32+g*64)});const c=new zs(o),h=new si({map:c,depthTest:!1}),f=new Li(h);f.scale.set(3.5,1*r.length,1),f.position.set(t,i,a),n.add(f)}function Ts(n,e,t,i,a,s=16777215,r=2,o=0){const l=e.split(`
`),d=document.createElement("canvas");d.width=256,d.height=64*l.length;const c=d.getContext("2d");c.fillStyle="rgba(0,0,0,0)",c.fillRect(0,0,d.width,d.height);const h="#"+s.toString(16).padStart(6,"0");c.fillStyle=h,c.font="bold 28px sans-serif",c.textAlign="center",c.textBaseline="middle",l.forEach((x,m)=>c.fillText(x,128,32+m*64));const f=new zs(d),p=new si({map:f,depthTest:!1}),g=new Li(p);g.scale.set(r*l.length*.7+1,r*.7*l.length*.5+.5,1),g.position.set(t,i,a),n.add(g)}const _d=60,yd=50,_n=new L(0,0,-10);function Ag(){const n=new ua;n.background=new Ge(8900331),n.fog=new Ba(11589872,.008),n.add(new gd(10409208,8034896,1.1));const e=new Mn(16774604,2.4);e.position.set(25,40,20),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.near=.5,e.shadow.camera.far=140,e.shadow.camera.left=-44,e.shadow.camera.right=44,e.shadow.camera.top=44,e.shadow.camera.bottom=-44,n.add(e);const t=new Mn(12114175,.6);t.position.set(-20,18,-15),n.add(t);const i=new ni(16769168,.8,35);i.position.set(0,5,0),n.add(i);const a=new ni(16772761,1,18);return a.position.set(_n.x,8,_n.z),n.add(a),{scene:n}}function Lg(n){kg(n),Cg(n),Rg(n),Pg(n),Dg(n),Ig(n),Ng(n)}function kg(n){const e=new Me({color:1849872});new Me({color:2760202});const t=new C(new _t(_d*2,yd*2),e);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const i=new Me({color:4864032}),a=new C(new _t(3,22),i);a.rotation.x=-Math.PI/2,a.position.set(0,.01,0),n.add(a)}function Cg(n){const e=new Me({color:8017200}),t=new ha({color:4874304}),i=_d/2,a=yd/2,s=[[-i,-a],[i,-a],[i,a],[-i,a],[-i,-a]],r=s.map(([l,d])=>new L(l,1.2,d)),o=new xt().setFromPoints(r);n.add(new Bn(o,t));for(let l=0;l<4;l++){const[d,c]=s[l],[h,f]=s[l+1],p=Math.ceil(Math.sqrt((h-d)**2+(f-c)**2)/8);for(let g=0;g<=p;g++){const x=g/p,m=new C(new ge(.1,.1,2.4,5),e);m.position.set(d+(h-d)*x,1.2,c+(f-c)*x),n.add(m)}}}function Rg(n){const e=new Me({color:3815472}),t=new Me({color:2762776}),i=new Me({color:1574912,transparent:!0,opacity:.92}),a=new Me({color:667664,transparent:!0,opacity:.85}),s=.6,r=22,o=16,l=1.5,d=new C(new oe(r+s*2,l,s),e);d.position.set(0,l/2,-8),n.add(d);const c=d.clone();c.position.set(0,l/2,o/2),n.add(c);const h=new C(new oe(s,l,o),e);h.position.set(r/2,l/2,0),n.add(h);const f=h.clone();f.position.set(-r/2,l/2,0),n.add(f);const p=new C(new _t(r,o),t);p.rotation.x=-Math.PI/2,p.position.y=.01,n.add(p);const g=new C(new _t(r-s*2,o-s*2),i);g.rotation.x=-Math.PI/2,g.position.y=.8,n.add(g);const x=new C(new oe(s,l,o),e);x.position.set(4,l/2,0),n.add(x);const m=new C(new _t(r/2-4-s*1.5,o-s*2),a);m.rotation.x=-Math.PI/2,m.position.set(r/2-(r/4-2+s*.5)-1.5,.8,0),n.add(m),wd(n,`REAKTOR
BIOREMEDIASI`,0,2.5,-o/2-1.2,4259712)}function Pg(n){const e=new Me({color:5271648}),t=new Me({color:3162160}),i=new C(new ge(.22,.22,14,20),e);i.rotation.x=Math.PI/2,i.position.set(-1.2,1.8,-3),n.add(i);const a=new C(new oe(.5,.5,.5),e);a.position.set(-1.2,1.8,-8),n.add(a);const s=new C(new ge(.22,.22,2,20),e);s.position.set(-1.2,.8,-8.2),n.add(s);for(const r of[-2,-5,-8]){const o=new C(new oe(.3,.6,.15),t);o.position.set(-.7,2.1,r),n.add(o)}}function Dg(n){const e=new Me({color:9056272}),t=new Me({color:13388320}),i=new Me({color:3160112}),a=_n.x,s=_n.z,r=new C(new ge(.15,.2,3.5,16),i);r.position.set(a,1.75,s),n.add(r);const o=new C(new oe(1,.8,1.2),e);o.position.set(a,3.5,s),n.add(o);const l=new C(new xn(.55,.1,12,32),t);l.position.set(a,3.5,s-.7),l.rotation.x=Math.PI/2,n.add(l);for(let d=0;d<4;d++){const c=new C(new ge(.05,.05,1,14),t);c.rotation.z=d/4*Math.PI,c.position.set(a,3.5,s-.7),n.add(c)}wd(n,`KRAN
VINASSE`,a,5.5,s,16752736)}function Ig(n){const e=new Me({color:1728544}),t=new Me({color:2785344,transparent:!0,opacity:.8}),i=[[-7,-4],[-8,0],[-7,3],[-9,-2]];for(const[r,o]of i){const l=new C(new _t(2+Math.random()*1.5,1.2+Math.random()),t);l.rotation.x=-Math.PI/2,l.position.set(r,.85,o),n.add(l)}const a=[[-24,-18],[-20,18],[22,-14],[26,8],[-28,4],[16,20],[-12,-20],[18,-20]];for(const[r,o]of a)Ug(n,r,o,e);const s=new Me({color:9089088});for(let r=-3;r<=3;r++){const o=new C(new ge(.07,.09,3.5+Math.random(),6),s);o.position.set(-28+r*.4,1.75,-22+Math.random()*2),n.add(o)}}function Ug(n,e,t,i){const a=.6+Math.random()*.5,s=new C(new Hn(.6+Math.random()*.3,a,6),i);s.position.set(e,a/2,t),n.add(s)}function Ng(n){const e=new wt({color:6993128,side:Ht}),t=new C(new at(120,20,14),e);n.add(t);const i=new wt({color:16776672,side:At}),a=new C(new cn(8,24),i);a.position.set(30,22,-88),a.lookAt(0,14,0),n.add(a);const s=new wt({color:16774560,transparent:!0,opacity:.35,side:At}),r=new C(new cn(13,24),s);r.position.copy(a.position),r.rotation.copy(a.rotation),n.add(r);const o=new wt({color:16448250,transparent:!0,opacity:.88,side:At});[[0,22,-85,1.1],[-35,20,-78,.9],[50,21,-80,1],[-30,22,85,1],[35,20,80,.85],[-90,21,10,.9],[90,20,-5,.8]].forEach(([l,d,c,h])=>{const f=new L(l,d,c).normalize();[-1,0,1].forEach(p=>{const x=new L().crossVectors(f,new L(0,1,0)).normalize().clone().multiplyScalar(p*7*h),m=new C(new at(5*h,8,6),o);m.position.set(l+x.x,d+(p===0?2*h:0),c+x.z),n.add(m)})})}function Og(n){const e=new wt({color:16744480,transparent:!0,opacity:.6,side:At}),t=new C(new xn(1.2,.25,10,32),e);t.position.set(_n.x,5.5,_n.z),t.rotation.x=Math.PI/2,n.add(t);const i=new si({color:3066993}),a=new Li(i);return a.scale.set(1.5,1.5,1.5),a.position.set(_n.x,7,_n.z),a.visible=!1,n.add(a),{idx:0,pos:{x:_n.x,z:_n.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isValve:!0}}function Fg(n,e){!n||n.done||(n.glowMat.opacity=.4+.35*Math.sin(e*3.5),n.glowMesh.rotation.z=e*1.2)}function wd(n,e,t,i,a,s){const r=new C(new oe(2.5,.8,.1),new wt({color:s}));r.position.set(t,i,a),n.add(r)}const Ki=56,Ji=44,yn=new L(0,0,-14);function zg(){const n=new ua;n.background=new Ge(1715780),n.fog=new Ba(1583168,.012),n.add(new Hs(10537192,1));const e=new Mn(15267071,1.6);e.position.set(0,20,5),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=80,e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,n.add(e);const t=new ni(6343935,2,28);t.position.set(yn.x,4,yn.z),n.add(t);const i=new Mn(9482448,.8);return i.position.set(-18,10,-10),n.add(i),{scene:n}}function Bg(n){Hg(n),Gg(n),Vg(n),Wg(n),Xg(n)}function Hg(n){const e=new ae({color:1712688,roughness:.9,metalness:.05}),t=new ae({color:1846332,roughness:.85,metalness:0}),i=new ae({color:1120288,roughness:1,metalness:0}),a=Ki/2,s=Ji/2,r=10,o=new C(new _t(Ki,Ji),e);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);const l=new C(new _t(Ki,Ji),i);l.rotation.x=Math.PI/2,l.position.y=r,n.add(l);const d=[{pos:[0,r/2,-s],rot:[0,0,0],size:[Ki,r]},{pos:[0,r/2,s],rot:[0,Math.PI,0],size:[Ki,r]},{pos:[-a,r/2,0],rot:[0,Math.PI/2,0],size:[Ji,r]},{pos:[a,r/2,0],rot:[0,-Math.PI/2,0],size:[Ji,r]}];for(const f of d){const p=new C(new _t(...f.size),t);p.position.set(...f.pos),p.rotation.set(...f.rot),n.add(p)}const c=new wt({color:9488639});for(let f=-18;f<=18;f+=12){const p=new C(new oe(.3,.08,18),c);p.position.set(f,r-.05,0),n.add(p)}const h=new ha({color:1716304});for(let f=-a;f<=a;f+=4){const p=[new L(f,.01,-s),new L(f,.01,s)];n.add(new Bn(new xt().setFromPoints(p),h))}for(let f=-s;f<=s;f+=4){const p=[new L(-a,.01,f),new L(a,.01,f)];n.add(new Bn(new xt().setFromPoints(p),h))}}function Gg(n){const e=new ae({color:2767434,roughness:.7}),t=new ae({color:1714224,roughness:.8}),i=new ae({color:2130080,transparent:!0,opacity:.35,roughness:.1,metalness:.1}),a=new ae({color:2099712,transparent:!0,opacity:.85,roughness:.3}),s=new ae({color:4213328,roughness:.5,metalness:.3});[{x:-16,z:2},{x:0,z:2},{x:16,z:2}].forEach(({x:o,z:l})=>{const d=new C(new oe(8,.15,3.5),e);d.position.set(o,3.1,l),d.castShadow=!0,d.receiveShadow=!0,n.add(d);for(const[x,m]of[[-3.5,-1.4],[3.5,-1.4],[-3.5,1.4],[3.5,1.4]]){const u=new C(new oe(.15,3.1,.15),t);u.position.set(o+x,1.55,l+m),n.add(u)}const c=new C(new oe(3,1.6,1.6),i);c.position.set(o-1,4.1,l),n.add(c);const h=new C(new _t(2.8,1.5),a);h.rotation.x=-Math.PI/2,h.position.set(o-1,3.42,l),n.add(h);const f=new C(new oe(.5,.4,.4),s);f.position.set(o+2.2,3.35,l-.5),n.add(f);const p=new ae({color:8429712,roughness:.6}),g=new C(new ge(.04,.04,.9,8),p);g.position.set(o+1.8,3.75,l-.5),n.add(g)})}function Vg(n){const e=new ae({color:2767402,roughness:.8}),t=new ae({color:4214880,roughness:.6,metalness:.2}),i=new ae({color:6303776,roughness:.7}),a=new wt({color:4259788});for(let s=-18;s<=18;s+=18){const r=new C(new oe(8,6,.2),e);r.position.set(s,3,-22+.15),n.add(r);for(let o=0;o<3;o++){const l=new C(new oe(7.6,.08,.5),e);l.position.set(s,1.2+o*2,-22+.45),n.add(l);for(let c=-2;c<=2;c++){const h=.3+Math.random()*.5,f=new C(new ge(.18,.18,h,8),c%2===0?t:i);f.position.set(s+c*1.4,1.25+o*2+h/2,-22+.5),n.add(f)}const d=new C(new oe(6,.06,.08),a);d.position.set(s,1.18+o*2,-22+.6),n.add(d)}}}function Wg(n){const e=new ae({color:1714224,roughness:.6,metalness:.3}),t=new ae({color:6192,roughness:.1,metalness:.2,emissive:new Ge(16544),emissiveIntensity:.5}),i=new ae({color:3160128,roughness:.5,metalness:.5}),a=new ae({color:2765376,roughness:.8}),s=yn.x,r=yn.z,o=new C(new ge(.5,.65,3.4,16),e);o.position.set(s,1.7,r),o.castShadow=!0,n.add(o);const l=new C(new oe(2.4,1.8,.12),i);l.position.set(s,4.4,r),n.add(l);const d=new C(new oe(2.2,1.6,.06),t);d.position.set(s,4.4,r-.04),n.add(d);const c=new C(new oe(1.8,.06,.7),a);c.position.set(s,3.55,r+.3),n.add(c);const h=new wt({color:4245759});for(let m=0;m<3;m++){const u=new C(new oe(1.5,.02,.08),h);u.position.set(s,3.59,r+.12+m*.16),n.add(u)}const f=new wt({color:43775}),p=new C(new oe(2.8,.5,.08),f);p.position.set(s,5.7,r),n.add(p);const g=new wt({color:4259839}),x=new C(new oe(.3,.3,.1),g);x.position.set(s-1.3,4.4,r-.1),n.add(x)}function Xg(n){const e=Ki/2,t=Ji/2,i=new ae({color:3689016,roughness:.8});for(const[l,d]of[[e-1.5,-t+1.2],[e-1.5,t-1.2]]){const c=new C(new oe(2.4,5,1.6),i);c.position.set(l,2.5,d),c.castShadow=!0,n.add(c);const h=new C(new oe(.06,.4,.06),new ae({color:10526816,metalness:.8,roughness:.2}));h.position.set(l-.7,2.5,d-.85),n.add(h)}const a=new ae({color:1720416,roughness:.9}),s=new wt({color:54527});for(const l of[-10,0,10]){const d=new C(new oe(.08,3,2.2),a);d.position.set(-e+.08,4.5,l),n.add(d);const c=new C(new oe(.04,2.4,.08),s);c.position.set(-e+.1,5.2,l),n.add(c)}const r=new ae({color:6963232,roughness:.9}),o=new ae({color:1728544,roughness:1});for(const[l,d]of[[-e+2,t-2],[-e+2,-t+2]]){const c=new C(new ge(.4,.3,.7,12),r);c.position.set(l,.35,d),n.add(c);const h=new C(new Hn(.7,1.4,8),o);h.position.set(l,1.4,d),n.add(h)}}function qg(n){const e=new wt({color:52479,transparent:!0,opacity:.65,side:At}),t=new C(new xn(1.1,.2,10,32),e);t.position.set(yn.x,6.2,yn.z),t.rotation.x=Math.PI/2,n.add(t);const i=new si({color:3066993}),a=new Li(i);return a.scale.set(1.5,1.5,1.5),a.position.set(yn.x,7.2,yn.z),a.visible=!1,n.add(a),{idx:0,pos:{x:yn.x,z:yn.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isTerminal:!0}}function $g(n,e){!n||n.done||(n.glowMat.opacity=.4+.3*Math.sin(e*4),n.glowMesh.rotation.z=e*1.5)}const Yn=52,jn=40,wn=new L(0,0,-12);function Yg(){const n=new ua;n.background=new Ge(1714748),n.fog=new Ba(1450032,.01),n.add(new Hs(11585760,1));const e=new Mn(14741759,1.6);e.position.set(5,18,8),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=80,e.shadow.camera.left=-28,e.shadow.camera.right=28,e.shadow.camera.top=28,e.shadow.camera.bottom=-28,n.add(e);const t=new ni(16768384,2.2,22);t.position.set(wn.x,5,wn.z),n.add(t);const i=new Mn(8425664,.7);return i.position.set(-15,8,-5),n.add(i),{scene:n}}function jg(n){Kg(n),Jg(n),Zg(n),Qg(n),ex(n)}function Kg(n){const e=new ae({color:1450030,roughness:.85,metalness:.05}),t=new ae({color:1582132,roughness:.9}),i=new ae({color:924200,roughness:1}),a=Yn/2,s=jn/2,r=9,o=new C(new _t(Yn,jn),e);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);const l=new C(new _t(Yn,jn),i);l.rotation.x=Math.PI/2,l.position.y=r,n.add(l);const d=[{pos:[0,r/2,-s],rot:[0,0,0],size:[Yn,r]},{pos:[0,r/2,s],rot:[0,Math.PI,0],size:[Yn,r]},{pos:[-a,r/2,0],rot:[0,Math.PI/2,0],size:[jn,r]},{pos:[a,r/2,0],rot:[0,-Math.PI/2,0],size:[jn,r]}];for(const f of d){const p=new C(new _t(...f.size),t);p.position.set(...f.pos),p.rotation.set(...f.rot),n.add(p)}const c=new ha({color:1714746});for(let f=-a;f<=a;f+=3){const p=[new L(f,.01,-s),new L(f,.01,s)];n.add(new Bn(new xt().setFromPoints(p),c))}for(let f=-s;f<=s;f+=3){const p=[new L(-a,.01,f),new L(a,.01,f)];n.add(new Bn(new xt().setFromPoints(p),c))}const h=new wt({color:6334719});for(const[f,p,g,x]of[[0,-s+.1,Yn,.1],[0,s-.1,Yn,.1],[-a+.1,0,.1,jn],[a-.1,0,.1,jn]]){const m=new C(new oe(g,.06,x),h);m.position.set(f,r-.05,p),n.add(m)}}function Jg(n){const e=new ae({color:2635848,roughness:.7}),t=new ae({color:1581104,roughness:.8}),i=[new ae({color:1705216,transparent:!0,opacity:.9}),new ae({color:5908480,transparent:!0,opacity:.8}),new ae({color:8435776,transparent:!0,opacity:.7})],a=new ae({color:8965375,transparent:!0,opacity:.3,roughness:.05,metalness:.05});[[-14,6],[0,6],[14,6]].forEach(([r,o],l)=>{const d=new C(new oe(7,.12,3),e);d.position.set(r,3.1,o),d.castShadow=!0,d.receiveShadow=!0,n.add(d);for(const[g,x]of[[-3,-1.2],[3,-1.2],[-3,1.2],[3,1.2]]){const m=new C(new oe(.12,3.1,.12),t);m.position.set(r+g,1.55,o+x),n.add(m)}for(let g=0;g<3;g++){const x=new C(new ge(.3,.28,.8,12),a);x.position.set(r-1.8+g*1.8,3.56,o-.5),n.add(x);const m=.3+g*.1,u=new C(new ge(.27,.25,m,12),i[g]);u.position.set(r-1.8+g*1.8,3.17+m/2,o-.5),n.add(u)}const c=new ae({color:2113642,roughness:.9}),h=new C(new oe(1.2,.04,.9),c);h.position.set(r+2.5,3.18,o+.5),n.add(h);const f=new ae({color:4243616,roughness:.5,metalness:.3}),p=new C(new ge(.05,.05,1,8),f);p.position.set(r-2.8,3.75,o),p.rotation.z=.3,n.add(p)})}function Zg(n){const e=new ae({color:1579552,roughness:.5,metalness:.5}),t=new ae({color:2107440,roughness:.5,metalness:.6}),i=new ae({color:4227264,roughness:.1,metalness:.8}),a=new ae({color:2113696,roughness:.1,metalness:.9}),s=wn.x,r=wn.z,o=new C(new oe(3.5,.5,3),e);o.position.set(s,.25,r),o.castShadow=!0,n.add(o);const l=new C(new oe(.4,4,.4),t);l.position.set(s-.8,2.25,r),l.castShadow=!0,n.add(l);const d=new C(new oe(1.8,.35,.35),t);d.position.set(s+.1,4.1,r),n.add(d);const c=new C(new ge(.3,.35,1.2,16),i);c.position.set(s+.8,3.4,r),n.add(c);const h=new C(new ge(.1,.2,.5,12),i);h.position.set(s+.8,2.55,r),n.add(h);const f=new C(new ge(.18,.22,.6,12),a);f.position.set(s+.8,4.85,r),n.add(f);const p=new C(new oe(1.2,.06,1),e);p.position.set(s+.8,2.3,r),n.add(p);const g=new wt({color:16763968,transparent:!0,opacity:.7}),x=new C(new cn(.25,16),g);x.rotation.x=-Math.PI/2,x.position.set(s+.8,2.34,r),n.add(x)}function Qg(n){const e=new ae({color:794688,roughness:.9}),t=new wt({color:54527}),i=[new wt({color:16728128}),new wt({color:4259712})],a=new C(new oe(18,5.5,.1),e);a.position.set(0,4.5,-20+.12),n.add(a);const s=new C(new oe(17.6,.35,.08),t);s.position.set(0,6.95,-20+.17),n.add(s);for(let r=0;r<2;r++){const o=new C(new oe(15,.25,.06),i[r]);o.position.set(0,6-r*1.2,-20+.17),n.add(o);const l=r===0?[8,6.4,.4]:[.6,.5,.1];for(let d=0;d<3;d++){const c=new C(new oe(l[d],.55,.06),i[r]);c.position.set(-7.5+l[d]/2+d*5.2,5-r*1.2,-20+.17),n.add(c)}}}function ex(n){const e=Yn/2,t=jn/2,i=new ae({color:2636344,roughness:.85});for(const s of[-12,0,12]){const r=new C(new oe(1.8,5,2),i);r.position.set(e-1,2.5,s),r.castShadow=!0,n.add(r)}const a=new ae({color:3817520,roughness:.9});for(const s of[-8,8]){const r=new C(new ge(.4,.35,.9,10),a);r.position.set(s,.45,t-2),n.add(r)}}function tx(n){const e=new wt({color:16763904,transparent:!0,opacity:.65,side:At}),t=new C(new xn(1,.2,10,32),e);t.position.set(wn.x+.8,5.8,wn.z),t.rotation.x=Math.PI/2,n.add(t);const i=new si({color:3066993}),a=new Li(i);return a.scale.set(1.5,1.5,1.5),a.position.set(wn.x+.8,7,wn.z),a.visible=!1,n.add(a),{idx:0,pos:{x:wn.x+.8,z:wn.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isScope:!0}}function nx(n,e){!n||n.done||(n.glowMat.opacity=.4+.28*Math.sin(e*3.8),n.glowMesh.rotation.z=e*1.3)}const ix=.65;function Ie(n,e,t,i){return{minX:n-t,maxX:n+t,minZ:e-i,maxZ:e+i}}const vs=60,Fr=40,zr=70,Br=50,ax=[Ie(0,-20,vs/2+2,1.5),Ie(0,Fr/2,vs/2+2,1.5),Ie(-30,0,1.5,Fr/2+2),Ie(vs/2,0,1.5,Fr/2+2),Ie(-16,5,3.6,1.8),Ie(0,-6,3.6,1.8),Ie(16,5,3.6,1.8),Ie(-28,0,2,11.5),Ie(vs/2-2,0,2,11.5),Ie(-20,-18.4,3.5,1.6)],sx=[Ie(0,-25,zr/2+2,1.5),Ie(0,Br/2,zr/2+2,1.5),Ie(-35,0,1.5,Br/2+2),Ie(zr/2,0,1.5,Br/2+2),Ie(-18,6,2.8,2.8),Ie(0,-12,2,2.5),Ie(18,6,2.5,2.5),Ie(-26,-12,4,6),Ie(28,-13,3,6)],Hr=60,Gr=50,rx=[Ie(0,-25,Hr/2+2,1.5),Ie(0,Gr/2,Hr/2+2,1.5),Ie(-30,0,1.5,Gr/2+2),Ie(Hr/2,0,1.5,Gr/2+2),Ie(0,-8,11.6,.8),Ie(0,8,11.6,.8),Ie(-11,0,.8,8.6),Ie(11,0,.8,8.6),Ie(0,-10,.8,.8)];let ra=ax;function ox(){ra=sx}function lx(){ra=rx}const wa=56,Vr=44,cx=[Ie(0,-22,wa/2+2,1.5),Ie(0,Vr/2,wa/2+2,1.5),Ie(-28,0,1.5,Vr/2+2),Ie(wa/2,0,1.5,Vr/2+2),Ie(-16,2,4.5,2),Ie(0,2,4.5,2),Ie(16,2,4.5,2),Ie(0,-14,1.4,1.4),Ie(-18,-21.5,4.5,.8),Ie(0,-21.5,4.5,.8),Ie(18,-21.5,4.5,.8),Ie(wa/2-1.5,-10,1.5,1.5),Ie(wa/2-1.5,10,1.5,1.5)],ji=52,Wr=40,dx=[Ie(0,-20,ji/2+2,1.5),Ie(0,Wr/2,ji/2+2,1.5),Ie(-26,0,1.5,Wr/2+2),Ie(ji/2,0,1.5,Wr/2+2),Ie(-14,6,4,2),Ie(0,6,4,2),Ie(14,6,4,2),Ie(.8,-12,1.8,1.8),Ie(ji/2-1,-12,1.5,1.5),Ie(ji/2-1,0,1.5,1.5),Ie(ji/2-1,12,1.5,1.5)];function ux(){ra=cx}function hx(){ra=dx}function px(n,e,t){const i=ix;let a=n.x+e;for(const r of ra)a+i>r.minX&&a-i<r.maxX&&n.z+i>r.minZ&&n.z-i<r.maxZ&&(e>0?a=r.minX-i:a=r.maxX+i,e=a-n.x);let s=n.z+t;for(const r of ra)a+i>r.minX&&a-i<r.maxX&&s+i>r.minZ&&s-i<r.maxZ&&(t>0?s=r.minZ-i:s=r.maxZ+i,t=s-n.z);return{dx:e,dz:t}}const ee={playerName:"",currentLevel:1,totalPoints:0,levelAttempts:0,levelPoints:0,phenomenonIndex:0,answered:!1,wrongAnswers:0,levelBreakdown:[],pointsAtLevelStart:0,stage3:{valveOpened:!1},stage4:{selectedItems:[],reactorResult:null,terminalDone:!1},stage5:{scopeDone:!1},completedRooms:[]};function fx(){ee.levelAttempts=0,ee.levelPoints=0,ee.phenomenonIndex=0,ee.answered=!1,ee.wrongAnswers=0}const mx={1:"Level 1 – Lab Sains",2:"Level 2 – Pabrik Etanol",3:"Level 3 – Kolam Remediasi",4:"Level 4 – Workshop IPAL",5:"Level 5 – Lab Observasi"};function Md(n){const e=ee.totalPoints-ee.pointsAtLevelStart;ee.levelBreakdown.push({level:n,label:mx[n]||`Level ${n}`,points:e})}class gx{constructor(e){this.scene=e,this.group=new Yt,this._build(),e.add(this.group),this.group.position.set(0,0,12),this.speed=.12,this.keys={},this._moving=!1,this._walkCycle=0,this._legAngle=0,this._armAngle=0,this._facingAngle=0,this._bindKeys(),this._bindTouch()}_bindKeys(){window.addEventListener("keydown",e=>{this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1})}_bindTouch(){if(this._touchAxis={x:0,y:0},!(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1))return;const t=document.getElementById("mobile-controls");t&&(t.style.display="block");const i=document.getElementById("joystick-base"),a=document.getElementById("joystick-knob");if(!i||!a)return;const s=32;let r=null,o=null,l=0,d=0;const c=p=>{if(r!==null)return;r=p.changedTouches[0].identifier,o=i.getBoundingClientRect(),l=o.left+o.width/2,d=o.top+o.height/2,p.preventDefault()},h=p=>{for(const g of p.changedTouches){if(g.identifier!==r)continue;const x=g.clientX-l,m=g.clientY-d,u=Math.sqrt(x*x+m*m),v=Math.min(u,s),b=Math.atan2(m,x),_=Math.cos(b)*v,k=Math.sin(b)*v;a.style.transform=`translate(calc(-50% + ${_}px), calc(-50% + ${k}px))`,this._touchAxis.x=_/s,this._touchAxis.y=-k/s,p.preventDefault()}},f=p=>{for(const g of p.changedTouches)g.identifier===r&&(r=null,a.style.transform="translate(-50%, -50%)",this._touchAxis.x=0,this._touchAxis.y=0)};i.addEventListener("touchstart",c,{passive:!1}),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f,{passive:!1}),window.addEventListener("touchcancel",f,{passive:!1})}_build(){const e=new ae({color:16108455,roughness:.7,metalness:0}),t=new ae({color:2719929,roughness:.6,metalness:.05}),i=new ae({color:2899536,roughness:.65,metalness:.05}),a=new ae({color:2890254,roughness:.8,metalness:0}),s=new ae({color:1710618,roughness:.6,metalness:.1}),r=new ae({color:16448250,roughness:.7,metalness:0}),o=new C(new ge(.48,.52,1.6,16),t);o.position.y=2.2,o.castShadow=!0,this.group.add(o),this._torso=o;const l=new C(new ge(.5,.54,1.58,16),r);l.position.y=2.2,this.group.add(l),this._coat=l;for(const g of[-1,1]){const x=new C(new at(.28,12,10),r);x.position.set(g*.62,2.9,0),this.group.add(x)}const d=new C(new at(.52,20,16),e);d.position.y=3.62,d.scale.set(1,1.05,1),d.castShadow=!0,this.group.add(d),this._head=d;const c=new C(new at(.54,16,10,0,Math.PI*2,0,Math.PI*.55),a);c.position.y=3.85,this.group.add(c);for(const g of[-1,1]){const x=new C(new at(.1,8,8),e);x.position.set(g*.53,3.65,0),this.group.add(x)}const h=new ae({color:1710618});for(const g of[-1,1]){const x=new C(new at(.07,8,8),h);x.position.set(g*.2,3.72,.47),this.group.add(x)}const f=new ae({color:13936778}),p=new C(new at(.05,8,8),f);p.position.set(0,3.58,.52),this.group.add(p),this._legs=[];for(const[g,x]of[[-1,-1],[1,1]]){const m=new Yt;m.position.set(x*.3,1.55,0);const u=new C(new ge(.2,.18,.72,12),i);u.position.y=-.36,u.castShadow=!0,m.add(u);const v=new Yt;v.position.y=-.72,m.add(v);const b=new C(new ge(.16,.14,.64,12),i);b.position.y=-.32,b.castShadow=!0,v.add(b);const _=new C(new Eo(.13,.3,6,10),s);_.rotation.x=Math.PI/2,_.position.set(0,-.68,.12),v.add(_),this.group.add(m),this._legs.push({pivot:m,kneePivot:v,side:x,i:g===-1?0:1})}this._arms=[];for(const[g,x]of[[-1,-1],[1,1]]){const m=new Yt;m.position.set(x*.76,2.92,0);const u=new C(new ge(.16,.14,.62,12),r);u.position.y=-.31,u.castShadow=!0,m.add(u);const v=new Yt;v.position.y=-.62,m.add(v);const b=new C(new ge(.13,.12,.56,12),e);b.position.y=-.28,v.add(b);const _=new C(new at(.13,10,8),e);_.position.y=-.6,v.add(_),this.group.add(m),this._arms.push({pivot:m,elbowPivot:v,side:x,i:g===-1?0:1})}this._nameLabel=null}setName(e){if(this._nameLabel&&this.group.remove(this._nameLabel),!e)return;const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.clearRect(0,0,256,64),i.fillStyle="rgba(15,25,40,0.8)",i.roundRect(4,4,248,56,12),i.fill(),i.fillStyle="#2ecc71",i.font="bold 26px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,32);const a=new zs(t),s=new si({map:a,transparent:!0}),r=new Li(s);r.scale.set(3.5,.9,1),r.position.y=5.2,this._nameLabel=r,this.group.add(r)}update(e,t=!1,i=null){const a=this.keys;let s=0,r=0;if((a.KeyW||a.ArrowUp)&&(s+=1),(a.KeyS||a.ArrowDown)&&(s-=1),(a.KeyA||a.ArrowLeft)&&(r-=1),(a.KeyD||a.ArrowRight)&&(r+=1),this._touchAxis&&(s+=this._touchAxis.y,r+=this._touchAxis.x,s=Math.max(-1,Math.min(1,s)),r=Math.max(-1,Math.min(1,r))),this._moving=s!==0||r!==0,this._moving&&!t){let o=0,l=0;const d=s<0;if(d&&i){o=i.fwd.x*s+i.right.x*r,l=i.fwd.z*s+i.right.z*r;const p=Math.sqrt(o*o+l*l)||1;o=o/p*this.speed,l=l/p*this.speed}else if(d)o=-Math.sin(this._facingAngle)*this.speed,l=-Math.cos(this._facingAngle)*this.speed;else if(i){o=i.fwd.x*s+i.right.x*r,l=i.fwd.z*s+i.right.z*r;const p=Math.sqrt(o*o+l*l)||1;o=o/p*this.speed,l=l/p*this.speed}else{o=r,l=-s;const p=Math.sqrt(o*o+l*l)||1;o=o/p*this.speed,l=l/p*this.speed}({dx:o,dz:l}=px(this.group.position,o,l)),this.group.position.x+=o,this.group.position.z+=l;const c=ee.currentLevel===2?33:ee.currentLevel===3?27:28,h=ee.currentLevel===2?23:ee.currentLevel===3?22:18;this.group.position.x=Math.max(-c,Math.min(c,this.group.position.x)),this.group.position.z=Math.max(-h,Math.min(h,this.group.position.z)),d||(this._facingAngle=Math.atan2(o,l)),this.group.rotation.y=this._facingAngle,this._walkCycle+=.18;const f=this._walkCycle;for(const{pivot:p,kneePivot:g,i:x}of this._legs){const m=f+x*Math.PI,u=Math.sin(m)*.55;p.rotation.x=u;const v=Math.max(0,-Math.sin(m)*.45);g.rotation.x=v}for(const{pivot:p,elbowPivot:g,side:x,i:m}of this._arms){const u=f+(1-m)*Math.PI,v=Math.sin(u)*.42;p.rotation.x=v,p.rotation.z=x*(.08+Math.sin(u+Math.PI*.5)*.06),g.rotation.x=Math.max(0,Math.sin(u+.4)*.28)}this._torso&&(this._torso.rotation.y=Math.sin(f+Math.PI)*.08),this._coat&&(this._coat.rotation.y=Math.sin(f+Math.PI)*.08),this._head&&(this._head.position.y=3.62+Math.abs(Math.sin(f*2))*.06),this.group.position.y=Math.abs(Math.sin(f*2))*.055}else{this._walkCycle=0;for(const{pivot:o,kneePivot:l}of this._legs)o.rotation.x*=.75,l.rotation.x*=.75;for(const{pivot:o,elbowPivot:l,side:d}of this._arms)o.rotation.x*=.75,o.rotation.z+=(d*.08-o.rotation.z)*.15,l.rotation.x*=.75;this._torso&&(this._torso.rotation.y*=.8),this._coat&&(this._coat.rotation.y*=.8),this._head&&(this._head.position.y=3.62+Math.sin(e*1.2)*.02),this.group.position.y=Math.sin(e*1.4)*.04}return{x:this.group.position.x,z:this.group.position.z}}get position(){return this.group.position}removeFromScene(e){e.remove(this.group)}addToScene(e){this.scene=e,e.add(this.group)}}const xx=[{id:1,title:"Fenomena 1",image:null,tableData:{headers:["Stasiun","Suhu (°C)","pH","DO (mg/L)","COD (mg/L)","TDS (mg/L)"],rows:[{label:"Hulu",values:["30,39","7,26","8,38","635","777"],classes:["","","blue","",""]},{label:"Tengah",values:["31,17","6,96","1,90","775","1.343"],classes:["","","red","","red"]},{label:"Hilir",values:["29,63","7,36","11,12","879","1.300"],classes:["","","","red",""]}],note:"Biru: rata-rata terendah | Merah: rata-rata tertinggi. Sumber: Zahra, 2023"},context:"Seorang peneliti lingkungan mengamati data kualitas air sungai di stasiun berbeda, yaitu: hulu, tengah, dan hilir dari aliran anak Sungai Bengawan solo yang berdekatan dengan pabrik etanol. Data menunjukkan:",question:"Berdasarkan data, Stasiun Tengah menunjukkan nilai TDS melonjak drastis menjadi 1.343 mg/L, namun nilai DO justru berada di angka 1,90 mg/L dengan COD 90.000 mg/L. Jika diketahui sumber pencemar adalah limbah vinasse yang kaya bahan organik, manakah evaluasi paling kritis mengenai data tersebut?",options:[{label:"A",text:"Tingginya TDS disebabkan oleh mineral anorganik, sedangkan seluruh bakteri telah terurai oleh bakteri dari hulu ke tengah.",correct:!1},{label:"B",text:"Masuknya limbah vinasse seharusnya meningkatkan TDS, DO, dan COD secara simultan.",correct:!0},{label:"C",text:"TDS, COD, dan DO memiliki hubungan yang terbalik, semakin banyak zat terlarut, semakin sedikit oksigen yang dibutuhkan.",correct:!1}],correctKey:"B",explanation:"✅ <strong>Jawaban benar!</strong><br>Limbah organik vinasse seharusnya berkontribusi pada TDS dan COD. Jika TDS dan COD naik tajam karena limbah masuk, DO seharusnya tidak turun drastis."},{id:2,title:"Fenomena 2",image:null,tableData:null,standardTable:{title:"Baku Mutu Air Limbah Industri Bir/Etanol (Permen LH No.5/2014)",headers:["Parameter","Kadar Maks (mg/L)","Beban Maks (g/hL)"],rows:[["BOD₅","40","24,0"],["COD","100","60,0"],["TSS","40","24,0"],["pH","6,0 – 9,0","—"],["Debit limbah maks","—","6 hL/hL produk"]]},context:"Berdasarkan data Stasiun Tengah nilai TDS 1.343 mg/L, COD 90.000 mg/L dan DO 1,90 mg/L, komponen apakah yang paling dominan menyusun nilai TDS tersebut?",question:"Berdasarkan data Stasiun Tengah nilai TDS 1.343 mg/L, COD 90.000 mg/L dan DO 1,90 mg/L, komponen apakah yang paling dominan menyusun nilai TDS tersebut?",options:[{label:"A",text:"Adanya bakteri coliform dan mikroorganisme pengurai.",correct:!1},{label:"B",text:"Ion anorganik seperti K, Ca dan Cl yang tidak dapat dioksidasi.",correct:!0},{label:"C",text:"Suspensi padatan lumpur yang belum mengendap.",correct:!1}],correctKey:"B",explanation:"✅ <strong>Jawaban benar!</strong><br>Ion anorganik seperti K, Ca dan Cl yang tidak dapat dioksidasi mendominasi nilai TDS di Stasiun Tengah."},{id:3,title:"Fenomena 3",image:null,riceGraph:!0,tableData:null,context:"Perhatikan grafik produktivitas lahan persawahan padi berikut:",question:"Manakah interpretasi ilmiah yang paling tepat menjelaskan mekanisme penyebab fenomena penurunan hasil panen padi tersebut?",options:[{label:"A",text:"Kenaikan hasil panen di Tahun ke-2 terjadi karena suplai bahan organik berada di bawah ambang batas pencemaran sehingga justru memperkaya hara tanah, namun pada Tahun ke-3 akumulasi pH dan COD telah menyebabkan kerusakan pada jaringan akar padi.",correct:!0},{label:"B",text:"Penurunan hasil panen pada Tahun ke-3 disebabkan oleh kurangnya pasokan air, karena tingginya nilai COD menyebabkan air menjadi kental dan sulit diserap oleh akar tanaman.",correct:!1},{label:"C",text:"Peningkatan hasil panen pada Tahun ke-2 disebabkan oleh bakteri patogen dalam limbah yang memicu mutasi genetik pada padi menjadi varietas unggul, sedangkan penurunan di Tahun ke-3 adalah fase kematian alami bakteri tersebut.",correct:!1}],correctKey:"A",explanation:"✅ <strong>Jawaban benar!</strong><br>Meskipun COD naik menjadi 80, pH tanah sebesar 8,6 masih dalam rentang toleransi padi. Bahan organik dalam limbah vinasse mengandung N, P, dan K. Pada tahap ini, efek negatif belum mendominasi, sehingga tanaman justru merespons positif terhadap tambahan nutrisi tersebut. Ketika COD mencapai >100 mg/L dan pH >9 kondisi tanah menjadi toksik. pH yang tinggi menyebabkan ion logam di tanah menjadi larut dan meracuni akar, serta menghambat penyerapan Fosfor. Hal ini menyebabkan tanaman gagal tumbuh."}],Ma={phenomena:xx},vx=879,bx=635,bs=1e3;function _x(n){const e=Math.max(0,Math.min(bs,n)),t=bs-e,i=e/bs,a=Math.round(vx*i),s=Math.round(bx*i),r=Math.pow(10,-3.8),o=Math.pow(10,-7),l=(r*e+o*t)/bs,d=Math.max(3.5,Math.min(7,-Math.log10(l)));return{cod:a,bod:s,ph:parseFloat(d.toFixed(2)),dilutionFactor:i}}function yx(n,e){const t=Math.max(0,Math.min(72,e)),i=Math.round(n.bod*Math.exp(-.08*t)),a=n.bod-i,s=n.cod*.55,r=n.cod*.45,o=s*Math.exp(-.08*t),l=Math.round(o+r),d=parseFloat(Math.min(6.8,n.ph+(6.8-n.ph)*(1-Math.exp(-.08*.5*t))).toFixed(2)),c=n.bod>0?Math.round(a/n.bod*100):0,h=n.cod>0?Math.round((n.cod-l)/n.cod*100):0,f=i<=40&&l<=100;return{cod:l,bod:i,ph:d,bodRemovalPct:c,codRemovalPct:h,compliant:f}}const Sd="biovine_scores",Lo="biovine_checkpoint";function wx({playerName:n,totalPoints:e,levelBreakdown:t,completedAt:i,essayAnswer:a}){const s=Mx();s.push({playerName:n,totalPoints:e,levelBreakdown:t,completedAt:i,essayAnswer:a}),s.length>200&&s.splice(0,s.length-200);try{localStorage.setItem(Sd,JSON.stringify(s))}catch(r){console.warn("[db] saveScore failed:",r)}}function Mx(){try{return JSON.parse(localStorage.getItem(Sd)||"[]")}catch{return[]}}function Sx({playerName:n,currentLevel:e,totalPoints:t,levelBreakdown:i,completedRooms:a}){const s={playerName:n,currentLevel:e,totalPoints:t,levelBreakdown:i||[],completedRooms:a||[],savedAt:new Date().toISOString()};try{localStorage.setItem(Lo,JSON.stringify(s))}catch(r){console.warn("[db] saveCheckpoint failed:",r)}}function ko(){try{const n=localStorage.getItem(Lo);return n?JSON.parse(n):null}catch{return null}}function Ed(){localStorage.removeItem(Lo)}const Co="https://script.google.com/macros/s/AKfycbys_sNNVIFJCQGmvNHUMuiLpZGINttOvNN5LnIJ8z5Gak8h8KQ8BdTo342_K5H05RxbXw/exec";function Ex(n){const{playerName:e,totalPoints:t,levelBreakdown:i,completedRooms:a}=ee,s={1:null,2:null,3:null,4:null,5:null};i.forEach(l=>{s[l.level]=l.points});const r=s[n]??0,o={playerName:e,totalPoints:t,completedLevel:n,thisLevelPoints:r,level1Points:s[1],level2Points:s[2],level3Points:s[3],level4Points:s[4],level5Points:s[5],completedRooms:a,timestamp:new Date().toISOString()};fetch(Co,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(o)}).catch(l=>{console.warn("[sheets] Upload failed (network error):",l)})}function Tx(n){const e={sheet:"Kelompok",...n};return fetch(Co,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)}).catch(t=>{throw console.warn("[sheets] Experiment upload failed (network error):",t),t})}function Ax(n){const e={sheet:"Esai",playerName:n.playerName||"",essayAnswer:n.essayAnswer||"",timestamp:n.timestamp||new Date().toISOString()};fetch(Co,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)}).catch(t=>{console.warn("[sheets] Essay upload failed (network error):",t)})}const pn=n=>document.getElementById(n),Ro="experiment-form-overlay",bc="experiment-form-css";function Lx(){if(document.getElementById(bc))return;const n=document.createElement("style");n.id=bc,n.textContent=`
    #${Ro} {
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
  `,document.head.appendChild(n)}function kx(){const n=document.createElement("div");return n.id=Ro,n}function Xr(){var n;(n=document.getElementById(Ro))==null||n.remove()}function _s(n){return["warna","bau","keruh","ph","sal","tds","cod","bod","do"].map(t=>`<td><input type="text" class="exp-cell" id="${n}-${t}" /></td>`).join("")}function Po(){Lx(),Xr();const n=kx();n.innerHTML=`
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
                ${_s("awal-dg")}
              </tr>
              <tr>
                <td class="exp-treatment-label">Tanpa<br>Mikroorganisme</td>
                ${_s("awal-tp")}
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
                ${_s("akhir-dg")}
              </tr>
              <tr>
                <td class="exp-treatment-label">Tanpa<br>Mikroorganisme</td>
                ${_s("akhir-tp")}
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
  `,document.body.appendChild(n),pn("exp-close").onclick=Xr,n.addEventListener("click",t=>{t.target===n&&Xr()}),pn("exp-submit").onclick=()=>{const t=pn("exp-kelompok").value.trim(),i=pn("exp-kelas").value.trim();if(!t||!i){e("⚠️ Nomor Kelompok dan Kelas wajib diisi!",!1);return}const a=["warna","bau","keruh","ph","sal","tds","cod","bod","do"];function s(l){return Object.fromEntries(a.map(d=>{var c;return[d,((c=pn(`${l}-${d}`))==null?void 0:c.value.trim())||"–"]}))}const r={nomorKelompok:t,kelas:i,namaAnggota:pn("exp-nama").value.trim()||"–",playerName:ee.playerName||"–",timestamp:new Date().toISOString(),mikroorganisme:pn("t1-mikro").value.trim()||"–",intensitasCahaya:pn("t1-cahaya").value.trim()||"–",suhuRuang:pn("t1-suhu").value.trim()||"–",awalDengan:s("awal-dg"),awalTanpa:s("awal-tp"),akhirDengan:s("akhir-dg"),akhirTanpa:s("akhir-tp")},o=pn("exp-submit");o.disabled=!0,o.textContent="⏳ Mengirim…",Tx(r).then(()=>{e("✅ Berhasil! Data percobaan kelompokmu telah dikirimkan.",!0),o.textContent="✅ Terkirim"}).catch(()=>{e("❌ Gagal mengirim. Periksa koneksi internet dan coba lagi.",!1),o.disabled=!1,o.textContent="📤 Kirim Ulang"})};function e(t,i){const a=pn("exp-status");a.className="exp-status "+(i?"ok":"err"),a.innerHTML=t,a.scrollIntoView({behavior:"smooth",block:"nearest"})}}const ye=n=>document.getElementById(n);let lo=null,qr=null;function Cx(n,e){lo=n,qr=e||null;const t=ko(),i=ye("resume-section");if(t&&i&&qr){const a=new Date(t.savedAt),s=a.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})+" "+a.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});i.classList.remove("hidden"),i.innerHTML=`
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
    `,document.getElementById("btn-resume-game").onclick=()=>{Td(),qr(t)},document.getElementById("btn-discard-checkpoint").onclick=()=>{Ed(),i.classList.add("hidden")}}else i&&i.classList.add("hidden");ye("profile-screen").classList.remove("hidden")}function Td(){ye("profile-screen").classList.add("hidden")}function Rx(n){const e=ye("synopsis-screen");e.classList.remove("hidden");const t=[{tag:"Bagian 1 dari 3",title:"Industri Etanol di Desa Bekonang",text:"Industri etanol di Desa Bekonang, Sukoharjo, adalah warisan <strong>turun-temurun</strong> yang sudah ada sejak zaman kolonial. Banyak pabrik di sini memproduksi minuman keras tradisional bernama <strong>ciu</strong> dibuat dari tetes tebu, tape singkong, atau nira aren melalui proses fermentasi dan penyulingan.<br><br>Seiring waktu, industri ini berkembang menjadi produksi <strong>etanol medis</strong> yang digunakan untuk kebutuhan rumah sakit dan dunia kesehatan."},{tag:"Bagian 2 dari 3",title:"Masalah: Limbah Vinasse",text:"Proses produksi etanol menghasilkan limbah cair bernama <strong>vinasse</strong>. Setiap harinya, satu pabrik bisa menghasilkan <strong>150–200 liter</strong> limbah ini tanpa sistem pengolahan yang memadai.<br><br>Vinasse berwarna <strong>hitam pekat</strong>, berbau menyengat, dan sangat berbahaya jika dibuang langsung ke sungai. Vinasse <strong>menyerap oksigen</strong> di dalam air, menyebabkan ikan-ikan mati dan sungai tercemar parah."},{tag:"Bagian 3 dari 3",title:"Solusi: Vinasse → Pupuk Organik Cair",text:"Kabar baiknya, limbah vinasse bisa diolah menjadi <strong>Pupuk Organik Cair (POC)</strong>! Caranya dengan menambahkan <strong>mikroorganisme berupa ragi</strong> ke dalam vinasse yang sudah diaerasi minimal 24 jam.<br><br>Setelah ditumbuhkan selama <strong>15 hari</strong> dalam bak terbuka beraeasi, limbah berubah menjadi pupuk: tidak berbau asam, berwarna coklat muda. Diaplikasikan ke tanaman dengan perbandingan <strong>1 : 10</strong> (POC : air). Ukur kadar COD, BOD, dan pH untuk memastikan kualitasnya!"}];let i=0,a=!1,s=null;const r=ye("syn-seg-tag"),o=ye("syn-seg-title"),l=ye("syn-seg-text"),d=ye("syn-dots"),c=ye("btn-syn-prev"),h=ye("btn-syn-next"),f=ye("btn-syn-skip"),p=ye("synopsis-content-panel"),g=ye("syn-mouth");function x(){m(),s=setInterval(()=>{a=!a,g&&g.setAttribute("d",a?"M84 124 Q100 144 116 124":"M84 126 Q100 138 116 126")},280)}function m(){s&&(clearInterval(s),s=null),g&&g.setAttribute("d","M84 126 Q100 138 116 126")}function u(){m(),e.classList.add("hidden"),n()}function v(b){const _=t[b];p.classList.remove("synopsis-slide"),p.offsetWidth,p.classList.add("synopsis-slide"),r.textContent=_.tag,o.textContent=_.title,l.innerHTML=_.text,d.innerHTML=t.map((k,M)=>`<span class="synopsis-dot ${M===b?"active":""}"></span>`).join(""),c.style.display=b===0?"none":"",h.textContent=b===t.length-1?"🚀 Mulai Petualangan →":"Lanjutkan →",x()}v(0),c.onclick=()=>{i>0&&v(--i)},h.onclick=()=>{i<t.length-1?v(++i):u()},f.onclick=()=>u()}const ys=[{id:"c4gsn1rkK1g",title:"Video Edukasi: Limbah Vinasse & Dampak Lingkungan",subtitle:"Pelajari dampak pencemaran vinasse terhadap lingkungan sekitar"}];let Ad=!1;const Ld=[];window.onYouTubeIframeAPIReady=()=>{Ad=!0,Ld.splice(0).forEach(n=>n())};function Px(){return new Promise(n=>{if(Ad){n();return}if(Ld.push(n),!document.getElementById("yt-api-script")){const e=document.createElement("script");e.id="yt-api-script",e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}})}function Dx(n){const e=ye("youtube-screen");e.classList.remove("hidden"),In&&In.pause();let t=0,i=null;function a(){const r=e.querySelector(".youtube-frame-wrap");r.innerHTML='<div id="yt-player-container"><div class="yt-loading">Memuat video…</div></div>'}function s(r){const o=ys[r];ye("yt-title").textContent=o.title,ye("yt-subtitle").textContent=o.subtitle,ye("yt-counter").textContent=`${r+1} / ${ys.length}`;const l=ye("btn-yt-next");l.textContent=r<ys.length-1?"Video Berikutnya →":"Lanjutkan ke Simulasi →",l.disabled=!1,l.title="",i&&(i.destroy(),i=null),a(),Px().then(()=>{i=new YT.Player("yt-player-container",{videoId:o.id,playerVars:{rel:0,modestbranding:1,playsinline:1},events:{}})})}s(0),ye("btn-yt-next").onclick=()=>{t+=1,t<ys.length?s(t):(i&&(i.destroy(),i=null),e.classList.add("hidden"),In&&In.play().catch(()=>{}),n())}}let In=null;function _c(){In||(In=new Audio("intro-music.mp3"),In.loop=!0,In.volume=.45,In.play().catch(()=>{}))}function Ix(n){const e=ye("intro-video-screen");e.classList.remove("hidden");const t=ye("intro-3d-canvas"),i=window.innerWidth,a=window.innerHeight,s=new yo({canvas:t,antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(i,a,!1),s.shadowMap.enabled=!0,s.shadowMap.type=fo;const r=new ua;r.background=new Ge(8900331),r.fog=new Ha(12114160,90,210);const o=new Kt(50,i/a,.1,300);o.position.set(0,65,75),o.lookAt(0,0,0),r.add(new gd(10409208,5929536,1.2));const l=new Mn(16775136,2.8);l.position.set(40,80,50),l.castShadow=!0,l.shadow.mapSize.setScalar(2048),l.shadow.camera.left=l.shadow.camera.bottom=-90,l.shadow.camera.right=l.shadow.camera.top=90,l.shadow.camera.far=220,r.add(l);const d=new Mn(11587839,.45);d.position.set(-30,25,-20),r.add(d),r.add(new C(new at(190,16,8),new wt({color:6991584,side:Ht})));function c(D,ie=.78,be=0,Ae,Te){const Q={color:D,roughness:ie,metalness:be};return Ae!==void 0&&(Q.emissive=Ae,Q.emissiveIntensity=Te||.2),new ae(Q)}function h(D,ie,be,Ae,Te,Q,R){const de=new C(new oe(Ae,Te,Q),R);return de.position.set(D,ie+Te*.5,be),de.castShadow=!0,de.receiveShadow=!0,r.add(de),de}function f(D,ie,be,Ae,Te,Q,R,de){const pe=new C(new ge(Ae,Te,Q,R),de);return pe.position.set(D,ie+Q*.5,be),pe.castShadow=!0,pe.receiveShadow=!0,r.add(pe),pe}function p(D,ie,be,Ae,Te,Q=.84){const R=new C(new _t(be,Ae),new ae({color:Te,transparent:!0,opacity:Q,roughness:.04,metalness:.18}));return R.rotation.x=-Math.PI/2,R.position.set(D,.22,ie),r.add(R),R}function g(D,ie,be,Ae,Te,Q,R=5596791,de=.24){const pe=new L(D,ie,be),j=new L(Ae,Te,Q),he=j.clone().sub(pe),nt=he.length();if(nt<.05)return;const it=new C(new ge(de,de,nt,8),c(R,.45,.65));it.position.copy(pe.clone().add(j).multiplyScalar(.5)),it.quaternion.setFromUnitVectors(new L(0,1,0),he.normalize()),r.add(it)}const x=new C(new _t(260,260),c(8033368,.95));x.rotation.x=-Math.PI/2,x.receiveShadow=!0,r.add(x),h(6,-.05,1,82,.1,68,c(11708816,.88));const m=7,u=13,v=5,b=7,_=1.4,k=.36,M=D=>-21+D*b,E=[8008464,6965782,4872744,2977352,2127994,1608346,960716],I=[],y=[];for(let D=0;D<m;D++){const ie=M(D),be=E[D],Ae=c(8028272,.78);h(0,0,ie-v/2,u*2+k*2,_,k,Ae),h(0,0,ie+v/2,u*2+k*2,_,k,Ae),h(-u,0,ie,k,_,v,Ae),h(u,0,ie,k,_,v,Ae),h(0,-.25,ie,u*2,.28,v,c(10524800,.88));const Te=.76+D*.015,Q=p(0,ie,u*2-.1,v-.12,be,Te);if(I.push({mesh:Q,baseOp:Te}),D===3||D===4)for(let R=-1;R<=1;R++){const de=f(R*7,.25,ie,.75,.75,.28,12,c(11189196,.4,.55,3381708,.3));y.push(de),h(R*7,.28,ie,.14,1,.14,c(8948121,.5,.5))}}const T=c(12761250,.88);for(let D=0;D<=m;D++){const ie=-21-b/2+D*b;h(6,0,ie,82,.12,2,T)}h(-20,0,1,2.2,.12,70,T),h(32,0,1,2.2,.12,70,T);for(let D=0;D<m-1;D++){const ie=D%2===0?u+.5:-13.5,be=M(D),Ae=M(D+1);h(ie,0,(be+Ae)*.5,2.2,_,Math.abs(Ae-be)+.5,c(6977672,.65,.3))}h(-28,0,-30,12,5.5,8,c(5924984,.62,.1)),h(-28,5.5,-30,12.5,.55,8.5,c(3819608,.5));for(let D=-1.5;D<=1.5;D+=.65)h(-22.8,0,-30+D,.1,2.4,.1,c(3359829,.4,.7));h(-27,2,-33.7,1.8,1.2,.08,c(8969727,.08,0,13141,.9)),h(-29.5,2,-33.7,1.8,1.2,.08,c(8969727,.08,0,13141,.9));const N=-34,H=-30;f(N,0,H,1.1,.9,14,16,c(8952234,.38,.55)),f(N,14,H,1.2,1.2,.3,16,c(11189196,.35,.5)),[2,4.5,7.5,10.5,13].forEach(D=>{f(N,D,H,1.18,1.18,.18,16,c(10070715,.42,.6))}),g(N+1.1,1.2,H,-22,1.2,-30,4478310,.28),h(N-2.2,6,H,2.8,1.4,1.4,c(6977672,.55,.3)),g(N-1.1,6.5,H,N-1.8,6.5,H,5596791,.22);const se=-24,P=-14,F=12,X=9;h(se,0,P,F,1.5,X,c(7241328,.75)),h(se,0,P,F-k*2,.24,X-k*2,c(10129544,.88));const ne=p(se,P,F-.8,X-.8,5926976,.82);g(-22,.9,-28,-22,.9,-14,4478310,.3),g(-18.2,.9,-14,-13.2,.9,-21,4478310,.3),h(-28,0,8,8,4.5,6.5,c(6975600,.65,.1)),h(-28,4.5,8,8.5,.42,7,c(3817552,.5)),f(-25.5,4.9,6,.34,.34,4.5,10,c(8947864,.5,.3));for(let D=0;D<3;D++)g(-18.5,.8,-21+D*14,-21,.8,-21+D*14,4478310,.2);[-14,-6,2].forEach(D=>{h(-32+D*.3,0,32,6,.42,9.5,c(10522720,.93))});const $=30,K=18,J=10;f($,0,K,J+.55,J+.55,1.6,48,c(8030328,.7)),f($,0,K,J,J,1.6,48,c(8030328,.7)),f($,-.25,K,J,J,.28,48,c(10127472,.88));const V=new C(new cn(J-.08,48),new ae({color:3057848,transparent:!0,opacity:.86,roughness:.04,metalness:.2}));V.rotation.x=-Math.PI/2,V.position.set($,.22,K),r.add(V),f($,1.6,K,.58,.58,3.8,10,c(5925495,.5,.5)),h($,1.6,K,J*2-.3,.22,.38,c(8952234,.45,.4));const Z=new C(new Hn(4.5,2.8,32),c(5911312,.85));Z.rotation.x=Math.PI,Z.position.set($,.9,K),r.add(Z),g(u+.4,.9,M(6),$-J-.6,.9,K,4482696,.3),[[44,-10],[52,-10]].forEach(([D,ie])=>{h(D,0,ie,6.5,1.1,10,c(7899288,.7)),p(D,ie,6,9.5,6728396,.82)}),f(58,0,-5,.95,.95,3.4,14,c(14544639,.32,.28,8930559,.4)),g($+J+.5,.9,K,44,.9,-10,4482696,.28),g(48,.9,-10,52,.9,-10,4482696,.25),g(55.5,.9,-10,58,.9,-5,4482696,.25),h(58,0,16,.36,9,.36,c(10066602,.4,.6)),h(58,9,16,1.6,.9,1,c(13378082,.5,.3,16711680,.55));const O=new C(new at(.32,8,8),new ae({color:16720418,emissive:16711680,emissiveIntensity:2.5}));O.position.set(58,10.2,16),r.add(O);const te=[];for(let D=0;D<4;D++){const ie=new C(new at(.22,6,6),new ae({color:2293691,emissive:52360,emissiveIntensity:1.8,transparent:!0,opacity:.9}));ie.userData.i=D,r.add(ie),te.push(ie)}const Y=p(72,8,18,60,2263227,.78);g(58,.9,-5,66,.9,0,4482696,.3);const me=new ae({color:7027210,roughness:.95}),fe=[c(2981178,.9),c(3837764,.88),c(4888896,.85),c(2263098,.92),c(5474352,.87),c(1992226,.93)],Ce=[];for(let D=-58;D<=78;D+=6.5)Ce.push([D,-42]),Ce.push([D,44]);for(let D=-40;D<=42;D+=6.5)Ce.push([-58,D]),Ce.push([78,D]);[[-44,-22],[-46,-8],[-44,18],[-44,30],[56,-28],[58,-12],[56,10],[56,30],[-36,38],[-18,40],[2,40],[20,40],[38,40],[-36,-36],[-18,-38],[2,-38],[22,-38],[42,-36],[52,-36]].forEach(D=>Ce.push(D)),Ce.forEach(([D,ie])=>{const be=.85+Math.random()*.75,Ae=new C(new ge(.18*be,.3*be,2.2*be,7),me);Ae.position.set(D,1.1*be,ie),Ae.castShadow=!0,r.add(Ae);const Te=fe[Math.floor(Math.random()*fe.length)];if(Math.random()>.42){const Q=new C(new at(1.5*be,8,7),Te);Q.position.set(D,3.8*be,ie),Q.castShadow=!0,r.add(Q)}else for(let Q=0;Q<3;Q++){const R=new C(new Hn((1.3-Q*.28)*be,1.3*be,8),Te);R.position.set(D,(2.5+Q*1.2)*be,ie),R.castShadow=!0,r.add(R)}});const Ue=new ud([new L(-23,.7,-30),new L(-23,.7,-21),new L(se,.7,P),new L(-13,.7,-21),new L(0,.7,-21),new L(13,.7,-21),new L(14,.7,-17.5),new L(13,.7,-14),new L(0,.7,-14),new L(-13,.7,-14),new L(-14,.7,-10.5),new L(-13,.7,-7),new L(0,.7,-7),new L(13,.7,-7),new L(14,.7,-3.5),new L(13,.7,0),new L(0,.7,0),new L(-13,.7,0),new L(-14,.7,3.5),new L(-13,.7,7),new L(0,.7,7),new L(13,.7,7),new L(14,.7,10.5),new L(13,.7,14),new L(0,.7,14),new L(-13,.7,14),new L(-14,.7,17.5),new L(-13,.7,21),new L(0,.7,21),new L(13,.7,21),new L(22,.7,21),new L($,.7,K),new L(44,.7,-10),new L(58,.7,-5),new L(66,.7,0)]);function Ne(D,ie,be){const Ae=D>>16&255,Te=D>>8&255,Q=D&255,R=ie>>16&255,de=ie>>8&255,pe=ie&255;return Math.round(Ae+(R-Ae)*be)<<16|Math.round(Te+(de-Te)*be)<<8|Math.round(Q+(pe-Q)*be)}const et=90,z=[];for(let D=0;D<et;D++){const ie=D/et,be=Ne(8005632,1091800,ie),Ae=D%3!==0,Te=Ae?new To(.1+D%6*.04,.28+D%5*.07,20):new cn(.16+D%7*.03,12),Q=new C(Te,new ae({color:be,emissive:be,emissiveIntensity:Ae?.65:.3,roughness:.04,metalness:.1,transparent:!0,opacity:Ae?.72:.52,side:At}));Q.rotation.x=-Math.PI/2,Q.userData.t=ie,Q.userData.ph=D*.618033%1,r.add(Q),z.push(Q)}const Rt=[],De=50,ze=[[-7,0],[0,0],[7,0],[-7,7],[0,7],[7,7]];for(let D=0;D<De;D++){const ie=ze[D%ze.length],be=new C(new at(.07+Math.random()*.09,5,5),new ae({color:12118271,transparent:!0,opacity:.72}));be.userData.phase=D/De*Math.PI*2,be.userData.ox=ie[0]+(Math.random()-.5)*10,be.userData.oz=ie[1]+(Math.random()-.5)*(v-1),r.add(be),Rt.push(be)}const Le=[],ht=28;for(let D=0;D<ht;D++){const ie=new C(new at(.14,5,5),new ae({color:7025425,transparent:!0,opacity:.78}));ie.userData.phase=D/ht,ie.userData.ang=Math.random()*Math.PI*2,ie.userData.r=1.5+Math.random()*(J-3),r.add(ie),Le.push(ie)}const We=[],A=36;for(let D=0;D<A;D++){const ie=new C(new at(.3+Math.random()*.22,7,7),new ae({color:15661311,emissive:11197934,emissiveIntensity:.18,transparent:!0,opacity:.55,roughness:.85}));ie.userData.life=D/A,ie.userData.ox=(Math.random()-.5)*1.2,ie.userData.oz=(Math.random()-.5)*1.2,r.add(ie),We.push(ie)}const w=[],B=22;for(let D=0;D<B;D++){const ie=new C(new at(.26,5,5),new ae({color:11184810,transparent:!0,opacity:.38}));ie.userData.life=D/B,ie.userData.ox=(Math.random()-.5)*.6,ie.userData.oz=(Math.random()-.5)*.6,r.add(ie),w.push(ie)}const ue=[],ce=12;for(let D=0;D<ce;D++){const ie=new C(new at(.13,5,5),new ae({color:14548872,transparent:!0,opacity:.88}));ie.userData.phase=D/ce,ie.userData.ox=(Math.random()-.5)*3.5,r.add(ie),ue.push(ie)}const re=[{tag:"Tahap 1 dari 5",title:"Penampungan Awal (Bak Ekualisasi)",subtitle:"Equalization Basin",waterQuality:5,camPos:[-40,32,-36],camLook:[-24,0,-24],desc:"Limbah vinasse yang pekat dari industri etanol dialirkan dan ditampung terlebih dahulu di bak penampungan awal IPAL Ciunik. Pada tahap ini, dilakukan penyamaan atau stabilisasi debit, suhu, dan tingkat keasaman (pH) limbah agar kondisinya ideal dan tidak merusak sistem pengolahan di tahap selanjutnya."},{tag:"Tahap 2 dari 5",title:"Proses Aerasi (Injeksi Oksigen)",subtitle:"Aeration Process",waterQuality:28,camPos:[-10,28,-10],camLook:[0,0,0],desc:"Setelah stabil, limbah dialirkan ke dalam bak aerasi. Di dalam bak ini, air limbah dipompa dan disuplai dengan gelembung udara (oksigen) secara terus-menerus menggunakan mesin aerator. Oksigen ini sangat krusial untuk menjaga agar kondisi air tetap kaya oksigen terlarut."},{tag:"Tahap 3 dari 5",title:"Penambahan Mikroorganisme (Bakteri Pengurai)",subtitle:"Biological Treatment",waterQuality:55,camPos:[8,32,16],camLook:[6,0,2],desc:"Bersamaan dengan suplai oksigen yang melimpah, ditambahkan mikroorganisme aerobik (bakteri pengurai) ke dalam bak aerasi. Mikroorganisme ini bekerja dengan cara menguraikan polutan serta zat-zat organik berbahaya yang terkandung dalam vinasse, mengubahnya menjadi pupuk organik cair."},{tag:"Tahap 4 dari 5",title:"Pengendapan (Clarifier)",subtitle:"Secondary Clarifier",waterQuality:80,camPos:[32,28,28],camLook:[30,0,18],desc:"Setelah zat organik hancur terurai, campuran air limbah dan mikroorganisme dialirkan ke bak pengendap. Gumpalan bakteri dan sisa kotoran akan dibiarkan mengendap ke dasar bak, sementara air yang sudah jernih akan terpisah dan naik ke permukaan."},{tag:"Tahap 5 dari 5",title:"Pelepasan Air Bersih (Output)",subtitle:"Clean Water Discharge",waterQuality:100,camPos:[62,30,30],camLook:[54,0,14],desc:"Air hasil pemisahan tersebut kini memiliki kadar polutan (seperti BOD dan COD) yang sangat rendah dan sudah memenuhi standar baku mutu lingkungan. Air ini dapat dikembalikan atau dilepas ke alam tanpa mencemari ekosistem sekitarnya atau dimanfaatkan menjadi pupuk organik cair."}],ke=ye("intro-stage-label");let _e=-1;const Ee=11,Oe=Ee*re.length;function qe(D){return D<.5?2*D*D:-1+(4-2*D)*D}function le(D,ie,be){return[D[0]+(ie[0]-D[0])*be,D[1]+(ie[1]-D[1])*be,D[2]+(ie[2]-D[2])*be]}let st=null;const je=new vd,Be=ye("btn-intro-continue");Be.disabled=!1;function Pe(){st=requestAnimationFrame(Pe);const D=je.getElapsedTime(),be=D%Oe/Ee,Ae=Math.min(Math.floor(be),re.length-1),Te=be-Math.floor(be),Q=(Ae+re.length-1)%re.length,R=.15;let de,pe;if(Te<R){const j=qe(Te/R);de=le(re[Q].camPos,re[Ae].camPos,j),pe=le(re[Q].camLook,re[Ae].camLook,j)}else{const j=re[Ae].camPos,he=re[Ae].camLook;de=[j[0]+Math.sin(D*.26)*1.4,j[1]+Math.sin(D*.19)*.6,j[2]+Math.cos(D*.22)*1.1],pe=[...he]}if(o.position.set(de[0],de[1],de[2]),o.lookAt(pe[0],pe[1],pe[2]),Ae!==_e&&ke){_e=Ae;const j=re[Ae],he=j.waterQuality,nt=he<40?"#e05020":he<75?"#d4aa20":"#22bb55";ke.innerHTML=`<div class="sl-tag">${j.tag}</div><div class="sl-title">${j.title}</div><div class="sl-subtitle">${j.subtitle}</div><div class="sl-desc">${j.desc}</div><div class="sl-wq"><span style="font-size:11px;opacity:.75;margin-right:6px">Kualitas Air</span><div class="sl-wq-bar"><div class="sl-wq-fill" style="width:${he}%;background:${nt}"></div></div><span class="sl-wq-val" style="color:${nt}">${he}%</span></div><div class="sl-dots">${re.map((it,Et)=>`<span class="sl-dot${Et===Ae?" active":""}"></span>`).join("")}</div>`}z.forEach(j=>{j.userData.t=(j.userData.t+.00145)%1;const he=j.userData.t;j.position.copy(Ue.getPoint(he)),j.position.y=.27;const nt=(j.userData.ph+D*.32)%1;j.scale.setScalar(.4+nt*2.2),j.material.opacity=Math.max(0,.8-nt*.88);const it=Ne(8005632,1091800,he);j.material.color.setHex(it),j.material.emissive.setHex(it)}),Rt.forEach(j=>{const he=(D*.82+j.userData.phase)%(Math.PI*2)/(Math.PI*2);j.position.set(j.userData.ox,.22+he*1.55,j.userData.oz),j.material.opacity=he<.72?.7:(1-he)*4.5}),Le.forEach(j=>{const he=(D*.22+j.userData.phase)%1;j.position.set($+Math.cos(j.userData.ang+D*.04)*j.userData.r,1.3-he*1.2,K+Math.sin(j.userData.ang+D*.04)*j.userData.r),j.material.opacity=he>.75?(1-he)*5:.72}),y.forEach((j,he)=>{j.rotation.y=D*(1.5+he%3*.4)}),We.forEach(j=>{j.userData.life=(j.userData.life+.0048)%1;const he=j.userData.life;j.position.set(N+j.userData.ox+Math.sin(he*4.2+D*.7)*.55,14.3+he*8,H+j.userData.oz+Math.cos(he*3.5+D*.5)*.55),j.scale.setScalar(.5+he*2.8),j.material.opacity=Math.max(0,.55-he*.62)}),w.forEach(j=>{j.userData.life=(j.userData.life+.0036)%1;const he=j.userData.life;j.position.set(-25.5+j.userData.ox+Math.sin(he*3.5+D)*.5,4.9+he*5.5,6+j.userData.oz+Math.cos(he*2.8+D*.6)*.4),j.material.opacity=Math.max(0,(1-he)*.4),j.scale.setScalar(.18+he*1.25)}),ue.forEach(j=>{const he=(D*1.05+j.userData.phase)%1;j.position.set(58+j.userData.ox,3.8-he*4.5,-5),j.material.opacity=.88*(1-he)}),O.material.emissiveIntensity=1.2+1.5*Math.sin(D*5.8),te.forEach(j=>{const he=(D*.58+j.userData.i*.25)%1;j.position.set(58+he*14,10.2+Math.sin(he*Math.PI)*5,16+he*6),j.material.opacity=(1-he)*.88}),I.forEach(j=>{j.mesh.material.opacity=j.baseOp+.03*Math.sin(D*.75+j.baseOp*14)}),V.material.opacity=.84+.05*Math.sin(D*1.05),ne.material.opacity=.8+.04*Math.sin(D*.68),Y.material.opacity=.75+.06*Math.sin(D*.88),s.render(r,o)}Pe(),ye("btn-intro-continue").onclick=()=>{cancelAnimationFrame(st),s.dispose(),e.classList.add("hidden"),n()}}function kd(n){ye("instructions-screen").classList.remove("hidden");const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1,t=ye("instr-controls-text");t&&(t.innerHTML=e?"Gunakan <strong>joystick virtual</strong> di kiri bawah layar untuk bergerak. Dekati objek bercahaya lalu ketuk tombol <strong>E</strong> di kanan bawah untuk berinteraksi.":"Gunakan <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> atau tombol panah untuk bergerak. Dekati objek bercahaya lalu tekan <kbd>E</kbd> untuk berinteraksi.");const i=ye("instr-level-guide");if(i){const a=[{num:1,icon:"🔬",name:"Lab Sains",desc:"Amati 3 fenomena pencemaran vinasse di laboratorium dan jawab pertanyaan ilmiah."},{num:2,icon:"🏭",name:"Pabrik Etanol",desc:"Kunjungi 3 stasiun pabrik, lakukan simulasi pengolahan COD/BOD/pH secara interaktif."},{num:3,icon:"🌿",name:"Kolam Remediasi",desc:"Pilih mikroorganisme yang tepat di toko, hitung dosis, lalu buka kran vinasse."},{num:4,icon:"🔧",name:"Workshop IPAL",desc:"Rancang prototype reaktor IPAL: pilih alat & bahan, ikuti prosedur, evaluasi hasilnya."},{num:5,icon:"🔭",name:"Lab Observasi",desc:"Analisis kegagalan reaktor dari Level 4 dan jawab soal evaluasi mikroskop."}];i.innerHTML=a.map(s=>`
      <div class="level-guide-card">
        <span class="lg-icon">${s.icon}</span>
        <div><strong>Level ${s.num} – ${s.name}</strong><div class="lg-desc">${s.desc}</div></div>
      </div>
    `).join("")}ye("btn-start-game").onclick=()=>{ye("instructions-screen").classList.add("hidden"),n()}}function yc(){kd(()=>{});const n=ye("btn-start-game");n.textContent="✕ Tutup Petunjuk"}function Ux(){jt(),ye("btn-glossary").onclick=()=>co(),ye("btn-instructions-hud").onclick=()=>yc();const n=document.getElementById("btn-instructions-hud-mobile"),e=document.getElementById("btn-glossary-mobile"),t=document.getElementById("btn-pause-menu-mobile");n&&n.addEventListener("touchstart",i=>{i.preventDefault(),yc()},{passive:!1}),e&&e.addEventListener("touchstart",i=>{i.preventDefault(),co()},{passive:!1}),t&&t.addEventListener("touchstart",i=>{i.preventDefault(),ye("btn-pause-menu").click()},{passive:!1})}function Nx(n,e){const t=ye("pause-menu-overlay");ye("btn-pause-menu").onclick=()=>{const i=ko(),a=ye("pause-checkpoint-info"),s=ye("btn-pm-resume");if(i){const r=new Date(i.savedAt),o=r.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})+" "+r.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});a.innerHTML=`💾 Checkpoint tersimpan: <strong>${i.playerName}</strong> · Level ${i.currentLevel} · ${i.totalPoints} poin<br><small style="color:#aaa">${o}</small>`,s.disabled=!1,s.title=""}else a.innerHTML='<span style="color:#aaa">Belum ada checkpoint tersimpan.</span>',s.disabled=!0,s.title="Tidak ada checkpoint tersimpan";t.classList.remove("hidden")},ye("btn-pm-continue").onclick=()=>{t.classList.add("hidden")},ye("btn-pm-resume").onclick=()=>{t.classList.add("hidden"),n()},ye("btn-pm-newgame").onclick=()=>{confirm("Yakin ingin memulai ulang? Semua progres sesi ini akan hilang.")&&(t.classList.add("hidden"),e())},ye("btn-pm-experiment").onclick=()=>{t.classList.add("hidden"),Po()},t.addEventListener("click",i=>{i.target===t&&t.classList.add("hidden")})}function jt(){ye("hud-player").textContent=ee.playerName||"Pemain",ye("hud-level").textContent=`Level ${ee.currentLevel}`,ye("hud-points").textContent=ee.totalPoints;const n=ye("hud-attempts");n.innerHTML="";for(let e=0;e<3;e++){const t=document.createElement("div");t.className="attempt-dot"+(e<ee.levelAttempts?" used":""),n.appendChild(t)}}function Do(n){const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1;let t=ye("interact-prompt");t||(t=document.createElement("div"),t.id="interact-prompt",t.style.cssText=`
      position:fixed; bottom:${e?"200px":"120px"}; left:50%; transform:translateX(-50%);
      background:rgba(10,20,40,0.88); color:#fff; padding:10px 22px;
      border-radius:24px; font-size:15px; pointer-events:none;
      border:2px solid #00d4ff; box-shadow:0 0 18px #00d4ff88;
      transition:opacity 0.25s; z-index:200; white-space:nowrap;
    `,document.body.appendChild(t)),e&&n&&(n=n.replace(/Tekan <kbd>E<\/kbd>/g,"👆 Ketuk tombol <b>E</b>")),n?(t.innerHTML=n,t.style.opacity="1",t.style.display="block"):(t.style.opacity="0",setTimeout(()=>{t.style.display="none"},260))}function Ox(n,e,t){const i=ye("stage-screen");i.classList.remove("hidden"),i.style.pointerEvents="all",ee.phenomenonIndex=n,Cd(n,()=>{i.classList.add("hidden"),i.style.pointerEvents="none",e&&e()},()=>{i.classList.add("hidden"),i.style.pointerEvents="none",t&&t()},!0)}function Sa(n){var t;ee.levelAttempts++,Md(ee.currentLevel);const e=((t=ee.levelBreakdown.at(-1))==null?void 0:t.points)??0;Wx(e,"🏠 Kembali ke Pilihan Ruangan →",()=>{fx(),jt(),n&&n()})}const Fx=[{level:1,icon:"🔬",name:"Lab Sains",desc:"Analisis fenomena pencemaran vinasse melalui kuis MCQ",color:"#2980b9"},{level:2,icon:"🏭",name:"Pabrik Etanol",desc:"Simulasi pengukuran COD, BOD & pH limbah vinasse",color:"#e67e22"},{level:3,icon:"🌿",name:"Kolam Remediasi",desc:"Pilih mikroorganisme & buka kran bioremediasi",color:"#27ae60"},{level:4,icon:"⚙️",name:"Workshop IPAL",desc:"Rancang reaktor pengolahan limbah IPAL",color:"#8e44ad"},{level:5,icon:"🔭",name:"Lab Observasi",desc:"Analisis hasil reaktor & evaluasi akhir",color:"#c0392b"}];function zx(n){const e=document.getElementById("room-select-overlay");e.classList.remove("hidden");function t(){const i=document.getElementById("room-select-grid");i.innerHTML=Fx.map(s=>{const r=ee.completedRooms.includes(s.level);return`
        <button class="room-card ${r?"room-card--done":""}" data-level="${s.level}"
          style="--room-color:${s.color}">
          <div class="room-card-icon">${s.icon}</div>
          <div class="room-card-body">
            <div class="room-card-name">Level ${s.level} — ${s.name}</div>
            <div class="room-card-desc">${s.desc}</div>
          </div>
          <div class="room-card-status">${r?"✅ Selesai":"▶ Mulai"}</div>
        </button>
      `}).join(""),document.getElementById("room-hub-points").textContent=`🪙 ${ee.totalPoints} poin`,document.getElementById("room-hub-progress").textContent=`${ee.completedRooms.length} / 5 ruangan selesai`,i.querySelectorAll(".room-card").forEach(s=>{s.addEventListener("click",()=>{const r=parseInt(s.dataset.level);e.classList.add("hidden"),n(r)})});let a=document.getElementById("room-hub-optional");a||(a=document.createElement("div"),a.id="room-hub-optional",a.style.cssText=`
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
    `,a.querySelector("#btn-room-upload-exp").onmouseenter=function(){this.style.background="rgba(21,101,192,.22)"},a.querySelector("#btn-room-upload-exp").onmouseleave=function(){this.style.background="rgba(21,101,192,.12)"},a.querySelector("#btn-room-upload-exp").onclick=()=>{e.classList.add("hidden"),Po()}}t(),e._refresh=t}function Bx(){var t;Md(ee.currentLevel),wx({playerName:ee.playerName,totalPoints:ee.totalPoints,levelBreakdown:ee.levelBreakdown,completedAt:new Date().toISOString(),essayAnswer:((t=ee.stage5)==null?void 0:t.essayAnswer)||""}),Ed();const n=ee.levelBreakdown.map(i=>`
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
              <td style="text-align:right;padding:8px 12px;font-size:22px;font-weight:700;color:#ffe040">${ee.totalPoints}</td>
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
  `,document.body.appendChild(e),e.querySelector("#btn-gc-close").onclick=()=>{e.remove(),jt()},e.querySelector("#btn-gc-restart").onclick=()=>{e.remove(),window.location.reload()},e.querySelector("#btn-gc-experiment").onclick=()=>{Po()}}function Cd(n,e,t,i=!1){const a=Ma.phenomena[n],s=ye("stage-screen");ee.wrongAnswers=0;const r=s.querySelector(".stage-panel");r&&r.remove();const o=document.createElement("div");o.className="stage-panel fade-in",o.innerHTML=`
    <div class="phenomenon-header">
      <span class="phenomenon-badge">${a.title}</span>
      ${i?"":`<span class="question-progress">${n+1} / ${Ma.phenomena.length}</span>`}
      ${t?'<button class="panel-close-btn" id="panel-close-btn" title="Tutup">✕</button>':""}
    </div>
    ${i?"":`
    <div class="progress-bar-wrap">
      ${Ma.phenomena.map((g,x)=>`<div class="prog-dot ${x<n?"done":x===n?"active":""}"></div>`).join("")}
    </div>`}
  `,t&&setTimeout(()=>{const g=o.querySelector("#panel-close-btn");g&&(g.onclick=t)},0);const l=document.createElement("div");if(l.className="question-text",l.innerHTML=a.context,o.appendChild(l),a.image){const g=document.createElement("div");g.style.cssText="text-align:center;margin:10px 0";const x=document.createElement("img");x.src=a.image,x.alt=a.title||"Gambar soal",x.style.cssText="max-width:100%;max-height:260px;border-radius:10px;border:2px solid rgba(255,255,255,.15);object-fit:contain",g.appendChild(x),o.appendChild(g)}a.tableData&&o.appendChild(Hx(a.tableData)),a.standardTable&&o.appendChild(Gx(a.standardTable)),a.riceGraph&&o.appendChild(Vx());const d=document.createElement("div");d.className="question-text",d.style.marginTop="4px",d.style.borderLeftColor="#e67e22",d.innerHTML=`<strong>❓ Pertanyaan:</strong><br>${a.question}`,o.appendChild(d);const c=document.createElement("div");c.className="answer-options";let h=!1;a.options.forEach(g=>{const x=document.createElement("button");x.className="answer-btn",x.innerHTML=`<strong>${g.label}.</strong> ${g.text}`,x.dataset.correct=g.correct,x.onclick=()=>{if(!h)if(g.correct){h=!0,x.classList.add("correct");const m=ee.wrongAnswers===0?100:ee.wrongAnswers<=1?50:25;ee.totalPoints+=m,jt(),wc(o,!0,a.explanation+`<br><strong>+${m} poin!</strong>`),p.classList.add("visible"),c.querySelectorAll(".answer-btn").forEach(u=>u.disabled=!0)}else x.classList.add("wrong"),x.disabled=!0,ee.wrongAnswers++,jt(),wc(o,!1,"❌ Jawaban kurang tepat. Coba pilihan lain!")},c.appendChild(x)}),o.appendChild(c);const f=document.createElement("div");f.className="feedback-box",f.id="feedback-box",o.appendChild(f);const p=document.createElement("button");p.className="next-btn",p.textContent=i?"✅ Selesai":n<Ma.phenomena.length-1?"Fenomena Berikutnya →":"✅ Selesai Level 1",p.onclick=()=>{i||n>=Ma.phenomena.length-1?(s.classList.add("hidden"),s.style.pointerEvents="none",e&&e()):(ee.phenomenonIndex++,Cd(ee.phenomenonIndex,e,t,!1))},o.appendChild(p),s.appendChild(o)}function wc(n,e,t){const i=n.querySelector("#feedback-box");i&&(i.className="feedback-box "+(e?"correct":"wrong"),i.innerHTML=t)}function Hx(n){const e=document.createElement("div");e.className="data-table-wrap";let t='<table class="data-table"><thead><tr>';for(const i of n.headers)t+=`<th>${i}</th>`;t+="</tr></thead><tbody>";for(const i of n.rows)t+=`<tr><td><strong>${i.label}</strong></td>`,i.values.forEach((a,s)=>{const r=i.classes[s]?` class="${i.classes[s]}"`:"";t+=`<td${r}>${a}</td>`}),t+="</tr>";return t+="</tbody></table>",n.note&&(t+=`<div class="info-label" style="margin-top:6px">📌 ${n.note}</div>`),e.innerHTML=t,e}function Gx(n){const e=document.createElement("div");e.className="std-table-wrap";let t=`<div class="info-label" style="margin-bottom:6px">📋 ${n.title}</div>`;t+='<table class="std-table"><thead><tr>';for(const i of n.headers)t+=`<th>${i}</th>`;t+="</tr></thead><tbody>";for(const i of n.rows)t+="<tr>"+i.map(a=>`<td>${a}</td>`).join("")+"</tr>";return t+="</tbody></table>",e.innerHTML=t,e}function Vx(){const n=document.createElement("div");n.className="rice-graph-wrap";const e=document.createElement("img");return e.src="rice-graph.png",e.alt="Grafik produktivitas panen padi",e.style.cssText="width:100%;border-radius:8px;border:1px solid rgba(255,255,255,0.1);display:block;",n.appendChild(e),n}function Wx(n,e,t){const i=ye("result-overlay");i.classList.remove("hidden");const a=n>=75;ye("result-icon").textContent=a?"🎉":n>=50?"👍":"💡",ye("result-title").textContent=a?"Luar Biasa!":n>=50?"Bagus!":"Terus Belajar!",ye("result-score").textContent=`+${n} poin`,ye("result-total").textContent=`Total: ${ee.totalPoints} poin`;const s=ee.levelAttempts,r=s===1?"🥇 Berhasil di percobaan pertama!":s===2?"🥈 Berhasil di percobaan ke-2.":"🥉 Berhasil di percobaan ke-3.";ye("result-attempts").textContent=r;const o=ye("btn-result-continue");o.textContent=e,o.onclick=()=>{i.classList.add("hidden"),t()}}function co(){ye("glossary-modal").classList.toggle("hidden")}function Xx(){const n=ye("hud");n.innerHTML=`
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
  `,n.style.display="none";const e=ye("ui-overlay");e.innerHTML=`
    <!-- PAUSE MENU MODAL -->
    <div id="pause-menu-overlay" class="hidden">
      <div id="pause-menu-card">
        <div id="pause-menu-title">⚙️ Menu Permainan</div>
        <div id="pause-checkpoint-info"></div>
        <button class="btn-pause-action" id="btn-pm-continue">▶ Lanjutkan Bermain</button>
        <button class="btn-pause-action btn-pause-checkpoint" id="btn-pm-resume">↩ Kembali ke Checkpoint</button>
        <button class="btn-pause-action btn-pause-newgame" id="btn-pm-newgame">🔄 Mulai Ulang (New Game)</button>
        <button class="btn-pause-action" id="btn-pm-experiment" style="background:rgba(21,101,192,.25);border-color:rgba(100,160,255,.4);color:#7ec8ff">📋 Upload Hasil Percobaan</button>
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
  `,ye("btn-profile-start").onclick=()=>{const t=ye("input-name").value.trim();if(!t){ye("input-name").style.borderColor="#e74c3c",ye("input-name").focus();return}ee.playerName=t,Td(),lo&&lo(t)},ye("input-name").addEventListener("keydown",t=>{t.key==="Enter"&&ye("btn-profile-start").click()}),setTimeout(()=>{const t=ye("btn-close-glossary");t&&(t.onclick=()=>co());let i=1;const a=2;function s(){ye("glossary-page-1").classList.toggle("hidden",i!==1),ye("glossary-page-2").classList.toggle("hidden",i!==2),ye("glossary-page-indicator").textContent=`${i} / ${a}`,ye("btn-glossary-prev").disabled=i===1,ye("btn-glossary-next").disabled=i===a;const l=ye("glossary-modal").querySelector(".glossary-card");l&&(l.scrollTop=0)}ye("btn-glossary-next").onclick=()=>{i<a&&(i++,s())},ye("btn-glossary-prev").onclick=()=>{i>1&&(i--,s())};const r=ye("glossary-modal");new MutationObserver(()=>{r.classList.contains("hidden")||(i=1,s())}).observe(r,{attributes:!0,attributeFilter:["class"]})},100)}const Qe=n=>document.getElementById(n);function qx(n){Qx();const e=Qe("sim-overlay");e&&e.remove();const t=document.createElement("div");t.id="sim-overlay",t.className="sim-overlay",t.innerHTML=$x(),document.body.appendChild(t),requestAnimationFrame(()=>{Yx(t,n)})}function $x(){return`
    <div class="sim-card">
      <!-- Header -->
      <div class="sim-header">
        <span class="sim-badge">🔬 SIMULASI LAB</span>
        <h2 class="sim-title">Pengolahan Limbah Vinasse</h2>
        <p class="sim-subtitle">Ukur TDS, DO & pH — lalu uji efektivitas aerasi</p>
      </div>

      <!-- Step 1: Multi-glass drag-to-pour -->
      <div class="sim-step" id="sim-step-1">
        <div class="step-title">
          <span class="step-num">1</span>
          Tuangkan Vinasse ke dalam Beker — seret gelas ke beker
        </div>
        <!-- Row of vinasse glasses (5 × 200 mL) -->
        <div class="glasses-row-wrap">
          <div class="glasses-row" id="glasses-row">
            ${[0,1,2,3,4].map(n=>`
              <div class="vinasse-glass" id="vglass-${n}" data-idx="${n}">
                <div class="vg-liquid" id="vglass-liq-${n}"></div>
                <div class="vg-label">200 mL</div>
              </div>
            `).join("")}
          </div>
          <div class="glasses-hint">↓ Seret gelas ke beker untuk menuangkan</div>
        </div>
        <!-- Beaker drop target -->
        <div class="beaker-pour-row">
          <div class="beaker-drop-zone" id="beaker-drop-zone">
            <div class="beaker-drops" id="beaker-drops"></div>
            <div class="beaker-wrap">
              <div class="beaker">
                <div class="beaker-vinasse" id="beaker-vinasse"></div>
                <div class="beaker-water"   id="beaker-water"></div>
                <div class="beaker-scale">
                  ${[1e3,800,600,400,200,0].map(n=>`<span>${n}</span>`).join("")}
                </div>
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
            <button class="sim-btn-sm" id="btn-reset-pour">🔄 Isi Ulang Gelas</button>
            <div class="vol-legend" style="margin-top:10px">
              <span class="legend-box water-box"></span> Air suling
              <span class="legend-box vinasse-box"></span> Vinasse
            </div>
          </div>
        </div>
        <button class="sim-btn" id="btn-titrate" disabled>📏 Ukur Parameter →</button>
      </div>

      <!-- Step 2: TDS/DO Meter dip -->
      <div class="sim-step hidden" id="sim-step-2">
        <div class="step-title">
          <span class="step-num">2</span>
          Ukur Parameter — Celupkan TDS/DO Meter
        </div>
        <div class="meter-layout">
          <!-- LEFT: Display unit stick (static, shows readings) -->
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
          <!-- CABLE (decorative) -->
          <svg class="meter-cable-svg" viewBox="0 0 80 24" preserveAspectRatio="none">
            <path d="M0,12 C20,4 60,20 80,12" stroke="#3a7a9a" stroke-width="2.5" fill="none" stroke-dasharray="5,4"/>
          </svg>
          <!-- RIGHT: Draggable probe stick + beaker (drop zone) + results -->
          <div class="meter-probe-area">
            <div class="meter-instruction" id="meter-instruction">
              Seret probe sensor ⤵ ke dalam larutan vinasse untuk mengukur parameter kualitas air.
            </div>
            <div class="meter-probe-column">
              <div class="meter-probe-stick" id="meter-probe-stick" title="Seret ke dalam larutan">
                <div class="mps-handle">⊕</div>
                <div class="mps-shaft"></div>
                <div class="mps-tip"></div>
              </div>
              <div class="meter-beaker-wrap">
                <div class="meter-beaker" id="meter-beaker">
                  <div class="meter-bk-vinasse" id="meter-bk-vinasse"></div>
                  <div class="meter-bk-ripple" id="meter-bk-ripple"></div>
                  <div class="meter-bk-scale">
                    ${[1e3,800,600,400,200].map(n=>`<span>${n}</span>`).join("")}
                  </div>
                </div>
                <div class="meter-bk-label" id="meter-vol-label">— mL</div>
              </div>
            </div>
            <div class="meter-result-grid hidden" id="meter-result-grid"></div>
            <div class="meter-note hidden" id="meter-note"></div>
            <button class="sim-btn hidden" id="btn-go-aerate">💨 Lanjut ke Simulasi Aerasi →</button>
          </div>
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
  `}function Yx(n,e){let t=0,i=null,a=null,s=!1,r=null;{let se=function(){document.getElementById("vol-display-num").textContent=t,document.getElementById("vol-display-water").textContent=1e3-t},P=function(Y){const me=document.getElementById(`vglass-liq-${Y}`),fe=document.getElementById(`vglass-${Y}`);!me||!fe||(me.style.height=E[Y]/200*100+"%",E[Y]<=0&&(fe.classList.add("empty"),fe.classList.remove("dragging")))},F=function(){const Y=document.getElementById("beaker-drops");if(!Y)return;const me=document.createElement("div");me.className="sim-drop",me.style.setProperty("--spread",(Math.random()-.5)*10+"px"),me.style.setProperty("--dur",.28+Math.random()*.24+"s"),Y.appendChild(me),setTimeout(()=>me.remove(),600)},X=function(){T||y===null||(T=setInterval(()=>{if(y===null||E[y]<=0||t>=1e3){ne();return}const Y=Math.min(25,E[y],1e3-t);E[y]-=Y,t=Math.min(1e3,t+Y),$r(t),se(),Qe("btn-titrate").disabled=!1;const me=document.getElementById("vg-ghost-liquid");me&&(me.style.height=E[y]/200*100+"%"),P(y)},80),N=setInterval(F,55))},ne=function(){clearInterval(T),clearInterval(N),T=N=null},$=function(Y,me){I.style.left=Y-18+"px",I.style.top=me-64+"px";const fe=document.getElementById("beaker-drop-zone");if(!fe)return;const Ce=fe.getBoundingClientRect(),Ue=Y>=Ce.left&&Y<=Ce.right&&me>=Ce.top&&me<=Ce.bottom;Ue!==H&&(H=Ue,fe.classList.toggle("active",Ue),I.classList.toggle("tilting",Ue),Ue?X():ne())},K=function(Y,me,fe){var Ue;if(E[Y]<=0)return;y=Y,H=!1,(Ue=document.getElementById(`vglass-${Y}`))==null||Ue.classList.add("dragging"),I.classList.remove("hidden");const Ce=document.getElementById("vg-ghost-liquid");Ce&&(Ce.style.height=E[Y]/200*100+"%"),$(me,fe)},J=function(){var me,fe;if(y===null)return;ne(),P(y),(me=document.getElementById(`vglass-${y}`))==null||me.classList.remove("dragging"),y=null,H=!1,I.classList.add("hidden"),I.classList.remove("tilting"),(fe=document.getElementById("beaker-drop-zone"))==null||fe.classList.remove("active");const Y=document.getElementById("beaker-drop-label");Y&&(Y.textContent=t>0?`✓ ${t} mL dituang — seret gelas lagi untuk menambah`:"Jatuhkan di sini")},V=function(Y){y!==null&&$(Y.clientX,Y.clientY)},Z=function(){J()},O=function(Y){y!==null&&($(Y.touches[0].clientX,Y.touches[0].clientY),Y.preventDefault())},te=function(){J()};var o=se,l=P,d=F,c=X,h=ne,f=$,p=K,g=J,x=V,m=Z,u=O,v=te;const E=Array(5).fill(200);t=0,$r(0);const I=document.createElement("div");I.id="vg-ghost",I.className="vg-ghost hidden",I.innerHTML='<div class="vg-ghost-liquid" id="vg-ghost-liquid"></div>',document.body.appendChild(I);let y=null,T=null,N=null,H=!1;for(let Y=0;Y<5;Y++){const me=document.getElementById(`vglass-${Y}`);me&&(me.addEventListener("mousedown",fe=>{K(Y,fe.clientX,fe.clientY),fe.preventDefault()}),me.addEventListener("touchstart",fe=>{K(Y,fe.touches[0].clientX,fe.touches[0].clientY),fe.preventDefault()},{passive:!1}))}window.addEventListener("mousemove",V),window.addEventListener("mouseup",Z),window.addEventListener("touchmove",O,{passive:!1}),window.addEventListener("touchend",te),document.getElementById("btn-reset-pour").onclick=()=>{var me;J(),t=0;for(let fe=0;fe<5;fe++)E[fe]=200,P(fe),(me=document.getElementById(`vglass-${fe}`))==null||me.classList.remove("empty");$r(0),se(),Qe("btn-titrate").disabled=!0;const Y=document.getElementById("beaker-drop-label");Y&&(Y.textContent="Jatuhkan di sini")},r=()=>{J(),window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",Z),window.removeEventListener("touchmove",O),window.removeEventListener("touchend",te);const Y=document.getElementById("vg-ghost");Y&&Y.remove()}}Qe("btn-titrate").onclick=()=>{r&&(r(),r=null),i=_x(t),Yr("sim-step-1","sim-step-2"),jx(t)},Qe("btn-go-aerate").onclick=()=>{Yr("sim-step-2","sim-step-3"),Kx(i)},Qe("aerator-toggle").onchange=function(){s=this.checked;const b=Qe("aerator-status");b.textContent=s?"NYALA":"MATI",b.className=s?"status-on":"status-off",Qe("aerator-machine").classList.toggle("running",s),Jx(s),s?Qe("duration-wrap").classList.remove("locked"):(Qe("duration-wrap").classList.add("locked"),a=null,n.querySelectorAll(".dur-btn").forEach(_=>_.classList.remove("active")),Qe("btn-calc-result").classList.add("hidden"))},n.querySelectorAll(".dur-btn").forEach(b=>{b.onclick=()=>{s&&(n.querySelectorAll(".dur-btn").forEach(_=>_.classList.remove("active")),b.classList.add("active"),a=parseInt(b.dataset.hours),Qe("btn-calc-result").classList.remove("hidden"))}}),Qe("btn-calc-result").onclick=()=>{const b=yx(i,a);Yr("sim-step-3","sim-step-4"),Zx(i,b,t,a),Qe("btn-sim-finish").classList.remove("hidden"),Qe("btn-sim-finish").onclick=()=>{Qe("sim-overlay").remove(),e&&e()}}}const ws={200:{doVal:1.8,tds:22,ph:2.2,sal:13},400:{doVal:2.3,tds:26,ph:2.8,sal:13.8},600:{doVal:3.2,tds:27,ph:3,sal:14},800:{doVal:4,tds:30.1,ph:3.7,sal:15}};function Rd(n){const e=[200,400,600,800];if(n<=200)return{...ws[200]};if(n>=800)return{...ws[800]};let t=200,i=800;for(let o=0;o<e.length-1;o++)if(n>e[o]&&n<=e[o+1]){t=e[o],i=e[o+1];break}const a=(n-t)/(i-t),s=ws[t],r=ws[i];return{doVal:parseFloat((s.doVal+(r.doVal-s.doVal)*a).toFixed(1)),tds:parseFloat((s.tds+(r.tds-s.tds)*a).toFixed(1)),ph:parseFloat((s.ph+(r.ph-s.ph)*a).toFixed(1)),sal:parseFloat((s.sal+(r.sal-s.sal)*a).toFixed(1))}}function jx(n,e){const t=n/1e3*100,i=Qe("meter-bk-vinasse");i&&(i.style.height=t+"%");const a=Qe("meter-vol-label");a&&(a.textContent=n+" mL");const s=Qe("meter-bk-ripple"),r=Rd(n),o=Qe("meter-probe-stick"),l=Qe("meter-beaker");let d=!1,c=null;function h(){c&&(c.remove(),c=null),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",x),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",x)}function f(v){return v.changedTouches?{x:v.changedTouches[0].clientX,y:v.changedTouches[0].clientY}:v.touches?{x:v.touches[0].clientX,y:v.touches[0].clientY}:{x:v.clientX,y:v.clientY}}function p(v){if(!c)return;const{x:b,y:_}=f(v);c.style.left=b-15+"px",c.style.top=_-12+"px";const k=l.getBoundingClientRect();l.classList.toggle("drop-hover",b>=k.left&&b<=k.right&&_>=k.top&&_<=k.bottom)}function g(v){v.preventDefault(),p(v)}function x(v){if(!c)return;const{x:b,y:_}=f(v),k=l.getBoundingClientRect(),M=b>=k.left&&b<=k.right&&_>=k.top&&_<=k.bottom;h(),l.classList.remove("drop-hover"),M&&!d?(d=!0,o.classList.add("probe-dipped"),u()):o.style.opacity="1"}function m(v){if(d)return;v.preventDefault(),o.style.opacity="0.35",c=document.createElement("div"),c.className="meter-probe-ghost",c.innerHTML='<div class="mps-handle">⊕</div><div class="mps-shaft"></div><div class="mps-tip"></div>';const{x:b,y:_}=f(v);c.style.left=b-15+"px",c.style.top=_-12+"px",document.body.appendChild(c),window.addEventListener("mousemove",p),window.addEventListener("mouseup",x),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",x)}function u(){Qe("meter-instruction").textContent="Sensor mendeteksi parameter larutan…",setTimeout(()=>{s&&(s.classList.remove("ripple-active"),s.offsetWidth,s.classList.add("ripple-active"))},300),setTimeout(()=>{Ms("mr-do",r.doVal,1200,1),Ms("mr-tds",r.tds,1200,1),Ms("mr-ph",r.ph,1200,2),Ms("mr-sal",r.sal,1200,1)},500),setTimeout(()=>{Qe("meter-instruction").textContent="✅ Pengukuran selesai — catat hasil parameter!";const v=Qe("meter-result-grid");v.innerHTML=[{icon:"💧",label:"DO",value:r.doVal.toFixed(1)+" ppm",sub:"Dissolved Oxygen",status:r.doVal<2?"danger":r.doVal<4?"warn":"good"},{icon:"📊",label:"TDS",value:r.tds.toFixed(1)+" ppm",sub:"Total Dissolved Solids",status:r.tds>30?"danger":r.tds>25?"warn":"good"},{icon:"⚗️",label:"pH",value:r.ph.toFixed(1),sub:r.ph<4?"Sangat Asam ⚠️":r.ph<6?"Asam":"Mendekati Netral",status:r.ph<4?"danger":r.ph<6?"warn":"good"},{icon:"🧂",label:"Salinometer",value:r.sal.toFixed(1)+" ‰",sub:"Kadar salinitas",status:r.sal>15?"danger":r.sal>13?"warn":"good"}].map(_=>`
        <div class="param-card ${_.status}">
          <span class="param-icon">${_.icon}</span>
          <span class="param-label">${_.label}</span>
          <span class="param-value">${_.value}</span>
          <span class="param-sub">${_.sub}</span>
        </div>
      `).join(""),v.classList.remove("hidden");const b=Qe("meter-note");b.innerHTML=`⚗️ <strong>Interpretasi:</strong> Dengan ${n} mL vinasse,
        DO = <b>${r.doVal.toFixed(1)} ppm</b>, TDS = <b>${r.tds.toFixed(1)} ppm</b>,
        pH = <b>${r.ph.toFixed(1)}</b> (${r.ph<4?"sangat asam":"asam"}),
        Salinometer = <b>${r.sal.toFixed(1)} ‰</b>.`,b.classList.remove("hidden"),Qe("btn-go-aerate").classList.remove("hidden"),setTimeout(()=>Qe("btn-go-aerate").scrollIntoView({behavior:"smooth",block:"nearest"}),100)},1800)}o.addEventListener("mousedown",m),o.addEventListener("touchstart",m,{passive:!1})}function Ms(n,e,t,i){const a=Qe(n);if(!a)return;const s=performance.now(),r=l=>1-(1-l)**2;function o(l){const d=Math.min(1,(l-s)/t);a.textContent=(e*r(d)).toFixed(i),d<1&&requestAnimationFrame(o)}requestAnimationFrame(o)}function $r(n){const t=n/1e3*100,i=100-t,a=Qe("beaker-vinasse"),s=Qe("beaker-water");a.style.height=t+"%",a.style.bottom="0%",s.style.height=i+"%",s.style.bottom=t+"%"}function Kx(n){const e=Qe("aerator-liquid");if(!e)return;const t=Math.min(1,n.cod/45e3),i=Math.round(60+t*60),a=Math.round(20+t*5),s=0;e.style.background=`rgb(${i},${a},${s})`}function Jx(n){const e=Qe("bubble-container");if(e&&(e.innerHTML="",!!n))for(let t=0;t<14;t++){const i=document.createElement("div");i.className="bubble",i.style.left=5+Math.random()*85+"%",i.style.animationDuration=1.2+Math.random()*2+"s",i.style.animationDelay=Math.random()*2+"s",i.style.width=i.style.height=4+Math.random()*8+"px",e.appendChild(i)}}function Zx(n,e,t,i){const a=Qe("results-grid"),s=Qe("compliance-banner"),r=Qe("sim-conclusion"),o=Rd(t);a.innerHTML=`
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
  `}function Yr(n,e){const t=Qe(n),i=Qe(e);t.classList.add("step-exit"),setTimeout(()=>{t.classList.add("hidden"),t.classList.remove("step-exit"),i.classList.remove("hidden"),i.classList.add("step-enter"),setTimeout(()=>i.classList.remove("step-enter"),400)},300)}function Qx(){if(document.getElementById("sim-styles"))return;const n=`
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

    /* ── TDS/DO Meter (two-stick design) ────────────── */
    .meter-layout { display: flex; gap: 14px; align-items: flex-start; flex-wrap: wrap; margin-bottom: 16px; }
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
    .meter-cable-svg { width: 80px; height: 24px; flex-shrink: 0; align-self: center; margin-top: -34px; }
    /* --- Probe area (right) --- */
    .meter-probe-area { flex: 1; min-width: 180px; display: flex; flex-direction: column; gap: 10px; }
    .meter-probe-column { display: flex; flex-direction: column; align-items: center; gap: 0; }
    /* Draggable probe stick */
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
    /* keep titration CSS class names but hide unused elements gracefully */
    .titration-layout, .tit-apparatus, .tit-panel,
    .tit-burette, .tit-flask, .tit-valve-section { display: none; }
  `,e=document.createElement("style");e.id="sim-styles",e.textContent=n,document.head.appendChild(e)}const Ss={context:`
    Limbah vinasse dikenal memiliki warna hitam pekat karena kandungan pigmen melanoidin yang sulit terurai dan senyawa fenolik yang bersifat antimikroba.<br><br>
    Seorang siswa mencoba membuat POC (Pupuk Organik Cair) dari vinasse dengan memasukkan biostarter yang berisi <em>Staphylococcus aureus</em> dan <em>Streptococcus sp.</em>, dengan alasan bahwa kedua bakteri ini dikenal dapat menguraikan jaringan pada infeksi, sehingga dianggap juga mampu menguraikan bahan organik limbah dengan cepat.<br><br>
    Setelah 21 hari, kadar pencemaran (COD) dalam vinasse tidak turun secara signifikan dan warna cairan tetap hitam pekat, menandakan proses penguraian gagal total.
  `,question:"Berdasarkan karakteristik limbah dan fisiologi mikroba, berikan evaluasi kesalahan yang dilakukan siswa tersebut dalam memilih mikroorganisme adalah…",options:[{label:"A",text:"Mikroorganisme yang dipilih adalah bakteri patogen yang membutuhkan inang hidup, sehingga mereka mati karena tidak terdapat jaringan hidup di dalam limbah vinasse.",correct:!1},{label:"B",text:"Siswa tidak menggunakan mikroorganisme spesifik yang memiliki resistensi terhadap senyawa fenolik dan enzim khusus untuk memutus ikatan pigmen melanoidin.",correct:!0},{label:"C",text:"Kedua bakteri tersebut adalah bakteri anaerob obligat yang langsung mati saat terkena oksigen di permukaan limbah cair.",correct:!1}],explanation:"✅ <strong>Benar!</strong> Vinasse mengandung Melanoidin dan Fenol. Senyawa fenolik bersifat bakterisidal bagi mikroba biasa yang tidak memiliki mekanisme pertahanan diri. Pengolahan vinasse membutuhkan mikroba yang mampu bertahan hidup di lingkungan yang mengandung racun fenol dengan kadar COD, BOD, pH yang tinggi."},Ca=[{id:"azolla",name:"Azolla microphylla",image:"Azolla-microphylla.png",price:50,pigment:"Klorofil a+b (hijau)",description:`Paku air (fern) akuatik yang bersimbiosis dengan sianobakteri
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
      bioremediasi vinasse. Skor sedang diberikan.`}],ev={azolla:{dose:"200 g biomassa segar / L vinasse",duration:"7 hari",codRemoval:"96%",bodRemoval:"94%",notes:"Pertahankan cahaya cukup (> 1000 lux) dan suhu 25–30 °C."},nannochloropsis:{dose:"—",duration:"—",codRemoval:"~0%",bodRemoval:"~0%",notes:"⛔ Tidak cocok untuk vinasse air tawar. Alga akan mati dalam 24 jam."},spirulina:{dose:"1 g biomassa kering / L vinasse (+ buffer pH 8)",duration:"14 hari",codRemoval:"55%",bodRemoval:"60%",notes:"Perlu netralisasi pH vinasse ke 7–8 sebelum inokulasi."},chlorella:{dose:"0.5 g biomassa kering / L vinasse",duration:"10 hari",codRemoval:"70%",bodRemoval:"75%",notes:"Pertahankan kondisi anaerob-fakultatif. Berikan CO₂ setiap 2 hari."}};function Mc(n,e){const t=ev[n];if(!t||t.codRemoval==="~0%")return null;const i=t.dose.match(/^([\d.]+)\s*(g\s*biomassa\s*(?:segar|kering))/i),a=i?parseFloat(i[1]):.5,s=i?i[2].trim():"g";return{total:(a*e).toFixed(1),unit:s,duration:t.duration,codRemoval:t.codRemoval,bodRemoval:t.bodRemoval,notes:t.notes}}const ve=n=>document.getElementById(n);function tv(n){rv(),Ga(),nv(()=>{iv(e=>{av(e,()=>{sv(n)})})})}function nv(n){const e=Gs("s3-overlay");e.innerHTML=`
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
  `,document.body.appendChild(e),ve("s3-ctx").innerHTML=Ss.context,ve("s3-q").innerHTML=`<strong>❓ Pertanyaan:</strong><br>${Ss.question}`;const t=ve("s3-opts");let i=!1;Ss.options.forEach(a=>{const s=document.createElement("button");s.className="s3-option",s.innerHTML=`<strong>${a.label}.</strong> ${a.text}`,s.onclick=()=>{if(!i)if(a.correct){i=!0,s.classList.add("correct"),t.querySelectorAll(".s3-option").forEach(l=>l.disabled=!0);const r=ee.wrongAnswers??0,o=r===0?100:r<=2?50:25;ee.totalPoints+=o,ee.levelAttempts++,jt(),Sc("s3-fb",!0,Ss.explanation+`<br><br>🎉 +${o} poin tambahan!`),ve("s3-next-challenge").classList.remove("hidden")}else s.classList.add("wrong"),s.disabled=!0,ee.wrongAnswers=(ee.wrongAnswers??0)+1,jt(),Sc("s3-fb",!1,"❌ Kurang tepat. Coba pilihan lain!")},t.appendChild(s)}),ve("s3-next-challenge").onclick=()=>{Ga(),n()}}function iv(n){const e=Gs("s3-overlay");e.innerHTML=`
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
  `,document.body.appendChild(e);let t=null;function i(){const a=ve("s3-shop-grid");a.innerHTML="",Ca.forEach(s=>{const r=document.createElement("div");r.className="s3-micro-card",t&&s.id===t&&r.classList.add("chosen");const o=ee.totalPoints>=s.price;r.innerHTML=`
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
      `,a.appendChild(r)})}i(),ve("s3-shop-pts").textContent=ee.totalPoints+" poin",ve("s3-shop-grid").addEventListener("click",a=>{const s=a.target.closest(".s3-buy-btn");if(!s||s.disabled||t)return;const r=Ca.find(l=>l.id===s.dataset.id);if(!r)return;ee.totalPoints-=r.price,jt(),ve("s3-shop-pts").textContent=ee.totalPoints+" poin";const o=ve("s3-shop-result");o.classList.remove("hidden"),r.outcome==="punishment"?(o.className="s3-shop-result punishment",o.innerHTML=r.punishmentText+"<br><br>💡 <b>Coba lagi</b> — pilih mikroorganisme yang lebih tepat!",i(),ve("s3-shop-pts").textContent=ee.totalPoints+" poin",Ca.filter(d=>d.outcome!=="punishment").some(d=>ee.totalPoints>=d.price)||(o.innerHTML+="<br><br>⛔ <b>Poin kamu tidak cukup</b> untuk membeli mikroorganisme yang tepat.",ve("s3-btn-restart").classList.remove("hidden"))):(t=r.id,o.className="s3-shop-result "+(r.outcome==="reward_high"?"reward-high":"reward-mid"),o.innerHTML=r.rewardText,i(),setTimeout(()=>ve("s3-btn-to-lab").classList.remove("hidden"),800))}),ve("s3-btn-to-lab").onclick=()=>{Ga(),n(t)},ve("s3-btn-restart").onclick=()=>{window.location.reload()}}function av(n,e){const t=Ca.find(_=>_.id===n)||Ca[0],i=Gs("s3-overlay");i.innerHTML=`
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
      </div>

      <!-- Result cards (hidden until pour complete) -->
      <div class="s3-lab-result hidden" id="s3-lab-result">
        <div class="s3-calc-grid" id="s3-calc-grid"></div>
        <div class="s3-lab-notes" id="s3-lab-notes"></div>
      </div>

      <button class="s3-btn hidden" id="s3-btn-to-valve">🚰 Aktifkan Kran Vinasse →</button>
    </div>
  `,document.body.appendChild(i);let a=null,s=0,r=!1,o=null,l=0,d=[],c=null,h=null,f=null,p=!1,g=null;const x=6,u={azolla:"#4ecb47",nannochloropsis:"#c8b820",spirulina:"#2ab8d8",chlorella:"#38d878"}[t.id]||"#80e880";i.querySelectorAll(".s3-vol-btn").forEach(_=>{_.onclick=()=>{i.querySelectorAll(".s3-vol-btn").forEach(V=>V.classList.remove("active")),_.classList.add("active"),a=parseInt(_.dataset.vol);const k=Mc(n,a);g&&(g(),g=null),s=0,r=!1,ve("s3-lab-result").classList.add("hidden"),ve("s3-btn-to-valve").classList.add("hidden"),ve("s3-spk-micro-layer").style.transition="none",ve("s3-spk-micro-layer").style.height="0%",ve("s3-pour-counter").classList.add("hidden"),ve("s3-pour-progress-wrap").classList.add("hidden"),ve("s3-pour-feedback").classList.add("hidden"),ve("s3-btn-confirm-pour").classList.add("hidden"),ve("s3-pour-hint").classList.remove("hidden"),ve("s3-poured-amt").textContent="0.0",ve("s3-pour-bar-fill").style.width="0%",k?(ve("s3-target-amt").textContent=k.total,ve("s3-target-unit").textContent=k.unit,ve("s3-poured-unit").textContent=k.unit,ve("s3-spk-target-line").style.display=""):ve("s3-spk-target-line").style.display="none",ve("s3-spk-dose-label").innerHTML=k?`Dosis yang dibutuhkan: <b>${k.total} ${k.unit}</b> untuk ${a} L vinasse`:`⛔ ${t.name} tidak cocok untuk vinasse ini`,o=k;const M=k?parseFloat(k.total):0;l=M*.25,d=Array(x).fill(l),c=null;const E=ve("s3-glass-row");if(E.innerHTML="",k)for(let V=0;V<x;V++){const Z=document.createElement("div");Z.className="s3-micro-glass",Z.id=`s3-mg-${V}`,Z.dataset.idx=String(V),Z.innerHTML=`<div class="s3-mg-liquid" id="s3-mg-liq-${V}" style="background:${u};height:85%"></div><div class="s3-mg-label">¼</div>`,E.appendChild(Z)}const I=document.getElementById("s3-mg-ghost");I&&I.remove();const y=document.createElement("div");y.id="s3-mg-ghost",y.className="s3-mg-ghost hidden",y.innerHTML=`<div class="s3-mg-ghost-liquid" id="s3-mg-ghost-liquid" style="background:${u}"></div>`,document.body.appendChild(y);function T(V){const Z=document.getElementById(`s3-mg-liq-${V}`),O=document.getElementById(`s3-mg-${V}`);!Z||!O||(Z.style.height=l>0?d[V]/l*100+"%":"0%",d[V]<=0&&(O.classList.add("empty"),O.classList.remove("dragging")))}function N(){const V=document.getElementById("s3-tank-drops");if(!V)return;const Z=document.createElement("div");Z.className="s3-mg-drop",Z.style.background=u,Z.style.setProperty("--spread",(Math.random()-.5)*10+"px"),Z.style.setProperty("--dur",.26+Math.random()*.26+"s"),V.appendChild(Z),setTimeout(()=>Z.remove(),600)}function H(){if(h||c===null||!o)return;const V=M*1.5;h=setInterval(()=>{if(c===null||d[c]<=0||s>=V){se();return}const Z=Math.max(M*.01,.001),O=Math.min(Z,d[c],V-s);d[c]-=O,s=Math.min(s+O,V),T(c),ve("s3-poured-amt").textContent=s.toFixed(1);const te=document.getElementById("s3-mg-ghost-liquid");te&&(te.style.height=l>0?d[c]/l*100+"%":"0%");const Y=Math.min(s/V,1)*30;ve("s3-spk-micro-layer").style.transition="none",ve("s3-spk-micro-layer").style.height=Y+"%",ve("s3-spk-micro-layer").style.background=u;const me=Math.min(s/V,1)*100;ve("s3-pour-bar-fill").style.width=me+"%";const fe=M>0?s/M:0;ve("s3-pour-bar-fill").style.background=fe<.7?"#20a0d0":fe<.8?"#60d060":fe<=1.2?"#00e870":fe<=1.5?"#e8a020":"#e04020"},80),f=setInterval(N,55)}function se(){clearInterval(h),clearInterval(f),h=f=null}function P(V,Z){y.style.left=V-18+"px",y.style.top=Z-60+"px";const O=document.getElementById("s3-tank-drop-zone");if(!O)return;const te=O.getBoundingClientRect(),Y=V>=te.left&&V<=te.right&&Z>=te.top&&Z<=te.bottom;Y!==p&&(p=Y,O.classList.toggle("active",Y),y.classList.toggle("tilting",Y),Y?H():se())}function F(V,Z,O){var Y;if(d[V]<=0)return;c=V,p=!1,(Y=document.getElementById(`s3-mg-${V}`))==null||Y.classList.add("dragging"),y.classList.remove("hidden");const te=document.getElementById("s3-mg-ghost-liquid");te&&(te.style.height=l>0?d[V]/l*100+"%":"85%"),r||(r=!0,ve("s3-pour-hint").classList.add("hidden"),ve("s3-pour-counter").classList.remove("hidden"),ve("s3-pour-progress-wrap").classList.remove("hidden"),ve("s3-btn-confirm-pour").classList.remove("hidden")),P(Z,O)}function X(){var Z,O;if(c===null)return;se(),T(c),(Z=document.getElementById(`s3-mg-${c}`))==null||Z.classList.remove("dragging"),c=null,p=!1,y.classList.add("hidden"),y.classList.remove("tilting"),(O=document.getElementById("s3-tank-drop-zone"))==null||O.classList.remove("active");const V=document.getElementById("s3-tank-drop-lbl");V&&(V.textContent=s>0&&o?`✓ ${s.toFixed(1)} ${o.unit} dituang`:"Jatuhkan di sini")}for(let V=0;V<x;V++){const Z=document.getElementById(`s3-mg-${V}`);Z&&(Z.addEventListener("mousedown",O=>{F(V,O.clientX,O.clientY),O.preventDefault()}),Z.addEventListener("touchstart",O=>{F(V,O.touches[0].clientX,O.touches[0].clientY),O.preventDefault()},{passive:!1}))}function ne(V){c!==null&&P(V.clientX,V.clientY)}function $(){X()}function K(V){c!==null&&(P(V.touches[0].clientX,V.touches[0].clientY),V.preventDefault())}function J(){X()}window.addEventListener("mousemove",ne),window.addEventListener("mouseup",$),window.addEventListener("touchmove",K,{passive:!1}),window.addEventListener("touchend",J),g=()=>{X(),window.removeEventListener("mousemove",ne),window.removeEventListener("mouseup",$),window.removeEventListener("touchmove",K),window.removeEventListener("touchend",J);const V=document.getElementById("s3-mg-ghost");V&&V.remove()},ve("s3-sprinkler-scene").classList.remove("hidden"),ve("s3-sprinkler-scene").scrollIntoView({behavior:"smooth",block:"nearest"})}});function v(_){const k=ve("s3-calc-grid"),M=ve("s3-lab-notes");_?(k.innerHTML=[{icon:"⚗️",label:"Volume Vinasse",value:`${a} L`},{icon:"🧫",label:"Dosis Mikro",value:`${_.total} ${_.unit}`},{icon:"⏱️",label:"Durasi Perlakuan",value:_.duration}].map(E=>`
        <div class="s3-calc-card">
          <span class="s3-calc-icon">${E.icon}</span>
          <span class="s3-calc-label">${E.label}</span>
          <span class="s3-calc-value">${E.value}</span>
        </div>`).join(""),M.innerHTML=`📝 <b>Catatan:</b> ${_.notes}`):(k.innerHTML=`
        <div class="s3-calc-card fail">
          <span class="s3-calc-icon">⛔</span>
          <span class="s3-calc-label">Tidak dapat digunakan</span>
          <span class="s3-calc-value">${t.name} tidak cocok untuk vinasse ini</span>
        </div>`,M.innerHTML="⚠️ Pilihan mikroorganisme tidak valid untuk kondisi vinasse ini."),ve("s3-lab-result").classList.remove("hidden"),ve("s3-btn-to-valve").classList.remove("hidden"),ve("s3-lab-result").scrollIntoView({behavior:"smooth",block:"nearest"})}function b(){setTimeout(()=>{if(s=0,r=!1,l>0)for(let k=0;k<x;k++){d[k]=l;const M=document.getElementById(`s3-mg-liq-${k}`),E=document.getElementById(`s3-mg-${k}`);M&&(M.style.height="85%"),E&&E.classList.remove("empty","dragging")}ve("s3-spk-micro-layer").style.transition="none",ve("s3-spk-micro-layer").style.height="0%",ve("s3-poured-amt").textContent="0.0",ve("s3-pour-bar-fill").style.width="0%",ve("s3-pour-counter").classList.add("hidden"),ve("s3-pour-progress-wrap").classList.add("hidden"),ve("s3-btn-confirm-pour").classList.add("hidden"),ve("s3-pour-hint").classList.remove("hidden"),ve("s3-pour-feedback").classList.add("hidden");const _=document.getElementById("s3-tank-drop-lbl");_&&(_.textContent="Jatuhkan di sini")},2500)}ve("s3-btn-confirm-pour").onclick=()=>{const _=Mc(n,a),k=ve("s3-pour-feedback");if(k.classList.remove("hidden"),ve("s3-btn-confirm-pour").classList.add("hidden"),!_){k.className="s3-pour-feedback punishment",k.innerHTML="⚠️ Mikroorganisme ini tidak cocok — hasilnya tidak optimal.",setTimeout(()=>v(null),1200);return}const M=parseFloat(_.total),E=s/M;E<.8?(k.className="s3-pour-feedback wrong",k.innerHTML=`⚠️ <b>Kurang!</b> Kamu menuangkan <b>${s.toFixed(1)} ${_.unit}</b>,
        padahal target <b>${_.total} ${_.unit}</b>. Seret lebih banyak gelas!`,b()):E>1.2?(k.className="s3-pour-feedback wrong",k.innerHTML=`⚠️ <b>Terlalu banyak!</b> Kamu menuangkan <b>${s.toFixed(1)} ${_.unit}</b>,
        target hanya <b>${_.total} ${_.unit}</b>. Coba lagi!`,b()):(k.className="s3-pour-feedback correct",k.innerHTML=`✅ <b>Tepat!</b> <b>${s.toFixed(1)} ${_.unit}</b> — sesuai dosis bioremediasi!`,ve("s3-spk-micro-layer").style.transition="height 1.2s ease",ve("s3-spk-micro-layer").style.height="30%",setTimeout(()=>v(_),1500))},ve("s3-btn-to-valve").onclick=()=>{g&&(g(),g=null),Ga(),e()}}function sv(n){const e=Gs("s3-overlay");e.innerHTML=`
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
  `,document.body.appendChild(e);let t=!1;ve("s3-btn-open-valve").onclick=()=>{if(t)return;t=!0;const i=ve("s3-valve-wheel");i.style.animation="valveSpin 0.8s ease forwards";const a=ve("s3-flow");a.innerHTML="";for(let s=0;s<8;s++){const r=document.createElement("div");r.className="s3-drop",r.style.animationDelay=s*.12+"s",r.style.left=30+Math.random()*30+"%",a.appendChild(r)}a.classList.add("flowing"),setTimeout(()=>{ve("s3-tank-liquid").style.height="75%"},600),ve("s3-btn-open-valve").disabled=!0,ve("s3-btn-open-valve").textContent="✅ Kran Terbuka",ve("s3-valve-instr").textContent="Vinasse mengalir ke reaktor bioremediasi…",setTimeout(()=>{ve("s3-level-complete").classList.remove("hidden"),ve("s3-final-pts").textContent=ee.totalPoints+" poin"},1800)},ve("s3-btn-finish").onclick=()=>{Ga(),n&&n()}}function Gs(n){const e=document.createElement("div");return e.id=n,e.className="s3-overlay",e}function Ga(){const n=ve("s3-overlay");n&&n.remove()}function Sc(n,e,t){const i=ve(n);i&&(i.className="s3-feedback "+(e?"correct":"wrong"),i.innerHTML=t,i.classList.remove("hidden"))}function rv(){if(ve("s3-styles"))return;const n=`
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
  `,e=document.createElement("style");e.id="s3-styles",e.textContent=n,document.head.appendChild(e)}const ov=[{id:"aerator_1",category:"alat",name:"Aerator (1 unit)",emoji:"💨",desc:"Pompa udara kecil untuk mensuplai O₂ ke dalam cairan. 1 unit = aerasi lemah.",effect:{aerationLevel:1},required:!0},{id:"aerator_2",category:"alat",name:"Aerator (2 unit)",emoji:"💨💨",desc:"Dua pompa udara — aerasi sedang, O₂ terdistribusi lebih merata.",effect:{aerationLevel:2},required:!1},{id:"aerator_3",category:"alat",name:"Aerator (3 unit)",emoji:"💨💨💨",desc:"Tiga pompa udara — aerasi maksimal, O₂ penuh, pH lebih cepat turun.",effect:{aerationLevel:3},required:!1},{id:"aquarium",category:"alat",name:"Aquarium / Bak Kolam",emoji:"🪣",desc:"Wadah penampung cairan vinasse. Diletakkan dalam kondisi tertutup rapat saat percobaan berjalan.",effect:{hasContainer:!0},required:!0},{id:"selang",category:"alat",name:"Pipa / Selang",emoji:"🔩",desc:"Menghubungkan aerator ke dalam cairan. Diperlukan agar gelembung udara sampai ke dasar.",effect:{hasHose:!0},required:!0},{id:"listrik",category:"alat",name:"Aliran Listrik",emoji:"⚡",desc:"Sumber daya untuk aerator dan lampu. Wajib jika menggunakan peralatan listrik.",effect:{hasPower:!0},required:!0},{id:"penyaring",category:"alat",name:"Penyaring",emoji:"🕸️",desc:"Filter mekanik untuk menyaring biomassa Azolla atau partikel kasar setelah perlakuan.",effect:{hasFilter:!0},required:!1},{id:"lampu",category:"alat",name:"Lampu (Grow-light)",emoji:"💡",desc:"Pencahayaan tambahan > 1000 lux untuk mendukung fotosintesis Azolla. Sangat dianjurkan.",effect:{hasLight:!0},required:!1}],lv=[{id:"vinasse",category:"bahan",name:"Limbah Vinasse",emoji:"🪣",desc:"Bahan utama — limbah cair dari distilasi etanol. COD awal ±80.000 mg/L, pH 3–4.",required:!0},{id:"azolla_bio",category:"bahan",name:"Azolla microphylla (biomassa)",emoji:"🌿",desc:"Agen bioremediasi utama. Dosis: 200 g biomassa segar per 1 L vinasse.",required:!0},{id:"air_pengencer",category:"bahan",name:"Air Pengencer",emoji:"💧",desc:"Untuk mengencerkan vinasse ke konsentrasi yang optimal bagi pertumbuhan Azolla.",required:!1},{id:"buffer_ph",category:"bahan",name:"Buffer pH (NaHCO₃)",emoji:"🧪",desc:"Meningkatkan pH vinasse ke 5–7 agar Azolla dapat hidup pada fase awal inokulasi.",required:!1}],cv=[{step:1,icon:"🪣",title:"Siapkan Wadah",desc:"Masukkan air limbah vinasse ke dalam aquarium/bak/kolam yang sudah disiapkan.",requires:["aquarium","vinasse"]},{step:2,icon:"🧫",title:"Ukur Parameter Awal",desc:"Ukur kadar COD, BOD dengan titrasi; pH menggunakan kertas lakmus atau pH meter.",requires:[]},{step:3,icon:"🌿",title:"Tambahkan Mikroorganisme",desc:"Tambahkan Azolla microphylla dengan 3 variasi konsentrasi (10%, 50%, 100% dosis referensi). Jika cair: pengenceran; jika padat: tambahkan bibit terlebih dahulu.",requires:["azolla_bio"]},{step:4,icon:"💨",title:"Nyalakan Aerator",desc:"Nyalakan aerator yang telah terhubung selang. Sesuaikan kecepatan aerasi sesuai jumlah aerator yang dipilih.",requires:["aerator_1","selang","listrik"]},{step:5,icon:"💡",title:"Tambahkan Pencahayaan",desc:"Pasang grow-light karena Azolla membutuhkan cahaya untuk fotosintesis. Target: > 1000 lux.",requires:["lampu"]},{step:6,icon:"🔒",title:"Tutup & Jalankan",desc:"Tutup aquarium dan biarkan aerator terus menyala tanpa terputus selama 7 hari (durasi berdasarkan literatur).",requires:["aquarium"]},{step:7,icon:"🔬",title:"Amati Perubahan",desc:"Catat perubahan warna, bau, dan kondisi Azolla setiap hari. Warna vinasse berubah dari hitam → coklat muda menandakan penurunan melanoidin.",requires:[]},{step:8,icon:"📊",title:"Ukur Parameter Akhir",desc:"Ukur COD, BOD, dan pH akhir. Bandingkan dengan nilai awal untuk menghitung persentase penurunan.",requires:[]},{step:9,icon:"📝",title:"Tulis Laporan",desc:"Susun laporan penelitian: latar belakang, metode, hasil (tabel COD/BOD awal-akhir), pembahasan, dan kesimpulan.",requires:[]}];function dv(n,e){const t=new Set(n),i=t.has("aquarium"),a=t.has("aerator_1")||t.has("aerator_2")||t.has("aerator_3"),s=t.has("aerator_3")?3:t.has("aerator_2")?2:t.has("aerator_1")?1:0,r=t.has("selang"),o=t.has("listrik"),l=t.has("lampu"),d=t.has("penyaring"),c=t.has("azolla_bio"),h=t.has("vinasse"),f=t.has("buffer_ph"),p=[];if(i||p.push("Aquarium/Bak (wadah wajib)"),a||p.push("Aerator (aerasi wajib untuk O₂)"),r||p.push("Pipa/Selang (penghubung aerator)"),o||p.push("Aliran Listrik (sumber daya aerator)"),c||p.push("Azolla microphylla (agen bioremediasi)"),h||p.push("Limbah Vinasse (bahan utama)"),p.length>0)return{success:!1,codReduction:0,bodReduction:0,grade:"Gagal",gradeColor:"#ff4444",missing:p,feedback:`❌ Rancangan tidak lengkap! Item yang kurang: ${p.join(", ")}.`};let g=60,x=58;s>=2&&(g+=12,x+=10),s>=3&&(g+=8,x+=6),l&&(g+=16,x+=14),f&&(g+=8,x+=8),d&&(g+=4),g=Math.min(g,96),x=Math.min(x,94);let m,u;g>=85?(m="Sangat Baik ⭐⭐⭐",u="#40ff80"):g>=70?(m="Baik ⭐⭐",u="#a0c840"):(m="Cukup ⭐",u="#e0a020");const v=e&&e.concentrations||[10,50,100],b=e&&e.duration||7,_=Math.min(1,.6+b/25),k=v.map(M=>{const E=Math.min(1,.4+M/100*.6)*_,I=Math.round(g*E),y=Math.round(x*E);let T;return M<=15?T="Dosis sangat rendah; penurunan terbatas":M<=40?T="Dosis rendah; penurunan sedang":M<=80?T="Dosis moderat; efisiensi cukup baik":M<=110?T="Dosis optimal; performa terbaik":T="Dosis lebih; tidak banyak tambahan manfaat",{conc:M,cod:I,bod:y,note:T}});return{success:!0,aerationLvl:s,hasLight:l,hasFilter:d,hasBuffer:f,codReduction:g,bodReduction:x,grade:m,gradeColor:u,missing:[],feedback:`✅ Reaktor berhasil dirancang! Perkiraan penurunan COD rata-rata: <b>${g}%</b>, BOD: <b>${x}%</b>.`,perConcentration:k}}const tt=n=>document.getElementById(n);function Pd(n){mv(),oa(),uv(e=>{hv(e,t=>{const i=dv(e,t);ee.stage4.selectedItems=e,ee.stage4.reactorResult=i,ee.stage4.concentrationCfg=t,pv(i,()=>{fv(i,n)})})})}function uv(n){const e=[...ov,...lv],t=Ws();t.innerHTML=`
    <div class="s4-card s4-builder-card">
      <div class="s4-header">
        <span class="s4-badge">🛠️ BUILDER REAKTOR</span>
        <h2 class="s4-title">Pilih Alat & Bahan untuk Reaktor Vinassemu</h2>
        <p class="s4-subtitle">Centang semua komponen yang ingin kamu masukkan ke dalam rancangan reaktor.
          Item wajib ditandai <span class="s4-required-tag">WAJIB</span>.</p>
      </div>
      ${Vs(1)}

      <div class="s4-builder-grid" id="s4-builder-grid"></div>

      <div class="s4-selection-summary" id="s4-sel-summary">
        <span id="s4-sel-count">0 item dipilih</span>
        <span id="s4-sel-aerator" class="s4-aer-badge hidden">💨 Aerasi: —</span>
      </div>

      <button class="s4-btn" id="s4-btn-build">⚗️ Lihat Prosedur & Bangun Reaktor →</button>
    </div>
  `,document.body.appendChild(t);const i=new Set(e.filter(r=>r.required).map(r=>r.id));function a(){const r=tt("s4-builder-grid");r.innerHTML="";for(const o of["alat","bahan"]){const l=document.createElement("div");l.className="s4-cat-label",l.textContent=o==="alat"?"🔩 ALAT":"🧪 BAHAN",r.appendChild(l),e.filter(c=>c.category===o).forEach(c=>{const h=i.has(c.id),f=document.createElement("div");f.className=`s4-item-card${h?" selected":""}`,f.dataset.id=c.id;const p=c.id.startsWith("aerator_");f.innerHTML=`
          <div class="s4-item-check">${h?"☑":"☐"}</div>
          <div class="s4-item-emoji">${c.emoji}</div>
          <div class="s4-item-name">${c.name}
            ${c.required?'<span class="s4-required-tag">WAJIB</span>':""}
          </div>
          <div class="s4-item-desc">${c.desc}</div>
        `,f.onclick=()=>{c.required||(p&&["aerator_1","aerator_2","aerator_3"].forEach(g=>i.delete(g)),i.has(c.id)?i.delete(c.id):i.add(c.id),s(),a())},r.appendChild(f)})}}function s(){tt("s4-sel-count").textContent=`${i.size} item dipilih`;const r=i.has("aerator_3")?3:i.has("aerator_2")?2:i.has("aerator_1")?1:0,o=tt("s4-sel-aerator");r>0?(o.textContent=`💨 Aerasi: ${r} unit`,o.classList.remove("hidden")):o.classList.add("hidden")}a(),s(),tt("s4-btn-build").onclick=()=>{oa(),n([...i])}}function hv(n,e){const t=Ws();t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">🧪 PERLAKUAN & ULANGAN</span>
        <h2 class="s4-title">Rancangan Percobaan: Konsentrasi, Ulangan & Dosis</h2>
        <p class="s4-subtitle">Tentukan variasi konsentrasi Azolla, jumlah ulangan, dan lama perlakuan sesuai rancangan penelitianmu.</p>
      </div>
      ${Vs(2)}

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
  `,document.body.appendChild(t);const i=[10,50,100],a=[...i],s=tt("s4-conc-sliders");function r(){tt("s4-conc-preview").innerHTML=a.map((p,g)=>{const x=(200*p/100).toFixed(1);return`<div class="s4-conc-pill">
        <span class="s4-conc-pill-label">T${g+1}</span>
        <b>${p}%</b> <span class="s4-conc-pill-sub">(${x} g/L)</span>
      </div>`}).join("")}for(let p=0;p<3;p++){const g=document.createElement("div");g.className="s4-slider-row",g.innerHTML=`
      <span class="s4-slider-tier">T${p+1}</span>
      <input type="range" class="s4-slider" min="5" max="200" step="5"
             value="${i[p]}" id="s4-slider-${p}">
      <span class="s4-slider-val" id="s4-slval-${p}">${i[p]}%</span>
    `,s.appendChild(g),document.getElementById(`s4-slider-${p}`).addEventListener("input",x=>{a[p]=parseInt(x.target.value),tt(`s4-slval-${p}`).textContent=a[p]+"%",r()})}r();let o=3;const l={1:"⚠️ 1 ulangan tidak memenuhi syarat validitas statistik.",2:"⚠️ 2 ulangan cukup minimal.",3:"✅ 3 ulangan — standar minimum penelitian ilmiah.",4:"✅ 4 ulangan — lebih baik, data makin valid.",5:"✅ 5 ulangan — sangat baik untuk replikasi!"};function d(){tt("s4-rep-feedback").innerHTML=l[o]||"",tt("s4-rep-feedback").className="s4-rep-feedback "+(o>=3?"good":"warn")}tt("s4-rep-btns").querySelectorAll(".s4-rep-btn").forEach(p=>{p.onclick=()=>{tt("s4-rep-btns").querySelectorAll(".s4-rep-btn").forEach(g=>g.classList.remove("active")),p.classList.add("active"),o=parseInt(p.dataset.rep),d()}}),d();let c=7;const h={3:"⚠️ 3 hari terlalu singkat untuk degradasi Azolla yang signifikan.",5:"🟡 5 hari: penurunan mulai terlihat tetapi belum optimal.",7:"✅ 7 hari: sesuai rekomendasi literatur (Rizky et al., 2017).",10:"✅ 10 hari: lebih optimal, terutama jika aerasi sedang.",14:"✅ 14 hari: maksimal untuk hasil terbaik pada dosis rendah."};function f(){tt("s4-dur-feedback").innerHTML=h[c]||"",tt("s4-dur-feedback").className="s4-dur-feedback "+(c>=7?"good":c>=5?"warn":"bad")}tt("s4-dur-btns").querySelectorAll(".s4-dur-btn").forEach(p=>{p.onclick=()=>{tt("s4-dur-btns").querySelectorAll(".s4-dur-btn").forEach(g=>g.classList.remove("active")),p.classList.add("active"),c=parseInt(p.dataset.day),f()}}),f(),tt("s4-btn-cfg-done").onclick=()=>{oa(),e({concentrations:[...a],repetitions:o,duration:c})}}function pv(n,e){var s;const t=Ws();t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">📋 PROSEDUR PRAKTIKUM</span>
        <h2 class="s4-title">Langkah-langkah Percobaan Reaktor Vinasse</h2>
        <p class="s4-subtitle">Baca setiap langkah percobaan, lalu klik <b>Selesai Baca</b> untuk melanjutkan.</p>
      </div>
      ${Vs(3)}
      <div class="s4-procedure-list" id="s4-proc-list"></div>
      <div class="s4-cfg-summary" id="s4-cfg-summary"></div>
      <button class="s4-btn" id="s4-btn-proc-done">✅ Selesai Baca — Lihat Hasil Reaktor →</button>
    </div>
  `,document.body.appendChild(t);const i=(s=ee.stage4)==null?void 0:s.concentrationCfg;i&&(tt("s4-cfg-summary").innerHTML=`
      <div class="s4-info-box">
        Rancangan kamu: Konsentrasi <b>${i.concentrations.join("%, ")}%</b>
        · Ulangan <b>${i.repetitions}×</b> · Durasi <b>${i.duration} hari</b>
      </div>`);const a=tt("s4-proc-list");cv.forEach(r=>{const o=document.createElement("div");o.className="s4-proc-step",o.innerHTML=`
      <div class="s4-proc-icon">${r.icon}</div>
      <div class="s4-proc-body">
        <div class="s4-proc-title">Langkah ${r.step}: ${r.title}</div>
        <div class="s4-proc-desc">${r.desc}</div>
      </div>
    `,a.appendChild(o)}),tt("s4-btn-proc-done").onclick=()=>{oa(),e()}}function fv(n,e){var s;const t=Ws(),i=((s=ee.stage4)==null?void 0:s.concentrationCfg)||{repetitions:3,duration:7};if(t.innerHTML=`
    <div class="s4-card">
      <div class="s4-header">
        <span class="s4-badge">⚗️ HASIL RANCANGAN REAKTOR</span>
        <h2 class="s4-title">Simulasi Performa Reaktor Vinassemu</h2>
      </div>
      ${Vs(4)}

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
            <div class="s4-final-score">Total Poin: <span>${ee.totalPoints}</span></div>
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
  `,document.body.appendChild(t),!n.success){tt("s4-btn-finish").onclick=()=>{oa(),Pd(e)};return}let a=!1;tt("s4-run-sim").onclick=()=>{if(a)return;a=!0,tt("s4-run-sim").disabled=!0,tt("s4-run-sim").textContent="⏳ Simulasi berjalan…";const r=tt("s4-rd-liquid"),o=tt("s4-rd-azolla");tt("s4-rd-bubbles").classList.add("active"),r.classList.add("treating"),o.classList.add("growing"),setTimeout(()=>{tt("s4-run-sim").textContent="✅ Simulasi Selesai",tt("s4-sim-results").classList.remove("hidden");const d=tt("s4-conc-tbody");d.innerHTML="",n.perConcentration.forEach((c,h)=>{const f=document.createElement("tr");f.innerHTML=`
          <td>T${h+1}</td>
          <td>${c.conc}%</td>
          <td>${(200*c.conc/100).toFixed(1)} g/L</td>
          <td style="color:${n.gradeColor}">${c.cod}%</td>
          <td style="color:${n.gradeColor}">${c.bod}%</td>
          <td style="font-size:11px;color:#6090a0">${c.note}</td>
        `,d.appendChild(f)}),setTimeout(()=>{tt("s4-bar-cod").style.width=Math.min(100,n.codReduction)+"%",tt("s4-val-cod").textContent=n.codReduction+"%",tt("s4-bar-bod").style.width=Math.min(100,n.bodReduction)+"%",tt("s4-val-bod").textContent=n.bodReduction+"%"},100),setTimeout(()=>{const c=document.createElement("button");c.className="s4-btn",c.style.marginTop="8px",c.textContent="➡️ Lanjut ke Level 5 – Evaluasi",c.onclick=()=>{oa(),e&&e()},tt("s4-sim-results").appendChild(c),c.scrollIntoView({behavior:"smooth",block:"nearest"})},900)},2200)}}function Vs(n){return`<div class="s4-step-indicator">
    ${[{n:1,label:"Builder"},{n:2,label:"Konsentrasi"},{n:3,label:"Prosedur"},{n:4,label:"Hasil"}].map((t,i)=>`
      ${i>0?'<span class="s4-step-arrow">→</span>':""}
      <span class="s4-step ${t.n<n?"done":t.n===n?"active":""}">
        ${t.n<n?"✔ ":""}${t.n}. ${t.label}
      </span>
    `).join("")}
  </div>`}function Ws(){const n=document.createElement("div");return n.id="s4-overlay",n.className="s4-overlay",n}function oa(){const n=tt("s4-overlay");n&&n.remove()}function mv(){if(tt("s4-styles"))return;const n=document.createElement("style");n.id="s4-styles",n.textContent=`
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
  `,document.head.appendChild(n)}const gv=[{id:"no_light",title:"Kegagalan: Azolla Tidak Dapat Berfotosintesis",emoji:"🌑",condition:n=>!n.hasLight,symptom:"Warna vinasse tetap hitam pekat setelah 7 hari. Azolla menguning dan mati pada hari ke-3.",cause:"Aquarium tidak mendapat pencahayaan yang cukup (< 200 lux). Azolla tidak dapat melakukan fotosintesis sehingga tidak menghasilkan O₂.",theory:"Azolla microphylla adalah fototrofi obligat — ia wajib mendapat cahaya (> 1000 lux) untuk mengaktifkan fotosistem II dan menghasilkan ATP yang diperlukan untuk pertumbuhan dan produksi eksudat enzimatis pengurai melanoidin.",fix:"Pasang grow-light 1000–3000 lux, atau letakkan reaktor di bawah sinar matahari langsung.",scoreImpact:-15},{id:"low_aeration",title:"Kegagalan: Aerasi Kurang — O₂ Tidak Mencukupi",emoji:"💧",condition:n=>n.aerationLvl<2,symptom:"pH turun sangat lambat. Bau asam tetap tajam pada hari ke-5. COD hanya turun ~40%.",cause:"Hanya 1 aerator yang digunakan. Distribusi O₂ tidak merata — zona anoksik terbentuk di sudut reaktor dan menghambat aktivitas Azolla.",theory:"Proses aerob dalam bioremediasi sangat bergantung pada suplai O₂ terlarut (DO). Nilai DO optimal adalah > 4 mg/L. Dengan 1 aerator kecil, zona pusat reaktor mungkin cukup, tetapi sudut-sudut reaktor akan mengalami anoksia yang menghambat degradasi polutan.",fix:"Tambahkan minimal 2 aerator dan atur posisi selang agar gelembung udara mencapai seluruh volume cairan.",scoreImpact:-10},{id:"no_buffer",title:"Peringatan: pH Terlalu Asam di Awal",emoji:"⚗️",condition:n=>!n.hasBuffer,symptom:n=>`Azolla tumbuh lambat ${n&&n.duration<=5?"di hari-hari pertama percobaan":"pada minggu pertama"}. Beberapa tanaman mengalami klorosis (daun kuning) karena stres pH asam.`,cause:"Vinasse murni memiliki pH 3–4. Azolla bekerja optimal pada pH 5–7. Tanpa buffer pH, fase adaptasi berlangsung lama.",theory:"Enzim nitrogenase pada simbiont Anabaena azollae sangat sensitif terhadap pH rendah. Pada pH < 4.5, aktivitas nitrogenase menurun drastis sehingga fiksasi N₂ dan produksi eksudat berhenti. Penambahan NaHCO₃ (buffer) membantu menstabilkan pH ke 5.5–6.5 pada fase awal.",fix:"Tambahkan NaHCO₃ atau air kapur secukupnya hingga pH vinasse mencapai 5.5–6 sebelum inokulasi Azolla.",scoreImpact:-5},{id:"no_filter",title:"Catatan: Effluen Belum Tersaring",emoji:"🕸️",condition:n=>!n.hasFilter,symptom:"Cairan effluen mengandung partikel biomassa Azolla yang terlepas, membuat cairan tampak keruh meski COD sudah turun.",cause:"Tidak ada penyaring mekanik di akhir proses. Biomassa Azolla yang mati terlarut dan meningkatkan TSS (Total Suspended Solid) effluen.",theory:"Standar baku mutu air limbah (PERMEN LH No. 5/2014) mensyaratkan TSS < 200 mg/L untuk buangan ke badan air. Tanpa filtrasi, meski COD/BOD sudah memenuhi syarat, TSS bisa melebihi batas.",fix:"Pasang penyaring mesh 100–200 µm di outlet reaktor sebelum effluen dibuang atau diproses lanjut menjadi POC.",scoreImpact:0}],Si=n=>document.getElementById(n);function xv(n){yv(),Xs(),vv(()=>{bv(()=>{_v(n)})})}function vv(n){var a;const e=ee.stage4.reactorResult||{},t=gv.filter(s=>s.condition(e)),i=Uo();if(i.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">🔍 LEVEL 5 – EVALUASI PERCOBAAN</span>
        <h2 class="s5-title">Apa yang Terjadi pada Reaktormu?</h2>
        <p class="s5-subtitle">Analisis kegagalan dan keberhasilan percobaan berdasarkan desain yang kamu buat.</p>
      </div>
      ${Io(1)}

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
  `,document.body.appendChild(i),t.length>0){const s=((a=ee.stage4)==null?void 0:a.concentrationCfg)||null,r=Si("s5-scen-list");t.forEach((o,l)=>{const d=typeof o.symptom=="function"?o.symptom(s):o.symptom,c=document.createElement("div");c.className="s5-scenario-card",c.innerHTML=`
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
      `,l===0&&c.classList.add("open"),r.appendChild(c)})}Si("s5-btn-to-mcq").onclick=()=>{Xs(),n()}}function bv(n){const e=`Dalam proyek yang telah kalian buat, limbah vinasse dari industri etanol di Bekonang memiliki karakteristik pH yang sangat asam, kadar COD dan BOD yang sangat tinggi, serta mengandung pigmen melanoidin dan senyawa fenol.
Berdasarkan konsep bioremediasi yang telah kalian pelajari, analisislah mengapa penggunaan bakteri pengurai seringkali gagal dalam memulihkan limbah vinasse ini? Selanjutnya, jelaskan mekanisme pemilihan agen biologis dapat secara efektif menurunkan kadar polutan dalam proses valorisasi limbah tersebut menjadi Pupuk Organik Cair (POC) yang aman bagi lingkungan`,t=Uo();t.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">✏️ EVALUASI ESAI</span>
        <h2 class="s5-title">Jawab Pertanyaan Berikut</h2>
      </div>
      ${Io(2)}
      <div class="s5-question s5-essay-question">${e.replace(/\n/g,"<br>")}</div>
      <textarea class="s5-essay-textarea" id="s5-essay-input"
        placeholder="Tuliskan jawaban analisismu di sini..."
        rows="8"></textarea>
      <div class="s5-essay-hint">Jawaban akan ditampilkan di halaman ringkasan akhir.</div>
      <button class="s5-btn" id="s5-btn-essay-submit" disabled>✅ Simpan Jawaban</button>
    </div>
  `,document.body.appendChild(t);const i=Si("s5-essay-input"),a=Si("s5-btn-essay-submit");i.oninput=()=>{a.disabled=i.value.trim().length<10},a.onclick=()=>{ee.stage5=ee.stage5||{},ee.stage5.essayAnswer=i.value.trim(),Ax({playerName:ee.playerName||"",essayAnswer:ee.stage5.essayAnswer,timestamp:new Date().toISOString()}),Xs(),n()}}function _v(n){var s,r;const e=ee.stage4.reactorResult||{},t=((s=ee.stage4)==null?void 0:s.concentrationCfg)||null,i=(e.perConcentration||[]).map((o,l)=>`
    <tr>
      <td>T${l+1}</td>
      <td>${o.conc}%</td>
      <td>${(200*o.conc/100).toFixed(1)} g/L</td>
      <td style="color:${e.gradeColor||"#40cc80"}">${o.cod}%</td>
      <td style="color:${e.gradeColor||"#40cc80"}">${o.bod}%</td>
      <td style="font-size:11px;color:#6090a0">${o.note}</td>
    </tr>
  `).join(""),a=Uo();a.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">📊 RINGKASAN EVALUASI</span>
        <h2 class="s5-title">Kesimpulan Percobaan Reaktor Vinasse</h2>
      </div>
      ${Io(3)}

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
          <div class="s5-deb-value" style="color:#ffe040">${ee.totalPoints}</div>
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
        <div class="s5-final-score">Total Poin: <span>${ee.totalPoints}</span></div>
      </div>

      ${(r=ee.stage5)!=null&&r.essayAnswer?`
        <div class="s5-essay-recap">
          <div class="s5-essay-recap-title">✏️ Jawaban Esaimu</div>
          <div class="s5-essay-recap-body">${ee.stage5.essayAnswer.replace(/\n/g,"<br>")}</div>
        </div>
      `:""}

      <button class="s5-btn" id="s5-btn-finish">🏁 Lihat Hasil Akhir →</button>
    </div>
  `,document.body.appendChild(a),Si("s5-btn-finish").onclick=()=>{Xs(),n&&n()}}function Io(n){return`<div class="s5-step-indicator">
    ${[{n:1,label:"Analisis"},{n:2,label:"Esai"},{n:3,label:"Kesimpulan"}].map((t,i)=>`
      ${i>0?'<span class="s5-step-arrow">→</span>':""}
      <span class="s5-step ${t.n<n?"done":t.n===n?"active":""}">
        ${t.n<n?"✔ ":""}${t.n}. ${t.label}
      </span>
    `).join("")}
  </div>`}function Uo(){const n=document.createElement("div");return n.id="s5-overlay",n.className="s5-overlay",n}function Xs(){const n=Si("s5-overlay");n&&n.remove()}function yv(){if(Si("s5-styles"))return;const n=document.createElement("style");n.id="s5-styles",n.textContent=`
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
  `,document.head.appendChild(n)}const qs=document.getElementById("game-canvas"),Gn=new yo({canvas:qs,antialias:!0});Gn.setPixelRatio(Math.min(window.devicePixelRatio,2));Gn.setSize(window.innerWidth,window.innerHeight);Gn.shadowMap.enabled=!0;Gn.shadowMap.type=fo;Gn.toneMapping=Dc;Gn.toneMappingExposure=1.1;Gn.outputColorSpace=It;let ri=null;const{scene:Jt}=lg();cg(Jt);const{scene:Ei}=xg();vg(Ei);const{scene:Nn}=Ag();Lg(Nn);const{scene:On}=zg();Bg(On);const{scene:Fn}=Yg();jg(Fn);ri=Jt;const lt=new Kt(60,window.innerWidth/window.innerHeight,.1,1e3);lt.position.set(0,18,38);lt.lookAt(0,0,0);const dt=new gx(Jt);let Oa=bd(Jt),Ra=null,Pa=null,Da=null,oi=Oa;function No(n,e){var t,i;n&&(n.glowMesh&&(e.remove(n.glowMesh),(t=n.glowMesh.geometry)==null||t.dispose()),n.glowMat&&n.glowMat.dispose(),n.doneSprite&&(e.remove(n.doneSprite),(i=n.doneSprite.material)==null||i.dispose()))}const Ec=22,Tc=26,Ac=24,Lc=22,kc=21,Cc=14,jr=.08;let la=!1,Ea=null,uo=!1,Ia=0,fi=Math.PI,Rc=Math.PI,Kr=0,Ti=27,Ai=17;function wv(n,e){Ti=n,Ai=e}function Mv(n){if(!la){Kr+=.0012,lt.position.x=Math.sin(Kr)*38,lt.position.z=Math.cos(Kr)*38,lt.position.y=18+Math.sin(n*.3)*1.5,lt.lookAt(0,2,0);return}const e=dt.position.x,t=dt.position.z;if(uo&&Ea){Ia=Math.min(1,Ia+.04);const l=1-Math.pow(1-Ia,3),d=Ea.x,c=Ea.z,h=Ea.y??4,f=d+(e-d)*.35,p=c+(t-c)*.35,g=h+6,x=ee.currentLevel===2?Tc:ee.currentLevel===3?Ac:ee.currentLevel===4?Lc:ee.currentLevel===5?kc:Ec,m=e+Math.sin(fi)*x,u=t+Math.cos(fi)*x,v=Cc;lt.position.x=m+(f-m)*l,lt.position.y=v+(g-v)*l,lt.position.z=u+(p-u)*l,lt.fov=60-20*l,lt.updateProjectionMatrix(),lt.lookAt(d,h,c);return}Math.abs(lt.fov-60)>.5&&(lt.fov+=(60-lt.fov)*.1,lt.updateProjectionMatrix()),Rc=(dt.group?dt.group.rotation.y:fi)+Math.PI;let a=Rc-fi;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;fi+=a*.04;const s=ee.currentLevel===2?Tc:ee.currentLevel===3?Ac:ee.currentLevel===4?Lc:ee.currentLevel===5?kc:Ec;let r=e+Math.sin(fi)*s,o=t+Math.cos(fi)*s;r=Math.max(-Ti,Math.min(Ti,r)),o=Math.max(-Ai,Math.min(Ai,o)),lt.position.x+=(r-lt.position.x)*jr,lt.position.z+=(o-lt.position.z)*jr,lt.position.y+=(Cc-lt.position.y)*jr,lt.lookAt(e,3,t)}function Sv(){const n=new L(dt.position.x-lt.position.x,0,dt.position.z-lt.position.z).normalize(),e=new L().crossVectors(n,new L(0,1,0)).normalize();return{fwd:n,right:e}}const Ev=6.5;let Ot=null,on=!1;function Tv(){if(on)return;let n=null,e=1/0;for(const t of oi){if(t.done)continue;const i=dt.position.x-t.pos.x,a=dt.position.z-t.pos.z,s=Math.sqrt(i*i+a*a);s<Ev&&s<e&&(e=s,n=t)}if(n!==Ot){Ot=n;const t=ee.currentLevel===2?`Tekan <kbd>E</kbd> &nbsp;— 🏭 Stasiun ${n?n.idx+1:""}`:ee.currentLevel===3?"Tekan <kbd>E</kbd> &nbsp;— 🚰 Buka Kran Vinasse":ee.currentLevel===4?"Tekan <kbd>E</kbd> &nbsp;— 💻 IPAL Builder Terminal":ee.currentLevel===5?"Tekan <kbd>E</kbd> &nbsp;— 🔬 Analisis Mikroskop":`Tekan <kbd>E</kbd> &nbsp;— ❓ Fenomena ${n?n.idx+1:""}`;Do(n?t:null)}}window.addEventListener("keydown",n=>{n.code==="KeyE"&&Ot&&!on&&la&&Dd(Ot)});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("btn-interact-mobile");n&&n.addEventListener("touchstart",e=>{e.preventDefault(),Ot&&!on&&la&&Dd(Ot)},{passive:!1})});function Dd(n){on=!0,Do(null),Ea=n.pos?{x:n.pos.x,y:3,z:n.pos.z}:{x:0,y:3,z:0},uo=!0,Ia=0;function e(){uo=!1,Ia=0}if(ee.currentLevel===3&&n.isValve){tv(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),on=!1,Ot=null,ee.stage3.valveOpened=!0,setTimeout(()=>Sa(()=>Ta(3)),600)});return}if(ee.currentLevel===4&&n.isTerminal){Pd(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),on=!1,Ot=null,ee.stage4.terminalDone=!0,setTimeout(()=>Sa(()=>Ta(4)),600)});return}if(ee.currentLevel===5&&n.isScope){xv(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),on=!1,Ot=null,ee.stage5.scopeDone=!0,setTimeout(()=>Sa(()=>Ta(5)),600)});return}Ox(n.idx,()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.emissive.set(3066993),n.glowMat.emissiveIntensity=.2,e(),on=!1,Ot=null,oi.every(i=>i.done)&&ee.currentLevel===1&&setTimeout(()=>Sa(()=>Ta(1)),600)},()=>{e(),on=!1,Ot=null})}function Ta(n){if(ee.completedRooms.includes(n)||ee.completedRooms.push(n),Ex(n),Sx({playerName:ee.playerName,currentLevel:n,totalPoints:ee.totalPoints,levelBreakdown:ee.levelBreakdown,completedRooms:ee.completedRooms}),ee.completedRooms.length>=5){Bx();return}ho()}function ho(){on=!0,Ot=null,Do(null),zx(n=>{on=!1,Av(n)})}function Av(n){ee.currentLevel=n,ee.pointsAtLevelStart=ee.totalPoints,n===1?Lv():n===2?kv():n===3?Cv():n===4?Rv():n===5&&Pv()}function Lv(){[Jt,Ei,Nn,On,Fn].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Jt),dt.position.set(0,0,12),ri=Jt,Oa=bd(Jt),oi=Oa,wv(27,17),Ot=null,jt()}function kv(){ri=Ei,ox(),Ti=30,Ai=20,[Jt,Nn,On,Fn].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Ei),dt.position.set(0,0,18),oi=[],Ot=null,jt(),setTimeout(()=>qx(()=>{setTimeout(()=>Sa(()=>Ta(2)),600)}),400)}function Cv(){ri=Nn,lx(),Ti=26,Ai=21,[Jt,Ei,On,Fn].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Nn),dt.position.set(0,0,16),No(Ra,Nn),Ra=Og(Nn),oi=[Ra],Ot=null,jt()}function Rv(){ri=On,ux(),Ti=24,Ai=18,[Jt,Ei,Nn,Fn].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(On),dt.position.set(0,0,14),No(Pa,On),Pa=qg(On),oi=[Pa],Ot=null,jt()}function Pv(){ri=Fn,hx(),Ti=22,Ai=16,[Jt,Ei,Nn,On].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Fn),dt.position.set(0,0,12),No(Da,Fn),Da=tx(Fn),oi=[Da],Ot=null,jt()}window.addEventListener("resize",()=>{Gn.setSize(window.innerWidth,window.innerHeight),lt.aspect=window.innerWidth/window.innerHeight,lt.updateProjectionMatrix()});qs.addEventListener("touchstart",n=>n.preventDefault(),{passive:!1});qs.addEventListener("touchmove",n=>n.preventDefault(),{passive:!1});qs.addEventListener("touchend",n=>n.preventDefault(),{passive:!1});Xx();function Id(){la=!0,document.getElementById("hud").style.display="block",Ux(),jt(),Nx(()=>{const n=ko();n&&(ee.completedRooms=n.completedRooms||[],ee.totalPoints=n.totalPoints,ee.levelBreakdown=n.levelBreakdown||[],jt()),ho()},()=>{location.reload()}),dt.addToScene(Jt),dt.position.set(0,0,12),ri=Jt,oi=Oa,ho()}function Dv(n){ee.playerName=n.playerName,ee.totalPoints=n.totalPoints,ee.levelBreakdown=n.levelBreakdown||[],ee.completedRooms=n.completedRooms||[],ee.pointsAtLevelStart=n.totalPoints,dt.setName(ee.playerName),Id()}Cx(n=>{dt.setName(n),_c(),Rx(()=>{Dx(()=>{Ix(()=>{kd(()=>{Id()})})})})},n=>{_c(),Dv(n)});const Iv=new vd;function Ud(){requestAnimationFrame(Ud);const n=Iv.getElapsedTime();Mv(n),dt.update(n,on||!la,Sv()),la&&Tv(),ee.currentLevel===1?gg(Oa,n):ee.currentLevel===3&&Ra?Fg(Ra,n):ee.currentLevel===4&&Pa?$g(Pa,n):ee.currentLevel===5&&Da&&nx(Da,n),Gn.render(ri,lt)}Ud();
