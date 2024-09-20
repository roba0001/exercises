"use strict";

beregnMoms(100, 25);

function beregnMoms(beloeb, moms) {
  console.log(
    `momsen ligger på ${moms}%, derfor er beløbet med moms: ${beloeb * (1 + moms / 100)}kr`
  );
}
