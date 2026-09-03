# Exercise 03 — Solution

Encoded so you don't spoil yourself by opening the file. Read it after you've fixed the bugs, or
after you've genuinely given up — but do read it either way, since the "how you'd find it" notes are
the actual point.

```bash
node scripts/reveal.mjs 03 solution
```

<!--rot13:Bug 1 (silent)-->
GUR FGNYR PYBFHER

JURER: fep/Ncc.gfk, unaqyrZbir

    pbafg unaqyrZbir = hfrPnyyonpx((pneq, sebz, gb) => {
      frgUvfgbel((pheerag) => { ... });          // shapgvbany hcqngr - nyjnlf pheerag

      frgNpgvivgl([
        ...npgvivgl,                              // pncgherq ba gur SVEFG eraqre, sberire
        { vq: ..., pneqGvgyr: pneq.gvgyr, sebz, gb },
      ]);
    }, []);                                       // <- rzcgl qrcf

JUNG: hfrPnyyonpx jvgu na rzcgl qrcraqrapl neenl ohvyqf gur shapgvba bapr, ba gur svefg eraqre, naq
unaqf onpx gung fnzr shapgvba sberire. Rirelguvat gur shapgvba pybfrq bire vf sebmra ng svefg-eraqre
inyhrf. `npgvivgl` jnf `[]` gura, naq vg vf `[]` vafvqr guvf pybfher sbe gur erfg bs gur frffvba.

Fb rirel zbir pbzchgrf `[...[], arjRagel]` - n bar-ryrzrag neenl. Gur ybt fubjf rknpgyl bar ragel ab
znggre ubj znal zbirf lbh znxr, naq `npgvivgl.yratgu` va gur urnqre vf creznaragyl 1. Gjb flzcgbzf,
bar pnhfr.

Gur obneq rfpncrf guvf orpnhfr vg hfrf gur shapgvbany sbez: `frgUvfgbel((pheerag) => ...)` nfxf
Ernpg sbe gur inyhr ng gur gvzr gur hcqngr ehaf engure guna ernqvat n pncgherq bar. Gung pbagenfg,
gjb yvarf ncneg va gur fnzr shapgvba, vf gur jubyr oht.

SVK - hfr gur shapgvbany sbez sbe obgu:

    frgNpgvivgl((pheerag) => [
      ...pheerag,
      { vq: `${pneq.vq}-${sebz}-${gb}-${pheerag.yratgu}`, pneqGvgyr: pneq.gvgyr, sebz, gb },
    ]);

Abj gur rzcgl qrcraqrapl neenl vf ubarfg: gur pnyyonpx pybfrf bire abguvat gung punatrf.

GUR PBAPRCG - naq guvf vf gur bar gb npghnyyl pneel jvgu lbh, orpnhfr vg vf gur zveebe vzntr bs gur
zvfgnxr zbfg crbcyr znxr svefg. Na rzcgl qrcraqrapl neenl qbrf abg zrna "eha bapr". Vg zrnaf "arire
erohvyq guvf pybfher", juvpu zrnaf "xrrc hfvat svefg-eraqre inyhrf sberire". Crbcyr ernpu sbe `[]`
gb fgbc fbzrguvat er-ehaavat, naq jung gurl trg vafgrnq vf fvyragyl fgnyr qngn.

Gur gjb jnlf bhg, va beqre bs cersrerapr:

  1. Qba'g pncgher gur inyhr ng nyy - hfr gur shapgvbany hcqngre, `frgK(pheerag => ...)`. Vg jbexf
     ertneqyrff bs jung gur qrcraqrapl neenl fnlf, juvpu vf jul vg vf gur orggre nafjre.
  2. Yvfg gur erny qrcraqrapvrf, naq npprcg gung gur shapgvba vf erohvyg jura gurl punatr. Gung vf
     jung qrcraqrapl neenlf ner sbe.

