# Exercise 03 — Solution

```bash
node scripts/reveal.mjs 03 solution
```

Five bugs, one of which blocks another, and two of which are the same root cause. Read the debrief
at the end even if you got everything — it's the closest this folder gets to a rehearsal for the
real 45 minutes.

<!--rot13:Bugs 1 & 2 (silent)-->
GUR ZVFFVAT ERPHEFVIR PNYY — NAQ OHT 2 SBE SERR

JURER: fep/gerr.gf, synggraGerr

JUNG:

    sbe (pbafg abqr bs abqrf) {
      ebjf.chfu({ abqr, qrcgu });
      vs (vfRkcnaqrq(rkcnaqrq, abqr.vq)) {
        sbe (pbafg puvyq bs abqr.puvyqera) {
          ebjf.chfu({ abqr: puvyq, qrcgu: qrcgu + 1 });   // jnyxf BAR yriry, gura fgbcf
        }
      }
    }

Gur puvyqera trg chfurq, ohg abguvat rire qrfpraqf vagb gur puvyqera'f puvyqera. Gur gryy vf gur
`qrcgu` cnenzrgre vgfrys: n cnenzrgre gung rkvfgf bayl gb or vaperzragrq vf n cnenzrgre gung jnf
qrfvtarq gb or cnffrq gb n erphefvir pnyy — naq gurer vf ab erphefvir pnyy.

SVK:

    sbe (pbafg abqr bs abqrf) {
      ebjf.chfu({ abqr, qrcgu });
      vs (vfRkcnaqrq(rkcnaqrq, abqr.vq)) {
        ebjf.chfu(...synggraGerr(abqr.puvyqera, rkcnaqrq, qrcgu + 1));
      }
    }

OHT 2 VF GUR FNZR OHT. frnepuGerr pnyyf synggraGerr(abqrf, "nyy") naq svygref jung pbzrf onpx. Vg
unf ab genirefny bs vgf bja, fb vg pbhyq bayl rire svaq jung synggraGerr cebqhprq. Svk synggraGerr
naq "pbybe" svaqf Pbybe gbxraf vzzrqvngryl, jvgu frnepuGerr hagbhpurq.

GUR PBAPRCG: erphefvba vf "unaqyr guvf abqr, gura unaq gur fnzr wbo gb gur yriry orybj". N ybbc bire
abqr.puvyqera unaqyrf gur yriry orybj — ohg vg qbrfa'g unaq gur wbo bajneq, fb gur guveq yriry arire
trgf unaqyrq. Jura lbh ernq genirefny pbqr, ybbx sbe gur frys-pnyy svefg. Vs vg vfa'g gurer, gur
shapgvba vf funyybj ab znggre ubj qrrc gur glcr vf.

UBJ GB SVAQ VG SNFG: gur flzcgbz gbyq lbh gur rknpg qrcgu vg fgbccrq ng. Qrcgu 1 jbexf, qrcgu 2
jbexf, qrcgu 3 arire nccrnef — gung vf n shapgvba gung tbrf rknpgyl bar yriry, juvpu vf n irel fubeg
yvfg bs cbffvoyr funcrf. Bar pbafbyr.ybt(qrcgu, abqr.gvgyr) vafvqr gur ybbc znxrf vg haqravnoyr:
lbh'yy frr 0f naq 1f naq ab 2f.

NAQ: abgvpr lbh jrer gbyq "1 naq 2 zvtug or gur fnzr oht" naq pbhyq unir irevsvrq vg va guvegl
frpbaqf ol ernqvat frnepuGerr. Va na vagreivrj, fnlvat "orsber V svk guvf, yrg zr purpx jurgure gur
bgure flzcgbz funerf n ebbg pnhfr" vf jbegu nf zhpu nf gur svk.
<!--/rot13-->

<!--rot13:Bug 3 (silent)-->
GUR NPPHZHYNGBE GUNG ARIRE NPPHZHYNGRF

