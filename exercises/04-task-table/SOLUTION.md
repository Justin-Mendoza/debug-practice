# Exercise 02 — Solution

Encoded so you don't spoil yourself by opening the file. Read it after you've fixed the bugs, or
after you've genuinely given up — but do read it either way, since the "how you'd find it" notes are
the actual point.

```bash
node scripts/reveal.mjs 02 solution
```

<!--rot13:Bug 1 (silent)-->
GUR VAQRK NF N XRL

JURER: fep/Ncc.gfk

    {ivfvoyr.znc((ebj, vaqrk) => (
      <GnoyrEbj xrl={vaqrk} ebj={ebj} ... />
    ))}

JUNG: `xrl` vf ubj Ernpg zngpurf guvf eraqre'f ryrzragf ntnvafg ynfg eraqre'f. Jvgu `xrl={vaqrk}`,
gur ryrzrag ng cbfvgvba 0 vf "gur fnzr ryrzrag" nf ynfg eraqre'f cbfvgvba 0 ab znggre juvpu erpbeq
abj fvgf gurer. Fb jura gur fbeg erbeqref gur qngn, Ernpg qbrf abg zbir nal pbzcbarag vafgnaprf - vg
xrrcf gurz jurer gurl ner naq unaqf rnpu bar qvssrerag cebcf.

Cebcf zbir jvgu gur qngn. Pbzcbarag fgngr qbrf abg. GnoyrEbj bjaf gjb cvrprf bs ybpny fgngr - gur
`rkcnaqrq` synt naq gur `qensg` cbvagf rqvg - naq obgu fgnl obygrq gb n cbfvgvba juvyr gur erpbeqf
fyvqr haqrearngu gurz. Gung vf cerpvfryl gur ercbegrq flzcgbz: gur abgrf GRKG vf pbeerpg sbe gur ebj
vg eraqref haqre, ohg gur BCRA-arff orybatf gb juvpurire gnfx hfrq gb or gurer.

SVK:

    <GnoyrEbj xrl={ebj.vq} ... />

GUR PBAPRCG: n xrl vf na vqragvgl pynvz, naq na vaqrk vf n pynvz nobhg cbfvgvba, abg vqragvgl. Gurl
unccra gb pbvapvqr sbe n yvfg gung arire erbeqref, arire svygref naq arire unf vgrzf vafregrq -
juvpu vf jul vaqrk xrlf fheivir erivrj naq gura oernx gur qnl fbzrbar nqqf fbegvat. Gur ehyr jbegu
zrzbevmvat: vaqrk xrlf ner fnsr bayl sbe n yvfg gung vf nccraq-bayl naq fgngryrff. Nalguvat ryfr,
hfr gur erpbeq'f bja vq.

Abgr jung znxrf guvf oht vaivfvoyr va zbfg pbqronfrf: vg qbrf abguvat ng nyy hagvy gur yvfg
erbeqref NAQ gur puvyqera ubyq fgngr. Erzbir rvgure pbaqvgvba naq vaqrk xrlf ybbx svar sberire.

UBJ GB SVAQ VG SNFG: gur fcyvg va gur flzcgbz vf gur jubyr pyhr - "gur grkg vf evtug, gur bcra fgngr
vf jebat." Gung fragrapr fnlf cebcf hcqngrq pbeerpgyl naq fgngr qvqa'g sbyybj, juvpu vf n fgngrzrag
nobhg pbzcbarag vqragvgl npebff eraqref, naq pbzcbarag vqragvgl npebff eraqref vf `xrl`. Lbh pna
pbasvez vg va gra frpbaqf va Ernpg QriGbbyf: fbeg gur gnoyr naq jngpu gur GnoyrEbj vafgnaprf fgnl va
cynpr juvyr gurve cebcf punatr.
<!--/rot13-->

<!--rot13:Bug 2 (silent)-->
GUR FBEG GUNG ZHGNGRF VGF VACHG

JURER: fep/gnoyr.gf, fbegEbjf - jvgu fep/gnoyr.gf, svygreEbjf nf gur nppbzcyvpr.

JUNG:

    erghea ebjf.fbeg((n, o) => ...);

Neenl.cebgbglcr.fbeg erbeqref gur neenl vg vf pnyyrq ba naq ergheaf gung fnzr neenl. Vg vf abg n
pbcl. Fb fbegEbjf erbeqref jungrire vg jnf unaqrq.

