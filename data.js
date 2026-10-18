/* =========================================================
   داده‌ی شجره‌نامه — ساختار تودرتو
   ========================================================= */
const familyTree = {
  name:"محمد حسن", deceased:true, deathYear:"",
  photo:"",
  gallery:[
    "",
  ],
  spouse:{name:"نامعلوم",gender:"f",deceased:true},
  children:[
    {name:"هارون", deceased:true},
    {name:"مردان", deceased:true},
    {name:"کهرا", deceased:true},
    {name:"یوسف", deceased:true},
    {name:"جمال", deceased:true, deathYear:"",
    spouse:{gender:"f", deceased:true},
    children:[
      {name:"حسن", deceased:true, deathYear:"",
      spouse:{gender:"f", deceased:true},
      children:[
        {name:"رادو", deceased:true, deathYear:"",
        spouse:{gender:"f",deceased:true},
        children:[
          {name:"اسماعیل", deceased:true},
          {name:"لوار", deceased:true},
          {name:"یاگی", deceased:true},
          {name:"کیا", deceased:true},
          {name:"حسن", deceased:true,
            spouse:{gender:"f", deceased:true},
            children:[
              {name:"پیرداد", deceased:true},
              {name:"شهک", deceased:true},
              {name:"سید", deceased:true},
              {name:"ملک درک", deceased:true,
                spouse:{gender:"f",deceased:true},
                children:[
                  {name:"صفو", deceased:true},
                  {name:"خیرا", deceased:true},
                  {name:"چوپان", deceased:true},
                  {name:"شادبان", deceased:true,
                    spouse:{gender:"f",deceased:true},
                    children:[
                      {name:"'گدائی", deceased:true,
                        spouse:{gender:"f",deceased:true},
                        children:[
                          {name:"الو", deceased:true,
                            spouse:{gender:"f",deceased:true},
                            children:[
                              {name:"سیدخان", deceased:true,
                                spouse:{gender:"f",deceased:true},
                                children:[
                                  {name:"حیات", deceased:true,
                                    spouse:{gender:"f",deceased:true},
                                    children:[
                                      {name:"محمد", deceased:true,
                                        spouse:{gender:"f",deceased:true},
                                        children:[
                                          {name:"فتو", deceased:true,
                                            spouse:{gender:"f",deceased:true},
                                            children:[
                                              {name:"محمد", deceased:true,
                                                spouse:{gender:"f",deceased:true},
                                                children:[
                                                  {name:"رسول", deceased:true,
                                                    spouse:{gender:"f",deceased:true},
                                                    children:[
                                                      {name:"مولانا دین محمد", deceased:true,
                                                        photo:"photo/dinMohammad_Rasoul.jpg",
                                                        spouse:{gender:"f",deceased:true},
                                                        children:[
                                                          {name:"مولوی عبدالعزیز", deceased:true},
                                                          {name:"مولوی عبدالهادی", deceased:true},
                                                          {name:"مولوی عبدالنصیر", deceased:true},
                                                          {name:"مولوی نعیم الله", deceased:true},
                                                          {name:"مولوی عبدالبصیر", deceased:true},
                                                          {name:"مولوی عبدالعزیم", deceased:true},
                                                          {name:"مولوی سعید", deceased:true}
                                                        ]
                                                      }
                                                    ]}
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {name:"شاه رسان", deceased:true,
                    spouse:{gender:"f",deceased:true},
                    children:[
                      {name:"الله داد", deceased:true,
                        spouse:{gender:"f",deceased:true},
                        children:[
                          {name:"اسحاق", deceased:true,
                            spouse:{gender:"f", deceased:true},
                            children:[
                              {name:"رحمان", deceased:true,
                                spouse:{gender:"f", deceased:true},
                                children:[
                                  {name:"پریا خان", deceased:true,
                                    spouse:{gender:"f",deceased:true},
                                    children:[
                                      {name:"ابراهیم", deceased:true,
                                        spouse:{gender:"f",deceased:true},
                                        children:[
                                          {name:"ناصر", deceased:true,
                                            spouse:{gender:"f",deceased:true},
                                            children:[
                                              {name:"پری",gender:"f", deceased:true,place:"عشق آباد ترکمنستان",note:"مزار هم در عشق آباد قرار دارد",
                                                spouse:{deceased:true},
                                                children:[
                                                  {name:"نورمحمد", deceased:true,
                                                    spouse:{gender:"f",deceased:true},
                                                    children:[
                                                      {name:"جما", deceased:true}
                                                    ]
                                                  },
                                                  {name:"غریب", deceased:true,
                                                    spouse:{gender:"f",deceased:true},
                                                    children:[
                                                      {name:"ولی", deceased:true},
                                                      {name:"نورمحمد", deceased:true,
                                                        spouse:{gender:"f",deceased:true},
                                                        children:[
                                                          {name:"جما", deceased:false},
                                                          {name:"حسن", deceased:false}
                                                        ]
                                                      },
                                                      {name:"دوست مححمد", deceased:true,
                                                        spouse:{gender:"f",deceased:true},
                                                        children:[
                                                          {name:"حسین", deceased:false},
                                                          {name:"حسن", deceased:false},
                                                          {name:"محمد", deceased:false}
                                                        ]
                                                      },
                                                      {name:"سلطان", deceased:true,place:"مسکو روسیه",
                                                        spouse:{gender:"f",deceased:true},
                                                        children:[
                                                          {name:"علیم", deceased:false,place:"مسکو روسیه"},
                                                          {name:"سلیم", deceased:false,place:"مسکو روسیه"}
                                                        ]
                                                      },
                                                    ]
                                                  },
                                                  {name:"ماه جان",gender:"f", deceased:true,
                                                    spouse:{name:"مولاموسی",family:"نارویی",deceased:true},
                                                    children:[
                                                      {name:"حاج عبدالله",key:"abdollahmolamosa",family:"کریمی نیا", deceased:true,place:"آزادشهر",
                                                        children:[
                                                          {name:"همسر اول حاجیه سنگین",key:"sanginsharif",gender:"f",place:"آزادشهر",
                                                            children:[
                                                              {name:"میثم",key:"meysamAbdollah",family:"کریمی نیا",place:"آزادشهر",
                                                                spouse:{name:"آرزو",key:"arezomohammad",gender:"f",family:"مرادی",place:"آزاد شهر",}
                                                              },
                                                              {name:"گل پری",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                              {name:"ماه پری",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                              {name:"پروین",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                              {name:"سمیه",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                              {name:"سودابه",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                              {name:"شیما",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                            ]
                                                          },
                                                          {name:"همسر دوم عفت",family:"ماهرپر",gender:"f",place:"آزادشهر",familyRole:"spouse",
                                                            children:[
                                                              {name:"مسعود",family:"کریمی نیا",deceased:false,place:"آزادشهر"},
                                                              {name:"محسن",family:"کریمی نیا",deceased:false,place:"آزادشهر"},
                                                              {name:"رضا",family:"کریمی نیا",deceased:false,place:"آزادشهر"},
                                                            ]
                                                          },
                                                        ],
                                                      },
                                                      {name:"حنبرعاتون",gender:"f",family:"ناروئی", deceased:true,
                                                        spouse:{name:"صمد",family:"نهتانی",deceased:true},
                                                        children:[
                                                          {name:"یعقوب", deceased:true},
                                                          {name:"یوسف", deceased:true},
                                                        ]
                                                      },
                                                    ]
                                                  },
                                                ]
                                              },
                                              {name:"گل محمد", deceased:true,
                                                children:[
                                                  {name:"همسر اول گل عاتون",gender:"f",deceased:true,
                                                    children:[
                                                      {name:"ناصر",key:"naserGolmohammad",deceased:true,
                                                        children:[
                                                          {name:"لال بی بی",key:"lalbibiKarim",gender:"f",deceased:true,
                                                            children:[
                                                              {name:"کفتر",gender:"f",deceased:true,
                                                                spouse:{name:"حاجی خدابخش",deceased:true,},
                                                                children:[
                                                                  {name:"در محمد",deceased:true,},
                                                                  {name:"گل محمد",deceased:true,},
                                                                  {name:"غلام",deceased:true,},
                                                                  {name:"محمد",deceased:true,},
                                                                  {name:"فاطمه",gender:"f",deceased:true,},
                                                                  {name:"عاطفه",gender:"f",deceased:true,},
                                                                ]
                                                              },
                                                              {name:"حاج حسین",key:"hajhosseinNaser",deceased:true,
                                                                photo:"photo/haj_Hossein_Naser.jpg",
                                                                children:[
                                                                  {name:"همسر اول گل پری",family:"براهوئی",gender:"f",deceased:true,note:"فرزند سلطان محمد",
                                                                    children:[
                                                                      {name:"عبدالله",key:"abdollahhossein",family:"رخشانی فر",place:"سمنان",
                                                                        spouse:{name:"فاطمه",key:"fatemekarim",family:"ابراهیمی",gender:"f",place:"سمنان",},
                                                                        children:[
                                                                          {name:"سامان",key:"samanAbdollah",family:"رخشانی فر",place:"مشهد",
                                                                            spouse:{name:"فاطمه",key:"fatemeKhodabakhsh",gender:"f",place:"مشهد",}
                                                                          },
                                                                          {name:"ساسان",family:"رخشانی فر",place:"مشهد",},
                                                                          {name:"احسان",family:"رخشانی فر",place:"مشهد",},
                                                                          {name:"سمیه",gender:"f",family:"رخشانی فر",place:"مشهد",},
                                                                          {name:"سهیلا",gender:"f",family:"رخشانی فر",place:"سمنان",
                                                                            spouse:{name:"محمد",place:"سمنان",},
                                                                            children:[]
                                                                          },
                                                                        ]
                                                                      },
                                                                    ]
                                                                  },
                                                                  {name:"همسر دوم زلیخا",gender:"f",deceased:true,
                                                                    children:[
                                                                      {name:"حلیمه",gender:"f",
                                                                        spouse:{name:"نوری",note:"از قوم ترکمن"},
                                                                        children:[
                                                                          {name:"طاهر",},
                                                                          {name:"زهره",gender:"f",},
                                                                          {name:"نسرین",gender:"f",},
                                                                          {name:"نسترن",gender:"f",},
                                                                        ]
                                                                      }
                                                                    ]
                                                                  },
                                                                  {name:"همسر سوم نازپری",gender:"f",deceased:true,note:"فرزند وکیل(میرزا)",
                                                                    children:[
                                                                      {name:"ناصر",
                                                                        spouse:{gender:"f",},
                                                                        children:[
                                                                          {name:"امیر علی",},
                                                                        ]
                                                                      },
                                                                      {name:"منصور",key:"mansourHajHossein",
                                                                        spouse:{name:"فریبا",gender:"f",key:"faribaDorbik",},
                                                                        children:[
                                                                          {name:"یسنا",gender:"f",},
                                                                          {name:"آرزو",gender:"f",},
                                                                      
                                                                        ]
                                                                      },
                                                                      {name:"رضا",
                                                                        spouse:{gender:"f",},
                                                                        children:[
                                                                          {name:"شایان",},
                                                                          {name:"متین",gender:"f",},
                                                                      
                                                                        ]
                                                                      },
                                                                      {name:"مدینه",gender:"f",key:"madineHajHossein",
                                                                        
                                                                        spouse:{name:"حاجی محمد",key:"hajiMohammadDorbik"},
                                                                        children:[
                                                                          {name:"امیر",},
                                                                          {name:"محمد صالح",},
                                                                          {name:"صبا",gender:"f",},
                                                                      
                                                                        ]
                                                                      },
                                                                      {name:"سکینه",gender:"f",
                                                                        spouse:{},
                                                                        children:[
                                                                          {name:"زهرا",gender:"f",},
                                                                      
                                                                        ]
                                                                      },
                                                                      {name:"سودابه",gender:"f",},
                                                                      {name:"سمیرا",gender:"f",},
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                            ]                                                          
                                                          },
                                                          {name:"جان گل",gender:"f",family:"براهوئی",deceased:true,
                                                            children:[
                                                              {name:"زرملک",gender:"f",
                                                                spouse:{},
                                                                children:[
                                                                  {name:"ابرهیم",
                                                                    spouse:{name:"زینب",family:"شهلی بر",gender:"f",},
                                                                    children:[
                                                                      {name:"هانیه",gender:"f",},
                                                                      {name:"یزدان"},
                                                                      {name:"دین محمد"},
                                                                      
                                                                    ]
                                                                  },
                                                                  {name:"جما",note:"مفقودالاثر",deceased:true},
                                                                  {name:"شاه پری",gender:"f",
                                                                    spouse:{name:"مهدی",family:"سارانی"},
                                                                    children:[
                                                                      {name:"محمود"},
                                                                      {name:"محمد"},
                                                                      {name:"سمیه",gender:"f",},
                                                                      {name:"مدینه",gender:"f",},
                                                                    ]
                                                                  },
                                                                ]
                                                              },

                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {name:"ماه پری",gender:"f",deceased:true,
                                                        children:[
                                                          
                                                          {name:"مدد",family:"جمال زهی",deceased:true,
                                                            children:[
                                                              {name:"حاجی خدابخش",family:"جمال زهی"},
                                                              {name:"ملنگ",family:"جمال زهی"},
                                                            ]
                                                          },
                                                          {name:"گل محمد",family:"طلایی",deceased:true,
                                                            children:[
                                                              {name:"عبدالعزیز",key:"abdolazizGoolmohammad",family:"نعیمی فر",
                                                                children:[
                                                                  {name:"گل پری",family:"براهویی",gender:"f",
                                                                    children:[
                                                                      
                                                                    ]
                                                                  },
                                                                  {name:"معصومه",key:"mahsomeMohammadKarim",family:"براهویی",gender:"f",
                                                                    children:[
                                                                      {name:"عبدالصمد"},
                                                                      {name:"سعید",},
                                                                      {name:"احمد"},
                                                                      {name:"محمود",},
                                                                      {name:"مسعود",},
                                                                      {name:"وحید",},
                                                                      {name:"لطیف",},
                                                                      {name:"مهناز",gender:"f",},
                                                                      {name:"محبوبه",gender:"f",},
                                                                      {name:"مهلا",gender:"f",},
                                                                    ]
                                                                  },
                                                                ]
                                                              },
                                                              {name:"محمدرضا",family:"نعیمی فر",
                                                                spouse:{name:"صنوبر",gender:"f"},
                                                                children:[
                                                                  {name:"ناصر"},
                                                                  {name:"داوود"},
                                                                  {name:"عبدالله"},
                                                                  {name:"سلیمان"},
                                                                  {name:"گل محمد",},
                                                                  {name:"صدیقه",gender:"f",},
                                                                  {name:"ماه پری",gender:"f"},
                                                                  {name:"عصمت",gender:"f"},
                                                                  {name:"زهرا",gender:"f",},
                                                                ]
                                                              },

                                                            ]
                                                          },
                                                          
                                                          
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {name:"همسر دوم حنبر عاتون",gender:"f",family:"براهویی",deceased:true,
                                                    children:[
                                                      {name:"میرزا",deceased:true,family:"مرادی",place:"روستا ارزنچه علیا",note:"مزار در روستا ارزنچه علیا از توابع شهرستان تایباد می باشد",
                                                        photo:"photo/mirza_goolmohammad.jpg",
                                                        spouse:{name:"ماه گنج",family:"براهوئی",gender:"f",place:"روستا ارزنچه علیا"},
                                                        children:[
                                                          {name:"محمد",key:"mohammadmirza",family:"مرادی",place:"مشهد",
                                                            spouse:{name:"ماه پری",key:"mahparikarim",gender:"f",family:"نعیمی فر",place:"مشهد"},
                                                            children:[
                                                              {name:"عمران",family:"مرادی",place:"مشهد"},
                                                              {name:"آرزو",key:"arezomohammad",gender:"f",family:"مرادی",place:"آزاد شهر",
                                                                spouse:{name:"میثم",key:"meysamAbdollah",family:"کریمی نیا",place:"آزاد شهر"},
                                                              },
                                                              {name:"هانیه",gender:"f",family:"مرادی",place:"مشهد"},
                                                          
                                                            ]
                                                          },
                                                          {name:"گل محمد",family:"مرادی",place:"تایباد",birthYear:"1349",
                                                            spouse:{name:"عصمت",gender:"f",family:"لوطکی",place:"تایباد"},
                                                            children:[
                                                              {name:"جواد",family:"مرادی",place:"تایباد",birthYear:"1372"},
                                                              {name:"عماد",family:"مرادی",place:"تایباد",birthYear:"1390"},
                                                              
                                                              {name:"اسماء",gender:"f",family:"مرادی",place:"زابل",birthYear:"1376",
                                                                spouse:{name:"محمد",family:"لوطکی",place:"زابل"},
                                                                children:[
                                                                  {name:"افسون",gender:"f",family:"مرادی",place:"زابل"}
                                                                ]
                                                              },
                                                              {name:"سمیه",gender:"f",family:"مرادی",place:"تایباد",birthYear:"1380"},
                                                              
                                                            ]
                                                          },
                                                          {name:"رحیم",key:"rahimmirza",family:"مرادی",place:"مشهد",
                                                            spouse:{name:"زینب",key:"zeynabkarim",gender:"f",family:"نعیمی فر",place:"مشهد",},
                                                            children:[
                                                              {name:"عرفان",family:"مرادی",place:"مشهد",},
                                                              {name:"دینا",gender:"f",family:"مرادی",place:"مشهد",},
                                                              
                                                            ]
                                                          },
                                                          {name:"بزرگ",gender:"f",family:"مرادی",place:"روستا ارزنچه علیا",
                                                            spouse:{name:"محمد",family:"براهوئی",place:"روستا ارزنچه علیا",deceased:true,},
                                                            children:[
                                                              {name:"عصمت",gender:"f",family:"مرادی",place:"سنگان",
                                                                spouse:{name:"منصور",family:"براهوئی",place:"سنگان",},
                                                                children:[
                                                                  {name:"محمد",place:"سنگان",},
                                                                  {name:"معید",place:"سنگان",},
                                                                  {name:"",place:"سنگان",},
                                                                  {name:"اسراء",gender:"f",place:"زاهدان",
                                                                    spouse:{name:"محمد",family:"براهوئی",place:"زاهدان",},
                                                                  },
                                                                
                                                                ]
                                                              },
                                                              {name:"مرضیه",gender:"f",family:"مرادی",place:"روستا ارزنچه علیا",
                                                                spouse:{name:"شیر احمد",family:"براهوئی",place:"روستا ارزنچه علیا",},
                                                                children:[
                                                                  {name:"محمد پارسا",place:"روستا ارزنچه علیا",},
                                                                  {name:"محمد آرسام",place:"روستا ارزنچه علیا",},
                                                                
                                                                ]
                                                              },
                                                              {name:"زهرا",gender:"f",family:"مرادی",place:"زاهدان",
                                                                spouse:{name:"علی",family:"براهوئی",place:"زاهدان",},
                                                                children:[
                                                                  {name:"مهدی",place:"زاهدان",},
                                                                ]
                                                              },
                                                              
                                                            ]
                                                          },
                                                          
                                                        ]
                                                    
                                                      },
                                                      {name:"نوروز",deceased:true,note:"مفقودالاثر"},
                                                      {name:"زینب",gender:"f",deceased:true,gender:"f",
                                                        spouse:{name:"حاجی زمان خان",deceased:true,family:"زیرکاری",},
                                                        children:[
                                                          {name:"حسن",family:"زیرکاری",place:"زابل",},
                                                          {name:"مولوی عمر",family:"زیرکاری",place:"سفیدابه",},
                                                          {name:"عثمان",family:"زیرکاری",place:"زابل",},
                                                          {name:"حلیمه",gender:"f",family:"زیرکاری",},
                                                          {name:"گل پری",gender:"f",family:"زیرکاری",},
                                                          {name:"زلیخا",gender:"f",family:"زیرکاری",},
                                                          
                                                        ]
                                                      },
                                                      
                                                    ]
                                                  },
                                                  {name:"همسر سوم شهر بانو",gender:"f",family:"براهویی",deceased:true,
                                                    children:[
                                                      {name:"شریف",deceased:true,
                                                        spouse:{name:"گلثوم",family:"یار محمدزهی",deceased:true,gender:"f"},
                                                        children:[
                                                          
                                                          {name:"عزیز",
                                                            spouse:{gender:"f"},
                                                            children:[
                                                              {name:"صمد"},
                                                              {name:"سعید"},
                                                              {name:"وحید"},
                                                              
                                                              {name:"راحله",gender:"f"},
                                                              {name:"سمیرا",gender:"f"},
                                                              {name:"فاطمه",gender:"f"},
                                                              {name:"سایدا",gender:"f"},
                                                              
                                                            ]
                                                          },
                                                          {name:"عبدالحمید",
                                                            spouse:{gender:"f"},
                                                            children:[
                                                              {name:"یاسمن",gender:"f"},
                                                            ]
                                                          },
                                                          {name:"حاجیه سنگین",key:"sanginsharif",gender:"f",place:"آزادشهر",
                                                            spouse:{name:"حاج عبدالله",key:"abdollahmolamosa",family:"کریمی نیا", deceased:true,place:"آزادشهر"},
                                                            children:[
                                                              {name:"میثم",key:"meysamAbdollah",family:"کریمی نیا",place:"آزادشهر",
                                                                spouse:{name:"آرزو",key:"arezomohammad",gender:"f",family:"مرادی",place:"آزاد شهر",}
                                                              },
                                                              {name:"گل پری",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                              {name:"ماه پری",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                              {name:"پروین",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                              {name:"سمیه",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                              {name:"سودابه",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                              {name:"شیما",family:"کریمی نیا",gender:"f",deceased:false,place:"آزادشهر"},
                                                            ]
                                                          },
                                                          {name:"پری",gender:"f",
                                                            spouse:{name:"محمد",family:"نووتی زهی"},
                                                            children:[
                                                              {name:"ناصر",family:"نووتی زهی"},
                                                              {name:"وحید",family:"نووتی زهی"},
                                                              {name:"مجید",family:"نووتی زهی"},
                                                              {name:"سعید",family:"نووتی زهی"},

                                                              {name:"شهناز",family:"نووتی زهی",gender:"f"},
                                                              {name:"وجیهه",family:"نووتی زهی",gender:"f"},
                                                              {name:"زلیخا",family:"نووتی زهی",gender:"f"},
                                                              {name:"سعیده",family:"نووتی زهی",gender:"f"},
                                                              
                                                            ]
                                                          },
                                                          {name:"حلیمه",gender:"f",
                                                            spouse:{name:"فضل احمد",family:"رودینی"},
                                                            children:[
                                                              {name:"میلاد",family:"رودینی"},
                                                              {name:"مجید",family:"رودینی"},
                                                              {name:"الهام",family:"رودینی",gender:"f"},
                                                              
                                                            ]

                                                          },
                                                          
                                                        ]
                                                      },
                                                      {name:"میر نظر",deceased:true,photo:"photo/nezar_goolmohammad.jpg",},
                                                      {name:"کریم",key:"karimShahrBano",deceased:true,family:"ابراهیمی",place:"مشهد",
                                                        photo:"photo/karim_goolmohammad.jpg",
                                                        spouse:{name:"شاه بی بی",family:"نقشبندی",key:"shahbibiKhalife",deceased:true,place:"مشهد",},
                                                        children:[
                                                          {name:"اشرف",key:"ashrafkarim",family:"ابراهیمی",gender:"f",place:"مشهد",
                                                            spouse:{name:"خدابخش",key:"khodabakhshmohammadkarim",deceased:true,place:"مشهد",},
                                                                children:[
                                                                  {name:"امید",place:"مشهد",},
                                                                  {name:"نوید",place:"مشهد",},
                                                                  {name:"فاطمه",key:"fatemeKhodabakhsh",gender:"f",place:"مشهد",
                                                                    spouse:{name:"سامان",key:"samanAbdollah",family:"رخشانی فر",place:"مشهد"}
                                                                  },
                                                                  {name:"زهرا",gender:"f",place:"مشهد"},
                                                                ]
                                                          },
                                                          {name:"فاطمه",key:"fatemekarim",family:"ابراهیمی",gender:"f",place:"سمنان",
                                                            spouse:{name:"عبدالله",key:"abdollahhossein",family:"رخشانی فر",place:"سمنان",},
                                                            children:[
                                                              {name:"سامان",family:"رخشانی فر",place:"مشهد",},
                                                              {name:"ساسان",family:"رخشانی فر",place:"مشهد",
                                                                spouse:{name:"فاطمه",key:"fatemeKhodabakhsh",gender:"f",place:"مشهد",}
                                                              },
                                                              {name:"احسان",family:"رخشانی فر",},
                                                              {name:"سمیه",family:"رخشانی فر",place:"مشهد",},
                                                              {name:"سهیلا",family:"رخشانی فر",
                                                                spouse:{name:"محمد"},
                                                                children:[]
                                                              },
                                                            ]
                                                          },



                                                          {name:"ماه پری",key:"mahparikarim",gender:"f",family:"ابراهیمی",place:"مشهد",
                                                            spouse:{name:"محمد",key:"mohammadmirza",family:"مرادی",place:"مشهد",},
                                                            children:[
                                                              {name:"عمران",family:"مرادی",place:"مشهد"},
                                                              {name:"آرزو",key:"arezomohammad",gender:"f",family:"مرادی",place:"آزاد شهر",
                                                                spouse:{name:"میثم",key:"meysamAbdollah",family:"کریمی نیا",place:"آزاد شهر"},
                                                              },
                                                              {name:"هانیه",gender:"f",family:"مرادی",place:"مشهد"},
                                                          
                                                            ]
                                                          },
                                                          {name:"زینب",key:"zeynabkarim",gender:"f",family:"ابراهیمی",place:"مشهد",
                                                            spouse:{name:"رحیم",key:"rahimmirza",family:"مرادی",place:"مشهد",},
                                                            children:[
                                                              {name:"عرفان",family:"مرادی",place:"مشهد",},
                                                              {name:"دینا",gender:"f",family:"مرادی",place:"مشهد",},
                                                            ]
                                                          },
                                                          
                                                        ]
                                                      },
                                                      {name:"صنوبر",key:"sanobarShahrbano",gender:"f",deceased:true,place:"مازندران",
                                                        spouse:{name:"محمد کریم",key:"mohammadkarimKarimIshan",deceased:true,place:"مازندران",photo:"photo/mohammadKarim_karim.jpg",},

                                                        children:[
                                                          {name:"یوسف",
                                                            spouse:{name:"ماه بی بی",family:"براهوئی",gender:"f",},
                                                            children:[
                                                              {name:"رضا"},
                                                              {name:"بهروز"},
                                                              {name:"مریم",gender:"f"},
                                                            ]
                                                          },
                                                          {name:"خدابخش",key:"khodabakhshmohammadkarim",deceased:true,place:"مشهد",
                                                            spouse:{name:"اشرف",key:"ashrafkarim",family:"ابراهیمی",gender:"f",place:"مشهد"},
                                                            children:[
                                                              {name:"امید",place:"مشهد",},
                                                              {name:"نوید",place:"مشهد",},
                                                              {name:"فاطمه",key:"fatemeKhodabakhsh",gender:"f",place:"مشهد",
                                                                spouse:{name:"سامان",key:"samanAbdollah",family:"رخشانی فر",place:"مشهد"}
                                                              },
                                                              {name:"زهرا",gender:"f",place:"مشهد"},
                                                            ]
                                                          },
                                                          {name:"صفر",place:"مشهد",
                                                            spouse:{name:"پری",family:"عیدوزهی",gender:"f",note:"فرزند حسن"},
                                                            children:[
                                                              {name:"محمد"},
                                                            ]
                                                          },
                                                          {name:"ناز بی بی",gender:"f",
                                                            spouse:{name:"غلام سرور",family:"رخشانی",},
                                                            children:[
                                                              {name:"کادر"},
                                                              {name:"غلام سخی"},
                                                              {name:"احمد"},
                                                            ]
                                                          },
                                                          {name:"در بی بی",key:"mahnazMohammadKarim",gender:"f",note:"به اسم مهناز شناخته میشه",
                                                            children:[
                                                              {name:"همسر اول مجید",family:"عیدوزهی",
                                                                children:[
                                                                  {name:"فاطمه",family:"عیدوزهی",gender:"f"},
                                                                ],
                                                              },
                                                              {name:"همسر دوم حاجی ابراهیم",key:"ebrahimSoofiAlam",
                                                                children:[
                                                                  {name:"پرویز"},
                                                                  {name:"محمد عادل"},
                                                                  {name:"پریا",gender:"f"},
                                                                  {name:"بی بی عایشه",gender:"f"},
                                                                ]
                                                              },
                                                            ]
                                                          },
                                                          {name:"بانو",gender:"f"},
                                                          {name:"ماه بی بی",key:"mahbibiMohammadKarim",gender:"f",
                                                            spouse:{name:"شیخ مراد",key:"shikhMoradZarbibi",family:"رخشانی",},
                                                            children:[
                                                              {name:"مجید",family:"رخشانی"},
                                                              {name:"رضا",family:"رخشانی"},
                                                            ]
                                                          },
                                                          {name:"معصومه",key:"mahsomeMohammadKarim",family:"براهویی",gender:"f",
                                                            children:[
                                                              {name:"همسر اول موسی",
                                                                children:[
                                                                  {name:"محمد حسین"},
                                                                  {name:"متین",},
                                                                ]
                                                              },
                                                              {name:"عبدالعزیز",key:"abdolazizGoolmohammad",family:"نعیمی فر",
                                                                children:
                                                                [                                                                
                                                                  {name:"عبدالصمد"},
                                                                  {name:"سعید",},
                                                                  {name:"احمد"},
                                                                  {name:"محمود",},
                                                                  {name:"مسعود",},
                                                                  {name:"وحید",},
                                                                  {name:"لطیف",},
                                                                  {name:"مهناز",gender:"f",},
                                                                  {name:"محبوبه",gender:"f",},
                                                                  {name:"مهلا",gender:"f",},
                                                                ]
                                                              },
                                                            ]

                                                          },

                                                        ]
                                                      },
                                                      {name:"فاطمه",gender:"f",deceased:true,
                                                        spouse:{},
                                                        children:[
                                                          {name:"ولی"},
                                                          {name:"ماه گل",gender:"f",},
                                                          
                                                        ]
                                                      },
                                                    ]
                                                  }
                                                ]
                                              },
                                              {name:"کریم ایشان", deceased:true,
                                                children:[
                                                  {name:"همسر اول بیبحان",gender:"f",family:"صفرزهی",deceased:true,note:"فرزند حبش",
                                                    children:[
                                                      {name:"ملا حاجی",deceased:true,
                                                        spouse:{},
                                                        children:[
                                                          {name:"ملا عبدالرشید",deceased:true,},
                                                          {name:"ملا عبدالکریم",deceased:true,
                                                            spouse:{gender:"f"},
                                                            children:[
                                                              {name:"ناصر",deceased:true,
                                                                spouse:{name:"گل بی بی",gender:"f",family:"رخشانی",deceased:true,},
                                                                children:[
                                                                  {name:"شریف",
                                                                    spouse:{name:"مهیا",gender:"f",note:"افغان می باشد"},
                                                                  },
                                                                  {name:"مصطفی",
                                                                    spouse:{name:"مهیا",family:"براهوئی",gender:"f"},
                                                                  },
                                                                  {name:"ماه گل",gender:"f",
                                                                    spouse:{name:"کریم",note:"",},
                                                                  },
                                                                  {name:"رلیخا",gender:"f",
                                                                    spouse:{name:"ضاهر",family:"رودینی",},
                                                                  },
                                                                  {name:"ماه جان",gender:"f",
                                                                    spouse:{name:"سلطان",family:"براهوئی",note:"فرزند یوسف",},
                                                                  },
                                                                  
                                                                ]
                                                              },
                                                              {name:"ملا جما",deceased:true,
                                                                photo:"photo/mola_joma_abdolKarim.jpg",
                                                                spouse:{name:"نور بی بی",gender:"f",deceased:true},
                                                                children:[
                                                                ]
                                                              },
                                                              {name:"دادخدا",deceased:true,
                                                                spouse:{name:"زرملک",gender:"f",deceased:true},
                                                                children:[
                                                                  {name:"غفور",deceased:true,
                                                                    spouse:{name:"حلیمه",gender:"f",deceased:true,},
                                                                  },
                                                                  {name:"حکیم",deceased:true,
                                                                    spouse:{name:"زلیخا",gender:"f",note:"فرزند یوسف",deceased:true,},
                                                                    children:[
                                                                      {name:"عبدالصمد",},
                                                                    ]
                                                                  },
                                                                  {name:"حسن",deceased:true,
                                                                    spouse:{name:"گل شیرین",note:"فرزند جهانگیر",gender:"f",family:"عیسی زهی",deceased:true,},
                                                                  },
                                                                ]
                                                              },
                                                              {name:"خداداد",deceased:true,
                                                                spouse:{name:"ماه بی بی",family:"عیسی رهی",note:"فرزند عیدو",gender:"f",deceased:true,},
                                                                children:[
                                                                  {name:"سلطان",},
                                                                  {name:"حاجی",
                                                                    spouse:{name:"نورانه",gender:"f",note:"ترک است"},
                                                                  },
                                                                  {name:"پری",gender:"f",
                                                                    spouse:{name:"فخری",},
                                                                  },
                                                                ]
                                                              },
                                                              {name:"کادر",deceased:true,
                                                                spouse:{name:"حلیمه",family:"سیدزهی",gender:"f",deceased:true,note:"فرزند عطا محمد",},
                                                                children:[
                                                                  {name:"اویس",
                                                                    spouse:{name:"نورجان",family:"ریگی",note:"فرزند لال محمد",},
                                                                    children:[
                                                                      {name:"نظیره",gender:"f"},
                                                                    ]
                                                                  },
                                                                  {name:"حنیفه",gender:"f",
                                                                    spouse:{name:"حسن",family:"سیدزهی",note:"فرزند اسماعیل"},
                                                                    children:[
                                                                      {name:"نورانه",gender:"f"},
                                                                      {name:"زینب",gender:"f"},
                                                                    ]
                                                                  },
                                                                ]
                                                              },
                                                              {name:"محمد",deceased:true,
                                                                spouse:{name:"مریم",family:"براهوئی",gender:"f",deceased:true,},
                                                                children:[
                                                                  {name:"دادخدا"},
                                                                  {name:"ناصر"},
                                                                  {name:"مدینه",gender:"f",
                                                                    spouse:{name:"حامی",note:"فرزند جهانگیر"},                     
                                                                  },
                                                                  {name:"مهناز",gender:"f"},
                                                                  
                                                                ]
                                                              },
                                                              {name:"علم",deceased:true,
                                                                spouse:{name:"بزرگ",gender:"f",deceased:true,},
                                                                children:[
                                                                  {name:"کریم",
                                                                    spouse:{name:"ملکه",gender:"f"},
                                                                  },
                                                                  {name:"عیدو",
                                                                    spouse:{name:"فاطمه",gender:"f"},
                                                                  },
                                                                  {name:"ابراهیم"},
                                                                  {name:"فاطمه",gender:"f",
                                                                    spouse:{name:"عیدو"},
                                                                  },
                                                                  
                                                                  
                                                                ]
                                                              },
                                                              {name:"الله نور",deceased:true,
                                                                spouse:{name:"حنیفه",family:"عیسی زهی",note:"فرزند رحمان",gender:"f",deceased:true},
                                                                children:[
                                                                  {name:"شاه کرم",deceased:true}
                                                                ]

                                                              },
                                                              {name:"شرف ناز",gender:"f",deceased:true,
                                                                spouse:{name:"صفر",note:"فرزند یوسف",deceased:true}
                                                              },
                                                              {name:"مریم",gender:"f",deceased:true,
                                                                spouse:{name:"اسماعیل",family:"سیدزهی",deceased:true},
                                                                children:[
                                                                  {name:"محمدقوس",deceased:true,
                                                                    spouse:{name:"حنیفه",gender:"f",deceased:true},
                                                                  },
                                                                  {name:"حسن",deceased:true,
                                                                    spouse:{name:"حنیفه",gender:"f",deceased:true,note:"فرزند کاظم درک زهی"},

                                                                  },
                                                                  {name:"محمد رسول",deceased:true},
                                                                  {name:"زیبا",gender:"f",deceased:true},
                                                                  {name:"نور بی بی",gender:"f",deceased:true},
                                                                  {name:"بی بی عایشه",gender:"f",deceased:true},
                                                                  {name:"ماه بی بی",gender:"f",deceased:true}
                                                                ]
                                                              },
                                                              
                                                            ]
                                                          },

                                                        ]
                                                      },
                                                      {name:"ناز بی بی",gender:"f",deceased:true,
                                                        spouse:{},
                                                        children:[
                                                          {name:"یار محمد",deceased:true,
                                                            spouse:{},
                                                            children:[
                                                              {name:"مادری",gender:"f",deceased:true,},
                                                              {name:"در بی بی",gender:"f",deceased:true,place:"نروژ"}
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {name:"همسر دوم",gender:"f",family:"شهلی بر",deceased:true,note:"فرزند شاه کرم",
                                                    children:[
                                                      {name:"صوفی علم",deceased:true,
                                                        photo:"photo/soufiAlam_karim.jpg",
                                                        spouse:{},
                                                        children:[
                                                          {name:"سید منصور",photo:"photo/saeed_mansour_soufiAlam.jpg"},
                                                          {name:"پرویز",deceased:true,note:"در نوجوانی فوت شد",photo:"photo/parviz_soufiAlam.jpg"},
                                                          {name:"حاجی ابراهیم",key:"ebrahimSoofiAlam",
                                                            photo:"photo/Haj_ebrahim_soufiAlam.jpg",
                                                            children:[
                                                              {name:"همسر اول پری",gender:"f",family:"زیرکاری",note:"فرزند محمد کمالی",
                                                                children:[
                                                                  {name:"اسماعیل"},
                                                                  {name:"محمدرضا"},
                                                                  {name:"حمزه"},
                                                                  {name:"خدیجه",gender:"f"},
                                                                ]
                                                              },
                                                              {name:"همسر دوم در بی بی",key:"mahnazMohammadKarim",gender:"f",note:"به اسم مهناز شناخته میشه | فرزند محمد کریم",
                                                                children:[
                                                                  {name:"پرویز"},
                                                                  {name:"محمد عادل"},
                                                                  {name:"پریا",gender:"f"},
                                                                  {name:"بی بی عایشه",gender:"f"},
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {name:"زلیخا",key:"zoleykhaSofiAlam",gender:"f",deceased:true,
                                                            children:[
                                                              {name:"همسر اول حاج حسین",key:"hajhosseinNaser",deceased:true,
                                                                photo:"photo/haj_Hossein_Naser.jpg",
                                                                children:[
                                                                  {name:"حلیمه",gender:"f",
                                                                    spouse:{name:"نوری",note:"از قوم ترکمن"},
                                                                    children:[
                                                                      {name:"طاهر",},
                                                                      {name:"زهره",gender:"f",},
                                                                      {name:"نسرین",gender:"f",},
                                                                      {name:"نسترن",gender:"f",},
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              {name:"همسر دوم طاغان",family:"بنده",note:"از قوم ترکمن",
                                                                children:[
                                                                  {name:"سعید",},
                                                                  {name:"محمد نبی",},
                                                                  {name:"فرهاد",},
                                                                  {name:"حسن",},
                                                                  {name:"صوفی",},
                                                                  {name:"مژگان",gender:"f",},
                                                                ]
                                                              },
                                                              {name:"همسر سوم حاج حسین",family:"زیرکاری",
                                                                children:[
                                                                  {name:"رضا",},
                                                                ]
                                                              }
                                                            ]

                                                          },
                                                          {name:"صدیقه",gender:"f",
                                                            children:[
                                                              {name:"همسر اول نظر",note:"فرزند دادخدا",
                                                                children:[
                                                                  {name:"غلامرضا",},
                                                                  {name:"محمدزضا",},
                                                                  {name:"فرشید",},
                                                                ]
                                                              },
                                                              {name:"همسر دوم شهباز",family:"رضایی",note:"فرزند غیبی از شجره نامه نوشیروان زهی",
                                                                children:[
                                                                  {name:"مولوی یوسف",family:"رضایی",place:"روستا ارزنچه علیا",
                                                                    spouse:{name:"آمنه",note:"فرزند امیر",gender:"f",family:"رضایی",place:"روستا ارزنچه علیا"},
                                                                    children:[
                                                                      {name:"محمد",family:"رضایی",place:"روستا ارزنچه علیا"},
                                                                      {name:"ستایش",gender:"f",family:"رضایی",place:"روستا ارزنچه علیا"},
                                                                      {name:"فاطمه",gender:"f",family:"رضایی",place:"روستا ارزنچه علیا"},
                                                                    ]
                                                                  },
                                                                  {name:"سفیه",gender:"f",family:"رضایی",place:"روستا ارزنچه علیا",
                                                                    spouse:{name:"حسین",note:"فرزند نورمحمد غیبی",family:"رضایی",place:"روستا ارزنچه علیا"},
                                                                    children:[
                                                                      {name:"یاسر",family:"رضایی",place:"روستا ارزنچه علیا"},
                                                                      {name:"آسیه",gender:"f",family:"رضایی",place:"روستا ارزنچه علیا"},
                                                                      {name:"بارانه",gender:"f",family:"رضایی",place:"روستا ارزنچه علیا"},
                                                                    ]
                                                                  },
                                                                  {name:"سمیه",gender:"f",family:"رضایی",
                                                                    spouse:{place:"تهران"},
                                                                    children:[
                                                                      {name:"برهان",place:"تهران"},
                                                                      {name:"پرهام",place:"تهران"},
                                                                    ]
                                                                  },
                                                                  
                                                                ]
                                                              },
                                                            ]
                                                          },
                                                          {name:"شایسته",gender:"f",
                                                            spouse:{name:"نبی",family:"ناروئی",note:"فرزند جما"},
                                                            children:[
                                                              {name:"مسعود",family:"ناروئی"},
                                                              {name:"میثم",family:"ناروئی"},
                                                              {name:"پرویز",family:"ناروئی"},
                                                              {name:"منیره",gender:"f",family:"ناروئی"},
                                                              {name:"منیژه",gender:"f",family:"ناروئی"},
                                                              {name:"الناز",gender:"f",family:"ناروئی"},
                                                              {name:"فاطمه",gender:"f",family:"ناروئی"},
                                                            ]
                                                          },
                                                          {name:"قربان گل",gender:"f",place:"تهران",
                                                            spouse:{name:"حاجی محمود",family:"ناروئی",note:"فرزند خلیفه دادخدا | نظامی بازنشسته",place:"تهران",},
                                                            children:[
                                                              {name:"مصطفی",note:"",family:"ناروئی",place:"دبی"},
                                                              {name:"احمد",family:"ناروئی",place:"تهران"},
                                                              {name:"مرضیه",gender:"f",family:"ناروئی",place:"نیویورک"},
                                                            ]
                                                          },
                                                          {name:"مریم",gender:"f",
                                                            spouse:{name:"کلندر (امیر)",family:"ناروئی",note:"فرزند عبدالحکیم"},
                                                            children:[
                                                              {name:"عرفان"},
                                                              {name:"ندا",gender:"f"},
                                                              {name:"شیدا",gender:"f"},
                                                            ]
                                                          },
                                                          
                                                        ]
                                                      },
                                                      {name:"علی خان",deceased:true,note:"در جوانی فوت شده"},
                                                      {name:"محمد کریم",key:"mohammadkarimKarimIshan",deceased:true,place:"مازندران",
                                                        photo:"photo/mohammadKarim_karim.jpg",
                                                        spouse:{name:"صنوبر",key:"sanobarShahrbano",gender:"f",deceased:true,place:"مازندران",},
                                                        children:[
                                                          {name:"یوسف",
                                                            spouse:{name:"ماه بی بی",family:"براهوئی",gender:"f",},
                                                            children:[
                                                              {name:"رضا"},
                                                              {name:"بهروز"},
                                                              {name:"مریم",gender:"f"},
                                                            ]
                                                          },
                                                          {name:"خدابخش",key:"khodabakhshmohammadkarim",deceased:true,place:"مشهد",
                                                            spouse:{name:"اشرف",key:"ashrafkarim",family:"ابراهیمی",gender:"f",place:"مشهد"},
                                                            children:[
                                                              {name:"امید",place:"مشهد",},
                                                              {name:"نوید",place:"مشهد",},
                                                              {name:"فاطمه",key:"fatemeKhodabakhsh",gender:"f",place:"مشهد",
                                                                spouse:{name:"سامان",key:"samanAbdollah",family:"رخشانی فر",place:"مشهد"}
                                                              },
                                                              {name:"زهرا",gender:"f",place:"مشهد"},
                                                            ]
                                                          },
                                                          {name:"صفر",place:"مشهد",
                                                            spouse:{name:"پری",family:"عیدوزهی",gender:"f",note:"فرزند حسن"},
                                                            children:[
                                                              {name:"محمد"},
                                                            ]
                                                          },
                                                          {name:"ناز بی بی",gender:"f",
                                                            spouse:{name:"غلام سرور",family:"رخشانی",},
                                                            children:[
                                                              {name:"کادر"},
                                                              {name:"غلام سخی"},
                                                              {name:"احمد"},
                                                            ]
                                                          },
                                                          {name:"در بی بی",key:"mahnazMohammadKarim",gender:"f",note:"به اسم مهناز شناخته میشه",
                                                            children:[
                                                              {name:"همسر اول مجید",family:"عیدوزهی",
                                                                children:[
                                                                  {name:"فاطمه",family:"عیدوزهی",gender:"f"},
                                                                ],
                                                              },
                                                              {name:"همسر دوم حاجی ابراهیم",key:"ebrahimSoofiAlam",
                                                                photo:"photo/Haj_ebrahim_soufiAlam.jpg",
                                                                children:[
                                                                  {name:"پرویز"},
                                                                  {name:"محمد عادل"},
                                                                  {name:"پریا",gender:"f"},
                                                                  {name:"بی بی عایشه",gender:"f"},
                                                                ]
                                                              },
                                                            ]
                                                          },
                                                          {name:"بانو",gender:"f"},
                                                          {name:"ماه بی بی",key:"mahbibiMohammadKarim",gender:"f",
                                                            spouse:{name:"شیخ مراد",key:"shikhMoradZarbibi",family:"رخشانی"},
                                                            children:[
                                                              {name:"مجید",family:"رخشانی"},
                                                              {name:"رضا",family:"رخشانی"},
                                                            ]
                                                          },
                                                          {name:"معصومه",key:"mahsomeMohammadKarim",family:"براهویی",gender:"f",
                                                            children:[
                                                              {name:"همسر اول موسی",
                                                                children:[
                                                                  {name:"محمد حسین"},
                                                                  {name:"متین",},
                                                                ]
                                                              },
                                                              {name:"عبدالعزیز",key:"abdolazizGoolmohammad",family:"نعیمی فر",
                                                                children:
                                                                [                                                                
                                                                  {name:"عبدالصمد"},
                                                                  {name:"سعید",},
                                                                  {name:"احمد"},
                                                                  {name:"محمود",},
                                                                  {name:"مسعود",},
                                                                  {name:"وحید",},
                                                                  {name:"لطیف",},
                                                                  {name:"مهناز",gender:"f",},
                                                                  {name:"محبوبه",gender:"f",},
                                                                  {name:"مهلا",gender:"f",},
                                                                ]
                                                              },
                                                            ]

                                                          },

                                                        ]
                                                      },
                                                      {name:"لال بی بی",key:"lalbibiKarim",gender:"f",deceased:true,
                                                        children:[
                                                          {name:"همسر اول حسن خان",deceased:true,
                                                            children:[
                                                              {name:"نوری",gender:"f",deceased:true,
                                                                spouse:{},
                                                                children:[
                                                                  {name:"حسن"},
                                                                  {name:"حسین"},
                                                                  {name:"عزیز"},
                                                                  {name:"زرملک",gender:"f"},

                                                                ]
                                                              },
                                                              {name:"بی بی جان",gender:"f",deceased:true,
                                                                children:[
                                                                  {name:"همسر اول خان گل",family:"جمالزهی",deceased:true,
                                                                    children:[
                                                                      {name:"دربیک",family:"جمالزهی",gender:"f",deceased:true,
                                                                        spouse:{name:"پسند",deceased:true},
                                                                        children:[
                                                                          {name:"حاجی محمد",key:"hajiMohammadDorbik",
                                                                            spouse:{name:"مدینه",gender:"f",key:"madineHajHossein",},
                                                                            children:[
                                                                              {name:"امیر",},
                                                                              {name:"محمد صالح",},
                                                                              {name:"صبا",gender:"f",},
                                                                            ]
                                                                          },
                                                                          {name:"ابراهیم",
                                                                            spouse:{name:"مریم",gender:"f",note:"فرزند حسن ناروئی",},
                                                                            children:[
                                                                              {name:"عصامه",}
                                                                            ]
                                                                          },
                                                                          {name:"نازپری",gender:"f",
                                                                            spouse:{name:"عبدالله",family:"نارویی",note:"فرزند جما ناروئی"},
                                                                            children:[
                                                                              {name:"افسانه",gender:"f"}
                                                                            ]
                                                                          },
                                                                          {name:"زینب",gender:"f",
                                                                            spouse:{name:"رحمت الله",family:"ریگی",note:"فرزند سلطان محمد ریگی"},
                                                                            children:[
                                                                              {name:"سلطان محمد",family:"ریگی"}
                                                                            ]
                                                                          },
                                                                          {name:"فریبا",gender:"f",key:"faribaDorbik",
                                                                            spouse:{name:"منصور",key:"mansourHajHossein",note:"فرزند حاج حسین"},
                                                                            
                                                                            children:[
                                                                              {name:"یسنا",gender:"f",},
                                                                              {name:"آرزو",gender:"f",},
                                                                            ]
                                                                          },
                                                                          {name:"فاطمه",gender:"f",
                                                                            spouse:{name:"حسین",family:"براهوئی",},
                                                                            children:[
                                                                              {name:"طاها",family:"براهوئی"},
                                                                              {name:"پارسا",family:"براهوئی"}
                                                                            ]
                                                                          },
                                                                          {name:"لیلا",gender:"f",
                                                                            spouse:{name:"غلام",family:"سارانی",note:"فرزند علی خان سارانی",},
                                                                            children:[
                                                                              {name:"علیرضا",family:"سارانی"},
                                                                              {name:"امیررضا",family:"سارانی"}
                                                                            ]
                                                                          },
                                                                          {name:"مینا",gender:"f",
                                                                            spouse:{name:"علیرضا",},
                                                                            children:[
                                                                              {name:"آرزو",gender:"f"},
                                                                            ]
                                                                          },
                                                                        ]
                                                                      },
                                                                      {name:"نور بی بی",family:"جمالزهی",gender:"f",deceased:true,
                                                                        spouse:{name:"حاج قربان",note:"از قوم ترکمن"},
                                                                        children:[
                                                                          {name:"حاج جلیل"},
                                                                          {name:"آیجان"},
                                                                        ]
                                                                      },
                                                                    ]
                                                                  },
                                                                  {name:"همسر دوم نوروز",family:"گرگیج",note:"فرزند زرین",deceased:true,
                                                                    children:[
                                                                      {name:"عید محمد",family:"گرگیج",},
                                                                      {name:"محمد",family:"گرگیج",},
                                                                      {name:"سعیدی",family:"گرگیج",},
                                                                      {name:"حسن",family:"گرگیج"}
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {name:"همسر دوم ناصر",key:"naserGolmohammad",deceased:true,
                                                            children:[
                                                              {name:"کفتر",gender:"f",deceased:true,
                                                                spouse:{name:"حاجی خدابخش",deceased:true,},
                                                                children:[
                                                                  {name:"در محمد"},
                                                                  {name:"گل محمد"},
                                                                  {name:"غلام"},
                                                                  {name:"محمد",},
                                                                  {name:"فاطمه",gender:"f",},
                                                                  {name:"عاطفه",gender:"f",},
                                                                ]
                                                              },
                                                              {name:"حاج حسین",key:"hajhosseinNaser",deceased:true,
                                                                photo:"photo/haj_Hossein_Naser.jpg",
                                                                children:[
                                                                  {name:"همسر اول گل پری",family:"براهوئی",gender:"f",deceased:true,note:"فرزند سلطان محمد",
                                                                    children:[
                                                                      {name:"عبدالله",key:"abdollahhossein",family:"رخشانی فر",place:"سمنان",
                                                                        spouse:{name:"فاطمه",key:"fatemekarim",family:"ابراهیمی",gender:"f",place:"سمنان"},
                                                                        children:[
                                                                          {name:"سامان",key:"samanAbdollah",family:"رخشانی فر",place:"مشهد",
                                                                            spouse:{name:"فاطمه",key:"fatemeKhodabakhsh",gender:"f",place:"مشهد",}
                                                                          },
                                                                          {name:"ساسان",family:"رخشانی فر",place:"مشهد",},
                                                                          {name:"احسان",family:"رخشانی فر",place:"مشهد",},
                                                                          {name:"سمیه",gender:"f",family:"رخشانی فر",place:"مشهد",},
                                                                          {name:"سهیلا",gender:"f",family:"رخشانی فر",place:"سمنان",
                                                                            spouse:{name:"محمد",place:"سمنان"},
                                                                            children:[]
                                                                          },
                                                                        ]
                                                                      },
                                                                    ]
                                                                  },
                                                                  {name:"همسر دوم زلیخا",key:"zoleykhaSofiAlam",gender:"f",deceased:true,
                                                                    children:[
                                                                      {name:"حلیمه",gender:"f",
                                                                        spouse:{name:"نوری",note:"از قوم ترکمن"},
                                                                        children:[
                                                                          {name:"طاهر",},
                                                                          {name:"زهره",gender:"f",},
                                                                          {name:"نسرین",gender:"f",},
                                                                          {name:"نسترن",gender:"f",},
                                                                        ]
                                                                      }
                                                                    ]
                                                                  },
                                                                  {name:"همسر سوم نازپری",gender:"f",deceased:true,note:"فرزند وکیل(میرزا)",
                                                                    children:[
                                                                      {name:"ناصر",
                                                                        spouse:{},
                                                                        children:[
                                                                          {name:"امیر علی",},
                                                                      
                                                                        ]
                                                                      },
                                                                      {name:"منصور",key:"mansourHajHossein",
                                                                        spouse:{name:"فریبا",gender:"f",key:"faribaDorbik",},
                                                                        children:[
                                                                          {name:"یسنا",gender:"f",},
                                                                          {name:"آرزو",gender:"f",},
                                                                        ]
                                                                      },
                                                                      {name:"رضا",
                                                                        spouse:{gender:"f"},
                                                                        children:[
                                                                          {name:"شایان",},
                                                                          {name:"سلین",gender:"f",},
                                                                      
                                                                        ]
                                                                      },
                                                                      {name:"مدینه",gender:"f",key:"madineHajHossein",
                                                                        spouse:{name:"حاجی محمد",key:"hajiMohammadDorbik"},
                                                                        children:[
                                                                          {name:"امیر",},
                                                                          {name:"محمد صالح",},
                                                                          {name:"صبا",gender:"f",},
                                                                        ]
                                                                      },
                                                                      {name:"سکینه",gender:"f",
                                                                        spouse:{},
                                                                        children:[
                                                                          {name:"زهرا",gender:"f",},
                                                                      
                                                                        ]
                                                                      },
                                                                      {name:"سودابه",gender:"f",},
                                                                      {name:"سمیرا",gender:"f",},
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                            ]                                                          
                                                          },
                                                        ]
                                                      },
                                                      {name:"ماه گل",gender:"f",deceased:true,
                                                        spouse:{name:"خلیفه عبدالله",family:"نقشبندی",deceased:true},
                                                        children:[
                                                          {name:"غلام غوس",family:"نقشبندی",family:"نقشبندی",deceased:true,},
                                                          {name:"شاه بی بی",family:"نقشبندی",key:"shahbibiKhalife",deceased:true,
                                                            spouse:{name:"کریم",family:"ابراهیمی",key:"karimShahrBano",deceased:true,photo:"photo/karim_goolmohammad.jpg",},

                                                            children:[
                                                              {name:"اشرف",key:"ashrafkarim",family:"ابراهیمی",gender:"f",
                                                                spouse:{name:"خدابخش",key:"khodabakhshmohammadkarim",deceased:true,},
                                                                children:[
                                                                  {name:"امید",place:"مشهد",},
                                                                  {name:"نوید",place:"مشهد",},
                                                                  {name:"فاطمه",key:"fatemeKhodabakhsh",gender:"f",place:"مشهد",
                                                                    spouse:{name:"سامان",key:"samanAbdollah",family:"رخشانی فر",place:"مشهد"}
                                                                  },
                                                                  {name:"زهرا",gender:"f",place:"مشهد"},
                                                                ]
                                                              },
                                                              {name:"فاطمه",key:"fatemekarim",family:"ابراهیمی",gender:"f",
                                                                spouse:{name:"عبدالله",key:"abdollahhossein",family:"رخشانی فر",},
                                                                children:[
                                                                  {name:"سامان",family:"رخشانی فر",},
                                                                  {name:"ساسان",family:"رخشانی فر",

                                                                  },
                                                                  {name:"احسان",family:"رخشانی فر",},
                                                                  {name:"سمیه",family:"رخشانی فر",},
                                                                  {name:"سهیلا",family:"رخشانی فر",
                                                                    spouse:{name:"محمد"},
                                                                    children:[]
                                                                  },
                                                                ]
                                                              },
                                                              {name:"ماه پری",key:"mahparikarim",gender:"f",family:"ابراهیمی",place:"مشهد",
                                                                spouse:{name:"محمد",key:"mohammadmirza",family:"مرادی",place:"مشهد",},
                                                                children:[
                                                                  {name:"عمران",family:"مرادی",place:"مشهد"},
                                                                  {name:"آرزو",key:"arezomohammad",gender:"f",family:"مرادی",place:"آزاد شهر",
                                                                    spouse:{name:"میثم",key:"meysamAbdollah",family:"کریمی نیا",place:"آزاد شهر"},
                                                                  },
                                                                  {name:"هانیه",gender:"f",family:"مرادی",place:"مشهد"},
                                                              
                                                                ]
                                                              },
                                                              {name:"زینب",key:"zeynabkarim",gender:"f",family:"ابراهیمی",place:"مشهد",
                                                                spouse:{name:"رحیم",key:"rahimmirza",family:"مرادی",place:"مشهد",},
                                                                children:[
                                                                  {name:"عرفان",family:"مرادی",place:"مشهد",},
                                                                  {name:"دینا",gender:"f",family:"مرادی",place:"مشهد",},
                                                                ]
                                                              },
                                                            ]
                                                          },
                                                         ]
                                                      },
                                                      {name:"خان بی بی",gender:"f",deceased:true,
                                                        spouse:{name:"غیاثا",deceased:true},
                                                        children:[
                                                          {name:"حاج نورالله",deceased:true,
                                                            spouse:{name:"ماه جان",family:"ملکی",gender:"f",deceased:true},
                                                            children:[
                                                              {name:"دادخدا",},
                                                              {name:"محمد",note:"معروف به خان طلا"},
                                                              {name:"نجیب الله",},
                                                              {name:"عزیزالله",},
                                                              {name:"خیرالله",deceased:true,note:"شهید جنگ تحمیلی ایران و عراق"},
                                                              {name:"فاطمه",gender:"f"},
                                                            ]
                                                          },
                                                          {name:"امان الله",deceased:true,
                                                            spouse:{name:"ماه جان",family:"براهوئی",gender:"f",deceased:true,},
                                                            children:[
                                                              {name:"غلام حیدر",},
                                                              {name:"قاسم",},
                                                              {name:"محمد",},
                                                              {name:"مرتضی",},
                                                              {name:"غلام",},
                                                              {name:"زهرا",gender:"f"},
                                                              {name:"گلثوم",gender:"f"},
                                                              {name:"معصومه",gender:"f"},
                                                            ]
                                                          },
                                                          {name:"حبیب الله",deceased:true,
                                                            spouse:{name:"گل شاه",family:"براهوئی",gender:"f",deceased:true,},
                                                            children:[
                                                              {name:"داوود",},
                                                              {name:"محمود",},
                                                              {name:"حسین",},
                                                              {name:"محمد",},
                                                              {name:"سعید",},
                                                              {name:"زلیخا",gender:"f"},
                                                              {name:"نازی",gender:"f"},
                                                              {name:"شمسی",gender:"f"},
                                                              {name:"مرضیه",gender:"f"},
                                                              {name:"زینب",gender:"f"},
                                                              {name:"افسانه",gender:"f"},
                                                            ]
                                                          },

                                                          {name:"گلشاه",deceased:true,
                                                            spouse:{name:"میاداد",gender:"f",deceased:true,},
                                                            children:[
                                                              {name:"خالق"},
                                                              {name:"حسن"},
                                                              {name:"ناصر"},
                                                              {name:"لیلا",gender:"f"},
                                                              {name:"گلی",gender:"f"},
                                                              {name:"فاطمه",gender:"f"},
                                                              {name:"زهرا",gender:"f"},
                                                            ]
                                                          },
                                                          {name:"عیسی گل",deceased:true,note:"در جوانی کشته شده"},
                                                          
                                                          {name:"حورک",gender:"f",deceased:true,
                                                            spouse:{name:"غلام قوس",deceased:true,},
                                                            children:[
                                                              {name:"اسماعیل",},
                                                              {name:"سید محمد"},
                                                              {name:"گل احمد"},
                                                              {name:"احد"},
                                                              {name:"بلبل"},
                                                              {name:"گل بی بی",gender:"f"},
                                                            ]
                                                          },
                                                          {name:"بختاور",gender:"f",deceased:true,
                                                            spouse:{name:"آقا محمد",deceased:true,},
                                                            children:[
                                                              {name:"قربان"},
                                                              {name:"عیسی"},
                                                              {name:"محمد رضا"},
                                                              {name:"فاطمه",gender:"f"},
                                                              {name:"مریم",gender:"f"},
                                                              {name:"زهرا",gender:"f"},
                                                            ]
                                                          },
                                                        ]
                                                      },
                                                      {name:"زر بی بی",gender:"f",deceased:true,
                                                        spouse:{name:"جما",family:"رخشانی",deceased:true,},
                                                        children:[
                                                         {name:"شیخ مراد",key:"shikhMoradZarbibi",family:"رخشانی",
                                                            spouse:{name:"ماه بی بی",key:"mahbibiMohammadKarim",gender:"f",},
                                                            children:[
                                                              {name:"مجید",family:"رخشانی"},
                                                              {name:"رضا",family:"رخشانی"},
                                                            ]
                                                          },
                                                          {name:"گل بی بی",gender:"f",family:"رخشانی",
                                                            spouse:{name:"نوری"},
                                                            children:[
                                                              {name:"حسن"},
                                                              {name:"حسین"},
                                                              {name:"عزیز"},
                                                              {name:"زرملک",gender:"f"},
                                                              {name:"حلیمه",gender:"f"},
                                                              {name:"شهناز",gender:"f"},
                                                            ]
                                                          },
                                                          {name:"خان بی بی",gender:"f",family:"رخشانی",
                                                            spouse:{name:"خداداد",family:"براهویی"},
                                                            children:[
                                                              {name:"حبیب",family:"براهویی"},
                                                              {name:"عید محمد",family:"براهویی"},
                                                              {name:"احمد",family:"براهویی"},
                                                              {name:"فاطمه",gender:"f",family:"براهویی"},
                                                              {name:"مریم",gender:"f",family:"براهویی"},
                                                            ]
                                                          },

                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  
                                                ]},
                                                
                                            ]},
                                        ]},
                                  ]},

                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
        }
      ]
      }
    ]
    },
  ]
};