JURER: fep/gerr.gf, pbhagQrfpraqnagf

JUNG: `erghea abqr.puvyqera.yratgu;` pbhagf qverpg puvyqera bayl. Gur onqtr pynvzf gb fnl ubj znal
cntrf ner pbagnvarq ng nal qrcgu. Ratvarrevat unf 2 qverpg puvyqera naq 6 qrfpraqnagf.

SVK:

    rkcbeg shapgvba pbhagQrfpraqnagf(abqr: CntrAbqr): ahzore {
      erghea abqr.puvyqera.erqhpr(
        (gbgny, puvyq) => gbgny + 1 + pbhagQrfpraqnagf(puvyq),
        0,
      );
    }

Ernq gur `1 +` pnershyyl: rnpu puvyq pbhagf nf bar cntr vgfrys, cyhf rirelguvat haqrearngu vg. Gung
"+1" vf jurer guvf xvaq bs shapgvba vf hfhnyyl jebat ol rknpgyl gur ahzore bs abqrf.

GUR PBAPRCG: fnzr yrffba nf oht 1 jrnevat n qvssrerag ung. `puvyqera.yratgu` vf gur nafjre gb "ubj
znal puvyqera", naq gur onqtr vf nfxvat "ubj znal qrfpraqnagf". Jurarire n erphefvir dhrfgvba vf
nafjrerq ol n aba-erphefvir rkcerffvba, gur nafjre vf evtug ng qrcgu 1 naq jebat rireljurer ryfr —
juvpu vf jul abobql pnhtug vg: gur gbc-yriry ahzoref ybbxrq cynhfvoyr.

UBJ GB SVAQ VG SNFG: purpx n ahzore lbh pna pbhag ol unaq. Ratvarrevat fnlf 2; lbh pna frr 6 va gur
qngn. Nal shapgvba jubfr bhgchg qvfnterrf jvgu n unaq pbhag ba n svir-abqr rknzcyr vf n gjb-yvar
ernq njnl sebz orvat fbyirq.
<!--/rot13-->

<!--rot13:Bug 4 (crash)-->
GUR VASVAVGR RSSRPG YBBC

JURER: fep/CntrQrgnvy.gfk

JUNG:

    pbafg bcgvbaf = { vapyhqrPbhagf: gehr };          // arj bowrpg rirel eraqre

    hfrRssrpg(() => {
      frgFhzznel({ grkg: qrfpevorAbqr(abqr, bcgvbaf) });   // arj bowrpg rirel gvzr
    }, [abqr, bcgvbaf]);                                    // ...naq vg'f n qrcraqrapl

Ernpg pbzcnerf qrcraqrapvrf jvgu Bowrpg.vf. `bcgvbaf` vf n serfu bowrpg yvgreny ba rirel eraqre, fb
vg vf arire rdhny gb ynfg eraqre'f. Gur rssrpg er-ehaf nsgre rirel eraqre. Vg frgf fgngr gb n serfu
bowrpg, juvpu Ernpg nyfb frrf nf punatrq, fb vg eraqref ntnva, juvpu perngrf nabgure `bcgvbaf`.
Ernpg nobegf ng ~50 arfgrq hcqngrf jvgu "Znkvzhz hcqngr qrcgu rkprrqrq" naq hazbhagf gur gerr.

Jul guvf qbrfa'g nyjnlf ybbc: vs lbh frgFgngr gb gur fnzr CEVZVGVIR, Ernpg onvyf bhg naq gur plpyr
fgbcf nsgre bar rkgen eraqre. Obgu unyirf urer unaq Ernpg n arj bowrpg ersrerapr, fb abguvat onvyf.

SVK — gur fznyyrfg pbeerpg svk vf gb abgvpr guvf qbrfa'g arrq na rssrpg ng nyy:

    pbafg fhzznel = qrfpevorAbqr(abqr, { vapyhqrPbhagf: gehr });