Jung lbh zhfg ABG qb vf xrrc `[]` naq ernpu vagb n ers gb fzhttyr gur pheerag inyhr bhg, hayrff lbh
trahvaryl arrq n fgnoyr vqragvgl sbe fbzrguvat ryfr. Gung'f ubj n fznyy yvr orpbzrf na nepuvgrpgher.

UBJ GB SVAQ VG SNFG: "gur ybt fubjf rknpgyl bar ragel, nyjnlf" vf n irel fcrpvsvp ahzore, naq
fcrpvsvp ahzoref ner tvsgf. Bar ragel zrnaf gur neenl orvat fcernq unq mreb ryrzragf. Fbzrguvat vf
nyjnlf rzcgl - naq gur bayl guvat gung pbhyq nyjnlf or rzcgl vf n inyhr pncgherq orsber nalguvat
unccrarq. Sebz gurer, gur qrcraqrapl neenl vf gur svefg cynpr gb ybbx. N pbafbyr.ybt bs
`npgvivgl.yratgu` ng gur gbc bs gur unaqyre frggyrf vg va bar pyvpx: vg cevagf 0 rirel gvzr.

JBEGU FNLVAT GB LBHE VAGREIVRJRE: gur `ernpg-ubbxf/rkunhfgvir-qrcf` yvag ehyr syntf guvf rknpg
cnggrea - gur pnyyonpx ernqf `npgvivgl`, gur qrcf neenl pynvzf vg qbrfa'g - naq guvf cebwrpg qbrfa'g
eha vg. Gung'f n bar-yvar pbasvt punatr gung jbhyq unir pnhtug gur oht orsber erivrj.
<!--/rot13-->

<!--rot13:Bug 2 (silent)-->
GUR BSS-OL-BAR OBHAQNEL

JURER: fep/Ncc.gfk

    pbafg pnaHaqb = uvfgbel.vaqrk > 1;

JUNG: `obneqf` fgnegf nf `[VAVGVNY_OBNEQ]` jvgu `vaqrk` ng 0, fb vaqrk 0 VF n yrtvgvzngr fgngr - vg
vf gur obneq lbh fgnegrq jvgu. Nsgre bar zbir gurer ner gjb fancfubgf naq gur cbvagre fvgf ng 1.
Haqb sebz gurer fubhyq jnyx onpx gb 0.

`vaqrk > 1` fnlf gur cbvagre zhfg or ng 2 be zber orsber haqb vf nyybjrq, juvpu znxrf vaqrk 1
n sybbe vafgrnq bs vaqrk 0. Gur erfhyg vf rknpgyl jung jnf ercbegrq: lbh pna nyjnlf haqb rirel zbir
rkprcg gur svefg, naq gur vavgvny obneq vf haernpunoyr.

haqb() vgfrys vf svar - `Zngu.znk(0, pheerag.vaqrk - 1)` pynzcf pbeerpgyl. Bayl gur thneq vf jebat,
juvpu vf jul gur ohggba terlf bhg engure guna zvforunivat.

SVK:

    pbafg pnaHaqb = uvfgbel.vaqrk > 0;

Fnavgl-purpx gur bgure raq juvyr lbh'er gurer: `pnaErqb = uvfgbel.vaqrk < uvfgbel.obneqf.yratgu - 1`
vf pbeerpg. Jvgu gjb fancfubgf, gur ynfg inyvq vaqrk vf 1, naq erqb vf nyybjrq juvyr vaqrk vf orybj
gung. Pbzcnevat ntnvafg `yratgu` vafgrnq bs `yratgu - 1` jbhyq yrg lbh fgrc bss gur raq.

GUR PBAPRCG: na vaqrk vagb na neenl bs yratgu a vf inyvq sbe 0..a-1, naq rirel thneq nebhaq vg vf n
punapr gb or jebat ol bar. Gur eryvnoyr grpuavdhr vf abg gb fdhvag ng gur rkcerffvba - vg vf gb
jevgr qbja gur fznyyrfg pbapergr pnfr naq purpx vg:

    obneqf = [vavgvny]            vaqrk = 0    haqb? ab    erqb? ab
    obneqf = [vavgvny, nsgreN]    vaqrk = 1    haqb? LRF   erqb? ab
    haqb                          vaqrk = 0    haqb? ab    erqb? LRF

