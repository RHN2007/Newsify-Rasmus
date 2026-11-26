# Projektdokumentation

**Navn:** Rasmus Hulbæk Nielsen

**Hold:** WU16

**Uddannelse:** Webudvikler

**Uddannelsessted:** Roskilde Tekniske Skole

[Link til min applikaton](http://example.com/)


## Teknologier

-   HTML
-   CSS
-   JavaScript
-	React Framework

---



### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

Jeg har brugt en god del forskellige node packages til at få det hele til at hænge sammen.

1. browserrouter: brugt til at gøre det nemmere at føre brugeren hen til de forskellige sider som jeg har som f.eks home > settings osv.
2. tanstack query: brugt til at håndtere vores fetches og sikre os for at vi ikke fetcher 1000 gange per sekund og bliver ratelimited eller blokeret af newyork times.
3. sass: til at lave CSS ved brug af sass (scss)
4. react: selve frameworked af hele siden til at få det hele til at spille sammen.

---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

valgt at splitte css'en op i flere filer, f.eks home.jsx og home.scss så koden er adskilt fra hinanden, gør det nemmere at håndtere i min mening og mere overskueligt at søge igennem.

bruge en reusable fetch hook så jeg ikke skulle skrive det samme kode om og om igen.

lave en pages mappe hvor alle de forskellige sidder er i (gør det mere overskueligt og samlet)
---
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Jeg synes personligt umiddelbart det gik godt, jeg fik klarede de fleste af opgaverne som skulle klares og style mæssigt synes jeg selv jeg har ramt relativt godt til figma designet. Der kunne godt være brugt lidt mere tid på de forskellige siders endelige design som de fik, nogen små design fejl her og der men umiddelbart noget som kan fikses med lidt tid.

---
### En beskrivelse af særlige punkter til bedømmelse

(er der en særlig detalje som du synes din underviser bør lægge mærke til når dit projekt evalueres)

Du kan vise kode i markdown på følgende måder: 
```js
function myFunction() {
	
}
```

```css
.my__css-rule {
	property: value;
}
```

