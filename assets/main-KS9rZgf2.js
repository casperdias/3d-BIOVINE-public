(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uo="160",zd=0,Ho=1,Bd=2,Cc=1,ho=2,Rn=3,ii=0,Ht=1,At=2,Zn=0,ea=1,Go=2,Vo=3,Wo=4,Hd=5,vi=100,Gd=101,Vd=102,Xo=103,qo=104,Wd=200,Xd=201,qd=202,$d=203,jr=204,Kr=205,Yd=206,jd=207,Kd=208,Jd=209,Zd=210,Qd=211,eu=212,tu=213,nu=214,iu=0,au=1,su=2,Es=3,ru=4,ou=5,lu=6,cu=7,po=0,du=1,uu=2,Qn=0,hu=1,pu=2,fu=3,Rc=4,mu=5,gu=6,Pc=300,na=301,ia=302,Jr=303,Zr=304,Ps=306,Qr=1e3,fn=1001,eo=1002,$t=1003,$o=1004,js=1005,sn=1006,vu=1007,Ua=1008,ei=1009,xu=1010,bu=1011,fo=1012,Dc=1013,Kn=1014,Jn=1015,Na=1016,Ic=1017,Uc=1018,bi=1020,_u=1021,mn=1023,yu=1024,wu=1025,_i=1026,aa=1027,Mu=1028,Nc=1029,Su=1030,Oc=1031,Fc=1033,Ks=33776,Js=33777,Zs=33778,Qs=33779,Yo=35840,jo=35841,Ko=35842,Jo=35843,zc=36196,Zo=37492,Qo=37496,el=37808,tl=37809,nl=37810,il=37811,al=37812,sl=37813,rl=37814,ol=37815,ll=37816,cl=37817,dl=37818,ul=37819,hl=37820,pl=37821,er=36492,fl=36494,ml=36495,Eu=36283,gl=36284,vl=36285,xl=36286,Bc=3e3,yi=3001,Tu=3200,Au=3201,mo=0,Lu=1,ln="",It="srgb",zn="srgb-linear",go="display-p3",Ds="display-p3-linear",Ts="linear",mt="srgb",As="rec709",Ls="p3",ki=7680,bl=519,ku=512,Cu=513,Ru=514,Hc=515,Pu=516,Du=517,Iu=518,Uu=519,to=35044,_l="300 es",no=1035,Un=2e3,ks=2001;class ca{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tr=Math.PI/180,io=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function Nu(n,e){return(n%e+e)%e}function nr(n,e,t){return(1-t)*n+t*e}function yl(n){return(n&n-1)===0&&n!==0}function ao(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,a,s,r,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,c)}set(e,t,i,a,s,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],p=i[5],g=i[8],v=a[0],m=a[3],h=a[6],_=a[1],x=a[4],b=a[7],C=a[2],S=a[5],M=a[8];return s[0]=r*v+o*_+l*C,s[3]=r*m+o*x+l*S,s[6]=r*h+o*b+l*M,s[1]=c*v+d*_+u*C,s[4]=c*m+d*x+u*S,s[7]=c*h+d*b+u*M,s[2]=f*v+p*_+g*C,s[5]=f*m+p*x+g*S,s[8]=f*h+p*b+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*r-o*c,f=o*l-d*s,p=c*s-r*l,g=t*u+i*f+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(a*c-d*i)*v,e[2]=(o*i-a*r)*v,e[3]=f*v,e[4]=(d*t-a*l)*v,e[5]=(a*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(r*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ir.makeScale(e,t)),this}rotate(e){return this.premultiply(ir.makeRotation(-e)),this}translate(e,t){return this.premultiply(ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new Qe;function Gc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ou(){const n=Cs("canvas");return n.style.display="block",n}const wl={};function Aa(n){n in wl||(wl[n]=!0,console.warn(n))}const Ml=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sl=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xa={[zn]:{transfer:Ts,primaries:As,toReference:n=>n,fromReference:n=>n},[It]:{transfer:mt,primaries:As,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ds]:{transfer:Ts,primaries:Ls,toReference:n=>n.applyMatrix3(Sl),fromReference:n=>n.applyMatrix3(Ml)},[go]:{transfer:mt,primaries:Ls,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sl),fromReference:n=>n.applyMatrix3(Ml).convertLinearToSRGB()}},Fu=new Set([zn,Ds]),ct={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Xa[e].toReference,a=Xa[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xa[n].primaries},getTransfer:function(n){return n===ln?Ts:Xa[n].transfer}};function ta(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ci;class Vc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ci===void 0&&(Ci=Cs("canvas")),Ci.width=e.width,Ci.height=e.height;const i=Ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ta(s[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ta(t[i]/255)*255):t[i]=ta(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zu=0;class Wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(sr(a[r].image)):s.push(sr(a[r]))}else s=sr(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function sr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bu=0;class Zt extends ca{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=fn,a=fn,s=sn,r=Ua,o=mn,l=ei,c=Zt.DEFAULT_ANISOTROPY,d=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=ti(),this.name="",this.source=new Wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===yi?It:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?yi:Bc}set encoding(e){Aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yi?It:ln}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Pc;Zt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,a=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(p+1)/2,C=(h+1)/2,S=(d+f)/4,M=(u+v)/4,I=(g+m)/4;return x>b&&x>C?x<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(x),a=S/i,s=M/i):b>C?b<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),i=S/a,s=I/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=M/s,a=I/s),this.set(i,a,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(f-d)/_,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hu extends ca{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(Aa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yi?It:ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Zt(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Hu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xc extends Zt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$t,this.minFilter=$t,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gu extends Zt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$t,this.minFilter=$t,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],u=i[a+3];const f=s[r+0],p=s[r+1],g=s[r+2],v=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||d!==g){let m=1-o;const h=l*f+c*p+d*g+u*v,_=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const C=Math.sqrt(x),S=Math.atan2(C,h*_);m=Math.sin(m*S)/C,o=Math.sin(o*S)/C}const b=o*_;if(l=l*m+f*b,c=c*m+p*b,d=d*m+g*b,u=u*m+v*b,m===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=C,c*=C,d*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],u=s[r],f=s[r+1],p=s[r+2],g=s[r+3];return e[t]=o*g+d*u+l*p-c*f,e[t+1]=l*g+d*f+c*u-o*p,e[t+2]=c*g+d*p+o*f-l*u,e[t+3]=d*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),u=o(s/2),f=l(i/2),p=l(a/2),g=l(s/2);switch(r){case"XYZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"YZX":this._x=f*d*u+c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u-f*p*g;break;case"XZY":this._x=f*d*u-c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=i+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*i+t*this._x,this._y=p*a+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=r*u+this._w*f,this._x=i*u+this._x*f,this._y=a*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(El.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(El.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*i),d=2*(o*t-s*a),u=2*(s*i-r*t);return this.x=t+l*c+r*u-o*d,this.y=i+l*d+o*c-s*u,this.z=a+l*u+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rr.copy(this).projectOnVector(e),this.sub(rr)}reflect(e){return this.sub(rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new L,El=new Fa;class za{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,dn):dn.fromBufferAttribute(s,r),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),$a.subVectors(this.max,fa),Ri.subVectors(e.a,fa),Pi.subVectors(e.b,fa),Di.subVectors(e.c,fa),Vn.subVectors(Pi,Ri),Wn.subVectors(Di,Pi),di.subVectors(Ri,Di);let t=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-di.z,di.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,di.z,0,-di.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-di.y,di.x,0];return!or(t,Ri,Pi,Di,$a)||(t=[1,0,0,0,1,0,0,0,1],!or(t,Ri,Pi,Di,$a))?!1:(Ya.crossVectors(Vn,Wn),t=[Ya.x,Ya.y,Ya.z],or(t,Ri,Pi,Di,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,qa=new za,Ri=new L,Pi=new L,Di=new L,Vn=new L,Wn=new L,di=new L,fa=new L,$a=new L,Ya=new L,ui=new L;function or(n,e,t,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){ui.fromArray(n,s);const o=a.x*Math.abs(ui.x)+a.y*Math.abs(ui.y)+a.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),d=i.dot(ui);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Vu=new za,ma=new L,lr=new L;class Is{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vu.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(ma,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(lr)),this.expandByPoint(ma.copy(e.center).sub(lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new L,cr=new L,ja=new L,Xn=new L,dr=new L,Ka=new L,ur=new L;class qc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){cr.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(cr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ja),o=Xn.dot(this.direction),l=-Xn.dot(ja),c=Xn.lengthSq(),d=Math.abs(1-r*r);let u,f,p,g;if(d>0)if(u=r*l-o,f=r*o-l,g=s*d,u>=0)if(f>=-g)if(f<=g){const v=1/d;u*=v,f*=v,p=u*(u+r*f+2*o)+f*(r*u+f+2*l)+c}else f=s,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-r*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(r*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=r>0?-s:s,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(cr).addScaledVector(ja,f),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),a=An.dot(An)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,r=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,r=(e.min.y-f.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,a,s){dr.subVectors(t,e),Ka.subVectors(i,e),ur.crossVectors(dr,Ka);let r=this.direction.dot(ur),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Xn.subVectors(this.origin,e);const l=o*this.direction.dot(Ka.crossVectors(Xn,Ka));if(l<0)return null;const c=o*this.direction.dot(dr.cross(Xn));if(c<0||l+c>r)return null;const d=-o*Xn.dot(ur);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,a,s,r,o,l,c,d,u,f,p,g,v,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,c,d,u,f,p,g,v,m)}set(e,t,i,a,s,r,o,l,c,d,u,f,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=a,h[1]=s,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),r=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=r*d,p=r*u,g=o*d,v=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*d,p=l*u,g=c*d,v=c*u;t[0]=f+v*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*u,t[5]=r*d,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*d,p=l*u,g=c*d,v=c*u;t[0]=f-v*o,t[4]=-r*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*d,t[9]=v-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*d,p=r*u,g=o*d,v=o*u;t[0]=l*d,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=r*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+v,t[5]=r*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*d,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wu,e,Xu)}lookAt(e,t,i){const a=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),qn.crossVectors(i,en),qn.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),qn.crossVectors(i,en)),qn.normalize(),Ja.crossVectors(en,qn),a[0]=qn.x,a[4]=Ja.x,a[8]=en.x,a[1]=qn.y,a[5]=Ja.y,a[9]=en.y,a[2]=qn.z,a[6]=Ja.z,a[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],_=i[3],x=i[7],b=i[11],C=i[15],S=a[0],M=a[4],I=a[8],y=a[12],T=a[1],U=a[5],H=a[9],se=a[13],P=a[2],F=a[6],X=a[10],ne=a[14],$=a[3],K=a[7],J=a[11],V=a[15];return s[0]=r*S+o*T+l*P+c*$,s[4]=r*M+o*U+l*F+c*K,s[8]=r*I+o*H+l*X+c*J,s[12]=r*y+o*se+l*ne+c*V,s[1]=d*S+u*T+f*P+p*$,s[5]=d*M+u*U+f*F+p*K,s[9]=d*I+u*H+f*X+p*J,s[13]=d*y+u*se+f*ne+p*V,s[2]=g*S+v*T+m*P+h*$,s[6]=g*M+v*U+m*F+h*K,s[10]=g*I+v*H+m*X+h*J,s[14]=g*y+v*se+m*ne+h*V,s[3]=_*S+x*T+b*P+C*$,s[7]=_*M+x*U+b*F+C*K,s[11]=_*I+x*H+b*X+C*J,s[15]=_*y+x*se+b*ne+C*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*u-a*c*u-s*o*f+i*c*f+a*o*p-i*l*p)+v*(+t*l*p-t*c*f+s*r*f-a*r*p+a*c*d-s*l*d)+m*(+t*c*u-t*o*p-s*r*u+i*r*p+s*o*d-i*c*d)+h*(-a*o*d-t*l*u+t*o*f+a*r*u-i*r*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],_=u*m*c-v*f*c+v*l*p-o*m*p-u*l*h+o*f*h,x=g*f*c-d*m*c-g*l*p+r*m*p+d*l*h-r*f*h,b=d*v*c-g*u*c+g*o*p-r*v*p-d*o*h+r*u*h,C=g*u*l-d*v*l-g*o*f+r*v*f+d*o*m-r*u*m,S=t*_+i*x+a*b+s*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=_*M,e[1]=(v*f*s-u*m*s-v*a*p+i*m*p+u*a*h-i*f*h)*M,e[2]=(o*m*s-v*l*s+v*a*c-i*m*c-o*a*h+i*l*h)*M,e[3]=(u*l*s-o*f*s-u*a*c+i*f*c+o*a*p-i*l*p)*M,e[4]=x*M,e[5]=(d*m*s-g*f*s+g*a*p-t*m*p-d*a*h+t*f*h)*M,e[6]=(g*l*s-r*m*s-g*a*c+t*m*c+r*a*h-t*l*h)*M,e[7]=(r*f*s-d*l*s+d*a*c-t*f*c-r*a*p+t*l*p)*M,e[8]=b*M,e[9]=(g*u*s-d*v*s-g*i*p+t*v*p+d*i*h-t*u*h)*M,e[10]=(r*v*s-g*o*s+g*i*c-t*v*c-r*i*h+t*o*h)*M,e[11]=(d*o*s-r*u*s-d*i*c+t*u*c+r*i*p-t*o*p)*M,e[12]=C*M,e[13]=(d*v*a-g*u*a+g*i*f-t*v*f-d*i*m+t*u*m)*M,e[14]=(g*o*a-r*v*a-g*i*l+t*v*l+r*i*m-t*o*m)*M,e[15]=(r*u*a-d*o*a+d*i*l-t*u*l-r*i*f+t*o*f)*M,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,d=r+r,u=o+o,f=s*c,p=s*d,g=s*u,v=r*d,m=r*u,h=o*u,_=l*c,x=l*d,b=l*u,C=i.x,S=i.y,M=i.z;return a[0]=(1-(v+h))*C,a[1]=(p+b)*C,a[2]=(g-x)*C,a[3]=0,a[4]=(p-b)*S,a[5]=(1-(f+h))*S,a[6]=(m+_)*S,a[7]=0,a[8]=(g+x)*M,a[9]=(m-_)*M,a[10]=(1-(f+v))*M,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=Ii.set(a[0],a[1],a[2]).length();const r=Ii.set(a[4],a[5],a[6]).length(),o=Ii.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],un.copy(this);const c=1/s,d=1/r,u=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=d,un.elements[5]*=d,un.elements[6]*=d,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),i.x=s,i.y=r,i.z=o,this}makePerspective(e,t,i,a,s,r,o=Un){const l=this.elements,c=2*s/(t-e),d=2*s/(i-a),u=(t+e)/(t-e),f=(i+a)/(i-a);let p,g;if(o===Un)p=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===ks)p=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,r,o=Un){const l=this.elements,c=1/(t-e),d=1/(i-a),u=1/(r-s),f=(t+e)*c,p=(i+a)*d;let g,v;if(o===Un)g=(r+s)*u,v=-2*u;else if(o===ks)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ii=new L,un=new bt,Wu=new L(0,0,0),Xu=new L(1,1,1),qn=new L,Ja=new L,en=new L,Tl=new bt,Al=new Fa;class Us{constructor(e=0,t=0,i=0,a=Us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],u=a[2],f=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Us.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qu=0;const Ll=new L,Ui=new Fa,Ln=new bt,Za=new L,ga=new L,$u=new L,Yu=new Fa,kl=new L(1,0,0),Cl=new L(0,1,0),Rl=new L(0,0,1),ju={type:"added"},Ku={type:"removed"};class Lt extends ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new L,t=new Us,i=new Fa,a=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new bt},normalMatrix:{value:new Qe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(kl,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kl,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Za.copy(e):Za.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ga,Za,this.up):Ln.lookAt(Za,ga,this.up),this.quaternion.setFromRotationMatrix(Ln),a&&(Ln.extractRotation(a.matrixWorld),Ui.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ju)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ku)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,$u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Yu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++){const o=a[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),u=r(e.shapes),f=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Lt.DEFAULT_UP=new L(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new L,kn=new L,hr=new L,Cn=new L,Ni=new L,Oi=new L,Pl=new L,pr=new L,fr=new L,mr=new L;let Qa=!1;class rn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),hn.subVectors(e,t),a.cross(hn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){hn.subVectors(a,t),kn.subVectors(i,t),hr.subVectors(e,t);const r=hn.dot(hn),o=hn.dot(kn),l=hn.dot(hr),c=kn.dot(kn),d=kn.dot(hr),u=r*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(c*l-o*d)*f,g=(r*d-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,i,a,s,r,o,l){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),this.getInterpolation(e,t,i,a,s,r,o,l)}static getInterpolation(e,t,i,a,s,r,o,l){return this.getBarycoord(e,t,i,a,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(r,Cn.y),l.addScaledVector(o,Cn.z),l)}static isFrontFacing(e,t,i,a){return hn.subVectors(i,t),kn.subVectors(e,t),hn.cross(kn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),hn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),rn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}getInterpolation(e,t,i,a,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let r,o;Ni.subVectors(a,i),Oi.subVectors(s,i),pr.subVectors(e,i);const l=Ni.dot(pr),c=Oi.dot(pr);if(l<=0&&c<=0)return t.copy(i);fr.subVectors(e,a);const d=Ni.dot(fr),u=Oi.dot(fr);if(d>=0&&u<=d)return t.copy(a);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(i).addScaledVector(Ni,r);mr.subVectors(e,s);const p=Ni.dot(mr),g=Oi.dot(mr);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Oi,o);const m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return Pl.subVectors(s,a),o=(u-d)/(u-d+(p-g)),t.copy(a).addScaledVector(Pl,o);const h=1/(m+v+f);return r=v*h,o=f*h,t.copy(i).addScaledVector(Ni,r).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},es={h:0,s:0,l:0};function gr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=ct.workingColorSpace){if(e=Nu(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=gr(r,s,e+1/3),this.g=gr(r,s,e),this.b=gr(r,s,e-1/3)}return ct.toWorkingColorSpace(this,a),this}setStyle(e,t=It){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=Yc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return ct.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Nt(Bt.r*255,0,255))*65536+Math.round(Nt(Bt.g*255,0,255))*256+Math.round(Nt(Bt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,a=Bt.g,s=Bt.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=d<=.5?u/(r+o):u/(2-r-o),r){case i:l=(a-s)/u+(a<s?6:0);break;case a:l=(s-i)/u+2;break;case s:l=(i-a)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=It){ct.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,a=Bt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(es);const i=nr($n.h,es.h,t),a=nr($n.s,es.s,t),s=nr($n.l,es.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ve;Ve.NAMES=Yc;let Ju=0;class ai extends ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=ea,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=Kr,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jr&&(i.blendSrc=this.blendSrc),this.blendDst!==Kr&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wt extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new L,ts=new Me;class gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=to,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==to&&(e.usage=this.usage),e}}class jc extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kc extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zu=0;const an=new bt,vr=new Lt,Fi=new L,tn=new za,va=new za,Dt=new L;class vt extends ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gc(e)?Kc:jc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];va.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(tn.min,va.min),tn.expandByPoint(Dt),Dt.addVectors(tn.max,va.max),tn.expandByPoint(Dt)):(tn.expandByPoint(va.min),tn.expandByPoint(va.max))}tn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Dt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Dt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Dt.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),Dt.add(Fi)),a=Math.max(a,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,s=t.normal.array,r=t.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<o;T++)c[T]=new L,d[T]=new L;const u=new L,f=new L,p=new L,g=new Me,v=new Me,m=new Me,h=new L,_=new L;function x(T,U,H){u.fromArray(a,T*3),f.fromArray(a,U*3),p.fromArray(a,H*3),g.fromArray(r,T*2),v.fromArray(r,U*2),m.fromArray(r,H*2),f.sub(u),p.sub(u),v.sub(g),m.sub(g);const se=1/(v.x*m.y-m.x*v.y);isFinite(se)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(se),_.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(se),c[T].add(h),c[U].add(h),c[H].add(h),d[T].add(_),d[U].add(_),d[H].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let T=0,U=b.length;T<U;++T){const H=b[T],se=H.start,P=H.count;for(let F=se,X=se+P;F<X;F+=3)x(i[F+0],i[F+1],i[F+2])}const C=new L,S=new L,M=new L,I=new L;function y(T){M.fromArray(s,T*3),I.copy(M);const U=c[T];C.copy(U),C.sub(M.multiplyScalar(M.dot(U))).normalize(),S.crossVectors(I,U);const se=S.dot(d[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=se}for(let T=0,U=b.length;T<U;++T){const H=b[T],se=H.start,P=H.count;for(let F=se,X=se+P;F<X;F+=3)y(i[F+0]),y(i[F+1]),y(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new L,s=new L,r=new L,o=new L,l=new L,c=new L,d=new L,u=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),d.subVectors(r,s),u.subVectors(a,s),d.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),d.subVectors(r,s),u.subVectors(a,s),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,f=new c.constructor(l.length*d);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*d;for(let h=0;h<d;h++)f[g++]=c[p++]}return new gn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new bt,hi=new qc,ns=new Is,Il=new L,zi=new L,Bi=new L,Hi=new L,xr=new L,is=new L,as=new Me,ss=new Me,rs=new Me,Ul=new L,Nl=new L,Ol=new L,os=new L,ls=new L;class k extends Lt{constructor(e=new vt,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],u=s[l];d!==0&&(xr.fromBufferAttribute(u,e),r?is.addScaledVector(xr,d):is.addScaledVector(xr.sub(t),d))}t.add(is)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(ns.containsPoint(hi.origin)===!1&&(hi.intersectSphere(ns,Il)===null||hi.origin.distanceToSquared(Il)>(e.far-e.near)**2))&&(Dl.copy(s).invert(),hi.copy(e.ray).applyMatrix4(Dl),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=r[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=_,C=x;b<C;b+=3){const S=o.getX(b),M=o.getX(b+1),I=o.getX(b+2);a=cs(this,h,e,i,c,d,u,S,M,I),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=o.getX(m),x=o.getX(m+1),b=o.getX(m+2);a=cs(this,r,e,i,c,d,u,_,x,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=r[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=_,C=x;b<C;b+=3){const S=b,M=b+1,I=b+2;a=cs(this,h,e,i,c,d,u,S,M,I),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=m,x=m+1,b=m+2;a=cs(this,r,e,i,c,d,u,_,x,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Qu(n,e,t,i,a,s,r,o){let l;if(e.side===Ht?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===ii,o),l===null)return null;ls.copy(o),ls.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ls);return c<t.near||c>t.far?null:{distance:c,point:ls.clone(),object:n}}function cs(n,e,t,i,a,s,r,o,l,c){n.getVertexPosition(o,zi),n.getVertexPosition(l,Bi),n.getVertexPosition(c,Hi);const d=Qu(n,e,t,i,zi,Bi,Hi,os);if(d){a&&(as.fromBufferAttribute(a,o),ss.fromBufferAttribute(a,l),rs.fromBufferAttribute(a,c),d.uv=rn.getInterpolation(os,zi,Bi,Hi,as,ss,rs,new Me)),s&&(as.fromBufferAttribute(s,o),ss.fromBufferAttribute(s,l),rs.fromBufferAttribute(s,c),d.uv1=rn.getInterpolation(os,zi,Bi,Hi,as,ss,rs,new Me),d.uv2=d.uv1),r&&(Ul.fromBufferAttribute(r,o),Nl.fromBufferAttribute(r,l),Ol.fromBufferAttribute(r,c),d.normal=rn.getInterpolation(os,zi,Bi,Hi,Ul,Nl,Ol,new L),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};rn.getNormal(zi,Bi,Hi,u.normal),d.face=u}return d}class oe extends vt{constructor(e=1,t=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,a,r,2),g("x","z","y",1,-1,e,i,-t,a,r,3),g("x","y","z",1,-1,e,t,i,a,s,4),g("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(u,2));function g(v,m,h,_,x,b,C,S,M,I,y){const T=b/M,U=C/I,H=b/2,se=C/2,P=S/2,F=M+1,X=I+1;let ne=0,$=0;const K=new L;for(let J=0;J<X;J++){const V=J*U-se;for(let Z=0;Z<F;Z++){const O=Z*T-H;K[v]=O*_,K[m]=V*x,K[h]=P,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[h]=S>0?1:-1,d.push(K.x,K.y,K.z),u.push(Z/M),u.push(1-J/I),ne+=1}}for(let J=0;J<I;J++)for(let V=0;V<M;V++){const Z=f+V+F*J,O=f+V+F*(J+1),te=f+(V+1)+F*(J+1),Y=f+(V+1)+F*J;l.push(Z,O,Y),l.push(O,te,Y),$+=6}o.addGroup(p,$,y),p+=$,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=sa(n[t]);for(const a in i)e[a]=i[a]}return e}function eh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jc(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}const th={clone:sa,merge:qt};var nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=eh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zc extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Zc{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Vi=1;class ah extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kt(Gi,Vi,e,t);a.layers=this.layers,this.add(a);const s=new Kt(Gi,Vi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Gi,Vi,e,t);r.layers=this.layers,this.add(r);const o=new Kt(Gi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Gi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Gi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,r),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,a),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qc extends Zt{constructor(e,t,i,a,s,r,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:na,super(e,t,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sh extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(Aa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yi?It:ln),this.texture=new Qc(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new oe(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Zn});s.uniforms.tEquirect.value=t;const r=new k(a,s),o=t.minFilter;return t.minFilter===Ua&&(t.minFilter=sn),new ah(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(s)}}const br=new L,rh=new L,oh=new Qe;class mi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=br.subVectors(i,t).cross(rh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(br),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||oh.getNormalMatrix(e),a=this.coplanarPoint(br).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Is,ds=new L;class vo{constructor(e=new mi,t=new mi,i=new mi,a=new mi,s=new mi,r=new mi){this.planes=[e,t,i,a,s,r]}set(e,t,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],d=a[5],u=a[6],f=a[7],p=a[8],g=a[9],v=a[10],m=a[11],h=a[12],_=a[13],x=a[14],b=a[15];if(i[0].setComponents(l-s,f-c,m-p,b-h).normalize(),i[1].setComponents(l+s,f+c,m+p,b+h).normalize(),i[2].setComponents(l+r,f+d,m+g,b+_).normalize(),i[3].setComponents(l-r,f-d,m-g,b-_).normalize(),i[4].setComponents(l-o,f-u,m-v,b-x).normalize(),t===Un)i[5].setComponents(l+o,f+u,m+v,b+x).normalize();else if(t===ks)i[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(ds.x=a.normal.x>0?e.max.x:e.min.x,ds.y=a.normal.y>0?e.max.y:e.min.y,ds.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ed(){let n=null,e=!1,t=null,i=null;function a(s,r){t(s,r),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function lh(n,e){const t=e.isWebGL2,i=new WeakMap;function a(c,d){const u=c.array,f=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,u,f),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,d,u){const f=d.array,p=d._updateRange,g=d.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let v=0,m=g.length;v<m;v++){const h=g[v];t?n.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,a(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,d),u.version=c.version}}return{get:r,remove:o,update:l}}class _t extends vt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,u=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<d;h++){const _=h*f-r;for(let x=0;x<c;x++){const b=x*u-s;g.push(b,-_,0),v.push(0,0,1),m.push(x/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<o;_++){const x=_+c*h,b=_+c*(h+1),C=_+1+c*(h+1),S=_+1+c*h;p.push(x,b,S),p.push(b,C,S)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.widthSegments,e.heightSegments)}}var ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dh=`#ifdef USE_ALPHAHASH
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
#endif`,uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ph=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mh=`#ifdef USE_AOMAP
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
#endif`,gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vh=`#ifdef USE_BATCHING
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
#endif`,xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wh=`#ifdef USE_IRIDESCENCE
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
#endif`,Mh=`#ifdef USE_BUMPMAP
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
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ph=`#define PI 3.141592653589793
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
} // validated`,Dh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ih=`vec3 transformedNormal = objectNormal;
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
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bh=`
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
}`,Hh=`#ifdef USE_ENVMAP
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
#endif`,Gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kh=`#ifdef USE_GRADIENTMAP
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
}`,Jh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
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
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
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
#endif`,lp=`struct PhysicalMaterial {
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
}`,cp=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
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
#endif`,Sp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ep=`#ifdef USE_MORPHTARGETS
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
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$p=`float getShadowMask() {
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
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nf=`#ifdef USE_TRANSMISSION
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
#endif`,af=`#ifdef USE_TRANSMISSION
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
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,df=`uniform sampler2D t2D;
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`#include <common>
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
}`,gf=`#if DEPTH_PACKING == 3200
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
}`,xf=`#define DISTANCE
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`uniform float scale;
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
}`,wf=`uniform vec3 diffuse;
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
}`,Mf=`#include <common>
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Ef=`#define LAMBERT
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
}`,Tf=`#define LAMBERT
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
}`,Af=`#define MATCAP
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
}`,Lf=`#define MATCAP
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
}`,kf=`#define NORMAL
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
}`,Cf=`#define NORMAL
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
}`,Rf=`#define PHONG
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
}`,Pf=`#define PHONG
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
}`,Df=`#define STANDARD
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
}`,If=`#define STANDARD
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
}`,Uf=`#define TOON
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
}`,Nf=`#define TOON
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
}`,Of=`uniform float size;
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
}`,Ff=`uniform vec3 diffuse;
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
}`,zf=`#include <common>
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
}`,Bf=`uniform vec3 color;
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
}`,Hf=`uniform float rotation;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:ch,alphahash_pars_fragment:dh,alphamap_fragment:uh,alphamap_pars_fragment:hh,alphatest_fragment:ph,alphatest_pars_fragment:fh,aomap_fragment:mh,aomap_pars_fragment:gh,batching_pars_vertex:vh,batching_vertex:xh,begin_vertex:bh,beginnormal_vertex:_h,bsdfs:yh,iridescence_fragment:wh,bumpmap_pars_fragment:Mh,clipping_planes_fragment:Sh,clipping_planes_pars_fragment:Eh,clipping_planes_pars_vertex:Th,clipping_planes_vertex:Ah,color_fragment:Lh,color_pars_fragment:kh,color_pars_vertex:Ch,color_vertex:Rh,common:Ph,cube_uv_reflection_fragment:Dh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Uh,displacementmap_vertex:Nh,emissivemap_fragment:Oh,emissivemap_pars_fragment:Fh,colorspace_fragment:zh,colorspace_pars_fragment:Bh,envmap_fragment:Hh,envmap_common_pars_fragment:Gh,envmap_pars_fragment:Vh,envmap_pars_vertex:Wh,envmap_physical_pars_fragment:np,envmap_vertex:Xh,fog_vertex:qh,fog_pars_vertex:$h,fog_fragment:Yh,fog_pars_fragment:jh,gradientmap_pars_fragment:Kh,lightmap_fragment:Jh,lightmap_pars_fragment:Zh,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:ep,lights_pars_begin:tp,lights_toon_fragment:ip,lights_toon_pars_fragment:ap,lights_phong_fragment:sp,lights_phong_pars_fragment:rp,lights_physical_fragment:op,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:dp,lights_fragment_end:up,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:fp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:vp,map_particle_fragment:xp,map_particle_pars_fragment:bp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:yp,morphcolor_vertex:wp,morphnormal_vertex:Mp,morphtarget_pars_vertex:Sp,morphtarget_vertex:Ep,normal_fragment_begin:Tp,normal_fragment_maps:Ap,normal_pars_fragment:Lp,normal_pars_vertex:kp,normal_vertex:Cp,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Ip,iridescence_pars_fragment:Up,opaque_fragment:Np,packing:Op,premultiplied_alpha_fragment:Fp,project_vertex:zp,dithering_fragment:Bp,dithering_pars_fragment:Hp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Vp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:qp,shadowmask_pars_fragment:$p,skinbase_vertex:Yp,skinning_pars_vertex:jp,skinning_vertex:Kp,skinnormal_vertex:Jp,specularmap_fragment:Zp,specularmap_pars_fragment:Qp,tonemapping_fragment:ef,tonemapping_pars_fragment:tf,transmission_fragment:nf,transmission_pars_fragment:af,uv_pars_fragment:sf,uv_pars_vertex:rf,uv_vertex:of,worldpos_vertex:lf,background_vert:cf,background_frag:df,backgroundCube_vert:uf,backgroundCube_frag:hf,cube_vert:pf,cube_frag:ff,depth_vert:mf,depth_frag:gf,distanceRGBA_vert:vf,distanceRGBA_frag:xf,equirect_vert:bf,equirect_frag:_f,linedashed_vert:yf,linedashed_frag:wf,meshbasic_vert:Mf,meshbasic_frag:Sf,meshlambert_vert:Ef,meshlambert_frag:Tf,meshmatcap_vert:Af,meshmatcap_frag:Lf,meshnormal_vert:kf,meshnormal_frag:Cf,meshphong_vert:Rf,meshphong_frag:Pf,meshphysical_vert:Df,meshphysical_frag:If,meshtoon_vert:Uf,meshtoon_frag:Nf,points_vert:Of,points_frag:Ff,shadow_vert:zf,shadow_frag:Bf,sprite_vert:Hf,sprite_frag:Gf},xe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},bn={basic:{uniforms:qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:qt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:qt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:qt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:qt([xe.points,xe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:qt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:qt([xe.common,xe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:qt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:qt([xe.sprite,xe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:qt([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:qt([xe.lights,xe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};bn.physical={uniforms:qt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const us={r:0,b:0,g:0};function Vf(n,e,t,i,a,s,r){const o=new Ve(0);let l=s===!0?0:1,c,d,u=null,f=0,p=null;function g(m,h){let _=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),_=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ps)?(d===void 0&&(d=new k(new oe(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:sa(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=ct.getTransfer(x.colorSpace)!==mt,(u!==x||f!==x.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new k(new _t(2,2),new Mi({name:"BackgroundMaterial",uniforms:sa(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=ct.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,h){m.getRGB(us,Jc(n)),i.buffers.color.setClear(us.r,us.g,us.b,h,r)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function Wf(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,o={},l=m(null);let c=l,d=!1;function u(P,F,X,ne,$){let K=!1;if(r){const J=v(ne,X,F);c!==J&&(c=J,p(c.object)),K=h(P,ne,X,$),K&&_(P,ne,X,$)}else{const J=F.wireframe===!0;(c.geometry!==ne.id||c.program!==X.id||c.wireframe!==J)&&(c.geometry=ne.id,c.program=X.id,c.wireframe=J,K=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(K||d)&&(d=!1,I(P,F,X,ne),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,F,X){const ne=X.wireframe===!0;let $=o[P.id];$===void 0&&($={},o[P.id]=$);let K=$[F.id];K===void 0&&(K={},$[F.id]=K);let J=K[ne];return J===void 0&&(J=m(f()),K[ne]=J),J}function m(P){const F=[],X=[],ne=[];for(let $=0;$<a;$++)F[$]=0,X[$]=0,ne[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:ne,object:P,attributes:{},index:null}}function h(P,F,X,ne){const $=c.attributes,K=F.attributes;let J=0;const V=X.getAttributes();for(const Z in V)if(V[Z].location>=0){const te=$[Z];let Y=K[Z];if(Y===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),te===void 0||te.attribute!==Y||Y&&te.data!==Y.data)return!0;J++}return c.attributesNum!==J||c.index!==ne}function _(P,F,X,ne){const $={},K=F.attributes;let J=0;const V=X.getAttributes();for(const Z in V)if(V[Z].location>=0){let te=K[Z];te===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const Y={};Y.attribute=te,te&&te.data&&(Y.data=te.data),$[Z]=Y,J++}c.attributes=$,c.attributesNum=J,c.index=ne}function x(){const P=c.newAttributes;for(let F=0,X=P.length;F<X;F++)P[F]=0}function b(P){C(P,0)}function C(P,F){const X=c.newAttributes,ne=c.enabledAttributes,$=c.attributeDivisors;X[P]=1,ne[P]===0&&(n.enableVertexAttribArray(P),ne[P]=1),$[P]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),$[P]=F)}function S(){const P=c.newAttributes,F=c.enabledAttributes;for(let X=0,ne=F.length;X<ne;X++)F[X]!==P[X]&&(n.disableVertexAttribArray(X),F[X]=0)}function M(P,F,X,ne,$,K,J){J===!0?n.vertexAttribIPointer(P,F,X,$,K):n.vertexAttribPointer(P,F,X,ne,$,K)}function I(P,F,X,ne){if(i.isWebGL2===!1&&(P.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const $=ne.attributes,K=X.getAttributes(),J=F.defaultAttributeValues;for(const V in K){const Z=K[V];if(Z.location>=0){let O=$[V];if(O===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),O!==void 0){const te=O.normalized,Y=O.itemSize,me=t.get(O);if(me===void 0)continue;const fe=me.buffer,Re=me.type,Ne=me.bytesPerElement,Oe=i.isWebGL2===!0&&(Re===n.INT||Re===n.UNSIGNED_INT||O.gpuType===Dc);if(O.isInterleavedBufferAttribute){const et=O.data,z=et.stride,Rt=O.offset;if(et.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Z.locationSize;Ie++)C(Z.location+Ie,et.meshPerAttribute);P.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ie=0;Ie<Z.locationSize;Ie++)b(Z.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let Ie=0;Ie<Z.locationSize;Ie++)M(Z.location+Ie,Y/Z.locationSize,Re,te,z*Ne,(Rt+Y/Z.locationSize*Ie)*Ne,Oe)}else{if(O.isInstancedBufferAttribute){for(let et=0;et<Z.locationSize;et++)C(Z.location+et,O.meshPerAttribute);P.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let et=0;et<Z.locationSize;et++)b(Z.location+et);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let et=0;et<Z.locationSize;et++)M(Z.location+et,Y/Z.locationSize,Re,te,Y*Ne,Y/Z.locationSize*et*Ne,Oe)}}else if(J!==void 0){const te=J[V];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(Z.location,te);break;case 3:n.vertexAttrib3fv(Z.location,te);break;case 4:n.vertexAttrib4fv(Z.location,te);break;default:n.vertexAttrib1fv(Z.location,te)}}}}S()}function y(){H();for(const P in o){const F=o[P];for(const X in F){const ne=F[X];for(const $ in ne)g(ne[$].object),delete ne[$];delete F[X]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const F=o[P.id];for(const X in F){const ne=F[X];for(const $ in ne)g(ne[$].object),delete ne[$];delete F[X]}delete o[P.id]}function U(P){for(const F in o){const X=o[F];if(X[P.id]===void 0)continue;const ne=X[P.id];for(const $ in ne)g(ne[$].object),delete ne[$];delete X[P.id]}}function H(){se(),d=!0,c!==l&&(c=l,p(c.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:se,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:b,disableUnusedAttributes:S}}function Xf(n,e,t,i){const a=i.isWebGL2;let s;function r(d){s=d}function o(d,u){n.drawArrays(s,d,u),t.update(u,s,1)}function l(d,u,f){if(f===0)return;let p,g;if(a)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,d,u,f),t.update(u,s,f)}function c(d,u,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(d[g],u[g]);else{p.multiDrawArraysWEBGL(s,d,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];t.update(g,s,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function qf(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,b=r||e.has("OES_texture_float"),C=x&&b,S=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:S}}function $f(n){const e=this;let t=null,i=0,a=!1,s=!1;const r=new mi,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||a;return a=f,i=u.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!a||g===null||g.length===0||s&&!m)s?d(null):c();else{const _=s?0:i,x=_*4;let b=h.clippingState||null;l.value=b,b=d(g,f,x,p);for(let C=0;C!==x;++C)b[C]=t[C];h.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,b=p;x!==v;++x,b+=4)r.copy(u[x]).applyMatrix4(_,o),r.normal.toArray(m,b),m[b+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Yf(n){let e=new WeakMap;function t(r,o){return o===Jr?r.mapping=na:o===Zr&&(r.mapping=ia),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Jr||o===Zr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new sh(l.height/2);return c.fromEquirectangularTexture(n,r),e.set(r,c),r.addEventListener("dispose",a),t(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class td extends Zc{constructor(e=-1,t=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,Fl=[.125,.215,.35,.446,.526,.582],xi=20,_r=new td,zl=new Ve;let yr=null,wr=0,Mr=0;const gi=(1+Math.sqrt(5))/2,Wi=1/gi,Bl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,gi,Wi),new L(0,gi,-Wi),new L(Wi,0,gi),new L(-Wi,0,gi),new L(gi,Wi,0),new L(-gi,Wi,0)];class Hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){yr=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yr,wr,Mr),e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===na||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yr=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Na,format:mn,colorSpace:zn,depthBuffer:!1},a=Gl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jf(s)),this._blurMaterial=Kf(s,e,t)}return a}_compileMaterial(e){const t=new k(this._lodPlanes[0],e);this._renderer.compile(t,_r)}_sceneToCubeUV(e,t,i,a){const o=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(zl),d.toneMapping=Qn,d.autoClear=!1;const p=new wt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new k(new oe,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(zl),v=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):_===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const x=this._cubeSize;hs(a,_*x,h>2?x:0,x,x),d.setRenderTarget(a),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===na||e.mapping===ia;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new k(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,_r)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=Bl[(a-1)%Bl.length];this._blur(e,a-1,a,s,r)}t.autoClear=i}_blur(e,t,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new k(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xi-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const h=[];let _=0;for(let M=0;M<xi;++M){const I=M/v,y=Math.exp(-I*I/2);h.push(y),M===0?_+=y:M<m&&(_+=2*y)}for(let M=0;M<h.length;M++)h[M]=h[M]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const b=this._sizeLods[a],C=3*b*(a>x-Zi?a-x+Zi:0),S=4*(this._cubeSize-b);hs(t,C,S,3*b,2*b),l.setRenderTarget(t),l.render(u,_r)}}function jf(n){const e=[],t=[],i=[];let a=n;const s=n-Zi+1+Fl.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>n-Zi?l=Fl[r-n+Zi-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,v=3,m=2,h=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),b=new Float32Array(h*g*p);for(let S=0;S<p;S++){const M=S%3*2/3-1,I=S>2?0:-1,y=[M,I,0,M+2/3,I,0,M+2/3,I+1,0,M,I,0,M+2/3,I+1,0,M,I+1,0];_.set(y,v*g*S),x.set(f,m*g*S);const T=[S,S,S,S,S,S];b.set(T,h*g*S)}const C=new vt;C.setAttribute("position",new gn(_,v)),C.setAttribute("uv",new gn(x,m)),C.setAttribute("faceIndex",new gn(b,h)),e.push(C),a>Zi&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Gl(n,e,t){const i=new wi(n,e,t);return i.texture.mapping=Ps,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Kf(n,e,t){const i=new Float32Array(xi),a=new L(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Vl(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Wl(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

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
	`}function Jf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Jr||l===Zr,d=l===na||l===ia;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Hl(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||d&&u&&a(u)){t===null&&(t=new Hl(n));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function a(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Zf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Qf(n,e,t,i){const a={},s=new WeakMap;function r(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}f.removeEventListener("dispose",r),delete a[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,b=_.length;x<b;x+=3){const C=_[x+0],S=_[x+1],M=_[x+2];f.push(C,S,S,M,M,C)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,b=_.length/3-1;x<b;x+=3){const C=x+0,S=x+1,M=x+2;f.push(C,S,S,M,M,C)}}else return;const m=new(Gc(f)?Kc:jc)(f,1);m.version=v;const h=s.get(u);h&&e.remove(h),s.set(u,m)}function d(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function e0(n,e,t,i){const a=i.isWebGL2;let s;function r(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function d(p,g){n.drawElements(s,g,o,p*l),t.update(g,s,1)}function u(p,g,v){if(v===0)return;let m,h;if(a)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,o,p*l,v),t.update(g,s,v)}function f(p,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<v;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,o,p,0,v);let h=0;for(let _=0;_<v;_++)h+=g[_];t.update(h,s,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=f}function t0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function n0(n,e){return n[0]-e[0]}function i0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function a0(n,e,t){const i={},a=new Float32Array(8),s=new WeakMap,r=new gt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(d);if(m===void 0||m.count!==v){let F=function(){se.dispose(),s.delete(d),d.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const x=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],M=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let y=0;x===!0&&(y=1),b===!0&&(y=2),C===!0&&(y=3);let T=d.attributes.position.count*y,U=1;T>e.maxTextureSize&&(U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const H=new Float32Array(T*U*4*v),se=new Xc(H,T,U,v);se.type=Jn,se.needsUpdate=!0;const P=y*4;for(let X=0;X<v;X++){const ne=S[X],$=M[X],K=I[X],J=T*U*4*X;for(let V=0;V<ne.count;V++){const Z=V*P;x===!0&&(r.fromBufferAttribute(ne,V),H[J+Z+0]=r.x,H[J+Z+1]=r.y,H[J+Z+2]=r.z,H[J+Z+3]=0),b===!0&&(r.fromBufferAttribute($,V),H[J+Z+4]=r.x,H[J+Z+5]=r.y,H[J+Z+6]=r.z,H[J+Z+7]=0),C===!0&&(r.fromBufferAttribute(K,V),H[J+Z+8]=r.x,H[J+Z+9]=r.y,H[J+Z+10]=r.z,H[J+Z+11]=K.itemSize===4?r.w:1)}}m={count:v,texture:se,size:new Me(T,U)},s.set(d,m),d.addEventListener("dispose",F)}let h=0;for(let x=0;x<f.length;x++)h+=f[x];const _=d.morphTargetsRelative?1:1-h;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let v=i[d.id];if(v===void 0||v.length!==g){v=[];for(let b=0;b<g;b++)v[b]=[b,0];i[d.id]=v}for(let b=0;b<g;b++){const C=v[b];C[0]=b,C[1]=f[b]}v.sort(i0);for(let b=0;b<8;b++)b<g&&v[b][1]?(o[b][0]=v[b][0],o[b][1]=v[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(n0);const m=d.morphAttributes.position,h=d.morphAttributes.normal;let _=0;for(let b=0;b<8;b++){const C=o[b],S=C[0],M=C[1];S!==Number.MAX_SAFE_INTEGER&&M?(m&&d.getAttribute("morphTarget"+b)!==m[S]&&d.setAttribute("morphTarget"+b,m[S]),h&&d.getAttribute("morphNormal"+b)!==h[S]&&d.setAttribute("morphNormal"+b,h[S]),a[b]=M,_+=M):(m&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),h&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),a[b]=0)}const x=d.morphTargetsRelative?1:1-_;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:l}}function s0(n,e,t,i){let a=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);if(a.get(u)!==c&&(e.update(u),a.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return u}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class nd extends Zt{constructor(e,t,i,a,s,r,o,l,c,d){if(d=d!==void 0?d:_i,d!==_i&&d!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===_i&&(i=Kn),i===void 0&&d===aa&&(i=bi),super(null,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const id=new Zt,ad=new nd(1,1);ad.compareFunction=Hc;const sd=new Xc,rd=new Gu,od=new Qc,Xl=[],ql=[],$l=new Float32Array(16),Yl=new Float32Array(9),jl=new Float32Array(4);function da(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=Xl[a];if(s===void 0&&(s=new Float32Array(a),Xl[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(s,o)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ns(n,e){let t=ql[e];t===void 0&&(t=new Int32Array(e),ql[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function l0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function c0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function d0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,i))return;jl.set(i),n.uniformMatrix2fv(this.addr,!1,jl),Ct(t,i)}}function u0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,i))return;Yl.set(i),n.uniformMatrix3fv(this.addr,!1,Yl),Ct(t,i)}}function h0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,i))return;$l.set(i),n.uniformMatrix4fv(this.addr,!1,$l),Ct(t,i)}}function p0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function m0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function v0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function b0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function y0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?ad:id;t.setTexture2D(e||s,a)}function w0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||rd,a)}function M0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||od,a)}function S0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||sd,a)}function E0(n){switch(n){case 5126:return r0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return d0;case 35675:return u0;case 35676:return h0;case 5124:case 35670:return p0;case 35667:case 35671:return f0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return v0;case 36294:return x0;case 36295:return b0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}function T0(n,e){n.uniform1fv(this.addr,e)}function A0(n,e){const t=da(e,this.size,2);n.uniform2fv(this.addr,t)}function L0(n,e){const t=da(e,this.size,3);n.uniform3fv(this.addr,t)}function k0(n,e){const t=da(e,this.size,4);n.uniform4fv(this.addr,t)}function C0(n,e){const t=da(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function R0(n,e){const t=da(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function P0(n,e){const t=da(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D0(n,e){n.uniform1iv(this.addr,e)}function I0(n,e){n.uniform2iv(this.addr,e)}function U0(n,e){n.uniform3iv(this.addr,e)}function N0(n,e){n.uniform4iv(this.addr,e)}function O0(n,e){n.uniform1uiv(this.addr,e)}function F0(n,e){n.uniform2uiv(this.addr,e)}function z0(n,e){n.uniform3uiv(this.addr,e)}function B0(n,e){n.uniform4uiv(this.addr,e)}function H0(n,e,t){const i=this.cache,a=e.length,s=Ns(t,a);kt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||id,s[r])}function G0(n,e,t){const i=this.cache,a=e.length,s=Ns(t,a);kt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||rd,s[r])}function V0(n,e,t){const i=this.cache,a=e.length,s=Ns(t,a);kt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||od,s[r])}function W0(n,e,t){const i=this.cache,a=e.length,s=Ns(t,a);kt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||sd,s[r])}function X0(n){switch(n){case 5126:return T0;case 35664:return A0;case 35665:return L0;case 35666:return k0;case 35674:return C0;case 35675:return R0;case 35676:return P0;case 5124:case 35670:return D0;case 35667:case 35671:return I0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return O0;case 36294:return F0;case 36295:return z0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}class q0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=E0(t.type)}}class $0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X0(t.type)}}class Y0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],i)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Kl(n,e){n.seq.push(e),n.map[e.id]=e}function j0(n,e,t){const i=n.name,a=i.length;for(Sr.lastIndex=0;;){const s=Sr.exec(i),r=Sr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Kl(t,c===void 0?new q0(o,n,e):new $0(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Y0(o),Kl(t,u)),t=u}}}class Ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);j0(s,r,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&i.push(r)}return i}}function Jl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const K0=37297;let J0=0;function Z0(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}function Q0(n){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n);let i;switch(e===t?i="":e===Ls&&t===As?i="LinearDisplayP3ToLinearSRGB":e===As&&t===Ls&&(i="LinearSRGBToLinearDisplayP3"),n){case zn:case Ds:return[i,"LinearTransferOETF"];case It:case go:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Zl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Z0(n.getShaderSource(e),r)}else return a}function em(n,e){const t=Q0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tm(n,e){let t;switch(e){case hu:t="Linear";break;case pu:t="Reinhard";break;case fu:t="OptimizedCineon";break;case Rc:t="ACESFilmic";break;case gu:t="AgX";break;case mu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qi).join(`
`)}function im(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qi).join(`
`)}function am(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),r=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Qi(n){return n!==""}function Ql(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ec(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(n){return n.replace(rm,lm)}const om=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lm(n,e){let t=je[e];if(t===void 0){const i=om.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return so(t)}const cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(n){return n.replace(cm,dm)}function dm(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function nc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function um(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ho?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function hm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case na:case ia:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ia:e="ENVMAP_MODE_REFRACTION";break}return e}function fm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case po:e="ENVMAP_BLENDING_MULTIPLY";break;case du:e="ENVMAP_BLENDING_MIX";break;case uu:e="ENVMAP_BLENDING_ADD";break}return e}function mm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gm(n,e,t,i){const a=n.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=um(t),c=hm(t),d=pm(t),u=fm(t),f=mm(t),p=t.isWebGL2?"":nm(t),g=im(t),v=am(s),m=a.createProgram();let h,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qi).join(`
`),h.length>0&&(h+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qi).join(`
`),_.length>0&&(_+=`
`)):(h=[nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),_=[p,nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?je.tonemapping_pars_fragment:"",t.toneMapping!==Qn?tm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,em("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),r=so(r),r=Ql(r,t),r=ec(r,t),o=so(o),o=Ql(o,t),o=ec(o,t),r=tc(r),o=tc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=x+h+r,C=x+_+o,S=Jl(a,a.VERTEX_SHADER,b),M=Jl(a,a.FRAGMENT_SHADER,C);a.attachShader(m,S),a.attachShader(m,M),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function I(H){if(n.debug.checkShaderErrors){const se=a.getProgramInfoLog(m).trim(),P=a.getShaderInfoLog(S).trim(),F=a.getShaderInfoLog(M).trim();let X=!0,ne=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,m,S,M);else{const $=Zl(a,S,"vertex"),K=Zl(a,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+$+`
`+K)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(P===""||F==="")&&(ne=!1);ne&&(H.diagnostics={runnable:X,programLog:se,vertexShader:{log:P,prefix:h},fragmentShader:{log:F,prefix:_}})}a.deleteShader(S),a.deleteShader(M),y=new Ms(a,m),T=sm(a,m)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(m,K0)),U},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=M,this}let vm=0;class xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bm(e),t.set(e,i)),i}}class bm{constructor(e){this.id=vm++,this.code=e,this.usedTimes=0}}function _m(n,e,t,i,a,s,r){const o=new $c,l=new xm,c=[],d=a.isWebGL2,u=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function m(y,T,U,H,se){const P=H.fog,F=se.geometry,X=y.isMeshStandardMaterial?H.environment:null,ne=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),$=ne&&ne.mapping===Ps?ne.image.height:null,K=g[y.type];y.precision!==null&&(p=a.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,V=J!==void 0?J.length:0;let Z=0;F.morphAttributes.position!==void 0&&(Z=1),F.morphAttributes.normal!==void 0&&(Z=2),F.morphAttributes.color!==void 0&&(Z=3);let O,te,Y,me;if(K){const Gt=bn[K];O=Gt.vertexShader,te=Gt.fragmentShader}else O=y.vertexShader,te=y.fragmentShader,l.update(y),Y=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const fe=n.getRenderTarget(),Re=se.isInstancedMesh===!0,Ne=se.isBatchedMesh===!0,Oe=!!y.map,et=!!y.matcap,z=!!ne,Rt=!!y.aoMap,Ie=!!y.lightMap,Be=!!y.bumpMap,ke=!!y.normalMap,ht=!!y.displacementMap,Xe=!!y.emissiveMap,A=!!y.metalnessMap,w=!!y.roughnessMap,B=y.anisotropy>0,ue=y.clearcoat>0,ce=y.iridescence>0,re=y.sheen>0,Ce=y.transmission>0,ye=B&&!!y.anisotropyMap,Te=ue&&!!y.clearcoatMap,Fe=ue&&!!y.clearcoatNormalMap,$e=ue&&!!y.clearcoatRoughnessMap,le=ce&&!!y.iridescenceMap,st=ce&&!!y.iridescenceThicknessMap,Ke=re&&!!y.sheenColorMap,He=re&&!!y.sheenRoughnessMap,De=!!y.specularMap,D=!!y.specularColorMap,ie=!!y.specularIntensityMap,_e=Ce&&!!y.transmissionMap,Le=Ce&&!!y.thicknessMap,Ae=!!y.gradientMap,Q=!!y.alphaMap,R=y.alphaTest>0,de=!!y.alphaHash,pe=!!y.extensions,j=!!F.attributes.uv1,he=!!F.attributes.uv2,nt=!!F.attributes.uv3;let it=Qn;return y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(it=n.toneMapping),{isWebGL2:d,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:O,fragmentShader:te,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ne,instancing:Re,instancingColor:Re&&se.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:zn,map:Oe,matcap:et,envMap:z,envMapMode:z&&ne.mapping,envMapCubeUVHeight:$,aoMap:Rt,lightMap:Ie,bumpMap:Be,normalMap:ke,displacementMap:f&&ht,emissiveMap:Xe,normalMapObjectSpace:ke&&y.normalMapType===Lu,normalMapTangentSpace:ke&&y.normalMapType===mo,metalnessMap:A,roughnessMap:w,anisotropy:B,anisotropyMap:ye,clearcoat:ue,clearcoatMap:Te,clearcoatNormalMap:Fe,clearcoatRoughnessMap:$e,iridescence:ce,iridescenceMap:le,iridescenceThicknessMap:st,sheen:re,sheenColorMap:Ke,sheenRoughnessMap:He,specularMap:De,specularColorMap:D,specularIntensityMap:ie,transmission:Ce,transmissionMap:_e,thicknessMap:Le,gradientMap:Ae,opaque:y.transparent===!1&&y.blending===ea,alphaMap:Q,alphaTest:R,alphaHash:de,combine:y.combine,mapUv:Oe&&v(y.map.channel),aoMapUv:Rt&&v(y.aoMap.channel),lightMapUv:Ie&&v(y.lightMap.channel),bumpMapUv:Be&&v(y.bumpMap.channel),normalMapUv:ke&&v(y.normalMap.channel),displacementMapUv:ht&&v(y.displacementMap.channel),emissiveMapUv:Xe&&v(y.emissiveMap.channel),metalnessMapUv:A&&v(y.metalnessMap.channel),roughnessMapUv:w&&v(y.roughnessMap.channel),anisotropyMapUv:ye&&v(y.anisotropyMap.channel),clearcoatMapUv:Te&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:st&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&v(y.sheenRoughnessMap.channel),specularMapUv:De&&v(y.specularMap.channel),specularColorMapUv:D&&v(y.specularColorMap.channel),specularIntensityMapUv:ie&&v(y.specularIntensityMap.channel),transmissionMapUv:_e&&v(y.transmissionMap.channel),thicknessMapUv:Le&&v(y.thicknessMap.channel),alphaMapUv:Q&&v(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ke||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:he,vertexUv3s:nt,pointsUvs:se.isPoints===!0&&!!F.attributes.uv&&(Oe||Q),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:se.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===At,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:pe&&y.extensions.derivatives===!0,extensionFragDepth:pe&&y.extensions.fragDepth===!0,extensionDrawBuffers:pe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(_(T,y),x(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function _(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function b(y){const T=g[y.type];let U;if(T){const H=bn[T];U=th.clone(H.uniforms)}else U=y.uniforms;return U}function C(y,T){let U;for(let H=0,se=c.length;H<se;H++){const P=c[H];if(P.cacheKey===T){U=P,++U.usedTimes;break}}return U===void 0&&(U=new gm(n,T,y,s),c.push(U)),U}function S(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function M(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:C,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:I}}function ym(){let n=new WeakMap;function e(s){let r=n.get(s);return r===void 0&&(r={},n.set(s,r)),r}function t(s){n.delete(s)}function i(s,r,o){n.get(s)[r]=o}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function wm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ic(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ac(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function r(u,f,p,g,v,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=v,h.group=m),e++,h}function o(u,f,p,g,v,m){const h=r(u,f,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?a.push(h):t.push(h)}function l(u,f,p,g,v,m){const h=r(u,f,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?a.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||wm),i.length>1&&i.sort(f||ic),a.length>1&&a.sort(f||ic)}function d(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:d,sort:c}}function Mm(){let n=new WeakMap;function e(i,a){const s=n.get(i);let r;return s===void 0?(r=new ac,n.set(i,[r])):a>=s.length?(r=new ac,s.push(r)):r=s[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function Sm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ve};break;case"SpotLight":t={position:new L,direction:new L,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Em(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Tm=0;function Am(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lm(n,e){const t=new Sm,i=Em(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new L);const s=new L,r=new bt,o=new bt;function l(d,u){let f=0,p=0,g=0;for(let H=0;H<9;H++)a.probe[H].set(0,0,0);let v=0,m=0,h=0,_=0,x=0,b=0,C=0,S=0,M=0,I=0,y=0;d.sort(Am);const T=u===!0?Math.PI:1;for(let H=0,se=d.length;H<se;H++){const P=d[H],F=P.color,X=P.intensity,ne=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*X*T,p+=F.g*X*T,g+=F.b*X*T;else if(P.isLightProbe){for(let K=0;K<9;K++)a.probe[K].addScaledVector(P.sh.coefficients[K],X);y++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const J=P.shadow,V=i.get(P);V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,a.directionalShadow[v]=V,a.directionalShadowMap[v]=$,a.directionalShadowMatrix[v]=P.shadow.matrix,b++}a.directional[v]=K,v++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(F).multiplyScalar(X*T),K.distance=ne,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,a.spot[h]=K;const J=P.shadow;if(P.map&&(a.spotLightMap[M]=P.map,M++,J.updateMatrices(P),P.castShadow&&I++),a.spotLightMatrix[h]=J.matrix,P.castShadow){const V=i.get(P);V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,a.spotShadow[h]=V,a.spotShadowMap[h]=$,S++}h++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(F).multiplyScalar(X),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),a.rectArea[_]=K,_++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),K.distance=P.distance,K.decay=P.decay,P.castShadow){const J=P.shadow,V=i.get(P);V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,a.pointShadow[m]=V,a.pointShadowMap[m]=$,a.pointShadowMatrix[m]=P.shadow.matrix,C++}a.point[m]=K,m++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(X*T),K.groundColor.copy(P.groundColor).multiplyScalar(X*T),a.hemi[x]=K,x++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=xe.LTC_FLOAT_1,a.rectAreaLTC2=xe.LTC_FLOAT_2):(a.rectAreaLTC1=xe.LTC_HALF_1,a.rectAreaLTC2=xe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=xe.LTC_FLOAT_1,a.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=xe.LTC_HALF_1,a.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=f,a.ambient[1]=p,a.ambient[2]=g;const U=a.hash;(U.directionalLength!==v||U.pointLength!==m||U.spotLength!==h||U.rectAreaLength!==_||U.hemiLength!==x||U.numDirectionalShadows!==b||U.numPointShadows!==C||U.numSpotShadows!==S||U.numSpotMaps!==M||U.numLightProbes!==y)&&(a.directional.length=v,a.spot.length=h,a.rectArea.length=_,a.point.length=m,a.hemi.length=x,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=S,a.spotShadowMap.length=S,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=S+M-I,a.spotLightMap.length=M,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=y,U.directionalLength=v,U.pointLength=m,U.spotLength=h,U.rectAreaLength=_,U.hemiLength=x,U.numDirectionalShadows=b,U.numPointShadows=C,U.numSpotShadows=S,U.numSpotMaps=M,U.numLightProbes=y,a.version=Tm++)}function c(d,u){let f=0,p=0,g=0,v=0,m=0;const h=u.matrixWorldInverse;for(let _=0,x=d.length;_<x;_++){const b=d[_];if(b.isDirectionalLight){const C=a.directional[f];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),f++}else if(b.isSpotLight){const C=a.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),g++}else if(b.isRectAreaLight){const C=a.rectArea[v];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),o.identity(),r.copy(b.matrixWorld),r.premultiply(h),o.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const C=a.point[p];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(h),p++}else if(b.isHemisphereLight){const C=a.hemi[m];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:a}}function sc(n,e){const t=new Lm(n,e),i=[],a=[];function s(){i.length=0,a.length=0}function r(u){i.push(u)}function o(u){a.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function km(n,e){let t=new WeakMap;function i(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new sc(n,e),t.set(s,[l])):r>=o.length?(l=new sc(n,e),o.push(l)):l=o[r],l}function a(){t=new WeakMap}return{get:i,dispose:a}}class Cm extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rm extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dm=`uniform sampler2D shadow_pass;
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
}`;function Im(n,e,t){let i=new vo;const a=new Me,s=new Me,r=new gt,o=new Cm({depthPacking:Au}),l=new Rm,c={},d=t.maxTextureSize,u={[ii]:Ht,[Ht]:ii,[At]:At},f=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Pm,fragmentShader:Dm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new vt;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new k(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let h=this.type;this.render=function(S,M,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const y=n.getRenderTarget(),T=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Zn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const se=h!==Rn&&this.type===Rn,P=h===Rn&&this.type!==Rn;for(let F=0,X=S.length;F<X;F++){const ne=S[F],$=ne.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const K=$.getFrameExtents();if(a.multiply(K),s.copy($.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/K.x),a.x=s.x*K.x,$.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/K.y),a.y=s.y*K.y,$.mapSize.y=s.y)),$.map===null||se===!0||P===!0){const V=this.type!==Rn?{minFilter:$t,magFilter:$t}:{};$.map!==null&&$.map.dispose(),$.map=new wi(a.x,a.y,V),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const J=$.getViewportCount();for(let V=0;V<J;V++){const Z=$.getViewport(V);r.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),H.viewport(r),$.updateMatrices(ne,V),i=$.getFrustum(),b(M,I,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===Rn&&_($,I),$.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(y,T,U)};function _(S,M){const I=e.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new wi(a.x,a.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(M,null,I,f,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(M,null,I,p,v,null)}function x(S,M,I,y){let T=null;const U=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)T=U;else if(T=I.isPointLight===!0?l:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const H=T.uuid,se=M.uuid;let P=c[H];P===void 0&&(P={},c[H]=P);let F=P[se];F===void 0&&(F=T.clone(),P[se]=F,M.addEventListener("dispose",C)),T=F}if(T.visible=M.visible,T.wireframe=M.wireframe,y===Rn?T.side=M.shadowSide!==null?M.shadowSide:M.side:T.side=M.shadowSide!==null?M.shadowSide:u[M.side],T.alphaMap=M.alphaMap,T.alphaTest=M.alphaTest,T.map=M.map,T.clipShadows=M.clipShadows,T.clippingPlanes=M.clippingPlanes,T.clipIntersection=M.clipIntersection,T.displacementMap=M.displacementMap,T.displacementScale=M.displacementScale,T.displacementBias=M.displacementBias,T.wireframeLinewidth=M.wireframeLinewidth,T.linewidth=M.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=n.properties.get(T);H.light=I}return T}function b(S,M,I,y,T){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===Rn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);const se=e.update(S),P=S.material;if(Array.isArray(P)){const F=se.groups;for(let X=0,ne=F.length;X<ne;X++){const $=F[X],K=P[$.materialIndex];if(K&&K.visible){const J=x(S,K,y,T);S.onBeforeShadow(n,S,M,I,se,J,$),n.renderBufferDirect(I,null,se,J,S,$),S.onAfterShadow(n,S,M,I,se,J,$)}}}else if(P.visible){const F=x(S,P,y,T);S.onBeforeShadow(n,S,M,I,se,F,null),n.renderBufferDirect(I,null,se,F,S,null),S.onAfterShadow(n,S,M,I,se,F,null)}}const H=S.children;for(let se=0,P=H.length;se<P;se++)b(H[se],M,I,y,T)}function C(S){S.target.removeEventListener("dispose",C);for(const I in c){const y=c[I],T=S.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function Um(n,e,t){const i=t.isWebGL2;function a(){let R=!1;const de=new gt;let pe=null;const j=new gt(0,0,0,0);return{setMask:function(he){pe!==he&&!R&&(n.colorMask(he,he,he,he),pe=he)},setLocked:function(he){R=he},setClear:function(he,nt,it,Et,Gt){Gt===!0&&(he*=Et,nt*=Et,it*=Et),de.set(he,nt,it,Et),j.equals(de)===!1&&(n.clearColor(he,nt,it,Et),j.copy(de))},reset:function(){R=!1,pe=null,j.set(-1,0,0,0)}}}function s(){let R=!1,de=null,pe=null,j=null;return{setTest:function(he){he?Ne(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(he){de!==he&&!R&&(n.depthMask(he),de=he)},setFunc:function(he){if(pe!==he){switch(he){case iu:n.depthFunc(n.NEVER);break;case au:n.depthFunc(n.ALWAYS);break;case su:n.depthFunc(n.LESS);break;case Es:n.depthFunc(n.LEQUAL);break;case ru:n.depthFunc(n.EQUAL);break;case ou:n.depthFunc(n.GEQUAL);break;case lu:n.depthFunc(n.GREATER);break;case cu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=he}},setLocked:function(he){R=he},setClear:function(he){j!==he&&(n.clearDepth(he),j=he)},reset:function(){R=!1,de=null,pe=null,j=null}}}function r(){let R=!1,de=null,pe=null,j=null,he=null,nt=null,it=null,Et=null,Gt=null;return{setTest:function(pt){R||(pt?Ne(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(pt){de!==pt&&!R&&(n.stencilMask(pt),de=pt)},setFunc:function(pt,Vt,xn){(pe!==pt||j!==Vt||he!==xn)&&(n.stencilFunc(pt,Vt,xn),pe=pt,j=Vt,he=xn)},setOp:function(pt,Vt,xn){(nt!==pt||it!==Vt||Et!==xn)&&(n.stencilOp(pt,Vt,xn),nt=pt,it=Vt,Et=xn)},setLocked:function(pt){R=pt},setClear:function(pt){Gt!==pt&&(n.clearStencil(pt),Gt=pt)},reset:function(){R=!1,de=null,pe=null,j=null,he=null,nt=null,it=null,Et=null,Gt=null}}}const o=new a,l=new s,c=new r,d=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,v=[],m=null,h=!1,_=null,x=null,b=null,C=null,S=null,M=null,I=null,y=new Ve(0,0,0),T=0,U=!1,H=null,se=null,P=null,F=null,X=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=K>=2);let V=null,Z={};const O=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),Y=new gt().fromArray(O),me=new gt().fromArray(te);function fe(R,de,pe,j){const he=new Uint8Array(4),nt=n.createTexture();n.bindTexture(R,nt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<pe;it++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(de+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return nt}const Re={};Re[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(n.DEPTH_TEST),l.setFunc(Es),Xe(!1),A(Ho),Ne(n.CULL_FACE),ke(Zn);function Ne(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function Oe(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function et(R,de){return p[R]!==de?(n.bindFramebuffer(R,de),p[R]=de,i&&(R===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=de),R===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function z(R,de){let pe=v,j=!1;if(R)if(pe=g.get(de),pe===void 0&&(pe=[],g.set(de,pe)),R.isWebGLMultipleRenderTargets){const he=R.texture;if(pe.length!==he.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,it=he.length;nt<it;nt++)pe[nt]=n.COLOR_ATTACHMENT0+nt;pe.length=he.length,j=!0}}else pe[0]!==n.COLOR_ATTACHMENT0&&(pe[0]=n.COLOR_ATTACHMENT0,j=!0);else pe[0]!==n.BACK&&(pe[0]=n.BACK,j=!0);j&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Rt(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const Ie={[vi]:n.FUNC_ADD,[Gd]:n.FUNC_SUBTRACT,[Vd]:n.FUNC_REVERSE_SUBTRACT};if(i)Ie[Xo]=n.MIN,Ie[qo]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ie[Xo]=R.MIN_EXT,Ie[qo]=R.MAX_EXT)}const Be={[Wd]:n.ZERO,[Xd]:n.ONE,[qd]:n.SRC_COLOR,[jr]:n.SRC_ALPHA,[Zd]:n.SRC_ALPHA_SATURATE,[Kd]:n.DST_COLOR,[Yd]:n.DST_ALPHA,[$d]:n.ONE_MINUS_SRC_COLOR,[Kr]:n.ONE_MINUS_SRC_ALPHA,[Jd]:n.ONE_MINUS_DST_COLOR,[jd]:n.ONE_MINUS_DST_ALPHA,[Qd]:n.CONSTANT_COLOR,[eu]:n.ONE_MINUS_CONSTANT_COLOR,[tu]:n.CONSTANT_ALPHA,[nu]:n.ONE_MINUS_CONSTANT_ALPHA};function ke(R,de,pe,j,he,nt,it,Et,Gt,pt){if(R===Zn){h===!0&&(Oe(n.BLEND),h=!1);return}if(h===!1&&(Ne(n.BLEND),h=!0),R!==Hd){if(R!==_||pt!==U){if((x!==vi||S!==vi)&&(n.blendEquation(n.FUNC_ADD),x=vi,S=vi),pt)switch(R){case ea:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Go:n.blendFunc(n.ONE,n.ONE);break;case Vo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ea:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Go:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,C=null,M=null,I=null,y.set(0,0,0),T=0,_=R,U=pt}return}he=he||de,nt=nt||pe,it=it||j,(de!==x||he!==S)&&(n.blendEquationSeparate(Ie[de],Ie[he]),x=de,S=he),(pe!==b||j!==C||nt!==M||it!==I)&&(n.blendFuncSeparate(Be[pe],Be[j],Be[nt],Be[it]),b=pe,C=j,M=nt,I=it),(Et.equals(y)===!1||Gt!==T)&&(n.blendColor(Et.r,Et.g,Et.b,Gt),y.copy(Et),T=Gt),_=R,U=!1}function ht(R,de){R.side===At?Oe(n.CULL_FACE):Ne(n.CULL_FACE);let pe=R.side===Ht;de&&(pe=!pe),Xe(pe),R.blending===ea&&R.transparent===!1?ke(Zn):ke(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const j=R.stencilWrite;c.setTest(j),j&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),B(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(R){H!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),H=R)}function A(R){R!==zd?(Ne(n.CULL_FACE),R!==se&&(R===Ho?n.cullFace(n.BACK):R===Bd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),se=R}function w(R){R!==P&&($&&n.lineWidth(R),P=R)}function B(R,de,pe){R?(Ne(n.POLYGON_OFFSET_FILL),(F!==de||X!==pe)&&(n.polygonOffset(de,pe),F=de,X=pe)):Oe(n.POLYGON_OFFSET_FILL)}function ue(R){R?Ne(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function ce(R){R===void 0&&(R=n.TEXTURE0+ne-1),V!==R&&(n.activeTexture(R),V=R)}function re(R,de,pe){pe===void 0&&(V===null?pe=n.TEXTURE0+ne-1:pe=V);let j=Z[pe];j===void 0&&(j={type:void 0,texture:void 0},Z[pe]=j),(j.type!==R||j.texture!==de)&&(V!==pe&&(n.activeTexture(pe),V=pe),n.bindTexture(R,de||Re[R]),j.type=R,j.texture=de)}function Ce(){const R=Z[V];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ye(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $e(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function st(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function D(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(R){Y.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Y.copy(R))}function _e(R){me.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),me.copy(R))}function Le(R,de){let pe=u.get(de);pe===void 0&&(pe=new WeakMap,u.set(de,pe));let j=pe.get(R);j===void 0&&(j=n.getUniformBlockIndex(de,R.name),pe.set(R,j))}function Ae(R,de){const j=u.get(de).get(R);d.get(de)!==j&&(n.uniformBlockBinding(de,j,R.__bindingPointIndex),d.set(de,j))}function Q(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},V=null,Z={},p={},g=new WeakMap,v=[],m=null,h=!1,_=null,x=null,b=null,C=null,S=null,M=null,I=null,y=new Ve(0,0,0),T=0,U=!1,H=null,se=null,P=null,F=null,X=null,Y.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:Oe,bindFramebuffer:et,drawBuffers:z,useProgram:Rt,setBlending:ke,setMaterial:ht,setFlipSided:Xe,setCullFace:A,setLineWidth:w,setPolygonOffset:B,setScissorTest:ue,activeTexture:ce,bindTexture:re,unbindTexture:Ce,compressedTexImage2D:ye,compressedTexImage3D:Te,texImage2D:De,texImage3D:D,updateUBOMapping:Le,uniformBlockBinding:Ae,texStorage2D:Ke,texStorage3D:He,texSubImage2D:Fe,texSubImage3D:$e,compressedTexSubImage2D:le,compressedTexSubImage3D:st,scissor:ie,viewport:_e,reset:Q}}function Nm(n,e,t,i,a,s,r){const o=a.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return p?new OffscreenCanvas(A,w):Cs("canvas")}function v(A,w,B,ue){let ce=1;if((A.width>ue||A.height>ue)&&(ce=ue/Math.max(A.width,A.height)),ce<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=w?ao:Math.floor,Ce=re(ce*A.width),ye=re(ce*A.height);u===void 0&&(u=g(Ce,ye));const Te=B?g(Ce,ye):u;return Te.width=Ce,Te.height=ye,Te.getContext("2d").drawImage(A,0,0,Ce,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ce+"x"+ye+")."),Te}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return yl(A.width)&&yl(A.height)}function h(A){return o?!1:A.wrapS!==fn||A.wrapT!==fn||A.minFilter!==$t&&A.minFilter!==sn}function _(A,w){return A.generateMipmaps&&w&&A.minFilter!==$t&&A.minFilter!==sn}function x(A){n.generateMipmap(A)}function b(A,w,B,ue,ce=!1){if(o===!1)return w;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=w;if(w===n.RED&&(B===n.FLOAT&&(re=n.R32F),B===n.HALF_FLOAT&&(re=n.R16F),B===n.UNSIGNED_BYTE&&(re=n.R8)),w===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(re=n.R8UI),B===n.UNSIGNED_SHORT&&(re=n.R16UI),B===n.UNSIGNED_INT&&(re=n.R32UI),B===n.BYTE&&(re=n.R8I),B===n.SHORT&&(re=n.R16I),B===n.INT&&(re=n.R32I)),w===n.RG&&(B===n.FLOAT&&(re=n.RG32F),B===n.HALF_FLOAT&&(re=n.RG16F),B===n.UNSIGNED_BYTE&&(re=n.RG8)),w===n.RGBA){const Ce=ce?Ts:ct.getTransfer(ue);B===n.FLOAT&&(re=n.RGBA32F),B===n.HALF_FLOAT&&(re=n.RGBA16F),B===n.UNSIGNED_BYTE&&(re=Ce===mt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function C(A,w,B){return _(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function S(A){return A===$t||A===$o||A===js?n.NEAREST:n.LINEAR}function M(A){const w=A.target;w.removeEventListener("dispose",M),y(w),w.isVideoTexture&&d.delete(w)}function I(A){const w=A.target;w.removeEventListener("dispose",I),U(w)}function y(A){const w=i.get(A);if(w.__webglInit===void 0)return;const B=A.source,ue=f.get(B);if(ue){const ce=ue[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&T(A),Object.keys(ue).length===0&&f.delete(B)}i.remove(A)}function T(A){const w=i.get(A);n.deleteTexture(w.__webglTexture);const B=A.source,ue=f.get(B);delete ue[w.__cacheKey],r.memory.textures--}function U(A){const w=A.texture,B=i.get(A),ue=i.get(w);if(ue.__webglTexture!==void 0&&(n.deleteTexture(ue.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(B.__webglFramebuffer[ce]))for(let re=0;re<B.__webglFramebuffer[ce].length;re++)n.deleteFramebuffer(B.__webglFramebuffer[ce][re]);else n.deleteFramebuffer(B.__webglFramebuffer[ce]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[ce])}else{if(Array.isArray(B.__webglFramebuffer))for(let ce=0;ce<B.__webglFramebuffer.length;ce++)n.deleteFramebuffer(B.__webglFramebuffer[ce]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ce=0;ce<B.__webglColorRenderbuffer.length;ce++)B.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[ce]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ce=0,re=w.length;ce<re;ce++){const Ce=i.get(w[ce]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),r.memory.textures--),i.remove(w[ce])}i.remove(w),i.remove(A)}let H=0;function se(){H=0}function P(){const A=H;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),H+=1,A}function F(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function X(A,w){const B=i.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const ue=A.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,A,w);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+w)}function ne(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Y(B,A,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+w)}function $(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Y(B,A,w);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+w)}function K(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){me(B,A,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+w)}const J={[Qr]:n.REPEAT,[fn]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},V={[$t]:n.NEAREST,[$o]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[vu]:n.LINEAR_MIPMAP_NEAREST,[Ua]:n.LINEAR_MIPMAP_LINEAR},Z={[ku]:n.NEVER,[Uu]:n.ALWAYS,[Cu]:n.LESS,[Hc]:n.LEQUAL,[Ru]:n.EQUAL,[Iu]:n.GEQUAL,[Pu]:n.GREATER,[Du]:n.NOTEQUAL};function O(A,w,B){if(B?(n.texParameteri(A,n.TEXTURE_WRAP_S,J[w.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,J[w.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,J[w.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,V[w.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,V[w.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==fn||w.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,S(w.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,S(w.minFilter)),w.minFilter!==$t&&w.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===$t||w.minFilter!==js&&w.minFilter!==Ua||w.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Na&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(A,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function te(A,w){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",M));const ue=w.source;let ce=f.get(ue);ce===void 0&&(ce={},f.set(ue,ce));const re=F(w);if(re!==A.__cacheKey){ce[re]===void 0&&(ce[re]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,B=!0),ce[re].usedTimes++;const Ce=ce[A.__cacheKey];Ce!==void 0&&(ce[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&T(w)),A.__cacheKey=re,A.__webglTexture=ce[re].texture}return B}function Y(A,w,B){let ue=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=n.TEXTURE_3D);const ce=te(A,w),re=w.source;t.bindTexture(ue,A.__webglTexture,n.TEXTURE0+B);const Ce=i.get(re);if(re.version!==Ce.__version||ce===!0){t.activeTexture(n.TEXTURE0+B);const ye=ct.getPrimaries(ct.workingColorSpace),Te=w.colorSpace===ln?null:ct.getPrimaries(w.colorSpace),Fe=w.colorSpace===ln||ye===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const $e=h(w)&&m(w.image)===!1;let le=v(w.image,$e,!1,a.maxTextureSize);le=Xe(w,le);const st=m(le)||o,Ke=s.convert(w.format,w.colorSpace);let He=s.convert(w.type),De=b(w.internalFormat,Ke,He,w.colorSpace,w.isVideoTexture);O(ue,w,st);let D;const ie=w.mipmaps,_e=o&&w.isVideoTexture!==!0&&De!==zc,Le=Ce.__version===void 0||ce===!0,Ae=C(w,le,st);if(w.isDepthTexture)De=n.DEPTH_COMPONENT,o?w.type===Jn?De=n.DEPTH_COMPONENT32F:w.type===Kn?De=n.DEPTH_COMPONENT24:w.type===bi?De=n.DEPTH24_STENCIL8:De=n.DEPTH_COMPONENT16:w.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===_i&&De===n.DEPTH_COMPONENT&&w.type!==fo&&w.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Kn,He=s.convert(w.type)),w.format===aa&&De===n.DEPTH_COMPONENT&&(De=n.DEPTH_STENCIL,w.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=bi,He=s.convert(w.type))),Le&&(_e?t.texStorage2D(n.TEXTURE_2D,1,De,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,De,le.width,le.height,0,Ke,He,null));else if(w.isDataTexture)if(ie.length>0&&st){_e&&Le&&t.texStorage2D(n.TEXTURE_2D,Ae,De,ie[0].width,ie[0].height);for(let Q=0,R=ie.length;Q<R;Q++)D=ie[Q],_e?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,D.width,D.height,Ke,He,D.data):t.texImage2D(n.TEXTURE_2D,Q,De,D.width,D.height,0,Ke,He,D.data);w.generateMipmaps=!1}else _e?(Le&&t.texStorage2D(n.TEXTURE_2D,Ae,De,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Ke,He,le.data)):t.texImage2D(n.TEXTURE_2D,0,De,le.width,le.height,0,Ke,He,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){_e&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,De,ie[0].width,ie[0].height,le.depth);for(let Q=0,R=ie.length;Q<R;Q++)D=ie[Q],w.format!==mn?Ke!==null?_e?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,D.width,D.height,le.depth,Ke,D.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,De,D.width,D.height,le.depth,0,D.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,D.width,D.height,le.depth,Ke,He,D.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,De,D.width,D.height,le.depth,0,Ke,He,D.data)}else{_e&&Le&&t.texStorage2D(n.TEXTURE_2D,Ae,De,ie[0].width,ie[0].height);for(let Q=0,R=ie.length;Q<R;Q++)D=ie[Q],w.format!==mn?Ke!==null?_e?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,D.width,D.height,Ke,D.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,De,D.width,D.height,0,D.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,D.width,D.height,Ke,He,D.data):t.texImage2D(n.TEXTURE_2D,Q,De,D.width,D.height,0,Ke,He,D.data)}else if(w.isDataArrayTexture)_e?(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,De,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ke,He,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,le.width,le.height,le.depth,0,Ke,He,le.data);else if(w.isData3DTexture)_e?(Le&&t.texStorage3D(n.TEXTURE_3D,Ae,De,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ke,He,le.data)):t.texImage3D(n.TEXTURE_3D,0,De,le.width,le.height,le.depth,0,Ke,He,le.data);else if(w.isFramebufferTexture){if(Le)if(_e)t.texStorage2D(n.TEXTURE_2D,Ae,De,le.width,le.height);else{let Q=le.width,R=le.height;for(let de=0;de<Ae;de++)t.texImage2D(n.TEXTURE_2D,de,De,Q,R,0,Ke,He,null),Q>>=1,R>>=1}}else if(ie.length>0&&st){_e&&Le&&t.texStorage2D(n.TEXTURE_2D,Ae,De,ie[0].width,ie[0].height);for(let Q=0,R=ie.length;Q<R;Q++)D=ie[Q],_e?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ke,He,D):t.texImage2D(n.TEXTURE_2D,Q,De,Ke,He,D);w.generateMipmaps=!1}else _e?(Le&&t.texStorage2D(n.TEXTURE_2D,Ae,De,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ke,He,le)):t.texImage2D(n.TEXTURE_2D,0,De,Ke,He,le);_(w,st)&&x(ue),Ce.__version=re.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function me(A,w,B){if(w.image.length!==6)return;const ue=te(A,w),ce=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const re=i.get(ce);if(ce.version!==re.__version||ue===!0){t.activeTexture(n.TEXTURE0+B);const Ce=ct.getPrimaries(ct.workingColorSpace),ye=w.colorSpace===ln?null:ct.getPrimaries(w.colorSpace),Te=w.colorSpace===ln||Ce===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Fe=w.isCompressedTexture||w.image[0].isCompressedTexture,$e=w.image[0]&&w.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!Fe&&!$e?le[Q]=v(w.image[Q],!1,!0,a.maxCubemapSize):le[Q]=$e?w.image[Q].image:w.image[Q],le[Q]=Xe(w,le[Q]);const st=le[0],Ke=m(st)||o,He=s.convert(w.format,w.colorSpace),De=s.convert(w.type),D=b(w.internalFormat,He,De,w.colorSpace),ie=o&&w.isVideoTexture!==!0,_e=re.__version===void 0||ue===!0;let Le=C(w,st,Ke);O(n.TEXTURE_CUBE_MAP,w,Ke);let Ae;if(Fe){ie&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,D,st.width,st.height);for(let Q=0;Q<6;Q++){Ae=le[Q].mipmaps;for(let R=0;R<Ae.length;R++){const de=Ae[R];w.format!==mn?He!==null?ie?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,0,0,de.width,de.height,He,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,D,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,0,0,de.width,de.height,He,De,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R,D,de.width,de.height,0,He,De,de.data)}}}else{Ae=w.mipmaps,ie&&_e&&(Ae.length>0&&Le++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,D,le[0].width,le[0].height));for(let Q=0;Q<6;Q++)if($e){ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,He,De,le[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,D,le[Q].width,le[Q].height,0,He,De,le[Q].data);for(let R=0;R<Ae.length;R++){const pe=Ae[R].image[Q].image;ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,0,0,pe.width,pe.height,He,De,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,D,pe.width,pe.height,0,He,De,pe.data)}}else{ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,He,De,le[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,D,He,De,le[Q]);for(let R=0;R<Ae.length;R++){const de=Ae[R];ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,0,0,He,De,de.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R+1,D,He,De,de.image[Q])}}}_(w,Ke)&&x(n.TEXTURE_CUBE_MAP),re.__version=ce.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function fe(A,w,B,ue,ce,re){const Ce=s.convert(B.format,B.colorSpace),ye=s.convert(B.type),Te=b(B.internalFormat,Ce,ye,B.colorSpace);if(!i.get(w).__hasExternalTextures){const $e=Math.max(1,w.width>>re),le=Math.max(1,w.height>>re);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,re,Te,$e,le,w.depth,0,Ce,ye,null):t.texImage2D(ce,re,Te,$e,le,0,Ce,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ke(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,ce,i.get(B).__webglTexture,0,Be(w)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,ce,i.get(B).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(A,w,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let ue=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||ke(w)){const ce=w.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Jn?ue=n.DEPTH_COMPONENT32F:ce.type===Kn&&(ue=n.DEPTH_COMPONENT24));const re=Be(w);ke(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ue,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ue,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,ue,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const ue=Be(w);B&&ke(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,w.width,w.height):ke(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const ue=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ce=0;ce<ue.length;ce++){const re=ue[ce],Ce=s.convert(re.format,re.colorSpace),ye=s.convert(re.type),Te=b(re.internalFormat,Ce,ye,re.colorSpace),Fe=Be(w);B&&ke(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Te,w.width,w.height):ke(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Te,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Te,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const ue=i.get(w.depthTexture).__webglTexture,ce=Be(w);if(w.depthTexture.format===_i)ke(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(w.depthTexture.format===aa)ke(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Oe(A){const w=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ne(w.__webglFramebuffer,A)}else if(B){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]=n.createRenderbuffer(),Re(w.__webglDepthbuffer[ue],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Re(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(A,w,B){const ue=i.get(A);w!==void 0&&fe(ue.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Oe(A)}function z(A){const w=A.texture,B=i.get(A),ue=i.get(w);A.addEventListener("dispose",I),A.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=w.version,r.memory.textures++);const ce=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,Ce=m(A)||o;if(ce){B.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(o&&w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[ye]=[];for(let Te=0;Te<w.mipmaps.length;Te++)B.__webglFramebuffer[ye][Te]=n.createFramebuffer()}else B.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let ye=0;ye<w.mipmaps.length;ye++)B.__webglFramebuffer[ye]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(re)if(a.drawBuffers){const ye=A.texture;for(let Te=0,Fe=ye.length;Te<Fe;Te++){const $e=i.get(ye[Te]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&ke(A)===!1){const ye=re?w:[w];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Te=0;Te<ye.length;Te++){const Fe=ye[Te];B.__webglColorRenderbuffer[Te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Te]);const $e=s.convert(Fe.format,Fe.colorSpace),le=s.convert(Fe.type),st=b(Fe.internalFormat,$e,le,Fe.colorSpace,A.isXRRenderTarget===!0),Ke=Be(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,st,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,B.__webglColorRenderbuffer[Te])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),O(n.TEXTURE_CUBE_MAP,w,Ce);for(let ye=0;ye<6;ye++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)fe(B.__webglFramebuffer[ye][Te],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else fe(B.__webglFramebuffer[ye],A,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);_(w,Ce)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const ye=A.texture;for(let Te=0,Fe=ye.length;Te<Fe;Te++){const $e=ye[Te],le=i.get($e);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),O(n.TEXTURE_2D,$e,Ce),fe(B.__webglFramebuffer,A,$e,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,0),_($e,Ce)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ye=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,ue.__webglTexture),O(ye,w,Ce),o&&w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)fe(B.__webglFramebuffer[Te],A,w,n.COLOR_ATTACHMENT0,ye,Te);else fe(B.__webglFramebuffer,A,w,n.COLOR_ATTACHMENT0,ye,0);_(w,Ce)&&x(ye),t.unbindTexture()}A.depthBuffer&&Oe(A)}function Rt(A){const w=m(A)||o,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ue=0,ce=B.length;ue<ce;ue++){const re=B[ue];if(_(re,w)){const Ce=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ye=i.get(re).__webglTexture;t.bindTexture(Ce,ye),x(Ce),t.unbindTexture()}}}function Ie(A){if(o&&A.samples>0&&ke(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,ue=A.height;let ce=n.COLOR_BUFFER_BIT;const re=[],Ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(A),Te=A.isWebGLMultipleRenderTargets===!0;if(Te)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){re.push(n.COLOR_ATTACHMENT0+Fe),A.depthBuffer&&re.push(Ce);const $e=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if($e===!1&&(A.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Te&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]),$e===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ce]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ce])),Te){const le=i.get(w[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,B,ue,0,0,B,ue,ce,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]);const $e=i.get(w[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Be(A){return Math.min(a.maxSamples,A.samples)}function ke(A){const w=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ht(A){const w=r.render.frame;d.get(A)!==w&&(d.set(A,w),A.update())}function Xe(A,w){const B=A.colorSpace,ue=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===no||B!==zn&&B!==ln&&(ct.getTransfer(B)===mt?o===!1?e.has("EXT_sRGB")===!0&&ue===mn?(A.format=no,A.minFilter=sn,A.generateMipmaps=!1):w=Vc.sRGBToLinear(w):(ue!==mn||ce!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}this.allocateTextureUnit=P,this.resetTextureUnits=se,this.setTexture2D=X,this.setTexture2DArray=ne,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=et,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ke}function Om(n,e,t){const i=t.isWebGL2;function a(s,r=ln){let o;const l=ct.getTransfer(r);if(s===ei)return n.UNSIGNED_BYTE;if(s===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Uc)return n.UNSIGNED_SHORT_5_5_5_1;if(s===xu)return n.BYTE;if(s===bu)return n.SHORT;if(s===fo)return n.UNSIGNED_SHORT;if(s===Dc)return n.INT;if(s===Kn)return n.UNSIGNED_INT;if(s===Jn)return n.FLOAT;if(s===Na)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===_u)return n.ALPHA;if(s===mn)return n.RGBA;if(s===yu)return n.LUMINANCE;if(s===wu)return n.LUMINANCE_ALPHA;if(s===_i)return n.DEPTH_COMPONENT;if(s===aa)return n.DEPTH_STENCIL;if(s===no)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Mu)return n.RED;if(s===Nc)return n.RED_INTEGER;if(s===Su)return n.RG;if(s===Oc)return n.RG_INTEGER;if(s===Fc)return n.RGBA_INTEGER;if(s===Ks||s===Js||s===Zs||s===Qs)if(l===mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ks)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ks)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Js)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yo||s===jo||s===Ko||s===Jo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Yo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ko)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zo||s===Qo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Zo)return l===mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Qo)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===el||s===tl||s===nl||s===il||s===al||s===sl||s===rl||s===ol||s===ll||s===cl||s===dl||s===ul||s===hl||s===pl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===el)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===il)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===al)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ol)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ll)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ul)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pl)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===er||s===fl||s===ml)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===er)return l===mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ml)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Eu||s===gl||s===vl||s===xl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===er)return o.COMPRESSED_RED_RGTC1_EXT;if(s===gl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class Fm extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yt extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zm={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zm)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Bm extends ca{constructor(e,t){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,g=null;const v=t.getContextAttributes();let m=null,h=null;const _=[],x=[],b=new Me;let C=null;const S=new Kt;S.layers.enable(1),S.viewport=new gt;const M=new Kt;M.layers.enable(2),M.viewport=new gt;const I=[S,M],y=new Fm;y.layers.enable(1),y.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let te=_[O];return te===void 0&&(te=new Er,_[O]=te),te.getTargetRaySpace()},this.getControllerGrip=function(O){let te=_[O];return te===void 0&&(te=new Er,_[O]=te),te.getGripSpace()},this.getHand=function(O){let te=_[O];return te===void 0&&(te=new Er,_[O]=te),te.getHandSpace()};function H(O){const te=x.indexOf(O.inputSource);if(te===-1)return;const Y=_[te];Y!==void 0&&(Y.update(O.inputSource,O.frame,c||r),Y.dispatchEvent({type:O.type,data:O.inputSource}))}function se(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",se),a.removeEventListener("inputsourceschange",P);for(let O=0;O<_.length;O++){const te=x[O];te!==null&&(x[O]=null,_[O].disconnect(te))}T=null,U=null,e.setRenderTarget(m),p=null,f=null,u=null,a=null,h=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(O){if(a=O,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",se),a.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:a.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,t,te),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new wi(p.framebufferWidth,p.framebufferHeight,{format:mn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let te=null,Y=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=v.stencil?aa:_i,Y=v.stencil?bi:Kn);const fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};u=new XRWebGLBinding(a,t),f=u.createProjectionLayer(fe),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new wi(f.textureWidth,f.textureHeight,{format:mn,type:ei,depthTexture:new nd(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Re=e.properties.get(h);Re.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Z.setContext(a),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function P(O){for(let te=0;te<O.removed.length;te++){const Y=O.removed[te],me=x.indexOf(Y);me>=0&&(x[me]=null,_[me].disconnect(Y))}for(let te=0;te<O.added.length;te++){const Y=O.added[te];let me=x.indexOf(Y);if(me===-1){for(let Re=0;Re<_.length;Re++)if(Re>=x.length){x.push(Y),me=Re;break}else if(x[Re]===null){x[Re]=Y,me=Re;break}if(me===-1)break}const fe=_[me];fe&&fe.connect(Y)}}const F=new L,X=new L;function ne(O,te,Y){F.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(Y.matrixWorld);const me=F.distanceTo(X),fe=te.projectionMatrix.elements,Re=Y.projectionMatrix.elements,Ne=fe[14]/(fe[10]-1),Oe=fe[14]/(fe[10]+1),et=(fe[9]+1)/fe[5],z=(fe[9]-1)/fe[5],Rt=(fe[8]-1)/fe[0],Ie=(Re[8]+1)/Re[0],Be=Ne*Rt,ke=Ne*Ie,ht=me/(-Rt+Ie),Xe=ht*-Rt;te.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Xe),O.translateZ(ht),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const A=Ne+ht,w=Oe+ht,B=Be-Xe,ue=ke+(me-Xe),ce=et*Oe/w*A,re=z*Oe/w*A;O.projectionMatrix.makePerspective(B,ue,ce,re,A,w),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function $(O,te){te===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(te.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(a===null)return;y.near=M.near=S.near=O.near,y.far=M.far=S.far=O.far,(T!==y.near||U!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,U=y.far);const te=O.parent,Y=y.cameras;$(y,te);for(let me=0;me<Y.length;me++)$(Y[me],te);Y.length===2?ne(y,S,M):y.projectionMatrix.copy(S.projectionMatrix),K(O,y,te)};function K(O,te,Y){Y===null?O.matrix.copy(te.matrixWorld):(O.matrix.copy(Y.matrixWorld),O.matrix.invert(),O.matrix.multiply(te.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(te.projectionMatrix),O.projectionMatrixInverse.copy(te.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=io*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let J=null;function V(O,te){if(d=te.getViewerPose(c||r),g=te,d!==null){const Y=d.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let me=!1;Y.length!==y.cameras.length&&(y.cameras.length=0,me=!0);for(let fe=0;fe<Y.length;fe++){const Re=Y[fe];let Ne=null;if(p!==null)Ne=p.getViewport(Re);else{const et=u.getViewSubImage(f,Re);Ne=et.viewport,fe===0&&(e.setRenderTargetTextures(h,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(h))}let Oe=I[fe];Oe===void 0&&(Oe=new Kt,Oe.layers.enable(fe),Oe.viewport=new gt,I[fe]=Oe),Oe.matrix.fromArray(Re.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Re.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),fe===0&&(y.matrix.copy(Oe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),me===!0&&y.cameras.push(Oe)}}for(let Y=0;Y<_.length;Y++){const me=x[Y],fe=_[Y];me!==null&&fe!==void 0&&fe.update(me,te,c||r)}J&&J(O,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Z=new ed;Z.setAnimationLoop(V),this.setAnimationLoop=function(O){J=O},this.dispose=function(){}}}function Hm(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Jc(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function a(m,h,_,x,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),u(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,_,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ht&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ht&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ht&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Gm(n,e,t,i){let a={},s={},r=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){const b=x.program;i.uniformBlockBinding(_,b)}function c(_,x){let b=a[_.id];b===void 0&&(g(_),b=d(_),a[_.id]=b,_.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(_,C);const S=e.render.frame;s[_.id]!==S&&(f(_),s[_.id]=S)}function d(_){const x=u();_.__bindingPointIndex=x;const b=n.createBuffer(),C=_.__size,S=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,b),b}function u(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=a[_.id],b=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let S=0,M=b.length;S<M;S++){const I=Array.isArray(b[S])?b[S]:[b[S]];for(let y=0,T=I.length;y<T;y++){const U=I[y];if(p(U,S,y,C)===!0){const H=U.__offset,se=Array.isArray(U.value)?U.value:[U.value];let P=0;for(let F=0;F<se.length;F++){const X=se[F],ne=v(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,H+P,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,P),P+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,x,b,C){const S=_.value,M=x+"_"+b;if(C[M]===void 0)return typeof S=="number"||typeof S=="boolean"?C[M]=S:C[M]=S.clone(),!0;{const I=C[M];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return C[M]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function g(_){const x=_.uniforms;let b=0;const C=16;for(let M=0,I=x.length;M<I;M++){const y=Array.isArray(x[M])?x[M]:[x[M]];for(let T=0,U=y.length;T<U;T++){const H=y[T],se=Array.isArray(H.value)?H.value:[H.value];for(let P=0,F=se.length;P<F;P++){const X=se[P],ne=v(X),$=b%C;$!==0&&C-$<ne.boundary&&(b+=C-$),H.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=ne.storage}}}const S=b%C;return S>0&&(b+=C-S),_.__size=b,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const b=r.indexOf(x.__bindingPointIndex);r.splice(b,1),n.deleteBuffer(a[x.id]),delete a[x.id],delete s[x.id]}function h(){for(const _ in a)n.deleteBuffer(a[_]);r=[],a={},s={}}return{bind:l,update:c,dispose:h}}class bo{constructor(e={}){const{canvas:t=Ou(),context:i=null,depth:a=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=r;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const x=this;let b=!1,C=0,S=0,M=null,I=-1,y=null;const T=new gt,U=new gt;let H=null;const se=new Ve(0);let P=0,F=t.width,X=t.height,ne=1,$=null,K=null;const J=new gt(0,0,F,X),V=new gt(0,0,F,X);let Z=!1;const O=new vo;let te=!1,Y=!1,me=null;const fe=new bt,Re=new Me,Ne=new L,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return M===null?ne:1}let z=i;function Rt(E,N){for(let W=0;W<E.length;W++){const q=E[W],G=t.getContext(q,N);if(G!==null)return G}return null}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uo}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",de,!1),z===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),z=Rt(N,E),z===null)throw Rt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ie,Be,ke,ht,Xe,A,w,B,ue,ce,re,Ce,ye,Te,Fe,$e,le,st,Ke,He,De,D,ie,_e;function Le(){Ie=new Zf(z),Be=new qf(z,Ie,e),Ie.init(Be),D=new Om(z,Ie,Be),ke=new Um(z,Ie,Be),ht=new t0(z),Xe=new ym,A=new Nm(z,Ie,ke,Xe,Be,D,ht),w=new Yf(x),B=new Jf(x),ue=new lh(z,Be),ie=new Wf(z,Ie,ue,Be),ce=new Qf(z,ue,ht,ie),re=new s0(z,ce,ue,ht),Ke=new a0(z,Be,A),$e=new $f(Xe),Ce=new _m(x,w,B,Ie,Be,ie,$e),ye=new Hm(x,Xe),Te=new Mm,Fe=new km(Ie,Be),st=new Vf(x,w,B,ke,re,f,l),le=new Im(x,re,Be),_e=new Gm(z,ht,Be,ke),He=new Xf(z,Ie,ht,Be),De=new e0(z,Ie,ht,Be),ht.programs=Ce.programs,x.capabilities=Be,x.extensions=Ie,x.properties=Xe,x.renderLists=Te,x.shadowMap=le,x.state=ke,x.info=ht}Le();const Ae=new Bm(x,z);this.xr=Ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=Ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(F,X,!1))},this.getSize=function(E){return E.set(F,X)},this.setSize=function(E,N,W=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,X=N,t.width=Math.floor(E*ne),t.height=Math.floor(N*ne),W===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(F*ne,X*ne).floor()},this.setDrawingBufferSize=function(E,N,W){F=E,X=N,ne=W,t.width=Math.floor(E*W),t.height=Math.floor(N*W),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,N,W,q){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,N,W,q),ke.viewport(T.copy(J).multiplyScalar(ne).floor())},this.getScissor=function(E){return E.copy(V)},this.setScissor=function(E,N,W,q){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,N,W,q),ke.scissor(U.copy(V).multiplyScalar(ne).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){ke.setScissorTest(Z=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(E=!0,N=!0,W=!0){let q=0;if(E){let G=!1;if(M!==null){const Ee=M.texture.format;G=Ee===Fc||Ee===Oc||Ee===Nc}if(G){const Ee=M.texture.type,Pe=Ee===ei||Ee===Kn||Ee===fo||Ee===bi||Ee===Ic||Ee===Uc,ze=st.getClearColor(),Ge=st.getClearAlpha(),Je=ze.r,qe=ze.g,Ye=ze.b;Pe?(p[0]=Je,p[1]=qe,p[2]=Ye,p[3]=Ge,z.clearBufferuiv(z.COLOR,0,p)):(g[0]=Je,g[1]=qe,g[2]=Ye,g[3]=Ge,z.clearBufferiv(z.COLOR,0,g))}else q|=z.COLOR_BUFFER_BIT}N&&(q|=z.DEPTH_BUFFER_BIT),W&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Te.dispose(),Fe.dispose(),Xe.dispose(),w.dispose(),B.dispose(),re.dispose(),ie.dispose(),_e.dispose(),Ce.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Gt),Ae.removeEventListener("sessionend",pt),me&&(me.dispose(),me=null),Vt.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=ht.autoReset,N=le.enabled,W=le.autoUpdate,q=le.needsUpdate,G=le.type;Le(),ht.autoReset=E,le.enabled=N,le.autoUpdate=W,le.needsUpdate=q,le.type=G}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pe(E){const N=E.target;N.removeEventListener("dispose",pe),j(N)}function j(E){he(E),Xe.remove(E)}function he(E){const N=Xe.get(E).programs;N!==void 0&&(N.forEach(function(W){Ce.releaseProgram(W)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,W,q,G,Ee){N===null&&(N=Oe);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,ze=Ud(E,N,W,q,G);ke.setMaterial(q,Pe);let Ge=W.index,Je=1;if(q.wireframe===!0){if(Ge=ce.getWireframeAttribute(W),Ge===void 0)return;Je=2}const qe=W.drawRange,Ye=W.attributes.position;let Mt=qe.start*Je,Qt=(qe.start+qe.count)*Je;Ee!==null&&(Mt=Math.max(Mt,Ee.start*Je),Qt=Math.min(Qt,(Ee.start+Ee.count)*Je)),Ge!==null?(Mt=Math.max(Mt,0),Qt=Math.min(Qt,Ge.count)):Ye!=null&&(Mt=Math.max(Mt,0),Qt=Math.min(Qt,Ye.count));const Pt=Qt-Mt;if(Pt<0||Pt===1/0)return;ie.setup(G,q,ze,W,Ge);let En,xt=He;if(Ge!==null&&(En=ue.get(Ge),xt=De,xt.setIndex(En)),G.isMesh)q.wireframe===!0?(ke.setLineWidth(q.wireframeLinewidth*et()),xt.setMode(z.LINES)):xt.setMode(z.TRIANGLES);else if(G.isLine){let Ze=q.linewidth;Ze===void 0&&(Ze=1),ke.setLineWidth(Ze*et()),G.isLineSegments?xt.setMode(z.LINES):G.isLineLoop?xt.setMode(z.LINE_LOOP):xt.setMode(z.LINE_STRIP)}else G.isPoints?xt.setMode(z.POINTS):G.isSprite&&xt.setMode(z.TRIANGLES);if(G.isBatchedMesh)xt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)xt.renderInstances(Mt,Pt,G.count);else if(W.isInstancedBufferGeometry){const Ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Xs=Math.min(W.instanceCount,Ze);xt.renderInstances(Mt,Pt,Xs)}else xt.render(Mt,Pt)};function nt(E,N,W){E.transparent===!0&&E.side===At&&E.forceSinglePass===!1?(E.side=Ht,E.needsUpdate=!0,Wa(E,N,W),E.side=ii,E.needsUpdate=!0,Wa(E,N,W),E.side=At):Wa(E,N,W)}this.compile=function(E,N,W=null){W===null&&(W=E),m=Fe.get(W),m.init(),_.push(m),W.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),E!==W&&E.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights);const q=new Set;return E.traverse(function(G){const Ee=G.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const ze=Ee[Pe];nt(ze,W,G),q.add(ze)}else nt(Ee,W,G),q.add(Ee)}),_.pop(),m=null,q},this.compileAsync=function(E,N,W=null){const q=this.compile(E,N,W);return new Promise(G=>{function Ee(){if(q.forEach(function(Pe){Xe.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){G(E);return}setTimeout(Ee,10)}Ie.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let it=null;function Et(E){it&&it(E)}function Gt(){Vt.stop()}function pt(){Vt.start()}const Vt=new ed;Vt.setAnimationLoop(Et),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(E){it=E,Ae.setAnimationLoop(E),E===null?Vt.stop():Vt.start()},Ae.addEventListener("sessionstart",Gt),Ae.addEventListener("sessionend",pt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(N),N=Ae.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,M),m=Fe.get(E,_.length),m.init(),_.push(m),fe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),O.setFromProjectionMatrix(fe),Y=this.localClippingEnabled,te=$e.init(this.clippingPlanes,Y),v=Te.get(E,h.length),v.init(),h.push(v),xn(E,N,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort($,K),this.info.render.frame++,te===!0&&$e.beginShadows();const W=m.state.shadowsArray;if(le.render(W,E,N),te===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(v,E),m.setupLights(x._useLegacyLights),N.isArrayCamera){const q=N.cameras;for(let G=0,Ee=q.length;G<Ee;G++){const Pe=q[G];Uo(v,E,Pe,Pe.viewport)}}else Uo(v,E,N);M!==null&&(A.updateMultisampleRenderTarget(M),A.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(x,E,N),ie.resetDefaultState(),I=-1,y=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function xn(E,N,W,q){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||O.intersectsSprite(E)){q&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const Pe=re.update(E),ze=E.material;ze.visible&&v.push(E,Pe,ze,W,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||O.intersectsObject(E))){const Pe=re.update(E),ze=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ne.copy(Pe.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(fe)),Array.isArray(ze)){const Ge=Pe.groups;for(let Je=0,qe=Ge.length;Je<qe;Je++){const Ye=Ge[Je],Mt=ze[Ye.materialIndex];Mt&&Mt.visible&&v.push(E,Pe,Mt,W,Ne.z,Ye)}}else ze.visible&&v.push(E,Pe,ze,W,Ne.z,null)}}const Ee=E.children;for(let Pe=0,ze=Ee.length;Pe<ze;Pe++)xn(Ee[Pe],N,W,q)}function Uo(E,N,W,q){const G=E.opaque,Ee=E.transmissive,Pe=E.transparent;m.setupLightsView(W),te===!0&&$e.setGlobalState(x.clippingPlanes,W),Ee.length>0&&Id(G,Ee,N,W),q&&ke.viewport(T.copy(q)),G.length>0&&Va(G,N,W),Ee.length>0&&Va(Ee,N,W),Pe.length>0&&Va(Pe,N,W),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Id(E,N,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const Ee=Be.isWebGL2;me===null&&(me=new wi(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?Na:ei,minFilter:Ua,samples:Ee?4:0})),x.getDrawingBufferSize(Re),Ee?me.setSize(Re.x,Re.y):me.setSize(ao(Re.x),ao(Re.y));const Pe=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(se),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const ze=x.toneMapping;x.toneMapping=Qn,Va(E,W,q),A.updateMultisampleRenderTarget(me),A.updateRenderTargetMipmap(me);let Ge=!1;for(let Je=0,qe=N.length;Je<qe;Je++){const Ye=N[Je],Mt=Ye.object,Qt=Ye.geometry,Pt=Ye.material,En=Ye.group;if(Pt.side===At&&Mt.layers.test(q.layers)){const xt=Pt.side;Pt.side=Ht,Pt.needsUpdate=!0,No(Mt,W,q,Qt,Pt,En),Pt.side=xt,Pt.needsUpdate=!0,Ge=!0}}Ge===!0&&(A.updateMultisampleRenderTarget(me),A.updateRenderTargetMipmap(me)),x.setRenderTarget(Pe),x.setClearColor(se,P),x.toneMapping=ze}function Va(E,N,W){const q=N.isScene===!0?N.overrideMaterial:null;for(let G=0,Ee=E.length;G<Ee;G++){const Pe=E[G],ze=Pe.object,Ge=Pe.geometry,Je=q===null?Pe.material:q,qe=Pe.group;ze.layers.test(W.layers)&&No(ze,N,W,Ge,Je,qe)}}function No(E,N,W,q,G,Ee){E.onBeforeRender(x,N,W,q,G,Ee),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(x,N,W,q,E,Ee),G.transparent===!0&&G.side===At&&G.forceSinglePass===!1?(G.side=Ht,G.needsUpdate=!0,x.renderBufferDirect(W,N,q,G,E,Ee),G.side=ii,G.needsUpdate=!0,x.renderBufferDirect(W,N,q,G,E,Ee),G.side=At):x.renderBufferDirect(W,N,q,G,E,Ee),E.onAfterRender(x,N,W,q,G,Ee)}function Wa(E,N,W){N.isScene!==!0&&(N=Oe);const q=Xe.get(E),G=m.state.lights,Ee=m.state.shadowsArray,Pe=G.state.version,ze=Ce.getParameters(E,G.state,Ee,N,W),Ge=Ce.getProgramCacheKey(ze);let Je=q.programs;q.environment=E.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(E.isMeshStandardMaterial?B:w).get(E.envMap||q.environment),Je===void 0&&(E.addEventListener("dispose",pe),Je=new Map,q.programs=Je);let qe=Je.get(Ge);if(qe!==void 0){if(q.currentProgram===qe&&q.lightsStateVersion===Pe)return Fo(E,ze),qe}else ze.uniforms=Ce.getUniforms(E),E.onBuild(W,ze,x),E.onBeforeCompile(ze,x),qe=Ce.acquireProgram(ze,Ge),Je.set(Ge,qe),q.uniforms=ze.uniforms;const Ye=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ye.clippingPlanes=$e.uniform),Fo(E,ze),q.needsLights=Od(E),q.lightsStateVersion=Pe,q.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=qe,q.uniformsList=null,qe}function Oo(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Ms.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Fo(E,N){const W=Xe.get(E);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Ud(E,N,W,q,G){N.isScene!==!0&&(N=Oe),A.resetTextureUnits();const Ee=N.fog,Pe=q.isMeshStandardMaterial?N.environment:null,ze=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:zn,Ge=(q.isMeshStandardMaterial?B:w).get(q.envMap||Pe),Je=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qe=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ye=!!W.morphAttributes.position,Mt=!!W.morphAttributes.normal,Qt=!!W.morphAttributes.color;let Pt=Qn;q.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Pt=x.toneMapping);const En=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xt=En!==void 0?En.length:0,Ze=Xe.get(q),Xs=m.state.lights;if(te===!0&&(Y===!0||E!==y)){const nn=E===y&&q.id===I;$e.setState(q,E,nn)}let yt=!1;q.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Xs.state.version||Ze.outputColorSpace!==ze||G.isBatchedMesh&&Ze.batching===!1||!G.isBatchedMesh&&Ze.batching===!0||G.isInstancedMesh&&Ze.instancing===!1||!G.isInstancedMesh&&Ze.instancing===!0||G.isSkinnedMesh&&Ze.skinning===!1||!G.isSkinnedMesh&&Ze.skinning===!0||G.isInstancedMesh&&Ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ze.instancingColor===!1&&G.instanceColor!==null||Ze.envMap!==Ge||q.fog===!0&&Ze.fog!==Ee||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==$e.numPlanes||Ze.numIntersection!==$e.numIntersection)||Ze.vertexAlphas!==Je||Ze.vertexTangents!==qe||Ze.morphTargets!==Ye||Ze.morphNormals!==Mt||Ze.morphColors!==Qt||Ze.toneMapping!==Pt||Be.isWebGL2===!0&&Ze.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,Ze.__version=q.version);let li=Ze.currentProgram;yt===!0&&(li=Wa(q,N,G));let zo=!1,pa=!1,qs=!1;const Ft=li.getUniforms(),ci=Ze.uniforms;if(ke.useProgram(li.program)&&(zo=!0,pa=!0,qs=!0),q.id!==I&&(I=q.id,pa=!0),zo||y!==E){Ft.setValue(z,"projectionMatrix",E.projectionMatrix),Ft.setValue(z,"viewMatrix",E.matrixWorldInverse);const nn=Ft.map.cameraPosition;nn!==void 0&&nn.setValue(z,Ne.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&Ft.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ft.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,pa=!0,qs=!0)}if(G.isSkinnedMesh){Ft.setOptional(z,G,"bindMatrix"),Ft.setOptional(z,G,"bindMatrixInverse");const nn=G.skeleton;nn&&(Be.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ft.setValue(z,"boneTexture",nn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Ft.setOptional(z,G,"batchingTexture"),Ft.setValue(z,"batchingTexture",G._matricesTexture,A));const $s=W.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&Be.isWebGL2===!0)&&Ke.update(G,W,li),(pa||Ze.receiveShadow!==G.receiveShadow)&&(Ze.receiveShadow=G.receiveShadow,Ft.setValue(z,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ci.envMap.value=Ge,ci.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),pa&&(Ft.setValue(z,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&Nd(ci,qs),Ee&&q.fog===!0&&ye.refreshFogUniforms(ci,Ee),ye.refreshMaterialUniforms(ci,q,ne,X,me),Ms.upload(z,Oo(Ze),ci,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ms.upload(z,Oo(Ze),ci,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ft.setValue(z,"center",G.center),Ft.setValue(z,"modelViewMatrix",G.modelViewMatrix),Ft.setValue(z,"normalMatrix",G.normalMatrix),Ft.setValue(z,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const nn=q.uniformsGroups;for(let Ys=0,Fd=nn.length;Ys<Fd;Ys++)if(Be.isWebGL2){const Bo=nn[Ys];_e.update(Bo,li),_e.bind(Bo,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function Nd(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Od(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,N,W){Xe.get(E.texture).__webglTexture=N,Xe.get(E.depthTexture).__webglTexture=W;const q=Xe.get(E);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const W=Xe.get(E);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,W=0){M=E,C=N,S=W;let q=!0,G=null,Ee=!1,Pe=!1;if(E){const Ge=Xe.get(E);Ge.__useDefaultFramebuffer!==void 0?(ke.bindFramebuffer(z.FRAMEBUFFER,null),q=!1):Ge.__webglFramebuffer===void 0?A.setupRenderTarget(E):Ge.__hasExternalTextures&&A.rebindTextures(E,Xe.get(E.texture).__webglTexture,Xe.get(E.depthTexture).__webglTexture);const Je=E.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Pe=!0);const qe=Xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[N])?G=qe[N][W]:G=qe[N],Ee=!0):Be.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?G=Xe.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?G=qe[W]:G=qe,T.copy(E.viewport),U.copy(E.scissor),H=E.scissorTest}else T.copy(J).multiplyScalar(ne).floor(),U.copy(V).multiplyScalar(ne).floor(),H=Z;if(ke.bindFramebuffer(z.FRAMEBUFFER,G)&&Be.drawBuffers&&q&&ke.drawBuffers(E,G),ke.viewport(T),ke.scissor(U),ke.setScissorTest(H),Ee){const Ge=Xe.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ge.__webglTexture,W)}else if(Pe){const Ge=Xe.get(E.texture),Je=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.__webglTexture,W||0,Je)}I=-1},this.readRenderTargetPixels=function(E,N,W,q,G,Ee,Pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(ze=ze[Pe]),ze){ke.bindFramebuffer(z.FRAMEBUFFER,ze);try{const Ge=E.texture,Je=Ge.format,qe=Ge.type;if(Je!==mn&&D.convert(Je)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=qe===Na&&(Ie.has("EXT_color_buffer_half_float")||Be.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(qe!==ei&&D.convert(qe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===Jn&&(Be.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-q&&W>=0&&W<=E.height-G&&z.readPixels(N,W,q,G,D.convert(Je),D.convert(qe),Ee)}finally{const Ge=M!==null?Xe.get(M).__webglFramebuffer:null;ke.bindFramebuffer(z.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(E,N,W=0){const q=Math.pow(2,-W),G=Math.floor(N.image.width*q),Ee=Math.floor(N.image.height*q);A.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,E.x,E.y,G,Ee),ke.unbindTexture()},this.copyTextureToTexture=function(E,N,W,q=0){const G=N.image.width,Ee=N.image.height,Pe=D.convert(W.format),ze=D.convert(W.type);A.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,E.x,E.y,G,Ee,Pe,ze,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Pe,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,q,E.x,E.y,Pe,ze,N.image),q===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ke.unbindTexture()},this.copyTextureToTexture3D=function(E,N,W,q,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=E.max.x-E.min.x+1,Pe=E.max.y-E.min.y+1,ze=E.max.z-E.min.z+1,Ge=D.convert(q.format),Je=D.convert(q.type);let qe;if(q.isData3DTexture)A.setTexture3D(q,0),qe=z.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)A.setTexture2DArray(q,0),qe=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const Ye=z.getParameter(z.UNPACK_ROW_LENGTH),Mt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Qt=z.getParameter(z.UNPACK_SKIP_PIXELS),Pt=z.getParameter(z.UNPACK_SKIP_ROWS),En=z.getParameter(z.UNPACK_SKIP_IMAGES),xt=W.isCompressedTexture?W.mipmaps[G]:W.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,xt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(qe,G,N.x,N.y,N.z,Ee,Pe,ze,Ge,Je,xt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(qe,G,N.x,N.y,N.z,Ee,Pe,ze,Ge,xt.data)):z.texSubImage3D(qe,G,N.x,N.y,N.z,Ee,Pe,ze,Ge,Je,xt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ye),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Mt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,En),G===0&&q.generateMipmaps&&z.generateMipmap(qe),ke.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ke.unbindTexture()},this.resetState=function(){C=0,S=0,M=null,ke.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===go?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Ds?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?yi:Bc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yi?It:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vm extends bo{}Vm.prototype.isWebGL1Renderer=!0;class Ba{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new Ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ha{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new Ha(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ua extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Wm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=to,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new L;class Rs{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),a=ut(a,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class si extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xi;const xa=new L,qi=new L,$i=new L,Yi=new Me,ba=new Me,ld=new bt,ps=new L,_a=new L,fs=new L,rc=new Me,Tr=new Me,oc=new Me;class Li extends Lt{constructor(e=new si){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wm(t,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new Rs(i,3,0,!1)),Xi.setAttribute("uv",new Rs(i,2,3,!1))}this.geometry=Xi,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),ld.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-$i.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;ms(ps.set(-.5,-.5,0),$i,r,qi,a,s),ms(_a.set(.5,-.5,0),$i,r,qi,a,s),ms(fs.set(.5,.5,0),$i,r,qi,a,s),rc.set(0,0),Tr.set(1,0),oc.set(1,1);let o=e.ray.intersectTriangle(ps,_a,fs,!1,xa);if(o===null&&(ms(_a.set(-.5,.5,0),$i,r,qi,a,s),Tr.set(0,1),o=e.ray.intersectTriangle(ps,fs,_a,!1,xa),o===null))return;const l=e.ray.origin.distanceTo(xa);l<e.near||l>e.far||t.push({distance:l,point:xa.clone(),uv:rn.getInterpolation(xa,ps,_a,fs,rc,Tr,oc,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ms(n,e,t,i,a,s){Yi.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(ba.x=s*Yi.x-a*Yi.y,ba.y=a*Yi.x+s*Yi.y):ba.copy(Yi),n.copy(e),n.x+=ba.x,n.y+=ba.y,n.applyMatrix4(ld)}class ha extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lc=new L,cc=new L,dc=new bt,Ar=new qc,gs=new Is;class Bn extends Lt{constructor(e=new vt,t=new ha){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)lc.fromBufferAttribute(t,a-1),cc.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=lc.distanceTo(cc);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(a),gs.radius+=s,e.ray.intersectsSphere(gs)===!1)return;dc.copy(a).invert(),Ar.copy(e.ray).applyMatrix4(dc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,d=new L,u=new L,f=new L,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const h=Math.max(0,r.start),_=Math.min(g.count,r.start+r.count);for(let x=h,b=_-1;x<b;x+=p){const C=g.getX(x),S=g.getX(x+1);if(c.fromBufferAttribute(m,C),d.fromBufferAttribute(m,S),Ar.distanceSqToSegment(c,d,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,r.start),_=Math.min(m.count,r.start+r.count);for(let x=h,b=_-1;x<b;x+=p){if(c.fromBufferAttribute(m,x),d.fromBufferAttribute(m,x+1),Ar.distanceSqToSegment(c,d,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Os extends Zt{constructor(e,t,i,a,s,r,o,l,c){super(e,t,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const s=i.length;let r;t?r=t:r=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);const d=i[a],f=i[a+1]-d,p=(r-d)/f;return(a+p)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);const r=this.getPoint(a),o=this.getPoint(s),l=t||(r.isVector2?new Me:new L);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,a=[],s=[],r=[],o=new L,l=new bt;for(let p=0;p<=e;p++){const g=p/e;a[p]=this.getTangentAt(g,new L)}s[0]=new L,r[0]=new L;let c=Number.MAX_VALUE;const d=Math.abs(a[0].x),u=Math.abs(a[0].y),f=Math.abs(a[0].z);d<=c&&(c=d,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Nt(a[p-1].dot(a[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(a[p],s[p])}if(t===!0){let p=Math.acos(Nt(s[0].dot(s[e]),-1,1));p/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(a[g],p*g)),r[g].crossVectors(a[g],s[g])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _o extends Sn{constructor(e=0,t=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new Me,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*u+this.aX,c=f*u+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xm extends _o{constructor(e,t,i,a,s,r){super(e,t,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function yo(){let n=0,e=0,t=0,i=0;function a(s,r,o,l){n=s,e=o,t=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){a(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,d,u){let f=(r-s)/c-(o-s)/(c+d)+(o-r)/d,p=(o-r)/d-(l-r)/(d+u)+(l-o)/u;f*=d,p*=d,a(r,o,f,p)},calc:function(s){const r=s*s,o=r*s;return n+e*s+t*r+i*o}}}const vs=new L,Lr=new yo,kr=new yo,Cr=new yo;class cd extends Sn{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new L){const i=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,d;this.closed||o>0?c=a[(o-1)%s]:(vs.subVectors(a[0],a[1]).add(a[0]),c=vs);const u=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?d=a[(o+2)%s]:(vs.subVectors(a[s-1],a[s-2]).add(a[s-1]),d=vs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Lr.initNonuniformCatmullRom(c.x,u.x,f.x,d.x,g,v,m),kr.initNonuniformCatmullRom(c.y,u.y,f.y,d.y,g,v,m),Cr.initNonuniformCatmullRom(c.z,u.z,f.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(Lr.initCatmullRom(c.x,u.x,f.x,d.x,this.tension),kr.initCatmullRom(c.y,u.y,f.y,d.y,this.tension),Cr.initCatmullRom(c.z,u.z,f.z,d.z,this.tension));return i.set(Lr.calc(l),kr.calc(l),Cr.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new L().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uc(n,e,t,i,a){const s=(i-e)*.5,r=(a-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+r)*l+(-3*t+3*i-2*s-r)*o+s*n+t}function qm(n,e){const t=1-n;return t*t*e}function $m(n,e){return 2*(1-n)*n*e}function Ym(n,e){return n*n*e}function La(n,e,t,i){return qm(n,e)+$m(n,t)+Ym(n,i)}function jm(n,e){const t=1-n;return t*t*t*e}function Km(n,e){const t=1-n;return 3*t*t*n*e}function Jm(n,e){return 3*(1-n)*n*n*e}function Zm(n,e){return n*n*n*e}function ka(n,e,t,i,a){return jm(n,e)+Km(n,t)+Jm(n,i)+Zm(n,a)}class dd extends Sn{constructor(e=new Me,t=new Me,i=new Me,a=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new Me){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(ka(e,a.x,s.x,r.x,o.x),ka(e,a.y,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qm extends Sn{constructor(e=new L,t=new L,i=new L,a=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new L){const i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(ka(e,a.x,s.x,r.x,o.x),ka(e,a.y,s.y,r.y,o.y),ka(e,a.z,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ud extends Sn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eg extends Sn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hd extends Sn{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(La(e,a.x,s.x,r.x),La(e,a.y,s.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tg extends Sn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(La(e,a.x,s.x,r.x),La(e,a.y,s.y,r.y),La(e,a.z,s.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pd extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const i=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),o=s-r,l=a[r===0?r:r-1],c=a[r],d=a[r>a.length-2?a.length-1:r+1],u=a[r>a.length-3?a.length-1:r+2];return i.set(uc(o,l.x,c.x,d.x,u.x),uc(o,l.y,c.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new Me().fromArray(a))}return this}}var hc=Object.freeze({__proto__:null,ArcCurve:Xm,CatmullRomCurve3:cd,CubicBezierCurve:dd,CubicBezierCurve3:Qm,EllipseCurve:_o,LineCurve:ud,LineCurve3:eg,QuadraticBezierCurve:hd,QuadraticBezierCurve3:tg,SplineCurve:pd});class ng extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let s=0;for(;s<a.length;){if(a[s]>=i){const r=a[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,s=this.curves;a<s.length;a++){const r=s[a],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new hc[a.type]().fromJSON(a))}return this}}class ig extends ng{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ud(this.currentPoint.clone(),new Me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const s=new hd(this.currentPoint.clone(),new Me(e,t),new Me(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,s,r){const o=new dd(this.currentPoint.clone(),new Me(e,t),new Me(i,a),new Me(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new pd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,a,s,r),this}absarc(e,t,i,a,s,r){return this.absellipse(e,t,i,i,a,s,r),this}ellipse(e,t,i,a,s,r,o,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,a,s,r,o,l),this}absellipse(e,t,i,a,s,r,o,l){const c=new _o(e,t,i,a,s,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wo extends vt{constructor(e=[new Me(0,-.5),new Me(.5,0),new Me(0,.5)],t=12,i=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:a},t=Math.floor(t),a=Nt(a,0,Math.PI*2);const s=[],r=[],o=[],l=[],c=[],d=1/t,u=new L,f=new Me,p=new L,g=new L,v=new L;let m=0,h=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,h=e[_+1].y-e[_].y,p.x=h*1,p.y=-m,p.z=h*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,h=e[_+1].y-e[_].y,p.x=h*1,p.y=-m,p.z=h*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=t;_++){const x=i+_*d*a,b=Math.sin(x),C=Math.cos(x);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*b,u.y=e[S].y,u.z=e[S].x*C,r.push(u.x,u.y,u.z),f.x=_/t,f.y=S/(e.length-1),o.push(f.x,f.y);const M=l[3*S+0]*b,I=l[3*S+1],y=l[3*S+0]*C;c.push(M,I,y)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){const b=x+_*e.length,C=b,S=b+e.length,M=b+e.length+1,I=b+1;s.push(C,S,I),s.push(M,I,S)}this.setIndex(s),this.setAttribute("position",new ft(r,3)),this.setAttribute("uv",new ft(o,2)),this.setAttribute("normal",new ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.points,e.segments,e.phiStart,e.phiLength)}}class Mo extends wo{constructor(e=1,t=1,i=4,a=8){const s=new ig;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),a),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:a}}static fromJSON(e){return new Mo(e.radius,e.length,e.capSegments,e.radialSegments)}}class cn extends vt{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const s=[],r=[],o=[],l=[],c=new L,d=new Me;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=i+u/t*a;c.x=e*Math.cos(p),c.y=e*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(r[f]/e+1)/2,d.y=(r[f+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ge extends vt{constructor(e=1,t=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const d=[],u=[],f=[],p=[];let g=0;const v=[],m=i/2;let h=0;_(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(p,2));function _(){const b=new L,C=new L;let S=0;const M=(t-e)/i;for(let I=0;I<=s;I++){const y=[],T=I/s,U=T*(t-e)+e;for(let H=0;H<=a;H++){const se=H/a,P=se*l+o,F=Math.sin(P),X=Math.cos(P);C.x=U*F,C.y=-T*i+m,C.z=U*X,u.push(C.x,C.y,C.z),b.set(F,M,X).normalize(),f.push(b.x,b.y,b.z),p.push(se,1-T),y.push(g++)}v.push(y)}for(let I=0;I<a;I++)for(let y=0;y<s;y++){const T=v[y][I],U=v[y+1][I],H=v[y+1][I+1],se=v[y][I+1];d.push(T,U,se),d.push(U,H,se),S+=6}c.addGroup(h,S,0),h+=S}function x(b){const C=g,S=new Me,M=new L;let I=0;const y=b===!0?e:t,T=b===!0?1:-1;for(let H=1;H<=a;H++)u.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),g++;const U=g;for(let H=0;H<=a;H++){const P=H/a*l+o,F=Math.cos(P),X=Math.sin(P);M.x=y*X,M.y=m*T,M.z=y*F,u.push(M.x,M.y,M.z),f.push(0,T,0),S.x=F*.5+.5,S.y=X*.5*T+.5,p.push(S.x,S.y),g++}for(let H=0;H<a;H++){const se=C+H,P=U+H;b===!0?d.push(P,P+1,se):d.push(P+1,P,se),I+=3}c.addGroup(h,I,b===!0?1:2),h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ge(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hn extends ge{constructor(e=1,t=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Hn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class So extends vt{constructor(e=.5,t=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],c=[],d=[];let u=e;const f=(t-e)/a,p=new L,g=new Me;for(let v=0;v<=a;v++){for(let m=0;m<=i;m++){const h=s+m/i*r;p.x=u*Math.cos(h),p.y=u*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,d.push(g.x,g.y)}u+=f}for(let v=0;v<a;v++){const m=v*(i+1);for(let h=0;h<i;h++){const _=h+m,x=_,b=_+i+1,C=_+i+2,S=_+1;o.push(x,b,S),o.push(b,C,S)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class at extends vt{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const d=[],u=new L,f=new L,p=[],g=[],v=[],m=[];for(let h=0;h<=i;h++){const _=[],x=h/i;let b=0;h===0&&r===0?b=.5/t:h===i&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const S=C/t;u.x=-e*Math.cos(a+S*s)*Math.sin(r+x*o),u.y=e*Math.cos(r+x*o),u.z=e*Math.sin(a+S*s)*Math.sin(r+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(S+b,1-x),_.push(c++)}d.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const x=d[h][_+1],b=d[h][_],C=d[h+1][_],S=d[h+1][_+1];(h!==0||r>0)&&p.push(x,b,S),(h!==i-1||l<Math.PI)&&p.push(b,C,S)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vn extends vt{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);const r=[],o=[],l=[],c=[],d=new L,u=new L,f=new L;for(let p=0;p<=i;p++)for(let g=0;g<=a;g++){const v=g/a*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(g/a),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=a;g++){const v=(a+1)*p+g-1,m=(a+1)*(p-1)+g-1,h=(a+1)*(p-1)+g,_=(a+1)*p+g;r.push(v,m,_),r.push(m,h,_)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ae extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Se extends ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fs extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class fd extends Fs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Rr=new bt,pc=new L,fc=new L;class md{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(pc),fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fc),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mc=new bt,ya=new L,Pr=new L;class ag extends md{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),i.position.copy(ya),Pr.copy(i.position),Pr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Pr),i.updateMatrixWorld(),a.makeTranslation(-ya.x,-ya.y,-ya.z),mc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc)}}class ni extends Fs{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new ag}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sg extends md{constructor(){super(new td(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mn extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new sg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zs extends Fs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);const ot=60,We=40,Ut=14,Dr=[new L(-16,0,6),new L(0,0,-6),new L(16,0,6)];function rg(){const n=new ua;n.background=new Ve(1711918),n.fog=new Ha(1711918,40,90),n.add(new zs(13691135,.55));const e=[[-18,Ut-.5,8],[-18,Ut-.5,-8],[0,Ut-.5,8],[0,Ut-.5,-8],[18,Ut-.5,8],[18,Ut-.5,-8]];for(const[i,a,s]of e){const r=new ni(15267071,1.2,28);r.position.set(i,a,s),n.add(r)}const t=new Mn(16777215,.5);return t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),n.add(t),{scene:n}}function og(n){lg(n),cg(n),dg(n)}function lg(n){const e=new ae({color:15263976,roughness:.8,metalness:0}),t=new ae({color:14541804,roughness:.85,metalness:0}),i=new ae({color:16119288,roughness:.9,metalness:0});new ae({color:2764605,roughness:.7,metalness:.1});const a=new k(new _t(ot,We),e);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);const s=new ha({color:13421772});for(let h=-ot/2;h<=ot/2;h+=3){const _=new vt().setFromPoints([new L(h,.01,-We/2),new L(h,.01,We/2)]);n.add(new Bn(_,s))}for(let h=-We/2;h<=We/2;h+=3){const _=new vt().setFromPoints([new L(-ot/2,.01,h),new L(ot/2,.01,h)]);n.add(new Bn(_,s))}const r=new k(new _t(ot,We),i);r.rotation.x=Math.PI/2,r.position.y=Ut,n.add(r);const o=[{w:ot,h:Ut,x:0,y:Ut/2,z:-We/2,ry:0},{w:ot,h:Ut,x:0,y:Ut/2,z:We/2,ry:Math.PI},{w:We,h:Ut,x:-ot/2,y:Ut/2,z:0,ry:Math.PI/2},{w:We,h:Ut,x:ot/2,y:Ut/2,z:0,ry:-Math.PI/2}];for(const h of o){const _=new k(new _t(h.w,h.h),t);_.position.set(h.x,h.y,h.z),_.rotation.y=h.ry,n.add(_)}const l=new Se({color:11581640}),c=[{w:ot,x:0,z:-We/2+.05,ry:0},{w:ot,x:0,z:We/2-.05,ry:Math.PI},{w:We,x:-ot/2+.05,z:0,ry:Math.PI/2},{w:We,x:ot/2-.05,z:0,ry:-Math.PI/2}];for(const h of c){const _=new k(new oe(h.w,.5,.1),l);_.position.set(h.x,.25,h.z),_.rotation.y=h.ry,n.add(_)}const d=new Se({color:16777215}),u=new ae({color:15663088,emissive:15663088,emissiveIntensity:.9});for(const[h,,_]of[[-18,0,8],[-18,0,-8],[0,0,8],[0,0,-8],[18,0,8],[18,0,-8]]){const x=new k(new oe(6,.25,.8),d);x.position.set(h,Ut-.12,_),n.add(x);const b=new k(new ge(.1,.1,5.6,16),u);b.rotation.z=Math.PI/2,b.position.set(h,Ut-.3,_),n.add(b)}const f=new Se({color:9083568}),p=new Se({color:5929626}),g=new k(new oe(3.2,7.2,.15),f);g.position.set(0,3.6,We/2-.05),n.add(g);const v=new k(new oe(2.8,6.8,.1),p);v.position.set(0,3.4,We/2-.04),n.add(v);const m=new Se({color:6993128,transparent:!0,opacity:.35});for(const h of[-14,0,14]){const _=new k(new oe(5,4,.15),f);_.position.set(h,8,-We/2+.05),n.add(_);const x=new k(new oe(4.4,3.4,.08),m);x.position.set(h,8,-We/2+.06),n.add(x)}}function cg(n){const e=new ae({color:15791336,roughness:.55,metalness:.05}),t=new ae({color:4871528,roughness:.7,metalness:.05}),i=new ae({color:13687016,roughness:.6,metalness:0}),a=new ae({color:8952234,roughness:.4,metalness:.5}),s=[{x:-16,z:5},{x:0,z:-6},{x:16,z:5}];for(const{x:m,z:h}of s){const _=new k(new oe(7,3,3),t);_.position.set(m,1.5,h),_.castShadow=!0,n.add(_);const x=new k(new oe(7.2,.15,3.2),e);x.position.set(m,3.08,h),x.castShadow=!0,n.add(x);for(const[b,C]of[[-3.2,-1.3],[3.2,-1.3],[-3.2,1.3],[3.2,1.3]]){const S=new k(new oe(.2,3,.2),a);S.position.set(m+b,1.5,h+C),n.add(S)}for(let b=0;b<3;b++){const C=new k(new oe(2,.6,.05),i);C.position.set(m-2.2+b*2.2,1.8,h+1.52),n.add(C)}if(m===0){const b=new ae({color:13426158,roughness:.3,metalness:.3}),C=new k(new oe(1.2,.2,.9),b);C.position.set(2.5,3.15,h),n.add(C);const S=new k(new ge(.05,.05,.6,16),a);S.position.set(2.5,3.55,h-.3),n.add(S);const M=new k(new at(.09,16,14),a);M.position.set(2.5,3.85,h),n.add(M)}}for(let m=-22;m<=22;m+=11)for(let h=0;h<3;h++){const _=new k(new oe(9,.12,1.2),i);_.position.set(m,5+h*2.2,-We/2+.8),n.add(_);for(const x of[-4,4]){const b=new k(new oe(.1,.5,1),a);b.position.set(m+x,4.75+h*2.2,-We/2+.8),n.add(b)}}const r=new k(new oe(3,3,22),t);r.position.set(-ot/2+2,1.5,0),r.castShadow=!0,n.add(r);const o=new k(new oe(3.2,.15,22.2),e);o.position.set(-ot/2+2,3.08,0),n.add(o);const l=new k(new oe(3,3,22),t);l.position.set(ot/2-2,1.5,0),l.castShadow=!0,n.add(l);const c=new k(new oe(3.2,.15,22.2),e);c.position.set(ot/2-2,3.08,0),n.add(c);const d=new ae({color:6978186,roughness:.6,metalness:.1}),u=new ae({color:8965341,transparent:!0,opacity:.4,roughness:.1,metalness:0}),f=new k(new oe(6,5,2.5),d);f.position.set(-20,4.5,-We/2+1.5),n.add(f);const p=new k(new oe(5,3,.08),u);p.position.set(-20,4.8,-We/2+2.8),n.add(p);const g=new k(new oe(6.2,3,2.8),t);g.position.set(-20,1.5,-We/2+1.6),n.add(g);const v=new k(new oe(6.2,.15,2.8),e);v.position.set(-20,3.08,-We/2+1.6),n.add(v)}function dg(n){const e=new ae({color:11197934,transparent:!0,opacity:.7,roughness:.05,metalness:0}),t=new ae({color:4033344,transparent:!0,opacity:.85,roughness:.15,metalness:0}),i=new ae({color:8010768,transparent:!0,opacity:.85,roughness:.2,metalness:0}),a=new ae({color:12597547,transparent:!0,opacity:.85,roughness:.15,metalness:0}),s=new ae({color:16777215,roughness:.7,metalness:0}),r=new ae({color:8952234,roughness:.35,metalness:.6});new ae({color:16774604,roughness:.8});const o=[{x:-24,y:5.3,z:-We/2+.7,mat:t,r:.22,h:.7},{x:-22,y:5.3,z:-We/2+.7,mat:i,r:.18,h:.9},{x:-20,y:5.3,z:-We/2+.7,mat:a,r:.2,h:.75},{x:-18,y:5.3,z:-We/2+.7,mat:e,r:.16,h:.65},{x:-13,y:5.3,z:-We/2+.7,mat:i,r:.2,h:.85},{x:-11,y:5.3,z:-We/2+.7,mat:t,r:.25,h:.6},{x:-2,y:5.3,z:-We/2+.7,mat:a,r:.18,h:.8},{x:0,y:5.3,z:-We/2+.7,mat:e,r:.22,h:.7},{x:2,y:5.3,z:-We/2+.7,mat:t,r:.2,h:.9},{x:10,y:5.3,z:-We/2+.7,mat:i,r:.19,h:.7},{x:12,y:5.3,z:-We/2+.7,mat:a,r:.21,h:.8},{x:22,y:5.3,z:-We/2+.7,mat:e,r:.23,h:.65},{x:24,y:5.3,z:-We/2+.7,mat:t,r:.17,h:.9},{x:-23,y:7.5,z:-We/2+.7,mat:a,r:.2,h:.8},{x:-21,y:7.5,z:-We/2+.7,mat:e,r:.18,h:.7},{x:-1,y:7.5,z:-We/2+.7,mat:i,r:.22,h:.85},{x:1,y:7.5,z:-We/2+.7,mat:t,r:.2,h:.7},{x:21,y:7.5,z:-We/2+.7,mat:a,r:.19,h:.75}];for(const S of o){const M=new k(new ge(S.r,S.r*.9,S.h,20),S.mat);M.position.set(S.x,S.y+S.h/2,S.z),n.add(M);const I=new k(new ge(S.r*.7,S.r*.7,.12,20),s);I.position.set(S.x,S.y+S.h+.06,S.z),n.add(I)}ug(n,-ot/2+2.5,3.2,-6,r,s),hg(n,-ot/2+2.5,3.2,4,r,s),pg(n,ot/2-2.5,3.2,-5,r);for(let S=0;S<4;S++){const M=S%2===0?i:e,I=new k(new ge(.22,.2,.5,20),M);I.position.set(ot/2-2.5+(S-1.5)*.7,3.5,5+S%2*.6),n.add(I)}const l=new Se({color:16769154}),c=new k(new oe(3.5,5,.06),l);c.position.set(ot/2-.06,6,10),c.rotation.y=-Math.PI/2,n.add(c);const d=Pn(`⚠ KESELAMATAN
LABORATORIUM`,15022389);d.scale.set(4,1.6,1),d.position.set(ot/2-.3,6.5,10),n.add(d);const u=new k(new ge(.06,.06,1.5,16),r);u.position.set(-ot/2+.2,9,14),u.rotation.z=Math.PI/2,n.add(u);for(const S of[-.5,0,.5]){const M=new k(new vn(.14,.03,12,24,Math.PI),r);M.position.set(-ot/2+.25,8.6,14+S),M.rotation.y=Math.PI/2,n.add(M)}const f=new Se({color:16448250}),p=new k(new oe(.05,2.5,1.5),f);p.position.set(-ot/2+.28,7.8,14),n.add(p);const g=new Se({color:15158332}),v=new Se({color:15965202});for(const[S,M,I]of[[-8,14,g],[8,14,v]]){const y=new k(new ge(.45,.38,1,20),I);y.position.set(S,.5,M),n.add(y)}const m=new Se({color:12597547}),h=new k(new ge(.2,.22,1.1,20),m);h.position.set(ot/2-.8,1.8,-14),n.add(h);const _=new k(new ge(.1,.2,.3,20),r);_.position.set(ot/2-.8,2.5,-14),n.add(_);const x=new Se({color:16777215}),b=new k(new ge(.7,.7,.1,24),x);b.rotation.x=Math.PI/2,b.position.set(8,10.5,-We/2+.1),n.add(b);const C=new k(new vn(.7,.06,12,40),r);C.rotation.x=Math.PI/2,C.position.set(8,10.5,-We/2+.12),n.add(C)}function ug(n,e,t,i,a,s){const r=new k(new ge(.65,.7,.7,24),s);r.position.set(e,t+.35,i),n.add(r);const o=new k(new ge(.66,.66,.12,24),a);o.position.set(e,t+.76,i),n.add(o);const l=new k(new at(.1,16,14),a);l.position.set(e,t+.88,i),n.add(l)}function hg(n,e,t,i,a,s){const r=new k(new oe(.7,.12,.55),a);r.position.set(e,t+.06,i),n.add(r);const o=new k(new oe(.12,1.4,.12),a);o.position.set(e,t+.76,i-.1),n.add(o);const l=new k(new ge(.1,.12,.5,16),a);l.position.set(e,t+1.7,i-.15),l.rotation.z=.4,n.add(l);const c=new k(new ge(.06,.08,.35,16),s);c.position.set(e+.05,t+.75,i+.05),n.add(c)}function pg(n,e,t,i,a){const s=new ae({color:2899536,roughness:.6,metalness:.15}),r=new k(new oe(1,.18,1),s);r.position.set(e,t+.09,i),n.add(r);const o=new k(new ge(.38,.38,.04,20),a);o.position.set(e,t+.2,i),n.add(o);const l=new ae({color:16737792,emissive:16737792,emissiveIntensity:.6,transparent:!0,opacity:.7}),c=new k(new cn(.3,20),l);c.rotation.x=-Math.PI/2,c.position.set(e,t+.22,i),n.add(c);const d=new Se({color:11197934,transparent:!0,opacity:.8}),u=new k(new at(.3,20,16),d);u.position.set(e,t+.55,i),n.add(u);const f=new k(new ge(.08,.12,.35,20),d);f.position.set(e,t+.9,i),n.add(f)}function vd(n){const e=[];{const t=Dr[0],i=new Yt;i.position.copy(t);const a=new Se({color:11197934,transparent:!0,opacity:.75}),s=new Se({color:7027216,transparent:!0,opacity:.9}),r=new Se({color:8952234}),o=new Se({color:16448250}),l=new Se({color:15791336}),c=new k(new oe(6.8,.12,2.8),l);c.position.set(0,3.14,0),i.add(c);const d=new Se({color:14540253}),u=new k(new oe(2,.18,.45),d);u.position.set(-1.5,3.3,.2),i.add(u);for(let y=0;y<5;y++){const T=new k(new ge(.07,.07,.55,16),s);T.position.set(-2.2+y*.42,3.62,.2),i.add(T)}const f=new k(new at(.38,20,16),a);f.position.set(.8,3.62,-.3),i.add(f);const p=new k(new ge(.1,.15,.45,20),a);p.position.set(.8,4.05,-.3),i.add(p);const g=new k(new at(.32,18,16),s);g.position.set(.8,3.58,-.3),i.add(g);const v=new k(new ge(.04,.04,1,16),r);v.position.set(.8,4.2,-.3),i.add(v);const m=new k(new oe(.5,.35,.15),o);m.position.set(.8,4.85,-.3),i.add(m);const h=new Se({color:16775399}),_=new k(new oe(.7,.9,.05),h);_.position.set(2.3,3.85,-.5),_.rotation.y=-.3,i.add(_);const x=new Se({color:8952234}),b=new k(new oe(.35,.12,.06),x);b.position.set(2.3,4.34,-.46),b.rotation.y=-.3,i.add(b);const C=Pn("❓ Fenomena 1 — Kualitas Air",54527);C.position.set(0,3.2,0),i.add(C);const S=Pn("✅ Selesai",3066993);S.position.set(0,4.2,0),S.visible=!1,i.add(S);const M=new ae({color:54527,emissive:54527,emissiveIntensity:.5,transparent:!0,opacity:.25,side:At}),I=new k(new cn(3.2,32),M);I.rotation.x=-Math.PI/2,I.position.y=.02,i.add(I),n.add(i),e.push({group:i,glowMat:M,idx:0,pos:t,done:!1,doneSprite:S,_probe:v,_meter:m})}{const t=Dr[1],i=new Yt;i.position.copy(t);const a=new Se({color:11197934,transparent:!0,opacity:.7}),s=new Se({color:5910024,transparent:!0,opacity:.9});new Se({color:1735226,transparent:!0,opacity:.85});const r=new Se({color:8952234}),o=new Se({color:16448250});new Se({color:15965202});const l=new k(new oe(6.8,.12,2.8),new Se({color:15791336}));l.position.set(0,3.14,0),i.add(l);const c=new k(new oe(.22,.9,.14),o);c.position.set(-2,3.75,0),i.add(c);const d=new k(new oe(.16,.3,.05),new Se({color:1714714}));d.position.set(-2,3.88,.1),i.add(d);const u=new k(new ge(.03,.03,.5,16),r);u.position.set(-2,3.05,0),i.add(u);const f=new k(new ge(.42,.38,.8,20),a);f.position.set(-.5,3.7,.2),i.add(f);const p=new k(new ge(.38,.34,.6,20),s);p.position.set(-.5,3.6,.2),i.add(p),new Se({color:2899536});const g=new k(new ge(.05,.05,1.4,14),r);g.position.set(1.2,3.9,-.7),i.add(g);const v=new k(new oe(1.4,1,.05),new Se({color:16775399}));v.position.set(1.2,4.85,-.7),i.add(v);const m=Pn("K⁺  Ca²⁺  Cl⁻",1735226);m.scale.set(2.8,.75,1),m.position.set(1.2,4.92,-.6),i.add(m);const h=new k(new oe(.55,.4,.22),o);h.position.set(2.2,3.4,0),i.add(h);const _=new k(new oe(.38,.22,.06),new Se({color:662026}));_.position.set(2.2,3.44,.14),i.add(_);for(const[M,I]of[[2.8,s],[3.3,a]]){const y=new k(new ge(.18,.16,.7,20),I);y.position.set(M,3.55,-.5),i.add(y)}const x=Pn("❓ Fenomena 2 — Komposisi TDS",16750848);x.position.set(0,3.2,0),i.add(x);const b=Pn("✅ Selesai",3066993);b.position.set(0,4.2,0),b.visible=!1,i.add(b);const C=new ae({color:16750848,emissive:16750848,emissiveIntensity:.5,transparent:!0,opacity:.25,side:At}),S=new k(new cn(3.2,32),C);S.rotation.x=-Math.PI/2,S.position.y=.02,i.add(S),n.add(i),e.push({group:i,glowMat:C,idx:1,pos:t,done:!1,doneSprite:b,_beaker:f,_liq:p})}{const t=Dr[2],i=new Yt;i.position.copy(t);const a=new Se({color:8018990}),s=new Se({color:5025616}),r=new Se({color:11059264}),o=new Se({color:11887901}),l=new Se({color:11197934,transparent:!0,opacity:.7}),c=new Se({color:16448250}),d=new Se({color:8952234}),u=new k(new oe(6.8,.12,2.8),new Se({color:15791336}));u.position.set(0,3.14,0),i.add(u);const f=[{x:-2,mat:s,height:.9,label:`Thn 1
62%`,lColor:5025616},{x:0,mat:r,height:1.1,label:`Thn 2
78%`,lColor:11059264},{x:2,mat:o,height:.35,label:`Thn 3
34%`,lColor:15158332}];for(const U of f){const H=new k(new oe(1.2,.2,.9),a);H.position.set(U.x,3.35,.2),i.add(H);for(let P=-1;P<=1;P+=2){const F=new k(new ge(.04,.055,U.height,5),U.mat),X=U.x+P*.22;F.position.set(X,3.45+U.height/2,.2),i.add(F);const ne=new k(new at(U.height>.8?.14:.06,12,8),U.mat);ne.position.set(X+(U.mat===o?.1:0),3.45+U.height+.08,.2),i.add(ne)}const se=Pn(U.label,U.lColor);se.scale.set(2,.75,1),se.position.set(U.x,3.45+U.height+.6,.2),i.add(se)}const p=new k(new oe(.22,.75,.14),c);p.position.set(-2.9,3.65,-.4),i.add(p);const g=new k(new ge(.025,.025,.55,16),d);g.position.set(-2.9,3.12,-.4),i.add(g);const v=new k(new oe(.15,.22,.05),new Se({color:662026}));v.position.set(-2.9,3.72,-.33),i.add(v);const m=new Se({color:8018990,transparent:!0,opacity:.9}),h=new k(new ge(.28,.25,.6,20),l);h.position.set(2.8,3.55,-.4),i.add(h);const _=new k(new ge(.24,.22,.38,20),m);_.position.set(2.8,3.44,-.4),i.add(_);const x=new Se({color:16775399}),b=new k(new oe(.8,1,.05),x);b.position.set(3.2,3.95,-.6),b.rotation.y=-.25,i.add(b);const C=[5025616,11059264,15158332],S=[.22,.3,.1];for(let U=0;U<3;U++){const H=new Se({color:C[U]}),se=new k(new oe(.12,S[U],.04),H);se.position.set(3.05+U*.2,3.5+S[U]/2,-.57),se.rotation.y=-.25,i.add(se)}const M=Pn("❓ Fenomena 3 — Panen Padi",4521864);M.position.set(0,3.2,0),i.add(M);const I=Pn("✅ Selesai",3066993);I.position.set(0,4.4,0),I.visible=!1,i.add(I);const y=new ae({color:4521864,emissive:4521864,emissiveIntensity:.5,transparent:!0,opacity:.25,side:At}),T=new k(new cn(3.2,32),y);T.rotation.x=-Math.PI/2,T.position.y=.02,i.add(T),n.add(i),e.push({group:i,glowMat:y,idx:2,pos:t,done:!1,doneSprite:I,_stems:i.children})}return e}function Pn(n,e){const t=document.createElement("canvas");t.width=320,t.height=72;const i=t.getContext("2d");i.fillStyle="rgba(10,20,40,0.85)",i.beginPath(),i.roundRect(4,8,312,56,16),i.fill();const a=e>>16&255,s=e>>8&255,r=e&255;i.strokeStyle=`rgb(${a},${s},${r})`,i.lineWidth=3,i.beginPath(),i.roundRect(4,8,312,56,16),i.stroke(),i.fillStyle=`rgb(${a},${s},${r})`,i.font="bold 24px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,160,36);const o=new Os(t),l=new si({map:o,transparent:!0}),c=new Li(l);return c.scale.set(5,1.1,1),c}function fg(n,e){for(const t of n){if(t.done){t.glowMat.emissiveIntensity=.15+Math.sin(e*1.2)*.05,t.glowMat.opacity=.12;continue}const i=.5+.5*Math.sin(e*2.2+t.idx*1.3);if(t.glowMat.emissiveIntensity=.3+i*.5,t.glowMat.opacity=.15+i*.15,t.idx===0&&(t._probe&&(t._probe.position.y=4.2+Math.sin(e*1.4)*.12),t._meter&&(t._meter.position.y=4.85+Math.sin(e*1.4)*.12)),t.idx===1&&t._liq){const a=1+Math.sin(e*2.5)*.04;t._liq.scale.set(1,a,1)}t.idx===2&&(t.group.rotation.z=Math.sin(e*.6)*.008),t.group.position.y=Math.sin(e*.5+t.idx)*.04}}const St=70,Xt=50,rt=18;new L(-18,0,10),new L(0,0,-8),new L(18,0,10);function mg(){const n=new ua;n.background=new Ve(1708552),n.fog=new Ha(1708552,35,85),n.add(new zs(16771248,.4));const e=[[-22,rt-1,10],[-22,rt-1,-10],[0,rt-1,10],[0,rt-1,-10],[22,rt-1,10],[22,rt-1,-10]];for(const[s,r,o]of e){const l=new ni(16765056,1.1,30);l.position.set(s,r,o),n.add(l)}const t=new ni(16737792,1.5,18);t.position.set(-18,6,8),n.add(t);const i=new ni(8956671,.8,14);i.position.set(0,6,-6),n.add(i);const a=new Mn(16773324,.4);return a.position.set(10,20,10),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),n.add(a),{scene:n}}function gg(n){vg(n),bg(n),Mg(n)}function vg(n){const e=new ae({color:5919299,roughness:.9,metalness:0}),t=new ae({color:4866096,roughness:.85,metalness:0}),i=new ae({color:3024410,roughness:.9,metalness:0}),a=new k(new _t(St,Xt),e);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a);const s=new ha({color:3813920});for(let g=-St/2;g<=St/2;g+=5){const v=new vt().setFromPoints([new L(g,.01,-Xt/2),new L(g,.01,Xt/2)]);n.add(new Bn(v,s))}for(let g=-Xt/2;g<=Xt/2;g+=5){const v=new vt().setFromPoints([new L(-St/2,.01,g),new L(St/2,.01,g)]);n.add(new Bn(v,s))}const r=new k(new _t(St,Xt),i);r.rotation.x=Math.PI/2,r.position.y=rt,n.add(r);const o=new Se({color:1971728});for(let g=-St/2;g<=St/2;g+=4){const v=new k(new oe(.4,.15,Xt),o);v.position.set(g,rt,0),n.add(v)}const l=.6,c=[{pos:[0,rt/2,-Xt/2],size:[St,rt,l]},{pos:[0,rt/2,Xt/2],size:[St,rt,l]},{pos:[-St/2,rt/2,0],size:[l,rt,Xt]},{pos:[St/2,rt/2,0],size:[l,rt,Xt]}];for(const g of c){const v=new k(new oe(...g.size),t);v.position.set(...g.pos),n.add(v)}const d=new Se({color:3813408}),u=[[-St/2+1,rt/2,-Xt/2+1],[St/2-1,rt/2,-Xt/2+1],[-St/2+1,rt/2,Xt/2-1],[St/2-1,rt/2,Xt/2-1],[-St/2+1,rt/2,0],[St/2-1,rt/2,0]];for(const[g,v,m]of u){const h=new k(new oe(1.2,rt,1.2),d);h.position.set(g,v,m),n.add(h)}const f=new Se({color:8947848}),p=new ae({color:16774592,emissive:16765024,emissiveIntensity:1.2});for(const[g,,v]of xg){const m=new k(new oe(1.5,.4,.6),f);m.position.set(g,rt-.8,v),n.add(m);const h=new k(new at(.25,16,10),p);h.position.set(g,rt-1.1,v),n.add(h)}}const xg=[[-22,rt-1,10],[-22,rt-1,-10],[0,rt-1,10],[0,rt-1,-10],[22,rt-1,10],[22,rt-1,-10]];function bg(n){_g(n,-18,0,6),yg(n,0,0,-12),wg(n,18,0,6)}function _g(n,e,t,i){const a=new Yt;a.position.set(e,t,i);const s=new Se({color:3944480}),r=new k(new oe(5,.4,5),s);r.position.y=.2,a.add(r);const o=new ae({color:7372944,metalness:.7,roughness:.3}),l=new k(new ge(2,2,5.5,24),o);l.position.y=3.15,a.add(l);const c=new k(new at(2,24,14,0,Math.PI*2,0,Math.PI/2),o);c.position.y=5.9,a.add(c);const d=new k(new at(2,24,14,0,Math.PI*2,Math.PI/2,Math.PI/2),o);d.position.y=.4,a.add(d);const u=new Se({color:9474208});for(let C=1.5;C<=5.5;C+=1.5){const S=new k(new vn(2.06,.09,10,40),u);S.rotation.x=Math.PI/2,S.position.y=C+.5,a.add(S)}const f=new ae({color:6719658,metalness:.6,roughness:.4}),p=new k(new ge(.12,.12,2,16),f);p.position.set(.8,7.2,0),a.add(p);const g=new k(new ge(.15,.15,1.8,16),f);g.rotation.z=Math.PI/2,g.position.set(-2.8,1.2,0),a.add(g);const v=new k(new at(.18,16,14),f);v.position.set(-3.7,1.2,0),a.add(v);const m=new k(new ge(.15,.15,1.2,16),f);m.position.set(-3.7,.6,0),a.add(m);const h=new ae({color:13378082,metalness:.5,roughness:.5}),_=new k(new ge(.22,.22,.5,16),h);_.rotation.z=Math.PI/2,_.position.set(-2.85,2.5,0),a.add(_);const x=new k(new ge(.1,.1,2.5,16),f);x.position.set(-.5,8,0),a.add(x);const b=new ae({color:8965375,transparent:!0,opacity:.35,roughness:.2,metalness:0});for(let C=0;C<5;C++){const S=new k(new at(.12+C*.04,12,10),b);S.position.set(-.5,8.8+C*.28,0),S.userData.bubbleIndex=C,a.add(S)}return Eo(a,`FERMENTOR
DRUM`,0,9.5,0,16752704),n.add(a),a}function yg(n,e,t,i){const a=new Yt;a.position.set(e,t,i);const s=new ae({color:11189196,metalness:.8,roughness:.25}),r=new ae({color:5596791,metalness:.7,roughness:.35}),o=new ae({color:8952234,metalness:.6,roughness:.4}),l=new k(new oe(4,.4,4),r);l.position.y=.2,a.add(l);const c=new k(new ge(.8,1,8,24),s);c.position.y=4.4,a.add(c);for(let M=1.5;M<=7.5;M+=1.2){const I=new k(new ge(.95,.95,.12,24),r);I.position.y=M,a.add(I)}const d=new k(new ge(.7,.7,1.5,20),r);d.position.y=9.2,a.add(d);const u=new ae({color:8956620,metalness:.8,roughness:.2});for(let M=0;M<4;M++){const I=new k(new vn(.5,.06,12,36),u);I.rotation.x=Math.PI/2,I.position.y=9.1+M*.28,a.add(I)}const f=new k(new at(.7,18,10,0,Math.PI*2,0,Math.PI/2),r);f.position.y=10.2,a.add(f);const p=new k(new ge(.12,.12,2.5,16),o);p.rotation.z=Math.PI/2,p.position.set(-1.85,6.5,0),a.add(p);const g=new k(new ge(.1,.1,1.5,16),o);g.position.set(.5,11,0),a.add(g);const v=new k(new ge(.13,.13,2,16),o);v.rotation.z=Math.PI/2,v.position.set(1.8,9.6,0),a.add(v);const m=new k(new ge(.16,.16,1.4,16),o);m.position.set(.8,.3,0),a.add(m);const h=new ae({color:8016432,metalness:.3,roughness:.7}),_=new k(new ge(.65,.6,1.2,20),h);_.position.set(.8,-.2,0),a.add(_);const x=new k(new ge(.66,.66,.08,20),r);x.position.set(.8,.42,0),a.add(x);const b=new ae({color:11197951,transparent:!0,opacity:.5}),C=new k(new ge(.07,.07,4,16),b);C.position.set(-.92,3,.7),a.add(C);const S=new k(new ge(.06,.06,2.5,16),new ae({color:6332608,transparent:!0,opacity:.7}));return S.position.set(-.92,2.25,.7),a.add(S),Eo(a,`DESTILATOR
KOLOM`,0,11.5,0,8441087),n.add(a),a}function wg(n,e,t,i){const a=new Yt;a.position.set(e,t,i);const s=new ae({color:4473924,metalness:.6,roughness:.5}),r=new Se({color:9127187}),o=new ae({color:16737792,emissive:16724736,emissiveIntensity:.9}),l=new ae({color:7368816,metalness:.8,roughness:.3}),c=new k(new oe(3.5,2,3),r);c.position.y=1,a.add(c);const d=new k(new oe(3.5,.15,3),s);d.position.y=2.08,a.add(d);for(let M=-1.4;M<=1.4;M+=.5){const I=new k(new oe(.1,.16,2.5),new Se({color:2236962}));I.position.set(M,2.08,0),a.add(I)}const u=new k(new Hn(.5,1.2,14),o);u.position.y=2.9,a.add(u);const f=new k(new Hn(.3,.9,14),o.clone());f.position.set(.6,2.85,.4),a.add(f);const p=new k(new ge(1.2,1,1.4,24),l);p.position.y=3.75,a.add(p);const g=new ae({color:8145424,transparent:!0,opacity:.85}),v=new k(new ge(1.18,1.18,.8,24),g);v.position.y=3.85,a.add(v);const m=new ae({color:14540253,transparent:!0,opacity:.25});for(let M=0;M<3;M++){const I=new k(new at(.25+M*.12,12,10),m);I.position.set((M-1)*.4,5+M*.5,(M-1)*.3),I.userData.steamIndex=M,a.add(I)}const h=new ae({color:13421772,metalness:.5}),_=new k(new ge(.22,.22,.08,20),h);_.rotation.x=Math.PI/2,_.position.set(1.5,3.2,-1.4),a.add(_);const x=new k(new cn(.2,12),new ae({color:16777215}));x.rotation.x=-Math.PI/2,x.position.set(1.5,3.21,-1.62),a.add(x);const b=new Se({color:3355443}),C=new k(new ge(.25,.3,3,20),b);C.position.set(-1.2,3.5,-1.2),a.add(C);const S=new ae({color:8947848,transparent:!0,opacity:.2});for(let M=0;M<4;M++){const I=new k(new at(.18+M*.1,12,10),S);I.position.set(-1.2,5+M*.6,-1.2),I.userData.smokeIndex=M,a.add(I)}return Eo(a,`KOMPOR
PEMANAS`,0,7.5,0,16746564),n.add(a),a}function Mg(n){const e=new ae({color:5910544,metalness:.2,roughness:.8}),t=new ae({color:8947848,metalness:.6,roughness:.4}),i=[[-28,0,-16],[-28,0,-12],[-28,0,-8],[-24,0,-16],[-24,0,-12],[-24,0,-8]];for(const[d,,u]of i){const f=new k(new ge(.7,.65,1.5,20),e);f.position.set(d,.75,u),n.add(f);const p=new k(new vn(.72,.05,10,28),t);p.rotation.x=Math.PI/2,p.position.set(d,1.2,u),n.add(p);const g=p.clone();g.position.set(d,.4,u),n.add(g)}Ss(n,`MOLASSES
STORAGE`,-26,3.2,-12,16755234,1.8);const a=new Se({color:5275840}),s=[[28,0,-18],[28,0,-15],[28,0,-12]];for(const[d,,u]of s){const f=new k(new oe(.8,.5,1.2),a);f.position.set(d,.25,u),n.add(f);const p=new k(new oe(.8,.5,1.2),a);p.position.set(d+.9,.25,u),n.add(p)}Ss(n,"NPK / UREA",29,2.8,-15,8956671,1.6);const r=new ae({color:13412928,metalness:.5});for(let d=0;d<3;d++){const u=new k(new ge(.3,.3,.9,20),r);u.position.set(28,.45,-6+d*1.2),n.add(u)}Ss(n,`RAGI
(YEAST)`,29,2.4,-5,16768384,1.5),Ur(n,-St/2+.8,5,-10,`⚠️ BAHAYA
GAS BERTEKANAN`),Ur(n,-St/2+.8,5,10,`🔥 AREA
PANAS`),Ur(n,St/2-.8,5,-10,`☣️ LIMBAH
VINASSE`),Ir(n,-18,.05,5,0),Ir(n,-9,.05,3,-Math.PI/4),Ir(n,9,.05,3,Math.PI/4),Sg(n);const o=new ae({color:5583633}),l=new k(new oe(2.5,.15,2.5),o);l.position.set(0,.08,-12),n.add(l);const c=new k(new oe(2.3,.08,2.3),new ae({color:3807232,transparent:!0,opacity:.9}));c.position.set(0,.12,-12),n.add(c)}function Sg(n){const e=new ae({color:10066346,metalness:.6,roughness:.4}),t=new k(new ge(.14,.14,22,16),e);t.rotation.z=Math.PI/2,t.position.set(-9,11,0),n.add(t);const i=new k(new ge(.14,.14,5,16),e);i.position.set(0,8.5,-12),n.add(i);const a=new k(new ge(.14,.14,20,16),e);a.rotation.z=Math.PI/2,a.position.set(9,11,0),n.add(a);for(const[s,r]of[[-18,6],[0,-12],[18,6]]){const o=new k(new ge(.14,.14,3,16),e);o.position.set(s,9.5,r),n.add(o)}}function Ir(n,e,t,i,a){const s=new Se({color:16755200}),r=new k(new oe(.3,.05,5),s);r.position.set(e,t,i),r.rotation.y=a,n.add(r);const o=new k(new Hn(.5,.9,4),s);o.rotation.x=Math.PI/2,o.rotation.z=a,o.position.set(e+Math.sin(a)*3,t,i+Math.cos(a)*-3),n.add(o)}function Ur(n,e,t,i,a){const s=new Se({color:16763904}),r=new k(new oe(1.8,1.2,.06),s);r.position.set(e,t,i),e<0?r.rotation.y=Math.PI/2:r.rotation.y=-Math.PI/2,n.add(r),Ss(n,a,e,t,i,2236962,1.2,r.rotation.y)}function Eo(n,e,t,i,a,s=16777215){const r=e.split(`
`),o=document.createElement("canvas");o.width=256,o.height=64*r.length;const l=o.getContext("2d");l.fillStyle="rgba(0,0,0,0)",l.fillRect(0,0,o.width,o.height);const c="#"+s.toString(16).padStart(6,"0");l.fillStyle=c,l.font="bold 28px sans-serif",l.textAlign="center",l.textBaseline="middle",r.forEach((p,g)=>{l.fillText(p,128,32+g*64)});const d=new Os(o),u=new si({map:d,depthTest:!1}),f=new Li(u);f.scale.set(3.5,1*r.length,1),f.position.set(t,i,a),n.add(f)}function Ss(n,e,t,i,a,s=16777215,r=2,o=0){const l=e.split(`
`),c=document.createElement("canvas");c.width=256,c.height=64*l.length;const d=c.getContext("2d");d.fillStyle="rgba(0,0,0,0)",d.fillRect(0,0,c.width,c.height);const u="#"+s.toString(16).padStart(6,"0");d.fillStyle=u,d.font="bold 28px sans-serif",d.textAlign="center",d.textBaseline="middle",l.forEach((v,m)=>d.fillText(v,128,32+m*64));const f=new Os(c),p=new si({map:f,depthTest:!1}),g=new Li(p);g.scale.set(r*l.length*.7+1,r*.7*l.length*.5+.5,1),g.position.set(t,i,a),n.add(g)}const xd=60,bd=50,_n=new L(0,0,-10);function Eg(){const n=new ua;n.background=new Ve(8900331),n.fog=new Ba(11589872,.008),n.add(new fd(10409208,8034896,1.1));const e=new Mn(16774604,2.4);e.position.set(25,40,20),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.near=.5,e.shadow.camera.far=140,e.shadow.camera.left=-44,e.shadow.camera.right=44,e.shadow.camera.top=44,e.shadow.camera.bottom=-44,n.add(e);const t=new Mn(12114175,.6);t.position.set(-20,18,-15),n.add(t);const i=new ni(16769168,.8,35);i.position.set(0,5,0),n.add(i);const a=new ni(16772761,1,18);return a.position.set(_n.x,8,_n.z),n.add(a),{scene:n}}function Tg(n){Ag(n),Lg(n),kg(n),Cg(n),Rg(n),Pg(n),Ig(n)}function Ag(n){const e=new Se({color:1849872});new Se({color:2760202});const t=new k(new _t(xd*2,bd*2),e);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const i=new Se({color:4864032}),a=new k(new _t(3,22),i);a.rotation.x=-Math.PI/2,a.position.set(0,.01,0),n.add(a)}function Lg(n){const e=new Se({color:8017200}),t=new ha({color:4874304}),i=xd/2,a=bd/2,s=[[-i,-a],[i,-a],[i,a],[-i,a],[-i,-a]],r=s.map(([l,c])=>new L(l,1.2,c)),o=new vt().setFromPoints(r);n.add(new Bn(o,t));for(let l=0;l<4;l++){const[c,d]=s[l],[u,f]=s[l+1],p=Math.ceil(Math.sqrt((u-c)**2+(f-d)**2)/8);for(let g=0;g<=p;g++){const v=g/p,m=new k(new ge(.1,.1,2.4,5),e);m.position.set(c+(u-c)*v,1.2,d+(f-d)*v),n.add(m)}}}function kg(n){const e=new Se({color:3815472}),t=new Se({color:2762776}),i=new Se({color:1574912,transparent:!0,opacity:.92}),a=new Se({color:667664,transparent:!0,opacity:.85}),s=.6,r=22,o=16,l=1.5,c=new k(new oe(r+s*2,l,s),e);c.position.set(0,l/2,-8),n.add(c);const d=c.clone();d.position.set(0,l/2,o/2),n.add(d);const u=new k(new oe(s,l,o),e);u.position.set(r/2,l/2,0),n.add(u);const f=u.clone();f.position.set(-r/2,l/2,0),n.add(f);const p=new k(new _t(r,o),t);p.rotation.x=-Math.PI/2,p.position.y=.01,n.add(p);const g=new k(new _t(r-s*2,o-s*2),i);g.rotation.x=-Math.PI/2,g.position.y=.8,n.add(g);const v=new k(new oe(s,l,o),e);v.position.set(4,l/2,0),n.add(v);const m=new k(new _t(r/2-4-s*1.5,o-s*2),a);m.rotation.x=-Math.PI/2,m.position.set(r/2-(r/4-2+s*.5)-1.5,.8,0),n.add(m),_d(n,`REAKTOR
BIOREMEDIASI`,0,2.5,-o/2-1.2,4259712)}function Cg(n){const e=new Se({color:5271648}),t=new Se({color:3162160}),i=new k(new ge(.22,.22,14,20),e);i.rotation.x=Math.PI/2,i.position.set(-1.2,1.8,-3),n.add(i);const a=new k(new oe(.5,.5,.5),e);a.position.set(-1.2,1.8,-8),n.add(a);const s=new k(new ge(.22,.22,2,20),e);s.position.set(-1.2,.8,-8.2),n.add(s);for(const r of[-2,-5,-8]){const o=new k(new oe(.3,.6,.15),t);o.position.set(-.7,2.1,r),n.add(o)}}function Rg(n){const e=new Se({color:9056272}),t=new Se({color:13388320}),i=new Se({color:3160112}),a=_n.x,s=_n.z,r=new k(new ge(.15,.2,3.5,16),i);r.position.set(a,1.75,s),n.add(r);const o=new k(new oe(1,.8,1.2),e);o.position.set(a,3.5,s),n.add(o);const l=new k(new vn(.55,.1,12,32),t);l.position.set(a,3.5,s-.7),l.rotation.x=Math.PI/2,n.add(l);for(let c=0;c<4;c++){const d=new k(new ge(.05,.05,1,14),t);d.rotation.z=c/4*Math.PI,d.position.set(a,3.5,s-.7),n.add(d)}_d(n,`KRAN
VINASSE`,a,5.5,s,16752736)}function Pg(n){const e=new Se({color:1728544}),t=new Se({color:2785344,transparent:!0,opacity:.8}),i=[[-7,-4],[-8,0],[-7,3],[-9,-2]];for(const[r,o]of i){const l=new k(new _t(2+Math.random()*1.5,1.2+Math.random()),t);l.rotation.x=-Math.PI/2,l.position.set(r,.85,o),n.add(l)}const a=[[-24,-18],[-20,18],[22,-14],[26,8],[-28,4],[16,20],[-12,-20],[18,-20]];for(const[r,o]of a)Dg(n,r,o,e);const s=new Se({color:9089088});for(let r=-3;r<=3;r++){const o=new k(new ge(.07,.09,3.5+Math.random(),6),s);o.position.set(-28+r*.4,1.75,-22+Math.random()*2),n.add(o)}}function Dg(n,e,t,i){const a=.6+Math.random()*.5,s=new k(new Hn(.6+Math.random()*.3,a,6),i);s.position.set(e,a/2,t),n.add(s)}function Ig(n){const e=new wt({color:6993128,side:Ht}),t=new k(new at(120,20,14),e);n.add(t);const i=new wt({color:16776672,side:At}),a=new k(new cn(8,24),i);a.position.set(30,22,-88),a.lookAt(0,14,0),n.add(a);const s=new wt({color:16774560,transparent:!0,opacity:.35,side:At}),r=new k(new cn(13,24),s);r.position.copy(a.position),r.rotation.copy(a.rotation),n.add(r);const o=new wt({color:16448250,transparent:!0,opacity:.88,side:At});[[0,22,-85,1.1],[-35,20,-78,.9],[50,21,-80,1],[-30,22,85,1],[35,20,80,.85],[-90,21,10,.9],[90,20,-5,.8]].forEach(([l,c,d,u])=>{const f=new L(l,c,d).normalize();[-1,0,1].forEach(p=>{const v=new L().crossVectors(f,new L(0,1,0)).normalize().clone().multiplyScalar(p*7*u),m=new k(new at(5*u,8,6),o);m.position.set(l+v.x,c+(p===0?2*u:0),d+v.z),n.add(m)})})}function Ug(n){const e=new wt({color:16744480,transparent:!0,opacity:.6,side:At}),t=new k(new vn(1.2,.25,10,32),e);t.position.set(_n.x,5.5,_n.z),t.rotation.x=Math.PI/2,n.add(t);const i=new si({color:3066993}),a=new Li(i);return a.scale.set(1.5,1.5,1.5),a.position.set(_n.x,7,_n.z),a.visible=!1,n.add(a),{idx:0,pos:{x:_n.x,z:_n.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isValve:!0}}function Ng(n,e){!n||n.done||(n.glowMat.opacity=.4+.35*Math.sin(e*3.5),n.glowMesh.rotation.z=e*1.2)}function _d(n,e,t,i,a,s){const r=new k(new oe(2.5,.8,.1),new wt({color:s}));r.position.set(t,i,a),n.add(r)}const Ki=56,Ji=44,yn=new L(0,0,-14);function Og(){const n=new ua;n.background=new Ve(1715780),n.fog=new Ba(1583168,.012),n.add(new zs(10537192,1));const e=new Mn(15267071,1.6);e.position.set(0,20,5),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=80,e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,n.add(e);const t=new ni(6343935,2,28);t.position.set(yn.x,4,yn.z),n.add(t);const i=new Mn(9482448,.8);return i.position.set(-18,10,-10),n.add(i),{scene:n}}function Fg(n){zg(n),Bg(n),Hg(n),Gg(n),Vg(n)}function zg(n){const e=new ae({color:1712688,roughness:.9,metalness:.05}),t=new ae({color:1846332,roughness:.85,metalness:0}),i=new ae({color:1120288,roughness:1,metalness:0}),a=Ki/2,s=Ji/2,r=10,o=new k(new _t(Ki,Ji),e);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);const l=new k(new _t(Ki,Ji),i);l.rotation.x=Math.PI/2,l.position.y=r,n.add(l);const c=[{pos:[0,r/2,-s],rot:[0,0,0],size:[Ki,r]},{pos:[0,r/2,s],rot:[0,Math.PI,0],size:[Ki,r]},{pos:[-a,r/2,0],rot:[0,Math.PI/2,0],size:[Ji,r]},{pos:[a,r/2,0],rot:[0,-Math.PI/2,0],size:[Ji,r]}];for(const f of c){const p=new k(new _t(...f.size),t);p.position.set(...f.pos),p.rotation.set(...f.rot),n.add(p)}const d=new wt({color:9488639});for(let f=-18;f<=18;f+=12){const p=new k(new oe(.3,.08,18),d);p.position.set(f,r-.05,0),n.add(p)}const u=new ha({color:1716304});for(let f=-a;f<=a;f+=4){const p=[new L(f,.01,-s),new L(f,.01,s)];n.add(new Bn(new vt().setFromPoints(p),u))}for(let f=-s;f<=s;f+=4){const p=[new L(-a,.01,f),new L(a,.01,f)];n.add(new Bn(new vt().setFromPoints(p),u))}}function Bg(n){const e=new ae({color:2767434,roughness:.7}),t=new ae({color:1714224,roughness:.8}),i=new ae({color:2130080,transparent:!0,opacity:.35,roughness:.1,metalness:.1}),a=new ae({color:2099712,transparent:!0,opacity:.85,roughness:.3}),s=new ae({color:4213328,roughness:.5,metalness:.3});[{x:-16,z:2},{x:0,z:2},{x:16,z:2}].forEach(({x:o,z:l})=>{const c=new k(new oe(8,.15,3.5),e);c.position.set(o,3.1,l),c.castShadow=!0,c.receiveShadow=!0,n.add(c);for(const[v,m]of[[-3.5,-1.4],[3.5,-1.4],[-3.5,1.4],[3.5,1.4]]){const h=new k(new oe(.15,3.1,.15),t);h.position.set(o+v,1.55,l+m),n.add(h)}const d=new k(new oe(3,1.6,1.6),i);d.position.set(o-1,4.1,l),n.add(d);const u=new k(new _t(2.8,1.5),a);u.rotation.x=-Math.PI/2,u.position.set(o-1,3.42,l),n.add(u);const f=new k(new oe(.5,.4,.4),s);f.position.set(o+2.2,3.35,l-.5),n.add(f);const p=new ae({color:8429712,roughness:.6}),g=new k(new ge(.04,.04,.9,8),p);g.position.set(o+1.8,3.75,l-.5),n.add(g)})}function Hg(n){const e=new ae({color:2767402,roughness:.8}),t=new ae({color:4214880,roughness:.6,metalness:.2}),i=new ae({color:6303776,roughness:.7}),a=new wt({color:4259788});for(let s=-18;s<=18;s+=18){const r=new k(new oe(8,6,.2),e);r.position.set(s,3,-22+.15),n.add(r);for(let o=0;o<3;o++){const l=new k(new oe(7.6,.08,.5),e);l.position.set(s,1.2+o*2,-22+.45),n.add(l);for(let d=-2;d<=2;d++){const u=.3+Math.random()*.5,f=new k(new ge(.18,.18,u,8),d%2===0?t:i);f.position.set(s+d*1.4,1.25+o*2+u/2,-22+.5),n.add(f)}const c=new k(new oe(6,.06,.08),a);c.position.set(s,1.18+o*2,-22+.6),n.add(c)}}}function Gg(n){const e=new ae({color:1714224,roughness:.6,metalness:.3}),t=new ae({color:6192,roughness:.1,metalness:.2,emissive:new Ve(16544),emissiveIntensity:.5}),i=new ae({color:3160128,roughness:.5,metalness:.5}),a=new ae({color:2765376,roughness:.8}),s=yn.x,r=yn.z,o=new k(new ge(.5,.65,3.4,16),e);o.position.set(s,1.7,r),o.castShadow=!0,n.add(o);const l=new k(new oe(2.4,1.8,.12),i);l.position.set(s,4.4,r),n.add(l);const c=new k(new oe(2.2,1.6,.06),t);c.position.set(s,4.4,r-.04),n.add(c);const d=new k(new oe(1.8,.06,.7),a);d.position.set(s,3.55,r+.3),n.add(d);const u=new wt({color:4245759});for(let m=0;m<3;m++){const h=new k(new oe(1.5,.02,.08),u);h.position.set(s,3.59,r+.12+m*.16),n.add(h)}const f=new wt({color:43775}),p=new k(new oe(2.8,.5,.08),f);p.position.set(s,5.7,r),n.add(p);const g=new wt({color:4259839}),v=new k(new oe(.3,.3,.1),g);v.position.set(s-1.3,4.4,r-.1),n.add(v)}function Vg(n){const e=Ki/2,t=Ji/2,i=new ae({color:3689016,roughness:.8});for(const[l,c]of[[e-1.5,-t+1.2],[e-1.5,t-1.2]]){const d=new k(new oe(2.4,5,1.6),i);d.position.set(l,2.5,c),d.castShadow=!0,n.add(d);const u=new k(new oe(.06,.4,.06),new ae({color:10526816,metalness:.8,roughness:.2}));u.position.set(l-.7,2.5,c-.85),n.add(u)}const a=new ae({color:1720416,roughness:.9}),s=new wt({color:54527});for(const l of[-10,0,10]){const c=new k(new oe(.08,3,2.2),a);c.position.set(-e+.08,4.5,l),n.add(c);const d=new k(new oe(.04,2.4,.08),s);d.position.set(-e+.1,5.2,l),n.add(d)}const r=new ae({color:6963232,roughness:.9}),o=new ae({color:1728544,roughness:1});for(const[l,c]of[[-e+2,t-2],[-e+2,-t+2]]){const d=new k(new ge(.4,.3,.7,12),r);d.position.set(l,.35,c),n.add(d);const u=new k(new Hn(.7,1.4,8),o);u.position.set(l,1.4,c),n.add(u)}}function Wg(n){const e=new wt({color:52479,transparent:!0,opacity:.65,side:At}),t=new k(new vn(1.1,.2,10,32),e);t.position.set(yn.x,6.2,yn.z),t.rotation.x=Math.PI/2,n.add(t);const i=new si({color:3066993}),a=new Li(i);return a.scale.set(1.5,1.5,1.5),a.position.set(yn.x,7.2,yn.z),a.visible=!1,n.add(a),{idx:0,pos:{x:yn.x,z:yn.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isTerminal:!0}}function Xg(n,e){!n||n.done||(n.glowMat.opacity=.4+.3*Math.sin(e*4),n.glowMesh.rotation.z=e*1.5)}const Yn=52,jn=40,wn=new L(0,0,-12);function qg(){const n=new ua;n.background=new Ve(1714748),n.fog=new Ba(1450032,.01),n.add(new zs(11585760,1));const e=new Mn(14741759,1.6);e.position.set(5,18,8),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=80,e.shadow.camera.left=-28,e.shadow.camera.right=28,e.shadow.camera.top=28,e.shadow.camera.bottom=-28,n.add(e);const t=new ni(16768384,2.2,22);t.position.set(wn.x,5,wn.z),n.add(t);const i=new Mn(8425664,.7);return i.position.set(-15,8,-5),n.add(i),{scene:n}}function $g(n){Yg(n),jg(n),Kg(n),Jg(n),Zg(n)}function Yg(n){const e=new ae({color:1450030,roughness:.85,metalness:.05}),t=new ae({color:1582132,roughness:.9}),i=new ae({color:924200,roughness:1}),a=Yn/2,s=jn/2,r=9,o=new k(new _t(Yn,jn),e);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);const l=new k(new _t(Yn,jn),i);l.rotation.x=Math.PI/2,l.position.y=r,n.add(l);const c=[{pos:[0,r/2,-s],rot:[0,0,0],size:[Yn,r]},{pos:[0,r/2,s],rot:[0,Math.PI,0],size:[Yn,r]},{pos:[-a,r/2,0],rot:[0,Math.PI/2,0],size:[jn,r]},{pos:[a,r/2,0],rot:[0,-Math.PI/2,0],size:[jn,r]}];for(const f of c){const p=new k(new _t(...f.size),t);p.position.set(...f.pos),p.rotation.set(...f.rot),n.add(p)}const d=new ha({color:1714746});for(let f=-a;f<=a;f+=3){const p=[new L(f,.01,-s),new L(f,.01,s)];n.add(new Bn(new vt().setFromPoints(p),d))}for(let f=-s;f<=s;f+=3){const p=[new L(-a,.01,f),new L(a,.01,f)];n.add(new Bn(new vt().setFromPoints(p),d))}const u=new wt({color:6334719});for(const[f,p,g,v]of[[0,-s+.1,Yn,.1],[0,s-.1,Yn,.1],[-a+.1,0,.1,jn],[a-.1,0,.1,jn]]){const m=new k(new oe(g,.06,v),u);m.position.set(f,r-.05,p),n.add(m)}}function jg(n){const e=new ae({color:2635848,roughness:.7}),t=new ae({color:1581104,roughness:.8}),i=[new ae({color:1705216,transparent:!0,opacity:.9}),new ae({color:5908480,transparent:!0,opacity:.8}),new ae({color:8435776,transparent:!0,opacity:.7})],a=new ae({color:8965375,transparent:!0,opacity:.3,roughness:.05,metalness:.05});[[-14,6],[0,6],[14,6]].forEach(([r,o],l)=>{const c=new k(new oe(7,.12,3),e);c.position.set(r,3.1,o),c.castShadow=!0,c.receiveShadow=!0,n.add(c);for(const[g,v]of[[-3,-1.2],[3,-1.2],[-3,1.2],[3,1.2]]){const m=new k(new oe(.12,3.1,.12),t);m.position.set(r+g,1.55,o+v),n.add(m)}for(let g=0;g<3;g++){const v=new k(new ge(.3,.28,.8,12),a);v.position.set(r-1.8+g*1.8,3.56,o-.5),n.add(v);const m=.3+g*.1,h=new k(new ge(.27,.25,m,12),i[g]);h.position.set(r-1.8+g*1.8,3.17+m/2,o-.5),n.add(h)}const d=new ae({color:2113642,roughness:.9}),u=new k(new oe(1.2,.04,.9),d);u.position.set(r+2.5,3.18,o+.5),n.add(u);const f=new ae({color:4243616,roughness:.5,metalness:.3}),p=new k(new ge(.05,.05,1,8),f);p.position.set(r-2.8,3.75,o),p.rotation.z=.3,n.add(p)})}function Kg(n){const e=new ae({color:1579552,roughness:.5,metalness:.5}),t=new ae({color:2107440,roughness:.5,metalness:.6}),i=new ae({color:4227264,roughness:.1,metalness:.8}),a=new ae({color:2113696,roughness:.1,metalness:.9}),s=wn.x,r=wn.z,o=new k(new oe(3.5,.5,3),e);o.position.set(s,.25,r),o.castShadow=!0,n.add(o);const l=new k(new oe(.4,4,.4),t);l.position.set(s-.8,2.25,r),l.castShadow=!0,n.add(l);const c=new k(new oe(1.8,.35,.35),t);c.position.set(s+.1,4.1,r),n.add(c);const d=new k(new ge(.3,.35,1.2,16),i);d.position.set(s+.8,3.4,r),n.add(d);const u=new k(new ge(.1,.2,.5,12),i);u.position.set(s+.8,2.55,r),n.add(u);const f=new k(new ge(.18,.22,.6,12),a);f.position.set(s+.8,4.85,r),n.add(f);const p=new k(new oe(1.2,.06,1),e);p.position.set(s+.8,2.3,r),n.add(p);const g=new wt({color:16763968,transparent:!0,opacity:.7}),v=new k(new cn(.25,16),g);v.rotation.x=-Math.PI/2,v.position.set(s+.8,2.34,r),n.add(v)}function Jg(n){const e=new ae({color:794688,roughness:.9}),t=new wt({color:54527}),i=[new wt({color:16728128}),new wt({color:4259712})],a=new k(new oe(18,5.5,.1),e);a.position.set(0,4.5,-20+.12),n.add(a);const s=new k(new oe(17.6,.35,.08),t);s.position.set(0,6.95,-20+.17),n.add(s);for(let r=0;r<2;r++){const o=new k(new oe(15,.25,.06),i[r]);o.position.set(0,6-r*1.2,-20+.17),n.add(o);const l=r===0?[8,6.4,.4]:[.6,.5,.1];for(let c=0;c<3;c++){const d=new k(new oe(l[c],.55,.06),i[r]);d.position.set(-7.5+l[c]/2+c*5.2,5-r*1.2,-20+.17),n.add(d)}}}function Zg(n){const e=Yn/2,t=jn/2,i=new ae({color:2636344,roughness:.85});for(const s of[-12,0,12]){const r=new k(new oe(1.8,5,2),i);r.position.set(e-1,2.5,s),r.castShadow=!0,n.add(r)}const a=new ae({color:3817520,roughness:.9});for(const s of[-8,8]){const r=new k(new ge(.4,.35,.9,10),a);r.position.set(s,.45,t-2),n.add(r)}}function Qg(n){const e=new wt({color:16763904,transparent:!0,opacity:.65,side:At}),t=new k(new vn(1,.2,10,32),e);t.position.set(wn.x+.8,5.8,wn.z),t.rotation.x=Math.PI/2,n.add(t);const i=new si({color:3066993}),a=new Li(i);return a.scale.set(1.5,1.5,1.5),a.position.set(wn.x+.8,7,wn.z),a.visible=!1,n.add(a),{idx:0,pos:{x:wn.x+.8,z:wn.z},done:!1,glowMat:e,glowMesh:t,doneSprite:a,isScope:!0}}function ev(n,e){!n||n.done||(n.glowMat.opacity=.4+.28*Math.sin(e*3.8),n.glowMesh.rotation.z=e*1.3)}const tv=.65;function Ue(n,e,t,i){return{minX:n-t,maxX:n+t,minZ:e-i,maxZ:e+i}}const xs=60,Nr=40,Or=70,Fr=50,nv=[Ue(0,-20,xs/2+2,1.5),Ue(0,Nr/2,xs/2+2,1.5),Ue(-30,0,1.5,Nr/2+2),Ue(xs/2,0,1.5,Nr/2+2),Ue(-16,5,3.6,1.8),Ue(0,-6,3.6,1.8),Ue(16,5,3.6,1.8),Ue(-28,0,2,11.5),Ue(xs/2-2,0,2,11.5),Ue(-20,-18.4,3.5,1.6)],iv=[Ue(0,-25,Or/2+2,1.5),Ue(0,Fr/2,Or/2+2,1.5),Ue(-35,0,1.5,Fr/2+2),Ue(Or/2,0,1.5,Fr/2+2),Ue(-18,6,2.8,2.8),Ue(0,-12,2,2.5),Ue(18,6,2.5,2.5),Ue(-26,-12,4,6),Ue(28,-13,3,6)],zr=60,Br=50,av=[Ue(0,-25,zr/2+2,1.5),Ue(0,Br/2,zr/2+2,1.5),Ue(-30,0,1.5,Br/2+2),Ue(zr/2,0,1.5,Br/2+2),Ue(0,-8,11.6,.8),Ue(0,8,11.6,.8),Ue(-11,0,.8,8.6),Ue(11,0,.8,8.6),Ue(0,-10,.8,.8)];let ra=nv;function sv(){ra=iv}function rv(){ra=av}const wa=56,Hr=44,ov=[Ue(0,-22,wa/2+2,1.5),Ue(0,Hr/2,wa/2+2,1.5),Ue(-28,0,1.5,Hr/2+2),Ue(wa/2,0,1.5,Hr/2+2),Ue(-16,2,4.5,2),Ue(0,2,4.5,2),Ue(16,2,4.5,2),Ue(0,-14,1.4,1.4),Ue(-18,-21.5,4.5,.8),Ue(0,-21.5,4.5,.8),Ue(18,-21.5,4.5,.8),Ue(wa/2-1.5,-10,1.5,1.5),Ue(wa/2-1.5,10,1.5,1.5)],ji=52,Gr=40,lv=[Ue(0,-20,ji/2+2,1.5),Ue(0,Gr/2,ji/2+2,1.5),Ue(-26,0,1.5,Gr/2+2),Ue(ji/2,0,1.5,Gr/2+2),Ue(-14,6,4,2),Ue(0,6,4,2),Ue(14,6,4,2),Ue(.8,-12,1.8,1.8),Ue(ji/2-1,-12,1.5,1.5),Ue(ji/2-1,0,1.5,1.5),Ue(ji/2-1,12,1.5,1.5)];function cv(){ra=ov}function dv(){ra=lv}function uv(n,e,t){const i=tv;let a=n.x+e;for(const r of ra)a+i>r.minX&&a-i<r.maxX&&n.z+i>r.minZ&&n.z-i<r.maxZ&&(e>0?a=r.minX-i:a=r.maxX+i,e=a-n.x);let s=n.z+t;for(const r of ra)a+i>r.minX&&a-i<r.maxX&&s+i>r.minZ&&s-i<r.maxZ&&(t>0?s=r.minZ-i:s=r.maxZ+i,t=s-n.z);return{dx:e,dz:t}}const ee={playerName:"",currentLevel:1,totalPoints:0,levelAttempts:0,levelPoints:0,phenomenonIndex:0,answered:!1,wrongAnswers:0,levelBreakdown:[],pointsAtLevelStart:0,stage3:{valveOpened:!1},stage4:{selectedItems:[],reactorResult:null,terminalDone:!1},stage5:{scopeDone:!1},completedRooms:[]};function hv(){ee.levelAttempts=0,ee.levelPoints=0,ee.phenomenonIndex=0,ee.answered=!1,ee.wrongAnswers=0}const pv={1:"Level 1 – Lab Sains",2:"Level 2 – Pabrik Etanol",3:"Level 3 – Kolam Remediasi",4:"Level 4 – Workshop IPAL",5:"Level 5 – Lab Observasi"};function yd(n){const e=ee.totalPoints-ee.pointsAtLevelStart;ee.levelBreakdown.push({level:n,label:pv[n]||`Level ${n}`,points:e})}class fv{constructor(e){this.scene=e,this.group=new Yt,this._build(),e.add(this.group),this.group.position.set(0,0,12),this.speed=.12,this.keys={},this._moving=!1,this._walkCycle=0,this._legAngle=0,this._armAngle=0,this._facingAngle=0,this._bindKeys(),this._bindTouch()}_bindKeys(){window.addEventListener("keydown",e=>{this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1})}_bindTouch(){if(this._touchAxis={x:0,y:0},!(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1))return;const t=document.getElementById("mobile-controls");t&&(t.style.display="block");const i=document.getElementById("joystick-base"),a=document.getElementById("joystick-knob");if(!i||!a)return;const s=32;let r=null,o=null,l=0,c=0;const d=p=>{if(r!==null)return;r=p.changedTouches[0].identifier,o=i.getBoundingClientRect(),l=o.left+o.width/2,c=o.top+o.height/2,p.preventDefault()},u=p=>{for(const g of p.changedTouches){if(g.identifier!==r)continue;const v=g.clientX-l,m=g.clientY-c,h=Math.sqrt(v*v+m*m),_=Math.min(h,s),x=Math.atan2(m,v),b=Math.cos(x)*_,C=Math.sin(x)*_;a.style.transform=`translate(calc(-50% + ${b}px), calc(-50% + ${C}px))`,this._touchAxis.x=b/s,this._touchAxis.y=-C/s,p.preventDefault()}},f=p=>{for(const g of p.changedTouches)g.identifier===r&&(r=null,a.style.transform="translate(-50%, -50%)",this._touchAxis.x=0,this._touchAxis.y=0)};i.addEventListener("touchstart",d,{passive:!1}),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f,{passive:!1}),window.addEventListener("touchcancel",f,{passive:!1})}_build(){const e=new ae({color:16108455,roughness:.7,metalness:0}),t=new ae({color:2719929,roughness:.6,metalness:.05}),i=new ae({color:2899536,roughness:.65,metalness:.05}),a=new ae({color:2890254,roughness:.8,metalness:0}),s=new ae({color:1710618,roughness:.6,metalness:.1}),r=new ae({color:16448250,roughness:.7,metalness:0}),o=new k(new ge(.48,.52,1.6,16),t);o.position.y=2.2,o.castShadow=!0,this.group.add(o),this._torso=o;const l=new k(new ge(.5,.54,1.58,16),r);l.position.y=2.2,this.group.add(l),this._coat=l;for(const g of[-1,1]){const v=new k(new at(.28,12,10),r);v.position.set(g*.62,2.9,0),this.group.add(v)}const c=new k(new at(.52,20,16),e);c.position.y=3.62,c.scale.set(1,1.05,1),c.castShadow=!0,this.group.add(c),this._head=c;const d=new k(new at(.54,16,10,0,Math.PI*2,0,Math.PI*.55),a);d.position.y=3.85,this.group.add(d);for(const g of[-1,1]){const v=new k(new at(.1,8,8),e);v.position.set(g*.53,3.65,0),this.group.add(v)}const u=new ae({color:1710618});for(const g of[-1,1]){const v=new k(new at(.07,8,8),u);v.position.set(g*.2,3.72,.47),this.group.add(v)}const f=new ae({color:13936778}),p=new k(new at(.05,8,8),f);p.position.set(0,3.58,.52),this.group.add(p),this._legs=[];for(const[g,v]of[[-1,-1],[1,1]]){const m=new Yt;m.position.set(v*.3,1.55,0);const h=new k(new ge(.2,.18,.72,12),i);h.position.y=-.36,h.castShadow=!0,m.add(h);const _=new Yt;_.position.y=-.72,m.add(_);const x=new k(new ge(.16,.14,.64,12),i);x.position.y=-.32,x.castShadow=!0,_.add(x);const b=new k(new Mo(.13,.3,6,10),s);b.rotation.x=Math.PI/2,b.position.set(0,-.68,.12),_.add(b),this.group.add(m),this._legs.push({pivot:m,kneePivot:_,side:v,i:g===-1?0:1})}this._arms=[];for(const[g,v]of[[-1,-1],[1,1]]){const m=new Yt;m.position.set(v*.76,2.92,0);const h=new k(new ge(.16,.14,.62,12),r);h.position.y=-.31,h.castShadow=!0,m.add(h);const _=new Yt;_.position.y=-.62,m.add(_);const x=new k(new ge(.13,.12,.56,12),e);x.position.y=-.28,_.add(x);const b=new k(new at(.13,10,8),e);b.position.y=-.6,_.add(b),this.group.add(m),this._arms.push({pivot:m,elbowPivot:_,side:v,i:g===-1?0:1})}this._nameLabel=null}setName(e){if(this._nameLabel&&this.group.remove(this._nameLabel),!e)return;const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.clearRect(0,0,256,64),i.fillStyle="rgba(15,25,40,0.8)",i.roundRect(4,4,248,56,12),i.fill(),i.fillStyle="#2ecc71",i.font="bold 26px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,32);const a=new Os(t),s=new si({map:a,transparent:!0}),r=new Li(s);r.scale.set(3.5,.9,1),r.position.y=5.2,this._nameLabel=r,this.group.add(r)}update(e,t=!1,i=null){const a=this.keys;let s=0,r=0;if((a.KeyW||a.ArrowUp)&&(s+=1),(a.KeyS||a.ArrowDown)&&(s-=1),(a.KeyA||a.ArrowLeft)&&(r-=1),(a.KeyD||a.ArrowRight)&&(r+=1),this._touchAxis&&(s+=this._touchAxis.y,r+=this._touchAxis.x,s=Math.max(-1,Math.min(1,s)),r=Math.max(-1,Math.min(1,r))),this._moving=s!==0||r!==0,this._moving&&!t){let o=0,l=0;const c=s<0;if(c&&i){o=i.fwd.x*s+i.right.x*r,l=i.fwd.z*s+i.right.z*r;const p=Math.sqrt(o*o+l*l)||1;o=o/p*this.speed,l=l/p*this.speed}else if(c)o=-Math.sin(this._facingAngle)*this.speed,l=-Math.cos(this._facingAngle)*this.speed;else if(i){o=i.fwd.x*s+i.right.x*r,l=i.fwd.z*s+i.right.z*r;const p=Math.sqrt(o*o+l*l)||1;o=o/p*this.speed,l=l/p*this.speed}else{o=r,l=-s;const p=Math.sqrt(o*o+l*l)||1;o=o/p*this.speed,l=l/p*this.speed}({dx:o,dz:l}=uv(this.group.position,o,l)),this.group.position.x+=o,this.group.position.z+=l;const d=ee.currentLevel===2?33:ee.currentLevel===3?27:28,u=ee.currentLevel===2?23:ee.currentLevel===3?22:18;this.group.position.x=Math.max(-d,Math.min(d,this.group.position.x)),this.group.position.z=Math.max(-u,Math.min(u,this.group.position.z)),c||(this._facingAngle=Math.atan2(o,l)),this.group.rotation.y=this._facingAngle,this._walkCycle+=.18;const f=this._walkCycle;for(const{pivot:p,kneePivot:g,i:v}of this._legs){const m=f+v*Math.PI,h=Math.sin(m)*.55;p.rotation.x=h;const _=Math.max(0,-Math.sin(m)*.45);g.rotation.x=_}for(const{pivot:p,elbowPivot:g,side:v,i:m}of this._arms){const h=f+(1-m)*Math.PI,_=Math.sin(h)*.42;p.rotation.x=_,p.rotation.z=v*(.08+Math.sin(h+Math.PI*.5)*.06),g.rotation.x=Math.max(0,Math.sin(h+.4)*.28)}this._torso&&(this._torso.rotation.y=Math.sin(f+Math.PI)*.08),this._coat&&(this._coat.rotation.y=Math.sin(f+Math.PI)*.08),this._head&&(this._head.position.y=3.62+Math.abs(Math.sin(f*2))*.06),this.group.position.y=Math.abs(Math.sin(f*2))*.055}else{this._walkCycle=0;for(const{pivot:o,kneePivot:l}of this._legs)o.rotation.x*=.75,l.rotation.x*=.75;for(const{pivot:o,elbowPivot:l,side:c}of this._arms)o.rotation.x*=.75,o.rotation.z+=(c*.08-o.rotation.z)*.15,l.rotation.x*=.75;this._torso&&(this._torso.rotation.y*=.8),this._coat&&(this._coat.rotation.y*=.8),this._head&&(this._head.position.y=3.62+Math.sin(e*1.2)*.02),this.group.position.y=Math.sin(e*1.4)*.04}return{x:this.group.position.x,z:this.group.position.z}}get position(){return this.group.position}removeFromScene(e){e.remove(this.group)}addToScene(e){this.scene=e,e.add(this.group)}}const mv=[{id:1,title:"Fenomena 1",image:null,tableData:{headers:["Stasiun","Suhu (°C)","pH","DO (mg/L)","COD (mg/L)","TDS (mg/L)"],rows:[{label:"Hulu",values:["30,39","7,26","8,38","635","777"],classes:["","","blue","",""]},{label:"Tengah",values:["31,17","6,96","1,90","775","1.343"],classes:["","","red","","red"]},{label:"Hilir",values:["29,63","7,36","11,12","879","1.300"],classes:["","","","red",""]}],note:"Biru: rata-rata terendah | Merah: rata-rata tertinggi. Sumber: Zahra, 2023"},context:"Seorang peneliti lingkungan mengamati data kualitas air sungai di stasiun berbeda, yaitu: hulu, tengah, dan hilir dari aliran anak Sungai Bengawan solo yang berdekatan dengan pabrik etanol. Data menunjukkan:",question:"Berdasarkan data, Stasiun Tengah menunjukkan nilai TDS melonjak drastis menjadi 1.343 mg/L, namun nilai DO justru berada di angka 1,90 mg/L dengan COD 90.000 mg/L. Jika diketahui sumber pencemar adalah limbah vinasse yang kaya bahan organik, manakah evaluasi paling kritis mengenai data tersebut?",options:[{label:"A",text:"Tingginya TDS disebabkan oleh mineral anorganik, sedangkan seluruh bakteri telah terurai oleh bakteri dari hulu ke tengah.",correct:!1},{label:"B",text:"Masuknya limbah vinasse seharusnya meningkatkan TDS, DO, dan COD secara simultan.",correct:!0},{label:"C",text:"TDS, COD, dan DO memiliki hubungan yang terbalik, semakin banyak zat terlarut, semakin sedikit oksigen yang dibutuhkan.",correct:!1}],correctKey:"B",explanation:"✅ <strong>Jawaban benar!</strong><br>Limbah organik vinasse seharusnya berkontribusi pada TDS dan COD. Jika TDS dan COD naik tajam karena limbah masuk, DO seharusnya tidak turun drastis."},{id:2,title:"Fenomena 2",image:null,tableData:null,standardTable:{title:"Baku Mutu Air Limbah Industri Bir/Etanol (Permen LH No.5/2014)",headers:["Parameter","Kadar Maks (mg/L)","Beban Maks (g/hL)"],rows:[["BOD₅","40","24,0"],["COD","100","60,0"],["TSS","40","24,0"],["pH","6,0 – 9,0","—"],["Debit limbah maks","—","6 hL/hL produk"]]},context:"Berdasarkan data Stasiun Tengah nilai TDS 1.343 mg/L, COD 90.000 mg/L dan DO 1,90 mg/L, komponen apakah yang paling dominan menyusun nilai TDS tersebut?",question:"Berdasarkan data Stasiun Tengah nilai TDS 1.343 mg/L, COD 90.000 mg/L dan DO 1,90 mg/L, komponen apakah yang paling dominan menyusun nilai TDS tersebut?",options:[{label:"A",text:"Adanya bakteri coliform dan mikroorganisme pengurai.",correct:!1},{label:"B",text:"Ion anorganik seperti K, Ca dan Cl yang tidak dapat dioksidasi.",correct:!0},{label:"C",text:"Suspensi padatan lumpur yang belum mengendap.",correct:!1}],correctKey:"B",explanation:"✅ <strong>Jawaban benar!</strong><br>Ion anorganik seperti K, Ca dan Cl yang tidak dapat dioksidasi mendominasi nilai TDS di Stasiun Tengah."},{id:3,title:"Fenomena 3",image:null,riceGraph:!0,tableData:null,context:"Perhatikan grafik produktivitas lahan persawahan padi berikut:",question:"Manakah interpretasi ilmiah yang paling tepat menjelaskan mekanisme penyebab fenomena penurunan hasil panen padi tersebut?",options:[{label:"A",text:"Kenaikan hasil panen di Tahun ke-2 terjadi karena suplai bahan organik berada di bawah ambang batas pencemaran sehingga justru memperkaya hara tanah, namun pada Tahun ke-3 akumulasi pH dan COD telah menyebabkan kerusakan pada jaringan akar padi.",correct:!0},{label:"B",text:"Penurunan hasil panen pada Tahun ke-3 disebabkan oleh kurangnya pasokan air, karena tingginya nilai COD menyebabkan air menjadi kental dan sulit diserap oleh akar tanaman.",correct:!1},{label:"C",text:"Peningkatan hasil panen pada Tahun ke-2 disebabkan oleh bakteri patogen dalam limbah yang memicu mutasi genetik pada padi menjadi varietas unggul, sedangkan penurunan di Tahun ke-3 adalah fase kematian alami bakteri tersebut.",correct:!1}],correctKey:"A",explanation:"✅ <strong>Jawaban benar!</strong><br>Meskipun COD naik menjadi 80, pH tanah sebesar 8,6 masih dalam rentang toleransi padi. Bahan organik dalam limbah vinasse mengandung N, P, dan K. Pada tahap ini, efek negatif belum mendominasi, sehingga tanaman justru merespons positif terhadap tambahan nutrisi tersebut. Ketika COD mencapai >100 mg/L dan pH >9 kondisi tanah menjadi toksik. pH yang tinggi menyebabkan ion logam di tanah menjadi larut dan meracuni akar, serta menghambat penyerapan Fosfor. Hal ini menyebabkan tanaman gagal tumbuh."}],Ma={phenomena:mv},gv=879,vv=635,bs=1e3;function xv(n){const e=Math.max(0,Math.min(bs,n)),t=bs-e,i=e/bs,a=Math.round(gv*i),s=Math.round(vv*i),r=Math.pow(10,-3.8),o=Math.pow(10,-7),l=(r*e+o*t)/bs,c=Math.max(3.5,Math.min(7,-Math.log10(l)));return{cod:a,bod:s,ph:parseFloat(c.toFixed(2)),dilutionFactor:i}}function bv(n,e){const t=Math.max(0,Math.min(72,e)),i=Math.round(n.bod*Math.exp(-.08*t)),a=n.bod-i,s=n.cod*.55,r=n.cod*.45,o=s*Math.exp(-.08*t),l=Math.round(o+r),c=parseFloat(Math.min(6.8,n.ph+(6.8-n.ph)*(1-Math.exp(-.08*.5*t))).toFixed(2)),d=n.bod>0?Math.round(a/n.bod*100):0,u=n.cod>0?Math.round((n.cod-l)/n.cod*100):0,f=i<=40&&l<=100;return{cod:l,bod:i,ph:c,bodRemovalPct:d,codRemovalPct:u,compliant:f}}const wd="biovine_scores",To="biovine_checkpoint";function _v({playerName:n,totalPoints:e,levelBreakdown:t,completedAt:i,essayAnswer:a}){const s=yv();s.push({playerName:n,totalPoints:e,levelBreakdown:t,completedAt:i,essayAnswer:a}),s.length>200&&s.splice(0,s.length-200);try{localStorage.setItem(wd,JSON.stringify(s))}catch(r){console.warn("[db] saveScore failed:",r)}}function yv(){try{return JSON.parse(localStorage.getItem(wd)||"[]")}catch{return[]}}function wv({playerName:n,currentLevel:e,totalPoints:t,levelBreakdown:i,completedRooms:a}){const s={playerName:n,currentLevel:e,totalPoints:t,levelBreakdown:i||[],completedRooms:a||[],savedAt:new Date().toISOString()};try{localStorage.setItem(To,JSON.stringify(s))}catch(r){console.warn("[db] saveCheckpoint failed:",r)}}function Ao(){try{const n=localStorage.getItem(To);return n?JSON.parse(n):null}catch{return null}}function Md(){localStorage.removeItem(To)}const Lo="https://script.google.com/macros/s/AKfycbys_sNNVIFJCQGmvNHUMuiLpZGINttOvNN5LnIJ8z5Gak8h8KQ8BdTo342_K5H05RxbXw/exec";function Mv(n){const{playerName:e,totalPoints:t,levelBreakdown:i,completedRooms:a}=ee,s={1:null,2:null,3:null,4:null,5:null};i.forEach(l=>{s[l.level]=l.points});const r=s[n]??0,o={playerName:e,totalPoints:t,completedLevel:n,thisLevelPoints:r,level1Points:s[1],level2Points:s[2],level3Points:s[3],level4Points:s[4],level5Points:s[5],completedRooms:a,timestamp:new Date().toISOString()};fetch(Lo,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(o)}).catch(l=>{console.warn("[sheets] Upload failed (network error):",l)})}function Sv(n){const e={sheet:"Kelompok",...n};return fetch(Lo,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)}).catch(t=>{throw console.warn("[sheets] Experiment upload failed (network error):",t),t})}function Ev(n){const e={sheet:"Esai",playerName:n.playerName||"",essayAnswer:n.essayAnswer||"",timestamp:n.timestamp||new Date().toISOString()};fetch(Lo,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)}).catch(t=>{console.warn("[sheets] Essay upload failed (network error):",t)})}const pn=n=>document.getElementById(n),ko="experiment-form-overlay",vc="experiment-form-css";function Tv(){if(document.getElementById(vc))return;const n=document.createElement("style");n.id=vc,n.textContent=`
    #${ko} {
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
  `,document.head.appendChild(n)}function Av(){const n=document.createElement("div");return n.id=ko,n}function Vr(){var n;(n=document.getElementById(ko))==null||n.remove()}function _s(n){return["warna","bau","keruh","ph","sal","tds","cod","bod","do"].map(t=>`<td><input type="text" class="exp-cell" id="${n}-${t}" /></td>`).join("")}function Co(){Tv(),Vr();const n=Av();n.innerHTML=`
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
  `,document.body.appendChild(n),pn("exp-close").onclick=Vr,n.addEventListener("click",t=>{t.target===n&&Vr()}),pn("exp-submit").onclick=()=>{const t=pn("exp-kelompok").value.trim(),i=pn("exp-kelas").value.trim();if(!t||!i){e("⚠️ Nomor Kelompok dan Kelas wajib diisi!",!1);return}const a=["warna","bau","keruh","ph","sal","tds","cod","bod","do"];function s(l){return Object.fromEntries(a.map(c=>{var d;return[c,((d=pn(`${l}-${c}`))==null?void 0:d.value.trim())||"–"]}))}const r={nomorKelompok:t,kelas:i,namaAnggota:pn("exp-nama").value.trim()||"–",playerName:ee.playerName||"–",timestamp:new Date().toISOString(),mikroorganisme:pn("t1-mikro").value.trim()||"–",intensitasCahaya:pn("t1-cahaya").value.trim()||"–",suhuRuang:pn("t1-suhu").value.trim()||"–",awalDengan:s("awal-dg"),awalTanpa:s("awal-tp"),akhirDengan:s("akhir-dg"),akhirTanpa:s("akhir-tp")},o=pn("exp-submit");o.disabled=!0,o.textContent="⏳ Mengirim…",Sv(r).then(()=>{e("✅ Berhasil! Data percobaan kelompokmu telah dikirimkan.",!0),o.textContent="✅ Terkirim"}).catch(()=>{e("❌ Gagal mengirim. Periksa koneksi internet dan coba lagi.",!1),o.disabled=!1,o.textContent="📤 Kirim Ulang"})};function e(t,i){const a=pn("exp-status");a.className="exp-status "+(i?"ok":"err"),a.innerHTML=t,a.scrollIntoView({behavior:"smooth",block:"nearest"})}}const we=n=>document.getElementById(n);let ro=null,Wr=null;function Lv(n,e){ro=n,Wr=e||null;const t=Ao(),i=we("resume-section");if(t&&i&&Wr){const a=new Date(t.savedAt),s=a.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})+" "+a.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});i.classList.remove("hidden"),i.innerHTML=`
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
    `,document.getElementById("btn-resume-game").onclick=()=>{Sd(),Wr(t)},document.getElementById("btn-discard-checkpoint").onclick=()=>{Md(),i.classList.add("hidden")}}else i&&i.classList.add("hidden");we("profile-screen").classList.remove("hidden")}function Sd(){we("profile-screen").classList.add("hidden")}function kv(n){const e=we("synopsis-screen");e.classList.remove("hidden");const t=[{tag:"Bagian 1 dari 3",title:"Industri Etanol di Desa Bekonang",text:"Industri etanol di Desa Bekonang, Sukoharjo, adalah warisan <strong>turun-temurun</strong> yang sudah ada sejak zaman kolonial. Banyak pabrik di sini memproduksi minuman keras tradisional bernama <strong>ciu</strong> dibuat dari tetes tebu, tape singkong, atau nira aren melalui proses fermentasi dan penyulingan.<br><br>Seiring waktu, industri ini berkembang menjadi produksi <strong>etanol medis</strong> yang digunakan untuk kebutuhan rumah sakit dan dunia kesehatan."},{tag:"Bagian 2 dari 3",title:"Masalah: Limbah Vinasse",text:"Proses produksi etanol menghasilkan limbah cair bernama <strong>vinasse</strong>. Setiap harinya, satu pabrik bisa menghasilkan <strong>150–200 liter</strong> limbah ini tanpa sistem pengolahan yang memadai.<br><br>Vinasse berwarna <strong>hitam pekat</strong>, berbau menyengat, dan sangat berbahaya jika dibuang langsung ke sungai. Vinasse <strong>menyerap oksigen</strong> di dalam air, menyebabkan ikan-ikan mati dan sungai tercemar parah."},{tag:"Bagian 3 dari 3",title:"Solusi: Vinasse → Pupuk Organik Cair",text:"Kabar baiknya, limbah vinasse bisa diolah menjadi <strong>Pupuk Organik Cair (POC)</strong>! Caranya dengan menambahkan <strong>mikroorganisme berupa ragi</strong> ke dalam vinasse yang sudah diaerasi minimal 24 jam.<br><br>Setelah ditumbuhkan selama <strong>15 hari</strong> dalam bak terbuka beraeasi, limbah berubah menjadi pupuk: tidak berbau asam, berwarna coklat muda. Diaplikasikan ke tanaman dengan perbandingan <strong>1 : 10</strong> (POC : air). Ukur kadar COD, BOD, dan pH untuk memastikan kualitasnya!"}];let i=0,a=!1,s=null;const r=we("syn-seg-tag"),o=we("syn-seg-title"),l=we("syn-seg-text"),c=we("syn-dots"),d=we("btn-syn-prev"),u=we("btn-syn-next"),f=we("btn-syn-skip"),p=we("synopsis-content-panel"),g=we("syn-mouth");function v(){m(),s=setInterval(()=>{a=!a,g&&g.setAttribute("d",a?"M84 124 Q100 144 116 124":"M84 126 Q100 138 116 126")},280)}function m(){s&&(clearInterval(s),s=null),g&&g.setAttribute("d","M84 126 Q100 138 116 126")}function h(){m(),e.classList.add("hidden"),n()}function _(x){const b=t[x];p.classList.remove("synopsis-slide"),p.offsetWidth,p.classList.add("synopsis-slide"),r.textContent=b.tag,o.textContent=b.title,l.innerHTML=b.text,c.innerHTML=t.map((C,S)=>`<span class="synopsis-dot ${S===x?"active":""}"></span>`).join(""),d.style.display=x===0?"none":"",u.textContent=x===t.length-1?"🚀 Mulai Petualangan →":"Lanjutkan →",v()}_(0),d.onclick=()=>{i>0&&_(--i)},u.onclick=()=>{i<t.length-1?_(++i):h()},f.onclick=()=>h()}const ys=[{id:"c4gsn1rkK1g",title:"Video Edukasi: Limbah Vinasse & Dampak Lingkungan",subtitle:"Pelajari dampak pencemaran vinasse terhadap lingkungan sekitar"}];let Ed=!1;const Td=[];window.onYouTubeIframeAPIReady=()=>{Ed=!0,Td.splice(0).forEach(n=>n())};function Cv(){return new Promise(n=>{if(Ed){n();return}if(Td.push(n),!document.getElementById("yt-api-script")){const e=document.createElement("script");e.id="yt-api-script",e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}})}function Rv(n){const e=we("youtube-screen");e.classList.remove("hidden"),In&&In.pause();let t=0,i=null;function a(){const r=e.querySelector(".youtube-frame-wrap");r.innerHTML='<div id="yt-player-container"><div class="yt-loading">Memuat video…</div></div>'}function s(r){const o=ys[r];we("yt-title").textContent=o.title,we("yt-subtitle").textContent=o.subtitle,we("yt-counter").textContent=`${r+1} / ${ys.length}`;const l=we("btn-yt-next");l.textContent=r<ys.length-1?"Video Berikutnya →":"Lanjutkan ke Simulasi →",l.disabled=!1,l.title="",i&&(i.destroy(),i=null),a(),Cv().then(()=>{i=new YT.Player("yt-player-container",{videoId:o.id,playerVars:{rel:0,modestbranding:1,playsinline:1},events:{}})})}s(0),we("btn-yt-next").onclick=()=>{t+=1,t<ys.length?s(t):(i&&(i.destroy(),i=null),e.classList.add("hidden"),In&&In.play().catch(()=>{}),n())}}let In=null;function xc(){In||(In=new Audio("intro-music.mp3"),In.loop=!0,In.volume=.45,In.play().catch(()=>{}))}function Pv(n){const e=we("intro-video-screen");e.classList.remove("hidden");const t=we("intro-3d-canvas"),i=window.innerWidth,a=window.innerHeight,s=new bo({canvas:t,antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(i,a,!1),s.shadowMap.enabled=!0,s.shadowMap.type=ho;const r=new ua;r.background=new Ve(8900331),r.fog=new Ha(12114160,90,210);const o=new Kt(50,i/a,.1,300);o.position.set(0,65,75),o.lookAt(0,0,0),r.add(new fd(10409208,5929536,1.2));const l=new Mn(16775136,2.8);l.position.set(40,80,50),l.castShadow=!0,l.shadow.mapSize.setScalar(2048),l.shadow.camera.left=l.shadow.camera.bottom=-90,l.shadow.camera.right=l.shadow.camera.top=90,l.shadow.camera.far=220,r.add(l);const c=new Mn(11587839,.45);c.position.set(-30,25,-20),r.add(c),r.add(new k(new at(190,16,8),new wt({color:6991584,side:Ht})));function d(D,ie=.78,_e=0,Le,Ae){const Q={color:D,roughness:ie,metalness:_e};return Le!==void 0&&(Q.emissive=Le,Q.emissiveIntensity=Ae||.2),new ae(Q)}function u(D,ie,_e,Le,Ae,Q,R){const de=new k(new oe(Le,Ae,Q),R);return de.position.set(D,ie+Ae*.5,_e),de.castShadow=!0,de.receiveShadow=!0,r.add(de),de}function f(D,ie,_e,Le,Ae,Q,R,de){const pe=new k(new ge(Le,Ae,Q,R),de);return pe.position.set(D,ie+Q*.5,_e),pe.castShadow=!0,pe.receiveShadow=!0,r.add(pe),pe}function p(D,ie,_e,Le,Ae,Q=.84){const R=new k(new _t(_e,Le),new ae({color:Ae,transparent:!0,opacity:Q,roughness:.04,metalness:.18}));return R.rotation.x=-Math.PI/2,R.position.set(D,.22,ie),r.add(R),R}function g(D,ie,_e,Le,Ae,Q,R=5596791,de=.24){const pe=new L(D,ie,_e),j=new L(Le,Ae,Q),he=j.clone().sub(pe),nt=he.length();if(nt<.05)return;const it=new k(new ge(de,de,nt,8),d(R,.45,.65));it.position.copy(pe.clone().add(j).multiplyScalar(.5)),it.quaternion.setFromUnitVectors(new L(0,1,0),he.normalize()),r.add(it)}const v=new k(new _t(260,260),d(8033368,.95));v.rotation.x=-Math.PI/2,v.receiveShadow=!0,r.add(v),u(6,-.05,1,82,.1,68,d(11708816,.88));const m=7,h=13,_=5,x=7,b=1.4,C=.36,S=D=>-21+D*x,M=[8008464,6965782,4872744,2977352,2127994,1608346,960716],I=[],y=[];for(let D=0;D<m;D++){const ie=S(D),_e=M[D],Le=d(8028272,.78);u(0,0,ie-_/2,h*2+C*2,b,C,Le),u(0,0,ie+_/2,h*2+C*2,b,C,Le),u(-h,0,ie,C,b,_,Le),u(h,0,ie,C,b,_,Le),u(0,-.25,ie,h*2,.28,_,d(10524800,.88));const Ae=.76+D*.015,Q=p(0,ie,h*2-.1,_-.12,_e,Ae);if(I.push({mesh:Q,baseOp:Ae}),D===3||D===4)for(let R=-1;R<=1;R++){const de=f(R*7,.25,ie,.75,.75,.28,12,d(11189196,.4,.55,3381708,.3));y.push(de),u(R*7,.28,ie,.14,1,.14,d(8948121,.5,.5))}}const T=d(12761250,.88);for(let D=0;D<=m;D++){const ie=-21-x/2+D*x;u(6,0,ie,82,.12,2,T)}u(-20,0,1,2.2,.12,70,T),u(32,0,1,2.2,.12,70,T);for(let D=0;D<m-1;D++){const ie=D%2===0?h+.5:-13.5,_e=S(D),Le=S(D+1);u(ie,0,(_e+Le)*.5,2.2,b,Math.abs(Le-_e)+.5,d(6977672,.65,.3))}u(-28,0,-30,12,5.5,8,d(5924984,.62,.1)),u(-28,5.5,-30,12.5,.55,8.5,d(3819608,.5));for(let D=-1.5;D<=1.5;D+=.65)u(-22.8,0,-30+D,.1,2.4,.1,d(3359829,.4,.7));u(-27,2,-33.7,1.8,1.2,.08,d(8969727,.08,0,13141,.9)),u(-29.5,2,-33.7,1.8,1.2,.08,d(8969727,.08,0,13141,.9));const U=-34,H=-30;f(U,0,H,1.1,.9,14,16,d(8952234,.38,.55)),f(U,14,H,1.2,1.2,.3,16,d(11189196,.35,.5)),[2,4.5,7.5,10.5,13].forEach(D=>{f(U,D,H,1.18,1.18,.18,16,d(10070715,.42,.6))}),g(U+1.1,1.2,H,-22,1.2,-30,4478310,.28),u(U-2.2,6,H,2.8,1.4,1.4,d(6977672,.55,.3)),g(U-1.1,6.5,H,U-1.8,6.5,H,5596791,.22);const se=-24,P=-14,F=12,X=9;u(se,0,P,F,1.5,X,d(7241328,.75)),u(se,0,P,F-C*2,.24,X-C*2,d(10129544,.88));const ne=p(se,P,F-.8,X-.8,5926976,.82);g(-22,.9,-28,-22,.9,-14,4478310,.3),g(-18.2,.9,-14,-13.2,.9,-21,4478310,.3),u(-28,0,8,8,4.5,6.5,d(6975600,.65,.1)),u(-28,4.5,8,8.5,.42,7,d(3817552,.5)),f(-25.5,4.9,6,.34,.34,4.5,10,d(8947864,.5,.3));for(let D=0;D<3;D++)g(-18.5,.8,-21+D*14,-21,.8,-21+D*14,4478310,.2);[-14,-6,2].forEach(D=>{u(-32+D*.3,0,32,6,.42,9.5,d(10522720,.93))});const $=30,K=18,J=10;f($,0,K,J+.55,J+.55,1.6,48,d(8030328,.7)),f($,0,K,J,J,1.6,48,d(8030328,.7)),f($,-.25,K,J,J,.28,48,d(10127472,.88));const V=new k(new cn(J-.08,48),new ae({color:3057848,transparent:!0,opacity:.86,roughness:.04,metalness:.2}));V.rotation.x=-Math.PI/2,V.position.set($,.22,K),r.add(V),f($,1.6,K,.58,.58,3.8,10,d(5925495,.5,.5)),u($,1.6,K,J*2-.3,.22,.38,d(8952234,.45,.4));const Z=new k(new Hn(4.5,2.8,32),d(5911312,.85));Z.rotation.x=Math.PI,Z.position.set($,.9,K),r.add(Z),g(h+.4,.9,S(6),$-J-.6,.9,K,4482696,.3),[[44,-10],[52,-10]].forEach(([D,ie])=>{u(D,0,ie,6.5,1.1,10,d(7899288,.7)),p(D,ie,6,9.5,6728396,.82)}),f(58,0,-5,.95,.95,3.4,14,d(14544639,.32,.28,8930559,.4)),g($+J+.5,.9,K,44,.9,-10,4482696,.28),g(48,.9,-10,52,.9,-10,4482696,.25),g(55.5,.9,-10,58,.9,-5,4482696,.25),u(58,0,16,.36,9,.36,d(10066602,.4,.6)),u(58,9,16,1.6,.9,1,d(13378082,.5,.3,16711680,.55));const O=new k(new at(.32,8,8),new ae({color:16720418,emissive:16711680,emissiveIntensity:2.5}));O.position.set(58,10.2,16),r.add(O);const te=[];for(let D=0;D<4;D++){const ie=new k(new at(.22,6,6),new ae({color:2293691,emissive:52360,emissiveIntensity:1.8,transparent:!0,opacity:.9}));ie.userData.i=D,r.add(ie),te.push(ie)}const Y=p(72,8,18,60,2263227,.78);g(58,.9,-5,66,.9,0,4482696,.3);const me=new ae({color:7027210,roughness:.95}),fe=[d(2981178,.9),d(3837764,.88),d(4888896,.85),d(2263098,.92),d(5474352,.87),d(1992226,.93)],Re=[];for(let D=-58;D<=78;D+=6.5)Re.push([D,-42]),Re.push([D,44]);for(let D=-40;D<=42;D+=6.5)Re.push([-58,D]),Re.push([78,D]);[[-44,-22],[-46,-8],[-44,18],[-44,30],[56,-28],[58,-12],[56,10],[56,30],[-36,38],[-18,40],[2,40],[20,40],[38,40],[-36,-36],[-18,-38],[2,-38],[22,-38],[42,-36],[52,-36]].forEach(D=>Re.push(D)),Re.forEach(([D,ie])=>{const _e=.85+Math.random()*.75,Le=new k(new ge(.18*_e,.3*_e,2.2*_e,7),me);Le.position.set(D,1.1*_e,ie),Le.castShadow=!0,r.add(Le);const Ae=fe[Math.floor(Math.random()*fe.length)];if(Math.random()>.42){const Q=new k(new at(1.5*_e,8,7),Ae);Q.position.set(D,3.8*_e,ie),Q.castShadow=!0,r.add(Q)}else for(let Q=0;Q<3;Q++){const R=new k(new Hn((1.3-Q*.28)*_e,1.3*_e,8),Ae);R.position.set(D,(2.5+Q*1.2)*_e,ie),R.castShadow=!0,r.add(R)}});const Ne=new cd([new L(-23,.7,-30),new L(-23,.7,-21),new L(se,.7,P),new L(-13,.7,-21),new L(0,.7,-21),new L(13,.7,-21),new L(14,.7,-17.5),new L(13,.7,-14),new L(0,.7,-14),new L(-13,.7,-14),new L(-14,.7,-10.5),new L(-13,.7,-7),new L(0,.7,-7),new L(13,.7,-7),new L(14,.7,-3.5),new L(13,.7,0),new L(0,.7,0),new L(-13,.7,0),new L(-14,.7,3.5),new L(-13,.7,7),new L(0,.7,7),new L(13,.7,7),new L(14,.7,10.5),new L(13,.7,14),new L(0,.7,14),new L(-13,.7,14),new L(-14,.7,17.5),new L(-13,.7,21),new L(0,.7,21),new L(13,.7,21),new L(22,.7,21),new L($,.7,K),new L(44,.7,-10),new L(58,.7,-5),new L(66,.7,0)]);function Oe(D,ie,_e){const Le=D>>16&255,Ae=D>>8&255,Q=D&255,R=ie>>16&255,de=ie>>8&255,pe=ie&255;return Math.round(Le+(R-Le)*_e)<<16|Math.round(Ae+(de-Ae)*_e)<<8|Math.round(Q+(pe-Q)*_e)}const et=90,z=[];for(let D=0;D<et;D++){const ie=D/et,_e=Oe(8005632,1091800,ie),Le=D%3!==0,Ae=Le?new So(.1+D%6*.04,.28+D%5*.07,20):new cn(.16+D%7*.03,12),Q=new k(Ae,new ae({color:_e,emissive:_e,emissiveIntensity:Le?.65:.3,roughness:.04,metalness:.1,transparent:!0,opacity:Le?.72:.52,side:At}));Q.rotation.x=-Math.PI/2,Q.userData.t=ie,Q.userData.ph=D*.618033%1,r.add(Q),z.push(Q)}const Rt=[],Ie=50,Be=[[-7,0],[0,0],[7,0],[-7,7],[0,7],[7,7]];for(let D=0;D<Ie;D++){const ie=Be[D%Be.length],_e=new k(new at(.07+Math.random()*.09,5,5),new ae({color:12118271,transparent:!0,opacity:.72}));_e.userData.phase=D/Ie*Math.PI*2,_e.userData.ox=ie[0]+(Math.random()-.5)*10,_e.userData.oz=ie[1]+(Math.random()-.5)*(_-1),r.add(_e),Rt.push(_e)}const ke=[],ht=28;for(let D=0;D<ht;D++){const ie=new k(new at(.14,5,5),new ae({color:7025425,transparent:!0,opacity:.78}));ie.userData.phase=D/ht,ie.userData.ang=Math.random()*Math.PI*2,ie.userData.r=1.5+Math.random()*(J-3),r.add(ie),ke.push(ie)}const Xe=[],A=36;for(let D=0;D<A;D++){const ie=new k(new at(.3+Math.random()*.22,7,7),new ae({color:15661311,emissive:11197934,emissiveIntensity:.18,transparent:!0,opacity:.55,roughness:.85}));ie.userData.life=D/A,ie.userData.ox=(Math.random()-.5)*1.2,ie.userData.oz=(Math.random()-.5)*1.2,r.add(ie),Xe.push(ie)}const w=[],B=22;for(let D=0;D<B;D++){const ie=new k(new at(.26,5,5),new ae({color:11184810,transparent:!0,opacity:.38}));ie.userData.life=D/B,ie.userData.ox=(Math.random()-.5)*.6,ie.userData.oz=(Math.random()-.5)*.6,r.add(ie),w.push(ie)}const ue=[],ce=12;for(let D=0;D<ce;D++){const ie=new k(new at(.13,5,5),new ae({color:14548872,transparent:!0,opacity:.88}));ie.userData.phase=D/ce,ie.userData.ox=(Math.random()-.5)*3.5,r.add(ie),ue.push(ie)}const re=[{tag:"Tahap 1 dari 5",title:"Penampungan Awal (Bak Ekualisasi)",subtitle:"Equalization Basin",waterQuality:5,camPos:[-40,32,-36],camLook:[-24,0,-24],desc:"Limbah vinasse yang pekat dari industri etanol dialirkan dan ditampung terlebih dahulu di bak penampungan awal IPAL Ciunik. Pada tahap ini, dilakukan penyamaan atau stabilisasi debit, suhu, dan tingkat keasaman (pH) limbah agar kondisinya ideal dan tidak merusak sistem pengolahan di tahap selanjutnya."},{tag:"Tahap 2 dari 5",title:"Proses Aerasi (Injeksi Oksigen)",subtitle:"Aeration Process",waterQuality:28,camPos:[-10,28,-10],camLook:[0,0,0],desc:"Setelah stabil, limbah dialirkan ke dalam bak aerasi. Di dalam bak ini, air limbah dipompa dan disuplai dengan gelembung udara (oksigen) secara terus-menerus menggunakan mesin aerator. Oksigen ini sangat krusial untuk menjaga agar kondisi air tetap kaya oksigen terlarut."},{tag:"Tahap 3 dari 5",title:"Penambahan Mikroorganisme (Bakteri Pengurai)",subtitle:"Biological Treatment",waterQuality:55,camPos:[8,32,16],camLook:[6,0,2],desc:"Bersamaan dengan suplai oksigen yang melimpah, ditambahkan mikroorganisme aerobik (bakteri pengurai) ke dalam bak aerasi. Mikroorganisme ini bekerja dengan cara menguraikan polutan serta zat-zat organik berbahaya yang terkandung dalam vinasse, mengubahnya menjadi pupuk organik cair."},{tag:"Tahap 4 dari 5",title:"Pengendapan (Clarifier)",subtitle:"Secondary Clarifier",waterQuality:80,camPos:[32,28,28],camLook:[30,0,18],desc:"Setelah zat organik hancur terurai, campuran air limbah dan mikroorganisme dialirkan ke bak pengendap. Gumpalan bakteri dan sisa kotoran akan dibiarkan mengendap ke dasar bak, sementara air yang sudah jernih akan terpisah dan naik ke permukaan."},{tag:"Tahap 5 dari 5",title:"Pelepasan Air Bersih (Output)",subtitle:"Clean Water Discharge",waterQuality:100,camPos:[62,30,30],camLook:[54,0,14],desc:"Air hasil pemisahan tersebut kini memiliki kadar polutan (seperti BOD dan COD) yang sangat rendah dan sudah memenuhi standar baku mutu lingkungan. Air ini dapat dikembalikan atau dilepas ke alam tanpa mencemari ekosistem sekitarnya atau dimanfaatkan menjadi pupuk organik cair."}],Ce=we("intro-stage-label");let ye=-1;const Te=11,Fe=Te*re.length;function $e(D){return D<.5?2*D*D:-1+(4-2*D)*D}function le(D,ie,_e){return[D[0]+(ie[0]-D[0])*_e,D[1]+(ie[1]-D[1])*_e,D[2]+(ie[2]-D[2])*_e]}let st=null;const Ke=new gd,He=we("btn-intro-continue");He.disabled=!1;function De(){st=requestAnimationFrame(De);const D=Ke.getElapsedTime(),_e=D%Fe/Te,Le=Math.min(Math.floor(_e),re.length-1),Ae=_e-Math.floor(_e),Q=(Le+re.length-1)%re.length,R=.15;let de,pe;if(Ae<R){const j=$e(Ae/R);de=le(re[Q].camPos,re[Le].camPos,j),pe=le(re[Q].camLook,re[Le].camLook,j)}else{const j=re[Le].camPos,he=re[Le].camLook;de=[j[0]+Math.sin(D*.26)*1.4,j[1]+Math.sin(D*.19)*.6,j[2]+Math.cos(D*.22)*1.1],pe=[...he]}if(o.position.set(de[0],de[1],de[2]),o.lookAt(pe[0],pe[1],pe[2]),Le!==ye&&Ce){ye=Le;const j=re[Le],he=j.waterQuality,nt=he<40?"#e05020":he<75?"#d4aa20":"#22bb55";Ce.innerHTML=`<div class="sl-tag">${j.tag}</div><div class="sl-title">${j.title}</div><div class="sl-subtitle">${j.subtitle}</div><div class="sl-desc">${j.desc}</div><div class="sl-wq"><span style="font-size:11px;opacity:.75;margin-right:6px">Kualitas Air</span><div class="sl-wq-bar"><div class="sl-wq-fill" style="width:${he}%;background:${nt}"></div></div><span class="sl-wq-val" style="color:${nt}">${he}%</span></div><div class="sl-dots">${re.map((it,Et)=>`<span class="sl-dot${Et===Le?" active":""}"></span>`).join("")}</div>`}z.forEach(j=>{j.userData.t=(j.userData.t+.00145)%1;const he=j.userData.t;j.position.copy(Ne.getPoint(he)),j.position.y=.27;const nt=(j.userData.ph+D*.32)%1;j.scale.setScalar(.4+nt*2.2),j.material.opacity=Math.max(0,.8-nt*.88);const it=Oe(8005632,1091800,he);j.material.color.setHex(it),j.material.emissive.setHex(it)}),Rt.forEach(j=>{const he=(D*.82+j.userData.phase)%(Math.PI*2)/(Math.PI*2);j.position.set(j.userData.ox,.22+he*1.55,j.userData.oz),j.material.opacity=he<.72?.7:(1-he)*4.5}),ke.forEach(j=>{const he=(D*.22+j.userData.phase)%1;j.position.set($+Math.cos(j.userData.ang+D*.04)*j.userData.r,1.3-he*1.2,K+Math.sin(j.userData.ang+D*.04)*j.userData.r),j.material.opacity=he>.75?(1-he)*5:.72}),y.forEach((j,he)=>{j.rotation.y=D*(1.5+he%3*.4)}),Xe.forEach(j=>{j.userData.life=(j.userData.life+.0048)%1;const he=j.userData.life;j.position.set(U+j.userData.ox+Math.sin(he*4.2+D*.7)*.55,14.3+he*8,H+j.userData.oz+Math.cos(he*3.5+D*.5)*.55),j.scale.setScalar(.5+he*2.8),j.material.opacity=Math.max(0,.55-he*.62)}),w.forEach(j=>{j.userData.life=(j.userData.life+.0036)%1;const he=j.userData.life;j.position.set(-25.5+j.userData.ox+Math.sin(he*3.5+D)*.5,4.9+he*5.5,6+j.userData.oz+Math.cos(he*2.8+D*.6)*.4),j.material.opacity=Math.max(0,(1-he)*.4),j.scale.setScalar(.18+he*1.25)}),ue.forEach(j=>{const he=(D*1.05+j.userData.phase)%1;j.position.set(58+j.userData.ox,3.8-he*4.5,-5),j.material.opacity=.88*(1-he)}),O.material.emissiveIntensity=1.2+1.5*Math.sin(D*5.8),te.forEach(j=>{const he=(D*.58+j.userData.i*.25)%1;j.position.set(58+he*14,10.2+Math.sin(he*Math.PI)*5,16+he*6),j.material.opacity=(1-he)*.88}),I.forEach(j=>{j.mesh.material.opacity=j.baseOp+.03*Math.sin(D*.75+j.baseOp*14)}),V.material.opacity=.84+.05*Math.sin(D*1.05),ne.material.opacity=.8+.04*Math.sin(D*.68),Y.material.opacity=.75+.06*Math.sin(D*.88),s.render(r,o)}De(),we("btn-intro-continue").onclick=()=>{cancelAnimationFrame(st),s.dispose(),e.classList.add("hidden"),n()}}function Ad(n){we("instructions-screen").classList.remove("hidden");const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1,t=we("instr-controls-text");t&&(t.innerHTML=e?"Gunakan <strong>joystick virtual</strong> di kiri bawah layar untuk bergerak. Dekati objek bercahaya lalu ketuk tombol <strong>E</strong> di kanan bawah untuk berinteraksi.":"Gunakan <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> atau tombol panah untuk bergerak. Dekati objek bercahaya lalu tekan <kbd>E</kbd> untuk berinteraksi.");const i=we("instr-level-guide");if(i){const a=[{num:1,icon:"🔬",name:"Lab Sains",desc:"Amati 3 fenomena pencemaran vinasse di laboratorium dan jawab pertanyaan ilmiah."},{num:2,icon:"🏭",name:"Pabrik Etanol",desc:"Kunjungi 3 stasiun pabrik, lakukan simulasi pengolahan COD/BOD/pH secara interaktif."},{num:3,icon:"🌿",name:"Kolam Remediasi",desc:"Pilih mikroorganisme yang tepat di toko, hitung dosis, lalu buka kran vinasse."},{num:4,icon:"🔧",name:"Workshop IPAL",desc:"Rancang prototype reaktor IPAL: pilih alat & bahan, ikuti prosedur, evaluasi hasilnya."},{num:5,icon:"🔭",name:"Lab Observasi",desc:"Analisis kegagalan reaktor dari Level 4 dan jawab soal evaluasi mikroskop."}];i.innerHTML=a.map(s=>`
      <div class="level-guide-card">
        <span class="lg-icon">${s.icon}</span>
        <div><strong>Level ${s.num} – ${s.name}</strong><div class="lg-desc">${s.desc}</div></div>
      </div>
    `).join("")}we("btn-start-game").onclick=()=>{we("instructions-screen").classList.add("hidden"),n()}}function bc(){Ad(()=>{});const n=we("btn-start-game");n.textContent="✕ Tutup Petunjuk"}function Dv(){jt(),we("btn-glossary").onclick=()=>oo(),we("btn-instructions-hud").onclick=()=>bc();const n=document.getElementById("btn-instructions-hud-mobile"),e=document.getElementById("btn-glossary-mobile"),t=document.getElementById("btn-pause-menu-mobile");n&&n.addEventListener("touchstart",i=>{i.preventDefault(),bc()},{passive:!1}),e&&e.addEventListener("touchstart",i=>{i.preventDefault(),oo()},{passive:!1}),t&&t.addEventListener("touchstart",i=>{i.preventDefault(),we("btn-pause-menu").click()},{passive:!1})}function Iv(n,e){const t=we("pause-menu-overlay");we("btn-pause-menu").onclick=()=>{const i=Ao(),a=we("pause-checkpoint-info"),s=we("btn-pm-resume");if(i){const r=new Date(i.savedAt),o=r.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})+" "+r.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});a.innerHTML=`💾 Checkpoint tersimpan: <strong>${i.playerName}</strong> · Level ${i.currentLevel} · ${i.totalPoints} poin<br><small style="color:#aaa">${o}</small>`,s.disabled=!1,s.title=""}else a.innerHTML='<span style="color:#aaa">Belum ada checkpoint tersimpan.</span>',s.disabled=!0,s.title="Tidak ada checkpoint tersimpan";t.classList.remove("hidden")},we("btn-pm-continue").onclick=()=>{t.classList.add("hidden")},we("btn-pm-resume").onclick=()=>{t.classList.add("hidden"),n()},we("btn-pm-newgame").onclick=()=>{confirm("Yakin ingin memulai ulang? Semua progres sesi ini akan hilang.")&&(t.classList.add("hidden"),e())},we("btn-pm-experiment").onclick=()=>{t.classList.add("hidden"),Co()},t.addEventListener("click",i=>{i.target===t&&t.classList.add("hidden")})}function jt(){we("hud-player").textContent=ee.playerName||"Pemain",we("hud-level").textContent=`Level ${ee.currentLevel}`,we("hud-points").textContent=ee.totalPoints;const n=we("hud-attempts");n.innerHTML="";for(let e=0;e<3;e++){const t=document.createElement("div");t.className="attempt-dot"+(e<ee.levelAttempts?" used":""),n.appendChild(t)}}function Ro(n){const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1;let t=we("interact-prompt");t||(t=document.createElement("div"),t.id="interact-prompt",t.style.cssText=`
      position:fixed; bottom:${e?"200px":"120px"}; left:50%; transform:translateX(-50%);
      background:rgba(10,20,40,0.88); color:#fff; padding:10px 22px;
      border-radius:24px; font-size:15px; pointer-events:none;
      border:2px solid #00d4ff; box-shadow:0 0 18px #00d4ff88;
      transition:opacity 0.25s; z-index:200; white-space:nowrap;
    `,document.body.appendChild(t)),e&&n&&(n=n.replace(/Tekan <kbd>E<\/kbd>/g,"👆 Ketuk tombol <b>E</b>")),n?(t.innerHTML=n,t.style.opacity="1",t.style.display="block"):(t.style.opacity="0",setTimeout(()=>{t.style.display="none"},260))}function Uv(n,e,t){const i=we("stage-screen");i.classList.remove("hidden"),i.style.pointerEvents="all",ee.phenomenonIndex=n,Ld(n,()=>{i.classList.add("hidden"),i.style.pointerEvents="none",e&&e()},()=>{i.classList.add("hidden"),i.style.pointerEvents="none",t&&t()},!0)}function Sa(n){var t;ee.levelAttempts++,yd(ee.currentLevel);const e=((t=ee.levelBreakdown.at(-1))==null?void 0:t.points)??0;Gv(e,"🏠 Kembali ke Pilihan Ruangan →",()=>{hv(),jt(),n&&n()})}const Nv=[{level:1,icon:"🔬",name:"Lab Sains",desc:"Analisis fenomena pencemaran vinasse melalui kuis MCQ",color:"#2980b9"},{level:2,icon:"🏭",name:"Pabrik Etanol",desc:"Simulasi pengukuran COD, BOD & pH limbah vinasse",color:"#e67e22"},{level:3,icon:"🌿",name:"Kolam Remediasi",desc:"Pilih mikroorganisme & buka kran bioremediasi",color:"#27ae60"},{level:4,icon:"⚙️",name:"Workshop IPAL",desc:"Rancang reaktor pengolahan limbah IPAL",color:"#8e44ad"},{level:5,icon:"🔭",name:"Lab Observasi",desc:"Analisis hasil reaktor & evaluasi akhir",color:"#c0392b"}];function Ov(n){const e=document.getElementById("room-select-overlay");e.classList.remove("hidden");function t(){const i=document.getElementById("room-select-grid");i.innerHTML=Nv.map(s=>{const r=ee.completedRooms.includes(s.level);return`
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
    `,a.querySelector("#btn-room-upload-exp").onmouseenter=function(){this.style.background="rgba(21,101,192,.22)"},a.querySelector("#btn-room-upload-exp").onmouseleave=function(){this.style.background="rgba(21,101,192,.12)"},a.querySelector("#btn-room-upload-exp").onclick=()=>{e.classList.add("hidden"),Co()}}t(),e._refresh=t}function Fv(){var t;yd(ee.currentLevel),_v({playerName:ee.playerName,totalPoints:ee.totalPoints,levelBreakdown:ee.levelBreakdown,completedAt:new Date().toISOString(),essayAnswer:((t=ee.stage5)==null?void 0:t.essayAnswer)||""}),Md();const n=ee.levelBreakdown.map(i=>`
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
  `,document.body.appendChild(e),e.querySelector("#btn-gc-close").onclick=()=>{e.remove(),jt()},e.querySelector("#btn-gc-restart").onclick=()=>{e.remove(),window.location.reload()},e.querySelector("#btn-gc-experiment").onclick=()=>{Co()}}function Ld(n,e,t,i=!1){const a=Ma.phenomena[n],s=we("stage-screen");ee.wrongAnswers=0;const r=s.querySelector(".stage-panel");r&&r.remove();const o=document.createElement("div");o.className="stage-panel fade-in",o.innerHTML=`
    <div class="phenomenon-header">
      <span class="phenomenon-badge">${a.title}</span>
      ${i?"":`<span class="question-progress">${n+1} / ${Ma.phenomena.length}</span>`}
      ${t?'<button class="panel-close-btn" id="panel-close-btn" title="Tutup">✕</button>':""}
    </div>
    ${i?"":`
    <div class="progress-bar-wrap">
      ${Ma.phenomena.map((g,v)=>`<div class="prog-dot ${v<n?"done":v===n?"active":""}"></div>`).join("")}
    </div>`}
  `,t&&setTimeout(()=>{const g=o.querySelector("#panel-close-btn");g&&(g.onclick=t)},0);const l=document.createElement("div");if(l.className="question-text",l.innerHTML=a.context,o.appendChild(l),a.image){const g=document.createElement("div");g.style.cssText="text-align:center;margin:10px 0";const v=document.createElement("img");v.src=a.image,v.alt=a.title||"Gambar soal",v.style.cssText="max-width:100%;max-height:260px;border-radius:10px;border:2px solid rgba(255,255,255,.15);object-fit:contain",g.appendChild(v),o.appendChild(g)}a.tableData&&o.appendChild(zv(a.tableData)),a.standardTable&&o.appendChild(Bv(a.standardTable)),a.riceGraph&&o.appendChild(Hv());const c=document.createElement("div");c.className="question-text",c.style.marginTop="4px",c.style.borderLeftColor="#e67e22",c.innerHTML=`<strong>❓ Pertanyaan:</strong><br>${a.question}`,o.appendChild(c);const d=document.createElement("div");d.className="answer-options";let u=!1;a.options.forEach(g=>{const v=document.createElement("button");v.className="answer-btn",v.innerHTML=`<strong>${g.label}.</strong> ${g.text}`,v.dataset.correct=g.correct,v.onclick=()=>{if(!u)if(g.correct){u=!0,v.classList.add("correct");const m=ee.wrongAnswers===0?100:ee.wrongAnswers<=1?50:25;ee.totalPoints+=m,jt(),_c(o,!0,a.explanation+`<br><strong>+${m} poin!</strong>`),p.classList.add("visible"),d.querySelectorAll(".answer-btn").forEach(h=>h.disabled=!0)}else v.classList.add("wrong"),v.disabled=!0,ee.wrongAnswers++,jt(),_c(o,!1,"❌ Jawaban kurang tepat. Coba pilihan lain!")},d.appendChild(v)}),o.appendChild(d);const f=document.createElement("div");f.className="feedback-box",f.id="feedback-box",o.appendChild(f);const p=document.createElement("button");p.className="next-btn",p.textContent=i?"✅ Selesai":n<Ma.phenomena.length-1?"Fenomena Berikutnya →":"✅ Selesai Level 1",p.onclick=()=>{i||n>=Ma.phenomena.length-1?(s.classList.add("hidden"),s.style.pointerEvents="none",e&&e()):(ee.phenomenonIndex++,Ld(ee.phenomenonIndex,e,t,!1))},o.appendChild(p),s.appendChild(o)}function _c(n,e,t){const i=n.querySelector("#feedback-box");i&&(i.className="feedback-box "+(e?"correct":"wrong"),i.innerHTML=t)}function zv(n){const e=document.createElement("div");e.className="data-table-wrap";let t='<table class="data-table"><thead><tr>';for(const i of n.headers)t+=`<th>${i}</th>`;t+="</tr></thead><tbody>";for(const i of n.rows)t+=`<tr><td><strong>${i.label}</strong></td>`,i.values.forEach((a,s)=>{const r=i.classes[s]?` class="${i.classes[s]}"`:"";t+=`<td${r}>${a}</td>`}),t+="</tr>";return t+="</tbody></table>",n.note&&(t+=`<div class="info-label" style="margin-top:6px">📌 ${n.note}</div>`),e.innerHTML=t,e}function Bv(n){const e=document.createElement("div");e.className="std-table-wrap";let t=`<div class="info-label" style="margin-bottom:6px">📋 ${n.title}</div>`;t+='<table class="std-table"><thead><tr>';for(const i of n.headers)t+=`<th>${i}</th>`;t+="</tr></thead><tbody>";for(const i of n.rows)t+="<tr>"+i.map(a=>`<td>${a}</td>`).join("")+"</tr>";return t+="</tbody></table>",e.innerHTML=t,e}function Hv(){const n=document.createElement("div");n.className="rice-graph-wrap";const e=document.createElement("img");return e.src="rice-graph.png",e.alt="Grafik produktivitas panen padi",e.style.cssText="width:100%;border-radius:8px;border:1px solid rgba(255,255,255,0.1);display:block;",n.appendChild(e),n}function Gv(n,e,t){const i=we("result-overlay");i.classList.remove("hidden");const a=n>=75;we("result-icon").textContent=a?"🎉":n>=50?"👍":"💡",we("result-title").textContent=a?"Luar Biasa!":n>=50?"Bagus!":"Terus Belajar!",we("result-score").textContent=`+${n} poin`,we("result-total").textContent=`Total: ${ee.totalPoints} poin`;const s=ee.levelAttempts,r=s===1?"🥇 Berhasil di percobaan pertama!":s===2?"🥈 Berhasil di percobaan ke-2.":"🥉 Berhasil di percobaan ke-3.";we("result-attempts").textContent=r;const o=we("btn-result-continue");o.textContent=e,o.onclick=()=>{i.classList.add("hidden"),t()}}function oo(){we("glossary-modal").classList.toggle("hidden")}function Vv(){const n=we("hud");n.innerHTML=`
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
  `,n.style.display="none";const e=we("ui-overlay");e.innerHTML=`
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
  `,we("btn-profile-start").onclick=()=>{const t=we("input-name").value.trim();if(!t){we("input-name").style.borderColor="#e74c3c",we("input-name").focus();return}ee.playerName=t,Sd(),ro&&ro(t)},we("input-name").addEventListener("keydown",t=>{t.key==="Enter"&&we("btn-profile-start").click()}),setTimeout(()=>{const t=we("btn-close-glossary");t&&(t.onclick=()=>oo());let i=1;const a=2;function s(){we("glossary-page-1").classList.toggle("hidden",i!==1),we("glossary-page-2").classList.toggle("hidden",i!==2),we("glossary-page-indicator").textContent=`${i} / ${a}`,we("btn-glossary-prev").disabled=i===1,we("btn-glossary-next").disabled=i===a;const l=we("glossary-modal").querySelector(".glossary-card");l&&(l.scrollTop=0)}we("btn-glossary-next").onclick=()=>{i<a&&(i++,s())},we("btn-glossary-prev").onclick=()=>{i>1&&(i--,s())};const r=we("glossary-modal");new MutationObserver(()=>{r.classList.contains("hidden")||(i=1,s())}).observe(r,{attributes:!0,attributeFilter:["class"]})},100)}const ve=n=>document.getElementById(n);function Wv(n){Zv();const e=ve("sim-overlay");e&&e.remove();const t=document.createElement("div");t.id="sim-overlay",t.className="sim-overlay",t.innerHTML=Xv(),document.body.appendChild(t),requestAnimationFrame(()=>{qv(t,n)})}function Xv(){return`
    <div class="sim-card">
      <!-- Header -->
      <div class="sim-header">
        <span class="sim-badge">🔬 SIMULASI LAB</span>
        <h2 class="sim-title">Pengolahan Limbah Vinasse</h2>
        <p class="sim-subtitle">Ukur COD, BOD & pH — lalu uji efektivitas aerasi</p>
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
  `}function qv(n,e){let t=0,i=null,a=null,s=!1,r=null;{let se=function(){document.getElementById("vol-display-num").textContent=t,document.getElementById("vol-display-water").textContent=1e3-t},P=function(Y){const me=document.getElementById(`vglass-liq-${Y}`),fe=document.getElementById(`vglass-${Y}`);!me||!fe||(me.style.height=M[Y]/200*100+"%",M[Y]<=0&&(fe.classList.add("empty"),fe.classList.remove("dragging")))},F=function(){const Y=document.getElementById("beaker-drops");if(!Y)return;const me=document.createElement("div");me.className="sim-drop",me.style.setProperty("--spread",(Math.random()-.5)*10+"px"),me.style.setProperty("--dur",.28+Math.random()*.24+"s"),Y.appendChild(me),setTimeout(()=>me.remove(),600)},X=function(){T||y===null||(T=setInterval(()=>{if(y===null||M[y]<=0||t>=1e3){ne();return}const Y=Math.min(25,M[y],1e3-t);M[y]-=Y,t=Math.min(1e3,t+Y),Xr(t),se(),ve("btn-titrate").disabled=!1;const me=document.getElementById("vg-ghost-liquid");me&&(me.style.height=M[y]/200*100+"%"),P(y)},80),U=setInterval(F,55))},ne=function(){clearInterval(T),clearInterval(U),T=U=null},$=function(Y,me){I.style.left=Y-18+"px",I.style.top=me-64+"px";const fe=document.getElementById("beaker-drop-zone");if(!fe)return;const Re=fe.getBoundingClientRect(),Ne=Y>=Re.left&&Y<=Re.right&&me>=Re.top&&me<=Re.bottom;Ne!==H&&(H=Ne,fe.classList.toggle("active",Ne),I.classList.toggle("tilting",Ne),Ne?X():ne())},K=function(Y,me,fe){var Ne;if(M[Y]<=0)return;y=Y,H=!1,(Ne=document.getElementById(`vglass-${Y}`))==null||Ne.classList.add("dragging"),I.classList.remove("hidden");const Re=document.getElementById("vg-ghost-liquid");Re&&(Re.style.height=M[Y]/200*100+"%"),$(me,fe)},J=function(){var me,fe;if(y===null)return;ne(),P(y),(me=document.getElementById(`vglass-${y}`))==null||me.classList.remove("dragging"),y=null,H=!1,I.classList.add("hidden"),I.classList.remove("tilting"),(fe=document.getElementById("beaker-drop-zone"))==null||fe.classList.remove("active");const Y=document.getElementById("beaker-drop-label");Y&&(Y.textContent=t>0?`✓ ${t} mL dituang — seret gelas lagi untuk menambah`:"Jatuhkan di sini")},V=function(Y){y!==null&&$(Y.clientX,Y.clientY)},Z=function(){J()},O=function(Y){y!==null&&($(Y.touches[0].clientX,Y.touches[0].clientY),Y.preventDefault())},te=function(){J()};var o=se,l=P,c=F,d=X,u=ne,f=$,p=K,g=J,v=V,m=Z,h=O,_=te;const M=Array(5).fill(200);t=0,Xr(0);const I=document.createElement("div");I.id="vg-ghost",I.className="vg-ghost hidden",I.innerHTML='<div class="vg-ghost-liquid" id="vg-ghost-liquid"></div>',document.body.appendChild(I);let y=null,T=null,U=null,H=!1;for(let Y=0;Y<5;Y++){const me=document.getElementById(`vglass-${Y}`);me&&(me.addEventListener("mousedown",fe=>{K(Y,fe.clientX,fe.clientY),fe.preventDefault()}),me.addEventListener("touchstart",fe=>{K(Y,fe.touches[0].clientX,fe.touches[0].clientY),fe.preventDefault()},{passive:!1}))}window.addEventListener("mousemove",V),window.addEventListener("mouseup",Z),window.addEventListener("touchmove",O,{passive:!1}),window.addEventListener("touchend",te),document.getElementById("btn-reset-pour").onclick=()=>{var me;J(),t=0;for(let fe=0;fe<5;fe++)M[fe]=200,P(fe),(me=document.getElementById(`vglass-${fe}`))==null||me.classList.remove("empty");Xr(0),se(),ve("btn-titrate").disabled=!0;const Y=document.getElementById("beaker-drop-label");Y&&(Y.textContent="Jatuhkan di sini")},r=()=>{J(),window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",Z),window.removeEventListener("touchmove",O),window.removeEventListener("touchend",te);const Y=document.getElementById("vg-ghost");Y&&Y.remove()}}ve("btn-titrate").onclick=()=>{r&&(r(),r=null),i=xv(t),qr("sim-step-1","sim-step-2"),kd(t,i)},ve("btn-go-aerate").onclick=()=>{qr("sim-step-2","sim-step-3"),jv(i)},ve("aerator-toggle").onchange=function(){s=this.checked;const x=ve("aerator-status");x.textContent=s?"NYALA":"MATI",x.className=s?"status-on":"status-off",ve("aerator-machine").classList.toggle("running",s),Kv(s),s?ve("duration-wrap").classList.remove("locked"):(ve("duration-wrap").classList.add("locked"),a=null,n.querySelectorAll(".dur-btn").forEach(b=>b.classList.remove("active")),ve("btn-calc-result").classList.add("hidden"))},n.querySelectorAll(".dur-btn").forEach(x=>{x.onclick=()=>{s&&(n.querySelectorAll(".dur-btn").forEach(b=>b.classList.remove("active")),x.classList.add("active"),a=parseInt(x.dataset.hours),ve("btn-calc-result").classList.remove("hidden"))}}),ve("btn-calc-result").onclick=()=>{const x=bv(i,a);qr("sim-step-3","sim-step-4"),Jv(i,x,t,a),ve("btn-sim-finish").classList.remove("hidden"),ve("btn-sim-finish").onclick=()=>{ve("sim-overlay").remove(),e&&e()}}}function kd(n,e){const t=Math.max(.2,n*.001),i=t*1.4,a=t*.8,s=t*.92,r=50,o=Math.max(4e-4,t/350),l=Math.max(.003,t/60);let c=0,d=null,u=0,f=0,p=!1,g=!1;const v=e.dilutionFactor;ve("tit-flask-liquid").style.background=`rgb(${Math.round(55+v*55)},${Math.round(15+v*15)},3)`,ve("tit-flask-liquid").style.transition="background 0.3s",ve("tit-burette-liquid").style.height="90%",ve("tit-vol-reading").textContent="0,00",ve("tit-status").style.display="",ve("tit-ep-notice").classList.add("hidden"),ve("btn-confirm-endpoint").classList.add("hidden"),ve("tit-warning").classList.add("hidden"),ve("tit-overflow").classList.add("hidden"),ve("tit-flask").classList.remove("overflow-shake"),ve("btn-valve-slow").disabled=!1,ve("btn-valve-fast").disabled=!1,ve("tit-flask").querySelectorAll(".overflow-particle").forEach(M=>M.remove()),m(0);function m(M){const I=ve("tit-valve-wheel"),y=ve("tit-valve-label"),T=ve("tit-flow-dot"),U=ve("tit-flow-text");I.className="tit-valve-wheel",M<=0?(I.classList.add("closed"),y.textContent="TUTUP",y.style.color="#6080a0",T.textContent="⬜",U.textContent="Katup TUTUP — tahan tombol untuk mengalirkan KMnO₄"):M===o?(I.classList.add("slow"),y.textContent="PELAN",y.style.color="#00aaff",T.textContent="🔵",U.textContent="Mengalir PELAN — ideal untuk mendekati titik akhir"):(I.classList.add("fast"),y.textContent="CEPAT",y.style.color="#ff5500",T.textContent="🔴",U.textContent="Aliran CEPAT ⚠️ — hati-hati mendekati titik akhir!")}function h(){const M=ve("tit-drop");M.classList.remove("falling"),M.offsetWidth,M.classList.add("falling"),$v()}function _(){const M=Math.max(8,90-c/t*78);if(ve("tit-burette-liquid").style.height=M+"%",ve("tit-vol-reading").textContent=c.toFixed(2).replace(".",","),!p&&c<=t){const I=Math.min(1,c/t),y=Math.round((55+v*55)*(1-I)+255*I),T=Math.round((15+v*15)*(1-I)+155*I),U=Math.round(3*(1-I)+185*I);ve("tit-flask-liquid").style.background=`rgb(${y},${T},${U})`}!g&&!p&&(c>=a&&ve("tit-warning").classList.remove("hidden"),c>=s&&(ve("btn-valve-fast").disabled=!0,u===l&&b()))}function x(M){if(p||g||d)return;u=M,f=0,m(M);const I=M===o?10:3;d=setInterval(()=>{if(c+=M,f++,_(),f%I===0&&h(),c>=i){b(),S();return}c>=t&&(b(),C())},r)}function b(){d&&(clearInterval(d),d=null),u=0,!p&&!g&&m(0)}function C(){g=!0,ve("tit-flask-liquid").style.background="rgba(255,155,185,0.88)",ve("tit-warning").classList.add("hidden"),ve("tit-status").style.display="none",ve("tit-ep-notice").classList.remove("hidden"),ve("btn-valve-slow").disabled=!0,ve("btn-valve-fast").disabled=!0,ve("btn-confirm-endpoint").classList.remove("hidden"),m(0)}function S(){p=!0,ve("tit-flask-liquid").style.background="rgba(180,20,20,0.85)",ve("tit-warning").classList.add("hidden"),ve("tit-overflow").classList.remove("hidden"),ve("btn-valve-slow").disabled=!0,ve("btn-valve-fast").disabled=!0,m(0);const M=ve("tit-flask");M.classList.remove("overflow-shake"),M.offsetWidth,M.classList.add("overflow-shake");for(let I=0;I<8;I++){const y=document.createElement("div");y.className="overflow-particle",y.style.left=10+Math.random()*80+"%",y.style.animationDelay=Math.random()*.4+"s",M.appendChild(y),setTimeout(()=>y.remove(),2e3)}}ve("btn-valve-slow").onmousedown=M=>{M.preventDefault(),x(o)},ve("btn-valve-slow").onmouseup=b,ve("btn-valve-slow").onmouseleave=b,ve("btn-valve-slow").ontouchstart=M=>{M.preventDefault(),x(o)},ve("btn-valve-slow").ontouchend=b,ve("btn-valve-slow").ontouchcancel=b,ve("btn-valve-fast").onmousedown=M=>{M.preventDefault(),x(l)},ve("btn-valve-fast").onmouseup=b,ve("btn-valve-fast").onmouseleave=b,ve("btn-valve-fast").ontouchstart=M=>{M.preventDefault(),x(l)},ve("btn-valve-fast").ontouchend=b,ve("btn-valve-fast").ontouchcancel=b,ve("btn-confirm-endpoint").onclick=()=>{ve("tit-results").classList.remove("hidden"),Yv(e,n),setTimeout(()=>ve("tit-results").scrollIntoView({behavior:"smooth",block:"nearest"}),100)},ve("btn-tit-retry").onclick=()=>{b(),kd(n,e)}}function $v(){const n=ve("tit-ripple");n&&(n.classList.remove("ripple-active"),n.offsetWidth,n.classList.add("ripple-active"))}function Xr(n){const t=n/1e3*100,i=100-t,a=ve("beaker-vinasse"),s=ve("beaker-water");a.style.height=t+"%",a.style.bottom="0%",s.style.height=i+"%",s.style.bottom=t+"%"}function Yv(n,e){const t=ve("initial-params"),i=ve("titration-note");t.innerHTML=[{icon:"🧫",label:"COD",value:n.cod.toLocaleString("id-ID")+" mg/L",sub:"Chemical Oxygen Demand",status:n.cod>600?"danger":n.cod>200?"warn":"good"},{icon:"🦠",label:"BOD",value:n.bod.toLocaleString("id-ID")+" mg/L",sub:"Biochemical Oxygen Demand",status:n.bod>400?"danger":n.bod>100?"warn":"good"},{icon:"⚗️",label:"pH",value:n.ph.toFixed(2),sub:`${n.ph<5?"Sangat Asam ⚠️":n.ph<6.5?"Asam":"Mendekati Netral"}`,status:n.ph<5?"danger":n.ph<6.5?"warn":"good"},{icon:"📏",label:"Faktor Pengenceran",value:`1 : ${(1/n.dilutionFactor).toFixed(1)}`,sub:`${e} mL vinasse dalam 1 000 mL`,status:"neutral"}].map(a=>`
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
  `}function jv(n){const e=ve("aerator-liquid");if(!e)return;const t=Math.min(1,n.cod/45e3),i=Math.round(60+t*60),a=Math.round(20+t*5),s=0;e.style.background=`rgb(${i},${a},${s})`}function Kv(n){const e=ve("bubble-container");if(e&&(e.innerHTML="",!!n))for(let t=0;t<14;t++){const i=document.createElement("div");i.className="bubble",i.style.left=5+Math.random()*85+"%",i.style.animationDuration=1.2+Math.random()*2+"s",i.style.animationDelay=Math.random()*2+"s",i.style.width=i.style.height=4+Math.random()*8+"px",e.appendChild(i)}}function Jv(n,e,t,i){const a=ve("results-grid"),s=ve("compliance-banner"),r=ve("sim-conclusion"),o=[{icon:"🧫",label:"COD",before:n.cod.toLocaleString("id-ID")+" mg/L",after:e.cod.toLocaleString("id-ID")+" mg/L",removal:e.codRemovalPct+"%",limit:"≤ 100 mg/L",pass:e.cod<=100},{icon:"🦠",label:"BOD",before:n.bod.toLocaleString("id-ID")+" mg/L",after:e.bod.toLocaleString("id-ID")+" mg/L",removal:e.bodRemovalPct+"%",limit:"≤ 40 mg/L",pass:e.bod<=40},{icon:"⚗️",label:"pH",before:n.ph.toFixed(2),after:e.ph.toFixed(2),removal:"+"+(e.ph-n.ph).toFixed(2),limit:"6.0 – 9.0",pass:e.ph>=6&&e.ph<=9}];a.innerHTML=`
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
  `}function qr(n,e){const t=ve(n),i=ve(e);t.classList.add("step-exit"),setTimeout(()=>{t.classList.add("hidden"),t.classList.remove("step-exit"),i.classList.remove("hidden"),i.classList.add("step-enter"),setTimeout(()=>i.classList.remove("step-enter"),400)},300)}function Zv(){if(document.getElementById("sim-styles"))return;const n=`
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
  `,e=document.createElement("style");e.id="sim-styles",e.textContent=n,document.head.appendChild(e)}const ws={context:`
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
      bioremediasi vinasse. Skor sedang diberikan.`}],Qv={azolla:{dose:"200 g biomassa segar / L vinasse",duration:"7 hari",codRemoval:"96%",bodRemoval:"94%",notes:"Pertahankan cahaya cukup (> 1000 lux) dan suhu 25–30 °C."},nannochloropsis:{dose:"—",duration:"—",codRemoval:"~0%",bodRemoval:"~0%",notes:"⛔ Tidak cocok untuk vinasse air tawar. Alga akan mati dalam 24 jam."},spirulina:{dose:"1 g biomassa kering / L vinasse (+ buffer pH 8)",duration:"14 hari",codRemoval:"55%",bodRemoval:"60%",notes:"Perlu netralisasi pH vinasse ke 7–8 sebelum inokulasi."},chlorella:{dose:"0.5 g biomassa kering / L vinasse",duration:"10 hari",codRemoval:"70%",bodRemoval:"75%",notes:"Pertahankan kondisi anaerob-fakultatif. Berikan CO₂ setiap 2 hari."}};function yc(n,e){const t=Qv[n];if(!t||t.codRemoval==="~0%")return null;const i=t.dose.match(/^([\d.]+)\s*(g\s*biomassa\s*(?:segar|kering))/i),a=i?parseFloat(i[1]):.5,s=i?i[2].trim():"g";return{total:(a*e).toFixed(1),unit:s,duration:t.duration,codRemoval:t.codRemoval,bodRemoval:t.bodRemoval,notes:t.notes}}const be=n=>document.getElementById(n);function ex(n){sx(),Ga(),tx(()=>{nx(e=>{ix(e,()=>{ax(n)})})})}function tx(n){const e=Bs("s3-overlay");e.innerHTML=`
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
  `,document.body.appendChild(e),be("s3-ctx").innerHTML=ws.context,be("s3-q").innerHTML=`<strong>❓ Pertanyaan:</strong><br>${ws.question}`;const t=be("s3-opts");let i=!1;ws.options.forEach(a=>{const s=document.createElement("button");s.className="s3-option",s.innerHTML=`<strong>${a.label}.</strong> ${a.text}`,s.onclick=()=>{if(!i)if(a.correct){i=!0,s.classList.add("correct"),t.querySelectorAll(".s3-option").forEach(l=>l.disabled=!0);const r=ee.wrongAnswers??0,o=r===0?100:r<=2?50:25;ee.totalPoints+=o,ee.levelAttempts++,jt(),wc("s3-fb",!0,ws.explanation+`<br><br>🎉 +${o} poin tambahan!`),be("s3-next-challenge").classList.remove("hidden")}else s.classList.add("wrong"),s.disabled=!0,ee.wrongAnswers=(ee.wrongAnswers??0)+1,jt(),wc("s3-fb",!1,"❌ Kurang tepat. Coba pilihan lain!")},t.appendChild(s)}),be("s3-next-challenge").onclick=()=>{Ga(),n()}}function nx(n){const e=Bs("s3-overlay");e.innerHTML=`
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
  `,document.body.appendChild(e);let t=null;function i(){const a=be("s3-shop-grid");a.innerHTML="",Ca.forEach(s=>{const r=document.createElement("div");r.className="s3-micro-card",t&&s.id===t&&r.classList.add("chosen");const o=ee.totalPoints>=s.price;r.innerHTML=`
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
      `,a.appendChild(r)})}i(),be("s3-shop-pts").textContent=ee.totalPoints+" poin",be("s3-shop-grid").addEventListener("click",a=>{const s=a.target.closest(".s3-buy-btn");if(!s||s.disabled||t)return;const r=Ca.find(l=>l.id===s.dataset.id);if(!r)return;ee.totalPoints-=r.price,jt(),be("s3-shop-pts").textContent=ee.totalPoints+" poin";const o=be("s3-shop-result");o.classList.remove("hidden"),r.outcome==="punishment"?(o.className="s3-shop-result punishment",o.innerHTML=r.punishmentText+"<br><br>💡 <b>Coba lagi</b> — pilih mikroorganisme yang lebih tepat!",i(),be("s3-shop-pts").textContent=ee.totalPoints+" poin",Ca.filter(c=>c.outcome!=="punishment").some(c=>ee.totalPoints>=c.price)||(o.innerHTML+="<br><br>⛔ <b>Poin kamu tidak cukup</b> untuk membeli mikroorganisme yang tepat.",be("s3-btn-restart").classList.remove("hidden"))):(t=r.id,o.className="s3-shop-result "+(r.outcome==="reward_high"?"reward-high":"reward-mid"),o.innerHTML=r.rewardText,i(),setTimeout(()=>be("s3-btn-to-lab").classList.remove("hidden"),800))}),be("s3-btn-to-lab").onclick=()=>{Ga(),n(t)},be("s3-btn-restart").onclick=()=>{window.location.reload()}}function ix(n,e){const t=Ca.find(b=>b.id===n)||Ca[0],i=Bs("s3-overlay");i.innerHTML=`
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
          ${[10,50,100,500,1e3].map(b=>`
            <button class="s3-vol-btn" data-vol="${b}">${b} L</button>
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
  `,document.body.appendChild(i);let a=null,s=0,r=!1,o=null,l=0,c=[],d=null,u=null,f=null,p=!1,g=null;const v=6,h={azolla:"#4ecb47",nannochloropsis:"#c8b820",spirulina:"#2ab8d8",chlorella:"#38d878"}[t.id]||"#80e880";i.querySelectorAll(".s3-vol-btn").forEach(b=>{b.onclick=()=>{i.querySelectorAll(".s3-vol-btn").forEach(V=>V.classList.remove("active")),b.classList.add("active"),a=parseInt(b.dataset.vol);const C=yc(n,a);g&&(g(),g=null),s=0,r=!1,be("s3-lab-result").classList.add("hidden"),be("s3-btn-to-valve").classList.add("hidden"),be("s3-spk-micro-layer").style.transition="none",be("s3-spk-micro-layer").style.height="0%",be("s3-pour-counter").classList.add("hidden"),be("s3-pour-progress-wrap").classList.add("hidden"),be("s3-pour-feedback").classList.add("hidden"),be("s3-btn-confirm-pour").classList.add("hidden"),be("s3-pour-hint").classList.remove("hidden"),be("s3-poured-amt").textContent="0.0",be("s3-pour-bar-fill").style.width="0%",C?(be("s3-target-amt").textContent=C.total,be("s3-target-unit").textContent=C.unit,be("s3-poured-unit").textContent=C.unit,be("s3-spk-target-line").style.display=""):be("s3-spk-target-line").style.display="none",be("s3-spk-dose-label").innerHTML=C?`Dosis yang dibutuhkan: <b>${C.total} ${C.unit}</b> untuk ${a} L vinasse`:`⛔ ${t.name} tidak cocok untuk vinasse ini`,o=C;const S=C?parseFloat(C.total):0;l=S*.25,c=Array(v).fill(l),d=null;const M=be("s3-glass-row");if(M.innerHTML="",C)for(let V=0;V<v;V++){const Z=document.createElement("div");Z.className="s3-micro-glass",Z.id=`s3-mg-${V}`,Z.dataset.idx=String(V),Z.innerHTML=`<div class="s3-mg-liquid" id="s3-mg-liq-${V}" style="background:${h};height:85%"></div><div class="s3-mg-label">¼</div>`,M.appendChild(Z)}const I=document.getElementById("s3-mg-ghost");I&&I.remove();const y=document.createElement("div");y.id="s3-mg-ghost",y.className="s3-mg-ghost hidden",y.innerHTML=`<div class="s3-mg-ghost-liquid" id="s3-mg-ghost-liquid" style="background:${h}"></div>`,document.body.appendChild(y);function T(V){const Z=document.getElementById(`s3-mg-liq-${V}`),O=document.getElementById(`s3-mg-${V}`);!Z||!O||(Z.style.height=l>0?c[V]/l*100+"%":"0%",c[V]<=0&&(O.classList.add("empty"),O.classList.remove("dragging")))}function U(){const V=document.getElementById("s3-tank-drops");if(!V)return;const Z=document.createElement("div");Z.className="s3-mg-drop",Z.style.background=h,Z.style.setProperty("--spread",(Math.random()-.5)*10+"px"),Z.style.setProperty("--dur",.26+Math.random()*.26+"s"),V.appendChild(Z),setTimeout(()=>Z.remove(),600)}function H(){if(u||d===null||!o)return;const V=S*1.5;u=setInterval(()=>{if(d===null||c[d]<=0||s>=V){se();return}const Z=Math.max(S*.01,.001),O=Math.min(Z,c[d],V-s);c[d]-=O,s=Math.min(s+O,V),T(d),be("s3-poured-amt").textContent=s.toFixed(1);const te=document.getElementById("s3-mg-ghost-liquid");te&&(te.style.height=l>0?c[d]/l*100+"%":"0%");const Y=Math.min(s/V,1)*30;be("s3-spk-micro-layer").style.transition="none",be("s3-spk-micro-layer").style.height=Y+"%",be("s3-spk-micro-layer").style.background=h;const me=Math.min(s/V,1)*100;be("s3-pour-bar-fill").style.width=me+"%";const fe=S>0?s/S:0;be("s3-pour-bar-fill").style.background=fe<.7?"#20a0d0":fe<.8?"#60d060":fe<=1.2?"#00e870":fe<=1.5?"#e8a020":"#e04020"},80),f=setInterval(U,55)}function se(){clearInterval(u),clearInterval(f),u=f=null}function P(V,Z){y.style.left=V-18+"px",y.style.top=Z-60+"px";const O=document.getElementById("s3-tank-drop-zone");if(!O)return;const te=O.getBoundingClientRect(),Y=V>=te.left&&V<=te.right&&Z>=te.top&&Z<=te.bottom;Y!==p&&(p=Y,O.classList.toggle("active",Y),y.classList.toggle("tilting",Y),Y?H():se())}function F(V,Z,O){var Y;if(c[V]<=0)return;d=V,p=!1,(Y=document.getElementById(`s3-mg-${V}`))==null||Y.classList.add("dragging"),y.classList.remove("hidden");const te=document.getElementById("s3-mg-ghost-liquid");te&&(te.style.height=l>0?c[V]/l*100+"%":"85%"),r||(r=!0,be("s3-pour-hint").classList.add("hidden"),be("s3-pour-counter").classList.remove("hidden"),be("s3-pour-progress-wrap").classList.remove("hidden"),be("s3-btn-confirm-pour").classList.remove("hidden")),P(Z,O)}function X(){var Z,O;if(d===null)return;se(),T(d),(Z=document.getElementById(`s3-mg-${d}`))==null||Z.classList.remove("dragging"),d=null,p=!1,y.classList.add("hidden"),y.classList.remove("tilting"),(O=document.getElementById("s3-tank-drop-zone"))==null||O.classList.remove("active");const V=document.getElementById("s3-tank-drop-lbl");V&&(V.textContent=s>0&&o?`✓ ${s.toFixed(1)} ${o.unit} dituang`:"Jatuhkan di sini")}for(let V=0;V<v;V++){const Z=document.getElementById(`s3-mg-${V}`);Z&&(Z.addEventListener("mousedown",O=>{F(V,O.clientX,O.clientY),O.preventDefault()}),Z.addEventListener("touchstart",O=>{F(V,O.touches[0].clientX,O.touches[0].clientY),O.preventDefault()},{passive:!1}))}function ne(V){d!==null&&P(V.clientX,V.clientY)}function $(){X()}function K(V){d!==null&&(P(V.touches[0].clientX,V.touches[0].clientY),V.preventDefault())}function J(){X()}window.addEventListener("mousemove",ne),window.addEventListener("mouseup",$),window.addEventListener("touchmove",K,{passive:!1}),window.addEventListener("touchend",J),g=()=>{X(),window.removeEventListener("mousemove",ne),window.removeEventListener("mouseup",$),window.removeEventListener("touchmove",K),window.removeEventListener("touchend",J);const V=document.getElementById("s3-mg-ghost");V&&V.remove()},be("s3-sprinkler-scene").classList.remove("hidden"),be("s3-sprinkler-scene").scrollIntoView({behavior:"smooth",block:"nearest"})}});function _(b){const C=be("s3-calc-grid"),S=be("s3-lab-notes");b?(C.innerHTML=[{icon:"⚗️",label:"Volume Vinasse",value:`${a} L`},{icon:"🧫",label:"Dosis Mikro",value:`${b.total} ${b.unit}`},{icon:"⏱️",label:"Durasi Perlakuan",value:b.duration},{icon:"📉",label:"Penurunan COD",value:b.codRemoval},{icon:"💧",label:"Penurunan BOD",value:b.bodRemoval}].map(M=>`
        <div class="s3-calc-card">
          <span class="s3-calc-icon">${M.icon}</span>
          <span class="s3-calc-label">${M.label}</span>
          <span class="s3-calc-value">${M.value}</span>
        </div>`).join(""),S.innerHTML=`📝 <b>Catatan:</b> ${b.notes}`):(C.innerHTML=`
        <div class="s3-calc-card fail">
          <span class="s3-calc-icon">⛔</span>
          <span class="s3-calc-label">Tidak dapat digunakan</span>
          <span class="s3-calc-value">${t.name} tidak cocok untuk vinasse ini</span>
        </div>`,S.innerHTML="⚠️ Pilihan mikroorganisme tidak valid untuk kondisi vinasse ini."),be("s3-lab-result").classList.remove("hidden"),be("s3-btn-to-valve").classList.remove("hidden"),be("s3-lab-result").scrollIntoView({behavior:"smooth",block:"nearest"})}function x(){setTimeout(()=>{if(s=0,r=!1,l>0)for(let C=0;C<v;C++){c[C]=l;const S=document.getElementById(`s3-mg-liq-${C}`),M=document.getElementById(`s3-mg-${C}`);S&&(S.style.height="85%"),M&&M.classList.remove("empty","dragging")}be("s3-spk-micro-layer").style.transition="none",be("s3-spk-micro-layer").style.height="0%",be("s3-poured-amt").textContent="0.0",be("s3-pour-bar-fill").style.width="0%",be("s3-pour-counter").classList.add("hidden"),be("s3-pour-progress-wrap").classList.add("hidden"),be("s3-btn-confirm-pour").classList.add("hidden"),be("s3-pour-hint").classList.remove("hidden"),be("s3-pour-feedback").classList.add("hidden");const b=document.getElementById("s3-tank-drop-lbl");b&&(b.textContent="Jatuhkan di sini")},2500)}be("s3-btn-confirm-pour").onclick=()=>{const b=yc(n,a),C=be("s3-pour-feedback");if(C.classList.remove("hidden"),be("s3-btn-confirm-pour").classList.add("hidden"),!b){C.className="s3-pour-feedback punishment",C.innerHTML="⚠️ Mikroorganisme ini tidak cocok — hasilnya tidak optimal.",setTimeout(()=>_(null),1200);return}const S=parseFloat(b.total),M=s/S;M<.8?(C.className="s3-pour-feedback wrong",C.innerHTML=`⚠️ <b>Kurang!</b> Kamu menuangkan <b>${s.toFixed(1)} ${b.unit}</b>,
        padahal target <b>${b.total} ${b.unit}</b>. Seret lebih banyak gelas!`,x()):M>1.2?(C.className="s3-pour-feedback wrong",C.innerHTML=`⚠️ <b>Terlalu banyak!</b> Kamu menuangkan <b>${s.toFixed(1)} ${b.unit}</b>,
        target hanya <b>${b.total} ${b.unit}</b>. Coba lagi!`,x()):(C.className="s3-pour-feedback correct",C.innerHTML=`✅ <b>Tepat!</b> <b>${s.toFixed(1)} ${b.unit}</b> — sesuai dosis bioremediasi!`,be("s3-spk-micro-layer").style.transition="height 1.2s ease",be("s3-spk-micro-layer").style.height="30%",setTimeout(()=>_(b),1500))},be("s3-btn-to-valve").onclick=()=>{g&&(g(),g=null),Ga(),e()}}function ax(n){const e=Bs("s3-overlay");e.innerHTML=`
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
  `,document.body.appendChild(e);let t=!1;be("s3-btn-open-valve").onclick=()=>{if(t)return;t=!0;const i=be("s3-valve-wheel");i.style.animation="valveSpin 0.8s ease forwards";const a=be("s3-flow");a.innerHTML="";for(let s=0;s<8;s++){const r=document.createElement("div");r.className="s3-drop",r.style.animationDelay=s*.12+"s",r.style.left=30+Math.random()*30+"%",a.appendChild(r)}a.classList.add("flowing"),setTimeout(()=>{be("s3-tank-liquid").style.height="75%"},600),be("s3-btn-open-valve").disabled=!0,be("s3-btn-open-valve").textContent="✅ Kran Terbuka",be("s3-valve-instr").textContent="Vinasse mengalir ke reaktor bioremediasi…",setTimeout(()=>{be("s3-level-complete").classList.remove("hidden"),be("s3-final-pts").textContent=ee.totalPoints+" poin"},1800)},be("s3-btn-finish").onclick=()=>{Ga(),n&&n()}}function Bs(n){const e=document.createElement("div");return e.id=n,e.className="s3-overlay",e}function Ga(){const n=be("s3-overlay");n&&n.remove()}function wc(n,e,t){const i=be(n);i&&(i.className="s3-feedback "+(e?"correct":"wrong"),i.innerHTML=t,i.classList.remove("hidden"))}function sx(){if(be("s3-styles"))return;const n=`
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
  `,e=document.createElement("style");e.id="s3-styles",e.textContent=n,document.head.appendChild(e)}const rx=[{id:"aerator_1",category:"alat",name:"Aerator (1 unit)",emoji:"💨",desc:"Pompa udara kecil untuk mensuplai O₂ ke dalam cairan. 1 unit = aerasi lemah.",effect:{aerationLevel:1},required:!0},{id:"aerator_2",category:"alat",name:"Aerator (2 unit)",emoji:"💨💨",desc:"Dua pompa udara — aerasi sedang, O₂ terdistribusi lebih merata.",effect:{aerationLevel:2},required:!1},{id:"aerator_3",category:"alat",name:"Aerator (3 unit)",emoji:"💨💨💨",desc:"Tiga pompa udara — aerasi maksimal, O₂ penuh, pH lebih cepat turun.",effect:{aerationLevel:3},required:!1},{id:"aquarium",category:"alat",name:"Aquarium / Bak Kolam",emoji:"🪣",desc:"Wadah penampung cairan vinasse. Diletakkan dalam kondisi tertutup rapat saat percobaan berjalan.",effect:{hasContainer:!0},required:!0},{id:"selang",category:"alat",name:"Pipa / Selang",emoji:"🔩",desc:"Menghubungkan aerator ke dalam cairan. Diperlukan agar gelembung udara sampai ke dasar.",effect:{hasHose:!0},required:!0},{id:"listrik",category:"alat",name:"Aliran Listrik",emoji:"⚡",desc:"Sumber daya untuk aerator dan lampu. Wajib jika menggunakan peralatan listrik.",effect:{hasPower:!0},required:!0},{id:"penyaring",category:"alat",name:"Penyaring",emoji:"🕸️",desc:"Filter mekanik untuk menyaring biomassa Azolla atau partikel kasar setelah perlakuan.",effect:{hasFilter:!0},required:!1},{id:"lampu",category:"alat",name:"Lampu (Grow-light)",emoji:"💡",desc:"Pencahayaan tambahan > 1000 lux untuk mendukung fotosintesis Azolla. Sangat dianjurkan.",effect:{hasLight:!0},required:!1}],ox=[{id:"vinasse",category:"bahan",name:"Limbah Vinasse",emoji:"🪣",desc:"Bahan utama — limbah cair dari distilasi etanol. COD awal ±80.000 mg/L, pH 3–4.",required:!0},{id:"azolla_bio",category:"bahan",name:"Azolla microphylla (biomassa)",emoji:"🌿",desc:"Agen bioremediasi utama. Dosis: 200 g biomassa segar per 1 L vinasse.",required:!0},{id:"air_pengencer",category:"bahan",name:"Air Pengencer",emoji:"💧",desc:"Untuk mengencerkan vinasse ke konsentrasi yang optimal bagi pertumbuhan Azolla.",required:!1},{id:"buffer_ph",category:"bahan",name:"Buffer pH (NaHCO₃)",emoji:"🧪",desc:"Meningkatkan pH vinasse ke 5–7 agar Azolla dapat hidup pada fase awal inokulasi.",required:!1}],lx=[{step:1,icon:"🪣",title:"Siapkan Wadah",desc:"Masukkan air limbah vinasse ke dalam aquarium/bak/kolam yang sudah disiapkan.",requires:["aquarium","vinasse"]},{step:2,icon:"🧫",title:"Ukur Parameter Awal",desc:"Ukur kadar COD, BOD dengan titrasi; pH menggunakan kertas lakmus atau pH meter.",requires:[]},{step:3,icon:"🌿",title:"Tambahkan Mikroorganisme",desc:"Tambahkan Azolla microphylla dengan 3 variasi konsentrasi (10%, 50%, 100% dosis referensi). Jika cair: pengenceran; jika padat: tambahkan bibit terlebih dahulu.",requires:["azolla_bio"]},{step:4,icon:"💨",title:"Nyalakan Aerator",desc:"Nyalakan aerator yang telah terhubung selang. Sesuaikan kecepatan aerasi sesuai jumlah aerator yang dipilih.",requires:["aerator_1","selang","listrik"]},{step:5,icon:"💡",title:"Tambahkan Pencahayaan",desc:"Pasang grow-light karena Azolla membutuhkan cahaya untuk fotosintesis. Target: > 1000 lux.",requires:["lampu"]},{step:6,icon:"🔒",title:"Tutup & Jalankan",desc:"Tutup aquarium dan biarkan aerator terus menyala tanpa terputus selama 7 hari (durasi berdasarkan literatur).",requires:["aquarium"]},{step:7,icon:"🔬",title:"Amati Perubahan",desc:"Catat perubahan warna, bau, dan kondisi Azolla setiap hari. Warna vinasse berubah dari hitam → coklat muda menandakan penurunan melanoidin.",requires:[]},{step:8,icon:"📊",title:"Ukur Parameter Akhir",desc:"Ukur COD, BOD, dan pH akhir. Bandingkan dengan nilai awal untuk menghitung persentase penurunan.",requires:[]},{step:9,icon:"📝",title:"Tulis Laporan",desc:"Susun laporan penelitian: latar belakang, metode, hasil (tabel COD/BOD awal-akhir), pembahasan, dan kesimpulan.",requires:[]}];function cx(n,e){const t=new Set(n),i=t.has("aquarium"),a=t.has("aerator_1")||t.has("aerator_2")||t.has("aerator_3"),s=t.has("aerator_3")?3:t.has("aerator_2")?2:t.has("aerator_1")?1:0,r=t.has("selang"),o=t.has("listrik"),l=t.has("lampu"),c=t.has("penyaring"),d=t.has("azolla_bio"),u=t.has("vinasse"),f=t.has("buffer_ph"),p=[];if(i||p.push("Aquarium/Bak (wadah wajib)"),a||p.push("Aerator (aerasi wajib untuk O₂)"),r||p.push("Pipa/Selang (penghubung aerator)"),o||p.push("Aliran Listrik (sumber daya aerator)"),d||p.push("Azolla microphylla (agen bioremediasi)"),u||p.push("Limbah Vinasse (bahan utama)"),p.length>0)return{success:!1,codReduction:0,bodReduction:0,grade:"Gagal",gradeColor:"#ff4444",missing:p,feedback:`❌ Rancangan tidak lengkap! Item yang kurang: ${p.join(", ")}.`};let g=60,v=58;s>=2&&(g+=12,v+=10),s>=3&&(g+=8,v+=6),l&&(g+=16,v+=14),f&&(g+=8,v+=8),c&&(g+=4),g=Math.min(g,96),v=Math.min(v,94);let m,h;g>=85?(m="Sangat Baik ⭐⭐⭐",h="#40ff80"):g>=70?(m="Baik ⭐⭐",h="#a0c840"):(m="Cukup ⭐",h="#e0a020");const _=e&&e.concentrations||[10,50,100],x=e&&e.duration||7,b=Math.min(1,.6+x/25),C=_.map(S=>{const M=Math.min(1,.4+S/100*.6)*b,I=Math.round(g*M),y=Math.round(v*M);let T;return S<=15?T="Dosis sangat rendah; penurunan terbatas":S<=40?T="Dosis rendah; penurunan sedang":S<=80?T="Dosis moderat; efisiensi cukup baik":S<=110?T="Dosis optimal; performa terbaik":T="Dosis lebih; tidak banyak tambahan manfaat",{conc:S,cod:I,bod:y,note:T}});return{success:!0,aerationLvl:s,hasLight:l,hasFilter:c,hasBuffer:f,codReduction:g,bodReduction:v,grade:m,gradeColor:h,missing:[],feedback:`✅ Reaktor berhasil dirancang! Perkiraan penurunan COD rata-rata: <b>${g}%</b>, BOD: <b>${v}%</b>.`,perConcentration:C}}const tt=n=>document.getElementById(n);function Cd(n){fx(),oa(),dx(e=>{ux(e,t=>{const i=cx(e,t);ee.stage4.selectedItems=e,ee.stage4.reactorResult=i,ee.stage4.concentrationCfg=t,hx(i,()=>{px(i,n)})})})}function dx(n){const e=[...rx,...ox],t=Gs();t.innerHTML=`
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
  `,document.body.appendChild(t);const i=new Set(e.filter(r=>r.required).map(r=>r.id));function a(){const r=tt("s4-builder-grid");r.innerHTML="";for(const o of["alat","bahan"]){const l=document.createElement("div");l.className="s4-cat-label",l.textContent=o==="alat"?"🔩 ALAT":"🧪 BAHAN",r.appendChild(l),e.filter(d=>d.category===o).forEach(d=>{const u=i.has(d.id),f=document.createElement("div");f.className=`s4-item-card${u?" selected":""}`,f.dataset.id=d.id;const p=d.id.startsWith("aerator_");f.innerHTML=`
          <div class="s4-item-check">${u?"☑":"☐"}</div>
          <div class="s4-item-emoji">${d.emoji}</div>
          <div class="s4-item-name">${d.name}
            ${d.required?'<span class="s4-required-tag">WAJIB</span>':""}
          </div>
          <div class="s4-item-desc">${d.desc}</div>
        `,f.onclick=()=>{d.required||(p&&["aerator_1","aerator_2","aerator_3"].forEach(g=>i.delete(g)),i.has(d.id)?i.delete(d.id):i.add(d.id),s(),a())},r.appendChild(f)})}}function s(){tt("s4-sel-count").textContent=`${i.size} item dipilih`;const r=i.has("aerator_3")?3:i.has("aerator_2")?2:i.has("aerator_1")?1:0,o=tt("s4-sel-aerator");r>0?(o.textContent=`💨 Aerasi: ${r} unit`,o.classList.remove("hidden")):o.classList.add("hidden")}a(),s(),tt("s4-btn-build").onclick=()=>{oa(),n([...i])}}function ux(n,e){const t=Gs();t.innerHTML=`
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
  `,document.body.appendChild(t);const i=[10,50,100],a=[...i],s=tt("s4-conc-sliders");function r(){tt("s4-conc-preview").innerHTML=a.map((p,g)=>{const v=(200*p/100).toFixed(1);return`<div class="s4-conc-pill">
        <span class="s4-conc-pill-label">T${g+1}</span>
        <b>${p}%</b> <span class="s4-conc-pill-sub">(${v} g/L)</span>
      </div>`}).join("")}for(let p=0;p<3;p++){const g=document.createElement("div");g.className="s4-slider-row",g.innerHTML=`
      <span class="s4-slider-tier">T${p+1}</span>
      <input type="range" class="s4-slider" min="5" max="200" step="5"
             value="${i[p]}" id="s4-slider-${p}">
      <span class="s4-slider-val" id="s4-slval-${p}">${i[p]}%</span>
    `,s.appendChild(g),document.getElementById(`s4-slider-${p}`).addEventListener("input",v=>{a[p]=parseInt(v.target.value),tt(`s4-slval-${p}`).textContent=a[p]+"%",r()})}r();let o=3;const l={1:"⚠️ 1 ulangan tidak memenuhi syarat validitas statistik.",2:"⚠️ 2 ulangan cukup minimal.",3:"✅ 3 ulangan — standar minimum penelitian ilmiah.",4:"✅ 4 ulangan — lebih baik, data makin valid.",5:"✅ 5 ulangan — sangat baik untuk replikasi!"};function c(){tt("s4-rep-feedback").innerHTML=l[o]||"",tt("s4-rep-feedback").className="s4-rep-feedback "+(o>=3?"good":"warn")}tt("s4-rep-btns").querySelectorAll(".s4-rep-btn").forEach(p=>{p.onclick=()=>{tt("s4-rep-btns").querySelectorAll(".s4-rep-btn").forEach(g=>g.classList.remove("active")),p.classList.add("active"),o=parseInt(p.dataset.rep),c()}}),c();let d=7;const u={3:"⚠️ 3 hari terlalu singkat untuk degradasi Azolla yang signifikan.",5:"🟡 5 hari: penurunan mulai terlihat tetapi belum optimal.",7:"✅ 7 hari: sesuai rekomendasi literatur (Rizky et al., 2017).",10:"✅ 10 hari: lebih optimal, terutama jika aerasi sedang.",14:"✅ 14 hari: maksimal untuk hasil terbaik pada dosis rendah."};function f(){tt("s4-dur-feedback").innerHTML=u[d]||"",tt("s4-dur-feedback").className="s4-dur-feedback "+(d>=7?"good":d>=5?"warn":"bad")}tt("s4-dur-btns").querySelectorAll(".s4-dur-btn").forEach(p=>{p.onclick=()=>{tt("s4-dur-btns").querySelectorAll(".s4-dur-btn").forEach(g=>g.classList.remove("active")),p.classList.add("active"),d=parseInt(p.dataset.day),f()}}),f(),tt("s4-btn-cfg-done").onclick=()=>{oa(),e({concentrations:[...a],repetitions:o,duration:d})}}function hx(n,e){var s;const t=Gs();t.innerHTML=`
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
  `,document.body.appendChild(t);const i=(s=ee.stage4)==null?void 0:s.concentrationCfg;i&&(tt("s4-cfg-summary").innerHTML=`
      <div class="s4-info-box">
        Rancangan kamu: Konsentrasi <b>${i.concentrations.join("%, ")}%</b>
        · Ulangan <b>${i.repetitions}×</b> · Durasi <b>${i.duration} hari</b>
      </div>`);const a=tt("s4-proc-list");lx.forEach(r=>{const o=document.createElement("div");o.className="s4-proc-step",o.innerHTML=`
      <div class="s4-proc-icon">${r.icon}</div>
      <div class="s4-proc-body">
        <div class="s4-proc-title">Langkah ${r.step}: ${r.title}</div>
        <div class="s4-proc-desc">${r.desc}</div>
      </div>
    `,a.appendChild(o)}),tt("s4-btn-proc-done").onclick=()=>{oa(),e()}}function px(n,e){var s;const t=Gs(),i=((s=ee.stage4)==null?void 0:s.concentrationCfg)||{repetitions:3,duration:7};if(t.innerHTML=`
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
  `,document.body.appendChild(t),!n.success){tt("s4-btn-finish").onclick=()=>{oa(),Cd(e)};return}let a=!1;tt("s4-run-sim").onclick=()=>{if(a)return;a=!0,tt("s4-run-sim").disabled=!0,tt("s4-run-sim").textContent="⏳ Simulasi berjalan…";const r=tt("s4-rd-liquid"),o=tt("s4-rd-azolla");tt("s4-rd-bubbles").classList.add("active"),r.classList.add("treating"),o.classList.add("growing"),setTimeout(()=>{tt("s4-run-sim").textContent="✅ Simulasi Selesai",tt("s4-sim-results").classList.remove("hidden");const c=tt("s4-conc-tbody");c.innerHTML="",n.perConcentration.forEach((d,u)=>{const f=document.createElement("tr");f.innerHTML=`
          <td>T${u+1}</td>
          <td>${d.conc}%</td>
          <td>${(200*d.conc/100).toFixed(1)} g/L</td>
          <td style="color:${n.gradeColor}">${d.cod}%</td>
          <td style="color:${n.gradeColor}">${d.bod}%</td>
          <td style="font-size:11px;color:#6090a0">${d.note}</td>
        `,c.appendChild(f)}),setTimeout(()=>{tt("s4-bar-cod").style.width=Math.min(100,n.codReduction)+"%",tt("s4-val-cod").textContent=n.codReduction+"%",tt("s4-bar-bod").style.width=Math.min(100,n.bodReduction)+"%",tt("s4-val-bod").textContent=n.bodReduction+"%"},100),setTimeout(()=>{const d=document.createElement("button");d.className="s4-btn",d.style.marginTop="8px",d.textContent="➡️ Lanjut ke Level 5 – Evaluasi",d.onclick=()=>{oa(),e&&e()},tt("s4-sim-results").appendChild(d),d.scrollIntoView({behavior:"smooth",block:"nearest"})},900)},2200)}}function Hs(n){return`<div class="s4-step-indicator">
    ${[{n:1,label:"Builder"},{n:2,label:"Konsentrasi"},{n:3,label:"Prosedur"},{n:4,label:"Hasil"}].map((t,i)=>`
      ${i>0?'<span class="s4-step-arrow">→</span>':""}
      <span class="s4-step ${t.n<n?"done":t.n===n?"active":""}">
        ${t.n<n?"✔ ":""}${t.n}. ${t.label}
      </span>
    `).join("")}
  </div>`}function Gs(){const n=document.createElement("div");return n.id="s4-overlay",n.className="s4-overlay",n}function oa(){const n=tt("s4-overlay");n&&n.remove()}function fx(){if(tt("s4-styles"))return;const n=document.createElement("style");n.id="s4-styles",n.textContent=`
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
  `,document.head.appendChild(n)}const mx=[{id:"no_light",title:"Kegagalan: Azolla Tidak Dapat Berfotosintesis",emoji:"🌑",condition:n=>!n.hasLight,symptom:"Warna vinasse tetap hitam pekat setelah 7 hari. Azolla menguning dan mati pada hari ke-3.",cause:"Aquarium tidak mendapat pencahayaan yang cukup (< 200 lux). Azolla tidak dapat melakukan fotosintesis sehingga tidak menghasilkan O₂.",theory:"Azolla microphylla adalah fototrofi obligat — ia wajib mendapat cahaya (> 1000 lux) untuk mengaktifkan fotosistem II dan menghasilkan ATP yang diperlukan untuk pertumbuhan dan produksi eksudat enzimatis pengurai melanoidin.",fix:"Pasang grow-light 1000–3000 lux, atau letakkan reaktor di bawah sinar matahari langsung.",scoreImpact:-15},{id:"low_aeration",title:"Kegagalan: Aerasi Kurang — O₂ Tidak Mencukupi",emoji:"💧",condition:n=>n.aerationLvl<2,symptom:"pH turun sangat lambat. Bau asam tetap tajam pada hari ke-5. COD hanya turun ~40%.",cause:"Hanya 1 aerator yang digunakan. Distribusi O₂ tidak merata — zona anoksik terbentuk di sudut reaktor dan menghambat aktivitas Azolla.",theory:"Proses aerob dalam bioremediasi sangat bergantung pada suplai O₂ terlarut (DO). Nilai DO optimal adalah > 4 mg/L. Dengan 1 aerator kecil, zona pusat reaktor mungkin cukup, tetapi sudut-sudut reaktor akan mengalami anoksia yang menghambat degradasi polutan.",fix:"Tambahkan minimal 2 aerator dan atur posisi selang agar gelembung udara mencapai seluruh volume cairan.",scoreImpact:-10},{id:"no_buffer",title:"Peringatan: pH Terlalu Asam di Awal",emoji:"⚗️",condition:n=>!n.hasBuffer,symptom:n=>`Azolla tumbuh lambat ${n&&n.duration<=5?"di hari-hari pertama percobaan":"pada minggu pertama"}. Beberapa tanaman mengalami klorosis (daun kuning) karena stres pH asam.`,cause:"Vinasse murni memiliki pH 3–4. Azolla bekerja optimal pada pH 5–7. Tanpa buffer pH, fase adaptasi berlangsung lama.",theory:"Enzim nitrogenase pada simbiont Anabaena azollae sangat sensitif terhadap pH rendah. Pada pH < 4.5, aktivitas nitrogenase menurun drastis sehingga fiksasi N₂ dan produksi eksudat berhenti. Penambahan NaHCO₃ (buffer) membantu menstabilkan pH ke 5.5–6.5 pada fase awal.",fix:"Tambahkan NaHCO₃ atau air kapur secukupnya hingga pH vinasse mencapai 5.5–6 sebelum inokulasi Azolla.",scoreImpact:-5},{id:"no_filter",title:"Catatan: Effluen Belum Tersaring",emoji:"🕸️",condition:n=>!n.hasFilter,symptom:"Cairan effluen mengandung partikel biomassa Azolla yang terlepas, membuat cairan tampak keruh meski COD sudah turun.",cause:"Tidak ada penyaring mekanik di akhir proses. Biomassa Azolla yang mati terlarut dan meningkatkan TSS (Total Suspended Solid) effluen.",theory:"Standar baku mutu air limbah (PERMEN LH No. 5/2014) mensyaratkan TSS < 200 mg/L untuk buangan ke badan air. Tanpa filtrasi, meski COD/BOD sudah memenuhi syarat, TSS bisa melebihi batas.",fix:"Pasang penyaring mesh 100–200 µm di outlet reaktor sebelum effluen dibuang atau diproses lanjut menjadi POC.",scoreImpact:0}],Si=n=>document.getElementById(n);function gx(n){_x(),Vs(),vx(()=>{xx(()=>{bx(n)})})}function vx(n){var a;const e=ee.stage4.reactorResult||{},t=mx.filter(s=>s.condition(e)),i=Do();if(i.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">🔍 LEVEL 5 – EVALUASI PERCOBAAN</span>
        <h2 class="s5-title">Apa yang Terjadi pada Reaktormu?</h2>
        <p class="s5-subtitle">Analisis kegagalan dan keberhasilan percobaan berdasarkan desain yang kamu buat.</p>
      </div>
      ${Po(1)}

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
  `,document.body.appendChild(i),t.length>0){const s=((a=ee.stage4)==null?void 0:a.concentrationCfg)||null,r=Si("s5-scen-list");t.forEach((o,l)=>{const c=typeof o.symptom=="function"?o.symptom(s):o.symptom,d=document.createElement("div");d.className="s5-scenario-card",d.innerHTML=`
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
      `,l===0&&d.classList.add("open"),r.appendChild(d)})}Si("s5-btn-to-mcq").onclick=()=>{Vs(),n()}}function xx(n){const e=`Dalam proyek yang telah kalian buat, limbah vinasse dari industri etanol di Bekonang memiliki karakteristik pH yang sangat asam, kadar COD dan BOD yang sangat tinggi, serta mengandung pigmen melanoidin dan senyawa fenol.
Berdasarkan konsep bioremediasi yang telah kalian pelajari, analisislah mengapa penggunaan bakteri pengurai seringkali gagal dalam memulihkan limbah vinasse ini? Selanjutnya, jelaskan mekanisme pemilihan agen biologis dapat secara efektif menurunkan kadar polutan dalam proses valorisasi limbah tersebut menjadi Pupuk Organik Cair (POC) yang aman bagi lingkungan`,t=Do();t.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">✏️ EVALUASI ESAI</span>
        <h2 class="s5-title">Jawab Pertanyaan Berikut</h2>
      </div>
      ${Po(2)}
      <div class="s5-question s5-essay-question">${e.replace(/\n/g,"<br>")}</div>
      <textarea class="s5-essay-textarea" id="s5-essay-input"
        placeholder="Tuliskan jawaban analisismu di sini..."
        rows="8"></textarea>
      <div class="s5-essay-hint">Jawaban akan ditampilkan di halaman ringkasan akhir.</div>
      <button class="s5-btn" id="s5-btn-essay-submit" disabled>✅ Simpan Jawaban</button>
    </div>
  `,document.body.appendChild(t);const i=Si("s5-essay-input"),a=Si("s5-btn-essay-submit");i.oninput=()=>{a.disabled=i.value.trim().length<10},a.onclick=()=>{ee.stage5=ee.stage5||{},ee.stage5.essayAnswer=i.value.trim(),Ev({playerName:ee.playerName||"",essayAnswer:ee.stage5.essayAnswer,timestamp:new Date().toISOString()}),Vs(),n()}}function bx(n){var s,r;const e=ee.stage4.reactorResult||{},t=((s=ee.stage4)==null?void 0:s.concentrationCfg)||null,i=(e.perConcentration||[]).map((o,l)=>`
    <tr>
      <td>T${l+1}</td>
      <td>${o.conc}%</td>
      <td>${(200*o.conc/100).toFixed(1)} g/L</td>
      <td style="color:${e.gradeColor||"#40cc80"}">${o.cod}%</td>
      <td style="color:${e.gradeColor||"#40cc80"}">${o.bod}%</td>
      <td style="font-size:11px;color:#6090a0">${o.note}</td>
    </tr>
  `).join(""),a=Do();a.innerHTML=`
    <div class="s5-card">
      <div class="s5-header">
        <span class="s5-badge">📊 RINGKASAN EVALUASI</span>
        <h2 class="s5-title">Kesimpulan Percobaan Reaktor Vinasse</h2>
      </div>
      ${Po(3)}

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
  `,document.body.appendChild(a),Si("s5-btn-finish").onclick=()=>{Vs(),n&&n()}}function Po(n){return`<div class="s5-step-indicator">
    ${[{n:1,label:"Analisis"},{n:2,label:"Esai"},{n:3,label:"Kesimpulan"}].map((t,i)=>`
      ${i>0?'<span class="s5-step-arrow">→</span>':""}
      <span class="s5-step ${t.n<n?"done":t.n===n?"active":""}">
        ${t.n<n?"✔ ":""}${t.n}. ${t.label}
      </span>
    `).join("")}
  </div>`}function Do(){const n=document.createElement("div");return n.id="s5-overlay",n.className="s5-overlay",n}function Vs(){const n=Si("s5-overlay");n&&n.remove()}function _x(){if(Si("s5-styles"))return;const n=document.createElement("style");n.id="s5-styles",n.textContent=`
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
  `,document.head.appendChild(n)}const Ws=document.getElementById("game-canvas"),Gn=new bo({canvas:Ws,antialias:!0});Gn.setPixelRatio(Math.min(window.devicePixelRatio,2));Gn.setSize(window.innerWidth,window.innerHeight);Gn.shadowMap.enabled=!0;Gn.shadowMap.type=ho;Gn.toneMapping=Rc;Gn.toneMappingExposure=1.1;Gn.outputColorSpace=It;let ri=null;const{scene:Jt}=rg();og(Jt);const{scene:Ei}=mg();gg(Ei);const{scene:Nn}=Eg();Tg(Nn);const{scene:On}=Og();Fg(On);const{scene:Fn}=qg();$g(Fn);ri=Jt;const lt=new Kt(60,window.innerWidth/window.innerHeight,.1,1e3);lt.position.set(0,18,38);lt.lookAt(0,0,0);const dt=new fv(Jt);let Oa=vd(Jt),Ra=null,Pa=null,Da=null,oi=Oa;function Io(n,e){var t,i;n&&(n.glowMesh&&(e.remove(n.glowMesh),(t=n.glowMesh.geometry)==null||t.dispose()),n.glowMat&&n.glowMat.dispose(),n.doneSprite&&(e.remove(n.doneSprite),(i=n.doneSprite.material)==null||i.dispose()))}const Mc=22,Sc=26,Ec=24,Tc=22,Ac=21,Lc=14,$r=.08;let la=!1,Ea=null,lo=!1,Ia=0,fi=Math.PI,kc=Math.PI,Yr=0,Ti=27,Ai=17;function yx(n,e){Ti=n,Ai=e}function wx(n){if(!la){Yr+=.0012,lt.position.x=Math.sin(Yr)*38,lt.position.z=Math.cos(Yr)*38,lt.position.y=18+Math.sin(n*.3)*1.5,lt.lookAt(0,2,0);return}const e=dt.position.x,t=dt.position.z;if(lo&&Ea){Ia=Math.min(1,Ia+.04);const l=1-Math.pow(1-Ia,3),c=Ea.x,d=Ea.z,u=Ea.y??4,f=c+(e-c)*.35,p=d+(t-d)*.35,g=u+6,v=ee.currentLevel===2?Sc:ee.currentLevel===3?Ec:ee.currentLevel===4?Tc:ee.currentLevel===5?Ac:Mc,m=e+Math.sin(fi)*v,h=t+Math.cos(fi)*v,_=Lc;lt.position.x=m+(f-m)*l,lt.position.y=_+(g-_)*l,lt.position.z=h+(p-h)*l,lt.fov=60-20*l,lt.updateProjectionMatrix(),lt.lookAt(c,u,d);return}Math.abs(lt.fov-60)>.5&&(lt.fov+=(60-lt.fov)*.1,lt.updateProjectionMatrix()),kc=(dt.group?dt.group.rotation.y:fi)+Math.PI;let a=kc-fi;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;fi+=a*.04;const s=ee.currentLevel===2?Sc:ee.currentLevel===3?Ec:ee.currentLevel===4?Tc:ee.currentLevel===5?Ac:Mc;let r=e+Math.sin(fi)*s,o=t+Math.cos(fi)*s;r=Math.max(-Ti,Math.min(Ti,r)),o=Math.max(-Ai,Math.min(Ai,o)),lt.position.x+=(r-lt.position.x)*$r,lt.position.z+=(o-lt.position.z)*$r,lt.position.y+=(Lc-lt.position.y)*$r,lt.lookAt(e,3,t)}function Mx(){const n=new L(dt.position.x-lt.position.x,0,dt.position.z-lt.position.z).normalize(),e=new L().crossVectors(n,new L(0,1,0)).normalize();return{fwd:n,right:e}}const Sx=6.5;let Ot=null,on=!1;function Ex(){if(on)return;let n=null,e=1/0;for(const t of oi){if(t.done)continue;const i=dt.position.x-t.pos.x,a=dt.position.z-t.pos.z,s=Math.sqrt(i*i+a*a);s<Sx&&s<e&&(e=s,n=t)}if(n!==Ot){Ot=n;const t=ee.currentLevel===2?`Tekan <kbd>E</kbd> &nbsp;— 🏭 Stasiun ${n?n.idx+1:""}`:ee.currentLevel===3?"Tekan <kbd>E</kbd> &nbsp;— 🚰 Buka Kran Vinasse":ee.currentLevel===4?"Tekan <kbd>E</kbd> &nbsp;— 💻 IPAL Builder Terminal":ee.currentLevel===5?"Tekan <kbd>E</kbd> &nbsp;— 🔬 Analisis Mikroskop":`Tekan <kbd>E</kbd> &nbsp;— ❓ Fenomena ${n?n.idx+1:""}`;Ro(n?t:null)}}window.addEventListener("keydown",n=>{n.code==="KeyE"&&Ot&&!on&&la&&Rd(Ot)});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("btn-interact-mobile");n&&n.addEventListener("touchstart",e=>{e.preventDefault(),Ot&&!on&&la&&Rd(Ot)},{passive:!1})});function Rd(n){on=!0,Ro(null),Ea=n.pos?{x:n.pos.x,y:3,z:n.pos.z}:{x:0,y:3,z:0},lo=!0,Ia=0;function e(){lo=!1,Ia=0}if(ee.currentLevel===3&&n.isValve){ex(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),on=!1,Ot=null,ee.stage3.valveOpened=!0,setTimeout(()=>Sa(()=>Ta(3)),600)});return}if(ee.currentLevel===4&&n.isTerminal){Cd(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),on=!1,Ot=null,ee.stage4.terminalDone=!0,setTimeout(()=>Sa(()=>Ta(4)),600)});return}if(ee.currentLevel===5&&n.isScope){gx(()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.opacity=.3,e(),on=!1,Ot=null,ee.stage5.scopeDone=!0,setTimeout(()=>Sa(()=>Ta(5)),600)});return}Uv(n.idx,()=>{n.done=!0,n.doneSprite.visible=!0,n.glowMat.color.set(3066993),n.glowMat.emissive.set(3066993),n.glowMat.emissiveIntensity=.2,e(),on=!1,Ot=null,oi.every(i=>i.done)&&ee.currentLevel===1&&setTimeout(()=>Sa(()=>Ta(1)),600)},()=>{e(),on=!1,Ot=null})}function Ta(n){if(ee.completedRooms.includes(n)||ee.completedRooms.push(n),Mv(n),wv({playerName:ee.playerName,currentLevel:n,totalPoints:ee.totalPoints,levelBreakdown:ee.levelBreakdown,completedRooms:ee.completedRooms}),ee.completedRooms.length>=5){Fv();return}co()}function co(){on=!0,Ot=null,Ro(null),Ov(n=>{on=!1,Tx(n)})}function Tx(n){ee.currentLevel=n,ee.pointsAtLevelStart=ee.totalPoints,n===1?Ax():n===2?Lx():n===3?kx():n===4?Cx():n===5&&Rx()}function Ax(){[Jt,Ei,Nn,On,Fn].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Jt),dt.position.set(0,0,12),ri=Jt,Oa=vd(Jt),oi=Oa,yx(27,17),Ot=null,jt()}function Lx(){ri=Ei,sv(),Ti=30,Ai=20,[Jt,Nn,On,Fn].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Ei),dt.position.set(0,0,18),oi=[],Ot=null,jt(),setTimeout(()=>Wv(()=>{setTimeout(()=>Sa(()=>Ta(2)),600)}),400)}function kx(){ri=Nn,rv(),Ti=26,Ai=21,[Jt,Ei,On,Fn].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Nn),dt.position.set(0,0,16),Io(Ra,Nn),Ra=Ug(Nn),oi=[Ra],Ot=null,jt()}function Cx(){ri=On,cv(),Ti=24,Ai=18,[Jt,Ei,Nn,Fn].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(On),dt.position.set(0,0,14),Io(Pa,On),Pa=Wg(On),oi=[Pa],Ot=null,jt()}function Rx(){ri=Fn,dv(),Ti=22,Ai=16,[Jt,Ei,Nn,On].forEach(n=>{try{dt.removeFromScene(n)}catch{}}),dt.addToScene(Fn),dt.position.set(0,0,12),Io(Da,Fn),Da=Qg(Fn),oi=[Da],Ot=null,jt()}window.addEventListener("resize",()=>{Gn.setSize(window.innerWidth,window.innerHeight),lt.aspect=window.innerWidth/window.innerHeight,lt.updateProjectionMatrix()});Ws.addEventListener("touchstart",n=>n.preventDefault(),{passive:!1});Ws.addEventListener("touchmove",n=>n.preventDefault(),{passive:!1});Ws.addEventListener("touchend",n=>n.preventDefault(),{passive:!1});Vv();function Pd(){la=!0,document.getElementById("hud").style.display="block",Dv(),jt(),Iv(()=>{const n=Ao();n&&(ee.completedRooms=n.completedRooms||[],ee.totalPoints=n.totalPoints,ee.levelBreakdown=n.levelBreakdown||[],jt()),co()},()=>{location.reload()}),dt.addToScene(Jt),dt.position.set(0,0,12),ri=Jt,oi=Oa,co()}function Px(n){ee.playerName=n.playerName,ee.totalPoints=n.totalPoints,ee.levelBreakdown=n.levelBreakdown||[],ee.completedRooms=n.completedRooms||[],ee.pointsAtLevelStart=n.totalPoints,dt.setName(ee.playerName),Pd()}Lv(n=>{dt.setName(n),xc(),kv(()=>{Rv(()=>{Pv(()=>{Ad(()=>{Pd()})})})})},n=>{xc(),Px(n)});const Dx=new gd;function Dd(){requestAnimationFrame(Dd);const n=Dx.getElapsedTime();wx(n),dt.update(n,on||!la,Mx()),la&&Ex(),ee.currentLevel===1?fg(Oa,n):ee.currentLevel===3&&Ra?Ng(Ra,n):ee.currentLevel===4&&Pa?Xg(Pa,n):ee.currentLevel===5&&Da&&ev(Da,n),Gn.render(ri,lt)}Dd();
