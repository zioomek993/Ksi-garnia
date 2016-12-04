# README #


```
#!js

npm install

grunt

grunt watch
```

## Struktura katalogowa ##
### Podstawowa ###

* src/lib - wszyskie zewnętrzene bilblioteki (np angular, jquery...)
* src/scss - pliki SASS
* src/ts - wszyskie pliki TypeScript

### Nasze pliki Angulara (.ts) ###
 
 

 /controlers - wszyskie controlery

 /services - wszyskie serwisy

 /models - modele klas( device, lightDevice, room)

 /models/devices - model urzadzenia oraz modele które po nim dziedziczą
 

### Dodawanie nowych plików ###

Jeżeli dodaliśmy jakieś plik, trzeba dodać też linki do nich w kilku różnych miejscach

Jeżeli dodajemy plik .ts należy dodać go w:

* src/index.html
* src/ts/common.d.ts
* src/tasks/concat.js 
```
#!js

{ js: 
  { src: 
     [, "adres-nowego_pliku.js"]
  } 
}
```


Jeżeli chcemy dodać nową bibliotekę poprzez bower:

* "bower install nazwa_paczki --save"
* dopisujemy do pliku "tasks/copy.js" 
```
#!js

{ external: 
  { files: 
    [.., nowa_paczka] 
  }
}
```








 
 
 
# Ważne linki#
[Api Cloud](https://bitbucket.org/investcom/wv_rgb/wiki/API%20Cloud)

Testa asldfjsadlf jkasl;f kjas;lfkj asd;lf
ads
fdsaf
sdaf
adsfsa
dfasd
fads
f