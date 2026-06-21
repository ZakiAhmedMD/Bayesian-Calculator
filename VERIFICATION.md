# Diagnostic Test Verification Worksheet

_50 tests (28 acute [ED/inpatient·ICU], 22 outpatient/screening) — all currently `verified: false`. For each: open the source, confirm the quoted sensitivity/specificity match, check the **care setting** and context fit your use, then set `verified: true` in `src/data/diagnoses.json`._


## Pulmonary embolism

### 1. D-dimer (quantitative)  `(pe-ddimer)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 97% · Specificity 41%** — 95% CI sens 96%–98%, spec 36%–46%
- Source: Patel P, et al. Systematic review and meta-analysis of test accuracy for the diagnosis of suspected pulmonary embolism. Blood Adv. 2020;4(18):4296-4311 (61 studies).  [PubMed 32915980](https://pubmed.ncbi.nlm.nih.gov/32915980/) · [doi](https://doi.org/10.1182/bloodadvances.2019001052)
- Quote: “The pooled estimates for D-dimer sensitivity and specificity were 0.97 (95% confidence interval [CI], 0.96-0.98) and 0.41 (95% CI, 0.36-0.46) respectively.”
- Context: Quantitative D-dimer; patients with suspected first/recurrent PE. Values vary by assay (ELISA vs latex vs whole-blood) and increase in specificity with age-adjusted thresholds.
- Note: High sensitivity / low specificity makes a NEGATIVE result a strong rule-out (low LR-). DOI/PMID must be re-verified by faculty before teaching use.
- [ ] Verified by __________  on __________

### 2. CT pulmonary angiography (CTPA)  `(pe-cta)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 94% · Specificity 98%** — 95% CI sens 89%–97%, spec 97%–99%
- Source: Patel P, et al. Systematic review and meta-analysis of test accuracy for the diagnosis of suspected pulmonary embolism. Blood Adv. 2020;4(18):4296-4311 (61 studies).  [PubMed 32915980](https://pubmed.ncbi.nlm.nih.gov/32915980/) · [doi](https://doi.org/10.1182/bloodadvances.2019001052)
- Quote: “CTPA sensitivity and specificity were 0.94 (95% CI, 0.89-0.97) and 0.98 (95% CI, 0.97-0.99), respectively.”
- Context: CT pulmonary angiography in suspected PE; performance depends on scanner generation and image quality.
- Note: High specificity makes a POSITIVE result strongly rule-in (high LR+).
- [ ] Verified by __________  on __________

### 3. Compression ultrasonography (lower-extremity)  `(pe-cus)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 49% · Specificity 96%** — 95% CI sens 31%–66%, spec 95%–98%
- Source: Patel P, et al. Systematic review and meta-analysis of test accuracy for the diagnosis of suspected pulmonary embolism. Blood Adv. 2020;4(18):4296-4311 (61 studies).  [PubMed 32915980](https://pubmed.ncbi.nlm.nih.gov/32915980/) · [doi](https://doi.org/10.1182/bloodadvances.2019001052)
- Quote: “CUS sensitivity and specificity were 0.49 (95% CI, 0.31-0.66) and 0.96 (95% CI, 0.95-0.98), respectively.”
- Context: Compression ultrasonography detects proximal DVT as a surrogate for PE; low sensitivity means a negative study does NOT exclude PE.
- Note: Illustrates a rule-in (not rule-out) test: high specificity, low sensitivity.
- [ ] Verified by __________  on __________


## Deep vein thrombosis

### 4. Proximal compression ultrasonography  `(dvt-cus)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 90.1% · Specificity 98.5%** — 95% CI sens 86.5%–92.8%, spec 97.6%–99.1%
- Source: Bhatt M, et al. Diagnosis of deep vein thrombosis of the lower extremity: a systematic review and meta-analysis of test accuracy. Blood Adv. 2020;4(7):1250-1264 (43 studies).  [PubMed 32227213](https://pubmed.ncbi.nlm.nih.gov/32227213/) · [doi](https://doi.org/10.1182/bloodadvances.2019000960)
- Quote: “For any suspected DVT, the pooled estimates for sensitivity and specificity of proximal compression US were 90.1% (95% confidence interval [CI], 86.5-92.8) and 98.5% (95% CI, 97.6-99.1), respectively.”
- Context: Proximal (not whole-leg) compression ultrasonography for lower-extremity DVT; whole-leg and serial US have different characteristics.
- Note: High specificity makes a POSITIVE result a strong rule-in. Verify against source before teaching use.
- [ ] Verified by __________  on __________

### 5. D-dimer (quantitative)  `(dvt-ddimer)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 96.1% · Specificity 35.7%** — 95% CI sens 92.6%–98%, spec 29.5%–42.4%
- Source: Bhatt M, et al. Diagnosis of deep vein thrombosis of the lower extremity: a systematic review and meta-analysis of test accuracy. Blood Adv. 2020;4(7):1250-1264 (43 studies).  [PubMed 32227213](https://pubmed.ncbi.nlm.nih.gov/32227213/) · [doi](https://doi.org/10.1182/bloodadvances.2019000960)
- Quote: “For D-dimer, pooled estimates were 96.1% (95% CI, 92.6-98.0) and 35.7% (95% CI, 29.5-42.4).”
- Context: Quantitative D-dimer for suspected lower-extremity DVT; low specificity means a positive result is non-specific.
- Note: High sensitivity / low specificity → strong rule-out when negative.
- [ ] Verified by __________  on __________


## Heart failure

### 6. BNP (B-type natriuretic peptide)  `(hf-bnp)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 97% · Specificity 70%** — 95% CI sens 96%–98%, spec 56%–85%
- Source: Worster A, et al. Diagnostic accuracy of BNP and NT-proBNP in patients presenting to acute care settings with dyspnea: a systematic review. Clin Biochem. 2008;41(4-5):250-259 (9 studies).  [PubMed 17915204](https://pubmed.ncbi.nlm.nih.gov/17915204/) · [doi](https://doi.org/10.1016/j.clinbiochem.2007.08.008)
- Quote: “The pooled estimates of sensitivity and specificity were the same for the BNP studies (0.97 (95% CI: 0.96, 0.98) and 0.70 (95% CI: 0.56, 0.85)) as for the NT-proBNP studies (0.95 (95% CI: 0.90, 1.01) and 0.72 (95% CI: 0.53, 0.90)).”
- Context: Patients presenting to acute-care / ED settings with dyspnea; BNP for diagnosing acute heart failure. High sensitivity, moderate specificity, with substantial between-study heterogeneity (I-squared ~98%) and no single optimal cut point.
- Note: Re-sourced to an acute-care (ED) population, replacing a primary-care meta-analysis — note the acute-care specificity (~0.70) differs from the primary-care figure. Best as a rule-out of acute HF in undifferentiated dyspnea. Verify before teaching use.
- [ ] Verified by __________  on __________

### 7. NT-proBNP  `(hf-ntprobnp)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 95% · Specificity 72%**
- Source: Worster A, et al. Diagnostic accuracy of BNP and NT-proBNP in patients presenting to acute care settings with dyspnea: a systematic review. Clin Biochem. 2008;41(4-5):250-259 (9 studies).  [PubMed 17915204](https://pubmed.ncbi.nlm.nih.gov/17915204/) · [doi](https://doi.org/10.1016/j.clinbiochem.2007.08.008)
- Quote: “The pooled estimates of sensitivity and specificity were the same for the BNP studies (0.97 (95% CI: 0.96, 0.98) and 0.70 (95% CI: 0.56, 0.85)) as for the NT-proBNP studies (0.95 (95% CI: 0.90, 1.01) and 0.72 (95% CI: 0.53, 0.90)).”
- Context: Patients presenting to acute-care / ED settings with dyspnea; NT-proBNP for acute heart failure. Pooled sensitivity 0.95 (95% CI 0.90-1.01; upper bound exceeds 1 due to the meta-analytic method, so no CI is displayed) and specificity 0.72 (0.53-0.90); high heterogeneity.
- Note: Re-sourced to an acute-care (ED) population. Comparable to BNP; a rule-out test for acute HF. Verify before teaching use.
- [ ] Verified by __________  on __________


## Acute myocardial infarction

### 8. High-sensitivity troponin (ESC 0/1-hour algorithm)  `(mi-hstroponin)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 99% · Specificity 91%** — 95% CI sens 98%–99%, spec 91%–92%
- Source: Burgos LM, et al. Performance of the ESC 0/1-hour algorithm in the diagnosis of myocardial infarction with high-sensitivity cardiac troponin: systematic review and meta-analysis. Eur Heart J Acute Cardiovasc Care. 2020;10(3):279-286 (11 studies, 19,213 patients).  [PubMed 32597681](https://pubmed.ncbi.nlm.nih.gov/32597681/) · [doi](https://doi.org/10.1177/2048872620935399)
- Quote: “Summary sensitivity and specificity in diagnosing AMI were 99% (95% CI 98-99%;63%) and 91% (95% CI 91-92%;96%) respectively.”
- Context: Emergency-department suspected ACS, AMI prevalence ~11%; the 0h/1h SERIAL hs-cTn algorithm, not a single draw. The 63% / 96% after each CI are I-squared heterogeneity, not part of the interval.
- Note: Very high sensitivity → excellent rule-out; the algorithm also rules in. Verify before teaching use.
- [ ] Verified by __________  on __________


## Streptococcal pharyngitis

### 9. Rapid antigen detection test (RADT)  `(strep-radt)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 85.6% · Specificity 95.4%** — 95% CI sens 83.3%–87.6%, spec 94.5%–96.2%
- Source: Cohen JF, et al. Rapid antigen detection test for group A streptococcus in children with pharyngitis. Cochrane Database Syst Rev. 2016;7:CD010502 (105 evaluations, 58,244 participants).  [PubMed 27374000](https://pubmed.ncbi.nlm.nih.gov/27374000/) · [doi](https://doi.org/10.1002/14651858.CD010502.pub2)
- Quote: “RADT had a summary sensitivity of 85.6%; 95% confidence interval (CI) 83.3 to 87.6 and a summary specificity of 95.4%; 95% CI 94.5 to 96.2.”
- Context: Children with pharyngitis, RADT vs throat culture; median GAS prevalence ~29.5%. Sensitivity is heterogeneous across studies.
- Note: High specificity (rule-in); imperfect sensitivity means a negative RADT may warrant culture in children. Verify before teaching use.
- [ ] Verified by __________  on __________


## Celiac disease

### 10. Anti-tissue transglutaminase IgA (tTG-IgA)  `(celiac-ttg)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 90.7% · Specificity 87.4%** — 95% CI sens 87.3%–93.2%, spec 84.4%–90%
- Source: Sheppard AL, et al. Systematic review with meta-analysis: the accuracy of serological tests to support the diagnosis of coeliac disease. Aliment Pharmacol Ther. 2022;55(5):514-527.  [PubMed 35043426](https://pubmed.ncbi.nlm.nih.gov/35043426/) · [doi](https://doi.org/10.1111/apt.16729)
- Quote: “Summary sensitivity and specificity of immunoglobulin A (IgA) anti-tissue transglutaminase were 90.7% (95% confidence interval: 87.3%, 93.2%) and 87.4% (84.4%, 90.0%) in adults (5 studies).”
- Context: Adults in secondary care vs duodenal biopsy; values differ in children (sens ~97.7%, spec ~70.2%). Requires adequate gluten intake and total-IgA sufficiency.
- Note: Adult values shown; pediatric characteristics differ. Verify before teaching use.
- [ ] Verified by __________  on __________


## Rheumatoid arthritis

### 11. Anti-CCP (anti-cyclic citrullinated peptide-2)  `(ra-anticcp)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 71.9% · Specificity 96%** — 95% CI sens 69.9%–73.9%, spec 95.3%–96.6%
- Source: Zhang WC, Wu H, Chen WX. Meta-analysis: diagnostic accuracy of anti-CCP-2 and anti-CCP-3 antibody in rheumatoid arthritis. Clin Chem Lab Med. 2014;52(6):779-790 (17 studies).  [PubMed 24445240](https://pubmed.ncbi.nlm.nih.gov/24445240/) · [doi](https://doi.org/10.1515/cclm-2013-0798)
- Quote: “For anti-CCP-2, the values were 0.719 (95% CI, 0.699-0.739), 0.960 (95% CI, 0.953-0.966), 17.485 (95% CI, 11.960-25.562)...”
- Context: Anti-CCP-2 assay for known/suspected RA. High specificity, moderate sensitivity.
- Note: Classic rule-in test (high specificity); a negative result does not exclude RA. Verify before teaching use.
- [ ] Verified by __________  on __________

### 12. Rheumatoid factor (IgM RF)  `(ra-rheumatoid-factor)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 69% · Specificity 85%** — 95% CI sens 65%–73%, spec 82%–88%
- Source: Nishimura K, Sugiyama D, Kogata Y, Tsuji G, Nakazawa T, Kawano S, Saigo K, Morinobu A, Koshiba M, Kuntz KM, Kamae I, Kumagai S. Meta-analysis: diagnostic accuracy of anti-cyclic citrullinated peptide antibody and rheumatoid factor for rheumatoid arthritis. Ann Intern Med. 2007;146(11):797-808.  [PubMed 17548411](https://pubmed.ncbi.nlm.nih.gov/17548411/) · [doi](https://doi.org/10.7326/0003-4819-146-11-200706050-00008)
- Quote: “The pooled sensitivity, specificity, and positive and negative likelihood ratios for anti-CCP antibody were 67% (95% CI, 62% to 72%), 95% (CI, 94% to 97%), 12.46 (CI, 9.72 to 15.98), and 0.36 (CI, 0.31 to 0.42), respectively. For IgM RF, the values were 69% (CI, 65% to 73%), 85% (CI, 82% to 88%), 4.86 (CI, 3.95 to 5.97), and 0.38 (CI, 0.33 to 0.44).”
- Context: 50 RF studies; values are for IgM RF (sens 69%, spec 85%). The first sentence is quoted to establish the value order (sensitivity, specificity, +LR, -LR) for the IgM RF sentence that follows.
- Note: Moderately sensitive and specific: less specific than anti-CCP (95%), so RF is more prone to false positives (also seen in hepatitis C, Sjögren, healthy elderly). Anti-CCP is preferred when ruling in RA; RF and anti-CCP are often used together.
- [ ] Verified by __________  on __________


## Influenza

### 13. Rapid influenza diagnostic test (traditional RIDT)  `(flu-ridt)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 54.4% · Specificity 98%**
- Source: Merckx J, et al. Diagnostic accuracy of novel and traditional rapid tests for influenza infection compared with RT-PCR: a systematic review and meta-analysis. Ann Intern Med. 2017;167(6):394-409 (162 studies).  [PubMed 28869986](https://pubmed.ncbi.nlm.nih.gov/28869986/) · [doi](https://doi.org/10.7326/M17-0848)
- Quote: “Pooled sensitivities for detecting influenza A ... were 54.4% (95% credible interval [CrI], 48.9% to 59.8%) for RIDTs ... Pooled specificities were uniformly high (>98%).”
- Context: Traditional RIDT vs RT-PCR, influenza A. Specificity uniformly >98% (0.98 used as the stated floor; no precise spec interval reported). Sensitivity is higher in children and far higher for digital immunoassays and rapid NAATs.
- Note: The textbook low-sensitivity / high-specificity test: a POSITIVE rules in, but a NEGATIVE does NOT rule out influenza. Sensitivity CrI 48.9-59.8%. Verify before teaching use.
- [ ] Verified by __________  on __________


## Pheochromocytoma / paraganglioma

### 14. Plasma free normetanephrine  `(pheo-nmn)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 97% · Specificity 97%** — 95% CI sens 94%–98%, spec 92%–99%
- Source: Chen Y, et al. Accuracy of plasma free metanephrines in the diagnosis of pheochromocytoma and paraganglioma: a systematic review and meta-analysis. Endocr Pract. 2017;23(10):1169-1177.  [PubMed 28704098](https://pubmed.ncbi.nlm.nih.gov/28704098/) · [doi](https://doi.org/10.4158/EP171877.OR)
- Quote: “NMN was generally more accurate than individual tests, with the highest AUC (0.99, 95% CI 0.97-0.99), DOR (443.35, 95% CI 216.9-906.23), and pooled sensitivity (0.97, 95% CI 0.94-0.98) values.”
- Context: Plasma free normetanephrine (NMN) for PPGL; per the same meta-analysis NMN specificity was 0.97 (95% CI 0.92-0.99). LC-MS/MS preferred; cutoff and sampling position drive heterogeneity.
- Note: Teaching case: even at ~97% sensitivity AND specificity, the low pre-test probability of PPGL keeps PPV modest. Verify before teaching use.
- [ ] Verified by __________  on __________


## Systemic lupus erythematosus

### 15. Antinuclear antibody (ANA) by indirect immunofluorescence  `(sle-ana)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 95.2% · Specificity 83.3%**
- Source: Jeong S, et al. Diagnostic value of screening enzyme immunoassays compared to indirect immunofluorescence for anti-nuclear antibodies in patients with systemic rheumatic diseases: a systematic review and meta-analysis. Semin Arthritis Rheum. 2018;48(2):334-342.  [PubMed 29609799](https://pubmed.ncbi.nlm.nih.gov/29609799/) · [doi](https://doi.org/10.1016/j.semarthrit.2018.01.011)
- Quote: “the summary sensitivities of SEIA vs. IIF were 87.4% vs 88.4% for combined SRDs, 89.4% vs. 95.2% for SLE ... the summary specificities of SEIA vs. IIF were 79.7% vs.78.9% for combined SRDs, 89.1% vs. 83.3% for SLE”
- Context: ANA by indirect immunofluorescence (IIF) for SLE. High sensitivity → good rule-out; specificity is limited because ANA is positive in many other conditions and some healthy people. Screening EIA differs (sens 89.4%, spec 89.1%).
- Note: Classic rule-out: a negative ANA makes SLE unlikely; a positive ANA is non-specific. Verify before teaching use.
- [ ] Verified by __________  on __________


## Bacteremia

### 16. Procalcitonin (cutoff 0.5 ng/mL)  `(bacteremia-pct)`
- **Setting: Inpatient/ICU** [ACUTE]
- **Sensitivity 76% · Specificity 69%**
- Source: Hoeboer SH, et al. The diagnostic accuracy of procalcitonin for bacteraemia: a systematic review and meta-analysis. Clin Microbiol Infect. 2015;21(5):474-481 (58 studies, 16,514 patients).  [PubMed 25726038](https://pubmed.ncbi.nlm.nih.gov/25726038/) · [doi](https://doi.org/10.1016/j.cmi.2014.12.026)
- Quote: “The optimal and most widely used procalcitonin cut-off value was 0.5 ng/mL with a corresponding sensitivity of 76% and specificity of 69%.”
- Context: Procalcitonin at 0.5 ng/mL for bacteraemia (positive blood cultures) in adults; overall SROC AUC 0.79; accuracy varies by subgroup (ICU higher, neutropenic lower).
- Note: Moderate sensitivity AND specificity — a good example of a test that only modestly shifts probability. Verify before teaching use.
- [ ] Verified by __________  on __________


## Pulmonary tuberculosis

### 17. Xpert MTB/RIF (sputum nucleic acid amplification)  `(tb-xpert)`
- **Setting: Inpatient/ICU** [ACUTE]
- **Sensitivity 85% · Specificity 98%** — 95% CI sens 82%–88%, spec 97%–98%
- Source: Horne DJ, et al. Xpert MTB/RIF and Xpert MTB/RIF Ultra for pulmonary tuberculosis and rifampicin resistance in adults. Cochrane Database Syst Rev. 2019;6:CD009593 (86 studies, 42,091 participants).  [PubMed 31173647](https://pubmed.ncbi.nlm.nih.gov/31173647/) · [doi](https://doi.org/10.1002/14651858.CD009593.pub4)
- Quote: “Xpert MTB/RIF pooled sensitivity and specificity (95% credible Interval (CrI)) were 85% (82% to 88%) and 98% (97% to 98%), (70 studies, 37,237 unselected participants; high-certainty evidence).”
- Context: Adults with presumptive pulmonary TB vs culture. Sensitivity is lower in smear-negative (67%) and HIV-positive (81%) patients, so a negative result does not exclude TB.
- Note: High specificity → strong rule-in; imperfect sensitivity (especially smear-negative/HIV+) means negatives need follow-up. Verify before teaching use.
- [ ] Verified by __________  on __________


## Giant cell arteritis

### 18. Temporal artery ultrasound (halo sign)  `(gca-us)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 75% · Specificity 83%** — 95% CI sens 67%–82%, spec 78%–88%
- Source: Ball EL, et al. Role of ultrasonography in the diagnosis of temporal arteritis. Br J Surg. 2010;97(12):1765-1771 (17 studies, 998 patients).  [PubMed 20799290](https://pubmed.ncbi.nlm.nih.gov/20799290/) · [doi](https://doi.org/10.1002/bjs.7252)
- Quote: “When the halo sign on duplex imaging was compared with TA biopsy, the sensitivity was 75 (95 per cent confidence interval 67 to 82) per cent and the specificity was 83 (78 to 88) per cent.”
- Context: Halo sign on colour duplex ultrasonography vs temporal artery biopsy. Newer studies and protocols (e.g. axillary involvement, compression sign) may differ.
- Note: Imperfect on both axes; a negative scan does not exclude GCA when suspicion is high. Verify before teaching use.
- [ ] Verified by __________  on __________


## Acute aortic dissection

### 19. D-dimer (cutoff 500 ng/mL)  `(aad-ddimer)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 95.2% · Specificity 60.4%** — 95% CI sens 90.1%–97.8%, spec 48.5%–71.2%
- Source: Watanabe H, et al. Diagnostic test accuracy of D-dimer for acute aortic syndrome: systematic review and meta-analysis of 22 studies with 5000 subjects. Sci Rep. 2016;6:26893.  [PubMed 27230962](https://pubmed.ncbi.nlm.nih.gov/27230962/) · [doi](https://doi.org/10.1038/srep26893)
- Quote: “Based on ... 12 studies that used the cutoff value of 500 ng/ml, the sensitivity was 0.952 (95% CI 0.901-0.978), the specificity was 0.604 (95% CI 0.485-0.712).”
- Context: Acute aortic syndrome/dissection, D-dimer cutoff 500 ng/mL. High sensitivity, low specificity. Pre-test probability scoring (e.g. ADD-RS) modifies how it is used.
- Note: Rule-out parallel to D-dimer in PE: a value <500 ng/mL substantially lowers the probability of dissection. Verify before teaching use.
- [ ] Verified by __________  on __________


## Helicobacter pylori infection

### 20. Urea breath test (13C)  `(hpylori-ubt)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 94% · Specificity 90%**
- Source: Best LMJ, et al. Non-invasive diagnostic tests for Helicobacter pylori infection. Cochrane Database Syst Rev. 2018;3:CD012080 (101 studies, 11,003 participants).  [PubMed 29543326](https://pubmed.ncbi.nlm.nih.gov/29543326/) · [doi](https://doi.org/10.1002/14651858.CD012080.pub2)
- Quote: “The sensitivity (95% CI) estimated at a fixed specificity of 0.90 (median from studies across the four tests), was 0.94 (95% CI 0.89 to 0.97) for urea breath test-C”
- Context: 13C urea breath test vs histopathology; sensitivity estimated at a FIXED specificity of 0.90 (the cross-test median, so no separate specificity CI). Recent PPIs or antibiotics reduce sensitivity.
- Note: Sensitivity 95% CI 0.89-0.97. The most accurate non-invasive test; serology and stool antigen are somewhat less accurate. Verify before teaching use.
- [ ] Verified by __________  on __________

### 21. Monoclonal stool antigen test (pre-treatment)  `(hpylori-sat)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 94% · Specificity 97%** — 95% CI sens 93%–95%, spec 96%–98%
- Source: Gisbert JP, de la Morena F, Abraira V. Accuracy of monoclonal stool antigen test for the diagnosis of H. pylori infection: a systematic review and meta-analysis. Am J Gastroenterol. 2006;101(8):1921-1930 (22 studies, 2499 patients).  [PubMed 16780557](https://pubmed.ncbi.nlm.nih.gov/16780557/) · [doi](https://doi.org/10.1111/j.1572-0241.2006.00668.x)
- Quote: “Pooled sensitivity, specificity, LR+, and LR- were: 0.94 (95% CI 0.93-0.95), 0.97 (0.96-0.98), 24 (15-41), and 0.07 (0.04-0.12).”
- Context: Monoclonal stool antigen test before eradication therapy; more sensitive than the polyclonal technique. A non-invasive alternative/complement to the urea breath test.
- Note: Accurate non-invasive H. pylori test; recent PPIs/antibiotics/bismuth reduce sensitivity. Verify before teaching use.
- [ ] Verified by __________  on __________


## Bacterial meningitis

### 22. CSF lactate (cutoff ~35 mg/dL)  `(meningitis-csflactate)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 93% · Specificity 96%** — 95% CI sens 89%–96%, spec 93%–98%
- Source: Sakushima K, et al. Diagnostic accuracy of cerebrospinal fluid lactate for differentiating bacterial meningitis from aseptic meningitis: a meta-analysis. J Infect. 2011;62(4):255-262 (33 studies).  [PubMed 21382412](https://pubmed.ncbi.nlm.nih.gov/21382412/) · [doi](https://doi.org/10.1016/j.jinf.2011.02.010)
- Quote: “The pooled test characteristics of CSF lactate were sensitivity 0.93 (95% CI: 0.89-0.96), specificity 0.96 (95% CI: 0.93-0.98), likelihood ratio positive 22.9 ...”
- Context: CSF lactate to distinguish bacterial from aseptic meningitis, cutoff ~35 mg/dL. CRITICAL caveat: prior antibiotic treatment lowers sensitivity to ~0.49.
- Note: Strong test in the untreated patient, but pre-treatment with antibiotics markedly reduces sensitivity. Verify before teaching use.
- [ ] Verified by __________  on __________


## Acute cardiogenic pulmonary edema

### 23. Lung ultrasound (B-lines)  `(acpe-lus)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 94.1% · Specificity 92.4%** — 95% CI sens 81.3%–98.3%, spec 84.2%–96.4%
- Source: Al Deeb M, et al. Point-of-care ultrasonography for the diagnosis of acute cardiogenic pulmonary edema in patients presenting with acute dyspnea: a systematic review and meta-analysis. Acad Emerg Med. 2014;21(8):843-852 (7 studies, 1075 patients).  [PubMed 25176151](https://pubmed.ncbi.nlm.nih.gov/25176151/) · [doi](https://doi.org/10.1111/acem.12435)
- Quote: “The sensitivity of US using B-lines to diagnosis ACPE is 94.1% (95% confidence interval [CI] = 81.3% to 98.3%) and the specificity is 92.4% (95% CI = 84.2% to 96.4%).”
- Context: Point-of-care lung ultrasound B-lines for acute cardiogenic pulmonary edema in undifferentiated dyspnea; reference standard was final clinical diagnosis.
- Note: Good rule-in and rule-out at the bedside; operator- and protocol-dependent. Verify before teaching use.
- [ ] Verified by __________  on __________


## Acute appendicitis

### 24. Abdominopelvic CT  `(appendicitis-ct)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 95% · Specificity 94%** — 95% CI sens 93%–96%, spec 92%–95%
- Source: Rud B, et al. Computed tomography for diagnosis of acute appendicitis in adults. Cochrane Database Syst Rev. 2019;(11):CD009977 (64 studies, 10,280 participants).  [PubMed 31743429](https://pubmed.ncbi.nlm.nih.gov/31743429/) · [doi](https://doi.org/10.1002/14651858.CD009977.pub2)
- Quote: “Summary sensitivity was 0.95 (95% confidence interval (CI) 0.93 to 0.96), and summary specificity was 0.94 (95% CI 0.92 to 0.95).”
- Context: Adults with suspected appendicitis, CT vs surgical/follow-up reference; median prevalence 0.43. IV/contrast-enhanced CT slightly more sensitive than unenhanced.
- Note: High on both axes → strong rule-in and rule-out. Verify before teaching use.
- [ ] Verified by __________  on __________


## Inflammatory bowel disease

### 25. Fecal calprotectin  `(ibd-calprotectin)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 88% · Specificity 72%** — 95% CI sens 80%–93%, spec 59%–82%
- Source: An YK, et al. Faecal calprotectin testing for identifying patients with organic gastrointestinal disease: systematic review and meta-analysis. Med J Aust. 2019;211(10):461-467 (18 studies).  [PubMed 31680263](https://pubmed.ncbi.nlm.nih.gov/31680263/) · [doi](https://doi.org/10.5694/mja2.50384)
- Quote: “For distinguishing IBD from functional GIDs (ten studies), sensitivity was 88% (95% CI, 80-93%), specificity 72% (95% CI, 59-82%), and AUC 0.89.”
- Context: Fecal calprotectin (ELISA, cutoff 50-100 µg/g) to separate IBD from functional GI disorders. The same review notes a very high negative predictive value at low prevalence.
- Note: Excellent rule-out at low prevalence (good triage before colonoscopy); modest specificity (raised in many organic conditions). Verify before teaching use.
- [ ] Verified by __________  on __________


## Invasive aspergillosis

### 26. Serum galactomannan (ODI ≥0.5)  `(aspergillosis-gm)`
- **Setting: Inpatient/ICU** [ACUTE]
- **Sensitivity 82% · Specificity 81%** — 95% CI sens 73%–90%, spec 72%–90%
- Source: Leeflang MMG, et al. Galactomannan detection for invasive aspergillosis in immunocompromised patients. Cochrane Database Syst Rev. 2015;(12):CD007394 (54 studies, 5660 patients).  [PubMed 26716951](https://pubmed.ncbi.nlm.nih.gov/26716951/) · [doi](https://doi.org/10.1002/14651858.CD007394.pub2)
- Quote: “When using an optical density index (ODI) of 0.5 as a cut-off value, the sensitivity of the test was 82% (73% to 90%) and the specificity was 81% (72% to 90%).”
- Context: Serum galactomannan ELISA in neutropenic/immunocompromised patients; cutoff ODI 0.5. Higher cutoffs (1.0, 1.5) raise specificity at the cost of sensitivity. Results were heterogeneous.
- Note: Threshold choice trades sensitivity for specificity — a good cutoff-effect teaching example. Verify before teaching use.
- [ ] Verified by __________  on __________


## Type 2 diabetes

### 27. HbA1c ≥ 6.5% (venous)  `(diabetes-hba1c)`
- **Setting: Screening** [non-acute]
- **Sensitivity 50% · Specificity 97.3%** — 95% CI sens 42%–59%, spec 95.3%–98.4%
- Source: Kaur G, et al. Diagnostic accuracy of tests for type 2 diabetes and prediabetes: a systematic review and meta-analysis. PLoS One. 2020;15(11):e0242415 (HbA1c: 17 studies).  [PubMed 33216783](https://pubmed.ncbi.nlm.nih.gov/33216783/) · [doi](https://doi.org/10.1371/journal.pone.0242415)
- Quote: “The pooled sensitivity, specificity, positive (LR+) and negative likelihood ratio (LR-) for diagnosing diabetes with HbA1c (6.5%; venous sample; n = 17 studies) were 50% (95% CI: 42-59%), 97.3% (95% CI: 95.3-98.4), 18.32 (95% CI: 11.06-30.53) and 0.51 (95% CI: 0.43-0.60), respectively.”
- Context: HbA1c at the 6.5% diagnostic threshold vs OGTT in previously undiagnosed community adults. A lower cutoff (~6.0%) raises sensitivity at the cost of specificity.
- Note: Striking teaching case: at 6.5%, HbA1c is highly specific (rules in) but misses ~half of OGTT-defined diabetes — a normal value does NOT exclude it. Verify before teaching use.
- [ ] Verified by __________  on __________


## Acute pancreatitis

### 28. Serum lipase (>3x upper limit of normal)  `(pancreatitis-lipase)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 79% · Specificity 89%** — 95% CI sens 54%–92%, spec 46%–99%
- Source: Rompianesi G, et al. Serum amylase and lipase and urinary trypsinogen and amylase for diagnosis of acute pancreatitis. Cochrane Database Syst Rev. 2017;(4):CD012010 (10 studies).  [PubMed 28431198](https://pubmed.ncbi.nlm.nih.gov/28431198/) · [doi](https://doi.org/10.1002/14651858.CD012010.pub2)
- Quote: “...sensitivities (0.72 (95% CI 0.59 to 0.82); 0.79 (95% CI 0.54 to 0.92); and 0.72 (95% CI 0.56 to 0.84), respectively) and specificities (0.93 (95% CI 0.66 to 0.99); 0.89 (95% CI 0.46 to 0.99); and 0.90 (95% CI 0.85 to 0.93), respectively).”
- Context: Serum lipase at >3x ULN for acute pancreatitis in ED abdominal pain (the middle value of each parenthetical list is lipase). Data were sparse — note the very wide CIs; accuracy declines with time from onset.
- Note: ~1 in 4 cases missed even with lipase >3x ULN; keep a low threshold to treat if symptoms fit. Verify before teaching use.
- [ ] Verified by __________  on __________


## Cirrhosis (chronic hepatitis B)

### 29. Transient elastography (cutoff 11.7 kPa)  `(cirrhosis-te)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 84.6% · Specificity 81.5%**
- Source: Chon YE, et al. Performance of transient elastography for the staging of liver fibrosis in patients with chronic hepatitis B: a meta-analysis. PLoS One. 2012;7(9):e44930 (18 studies, 2772 patients).  [PubMed 23049764](https://pubmed.ncbi.nlm.nih.gov/23049764/) · [doi](https://doi.org/10.1371/journal.pone.0044930)
- Quote: “The cutoff value for F4 was 11.7 (range, 7.3-17.5) kPa, with a sensitivity of 84.6% and specificity of 81.5%.”
- Context: Transient elastography (FibroScan) for cirrhosis (F4) in chronic hepatitis B, cutoff ~11.7 kPa. Optimal cutoffs differ by etiology (hepatitis C, NAFLD).
- Note: Non-invasive alternative to biopsy; cutoff- and etiology-dependent. Verify before teaching use.
- [ ] Verified by __________  on __________


## Cushing syndrome

### 30. Overnight 1-mg dexamethasone suppression test  `(cushing-dst)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 98.6% · Specificity 90.6%** — 95% CI sens 96.9%–99.4%, spec 86.4%–93.6%
- Source: Galm BP, et al. Accuracy of laboratory tests for the diagnosis of Cushing syndrome. J Clin Endocrinol Metab. 2020;105(6):dgaa105 (139 studies, 14,140 participants).  [PubMed 32133504](https://pubmed.ncbi.nlm.nih.gov/32133504/) · [doi](https://doi.org/10.1210/clinem/dgaa105)
- Quote: “DST 98.6% (96.9%-99.4%), 90.6% (86.4%-93.6%), 10.5 (7.2-15.3), and 0.016 (0.007-0.035)”
- Context: Overnight 1-mg dexamethasone suppression test for Cushing syndrome (the values are sensitivity, then specificity, then LR+ and LR-). Late-night salivary cortisol and 24h urinary free cortisol have similar accuracy.
- Note: Very high sensitivity → excellent first-line rule-out; false positives occur (estrogen, CYP3A4 inducers, etc.). Verify before teaching use.
- [ ] Verified by __________  on __________


## Primary aldosteronism

### 31. Aldosterone-to-renin ratio (ARR)  `(aldosteronism-arr)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 89% · Specificity 96%** — 95% CI sens 84%–93%, spec 95%–98%
- Source: Li X, et al. Aldosterone/direct renin concentration ratio as a screening test for primary aldosteronism: a meta-analysis. J Renin Angiotensin Aldosterone Syst. 2016;17(3) (9 studies, 974 patients).  [PubMed 27534428](https://pubmed.ncbi.nlm.nih.gov/27534428/) · [doi](https://doi.org/10.1177/1470320316657450)
- Quote: “The overall sensitivity, specificity, area under the curve, and diagnostic odds ratio of ADRR were 0.89 (95% confidence interval (CI) 0.84-0.93), 0.96 (95% CI 0.95-0.98), 0.985 and 324 respectively, with substantial heterogeneity.”
- Context: Aldosterone/renin ratio screening for primary aldosteronism. CRITICAL: antihypertensive drugs interfere; off-treatment accuracy is higher (sens 0.99, spec 0.98).
- Note: Screening test; confirm positives with dynamic testing. Antihypertensives must be accounted for. Verify before teaching use.
- [ ] Verified by __________  on __________


## Tuberculous pleural effusion

### 32. Pleural fluid adenosine deaminase (ADA)  `(tbpleuritis-ada)`
- **Setting: Inpatient/ICU** [ACUTE]
- **Sensitivity 88% · Specificity 88%** — 95% CI sens 86%–90%, spec 86%–90%
- Source: Palma RM, et al. Diagnostic accuracy of pleural fluid adenosine deaminase for diagnosing tuberculosis. Arch Bronconeumol. 2019;55(1):23-30.  [PubMed 30612601](https://pubmed.ncbi.nlm.nih.gov/30612601/) · [doi](https://doi.org/10.1016/j.arbres.2018.05.007)
- Quote: “In 73 studies from non-Spanish populations a trend toward lower ADA sensitivity (88%, 95% CI:86%-90%) and specificity (88%, 95% CI: 86%-90%) was noted”
- Context: Pleural fluid ADA for tuberculous pleuritis (pooled non-Spanish populations; the Spanish subset was 93%/92%). Most useful where TB prevalence is high; cutoff- and population-dependent.
- Note: Good rule-in for TB pleuritis in endemic settings; lower pre-test probability reduces PPV. Verify before teaching use.
- [ ] Verified by __________  on __________


## Colorectal cancer

### 33. Fecal immunochemical test (FIT)  `(crc-fit)`
- **Setting: Screening** [non-acute]
- **Sensitivity 79% · Specificity 94%** — 95% CI sens 69%–86%, spec 92%–95%
- Source: Lee JK, Liles EG, Bent S, Levin TR, Corley DA. Accuracy of fecal immunochemical tests for colorectal cancer: systematic review and meta-analysis. Ann Intern Med. 2014;160(3):171.  [PubMed 24658694](https://pubmed.ncbi.nlm.nih.gov/24658694/) · [doi](https://doi.org/10.7326/M13-1484)
- Quote: “The pooled sensitivity, specificity, positive likelihood ratio, and negative likelihood ratio of FITs for CRC were 0.79 (95% CI, 0.69 to 0.86), 0.94 (CI, 0.92 to 0.95), 13.10 (CI, 10.49 to 16.35), 0.23 (CI, 0.15 to 0.33), respectively, with an overall diagnostic accuracy of 95% (CI, 93% to 97%).”
- Context: 19 studies; FITs for detecting CRC in asymptomatic average-risk adults; sensitivity improves with lower assay cutoff values.
- Note: Highly specific, moderately sensitive: a positive FIT meaningfully raises CRC probability (rule-in for further workup), but a single negative FIT does not exclude CRC. Performance is cutoff-dependent.
- [ ] Verified by __________  on __________


## Aneurysmal subarachnoid hemorrhage

### 34. Non-contrast cranial CT (modern multidetector, within 6 hours of onset)  `(sah-ncct-6h)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 98.7% · Specificity 99.9%** — 95% CI sens 97.1%–99.4%, spec 99.3%–100%
- Source: Dubosh NM, Bellolio MF, Rabinstein AA, Edlow JA. Sensitivity of Early Brain Computed Tomography to Exclude Aneurysmal Subarachnoid Hemorrhage: A Systematic Review and Meta-Analysis. Stroke. 2016;47(3):750-5.  [PubMed 26797666](https://pubmed.ncbi.nlm.nih.gov/26797666/) · [doi](https://doi.org/10.1161/STROKEAHA.115.011386)
- Quote: “Overall sensitivity of the CT was 0.987 (95% confidence intervals, 0.971-0.994) and specificity was 0.999 (95% confidence intervals, 0.993-1.0).”
- Context: 5 studies, ~8907 patients; modern-generation multidetector CT within 6 hours of symptom onset in neurologically intact patients.
- Note: Time-critical: extremely sensitive (good rule-out) ONLY when performed within 6 hours of headache onset and read by a qualified radiologist. Sensitivity falls substantially (≤90%) beyond 6 hours, where lumbar puncture/CTA is still considered.
- [ ] Verified by __________  on __________


## Coronary artery disease (obstructive, ≥50% stenosis)

### 35. Coronary CT angiography (64-slice, patient-based)  `(cad-ccta-patient)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 99% · Specificity 89%**
- Source: Mowatt G, Cook JA, Hillis GS, Walker S, Fraser C, Jia X, Waugh N. 64-Slice computed tomography angiography in the diagnosis and assessment of coronary artery disease: systematic review and meta-analysis. Heart. 2008;94(11):1386-93.  [PubMed 18669550](https://pubmed.ncbi.nlm.nih.gov/18669550/) · [doi](https://doi.org/10.1136/hrt.2008.145292)
- Quote: “In patient-based detection (n = 1286) 64-slice CT pooled sensitivity was 99% (95% credible interval (CrI) 97% to 99%), specificity 89% (95% CrI 83% to 94%), median positive predictive value (PPV) across studies 93% (range 64-100%) and negative predictive value (NPV) 100% (range 86-100%).”
- Context: 28 studies pooled; ≥50% stenosis defines significant CAD; reference standard invasive coronary angiography. Intervals reported are Bayesian credible intervals (CrI), so CI object omitted.
- Note: Very high sensitivity and NPV: excellent rule-out test for significant CAD in suspected/uncertain chest pain. Lower specificity means positives often need confirmation with invasive angiography.
- [ ] Verified by __________  on __________


## Acute cholecystitis

### 36. Hepatobiliary scintigraphy (cholescintigraphy / HIDA)  `(cholecystitis-hida)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 91% · Specificity 63%** — 95% CI sens 86%–94%, spec 51%–74%
- Source: Childs DD, Lalwani N, Craven T, Arif H, Morgan M, Anderson M, Fulcher A. A meta-analysis of the performance of ultrasound, hepatobiliary scintigraphy, CT and MRI in the diagnosis of acute cholecystitis. Abdom Radiol (NY). 2023;49(2):384-398.  [PubMed 37982832](https://pubmed.ncbi.nlm.nih.gov/37982832/) · [doi](https://doi.org/10.1007/s00261-023-04059-w)
- Quote: “Pooled sensitivity and specificity estimates were 69% (confidence limit [CL] 62-76%) and 79% (CL 71-86%) for US, 91% (CL 86-94%) and 63% (CL 51-74%) for cholescintigraphy, 78% (CL 69-84%) and 81% (CL 71-88%) for CT, and 91% (CL 78-97%) and 93% (CL 70-99%) for MRI.”
- Context: 22 studies (2000-2021); cholescintigraphy (HIDA) values reported; reported confidence limits (CL) are 95% intervals.
- Note: Most sensitive single modality for acute cholecystitis (good rule-out) but specificity is lower than ultrasound. Often reserved for equivocal ultrasound. Less practical (longer, radiotracer-based) than first-line ultrasound.
- [ ] Verified by __________  on __________

### 37. Right-upper-quadrant ultrasound  `(cholecystitis-ruq-us)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 69% · Specificity 79%** — 95% CI sens 62%–76%, spec 71%–86%
- Source: Childs DD, Lalwani N, Craven T, Arif H, Morgan M, Anderson M, Fulcher A. A meta-analysis of the performance of ultrasound, hepatobiliary scintigraphy, CT and MRI in the diagnosis of acute cholecystitis. Abdom Radiol (NY). 2023;49(2):384-398.  [PubMed 37982832](https://pubmed.ncbi.nlm.nih.gov/37982832/) · [doi](https://doi.org/10.1007/s00261-023-04059-w)
- Quote: “Pooled sensitivity and specificity estimates were 69% (confidence limit [CL] 62-76%) and 79% (CL 71-86%) for US, 91% (CL 86-94%) and 63% (CL 51-74%) for cholescintigraphy, 78% (CL 69-84%) and 81% (CL 71-88%) for CT, and 91% (CL 78-97%) and 93% (CL 70-99%) for MRI.”
- Context: 22 studies (2000-2021); ultrasound (US) values reported; reported confidence limits (CL) are 95% intervals.
- Note: First-line imaging for suspected acute cholecystitis (bedside, no radiation), but in this recent pooled analysis sensitivity was only moderate, so a normal ultrasound does not fully exclude cholecystitis when clinical suspicion is high. Note: older meta-analyses reported higher US sensitivity.
- [ ] Verified by __________  on __________


## Pneumococcal pneumonia

### 38. Urinary antigen test (pneumococcal)  `(pneumococcal-uat)`
- **Setting: Inpatient/ICU** [ACUTE]
- **Sensitivity 66% · Specificity 90%** — 95% CI sens 62%–69%, spec 85%–93%
- Source: Yasuo S, Murata M, Nakagawa N, Kawasaki T, Yoshida T, Ando K, Okamori S, Okada Y. Diagnostic accuracy of urinary antigen tests for pneumococcal pneumonia among patients with acute respiratory failure suspected pneumonia: a systematic review and meta-analysis. BMJ Open. 2022;12(8):e057216.  [PubMed 35953247](https://pubmed.ncbi.nlm.nih.gov/35953247/) · [doi](https://doi.org/10.1136/bmjopen-2021-057216)
- Quote: “The calculated pooled sensitivity and specificity were of 0.66 (95% CI 0.62 to 0.69) and 0.90 (95% CI 0.85 to 0.93), respectively.”
- Context: 30 studies, 12,366 patients; pneumococcal urinary antigen test vs culture/smear in patients with acute respiratory failure suspected of pneumonia.
- Note: Specific but only moderately sensitive: a positive result supports pneumococcal etiology (helps target therapy), but a negative test does not rule out pneumococcal pneumonia. Imperfect culture reference standard likely underestimates true specificity.
- [ ] Verified by __________  on __________


## Coronary artery disease (significant, ≥50% stenosis)

### 39. Exercise treadmill ECG (XECG)  `(cad-exercise-ecg)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 67% · Specificity 46%** — 95% CI sens 54%–78%, spec 30%–64%
- Source: Nielsen LH, Ortner N, Nørgaard BL, Achenbach S, Leipsic J, Abdulla J. The diagnostic accuracy and outcomes after coronary computed tomography angiography vs. conventional functional testing in patients with stable angina pectoris: a systematic review and meta-analysis. Eur Heart J Cardiovasc Imaging. 2014;15(9):961-71.  [PubMed 24618659](https://pubmed.ncbi.nlm.nih.gov/24618659/) · [doi](https://doi.org/10.1093/ehjci/jeu027)
- Quote: “The per-patient sensitivity [95% confidence interval (95% CI)] to identify significant CAD was 98% (93-99%) for coronary CTA vs. 67% (54-78%) (P < 0.001) for XECG and 99% (96-100%) vs. 73% (59-83%) (P = 0.001) for SPECT. The specificity (95% CI) of coronary CTA was 82% (63-93%) vs. 46% (30-64%) (P < 0.001) for XECG and 71% (60-80%) vs. 48% (31-64%) (P = 0.14) for SPECT.”
- Context: 11 studies (N=1575); exercise ECG (XECG) per-patient values extracted; reference standard invasive coronary angiography ≥50% obstruction.
- Note: Modest sensitivity and low specificity: exercise ECG alone is a weak rule-in/rule-out test for anatomic CAD, which is why anatomic (CTA) or functional imaging often outperforms it. Best interpreted with pretest probability.
- [ ] Verified by __________  on __________


## Peripheral arterial disease

### 40. Ankle-brachial index (ABI ≤ 0.90)  `(pad-abi)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 75% · Specificity 86%**
- Source: Xu D, Zou L, Xing Y, Hou L, Wei Y, Zhang J, Qiao Y, Hu D, Xu Y, Li J, Ma Y. Diagnostic value of ankle-brachial index in peripheral arterial disease: a meta-analysis. Can J Cardiol. 2012;29(4):492-8.  [PubMed 22926041](https://pubmed.ncbi.nlm.nih.gov/22926041/) · [doi](https://doi.org/10.1016/j.cjca.2012.06.014)
- Quote: “The pooled sensitivity and specificity of ABI ≤ 0.90 for PAD diagnosis were 75% and 86% and the pooled PLR and NLR were 4.18 and 0.29, respectively.”
- Context: 4 studies, 569 patients (922 limbs); ABI ≤ 0.90 threshold vs angiography reference standard. Abstract gives no 95% CI for sensitivity/specificity, so CI object omitted.
- Note: Reasonably specific but only moderately sensitive (a normal ABI does not exclude PAD, especially with medial arterial calcification in diabetes/CKD where ABI may be falsely normal/high). A low ABI is useful to rule in PAD.
- [ ] Verified by __________  on __________


## Breast cancer

### 41. Screening mammography  `(breast-cancer-mammography)`
- **Setting: Screening** [non-acute]
- **Sensitivity 81% · Specificity 96%** — 95% CI sens 77%–84%, spec 94%–96%
- Source: Zhu C, Wang L, Du LB, Li J, Zhang J, Dai M, Shi JF. [The accuracy of mammography screening for breast cancer: a Meta-analysis]. Zhonghua Liu Xing Bing Xue Za Zhi. 2016;37(9):1296-1305.  [PubMed 27655581](https://pubmed.ncbi.nlm.nih.gov/27655581/) · [doi](https://doi.org/10.3760/cma.j.issn.0254-6450.2016.09.022)
- Quote: “It was estimated that the pooled sensitivity and specificity were 0.81 (95: 0.77-0.84) and 0.96 (95: 0.94-0.96), respectively.”
- Context: 48 studies, 8,551,873 individuals; population-based screening mammography. '95:' in the source denotes the 95% CI. Sensitivity is lower in dense breasts (subgroup 0.74).
- Note: High specificity and good sensitivity in average-risk screening, but sensitivity drops in dense breasts. A negative mammogram reduces but does not eliminate the possibility of cancer in symptomatic or high-risk women.
- [ ] Verified by __________  on __________


## Prostate cancer

### 42. Prostate-specific antigen (PSA, cutoff 4 ng/mL)  `(prostate-cancer-psa-4)`
- **Setting: Screening** [non-acute]
- **Sensitivity 92% · Specificity 16%**
- Source: Jin Y, Jung JH, Han WK, Hwang EC, Nho Y, Lee N, Yun JE, Lee KS, Lee SH, Lee H, Yu SY. Diagnostic accuracy of prostate-specific antigen below 4 ng/mL as a cutoff for diagnosing prostate cancer in a hospital setting: A systematic review and meta-analysis. Investig Clin Urol. 2022;63(3):251-261.  [PubMed 35534215](https://pubmed.ncbi.nlm.nih.gov/35534215/) · [doi](https://doi.org/10.4111/icu.20210429)
- Quote: “The meta-analysis showed a sensitivity of 0.92 and a specificity of 0.16 for a PSA cutoff below 4 ng/mL.”
- Context: 11 studies; PSA cutoff of 4 ng/mL in a hospital (not population-screening) setting; biopsy reference standard. Abstract gives no 95% CI for this pooled pair, so CI object omitted.
- Note: Teaching point: at the classic 4 ng/mL cutoff PSA is sensitive but very non-specific in a referred hospital population (many benign causes elevate PSA), so a raised PSA poorly discriminates cancer on its own. PSA is best used with other risk tools, not as a stand-alone rule-in test.
- [ ] Verified by __________  on __________


## Carotid stenosis (≥70%, NASCET)

### 43. Carotid duplex ultrasonography (PSV ≥200 cm/s)  `(carotid-stenosis-duplex)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 90% · Specificity 94%** — 95% CI sens 84%–94%, spec 88%–97%
- Source: Jahromi AS, Cinà CS, Liu Y, Clase CM. Sensitivity and specificity of color duplex ultrasound measurement in the estimation of internal carotid artery stenosis: a systematic review and meta-analysis. J Vasc Surg. 2005;41(6):962-72.  [PubMed 15944595](https://pubmed.ncbi.nlm.nih.gov/15944595/) · [doi](https://doi.org/10.1016/j.jvs.2005.02.044)
- Quote: “For the diagnosis of angiographic stenosis of >/=70%, a peak systolic velocity >/=200 cm/s has a sensitivity of 90% (95% CI, 84% to 94%) and a specificity of 94% (95% CI, 88% to 97%).”
- Context: Color duplex PSV ≥200 cm/s threshold for ≥70% internal carotid stenosis; reference standard catheter angiography (NASCET). Measurement properties vary widely between laboratories.
- Note: Good sensitivity and specificity for high-grade (≥70%) carotid stenosis, supporting duplex as the first-line screen. Inter-laboratory variability is substantial, so confirmatory CTA/MRA is often obtained before surgery.
- [ ] Verified by __________  on __________


## Multiple sclerosis

### 44. CSF oligoclonal bands (OCB)  `(ms-csf-oligoclonal-bands)`
- **Setting: Outpatient** [non-acute]
- **Sensitivity 85% · Specificity 92%**
- Source: Hegen H, Walde J, Berek K, Arrambide G, Gnanapavan S, Kaplan B, Khalil M, Saadeh R, Teunissen C, Tumani H, Villar LM, Willrich MAV, Zetterberg H, Deisenhammer F. Cerebrospinal fluid kappa free light chains for the diagnosis of multiple sclerosis: A systematic review and meta-analysis. Mult Scler. 2022;29(2):169-181.  [PubMed 36453167](https://pubmed.ncbi.nlm.nih.gov/36453167/) · [doi](https://doi.org/10.1177/13524585221134213)
- Quote: “Sensitivity and specificity ranged from 52% to 100% (weighted average: 88%) and 69% to 100% (89%) for κ-FLC index and from 37% to 100% (85%) and 74% to 100% (92%) for OCB.”
- Context: 32 studies; values used are the weighted-average sensitivity (85%) and specificity (92%) for oligoclonal bands (OCB) discriminating CIS/MS from controls. Wide between-study heterogeneity; abstract reports weighted averages, not a single pooled point estimate with CI, so CI object omitted.
- Note: Specific supporting test for MS (helps rule in/demonstrate intrathecal IgG synthesis) with good sensitivity, but neither sensitive nor specific enough to diagnose MS alone; interpreted within the McDonald criteria and clinical/MRI context.
- [ ] Verified by __________  on __________


## Cryptococcal meningitis

### 45. Serum cryptococcal antigen (CrAg)  `(crypto-crag)`
- **Setting: Inpatient/ICU** [ACUTE]
- **Sensitivity 99.7% · Specificity 94.1%** — 95% CI sens 97.4%–100%, spec 88.3%–98.1%
- Source: Temfack E, et al. Cryptococcal antigen in serum and cerebrospinal fluid for detecting cryptococcal meningitis in adults living with HIV: systematic review and meta-analysis. Clin Infect Dis. 2021;72(7):1268-1278 (11 studies, 3600 participants).  [PubMed 32829406](https://pubmed.ncbi.nlm.nih.gov/32829406/) · [doi](https://doi.org/10.1093/cid/ciaa1243)
- Quote: “Summary sensitivity and specificity of serum CrAg were 99.7% (97.4-100) and 94.1% (88.3-98.1), respectively, and summary sensitivity and specificity of CSF CrAg were 98.8% (96.2-99.6) and 99.3% (96.7-99.9), respectively.”
- Context: Serum CrAg (lateral flow / latex agglutination) in HIV-positive adults with suspected CM. CSF CrAg is even more specific (99.3%).
- Note: Near-perfect sensitivity: a negative serum CrAg effectively rules out cryptococcal meningitis. Verify before teaching use.
- [ ] Verified by __________  on __________


## Invasive fungal disease

### 46. Serum (1->3)-beta-D-glucan  `(ifd-bdg)`
- **Setting: Inpatient/ICU** [ACUTE]
- **Sensitivity 76% · Specificity 85%** — 95% CI sens 67%–83%, spec 73%–92%
- Source: Lu Y, et al. Diagnosis of invasive fungal disease using serum (1->3)-beta-D-glucan: a bivariate meta-analysis. Intern Med. 2011;50(22):2783-2791 (15 studies).  [PubMed 22082890](https://pubmed.ncbi.nlm.nih.gov/22082890/) · [doi](https://doi.org/10.2169/internalmedicine.50.6175)
- Quote: “The sensitivity, specificity, PLR and NLR were 0.76 (95% CI, 0.67-0.83), 0.85 (95% CI, 0.73-0.92), 5.05 (95% CI, 2.71-9.43), and 0.28 (95% CI, 0.20-0.39), respectively.”
- Context: Serum beta-D-glucan for invasive fungal disease in at-risk patients; higher specificity in hematology patients and with two consecutive positive samples. Combining with galactomannan raises specificity to ~0.98 for aspergillosis.
- Note: Only moderately sensitive and specific; interpret alongside clinical findings. Verify before teaching use.
- [ ] Verified by __________  on __________


## Falciparum malaria

### 47. Rapid diagnostic test (HRP-2 antigen)  `(malaria-rdt)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 94.8% · Specificity 95.2%** — 95% CI sens 93.1%–96.1%, spec 93.2%–96.7%
- Source: Abba K, et al. Rapid diagnostic tests for diagnosing uncomplicated P. falciparum malaria in endemic countries. Cochrane Database Syst Rev. 2011;(7):CD008122 (74 studies).  [PubMed 21735422](https://pubmed.ncbi.nlm.nih.gov/21735422/) · [doi](https://doi.org/10.1002/14651858.CD008122.pub2)
- Quote: “average sensitivities and specificities (95% CI) were 94.8% (93.1% to 96.1%) and 95.2% (93.2% to 96.7%) for Type 1 tests”
- Context: HRP-2 antigen-based RDTs (Type 1) vs microscopy in symptomatic patients in endemic areas. HRP-2 persists after treatment, so it cannot monitor treatment response.
- Note: Good rule-in and rule-out where malaria is endemic; pLDH-based tests are slightly more specific. Verify before teaching use.
- [ ] Verified by __________  on __________


## Dengue

### 48. Rapid immunochromatographic test (NS1 + IgM/IgG)  `(dengue-rdt)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 90% · Specificity 89%** — 95% CI sens 87%–92%, spec 87%–92%
- Source: Macedo JVL, et al. A systematic review and meta-analysis on the accuracy of rapid immunochromatographic tests for dengue diagnosis. Eur J Clin Microbiol Infect Dis. 2022;41(9):1191-1201 (17 studies).  [PubMed 35988010](https://pubmed.ncbi.nlm.nih.gov/35988010/) · [doi](https://doi.org/10.1007/s10096-022-04485-6)
- Quote: “the association of the three analytes bestows the best result, with a combined sensitivity of 90% (CI 95%: 87-92%) and a pooled specificity of 89% (CI 95%: 87-92%).”
- Context: Combined NS1 antigen + IgM/IgG antibody RDT vs ELISA reference. NS1 alone varies widely with timing (sensitivity range 14.7-100%).
- Note: The combined antigen+antibody test outperforms any single analyte; timing within illness matters. Verify before teaching use.
- [ ] Verified by __________  on __________


## Abdominal aortic aneurysm

### 49. Point-of-care ultrasound  `(aaa-pocus)`
- **Setting: Emergency department** [ACUTE]
- **Sensitivity 97.8% · Specificity 97%**
- Source: Fernando SM, et al. Accuracy of presenting symptoms, physical examination, and imaging for diagnosis of ruptured abdominal aortic aneurysm: systematic review and meta-analysis. Acad Emerg Med. 2022;29(4):486-496 (20 studies).  [PubMed 35220634](https://pubmed.ncbi.nlm.nih.gov/35220634/) · [doi](https://doi.org/10.1111/acem.14475)
- Quote: “PoCUS had a sensitivity of 97.8% and specificity of 97.0% for diagnosing AAA in patients suspected of having rAAA (moderate certainty).”
- Context: Point-of-care ultrasound for the presence of AAA (reference: intraoperative or CTA). PoCUS cannot detect rupture itself; CTA is used for that (sens 91.4%, spec 93.6%).
- Note: Excellent bedside rule-in/rule-out for the aneurysm; a positive scan in an unstable patient prompts urgent vascular transfer. Verify before teaching use.
- [ ] Verified by __________  on __________


## Invasive pulmonary aspergillosis

### 50. BAL fluid galactomannan  `(bal-galactomannan)`
- **Setting: Inpatient/ICU** [ACUTE]
- **Sensitivity 79% · Specificity 92%** — 95% CI sens 72%–84%, spec 88%–94%
- Source: Li C, et al. Diagnostic value of bronchoalveolar lavage fluid galactomannan assay for invasive pulmonary aspergillosis in adults: a meta-analysis. J Clin Pharm Ther. 2022;47(12):1913-1922 (19 studies).  [PubMed 36324286](https://pubmed.ncbi.nlm.nih.gov/36324286/) · [doi](https://doi.org/10.1111/jcpt.13792)
- Quote: “The pooled sensitivity, specificity, positive likelihood ratio (PLR), negative likelihood ratio (NLR), and diagnostic odds ratio (DOR) were 0.79 (95% CI: 0.72-0.84), 0.92 (95% CI: 0.88-0.94)”
- Context: BAL fluid galactomannan for invasive pulmonary aspergillosis; cutoff-dependent (at ODI 0.5: sens 0.89, spec 0.79). More sensitive than serum galactomannan for pulmonary disease.
- Note: Specimen choice matters: BAL GM differs from serum GM (also in this dataset). Verify before teaching use.
- [ ] Verified by __________  on __________

