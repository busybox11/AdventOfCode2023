export {};

const testInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

const input = `11 33 79 170 328 578 967 1621 2872 5498 11130 22891 46343 90829 171308 310792 543505 918895 1506641 2402808 3737314
-4 12 58 149 300 526 842 1263 1804 2480 3306 4297 5468 6834 8410 10211 12252 14548 17114 19965 23116
4 9 26 66 146 290 544 1024 2021 4198 8945 19036 39915 82362 168258 343303 705045 1463670 3070651 6483469 13694943
0 -1 4 30 99 245 525 1038 1973 3753 7431 15644 34662 78403 175746 383088 804886 1625931 3160350 5923858 10737621
21 28 35 42 49 56 63 70 77 84 91 98 105 112 119 126 133 140 147 154 161
22 30 38 46 54 62 70 78 86 94 102 110 118 126 134 142 150 158 166 174 182
23 32 41 50 59 68 77 86 95 104 113 122 131 140 149 158 167 176 185 194 203
17 24 42 85 177 360 712 1386 2687 5210 10068 19245 36115 66174 118038 204766 345573 568004 910646 1426461 2186829
13 21 32 47 68 115 262 694 1798 4335 9803 21207 44641 92458 189568 385972 781800 1577454 3174336 6378503 12816737
11 30 74 153 286 528 1018 2059 4246 8678 17345 33906 65340 125498 242657 475189 943094 1889595 3798425 7612912 15140047
27 46 72 118 215 434 924 1975 4137 8477 17150 34609 69993 141534 284300 563515 1097813 2101901 3970290 7451561 14023129
2 -1 1 17 53 107 171 257 483 1295 3974 11705 31719 79466 186642 416552 893420 1858051 3772775 7517333 14749965
22 44 94 189 349 596 956 1482 2328 3920 7297 14748 30975 65212 135122 274090 545170 1068268 2073636 4006875 7732265
21 47 92 165 274 421 597 777 915 939 746 197 -888 -2735 -5621 -9879 -15903 -24153 -35160 -49531 -67954
16 46 103 194 323 506 799 1339 2398 4450 8251 14932 26105 43982 71507 112501 171820 255526 371071 527494 735631
21 33 45 66 116 230 466 920 1764 3352 6500 13173 28066 62062 139525 313342 695599 1519803 3266545 6915774 14449172
21 41 82 166 322 582 977 1533 2267 3183 4268 5488 6784 8068 9219 10079 10449 10085 8694 5930 1390
15 32 65 131 248 432 704 1122 1858 3342 6504 13183 26880 54285 108538 216211 431869 867304 1747887 3516991 7022508
14 38 71 114 187 343 682 1365 2628 4796 8297 13676 21609 32917 48580 69751 97770 134178 180731 239414 312455
7 9 10 21 70 217 591 1471 3450 7744 16735 34866 70039 135714 253990 460106 809089 1385779 2320288 3812243 6169100
7 16 40 99 234 521 1085 2114 3873 6718 11110 17629 26988 40047 57827 81524 112523 152412 202996 266311 344638
21 44 93 194 398 804 1598 3120 5987 11341 21374 40427 77190 148871 288683 558651 1070601 2019298 3733091 6749144 11922430
12 15 14 7 -6 -23 -40 -51 -48 -21 42 155 334 597 964 1457 2100 2919 3942 5199 6722
9 31 66 121 217 407 805 1631 3280 6437 12303 23097 43194 81597 156980 307347 607507 1199155 2340472 4484921 8402439
14 22 26 26 22 14 2 -14 -34 -58 -86 -118 -154 -194 -238 -286 -338 -394 -454 -518 -586
5 13 26 52 105 213 434 881 1777 3610 7548 16410 36670 82208 180884 385710 793921 1580563 3060030 5802092 10852699
8 7 16 38 76 138 242 421 728 1241 2068 3352 5276 8068 12006 17423 24712 34331 46808 62746 82828
12 20 38 66 104 152 210 278 356 444 542 650 768 896 1034 1182 1340 1508 1686 1874 2072
11 28 56 96 158 290 632 1517 3663 8544 19118 41257 86513 177343 356747 705695 1374143 2635504 4981096 9281682 17059596
5 14 50 138 313 615 1083 1763 2771 4490 8043 16309 36006 81865 184821 407664 873997 1819974 3683540 7253236 13908603
22 52 110 209 362 582 882 1275 1774 2392 3142 4037 5090 6314 7722 9327 11142 13180 15454 17977 20762
22 41 74 129 225 403 747 1437 2868 5888 12235 25293 51368 101893 197507 376218 710574 1344127 2567364 4970517 9739327
14 16 21 26 33 71 225 669 1711 3882 8151 16448 32862 66200 135126 278004 571179 1162423 2331940 4603961 8951410
18 22 38 89 211 462 950 1891 3718 7280 14198 27490 52649 99468 185064 338766 609802 1079042 1876414 3205983 5381031
1 13 37 85 177 350 680 1317 2528 4731 8496 14508 23557 36765 56498 88749 148207 267717 514331 1014563 1991669
16 37 75 140 260 494 948 1795 3311 5972 10736 19796 38393 78822 168725 367451 797225 1701138 3549550 7234285 14423393
13 34 69 139 293 621 1267 2442 4437 7636 12529 19725 29965 44135 63279 88612 121533 163638 216733 282847 364245
15 22 29 36 43 50 57 64 71 78 85 92 99 106 113 120 127 134 141 148 155
12 13 24 72 203 502 1124 2338 4602 8719 16173 29806 55063 102088 188981 346500 624384 1099249 1883630 3135164 5064083
16 22 31 57 136 332 737 1459 2591 4157 6057 8120 10584 15760 32504 86828 245372 665255 1697550 4099589 9468672
18 20 22 35 84 212 485 999 1888 3330 5546 8785 13286 19206 26501 34745 42870 48808 49014 37847 6784
26 40 60 100 185 365 753 1608 3505 7668 16599 35239 73093 148135 294064 573935 1105880 2111392 4004662 7554350 14169005
14 37 79 157 301 568 1066 1991 3687 6748 12192 21750 38328 66717 114645 194286 324364 533015 861597 1369667 2141375
26 46 80 139 236 397 692 1291 2558 5207 10554 20905 40120 74386 133218 230687 386850 629332 994988 1531559 2299236
1 8 26 59 113 196 318 491 729 1048 1466 2003 2681 3524 4558 5811 7313 9096 11194 13643 16481
0 4 29 86 181 316 500 777 1289 2426 5187 12003 28474 66768 151844 332218 697718 1407600 2733553 5123540 9294139
12 7 4 11 50 181 537 1383 3231 7080 14929 30865 63312 129553 264648 538893 1092110 2201596 4417932 8837368 17646010
15 19 30 60 135 306 678 1466 3095 6390 12973 26143 52850 108034 223821 468228 981780 2047002 4217481 8554651 17060138
4 23 62 145 315 646 1261 2365 4324 7855 14438 27119 51943 100338 192865 364855 674572 1214671 2127862 3627845 6026747
0 -2 1 17 70 225 639 1664 4038 9205 19811 40451 78840 147845 269432 482915 862636 1555638 2860301 5386215 10370274
9 16 36 81 178 382 793 1573 2968 5363 9450 16694 30481 58719 119464 252853 546219 1186490 2567764 5506931 11663356
8 12 29 70 149 283 492 799 1230 1814 2583 3572 4819 6365 8254 10533 13252 16464 20225 24594 29633
2 0 4 23 66 142 260 429 658 956 1332 1795 2354 3018 3796 4697 5730 6904 8228 9711 11362
13 32 57 90 148 285 627 1420 3091 6322 12137 22002 37938 62647 99651 153444 229657 335236 478633 670010 921456
21 32 44 61 106 241 607 1495 3457 7463 15099 28772 51831 88420 142742 217210 308613 400694 449818 356347 -94816
6 4 -2 -7 0 48 214 692 1942 4996 12059 27638 60570 127510 258691 507089 962526 1772732 3173972 5534535 9415188
20 38 72 131 224 360 548 797 1116 1514 2000 2583 3272 4076 5004 6065 7268 8622 10136 11819 13680
14 23 32 41 50 59 68 77 86 95 104 113 122 131 140 149 158 167 176 185 194
13 28 43 58 73 88 103 118 133 148 163 178 193 208 223 238 253 268 283 298 313
20 32 54 85 126 194 353 775 1844 4325 9661 20564 42270 85202 170484 341139 684723 1379417 2788967 5659626 11527921
12 42 94 190 372 707 1290 2244 3715 5862 8851 12896 18508 27457 45805 92242 218753 557969 1425339 3529889 8394603
1 16 52 121 245 478 939 1856 3627 6908 12736 22683 39011 64754 103587 159250 234173 326792 426852 507757 514745
9 23 49 92 169 312 569 1010 1759 3101 5767 11605 25054 56263 127560 286684 633455 1372598 2916433 6081111 12456613
8 8 4 -4 -16 -32 -52 -76 -104 -136 -172 -212 -256 -304 -356 -412 -472 -536 -604 -676 -752
26 50 92 159 258 396 580 817 1114 1478 1916 2435 3042 3744 4548 5461 6490 7642 8924 10343 11906
7 6 17 60 181 465 1050 2151 4118 7575 13716 24876 45577 84429 157644 295650 555589 1044640 1962503 3676488 6850057
10 22 50 115 247 480 857 1461 2494 4432 8290 16037 31207 59758 111237 200315 348762 587938 961882 1531087 2377055
22 44 88 166 295 510 888 1586 2898 5337 9747 17448 30422 51580 85246 138213 222154 358926 591542 1005502 1768013
6 14 41 90 173 328 648 1335 2797 5811 11780 23117 43794 80099 141649 242712 403896 654268 1033971 1597412 2417099
11 22 32 41 58 123 337 898 2137 4539 8720 15312 24684 36398 48265 54827 45047 -1060 -117176 -357189 -803906
4 14 40 86 151 234 349 562 1075 2413 5840 14278 34296 80279 182833 405042 872646 1827912 3722368 7371206 14202685
15 31 63 134 282 578 1161 2296 4461 8469 15631 27966 48464 81408 132761 210624 325771 492267 728175 1056358 1505382
10 16 17 21 46 120 281 577 1066 1816 2905 4421 6462 9136 12561 16865 22186 28672 36481 45781 56750
3 3 4 24 106 323 775 1573 2804 4484 6546 8990 12455 19672 38535 87897 207673 475425 1032328 2122284 4148976
18 23 20 2 -27 -33 73 468 1460 3543 7466 14318 25631 43503 70743 111040 169158 251159 364656 519098 726089
-6 4 34 91 180 308 508 892 1734 3580 7384 14674 27752 49914 85622 140447 220402 329964 467606 616981 730972
7 10 12 9 -4 -31 -65 -51 207 1234 4216 11535 27576 59885 120767 229423 414735 718818 1201468 1945645 3064140
19 25 32 40 49 59 70 82 95 109 124 140 157 175 194 214 235 257 280 304 329
5 7 27 90 242 556 1145 2198 4062 7416 13636 25544 48873 94970 185545 360820 693659 1315057 2462389 4573894 8475508
17 30 60 126 262 519 965 1696 2892 4985 9054 17635 36258 76249 159748 328622 660175 1294516 2481452 4659216 8583698
10 25 69 169 366 716 1304 2281 3933 6796 11854 20926 37510 68672 129125 249524 492296 980111 1944451 3804703 7291826
9 28 54 82 114 173 320 681 1502 3269 6974 14709 30979 65516 139058 294709 619447 1283730 2613166 5217048 10218000
9 23 51 111 234 465 864 1517 2574 4343 7497 13505 25482 49760 98589 194440 376331 708331 1289779 2265607 3833254
2 1 2 9 26 57 106 177 274 401 562 761 1002 1289 1626 2017 2466 2977 3554 4201 4922
6 10 14 15 20 71 275 848 2196 5070 10846 21995 42822 80567 146975 260456 448970 753786 1234278 1973935 3087776
3 13 30 54 85 123 168 220 279 345 418 498 585 679 780 888 1003 1125 1254 1390 1533
8 8 14 28 56 116 247 516 1032 2012 4014 8574 19687 46897 111270 256338 567509 1206143 2470123 4904763 9513099
1 0 -2 -8 -11 25 191 680 1894 4693 10930 24493 53162 111684 226585 443458 838118 1535101 2743069 4832537 8518726
6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60 63 66
12 19 33 54 82 117 159 208 264 327 397 474 558 649 747 852 964 1083 1209 1342 1482
12 15 20 35 69 134 255 497 1035 2331 5557 13539 32728 77088 175449 385066 816382 1678303 3361374 6590903 12707671
12 38 77 141 271 567 1233 2637 5386 10416 19097 33353 55797 89881 140061 211977 312648 450682 636501 882581 1203707
2 -2 5 33 103 269 656 1523 3360 7028 13951 26369 47661 82747 138578 224723 354062 543594 815369 1197553 1725635
6 19 34 61 126 273 566 1091 1958 3303 5290 8113 11998 17205 24030 32807 43910 57755 74802 95557 120574
13 28 52 98 190 356 631 1090 1943 3739 7746 16604 35393 73320 146304 280813 519357 928026 1606324 2699210 4410612
11 25 41 60 83 111 145 186 235 293 361 440 531 635 753 886 1035 1201 1385 1588 1811
-1 9 37 101 235 490 935 1658 2767 4391 6681 9811 13979 19408 26347 35072 45887 59125 75149 94353 117163
13 23 33 43 53 63 73 83 93 103 113 123 133 143 153 163 173 183 193 203 213
3 18 48 113 249 507 943 1597 2475 3572 5003 7342 12318 24135 52013 115394 255183 558334 1210486 2604295 5552483
-3 -11 -12 2 39 107 212 354 521 681 772 690 275 -705 -2572 -5758 -10827 -18499 -29676 -45470 -67233
5 2 2 15 59 159 340 624 1055 1805 3471 7786 19205 48346 119383 285791 663345 1497620 3297968 7094833 14917719
7 13 31 67 134 273 596 1373 3200 7319 16241 34988 73571 151821 308464 617466 1216269 2352705 4460235 8274849 15011628
18 30 42 54 66 78 90 102 114 126 138 150 162 174 186 198 210 222 234 246 258
5 12 22 39 72 145 333 835 2093 4964 10950 22489 43308 78837 136681 227145 363805 564116 850046 1248723 1793080
18 30 42 54 66 78 90 102 114 126 138 150 162 174 186 198 210 222 234 246 258
23 31 34 42 74 151 297 564 1100 2289 5028 11295 25347 56244 123056 265289 563085 1175063 2406874 4831400 9492944
24 34 44 70 151 373 907 2068 4414 8929 17391 33143 62698 118976 227618 439040 851304 1653716 3210518 6221840 12031157
5 5 6 9 25 93 298 784 1757 3473 6206 10191 15537 22105 29346 36094 40309 38765 26678 -2731 -58743
8 30 65 113 181 304 577 1206 2612 5663 12165 25814 53897 110131 219145 423241 792216 1437188 2529545 4326327 7203557
3 -3 2 45 172 456 1007 1994 3698 6624 11709 20672 36561 64561 113136 195587 332117 552503 899484 1432983 2235290
16 28 42 55 65 82 154 417 1176 3020 6973 14694 28780 53330 95148 166377 290076 511444 919320 1685677 3135807
18 42 77 132 229 414 786 1567 3248 6857 14418 29731 59741 117031 224435 423500 789622 1458244 2668651 4834758 8656005
22 33 53 94 170 308 580 1163 2439 5174 10885 22642 46793 96506 198710 407198 826684 1656043 3264645 6324818 12037692
9 2 -5 4 60 221 589 1330 2700 5103 9257 16631 30457 57846 113895 229237 463363 927376 1821807 3497966 6555306
20 29 43 70 124 227 415 751 1362 2544 5016 10456 22541 48887 104627 219002 447452 893523 1747765 3355078 6328150
10 30 76 166 319 551 871 1277 1752 2260 2742 3112 3253 3013 2201 583 -2122 -6246 -12176 -20358 -31301
-1 -4 -12 -25 -43 -66 -94 -127 -165 -208 -256 -309 -367 -430 -498 -571 -649 -732 -820 -913 -1011
21 42 78 141 255 462 838 1529 2822 5276 9951 18788 35210 65034 117809 208728 361307 611086 1010692 1636719 2599033
17 22 32 65 156 375 869 1946 4237 9006 18747 38346 77349 154341 305211 598293 1161213 2226966 4210582 7833071 14316598
23 35 56 97 184 372 770 1588 3227 6448 12676 24520 46620 86967 158882 283885 495735 845977 1411392 2303811 3682824
12 22 50 102 193 369 738 1519 3123 6285 12283 23336 43417 80027 148066 277964 531906 1034564 2028564 3970366 7689797
9 24 56 105 167 230 283 360 645 1665 4596 11702 26919 56585 110303 201907 350481 581358 927000 1427631 2131463
14 41 82 137 206 289 386 497 622 761 914 1081 1262 1457 1666 1889 2126 2377 2642 2921 3214
15 15 25 55 122 265 572 1228 2593 5319 10515 19969 36436 64001 108526 178190 284131 441199 668829 992043 1442590
6 12 33 73 141 260 476 867 1552 2700 4539 7365 11551 17556 25934 37343 52554 72460 98085 130593 171297
1 1 11 56 170 393 762 1305 2075 3308 5874 12352 29361 72304 174536 404269 894401 1893019 3845673 7524704 14225928
16 34 67 130 253 498 998 2037 4211 8749 18154 37491 76971 157065 318416 640655 1277578 2522408 4928725 9534976 18281777
-4 7 28 69 151 314 645 1333 2768 5722 11693 23596 47228 94470 190320 388188 802635 1678168 3530805 7432530 15567904
18 36 71 135 251 451 770 1238 1875 2697 3744 5144 7230 10730 17053 28697 49808 86922 149925 253269 417485
17 27 39 53 69 87 107 129 153 179 207 237 269 303 339 377 417 459 503 549 597
12 30 62 105 166 290 607 1404 3228 7032 14409 28053 52790 97915 182299 345074 667188 1313670 2614596 5216937 10363390
-3 3 14 34 79 179 385 791 1581 3111 6036 11492 21343 38503 67343 114193 187949 300795 469050 714150 1063775
20 27 34 42 57 94 185 406 955 2332 5700 13574 31162 69089 149059 315518 658934 1360377 2773254 5567058 10970703
12 31 66 136 277 553 1084 2099 4022 7604 14135 25826 46566 83450 149722 269974 488312 879201 1557928 2681748 4422091
-6 -12 -15 -10 7 50 176 548 1548 3988 9514 21369 45783 94400 188345 364791 687222 1261020 2256551 3942608 6733911
9 11 24 56 115 209 346 534 781 1095 1484 1956 2519 3181 3950 4834 5841 6979 8256 9680 11259
19 28 47 85 150 249 393 608 953 1545 2589 4408 7464 12356 19775 30389 44623 62290 82019 100415 110874
-7 -3 23 96 256 573 1173 2275 4239 7625 13263 22334 36462 57817 89229 134313 197605 284709 402455 559068 764348
5 17 36 77 173 376 752 1366 2253 3371 4532 5307 4901 1994 -5456 -20452 -47243 -91659 -161500 -266983 -421251
-10 -1 35 108 224 390 635 1065 1983 4134 9187 20644 45469 96853 198665 392271 746516 1371737 2438683 4203132 7036782
25 38 65 120 217 370 593 900 1305 1822 2465 3248 4185 5290 6577 8060 9753 11670 13825 16232 18905
-9 0 31 93 201 391 757 1533 3259 7106 15519 33524 71431 150402 313665 648355 1326471 2678800 5323567 10382883 19835829
26 43 77 141 253 444 771 1351 2445 4634 9142 18374 36750 71929 136530 250470 444052 761949 1268243 2052691 3238403
3 23 56 102 159 224 304 453 872 2156 5868 15800 40606 99088 230553 514885 1111321 2333185 4790980 9662890 19196825
5 7 11 11 11 41 177 569 1488 3426 7340 15251 31643 66547 142001 305012 652619 1378773 2859373 5802111 11503367
22 36 51 78 145 311 707 1627 3695 8141 17236 34977 68211 128605 236311 426997 765336 1370358 2461653 4440740 8029569
6 11 26 57 119 258 583 1305 2775 5516 10276 18226 31642 55815 103621 205270 427380 907857 1916302 3954039 7913625
15 31 62 110 187 328 607 1156 2187 4017 7096 12038 19655 30994 47377 70444 102199 145059 201906 276142 371747
0 3 16 55 149 340 683 1246 2110 3369 5130 7513 10651 14690 19789 26120 33868 43231 54420 67659 83185
-1 -7 -20 -48 -97 -155 -157 87 1031 3644 9836 23143 49779 100190 191275 349472 614943 1047131 1732004 2791346 4394503
2 1 11 55 171 420 898 1747 3154 5329 8473 12793 18703 27498 43092 76090 152970 336313 768231 1760599 3975675
17 23 30 37 38 32 58 269 1059 3257 8402 19113 39568 76106 137966 238177 394613 631227 979478 1479965 2184282
-2 -5 -6 10 70 213 500 1061 2230 4863 11016 25301 57457 126982 271071 557577 1105218 2113727 3906986 6992264 12138316
15 31 72 145 263 460 824 1562 3120 6398 13135 26613 52974 103703 200257 382480 723413 1354473 2506834 4577305 8230185
19 44 99 206 404 767 1426 2586 4530 7614 12296 19331 30440 50097 89734 176986 375280 824379 1822508 3988499 8572027
17 21 33 79 200 453 925 1781 3379 6502 12778 25380 50112 96984 182346 331572 582141 986731 1615599 2557037 3914040
17 17 25 61 159 381 834 1684 3174 5694 10033 18079 34436 69710 146592 310348 645927 1304631 2544169 4786953 8702701
0 -5 -16 -27 -22 19 120 326 748 1647 3568 7535 15318 29783 55336 98472 168440 278035 444528 690745 1046306
-5 0 21 67 147 270 445 681 987 1372 1845 2415 3091 3882 4797 5845 7035 8376 9877 11547 13395
6 12 28 65 133 250 460 861 1655 3260 6582 13659 29103 63147 137747 298222 634504 1318424 2666836 5245089 10031765
6 18 41 81 140 211 283 381 694 1883 5722 16328 42405 101185 225113 472799 946338 1817748 3367939 6042215 10526702
20 37 65 118 226 454 941 1966 4057 8184 16121 31129 59206 111276 206873 380241 690732 1242056 2221884 3989792 7277474
9 19 50 117 246 497 1001 2011 3967 7575 13900 24473 41412 67557 106619 163343 243685 355003 506262 708253 973826
2 4 2 0 21 119 402 1079 2547 5554 11537 23379 47108 95539 195615 402326 823680 1663384 3290796 6351474 11936431
7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47
9 2 1 28 118 328 760 1600 3179 6074 11287 20568 36984 65880 116430 204036 353901 606178 1023181 1699236 2773850
23 30 32 29 21 8 -10 -33 -61 -94 -132 -175 -223 -276 -334 -397 -465 -538 -616 -699 -787
7 18 34 64 130 265 512 930 1611 2712 4509 7487 12495 21028 35768 61654 108003 192634 349640 643518 1193940
25 41 63 97 150 223 302 347 276 -60 -896 -2467 -4479 -4246 8519 64329 241515 721811 1894997 4544673 10161184
4 15 39 94 222 501 1072 2196 4356 8419 15873 29154 52078 90393 152466 250120 399636 622935 948955 1415238 2069742
23 37 51 66 79 81 57 -11 -127 -225 -24 1310 5911 18795 51062 126073 290811 635857 1329097 2670530 5178487
6 6 13 40 103 217 395 652 1010 1507 2246 3601 6868 15981 41506 109097 276067 661833 1501004 3232495 6646054
-5 -10 -3 41 171 485 1169 2548 5143 9732 17438 29930 49949 82618 138512 240597 439619 847736 1710719 3559493 7520095
20 45 85 142 224 354 580 995 1791 3392 6744 13910 29276 62012 131130 275921 577546 1203739 2501051 5183334 10710516
7 2 -8 -8 30 147 402 898 1853 3748 7598 15426 31110 62005 122301 240325 474579 948318 1921648 3936104 8093318
4 16 42 89 180 376 809 1728 3571 7103 13720 26137 49890 96451 189423 376603 753528 1510350 3027408 6073069 12213482
16 39 81 168 346 699 1394 2771 5514 10971 21737 42674 82616 157095 292526 532405 946204 1641791 2782361 4609036 7470478
0 8 24 66 178 456 1093 2460 5256 10786 21465 41707 79473 149013 275959 507333 931952 1722236 3218006 6088132 11628236
13 32 63 120 220 378 598 858 1098 1239 1289 1635 3690 11180 32545 85226 203063 448694 933791 1851278 3525444
21 36 68 130 243 444 794 1386 2353 3876 6192 9602 14479 21276 30534 42890 59085 79972 106524 139842 181163
7 7 16 42 102 243 575 1314 2830 5692 10709 19002 32234 53313 88239 150435 270173 514121 1024546 2095878 4320626
4 20 45 88 171 329 615 1129 2109 4150 8654 18660 40258 84855 172634 337629 634930 1150632 2015251 3421448 5647029
15 33 53 88 175 390 873 1877 3862 7661 14752 27691 50842 91789 164433 296086 543337 1025693 1992739 3950666 7888377
21 41 85 175 345 637 1092 1743 2624 3816 5558 8458 13846 24318 44527 82284 150039 266819 460707 771953 1256815
-5 -4 -1 4 11 20 31 44 59 76 95 116 139 164 191 220 251 284 319 356 395
7 20 45 91 166 275 418 588 769 934 1043 1041 856 397 -448 -1814 -3861 -6776 -10775 -16105 -23046
16 29 53 90 144 217 312 463 835 1973 5324 14213 35544 82670 180222 372347 736982 1410761 2632275 4816136 8677196
15 36 81 165 317 603 1168 2310 4617 9241 18462 36823 73327 145569 287449 563757 1098426 2130571 4127378 8012790 15629588
13 16 36 94 229 505 1026 1979 3736 7055 13432 25685 48934 92364 172697 321490 600845 1137023 2190924 4302259 8577205
15 33 62 100 137 145 70 -153 -527 -813 -180 3392 14047 39431 92632 194815 378699 693037 1208274 2023572 3275405
9 17 26 43 87 194 424 880 1758 3457 6794 13396 26384 51528 99142 187109 345583 624113 1102178 1904417 3222189
15 28 60 127 254 494 975 1984 4105 8449 17045 33490 63970 118770 214450 377138 648203 1095478 1837082 3092037 5284118
10 22 46 91 176 339 651 1243 2358 4441 8278 15190 27280 47720 81051 133452 212914 329232 493702 718381 1014736
6 15 24 33 42 51 60 69 78 87 96 105 114 123 132 141 150 159 168 177 186
-6 -11 -16 -21 -26 -31 -36 -41 -46 -51 -56 -61 -66 -71 -76 -81 -86 -91 -96 -101 -106
7 24 56 112 206 361 614 1035 1799 3399 7184 16588 39739 94671 219193 488711 1047141 2158900 4294817 8274127 15504252
7 28 60 109 202 412 903 2013 4400 9280 18800 36656 69277 128420 237158 443522 850421 1678603 3394366 6960828 14320024
15 27 40 54 69 85 102 120 139 159 180 202 225 249 274 300 327 355 384 414 445
14 24 40 73 153 333 702 1425 2852 5779 12001 25373 53704 111983 227731 449783 862713 1610849 2939409 5268068 9329214
10 7 4 1 -2 -5 -8 -11 -14 -17 -20 -23 -26 -29 -32 -35 -38 -41 -44 -47 -50`;

// Handle negative values

const lines = input
  .split("\n")
  .map((line) => line.split(" ").map((nb) => parseInt(nb)));

let sum = 0;

// Will be recursive
function processSequence(seq: number[]) {
  const diffSeq: number[] = seq.reduce((out, value, i) => {
    if (i !== 0) {
      out.push(value - seq[i - 1]);
    }

    return out;
  }, []);

  const firstNb = seq[0];
  return (
    firstNb - (diffSeq.find((nb) => nb !== 0) ? processSequence(diffSeq) : 0)
  );
}

for (const line of lines) {
  sum += processSequence(line);
}

console.log(sum);