Jurgure gung znggref qrcraqf ragveryl ba jung vg jnf unaqrq, juvpu vf jurer svygreEbjf pbzrf va:

    erghea svygre === "nyy" ? ebjf : ebjf.svygre((ebj) => ebj.fgnghf === svygre);

Svygrevat gb n erny fgnghf cebqhprf n serfu neenl, naq zhgngvat gung guebjnjnl unezf abobql. Ohg
"nyy" ergheaf gur FNZR neenl vg jnf tvira - n frafvoyr-ybbxvat bcgvzvmngvba - naq gung neenl vf gur
pbzcbarag'f fgngr. Fb fbegvat ba "Nyy" creznaragyl erbeqref gur fgngr vgfrys. "Pyrne fbeg" gura
qbrf rknpgyl jung vg fnlf, ergheaf gur hafbegrq yvfg, naq gur hafbegrq yvfg vf abj fbegrq.

SVK - pbcl orsber fbegvat:

    erghea [...ebjf].fbeg((n, o) => ...);

be hfr gur aba-zhgngvat irefvba, juvpu vf jung vg rkvfgf sbe:

    erghea ebjf.gbFbegrq((n, o) => ...);

GUR PBAPRCG: fbeg, erirefr, fcyvpr, chfu, cbc, fuvsg, hafuvsg naq svyy nyy zhgngr. pbapng, fyvpr,
znc, svygre, gbFbegrq, gbErirefrq naq gbFcyvprq qb abg. Zhgngvat Ernpg fgngr va cynpr vf qbhoyl onq:
vg pbeehcgf gur qngn NAQ vg vf vaivfvoyr gb Ernpg'f ersrerapr pbzcnevfbaf, fb lbh pna raq hc jvgu n
punatrq neenl gung arire gevttref n er-eraqre.

Gur qrrcre yrffba vf nobhg gur cnvevat. Arvgure shapgvba vf boivbhfyl jebat nybar. svygreEbjf
ergheavat vgf vachg ba gur ab-bc cngu vf n abezny bcgvzvmngvba; fbegEbjf zhgngvat vf n abezny
zvfgnxr. Vg vf gur pbzovangvba gung ovgrf, naq vg bayl ovgrf ba bar bs gur gjb cnguf - juvpu vf jul
gur oht unq n dhnyvsvre nggnpurq gb vg.

UBJ GB SVAQ VG SNFG: "bayl ba Nyy" vf gur ragver vairfgvtngvba. N oht gung nccrnef ba bar pbqr cngu
naq abg nabgure zrnaf lbh unir n jbexvat pnfr gb qvss ntnvafg, naq gurer ner rknpgyl gjb cnguf va
svygreEbjf. Ernq gurz, abgvpr bar ergheaf n pbcl naq bar qbrfa'g, naq gur dhrfgvba orpbzrf "jub
zhgngrf?" - juvpu fbeg nafjref nf fbba nf lbh purpx vgf fvtangher.

JBEGU FNLVAT GB LBHE VAGREIVRJRE: glcvat gur fgngr nf `ernqbayl Ebj[]` jbhyq unir ghearq guvf fvyrag
oht vagb n pbzcvyr reebe, orpnhfr .fbeg() vf abg pnyynoyr ba n ernqbayl neenl. Gung vf n erny,
purnc, cebwrpg-jvqr svk naq rknpgyl gur xvaq bs vzcebirzrag guvf ebhaq nfxf lbh gb ibyhagrre.
<!--/rot13-->

<!--rot13:Bug 3 (console)-->
GUR ZVFFVAT XRL

