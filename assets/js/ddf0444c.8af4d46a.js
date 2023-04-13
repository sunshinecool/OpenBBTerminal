"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84047],{3905:(D,R,U)=>{U.d(R,{Zo:()=>G,kt:()=>r});var P=U(67294);function S(D,R,U){return R in D?Object.defineProperty(D,R,{value:U,enumerable:!0,configurable:!0,writable:!0}):D[R]=U,D}function A(D,R){var U=Object.keys(D);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(D);R&&(P=P.filter((function(R){return Object.getOwnPropertyDescriptor(D,R).enumerable}))),U.push.apply(U,P)}return U}function B(D){for(var R=1;R<arguments.length;R++){var U=null!=arguments[R]?arguments[R]:{};R%2?A(Object(U),!0).forEach((function(R){S(D,R,U[R])})):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(U)):A(Object(U)).forEach((function(R){Object.defineProperty(D,R,Object.getOwnPropertyDescriptor(U,R))}))}return D}function K(D,R){if(null==D)return{};var U,P,S=function(D,R){if(null==D)return{};var U,P,S={},A=Object.keys(D);for(P=0;P<A.length;P++)U=A[P],R.indexOf(U)>=0||(S[U]=D[U]);return S}(D,R);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(D);for(P=0;P<A.length;P++)U=A[P],R.indexOf(U)>=0||Object.prototype.propertyIsEnumerable.call(D,U)&&(S[U]=D[U])}return S}var N=P.createContext({}),e=function(D){var R=P.useContext(N),U=R;return D&&(U="function"==typeof D?D(R):B(B({},R),D)),U},G=function(D){var R=e(D.components);return P.createElement(N.Provider,{value:R},D.children)},t="mdxType",E={inlineCode:"code",wrapper:function(D){var R=D.children;return P.createElement(P.Fragment,{},R)}},n=P.forwardRef((function(D,R){var U=D.components,S=D.mdxType,A=D.originalType,N=D.parentName,G=K(D,["components","mdxType","originalType","parentName"]),t=e(U),n=S,r=t["".concat(N,".").concat(n)]||t[n]||E[n]||A;return U?P.createElement(r,B(B({ref:R},G),{},{components:U})):P.createElement(r,B({ref:R},G))}));function r(D,R){var U=arguments,S=R&&R.mdxType;if("string"==typeof D||S){var A=U.length,B=new Array(A);B[0]=n;var K={};for(var N in R)hasOwnProperty.call(R,N)&&(K[N]=R[N]);K.originalType=D,K[t]="string"==typeof D?D:S,B[1]=K;for(var e=2;e<A;e++)B[e]=U[e];return P.createElement.apply(null,B)}return P.createElement.apply(null,U)}n.displayName="MDXCreateElement"},64561:(D,R,U)=>{U.r(R),U.d(R,{assets:()=>N,contentTitle:()=>B,default:()=>E,frontMatter:()=>A,metadata:()=>K,toc:()=>e});var P=U(87462),S=(U(67294),U(3905));const A={title:"load",description:"OpenBB Terminal Function"},B="load",K={unversionedId:"terminal/reference/forex/load",id:"terminal/reference/forex/load",title:"load",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/forex/load.md",sourceDirName:"terminal/reference/forex",slug:"/terminal/reference/forex/load",permalink:"/terminal/reference/forex/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/load.md",tags:[],version:"current",frontMatter:{title:"load",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"fwd",permalink:"/terminal/reference/forex/fwd"},next:{title:"Oanda",permalink:"/terminal/reference/forex/oanda/"}},N={},e=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],G={toc:e},t="wrapper";function E(D){let{components:R,...U}=D;return(0,S.kt)(t,(0,P.Z)({},G,U,{components:R,mdxType:"MDXLayout"}),(0,S.kt)("h1",{id:"load"},"load"),(0,S.kt)("p",null,"Load historical exchange rate data.Available data sources are Alpha Advantage and YahooFinanceBy default main source used for analysis is YahooFinance (yf). To change it use --source av"),(0,S.kt)("h3",{id:"usage"},"Usage"),(0,S.kt)("pre",null,(0,S.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"load [-t TICKER] [-r {i,d,w,m}] [-i {1min,5min,15min,30min,60min,90min,1hour,1day,5day,1week,1month,3month}] [-s START_DATE] [-e END]\n")),(0,S.kt)("hr",null),(0,S.kt)("h2",{id:"parameters"},"Parameters"),(0,S.kt)("table",null,(0,S.kt)("thead",{parentName:"table"},(0,S.kt)("tr",{parentName:"thead"},(0,S.kt)("th",{parentName:"tr",align:null},"Name"),(0,S.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,S.kt)("th",{parentName:"tr",align:null},"Description"),(0,S.kt)("th",{parentName:"tr",align:null},"Default"),(0,S.kt)("th",{parentName:"tr",align:null},"Optional"),(0,S.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,S.kt)("tbody",{parentName:"table"},(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"-t  --ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"Currency pair to load."),(0,S.kt)("td",{parentName:"tr",align:null},"None"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"AEDSEK, USDAED, MYRZAR, TWDHKD, PLNSEK, CHFSZL, SGDNOK, CHFNBL, AUDZAR, GBPRSD, TWDGBP, ZARHUF, NPREUR, CADJPY, GBPLYD, CHFVRN, SZLZAR, ILSSEK, EURMZN, USDTTD, ARSCAD, SZLEUR, KRWBRL, TWDEUR, SDGUSD, LYDUSD, MXNPEN, USDSLL, TTDUSD, RSDUSD, ILSAED, HKDTWD, USDAUN, EURZAR, NZDNOK, USDPKR, EURDJF, INRXAG, MXNJPY, JPYXAU, GHSGBP, ARSCLP, VNDCAD, MOPGBP, TWDTHB, SGDPLN, GBPAFN, TNDEUR, EURBTN, NADEUR, GBPMAD, AUDNOK, CHFNZD, BGNGBP, EGPUSD, XAUAUD, CLPPEN, BGNDKK, INRGBP, SVCGBP, EURDKK, JPYRUB, JPYHKD, XAUARS, UYUEUR, INRTWD, DKKSGD, HKDINR, NOKPLN, ALLGBP, HKDXAU, MXNRUB, USDLSL, BWPEUR, MURUSD, NZDUSD, KRUCHF, SARKWD, GBPXAU, CADAED, BRLUSD, EURHTG, XAUTHB, DKKTHB, AUDCNH, GBPCLP, JPYXAG, MYRNZD, USDRON, CADAUD, AUDSGD, BTNEUR, PENCOP, TWDCHF, XPDUSD, USDTRY, TNDZAR, IDRHKD, GBPPHP, ZARUSD, GBPINR, CHFNOK, KRWAUD, MOPUSD, TRYUSD, CADKRW, CADVND, SEKINR, LRDGBP, BIFUSD, EURLAK, SCREUR, DKKCHF, BZDGBP, USDTHB, CHFMAL, AUDARS, JPYHUF, MVRGBP, JPYEGP, USDMXN, KRWGBP, USDBWP, MALCHF, EURTTD, ZARTWD, EURLYD, GHSZAR, ILSNOK, MYRIDR, HNLEUR, DOPEUR, ZARCOP, COPEUR, INRKRW, EURGNF, AUDHUF, USDLYD, USDDKK, PENEUR, EUREGP, DOPGBP, PHPEUR, AUDNZD, LAKGBP, GBPTRY, ZARJPY, GBPCNY, CHFARE, CNHAUD, ISKCHF, PENGBP, KRWNZD, EURMGA, PKRTHB, TTDGBP, THBCHF, ISKUSD, BRLSGD, GBPRWF, SARJPY, JPYPKR, MYRJPY, EURMDL, DKKEUR, USDJMD, EURPYG, RONUSD, TWDSEK, INRCAD, DKKPHP, EURGTQ, DKKNOK, EURUSD, SARXAG, AEDOMR, SEKJPY, CADZAR, INRSGD, USDKES, AUDPLN, PABEUR, FJDUSD, THBIDR, DOPUSD, USDHKD, CHFDOE, CDFGBP, LAKEUR, USDIDR, GBPTHB, BWPCHF, CADMYR, XAGZAR, XAGCNY, XAGJPY, USDLAK, INRXAU, ZARTZS, GBPRON, EURCUP, EURVND, NZDJPY, AUDLTL, NBLCHF, GBPJOD, AEDPKR, ZARMXN, TWDINR, ZARIDR, USDKYD, BDTUSD, GNFGBP, PLNILS, PKRJPY, JPYNGN, USDXPT, CNYSGD, PGKAUD, CADBMD, BBDBMD, EURLSL, EURLRD, CDFEUR, PYGEUR, SGDTRY, PHPJPY, GBPBTN, RWFUSD, GBPETB, NZDDKK, GBPLBP, SARXAU, XPTEUR, BGNAUD, EURGHS, PLNRUB, SGDGBP, NZDPLN, UGXZAR, JMDUSD, USDPHP, GBPMGA, ARSMXN, CUPGBP, ZARPLN, MDLGBP, EURHKD, EURARS, CHFKRU, RUBZAR, BOBUSD, EURPLN, NZDPKR, NZDCAD, CADDKK, EURPEN, AUDXAG, EURNOK, PKRGBP, TWDUSD, GBPNIO, CNYHKD, PLNGBP, EURCHF, QARGBP, LKREUR, MKDEUR, JPYNOK, CHFTRY, DKKNZD, ILSAUD, EURHNL, EURPAB, XAURUB, USDBZD, SOSUSD, KYDCAD, GBPCHF, EURTJS, NZDCHF, AEDUSD, GBPPKR, ZARMWK, CADXAG, PABUSD, ILSUSD, HKDSGD, GBPPYG, NSOUSD, CZKEUR, VRLCHF, NOKNZD, SCRGBP, CADBRL, EURKWD, JPYAUD, DKKCNY, GBPMXN, HKDUSD, IDRZAR, EURCLP, AUDIDR, EURPHP, CNYAUD, ZARQAR, BRLHKD, USDSVC, SGDPKR, USDUYU, GBPNOK, GBPEGP, GBPHNL, SVCUSD, GBPBMD, USDUGX, EURXAU, SEKSGD, EURAFN, KRWSEK, BMDCAD, PLNNOK, COPUSD, USDVND, EURRWF, AUDKRW, MYRTWD, GBPYER, RUBNOK, USDGHS, ZARRWF, INRCHF, ILSEUR, MXNBRL, USDFJD, ISKGBP, AMDEUR, GBPDKK, USDHRK, EURCAD, CNYINR, AUDJPY, IQDEUR, SEKILS, HKDXAG, GNFEUR, GBPQAR, RUBJPY, PLNAUD, PENMXN, AEDQAR, JPYCAD, EURXPD, CHFHKD, GBPMOP, RSDEUR, EURMMK, GBPCDF, MYRHKD, ARSXAG, RUBGBP, KESEUR, EURCOP, EURBGN, SGDEUR, CNYMYR, MXNXAG, BZDUSD, ZAREGP, EURETB, CHFBRL, THBHKD, SZLGBP, LBPGBP, CADBGN, BZDEUR, GBPBRL, LSLEUR, SEKCAD, PLNNZD, EURSGD, PKRHKD, JPYPHP, JPYBRL, SAREUR, XAGSAR, USDAWG, THBCAD, CZKDKK, HTGGBP, TRYAUD, THBNZD, SDGEUR, USDUAH, AEDILS, EUROMR, EURKRW, UAHDKK, SEKDKK, BMDGBP, USDETB, CHFPLN, FJDGBP, SEKRUB, SGDAED, LAKUSD, GBPLSL, PLNZAR, THBZAR, USDPLN, AUDPKR, MXNSGD, JPYTRY, FJDAUD, MWKEUR, USDRSD, BRLARS, ZARUGX, LYDEUR, GBPMYR, RSDBRL, JODUSD, GBPHRK, JODEUR, JPYTHB, BRLCHF, NADUSD, MYRPKR, NOKUSD, AUDILS, ZMWEUR, VNDEUR, SGDINR, USDLKR, CHFRUB, BRLMXN, LYDGBP, GBPBOB, GBPBZD, CDFUSD, BBDEUR, JPYCHF, EURSLL, BGNCAD, HUFDKK, GBPVND, USDHNL, CADEUR, USDSEK, GBPISK, CHFTHB, BSDGBP, USDKRW, ALLEUR, BNDEUR, BHDAED, EURMYR, CADHKD, CNYUSD, KHREUR, NZDHUF, BIFGBP, IDRJPY, HUFPLN, JMDGBP, HUFNZD, PLNHRK, CLPARS, GYDUSD, HKDGBP, EURSZL, CHFIDR, VNDUSD, XAUTRY, SGDHKD, EURTWD, ZARAUD, SEKKRW, TZSZAR, AUDSEK, BOBGBP, KRWUSD, SARGBP, JPYMXN, GBPBBD, MXNCZK, XPDGBP, COPDKK, EURAUD, NZDCZK, GBPDJF, JODGBP, EURMOP, EURRSD, CADSEK, GBPKYD, PLNMXN, BSDEUR, THBTWD, KRWCNY, SGDNZD, DKKPLN, EURRON, EURIQD, PHPGBP, TTDEUR, VNDGBP, KZTEUR, HKDMXN, MADAUD, ZARXAU, MYRUSD, EURKYD, KRWTHB, ARSCHF, JPYEUR, NZDTWD, GBPUSD, KMFUSD, NOKINR, NGNZAR, USDSHP, PENCAD, JPYIDR, ZARTND, EURBND, GBPCNH, GBPMDL, IDRKRW, EURUYU, INRNOK, AUDAED, USDZAR, USDBHD, KYDUSD, EURHUF, GBPKRW, EGPJPY, MXNNZD, AUDCHF, MGAGBP, GBPMMK, TRYXAG, GBPARS, USDUZS, ZARSZL, IQDGBP, EURKHR, MWKGBP, MVRUSD, ALLUSD, KRWMYR, EURBZD, NIOUSD, USDCUP, ZARTHB, CHFSGD, MXNGBP, ILSCAD, EURFJD, JPYUSD, ISKDKK, OMRAED, UYUGBP, DKKZAR, AUDPGK, SEKAED, USDDOE, AEDJOD, RSDGBP, HRKAUD, BRLZAR, DKKRUB, USDCZK, GBPCUP, PGKEUR, PGKGBP, QARZAR, SZLCHF, CHFVRL, TWDPKR, AUDEUR, USDIQD, RUBEUR, USDOMR, CHFNSO, TMTUSD, CHFFRN, UZSUSD, MADEUR, BTNGBP, TWDJPY, EURIDR, SEKAUD, ARSAUD, ZARKRW, GBPSOS, DKKPKR, DKKHKD, ZARCHF, XCDGBP, DKKCAD, GBPSCR, CNYDKK, MDLEUR, SGDJPY, ZARCAD, BRLRSD, PYGUSD, EURSAR, ARSBRL, GBPCOP, USDBRL, USDNBL, AUDHKD, EURQAR, AEDSAR, JPYRSD, NGNUSD, SEKZAR, XAGHKD, NZDSEK, BNDUSD, ARSJPY, ZARGBP, LSLUSD, SGDARS, GBPDZD, AUNUSD, INRJPY, AEDBHD, NZDTHB, EURNPR, PKRMYR, KWDGBP, USDKHR, AEDAUD, MKDGBP, CLPUSD, CHFAUD, AUDCNY, USDMYR, BWPZAR, TWDNZD, PKRSAR, IDRINR, AFNGBP, GBPKZT, NZDCNY, EURXAG, ZARRUB, DKKMYR, AUDTWD, ZMWUSD, PHPUSD, CHFAUN, FRNCHF, USDNAD, JPYZAR, RONCHF, NZDAED, THBJPY, SGDCHF, BRLEUR, XPTUSD, TWDIDR, IDRCNY, THBKRW, CADINR, BGNEUR, PKREGP, HKDMYR, EURMVR, DOECHF, PKRZAR, TNDGBP, USDTZS, USDDJF, XAGMXN, GBPSGD, IDRSGD, JPYPLN, BAMGBP, MGAEUR, COPGBP, EGPGBP, GBPCAD, GBPCZK, UAHUSD, CHFINR, NOKDKK, MWKUSD, GBPXPD, ZARCNY, GBPIDR, MXNARS, ARSSGD, USDDZD, AEDDKK, CHFDKK, MOPEUR, AUNCHF, DKKHUF, CNHEUR, DJFEUR, ZARHKD, COPZAR, SEKHKD, AUDMYR, USDCVE, SZLUSD, TRYDKK, KRWHKD, SLLEUR, USDNGN, EURUZS, SEKNZD, NOKAUD, USDTWD, EURSEK, HKDKRW, HKDCAD, PGKUSD, BHDPKR, ZARCZK, CLPMXN, GBPXPF, ZARNOK, GBPPGK, THBXAU, KWDUSD, GBPBND, USDNIO, SLLUSD, NZDMXN, SEKEUR, BRLXAU, AEDGBP, BRLSEK, THBUSD, HNLGBP, LBPEUR, RSDJPY, BOBEUR, CADUSD, AUDCZK, CHFKRW, TWDCAD, CADGBP, RUBPLN, RUBCHF, EURPKR, NBLUSD, PLNJPY, XAGUSD, CHFAED, RONZAR, MMKGBP, BRLCAD, GBPGNF, RWFZAR, USDCNY, GBPBGN, THBDKK, CHFISK, JPYBDT, GBPAMD, NOKRUB, JODILS, MXNPLN, IDRCAD, XAUINR, USDXPF, THBCNY, ZARILS, USDRWF, EURISK, EURMXN, NOKZAR, KRWCAD, CUPEUR, IDRTWD, GBPPEN, LTLAUD, ZARARS, ZARMAD, LKRGBP, CHFMYR, INRAUD, PYGGBP, PKRAED, EURMUR, XAGBRL, USDPGK, GBPAWG, EURJPY, HRKCAD, CLPAUD, USDCLP, JPYILS, USDCNH, IDRMYR, NZDGBP, MMKEUR, USDSGD, RUBMXN, DKKGBP, TJSUSD, EURDOP, XAGRUB, ARSUSD, SGDMXN, USDXAU, TWDDKK, TRYZAR, SGDTHB, GTQEUR, HUFGBP, USDBBD, OMRGBP, DKKJPY, INREUR, AUDBRL, EURBOB, RUBUSD, HKDDKK, SGDZAR, GBPMWK, USDAUD, BMDBBD, USDNOK, ZARBRL, TWDZAR, SEKBRL, USDBAM, MXNCLP, GYDEUR, GBPGTQ, RUBAUD, JPYINR, PENCLP, AUDFJD, JMDEUR, CNYTHB, AUDBGN, USDMWK, JPYCNY, SHPUSD, MYRAUD, EURBRL, GHSUSD, SGDKRW, NZDAUD, EURAMD, HKDCHF, USDBDT, USDMMK, AEDKWD, USDPAB, COPMXN, CADNZD, CHFJPY, VRNCHF, USDXPD, NIOEUR, SGDUSD, MXNEUR, GTQUSD, KHRUSD, CHFRON, NZDHKD, CNYZAR, CLPEUR, PHPDKK, LRDUSD, UGXEUR, PHPAUD, AUDMXN, AUDCAD, EURLKR, USDCHF, USDRUB, UYUUSD, ZARKES, GBPTWD, AUDMAD, SARUSD, ZMWZAR, USDGBP, GBPUYU, JPYSEK, GBPBSD, ZARAED, GBPLKR, ETBUSD, DKKMXN, PLNDKK, EURDZD, HNLUSD, GBPOMR, USDKMF, OSOUSD, EURNGN, XAUSAR, EURPGK, CHFOSO, USDJOD, RWFGBP, CZKPLN, INRAED, HUFCAD, EURNZD, KRUUSD, AUDPHP, CHFTWD, USDBGN, AUDTRY, EURBSD, ILSJOD, NZDTRY, USDHUF, MYRSGD, GBPJMD, USDALL, CHFBWP, GBPLAK, GBPBAM, KRWCHF, ARSHKD, CHFARS, INRZAR, BRLGBP, NOKEUR, LSLGBP, ZARZMW, MYRCAD, USDMKD, EURCNY, NZDSGD, USDGYD, HKDCNY, EURNIO, GBPJPY, USDNZD, HUFZAR, KRWINR, SLLGBP, INRUSD, RONGBP, GBPNGN, AWGUSD, JODAED, HRKEUR, MXNCHF, NGNEUR, SGDSEK, XAGCAD, ZARSGD, AMDGBP, HKDJPY, KWDEUR, AFNEUR, CNHGBP, DZDGBP, ISKEUR, CADHRK, SGDCAD, GBPSZL, GHSEUR, BRLCLP, DKKINR, BMDEUR, EURCNH, KWDPKR, BWPGBP, BGNCNY, CLPGBP, USDTJS, USDBSD, ILSJPY, JPYMYR, EURMKD, CNYBGN, JPYVND, GBPEUR, CADKYD, DKKBGN, BRLCOP, CADXAU, USDNPR, EURBBD, QARAED, MXNCOP, CLPBRL, CHFHUF, GBPSAR, HKDPLN, SEKCZK, CLPJPY, CHFMXN, PLNEUR, AEDCAD, TRYPLN, GBPAED, KYDGBP, ZARTRY, JPYKRW, MYRCNY, GYDGBP, THBGBP, PKRTWD, HKDSEK, AUDGBP, EURTND, DKKCZK, GBPSLL, NOKJPY, XAUJPY, GBPFJD, PKRNZD, XAGTRY, GBPXAG, GBPPAB, NOKSEK, GBPRUB, CHFBRI, EURTRY, PENBRL, DKKCOP, SARAED, JPYDKK, USDYER, GBPBHD, GBPNPR, GBPSVC, SEKPLN, CADARS, EURGYD, CADIDR, GBPPLN, CNYJPY, TZSEUR, GBPDOP, DJFGBP, CADPEN, COPBRL, USDLBP, RUBXAG, KMFGBP, EURSDG, CNYIDR, MZNEUR, USDKRU, CNYEUR, MURGBP, CZKZAR, MKDUSD, SGDIDR, UZSEUR, ZAREUR, DKKUSD, MYREUR, USDHTG, DKKTWD, TWDCNY, GBPMVR, EURKZT, AEDINR, EURHRK, JPYARS, EURXPT, SEKNOK, FJDEUR, ZARNZD, NZDKRW, USDSAR, CZKNZD, ARSPEN, DKKISK, GBPBIF, INRIDR, IDRUSD, GBPBWP, HKDAUD, CHFUSD, USDMUR, RWFEUR, IDREUR, BDTGBP, GBPLRD, BRLXAG, USDMAD, TRYNZD, TRYCHF, HKDBRL, IDRCHF, MXNUSD, AUDCLP, GBPBDT, TWDSGD, AUDDKK, THBMYR, THBSGD, DKKTRY, CADMXN, USDSCR, TRYXAU, PKRAUD, TJSEUR, JPYSGD, ARSXAU, KZTGBP, ZARCYP, USDXAG, EURSCR, EURJMD, CZKAUD, SGDAUD, CHFEUR, USDDOP, KRWEUR, DKKAUD, USDJPY, TZSUSD, HUFJPY, XAUUSD, ILSCHF, BHDGBP, INRMYR, XPDEUR, BDTJPY, KRWXAG, PHPZAR, BNDGBP, HKDIDR, THBPKR, JPYAED, MVREUR, SGDDKK, BAMUSD, PLNCZK, XAGKRW, EURAED, CZKUSD, EURRUB, USDEUR, XAUBRL, EURMAD, GBPUAH, HTGUSD, ZARMYR, EURGBP, ARECHF, AEDNOK, USDMOP, THBINR, UGXUSD, KESUSD, CADHUF, GBPZAR, JPYTWD, ZARXAG, USDGNF, ZARNGN, XAGEUR, EURBIF, BBDUSD, USDGTQ, MYRTHB, DKKSEK, CNYGBP, USDINR, THBEUR, HKDTHB, XAUHKD, XAUZAR, ARSCOP, GBPKMF, INRHKD, DOEUSD, TWDAUD, BRIUSD, GBPUGX, LBPUSD, HKDARS, USDMDL, AWGGBP, ZARBWP, EURTHB, KRWJPY, EGPEUR, SEKGBP, XAGINR, EURCZK, BRLJPY, ZARSEK, NADZAR, RUBSEK, BWPUSD, GBPNZD, NGNGBP, XPFGBP, GBPAUD, XAUKRW, KRWZAR, BSDUSD, MYRINR, CZKJPY, NZDIDR, MXNZAR, GBPHKD, CZKGBP, MADZAR, ZARPHP, GBPXPT, XPTGBP, UAHEUR, MXNAUD, PKRKWD, EURBWP, EGPZAR, AUDHRK, CNYKRW, SEKTWD, DKKAED, ILSPLN, GBPMUR, OMRUSD, PKRUSD, YERGBP, PKRQAR, HKDEUR, ARSEUR, USDSDG, AEDNZD, CVEUSD, PLNTRY, MXNHKD, KYDBMD, XAUEUR, CNYXAG, GBPGHS, LRDEUR, MYRCHF, ARSGBP, XAGGBP, EURYER, CADSGD, NSOCHF, EURBMD, AUDRUB, GBPIQD, AEDZAR, EURNAD, BIFEUR, RUBXAU, MYRDKK, USDEGP, MUREUR, EURSOS, USDMAL, IQDUSD, ZARNAD, USDMGA, PKREUR, XAUGBP, AEDJPY, USDCOP, USDQAR, GBPHUF, DZDUSD, OMRZAR, EGPPKR, SGDMYR, YERUSD, AUDXAU, KRWIDR, LKRUSD, ILSZAR, NPRGBP, XAUMXN, DKKUAH, CZKMXN, ZARLKR, OMREUR, ZARRON, THBAUD, GBPILS, INRDKK, SGDBRL, USDMVR, GBPXCD, CADTHB, AEDSGD, MMKUSD, USDCAD, CNYNZD, EURLBP, GBPTND, IDRTHB, USDCDF, SGDCNY, CHFILS, USDZMW, BHDUSD, HUFUSD, MADGBP, OSOCHF, MDLUSD, HRKUSD, GBPMKD, BHDEUR, BMDKYD, GBPALL, XAUCAD, GBPKHR, EURKES, BRLAUD, HRKPLN, MYRKRW, USDSOS, JPYCZK, ZARPKR, SCRUSD, TRYJPY, NZDMYR, NOKAED, SOSEUR, MADUSD, AUDTHB, RONEUR, USDTMT, AEDCHF, TRYGBP, USDKZT, USDPEN, JPYCLP, XAUCNY, EURILS, EURINR, SGDTWD, INRCNY, PLNUSD, EURALL, MWKZAR, PKRSGD, KESGBP, NOKSGD, ILSGBP, CZKSEK, ZAROMR, BRLPEN, USDILS, EURBDT, CYPZAR, CNYTWD, SOSGBP, GBPTTD, MXNCAD, TRYEUR, NOKILS, USDKWD, UAHGBP, ETBEUR, KZTUSD, LKRZAR, NIOGBP, DJFUSD, GBPGYD, HKDPKR, QAREUR, JPYGBP, SEKUSD, QARPKR, CHFSEK, KYDEUR, CNYXAU, QARUSD, USDBIF, PLNHKD, MYRGBP, KRWRUB, USDBOB, USDBRI, TNDUSD, GBPSEK, PABGBP, EURCDF, PLNSGD, AEDEUR, KRWXAU, XAGARS, JPYNZD, MXNDKK, KWDSAR, PKRDKK, KRWTWD, HUFAUD, HTGEUR, EURUGX, DZDEUR, CNHUSD, USDSZL, VNDJPY, NOKGBP, BGNUSD, HKDZAR, RUBKRW, INRSEK, USDISK, PKRBHD, PENARS, USDPYG, CADILS, EURUAH, BRICHF, TWDMYR, EURJOD, NZDINR, IDRNZD, USDBND, EURTZS, AUDUSD, INRTHB, MXNXAU, XPFUSD, CUPUSD, KWDAED, ARSZAR, UGXGBP, PLNCHF, CHFGBP, BDTEUR, EURMWK, YEREUR, PLNHUF, SARPKR, NZDEUR, GBPKES, HUFEUR, USDLRD, IDRGBP, INRNZD, USDOSO, RUBDKK, KHRGBP, AUDINR, KESZAR, BRLKRW, USDTND, HKDNZD, COPARS, GTQGBP, NZDZAR, XAGAUD, HUFCHF, HRKGBP, BBDGBP, NPRUSD, KRWSGD, GBPHTG, EURZMW, GBPKWD, EURBHD, CHFZAR, USDNSO, ZARGHS, COPPEN, ETBGBP, NOKCHF, ZARINR, IDRAUD, MGAUSD, NGNJPY, CADTWD, USDARS, JPYSAR, TWDKRW, PENUSD, ZARDKK, SEKCHF, GNFUSD, TRYSGD, MALUSD")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"-r  --resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"[Alphavantage only]"," Resolution of data. Can be intraday, daily, weekly or monthly"),(0,S.kt)("td",{parentName:"tr",align:null},"d"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"i, d, w, m")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"interval"),(0,S.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,S.kt)("td",{parentName:"tr",align:null},"Interval of intraday data. Options: ","[YahooFinance]"," 1min, 2min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month. ","[AlphaVantage]"," 1min, 5min, 15min, 30min, 60min"),(0,S.kt)("td",{parentName:"tr",align:null},"1day"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"1min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"start_date"),(0,S.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,S.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"datetime.now() - timedelta(days=365)"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"end"),(0,S.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,S.kt)("td",{parentName:"tr",align:null},"The ending date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"2023-04-13"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")))),(0,S.kt)("hr",null))}E.isMDXComponent=!0}}]);