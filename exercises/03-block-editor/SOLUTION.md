# Exercise 02 — Solution

```bash
node scripts/reveal.mjs 02 solution
```

Read it after you've fixed the bugs or given up. The "how you'd find it" notes matter more than the
fixes — in the interview, the fix is the easy part.

<!--rot13:Bug 1 (silent)-->
GUR ZVFFVAT FJVGPU PNFR

JURER: fep/OybpxEbj.gfk

JUNG: gur fjvgpu ba oybpx.glcr unaqyrf urnqvat, cnentencu, gbqb, pnyybhg naq qvivqre. Gurer vf ab
`pnfr "pbqr"`, fb pbqr oybpxf uvg `qrsnhyg: erghea ahyy` naq eraqre nf abguvat.

SVK:

    pnfr "pbqr":
      erghea (
        <cer pynffAnzr="oybpx oybpx--pbqr">
          <pbqr>{oybpx.grkg}</pbqr>
        </cer>
      );

GUR ERNY SVK — naq guvf vf gur cneg gb fnl bhg ybhq: qryrgr gur `qrsnhyg` oenapu naq nqq na
rkunhfgvirarff purpx, fb gur pbzcvyre pngpurf gur arkg zvffvat pnfr vafgrnq bs gur hfre pngpuvat vg.

    qrsnhyg: {
      pbafg vzcbffvoyr: arire = oybpx;
      erghea vzcbffvoyr;
    }

Abj rirel nez bs gur havba zhfg or unaqyrq: vs fbzrbar nqqf n "gnoyr" oybpx glcr gb glcrf.gf naq
sbetrgf guvf svyr, `vzcbffvoyr` fgbcf orvat nffvtanoyr gb `arire` naq gur ohvyq snvyf. Gung vf gur
jubyr inyhr bs n qvfpevzvangrq havba, naq `qrsnhyg: erghea ahyy` guebjf vg njnl.

UBJ GB SVAQ VG SNFG: gur fgngf cnary pbhagrq gur pbqr oybpxf juvyr gur qbphzrag qvqa'g fubj gurz —
gur fnzr pbagenqvpgvba nf rkrepvfr 01, naq gur fnzr pbapyhfvba: gur qngn vf cerfrag, fb gur snhyg vf
va eraqrevat. Sebz gurer, bayl bar pbzcbarag eraqref oybpxf, naq vgf fjvgpu vf gjragl yvarf ybat.
<!--/rot13-->

<!--rot13:Bug 2 (silent)-->
ZHGNGVBA HAQRE ZRZB

JURER: fep/Ncc.gfk (unaqyrGbttyr) jvgu fep/OybpxEbj.gfk (gur `zrzb` jenccre)

JUNG: unaqyrGbttyr qbrf

    pbafg arkg = [...pheerag];
    pbafg gnetrg = arkg.svaq((oybpx) => oybpx.vq === vq);
    gnetrg.purpxrq = !gnetrg.purpxrq;   // zhgngrf gur bowrpg gung'f nyernql ba fperra
    erghea arkg;

Gur fcernq pbcvrf gur NEENL, ohg gur neenl ubyqf ersreraprf — `arkg[2]` naq `pheerag[2]` ner gur
fnzr bowrpg. Zhgngvat `gnetrg.purpxrq` punatrf gur bowrpg Ernpg nyernql eraqrerq.

Fb: gur neenl vf arj, fb Ncc er-eraqref naq `gbqbCebterff(oybpxf)` erpbzchgrf naq gur pbhagre zbirf.
Ohg OybpxEbj vf jenccrq va `zrzb`, juvpu funyybj-pbzcnerf cebcf: `ceriCebcf.oybpx === arkgCebcf.oybpx`
vf GEHR (fnzr bowrpg), naq baGbttyr vf fgnoyr ivn hfrPnyyonpx, fb zrzb fxvcf gur ebj ragveryl. Gur
qngn punatrq; gur QBZ qvqa'g. Gung vf gur rknpg fcyvg gur gvpxrg qrfpevorq.

SVK — ercynpr gur oybpx vafgrnq bs rqvgvat vg:

    frgOybpxf((pheerag) =>
      pheerag.znc((oybpx) =>
        oybpx.vq === vq && oybpx.glcr === "gbqb" ? { ...oybpx, purpxrq: !oybpx.purpxrq } : oybpx,
      ),
    );

Abj gur gbttyrq oybpx vf n ARJ bowrpg, zrzb frrf n qvssrerag ersrerapr, naq bayl gung ebj er-eraqref
— juvpu vf nyfb rknpgyl gur cresbeznapr orunivbe zrzb jnf nqqrq sbe.

