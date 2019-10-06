/**
Thai alphabet
a javascript array
generated from gdrive Thai-English Dictionary

columns
	i = dbid obsolete
	u = unicode
	t = thai
	e = english transliteration
	ee = english translit for consonant at end of syllable
	r = refer, each sanskrit char refers to a primary consonant
	p = type of glyph
		v:vowel
		c:consonant
		t:tonemark
		d:digit
		s:special
		c:combo
		o:obsolete
		u:unknown
	m = class
		m:mid-class consonant
		h:high-class consonant
		l:low-class consonant
		s:short vowel
		o:long vowel
	a = additional classification
		s:sonorant
		k:sanskrit
		d:diacritic
	n = comment	
**/
voyc.alphabetData = [
{ i:6537, u:0x0e01, t:'ก',	e:'kg'	,r:''	,p:'c',m:'m',a:' ',  n:''            },
{ i:6538, u:0x0e02, t:'ข',	e:'k'	,r:''	,p:'c',m:'h',a:' ',  n:''            },
{ i:6539, u:0x0e03, t:'ฃ',	e:'s'	,r:''	,p:'o',m:' ',a:' ',  n:'obsolete'    },
{ i:6540, u:0x0e04, t:'ค',	e:'k'	,r:''	,p:'c',m:'l',a:' ',  n:''            },
{ i:6541, u:0x0e05, t:'ฅ',	e:''	,r:''	,p:'o',m:' ',a:' ',  n:'obsolete'    },
{ i:6542, u:0x0e06, t:'ฆ',	e:'k'	,r:'ค'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6543, u:0x0e07, t:'ง',	e:'ng'	,r:''	,p:'c',m:'l',a:'s',  n:''            },
{ i:6544, u:0x0e08, t:'จ',	e:'j'	,r:''	,p:'c',m:'m',a:' ',  n:''            },
{ i:6545, u:0x0e09, t:'ฉ',	e:'ch'	,r:''	,p:'c',m:'h',a:' ',  n:''            },
{ i:6546, u:0x0e0A, t:'ช',	e:'ch'	,r:''	,p:'c',m:'l',a:' ',  n:''            },
{ i:6547, u:0x0e0B, t:'ซ',	e:'s'	,r:''	,p:'c',m:'l',a:' ',  n:''            },
{ i:6548, u:0x0e0C, t:'ฌ',	e:'ch'	,r:'ช'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6549, u:0x0e0D, t:'ญ',	e:'y'	,r:'ย'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6550, u:0x0e0E, t:'ฎ',	e:'d'	,r:'ด'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6551, u:0x0e0F, t:'ฏ',	e:'dt'	,r:'ต'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6552, u:0x0e10, t:'ฐ',	e:'t'	,r:'ถ'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6553, u:0x0e11, t:'ฑ',	e:'t'	,r:'ท'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6554, u:0x0e12, t:'ฒ',	e:'t'	,r:'ท'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6555, u:0x0e13, t:'ณ',	e:'n'	,r:'น'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6556, u:0x0e14, t:'ด',	e:'d'	,r:''	,p:'c',m:'m',a:' ',  n:''            },
{ i:6557, u:0x0e15, t:'ต',	e:'dt'	,r:''	,p:'c',m:'m',a:' ',  n:''            },
{ i:6558, u:0x0e16, t:'ถ',	e:'t'	,r:''	,p:'c',m:'h',a:' ',  n:''            },
{ i:6559, u:0x0e17, t:'ท',	e:'t'	,r:''	,p:'c',m:'l',a:' ',  n:''            },
{ i:6560, u:0x0e18, t:'ธ',	e:'t'	,r:'ท'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6561, u:0x0e19, t:'น',	e:'n'	,r:''	,p:'c',m:'l',a:'s',  n:''            },
{ i:6562, u:0x0e1A, t:'บ',	e:'b'	,r:''	,p:'c',m:'m',a:' ',  n:''            },
{ i:6563, u:0x0e1B, t:'ป',	e:'bp'	,r:''	,p:'c',m:'m',a:' ',  n:''            },
{ i:6564, u:0x0e1C, t:'ผ',	e:'p'	,r:''	,p:'c',m:'h',a:' ',  n:''            },
{ i:6565, u:0x0e1D, t:'ฝ',	e:'f'	,r:''	,p:'c',m:'h',a:' ',  n:''            },
{ i:6566, u:0x0e1E, t:'พ',	e:'p'	,r:''	,p:'c',m:'l',a:' ',  n:''            },
{ i:6567, u:0x0e1F, t:'ฟ',	e:'f'	,r:''	,p:'c',m:'l',a:' ',  n:''            },
{ i:6568, u:0x0e20, t:'ภ',	e:'p'	,r:'พ'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6571, u:0x0e21, t:'ม',	e:'m'	,r:''	,p:'c',m:'l',a:'s',  n:''            },
{ i:6572, u:0x0e22, t:'ย',	e:'y'	,r:''	,p:'c',m:'l',a:'s',  n:''            },
{ i:6573, u:0x0e23, t:'ร',	e:'r'	,r:''	,p:'c',m:'l',a:'s',  n:''            },
{ i:6573, u:0x0e24, t:'ฤ',	e:'pri'	,r:''	,p:'b',m:' ',a:' ',  n:''            },
{ i:6574, u:0x0e25, t:'ล',	e:'l'	,r:''	,p:'c',m:'l',a:'s',  n:''            },
{ i:6575, u:0x0e26, t:'ฦ',	e:''	,r:''	,p:'u',m:' ',a:' ',  n:'unknown'     },
{ i:6576, u:0x0e27, t:'ว',	e:'w'	,r:''	,p:'c',m:'l',a:'s',  n:''            },
{ i:6577, u:0x0e28, t:'ศ',	e:'s'	,r:'ส'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6578, u:0x0e29, t:'ษ',	e:'s'	,r:'ส'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6579, u:0x0e2A, t:'ส',	e:'s'	,r:''	,p:'c',m:'h',a:' ',  n:''            },
{ i:6580, u:0x0e2B, t:'ห',	e:'h'	,r:''	,p:'c',m:'h',a:' ',  n:''            },
{ i:6581, u:0x0e2C, t:'ฬ',	e:'l'	,r:'ล'	,p:'c',m:' ',a:'k',  n:''            },
{ i:6582, u:0x0e2D, t:'อ',	e:'aw'	,r:''	,p:'c',m:'m',a:' ',  n:''            },
{ i:6583, u:0x0e2E, t:'ฮ',	e:'h'	,r:''	,p:'c',m:'l',a:' ',  n:''            },
{ i:6584, u:0x0e2F, t:'ฯ',	e:'.'	,r:''	,p:'s',m:' ',a:' ',  n:'abbreviation'},
{ i:6585, u:0x0e30, t:'ะ',	e:'a'	,r:''	,p:'v',m:'s',a:' ',  n:''            },
{ i:6586, u:0x0e31, t:'ั',	e:'a'	,r:''	,p:'v',m:'s',a:' ',  n:''            },
{ i:6587, u:0x0e32, t:'า',	e:'aa'	,r:''	,p:'v',m:'o',a:' ',  n:''            },
{ i:6588, u:0x0e33, t:'ำ',	e:'am'	,r:''	,p:'b',m:'o',a:'d',  n:''            },
{ i:6589, u:0x0e34, t:'ิ',	e:'i'	,r:''	,p:'v',m:'s',a:'d',  n:''            },
{ i:6590, u:0x0e35, t:'ี',	e:'ii'	,r:''	,p:'v',m:'o',a:'d',  n:''            },
{ i:6591, u:0x0e36, t:'ึ',	e:'ʉ'	,r:''	,p:'v',m:'s',a:'d',  n:''            },
{ i:6592, u:0x0e37, t:'ื',	e:'ʉʉ'	,r:''	,p:'v',m:'o',a:'d',  n:''            },
{ i:6593, u:0x0e38, t:'ุ',	e:'u'	,r:''	,p:'v',m:'s',a:'d',  n:''            },
{ i:6593, u:0x0e39, t:'ู',	e:'uu'	,r:''	,p:'v',m:'o',a:'d',  n:''            },
{ i:6594, u:0x0e3A, t:'ฺ',	e:''	,r:''	,p:'u',m:' ',a:'d',  n:'unknown'     },
{ i:6599, u:0x0e3F, t:'฿',	e:'baht',r:''	,p:'s',m:' ',a:' ',  n:'baht'        },
{ i:6600, u:0x0e40, t:'เ',	e:'e'	,r:''	,p:'v',m:'s',a:' ',  n:''            },
{ i:6601, u:0x0e41, t:'แ',	e:'ee'	,r:''	,p:'v',m:'o',a:' ',  n:''            },
{ i:6602, u:0x0e42, t:'โ',	e:'o'	,r:''	,p:'v',m:'o',a:' ',  n:''            },
{ i:6603, u:0x0e43, t:'ใ',	e:'ai'	,r:''	,p:'v',m:'o',a:' ',  n:''            },
{ i:6604, u:0x0e44, t:'ไ',	e:'ai'	,r:''	,p:'v',m:'o',a:' ',  n:''            },
{ i:6605, u:0x0e45, t:'ๅ',	e:''	,r:''	,p:'u',m:' ',a:' ',  n:'unknown'     },
{ i:6606, u:0x0e46, t:'ๆ',	e:'(rept)',r:''	,p:'s',m:' ',a:' ',  n:'repeat'      },
{ i:0000, u:0x0e47, t:'็',	e:'e'	,r:''	,p:'v',m:' ',a:'d',  n:''            },
{ i:0000, u:0x0e48, t:'่',	e:''	,r:''	,p:'t',m:' ',a:'d',  n:'tone 1'      },
{ i:0000, u:0x0e49, t:'้',	e:''	,r:''	,p:'t',m:' ',a:'d',  n:'tone 2'      },
{ i:0000, u:0x0e4A, t:'๊',	e:''	,r:''	,p:'t',m:' ',a:'d',  n:'tone 3'      },
{ i:0000, u:0x0e4B, t:'๋',	e:''	,r:''	,p:'t',m:' ',a:'d',  n:'tone 4'      },
{ i:6596, u:0x0e4C, t:'์',	e:'(slnt)',r:''	,p:'t',m:' ',a:'d',  n:'tone silent'            },
{ i:6597, u:0x0e4D, t:'ํ',	e:''	,r:''	,p:'u',m:' ',a:'d',  n:'unknown'     },
{ i:6598, u:0x0e4E, t:'๎',	e:''	,r:''	,p:'u',m:' ',a:'d',  n:'unknown'     },
{ i:6600, u:0x0e50, t:'๐',	e:'0'	,r:''	,p:'d',m:' ',a:' ',  n:''            },
{ i:6601, u:0x0e51, t:'๑',	e:'1'	,r:''	,p:'d',m:' ',a:' ',  n:''            },
{ i:6602, u:0x0e52, t:'๒',	e:'2'	,r:''	,p:'d',m:' ',a:' ',  n:''            },
{ i:6603, u:0x0e53, t:'๓',	e:'3'	,r:''	,p:'d',m:' ',a:' ',  n:''            },
{ i:6604, u:0x0e54, t:'๔',	e:'4'	,r:''	,p:'d',m:' ',a:' ',  n:''            },
{ i:6605, u:0x0e55, t:'๕',	e:'5'	,r:''	,p:'d',m:' ',a:' ',  n:''            },
{ i:6606, u:0x0e56, t:'๖',	e:'6'	,r:''	,p:'d',m:' ',a:' ',  n:''            },
{ i:0000, u:0x0e57, t:'๗',	e:'7'	,r:''	,p:'d',m:' ',a:' ',  n:''            },
{ i:0000, u:0x0e58, t:'๘',	e:'8'	,r:''	,p:'d',m:' ',a:' ',  n:''            },
{ i:0000, u:0x0e59, t:'๙',	e:'9'	,r:''	,p:'d',m:' ',a:' ',  n:''            },
{ i:0000, u:0x0e5A, t:'๚',	e:''	,r:''	,p:'u',m:' ',a:' ',  n:'unknown'     },
{ i:0000, u:0x0e5B, t:'๛',	e:''	,r:''	,p:'u',m:' ',a:' ',  n:'unknown'     },
{ i:0000, u:0x0020, t:' ',	e:' '	,r:' '	,p:'s',m:' ',a:' ',  n:'space'       },
//{ i:6536, u:0x0e00, t:'฀',	e:' '	,r:''	,p:' ',m:' ',a:' ',  n:'blank'       },
//{ i:6595, u:0x0e3B, t:'฻',	e:''	,r:''	,p:' ',m:' ',a:' ',  n:'blank'       },
//{ i:6596, u:0x0e3C, t:'฼',	e:''	,r:''	,p:' ',m:' ',a:' ',  n:'blank'       },
//{ i:6597, u:0x0e3D, t:'฽',	e:''	,r:''	,p:' ',m:' ',a:' ',  n:'blank'       },
//{ i:6598, u:0x0e3E, t:'฾',	e:''	,r:''	,p:' ',m:' ',a:' ',  n:'blank'       },
//{ i:6599, u:0x0e4F, t:'๏',	t:'' 	,p:'u',m:' ',a:' ',  n:'unknown'     },
];
