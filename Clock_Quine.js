a=/*_________________________________________Clock__Quine_________________________________________*/[
"size=a.length/4;b=[];Array.from(a).f",/*                    */"orEach(c=>{;b.push(c.replace(/(\"|\\",
"\\)/g,'\\\\$1'))});e=[];for(i=",/*                                */"0;i<b.length;i+=2){e.push(' '.",
"repeat(size*4))};m=new Da",/*                                          */"te().getMinutes()*Math.PI",
"/30;h=new Date().getHo",/*                                                */"urs()*Math.PI/6+m/12;f",
"or(i=0;i<size*0.6;i",/*                                                      */"++){k=e[size-Math.r",
"ound(Math.cos(h)",/*                                                            */"*i)];e[size-Math",
".round(Math.co",/*                                                                */"s(h)*i)]=k.sub",
"str(0,Math.r",/*                                                                    */"ound(Math.si",
"n(h)*i*2+s",/*                                                                        */"ize*2))+'#",
"'+k.subst",/*                                                                          */"r(Math.ro",
"und(Mat",/*                                                                              */"h.sin(h",
")*i*2+",/*                                                                                */"size*2",
")+1)}",/*                                                                                  */";for(",
"i=0;",/*                                                                                    */"i<si",
"ze*",/*                                                                                      */"0.9",
";i+",/*                                                                                      */"+){",
"k=",/*                                                                                        */"e[",
"s",/*                                                                                          */"i",
"z",/*                                                                                          */"e",
"-",/*                                                                                          */"M",
"",/*                                                                                            */"",
"",/*                                                                                            */"",
"",/*                                                                                            */"",
"",/*                                                                                            */"",
"",/*                                                                                            */"",
"",/*                                                                                            */"",
"a",/*                                                                                          */"t",
"h",/*                                                                                          */".",
"r",/*                                                                                          */"o",
"un",/*                                                                                        */"d(",
"Mat",/*                                                                                      */"h.c",
"os(",/*                                                                                      */"m)*",
"i)];",/*                                                                                    */"e[si",
"ze-Ma",/*                                                                                  */"th.ro",
"und(Ma",/*                                                                                */"th.cos",
"(m)*i)]",/*                                                                              */"= k.sub",
"str(0,Mat",/*                                                                          */"h.round(M",
"ath.sin(m)",/*                                                                        */"*i*2+size*",
"2))+'#'+k.su",/*                                                                    */"bstr(Math.ro",
"und(Math.sin(m",/*                                                                */")*i*2+size*2)+",
"1)};d='a=/*'+'_'",/*                                                            */".repeat(41)+'Clo",
"ck__Quine'+'_'.repe",/*                                                      */"at(41)+'*/[\\n';for",
"(i=0;i<b.length;i+=2){",/*                                                */"d+='\"'+b[i]+'\",/*'+e",
"[i/2].substr(b[i].length,",/*                                          */"size*4-b[i+1].length-b[i]",
".length)+'*/\"'+b[i+1]+'\",\\n",/*                                */"'};console.log(d.slice(0,-2)+'",
"]\\neval(a.join(\\'\\'))//'+'-'.repe",/*                    */"at(70)+' '.repeat(5)+'by Yukkku')///"]
eval(a.join(''))//----------------------------------------------------------------------     by Yukkku