Gurer vf ab nflapuebal, ab fhofpevcgvba, ab rkgreany flfgrz: vg'f n inyhr qrevirq sebz cebcf, naq
qrevirq inyhrf orybat va eraqre, abg va fgngr flapuebavmrq ol na rssrpg. Qryrgvat gur fgngr naq gur
rssrpg erzbirf gur oht naq guerr yvarf.

Vs lbh qvq jnag gb xrrc gur rssrpg, gur qrcraqrapl unf gb or fgnoyr — ubvfg gur pbafgnag bhg bs gur
pbzcbarag (`pbafg BCGVBAF = { vapyhqrPbhagf: gehr };` ng zbqhyr fpbcr) be jenc vg va hfrZrzb. Fnl
guvf va gur vagreivrj, gura fnl jul lbh'q engure qryrgr vg.

GUR PBAPRCG: gjb vqrnf, obgu jbegu fgngvat bhg ybhq. (1) Qrcraqrapl neenlf pbzcner ersreraprf, fb
nal bowrpg, neenl, be shapgvba perngrq qhevat eraqre vf n "punatrq" qrcraqrapl rirel gvzr. (2)
"Qrevirq fgngr va na rssrpg" vf na nagv-cnggrea — vs lbh pna pbzchgr vg qhevat eraqre, pbzchgr vg
qhevat eraqre.

UBJ GB SVAQ VG SNFG: ernq gur reebe zrffntr. Ernpg anzrf gur pnhfr va vgf frpbaq fragrapr naq vg vf
pbeerpg. Gura fpna gur pbzcbarag sbe inyhrf ohvyg qhevat eraqre gung nccrne va n qrcraqrapl neenl —
bowrpg yvgrenyf, neenl yvgrenyf, naq vayvar shapgvbaf, va gung beqre bs yvxryvubbq.
<!--/rot13-->

<!--rot13:Bug 5 (type)-->
GUR THNEQ GUNG ANEEBJF GUR JEBAT INEVNOYR

JURER: fep/Ncc.gfk

JUNG:

    pbafg fryrpgrqAbqr = fryrpgrqVq === ahyy ? haqrsvarq : svaqAbqr(GERR, fryrpgrqVq);
    ...
    {fryrpgrqVq !== ahyy ? <CntrQrgnvy abqr={fryrpgrqAbqr} /> : <cynprubyqre />}

svaqAbqr ergheaf `CntrAbqr | haqrsvarq`, orpnhfr na vq zvtug abg or va gur gerr. Gur WFK thneqf ba
`fryrpgrqVq`, n qvssrerag inevnoyr, fb GlcrFpevcg pnaabg aneebj `fryrpgrqAbqr` naq ercbegf:

    Glcr 'CntrAbqr | haqrsvarq' vf abg nffvtanoyr gb glcr 'CntrAbqr'.

SVK:

    {fryrpgrqAbqr !== haqrsvarq ? <CntrQrgnvy abqr={fryrpgrqAbqr} /> : <cynprubyqre />}

GUR PBAPRCG — guvf vf gur erny yrffba bs gur rkrepvfr: gur glcr reebe naq n yngrag ehagvzr penfu ner
gur fnzr oht. Gbqnl rirel vq pbzrf sebz n ebj va gur gerr, fb svaqAbqr nyjnlf fhpprrqf naq abguvat
oernxf. Ohg gur zbzrag na vq bhgyvirf vgf cntr — n qryrgrq cntr, n fgnyr HEY, n obbxznex, n
erfgberq frffvba — fryrpgrqAbqr vf haqrsvarq, CntrQrgnvy ernqf abqr.vpba, naq gur ncc juvgr-fperraf
rknpgyl yvxr oht 4 qvq. GlcrFpevcg vf abg orvat crqnagvp; vg vf qrfpevovat n penfu lbh unira'g unq
lrg.