Guerr yvarf, gra frpbaqf, naq vg pbairegf n whqtrzrag pnyy vagb nevguzrgvp. Qb guvf bhg ybhq va gur
vagreivrj - vg fubjf zrgubq, naq vg vf zhpu zber pbaivapvat guna fgnevat ng gur pbqr naq nffregvat
gung vg ybbxf evtug.

UBJ GB SVAQ VG SNFG: "gur svefg zbir vf gur bar V pna'g haqb" ybpnyvmrf gur oht gb gur ybjre obhaq
orsber lbh bcra n svyr, orpnhfr vg vf n fgngrzrag nobhg n obhaqnel, abg nobhg orunivbe va trareny.
Gura gurer ner bayl guerr rkcerffvbaf gung gbhpu gur vaqrk. Ernq nyy guerr, gnoyr gurz yvxr gur
nobir, naq gur jebat bar vqragvsvrf vgfrys.

Abgr gur genc guvf rkrepvfr frgf: flzcgbzf 1 naq 2 obgu fbhaq yvxr "fgngr vfa'g xrrcvat hc", naq
gurl ner pbzcyrgryl haeryngrq - bar vf n pybfher ceboyrz, gur bgure vf na nevguzrgvp ceboyrz. Gjb
ohtf va bar svyr vf abg gur fnzr nf bar oht jvgu gjb flzcgbzf, naq gur bayl jnl gb xabj juvpu lbh
unir vf gb svaq gur funerq pbqr cngu orsber lbh rqvg. Urer gurer vfa'g bar.
<!--/rot13-->

<!--rot13:Bug 3 (silent)-->
GUR MREB-ONFRQ ZBAGU

JURER: fep/obneq.gf, gbYbpnyQngr

    pbafg [lrne, zbagu, qnl] = vfb.fcyvg("-").znc(Ahzore);
    erghea arj Qngr(lrne, zbagu, qnl);

JUNG: gur Qngr pbafgehpgbe'f zbagu nethzrag vf mreb-onfrq - 0 vf Wnahnel, 11 vf Qrprzore. Gur VFB
fgevat vf bar-onfrq. Cnffvat 9 sbe Frcgrzore cebqhprf Bpgbore, fb rirel qhr qngr ynaqf nobhg n zbagu
va gur shgher naq abguvat vf rire qhr gbqnl be bireqhr.

Gur qbpfgevat nobir gur shapgvba vf pbeerpg naq gur pbqr qbrfa'g zngpu vg, juvpu vf jbegu abgvpvat:
fbzrobql xarj nobhg gur HGP-cnefvat genc, jebgr gur cnegf-onfrq irefvba gb nibvq vg, naq vagebqhprq
n qvssrerag qngr oht ba gur jnl cnfg.

SVK:

    erghea arj Qngr(lrne, zbagu - 1, qnl);

Pbzcner fep/qngn.gf, juvpu ohvyqf GBQNL nf `arj Qngr(2026, 8, 14, 9, 0)` jvgu n pbzzrag fnlvat 8 vf
Frcgrzore. Gung svyr trgf vg evtug. Gjb svyrf, fnzr pbafgehpgbe, bar pbzzrag - naq gur svyr jvgubhg
gur pbzzrag vf gur oebxra bar.