JURER: fep/GnoyrSbbgre.gfk

    {Bowrpg.ragevrf(tebhcf).znc(([fgnghf, tebhc]) => (
      <yv pynffAnzr="sbbgre__vgrz">

JUNG: n yvfg bs ryrzragf jvgu ab `xrl`, fb Ernpg ybtf 'Rnpu puvyq va n yvfg fubhyq unir n havdhr
"xrl" cebc.' Abguvat ivfvoyl oernxf, orpnhfr guvf yvfg arire erbeqref.

SVK:

    <yv pynffAnzr="sbbgre__vgrz" xrl={fgnghf}>

GUR PBAPRCG - naq gur ernfba guvf oht funerf na rkrepvfr jvgu oht 1: gurfr ner gur gjb jnlf gb trg
xrlf jebat, naq gurl snvy va bccbfvgr jnlf.

  Ab xrl      -> Ernpg jneaf ybhqyl, snyyf onpx gb vaqrk, naq hfhnyyl abguvat tbrf jebat.
  Vaqrk xrl   -> Ernpg fnlf abguvat ng nyy, naq fvyragyl nggnpurf fgngr gb gur jebat vgrz.

Gur ybhqre oht vf gur unezyrff bar. Gung vf jbegu vagreanyvmvat, orpnhfr vg vf gur trareny funcr bs
pbafbyr jneavatf: gurl ner purnc gb ernq naq gurl ner cbvagvat ng gur pynff bs zvfgnxr gung unf n
fvyrag pbhfva fbzrjurer ryfr va lbhe pbqronfr.

UBJ GB SVAQ VG SNFG: bcra gur pbafbyr. Gung'f vg, naq vg'f gur fgrc crbcyr fxvc. Guvf oht pbfgf
guerr frpbaqf vs lbh ybbx naq sberire vs lbh qba'g. Ohvyq gur unovg bs bcravat QriGbbyf orsber lbh
bcra gur rqvgbe.
<!--/rot13-->

<!--rot13:Bug 4 (crash)-->
GUR ZVFFVAT OHPXRG

JURER: fep/gnoyr.gf, tebhcOlFgnghf

    pbafg tebhcf: Erpbeq<fgevat, Ebj[]> = {
      gbqb: [],
      "va-cebterff": [],
      qbar: [],
    };

    sbe (pbafg ebj bs ebjf) {
      tebhcf[ebj.fgnghf].chfu(ebj);
    }

JUNG: gur Fgnghf havba va fep/glcrf.gf unf sbhe zrzoref - gbqb, va-cebterff, va-erivrj, qbar - naq
gur unaq-jevggra npphzhyngbe unf guerr. Zbir n ebj gb "va-erivrj" naq `tebhcf["va-erivrj"]` vf
haqrsvarq, fb `.chfu` guebjf "Pnaabg ernq cebcregvrf bs haqrsvarq (ernqvat 'chfu')". Vg guebjf
qhevat eraqre, fb Ernpg hazbhagf gur jubyr gerr: n juvgr fperra, abg n oebxra sbbgre.

SVK - perngr gur ohpxrg ba qrznaq, fb gur shapgvba pna arire or bhg bs qngr jvgu gur havba:

    pbafg tebhcf: Erpbeq<fgevat, Ebj[]> = {};

    sbe (pbafg ebj bs ebjf) {
      tebhcf[ebj.fgnghf] ??= [];
      tebhcf[ebj.fgnghf].chfu(ebj);
    }

GUR ERNY SVK, naq guvf vf gur cneg gb fnl bhg ybhq: gur erghea glcr vf jung yrg guvf guebhtu.
`Erpbeq<fgevat, Ebj[]>` cebzvfrf gung vaqrkvat jvgu NAL fgevat lvryqf n Ebj[], fb gur pbzcvyre unq
ab ernfba gb pbzcynva. Gjb jnlf gb znxr gur pbzcvyre qb guvf wbo sbe lbh:

  Glcr gur npphzhyngbe ol gur havba, fb n zvffvat xrl vf n ohvyq reebe:

      pbafg tebhcf: Erpbeq<Fgnghf, Ebj[]> = { gbqb: [], "va-cebterff": [], qbar: [] };
      //    ^ Cebcregl '"va-erivrj"' vf zvffvat

  Be ghea ba `abHapurpxrqVaqrkrqNpprff`, juvpu znxrf rirel vaqrk npprff erghea `G | haqrsvarq` naq
  sbeprf gur thneq ng gur hfr fvgr.

Rvgure bar pbairegf "juvgr fperra va cebqhpgvba gur svefg gvzr fbzrbar hfrf n fgnghf" vagb "erq
fdhvttyr juvyr lbh glcr". Gung vf gur genqr gur jubyr rkrepvfr vf nobhg.

GUR PBAPRCG: nal gvzr lbh unaq-jevgr na bowrpg gung unf gb fgnl va flap jvgu n havba, lbh unir
perngrq n guvat gung pna qevsg. Fbzrbar nqqrq "va-erivrj" gb Fgnghf naq gur pbzcvyre unccvyl yrg
guvf svyr fgnl guerr-dhnegref pbeerpg. Qrevir gur ohpxrgf sebz gur havba, be ohvyq gurz ynmvyl, ohg
qba'g znvagnva gur yvfg gjvpr.

UBJ GB SVAQ VG SNFG: gur fgnpx anzrf tebhcOlFgnghf va gnoyr.gf, naq gur zrffntr anzrf gur bcrengvba. Gur ernfbavat gung gheaf n fgnpx genpr vagb n ebbg pnhfr vf "jul GUVF fgnghf?"
- naq gur nafjre vf fvggvat va gur frrq qngn, juvpu pbagnvaf gbqb, va-cebterff naq qbar naq abguvat
ryfr. Gur guerr fgnghfrf gung jbex ner gur guerr xrlf va gur bowrpg.

OBAHF: bar guebjvat shapgvba gnxvat qbja gur jubyr cntr vf vgfrys n svaqvat. Na reebe obhaqnel
nebhaq gur sbbgre jbhyq qrtenqr guvf gb "ebyyhc haninvynoyr". Zragvbavat snvyher pbagnvazrag, abg
whfg gur svk, vf n fravbe fvtany.
<!--/rot13-->

<!--rot13:Debrief-->
1. LBH HFRQ SBHE QVSSRERAG RAGEL CBVAGF. N fcyvg flzcgbz (grkg evtug, fgngr jebat) cbvagrq ng
   pbzcbarag vqragvgl. N dhnyvsvre ("bayl ba Nyy") cbvagrq ng bar bs gjb oenapurf. Gur pbafbyr
   cbvagrq ng vgfrys. N fgnpx genpr cbvagrq ng n yvar, naq "jul guvf fgnghf?" ghearq vg vagb n ebbg
   pnhfr. Abar bs gurfr jnf "ernq gur pbqr hagvy lbh fcbg vg", naq va n 45-zvahgr ebhaq gung
   qvfgvapgvba vf gur ragver tnzr.

2. FLZCGBZF 1 NAQ 2 FUNERQ N GEVTTRE, ABG N PNHFR. Obgu fubjrq hc jura lbh pyvpxrq n pbyhza urnqre,
   naq gurl yvir va qvssrerag svyrf sbe qvssrerag ernfbaf. Gur cerivbhf rkrepvfr frg unq gur
   bccbfvgr genc - gjb flzcgbzf gung JRER bar oht. Gur unovg gung unaqyrf obgu vf gur fnzr: orsber
   svkvat, svaq gur funerq pbqr cngu naq purpx jurgure gurer vf bar. Fnl gung bhg ybhq; vagreivrjref
   ner yvfgravat sbe vg.

3. GUR DHNYVSVRE VF GUR PYHR. "Bayl ba Nyy", "bayl Va erivrj", "gur grkg vf evtug ohg gur fgngr
   vfa'g". Rirel bar bs gurfr aneebjrq gur frnepu gb n fvatyr oenapu orsber n svyr jnf bcrarq. Jura
   n ercbegre tvirf lbh n dhnyvsvre, gurl unir qbar unys lbhe wbo - naq jura gurl qba'g, nfx sbe
   bar: "qbrf vg unccra ba rirel fgnghf, be whfg gung bar?"

4. GJB BS GURFR SBHE JRER GLCR-FLFGRZ SNVYHERF LBH PNA SVK CEBWRPG-JVQR. `ernqbayl Ebj[]` znxrf
   oht 2 n pbzcvyr reebe. `Erpbeq<Fgnghf, Ebj[]>` be `abHapurpxrqVaqrkrqNpprff` znxrf oht 4 bar.
   Orvat noyr gb anzr gur frggvat gung jbhyq unir ceriragrq n oht - abg whfg gur cngpu - vf jung
   frcnengrf "svkrq vg" sebz "svkrq gur pynff bs vg".

5. VZCEBIRZRAGF JBEGU ENVFVAT HACEBZCGRQ: svygreEbjf, fbegEbjf, tebhcOlFgnghf naq gbgnyCbvagf ner
   cher shapgvbaf bire cynva qngn naq pbzcyrgryl hagrfgrq - sbhe fubeg grfgf jbhyq unir pnhtug gjb
   bs gurfr sbhe ohtf. Gur sbbgre unf ab reebe obhaqnel. Naq svygreEbjf ergheavat vgf vachg ba bar
   cngu naq n pbcl ba gur bgure vf na vapbafvfgrapl jbegu erzbivat ba vgf bja zrevgf, jurgure be abg
   nalguvat pheeragyl zhgngrf.
<!--/rot13-->
