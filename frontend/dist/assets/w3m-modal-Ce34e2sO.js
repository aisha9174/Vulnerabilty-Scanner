import{i as e,l as t,t as n}from"./lit-BDt6hD1I.js";import{a as r,i,o as a}from"./wui-text-DUvYa4Is.js";import{C as o,D as s,E as c,G as l,H as u,M as d,N as f,O as p,S as m,T as h,U as ee,V as te,_ as ne,a as g,d as _,i as v,j as re,k as ie,m as y,n as b,o as ae,r as oe,s as x,t as S,u as C,v as w,w as T,z as se}from"./ConstantsUtil-C6LEMChp.js";import{t as E}from"./SIWXUtil-FNmLiJTM.js";var D=ee({message:``,open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:`shade`}),O=re({state:D,subscribe(e){return l(D,()=>e(D))},subscribeKey(e,t){return u(D,e,t)},showTooltip({message:e,triggerRect:t,variant:n}){D.open=!0,D.message=e,D.triggerRect=t,D.variant=n},hide(){D.open=!1,D.message=``,D.triggerRect={width:0,height:0,top:0,left:0}}}),k={isUnsupportedChainView(){return T.state.view===`UnsupportedChain`||T.state.view===`SwitchNetwork`&&T.state.history.includes(`UnsupportedChain`)},async safeClose(){if(this.isUnsupportedChainView()){C.shake();return}if(await E.isSIWXCloseDisabled()){C.shake();return}(T.state.view===`DataCapture`||T.state.view===`DataCaptureOtpConfirm`)&&ne.disconnect(),C.close()}},ce=t`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`,le=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},A=class extends n{render(){return e`<slot></slot>`}};A.styles=[x,ce],A=le([b(`wui-card`)],A);var ue=t`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`,j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M=class extends n{constructor(){super(...arguments),this.message=``,this.backgroundColor=`accent-100`,this.iconColor=`accent-100`,this.icon=`info`}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,e`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){s.close()}};M.styles=[x,ue],j([a()],M.prototype,`message`,void 0),j([a()],M.prototype,`backgroundColor`,void 0),j([a()],M.prototype,`iconColor`,void 0),j([a()],M.prototype,`icon`,void 0),M=j([b(`wui-alertbar`)],M);var de=t`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`,fe=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},pe={info:{backgroundColor:`fg-350`,iconColor:`fg-325`,icon:`info`},success:{backgroundColor:`success-glass-reown-020`,iconColor:`success-125`,icon:`checkmark`},warning:{backgroundColor:`warning-glass-reown-020`,iconColor:`warning-100`,icon:`warningCircle`},error:{backgroundColor:`error-glass-reown-020`,iconColor:`error-125`,icon:`exclamationTriangle`}},N=class extends n{constructor(){super(),this.unsubscribe=[],this.open=s.state.open,this.onOpen(!0),this.unsubscribe.push(s.subscribeKey(`open`,e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{message:t,variant:n}=s.state,r=pe[n];return e`
      <wui-alertbar
        message=${t}
        backgroundColor=${r?.backgroundColor}
        iconColor=${r?.iconColor}
        icon=${r?.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:`scale(0.85)`},{opacity:1,transform:`scale(1)`}],{duration:150,fill:`forwards`,easing:`ease`}),this.style.cssText=`pointer-events: auto`):e||(this.animate([{opacity:1,transform:`scale(1)`},{opacity:0,transform:`scale(0.85)`}],{duration:150,fill:`forwards`,easing:`ease`}),this.style.cssText=`pointer-events: none`)}};N.styles=de,fe([r()],N.prototype,`open`,void 0),N=fe([b(`w3m-alertbar`)],N);var me=t`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    :host(:not([size='sm'])) button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,P=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F=class extends n{constructor(){super(...arguments),this.size=`md`,this.disabled=!1,this.icon=`copy`,this.iconColor=`inherit`}render(){this.dataset.size=this.size;let t=``,n=``;switch(this.size){case`lg`:t=`--wui-border-radius-xs`,n=`--wui-spacing-1xs`;break;case`sm`:t=`--wui-border-radius-3xs`,n=`--wui-spacing-xxs`;break;default:t=`--wui-border-radius-xxs`,n=`--wui-spacing-2xs`;break}return this.style.cssText=`
    --local-border-radius: var(${t});
    --local-padding: var(${n});
    `,e`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};F.styles=[x,g,v,me],P([a()],F.prototype,`size`,void 0),P([a({type:Boolean})],F.prototype,`disabled`,void 0),P([a()],F.prototype,`icon`,void 0),P([a()],F.prototype,`iconColor`,void 0),F=P([b(`wui-icon-link`)],F);var he=t`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`,I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=class extends n{constructor(){super(...arguments),this.imageSrc=``}render(){return e`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?e`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:e`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};L.styles=[x,g,v,he],I([a()],L.prototype,`imageSrc`,void 0),L=I([b(`wui-select`)],L);var ge=t`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,R=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_e=[`SmartSessionList`];function z(){let e=T.state.data?.connector?.name,t=T.state.data?.wallet?.name,n=T.state.data?.network?.name,r=t??e,i=m.getConnectors();return{Connect:`Connect ${i.length===1&&i[0]?.id===`w3m-email`?`Email`:``} Wallet`,Create:`Create Wallet`,ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:`All Wallets`,ApproveTransaction:`Approve Transaction`,BuyInProgress:`Buy`,ConnectingExternal:r??`Connect Wallet`,ConnectingWalletConnect:r??`WalletConnect`,ConnectingWalletConnectBasic:`WalletConnect`,ConnectingSiwe:`Sign In`,Convert:`Convert`,ConvertSelectToken:`Select token`,ConvertPreview:`Preview convert`,Downloads:r?`Get ${r}`:`Downloads`,EmailLogin:`Email Login`,EmailVerifyOtp:`Confirm Email`,EmailVerifyDevice:`Register Device`,GetWallet:`Get a wallet`,Networks:`Choose Network`,OnRampProviders:`Choose Provider`,OnRampActivity:`Activity`,OnRampTokenSelect:`Select Token`,OnRampFiatSelect:`Select Currency`,Pay:`How you pay`,ProfileWallets:`Wallets`,SwitchNetwork:n??`Switch Network`,Transactions:`Activity`,UnsupportedChain:`Switch Network`,UpgradeEmailWallet:`Upgrade your Wallet`,UpdateEmailWallet:`Edit Email`,UpdateEmailPrimaryOtp:`Confirm Current Email`,UpdateEmailSecondaryOtp:`Confirm New Email`,WhatIsABuy:`What is Buy?`,RegisterAccountName:`Choose name`,RegisterAccountNameSuccess:``,WalletReceive:`Receive`,WalletCompatibleNetworks:`Compatible Networks`,Swap:`Swap`,SwapSelectToken:`Select token`,SwapPreview:`Preview swap`,WalletSend:`Send`,WalletSendPreview:`Review send`,WalletSendSelectToken:`Select Token`,WhatIsANetwork:`What is a network?`,WhatIsAWallet:`What is a wallet?`,ConnectWallets:`Connect wallet`,ConnectSocials:`All socials`,ConnectingSocial:_.state.socialProvider?_.state.socialProvider:`Connect Social`,ConnectingMultiChain:`Select chain`,ConnectingFarcaster:`Farcaster`,SwitchActiveChain:`Switch chain`,SmartSessionCreated:void 0,SmartSessionList:`Smart Sessions`,SIWXSignMessage:`Sign In`,PayLoading:`Payment in progress`,DataCapture:`Profile`,DataCaptureOtpConfirm:`Confirm Email`}}var B=class extends n{constructor(){super(),this.unsubscribe=[],this.heading=z()[T.state.view],this.network=y.state.activeCaipNetwork,this.networkImage=p.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=T.state.view,this.viewDirection=``,this.headerText=z()[T.state.view],this.unsubscribe.push(ie.subscribeNetworkImages(()=>{this.networkImage=p.getNetworkImage(this.network)}),T.subscribeKey(`view`,e=>{setTimeout(()=>{this.view=e,this.headerText=z()[e]},S.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),y.subscribeKey(`activeCaipNetwork`,e=>{this.network=e,this.networkImage=p.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return e`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){c.sendEvent({type:`track`,event:`CLICK_WALLET_HELP`}),T.push(`WhatIsAWallet`)}async onClose(){await k.safeClose()}rightHeaderTemplate(){let t=d?.state?.features?.smartSessions;return T.state.view!==`Account`||!t?this.closeButtonTemplate():e`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>T.push(`SmartSessionList`)}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return e`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){let t=_e.includes(this.view);return e`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${t?e`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:t}=T.state,n=t===`Connect`,r=d.state.enableEmbedded,a=t===`ApproveTransaction`,o=t===`ConnectingSiwe`,s=t===`Account`,c=d.state.enableNetworkSwitch,l=a||o||n&&r;return s&&c?e`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${i(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${i(this.networkImage)}
      ></wui-select>`:this.showBack&&!l?e`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:e`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(c.sendEvent({type:`track`,event:`CLICK_NETWORKS`}),T.push(`Networks`))}isAllowedNetworkSwitch(){let e=y.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,n=e?.find(({id:e})=>e===this.network?.id);return t||!n}getPadding(){return this.heading?[`l`,`2l`,`l`,`2l`]:[`0`,`2l`,`0`,`2l`]}onViewChange(){let{history:e}=T.state,t=S.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=S.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){let{history:e}=T.state,t=this.shadowRoot?.querySelector(`#dynamic`);e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}onGoBack(){T.goBack()}};B.styles=ge,R([r()],B.prototype,`heading`,void 0),R([r()],B.prototype,`network`,void 0),R([r()],B.prototype,`networkImage`,void 0),R([r()],B.prototype,`showBack`,void 0),R([r()],B.prototype,`prevHistoryLength`,void 0),R([r()],B.prototype,`view`,void 0),R([r()],B.prototype,`viewDirection`,void 0),R([r()],B.prototype,`headerText`,void 0),B=R([b(`w3m-header`)],B);var ve=t`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=class extends n{constructor(){super(...arguments),this.backgroundColor=`accent-100`,this.iconColor=`accent-100`,this.icon=`checkmark`,this.message=``,this.loading=!1,this.iconType=`default`}render(){return e`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?e`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType===`default`?e`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:e`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};H.styles=[x,ve],V([a()],H.prototype,`backgroundColor`,void 0),V([a()],H.prototype,`iconColor`,void 0),V([a()],H.prototype,`icon`,void 0),V([a()],H.prototype,`message`,void 0),V([a()],H.prototype,`loading`,void 0),V([a()],H.prototype,`iconType`,void 0),H=V([b(`wui-snackbar`)],H);var ye=t`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},be={loading:void 0,success:{backgroundColor:`success-100`,iconColor:`success-100`,icon:`checkmark`},error:{backgroundColor:`error-100`,iconColor:`error-100`,icon:`close`}},W=class extends n{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=w.state.open,this.unsubscribe.push(w.subscribeKey(`open`,e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:t,variant:n,svg:r}=w.state,i=be[n],{icon:a,iconColor:o}=r??i??{};return e`
      <wui-snackbar
        message=${t}
        backgroundColor=${i?.backgroundColor}
        iconColor=${o}
        icon=${a}
        .loading=${n===`loading`}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:`translateX(-50%) scale(0.85)`},{opacity:1,transform:`translateX(-50%) scale(1)`}],{duration:150,fill:`forwards`,easing:`ease`}),this.timeout&&clearTimeout(this.timeout),w.state.autoClose&&(this.timeout=setTimeout(()=>w.hide(),2500))):this.animate([{opacity:1,transform:`translateX(-50%) scale(1)`},{opacity:0,transform:`translateX(-50%) scale(0.85)`}],{duration:150,fill:`forwards`,easing:`ease`})}};W.styles=ye,U([r()],W.prototype,`open`,void 0),W=U([b(`w3m-snackbar`)],W);var xe=t`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,G=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},K=class extends n{constructor(){super(),this.unsubscribe=[],this.open=O.state.open,this.message=O.state.message,this.triggerRect=O.state.triggerRect,this.variant=O.state.variant,this.unsubscribe.push(O.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let t=this.triggerRect.top,n=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${n}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?`flex`:`none`};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,e`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};K.styles=[xe],G([r()],K.prototype,`open`,void 0),G([r()],K.prototype,`message`,void 0),G([r()],K.prototype,`triggerRect`,void 0),G([r()],K.prototype,`variant`,void 0),K=G([b(`w3m-tooltip`),b(`w3m-tooltip`)],K);var Se=t`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},J=class extends n{constructor(){super(),this.resizeObserver=void 0,this.prevHeight=`0px`,this.prevHistoryLength=1,this.unsubscribe=[],this.view=T.state.view,this.viewDirection=``,this.unsubscribe.push(T.subscribeKey(`view`,e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([e])=>{let t=`${e?.contentRect.height}px`;this.prevHeight!==`0px`&&(this.style.setProperty(`--prev-height`,this.prevHeight),this.style.setProperty(`--new-height`,t),this.style.animation=`w3m-view-height 150ms forwards ease`,this.style.height=`auto`),setTimeout(()=>{this.prevHeight=t,this.style.animation=`unset`},S.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return e`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case`AccountSettings`:return e`<w3m-account-settings-view></w3m-account-settings-view>`;case`Account`:return e`<w3m-account-view></w3m-account-view>`;case`AllWallets`:return e`<w3m-all-wallets-view></w3m-all-wallets-view>`;case`ApproveTransaction`:return e`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case`BuyInProgress`:return e`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case`ChooseAccountName`:return e`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case`Connect`:return e`<w3m-connect-view></w3m-connect-view>`;case`Create`:return e`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case`ConnectingWalletConnect`:return e`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case`ConnectingWalletConnectBasic`:return e`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case`ConnectingExternal`:return e`<w3m-connecting-external-view></w3m-connecting-external-view>`;case`ConnectingSiwe`:return e`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case`ConnectWallets`:return e`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case`ConnectSocials`:return e`<w3m-connect-socials-view></w3m-connect-socials-view>`;case`ConnectingSocial`:return e`<w3m-connecting-social-view></w3m-connecting-social-view>`;case`DataCapture`:return e`<w3m-data-capture-view></w3m-data-capture-view>`;case`DataCaptureOtpConfirm`:return e`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case`Downloads`:return e`<w3m-downloads-view></w3m-downloads-view>`;case`EmailLogin`:return e`<w3m-email-login-view></w3m-email-login-view>`;case`EmailVerifyOtp`:return e`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case`EmailVerifyDevice`:return e`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case`GetWallet`:return e`<w3m-get-wallet-view></w3m-get-wallet-view>`;case`Networks`:return e`<w3m-networks-view></w3m-networks-view>`;case`SwitchNetwork`:return e`<w3m-network-switch-view></w3m-network-switch-view>`;case`ProfileWallets`:return e`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case`Transactions`:return e`<w3m-transactions-view></w3m-transactions-view>`;case`OnRampProviders`:return e`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case`OnRampTokenSelect`:return e`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case`OnRampFiatSelect`:return e`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case`UpgradeEmailWallet`:return e`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case`UpdateEmailWallet`:return e`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case`UpdateEmailPrimaryOtp`:return e`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case`UpdateEmailSecondaryOtp`:return e`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case`UnsupportedChain`:return e`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case`Swap`:return e`<w3m-swap-view></w3m-swap-view>`;case`SwapSelectToken`:return e`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case`SwapPreview`:return e`<w3m-swap-preview-view></w3m-swap-preview-view>`;case`WalletSend`:return e`<w3m-wallet-send-view></w3m-wallet-send-view>`;case`WalletSendSelectToken`:return e`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case`WalletSendPreview`:return e`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case`WhatIsABuy`:return e`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case`WalletReceive`:return e`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case`WalletCompatibleNetworks`:return e`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case`WhatIsAWallet`:return e`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case`ConnectingMultiChain`:return e`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case`WhatIsANetwork`:return e`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case`ConnectingFarcaster`:return e`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case`SwitchActiveChain`:return e`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case`RegisterAccountName`:return e`<w3m-register-account-name-view></w3m-register-account-name-view>`;case`RegisterAccountNameSuccess`:return e`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case`SmartSessionCreated`:return e`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case`SmartSessionList`:return e`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case`SIWXSignMessage`:return e`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case`Pay`:return e`<w3m-pay-view></w3m-pay-view>`;case`PayLoading`:return e`<w3m-pay-loading-view></w3m-pay-loading-view>`;default:return e`<w3m-connect-view></w3m-connect-view>`}}onViewChange(e){O.hide();let t=S.VIEW_DIRECTION.Next,{history:n}=T.state;n.length<this.prevHistoryLength&&(t=S.VIEW_DIRECTION.Prev),this.prevHistoryLength=n.length,this.viewDirection=t,setTimeout(()=>{this.view=e},S.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector(`div`)}};J.styles=Se,q([r()],J.prototype,`view`,void 0),q([r()],J.prototype,`viewDirection`,void 0),J=q([b(`w3m-router`)],J);var Ce=t`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,Y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},X=`scroll-lock`,Z=class extends n{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=d.state.enableEmbedded,this.open=C.state.open,this.caipAddress=y.state.activeCaipAddress,this.caipNetwork=y.state.activeCaipNetwork,this.shake=C.state.shake,this.filterByNamespace=m.state.filterByNamespace,this.initializeTheming(),h.prefetchAnalyticsConfig(),this.unsubscribe.push(C.subscribeKey(`open`,e=>e?this.onOpen():this.onClose()),C.subscribeKey(`shake`,e=>this.shake=e),y.subscribeKey(`activeCaipNetwork`,e=>this.onNewNetwork(e)),y.subscribeKey(`activeCaipAddress`,e=>this.onNewAddress(e)),d.subscribeKey(`enableEmbedded`,e=>this.enableEmbedded=e),m.subscribeKey(`filterByNamespace`,e=>{this.filterByNamespace!==e&&!y.getAccountData(e)?.caipAddress&&(h.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){C.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?`clamp(0px, var(--wui-border-radius-l), 44px)`:`0px`};
    `,this.enableEmbedded?e`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?e`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return e` <wui-card
      shake="${this.shake}"
      data-embedded="${i(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){await k.safeClose()}initializeTheming(){let{themeVariables:e,themeMode:t}=o.state;ae(e,oe.getColorTheme(t))}onClose(){this.open=!1,this.classList.remove(`open`),this.onScrollUnlock(),w.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add(`open`),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement(`style`);e.dataset.w3m=X,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${X}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector(`wui-card`);e?.focus(),window.addEventListener(`keydown`,t=>{if(t.key===`Escape`)this.handleClose();else if(t.key===`Tab`){let{tagName:n}=t.target;n&&!n.includes(`W3M-`)&&!n.includes(`WUI-`)&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){let t=y.state.isSwitchingNamespace,n=T.state.view===`ProfileWallets`;e?await this.onConnected({caipAddress:e,isSwitchingNamespace:t,isInProfileView:n}):!t&&!this.enableEmbedded&&!n&&C.close(),await E.initializeIfEnabled(e),this.caipAddress=e,y.setIsSwitchingNamespace(!1)}async onConnected(e){if(e.isInProfileView)return;let{chainNamespace:t,chainId:n,address:r}=se.parseCaipAddress(e.caipAddress),i=`${t}:${n}`,a=!f.getPlainAddress(this.caipAddress),o=await E.getSessions({address:r,caipNetworkId:i}),s=E.getSIWX()?o.some(e=>e.data.accountAddress===r):!0,c=e.isSwitchingNamespace&&s&&!this.enableEmbedded,l=this.enableEmbedded&&a;c?T.goBack():l&&C.close()}onNewNetwork(e){let t=this.caipNetwork,n=t?.caipNetworkId?.toString(),r=t?.chainNamespace,i=e?.caipNetworkId?.toString(),a=e?.chainNamespace,o=n!==i,s=o&&r===a,c=t?.name===te.UNSUPPORTED_NETWORK_NAME,l=T.state.view===`ConnectingExternal`,u=T.state.view===`ProfileWallets`,d=!y.getAccountData(e?.chainNamespace)?.caipAddress,f=T.state.view===`UnsupportedChain`,p=C.state.open,m=!1;this.enableEmbedded&&T.state.view===`SwitchNetwork`&&(m=!0),p&&!l&&!u&&(d?o&&(m=!0):(f||s&&!c)&&(m=!0)),m&&T.state.view!==`SIWXSignMessage`&&T.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||=(h.prefetch(),h.fetchWalletsByPage({page:1}),!0)}};Z.styles=Ce,Y([a({type:Boolean})],Z.prototype,`enableEmbedded`,void 0),Y([r()],Z.prototype,`open`,void 0),Y([r()],Z.prototype,`caipAddress`,void 0),Y([r()],Z.prototype,`caipNetwork`,void 0),Y([r()],Z.prototype,`shake`,void 0),Y([r()],Z.prototype,`filterByNamespace`,void 0);var Q=class extends Z{};Q=Y([b(`w3m-modal`)],Q);var $=class extends Z{};$=Y([b(`appkit-modal`)],$);export{$ as AppKitModal,Q as W3mModal,Z as W3mModalBase};