GUR PBAPRCG: WninFpevcg qngrf unir gjb gencf naq gurl ner rnfl gb pbashfr, fb yrnea obgu.

  1. Zbaguf ner mreb-onfrq va gur ahzrevp pbafgehpgbe naq va trgZbagu(), naq bar-onfrq rireljurer n
     uhzna jevgrf gurz. Guvf vf gur oht lbh whfg svkrq.

  2. `arj Qngr("2026-09-14")` - n qngr-bayl fgevat - vf cnefrq nf HGP zvqavtug, juvyr
     `arj Qngr("2026-09-14G00:00:00")` vf cnefrq nf ybpny. Fb va nal gvzrmbar jrfg bs Terrajvpu,
     `arj Qngr("2026-09-14").trgQngr()` ergheaf 13. Guvf vf gur oht gbYbpnyQngr jnf jevggra gb
     nibvq, naq vg vf gur bar gung cebqhprf "gur onqtr vf evtug sbe zr naq jebat sbe gur Arj Lbex
     bssvpr", juvpu vf sne uneqre gb ercebqhpr guna orvat jebat ol n zbagu.

Vs lbh svaq lbhefrys qbvat zber guna gevivny qngr nevguzrgvp, fnl fb: guvf vf gur bar qbznva jurer
ernpuvat sbe n yvoenel (qngr-saf, Grzcbeny jura vg ynaqf) vf gur fravbe nafjre engure guna n
qrcraqrapl lbh unir gb whfgvsl.

UBJ GB SVAQ VG SNFG: ernq gur ahzore, abg gur pbqr. Rirelguvat vf jebat ol nobhg guvegl qnlf. Guvegl
qnlf vf n zbagu, naq "bss ol bar zbagu" vf n zhpu fznyyre frnepu fcnpr guna "gur qngr ybtvp vf
jebat" - vg cbvagf ng n zbagu rkcerffvba, naq gurer vf rknpgyl bar. Orvat cerpvfr nobhg gur fvmr bs
na reebe vf gur snfgrfg jnl gb fuevax n frnepu, naq crbcyr fxvc vg pbafgnagyl.

JBEGU FNLVAT GB LBHE VAGREIVRJRE: qhrYnory gnxrf `abj` nf n cnenzrgre engure guna pnyyvat
`arj Qngr()` vagreanyyl, juvpu znxrf vg gevivnyyl grfgnoyr ng n svkrq pybpx. Svir nffregvbaf -
bireqhr, gbqnl, gbzbeebj, shgher, zbagu obhaqnel - jbhyq unir pnhtug guvf. Gur frnz vf nyernql
gurer; abobql hfrq vg.
<!--/rot13-->

<!--rot13:Bug 4 (crash)-->
GUR FGNGR HCQNGR QHEVAT ERAQRE

JURER: fep/Ncc.gfk, va gur pbzcbarag obql

    pbafg bire = PBYHZA_BEQRE.svygre((fgnghf) => vfBireYvzvg(obneq, fgnghf));
    vs (bire.yratgu > 0) {
      frgJvcJneavatf(bire);
    }

JUNG: guvf ehaf qhevat eraqre. Frggvat fgngr qhevat eraqre fpurqhyrf nabgure eraqre, juvpu ehaf gur
obql ntnva, juvpu frgf fgngr ntnva. Ernpg pbhagf gur pbafrphgvir nggrzcgf naq guebjf "Gbb znal
er-eraqref. Ernpg yvzvgf gur ahzore bs eraqref gb cerirag na vasvavgr ybbc." Vg guebjf qhevat
eraqre, fb gur jubyr gerr hazbhagf - n juvgr fperra.

Vg fheivirf ba ybnq orpnhfr `bire` vf rzcgl hagvy n pbyhza tbrf bire vgf yvzvg, fb gur hcqngr arire
sverf. Gur sbhegu pneq va n guerr-pneq pbyhza vf jung nezf vg.

Naq abgr JUL vg arire frggyrf, orpnhfr guvf vf gur fhogyr unys: rira vs lbh svkrq gur ybbc ol
pbzcnevat pbagragf, `svygre` ergheaf n oenaq-arj neenl ba rirel eraqre. Ernpg pbzcnerf jvgu
Bowrpg.vf, fb n arj neenl vf nyjnlf "qvssrerag" sebz gur byq bar ab znggre jung vf va vg. Gur
pbaqvgvba orvat gehr vf rabhtu gb thnenagrr vg fgnlf gehr.