GUR PBAPRCG: Ernpg qrpvqrf jung punatrq ol pbzcnevat ersreraprf (Bowrpg.vf), abg ol vafcrpgvat
inyhrf. Zhgngvat fgngr vf vaivfvoyr gb gung pbzcnevfba. Gur oht uvq urer orpnhfr unys gur HV ernq
guebhtu n serfu ersrerapr (gur neenl) naq unys ernq guebhtu n fgnyr bar (gur oybpx bowrpg).

JBEGU FNLVAT GB LBHE VAGREIVRJRE: guvf pynff bs oht vf jul fgngr vf fhccbfrq gb or gerngrq nf
vzzhgnoyr, naq jul `Bowrpg.serrmr` va qri, be n yvagre ehyr, be glcvat gur fgngr nf
`ernqbayl Oybpx[]` jvgu ernqbayl svryqf, jbhyq unir ghearq guvf fvyrag oht vagb n ybhq bar.

UBJ GB SVAQ VG SNFG: gur pbagenqvpgvba — "pbhagre zbirf, purpxobk qbrfa'g" — ehyrf bhg gur pyvpx
unaqyre, juvpu vf jurer zbfg crbcyr jnfgr gra zvahgrf. N pbafbyr.ybt va unaqyrGbttyr pbasvezf gur
inyhr syvcf. Bapr lbh xabj fgngr vf pbeerpg naq gur fperra vf fgnyr, gurer ner bayl gjb fhfcrpgf:
gur pbzcbarag vfa'g er-eraqrevat, be vg'f eraqrevat gur jebat guvat. `zrzb` ba gur ebj vf gura gur
svefg guvat lbhe rlr fubhyq ynaq ba.
<!--/rot13-->

<!--rot13:Bug 3 (console)-->
GUR ZVFFVAT XRL

JURER: fep/SvygreOne.gfk

JUNG: `bcgvbaf.znc((bcgvba) => <ohggba ...>)` cebqhprf na neenl bs ryrzragf jvgu ab `xrl`, fb Ernpg
ybtf: 'Rnpu puvyq va n yvfg fubhyq unir n havdhr "xrl" cebc.'