Abgr jung ABG gb qb: `abqr={fryrpgrqAbqr nf CntrAbqr}` naq `abqr={fryrpgrqAbqr!}` obgu fvyrapr gur
pbzcvyre naq xrrc gur penfu. Gung vf ubj rkrepvfr 01'f oht 3 jnf obea. Na `nf` be n `!` ng n fcbg
yvxr guvf vf n qrpvfvba gb npprcg n ehagvzr penfu va rkpunatr sbe n terra ohvyq.

UBJ GB SVAQ VG SNFG: eha gur glcrpurpxre naq ernq gur reebe. Vg tvirf lbh gur svyr, gur yvar, naq
obgu glcrf. Gur bayl guvaxvat erdhverq vf "juvpu inevnoyr qvq gur thneq npghnyyl aneebj?" — naq gung
dhrfgvba vf jbegu nfxvat rirel gvzr lbh frr n thneq ba bar anzr cebgrpgvat n hfr bs nabgure.
<!--/rot13-->

<!--rot13:Debrief-->
1. GEVNTR BEQRE ZNGGREF. Gur penfu oybpxrq lbhe ivrj bs gur oernqpehzo, fb svkvat vg svefg obhtug
   lbh ivfvovyvgl vagb rirelguvat ryfr. Rkcyvpvgyl fnlvat "V'z tbvat gb svk gur penfu svefg orpnhfr
   vg'f oybpxvat zl novyvgl gb bofreir gur bgure flzcgbzf" vf rknpgyl gur xvaq bs aneengvba gung
   znxrf na vagreivrjre'f wbo rnfl.

2. GJB FLZCGBZF, BAR OHT. Rkrepvfr 02 gnhtug lbh gung bar fperra pna ubyq frireny haeryngrq ohtf.
   Guvf bar grnpurf gur bccbfvgr: frireny flzcgbzf pna or bar oht jrnevat qvssrerag pybgurf. Obgu
   unovgf znggre, naq gur jnl lbh gryy gurz ncneg vf ol svaqvat gur funerq pbqr cngu orsber svkvat
   nalguvat — frnepuGerr pnyyf synggraGerr, fb gurl pnaabg or vaqrcraqrag.

3. ERPHEFVBA UNF N PURPXYVFG. Jura genirefny pbqr vf fhfcrpg, nfx guerr dhrfgvbaf va beqre: qbrf vg
   pnyy vgfrys? qbrf vg cnff gur evtug npphzhyngbe qbja? qbrf vg pbzovar gur erfhygf pbzvat onpx hc?
   Oht 1 snvyrq gur svefg, oht 3 snvyrq gur guveq. Orgjrra gurz gurl pbire zbfg genirefny ohtf lbh
   jvyy rire frr.

4. N TERRA OHVYQ VF ABG N TERRA GLCRPURPX. `acz eha ohvyq:03` cnffrf jvgu n glcr reebe va gur gerr,
   orpnhfr Ivgr fgevcf glcrf jvgubhg purpxvat gurz. Xabjvat gung lbhe ohvyq gbby qbrfa'g glcrpurpx
   vf trahvaryl hfrshy vagreivrj xabjyrqtr.

5. VZCEBIRZRAGF JBEGU ENVFVAT HACEBZCGRQ: synggraGerr, pbhagQrfpraqnagf, svaqCngu naq frnepuGerr ner
   nyy cher shapgvbaf bire n gval svkgher — sbhe havg grfgf jbhyq unir pnhtug guerr bs gurfr svir
   ohtf orsber nalbar bcrarq n oebjfre. Gur `bcgvbaf` bowrpg va CntrQrgnvy fubhyq arire unir orra
   fgngr. Naq na reebe obhaqnel nebhaq gur qrgnvy cnar jbhyq unir xrcg n onq cntr sebz gnxvat qbja
   gur jubyr jbexfcnpr.
<!--/rot13-->
