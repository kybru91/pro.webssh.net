!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SerializeAddon=t():e.SerializeAddon=t()}(this,(()=>(()=>{"use strict";var e={930:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ColorContrastCache=void 0;const r=s(485);t.ColorContrastCache=class{constructor(){this._color=new r.TwoKeyMap,this._css=new r.TwoKeyMap}setCss(e,t,s){this._css.set(e,t,s)}getCss(e,t){return this._css.get(e,t)}setColor(e,t,s){this._color.set(e,t,s)}getColor(e,t){return this._color.get(e,t)}clear(){this._color.clear(),this._css.clear()}}},997:function(e,t,s){var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(i<3?o(n):i>3?o(t,s,n):o(t,s))||n);return i>3&&n&&Object.defineProperty(t,s,n),n},o=this&&this.__param||function(e,t){return function(s,r){t(s,r,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeService=t.DEFAULT_ANSI_COLORS=void 0;const i=s(930),n=s(160),l=s(345),a=s(859),c=s(97),h=n.css.toColor("#ffffff"),u=n.css.toColor("#000000"),_=n.css.toColor("#ffffff"),d=n.css.toColor("#000000"),C={css:"rgba(255, 255, 255, 0.3)",rgba:4294967117};t.DEFAULT_ANSI_COLORS=Object.freeze((()=>{const e=[n.css.toColor("#2e3436"),n.css.toColor("#cc0000"),n.css.toColor("#4e9a06"),n.css.toColor("#c4a000"),n.css.toColor("#3465a4"),n.css.toColor("#75507b"),n.css.toColor("#06989a"),n.css.toColor("#d3d7cf"),n.css.toColor("#555753"),n.css.toColor("#ef2929"),n.css.toColor("#8ae234"),n.css.toColor("#fce94f"),n.css.toColor("#729fcf"),n.css.toColor("#ad7fa8"),n.css.toColor("#34e2e2"),n.css.toColor("#eeeeec")],t=[0,95,135,175,215,255];for(let s=0;s<216;s++){const r=t[s/36%6|0],o=t[s/6%6|0],i=t[s%6];e.push({css:n.channels.toCss(r,o,i),rgba:n.channels.toRgba(r,o,i)})}for(let t=0;t<24;t++){const s=8+10*t;e.push({css:n.channels.toCss(s,s,s),rgba:n.channels.toRgba(s,s,s)})}return e})());let f=t.ThemeService=class extends a.Disposable{get colors(){return this._colors}constructor(e){super(),this._optionsService=e,this._contrastCache=new i.ColorContrastCache,this._halfContrastCache=new i.ColorContrastCache,this._onChangeColors=this.register(new l.EventEmitter),this.onChangeColors=this._onChangeColors.event,this._colors={foreground:h,background:u,cursor:_,cursorAccent:d,selectionForeground:void 0,selectionBackgroundTransparent:C,selectionBackgroundOpaque:n.color.blend(u,C),selectionInactiveBackgroundTransparent:C,selectionInactiveBackgroundOpaque:n.color.blend(u,C),ansi:t.DEFAULT_ANSI_COLORS.slice(),contrastCache:this._contrastCache,halfContrastCache:this._halfContrastCache},this._updateRestoreColors(),this._setTheme(this._optionsService.rawOptions.theme),this.register(this._optionsService.onSpecificOptionChange("minimumContrastRatio",(()=>this._contrastCache.clear()))),this.register(this._optionsService.onSpecificOptionChange("theme",(()=>this._setTheme(this._optionsService.rawOptions.theme))))}_setTheme(e={}){const s=this._colors;if(s.foreground=g(e.foreground,h),s.background=g(e.background,u),s.cursor=g(e.cursor,_),s.cursorAccent=g(e.cursorAccent,d),s.selectionBackgroundTransparent=g(e.selectionBackground,C),s.selectionBackgroundOpaque=n.color.blend(s.background,s.selectionBackgroundTransparent),s.selectionInactiveBackgroundTransparent=g(e.selectionInactiveBackground,s.selectionBackgroundTransparent),s.selectionInactiveBackgroundOpaque=n.color.blend(s.background,s.selectionInactiveBackgroundTransparent),s.selectionForeground=e.selectionForeground?g(e.selectionForeground,n.NULL_COLOR):void 0,s.selectionForeground===n.NULL_COLOR&&(s.selectionForeground=void 0),n.color.isOpaque(s.selectionBackgroundTransparent)){const e=.3;s.selectionBackgroundTransparent=n.color.opacity(s.selectionBackgroundTransparent,e)}if(n.color.isOpaque(s.selectionInactiveBackgroundTransparent)){const e=.3;s.selectionInactiveBackgroundTransparent=n.color.opacity(s.selectionInactiveBackgroundTransparent,e)}if(s.ansi=t.DEFAULT_ANSI_COLORS.slice(),s.ansi[0]=g(e.black,t.DEFAULT_ANSI_COLORS[0]),s.ansi[1]=g(e.red,t.DEFAULT_ANSI_COLORS[1]),s.ansi[2]=g(e.green,t.DEFAULT_ANSI_COLORS[2]),s.ansi[3]=g(e.yellow,t.DEFAULT_ANSI_COLORS[3]),s.ansi[4]=g(e.blue,t.DEFAULT_ANSI_COLORS[4]),s.ansi[5]=g(e.magenta,t.DEFAULT_ANSI_COLORS[5]),s.ansi[6]=g(e.cyan,t.DEFAULT_ANSI_COLORS[6]),s.ansi[7]=g(e.white,t.DEFAULT_ANSI_COLORS[7]),s.ansi[8]=g(e.brightBlack,t.DEFAULT_ANSI_COLORS[8]),s.ansi[9]=g(e.brightRed,t.DEFAULT_ANSI_COLORS[9]),s.ansi[10]=g(e.brightGreen,t.DEFAULT_ANSI_COLORS[10]),s.ansi[11]=g(e.brightYellow,t.DEFAULT_ANSI_COLORS[11]),s.ansi[12]=g(e.brightBlue,t.DEFAULT_ANSI_COLORS[12]),s.ansi[13]=g(e.brightMagenta,t.DEFAULT_ANSI_COLORS[13]),s.ansi[14]=g(e.brightCyan,t.DEFAULT_ANSI_COLORS[14]),s.ansi[15]=g(e.brightWhite,t.DEFAULT_ANSI_COLORS[15]),e.extendedAnsi){const r=Math.min(s.ansi.length-16,e.extendedAnsi.length);for(let o=0;o<r;o++)s.ansi[o+16]=g(e.extendedAnsi[o],t.DEFAULT_ANSI_COLORS[o+16])}this._contrastCache.clear(),this._halfContrastCache.clear(),this._updateRestoreColors(),this._onChangeColors.fire(this.colors)}restoreColor(e){this._restoreColor(e),this._onChangeColors.fire(this.colors)}_restoreColor(e){if(void 0!==e)switch(e){case 256:this._colors.foreground=this._restoreColors.foreground;break;case 257:this._colors.background=this._restoreColors.background;break;case 258:this._colors.cursor=this._restoreColors.cursor;break;default:this._colors.ansi[e]=this._restoreColors.ansi[e]}else for(let e=0;e<this._restoreColors.ansi.length;++e)this._colors.ansi[e]=this._restoreColors.ansi[e]}modifyColors(e){e(this._colors),this._onChangeColors.fire(this.colors)}_updateRestoreColors(){this._restoreColors={foreground:this._colors.foreground,background:this._colors.background,cursor:this._colors.cursor,ansi:this._colors.ansi.slice()}}};function g(e,t){if(void 0!==e)try{return n.css.toColor(e)}catch{}return t}t.ThemeService=f=r([o(0,c.IOptionsService)],f)},160:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.contrastRatio=t.toPaddedHex=t.rgba=t.rgb=t.css=t.color=t.channels=t.NULL_COLOR=void 0;let s=0,r=0,o=0,i=0;var n,l,a,c,h;function u(e){const t=e.toString(16);return t.length<2?"0"+t:t}function _(e,t){return e<t?(t+.05)/(e+.05):(e+.05)/(t+.05)}t.NULL_COLOR={css:"#00000000",rgba:0},function(e){e.toCss=function(e,t,s,r){return void 0!==r?`#${u(e)}${u(t)}${u(s)}${u(r)}`:`#${u(e)}${u(t)}${u(s)}`},e.toRgba=function(e,t,s,r=255){return(e<<24|t<<16|s<<8|r)>>>0},e.toColor=function(t,s,r,o){return{css:e.toCss(t,s,r,o),rgba:e.toRgba(t,s,r,o)}}}(n||(t.channels=n={})),function(e){function t(e,t){return i=Math.round(255*t),[s,r,o]=h.toChannels(e.rgba),{css:n.toCss(s,r,o,i),rgba:n.toRgba(s,r,o,i)}}e.blend=function(e,t){if(i=(255&t.rgba)/255,1===i)return{css:t.css,rgba:t.rgba};const l=t.rgba>>24&255,a=t.rgba>>16&255,c=t.rgba>>8&255,h=e.rgba>>24&255,u=e.rgba>>16&255,_=e.rgba>>8&255;return s=h+Math.round((l-h)*i),r=u+Math.round((a-u)*i),o=_+Math.round((c-_)*i),{css:n.toCss(s,r,o),rgba:n.toRgba(s,r,o)}},e.isOpaque=function(e){return 255==(255&e.rgba)},e.ensureContrastRatio=function(e,t,s){const r=h.ensureContrastRatio(e.rgba,t.rgba,s);if(r)return n.toColor(r>>24&255,r>>16&255,r>>8&255)},e.opaque=function(e){const t=(255|e.rgba)>>>0;return[s,r,o]=h.toChannels(t),{css:n.toCss(s,r,o),rgba:t}},e.opacity=t,e.multiplyOpacity=function(e,s){return i=255&e.rgba,t(e,i*s/255)},e.toColorRGB=function(e){return[e.rgba>>24&255,e.rgba>>16&255,e.rgba>>8&255]}}(l||(t.color=l={})),function(e){let t,l;try{const e=document.createElement("canvas");e.width=1,e.height=1;const s=e.getContext("2d",{willReadFrequently:!0});s&&(t=s,t.globalCompositeOperation="copy",l=t.createLinearGradient(0,0,1,1))}catch{}e.toColor=function(e){if(e.match(/#[\da-f]{3,8}/i))switch(e.length){case 4:return s=parseInt(e.slice(1,2).repeat(2),16),r=parseInt(e.slice(2,3).repeat(2),16),o=parseInt(e.slice(3,4).repeat(2),16),n.toColor(s,r,o);case 5:return s=parseInt(e.slice(1,2).repeat(2),16),r=parseInt(e.slice(2,3).repeat(2),16),o=parseInt(e.slice(3,4).repeat(2),16),i=parseInt(e.slice(4,5).repeat(2),16),n.toColor(s,r,o,i);case 7:return{css:e,rgba:(parseInt(e.slice(1),16)<<8|255)>>>0};case 9:return{css:e,rgba:parseInt(e.slice(1),16)>>>0}}const a=e.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);if(a)return s=parseInt(a[1]),r=parseInt(a[2]),o=parseInt(a[3]),i=Math.round(255*(void 0===a[5]?1:parseFloat(a[5]))),n.toColor(s,r,o,i);if(!t||!l)throw new Error("css.toColor: Unsupported css format");if(t.fillStyle=l,t.fillStyle=e,"string"!=typeof t.fillStyle)throw new Error("css.toColor: Unsupported css format");if(t.fillRect(0,0,1,1),[s,r,o,i]=t.getImageData(0,0,1,1).data,255!==i)throw new Error("css.toColor: Unsupported css format");return{rgba:n.toRgba(s,r,o,i),css:e}}}(a||(t.css=a={})),function(e){function t(e,t,s){const r=e/255,o=t/255,i=s/255;return.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))}e.relativeLuminance=function(e){return t(e>>16&255,e>>8&255,255&e)},e.relativeLuminance2=t}(c||(t.rgb=c={})),function(e){function t(e,t,s){const r=e>>24&255,o=e>>16&255,i=e>>8&255;let n=t>>24&255,l=t>>16&255,a=t>>8&255,h=_(c.relativeLuminance2(n,l,a),c.relativeLuminance2(r,o,i));for(;h<s&&(n>0||l>0||a>0);)n-=Math.max(0,Math.ceil(.1*n)),l-=Math.max(0,Math.ceil(.1*l)),a-=Math.max(0,Math.ceil(.1*a)),h=_(c.relativeLuminance2(n,l,a),c.relativeLuminance2(r,o,i));return(n<<24|l<<16|a<<8|255)>>>0}function l(e,t,s){const r=e>>24&255,o=e>>16&255,i=e>>8&255;let n=t>>24&255,l=t>>16&255,a=t>>8&255,h=_(c.relativeLuminance2(n,l,a),c.relativeLuminance2(r,o,i));for(;h<s&&(n<255||l<255||a<255);)n=Math.min(255,n+Math.ceil(.1*(255-n))),l=Math.min(255,l+Math.ceil(.1*(255-l))),a=Math.min(255,a+Math.ceil(.1*(255-a))),h=_(c.relativeLuminance2(n,l,a),c.relativeLuminance2(r,o,i));return(n<<24|l<<16|a<<8|255)>>>0}e.blend=function(e,t){if(i=(255&t)/255,1===i)return t;const l=t>>24&255,a=t>>16&255,c=t>>8&255,h=e>>24&255,u=e>>16&255,_=e>>8&255;return s=h+Math.round((l-h)*i),r=u+Math.round((a-u)*i),o=_+Math.round((c-_)*i),n.toRgba(s,r,o)},e.ensureContrastRatio=function(e,s,r){const o=c.relativeLuminance(e>>8),i=c.relativeLuminance(s>>8);if(_(o,i)<r){if(i<o){const i=t(e,s,r),n=_(o,c.relativeLuminance(i>>8));if(n<r){const t=l(e,s,r);return n>_(o,c.relativeLuminance(t>>8))?i:t}return i}const n=l(e,s,r),a=_(o,c.relativeLuminance(n>>8));if(a<r){const i=t(e,s,r);return a>_(o,c.relativeLuminance(i>>8))?n:i}return n}},e.reduceLuminance=t,e.increaseLuminance=l,e.toChannels=function(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}}(h||(t.rgba=h={})),t.toPaddedHex=u,t.contrastRatio=_},345:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.runAndSubscribe=t.forwardEvent=t.EventEmitter=void 0,t.EventEmitter=class{constructor(){this._listeners=[],this._disposed=!1}get event(){return this._event||(this._event=e=>(this._listeners.push(e),{dispose:()=>{if(!this._disposed)for(let t=0;t<this._listeners.length;t++)if(this._listeners[t]===e)return void this._listeners.splice(t,1)}})),this._event}fire(e,t){const s=[];for(let e=0;e<this._listeners.length;e++)s.push(this._listeners[e]);for(let r=0;r<s.length;r++)s[r].call(void 0,e,t)}dispose(){this.clearListeners(),this._disposed=!0}clearListeners(){this._listeners&&(this._listeners.length=0)}},t.forwardEvent=function(e,t){return e((e=>t.fire(e)))},t.runAndSubscribe=function(e,t){return t(void 0),e((e=>t(e)))}},859:(e,t)=>{function s(e){for(const t of e)t.dispose();e.length=0}Object.defineProperty(t,"__esModule",{value:!0}),t.getDisposeArrayDisposable=t.disposeArray=t.toDisposable=t.MutableDisposable=t.Disposable=void 0,t.Disposable=class{constructor(){this._disposables=[],this._isDisposed=!1}dispose(){this._isDisposed=!0;for(const e of this._disposables)e.dispose();this._disposables.length=0}register(e){return this._disposables.push(e),e}unregister(e){const t=this._disposables.indexOf(e);-1!==t&&this._disposables.splice(t,1)}},t.MutableDisposable=class{constructor(){this._isDisposed=!1}get value(){return this._isDisposed?void 0:this._value}set value(e){this._isDisposed||e===this._value||(this._value?.dispose(),this._value=e)}clear(){this.value=void 0}dispose(){this._isDisposed=!0,this._value?.dispose(),this._value=void 0}},t.toDisposable=function(e){return{dispose:e}},t.disposeArray=s,t.getDisposeArrayDisposable=function(e){return{dispose:()=>s(e)}}},485:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FourKeyMap=t.TwoKeyMap=void 0;class s{constructor(){this._data={}}set(e,t,s){this._data[e]||(this._data[e]={}),this._data[e][t]=s}get(e,t){return this._data[e]?this._data[e][t]:void 0}clear(){this._data={}}}t.TwoKeyMap=s,t.FourKeyMap=class{constructor(){this._data=new s}set(e,t,r,o,i){this._data.get(e,t)||this._data.set(e,t,new s),this._data.get(e,t).set(r,o,i)}get(e,t,s,r){return this._data.get(e,t)?.get(s,r)}clear(){this._data.clear()}}},726:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createDecorator=t.getServiceDependencies=t.serviceRegistry=void 0;const s="di$target",r="di$dependencies";t.serviceRegistry=new Map,t.getServiceDependencies=function(e){return e[r]||[]},t.createDecorator=function(e){if(t.serviceRegistry.has(e))return t.serviceRegistry.get(e);const o=function(e,t,i){if(3!==arguments.length)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");!function(e,t,o){t[s]===t?t[r].push({id:e,index:o}):(t[r]=[{id:e,index:o}],t[s]=t)}(o,e,i)};return o.toString=()=>e,t.serviceRegistry.set(e,o),o}},97:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IDecorationService=t.IUnicodeService=t.IOscLinkService=t.IOptionsService=t.ILogService=t.LogLevelEnum=t.IInstantiationService=t.ICharsetService=t.ICoreService=t.ICoreMouseService=t.IBufferService=void 0;const r=s(726);var o;t.IBufferService=(0,r.createDecorator)("BufferService"),t.ICoreMouseService=(0,r.createDecorator)("CoreMouseService"),t.ICoreService=(0,r.createDecorator)("CoreService"),t.ICharsetService=(0,r.createDecorator)("CharsetService"),t.IInstantiationService=(0,r.createDecorator)("InstantiationService"),function(e){e[e.TRACE=0]="TRACE",e[e.DEBUG=1]="DEBUG",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.OFF=5]="OFF"}(o||(t.LogLevelEnum=o={})),t.ILogService=(0,r.createDecorator)("LogService"),t.IOptionsService=(0,r.createDecorator)("OptionsService"),t.IOscLinkService=(0,r.createDecorator)("OscLinkService"),t.IUnicodeService=(0,r.createDecorator)("UnicodeService"),t.IDecorationService=(0,r.createDecorator)("DecorationService")}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,s),i.exports}var r={};return(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.HTMLSerializeHandler=e.SerializeAddon=void 0;const t=s(997);function o(e,t,s){return Math.max(t,Math.min(e,s))}class i{constructor(e){this._buffer=e}serialize(e,t){const s=this._buffer.getNullCell(),r=this._buffer.getNullCell();let o=s;const i=e.start.y,n=e.end.y,l=e.start.x,a=e.end.x;this._beforeSerialize(n-i,i,n);for(let t=i;t<=n;t++){const i=this._buffer.getLine(t);if(i){const n=t===e.start.y?l:0,c=t===e.end.y?a:i.length;for(let e=n;e<c;e++){const n=i.getCell(e,o===s?r:s);n?(this._nextCell(n,o,t,e),o=n):console.warn(`Can't get cell at row=${t}, col=${e}`)}}this._rowEnd(t,t===n)}return this._afterSerialize(),this._serializeString(t)}_nextCell(e,t,s,r){}_rowEnd(e,t){}_beforeSerialize(e,t,s){}_afterSerialize(){}_serializeString(e){return""}}function n(e,t){return e.getFgColorMode()===t.getFgColorMode()&&e.getFgColor()===t.getFgColor()}function l(e,t){return e.getBgColorMode()===t.getBgColorMode()&&e.getBgColor()===t.getBgColor()}function a(e,t){return e.isInverse()===t.isInverse()&&e.isBold()===t.isBold()&&e.isUnderline()===t.isUnderline()&&e.isOverline()===t.isOverline()&&e.isBlink()===t.isBlink()&&e.isInvisible()===t.isInvisible()&&e.isItalic()===t.isItalic()&&e.isDim()===t.isDim()&&e.isStrikethrough()===t.isStrikethrough()}class c extends i{constructor(e,t){super(e),this._terminal=t,this._rowIndex=0,this._allRows=new Array,this._allRowSeparators=new Array,this._currentRow="",this._nullCellCount=0,this._cursorStyle=this._buffer.getNullCell(),this._cursorStyleRow=0,this._cursorStyleCol=0,this._backgroundCell=this._buffer.getNullCell(),this._firstRow=0,this._lastCursorRow=0,this._lastCursorCol=0,this._lastContentCursorRow=0,this._lastContentCursorCol=0,this._thisRowLastChar=this._buffer.getNullCell(),this._thisRowLastSecondChar=this._buffer.getNullCell(),this._nextRowFirstChar=this._buffer.getNullCell()}_beforeSerialize(e,t,s){this._allRows=new Array(e),this._lastContentCursorRow=t,this._lastCursorRow=t,this._firstRow=t}_rowEnd(e,t){this._nullCellCount>0&&!l(this._cursorStyle,this._backgroundCell)&&(this._currentRow+=`[${this._nullCellCount}X`);let s="";if(!t){e-this._firstRow>=this._terminal.rows&&this._buffer.getLine(this._cursorStyleRow)?.getCell(this._cursorStyleCol,this._backgroundCell);const t=this._buffer.getLine(e),r=this._buffer.getLine(e+1);if(r.isWrapped){s="";const o=t.getCell(t.length-1,this._thisRowLastChar),i=t.getCell(t.length-2,this._thisRowLastSecondChar),n=r.getCell(0,this._nextRowFirstChar),a=n.getWidth()>1;let c=!1;(n.getChars()&&a?this._nullCellCount<=1:this._nullCellCount<=0)&&((o.getChars()||0===o.getWidth())&&l(o,n)&&(c=!0),a&&(i.getChars()||0===i.getWidth())&&l(o,n)&&l(i,n)&&(c=!0)),c||(s="-".repeat(this._nullCellCount+1),s+="[1D[1X",this._nullCellCount>0&&(s+="[A",s+=`[${t.length-this._nullCellCount}C`,s+=`[${this._nullCellCount}X`,s+=`[${t.length-this._nullCellCount}D`,s+="[B"),this._lastContentCursorRow=e+1,this._lastContentCursorCol=0,this._lastCursorRow=e+1,this._lastCursorCol=0)}else s="\r\n",this._lastCursorRow=e+1,this._lastCursorCol=0}this._allRows[this._rowIndex]=this._currentRow,this._allRowSeparators[this._rowIndex++]=s,this._currentRow="",this._nullCellCount=0}_diffStyle(e,t){const s=[],r=!n(e,t),o=!l(e,t),i=!a(e,t);if(r||o||i)if(e.isAttributeDefault())t.isAttributeDefault()||s.push(0);else{if(r){const t=e.getFgColor();e.isFgRGB()?s.push(38,2,t>>>16&255,t>>>8&255,255&t):e.isFgPalette()?t>=16?s.push(38,5,t):s.push(8&t?90+(7&t):30+(7&t)):s.push(39)}if(o){const t=e.getBgColor();e.isBgRGB()?s.push(48,2,t>>>16&255,t>>>8&255,255&t):e.isBgPalette()?t>=16?s.push(48,5,t):s.push(8&t?100+(7&t):40+(7&t)):s.push(49)}i&&(e.isInverse()!==t.isInverse()&&s.push(e.isInverse()?7:27),e.isBold()!==t.isBold()&&s.push(e.isBold()?1:22),e.isUnderline()!==t.isUnderline()&&s.push(e.isUnderline()?4:24),e.isOverline()!==t.isOverline()&&s.push(e.isOverline()?53:55),e.isBlink()!==t.isBlink()&&s.push(e.isBlink()?5:25),e.isInvisible()!==t.isInvisible()&&s.push(e.isInvisible()?8:28),e.isItalic()!==t.isItalic()&&s.push(e.isItalic()?3:23),e.isDim()!==t.isDim()&&s.push(e.isDim()?2:22),e.isStrikethrough()!==t.isStrikethrough()&&s.push(e.isStrikethrough()?9:29))}return s}_nextCell(e,t,s,r){if(0===e.getWidth())return;const o=""===e.getChars(),i=this._diffStyle(e,this._cursorStyle);if(o?!l(this._cursorStyle,e):i.length>0){this._nullCellCount>0&&(l(this._cursorStyle,this._backgroundCell)||(this._currentRow+=`[${this._nullCellCount}X`),this._currentRow+=`[${this._nullCellCount}C`,this._nullCellCount=0),this._lastContentCursorRow=this._lastCursorRow=s,this._lastContentCursorCol=this._lastCursorCol=r,this._currentRow+=`[${i.join(";")}m`;const e=this._buffer.getLine(s);void 0!==e&&(e.getCell(r,this._cursorStyle),this._cursorStyleRow=s,this._cursorStyleCol=r)}o?this._nullCellCount+=e.getWidth():(this._nullCellCount>0&&(l(this._cursorStyle,this._backgroundCell)||(this._currentRow+=`[${this._nullCellCount}X`),this._currentRow+=`[${this._nullCellCount}C`,this._nullCellCount=0),this._currentRow+=e.getChars(),this._lastContentCursorRow=this._lastCursorRow=s,this._lastContentCursorCol=this._lastCursorCol=r+e.getWidth())}_serializeString(e){let t=this._allRows.length;this._buffer.length-this._firstRow<=this._terminal.rows&&(t=this._lastContentCursorRow+1-this._firstRow,this._lastCursorCol=this._lastContentCursorCol,this._lastCursorRow=this._lastContentCursorRow);let s="";for(let e=0;e<t;e++)s+=this._allRows[e],e+1<t&&(s+=this._allRowSeparators[e]);if(!e){const e=this._buffer.baseY+this._buffer.cursorY,t=this._buffer.cursorX,o=e=>{e>0?s+=`[${e}C`:e<0&&(s+=`[${-e}D`)};(e!==this._lastCursorRow||t!==this._lastCursorCol)&&((r=e-this._lastCursorRow)>0?s+=`[${r}B`:r<0&&(s+=`[${-r}A`),o(t-this._lastCursorCol))}var r;const o=this._terminal._core._inputHandler._curAttrData,i=this._diffStyle(o,this._cursorStyle);return i.length>0&&(s+=`[${i.join(";")}m`),s}}e.SerializeAddon=class{activate(e){this._terminal=e}_serializeBufferByScrollback(e,t,s){const r=t.length,i=void 0===s?r:o(s+e.rows,0,r);return this._serializeBufferByRange(e,t,{start:r-i,end:r-1},!1)}_serializeBufferByRange(e,t,s,r){return new c(t,e).serialize({start:{x:0,y:"number"==typeof s.start?s.start:s.start.line},end:{x:e.cols,y:"number"==typeof s.end?s.end:s.end.line}},r)}_serializeBufferAsHTML(e,t){const s=e.buffer.active,r=new h(s,e,t);if(!t.onlySelection){const i=s.length,n=t.scrollback,l=void 0===n?i:o(n+e.rows,0,i);return r.serialize({start:{x:0,y:i-l},end:{x:e.cols,y:i-1}})}const i=this._terminal?.getSelectionPosition();return void 0!==i?r.serialize({start:{x:i.start.x,y:i.start.y},end:{x:i.end.x,y:i.end.y}}):""}_serializeModes(e){let t="";const s=e.modes;if(s.applicationCursorKeysMode&&(t+="[?1h"),s.applicationKeypadMode&&(t+="[?66h"),s.bracketedPasteMode&&(t+="[?2004h"),s.insertMode&&(t+="[4h"),s.originMode&&(t+="[?6h"),s.reverseWraparoundMode&&(t+="[?45h"),s.sendFocusMode&&(t+="[?1004h"),!1===s.wraparoundMode&&(t+="[?7l"),"none"!==s.mouseTrackingMode)switch(s.mouseTrackingMode){case"x10":t+="[?9h";break;case"vt200":t+="[?1000h";break;case"drag":t+="[?1002h";break;case"any":t+="[?1003h"}return t}serialize(e){if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");let t=e?.range?this._serializeBufferByRange(this._terminal,this._terminal.buffer.normal,e.range,!0):this._serializeBufferByScrollback(this._terminal,this._terminal.buffer.normal,e?.scrollback);return e?.excludeAltBuffer||"alternate"!==this._terminal.buffer.active.type||(t+=`[?1049h[H${this._serializeBufferByScrollback(this._terminal,this._terminal.buffer.alternate,void 0)}`),e?.excludeModes||(t+=this._serializeModes(this._terminal)),t}serializeAsHTML(e){if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");return this._serializeBufferAsHTML(this._terminal,e||{})}dispose(){}};class h extends i{constructor(e,s,r){super(e),this._terminal=s,this._options=r,this._currentRow="",this._htmlContent="",s._core._themeService?this._ansiColors=s._core._themeService.colors.ansi:this._ansiColors=t.DEFAULT_ANSI_COLORS}_padStart(e,t,s){return t>>=0,s=s??" ",e.length>t?e:((t-=e.length)>s.length&&(s+=s.repeat(t/s.length)),s.slice(0,t)+e)}_beforeSerialize(e,t,s){this._htmlContent+="<html><body>\x3c!--StartFragment--\x3e<pre>";let r="#000000",o="#ffffff";this._options.includeGlobalBackground&&(r=this._terminal.options.theme?.foreground??"#ffffff",o=this._terminal.options.theme?.background??"#000000");const i=[];i.push("color: "+r+";"),i.push("background-color: "+o+";"),i.push("font-family: "+this._terminal.options.fontFamily+";"),i.push("font-size: "+this._terminal.options.fontSize+"px;"),this._htmlContent+="<div style='"+i.join(" ")+"'>"}_afterSerialize(){this._htmlContent+="</div>",this._htmlContent+="</pre>\x3c!--EndFragment--\x3e</body></html>"}_rowEnd(e,t){this._htmlContent+="<div><span>"+this._currentRow+"</span></div>",this._currentRow=""}_getHexColor(e,t){const s=t?e.getFgColor():e.getBgColor();return(t?e.isFgRGB():e.isBgRGB())?"#"+[s>>16&255,s>>8&255,255&s].map((e=>this._padStart(e.toString(16),2,"0"))).join(""):(t?e.isFgPalette():e.isBgPalette())?this._ansiColors[s].css:void 0}_diffStyle(e,t){const s=[],r=!n(e,t),o=!l(e,t),i=!a(e,t);if(r||o||i){const t=this._getHexColor(e,!0);t&&s.push("color: "+t+";");const r=this._getHexColor(e,!1);return r&&s.push("background-color: "+r+";"),e.isInverse()&&s.push("color: #000000; background-color: #BFBFBF;"),e.isBold()&&s.push("font-weight: bold;"),e.isUnderline()&&e.isOverline()?s.push("text-decoration: overline underline;"):e.isUnderline()?s.push("text-decoration: underline;"):e.isOverline()&&s.push("text-decoration: overline;"),e.isBlink()&&s.push("text-decoration: blink;"),e.isInvisible()&&s.push("visibility: hidden;"),e.isItalic()&&s.push("font-style: italic;"),e.isDim()&&s.push("opacity: 0.5;"),e.isStrikethrough()&&s.push("text-decoration: line-through;"),s}}_nextCell(e,t,s,r){if(0===e.getWidth())return;const o=""===e.getChars(),i=this._diffStyle(e,t);i&&(this._currentRow+=0===i.length?"</span><span>":"</span><span style='"+i.join(" ")+"'>"),this._currentRow+=o?" ":e.getChars()}_serializeString(){return this._htmlContent}}e.HTMLSerializeHandler=h})(),r})()));