SVK - abgvpr gung guvf qbrfa'g arrq fgngr ng nyy:

    pbafg bire = PBYHZA_BEQRE.svygre((fgnghf) => vfBireYvzvg(obneq, fgnghf));

gura eraqre gur onaare fgenvtug sebz `bire`:

    {bire.yratgu > 0 && <c pynffAnzr="onaare">Bire gur JVC yvzvg: {...}</c>}

Qryrgr gur hfrFgngr naq gur vs. `bire` vf nyernql erpbzchgrq ba rirel eraqre sebz gur pheerag obneq,
juvpu vf rknpgyl jung gur fgngr jnf gelvat, naq snvyvat, gb vzvgngr.

GUR PBAPRCG: qrevirq fgngr vf na nagv-cnggrea. Vs n inyhr pna or pbzchgrq sebz cebcf naq rkvfgvat
fgngr qhevat eraqre, pbzchgr vg qhevat eraqre. Chggvat vg va fgngr zrnaf lbh abj bja gur wbo bs
xrrcvat gjb guvatf va flap, naq gurer ner bayl gjb jnlf gb qb gung wbo - na rssrpg (bar eraqre yngr,
naq n ybbc vs gur qrcraqrapvrf ner hafgnoyr) be n jevgr qhevat eraqre (n ybbc vzzrqvngryl). Obgu ner
jbefr guna abg univat gur ceboyrz.

Gur guerr "rkgen pbcl bs gur gehgu" fzryyf, va gur beqre lbh'yy zrrg gurz:

    hfrFgngr + hfrRssrpg gb zveebe n cebc      -> whfg ernq gur cebc
    hfrFgngr jevggra gb qhevat eraqre           -> whfg pbzchgr gur inyhr
    hfrFgngr ubyqvat n svygre/fbeg bs n yvfg    -> pbzchgr vg, be hfrZrzb vs vg'f trahvaryl pbfgyl

UBJ GB SVAQ VG SNFG: ernq gur reebe zrffntr. Ernpg anzrf gur pnhfr va vgf frpbaq fragrapr naq vg vf
gryyvat gur gehgu. Gura fpna gur pbzcbarag obql - abg gur unaqyref, abg gur rssrpgf - sbe nalguvat
gung pnyyf n frggre. Gurer vf hfhnyyl rknpgyl bar, naq vg vf hfhnyyl gur oht. Gbgny gvzr: haqre n
zvahgr, juvpu vf jul guvf orybatf ng gur sebag bs lbhe gevntr.

OBAHF - gur gevntr cbvag: guvf penfu vf bar pyvpx njnl ng nyy gvzrf, fb vg oybpxf lbhe novyvgl gb
vairfgvtngr nalguvat ryfr. Fnlvat "V'z tbvat gb svk gur penfu svefg orpnhfr vg'f fgbccvat zr
bofreivat gur bgure flzcgbzf" vf rknpgyl gur aneengvba gung znxrf na vagreivrjre'f wbo rnfl.
<!--/rot13-->

<!--rot13:Bug 5 (type)-->
GUR JVQRARQ XRL

JURER: fep/Ncc.gfk

    {Bowrpg.xrlf(obneq).znc((fgnghf) => (
      <Pbyhza xrl={fgnghf} fgnghf={fgnghf} obneq={obneq} baZbir={unaqyrZbir} />
    ))}

    Glcr 'fgevat' vf abg nffvtanoyr gb glcr 'Fgnghf'.

JUNG: `Bowrpg.xrlf` vf glcrq gb erghea `fgevat[]`, rira sbe `Erpbeq<Fgnghf, Pneq[]>` jurer gur xrlf
ner xabja gb or rknpgyl "gbqb" | "qbvat" | "qbar". Fb `fgnghf` vf n `fgevat`, naq Pbyhza'f cebc
erdhverf n `Fgnghf`.