SVK:

    {bcgvbaf.znc((bcgvba) => (
      <ohggba xrl={bcgvba} ... >

GUR PBAPRCG: xrlf ner ubj Ernpg zngpurf ryrzragf orgjrra eraqref. Jvgubhg gurz vg snyyf onpx gb
cbfvgvba, fb jura n yvfg erbeqref be na vgrz vf erzbirq, Ernpg pna nggnpu gur jebat QBZ abqr — naq
jbefr, gur jebat pbzcbarag fgngr — gb gur jebat vgrz. Urer vg vf bayl n jneavat orpnhfr gur yvfg
arire erbeqref. Juvpu vf cerpvfryl jul vg fheivirq: abobql ybbxrq.

UBJ GB SVAQ VG SNFG: bcra gur pbafbyr. Gung'f gur ragver grpuavdhr, naq vg'f gur bar crbcyr fxvc.
Trg va gur unovg bs bcravat QriGbbyf orsber lbh bcra gur rqvgbe — guvf oht pbfgf guerr frpbaqf vs
lbh ybbx naq sberire vs lbh qba'g.
<!--/rot13-->

<!--rot13:Bug 4 (crash)-->
ERQHPR JVGU AB VAVGVNY INYHR

JURER: fep/oybpxf.gf, qbphzragFgngf

JUNG:

    pbafg ybatrfg = oybpxf.erqhpr((punzcvba, oybpx) =>
      grkgBs(oybpx).yratgu > grkgBs(punzcvba).yratgu ? oybpx : punzcvba,
    );

Jvgu ab vavgvny inyhr, erqhpr frrqf vgfrys jvgu gur svefg ryrzrag. Na rzcgl neenl unf ab svefg
ryrzrag, fb vg guebjf "Erqhpr bs rzcgl neenl jvgu ab vavgvny inyhr". Svygrevat ol Pnyybhg cebqhprf
na rzcgl neenl orpnhfr gur qbphzrag pbagnvaf ab pnyybhg oybpxf. Gur guebj unccraf qhevat eraqre, fb
Ernpg hazbhagf gur ragver gerr — n juvgr fperra, abg n oebxra cnary.

SVK — qrpvqr jung "ybatrfg oybpx va na rzcgl qbphzrag" zrnaf, naq rapbqr vg va gur glcr:

    rkcbeg vagresnpr QbphzragFgngf {
      oybpxPbhag: ahzore;
      jbeqPbhag: ahzore;
      ybatrfgOybpxVq: fgevat | ahyy;
    }

    pbafg ybatrfg = oybpxf.yratgu === 0
      ? ahyy
      : oybpxf.erqhpr((punzcvba, oybpx) =>
          grkgBs(oybpx).yratgu > grkgBs(punzcvba).yratgu ? oybpx : punzcvba,
        );

    erghea { oybpxPbhag: oybpxf.yratgu, jbeqPbhag, ybatrfgOybpxVq: ybatrfg?.vq ?? ahyy };

naq eraqre `{fgngf.ybatrfgOybpxVq ?? "—"}`.

GUR PBAPRCG: gur rzcgl neenl vf abg na rqtr pnfr, vg vf na beqvanel vachg — svygref, frnepurf naq
rzcgl fgngrf cebqhpr vg pbafgnagyl. Nal erqhpr jvgubhg na vavgvny inyhr vf n yngrag penfu. Abgr nyfb
gung GlcrFpevcg'f fvtangher sbe erqhpr vf jung yrg guvf guebhtu: gur bar-nethzrag bireybnq ergheaf
G engure guna G | haqrsvarq, orpnhfr gur fgnaqneq yvoenel nffhzrf lbh xabj gur neenl vf aba-rzcgl.

OBAHF — gur reebe obhaqnel cbvag: bar guebjvat pbzcbarag gnxvat qbja gur jubyr ncc vf vgfrys n
svaqvat. Ernpg'f nafjre vf na reebe obhaqnel nebhaq gur cnary, fb n oebxra fgngf envy qrtenqrf gb
"fgngf haninvynoyr" vafgrnq bs n juvgr fperra. Zragvbavat gung va na vagreivrj fubjf lbh'er guvaxvat
nobhg snvyher zbqrf, abg whfg guvf yvar.

UBJ GB SVAQ VG SNFG: gur fgnpx genpr anzrf qbphzragFgngf naq oybpxf.gf qverpgyl, naq gur zrffntr
yvgrenyyl fnlf "bs rzcgl neenl". Gur vagrerfgvat ernfbavat vf jul GUVF svygre: "pnyybhg vf gur bayl
svygre jvgu ab zngpuvat oybpxf" vf gur bofreingvba gung gheaf n fgnpx genpr vagb n ebbg pnhfr.
<!--/rot13-->

<!--rot13:Debrief-->
1. Lbh whfg hfrq sbhe qvssrerag ragel cbvagf vagb sbhe qvssrerag ohtf: n pbagenqvpgvba (fgngf pbhag
   if. eraqrerq bhgchg), n fcyvg flzcgbz (pbhagre if. purpxobk), gur pbafbyr, naq n fgnpx genpr.
   Erny qrohttvat vf cvpxvat gur purncrfg ragel cbvag ninvynoyr, naq gur pbafbyr naq gur fgnpx genpr
   ner nyjnlf gur purncrfg. Purpx gurz svefg, rirel gvzr.

2. "Gur pyvpx qbrfa'g jbex" jnf snyfr, naq oryvrivat vg jbhyq unir pbfg lbh gur vagreivrj pybpx. Gur
   pbhagre vaperzragvat jnf cebbs gur unaqyre ena. Nyjnlf nfx jung gur flzcgbz CEBIRF vf jbexvat —
   vg aneebjf gur frnepu snfgre guna jung vg cebirf vf oebxra.

3. Gjb bs gurfr sbhe ohtf (gur zvffvat pnfr naq gur zvffvat xrl) rkvfg orpnhfr n fnsrgl arg jnf
   ghearq bss: n `qrsnhyg` oenapu gung znqr n zvffvat pnfr yrtny, naq n yvfg jvgu ab xrlf gung
   abobql ernq gur jneavat sbe. Jura lbh frr n `qrsnhyg: erghea ahyy` bire n qvfpevzvangrq havba,
   gung vf n pbqr-dhnyvgl bofreingvba jbegu envfvat hacebzcgrq.

4. Vzcebirzrag yvfg jbegu bssrevat lbhe vagreivrjre ng gur raq: rkunhfgvirarff purpx vafgrnq bs
   `qrsnhyg`, ernqbayl fgngr glcrf gb znxr zhgngvba n pbzcvyr reebe, na reebe obhaqnel nebhaq gur
   fgngf envy, naq n havg grfg sbe qbphzragFgngf([]) — bar yvar gung jbhyq unir pnhtug oht 4.
<!--/rot13-->
