var allCars= [
    
    { cartype: 'اوبل' , carModel : 'اوميغا' },              { cartype: 'بي ام دبليو BMW' , carModel : '316' },          
    { cartype: 'اوبل' , carModel : 'انسيجينيا' },             { cartype: 'بي ام دبليو BMW' , carModel : '318' },  
    { cartype: 'اوبل' , carModel : 'استرا' },               { cartype: 'بي ام دبليو BMW' , carModel : '320' },
    { cartype: 'اوبل' , carModel : 'اسكونا' },              { cartype: 'بي ام دبليو BMW' , carModel : '325' },
    { cartype: 'اوبل' , carModel : 'ريكورد' },              { cartype: 'بي ام دبليو BMW' , carModel : '435' },
    { cartype: 'اوبل' , carModel : 'زافيرا' },              { cartype: 'بي ام دبليو BMW' , carModel : '520' },
    { cartype: 'اوبل' , carModel : 'فيكترا' },              { cartype: 'بي ام دبليو BMW' , carModel : '523' },         
    { cartype: 'اوبل' , carModel : 'كاديت' },              { cartype: 'بي ام دبليو BMW' , carModel : '525' },         
    { cartype: 'اوبل' , carModel : 'كورسا' },              { cartype: 'بي ام دبليو BMW' , carModel : '528' }, 
                                                        { cartype: 'بي ام دبليو BMW' , carModel : '530' },
    { cartype: 'اودي' , carModel : 'SLine' },            { cartype: 'بي ام دبليو BMW' , carModel : '530' },   
    { cartype: 'اودي' , carModel : '80' },               { cartype: 'بي ام دبليو BMW' , carModel : '730' },   
    { cartype: 'اودي' , carModel : 'A3' },              { cartype: 'بي ام دبليو BMW' , carModel : '740' },
    { cartype: 'اودي' , carModel : 'A4' },              { cartype: 'بي ام دبليو BMW' , carModel : 'E60' },
    { cartype: 'اودي' , carModel : 'A6' },              { cartype: 'بي ام دبليو BMW' , carModel : 'i 116' },
    { cartype: 'اودي' , carModel : 'A80' },             { cartype: 'بي ام دبليو BMW' , carModel : 'i 120' },    
    { cartype: 'اودي' , carModel : 'Q3' },              { cartype: 'بي ام دبليو BMW' , carModel : 'M3' },    
    { cartype: 'اودي' , carModel : 'Q5' },              { cartype: 'بي ام دبليو BMW' , carModel : 'M4' },
    { cartype: 'اودي' , carModel : 'Q7' },              { cartype: 'بي ام دبليو BMW' , carModel : 'X5' },
    { cartype: 'اودي' , carModel : 'كوبيه TT' },          { cartype: 'بي ام دبليو BMW' , carModel : 'X6' },  
                                                       { cartype: 'بي ام دبليو BMW' , carModel : 'X7' }, 
    { cartype: 'ايسوزو' , carModel : '3900' },          { cartype: 'بي ام دبليو BMW' , carModel : 'ميني كوبر' },
    { cartype: 'ايسوزو' , carModel : 'تروبر' },
    { cartype: 'ايسوزو' , carModel : 'ديماكس' },
    
    { cartype: 'بيجو' , carModel : '104' },             { cartype: 'تويوتا' , carModel : 'FT-68' },
    { cartype: 'بيجو' , carModel : '106' },             { cartype: 'تويوتا' , carModel : 'أفالون' },
    { cartype: 'بيجو' , carModel : '107' },             { cartype: 'تويوتا' , carModel : 'افانزا' },
    { cartype: 'بيجو' , carModel : '204' },             { cartype: 'تويوتا' , carModel : 'افينسيس' },
    { cartype: 'بيجو' , carModel : '205' },             { cartype: 'تويوتا' , carModel : 'اورايون' },
    { cartype: 'بيجو' , carModel : '206' },             { cartype: 'تويوتا' , carModel : 'باريس' },   
    { cartype: 'بيجو' , carModel : '206+' },            { cartype: 'تويوتا' , carModel : 'برادو' },        
    { cartype: 'بيجو' , carModel : '207' },             { cartype: 'تويوتا' , carModel : 'برافيا' },
    { cartype: 'بيجو' , carModel : '208' },             { cartype: 'تويوتا' , carModel : 'بريوس' },
    { cartype: 'بيجو' , carModel : '3008' },            { cartype: 'تويوتا' , carModel : 'تيندرا' },    
    { cartype: 'بيجو' , carModel : '301' },             { cartype: 'تويوتا' , carModel : 'راف' },
    { cartype: 'بيجو' , carModel : '305' },             { cartype: 'تويوتا' , carModel : 'زيلاس' },
    { cartype: 'بيجو' , carModel : '306' },             { cartype: 'تويوتا' , carModel : 'سيكويا' },
    { cartype: 'بيجو' , carModel : '307' },             { cartype: 'تويوتا' , carModel : 'فورتشينر' },
    { cartype: 'بيجو' , carModel : '308' },             { cartype: 'تويوتا' , carModel : 'كامري' },
    { cartype: 'بيجو' , carModel : '309' },             { cartype: 'تويوتا' , carModel : 'كورولا' },
    { cartype: 'بيجو' , carModel : '405' },             { cartype: 'تويوتا' , carModel : 'لاند كروزر' },
    { cartype: 'بيجو' , carModel : '406' },             { cartype: 'تويوتا' , carModel : 'هيلاكس' },
    { cartype: 'بيجو' , carModel : '407' },
    { cartype: 'بيجو' , carModel : '5008' },
    { cartype: 'بيجو' , carModel : '504' },             { cartype: 'جي ام سي' , carModel : 'سفانا' },
    { cartype: 'بيجو' , carModel : '505' },
    { cartype: 'بيجو' , carModel : '605' },             { cartype: 'جيب Jeep' , carModel : 'Sofa' },
    { cartype: 'بيجو' , carModel : '607' },             { cartype: 'جيب Jeep' , carModel : 'Wrangler' },
    { cartype: 'بيجو' , carModel : 'بارتنر' },             { cartype: 'جيب Jeep' , carModel : 'شيروكي' },
    
    
    { cartype: 'داتشيا' , carModel : 'ستيب واي' },          { cartype: 'دايو' , carModel : 'رايسر' },
    { cartype: 'داتشيا' , carModel : 'لودجي' },             { cartype: 'دايو' , carModel : 'سبيرو' },
                                                        { cartype: 'دايو' , carModel : 'سوبر رايسر' },
    { cartype: 'داف' , carModel : '45' },               { cartype: 'دايو' , carModel : 'كوراندو' },
    { cartype: 'داف' , carModel : '55' },               { cartype: 'دايو' , carModel : 'لانوس' },
    { cartype: 'داف' , carModel : 'CF75' },             { cartype: 'دايو' , carModel : 'ليجانزا' },       
    { cartype: 'داف' , carModel : 'CF85' },             { cartype: 'دايو' , carModel : 'ماتيز' },
                                                        { cartype: 'دايو' , carModel : 'نوبيرا' },
     { cartype: 'ديهاتسو' , carModel : 'تريوس' },
    { cartype: 'ديهاتسو' , carModel : 'سيريون' },           { cartype: 'ستروين' , carModel : 'C4' },
    { cartype: 'ديهاتسو' , carModel : 'ماتيرا' },            { cartype: 'ستروين' , carModel : 'C-ELysee' }, 
                                                       { cartype: 'ستروين' , carModel : 'DS3' },
     { cartype: 'روفر' , carModel : '200' },            { cartype: 'ستروين' , carModel : 'بيرلينجو' },
     { cartype: 'روفر' , carModel : 's400' },           { cartype: 'ستروين' , carModel : 'بيكاسو C3' },
                                                       { cartype: 'ستروين' , carModel : 'بيكاسو C4' }, 
    { cartype: 'رينو' , carModel : 'R5' },               { cartype: 'ستروين' , carModel : 'كسارا' },   
    { cartype: 'رينو' , carModel : 'R9' },
    { cartype: 'رينو' , carModel : 'اكسبرس' },              { cartype: 'سكودا' , carModel : 'citigo' },
    { cartype: 'رينو' , carModel : 'توينجو' },              { cartype: 'سكودا' , carModel : 'اوكتافيا' },
    { cartype: 'رينو' , carModel : 'سينيك' },               { cartype: 'سكودا' , carModel : 'بارمن' },
    { cartype: 'رينو' , carModel : 'فلوانس' },              { cartype: 'سكودا' , carModel : 'رابيد' },
    { cartype: 'رينو' , carModel : 'كانجو' },               { cartype: 'سكودا' , carModel : 'رومستر' },
    { cartype: 'رينو' , carModel : 'كليو' },                { cartype: 'سكودا' , carModel : 'سوبيرب' },
    { cartype: 'رينو' , carModel : 'لاجونا' },                { cartype: 'سكودا' , carModel : 'فابيا' },
    { cartype: 'رينو' , carModel : 'ميغان' },               { cartype: 'سكودا' , carModel : 'فيوريت' },    
                                                        { cartype: 'سكودا' , carModel : 'فيليسيا' },
    { cartype: 'سانغ يونغ' , carModel : 'اكتيون' },            { cartype: 'سكودا' , carModel : 'كسارا' },
    { cartype: 'سانغ يونغ' , carModel : 'ركستون' },           { cartype: 'سكودا' , carModel : 'يتي' },  
    { cartype: 'سانغ يونغ' , carModel : 'كيرون' },
    { cartype: 'سانغ يونغ' , carModel : 'موسو' },
    
    { cartype: 'سوبارو' , carModel : 'B4' },                { cartype: 'فولكسفاجن' , carModel : 'CC' },
    { cartype: 'سوبارو' , carModel : 'امبريزا' },               { cartype: 'فولكسفاجن' , carModel : 'Golf Plus' },
    { cartype: 'سوبارو' , carModel : 'عريض' },              { cartype: 'فولكسفاجن' , carModel : 'GTI' },
    { cartype: 'سوبارو' , carModel : 'فوريستر' },               { cartype: 'فولكسفاجن' , carModel : 'LT' },
    { cartype: 'سوبارو' , carModel : 'ليجاسي' },                { cartype: 'فولكسفاجن' , carModel : 'باسات' },
    { cartype: 'سوبارو' , carModel : 'نملة' },                  { cartype: 'فولكسفاجن' , carModel : 'بورا' },
                                                            { cartype: 'فولكسفاجن' , carModel : 'بولو' },
                                                            { cartype: 'فولكسفاجن' , carModel : 'بيتل' },
    { cartype: 'سوزوكي' , carModel : 'SX4' },               { cartype: 'فولكسفاجن' , carModel : 'ترانسبورتر' },
    { cartype: 'سوزوكي' , carModel : 'رينو' },                  { cartype: 'فولكسفاجن' , carModel : 'تورات' },
    { cartype: 'سوزوكي' , carModel : 'ساموراي' },               { cartype: 'فولكسفاجن' , carModel : 'تيجوان' },
    { cartype: 'سوزوكي' , carModel : 'سويفت' },                 { cartype: 'فولكسفاجن' , carModel : 'جولف' },
    { cartype: 'سوزوكي' , carModel : 'فورينزا' },               { cartype: 'فولكسفاجن' , carModel : 'جيتا' },
    { cartype: 'سوزوكي' , carModel : 'فيتارا' },                { cartype: 'فولكسفاجن' , carModel : 'شيروكو' },
    { cartype: 'سوزوكي' , carModel : 'فيرونا' },                { cartype: 'فولكسفاجن' , carModel : 'طوارق' },
                                                            { cartype: 'فولكسفاجن' , carModel : 'فايتون' },
     { cartype: 'سيت' , carModel : 'ابيزا' },                   { cartype: 'فولكسفاجن' , carModel : 'فينتو' },
    { cartype: 'سيت' , carModel : 'توليدو' },                   { cartype: 'فولكسفاجن' , carModel : 'كادي' },
    { cartype: 'سيت' , carModel : 'روندا' },                    { cartype: 'فولكسفاجن' , carModel : 'كبينة' },
    { cartype: 'سيت' , carModel : 'قرطبة' },                    { cartype: 'فولكسفاجن' , carModel : 'كرافتر' },
    { cartype: 'سيت' , carModel : 'ليون' },                     { cartype: 'فولكسفاجن' , carModel : 'كرافيل' },
    
    { cartype: 'شاحنة' , carModel : 'داف' },                    { cartype: 'فيات' , carModel : '127' },
    { cartype: 'شاحنة' , carModel : 'مان' },                    { cartype: 'فيات' , carModel : '500' },
                                                              { cartype: 'فيات' , carModel : 'اوتوبيانكي' },  
    { cartype: 'شفرليت' , carModel : 'افيو' },                    { cartype: 'فيات' , carModel : 'اونو' },  
    { cartype: 'شفرليت' , carModel : 'اليرو' },                    { cartype: 'فيات' , carModel : 'باندا' }, 
    { cartype: 'شفرليت' , carModel : 'اوبترا' },                    { cartype: 'فيات' , carModel : 'برافو' },
    { cartype: 'شفرليت' , carModel : 'بونتباك' },                   { cartype: 'فيات' , carModel : 'بونتو' },
    { cartype: 'شفرليت' , carModel : 'ترافرس' },                  { cartype: 'فيات' , carModel : 'تيبو' },  
    { cartype: 'شفرليت' , carModel : 'سبارك' },                   { cartype: 'فيات' , carModel : 'تيمبرا' },  
    { cartype: 'شفرليت' , carModel : 'كابتيفا' },                   { cartype: 'فيات' , carModel : 'دوبلو' },
    { cartype: 'شفرليت' , carModel : 'كافلير' },                    { cartype: 'فيات' , carModel : 'فرينو' },
    { cartype: 'شفرليت' , carModel : 'كروز' },                    { cartype: 'فيات' , carModel : 'كيوبو' },  
    { cartype: 'شفرليت' , carModel : 'ماليبو' },                    { cartype: 'فيات' , carModel : 'لينيا' },
    
    { cartype: 'فورد' , carModel : 'سكورت' },                   { cartype: 'كاديلاك' , carModel : 'CTS' },
    { cartype: 'فورد' , carModel : 'اكيلاين' },         
    { cartype: 'فورد' , carModel : 'ايدج' },                      { cartype: 'كيا Kia' , carModel : 'Morning' },  
    { cartype: 'فورد' , carModel : 'ترانزيت' },                     { cartype: 'كيا Kia' , carModel : 'اوبتيما' },
    { cartype: 'فورد' , carModel : 'ترايسر' },                     { cartype: 'كيا Kia' , carModel : 'برايد' }, 
    { cartype: 'فورد' , carModel : 'سيرا' },                      { cartype: 'كيا Kia' , carModel : 'بيكانتو' },  
    { cartype: 'فورد' , carModel : 'فوكس' },                     { cartype: 'كيا Kia' , carModel : 'ريو' },   
    { cartype: 'فورد' , carModel : 'فيستا' },                       { cartype: 'كيا Kia' , carModel : 'سبورتاج' },
    { cartype: 'فورد' , carModel : 'فيوجن' },                       { cartype: 'كيا Kia' , carModel : 'سورينتو' },
    { cartype: 'فورد' , carModel : 'كورتينا' },                      { cartype: 'كيا Kia' , carModel : 'سول' },   
    { cartype: 'فورد' , carModel : 'كونيكت' },                      { cartype: 'كيا Kia' , carModel : 'سيد' },
    { cartype: 'فورد' , carModel : 'موستانغ' },                     { cartype: 'كيا Kia' , carModel : 'سيراتو' },
    { cartype: 'فورد' , carModel : 'مونديو' },                      { cartype: 'كيا Kia' , carModel : 'فورتي' },
                                                                { cartype: 'كيا Kia' , carModel : 'كارنيفال' },
    { cartype: 'فولفو' , carModel : 'FH 16' },
    { cartype: 'فولفو' , carModel : 'FL 10' },
    { cartype: 'فولفو' , carModel : 'FL 12' },
    { cartype: 'فولفو' , carModel : 'FL 7' },
    { cartype: 'فولفو' , carModel : 'FM 10' },
    { cartype: 'فولفو' , carModel : 'FM 12' },
    { cartype: 'فولفو' , carModel : 'FM 7' },
    { cartype: 'فولفو' , carModel : 'N10' },
    { cartype: 'فولفو' , carModel : 'N12' },
    
    { cartype: 'لاندروفر' , carModel : 'ديسكفري' },
     { cartype: 'لاندروفر' , carModel : 'ديفندر' },
     { cartype: 'لاندروفر' , carModel : 'فري لاندر' },
    
    { cartype: 'مازدا' , carModel : '3' },
    { cartype: 'مازدا' , carModel : '323' },
    { cartype: 'مازدا' , carModel : '325' },
    { cartype: 'مازدا' , carModel : '5' },
    { cartype: 'مازدا' , carModel : '6' },
    { cartype: 'مازدا' , carModel : 'BT50' },
    { cartype: 'مازدا' , carModel : 'دميو' },
    { cartype: 'مازدا' , carModel : 'لانتس' },
    
    { cartype: 'مرسيدس' , carModel : '170' },
    { cartype: 'مرسيدس' , carModel : '180' },
    { cartype: 'مرسيدس' , carModel : '190' },
    { cartype: 'مرسيدس' , carModel : '200' },
    { cartype: 'مرسيدس' , carModel : '207' },
    { cartype: 'مرسيدس' , carModel : '220' },
    { cartype: 'مرسيدس' , carModel : '230' },
    { cartype: 'مرسيدس' , carModel : '240' },
    { cartype: 'مرسيدس' , carModel : '250' },
    { cartype: 'مرسيدس' , carModel : '260' },
    { cartype: 'مرسيدس' , carModel : '280' },
    { cartype: 'مرسيدس' , carModel : '300' },
    { cartype: 'مرسيدس' , carModel : '313' },
    { cartype: 'مرسيدس' , carModel : '350' },
    { cartype: 'مرسيدس' , carModel : '380' },
    { cartype: 'مرسيدس' , carModel : '410' },
    { cartype: 'مرسيدس' , carModel : '411' },
    { cartype: 'مرسيدس' , carModel : '412' },
    { cartype: 'مرسيدس' , carModel : '416' },
    { cartype: 'مرسيدس' , carModel : '518' },
    { cartype: 'مرسيدس' , carModel : '608' },
    { cartype: 'مرسيدس' , carModel : '709' },
    { cartype: 'مرسيدس' , carModel : '814' },
    { cartype: 'مرسيدس' , carModel : '914' },
    { cartype: 'مرسيدس' , carModel : 'C180' },
    { cartype: 'مرسيدس' , carModel : 'C200' },
    { cartype: 'مرسيدس' , carModel : 'C220' },
    { cartype: 'مرسيدس' , carModel : 'C250' },
    { cartype: 'مرسيدس' , carModel : 'C270' },
    { cartype: 'مرسيدس' , carModel : 'C300' },
    { cartype: 'مرسيدس' , carModel : 'C63' },
    { cartype: 'مرسيدس' , carModel : 'CLK' },
    { cartype: 'مرسيدس' , carModel : 'D412' },
    { cartype: 'مرسيدس' , carModel : 'E200' },
    { cartype: 'مرسيدس' , carModel : 'E220' },
    { cartype: 'مرسيدس' , carModel : 'E230' },
    { cartype: 'مرسيدس' , carModel : 'E250' },
    { cartype: 'مرسيدس' , carModel : 'E270' },
    { cartype: 'مرسيدس' , carModel : 'E280' },
    { cartype: 'مرسيدس' , carModel : 'E300' },
    { cartype: 'مرسيدس' , carModel : 'E320' },
    { cartype: 'مرسيدس' , carModel : 'E350' },
    { cartype: 'مرسيدس' , carModel : 'E400' },
    { cartype: 'مرسيدس' , carModel : 'E550' },
    { cartype: 'مرسيدس' , carModel : 'GL350' },
    { cartype: 'مرسيدس' , carModel : 'GL450' },
    { cartype: 'مرسيدس' , carModel : 'GL550' },
    { cartype: 'مرسيدس' , carModel : 'GL63' },
    { cartype: 'مرسيدس' , carModel : 'S320' },
    { cartype: 'مرسيدس' , carModel : 'SL350' },
    { cartype: 'مرسيدس' , carModel : 'SL550' },
    { cartype: 'مرسيدس' , carModel : 'SL63' },
    { cartype: 'مرسيدس' , carModel : 'SL65' },
    { cartype: 'مرسيدس' , carModel : 'سبرينتر' },
    { cartype: 'مرسيدس' , carModel : 'فيتو' },
    
    { cartype: 'ميتسوبيشي' , carModel : 'I300' },
     { cartype: 'ميتسوبيشي' , carModel : 'L200' },
     { cartype: 'ميتسوبيشي' , carModel : 'L400' },
     { cartype: 'ميتسوبيشي' , carModel : 'Space Star' },
     { cartype: 'ميتسوبيشي' , carModel : 'اتراج' },
     { cartype: 'ميتسوبيشي' , carModel : 'اوت لاندر' },
     { cartype: 'ميتسوبيشي' , carModel : 'باجيرو' },
     { cartype: 'ميتسوبيشي' , carModel : 'جالانت' },
     { cartype: 'ميتسوبيشي' , carModel : 'سبيس ستار' },
     { cartype: 'ميتسوبيشي' , carModel : 'كاريزما' },
     { cartype: 'ميتسوبيشي' , carModel : 'لانسر' },
     { cartype: 'ميتسوبيشي' , carModel : 'ماجنوم' },
    
    { cartype: 'نيسان' , carModel : 'الميرا' },
    { cartype: 'نيسان' , carModel : 'باترول' },
    { cartype: 'نيسان' , carModel : 'باث فايندر' },
    { cartype: 'نيسان' , carModel : 'تيدا' },
    { cartype: 'نيسان' , carModel : 'تيرانو' },
    { cartype: 'نيسان' , carModel : 'جوك' },
    { cartype: 'نيسان' , carModel : 'سني' },
    { cartype: 'نيسان' , carModel : 'كشكاي' },
    { cartype: 'نيسان' , carModel : 'مكسيما' },
    { cartype: 'نيسان' , carModel : 'ميكرا' },
    { cartype: 'نيسان' , carModel : 'نافارا' },
    { cartype: 'نيسان' , carModel : 'نوت' },
    { cartype: 'نيسان' , carModel : 'وينر' },
    
    { cartype: 'هوندا' , carModel : 'CR-V' },
    { cartype: 'هوندا' , carModel : 'اكورد' },
    { cartype: 'هوندا' , carModel : 'سيفيك' },
    
    { cartype: 'هونداي' , carModel : 'H1' },
    { cartype: 'هونداي' , carModel : 'H100' },
    { cartype: 'هونداي' , carModel : 'i10' },
    { cartype: 'هونداي' , carModel : 'i20' },
    { cartype: 'هونداي' , carModel : 'i25' },
    { cartype: 'هونداي' , carModel : 'i30' },
    { cartype: 'هونداي' , carModel : 'i40' },
    { cartype: 'هونداي' , carModel : 'ix35' },
    { cartype: 'هونداي' , carModel : 'ix55' },
    { cartype: 'هونداي' , carModel : 'اتوس' },
    { cartype: 'هونداي' , carModel : 'ازيرا' },
    { cartype: 'هونداي' , carModel : 'افانتي' },
    { cartype: 'هونداي' , carModel : 'اكسنت' },
    { cartype: 'هونداي' , carModel : 'الانترا' },
    { cartype: 'هونداي' , carModel : 'تراجيت' },
    { cartype: 'هونداي' , carModel : 'توسان' },
    { cartype: 'هونداي' , carModel : 'توكسون' },
    { cartype: 'هونداي' , carModel : 'تيراكان' },
    { cartype: 'هونداي' , carModel : 'جالوبر' },
    { cartype: 'هونداي' , carModel : 'جيتس' },
    { cartype: 'هونداي' , carModel : 'سانتافيه' },
    { cartype: 'هونداي' , carModel : 'سوناتا' },
    { cartype: 'هونداي' , carModel : 'فيرنا' },
    { cartype: 'هونداي' , carModel : 'فيلوستر' },
    { cartype: 'هونداي' , carModel : 'كليك' },
    { cartype: 'هونداي' , carModel : 'كوبيه' },
    { cartype: 'هونداي' , carModel : 'ماتركس' },
    


    
    
    
    
    
    
    
    
    
    
]

$("#carModel").prop('disabled', true);


$("#carType").change(function(){
	var car = $(this).val();
    var options =  '<option disabled  value=""><strong>الموديل</strong></option>';
    var count = 0;
	$(allCars).each(function(index, value){
       
		if(value.cartype == car){
			options += '<option value="'+value.carModel+'">'+value.carModel+'</option>';
            count +=1;
		}
	});
    
    if(count > 1){
        $("#carModel").prop('disabled', false);
   }else {$("#carModel").prop('disabled', true);}

	$('#carModel').html(options);
});