Guvf vf abg GlcrFpevcg orvat crqnagvp. Vg vf fbhaq, naq gur ernfba vf jbegu xabjvat: na bowrpg jvgu
rkgen cebcregvrf vf nffvtanoyr gb n aneebjre bowrpg glcr, fb n inyhr glcrq `Obneq` pna pneel xrlf ng
ehagvzr gung `Obneq` arire zragvbarq. Vs Bowrpg.xrlf jrer glcrq nf `Fgnghf[]`, gung nffvtazrag jbhyq
yrg lbh cebqhpr n `Fgnghf` gung vfa'g bar. Gur pbzcvyre vf ershfvat gb cebzvfr fbzrguvat gur
ynathntr pnaabg thnenagrr.

SVK - qba'g nfx gur bowrpg jung vgf xrlf ner; hfr gur yvfg lbh nyernql unir:

    {PBYHZA_BEQRE.znc((fgnghf) => (
      <Pbyhza xrl={fgnghf} fgnghf={fgnghf} obneq={obneq} baZbir={unaqyrZbir} />
    ))}

PBYHZA_BEQRE vf qrpynerq va fep/glcrf.gf nf `ernqbayl Fgnghf[]`, fb `fgnghf` vf n `Fgnghf` naq gur
reebe qvfnccrnef.

JUL GUR SVK VF ORGGRE GUNA GUR PNFG - guvf vf gur erny yrffba, fnzr nf vg nyjnlf vf jvgu n glcr
reebe. `Bowrpg.xrlf(obneq).znc((fgnghf) => ...)` eraqref gur pbyhzaf va jungrire beqre gur bowrpg'f
xrlf unccra gb or va. Gbqnl gung vf gbqb, qbvat, qbar, orpnhfr gung vf gur beqre VAVGVNY_OBNEQ jnf
jevggra va naq WninFpevcg cerfreirf fgevat-xrl vafregvba beqre. Abguvat rasbeprf vg. Erohvyq gur
obneq jvgu n fcernq va n qvssrerag beqre, nqq n pbyhza, be cebqhpr gur obneq sebz n erqhpr, naq lbhe
pbyhzaf fvyragyl erbeqre. Gur obneq'f pbyhza beqre jbhyq or na rzretrag cebcregl bs na bowrpg
yvgreny engure guna n qrpvfvba.

PBYHZA_BEQRE znxrf gur beqre rkcyvpvg naq gur glcrf pbeerpg va bar zbir. `fgnghf nf Fgnghf` svkrf
arvgure naq uvqrf obgu.

GUR PBAPRCG: `nf` naq `!` qb abg pbaireg be purpx nalguvat - gurl gryy gur pbzcvyre gb fgbc nethvat.
Rirel bar bs gurz vf n cebzvfr lbh ner znxvat ba orunys bs qngn lbh qvq abg vafcrpg. Jura n glcr
reebe nccrnef ng n obhaqnel yvxr guvf, gur hfrshy dhrfgvba vf arire "ubj qb V fvyrapr guvf" ohg
"jung qbrf gur pbzcvyre xabj gung V qba'g?" Urer vg xarj gur pbyhza beqre jnf nppvqragny.

UBJ GB SVAQ VG SNFG: eha gur glcrpurpxre. Vg unaqf lbh gur svyr, gur yvar naq obgu glcrf. Gur bayl
guvaxvat erdhverq vf "jurer qvq guvf fgevat pbzr sebz?" - naq Bowrpg.xrlf vf n jryy-xabja nafjre gb
gung dhrfgvba. Jbegu vagreanyvmvat: `acz eha ohvyq` cnffvat gryyf lbh abguvat nobhg glcrf, orpnhfr
Ivgr fgevcf gurz jvgubhg purpxvat. N terra ohvyq vf abg n terra glcrpurpx.
<!--/rot13-->

<!--rot13:Debrief-->
1. GEVNTR BEQRE ZNGGREF. Gur penfu jnf bar pyvpx njnl gur jubyr gvzr naq oybpxrq lbhe novyvgl gb
   bofreir nalguvat ryfr. Gur glcrpurpx reebe jnf serr naq gbbx gra frpbaqf. Obgu fubhyq unir orra
   unaqyrq orsber lbh fgnegrq ernfbavat nobhg haqb obhaqnevrf. Va n 45-zvahgr ebhaq, gur beqre lbh
   cvpx vf zbfg bs lbhe fpber.

2. GJB FLZCGBZF GUNG FBHAQ NYVXR NER ABG ARPRFFNEVYL BAR OHT. Gur ybt sbetrggvat naq haqb abg
   ernpuvat gur fgneg obgu ernq nf "fgngr vfa'g xrrcvat hc", naq gurl ner n pybfher ceboyrz naq na
   nevguzrgvp ceboyrz fvggvat svsgrra yvarf ncneg. Gur cerivbhf rkrepvfr unq gjb flzcgbzf jvgu bar
   gevttre naq gjb pnhfrf; gur nepuvirq frg unq gjb flzcgbzf jvgu bar pnhfr. Gur unovg gung unaqyrf
   nyy guerr pnfrf vf vqragvpny: svaq gur funerq pbqr cngu SVEFG, gura qrpvqr.

3. RZCGL QRCF NER ABG "EHA BAPR". Gurl ner "serrmr guvf pybfher sberire". Lbh unir abj zrg obgu
   fvqrf bs gur qrcraqrapl neenl: hafgnoyr qrcf gung er-eha rirelguvat, naq rzcgl qrcf gung er-eha
   abguvat naq tb fgnyr. Gur shapgvbany hcqngre - frgK(pheerag => ...) - fvqrfgrcf gur jubyr
   dhrfgvba, naq vf gur nafjre zber bsgra guna gur qrcraqrapl yvfg vf.

4. OR CERPVFR NOBHG GUR FVMR BS NA REEBE. "Gur qngrf ner jebat" vf n pngrtbel. "Rirelguvat vf jebat
   ol nobhg guvegl qnlf" anzrf gur havg naq fuevaxf gur frnepu gb bar rkcerffvba. Gur fnzr zbir
   jbexf ba bss-ol-barf: "gur SVEFG zbir vf gur bar V pna'g haqb" vf n fgngrzrag nobhg n obhaqnel,
   naq obhaqnevrf yvir va thneqf.

5. QREVIRQ FGNGR VF GUR ERPHEEVAT IVYYNVA. Oht 4 jnf n inyhr va fgngr gung fubhyq unir orra n inyhr
   va eraqre. Vs lbh pna pbzchgr vg qhevat eraqre, pbzchgr vg qhevat eraqre - ab rssrpg, ab frggre,
   ab flapuebavmngvba gb trg jebat.

6. VZCEBIRZRAGF JBEGU ENVFVAT HACEBZCGRQ: zbirGnetrg, zbirPneq, vfBireYvzvg naq qhrYnory ner cher
   shapgvbaf bire cynva qngn naq pbzcyrgryl hagrfgrq - qhrYnory nyernql gnxrf vgf pybpx nf n
   cnenzrgre fcrpvsvpnyyl fb vg pna or grfgrq, naq abobql qvq. Gur cebwrpg ehaf ab RFYvag, fb
   `ernpg-ubbxf/rkunhfgvir-qrcf` arire unq n punapr gb synt oht 1. Gurer vf ab reebe obhaqnel
   nebhaq gur obneq, fb bar onq eraqre gnxrf qbja gur cntr. Naq gur JVC yvzvgf hfr 99 nf n fgnaq-va
   sbe "ab yvzvg", juvpu vf gur xvaq bs zntvp ahzore gung riraghnyyl orpbzrf n erny yvzvg ol
   nppvqrag.
<!--/rot13-->
